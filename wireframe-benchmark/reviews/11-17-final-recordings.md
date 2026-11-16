# 11-17 · Final round: Recordings, more states

Topic T07 "Historical Video Review". This file adds the states that the Recordings frames do not show yet: the filter menu, the empty list states, the Share dialog, the Download menu, the transcript search and the annotation menu. It also cleans up "L6b · Recording, Debrief tab" and marks where the separate Debrief design plugs in. It builds one new Section. The only existing frame it edits is L6b (section F1).

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. The old video review file is `11-16-merge-f8-video-review.md` (it built L6c to L6g). The audit with all missing states is `audit-B-recordings-rooms-import.md` (Claude side notes).

## Context

- This file is for AFTER the workshop of 11-17. Nothing in it is needed for the workshop.
- The audit of 11-16 found these gaps in the Recordings module: filter menu and chips, empty list and no results, Share and Download results, transcript search with results, annotation menu, and leftover placeholder texts in L6b.
- Not drawn on purpose: Debrief content (Gabor designs it separately), sort arrows, loading and error states, playback speed and full screen (the component "SRV / Playback bar" has neither).
- No component is changed. Every menu is built from one existing frame plus instances of one existing component (see "POPOVER MENU" in the RC rules).

## What I found in the file (11-16 evening, read-only)

- Page "🧭 One app · merge [D]" `1749:8314`. The lowest top-level node is Section "7 · Search (later, not MVP)" `1776:16712` at y 10400 (ends y 11640). Nothing sits at y 16300 to 17700. Section "11 · Recordings, more states" does not exist. Section "5 · Import" `1749:8320` has one fill: white, opacity 0.4.
- "L5 · Recordings" `1752:17702` (1440 × 900, vertical, one child "Body"). "Body" > "SideNav" + "Content" `1752:17706`. "Content" holds in this order: "Page header" `1752:17711` (the instance "Button · Customize" is hidden), "Filter row" `1752:32239` (24, 100; 1132 × 32; horizontal, gap 8; one child "Search field" `1752:32240`, a plain frame 360 × 32, fill white, radius 10, padding left 12, with one text "Search title, learner or room" `1752:32301`, Regular 14, text/secondary), "Add filter row" `1767:18132` (24, 156; 1132 × 28; horizontal, gap 8; one child "Button · Add filter" `1767:18133`, Secondary SM, label property `Label#3:97`, 108 × 28), "Card · Recordings" `1752:32245` (24, 208; 1132 × 422).
- "Card · Recordings" holds "Columns header" `1752:32246` (40 high), six rows (each 56 high: "Row · NURS 310 · Group A · 18 Jan 2027" `1752:32253`, "Row · NURS 340 · Group B · 18 Jan 2027" `1752:32260`, "Row · Ad hoc · Skills Lab 1 · 15 Jan 2027" `1752:32267`, "Row · NURS 310 · Group B · 14 Jan 2027" `1752:32274`, "Row · Paramedic intake 3 · 13 Jan 2027" `1752:32281`, "Row · NURS 340 · Group B · 12 Jan 2027" `1752:32288`) and "Footer row" `1752:32295` (texts "Showing 6 of 38 recordings" `1752:32348` and "Load more" `1752:32349`). Every row has the cells "Cell · Date", "Cell · Title", "Cell · Room" (text "Sim Room 2" in the first row), "Cell · Learners", "Cell · Scenario", "Cell · Length".
- "Button · Add filter" in L5, relative to the frame: x 284, y 156, 108 × 28 (bottom edge y 184).
- "L6c · Recording, Annotations" `1785:17271` (1440 × 900, slot 4 of Section 2). "Body" > "SideNav" + "Content" `1785:17274`. "Content" > "Tab row" `1785:17283` > "Actions" `1785:17285` with "Button · Layout & audio" `1785:17321`, "Button · Download" `1785:17286` and "Button · Share" `1785:17287`. "Button · Download", relative to the frame: x 1259, y 146, 88 × 28 (right edge x 1347, bottom edge y 174).
- In L6c, the instance "SRV / Side panel" `1785:17618` (Tab = Annotations) holds a "List" with six instances "Annotation · 03:05 · Ehli", "Annotation · 04:12 · Discuss", "Annotation · 06:05 · Good practice", "Annotation · 07:30 · Marker", "Annotation · 11:20 · Ehli", "Annotation · 15:40 · Good practice". The first one has a "Row 1" with the instance "IconButton · More actions" (Ghost, SM, 28 × 28). Relative to the frame: x 1359, y 313.
- "L6f · Recording, Transcript" `1786:20353` (slot 7 of Section 2). It holds the instance "SRV / Side panel · exploration" `1786:20554` (Overlay = Closed). Inside it: "Content" > "Fixed top" > "Transcript toolbar" > the nested instance "SRV / Transcript search" (State = Empty). The component set "SRV / Transcript search" `570:55170` has one property: "State" = Empty, No results, Results. In "Results" the input reads "lactate" and the counter reads "1 of 2". In "No results" the input reads "insulin" and the counter "0 results". All three are 348 × 32.
- "L6b · Recording, Debrief tab" `1752:38118` (1440 × 900, slot 3 of Section 2). "Body" > "SideNav" + "Content" `1752:38122` (vertical, padding 24, gap 24). "Content" holds in this order: "Breadcrumb", "Page header", "Tab row" `1752:38131`, "Body" `1752:38136` (24, 200; 1132 × 644, horizontal, gap 24). "Body" holds "Left column" `1752:38485` (480 wide: "Video", "Playback · simple track", "Card · Marked moments") and "Right column" `1752:38487` (628 wide: "SRV / Feedback content" `1752:38570`, "Card · Checklist results" `1752:38488`, text "Note · Placeholder" `1752:38637`).
- The two leftover layers are real text layers, both Regular 12, text/secondary: `1752:38636` (inside "Card · Checklist results", reads "Placeholder. The full checklist comes from the debrief design.") and `1752:38637` (last child of "Right column", reads "Placeholder. The debrief content comes from the debrief design.").
- Components page "⚙️ Components (D)" `675:31351`:
  - "SRV / Share dialog" `1095:5841`: property "AI" = Not reviewed, Reviewed. Each variant is 600 × 576. The variant "AI=Reviewed" is `1095:5768`. Its title is "Share with learners"; its buttons read "Cancel" and "Share with 4 learners".
  - "SRV / Tab menu row" `1039:4810`: property "State" = Checked, Unchecked, Locked, Action; text property `Label#1039:5`; instance swap `Icon#1039:0`. The variant "State=Action" is `1039:4832`: 220 × 36, horizontal, padding 8, gap 8; children "Check" (empty frame, 16), "Tab icon" (instance, 16), "Label" (text, Medium 14, width fill).
  - "SRV / Tab menu" `1041:4818` is a component made of rows. Its rows cannot be added or removed without detaching, so it is NOT used.
- Page "👤 SRV flow [D]" `960:51213`: "Dim" `1360:9294` (rectangle, black 50 %, 1440 × 948, absolute) in "S8 · Stop confirmation". "Badge · No devices" `1605:5909` (Neutral, text property `Label#8:11`, 77 × 20) in "AV0 · Rooms". "Label · AV0" `1603:10620` and "Caption · AV0" `1603:10621` (1440 wide, two lines) in "AV setup · Sketches".
- Text sources in "L8 · Room, AV tab" `1752:19374`, all with text colour bound to a variable: card title Bold 14 "Cameras" `1752:19780`; body Regular 14 "PTZ camera" `1752:19797` (text/primary); muted Regular 12 "3 cameras · 1 not found" `1752:19781`; link Medium 14 "Overhead camera" `1752:19794`.
- "Popover · Start event" `1752:32565` in "L1 · Today" `1752:18102`: a plain frame (not an instance), absolute, vertical, padding 16, gap 12, fill white bound to a variable, 1 px stroke, radius 12, no effect.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "11 · Recordings, more states" at x 0, y 16400. Sections 8, 9 and 10 of the other final-round files sit above it (y 11900, 13400, 14900) |
| Menus | One recipe for all three menus: clone the frame "Popover · Start event" `1752:32565`, delete its children, fill it with instances of "SRV / Tab menu row" `1039:4810` (State = Action) with the check and the icon hidden. This needs the fewest changes and no new component |
| Filter chip | A clone of the Neutral badge `1605:5909` with the label "Room: Sim Room 2". It is a status-style chip, not a removable chip. Removing is not drawn |
| Filter result | L5b also narrows the list to the rows of Sim Room 2, so the chip and the list agree |
| Empty states | Plain text in the card, centred. The column header stays for "no results" and goes away for "none yet" |
| Share | The existing "SRV / Share dialog", variant "Reviewed", over a dim layer on a clone of L6c |
| Download | Four rows: video with all cameras, video with the current layout, annotations as CSV, transcript as TXT |
| Debrief | L6b only gets a hand-off note. Debrief content is not designed here |

## Open questions for the workshop

- Which formats must the Download menu offer? Is video with all cameras one file or one file per camera?
- Who can share a recording: every faculty member, or only the facilitator of the event?
- Does a share link expire? Can it be recalled? (The dialog says it cannot be recalled.)
- Should the filter list also contain Learner and Scenario (the search field mentions them)?

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line. Run A and Run B both write in Section "11 · Recordings, more states". Do NOT run them at the same time: start Run B when Run A has finished (Run A creates the Section). Run F writes in Section "2 · Recordings and debrief" and nothing else may write in Section 2 while it runs. Run F may run at the same time as Run A or Run B. Other final-round files that write in other Sections may run in parallel with all three.

Run A (Section and the list states).

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-recordings.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RC rules" from the second file. Then run these sections of the second file, in this order: "A1 · Section and L5b", "A2 · L5c no results", "A3 · L5d none yet". After each section, run its check list and take a screenshot before you start the next section.`

Run B (the recording states). It needs the Section from Run A.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-recordings.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RC rules" from the second file. Then run these sections of the second file, in this order: "B1 · L6h share", "B2 · L6i download", "B3 · L6j transcript search", "B4 · L6k annotation menu". After each section, run its check list and take a screenshot before you start the next section.`

Run F (L6b clean-up; writes in Section 2).

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-recordings.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RC rules" from the second file. Then run these sections of the second file, in this order: "F1 · L6b clean-up and Debrief hand-off". After each section, run its check list and take a screenshot before you start the next section.`

## RC rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Runs A and B: write only inside the Section "11 · Recordings, more states". Section A1 creates it. Run F: write only inside "L6b · Recording, Debrief tab" (1752:38118) in Section "2 · Recordings and debrief" (1749:8317). Never change any other Section or any other frame. You may clone from them.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar. The logo in the side navigation is allowed.
- Never edit, rename or move anything on "⚙️ Components (D)" (675:31351) or "👤 SRV flow [D]" (960:51213). You may create instances of their components and clone placed nodes.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility.
- Never draw a badge or a button. Clone an existing one. To change a badge colour, set its property "Variant". To change a label, set the text property (read its exact key from componentProperties; the keys end with a "#id", for example "Label#3:97" on buttons and "Label#8:11" on the badge).
- IDs refer to source nodes. Inside a clone, find layers by their exact name.
- Fonts: load the font of every text before you change it.
- A clone made on another page (the badge, "Dim") must be moved into the target frame in the same script. If the move across pages fails, stop that step and report it.
- Word scan: look at the visible text layers only. Hidden layers (for example the hidden "Button · Customize") are ignored.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.

SLOTS in Section "11 · Recordings, more states" (frames at y 120, labels at y 76, captions at y 1044)
- Slot 1, x 80: "L5b · Recordings, filter open"
- Slot 2, x 1640: "L5c · Recordings, no results"
- Slot 3, x 3200: "L5d · Recordings, none yet"
- Slot 4, x 4760: "L6h · Recording, Share"
- Slot 5, x 6320: "L6i · Recording, Download"
- Slot 6, x 7880: "L6j · Recording, transcript search"
- Slot 7, x 9440: "L6k · Recording, annotation menu"
- Slot 8 stays empty.
Every frame is a clone of an existing frame, 1440 × 900, clip content on. Put the clone into the Section with appendChild, then set x and y (relative to the Section).

LABEL AND CAPTION (every frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>" (for example "Label · L5b"). Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide. Name "Caption · <code>". Text: the two lines the section gives, with a line break between them.

TEXT SOURCES (clone, then change the characters)
- Card title, Bold 14: "Cameras" (1752:19780).
- Body, Regular 14, text/primary: "PTZ camera" (1752:19797).
- Muted, Regular 12, text/secondary: "3 cameras · 1 not found" (1752:19781).
- Link, Medium 14: "Overhead camera" (1752:19794).
All four are in "L8 · Room, AV tab" (1752:19374).

POPOVER MENU (used in A1, B2 and B4). Inputs: the target frame, the x and y of the menu inside that frame, the menu width, the list of row texts.
1. Clone the frame "Popover · Start event" (1752:32565) from "L1 · Today" (1752:18102). Move the clone into the target frame as its last child. Set layout positioning to absolute, then x and y.
2. Delete every child of the clone. Set layout vertical, padding 4 on all four sides, gap 0. Set width fixed to the menu width and height hug. Keep fill, stroke and radius as they are. Name the clone "Popover · <code>" (for example "Popover · L5b").
3. Find the component set "SRV / Tab menu row" (1039:4810) on the page "⚙️ Components (D)". Its variant "State=Action" is 1039:4832. For each row text, create an instance of that variant and add it to the clone. Set the row to width fill.
4. In each row instance: set the text property "Label#1039:5" to the row text. Set "visible = false" on the layers "Check" and "Tab icon". Name the instance "Row · <row text>".
5. The label of a row is "width fill" in the component, so it grows after the two hidden layers. Check that no label wraps (every label stays 20 high). If a label wraps, report it.
6. The finished menu height is 8 + 36 × number of rows.
If the layers "Check" or "Tab icon" are not found in the row, or the label property key is different, stop the step and report it.
```

## A1 · Section and L5b

```
Goal: the new Section and one page screen "L5b · Recordings, filter open" in slot 1. It is "L5 · Recordings" after the user pressed "Add filter" and chose "Room" with "Sim Room 2".

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 16300 to y 17700 at x 0 to x 12640, stop and report.
2. If a Section named "11 · Recordings, more states" already exists, do not create a second one. Use it and report that it existed.
3. Create a Section. Name "11 · Recordings, more states". x 0, y 16400, size 12640 × 1240. Copy the fills of Section "5 · Import" (1749:8320).

STEP 2 · Clone
1. Clone "L5 · Recordings" (1752:17702) into the new Section at x 80, y 120. Name the clone "L5b · Recordings, filter open". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L5.

STEP 3 · Applied filter chip
1. Clone "Badge · No devices" (1605:5909) from the page "👤 SRV flow [D]". Move it into the frame "Add filter row", as the last child (after "Button · Add filter").
2. Set the text property "Label#8:11" to "Room: Sim Room 2". Keep Variant Neutral. Name the layer "Badge · Room: Sim Room 2".
3. Set "Add filter row" counter-axis alignment to centre, so the badge (20 high) and the button (28 high) share one centre line. The gap of the row (8) stays.
4. Set the instance "Button · Add filter" property "State" to "Pressed". If "Pressed" is not an option, leave it and report it.

STEP 4 · Narrow the list
1. In "Card · Recordings", find the six rows (names start with "Row ·"). In every row, read the text in "Cell · Room". Delete each row whose text is not "Sim Room 2". Count the rows that stay: call the number N.
2. If N is 0, stop and report. Do not delete anything before you know N.
3. In "Footer row": set the text "Showing 6 of 38 recordings" to "Showing N recordings" (write the number N). Delete the text "Load more".
4. "Card · Recordings" must hug its height after the deletions. If it does not, set its vertical sizing to hug.

STEP 5 · Filter menu
1. Build the menu with "POPOVER MENU" from the RC rules. Target frame: the L5b clone. x 284, y 188. Width 228. Name "Popover · L5b".
2. Rows, in this order: "Room", "Course", "Group", "Facilitator", "Date". The menu is 188 high and ends at y 376.
3. The menu sits directly under "Button · Add filter" (its bottom edge is y 184) and its left edge is the left edge of the button.

STEP 6 · Label and caption
1. Label "Label · L5b" at x 80, y 76: "L5b · Recordings, filter open".
2. Caption "Caption · L5b" at x 80, y 1044. Two lines:
   Line 1: "The Recordings list with the filter menu open. The user picks a filter type, then a value. An applied filter shows as a chip next to the button."
   Line 2: "Search and filters work together. A row opens the recording (L6c). No results is L5c."

CHECK
- Section "11 · Recordings, more states" exists at x 0, y 16400, 12640 × 1240. No other Section changed.
- "L5b · Recordings, filter open" is 1440 × 900 at x 80, y 120. "L5 · Recordings" is unchanged (six rows, "Showing 6 of 38 recordings").
- "Add filter row" has two children: "Button · Add filter" and "Badge · Room: Sim Room 2". Both are instances.
- "Popover · L5b" is absolute, 228 × 188, at x 284, y 188, with five rows and no wrapped label.
- Every remaining row has "Sim Room 2" in "Cell · Room".
- Take one screenshot of the frame.

REPORT
- The id of the Section and of "L5b · Recordings, filter open".
- The value of N.
- "Component gaps": every step you skipped.
```

## A2 · L5c no results

```
Goal: one page screen "L5c · Recordings, no results" in slot 2. The user typed a search that matches nothing.
If the Section "11 · Recordings, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L5 · Recordings" (1752:17702) into Section "11 · Recordings, more states" at x 1640, y 120. Name the clone "L5c · Recordings, no results". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L5.

STEP 2 · Search text
1. In "Search field" (1752:32240 in the source), note the position of its only child, the text "Search title, learner or room". Delete that text.
2. Clone the body text "PTZ camera" (1752:19797) from "L8 · Room, AV tab". Put it into "Search field" at the same position. Set its characters to "cardiac". Name it "Search text". The field keeps its size (360 × 32) and its padding. The text colour is text/primary, which marks it as typed text.

STEP 3 · Empty list
1. In "Card · Recordings", delete the six rows (names start with "Row ·") and the frame "Footer row". Keep "Columns header".
2. Add a frame "Empty state" as the last child of "Card · Recordings". Auto-layout vertical, width fill, height hug, padding top and bottom 48, padding left and right 24, gap 12, items centred on both axes, no fill, no stroke.
3. First child: a clone of the body text "PTZ camera" (1752:19797). Characters "No recordings match your search." Name "Empty text". Text align centre.
4. Second child: a clone of the link text "Overhead camera" (1752:19794). Characters "Clear search and filters". Name "Link · Clear search and filters".
5. "Card · Recordings" must hug its height (40 + 48 + 20 + 12 + 20 + 48 = 188). If it does not, set its vertical sizing to hug.
6. "Filter row" and "Add filter row" stay as they are.

STEP 4 · Label and caption
1. Label "Label · L5c" at x 1640, y 76: "L5c · Recordings, no results".
2. Caption "Caption · L5c" at x 1640, y 1044. Two lines:
   Line 1: "A search with no match. The list says so in plain words and offers one way out."
   Line 2: "The link "Clear search and filters" returns to the full list (L5)."

CHECK
- 1440 × 900 at x 1640, y 120. L5 is unchanged.
- The search field shows "cardiac" in the primary text colour.
- "Card · Recordings" has two children: "Columns header" and "Empty state". The card is about 188 high.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## A3 · L5d none yet

```
Goal: one page screen "L5d · Recordings, none yet" in slot 3. The institution has no recordings. The page says what appears here and where to start.
If the Section "11 · Recordings, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L5 · Recordings" (1752:17702) into Section "11 · Recordings, more states" at x 3200, y 120. Name the clone "L5d · Recordings, none yet". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L5.

STEP 2 · Button
1. Clone the instance "Button · Add filter" (1767:18133 in the source, inside "Add filter row") first, and keep the clone for STEP 3. Put it temporarily into "Card · Recordings".
2. Set its text property "Label#3:97" to "Go to Live/Capture". Set the boolean property "Icon#3:0" to false. Set "Variant" to "Primary". Name it "Button · Go to Live/Capture". Set its layout positioning to auto if it is absolute.

STEP 3 · Empty card
1. Hide (visible = false) the frames "Filter row", "Add filter row" and, inside "Card · Recordings", "Columns header". Delete the six rows (names start with "Row ·") and the frame "Footer row".
2. Add a frame "Empty state" as the last child of "Card · Recordings". Auto-layout vertical, width fill, height hug, padding top and bottom 64, padding left and right 24, gap 12, items centred on both axes, no fill, no stroke.
3. Children in this order:
   a. Card title text, a clone of "Cameras" (1752:19780). Characters "No recordings yet." Name "Empty title".
   b. Muted text, a clone of "3 cameras · 1 not found" (1752:19781). Characters "Recordings appear here after you stop a recording." Name "Empty text". Text align centre.
   c. The button from STEP 2.
4. "Card · Recordings" hugs its height. Its first child is now "Empty state".
5. Look at the screenshot. If the card does not sit directly under the page header with the same distance as in L5, report the gap in px. Do not add a spacer.

STEP 4 · Label and caption
1. Label "Label · L5d" at x 3200, y 76: "L5d · Recordings, none yet".
2. Caption "Caption · L5d" at x 3200, y 1044. Two lines:
   Line 1: "The list before anyone has recorded. It says what will appear here and where to start."
   Line 2: "The button "Go to Live/Capture" opens the Live page (L2). Search and filters are hidden while the list is empty."

CHECK
- 1440 × 900 at x 3200, y 120. L5 is unchanged.
- "Card · Recordings" holds "Empty state" as its only visible child. "Empty state" has three children: "Empty title", "Empty text", "Button · Go to Live/Capture".
- The button is an instance, Primary, with no icon.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps". The gap in px from STEP 3 point 5, if any.
```

## B1 · L6h share

```
Goal: one page screen "L6h · Recording, Share" in slot 4. It is "L6c · Recording, Annotations" after the user pressed "Share".
If the Section "11 · Recordings, more states" does not exist, or "L6c · Recording, Annotations" (1785:17271) does not exist, stop and report.

STEP 1 · Clone
1. Clone "L6c · Recording, Annotations" (1785:17271) from Section 1749:8317 into Section "11 · Recordings, more states" at x 4760, y 120. Name the clone "L6h · Recording, Share". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L6c.

STEP 2 · Dim layer
1. Clone "Dim" (1360:9294) from "S8 · Stop confirmation" on the page "👤 SRV flow [D]". Move it into the L6h clone as the last child. Set layout positioning to absolute. Set x 0, y 0, size 1440 × 900 (the source is 1440 × 948). Keep fill and opacity (black, 50 %). Name it "Dim".

STEP 3 · Dialog
1. On the page "⚙️ Components (D)", find the component set "SRV / Share dialog" (1095:5841). Its variant "AI=Reviewed" is 1095:5768. Create an instance of that variant.
2. Move it into the L6h clone, after "Dim" (on top of everything). Set layout positioning to absolute. Centre it: x 420, y 162 (the dialog is 600 × 576). Name it "SRV / Share dialog".
3. Do not change any text in the dialog. Read all its visible texts. If one of them contains a forbidden word from the Shared rules, report it.
4. The button "Button · Share" in the tab row of L6c stays. Do not change its look.

STEP 4 · Label and caption
1. Label "Label · L6h" at x 4760, y 76: "L6h · Recording, Share".
2. Caption "Caption · L6h" at x 4760, y 1044. Two lines:
   Line 1: "The Share dialog over the recording. The learners get one link to the recording and the items the faculty member ticks."
   Line 2: ""Cancel" closes the dialog and returns to L6c. "Share with 4 learners" sends the link and returns to L6c."

CHECK
- 1440 × 900 at x 4760, y 120. L6c is unchanged.
- "Dim" is 1440 × 900 at x 0, y 0. "SRV / Share dialog" is 600 × 576 at x 420, y 162, fully inside the frame, and it is the last child.
- The dialog is an instance of "SRV / Share dialog" (variant AI=Reviewed).
- Take one screenshot.

REPORT
- The id of the frame. "Component gaps". Any forbidden word found in the dialog.
```

## B2 · L6i download

```
Goal: one page screen "L6i · Recording, Download" in slot 5. It is L6c after the user pressed "Download".
If the Section "11 · Recordings, more states" does not exist, or "L6c · Recording, Annotations" (1785:17271) does not exist, stop and report.

STEP 1 · Clone
1. Clone "L6c · Recording, Annotations" (1785:17271) into Section "11 · Recordings, more states" at x 6320, y 120. Name the clone "L6i · Recording, Download". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L6c.

STEP 2 · Button state
1. Find "Button · Download" (inside "Tab row" > "Actions"). Set its property "State" to "Pressed". If "Pressed" is not an option, leave it and report it.

STEP 3 · Download menu
1. Build the menu with "POPOVER MENU" from the RC rules. Target frame: the L6i clone. Width 260. Name "Popover · L6i".
2. Position: its right edge lines up with the right edge of "Button · Download" and it sits 4 px below the button. The button is at x 1259, y 146, 88 × 28 in the frame, so the menu is at x 1087, y 178. Read the real position of the button in the clone and correct x and y if it differs.
3. Rows, in this order: "Video, all cameras (MP4)", "Video, current layout (MP4)", "Annotations (CSV)", "Transcript (TXT)". The menu is 152 high.

STEP 4 · Label and caption
1. Label "Label · L6i" at x 6320, y 76: "L6i · Recording, Download".
2. Caption "Caption · L6i" at x 6320, y 1044. Two lines:
   Line 1: "The Download menu. One file type for each need: the video, the annotations, the transcript."
   Line 2: "A row downloads one file and closes the menu. The page stays as L6c. Open question: one video file or one file per camera?"

CHECK
- 1440 × 900 at x 6320, y 120. L6c is unchanged.
- "Popover · L6i" is absolute, 260 × 152, with four rows and no wrapped label. Its right edge is the right edge of "Button · Download".
- The menu covers the top of the side panel and nothing else. No text is clipped.
- Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## B3 · L6j transcript search

```
Goal: one page screen "L6j · Recording, transcript search" in slot 6. It is "L6f · Recording, Transcript" with a search that found a match.
If the Section "11 · Recordings, more states" does not exist, or "L6f · Recording, Transcript" (1786:20353) does not exist, stop and report.

STEP 1 · Clone
1. Clone "L6f · Recording, Transcript" (1786:20353) from Section 1749:8317 into Section "11 · Recordings, more states" at x 7880, y 120. Name the clone "L6j · Recording, transcript search". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L6f.

STEP 2 · Search state
1. Find the instance "SRV / Side panel · exploration". Inside it, find the nested instance named "SRV / Transcript search" (it sits in "Content" > "Fixed top" > "Transcript toolbar"). Its property "State" is "Empty" now.
2. Set its property "State" to "Results". In this state the input reads "lactate" and the counter reads "1 of 2".
3. If the property cannot be set on the nested instance, leave it as it is and report: frame, component "SRV / Transcript search", what failed. Do not detach and do not build a workaround.
4. After the change, check that "SRV / Side panel · exploration" is still 380 × 676 and the toolbar row is still 32 high. If not, report the sizes.
5. The overlay property of the panel stays "Closed".

STEP 3 · Label and caption
1. Label "Label · L6j" at x 7880, y 76: "L6j · Recording, transcript search".
2. Caption "Caption · L6j" at x 7880, y 1044. Two lines:
   Line 1: "Searching the transcript for "lactate". The search shows the match number and has Previous and Next buttons."
   Line 2: "A click on a match jumps the video to that moment. A search without a match shows "0 results" (state exists in the component, not drawn). Not drawn: the match highlighted in the text."

CHECK
- 1440 × 900 at x 7880, y 120. L6f is unchanged.
- The search shows "lactate" and "1 of 2" (or the gap is reported).
- The chapter list overlay is closed. No text is clipped.
- Take one screenshot.

REPORT
- The id of the frame. Whether the nested property could be set. "Component gaps".
```

## B4 · L6k annotation menu

```
Goal: one page screen "L6k · Recording, annotation menu" in slot 7. It is L6c after the user pressed the "More actions" button of the first annotation.
If the Section "11 · Recordings, more states" does not exist, or "L6c · Recording, Annotations" (1785:17271) does not exist, stop and report.

STEP 1 · Clone
1. Clone "L6c · Recording, Annotations" (1785:17271) into Section "11 · Recordings, more states" at x 9440, y 120. Name the clone "L6k · Recording, annotation menu". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L6c.

STEP 2 · Anchor
1. In the instance "SRV / Side panel", find the instance "Annotation · 03:05 · Ehli", then in it "Row 1" and the instance "IconButton · More actions". Read its position in the frame (expected x 1359, y 313, 28 × 28). Do not change it.

STEP 3 · Annotation menu
1. Build the menu with "POPOVER MENU" from the RC rules. Target frame: the L6k clone. Width 228. Name "Popover · L6k".
2. Position: its right edge lines up with the right edge of "IconButton · More actions" and it sits 4 px below the button. With the expected button position this is x 1159, y 345. Use the real position and correct x and y if it differs.
3. Rows, in this order: "Edit", "Jump to this moment", "Delete". The menu is 116 high.
4. The menu may cover part of the first and the second annotation. That is fine. It must stay inside the side panel width (the right edge of the panel is x 1416).

STEP 4 · Label and caption
1. Label "Label · L6k" at x 9440, y 76: "L6k · Recording, annotation menu".
2. Caption "Caption · L6k" at x 9440, y 1044. Two lines:
   Line 1: "The menu of one annotation. The faculty member can edit it, jump to its moment or delete it."
   Line 2: ""Edit" changes the text in place. "Jump to this moment" moves the video there. "Delete" asks first (not drawn)."

CHECK
- 1440 × 900 at x 9440, y 120. L6c is unchanged.
- "Popover · L6k" is absolute, 228 × 116, with three rows and no wrapped label.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## F1 · L6b clean-up and Debrief hand-off

```
Goal: edit "L6b · Recording, Debrief tab" (1752:38118) in Section "2 · Recordings and debrief" (1749:8317). Remove the two leftover placeholder texts and add one muted note at the top of the tab content. Do not design Debrief content. This is the only section that edits an existing frame. Edit L6b in place: do not clone it, do not move it, do not rename it. Do not touch its label or its caption.

STEP 1 · Read and check
1. Find the frame "Content" that is a direct child of L6b's "Body" (in the source it is 1752:38122; it holds "Breadcrumb", "Page header", "Tab row", "Body"). Do not take the "Content" inside "SideNav".
2. Check that these two nodes exist and read exactly:
   - 1752:38636, a text inside "Card · Checklist results" (1752:38488): "Placeholder. The full checklist comes from the debrief design."
   - 1752:38637, a text in "Right column" (1752:38487), named "Note · Placeholder": "Placeholder. The debrief content comes from the debrief design."
   If a text reads differently, or the layer is not found, stop and report. Do not delete anything.
3. Take a screenshot of the frame before the change.
4. Read the sizing of the inner frame "Body" (1752:38136): its height (644 in the source) and whether the vertical sizing is fixed or hug.

STEP 2 · Hand-off note
1. Clone the muted text "3 cameras · 1 not found" (1752:19781) from "L8 · Room, AV tab" (Regular 12, text/secondary).
2. Put it into "Content" as the fourth child: after "Tab row", before "Body". Set width fill (text auto-resize: height). Name it "Note · Debrief hand-off".
3. Characters: "Debrief content is designed separately (Gabor). It plugs in here: feedback, clips, checklist results."

STEP 3 · Delete the leftovers
1. Delete 1752:38636.
2. Delete 1752:38637.
3. Do not change any other layer in "Card · Checklist results", "SRV / Feedback content", "Card · Marked moments" or any other part of the tab.

STEP 4 · Height
1. The note is 20 high and "Content" has a gap of 24, so "Body" moves down by 44. If the vertical sizing of "Body" is fixed, set its height to 620 (644 − 24). If it hugs, leave it.
2. Do not shrink or move anything else.

CHECK
- "L6b · Recording, Debrief tab" is still 1440 × 900 at x 3200, y 120 in its Section, with the same name, label and caption.
- "Content" has five children in this order: "Breadcrumb", "Page header", "Tab row", "Note · Debrief hand-off", "Body".
- 1752:38636 and 1752:38637 no longer exist. The text "Placeholder" appears nowhere in L6b (search all visible text layers).
- The note is one line and not clipped. The lowest element of the frame ends above y 876 of the frame. If anything goes lower, report the overflow in px.
- Take one screenshot of the frame after the change.

REPORT
- The sizing of "Body" before the change and what you set.
- Both screenshots (before and after).
- "Component gaps": every step you skipped.
```

## After these run

- Claude reviews every new frame (script and screenshots), checks that the menus have no wrapped labels, and adds Section "11 · Recordings, more states" and the seven frames to "Screen list" in `11-16-merge-00-shared.md`.
- Not in this file, on purpose: Debrief content (Gabor), sort arrows, loading and error states for Recordings, "No results" state of the transcript search as its own frame, share link expiry, delete confirmation for an annotation.
