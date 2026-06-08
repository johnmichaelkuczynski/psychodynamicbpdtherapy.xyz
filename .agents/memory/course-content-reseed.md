---
name: Course content reseed (math → ethics migration)
description: Why a "seed only if empty" guard strands migrated course content in existing DBs, and the self-healing fix.
---

# Self-healing course-content seed

The course content (topics/lectures/assignments/problems) lives as **data rows**, seeded by the API server on startup. The original guard only seeded when `topics` was empty.

**The trap:** when the curriculum was migrated (Quantitative Reasoning → Ethics), only the seed *file* and branding changed. Every database that already had rows (dev AND production) kept the **old content forever**, because the empty-check skipped reseeding. Re-publishing does NOT fix this — Replit's publish flow migrates **schema**, not data, and the production app's own startup seed still sees a non-empty table and skips.

**Why production is the hard case:** the agent's `executeSql` against production is **read-only**, so the only way to replace stale production *data* is the app's own startup logic. (This is data, not a schema migration, so it does not violate the "don't script production schema migrations" rule.)

**The fix (in `artifacts/api-server/src/lib/seed.ts`):**
- Detect a **content marker** (a known topic slug, e.g. `what-is-ethics`) instead of mere emptiness.
- Marker present → skip. Absent but other rows exist → stale content → `TRUNCATE ... RESTART IDENTITY CASCADE` the course + student-progress tables, then reseed. Empty → seed normally.
- **Wrap the truncate + full reseed in ONE `db.transaction`.** Marker-only detection + destructive truncate is unsafe otherwise: a crash after the first insert but before completion would leave the marker present and the course partially seeded, and every future boot would skip. The transaction makes the marker visible only after the whole curriculum commits, and TRUNCATE's ACCESS EXCLUSIVE lock means concurrent readers never see a half-empty course.

**Why:** content migrations of seeded data must be self-healing via a marker, or existing/production DBs silently keep the old content. **How to apply:** any time seeded reference data changes meaning (not just shape), gate the reseed on a content marker and replace-in-transaction, don't gate on emptiness.
