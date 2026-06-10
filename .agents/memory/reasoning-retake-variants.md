---
name: Reasoning diagnostic retake variants
description: How retakes of reasoning diagnostics get fresh-but-same-kind questions, and the invariants that must hold.
---

# Reasoning diagnostic retakes

EVERY take of a reasoning diagnostic — including the very first take and any
take after a course reset (attempts cleared) — generates fresh items of the SAME
KIND and persists them against that attempt (`diagnostic_items.attemptId =
<attempt>`), so every attempt owns its own item set. The seeded TEMPLATE items
(`diagnostic_items.attemptId IS NULL`) are NOT shown as a real take; they are
only the structural blueprint for generation, the assessment preview, and the
fallback if generation fails.

**Why not "first take uses template":** an earlier version only generated on
retake (gated on prior-attempt existence). After a reset wiped attempts, the next
take looked like a first take and served the identical template again. Never gate
freshness on prior-attempt existence — always generate per new attempt.

**Invariants a retake MUST preserve (the "same kind" contract):**
- Same instrument (critical vs ethical), same item count, same answer structure.
- Critical: 4-option MCQs, exactly one correct, and the per-position skillArea
  order must match the template exactly.
- Ethical: same dilemma structure — same consideration/stage multiset, same
  rankCount, same number of decision options.

**Why pin skillArea to the template position:** the LLM is asked to return a
skillArea per generated question but cannot be trusted to keep the order. Always
overwrite the generated skillArea with the template's expected skill for that
index (do NOT accept the model's value even if it's a valid skill), or the
retake silently reorders skill areas and breaks per-skill scoring.

**Scoring must use the attempt's own items, not the template.** Submit resolves
the in-progress attempt first, then loads items for THAT attempt
(`attemptId`), falling back to the template only when there is no attempt.
Resume (start without retake) returns the in-progress attempt's items so a
refresh mid-attempt shows the same questions.

**Never block submission:** variant generation falls back to template items on
any AI/validation failure.

**How to apply:** any change to generation must keep these invariants; the
client-facing item response intentionally omits `scoring` (the answer key), so
verify skill order / correctness via the submit metrics breakdown, not the GET.
