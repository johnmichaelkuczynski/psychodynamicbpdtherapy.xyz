---
name: Course-trailer scene cutoff & BrowserFrame flex pitfall
description: Why trailer scenes clip content at the frame bottom, how to size frames, and the BrowserFrame flex gotcha
---

## BrowserFrame flex pitfall
`BrowserFrame` (course-trailer) renders `children` inside its OWN internal content div (`<div className="flex-1 w-full h-full overflow-hidden relative">`) below a chrome bar. The `className` prop is applied to the OUTER wrapper, which is already `flex flex-col`.

**Consequence:** putting a layout class like `flex` (row) in BrowserFrame's `className` does NOT lay out the children in a row — they render as block siblings inside the non-flex content div and stack vertically.

**How to apply:** to get a row/column layout of a scene's panels, wrap the panels in your own `<div className="flex h-full ...">` INSIDE `<BrowserFrame>`, never rely on a flex class on BrowserFrame's className.

## Scene frame sizing to avoid bottom cutoff
Scenes that clip content used aspect-ratio frames (`aspect-video`, `aspect-[4/3]`) which derive height from width and force tall content to overflow + clip. Prefer an explicit viewport height that fits the content.

**Rule:**
- Side-caption scenes (heading sits BESIDE the frame): frame may be tall, ~72–82vh.
- Top-caption scenes (heading ABOVE the frame, e.g. analytics-style): keep frame ≤ ~70vh so heading + frame both fit in 720p.
- Avoid `aspect-*` on content frames that hold variable-length lists/answers; size by height and let width come from the parent `w-[Nvw]`.

**Why:** the export/record viewport is 1280×720; aspect-ratio frames silently clipped answer options, the tutor sidebar, topic bars, and the section grid at the bottom edge.

## Verifying a scene's settled layout via screenshot
Screenshots capture at t≈0, before entrance animations finish, so animated content is invisible/mid-transition. To get a true settled-state still: temporarily flatten initial transforms (`sed 's/opacity: 0,/opacity: 1,/g'` and any `x: '100%'` → `x: 0`) on a backup copy, screenshot, then restore the animated originals. Keep a backup dir so the animated keeper is never lost.
