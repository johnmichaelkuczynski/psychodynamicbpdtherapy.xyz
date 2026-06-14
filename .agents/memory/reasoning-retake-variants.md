---
name: Diagnostic retake variants
description: How retakes of diagnostics get fresh-but-same-kind questions, and the invariants that must hold.
---

# Diagnostic retakes

EVERY take of a diagnostic — including the very first take and any take after a
course reset (attempts cleared) — generates fresh items of the SAME KIND and
persists them against that attempt (`diagnostic_items.attemptId = <attempt>`), so
every attempt owns its own item set. The seeded TEMPLATE items
(`diagnostic_items.attemptId IS NULL`) are NOT shown as a real take; they are the
structural blueprint for generation, the assessment preview, and the fallback if
generation fails.

**Why not "first take uses template":** an earlier version only generated on
retake (gated on prior-attempt existence). After a reset wiped attempts, the next
take looked like a first take and served the identical template again. Never gate
freshness on prior-attempt existence — always generate per new attempt.

**Two instruments, two item types only.** Instruments are `subject` (AI
Knowledge) and `reasoning` (General Reasoning). Item/review `type` is only
`mcq | open` — the dilemma/rate-and-rank type was removed entirely. Each
instrument offers 3 formats (mcq / hybrid / written) × 3 lengths
(short/medium/long), across 4 phases (before/third1/third2/after = 8 base
assessments).

**Diagnostics NEVER affect the grade.** Coursework is 100% of the grade; the
gradebook surfaces diagnostics with weight 0 purely for display ("completed"
counts). Unlimited retakes, fresh questions each time.

**Invariants a retake MUST preserve (the "same kind" contract):**
- Same instrument, comparable item count per (format,length) via
  `itemComposition`, same answer structure (mcq = 4-option, exactly one correct;
  open = short free text).
- reasoning MCQs are skill-tagged; pin the per-position skill to the template
  position — the LLM cannot be trusted to keep skill order, so overwrite the
  model's skillArea with the template's expected skill for that index.

**Scoring uses the attempt's own items, not the template.** Submit resolves the
in-progress attempt first, then loads items for THAT attempt; resume returns the
in-progress attempt's items.

**Grade on actual correctness, not the stored answer key.** `judgeMcq()` makes
one batched LLM call at submit to pick the genuinely-correct option per item
(falls back to stored `correctIndex` on failure). Open answers are graded
LENIENTLY on substance, not length — a clear sentence or two earns credit. The
judged map must drive ALL THREE grading surfaces in lockstep — score summary
headline/metrics, the `review[]`, AND persisted `diagnostic_responses.is_correct`
— or analytics disagree with the results screen.

**Per-question review:** an UNANSWERED MCQ must report `isCorrect: null` (neutral
"No answer" badge), NOT `false`.

**Never block submission:** variant generation falls back to template items on
any AI/validation failure.

**Length scaling:** item counts scale per (instrument, format) via
`itemComposition`; Medium ≈ classic, Short fewer, Long more. The static fallback
must honor length too. `length` is read by the start route, stored on the
attempt, reused on resume, threaded into generation; default "medium" when absent.
