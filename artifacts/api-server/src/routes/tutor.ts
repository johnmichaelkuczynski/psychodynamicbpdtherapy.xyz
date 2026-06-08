import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db, lecturesTable } from "@workspace/db";
import { AskTutorBody, AskTutorResponse } from "@workspace/api-zod";
import { chatText, chatJson, FAST_MODEL } from "../lib/ai";

const router: IRouter = Router();

router.get("/tutor/suggestions/:lectureId", async (req, res): Promise<void> => {
  const lectureId = Number(req.params.lectureId);
  if (!Number.isFinite(lectureId)) {
    res.status(400).json({ error: "invalid lectureId" });
    return;
  }
  const [lecture] = await db
    .select()
    .from(lecturesTable)
    .where(eq(lecturesTable.id, lectureId));
  if (!lecture) {
    res.status(404).json({ error: "lecture not found" });
    return;
  }

  try {
    const out = await chatJson<{ questions: string[] }>(
      'You are a rigorous college ethics tutor writing study questions. Reply as strict JSON of the form {"questions": string[]} with NO other keys.',
      `From the lecture below, write 6 starter questions that make the student APPLY the lecture's ideas to a CONCRETE EXAMPLE. Every question must hang on a specific case and ask the student to reason about that case.\n\n` +
        `THE SINGLE MOST IMPORTANT RULE: every question must contain an explicit, concrete example — a named person, a particular act, or a specific situation (e.g. "Alex lies to win a scholarship", "a doctor breaks a promise to save a stranger", "someone feels grief after a loss"). The question must ask the student to analyze, judge, classify, or predict something about THAT example. Reuse the lecture's own examples when it has them; otherwise invent a vivid, specific one.\n\n` +
        `ABSOLUTELY FORBIDDEN — never produce any of these:\n` +
        `- Questions that ask for a definition ("What is X?", "What does X mean?", "Define X").\n` +
        `- Questions that ask to distinguish or compare concepts in the abstract ("How do X and Y differ?", "What is the difference between X and Y?", "How does X relate to Y?").\n` +
        `- Questions about terminology, labels, or what something is "called".\n` +
        `- Any question that could be answered without referring to a specific case.\n\n` +
        `If a question does not name a concrete example and ask the student to reason about it, REWRITE it until it does.\n\n` +
        `GOOD vs BAD:\n` +
        `- BAD: "What's the difference between calling an act right and calling it good?"\n` +
        `- GOOD: "A soldier falls on a grenade to save his squad — is his act good, right, both, or neither, and why?"\n` +
        `- BAD: "What makes a category normative rather than descriptive?"\n` +
        `- GOOD: "Someone calls Maria 'generous' for giving away her bonus — is that describing her or evaluating her, and how can you tell?"\n\n` +
        `Cover several different major ideas from the reading across the 6 questions. One clear sentence each (roughly 12–28 words), in the student's own voice, no compound double-questions. Use $...$ for any inline math.\n\n` +
        `Return exactly 6 questions.\n\nLECTURE TITLE: ${lecture.title}\n\nLECTURE BODY:\n"""\n${lecture.body}\n"""`,
      FAST_MODEL,
    );
    const questions = Array.isArray(out?.questions)
      ? out.questions.filter((q) => typeof q === "string" && q.trim().length > 0).slice(0, 8)
      : [];
    res.json({ questions });
  } catch {
    res.json({ questions: [] });
  }
});

router.post("/tutor/ask", async (req, res): Promise<void> => {
  const parsed = AskTutorBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const { message, selectedLectureText } = parsed.data;

  const sys =
    "You are an encouraging college ethics tutor. Explain step by step, use clear examples and thought experiments, and define key terms (e.g. normative, intrinsic, privative) when they come up. Keep replies short (3-6 sentences) unless the student asks for more detail. Never just give the answer — guide them.";
  const user = selectedLectureText
    ? `Context from the lecture the student is reading:\n"""\n${selectedLectureText}\n"""\n\nStudent question: ${message}`
    : message;

  let text = "";
  try {
    text = await chatText(sys, user);
  } catch {
    text =
      "I'm having trouble reaching the tutor service right now. Try again in a moment, and consider re-reading the relevant section of the lecture.";
  }
  res.json(AskTutorResponse.parse({ text, audioUrl: null }));
});

export default router;
