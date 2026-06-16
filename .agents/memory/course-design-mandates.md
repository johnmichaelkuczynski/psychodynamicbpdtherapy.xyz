---
name: Course design mandates (Data Detective)
description: Non-obvious user mandates about the AI course UX that look removable but are intentional and must be preserved.
---

# Course design mandates

These are explicit user requirements that a future agent might wrongly "clean up"
because they seem unwarranted for a plain-language, no-math course. They are intentional.

## Never write "no math" (or equivalents) anywhere in the product
No copy — landing page, lesson text, README/BLUEPRINT, marketing, video captions —
may ever state that the course requires/involves "no math" (or "math-free",
"no equations", etc.). Describe the course by what it IS (plain-language, no clinical
background needed), never by the absence of math.

**Why:** Permanent, emphatic user mandate. It conflicts with the separate mandate that
the math keyboard appear on every input — advertising "no math" while shipping a math
keyboard reads as contradictory.
**How to apply:** When reframing/rewriting any user-facing text, grep for "math" and
remove any "no math" phrasing. This rule outlives any single request.

## Math keyboard is mandatory everywhere
A symbol palette (`MathKeyboard`) must be present on EVERY freeform input — answer
inputs (practice, practice-assignments, real assignments) AND the AI tutor chat
boxes — even though the course subject is non-technical and "doesn't seem to warrant it."

**Why:** Direct user mandate ("MAKE SURE THE MATH KEYBOARD IS PRESENT, INCLUDING WITH
AI TUTOR, EVEN IF THE SUBJECT-MATTER DOES NOT SEEM TO WARRANT IT").
**How to apply:** Do not remove the keyboard from any input. Math-keyboard insertions
must count as `keystrokeCount` (not bulk-insert) in the keystroke
trace, or legitimate symbol use false-flags the AI-authorship detector.

## Questions must require operational reasoning, never recitation
ALL questions — homeworks, unit test, final, practice assignments, AND the adaptive
topic drill — must pose a specific concrete scenario and require a multi-sentence
reasoned answer. Never a one-word/single-term/"yes-no" answer, never "define X" or
"recite the abstract formulation from the text."

**Why:** Repeated, emphatic user mandate — answers must be "hard to share" and prove
operational understanding, not memorization. The adaptive drill previously generated
single-word concept-ID questions and was the one place that violated this.
**How to apply:** Any new question-generation prompt must forbid definitions/one-word
answers and demand a concrete case + reasoned answer. The semantic `gradeAnswer` grader
already handles reasoned answers, so longer answers are safe to grade.

## Diagnostic scenarios must carry real discriminating evidence — never pose agnosticism-only situations
The CCR/reasoning diagnostic must ONLY pose scenarios that have a genuinely reasonable,
defensible answer because the scenario CONTAINS concrete discriminating evidence pointing
one way. Do NOT even write a no-data / equal-fit scenario (rivals fit the facts equally
well, only parsimony/aesthetics to choose) — there, withholding judgment (skepticism) is
the CORRECT stance, so the course shouldn't test it. Parsimony/Ockham is NEVER proof and
never substitutes for evidence; a "parsimony" item is legitimate only when the simpler
model is the one the evidence ALREADY supports (rival adds unobserved causes with no
evidence). Prompts must be answerable by plain reasoning: never reference "the CCR
standard" or any named doctrine (the pre-course baseline student hasn't learned it).

**Why:** Emphatic, repeated user mandate — such items are "trick questions." This course
is about constructive commitment, but the user explicitly notes skepticism is sometimes
right (esp. with no data), so STAY AWAY from those situations rather than scoring them.
**How to apply:** Lives in `reasoning.ts` (CCR_STANDARD + generateCcrMcq/generateOpenItems
prompts) and the static bank `ccrReasoningContent.ts`. In a data-rich scenario the wrong
distractors are reckless overreach, passive give-up ("unknowable, change nothing"), and a
timid "you can't conclude anything" that ignores the evidence — that refusal is wrong ONLY
because the data genuinely decides, never as a trap against honest uncertainty.

## Typed (open) answers are graded leniently on substance, NEVER on length
The diagnostic instruments offer three pickable formats (mcq / hybrid / written).
For any typed/open answer, grading must credit a single correct core idea even if
stated very briefly. Length, grammar, spelling, and coverage are never penalized.

**Why:** Direct constraint — keep typing minimal and grade short answers on substance.
A deterministic `words >= N` fallback inside `gradeOpen` violated this (short-but-correct
answers were failed when the LLM grader was unavailable).
**How to apply:** The LLM grader prompt must say "never penalize length"; the
no-model fallback must credit any on-topic non-blank answer (test for content, e.g.
contains an alphanumeric char) — never a word/character count threshold.
