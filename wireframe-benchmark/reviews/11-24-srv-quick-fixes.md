# 11-24 · SRV quick fixes: 16:9 video, hide "Report a problem" (LSV-3)

Todoist "SRV quick fixes: 16:9, labels". Linear LSV-3. Done when the Figma comments on these three points can be resolved.

Claude read the file (read-only) on 11-24 before writing this. What it found:

| Fix | State on 11-24 | Section |
|---|---|---|
| Remove "Planned 20 min" from the progress bar | **Already done.** No text containing "Planned" is left on page "🧭 One app [D]" (Todoist task "LSV-3 - Remove 'Planned 20m' label" is done) | Q1 checks it only |
| Hide "Report a problem" in the room view top bar | Open. 30 frames | Q1 |
| Video tiles 16:9 | Open. Tiles stretch to fill the grid, so the main camera in "1 + 2" is 616 × 624 (almost square) | Q2 |

## How to run

Q1 and Q2 touch different layers, so they can run at the same time, each in its own new Cursor chat.

Q1 · model **Auto · Balance**. Reason: a loop that hides one layer per frame, with a full list of ids. No layout decisions.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q1 · Hide Report a problem". Run its check list and send the screenshots.`

Q2 · model **Auto · Intelligence**. Reason: it changes a component set with aspect-ratio locks and auto-layout sizing, and the 11-22 test showed Intelligence is as good as Balance and usually faster on the harder runs. If Auto Intelligence is not available, use Claude Sonnet 5.5 · High.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q2 · 16:9 video tiles". Run its check list and send the screenshots.`

## Rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3).
Main page: "🧭 One app [D]" (1749:8314).
Component page: "⚙️ Components (D)" (675:31351).

- Change only the nodes your section names. Nothing else on any page.
- Never detach an instance. Never delete a layer. "Hide" means visible = false.
- Do not create components, variants, styles or variables.
- IDs below are exact. If an id does not resolve, or a layer with the given name is not found where the section says, skip that one item and report it. Do not guess and do not build a workaround.
- Keep image fills, text and names as they are.
- Do not touch Figma comments or Dev Mode annotations.
- Report at the end: what changed (node ids), what was skipped and why, and the check list results.
```

## Q1 · Hide Report a problem

Every room view frame has a header with the instance "SRV / Header actions" (component set 565:29001). Inside it is the instance "Button · Report a problem". Hide that button in the **instances listed below only**. Do **not** change the component set on the Components page: the "Debrief" variant is used elsewhere and keeps its button.

Do not touch "V16 · Room view, report a problem" (1799:34353). It shows the report dialog, a v1.5 feature. It stays as the record of that state.

Do not touch the "Report a problem" buttons inside cards (RR1 1799:23890 and 1799:23899, RR2 I1799:38741, RR3 card I1799:40595). They are not in the top bar.

Steps:
1. For each frame id below: find inside it the first instance named "SRV / Header actions", then its child instance named "Button · Report a problem". Set visible = false on that child.
2. If a frame has no such instance, skip it and report it.

Frames on page 1749:8314:

| Frame | Id |
|---|---|
| L4 · Room view | 1752:40197 |
| P1 · Room view, Participants | 1752:17138 |
| P1b · Room view, Add a group | 1752:18768 |
| P3 · Room view, No learners yet | 1752:35244 |
| RR3 · Room view, room warning | 1799:39475 |
| V1 · Room view, ready to record | 1799:21249 |
| V2 · Room view, Layout & audio | 1799:21721 |
| V3 · Room view, annotations | 1799:22107 |
| V4 · Room view, checklist | 1799:22249 |
| V5 · Room view, intercom in use | 1799:22384 |
| V6 · Room view, stop confirmation | 1799:28639 |
| V7 · Room view, stopped | 1799:28803 |
| V8 · Room view, debrief hand-off | 1799:38871 |
| QR code | 1889:59329 |
| V9 · Room view, chapters | 1799:33933 |
| V10 · Room view, transcript | 1799:33993 |
| V11 · Room view, tab menu | 1799:34053 |
| V12 · Room view, side panel collapsed | 1799:34113 |
| V13 · Room view, intercom collapsed | 1799:34173 |
| V14 · Room view, no intercom | 1799:34233 |
| V15 · Room view, a camera stops | 1799:34293 |
| 06 · V1 · Room view, ready to record | 1929:29884 |
| 07 · V2 · Room view, Layout & audio | 1929:29937 |
| 08 · V3 · Room view, annotations | 1929:29991 |
| 09 · V5 · Room view, intercom in use | 1929:30064 |
| 10 · V15 · Room view, a camera stops | 1929:30130 |
| 11 · V7 · Room view, stopped | 1929:30191 |

3. Planned label check: search all text layers on page 1749:8314 for "Planned". Expected: none. If any is found, hide it (visible = false) and report its id and frame.

Check list:
- [ ] 27 buttons hidden (or a reason for each one skipped).
- [ ] The other header buttons (Layout & audio, learners, Share, Voice memo) are still visible and the header has no gap where the button was (the actions frame is auto-layout, so it closes up).
- [ ] V16 and the card buttons in RR1, RR2, RR3 are unchanged.
- [ ] Component set 565:29001 is unchanged.
- [ ] No text "Planned" on the page.
- [ ] Screenshots: the header of V1, V2 and V7.

## Q2 · 16:9 video tiles

All live and recorded video uses the component set "SRV / Camera grid" (1029:6901) on the Components page. Its tiles are instances of "SRV / Camera tile" (1027:6832) with an image fill. Today every tile is FILL / FILL, so its shape follows the grid, not the video. Change the **grid component set** so every tile is 16:9 and the grid's height follows the tiles. This is the one exception to "do not change components": only the nodes listed here, only the properties named.

Do not change "SRV / Camera tile" (1027:6832). Do not change the camera chip.

Target, per variant (component width stays 964, gap stays 12):

| Variant | Id | Change |
|---|---|---|
| Layout=Single | 1029:6902 | Tile "Camera 1" (1029:6903): width FILL, 16:9. Variant height HUG. Result 964 × 542 |
| Layout=Side by side | 1029:6907 | Tiles 1029:6908 and 1029:6912: width FILL, 16:9. Variant height HUG. Result tiles 476 × 268 |
| Layout=1 + 2 | 1029:6916 | Tile "Camera 1" (1029:6917): width FILL, 16:9. Frame "Side cameras" (1029:6921): width FIXED 316, height HUG. Tiles 1029:6922 and 1029:6926: width FILL, 16:9. Variant: height HUG, align items top (counterAxisAlignItems MIN). Result at 964: main 636 × 358, side tiles 316 × 178. 316 is chosen so main and side column are the same height (about 367) at 980, the width most room views use; at other widths a few px of difference is expected |
| Layout=2 × 2 | 1029:6930 | Rows 1029:6931 and 1029:6940: height HUG. The four tiles (1029:6932, 1029:6936, 1029:6941, 1029:6945): width FILL, 16:9. Variant height HUG. Result tiles 476 × 268, grid 548 high |
| Layout=3 × 3 | 1029:6949 | Rows 1029:6950, 1029:6963, 1029:6976: height HUG. The nine tiles: width FILL, 16:9. Variant height HUG. Result tiles 313 × 176 |

How to make a tile 16:9 (Plugin API):
1. `tile.layoutSizingHorizontal = 'FILL'`
2. `tile.layoutSizingVertical = 'FIXED'` then `tile.resize(tile.width, Math.round(tile.width * 9 / 16))`
3. `tile.lockAspectRatio()`
4. Check `tile.targetAspectRatio` is set (about 16 by 9). If the API refuses the lock on a FILL-width child, stop Q2 at this point, undo nothing else, and report the exact error. Do not fake it with fixed heights.

Variant height HUG: for a VERTICAL variant set `primaryAxisSizingMode = 'AUTO'`; for a HORIZONTAL variant set `counterAxisSizingMode = 'AUTO'`. Keep the width FIXED at 964.

Then the instances on page 1749:8314. They were given fixed heights (624, 644, 688, 410) that would now leave blank space inside the grid. For every instance of a variant of 1029:6901 on that page (35 instances: 23 room view frames, the L6c to L6g and P4 recording frames, and 7 Engineering demo copies): set `layoutSizingVertical = 'HUG'`. Keep its width and its Layout variant. Do not touch instances on other pages; the component change reaches them by itself. Report how many instances on other pages exist.

The space under a shorter grid stays empty for now. Do not move the timeline, the annotation input or the intercom strip.

Check list:
- [ ] Every tile in the five variants has targetAspectRatio 16:9 and width / height ≈ 1.78 (±0.01).
- [ ] In a 980-wide instance (V3, 1799:22216) the main tile is about 652 × 367 and the side tiles about 316 × 178. In V12 (1304 wide, 1799:34121) the main tile is about 976 × 549.
- [ ] No instance on page 1749:8314 is clipped or overlaps the timeline under it.
- [ ] "SRV / Camera tile" (1027:6832) is unchanged.
- [ ] Screenshots: V1 (2 × 2), V3 (1 + 2), V12 (wide), L6c (1785:17948, recording page, 932 wide).

## Review of Q1 and Q2 (Claude, 11-24, read-only)

- Q1: all 27 header buttons hidden, no gap in the header. V16 and the card buttons unchanged. Component set 565:29001 unchanged. No "Planned" text left. **Pass.**
- Q2: every tile 16:9 and locked, all 35 instances on HUG. **Pass**, with one problem: in "1 + 2" the side column (2 × 178 + 12 = 368) only matches the main tile at a grid width of 980. At 932 (the seven recording frames) the main tile is 340 high, so the side column hangs 28 px lower. At 1304 (V12) the main tile is 549 high and the side column stops 181 px short. Fix: Q3.

## Q3 · Align "1 + 2"

**Superseded by Q5 (11-24 review): the override did not apply; all eight "Side cameras" frames are still 316 wide. Do not run again.**

Model **Auto · Balance**. Reason: one size override per instance, all numbers given.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q3 · Align 1 + 2". Run its check list and send the screenshots.`

Why it is off: the main tile's height follows the grid width, but the side column's width is fixed at 316. Main and side column are only the same height when side width = (grid width − 33.33) / 3. So each grid width needs its own side width. The component stays as it is (316 fits 980, the width 22 of the 30 "1 + 2" instances on this page use). Only the instances with another width get an override.

Steps, page 1749:8314:
1. For each instance below, find its child frame "Side cameras" (component node 1029:6921, so its id in the instance is `I<instance id>;1029:6921`). Set its width to the value in the table: `side.resize(<width>, side.height)`, then set `side.layoutSizingVertical = 'HUG'` again (resize sets it to FIXED). Do not change anything else.
2. If Figma refuses to resize the frame inside the instance, stop and report the exact error. Do not detach and do not change the component.

| Frame | Grid instance | Grid width | Side cameras width | Expected main tile | Expected side column |
|---|---|---|---|---|---|
| L6c · Recording, Annotations | 1785:17948 | 932 | 300 | 620 × 349 | 300 wide, 349.5 high |
| L6d · Recording, Layout & audio | 1786:18270 | 932 | 300 | 620 × 349 | 300 × 349.5 |
| L6e · Recording, Checklist | 1786:19009 | 932 | 300 | 620 × 349 | 300 × 349.5 |
| L6f · Recording, Transcript | 1786:20373 | 932 | 300 | 620 × 349 | 300 × 349.5 |
| L6g · Recording, chapter list open | 1786:21263 | 932 | 300 | 620 × 349 | 300 × 349.5 |
| P4 · Recording, Link event and learners | 1818:29045 | 932 | 300 | 620 × 349 | 300 × 349.5 |
| 13 · L6d · Recording, Layout & audio | 1929:30391 | 932 | 300 | 620 × 349 | 300 × 349.5 |
| V12 · Room view, side panel collapsed | 1799:34121 | 1304 | 424 | 868 × 488 | 424 × 489 |

The 980-wide instances stay at 316 (main 367, side column 368; the 1 px is rounding).

Check list:
- [ ] In all eight instances the bottom of "Side cameras" is within 1 px of the bottom of "Camera 1".
- [ ] Side tiles are still 16:9 (width / height ≈ 1.78).
- [ ] Component 1029:6916 and the 980-wide instances unchanged.
- [ ] Screenshots: L6c and V12, grid only.

## Q4 · Report and restart on the camera tile

Model **Auto · Intelligence** (if not available: Claude Sonnet 5.5 · High). Reason: it adds three variants to a component, builds three frames and a Section. It is the largest run in this file. Q3 and Q4 touch different nodes, so they can run at the same time.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q4 · Report and restart on the camera tile". Run its check list and send the screenshots.`

What it shows (decided at the workshop on 11-17 and the design highlights on 11-19):
- When a camera stops, the tile itself offers the fix. There is no report button in the header any more.
- The path is: check, soft restart, check, hard restart, check, report. The facilitator presses one button, "Restart camera". The system runs the restarts and checks by itself. Remote restart is a 1.x feature; the frames show it, the captions say 1.x.
- "Report" is one click and has no form. The system attaches a diagnostics log. No support ticket is created automatically.

This run may change the component set "SRV / Camera tile" (1027:6832) on page "⚙️ Components (D)" (675:31351). That is the only exception to "do not change components" and "do not create variants". Do not change "SRV / Camera grid".

### Step 1 · Component "SRV / Camera tile"

The set has two variants: "State=Recording" (1027:6819) and "State=Not recording" (1027:6828). Leave "State=Recording" as it is.

1a. Change "State=Not recording" (1027:6828):
- In its frame "No signal" (1027:6824): hide the instance "icon/camera-off" (1027:6825), visible = false. The chip already has a warning icon, and the side tiles are too low for both.
- Set the gap of "No signal" to 4.
- Text "Title" (1027:6826) stays "No signal".
- Text "Help" (1027:6827): "This camera isn't recording." Keep width 240, set textAutoResize to HEIGHT.
- Add an auto-layout frame "Actions" as the last child of "No signal": horizontal, gap 8, padding top 8, other padding 0, hug both ways, no fill, centred in its parent.
- In "Actions" add two instances of the button set "Button" (684:17041), variant "Variant=Secondary, Size=SM, State=Rest, Type=Default, Elevation=none" (684:17066). Set "Icon#3:0" to false and "Label#3:97" to "Restart camera" and "Report". Name them "Button · Restart camera" and "Button · Report".

1b. Make three new variants. For each, clone the changed "State=Not recording" variant, append the clone to the set 1027:6832, and place it in the set to the right of the last variant, 40 px apart. If the set is not wide enough, resize the set so all variants show; do not move the set. Then change only what the table says. The chip text is "Status" (the clone of 1027:6830).

| New variant name | Status (chip) | Title | Help | Actions |
|---|---|---|---|---|
| State=Restarting | · Restarting | Restarting camera… | Takes about a minute. The other cameras keep recording. | Hide the frame "Actions" (visible = false) |
| State=Still no signal | · Not recording | Still no signal | The restart didn't help. Check the cable. | "Button · Restart camera": label "Try again", name "Button · Try again". "Button · Report": switch to variant "Variant=Primary, Size=SM, State=Rest, Type=Default, Elevation=none" (find it by exact name in set 684:17041), keep label "Report". Order: Report first, Try again second |
| State=Reported | · Reported | No signal · Reported | Sent with a diagnostics log. The other cameras keep recording. | Hide "Button · Report". Keep "Button · Restart camera" |

### Step 2 · Update V15

On page 1749:8314, frame "V15 · Room view, a camera stops" (1799:34293). Its tile "Camera 3" (I1799:34301;1029:6926) already uses "State=Not recording", so it picks up step 1a by itself. Do not change the frame.

Captions are one text layer with two lines separated by a line break. Load the caption's current fonts before you change it, and keep its style.

Set the text of "Caption · V15" (1799:38766):
- Line 1: `A camera stops. The tile offers "Restart camera" and "Report". There is no report button in the header.`
- Line 2: `Restart runs soft restart, check, hard restart, check by itself (remote restart: 1.x). Report is one click with a diagnostics log, no form.`

Set the text of "Caption · V16" (1799:38768):
- Line 1: `Superseded on 11-19: the report form goes. Reporting is the one-click "Report" on the camera tile (V15 to V15c).`
- Line 2: `Kept as a record. Do not build.`

### Step 3 · New Section with three frames

Create a Section "10b · A camera stops" on page 1749:8314 at x 0, y 16400, size 12640 × 1240. That area is empty; if anything is there, stop and report.

Build three frames in it, slots 1 to 3 (slot x = 80, 1640, 3200; y 120). Each is a clone of V15 (1799:34293), 1440 × 900. In each clone change only the variant of the tile "Camera 3" (inside "SRV / Camera grid" › "Side cameras"):

| Slot | Frame name | Camera 3 State |
|---|---|---|
| 1 | V15a · Room view, camera restarting | Restarting |
| 2 | V15b · Room view, restart didn't help | Still no signal |
| 3 | V15c · Room view, camera reported | Reported |

For each frame clone "Label · V15" (1799:38765) to y 76 above it, text = the frame name, layer name "Label · V15a" (V15b, V15c). Clone "Caption · V15" (1799:38766) to y 1044 under it, layer name "Caption · V15a" (V15b, V15c), with these two lines:

| Frame | Line 1 | Line 2 |
|---|---|---|
| V15a | The system restarts the camera: soft restart, check, hard restart, check. About a minute. | No action needed. Remote restart is 1.x. |
| V15b | The restart did not bring the picture back. "Report" is now the main action. | "Try again" runs the restart once more. |
| V15c | Reported. A diagnostics log went with it. No form, no ticket number for the facilitator. | Open: who receives the report and how it is triaged (Patrik, AV team). |

Check list:
- [ ] The set 1027:6832 has five variants: Recording, Not recording, Restarting, Still no signal, Reported. "State=Recording" is unchanged.
- [ ] In a side tile (316 × 178 in V15) the text and buttons sit inside the tile, below the chip, with no overlap and no clipped text. Check V15 and one 932-wide recording frame that uses "Not recording", if there is one; otherwise say there is none.
- [ ] The new Section is at x 0, y 16400 and holds the three frames, three labels and three captions.
- [ ] No detached instance. No hard-coded colour (button and text colours come from the components and variables already used in the tile).
- [ ] Nothing else on page 1749:8314 changed apart from the two caption texts.
- [ ] Screenshots: the component set 1027:6832, V15, V15a, V15b, V15c (grid area is enough).

## Review of Q3 and Q4 (Claude, 11-24, read-only)

- Q3: **did not apply.** In all eight instances "Side cameras" is still 316 wide (main 604 × 340 against a 368 side column at 932; 976 × 549 against 368 in V12). Per-instance width overrides are the wrong tool anyway: every new grid width would need its own number. Q5 replaces it.
- Q4: structure **passes**: five tile variants with the right texts, the V15 and V16 captions, Section "10b · A camera stops" with V15a to V15c, labels and captions in place. One visual defect: the Secondary buttons ("Restart camera", "Report", "Try again") are almost invisible on the dark tile. Their fill is Core/Neutral and their text Text/Primary, both light-mode values, on a Core/Background Inverted tile. Q5 fixes it with the library's dark mode.

## Q5 · Grid "1 + 2" and readable tile buttons

Model **Auto · Intelligence** (if not available: Claude Sonnet 5.5 · High). Reason: it uses Figma's grid auto-layout, which models get wrong more easily than rows and columns.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q5 · Grid 1 + 2 and readable tile buttons". Run its check list and send the screenshots.`

This run may change two component sets on page "⚙️ Components (D)" (675:31351): "SRV / Camera tile" (1027:6832), part A, and the variant "Layout=1 + 2" (1029:6916) of "SRV / Camera grid", part B. In part B you may delete the frame "Side cameras" (1029:6921) after it is empty. Nothing else.

### Part A · Dark mode for the tile buttons

In each of these four variants of 1027:6832, find the frame "Actions" (child of "No signal"):
- State=Not recording 1027:6828
- State=Restarting 2188:41626
- State=Still no signal 2188:41645
- State=Reported 2188:41681

On each "Actions" frame set the library colour collection to its dark mode:

```js
const coll = await figma.variables.getVariableCollectionByIdAsync('VariableCollectionId:c64c68ea5162efa87bf48d76ac2c9125ee711d8e/2042:102'); // Astryx "Color", modes "Neutral Light" 1:0, "Neutral Dark" 1:1
actions.setExplicitVariableModeForCollection(coll, '1:1');
```

Do not change the buttons themselves and do not hard-code colours. If the call fails, stop part A and report the exact error.

### Part B · Rebuild "1 + 2" on a 3-column grid

Why: with 16:9 tiles, a fixed-width side column only lines up with the main camera at one grid width. On a grid of three equal columns, the main camera spans two columns and two rows, so it always ends exactly where the side column ends, at any width. This is how the current product's "1 + 5" works too.

Today "Layout=1 + 2" (1029:6916) is horizontal: "Camera 1" (1029:6917), then frame "Side cameras" (1029:6921) with "Camera 2" (1029:6922) and "Camera 3" (1029:6926).

1. Move "Camera 2" (1029:6922) and then "Camera 3" (1029:6926) out of "Side cameras" into 1029:6916 with `appendChild`. Move them, do not clone them: the ids must stay, because instances (for example V15) override the State of "Camera 3".
2. Delete the empty frame "Side cameras" (1029:6921).
3. On 1029:6916 set: `layoutMode = 'GRID'`, `gridAutoTracks = 'NONE'`, `gridColumnCount = 3`, `gridRowCount = 2`, `gridColumnGap = 12`, `gridRowGap = 12`. Columns: all three `{ type: 'FLEX', value: 1 }`. Rows: both `{ type: 'HUG' }`. Width stays FIXED 964, height HUG. Padding 0.
4. "Camera 1" (1029:6917): `setGridChildPosition(0, 0)`, `gridColumnSpan = 2`, `gridRowSpan = 2`, `unlockAspectRatio()`, width FILL, height FILL.
5. "Camera 2" (1029:6922): `setGridChildPosition(0, 2)`, span 1 × 1, width FILL, aspect ratio stays locked at 16:9.
6. "Camera 3" (1029:6926): `setGridChildPosition(1, 2)`, span 1 × 1, width FILL, aspect ratio stays locked at 16:9.
7. If the grid will not size its rows from the locked side tiles (rows collapse, or the main camera sets the row height), stop part B, put nothing back by hand, and report what you see. Do not fall back to fixed heights.

Expected sizes (main camera is about 1.75 : 1, close to 16:9; the side tiles are exactly 16:9):

| Grid width | Side tiles | Main camera | Total height |
|---|---|---|---|
| 964 (component) | 313 × 176 | 639 × 365 | 365 |
| 980 (most room views) | 319 × 179 | 649 × 371 | 371 |
| 932 (recording frames) | 303 × 170 | 617 × 353 | 353 |
| 1304 (V12) | 427 × 240 | 865 × 492 | 492 |

Do not touch the instances. They already hug their height.

Check list:
- [ ] Part A: the buttons in all four no-signal variants are readable on the dark tile (light fill or light text). Screenshot of the set 1027:6832.
- [ ] Part B: 1029:6916 is a GRID with 3 FLEX columns and 2 HUG rows; "Side cameras" is gone; "Camera 2" and "Camera 3" kept their ids.
- [ ] On page 1749:8314, in V3 (grid 1799:22216), L6c (1785:17948) and V12 (1799:34121), the bottom of "Camera 1" and the bottom of "Camera 3" are within 1 px, and the right edges of "Camera 2" and "Camera 3" match the grid's right edge.
- [ ] V15 (1799:34293): "Camera 3" still shows "Not recording" with its two buttons.
- [ ] The other four grid variants are unchanged.
- [ ] Screenshots: V3, L6c, V12, V15 (grid area is enough).

## Q6 · Two more layouts: Stacked and 1 + 5

Run **after Q5** (it changes the same component set). Model **Auto · Intelligence** (if not available: Claude Sonnet 5.5 · High). Reason: new variants in two component sets plus grid auto-layout.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q6 · Two more layouts: Stacked and 1 + 5". Run its check list and send the screenshots.`

Why: the current product offers six layouts: side by side, stacked, 2 × 2, 1 + 5, 3 × 3, single. Ours has five and no Stacked or 1 + 5. This run adds both, so the design covers every layout the current product has, plus our 1 + 2.

This run may add variants to "SRV / Camera grid" (1029:6901), add variants to "SRV / Layout option" (1034:4510), and change the frame "Layout options" in "SRV / Layout & audio panel" (1048:5310). All on page "⚙️ Components (D)" (675:31351). Nothing else. Both sets are horizontal auto-layout, so an appended variant lands at the end by itself.

### Part A · Grid variant "Layout=Stacked"

1. Clone "Layout=Side by side" (1029:6907), append the clone to 1029:6901, rename it "Layout=Stacked".
2. Set it to `layoutMode = 'VERTICAL'`, gap 12, `counterAxisAlignItems = 'CENTER'`, width FIXED 964, height HUG.
3. Both tiles ("Camera 1", "Camera 2"): `layoutSizingHorizontal = 'FIXED'`, `resize(560, 315)`, aspect ratio stays locked at 16:9. Expected height of the variant: 315 + 12 + 315 = 642.

The tiles are fixed at 560 wide so two stacked 16:9 tiles fit the room view height. In a wider grid they stay 560 and centred.

### Part B · Grid variant "Layout=1 + 5"

1. Clone "Layout=3 × 3" (1029:6949), append the clone to 1029:6901, rename it "Layout=1 + 5".
2. In the clone, move "Camera 1" to "Camera 6" out of the three row frames into the variant itself (appendChild, in that order). Delete "Camera 7", "Camera 8", "Camera 9" and the three now-empty row frames.
3. On the variant set: `layoutMode = 'GRID'`, `gridAutoTracks = 'NONE'`, `gridColumnCount = 3`, `gridRowCount = 3`, `gridColumnGap = 12`, `gridRowGap = 12`, columns all `{ type: 'FLEX', value: 1 }`, rows all `{ type: 'HUG' }`. Width FIXED 964, height HUG, padding 0.
4. Positions:

| Tile | setGridChildPosition | Span | Size |
|---|---|---|---|
| Camera 1 | (0, 0) | 2 columns × 2 rows | `unlockAspectRatio()`, width FILL, height FILL |
| Camera 2 | (0, 2) | 1 × 1 | width FILL, locked 16:9 |
| Camera 3 | (1, 2) | 1 × 1 | width FILL, locked 16:9 |
| Camera 4 | (2, 0) | 1 × 1 | width FILL, locked 16:9 |
| Camera 5 | (2, 1) | 1 × 1 | width FILL, locked 16:9 |
| Camera 6 | (2, 2) | 1 × 1 | width FILL, locked 16:9 |

Expected at 964: small tiles 313 × 176, Camera 1 639 × 365, total height 553. Use the same grid settings that Q5 used for "Layout=1 + 2"; if Q5 reported a problem with HUG rows, stop here and report.

### Part C · Picker thumbnails "SRV / Layout option"

The set 1034:4510 has variants "Layout=<name>, State=Default|Selected". Each has a frame "Thumbnail" › "Schematic" (51 × 34) made of grey rectangles "Cell", and a text "Label".

1. Stacked: clone "Layout=Side by side, State=Default" (1034:4422) and "Layout=Side by side, State=Selected" (1034:4472). Rename to "Layout=Stacked, State=Default" and "Layout=Stacked, State=Selected". In each: "Schematic" becomes VERTICAL, gap 2; its two "Cell" rectangles become 28 × 16, centred. Label text "Stacked".
2. 1 + 5: clone "Layout=3 × 3, State=Default" (1034:4459) and "Layout=3 × 3, State=Selected" (1034:4509). Rename to "Layout=1 + 5, State=Default" and "Layout=1 + 5, State=Selected". In each: move the nine "Cell" rectangles into "Schematic" directly (if they are in row frames) and delete the empty row frames; delete three cells so six are left; set "Schematic" to GRID 3 × 3, all tracks FLEX 1, gaps 2, size 51 × 34 fixed; first cell at (0, 0) spanning 2 × 2, then (0, 2), (1, 2), (2, 0), (2, 1), (2, 2); all cells FILL width and height. Label text "1 + 5".
3. Order the variants in 1034:4510 so the Default row reads: Single, Side by side, Stacked, 1 + 2, 2 × 2, 1 + 5, 3 × 3, and the Selected row the same.

### Part D · The picker in "SRV / Layout & audio panel"

In 1048:5310, every variant that has a frame "Layout options" (for example 1048:5112 in "Length=Full"):
1. Set "Layout options" to wrap: `layoutWrap = 'WRAP'`, `counterAxisSpacing = 8`, keep its width.
2. Add two instances: "SRV / Layout option" with Layout=Stacked, State=Default, named "Layout option · Stacked", after "Layout option · Side by side"; and Layout=1 + 5, State=Default, named "Layout option · 1 + 5", after "Layout option · 2 × 2".
3. Keep "Layout option · 1 + 2 (selected)" as it is.

Check list:
- [ ] 1029:6901 has seven variants. "Layout=Stacked" is 964 × 642 with two 560 × 315 tiles. "Layout=1 + 5" is a GRID: Camera 1 spans 2 × 2 and its bottom and right edges line up with the small tiles within 1 px.
- [ ] 1034:4510 has 14 variants in the order above.
- [ ] The panel shows seven layout options on two rows, nothing clipped. Screenshot of V2 (1799:21721), where the panel is open.
- [ ] The five older grid variants and the instances on page 1749:8314 are unchanged.
- [ ] Screenshots: the set 1029:6901, the set 1034:4510, V2.

## Q7 · Section "Camera layouts"

Run **after Q6**. Model **Auto · Balance**. Reason: seven clones of one frame, one variant change each, all names and texts given.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q7 · Section Camera layouts". Run its check list and send the screenshots.`

Create a Section "10c · Camera layouts" on page 1749:8314 at x 0, y 17900, size 12640 × 1240. That area is empty; if anything is there, stop and report.

Seven frames, slots 1 to 7 (slot x = 80, 1640, 3200, 4760, 6320, 7880, 9440; y 120). Each is a clone of "V3 · Room view, annotations" (1799:22107), 1440 × 900. In each clone change only the "Layout" property of its instance "SRV / Camera grid" (inside "Camera content"). Keep the tiles' default states (all recording).

For each frame clone "Label · V15" (1799:38765) to y 76 above it (text = frame name, layer "Label · LY<n>") and "Caption · V15" (1799:38766) to y 1044 under it (layer "Caption · LY<n>"). Captions are one text with two lines; load the caption's fonts first and keep its style. Line 2 is the same for all: `Picked in "Layout & audio". Every tile is 16:9; in grid layouts the large camera is about 1.75 : 1 so the edges line up.`

| Slot | Frame name | Layout | Caption line 1 |
|---|---|---|---|
| 1 | LY1 · Room view, layout Single | Single | One camera at full size. The facilitator picks which one. |
| 2 | LY2 · Room view, layout Side by side | Side by side | Two cameras next to each other. Rooms with 2 cameras. |
| 3 | LY3 · Room view, layout Stacked | Stacked | Two cameras, one above the other, as in the current product. Leaves space at the sides on a wide screen. |
| 4 | LY4 · Room view, layout 1 + 2 | 1 + 2 | One main camera and two smaller ones. Rooms with 3 cameras. |
| 5 | LY5 · Room view, layout 2 × 2 | 2 × 2 | Four equal cameras. Rooms with 4 cameras. |
| 6 | LY6 · Room view, layout 1 + 5 | 1 + 5 | One main camera and five smaller ones, as in the current product. Rooms with 5 or 6 cameras. |
| 7 | LY7 · Room view, layout 3 × 3 | 3 × 3 | Nine equal cameras. Rooms with 7 to 9 cameras. |

Check list:
- [ ] Seven frames with exact names, each with label and caption.
- [ ] In every frame the grid sits above the timeline with no overlap and no clipping; say the grid height of each.
- [ ] Nothing outside the new Section changed.
- [ ] One screenshot of the whole Section.

## Review of Q5 to Q7 (Claude, 11-24, read-only)

- Q5: grid "1 + 2" passes at every width; tile buttons readable. **Defect:** a tile that switches to a no-signal state loses its 16:9 lock (the lock sat on the instance, not on the tile variants), so Camera 3 collapses to 84 px in V15 and V15a to V15c. Fixed in Q8 part A.
- Q6: passes. Deviations accepted (13 px thumbnail cells, picker options fixed 61 wide, picker set 651 wide).
- Q7: passes, except LY3 (Stacked) clips the annotation input by 2 px. Fixed by Q8 part C.
- Daniel, 11-24: maximise the video. Decision: the video sits in a "Video box" that takes all the height above the controls; the timeline and annotation input sit at the bottom; each grid is as large as fits the box in both directions, 16:9, centred.

## Q8 · Video fills the space

Model **Auto · Intelligence** (if not available: Claude Sonnet 5.5 · High). Reason: component changes plus a structural change in 38 frames.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q8 · Video fills the space". Run its check list and send the screenshots.`

This run may change "SRV / Camera tile" (1027:6832) and the variant "Layout=Stacked" (2197:13505) of "SRV / Camera grid" on page "⚙️ Components (D)", and the frames in the table of part C on page 1749:8314. Nothing else. Do parts A, B, C in that order.

### Part A · Lock 16:9 on every tile variant

For each variant of 1027:6832: "State=Recording" (1027:6819), "State=Not recording" (1027:6828), "State=Restarting" (2188:41626), "State=Still no signal" (2188:41645), "State=Reported" (2188:41681):
1. `resize(336, 189)`, then `lockAspectRatio()`.
2. Do not change anything inside the variant.

Then check: in the grid variants "Layout=1 + 2" (1029:6916) and "Layout=1 + 5" (2197:14367), "Camera 1" must still be unlocked and span 2 × 2 (Q5 and Q6 unlocked it on purpose). If it got locked, call `unlockAspectRatio()` on that nested "Camera 1" and report it.

### Part B · Stacked follows the width

In "Layout=Stacked" (2197:13505): both tiles `layoutSizingHorizontal = 'FILL'` (they were FIXED 560), aspect ratio stays locked. The variant keeps width FIXED and height HUG. At 964 it becomes 964 × 1096; that is fine, because every instance sets its own width in part C.

### Part C · Video box in every room view

For each frame in the table below, inside its frame "Camera content" (vertical, padding 16, gap 12):
1. Create a frame "Video box": `layoutMode = 'VERTICAL'`, `primaryAxisAlignItems = 'CENTER'`, `counterAxisAlignItems = 'CENTER'`, padding 0, gap 0, no fill, no stroke, clip content off.
2. Insert it into "Camera content" at index 0. Then `layoutSizingHorizontal = 'FILL'` and `layoutSizingVertical = 'FILL'`.
3. Move the instance "SRV / Camera grid" (the "Grid" id in the table) into "Video box".
4. Grid: `layoutSizingHorizontal = 'FIXED'`, `resize(<W>, grid.height)`, then `layoutSizingVertical = 'HUG'`.
5. Leave the timeline (or playback bar) and the annotation input as they are. They now sit at the bottom of "Camera content".
6. Check the grid height against "H" (±1). If it is off by more, report the frame and stop.

W is the largest width at which the grid fits the box in both directions. The box is the space above the controls: "Camera content" minus padding, the two controls and the gaps.

| Frame | Id | Grid | Layout | Box | W | H |
|---|---|---|---|---|---|---|
| L4 · Room view | 1752:40197 | 1752:40206 | 1 + 2 | 972 × 624 | 972 | 368 |
| P1 · Room view, Participants | 1752:17138 | 1752:17147 | 2 × 2 | 972 × 624 | 972 | 552 |
| P1b · Room view, Add a group | 1752:18768 | 1752:18777 | 2 × 2 | 972 × 624 | 972 | 552 |
| P3 · Room view, No learners yet | 1752:35244 | 1752:35253 | 2 × 2 | 972 × 624 | 972 | 552 |
| RR3 · Room view, room warning | 1799:39475 | 1799:39483 | 1 + 2 | 972 × 624 | 972 | 368 |
| V1 · Room view, ready to record | 1799:21249 | 1799:21358 | 2 × 2 | 972 × 624 | 972 | 552 |
| V2 · Room view, Layout & audio | 1799:21721 | 1799:21830 | 1 + 2 | 972 × 624 | 972 | 368 |
| V3 · Room view, annotations | 1799:22107 | 1799:22216 | 1 + 2 | 972 × 624 | 972 | 368 |
| V4 · Room view, checklist | 1799:22249 | 1799:22358 | 1 + 2 | 972 × 624 | 972 | 368 |
| V5 · Room view, intercom in use | 1799:22384 | 1799:22493 | 1 + 2 | 972 × 624 | 972 | 368 |
| V6 · Room view, stop confirmation | 1799:28639 | 1799:28748 | 1 + 2 | 972 × 624 | 972 | 368 |
| V7 · Room view, stopped | 1799:28803 | 1799:28912 | 1 + 2 | 972 × 688 | 972 | 368 |
| V8 · Room view, debrief hand-off | 1799:38871 | 1799:38879 | 1 + 2 | 972 × 688 | 972 | 368 |
| QR code | 1889:59329 | 1889:59337 | 1 + 2 | 972 × 688 | 972 | 368 |
| V9 · Room view, chapters | 1799:33933 | 1799:33941 | 1 + 2 | 972 × 624 | 972 | 368 |
| V10 · Room view, transcript | 1799:33993 | 1799:34001 | 1 + 2 | 972 × 624 | 972 | 368 |
| V11 · Room view, tab menu | 1799:34053 | 1799:34061 | 1 + 2 | 972 × 624 | 972 | 368 |
| V12 · Room view, side panel collapsed | 1799:34113 | 1799:34121 | 1 + 2 | 1304 × 624 | 1304 | 492 |
| V13 · Room view, intercom collapsed | 1799:34173 | 1799:34181 | 1 + 2 | 972 × 644 | 972 | 368 |
| V14 · Room view, no intercom | 1799:34233 | 1799:34241 | 1 + 2 | 972 × 688 | 972 | 368 |
| V15 · Room view, a camera stops | 1799:34293 | 1799:34301 | 1 + 2 | 972 × 624 | 972 | 368 |
| V16 · Room view, report a problem | 1799:34353 | 1799:34361 | 1 + 2 | 972 × 624 | 972 | 368 |
| 06 · V1 · Room view, ready to record | 1929:29884 | 1929:29892 | 2 × 2 | 972 × 624 | 972 | 552 |
| 07 · V2 · Room view, Layout & audio | 1929:29937 | 1929:29945 | 1 + 2 | 972 × 624 | 972 | 368 |
| 08 · V3 · Room view, annotations | 1929:29991 | 1929:29999 | 1 + 2 | 972 × 624 | 972 | 368 |
| 09 · V5 · Room view, intercom in use | 1929:30064 | 1929:30072 | 1 + 2 | 972 × 624 | 972 | 368 |
| 10 · V15 · Room view, a camera stops | 1929:30130 | 1929:30138 | 1 + 2 | 972 × 624 | 972 | 368 |
| 11 · V7 · Room view, stopped | 1929:30191 | 1929:30199 | 1 + 2 | 972 × 688 | 972 | 368 |
| V15a · Room view, camera restarting | 2188:41701 | 2188:41709 | 1 + 2 | 972 × 624 | 972 | 368 |
| V15b · Room view, restart didn't help | 2188:41746 | 2188:41754 | 1 + 2 | 972 × 624 | 972 | 368 |
| V15c · Room view, camera reported | 2188:41791 | 2188:41799 | 1 + 2 | 972 × 624 | 972 | 368 |
| LY1 · Room view, layout Single | 2198:39432 | 2198:39440 | Single | 972 × 624 | 972 | 547 |
| LY2 · Room view, layout Side by side | 2198:39508 | 2198:39516 | Side by side | 972 × 624 | 972 | 270 |
| LY3 · Room view, layout Stacked | 2198:39591 | 2198:39599 | Stacked | 972 × 624 | 544 | 624 |
| LY4 · Room view, layout 1 + 2 | 2198:39674 | 2198:39682 | 1 + 2 | 972 × 624 | 972 | 368 |
| LY5 · Room view, layout 2 × 2 | 2198:39743 | 2198:39751 | 2 × 2 | 972 × 624 | 972 | 552 |
| LY6 · Room view, layout 1 + 5 | 2198:39830 | 2198:39838 | 1 + 5 | 972 × 624 | 972 | 557 |
| LY7 · Room view, layout 3 × 3 | 2198:39941 | 2198:39949 | 3 × 3 | 972 × 624 | 972 | 557 |

The recording pages (L6c to L6g, P4) are not room views and are not in this run.

Check list:
- [ ] Part A: all five tile variants are 336 × 189 and locked. In V15, V15a, V15b, V15c, "Camera 3" is 16:9 (about 316 × 178) and the chip does not overlap the text.
- [ ] Part A: "Camera 1" in 1029:6916 and 2197:14367 is unlocked and spans 2 × 2.
- [ ] Part C: in all 38 frames the timeline and the annotation input end at the bottom of "Camera content", and the grid is centred in "Video box" with W and H as in the table.
- [ ] LY3 no longer clips the annotation input.
- [ ] Nothing outside the listed frames and components changed.
- [ ] Screenshots: V3, V15, V15a, LY2, LY3, V12.

## Q9 · Section "Camera layouts, panel collapsed"

Run **after Q8**. Model **Auto · Balance**. Reason: seven clones of one frame, one variant change and one width each, all numbers given.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q9 · Section Camera layouts, panel collapsed". Run its check list and send the screenshots.`

Create a Section "10d · Camera layouts, panel collapsed" on page 1749:8314 at x 0, y 19400, size 12640 × 1240. That area is empty; if anything is there, stop and report.

Seven frames, slots 1 to 7 (slot x = 80, 1640, 3200, 4760, 6320, 7880, 9440; y 120). Each is a clone of "V12 · Room view, side panel collapsed" (1799:34113), which after Q8 has a "Video box". In each clone change only the "Layout" property of "SRV / Camera grid" and its width: `resize(<W>, grid.height)`, then `layoutSizingVertical = 'HUG'`. The box is 1304 × 624.

Labels and captions as in Q7: clone "Label · V15" (1799:38765) to y 76 and "Caption · V15" (1799:38766) to y 1044, layer names "Label · LC<n>" and "Caption · LC<n>", captions one text with two lines, fonts loaded first.

| Slot | Frame name | Layout | W | H | Caption line 1 | Caption line 2 |
|---|---|---|---|---|---|---|
| 1 | LC1 · Room view, panel collapsed, Single | Single | 1109 | 624 | One camera, as large as the height allows. | Panel open: 972 × 547. |
| 2 | LC2 · Room view, panel collapsed, Side by side | Side by side | 1304 | 363 | Two cameras next to each other. The best 2-camera layout with the panel collapsed. | Panel open: 480 × 270 per camera. |
| 3 | LC3 · Room view, panel collapsed, Stacked | Stacked | 544 | 624 | Two cameras, one above the other. The same size as with the panel open. | Panel open: the best 2-camera layout (544 × 306 per camera). |
| 4 | LC4 · Room view, panel collapsed, 1 + 2 | 1 + 2 | 1304 | 492 | One main camera and two smaller ones. | Panel open: main camera 644 × 368. |
| 5 | LC5 · Room view, panel collapsed, 2 × 2 | 2 × 2 | 1100 | 624 | Four equal cameras, as large as the height allows. | Panel open: 480 × 270 per camera. |
| 6 | LC6 · Room view, panel collapsed, 1 + 5 | 1 + 5 | 1090 | 624 | One main camera and five smaller ones. | Panel open: small cameras 316 × 178. |
| 7 | LC7 · Room view, panel collapsed, 3 × 3 | 3 × 3 | 1090 | 624 | Nine equal cameras. | Panel open: 316 × 178 per camera. |

Check list:
- [ ] Seven frames with exact names, labels and captions.
- [ ] Each grid has W and H as in the table (±1), centred in "Video box", with no overlap and no clipping.
- [ ] Nothing outside the new Section changed.
- [ ] One screenshot of the whole Section, plus LC2 and LC5 at readable size.

## Q8 and Q9: done by Claude directly (11-24)

Daniel asked Claude to make these changes itself this once, instead of Cursor. Do not run Q8 or Q9 in Cursor.

- Part A: all five tile variants 336 × 189 with a locked 16:9 ratio. "Camera 1" in "1 + 2" and "1 + 5" stayed unlocked, spanning 2 × 2.
- Extra fix found on the way: after a state swap, the side tiles in RR3, V15 and V15a to V15c kept a FILL height and the grid collapsed (274 instead of 368). The locked tiles in the grid variants now have a FIXED height (the ratio sets it), so every instance is 16:9 again. No tile on page 1749:8314 is off 16:9.
- Part B: "Layout=Stacked" tiles follow the width.
- Part C: "Video box" in all 38 room views. Every grid matches W and H from the table (±1); the controls end at the bottom of "Camera content" in every frame. LY3 no longer clips.
- Q9: Section "10d · Camera layouts, panel collapsed" (2202:45449) at y 19400 with LC1 to LC7, labels and captions. LC5 uses W 1098 (H 623) instead of 1100, which overflowed the box by 1 px.

## Q10 · One main action per camera state

Model **Auto · Balance** (if not available: Claude Sonnet 5.5 · Medium). Reason: property changes on six known button and frame ids plus four captions. No layout, no new nodes.

`Read @wireframe-benchmark/reviews/11-24-srv-quick-fixes.md. Apply "Rules", then run ONLY section "Q10 · One main action per camera state". Run its check list and send the screenshots.`

Why (Daniel's review, 11-24): "Report" sat on the right in "Not recording" and on the left in "Still no signal", and it showed before the user had tried a restart. The 11-17 workshop path is restart first, report only if that did not help. "Reported" still offered "Restart camera", which invites rage clicks. New rule: each state has one main action, centred.

| State | Buttons after Q10 |
|---|---|
| Not recording | "Restart camera" only, Primary |
| Restarting | none (no change) |
| Still no signal | "Report" Primary, then "Try again" Secondary (no change) |
| Reported | none. The tile comes back by itself when the signal returns |

This run may change the component set "SRV / Camera tile" (1027:6832) on page "⚙️ Components (D)" (675:31351), only the nodes listed in Step 1. Do not change "State=Recording", "State=Restarting" or "State=Still no signal". Do not change the tile size, the aspect-ratio lock or the "Actions" dark mode. Do not change "SRV / Camera grid".

### Step 1 · Component "SRV / Camera tile"

1a. "State=Not recording" (1027:6828), frame "Actions" (2188:41303):
- Hide "Button · Report" (2188:41313): visible = false.
- On "Button · Restart camera" (2188:41304) switch the variant with `setProperties({ 'Variant': 'Primary' })`. Do not use swapComponent. Afterwards its main component must be 684:17042 ("Variant=Primary, Size=SM, State=Rest, Type=Default, Elevation=none"), and "Label#3:97" must still be "Restart camera" and "Icon#3:0" still false. If the property key is not exactly "Variant", read `componentProperties` on 2188:41304, use the key whose name starts with "Variant", and report which key you used.

1b. "State=Reported" (2188:41681):
- Hide the frame "Actions" (2188:41690): visible = false. Do not change the two buttons inside it.
- Text "Help" (2188:41689): set to `Sent with a diagnostics log. It comes back by itself when the signal returns.` Load its current font first. Keep width 240 and textAutoResize HEIGHT.

### Step 2 · Captions on page "🧭 One app [D]" (1749:8314)

Captions are one text layer with two lines separated by a line break. Load each caption's current fonts before you change it, and keep its style. Change only these two.

"Caption · V15" (1799:38766):
- Line 1: `A camera stops. The tile offers one action, "Restart camera". There is no report button in the header.`
- Line 2: `Restart runs soft restart, check, hard restart, check by itself (remote restart: 1.x). "Report" shows only if the restart did not help (V15b).`

"Caption · V15c" (2188:41835):
- Line 1: `Reported. A diagnostics log went with it. No buttons: the tile comes back by itself when the signal returns.`
- Line 2: `Open: who receives the report and how it is triaged (Patrik, AV team).`

### Check list

- [ ] 1027:6828: the only visible child of "Actions" is "Button · Restart camera", main component 684:17042, label "Restart camera".
- [ ] 2188:41681: "Actions" (2188:41690) visible = false; "Help" has the new text.
- [ ] 2188:41626 and 2188:41645 unchanged.
- [ ] Every variant in 1027:6832 is still 336 × 189. Run this on page 1749:8314 and report the result. It must return an empty list:

```js
await figma.setCurrentPageAsync(await figma.getNodeByIdAsync('1749:8314'));
const bad = figma.currentPage.findAll(n => n.type === 'INSTANCE' && n.mainComponent?.parent?.id === '1027:6832')
  .filter(t => Math.abs(t.width / t.height - 16 / 9) > 0.02 && !(t.name === 'Camera 1' && t.width > 500))
  .map(t => ({ id: t.id, w: Math.round(t.width), h: Math.round(t.height) }));
return bad;
```

  ("Camera 1" in "1 + 2" and "1 + 5" spans 2 × 2 and is meant to be unlocked. If the list shows only those, say so.)
- [ ] Captions V15 and V15c have the new text, two lines each.
- [ ] Screenshots: the set 1027:6832, V15 (1799:34293), V15b (2188:41746) and V15c (2188:41791).

## Review of Q10 (Claude, 11-24, read-only)

All checks pass. Not recording shows only "Restart camera" (Primary). Reported has no buttons and the new help text. Restarting and Still no signal are unchanged. All five variants are 336 × 189, the 16:9 check returns an empty list, and the V15 and V15c captions are correct.

Open: "Try again" in Still no signal repeats the full restart cycle. Kept for now. Daniel will ask Patrik. A "Question [AI]" annotation on the Camera 3 tile in V15b (I2188:41754;1029:6926) is the reminder. Claude added it at Daniel's request.
