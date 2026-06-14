---
name: Diagnostic instrument enum vs. display label
description: The two diagnostic instrument enum values and the user-facing labels they must always map to.
---

The diagnostics subsystem has exactly TWO instrument kinds. The internal enum
(DB column, OpenAPI schema, orval-generated client/zod) uses short keys; the UI
must always render a friendly label, never the raw enum:

- `"subject"` → **"AI Knowledge"**
- `"reasoning"` → **"General Reasoning"**

**Why:** the enum value flows through the DB column, the OpenAPI schema, and
generated client/zod code; it is a stable internal key, not display text.

**How to apply:**
- Never render a raw `instrument` value. Map at every render point (Reasoning
  page, ReasoningCallout, Grades row) plus server-side seed titles / scoring
  headlines / feedback prompts.
- The old `"ethical"` / Professional Judgment instrument was REMOVED ENTIRELY
  per firm user mandate — it (and any fairness-dilemma wording) must never
  reappear anywhere. The old `"critical"` / Critical Reasoning label is also
  gone; the reasoning instrument is now labeled "General Reasoning" and must
  never be called "critical thinking" (avoid docility/compliance framing).
- Item/review `type` enum is now only `mcq | open` (no dilemma type).
