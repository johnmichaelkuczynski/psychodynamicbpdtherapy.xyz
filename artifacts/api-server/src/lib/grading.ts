import { chatJson } from "./ai";

function normalize(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[\u2212\u2010-\u2015]/g, "-")
    .replace(/[$,]/g, "")
    .replace(/[)(\[\]{}]/g, "")
    .replace(/\s*=\s*/g, "=");
}

function asNumber(s: string): number | null {
  const cleaned = s.replace(/[$,%\s]/g, "").replace(/[\u2212]/g, "-");
  if (/^-?\d+(\.\d+)?$/.test(cleaned)) return parseFloat(cleaned);
  const frac = cleaned.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
  if (frac) {
    const n = parseFloat(frac[1]!);
    const d = parseFloat(frac[2]!);
    if (d !== 0) return n / d;
  }
  return null;
}

export async function gradeAnswer(opts: {
  prompt: string;
  correctAnswer: string;
  userAnswer: string;
}): Promise<{ correct: boolean; explanation: string }> {
  const user = opts.userAnswer ?? "";
  const correct = opts.correctAnswer ?? "";

  if (normalize(user) === normalize(correct)) {
    return {
      correct: true,
      explanation: `Correct. ${correct}`,
    };
  }

  const u = asNumber(user);
  const c = asNumber(correct);
  if (u != null && c != null) {
    const tol = Math.max(0.01, Math.abs(c) * 0.01);
    if (Math.abs(u - c) <= tol) {
      return { correct: true, explanation: `Correct. The expected answer is ${correct}.` };
    }
  }

  if (!user.trim()) {
    return {
      correct: false,
      explanation: `No answer was provided.`,
    };
  }

  try {
    const out = await chatJson<{ correct: boolean; explanation: string }>(
      [
        "You grade short college ethics answers. Score ONLY whether the student supplied the content the QUESTION actually asks for, judged on substance alone.",
        "",
        "How to decide `correct`:",
        "- First work out what the question stem actually requires. The model answer often contains MORE than the question asks for; treat anything in the model answer that the stem did not demand as optional bonus, NOT a requirement.",
        "- Mark `correct` = true when the student correctly supplies what the question requires — even if they omit bonus material that is in the model answer, and even if they phrase it completely differently. If two answers do not differ in substance, they MUST get the same grade.",
        "- Mark `correct` = false only when the answer is substantively wrong, or genuinely fails to provide the content the question requires.",
        "",
        "NEVER lower the grade for any of these — they do not affect correctness at all:",
        "- Grammar, spelling, punctuation, or capitalization (ALL CAPS is completely fine).",
        "- Sentence fragments, notes, bullet points, shorthand, abbreviations, 'e.g.' examples, or otherwise incomplete sentences. Content expressed in fragments earns the same grade as content in full prose.",
        "- Not following formatting or length instructions (e.g. 'write 4-6 sentences'). Only correctness of content matters — never obedience to form or instructions.",
        "- Wording, structure, or examples that differ from the model answer while meaning the same thing.",
        "",
        "Keep `explanation` neutral, factual, and respectful — never snippy, sarcastic, or dismissive. 1-3 short sentences stating what a correct answer needed to contain.",
        "",
        'Output strict JSON {"correct": boolean, "explanation": string}.',
      ].join("\n"),
      JSON.stringify({
        question_asked: opts.prompt,
        reference_model_answer: correct,
        student_answer: user,
      }),
    );
    return {
      correct: !!out.correct,
      explanation: out.explanation || `The correct answer is ${correct}.`,
    };
  } catch {
    return {
      correct: false,
      explanation: `The correct answer is ${correct}.`,
    };
  }
}

// Rich, coaching-style feedback for PRACTICE assignments. Unlike gradeAnswer
// (which returns a terse 1-3 sentence verdict for graded work), this returns
// generous, structured feedback designed to help a student improve before they
// sit the real graded version. Practice is never penalized, so feedback leans
// encouraging and specific.
export async function gradePracticeEssay(opts: {
  prompt: string;
  correctAnswer: string;
  userAnswer: string;
}): Promise<{ correct: boolean; feedback: string }> {
  const user = (opts.userAnswer ?? "").trim();
  const correct = opts.correctAnswer ?? "";

  if (!user) {
    return {
      correct: false,
      feedback: `You left this one blank. Give it a real attempt — even a rough draft — and resubmit for feedback.\n\n**Model answer:** ${correct}`,
    };
  }

  try {
    const out = await chatJson<{
      correct: boolean;
      feedback: string;
    }>(
      [
        "You are a warm, rigorous college ethics tutor giving feedback on a PRACTICE answer (never penalized — the goal is to help the student improve before the real graded version).",
        "",
        "Decide `correct` on SUBSTANCE alone: first work out what the question actually asks for, then mark `correct` = true if the student correctly supplies what the question requires. The model answer often contains more than the question asks; treat that extra material as optional bonus, not a requirement. Accept paraphrases, different wording, different examples, and equivalent reasoning. If two answers do not differ in substance they get the same result.",
        "",
        "NEVER lower `correct` for grammar, spelling, capitalization (ALL CAPS is fine), sentence fragments, notes, bullet points, shorthand, abbreviations, incomplete sentences, or for not following formatting/length instructions. Only correctness of content matters — never form or obedience.",
        "",
        "Then write `feedback` as encouraging Markdown with these sections: **What you got right** (be specific, cite their wording), **What's missing or off** (only genuine gaps in the REQUIRED content — never nitpick form, grammar, or omitted bonus material), and **How to strengthen it** (1-2 concrete next steps). 4-8 sentences total, neutral and supportive in tone — never snippy. Weave in the core idea of the model answer so they can compare.",
        "",
        'Output strict JSON {"correct": boolean, "feedback": string}.',
      ].join("\n"),
      JSON.stringify({
        question_asked: opts.prompt,
        reference_model_answer: correct,
        student_answer: user,
      }),
    );
    return {
      correct: !!out.correct,
      feedback:
        out.feedback ||
        `Here's the model answer to compare against:\n\n${correct}`,
    };
  } catch {
    return {
      correct: false,
      feedback: `I couldn't reach the grader just now. Compare your answer against the model answer and try again:\n\n**Model answer:** ${correct}`,
    };
  }
}
