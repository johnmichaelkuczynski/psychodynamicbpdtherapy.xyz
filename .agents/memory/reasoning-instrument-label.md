---
name: Reasoning instrument enum vs. display label
description: Why the reasoning instrument's internal enum value stays "ethical" while all user-facing text says "Professional Judgment".
---

The reasoning diagnostic's instrument enum value is intentionally kept as `"ethical"` (with helper names `scoreEthical` / `generateEthicalVariant`) even though the product is data-analytics and every user-facing surface reads **"Professional Judgment"** over data-work scenarios.

**Why:** the enum value flows through the DB column, the OpenAPI schema, and orval-generated client/zod code. Renaming it would force a schema migration + codegen regen + churn across many files for zero user benefit. The enum is a stable internal key, not display text.

**How to apply:**
- Never render a raw `instrument` value in the UI. Every render point must map `instrument === "ethical"` → `"Professional Judgment"` (and `"critical"` → `"Critical Reasoning"`). Current map points: Reasoning page, ReasoningCallout, Grades row, plus server-side seed titles / scoring headlines / feedback prompts.
- When adding any new surface that shows the instrument (admin, reports, exports), translate via a label, do not print the enum — otherwise "ethical"/ethics wording leaks to students, which the user explicitly forbade.
- Same principle for the demo video imagery: data-viz background (`bg-data-grid.png`), never scales-of-justice.
