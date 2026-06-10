---
name: Reasoning diagnostic retake variants
description: How retakes of reasoning diagnostics get fresh-but-same-kind questions, and the invariants that must hold.
---

# Reasoning diagnostic retakes

First take of any reasoning diagnostic uses the seeded TEMPLATE items
(`diagnostic_items.attemptId IS NULL`). Each retake generates fresh items of the
SAME KIND and persists them against the attempt (`diagnostic_items.attemptId =
<attempt>`), so every attempt owns its own item set.

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
