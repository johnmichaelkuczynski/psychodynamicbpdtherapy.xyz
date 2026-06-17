---
name: Course rebrand hotspots
description: Non-text places that hold stale branding when converting this course app to a new subject in place
---

# Course rebrand hotspots

When converting this course app to a new subject "in place", a plain text grep for the old subject misses several non-obvious spots. Sweep ALL of these, not just lecture/UI copy:

- **Logo SVG** `artifacts/qr-course/public/logo.svg` — the `aria-label` carries the old name.
- **Sidebar initials** — the demo `VideoTemplate.tsx` sidebar renders hardcoded 2-letter initials (e.g. "EP" for Evolutionary Psychology); update to the new name's initials.
- **Demo scene hardcoded numbers** — `qr-course-demo` Scene6 (and similar) hardcode assignment problem counts and titles. These must match the seed truth (e.g. HW=4/4, Unit Test=8, Final=4), or the demo contradicts the live app.
- **`.replit-artifact/artifact.toml` titles** — all artifacts (course + every demo video) carry an old `title`. Update via `verifyAndReplaceArtifactToml` (temp-file flow), never edit the toml directly.
- **Adaptive-practice generator prompts** `artifacts/api-server/src/routes/practice.ts` — the problem-generator and tutor-tip system prompts name the subject ("introductory cognitive science ... the scientific study of the mind") in string literals; grep misses them if you only sweep UI/content. Retarget the subject phrase AND the in-prompt example scenarios.
- **Demo-video scene CONTENT is its own rebrand pass** — `course-promo`, `diagnostics-demo`, `qr-course-demo`, `course-trailer` hold old branding in `index.html` (`<title>` + og/twitter meta), `youtube-description.md`, `VideoTemplate.tsx`, and `video_scenes/Scene*.tsx`. Rebranding the artifact.toml title AND the index.html title/meta is cheap; rebranding the rendered scene scripts/visuals + youtube copy is a substantial separate effort — treat that as a follow-up, not part of the course-app conversion. Keep the cheap title surfaces consistent so the preview tab isn't stale.
- **Baked trailer screenshots** — trailer scenes `import ... from "@assets/course_shots/*.jpg"` (dashboard/lecture/practice/grades/etc.). These are captured PNG/JPG images of the app UI — a text rebrand CANNOT touch them, so the video still shows the OLD UI until the screenshots are re-captured. Re-capture needs the authed app pages (Clerk sign-in), so it is heavy; flag as a known limitation rather than auto-doing it during a content conversion.
- **Living docs** — `replit.md`, `README.md` (kept in sync with replit.md), and `BLUEPRINT.md` all describe the product by name AND by architecture; an in-place model change (e.g. homework-only, inverted grading, endpoint shapes) must update BLUEPRINT's API/route/domain tables, not just the name.

**Why:** these conversions have drifted across several subjects; each pass left non-text branding behind, and a code review caught them only after the text sweep looked clean.

**How to apply:** after the text rebrand, run a wide stale-term sweep that includes old taglines/concept phrases, then explicitly check the four spots above. A fresh/empty DB also needs `pnpm --filter @workspace/db run push` before the seed's self-healing reseed can run (it errors with `relation "topics" does not exist` otherwise).

- **Duplicate doc files** — course-promo carried TWO youtube-description docs (`youtube-description.md` AND a stale uppercase `YOUTUBE_DESCRIPTION.md` from an even-older subject). A case-sensitive sweep that only fixes one leaves the other; list `artifacts/<promo>/*.md` and delete unreferenced legacy duplicates.
