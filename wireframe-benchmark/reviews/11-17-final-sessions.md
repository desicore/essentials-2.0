# 11-17 · Final round: Sessions, Live and participants

Topics T03 "Planning & participants" and T04 "Live capture, AV & Anywhere". Coverage map row "Session management & live AV" is "Partial". This file closes the open ends on Live and fixes four leftovers from the earlier review.

The Shared rules and the sample data are in `11-16-merge-00-shared.md`.

## Context

- L1 to L3c and P1 to P5 exist. The audit of 11-16 found controls with no result: "Stop all", "Manage", "Start event" with two rooms, and the selects in the start sheet.
- Run A and Run F are for the workshop on 11-17. Run B can wait until after the workshop.
- Not in this file: creating an event and the event detail page. They belong to the calendar side of the app and are not Daniel's rows in the coverage map.

## What I found in the file (11-16 evening, read-only)

- "L3c · 3 rooms recording" `1752:38638`. "Content" > "Page header" `1752:38643` (title "Live", sub text "4 rooms · 3 recording · 1 needs attention", "Button · Start recording"), "Recording banner" `1752:39870` (text "Banner title" = "3 rooms recording · longest 02:14"; "Banner actions" with "Button · Manage" `1752:39875` and "Button · Stop all" `1752:39885`), "Room wall" `1752:38648` > "Wall row 1" (cards "Card · Sim Room 1" `1752:38650`, "Card · Sim Room 2" `1752:38663`) and "Wall row 2" ("Card · Skills Lab 1" `1752:38678`, "Card · Debrief Room 1" `1752:38691`).
- A room card: "Card header" ("Title block" with texts "Room name" and "Room meta"; one badge), "Live picture", "Details" (texts "Details line 1" and "Details line 2"), "Actions" (buttons).
- "L2 · Live" `1752:9232` has the idle card "Card · Sim Room 2" `1752:17052` (badge "Needs attention", buttons "Start recording" and "Room devices").
- The stop dialog is a placed instance "SRV / Stop confirmation" `1360:9295` (440 × 198) in "S8 · Stop confirmation" on the page "👤 SRV flow [D]". Texts: title "Stop the recording?", a body text that starts with "This ends the recording for", buttons "Keep recording" and "Stop recording". The dim layer is "Dim" `1360:9294`.
- "P4 · Recording, Link event and learners" `1752:37436`. "Content" `1752:37440` > "Breadcrumb", "Page header", instance "Tabs · Recording" `1752:37654`, "Recording row" `1752:39318`. "Share" and "Download" sit in "Player actions" `1752:39321`, under the video. The right place is the tab row, as in "L6 · Recording": frame "Tab row" `1752:35845` (1132 × 32: the tabs on the left, "Actions" with "Button · Download" and "Button · Share" on the right).
- "B1 · Today, recording banner" `1767:16449`: the two NURS 340 blocks "Event · Postpartum hemorrhage" `1767:16503` and `1767:16529` have a 2 px dark stroke, which is the selected look. The NURS 310 block "Event · Sepsis recognition" `1767:16516` has the normal 1 px stroke. The same in "B2 · Today, 3 rooms recording" `1767:17142`: `1767:17197` and `1767:17223`.
- "P3 · Room view, No learners yet" `1752:35244`: the side panel shows the Annotations tab with annotations at 04:12, 06:05 and 07:30, but the recording has not started (00:00).

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "15 · Sessions, more states" at x 0, y 22400. The fixes edit four existing frames in place |
| "Stop all" | One confirmation for all rooms. It names the rooms. "Keep recording" is the default |
| "Stop" on one room card | The same dialog as in the room view (V6 in the room view file). No extra frame |
| "Manage" | **Removed.** On Live every room card already has "Open recording" and "Stop". "Manage" has no job left on this page. If Daniel wants to keep it, skip step 4 of F1 and tell Claude what it should open |
| "Start event" with two rooms | A Live screen with the two rooms of the event recording (L2b) |
| P4 | "Share" and "Download" move to the tab row, the same place as on L6 |
| L1 | The NURS 340 blocks stay selected on L1, because the popover on L1 belongs to that event. Only B1 and B2 change |

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line.

Run A writes only in the new Section "15 · Sessions, more states". It may run at the same time as the room readiness, room view and devices files.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-sessions.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "SE rules" from the second file. Then run this section of the second file: "A1 · Section 15, L3e and L2b". Run its check list and take a screenshot of every new frame.`

Run F edits frames in Sections "1 · Sessions", "4 · Participants" and "6 · Recording banner". Nothing else may write in these three Sections at the same time. It may run at the same time as Run A.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-sessions.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "SE rules" from the second file. Then run this section of the second file: "F1 · Four fixes". Run its check list and take a screenshot of every frame you changed.`

Run B is for after the workshop. It writes only in slots 3 to 8 of the Section "15 · Sessions, more states", so it must start after Run A has created the Section. It clones L3, L3c, L2, P1, P1b and P5, so start it after Run F has finished (Run F changes L3c). It may run at the same time as the room readiness, room view and devices files.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-sessions.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "SE rules" and "SE rules for Run B" from the second file. Then run these sections of the second file, in this order: "B1 · L3g event list open", "B2 · L3h room needs attention", "B3 · L3i recording saved", "B4 · P1c group added", "B5 · P5b Groups", "B6 · L2c no rooms yet". After each section, run its check list and take a screenshot before you start the next section.`

## SE rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Section A1 writes only inside the Section "15 · Sessions, more states". Section F1 changes only the layers it names, in the frames it names.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar.
- Never change anything on "👤 SRV flow [D]" (960:51213) or "⚙️ Components (D)" (675:31351). You may clone placed nodes from them.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility.
- Never draw a badge or a button. To change a label, set the text property "Label" (or the text override).
- IDs refer to source nodes. Inside a clone, find layers by their exact name.
- Fonts: load the font of every text before you change it.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.

LABEL AND CAPTION (every new frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>". Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide. Name "Caption · <code>". Text: the two lines the section gives, with a line break between them.
```

## A1 · Section 15, L3e and L2b

```
Goal: the Section "15 · Sessions, more states" and two page screens.

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 22300 to y 23700 at x 0 to x 12640, stop and report.
2. If a Section named "15 · Sessions, more states" already exists, use it and report that it existed.
3. Create a Section. Name "15 · Sessions, more states". x 0, y 22400, size 12640 × 1240. Copy the fills of Section "5 · Import" (1749:8320).

FRAME L3e · slot 1, x 80, y 120. Name "L3e · Live, stop all".
1. Clone "L3c · 3 rooms recording" (1752:38638) into the Section at x 80, y 120. Rename it. Keep 1440 × 900.
2. In the clone, set "Button · Manage" to visible = false.
3. Clone "Dim" (1360:9294) from "S8 · Stop confirmation" on the page "👤 SRV flow [D]". Put it in the L3e frame as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900.
4. Clone the placed instance "SRV / Stop confirmation" (1360:9295) from S8. Put it in the L3e frame after the dim layer (on top). Layout positioning absolute. x 500, y 351.
5. In the dialog clone, change four texts with text overrides. Find each text by its current characters:
   - "Stop the recording?" becomes "Stop all 3 recordings?"
   - The body text that starts with "This ends the recording for" becomes "This ends the recordings in Sim Room 1, Sim Room 2 and Skills Lab 1. They are saved and show in Recordings."
   - The button label "Stop recording" becomes "Stop all".
   - The button label "Keep recording" stays.
6. If the dialog grows because the body text is longer, keep x 500 and set y so that it is vertically centred in the 900 px frame.
7. Label "Label · L3e" at x 80, y 76: "L3e · Live, stop all".
8. Caption "Caption · L3e" at x 80, y 1044. Two lines:
   Line 1: "After "Stop all" on Live or in the recording banner (B2). One question for all rooms, and it names them."
   Line 2: ""Keep recording" is the default and goes back to L3c. "Stop" on one room card asks the same question for one room (V6)."

FRAME L2b · slot 2, x 1640, y 120. Name "L2b · Live, event in two rooms".
1. Clone "L3c · 3 rooms recording" (1752:38638) into the Section at x 1640, y 120. Rename it.
2. "Page header", instance "Text · Tuesday, January 19": "4 rooms · 2 recording · 1 needs attention".
3. "Recording banner": text "Banner title" becomes "2 rooms recording · NURS 340 · Postpartum hemorrhage". Set "Button · Manage" to visible = false.
4. "Card · Sim Room 1": badge label "Recording 00:12" (rename the layer "Badge · Recording 00:12"). "Details line 1": "NURS 340 · Postpartum hemorrhage". "Details line 2": "Started 13:00 · Group B · 6 learners".
5. "Card · Skills Lab 1": the same three changes as in step 4.
6. "Card · Sim Room 2": note its index in "Wall row 1" and delete it. Clone "Card · Sim Room 2" (1752:17052) from "L2 · Live" and insert the clone at the same index. Width fill. In the clone: "Details line 1" becomes "No event this afternoon". "Details line 2" becomes "1 device not found".
7. "Card · Debrief Room 1": badge label "Next 14:45". "Details line 1": "14:45 · NURS 340 · Group B debrief". "Details line 2": "6 learners".
8. Label "Label · L2b" at x 1640, y 76: "L2b · Live, event in two rooms".
9. Caption "Caption · L2b" at x 1640, y 1044. Two lines:
   Line 1: "After "Start event" on Today (L1b), 13:00. The event uses two rooms, so both record, with the same event and group."
   Line 2: ""Open recording" goes to the room view of that room (L4). "Stop all" asks first (L3e). Sim Room 2 is free and still needs attention."

CHECK
- The Section exists at x 0, y 22400, 12640 × 1240.
- Two frames, each 1440 × 900 at y 120, with a label and a caption.
- L3e: the dialog is centred, reads "Stop all 3 recordings?" and has the buttons "Keep recording" and "Stop all". No "Manage" button is visible.
- L2b: two cards show a red "Recording 00:12" badge, one card shows "Needs attention", one shows "Next 14:45".
- "L3c · 3 rooms recording" and "L2 · Live" are unchanged.

REPORT
- The ids of the Section and the two frames.
- "Component gaps": every step you skipped.
```

## F1 · Four fixes

```
Goal: four small fixes in existing frames. Change only the layers named here. Take a screenshot of each frame before and after.

FIX 1 · P4: "Share" and "Download" go to the tab row
Frame "P4 · Recording, Link event and learners" (1752:37436), in Section "4 · Participants".
1. In "Content" (1752:37440), find the instance "Tabs · Recording" (1752:37654). Note its index in "Content". Delete it.
2. Clone the frame "Tab row" (1752:35845) from "L6 · Recording" (1752:34208). Insert the clone in "Content" of P4 at the same index (after "Page header", before "Recording row"). Width fill (1132).
3. Check that the clone shows the tabs "Recording" (selected) and "Debrief", and on the right "Download" and "Share".
4. In "Recording row" > "Player", delete the frame "Player actions" (1752:39321).
5. Do not change "L6 · Recording".

FIX 2 · B1 and B2: no event is selected
Frames "B1 · Today, recording banner" (1767:16449) and "B2 · Today, 3 rooms recording" (1767:17142), in Section "6 · Recording banner".
1. Read the strokes and the stroke weight of "Event · Sepsis recognition" (1767:16516) in B1.
2. Set the same strokes and stroke weight on these four frames: 1767:16503 and 1767:16529 (B1), 1767:17197 and 1767:17223 (B2). All four are named "Event · Postpartum hemorrhage".
3. Change nothing else in B1 and B2. Do not change "L1 · Today".

FIX 3 · P3: the recording has not started, so there are no annotations
Frame "P3 · Room view, No learners yet" (1752:35244), in Section "4 · Participants".
1. Find the instance "SRV / Side panel". Set Tab = Checklist. Mode stays Live.

FIX 4 · L3c: remove "Manage"
Frame "L3c · 3 rooms recording" (1752:38638), in Section "1 · Sessions".
1. Set "Button · Manage" (1752:39875) to visible = false.
2. "Button · Stop all" stays at the right end of the banner.

CHECK
- P4: the tab row has "Recording", "Debrief", and on the right "Download" and "Share". Nothing is under the playback bar.
- B1 and B2: all event blocks have the same thin border.
- P3: the side panel shows the checklist. The time still reads 00:00.
- L3c: the banner shows only "Stop all".
- No other frame changed.

REPORT
- Every layer you changed, with its id.
- "Component gaps": every step you skipped.
```

## Run B, after the workshop

These screens complete the module for the prototype. They go into Section "15 · Sessions, more states", slots 3 to 8.

| Slot | Frame | What it shows |
|---|---|---|
| 3 | L3g · Start recording, event list open | The "Event" select of the start sheet, open, with today's events and "No event (ad hoc)" |
| 4 | L3h · Start recording, room needs attention | The start sheet with Sim Room 2 picked: a warning names the missing device and does not block the start |
| 5 | L3i · Live, recording saved | Right after "Stop": the card shows "Saved" and "Open in Recordings" |
| 6 | P1c · Room view, group added | The participants popover after "Add 6 learners" |
| 7 | P5b · People, Groups | The "Groups" tab of People |
| 8 | L2c · Live, no rooms yet | The empty state of Live |

### What I checked in the file (11-16 night, read-only)

- No Section "15 · Sessions, more states" exists yet. Run A creates it. Nothing sits at y 19300 to 22300 on the page.
- "L3 · Start recording" `1752:18339`: "Sheet · Start recording" `1752:18431` at x 960. In the sheet: "Select · Event" `1752:18461` is at x 976, y 424 in the frame, 448 × 32. "Room options" `1752:18437` (header, "Option · Sim Room 1" `1752:18441` selected, "Option · Sim Room 2" `1752:18446`, "Option · Skills Lab 1" `1752:18451`, "Hint" `1752:18456`) is 272 high. "Start form" is 611 high and the Body slot has 716 px of room (748 minus 2 × 16 padding).
- "P2 · Start recording, Learners" `1752:32350` has only one room option and a long learner list. It does not fit B2, so B2 clones L3 and swaps the strokes of the room options (same method as L8e in `11-17-final-rooms.md`).
- "L3c" `1752:38638`: "Card · Sim Room 1" `1752:38650` holds "Badge · Recording 02:14" `1752:38655` (Error), "Details line 1" `1752:38659`, "Details line 2" `1752:38660`, "Button · Open recording" `1752:38662` (Primary SM) and "Button · Stop" `1752:39339` (Secondary SM). The banner holds "Banner title" `1752:39874`, "Button · Manage" `1752:39875` and "Button · Stop all" `1752:39885`.
- "P1b" `1752:18768` and "P1" `1752:17138`: the participants popover is an instance "SRV / Participants popover" (P1b `1752:18788`, P1 `1752:17158`, both absolute at x 1112, y 48) of the component with the slot "Content". In P1 the slot holds the frame "Participants": "Subtitle" `1752:17920` ("From the event · NURS 310 · Group A"), six instances "Participant · <name>" (property "State": Present, Absent), "Divider", "Add learner", "Footnote". In P1b it holds the group list. A slot can be changed, so the list is built by cloning the P1 popover. The header button is "Button · 5 learners" (label property "Label#3:97", State Pressed in P1b).
- "P5 · People, Learners" `1752:39900`: "Tabs · People" `1752:40131` (property "Active", options Annotations, Checklist, Chapters, Transcript; they show the labels Staff, Learners, Groups, Standardized patients; now "Checklist" = Learners is selected). "Card · Learners" `1752:40672` has "Devices header", "Columns header" (cells "Cell · Device" 240, "Cell · Kind" 280, "Cell · Audio from" 220, "Cell · Source" 180, "Cell · Status" 162) and six rows with the same cells. "Filters" `1752:40170` holds "Search" and the instances "Filter · Group" and "Filter · Status".
- "L2 · Live" `1752:9232`: "Page header" `1752:9241` with "Button · Start recording" `1752:9244` and "Button · Select rooms" `1752:17106`; "Room wall" `1752:17037`.
- "SRV / Tab menu row" variant "State=Action" `1039:4832` and the frame "Popover · Start event" `1752:32565` exist. "Card · Readiness" `1560:7914` (on the page "👤 SRV flow [D]") is 1132 × 54, horizontal, padding 16, gap 12, with the badge instance `1560:7915` and the text "Readiness text" `1560:7918`.

### Decisions for Run B (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| B2 base | L3, not P2: P2 has one room option and a tall learner list that would overflow the sheet |
| B2 warning | Built from a clone of "Card · Readiness" (badge and text already exist), turned vertical, with a link added. It replaces the "Hint" of the room options, because the Body has only 105 px of free room |
| B4 base | P1b as the file says, but its popover instance is deleted and replaced by a clone of the P1 popover (P1 already holds the participant list). The six rows keep the names the file already shows. The header of the room view still says NURS 310; the new list says "Added today · NURS 340 · Group B". This is a known inconsistency of the sample data (the room view is NURS 310 Group A, the added group is NURS 340 Group B) |
| B5 Source column | "Added here" for "NURS 310 · Group B" is made up. All other groups are "Canvas" |
| B6 sub text | The sub text of the page header becomes "No rooms yet", so it does not say "4 rooms" |

## SE rules for Run B

```
These rules add to "SE rules" for Run B:
- Run B writes only inside the Section "15 · Sessions, more states", only in slots 3 to 8. If the Section does not exist, stop and report. Never change L3e, L2b, their labels or captions, or any frame outside the Section. You may clone from other frames.
- Every new frame is a clone of the source frame the section names, 1440 × 900, clip content on. Name the clone, put it in the Section with appendChild, then set x and y relative to the Section.
- Slots (frames at y 120, labels at y 76, captions at y 1044): slot 3 x 3200, slot 4 x 4760, slot 5 x 6320, slot 6 x 7880, slot 7 x 9440, slot 8 x 11000.
- Never draw a badge, a button, a checkbox or an input. Badge: set "Variant" and the text property whose key starts with "Label". Button: set "Variant", "State" and the text property "Label#3:97". Read the exact keys from componentProperties.
- Changing the layout of a plain frame (direction, gap, padding, sizing) is allowed. Every layer you set to width fill or height hug: append it to its auto-layout parent first, then set the sizing.
- A clone made on the page "👤 SRV flow [D]" must be moved into the target frame in the same script. If the move fails, stop that step and report it.
- "Dim": clone "Dim" (1752:18430) from "L3 · Start recording", put it in the target frame as a child, layout positioning absolute, x 0, y 0, 1440 × 900.
- Popovers and sheets sit on top of the screen. They are the last children of the frame (after "Body" and after "Dim" and the sheet).
- Word scan: visible text layers only.

POPOVER MENU (B1). Inputs: the target frame, x and y of the menu in that frame, the width, the list of row texts.
1. Clone the frame "Popover · Start event" (1752:32565) from "L1 · Today" (1752:18102). Move the clone into the target frame as its last child. Layout positioning absolute, then x and y.
2. Delete every child of the clone. Layout vertical, padding 4 on all four sides, gap 0. Width fixed to the menu width, height hug. Keep fill, stroke and radius. Name "Popover · <code>".
3. On the page "⚙️ Components (D)" find the variant "State=Action" (1039:4832) of "SRV / Tab menu row" (1039:4810). For each row text create an instance of that variant and add it to the clone. Width fill.
4. In each row: set the text property "Label#1039:5" to the row text. Set visible = false on the layers "Check" and "Tab icon". Name the row "Row · <row text>".
5. Check that no label wraps (each label stays 20 high). If one wraps, report it.
6. Menu height = 8 + 36 × number of rows.
If "Check" or "Tab icon" is not found, or the label key differs, stop the step and report it.
```

## B1 · L3g event list open

```
Goal: one page screen "L3g · Start recording, event list open" in slot 3. It is L3 with the "Event" select of the sheet open.
If the Section "15 · Sessions, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L3 · Start recording" (1752:18339) into the Section at x 3200, y 120. Name the clone "L3g · Start recording, event list open". Keep 1440 × 900. Do not change L3.
Everything below happens inside this clone.

STEP 2 · Select state
1. In the sheet "Sheet · Start recording", slot "Body" > "Start form" > "Block · Event", find the instance "Select · Event" (1752:18461 in the source). Read its position in the frame (expected x 976, y 424, 448 × 32).
2. Read the options of its property "State". If an option "Focused" or "Open" exists, set it. If not, leave it and report the options.

STEP 3 · Event list
1. Build the menu with "POPOVER MENU" in "SE rules for Run B". Target frame: the L3g clone. Name "Popover · L3g". Width 448.
2. Position: x = x of the select (expected 976), y = y of the select + 32 + 4 (expected 460). Use the real values.
3. Rows, in this order:
   - "No event (ad hoc recording)"
   - "10:00 · NURS 310 · Sepsis recognition · Group A"
   - "13:00 · NURS 340 · Postpartum hemorrhage · Group B"
4. The menu is 116 high and ends at y 576. It covers the hint and the top of "Block · Learners". That is fine.

STEP 4 · Label and caption
1. Label "Label · L3g" at x 3200, y 76: "L3g · Start recording, event list open".
2. Caption "Caption · L3g" at x 3200, y 1044. Two lines:
   Line 1: "The "Event" select of the start sheet, open. It lists today's events and one row for a recording with no event."
   Line 2: "A row fills in the event and goes back to the sheet (L3, P2). "No event" keeps the recording ad hoc."

CHECK
- 1440 × 900 at x 3200, y 120. L3 is unchanged.
- "Popover · L3g" is absolute, 448 × 116, directly under the Event select, with three rows and no wrapped label. It is the last child of the frame.
- The sheet, the dim layer and the footer buttons are as in L3. No text is clipped. Take one screenshot.

REPORT
- The id of the frame. The options of the property "State" of the select. "Component gaps".
```

## B2 · L3h room needs attention

```
Goal: one page screen "L3h · Start recording, room needs attention" in slot 4. It is L3 with Sim Room 2 chosen and a warning that the patient monitor capture is not found. The start button stays active.
If the Section "15 · Sessions, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L3 · Start recording" (1752:18339) into the Section at x 4760, y 120. Name the clone "L3h · Start recording, room needs attention". Keep 1440 × 900. Do not change L3.
Everything below happens inside this clone.

STEP 2 · Choose Sim Room 2
1. In the sheet, slot "Body" > "Start form" > "Room options", find "Option · Sim Room 1" (1752:18441) and "Option · Sim Room 2" (1752:18446).
2. Read the strokes and the stroke weight of both. Swap them: "Option · Sim Room 2" gets the strokes and the weight (2) of "Option · Sim Room 1". "Option · Sim Room 1" gets the strokes and the weight (1) that "Option · Sim Room 2" had. "Option · Skills Lab 1" does not change.
3. If the strokes cannot be changed inside the slot, stop and report.

STEP 3 · Warning block
1. Clone "Card · Readiness" (1560:7914) from the page "👤 SRV flow [D]". In the same script, move it into "Room options" of the sheet (slot "Body" > "Start form" > "Room options") as the last child. Name it "Warning · Sim Room 2".
2. Delete the text "Hint" (1752:18456, "Rooms without cameras are not listed.") from "Room options". The Body has only 105 px of free room and the warning needs 100.
3. Set "Warning · Sim Room 2" to layout vertical, gap 4, padding 16 (keep), alignment left and top, width fill, height hug.
4. The badge "Badge · Needs attention" stays (Variant Warning, label "Needs attention"). Width hug.
5. The text "Readiness text": "Sim Room 2: the patient monitor capture is not found. You can still record with the other devices." Width fill (text auto resize: height). It wraps to two lines (40 high).
6. Clone the link text "Overhead camera" (1752:19794). Characters "Check this room". Name "Link · Check this room". Put it in the warning as the last child. Width hug.
7. The footer button "Start recording" stays Primary, State Rest. Do not change it.

STEP 4 · Label and caption
1. Label "Label · L3h" at x 4760, y 76: "L3h · Start recording, room needs attention".
2. Caption "Caption · L3h" at x 4760, y 1044. Two lines:
   Line 1: "Start recording with Sim Room 2 chosen. A warning names the device that is not found. It does not block the start."
   Line 2: ""Check this room" opens the room page (L8). "Start recording" starts with the other devices and opens the room view (L4)."

CHECK
- 1440 × 900 at x 4760, y 120. L3 is unchanged.
- In the sheet only "Option · Sim Room 2" has the thick (2 px) dark border.
- "Warning · Sim Room 2" is 448 wide and 120 high: a Warning badge, a two-line text, a link. The room options frame is now 372 high and the Start form 711 high. It fits in the body (716). If the text wraps to three lines, report the overflow in px and do not shrink anything.
- "Start recording" in the footer is Primary and not disabled. No text is clipped. Take one screenshot.

REPORT
- The id of the frame. Whether the strokes could be changed inside the slot and whether the clone could be moved into the slot. "Component gaps".
```

## B3 · L3i recording saved

```
Goal: one page screen "L3i · Live, recording saved" in slot 5. It is "L3c · 3 rooms recording" right after "Stop" on the card of Sim Room 1.
If the Section "15 · Sessions, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L3c · 3 rooms recording" (1752:38638) into the Section at x 6320, y 120. Name the clone "L3i · Live, recording saved". Keep 1440 × 900. Do not change L3c.
Everything below happens inside this clone.

STEP 2 · Header and banner
1. "Page header", instance "Text · Tuesday, January 19": set its text property "Content#43:710" to "4 rooms · 2 recording · 1 needs attention".
2. "Recording banner": the text "Banner title" becomes "2 rooms recording · longest 02:16". Set "Button · Manage" to visible = false if it is visible. "Button · Stop all" stays.

STEP 3 · Card of Sim Room 1
1. In "Card · Sim Room 1": the instance "Badge · Recording 02:14": set the property "Variant" to "Neutral" and the text property "Label" (key starts with "Label") to "Saved 02:20". Name it "Badge · Saved 02:20".
2. "Details line 1": "Ad hoc recording, saved". "Details line 2": "09:48 to 09:50 · no learners yet".
3. "Button · Open recording": set "Label#3:97" to "Open in Recordings". Name "Button · Open in Recordings". Variant stays Primary.
4. "Button · Stop": set "Label#3:97" to "Start recording". Variant stays Secondary. Name "Button · Start recording".
5. The card keeps its size (554 × 320).

STEP 4 · The other recording cards
1. In "Card · Sim Room 2" and "Card · Skills Lab 1": find the badge whose layer name starts with "Badge · Recording". Set its label to "Recording 02:16" and rename it "Badge · Recording 02:16". If a label does not read "Recording 02:14" before the change, report what it read.
2. "Card · Debrief Room 1" does not change.

STEP 5 · Label and caption
1. Label "Label · L3i" at x 6320, y 76: "L3i · Live, recording saved".
2. Caption "Caption · L3i" at x 6320, y 1044. Two lines:
   Line 1: "Right after "Stop" on one room (the question is the one in V6). The card says the recording is saved. The other two rooms still record."
   Line 2: ""Open in Recordings" goes to the recording (L6). "Start recording" on the card opens the sheet (L3) with this room chosen."

CHECK
- 1440 × 900 at x 6320, y 120. L3c is unchanged.
- The banner reads "2 rooms recording · longest 02:16" and shows only "Stop all".
- "Card · Sim Room 1" has a grey "Saved 02:20" badge and the buttons "Open in Recordings" (Primary) and "Start recording" (Secondary). The two other recording cards show a red "Recording 02:16" badge.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps". What the two other badges read before the change.
```

## B4 · P1c group added

```
Goal: one page screen "P1c · Room view, group added" in slot 6. It is "P1b · Room view, Add a group" after "Add 6 learners": the participants list holds the six learners of NURS 340 · Group B and the header button reads "6 learners".
If the Section "15 · Sessions, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "P1b · Room view, Add a group" (1752:18768) into the Section at x 7880, y 120. Name the clone "P1c · Room view, group added". Keep 1440 × 900. Do not change P1b.
Everything below happens inside this clone.

STEP 2 · Header button
1. Find the instance whose name starts with "Button · " and contains "learners" in the room view header (in the source it is nested: "Header" > "SRV / Header actions" > "Button · 5 learners"). Read its properties. Set the text property "Label#3:97" to "6 learners". Name it "Button · 6 learners". State stays Pressed.
2. If the property cannot be set on the nested instance, leave it and report it under "Component gaps".

STEP 3 · Replace the popover
1. In the clone, find the instance "SRV / Participants popover" (absolute, x 1112, y 48, 320 × 442, title "Add a group"). Delete it. Deleting an instance is allowed.
2. Clone "SRV / Participants popover" (1752:17158) from "P1 · Room view, Participants" (1752:17138). Move it into the P1c clone as the last child. Layout positioning absolute. x 1112, y 48. Name "SRV / Participants popover".
3. In the clone, in the slot "Content" > frame "Participants":
   a. The text "Subtitle" becomes "Added today · NURS 340 · Group B".
   b. The six instances "Participant · Emily Baker", "Participant · Priya Shah", "Participant · Marcus Chen", "Participant · Olivia Grant", "Participant · Noah Patel", "Participant · Lena Fischer": set the property "State" to "Present" on all six. Their names stay.
   c. The title of the popover stays "Participants · 6". "Divider", "Add learner" and "Footnote" stay.
4. The popover is about 449 high and ends at y 497.

STEP 4 · Label and caption
1. Label "Label · P1c" at x 7880, y 76: "P1c · Room view, group added".
2. Caption "Caption · P1c" at x 7880, y 1044. Two lines:
   Line 1: "After "Add 6 learners". The six learners of the group are in the list, marked as added today. The header button shows the new count."
   Line 2: "A learner can still be marked absent. Changes apply to this recording only. "Start recording" opens the room view (L4)."

CHECK
- 1440 × 900 at x 7880, y 120. P1 and P1b are unchanged.
- The popover shows six ticked rows and the subtitle "Added today · NURS 340 · Group B". The header button reads "6 learners".
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. Whether the nested button label could be set. "Component gaps".
- Note for Claude: the header of the room view still names NURS 310 · Sepsis recognition. The sample data does not match the added group. Do not fix it.
```

## B5 · P5b Groups

```
Goal: one page screen "P5b · People, Groups" in slot 7. It is "P5 · People, Learners" with the tab "Groups" active and a table of the four learner groups.
If the Section "15 · Sessions, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "P5 · People, Learners" (1752:39900) into the Section at x 9440, y 120. Name the clone "P5b · People, Groups". Keep 1440 × 900. Do not change P5.
Everything below happens inside this clone.

STEP 2 · Tab
1. Find the instance "Tabs · People" (1752:40131). Read the options of its property "Active". Set "Active" to "Chapters" (it shows the label "Groups").
2. Check with a screenshot that the tab "Groups" is the selected one and "Learners" is not. If the property did not move the selected look, set the property "state" of the nested instance "Tab · Checklist" (label "Learners") to "default" and of "Tab · Chapters" (label "Groups") to "selected".
3. If neither works, stop the step and report.

STEP 3 · Breadcrumb and filters
1. "Breadcrumb": the text named "Rooms" (it reads "Learners") becomes "Groups".
2. In "Filters": the instance "Search": its text "placeholder" becomes "Search groups". Set "Filter · Group" and "Filter · Status" to visible = false.

STEP 4 · Table
All in "Card · Learners". Rename it "Card · Groups".
1. "Devices header": the text "Learners" becomes "Groups". The text "6 learners" becomes "4 groups".
2. "Row · Noah Patel" and "Row · Lena Fischer": delete them. Four rows stay.
3. In "Columns header" and in each of the four rows: delete "Cell · Status". Set the four remaining cells to these fixed widths: "Cell · Device" 300, "Cell · Kind" 380, "Cell · Audio from" 140, "Cell · Source" 262 (sum 1082).
4. Texts. In "Columns header": "Name" becomes "Group", "Email" becomes "Course", "Group" becomes "Learners", "Source" stays.
5. Rows, top to bottom, with the texts of the cells in the order Device, Kind, Audio from, Source. Rename the rows:
   - "Row · NURS 310 · Group A": "NURS 310 · Group A", "NURS 310 · Sepsis recognition", "5", "Canvas"
   - "Row · NURS 310 · Group B": "NURS 310 · Group B", "NURS 310 · Sepsis recognition", "6", "Added here"
   - "Row · NURS 340 · Group B": "NURS 340 · Group B", "NURS 340 · Postpartum hemorrhage", "6", "Canvas"
   - "Row · Paramedic intake 3": "Paramedic intake 3", "Paramedic intake 3", "12", "Canvas"
6. "Table footer", text "Footer text": "Groups come from Canvas or are added here. A sync never changes a group that exists only here." Width fill (text auto resize: height).
7. The card is about 368 high (52 + 40 + 4 × 56 + 52).

STEP 5 · Label and caption
1. Label "Label · P5b" at x 9440, y 76: "P5b · People, Groups".
2. Caption "Caption · P5b" at x 9440, y 1044. Two lines:
   Line 1: "The "Groups" tab of People. Each group shows its course, how many learners it has and where it comes from."
   Line 2: "A group from Canvas is kept by Canvas. A group added here is never changed by a sync. The tab "Learners" goes back to P5."

CHECK
- 1440 × 900 at x 9440, y 120. P5 is unchanged.
- The tab "Groups" is selected. The table has four rows and four columns: Group, Course, Learners, Source. No text is clipped.
- No row shows an e-mail address or a status badge. Take one screenshot.

REPORT
- The id of the frame. The options of "Active". Which of the two tab methods worked. "Component gaps".
- Note for Claude: the Source value "Added here" for NURS 310 · Group B is sample data made up for this frame.
```

## B6 · L2c no rooms yet

```
Goal: one page screen "L2c · Live, no rooms yet" in slot 8. It is "L2 · Live" before any room exists.
If the Section "15 · Sessions, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L2 · Live" (1752:9232) into the Section at x 11000, y 120. Name the clone "L2c · Live, no rooms yet". Keep 1440 × 900. Do not change L2.
Everything below happens inside this clone.

STEP 2 · Empty card
1. Clone the instance "Button · Start recording" (1752:9244 in the source) from "Page header". Set layout positioning to auto. Set the text property "Label#3:97" to "Go to Rooms". Variant Primary, State Rest. Name "Button · Go to Rooms". Keep it for step 4.
2. In "Content", delete "Room wall" (1752:17037).
3. Clone "Card · Advanced" (1752:33760) from "L9 · Camera, opened from a room" (1752:33497) into "Content" as the last child, after "Page header". Width fill. Name "Card · No rooms".
4. In its "Advanced header": the text "Advanced settings" becomes "No rooms yet.". Delete the text "Show".
5. The muted text of the card: "Add a room, then add its cameras. Rooms with a camera show up here."
6. Move "Button · Go to Rooms" into "Card · No rooms" as the last child. Width hug.
7. "Content" now has two children: "Page header" and "Card · No rooms". The card is about 132 high.

STEP 3 · Page header
1. The instance "Text · Tuesday, January 19": set its text property "Content#43:710" to "No rooms yet".
2. "Button · Start recording" and "Button · Select rooms": set the property "State" to "Disabled". Variant and labels stay.

STEP 4 · Label and caption
1. Label "Label · L2c" at x 11000, y 76: "L2c · Live, no rooms yet".
2. Caption "Caption · L2c" at x 11000, y 1044. Two lines:
   Line 1: "Live before any room exists. One card says what to do. The two header buttons are disabled because there is nothing to record."
   Line 2: ""Go to Rooms" opens the rooms list (L7). After a room has a camera it shows here (L2)."

CHECK
- 1440 × 900 at x 11000, y 120. L2 is unchanged.
- "Content" has exactly two children. The card holds the title, the muted line and the Primary button.
- Both header buttons show the disabled look. No text mentions a room name. No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## After these run

- Claude reviews every frame in the file and adds the Section and the frames to "Screen list" and "Shell facts" in `11-16-merge-00-shared.md`.
