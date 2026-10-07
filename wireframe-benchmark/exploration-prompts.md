# Exploration prompts (after the benchmark)

These come after the benchmark and sit outside the IMSH demo scope. They don't change the accepted S1/S4 frames. Content: `wireframe-brief.md` → "Screen 1b · Dashboard + AI assistant".

**4A and 4B can run in parallel.** They write to different pages, and neither edits benchmark-log.md; each puts its log row in its reply.

---

## Prompt 4A — Dashboard + AI assistant · Astryx

```
Build ONE exploration wireframe in Figma using ONLY the Astryx library.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Page: "wireframe test - astryx". Ignore "🚫 wireframe archive". Do not edit the existing frames "S1 · Dashboard · Astryx" (73:3236) or "S4 · Debrief · Astryx".

Read first: @wireframe-benchmark/wireframe-brief.md (the "Screen 1b · Dashboard + AI assistant" section and the wireframe rules) and @wireframe-benchmark/discovery.md (the Astryx component map).
Before any Figma tool call, load the figma-use skill.

Run `date +%H:%M` at the start and at the end.

1. Duplicate the frame 73:3236, rename the copy "S1b · Dashboard + Assistant · Astryx", and place it 200 px below the original. Work only in the copy.
2. Add the "Start new recording" Secondary button to the page header (right side), and the pressed "Assistant" button to the top bar, as the brief describes.
3. Search Astryx for chat-related components first ("chat", "message", "bubble", "prompt", "composer", "textarea", "text area", "side panel", "drawer", "chip", "suggestion") and use whatever fits. Build the assistant panel from the brief: header, the 5-message conversation with the suggestion chips, the report result card and the draft event card, and the composer. Use Astryx Card, Button, Badge, Avatar, Text and input components for everything you can. Anything with no fitting component becomes a `CUSTOM · <what>` frame bound to Astryx variables.
4. Reflow the dashboard content into the remaining width. Keep "Today" (with NURS 310 emphasised) fully visible at the top. Let the frame grow in height if needed.
5. Same rules as the benchmark: instances only, never detach, Neutral Light mode, native sizes, 16 px icons, greyscale.
6. Take a screenshot after the panel and after the reflow, and fix overlaps, overflow and uneven gaps.

When done, DON'T edit benchmark-log.md. Reply with (a) one log line: `| 5 | 2026-10-06 | Astryx | S1b · Dashboard + Assistant (exploration) | <model> | start | end | min | 0 | instances | CUSTOM frames | chat components found / missing | colour leaks | issues | |` and (b) under 5 lines on which chat parts Astryx had and which you built by hand.
```

---

## Prompt 4B — Dashboard + AI assistant · shadcn

```
Build ONE exploration wireframe in Figma using ONLY the shadcn library.

Figma file: https://www.figma.com/design/maOZqRuLdksiPwUA43qSVI/Essentials-2.0---wireframes
Page: "wireframe test - shadcn". Ignore "🚫 wireframe archive". Do not edit the existing frames "S1 · Dashboard · shadcn" (76:7251) or "S4 · Debrief · shadcn".

Read first: @wireframe-benchmark/wireframe-brief.md (the "Screen 1b · Dashboard + AI assistant" section and the wireframe rules) and @wireframe-benchmark/discovery.md (the shadcn component map).
Before any Figma tool call, load the figma-use skill.

Run `date +%H:%M` at the start and at the end.

1. Duplicate the frame 76:7251, rename the copy "S1b · Dashboard + Assistant · shadcn", and place it 200 px below the original. Work only in the copy.
2. Add the "Start new recording" Secondary button to the page header (right side), and the pressed "Assistant" button to the top bar, as the brief describes.
3. Search shadcn for chat-related components first ("chat", "message", "bubble", "prompt", "composer", "textarea", "sheet", "sidebar", "drawer", "badge", "suggestion") and use whatever fits. Build the assistant panel from the brief: header, the 5-message conversation with the suggestion chips, the report result card and the draft event card, and the composer. Use shadcn Card header, Button, Icon Button, Badge, Avatar, Textarea/Input and Separator for everything you can. Anything with no fitting component becomes a `CUSTOM · <what>` frame bound to the shadcn `mode` / tw variables.
4. Reflow the dashboard content into the remaining width. Keep "Today" (with NURS 310 emphasised) fully visible at the top. Let the frame grow in height if needed.
5. Same rules as the benchmark: instances only, never detach, light mode, native sizes, 16 px icons, greyscale.
6. Take a screenshot after the panel and after the reflow, and fix overlaps, overflow and uneven gaps.

When done, DON'T edit benchmark-log.md. Reply with (a) one log line: `| 6 | 2026-10-06 | shadcn | S1b · Dashboard + Assistant (exploration) | <model> | start | end | min | 0 | instances | CUSTOM frames | chat components found / missing | colour leaks | issues | |` and (b) under 5 lines on which chat parts shadcn had and which you built by hand.
```

---

# Round 2: card spacing fix + overlay variant (S1c)

**5A and 5B can run in parallel** (they use different pages). Each one first fixes its S1b panel, then copies that panel into a new overlay frame, so the fix carries over.

**The S1c concept:** the dashboard keeps its original full-width layout (as in S1), and the assistant panel floats **on top** of it at the right edge, under the top bar. It's non-modal: no scrim, so Maya can still click "Start recording" on the uncovered part. It separates from the content with a shadow, not a reflow.

## Prompt 5A — Astryx: fix S1b cards, then build S1c overlay

```
Two tasks in Figma, Astryx only, page "wireframe test - astryx". Ignore "🚫 wireframe archive". Don't edit S1 (73:3236) or the S4 frames. Same rules as before: instances only, never detach, Neutral Light, native sizes, 16 px icons, greyscale.
Before any Figma tool call, load the figma-use skill. Run `date +%H:%M` at the start and at the end.

TASK 1 — fix the card spacing in "S1b · Dashboard + Assistant · Astryx" (111:3318), assistant panel only.
The report result card ("Simulation Lab Usage · Last 12 weeks") and the draft event card ("NURS 310 · Sepsis recognition (repeat)") have almost no inner padding, and their sections touch (content sits about 4 px from the border, and the stats grid runs straight into the buttons). It's the same Card-slot problem as the AI clip cards in S4 (gap 0 by default).
- Both cards: inner padding 16 px (Astryx `Spacing/4`, or the nearest spacing variable), bound to variables.
- Report card: title → 12 px → 2×2 stats grid (16 px column gap, 12 px row gap; value → 2 px → label inside each stat) → 16 px → button row (8 px between "Open report" and "Export PDF").
- Draft card: "Draft" badge → 8 px → title → 8 px → the 3 meta lines (4 px apart) → 16 px → button row (8 px gap).
- Give the cards the same corner radius and border as the dashboard cards.
- Screenshot the panel zoomed in and check that nothing touches a card edge.

TASK 2 — build the overlay variant.
1. Duplicate the frame "S1 · Dashboard · Astryx" (73:3236). Rename the copy "S1c · Dashboard + Assistant overlay · Astryx" and place it 200 px to the right of the S1b frame, top-aligned. Keep the dashboard layout exactly as in S1 (full width, no reflow).
2. In the copy, add the same "Start new recording" Secondary button to the page header and the pressed "Assistant" button to the top bar as in S1b.
3. Copy the whole (fixed) assistant panel from S1b and paste it into S1c as the LAST child of the frame (topmost layer), with absolute positioning (layoutPositioning = ABSOLUTE): right edge 0, top = bottom of the top bar, height = frame height minus the top bar, width as in S1b (about 380 px). Add constraints: right + top-bottom.
4. Separation: the panel keeps its white background and gets a shadow on its left side. Use an Astryx effect/elevation style if the library has one; otherwise a neutral drop shadow (x -8, y 0, blur 24, black at 12%) and log that it's a literal. No scrim over the dashboard.
5. The panel will cover the right column (calendar/Upcoming) and part of the main cards. That's intended; don't move the dashboard content.
6. Screenshot the whole frame and check that the panel sits cleanly on top: the top bar isn't covered, the shadow is visible, and nothing inside the panel is clipped.

When done, DON'T edit benchmark-log.md. Reply with (a) one log line: `| 7 | 2026-10-06 | Astryx | S1b card fix + S1c overlay (exploration) | <model> | start | end | min | 0 | instances | CUSTOM frames | missing | colour leaks / literal shadow | issues | |` and (b) under 4 lines.
```

## Prompt 5B — shadcn: build S1c overlay

```
Figma, shadcn only, page "wireframe test - shadcn". Ignore "🚫 wireframe archive". Don't edit S1 (76:7251) or the S4 frames. Same rules as before: instances only, never detach, light mode, native sizes, 16 px icons, greyscale.
Before any Figma tool call, load the figma-use skill. Run `date +%H:%M` at the start and at the end.

0. Small fix in "S1b · Dashboard + Assistant · shadcn" (112:669): there's an empty band of about 70 px between the panel header and the first assistant message. Reduce it to the panel's normal 16 px top padding.
1. Duplicate the frame "S1 · Dashboard · shadcn" (76:7251). Rename the copy "S1c · Dashboard + Assistant overlay · shadcn" and place it 200 px to the right of the S1b frame, top-aligned. Keep the dashboard layout exactly as in S1 (full width, no reflow).
2. In the copy, add the same "Start new recording" Secondary button to the page header and the pressed "Assistant" button to the top bar as in S1b.
3. Copy the whole (fixed) assistant panel from S1b and paste it into S1c as the LAST child of the frame (topmost layer), with absolute positioning (layoutPositioning = ABSOLUTE): right edge 0, top = bottom of the top bar, height = frame height minus the top bar, width as in S1b (about 380 px). Add constraints: right + top-bottom.
4. Separation: the panel keeps its `background` fill and gets a shadow on its left side. Use a shadcn effect style (shadow-lg / shadow-xl) if the kit has one; otherwise a neutral drop shadow (x -8, y 0, blur 24, black at 12%) and log that it's a literal. No scrim over the dashboard.
5. The panel will cover the right column (calendar/Upcoming) and part of the main cards. That's intended; don't move the dashboard content.
6. Screenshot the whole frame and check that the panel sits cleanly on top: the top bar isn't covered, the shadow is visible, and nothing inside the panel is clipped.

When done, DON'T edit benchmark-log.md. Reply with (a) one log line: `| 8 | 2026-10-06 | shadcn | S1c overlay (exploration) | <model> | start | end | min | 0 | instances | CUSTOM frames | missing | colour leaks / literal shadow | issues | |` and (b) under 4 lines.
```

---

# Round 3: S1c back to 1440×900, panel floats with a scrolled conversation

The S1c frames grew to 1440×1281 (Astryx) and 1440×1392 (shadcn), because the frame hugs its content and the conversation is taller than the screen. The fix: a fixed 1440×900 frame that clips its content, so it reads as a viewport. The dashboard simply continues below the fold. The assistant panel floats on top (absolute) and scrolls inside itself: its header and composer stay fixed, and the message list shows the **newest** messages, with the older ones cut off at the top, like a real chat that's been scrolled.

**6A and 6B can run in parallel.**

## Prompt 6A — Astryx

```
Figma, Astryx only, page "wireframe test - astryx". Edit ONLY the frame "S1c · Dashboard + Assistant overlay · Astryx" (119:1505). Same rules: instances only, never detach, Neutral Light, native sizes, greyscale. Load the figma-use skill first. Run `date +%H:%M` at the start and at the end.

1. Frame: set "S1c · Dashboard + Assistant overlay · Astryx" to a FIXED size of 1440×900 (no hug) with clip content on. The dashboard content keeps its layout and just gets cut off at the bottom edge, like a viewport. The left nav and its Settings footer must still fit inside 900 (the nav fills the frame height).
2. Assistant panel: keep it as the topmost child with absolute positioning (layoutPositioning = ABSOLUTE), right 0, top = bottom of the top bar, height = 900 minus the top bar, constraints right + top-bottom. Keep the left shadow, no scrim.
3. Inside the panel: header at the top (fixed height), composer + disclaimer pinned to the bottom (fixed height), and the message list in between set to fill the remaining height with clip content on. Anchor the message list to the BOTTOM (vertical alignment = bottom, or position its content so the last message sits just above the composer), so the newest content is visible: the draft event card with its buttons must be fully visible, the report card as far as it fits, and the greeting and suggestion chips cut off at the top. Leave a 16 px gap between the last message and the composer.
4. Optional, if it's quick: a 24 px white-to-transparent fade at the top of the message list (bound to the panel background variable), so the cut-off reads as scrollable.
5. Screenshot the whole frame and check: it's exactly 1440×900, the top bar is uncovered, the panel runs from under the top bar to the bottom edge, the draft card and composer are fully visible, and nothing spills outside the frame.

Don't edit benchmark-log.md. Reply in under 4 lines with the final frame size, what's visible in the panel, and the minutes.
```

## Prompt 6B — shadcn

```
Figma, shadcn only, page "wireframe test - shadcn". Edit ONLY the frame "S1c · Dashboard + Assistant overlay · shadcn" (118:2778). Same rules: instances only, never detach, light mode, native sizes, greyscale. Load the figma-use skill first. Run `date +%H:%M` at the start and at the end.

1. Frame: set "S1c · Dashboard + Assistant overlay · shadcn" to a FIXED size of 1440×900 (no hug) with clip content on. The dashboard content keeps its layout and just gets cut off at the bottom edge, like a viewport. The left nav and its Settings footer must still fit inside 900 (the nav fills the frame height).
2. Assistant panel: keep it as the topmost child with absolute positioning (layoutPositioning = ABSOLUTE), right 0, top = bottom of the top bar, height = 900 minus the top bar, constraints right + top-bottom. Keep the left shadow, no scrim.
3. Inside the panel: header at the top (fixed height), composer + disclaimer pinned to the bottom (fixed height), and the message list in between set to fill the remaining height with clip content on. Anchor the message list to the BOTTOM (vertical alignment = bottom, or position its content so the last message sits just above the composer), so the newest content is visible: the draft event card with its buttons must be fully visible, the report card as far as it fits, and the greeting and suggestion chips cut off at the top. Leave a 16 px gap between the last message and the composer.
4. Optional, if it's quick: a 24 px white-to-transparent fade at the top of the message list (bound to the `background` variable), so the cut-off reads as scrollable.
5. Screenshot the whole frame and check: it's exactly 1440×900, the top bar is uncovered, the panel runs from under the top bar to the bottom edge, the draft card and composer are fully visible, and nothing spills outside the frame.

Don't edit benchmark-log.md. Reply in under 4 lines with the final frame size, what's visible in the panel, and the minutes.
```
