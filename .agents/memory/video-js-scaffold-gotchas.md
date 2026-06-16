---
name: video-js scaffold gotchas
description: Recurring build breakages when the DESIGN subagent builds a new video-js artifact, and their fixes.
---

# video-js scaffold gotchas

After delegating a video-js build to the DESIGN subagent, these breakages recur and must be fixed by the main agent before the build is clean:

- **Scene transition imports**: scenes often `import { clipPolygon|splitVertical|clipCircle|fadeBlur } from '@/lib/video/animations'`. These are NOT named exports — they are keys of the exported `sceneTransitions` object. Fix: `import { sceneTransitions }` and spread `{...sceneTransitions.<key>}`.

- **CSS @import ordering**: a Google Fonts `@import url(...)` placed AFTER `@import "tailwindcss";` triggers postcss "@import must precede all other statements" because Tailwind inlines first. Fix: put the font `@import` on line 1, above the tailwind import.

- **tsconfig missing DOM lib**: the newer video-js scaffold `tsconfig.json` omits `"lib": ["esnext","dom","dom.iterable"]`, so typecheck fails with `Cannot find name 'window'/'document'` and framer-motion Variant type errors. Fix: add that `lib` line (matches the older working sibling artifact).

**Why:** the DESIGN subagent's output is not verified by it, and the scaffold version drifts; these three issues appeared together on a fresh build.

**How to apply:** after the subagent returns, restart the workflow and read logs; expect these and fix before running the scene-selector/audio post-build steps. Then run `pnpm --filter @workspace/<slug> run typecheck` to catch the tsconfig one (dev server alone won't surface it).

## Product-walkthrough trailers: capture real screens FIRST, hand them to the subagent
For a "show the actual product" trailer (not abstract motion graphics), capture real
app screenshots BEFORE delegating, drop them in `attached_assets/`, and pass both an
explicit content mandate ("real screens are the hero, framed in browser chrome, NOT
abstract") AND the image paths in `relevantFiles`. The DESIGN subagent defaults to
text/shape motion graphics otherwise. The video artifact's vite alias `@assets` already
resolves to repo-root `attached_assets/`, so scenes import e.g.
`@assets/course_shots/x.jpg` with no copying. To screenshot Clerk-gated pages, the API
is single-user (no auth header) so a temporary dev-only guard bypass renders real data —
revert it after.

## Adding an export to VideoTemplate breaks Fast Refresh transiently
Exporting `SCENE_DURATIONS` from `VideoTemplate.tsx` mid-session makes Vite log
"Could not Fast Refresh (new export)" and can throw a one-off "Invalid hook call /
Cannot read properties of null (reading 'useMemo')" in the console. It is NOT a real
hook bug — a full reload (or workflow restart) clears it. Confirm with a fresh
screenshot rather than chasing the HMR error.
