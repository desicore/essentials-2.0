# 11-16 · F1a: L1 Today and L1b Start event, 2 rooms

Two greyscale wireframes for the workshop on 11-17. L1 is the Today page as a day calendar (rooms are columns, time runs down the side). L1b is the same page with a dim layer and a right-hand sheet that starts an event with two rooms. They are discussion sketches, not final designs. The concept, the Shared rules and the sample data are in `11-16-merge-00-shared.md`.

## Context

- Today is the first item in the side navigation. An event has the button "Start event". Starting the event also starts the recording.
- Content spec: low-fi screens on the FigJam board "Essentials x OpSpace" (`KStutzzTvN5ENoWJPj07Zg`): L1 `8:378`, L1b `13:1204`. Structure and behaviour come from them. Sample data comes from the shared file, not from the low-fi.
- Visual source: Figma file IMSH-MVP (`dbJVpAusLJCtreiz0jlEh3`).

## What I found in the file (11-16, read-only)

- No rooms-as-columns day calendar exists. Page "Wireframe (D)" (0:1) has "2 · Calendar" `1:1577` (1440 × 900, a Mon to Fri WEEK calendar with the old shell and old look, days as columns). The old Drafts frames have only a mini month grid ("Card / Mini calendar" `305:19943`) and "Card / Timeline" rows. None fits, and the old shell would be wrong. So L1 is a **new build** on top of "Shell · Page". Nothing is cloned from those frames.
- Low-fi L1 (screenshot read): title "Today", button "Create event" top right, five room column headers (Sim Room 1, Sim Room 2, Sim Room 3, Skills Lab 1, Debrief Room 1), hour labels 8 AM to 5 PM, grey event blocks "<name> · <room> · <time>", one block with a button "Start event". Footnote "Same as OpSpace today. Start event also starts the recording." is an annotation. It does not go on the frame.
- Low-fi L1b (screenshot read): it is a CENTRED DIALOG, not a sheet. Texts: "Start event", "Recording starts with the event.", "Event" with "Trauma team drill · 13:00–14:30 · 6 learners", "Rooms in this event" with two ticked rows "Sim Room 3 · Ready" and "Debrief Room 1 · Ready", "Untick a room if you do not want to record it.", "Scenario" with "Trauma", buttons "Cancel" and "Start event · 2 recordings". The contract and Daniel's brief say right-hand sheet, so the sheet is built. The texts above are kept, with the sample data of the shared file.
- Sheet source used: the instance "Sheet · Start recording" `1695:11173` in frame "SS1 · Start session, ad hoc" `1695:10571`, page "👤 SRV flow [D]" (960:51213), Section "Session start · Sketches". Easier than SS2 `1697:10563` (its body is a read-only event summary) and than `1:7327` (1096 high, three room blocks). SS1's sheet is 480 × 900 and already has: Header with "Title" and "Subtitle", "Close Button", slot "Body" with frame "Start form" (children: "Room options", "Block · Event", "Block · Learners", "Block · Scenario"), "Footer Actions" with instances "Cancel" and "Start recording". Fallbacks, in order: the sheet in SS2 `1697:10581` (delete its "Event summary" and rebuild), then `1:7327`.
- "Room options" holds "Room options header" (texts "Room", "Ready rooms first"), three frames "Option · Sim Room 1" (2 px selected stroke), "Option · Sim Room 2", "Option · Skills Lab 1" (each: frame "Text" with two texts, and a Badge instance, variant property "Variant" = Neutral, Success, Warning, Error, "Shape" = Pill), and a text "Hint". Each "Block · …" has "Room header" (texts "Room name", "Cameras"), instance "Select · Event" (properties Size, State, Display, Status) and text "Hint".
- Checkbox: the Participants popover (instance `1348:11444` in S2, page 960:51213) uses nested instances named "Checkbox" of component `1:533` ("Value=Checked, Size=sm, State=Default", set "Checkbox / CheckboxInput", 20 × 20, properties Value, Size, State, Label#72:62, hasDescription#72:0). Use `1:533` as the tick.
- Button: "Button · Start recording" `1694:9947` (Primary, SM, 120 × 28; properties Variant, Size, State, Type, Elevation, Label#3:97, Icon#3:0). Text override "Label#3:97".
- Dim: `1360:9294` is a rectangle 1440 × 948. Set it to 1440 × 900.
- Text sources (read-only clones, all inside the SS1 sheet instance `1695:11173`; clone the text out, then change characters): card title text "Room" `I1695:11173;2266:9916;1696:11012`; body Medium text "Sim Room 1" `I1695:11173;2266:9916;1696:11020`; muted text "Hint" `I1695:11173;2266:9916;1696:11052`. Body Regular 14: text "Value" in SS2's sheet `I1697:10581;2266:9916;1698:11147`. If an id does not resolve, find the text by its name inside the named frame and report.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Start event vs Start recording | "Start event" also starts the recording. **Open for the workshop:** whether "Start recording" is a separate button. The sheet says "Recording starts with the event." |
| Sheet or dialog | Right-hand sheet (contract), although the low-fi L1b is a centred dialog |
| Rooms | Four rooms as in the shared sample data (Sim Room 1, Sim Room 2, Skills Lab 1, Debrief Room 1). The low-fi has a fifth, Sim Room 3 |
| Events on the calendar | The two events from the shared file, plus three filler events so the day looks real: 08:00 to 09:30 NURS 330 · Airway basics, Group C, Sim Room 1 (past, grey text); 11:30 to 12:30 NURS 310 · Group A debrief, Debrief Room 1; 14:30 to 15:30 NURS 340 · Group B debrief, Debrief Room 1. These three are not in the shared file |
| Two-room event | Drawn as two blocks, one in each room column (Sim Room 1, Skills Lab 1), both selected. The popover sits in the empty Sim Room 2 column between them |
| Popover | A small card next to the selected event, with the Primary button and the line "Recording starts with the event." (the low-fi puts the button inside the block) |
| Room state in the sheet | Both rooms "Ready" at 13:00. The shared file gives Skills Lab 1 no state at 13:00. Check |
| Learners line | The event has 6 learners, so each room row says "6 learners · Group B". Learners belong to the event, not to a room |
| Scenario | Low-fi "Trauma" becomes "Postpartum hemorrhage checklist" (from the event). The "Learners" block of SS1 is deleted because the room rows carry the learners line |
| Button text | "Start event". The low-fi says "Start event · 2 recordings"; the count is in the rows ("2 of 2 selected") |
| Absolute layers | Event blocks and the popover are absolute layers inside the calendar (a calendar needs it). This is the one exception, only in L1 and L1b |
| Hour grid | 64 px per hour, 08:00 to 17:00 |
| Breadcrumb | Deleted: Today is a top-level page |

## Gaps I expect in Cursor's report

- The Button property that sets Primary or Secondary may have another name. Report it. Expected: "Variant".
- Page header of "Shell · Page": layer names of the title and subtitle texts are unknown until F0 has run. Report what you found.
- The Select instance value text layer. Report its name.
- The tick: if `1:533` cannot be instanced, the fallback is in step 5 of L1b.
- Cursor has once reported success without writing anything. Check each frame in Figma.

## How to run

All runs: **Claude Sonnet 5.5 · High**. One new Cursor chat. **The chat may start only after "Shell facts" in `11-16-merge-00-shared.md` is filled** (the status must not say "not yet"). Run L1 first, then L1b (L1b clones L1) in the same chat.

Both sections, in one chat:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1a-today.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L1 · Today", "L1b · Start event, 2 rooms". After each section, run its check list and take a screenshot before you start the next section.`

Rerun, one section only:

- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1a-today.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L1 · Today". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1a-today.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L1b · Start event, 2 rooms". After each section, run its check list and take a screenshot before you start the next section.`

## Flow rules

```
Section: "1 · Sessions" (on the target page, id in "Shell facts"). Write only inside it.
Slots: L1 · Today = slot 1 (x 80, y 120). L1b · Start event, 2 rooms = slot 2 (x 1640, y 120). Each 1440 × 900, clip content on.
Label "Label · L1" at x 80, y 76; caption "Caption · L1" at x 80, y 1044. Label "Label · L1b" at x 1640, y 76; caption "Caption · L1b" at x 1640, y 1044. Clone "Label · AV0" (1603:10620) and "Caption · AV0" (1603:10621).
Active nav item in both: Today. Set it with the method in "Shell facts".

Source nodes (read-only, clone only):
- "Shell · Page" (id in "Shell facts"), in Section "0 · Shell". It has "Content" with "Breadcrumb" and "Page header".
- "Dim" 1360:9294 (page 👤 SRV flow [D], 960:51213, inside "S8 · Stop confirmation" 1360:8441). Rectangle, Core/Overlay 50 %.
- Sheet: instance "Sheet · Start recording" 1695:11173 inside "SS1 · Start session, ad hoc" 1695:10571 (page 960:51213, Section "Session start · Sketches" 1692:9755). Fallback 1: "Sheet · Start recording" 1697:10581 inside SS2 1697:10563. Fallback 2: "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" 1:7327 inside "3d · Record 3 rooms" 1:7184 (page Wireframe (D) 0:1), 480 × 1096.
- Button: "Button · Start recording" 1694:9947 (Primary, SM) and "Button · Room devices" 1694:9998 (Secondary, SM), inside "CO1 · Center overview" 1692:9756. Label through the text override "Label#3:97".
- Badge: "Badge · Ready" 1605:5894 in "AV0 · Rooms" 1603:10516 (Success). Inside the sheet clone the badges already exist (property "Variant").
- Tick: component 1:533 "Value=Checked, Size=sm, State=Default" (Checkbox / CheckboxInput). Create an instance with figma.getNodeByIdAsync('1:533') then createInstance().
- Texts to clone (then change the characters): card title "Room" I1695:11173;2266:9916;1696:11012. Body Medium "Sim Room 1" I1695:11173;2266:9916;1696:11020. Muted "Hint" I1695:11173;2266:9916;1696:11052. Body Regular "Value" I1697:10581;2266:9916;1698:11147.
- Card base (fill, stroke, radius): bind surface/card, border/default, radius/container yourself. If binding fails, clone "Card · Unassigned devices" 1605:5853 (in AV0 · Rooms), delete its children, and use that frame.

Calendar numbers (used in L1): hour row 64 px, 08:00 to 17:00 = 9 rows = 576 px. Room header row 40 px. Time column 56 px wide. Four room columns 269 px wide each. 56 + 4 × 269 = 1132 = the card width. Event block: x 4, width 261, y = (minutes after 08:00) / 60 × 64 + 2, height = (minutes) / 60 × 64 − 4.

Words: never write OpSpace, Essentials, SRV, Center overview, Video review, Dashboard on a frame.
Report the property names of Button (Variant options), Badge (Variant options), Checkbox, and the name of the text layer in "Select · Event".
```

## L1 · Today

Source: "Shell · Page" (new build for the calendar). Frame size 1440 × 900.
Run: **Claude Sonnet 5.5 · High**.

```
Goal: one frame "L1 · Today" in slot 1 of Section "1 · Sessions". The Today page as a day calendar: rooms are columns, time runs down the side, one event is selected, and a small popover offers "Start event".

1 · Check
Find the Section "1 · Sessions" and the frame "Shell · Page" (id in "Shell facts"). If either is missing, stop and report. If a frame named "L1 · Today" already exists in the Section, stop and report.

2 · Shell
- Clone "Shell · Page" into the Section. Place it at x 80, y 120. Rename the clone "L1 · Today". Clip content on. Size 1440 × 900.
- Set the active nav item to "Today" with the method in "Shell facts". Do not relabel anything in the side navigation.
- In "Content": delete the frame "Breadcrumb" (Today is a top-level page). If it is not there, go on and report it.

3 · Page header
- Title text of "Page header": "Today". Find the title text (the first text in "Page header") and report its layer name.
- Subtitle text (muted), if the header has one: "Tue 19 Jan 2027 · 4 rooms · 2 events". If it has no subtitle text, do not add one.
- Button: if "Page header" has a button instance, set its label to "Create event" and its Variant to Secondary. If not, clone "Button · Room devices" (1694:9998, Secondary, SM) into the right end of "Page header" and set its label to "Create event". Name it "Button · Create event". The icon stays hidden. The button's right edge touches the right padding of "Content".

4 · Calendar card
Add a frame as the child of "Content" right after "Page header". Name "Card · Day calendar". A card (auto-layout vertical, fill surface/card, 1 px inside stroke border/default, radius radius/container, clip content on), padding 0, gap 0, width fill (1132), height hug (616 expected).
Two children:

4a · "Room header row": auto-layout horizontal, gap 0, width fill, height 40, padding 0, no fill, 1 px bottom stroke border/default.
- "Time spacer": width 56, height 40, no fill.
- Four frames, in this order: "Room header · Sim Room 1", "Room header · Sim Room 2", "Room header · Skills Lab 1", "Room header · Debrief Room 1". Each: width 269, height 40, auto-layout horizontal, centred both ways, 1 px left stroke border/default (no other stroke). One text, label style (Medium 14, text/primary), the room name.

4b · "Grid": auto-layout horizontal, gap 0, width fill, height hug (576), no fill, no stroke.
- "Time column": auto-layout vertical, gap 0, width 56, height hug. Nine frames "Hour label · 08:00" to "Hour label · 16:00" (one per hour). Each: width 56, height 64, auto-layout vertical, padding top 4, padding right 8, aligned top and right. One text, muted (Regular 12, text/secondary), right-aligned: "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00".
- Four columns, in this order: "Column · Sim Room 1", "Column · Sim Room 2", "Column · Skills Lab 1", "Column · Debrief Room 1". Each: auto-layout vertical, gap 0, width 269, height hug (576), no fill, 1 px left stroke border/default. Each holds nine frames "Hour cell · 08:00" to "Hour cell · 16:00": width fill (269), height 64, no fill, 1 px top stroke border/default, no children.
- Check: the card's inner height is 40 + 576. If "Content" is too short and the card is clipped, do not shrink the hours. Report the overflow in px.

5 · Event blocks
Each event block is an absolute child (layoutPositioning ABSOLUTE) of its "Column · …" frame, placed after the nine hour cells. Block: auto-layout vertical, padding spacing/2 (8), gap 2, fill surface/card, 1 px inside stroke border/default, radius radius/element-10, clip content on, fixed width 261 and fixed height as in the table. Name "Event · <short name>". Two texts: line 1 body Medium (text/primary), line 2 muted.

| Column | Block name | x | y | h | Line 1 | Line 2 |
|---|---|---|---|---|---|---|
| Sim Room 1 | Event · Airway basics | 4 | 2 | 92 | NURS 330 · Airway basics | 08:00–09:30 · Group C · Done |
| Sim Room 1 | Event · Postpartum hemorrhage | 4 | 322 | 92 | NURS 340 · Postpartum hemorrhage | 13:00–14:30 · Group B · 6 learners |
| Sim Room 2 | Event · Sepsis recognition | 4 | 130 | 92 | NURS 310 · Sepsis recognition | 10:00–11:30 · Group A · 5 learners |
| Skills Lab 1 | Event · Postpartum hemorrhage | 4 | 322 | 92 | NURS 340 · Postpartum hemorrhage | 13:00–14:30 · Group B · 6 learners |
| Debrief Room 1 | Event · Group A debrief | 4 | 226 | 60 | NURS 310 · Group A debrief | 11:30–12:30 · 5 learners |
| Debrief Room 1 | Event · Group B debrief | 4 | 418 | 60 | NURS 340 · Group B debrief | 14:30–15:30 · 6 learners |

- "Event · Airway basics" is past: both its texts use text/secondary.
- Both blocks "Event · Postpartum hemorrhage" are selected: stroke 2 px inside, colour text/primary. (One event with two rooms, so two blocks.)
- Do not add buttons to the blocks.
- Sim Room 2, Skills Lab 1, Debrief Room 1 and Sim Room 1 have no other blocks. Do not add any.

6 · Popover
Add a frame "Popover · Start event" as the LAST child of the frame "L1 · Today". Absolute position (ignore auto-layout). Width 245, height hug. A card (see step 4): auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12).
Position: read absoluteBoundingBox. x = (absolute x of "Column · Sim Room 2") + 12 − (absolute x of "L1 · Today"). y = (absolute y of the block "Event · Postpartum hemorrhage" in "Column · Sim Room 1") − (absolute y of "L1 · Today"). The popover then sits in the empty Sim Room 2 column, level with the selected event.
Children, in this order:
- "Popover header": auto-layout vertical, gap 2, width fill. Text, card title style (Bold 14): "NURS 340 · Postpartum hemorrhage". Text, muted: "13:00–14:30 · Group B · 6 learners". Text, muted: "Sim Room 1, Skills Lab 1".
- "Button · Start event": clone "Button · Start recording" (1694:9947). Label "Start event". Variant Primary. Icon stays off. Hug width, height 28.
- Text, muted, width fill: "Recording starts with the event."

7 · Label and caption
- Label "Label · L1", text: "L1 · Today".
- Caption "Caption · L1", two lines:
  "Faculty (Dr. Maya Ortiz) or sim technician: opens Today to see every room and every event of the day, and starts an event."
  "New compared with today: the day is a calendar with one column per room. The button Start event is on the event itself, and starting it also starts the recording."

Check list:
- "L1 · Today" is 1440 × 900 at x 80, y 120 in Section "1 · Sessions". Label at y 76, caption at y 1044, both at x 80.
- The nav item "Today" is active. No breadcrumb. The page title reads "Today".
- "Card · Day calendar" has two children: Room header row, Grid. Grid has five children: Time column and four columns. Each column has nine hour cells and its event blocks. Room columns are 269 wide.
- Six event blocks exist, as in the table, at the given x, y, h. Both "Event · Postpartum hemorrhage" blocks have a 2 px stroke.
- The popover is the last child, 245 wide, sits in the Sim Room 2 column, and does not cover any event block.
- One Primary button is on the frame in the popover ("Start event"), and "Create event" in the header. Both are instances. No badge was drawn.
- No text is clipped, nothing overflows 1440 × 900, no forbidden word on the frame.
- Take a screenshot and look at it.

Report: new ids (frame, card, popover, label, caption), the Button property names, the layer name of the page title, "Component gaps", every step you could not do exactly as written, and the screenshot.
```

## L1b · Start event, 2 rooms

Run only after L1 is done and checked.

Source: L1 (clone), "Dim" 1360:9294, sheet 1695:11173. Frame size 1440 × 900.
Run: **Claude Sonnet 5.5 · High**.

```
Goal: one frame "L1b · Start event, 2 rooms" in slot 2 of Section "1 · Sessions". It is L1 with a dim layer and a right-hand sheet "Start event" for the 13:00 event that uses two rooms.

1 · Clone
- Find "L1 · Today" in the Section "1 · Sessions". If it is missing, stop and report.
- Clone it inside the same Section. Place the clone at x 1640, y 120. Rename it "L1b · Start event, 2 rooms". Do not change "L1 · Today".
- In the clone: delete the frame "Popover · Start event". Change nothing else behind (the selected events stay selected).

2 · Dim layer
Clone "Dim" (1360:9294) into the clone as its last child. Absolute position (ignore auto-layout). x 0, y 0, width 1440, height 900. Keep its fill. Name it "Dim".

3 · Sheet
Clone the instance "Sheet · Start recording" (1695:11173) into the clone as its last child, above "Dim". Absolute position, x 960, y 0, width 480, height 900. Name it "Sheet · Start event".
- If the source is not found, use the fallbacks in "Flow rules". If the clone falls back to the original content of a nested layer, stop and report which layer.
- Text "Title": "Start event".
- Text "Subtitle": "Recording starts with the event."
- In "Footer Actions": the instance "Start recording": label "Start event" (text override on its "Label"). Hide its icon: set the instance property "Icon#3:0" to false, or if that name does not exist set the child "Icon" to visible false. Rename the instance "Start event". Keep "Cancel" as it is.

4 · Body: rebuild the form
In the slot "Body", frame "Start form" (448 wide, auto-layout vertical, gap 24):
- Delete "Block · Learners".
- Move "Block · Event" to the first position (index 0), then "Room options", then "Block · Scenario". Final order: "Block · Event", "Room options", "Block · Scenario".
- "Block · Event": text "Room name": "Event". Text "Cameras": "from the calendar". The value text inside the instance "Select · Event" (find the TEXT layer in it, report its name): "NURS 340 · Postpartum hemorrhage · 13:00–14:30". Text "Hint": "Both rooms are linked to this event."
- "Block · Scenario": text "Room name": "Scenario". Text "Cameras": "from the event". Select value: "Postpartum hemorrhage checklist". Text "Hint": "Comes with the event. You can change it later."

5 · Room options
Rename the frame "Room options" to "Rooms in this event". In it:
- "Room options header": text "Room" becomes "Rooms in this event". Text "Ready rooms first" becomes "2 of 2 selected".
- Delete the frames "Option · Sim Room 1" and "Option · Sim Room 2" (the first has a 2 px selected stroke, which is not wanted). Keep "Option · Skills Lab 1" as the base.
- In "Option · Skills Lab 1": set the fill of its text "Skills Lab 1" to the same fill as the text "Rooms in this event" in the header (text/primary). Set its second text to "1 camera · Audio kit". Set the badge instance: label text "Ready", property "Variant" Success (report the property name and options). Rename the badge "Badge · Ready".
- In its frame "Text": add a third text as the last child, a clone of the second (muted) text: "6 learners · Group B".
- Left side of the row: put the frame "Text" into a new frame "Left", auto-layout horizontal, gap spacing/3 (12), vertically centred, hug. The first child of "Left" is the tick, then "Text". Tick: an instance of component 1:533 (Value=Checked, Size=sm, State=Default), 20 × 20, named "Tick". If it cannot be instanced, clone a nested "Checkbox" instance from "SRV / Participants popover" instance 1348:11444 (page 960:51213) instead. If both fail, stop and report. The row keeps space between: "Left" at the left, the badge at the right.
- Clone this row. Name the clone "Option · Sim Room 1" and the original "Option · Skills Lab 1". Order: "Option · Sim Room 1" first. In "Option · Sim Room 1": room name "Sim Room 1", second text "3 cameras · 2 mics · Audio kit", third text "6 learners · Group B", badge "Ready" (Success).
- Both rows: 1 px stroke border/default, both ticked, both badges Success "Ready".
- Text "Hint" (last child): "Untick a room if you do not want to record it."

6 · Label and caption
- Label "Label · L1b", text: "L1b · Start event, 2 rooms".
- Caption "Caption · L1b", two lines:
  "Faculty (Dr. Maya Ortiz): starts the 13:00 event, which uses two rooms. Both rooms are ticked and record together, linked to the event and its learners."
  "New compared with today: one step starts every room of an event, and you can untick a room to leave it out. Today you start each room on its own."

Check list:
- "L1b · Start event, 2 rooms" is 1440 × 900 at x 1640, y 120. Label at y 76, caption at y 1044, both at x 1640. "L1 · Today" is unchanged.
- The last two children are "Dim" (1440 × 900 at 0, 0) and "Sheet · Start event" (480 × 900 at 960, 0), in that order. The popover is gone. The calendar and Today in the nav are visible behind the dim layer.
- The sheet reads: title "Start event", subtitle "Recording starts with the event.", the three blocks in the order Event, Rooms in this event, Scenario. No "Learners" block and no text of the old SS1 content ("Ad hoc recording", "Add later", "No scenario", "Ready rooms first", "Needs attention", "Recording 12:20") is left.
- "Rooms in this event" has a header, two rows, a hint. Each row has a tick, the room name, devices line, learners line, and a Success badge "Ready".
- Footer: "Cancel" and the Primary button "Start event" with no icon. Both are instances.
- Nothing is clipped, nothing overflows the sheet, no forbidden word on the frame, no hard-coded colour, no detached instance.
- Take a screenshot and look at it.

Report: new ids, the Select value layer name, the Badge, Button and Checkbox property names, "Component gaps", every step you could not do exactly as written, and the screenshot.
```

## After these run

- Claude reviews both frames in Figma (read-only) and writes a fix section here if needed.
- For the workshop: is "Start recording" a separate button, or does "Start event" always start the recording? Does a day calendar with rooms as columns stay readable with 8 or more rooms (scrolling sideways)? Does "Create event" belong on Today or only under Events?
