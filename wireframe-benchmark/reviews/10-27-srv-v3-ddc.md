# 10-27 · SRV v3 after the DDC with Gabor

Source: the 10-27 DDC with Gabor (vault: `raw/meetings/2026-10-27-tue--DDC-Essentials.md`) and Daniel's todo doc with references (vault: `raw/docs/2026-10-27--essentials-srv-updates.md`). Builds on the v2 round in `10-26-srv-v2-gergely.md`.

Target: Figma file **IMSH-MVP** (`dbJVpAusLJCtreiz0jlEh3`), page **"Dashboard (D)"** (305:18292).
Base: **"T1b · Recording view (per-camera dot)"** (386:21016) in Section "SRV v2 · Gergely 10-22" (384:19421). Gabor liked the per-camera dot, and T is the version Gergely asked about. Every v3 frame is a clone; v1 and v2 stay untouched as the comparison base (agreed in the DDC: versions, not overwrites).

## How to run

One Cursor chat per line, in this order (B first, everything else clones B0). High is enough; rerun a section on Extra High only if it comes back broken.

1. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "B · Base fixes".`
1b. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "B-patch · Search and tabs (10-27)".`
1c. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "B-fix · Review round 1 (10-27)".`
1d. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "B-fix 2 · Nits (10-28)".`
2. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "L · Layout and settings".`
3. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "AN · Annotations".`
4. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "E · Ehli and autosave".`
5. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "D · Debrief switch".`
6. `Read @wireframe-benchmark/reviews/10-27-srv-v3-ddc.md. Apply "Shared rules", then run ONLY section "R · Review round (10-28)".`

## What goes where

| Gabor # | Topic | Decision (DDC 10-27 + Daniel's notes) | Frames |
|---|---|---|---|
| 3 + 15 | "Notes 2" | "Annotation" everywhere, count badge stays | B0 (all) |
| 6 | Header line | Icons in front of room / group / date, compact | B0 (all) |
| 7 + 8 | Timer | "/ 20:00" goes, "Planned 20 min" stays visible, no hover | B0 (all) |
| 9 | Simulator intercom | Back: In-room / Simulator / Facilitator. Facilitator stays until usage data says otherwise | B0 (all) |
| 10 | Record status | Per-camera dot stays | B0 (all) |
| 11 | Failure chip | The chip that changes width and squeezes the timeline goes | B1 |
| 12 | Preset / zoom | Hover (and keyboard focus) only | B0 (all) |
| 13 | Start vs Stop | "Start recording" / "Stop recording", same fixed width | B0, B2 |
| — | Back to event | Text goes, back arrow stays | B0 (all) |
| — | Global search | Not on the SRV; stays elsewhere once specified (Daniel researches 10-28) | B0 (all) |
| 1 | Tabs vanish behind Layout | B version: overlay that closes on click-away, tabs stay visible | L1, L2 |
| 2 | Every camera shows up? | Yes: live preview of every room camera, drag onto the video | L1, L2 |
| — | Resize camera tiles | View-only resize with "Reset layout"; nothing saved, recording unaffected. Showcase feature for IMSH | L4 |
| 14 | Layout + Audio to the top? | Two options to compare: bottom (L1) vs one top-right button (L3) | L1 vs L3 |
| quick presets | Discuss / Good practice / Marker | Two middle-ground options + an annotation timeline tab | AN1, AN2, AN3 |
| 4 | AI assistant | Ehli checklist assistant, FieldReady pattern | E1 |
| 5 | Submit? | No Submit. "Autosaved at …" + filter + "Changed from Ehli's" | B0, E1 |
| 16 | Debrief ↔ SRV | Same-screen switch after Stop (VB's idea); QR only as a secondary path | D1, D2 |

**Not in this round:** how global search works on the other screens (Daniel researches it 10-28), camera-failure banner wording beyond B1, timer overrun, Gabor's debrief content itself.

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "Dashboard (D)" (305:18292).
READ-ONLY on this page: Section "SRV" (313:14668), Section "SRV v2 · Gergely 10-22" (384:19421), Section "Gabor SRV" (322:28720), Section "Gabor Dashboard" (305:21628), Section "Dashboard" (307:12786), Section "Dashboard - superseded" (340:18352), and the frames 335:29670 and 335:29843. Never edit, move or rename anything in them, and never append into them. Cloning FROM them is fine.
TARGET = a NEW Section "SRV v3 · DDC 10-27", left edge aligned with Section 384:19421, top 400 px below that Section's bottom edge. If it already exists from an earlier run, append to it; don't create a second one.
Build every new frame with node.clone() of the frame named in the prompt, append the clone to the target Section, then edit the clone. Default base: "B0 · Recording view (DDC fixes)" once it exists.
Components: reuse the instances inside the clones (Astryx, Neutral Light, greyscale; recording red is the only colour). If you need a component that isn't in the clone, clone an instance from another frame on this page rather than drawing one. Never rebuild TopNav / SideNav / Header.
Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Layout inside the Section: ONE horizontal row per run (B, L, AN, E, D, in that order top to bottom), 400 px between rows. Frames in a row are top-aligned with 160 px gaps; 120 px Section padding. Above each frame, 96 px up, a 24 px text label with the frame name. Left of each row's first label, a 32 px bold row title ("B · Base fixes", "L · Layout and settings", …).
Naming: "<#> · <Screen>", no version suffix (the Section carries the version).
Copy: sentence case, plain English, same demo world as the clones (Riverbend College of Nursing, Dr. Maya Ortiz, NURS 310 · Sepsis recognition, Sim Room 2 · 3 cameras, Group A, Tue Jan 19).
The word "note(s)" never appears for timestamped items: always "annotation(s)".
No hover-only information except the camera Preset / zoom toolbar (decided in the DDC).
Delete Dev Mode annotations copied with the clones. Add only the annotations given in the prompt.
When done: screenshot each new frame and check that nothing overlaps or is clipped, the text fits, the camera tiles keep their aspect ratio, and the timeline row is identical in width and position across frames of the same state.
```

---

## B · Base fixes

Everything Gabor and Daniel agreed on that applies to every SRV state. B0 becomes the base for all later runs.

```
Assumes: Shared rules from this file.

B0 · Recording view (DDC fixes): clone "T1b · Recording view (per-camera dot)" (386:21016).
 - Page header, left: replace "← Back to event" with an IconButton (arrow-left only, same size as the other header IconButtons). Accessible name "Back to event". The LS logo stays the home link.
 - Page header, subline under "NURS 310 · Sepsis recognition": put a 14 px icon before each item, 4 px gap, items separated by 12 px (drop the " · " separators): door/room icon "Sim Room 2", users icon "Group A", calendar icon "Tue, Jan 19 · 10:00–11:00". Same text size and colour as now.
 - Right panel tabs: rename "Notes 2" to "Annotations" with a count Badge "2" (the file's Badge component, not text). Give every tab a 16 px icon before its label: annotation = message-square, Checklist = list-checks, Chapters = list-video (or bookmark), Transcript = file-text. Keep the collapse IconButton. Labels are mandatory on every tab (icon-only tabs would need hover tooltips). If the four don't fit at the current text size, first tighten tab padding, then drop the ICONS, never the labels. Don't shrink the text.
 - TopNav: hide the global Search field in this TopNav instance (instance visibility override; don't detach, don't touch the main component). The rest of the TopNav stays.
 - Camera tiles: hide the "Preset ▾ / zoom in / zoom out / fullscreen" toolbar on every tile (it shows on hover or keyboard focus of a tile). Keep the per-camera dot chips exactly as they are.
 - Timeline row, left to right:
   - The "Stop" button becomes "Stop recording" (same red-outline style, square stop icon). Set it to a FIXED width equal to the width a "Start recording" button with the dot icon needs, so start and stop never change the row. Fixed width, not hug.
   - REC chip: unchanged copy "REC", also fixed width.
   - Time readout: "08:00" only (delete " / 20:00"). Fixed width for "00:00".
   - Scrubber: unchanged, takes the freed space.
   - "Planned 20 min" stays visible at the right end, always (no hover).
 - Annotation row under the timeline: the input placeholder becomes "Add an annotation at 08:00…". Discuss / Good practice / Marker stay as they are for now (the AN run explores them).
 - Bottom strip, talk targets: the segmented control becomes "In-room | Simulator | Facilitator" (In-room selected). Same component, one more segment. Nothing else in the strip changes.
 - Checklist tab: directly under "Yes / no · no score", add a 12 px muted line with a small check icon: "Autosaved at 08:12". No Submit button anywhere.
 - Annotations:
   - On the timeline: "Start/Stop and REC have fixed widths, so the scrubber never jumps (Gabor 10-27). '/ 20:00' removed; Planned stays visible, never on hover."
   - On a camera tile: "Preset and zoom show on hover or keyboard focus of a tile. The full camera image matters more (DDC 10-27)."
   - On the talk targets: "Simulator restored. Facilitator stays until usage data says otherwise (DDC 10-27)."
   - On "Autosaved at 08:12": "No Submit. Answers stay editable until the debrief is finished."
   - On the TopNav: "No global search on the SRV: a search result would navigate away from a live recording. Search stays on the Dashboard and other screens once its behaviour is specified (DDC 10-27)."

B1 · Camera not recording: clone B0. For the Camera 3 tile, copy the treatment from "T1c · Camera not recording" in Section 384:19421 (clone its nodes; T1c itself stays untouched).
 - Camera 3 tile: same "No signal" state as T1c (dark fill, camera-off icon, "No signal", "Camera 3 isn't recording. Check the cable or restart the camera."). This message is ALWAYS visible, not on hover. Its chip reads "Camera 3 · Not recording" with the warning icon.
 - Timeline: the REC chip stays exactly as in B0 ("REC", same width). Do NOT put the failure into the timeline row.
 - Camera area: an inline Alert floating over the top edge of the camera area (overlay, it does not push the tiles down), 12 px inset, warning icon + "Camera 3 stopped recording at 07:42. Cameras 1 and 2 are still recording." Reuse the file's Alert / Banner component if it exists.
 - Annotation on the Alert: "The failure is shown on the tile and in this alert, never in the timeline chip (it made the scrubber jump, Gabor 10-27). The alert also covers layouts where Camera 3 isn't on screen, e.g. Single."

B2 · Ready to record: clone B0.
 - Timeline: the button becomes a filled recording-red "Start recording" with the round dot icon, SAME fixed width as "Stop recording" in B0. Delete the REC chip but keep its slot empty so the time readout doesn't move. Time "00:00". Scrubber empty, no annotation markers.
 - Annotation row: placeholder "Annotations open when the recording starts.", input and quick buttons disabled.
 - Camera chips: no red dots (nothing records yet).
 - Checklist: "0 of 7 answered", every row unanswered, delete the "Autosaved at …" line.
 - Annotation on "Start recording": "Same width as Stop recording: the timeline doesn't move when the state changes."
```

---

## B-patch · Search and tabs (10-27)

Only needed if B ran before 10-27 evening (it did). Two decisions came in after the B run: no global search on the SRV, and tab labels are never dropped. Run this BEFORE L, since every later run clones B0.

```
Assumes: Shared rules from this file. EDITS the existing frames "B0 · Recording view (DDC fixes)", "B1 · Camera not recording" and "B2 · Ready to record" in Section "SRV v3 · DDC 10-27" in place. Nothing else changes.
 - In each of the three frames, hide the global Search field in the TopNav instance (instance visibility override; don't detach, don't touch the main component).
 - Right panel tabs, in each frame: every tab must show its text label ("Annotations" + Badge "2", "Checklist", "Chapters", "Transcript"). If any tab is icon-only, bring its label back. If they no longer fit, first tighten tab padding, then remove the ICONS from all four tabs. Never drop a label, never shrink the text.
 - Add to B0 only, an annotation on the TopNav: "No global search on the SRV: a search result would navigate away from a live recording. Search stays on the Dashboard and other screens once its behaviour is specified (DDC 10-27)."
When done: screenshot B0, B1, B2 and check the tab bar fits without clipping.
```

---

## B-fix · Review round 1 (10-27)

Daniel's review of B0–B2 (10-27 night): the REC chip is redundant and takes timeline space; the camera-failure alert covers the video; B2 has an empty gap before the time. Run this after the B-patch and BEFORE L, since every later run clones B0.

```
Assumes: Shared rules from this file. EDITS "B0 · Recording view (DDC fixes)", "B1 · Camera not recording" and "B2 · Ready to record" in Section "SRV v3 · DDC 10-27" in place.

1 · Timeline row, all three frames:
 - Delete the REC chip (B0, B1) and the empty slot it left (B2). Nothing replaces it.
 - The time readout sits 12 px after the Start/Stop button; the scrubber grows to fill all the freed width up to "Planned 20 min".
 - The Start/Stop button keeps its fixed width, so the time readout and the scrubber's left edge sit at exactly the same x in B0, B1 and B2. Check this.
 - Replace the B0 timeline annotation with: "Start/Stop has a fixed width, so the scrubber never moves between states (Gabor 10-27). No REC chip: the red Stop recording button, the running time and the dot on every camera already say it's recording. '/ 20:00' removed; Planned stays visible, never on hover."

2 · B1, camera failure without covering the video:
 - Delete the inline Alert over the camera area ("Camera 3 stopped recording at 07:42…") and its annotation.
 - Add a Toast (the file's Toast / Sonner component if there is one, otherwise a 360 px card with the Popover shadow), bottom-right: right edge 16 px from the frame edge, bottom edge 16 px above the bottom strip. It sits over the empty lower part of the right panel, never over the cameras or the timeline. Content: warning icon, "Camera 3 stopped recording at 07:42" (14 px medium), "Cameras 1 and 2 are still recording." (12 px muted), a link-style Button "Show cameras", and a close IconButton (X).
 - Persistent signal: on the "Layout" button in the bottom strip, a small warning badge (8 px dot in the warning colour used on the Camera 3 chip) at its top-right corner. The button itself doesn't change size.
 - The Camera 3 tile ("No signal" + "Camera 3 · Not recording" chip) stays as it is.
 - Annotations:
   - On the Toast: "Shows once when a camera drops and hides after 10 s or on X. 'Show cameras' opens the Layout panel, where Camera 3 is marked Not recording."
   - On the Layout badge: "Stays until the camera is back. Covers layouts where Camera 3 isn't on screen (e.g. Single) without touching the video or the timeline."
3 · B2 only: Discuss / Good practice / Marker must use the Button's real disabled state (same as the input), not just grey text.
When done: screenshot B0, B1 and B2 side by side and check the timeline rows line up and the toast covers no checklist content.
```

---

## B-fix 2 · Nits (10-28)

Claude's QA of B-fix (10-28): two alignment nits. Run before L.

```
Assumes: Shared rules from this file. EDITS frames in Section "SRV v3 · DDC 10-27" (461:21677) in place.
 - B1 (461:22285), "Toast · Camera 3 stopped" (465:22632): the "IconButton · Dismiss" (465:22670) sits at x=343, so it sticks 11 px out of the 360 px toast and overlaps the text column. Put the toast in auto-layout (horizontal: icon, Content (fill), Dismiss), 12 px padding, 12 px gap, top-aligned, so Dismiss ends 12 px inside the right edge. Toast stays 360 px wide at the same position.
 - B0 (461:21679): the page-title block "Title" (I461:21684;2348:14215;461:21843) is at x=32, while B1 and B2 have it at x=40. Set B0 to x=40, so the back arrow-to-title gap is identical in all three frames.
When done: screenshot B0 and B1 and check the header titles line up and the toast X sits inside the card.
```

---

## L · Layout and settings

Answers Gabor #1 (tabs vanish while Layout is open), #2 (do all cameras show up) and #14 (move Layout + Audio to the top). L1/L2 keep Gergely's bottom buttons; L3 is the top-right alternative. Compare L1 vs L3.

```
Assumes: Shared rules from this file. Base: "B0 · Recording view (DDC fixes)" in Section "SRV v3 · DDC 10-27".

L1 · Layout overlay: clone B0. "Layout" in the bottom strip in the pressed state.
 - The layout panel is an OVERLAY CARD, not a replacement of the right column: it floats above the right column, anchored to the bottom-right, its bottom edge 8 px above the "Layout" button and its right edge 16 px from the frame edge, 400 px wide. Its top stops below the right panel's tab bar, so the tabs stay visible behind it. Radius and shadow of the file's Popover / DropdownMenu. No scrim; the video stays fully visible.
 - Header: "Layout" + close IconButton (X).
 - Group 1, 12 px muted uppercase "LAYOUT": one row of five small selectable thumbnails (greyscale schematics, label under each): "Single", "Side by side", "1 + 2" (selected), "2 × 2", "3 × 3". Selected = the file's selected card/radio style.
 - Group 2, "CAMERAS IN THIS ROOM · 3": a 2-column grid of live preview thumbnails (16:9, use the same camera images as the tiles), one per room camera. Each thumbnail has its name ("Camera 1", "Camera 2", "Camera 3") and a small position tag under it: "Main", "Right top", "Right bottom". A drag-handle icon (grip-vertical) top-right on each thumbnail.
 - Helper under the grid, 12 px muted: "Drag a camera onto the video to place it. Cameras that aren't on screen still record."
 - Delete the old "MAIN CAMERA" Select (the drag replaces the blind dropdown).
 - Annotations:
   - On the card: "Overlay, not a replacement: the tabs stay visible and any click outside closes it (Esc too). It grows out of the Layout button so the two read as connected (Gabor 10-27)."
   - On the camera grid: "Every camera in the room is listed with a live preview, up to 9 (Gabor #2)."

L2 · Drag a camera onto the video: clone L1.
 - Mid-drag state: a semi-transparent copy of the "Camera 3" thumbnail (with shadow) sits over the MAIN tile (Camera 1), cursor = grabbing hand.
 - The main tile gets a 2 px dark outline and a centred pill "Drop to show Camera 3 here".
 - In the panel, the original Camera 3 thumbnail is dimmed (40 %).
 - Annotation: "Dropping swaps the two: Camera 3 becomes Main, Camera 1 takes its slot. Same drag works from one tile to another on the video (like UniFi Protect)."

L3 · Layout and audio, top right: clone B0.
 - Bottom strip: delete the "Layout" and "Audio" buttons. Only the intercom controls stay.
 - Page header, right: directly LEFT of "Report a problem", add a secondary Button with a sliders icon and the label "Layout & audio", pressed state. Same size as "Report a problem".
 - Opened panel: an overlay card anchored under that button (top edge 8 px below it, right-aligned with the frame's 16 px edge), 400 px wide, as tall as needed up to the bottom strip. Same card styling as L1. No scrim. Inside, sections with a 16 px icon + 12 px muted uppercase heading (like Supercut's settings panel):
   - layout-grid icon "CAMERA LAYOUT": the five layout thumbnails from L1, then the "CAMERAS IN THIS ROOM · 3" preview grid from L1 (copy both groups from L1 if it exists).
   - audio icon "AUDIO": clone the groups of the Audio panel from "S3 · Audio settings" (314:15317) as they are.
   - Close IconButton (X) top-right of the card.
 - Annotation on the button: "Alternative to Gergely's bottom buttons (Gabor #14). Named for what's inside, not 'Settings' or '…', so people can find it. Click outside closes it."

L4 · Resize a camera tile: clone B0 (layout 1 + 2, no panel open). Place it after L3.
 - Mid-resize state: the vertical gutter between the Camera 1 tile and the right camera column is being dragged to the right. Camera 1 is now about 70 % of the camera area's width; Camera 2 and Camera 3 are narrower, still stacked. Draw the gutter as a 4 px dark handle bar, full height of the camera area, with a small grip in its middle and a col-resize cursor on it.
 - Resize model = draggable gutters between tiles (split-pane), not free-floating tiles: tiles never overlap and the grid stays tidy. The horizontal gutter between Camera 2 and Camera 3 is draggable the same way (show its grip, not dragged).
 - Video inside a resized tile keeps its aspect ratio; letterbox if needed, never stretch.
 - Top-right of the camera area, a small secondary Button with a rotate-ccw icon: "Reset layout". It only exists while the layout differs from the default.
 - Annotations:
   - On the gutter: "View only, for seeing more detail during the sim. The recording still captures every camera as is. Not saved: Reset layout, switching layout or leaving the SRV restores the default."
   - On "Reset layout": "Back to the default 1 + 2 grid in one click."
```

---

## AN · Annotations

Gabor's point: fixed presets (Discuss / Good practice / Marker) will draw "why these?" and "can I change them?". Enterprise solves it with admin-made presets and random icons, which nobody uses the same way. Two middle-ground options plus a better annotation list.

```
Assumes: Shared rules from this file. Base: "B0 · Recording view (DDC fixes)".

AN1 · Quick tags you own (Loom-style): clone B0.
 - Annotation row: input "Add an annotation at 08:00…" (fills), then three secondary buttons with icon + label: "Discuss", "Good practice", "Marker", then an IconButton "+" (accessible name "More tags").
 - Show the "+" menu open (DropdownMenu, opens upward): a search field "Search or create tag…", then a list with an icon per tag: "Discuss" (pinned), "Good practice" (pinned), "Marker" (pinned), "Safety concern", "Communication"; pinned rows show a pin icon on the right. Divider. "Create tag…" and "Edit quick tags".
 - Annotations:
   - On the quick buttons: "One tap = an annotation at the current time with that tag. These are the user's own 3 pinned tags; the defaults are only a starting set (answers Gabor's 'why these?')."
   - On the menu: "Tags are personal, no admin setup. Pin up to 3 as quick buttons."

AN2 · Write first, tag after (Flask-style): clone B0.
 - Annotation row: delete Discuss / Good practice / Marker. Input (fills) with typed text "Lactate came back at 4.1, nobody escalated" and a primary Button "Add" on its right.
 - Above the input, anchored to it, a Popover in the "just pressed Enter" state: title 12 px muted "Add a tag (optional)", a row of tag chips "Discuss", "Good practice", "Safety concern" (recently used), then a small input "Search or create tag…". Footer 12 px muted: "Enter saves without a tag."
 - Annotation: "Text first, tag second: no preset list to defend. Risk to check with Gabor: during a live sim this is slower than one tap (AN1)."

AN3 · Annotations tab as a timeline: clone B0, switch the right panel to the "Annotations" tab (active, badge "2").
 - Top of the panel: filter chips "All 2", "Discuss 1", "Marker 1" ("All" selected).
 - The list is a vertical timeline in recording order: a thin vertical line on the left; on it a time pill per annotation ("04:12", "07:30"); to the right of each pill a card with: tag chip (icon + "Discuss" / "Marker"), the text ("Lactate came back at 4.1, nobody escalated." / "Fluids started."), and a 12 px muted line "Dr. Maya Ortiz". A "…" IconButton top-right on each card.
 - At the bottom of the line, a muted "Now · 08:00" marker.
 - The markers on the scrubber (04:12, 07:30) stay as they are.
 - Annotation: "Click a time pill to jump the review there. Ehli's AI annotations will join this same list later, that's why the word is 'annotation' (DDC 10-27)."
```

---

## E · Ehli and autosave

Gabor #4 + #5. Same pattern as the FieldReady prototype (Ehli checklist assistant, confidence filter, "Changed from Ehli's …"), squeezed for the narrower SRV panel. Greyscale: the sparkle icon carries Ehli, no purple in the wireframe.

```
Assumes: Shared rules from this file. Base: "B0 · Recording view (DDC fixes)".

E1 · Checklist with Ehli: clone B0. Right panel, Checklist tab:
 - Header: "Sepsis recognition checklist" + "5 of 7 answered". Under it, "Yes / no · no score" and the "Autosaved at 08:12" line from B0.
 - Below that, one compact Ehli card (1 px border, 8 px radius, 12 px padding):
   - Row 1: sparkle icon + "Ehli · Checklist assistant" (14 px medium) and on the right a Badge "5 suggestions".
   - Row 2, 12 px muted: "Ehli listens to the recording and pre-fills likely answers. Stars show how sure Ehli is."
   - Row 3, filter chips: "All 7" (selected), "★★★ 3", "★★ 1", "★ 1", "Unanswered 2".
 - Items:
   - 1–3: "Yes" selected, a small sparkle icon inside the selected Yes, and ★★★ (12 px) after the item title. Keep "Answered 00:40" etc.
   - 4 "Escalates the lactate result to the provider": ★★ after the title. "No" selected (no sparkle), and under the Yes/No pair, 12 px: "Changed from Ehli's Yes".
   - 5 "Starts IV fluids as ordered": ★ after the title, "Yes" selected with the sparkle.
   - 6–7: unanswered.
 - Annotations:
   - On the Ehli card: "Needs the AI subscription. Without it the card is hidden (the nudge for non-subscribers waits on Gergely)."
   - On "Changed from Ehli's Yes": "Saved instantly; the instructor's answer always wins. Same pattern as FieldReady."
```

---

## D · Debrief switch

Gabor #16. VB's idea from the DDC: after Stop, the same screen switches to the debrief for this recording, and back. Gabor's QR-to-tablet stays as a secondary path. The debrief content itself is Gabor's design; these frames only show the switch.

```
Assumes: Shared rules from this file. Base: "B0 · Recording view (DDC fixes)".

D1 · Recording stopped: clone B0.
 - Page header, directly right of the title block ("NURS 310 · Sepsis recognition" + subline), a segmented control "Recording | Debrief" with "Recording" selected and both segments enabled. Right of it, 8 px gap, an IconButton with a qr-code icon (accessible name "Open debrief on a tablet"). Keep both left-aligned with the title, so the top-right actions don't get more crowded.
 - Timeline row: the Start/Stop slot (same fixed width) now holds a primary Button "Open debrief" (arrow-right icon). Time "18:42" with a 12 px muted "Saved" after it. Scrubber full, markers at 04:12 and 07:30. "Planned 20 min" stays.
 - Camera chips: no red dots. Feeds stay live (the room is still on camera). Nothing is placed over the video.
 - Annotations:
   - On the segmented control: "Visible on the SRV at all times; 'Debrief' is disabled while recording ('Debrief opens when the recording stops')."
   - On "Open debrief": "The fixed slot always holds the next step: Start recording → Stop recording → Open debrief."
   - On the qr-code IconButton: "Gabor's QR idea as the secondary path, for a separate debrief device."

D2 · Debrief mode: clone D1.
 - Segmented control: "Debrief" selected.
 - Delete the whole bottom intercom strip (nothing is live in debrief). Give the height to the camera area.
 - Camera area: the recording plays back: a centred play IconButton on Camera 1, camera chips without dots. Timeline row: a play/pause IconButton in the left fixed-width slot, "00:00 / 18:42", scrubber with the playhead at the start and the 04:12 / 07:30 markers.
 - Right panel: unchanged tabs, "Annotations" tab active (copy the AN3 timeline list if it exists; otherwise keep the panel as in D1).
 - Annotation on the main area: "Placeholder: Gabor's debrief layout goes here. This frame only shows that the same screen switches mode for the same recording, and 'Recording' switches back."
```

---

## R · Review round (10-28)

Claude's QA of all 13 v3 frames (10-28) plus Daniel's ask for a bigger QR overlay. Run as its own chat after everything above.

```
Assumes: Shared rules from this file. EDITS frames in Section "SRV v3 · DDC 10-27" (461:21677) in place and adds one new frame (D3). v1 and v2 stay read-only.

R1 · Layout + Audio sit next to the panel they open. In EVERY frame of the Section whose bottom strip has the "Layout" and "Audio" buttons (B0, B1, B2, L1, L2, L4, AN1, AN2, AN3, E1, D1): right-align the Layout + Audio pair to the right edge of the left column (same right edge as the camera area and the "Marker" button), 8 px gap between them. The intercom controls stay left-aligned. In B1 the warning badge moves with the Layout button. In L1 and L2 the overlay card then starts right next to the pressed button.

R2 · Scrubber marker icons match the tag icons. In every frame of the Section, the scrubber marker at 07:30 uses the flag icon (it's a "Marker" annotation, see AN3), not the file/note icon. The 04:12 marker stays message-circle (Discuss).

R3 · L4 · Resize a camera tile (468:13483):
 - Camera images: use the same fill/crop as in B0 (no black letterbox bars), so L4 compares fairly with the other frames. Drag the vertical gutter further: Camera 1 takes about 75 % of the camera area's width.
 - Move "Reset layout" off the video: delete it from the camera area and put it in the bottom strip directly LEFT of "Layout" (secondary Button, rotate-ccw icon, same height). It still only exists while the layout differs from the default.
 - Update the "Reset layout" annotation: "Back to the default 1 + 2 grid in one click. Lives with the other layout controls, never on the video."

R4 · D2 · Debrief mode (472:25836): the play IconButton sits in the left of the old fixed-width slot and leaves a big gap before "00:00 / 18:42". In debrief there's no Start/Stop, so drop the fixed slot: time readout 12 px after the play button, scrubber grows to fill.

R5 · new frame "D3 · Open on a tablet": clone D2, place it directly right of D2 (160 px gap, label above as usual).
 - The qr-code IconButton next to "Recording | Debrief" is in the pressed state.
 - A floating Popover card anchored to it: top edge 8 px below the button, left edge aligned with the button, 320 px wide, the file's Popover radius and shadow, no scrim. It may overlap the top of Camera 1 (it's temporary and user-opened).
 - Card content, top to bottom, 16 px padding:
   - Row: "Open the debrief on a tablet" (14 px medium) + close IconButton (X) on the right.
   - A 240 × 240 QR code, centred. If the file has no QR image, draw a QR-like placeholder: a white square with a 1 px border, three 56 px finder squares in the corners and a grey dotted fill, never a tiny icon scaled up.
   - 12 px muted, centred, max 2 lines: "Scan with the tablet's camera. It opens this recording's debrief."
   - Footer row: link-style Button with a link icon "Copy link" on the left, 12 px muted "Expires in 10 min" on the right.
 - Annotations:
   - On the card: "Opens on click, closes on X, Esc or click-away. Gabor's QR path, secondary to switching this screen to Debrief."
   - On "Expires in 10 min": "Open question for dev: does the tablet need its own sign-in, or does the code carry a short-lived session?"
When done: screenshot every edited frame plus D3 and check that nothing overlaps or is clipped, the bottom strips are identical across frames, and the QR card fits on the screen.
```

## After these run

- Send Claude the Section link for a screenshot QA round.
- Then pick, per pair, what goes to Gergely (A and B only): **L1 vs L3**, **AN1 vs AN2**. B, E and D are single proposals.
- After the pick: carry the chosen controls into the other SRV states (audio, learners, simulator) and file the final SRV state in the vault wiki.
