# 11-17 · Final round: AV device management

Topic T04 "Live capture, AV & Anywhere". Coverage map row "AV device management & configuration" is "Zero". The device lists and the device pages exist (L8 to L11), but no screen shows how a device gets into a room. This file adds that flow first, and the rest of the device controls after the workshop.

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. The requirement lines AV-1 to AV-12 are in the vault page `wiki/work/essentials-2.0-av-device-management.md`.

## Context

- "Add device" on the room page (L8) and "Assign" in the device list (L10) have no result screen.
- The rules behind the flow: the system detects a device, nobody types it (AV-2). A fixed device belongs to one room (AV-3, AV-4). The room is the main place to add and remove devices; the device shows its room, with a way to change it (AV-5). A room has a list of devices with no numbered slots (AV-6).
- Run A is for the workshop on 11-17. Run B can wait until after the workshop.
- Open since the standup of 11-13: the product manager asked to also look at the opposite flow, where a camera is pulled into a room right before a simulation, with no fixed link. This file draws the fixed link. The question is in "Open questions".

## What I found in the file (11-16 evening, read-only)

- Section "3 · Rooms and devices" `1749:8318` has L7 to L11 in slots 1 to 6. Slots 7 (x 9440) and 8 (x 11000) are empty.
- "L8 · Room, AV tab" `1752:19374`: see `11-17-final-room-readiness.md` for its full structure. "Card · Cameras" `1752:19778` has the rows "Row · Overhead camera", "Row · Foot camera" `1752:19804`, "Row · Patient monitor capture". Under the cards: "Button · Add device" `1752:19906`.
- "L10 · Simulators & Equipment" `1752:34999` lists two devices with no room: "360 camera" (Portable camera, Working, PC-0093) and "Spare microphone" (Microphone, Not checked, MC-5530). Each has the link "Assign".
- A right-hand sheet exists in "L1b · Start event, 2 rooms" `1752:34405`: the rectangle "Dim" `1752:34594` (absolute, 1440 × 900) and the instance "Sheet · Start event" `1752:34595` (absolute, x 960, y 0, 480 × 900). It is an instance of the library component "Dialog", Variant "Fullscreen", with the text properties "Title" and "Subtitle Text" and the slots "Body" and "Footer Actions".
  - In the slot "Body": frame "Start form" with three blocks: "Block · Event", "Rooms in this event", "Block · Scenario".
  - "Rooms in this event" > "Room options header" (two texts: "Rooms in this event" and "2 of 2 selected"), "Option · Sim Room 1", "Option · Skills Lab 1", and a text "Hint".
  - An option > "Left" (instance "Tick", a checkbox with the property "Value", now "Checked"; frame "Text" with three texts) and a badge ("Badge · Ready").
  - In the slot "Footer Actions": the button instances "Cancel" and "Start event".

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | Section "3 · Rooms and devices", slots 7 and 8, next to L8. L7 to L11 are not touched |
| How a device gets into a room | "Add device" on the room page opens a sheet. It lists the devices that the system has found and that are in no room. The user ticks and adds. Nothing is typed |
| A device that is in another room | Not in the list. It is moved from its own page with "Change" in the row "Room" (L9). The sheet says so |
| After adding | The device is a new row in the room's list. No extra confirmation page |
| "Assign" in the device list (L10) | The same idea from the other end: pick a room for the device. It is drawn in Run B |

## Open questions for the workshop

- Fixed link or free pick? Does a camera belong to one room, or can the user pull any camera into a room right before a simulation?
- Portable cameras: does a portable camera join a room for one recording only?
- Who may add and remove devices: the sim technician only, or faculty too?
- Is there a technical limit on the number of cameras in a room?

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. Nothing else may write in Section "3 · Rooms and devices" at the same time. Files that write in other Sections may run in parallel.

Run A (for the workshop):

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-devices.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "DV rules" from the second file. Then run these sections of the second file, in this order: "A1 · L8f add a device", "A2 · L8g device added". After each section, run its check list and take a screenshot before you start the next section.`

Run B is for after the workshop. It creates a new Section "13 · Devices, more states" and writes only there. It clones L9, L10 and L11 from Section "3 · Rooms and devices" and does not change them. It may run at the same time as Run A and as every other final-round file.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-devices.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "DV rules for Run B" from the second file. Then run these sections of the second file, in this order: "B1 · Section 13 and L9b", "B2 · L9c change room", "B3 · L9d advanced settings", "B4 · L9e save a view", "B5 · L10c assign to a room", "B6 · L10d Cameras tab", "B7 · L11b test sound", "B8 · L10e nothing found". After each section, run its check list and take a screenshot before you start the next section.`

## DV rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Write only inside Section "3 · Rooms and devices" (1749:8318), and only in slots 7 and 8. Never change L7, L8, L9, L10, L10b, L11 or their labels and captions. You may clone them.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility. Content that sits in a slot of an instance may be changed, deleted and renamed.
- Never draw a badge, a button or a checkbox. To change a badge colour, set its property "Variant". To change a label, set the text property "Label" (or the text override).
- IDs refer to source nodes. Inside a clone, find layers by their exact name.
- Fonts: load the font of every text before you change it.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.

LABEL AND CAPTION (every new frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>". Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide. Name "Caption · <code>". Text: the two lines the section gives, with a line break between them.
```

## A1 · L8f add a device

```
Goal: one page screen "L8f · Room, add a device" in slot 7. It is "L8 · Room, AV tab" with a sheet open on the right.

STEP 1 · Clone
1. Clone "L8 · Room, AV tab" (1752:19374) into Section 1749:8318 at x 9440, y 120. Name the clone "L8f · Room, add a device". Keep 1440 × 900, clip content on.

STEP 2 · Dim layer and sheet
1. Clone "Dim" (1752:34594) from "L1b · Start event, 2 rooms". Put it in the L8f frame as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900.
2. Clone "Sheet · Start event" (1752:34595) from L1b. Put it in the L8f frame after the dim layer (on top). Layout positioning absolute. x 960, y 0, size 480 × 900. Name the clone "Sheet · Add a device".
3. Set the text properties of the sheet: "Title" = "Add a device". "Subtitle Text" = "Sim Room 2. Devices that the system has found and that are in no room."

STEP 3 · Sheet body
Everything in this step is inside the slot "Body" of the sheet, in the frame "Start form".
1. Delete "Block · Event" and "Block · Scenario". If a block cannot be deleted, set it to visible = false and report it.
2. Rename "Rooms in this event" to "Devices to add".
3. In "Room options header": the first text becomes "Found, in no room". The second text becomes "1 of 2 selected".
4. Rename "Option · Sim Room 1" to "Option · 360 camera". In its frame "Text", set the three texts, top to bottom: "360 camera", "Portable camera · PC-0093", "Found on the network now". The checkbox "Tick" stays "Checked". Badge: Variant Success, label "Working". Rename the badge "Badge · Working".
5. Rename "Option · Skills Lab 1" to "Option · Spare microphone". Set the three texts: "Spare microphone", "Microphone · MC-5530", "Found on the network now". Set the property "Value" of the checkbox "Tick" to its unchecked option (read the options of "Value" and report them). Badge: Variant Neutral, label "Not checked". Rename the badge "Badge · Not checked".
6. The text "Hint" becomes "A device belongs to one room. To move a device from another room, open the device and choose "Change" next to its room."
   Set the hint to width fill and height auto, so that it wraps.

STEP 4 · Sheet footer
1. In the slot "Footer Actions": the button "Start event": set the label to "Add 1 device". Rename the layer "Add 1 device". The button "Cancel" stays.

STEP 5 · Label and caption
1. Label "Label · L8f" at x 9440, y 76: "L8f · Room, add a device".
2. Caption "Caption · L8f" at x 9440, y 1044. Two lines:
   Line 1: "After "Add device" on the room page. The system lists the devices it found that are in no room. Nobody types a device."
   Line 2: ""Add 1 device" goes to L8g. Open question: does a camera belong to one room, or can any camera be pulled into a room before a simulation?"

CHECK
- "L8f · Room, add a device" is 1440 × 900 at x 9440, y 120. "L8 · Room, AV tab" and "L1b · Start event, 2 rooms" are unchanged.
- The sheet is 480 wide, at the right edge, full height. Its title reads "Add a device".
- The sheet body shows one group with two options. The first is ticked, the second is not.
- The footer shows "Cancel" and "Add 1 device".
- No text is clipped. Take one screenshot of the frame.

REPORT
- The id of "L8f · Room, add a device".
- The options of the checkbox property "Value".
- "Component gaps": every step you skipped.
```

## A2 · L8g device added

```
Goal: one page screen "L8g · Room, device added" in slot 8. It is the room page after the 360 camera was added.

STEP 1 · Clone
1. Clone "L8 · Room, AV tab" (1752:19374) into Section 1749:8318 at x 11000, y 120. Name the clone "L8g · Room, device added". Keep 1440 × 900.

STEP 2 · New row
1. In "Card · Cameras", clone "Row · Foot camera" and put the clone as the last child of the card, after "Row · Patient monitor capture". Name it "Row · 360 camera".
2. In "Row · 360 camera": the text in "Cell · Device" becomes "360 camera". The text in "Cell · Kind" becomes "Portable camera". The badge stays "Working". The text in "Cell · Last seen" stays "now".
3. In "Devices header": the text "3 cameras · 1 not found" becomes "4 cameras · 1 not found".

STEP 3 · Note under the lists
1. Clone the text "3 cameras · 1 not found" style: clone the muted text (1752:19781) and put the clone in "Content" as the last child, after "Button · Add device". Text: "360 camera was added to Sim Room 2. It is used from the next recording on." Name the layer "Note · Device added".

STEP 4 · Label and caption
1. Label "Label · L8g" at x 11000, y 76: "L8g · Room, device added".
2. Caption "Caption · L8g" at x 11000, y 1044. Two lines:
   Line 1: "The device is a new row in the room's list. The room is the main place to add and remove devices."
   Line 2: "A row opens the device page (L9). "Remove from room" is on the device page."

CHECK
- "L8g · Room, device added" is 1440 × 900 at x 11000, y 120. L8 is unchanged.
- "Card · Cameras" has four device rows. The last is "360 camera" with the badge "Working".
- Nothing goes below y 876 of the frame. No text is clipped. Take one screenshot.

REPORT
- The id of "L8g · Room, device added".
- "Component gaps": every step you skipped.
```

## Run B, after the workshop

These screens complete the module for the prototype. They go into a new Section "13 · Devices, more states" at x 0, y 19400, 12640 × 1240.

| Slot | Frame | What it shows |
|---|---|---|
| 1 | L9b · Camera, remove from room | Confirmation dialog for "Remove from room" |
| 2 | L9c · Camera, change room | The "Change" control in the row "Room", open, with the rooms |
| 3 | L9d · Camera, advanced settings | "Advanced settings" open: picture size and quality, with "Reset to defaults" |
| 4 | L9e · Camera, save a view | "Save current view": a name field in the list of saved views |
| 5 | L10c · Simulators & Equipment, assign to a room | "Assign" on the 360 camera, open, with the rooms |
| 6 | L10d · Simulators & Equipment, Cameras | The "Cameras" tab, and a filter bar that looks like filters |
| 7 | L11b · Microphone, test sound | "Play test sound" while it plays, and "Mute" on |
| 8 | L10e · Simulators & Equipment, nothing found | The list with a search that finds nothing |

### What I checked in the file (11-16 night, read-only)

- No Section "13 · Devices, more states" exists. Nothing sits at y 19300 to 20700 on the page. The other final-round files use y 20900 (Import) and 22400 (Sessions), so y 19400 is free.
- Frame-relative positions below are the position of the layer in the frame. "Content" sits at x 260 in L9, L10 and L11, so a layer at x N in "Content" is at x N + 260 in the frame.
- L9 `1752:33497`: "Row · Room" `1752:33746` holds the text "Room" and the frame "Room value" `1752:33748` (texts "Sim Room 2" `1752:33749` and "Change" `1752:33750`). "Change" is at x 1342, y 479 in the frame, 49 × 20. "Card · Advanced" `1752:33760` is at y 656 in "Side column", 98 high, with "Advanced header" `1752:33761` (texts "Advanced settings" and "Show" `1752:33763`) and a muted text `1752:33764`. "Card · Saved views" `1752:33724` (198 high) has "Saved views header" `1752:33725` and the rows "Row · Bed" `1752:33728`, "Row · Door", "Row · Wide" (48 high, fixed, texts "Bed" and "Go to").
- L10 `1752:34999`: "Row · 360 camera" `1752:36623`, its "Cell · Room" `1752:36628` holds the texts "No room" and "Assign" `1752:36634`. "Assign" is at x 833, y 622 in the frame, 43 × 20. "Tabs" `1752:35217`: the active tab "Tab · All" `1752:35230` has one stroke, weights top 0, right 0, bottom 2, left 0, align inside; "Tab · Cameras" `1752:35234` has no stroke. "Filter bar" `1752:36415` holds three plain frames (not instances), each 38 high with one text: "Filter · Search" `1752:36416` (text "Search"), "Filter · Room" `1752:36417` (text "Room"), "Filter · Status" `1752:36418` (text "Status"); the two filters are 170 wide with no caret. "Card · Equipment" `1752:36485` has "Columns header" and eight rows, then "Hint" `1752:36654` outside the card.
- L11 `1752:39371`: "Card · Sound level" `1752:39664` (vertical, padding 16, gap 12) holds "Sound level", "Level meter", "Live level" and "Button · Play test sound" `1752:39685`. "Card · Sensitivity" `1752:39670` holds "Button · Mute this microphone" `1752:39699` and the text "Current: 70%" `1752:39698`.
- "SRV / Stop confirmation" `1024:8693` (component, 440 × 198): "Dialog" > "Header" > "Title Wrapper" > TEXT "Title"; slot "Body" with one TEXT; slot "Footer Actions" with the instances "Keep recording (default, focused)" and "Stop recording", each with a TEXT "Label". Section "5 · Import" `1749:8320` has one fill (white, opacity 0.4) and one stroke.

## DV rules for Run B

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for Run B. They replace "DV rules" above for this run:
- Write only inside the Section "13 · Devices, more states". Section B1 creates it. Sections B2 to B8 must find it and stop if it does not exist. Never change any other Section or any frame in it (L7 to L11, L10b and their labels and captions too). You may clone from them.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar.
- Never edit, rename or move anything on "⚙️ Components (D)" (675:31351), "👤 SRV flow [D]" (960:51213) or the page "Selector / MultiSelector" (920:27126). You may create instances of their components and clone placed nodes.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility. Content that sits in a slot of an instance may be changed. Plain frames may be changed freely (layout, gap, padding, sizing, children).
- Never draw a badge, a button, a checkbox or an input. Clone an existing one. Button: set "Variant", "State" and the text property "Label#3:97". Badge: "Variant" and the text property whose key starts with "Label". Read the exact keys from componentProperties.
- IDs refer to source nodes. Inside a clone, find layers by their exact name. When two layers share a name, the step says which.
- Fonts: load the font of every text before you change it (use getStyledTextSegments).
- Every layer you set to width fill or height hug: append it to its auto-layout parent first, then set the sizing. Absolute layers (dim, dialog, popover) are appended last and set to layout positioning absolute before x and y.
- Every frame is a clone of the source frame the section names, 1440 × 900, clip content on. Clone, name it, put it into the Section with appendChild, then set x and y relative to the Section. If a frame with the same name exists, stop and report. Never overwrite.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.
- Word scan: visible text layers only. Forbidden words: "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard". The default texts of the confirmation dialog contain none after the step has overridden them.
- A clone made on another page must be moved into the target frame in the same script.

SLOTS in Section "13 · Devices, more states" (frames at y 120, labels at y 76, captions at y 1044)
- Slot 1, x 80: "L9b · Camera, remove from room"
- Slot 2, x 1640: "L9c · Camera, change room"
- Slot 3, x 3200: "L9d · Camera, advanced settings"
- Slot 4, x 4760: "L9e · Camera, save a view"
- Slot 5, x 6320: "L10c · Simulators & Equipment, assign to a room"
- Slot 6, x 7880: "L10d · Simulators & Equipment, Cameras"
- Slot 7, x 9440: "L11b · Microphone, test sound"
- Slot 8, x 11000: "L10e · Simulators & Equipment, nothing found"

LABEL AND CAPTION (every frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>". Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide (text auto resize: height). Name "Caption · <code>". Text: the two lines the section gives, with one line break between them.

SOURCES (clone, then change the characters)
- Card title Bold 14 "Cameras" 1752:19780. Body Regular 14, text/primary "PTZ camera" 1752:19797. Muted Regular 12 "3 cameras · 1 not found" 1752:19781. Link Medium 14 "Overhead camera" 1752:19794. All in "L8 · Room, AV tab" (1752:19374).
- Dim: "Dim" (1752:18430) in "L3 · Start recording" (1752:18339): rectangle, absolute, 0, 0, 1440 × 900.
- Dialog: component "SRV / Stop confirmation" (1024:8693, page "⚙️ Components (D)"). Create an instance.
- Field: component 920:27191 (page "Selector / MultiSelector"). Create an instance. Used only in B4.
- Caret: the text "Caret" ("▾", Regular 12) in "Select · Role" (1752:39717, in "I2 · Import, Map" 1752:38930). Used only in B6.

POPOVER MENU (B2 and B5). Inputs: the target frame, the anchor layer, the menu width, the list of row texts.
1. Clone the frame "Popover · Start event" (1752:32565) from "L1 · Today" (1752:18102). Move the clone into the target frame as its last child. Layout positioning absolute, then x and y.
2. Delete every child of the clone. Layout vertical, padding 4 on all four sides, gap 0. Width fixed to the menu width, height hug. Keep fill, stroke and radius. Name "Popover · <code>".
3. On the page "⚙️ Components (D)" find the variant "State=Action" (1039:4832) of "SRV / Tab menu row" (1039:4810). For each row text create an instance of that variant and add it to the clone. Width fill.
4. In each row: set the text property "Label#1039:5" to the row text. Set visible = false on the layers "Check" and "Tab icon". Name the row "Row · <row text>".
5. Check that no label wraps (each label stays 20 high). If one wraps, report it.
6. Position: read the absolute bounds of the anchor layer inside the frame. The menu starts 4 px under the bottom edge of the anchor. Its left edge is the left edge of the anchor, or its right edge is the right edge of the anchor when the step says so.
7. Height = 8 + 36 × number of rows.
If "Check" or "Tab icon" is not found, or the label key differs, stop the step and report it.
```

## B1 · Section 13 and L9b

```
Goal: the new Section and one page screen "L9b · Camera, remove from room" in slot 1. It is the camera page L9 with the question after "Remove from room".

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 19300 to y 20700 at x 0 to x 12640, stop and report.
2. If a Section named "13 · Devices, more states" already exists, do not create a second one. Use it and report that it existed.
3. Create a Section. Name "13 · Devices, more states". x 0, y 19400, size 12640 × 1240. Copy the fills, strokes and stroke weight of Section "5 · Import" (1749:8320).

STEP 2 · Clone
1. Clone "L9 · Camera, opened from a room" (1752:33497) into the new Section at x 80, y 120. Name the clone "L9b · Camera, remove from room". Keep 1440 × 900, clip content on. Do not change L9.
Everything below happens inside this clone.

STEP 3 · Dim and dialog
1. Clone "Dim" (1752:18430). Put it in the clone as the last child. Layout positioning absolute. x 0, y 0, 1440 × 900.
2. Create an instance of "SRV / Stop confirmation" (1024:8693). Put it in the clone after "Dim" (on top). Layout positioning absolute. Name "Dialog · Remove camera".
3. Text overrides (load each font first; find each text by its current characters):
   - TEXT "Title" (in "Header" > "Title Wrapper"): "Remove Overhead camera from Sim Room 2?"
   - The one TEXT in the slot "Body": "The camera stays in the list of equipment with no room. Past recordings keep its video."
   - Instance "Keep recording (default, focused)": rename "Button · Keep in room". Its TEXT "Label": "Keep in room".
   - Instance "Stop recording": rename "Button · Remove from room". Its TEXT "Label": "Remove from room".
   Do not change the properties of the two buttons.
4. Read the size of the dialog after the change (the title may wrap to two lines). Centre it: x = (1440 − width) / 2, y = (900 − height) / 2. Do not resize it by hand. Report the size.

STEP 4 · Label and caption
1. Label "Label · L9b" at x 80, y 76: "L9b · Camera, remove from room".
2. Caption "Caption · L9b" at x 80, y 1044. Two lines:
   Line 1: "After "Remove from room" on the camera page. One question before the camera leaves the room."
   Line 2: ""Keep in room" goes back to L9. "Remove from room" goes to the room page (L8) without the camera. The camera then shows with "No room" in the list (L10)."

CHECK
- The Section "13 · Devices, more states" exists at x 0, y 19400, 12640 × 1240. No other Section changed.
- "L9b · Camera, remove from room" is 1440 × 900 at x 80, y 120. L9 is unchanged.
- "Dim" covers the frame. The dialog is centred, fully inside the frame, and is the last child. It reads "Remove Overhead camera from Sim Room 2?" with the buttons "Keep in room" and "Remove from room". The old texts "Stop the recording?" and "Stop recording" are gone.
- No text is clipped. Take one screenshot.

REPORT
- The ids of the Section and of the frame. The dialog size in px.
- "Component gaps": every step you skipped.
```

## B2 · L9c change room

```
Goal: one page screen "L9c · Camera, change room" in slot 2. The user pressed "Change" next to the room. A list of rooms opens under it.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L9 · Camera, opened from a room" (1752:33497) into the Section at x 1640, y 120. Name the clone "L9c · Camera, change room". Keep 1440 × 900. Do not change L9.
Everything below happens inside this clone.

STEP 2 · Menu
1. Anchor: the text "Change" in "Card · Details" > "Row · Room" > "Room value" (1752:33750 in the source). Read its bounds in the frame (expected x 1342, y 479, 49 × 20; right edge x 1391, bottom y 499).
2. Build the menu with "POPOVER MENU" in the DV rules for Run B. Name "Popover · L9c". Width 228. Its right edge is the right edge of "Change" (expected x 1163) and it sits 4 px under it (expected y 503).
3. Rows, in this order: "Sim Room 1", "Sim Room 2 (current)", "Skills Lab 1", "Debrief Room 1", "No room".
4. The menu is 188 high and ends at y 691 (expected). It may cover the lower cards. That is fine. It must stay inside the frame.

STEP 3 · Label and caption
1. Label "Label · L9c" at x 1640, y 76: "L9c · Camera, change room".
2. Caption "Caption · L9c" at x 1640, y 1044. Two lines:
   Line 1: "Next to the room, "Change" opens the list of rooms. The camera belongs to one room, so one room is picked."
   Line 2: "A room moves the camera to that room and returns to L9. "No room" takes it out of the room, like "Remove from room" (L9b)."

CHECK
- 1440 × 900 at x 1640, y 120. L9 is unchanged.
- "Popover · L9c" is absolute, 228 × 188, five rows, no wrapped label, directly under "Change", last child.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. The real position of "Change". "Component gaps".
```

## B3 · L9d advanced settings

```
Goal: one page screen "L9d · Camera, advanced settings" in slot 3. The card "Advanced settings" is open.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L9 · Camera, opened from a room" (1752:33497) into the Section at x 3200, y 120. Name the clone "L9d · Camera, advanced settings". Keep 1440 × 900. Do not change L9.
Everything below happens inside this clone.

STEP 2 · Open the card
In "Side column" > "Card · Advanced":
1. In "Advanced header": the text "Show" becomes "Hide".
2. Delete the muted text (it reads "Picture size and quality. The defaults work for most rooms.").
3. In "Card · Details", clone "Row · Room" three times. Put the clones in "Card · Advanced" after "Advanced header", in this order. Width fill. Set the texts (left, then the value text inside "Room value"; the text "Change" stays):
   - "Row · Picture size": "Picture size", "1920 × 1080"
   - "Row · Quality": "Quality", "High"
   - "Row · Frames per second": "Frames per second", "30"
4. Clone the text "Hide" (the link, Medium 14) from "Advanced header". Characters "Reset to defaults". Name "Link · Reset to defaults". Put it in "Card · Advanced" as the last child. Width hug.
5. Order in the card: "Advanced header", "Row · Picture size", "Row · Quality", "Row · Frames per second", "Link · Reset to defaults". Height: 48 + 5 × 20 + 4 × 8 = 180.
6. The card now ends at y 836 of the frame (656 + 180; "Content" bottom limit is 876). Do not move or delete other cards. If the card ends lower than 876, report the overflow in px.

STEP 3 · Label and caption
1. Label "Label · L9d" at x 3200, y 76: "L9d · Camera, advanced settings".
2. Caption "Caption · L9d" at x 3200, y 1044. Two lines:
   Line 1: "The advanced settings of a camera, open. Picture size, quality and frames per second, each with its own "Change"."
   Line 2: ""Change" opens a list of values for that setting (not drawn). "Reset to defaults" puts the three values back. "Hide" closes the card (L9)."

CHECK
- 1440 × 900 at x 3200, y 120. L9 is unchanged.
- "Card · Advanced" has five children, is 180 high and the link in its header reads "Hide".
- The three value rows show the texts and a "Change" link. No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps". The lowest y in the frame.
```

## B4 · L9e save a view

```
Goal: one page screen "L9e · Camera, save a view" in slot 4. The user pressed "Save current view". A new row with a name field opens at the top of the saved views.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L9 · Camera, opened from a room" (1752:33497) into the Section at x 4760, y 120. Name the clone "L9e · Camera, save a view". Keep 1440 × 900. Do not change L9.
Everything below happens inside this clone.

STEP 2 · New row
In "Main column" > "Card · Saved views":
1. Clone "Row · Bed". Put the clone after "Saved views header", before "Row · Bed". Name "Row · New view". Width fill. It is 48 high.
2. Create an instance of the component 920:27191 (page "Selector / MultiSelector", "Size=Medium, State=Rest, Display=Placeholder, Status=None"). Set "Display" to "Labels". Set the layer "Label + Description" (first child) to hidden. Set the nested instance "chevron" to hidden (it is a text field). Set the text of the layer "labels" to "Monitor close-up". Name it "Input · View name". Width fixed 360 (resize), height 32.
3. In "Row · New view": delete the text "Bed". Put "Input · View name" in the row as the first child.
4. Create a frame "Row actions": auto-layout horizontal, gap 16, width hug, height hug, no fill, no stroke. Put it in the row as the last child.
5. Move the text "Go to" of the row into "Row actions". Characters "Save". Name "Link · Save". Clone it. Characters "Cancel". Name "Link · Cancel". Put it after "Link · Save".
6. The row stays "space between", centred. The card is now 246 high (198 + 48).
7. The header text "Save current view" stays.

STEP 3 · Label and caption
1. Label "Label · L9e" at x 4760, y 76: "L9e · Camera, save a view".
2. Caption "Caption · L9e" at x 4760, y 1044. Two lines:
   Line 1: "After "Save current view". The view is named in a new first row of the list. The name is a text field."
   Line 2: ""Save" adds the view to the list with the camera position as it is now. "Cancel" removes the row (L9)."

CHECK
- 1440 × 900 at x 4760, y 120. L9 is unchanged.
- "Card · Saved views" has five children: the header, "Row · New view", "Row · Bed", "Row · Door", "Row · Wide". The new row shows the field with "Monitor close-up" and the links "Save" and "Cancel". The field has no chevron.
- The lowest element of "Main column" ends above y 876. No text is clipped. Take one screenshot.

REPORT
- The id of the frame. Whether "Label + Description" and "chevron" could be hidden. "Component gaps".
```

## B5 · L10c assign to a room

```
Goal: one page screen "L10c · Simulators & Equipment, assign to a room" in slot 5. The user pressed "Assign" on the 360 camera. A list of rooms opens.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L10 · Simulators & Equipment" (1752:34999) into the Section at x 6320, y 120. Name the clone "L10c · Simulators & Equipment, assign to a room". Keep 1440 × 900. Do not change L10.
Everything below happens inside this clone.

STEP 2 · Menu
1. Anchor: the text "Assign" in "Row · 360 camera" > "Cell · Room" (1752:36634 in the source). Read its bounds in the frame (expected x 833, y 622, 43 × 20; bottom y 642).
2. Build the menu with "POPOVER MENU" in the DV rules for Run B. Name "Popover · L10c". Width 228. Its left edge is the left edge of "Assign" (expected x 833) and it sits 4 px under it (expected y 646).
3. Rows, in this order: "Sim Room 1", "Sim Room 2", "Skills Lab 1", "Debrief Room 1".
4. The menu is 152 high and ends at y 798 (expected). It covers the row "Spare microphone" partly. That is fine.

STEP 3 · Label and caption
1. Label "Label · L10c" at x 6320, y 76: "L10c · Simulators & Equipment, assign to a room".
2. Caption "Caption · L10c" at x 6320, y 1044. Two lines:
   Line 1: "A device with no room has "Assign" next to "No room". It opens the list of rooms."
   Line 2: "A room puts the device in that room and the row shows the room name. The device page (L9) then shows the same room."

CHECK
- 1440 × 900 at x 6320, y 120. L10 is unchanged.
- "Popover · L10c" is absolute, 228 × 152, four rows, no wrapped label, directly under "Assign", last child.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. The real position of "Assign". "Component gaps".
```

## B6 · L10d Cameras tab

```
Goal: one page screen "L10d · Simulators & Equipment, Cameras" in slot 6. The tab "Cameras" is active, only cameras are listed, and the filter bar looks like filters.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L10 · Simulators & Equipment" (1752:34999) into the Section at x 7880, y 120. Name the clone "L10d · Simulators & Equipment, Cameras". Keep 1440 × 900. Do not change L10.
Everything below happens inside this clone.

STEP 2 · Tabs
1. In "Tabs", read these first: the strokes, the stroke weights and the stroke align of "Tab · All"; the fills of its text "All"; the fills of the text "Cameras" in "Tab · Cameras".
2. "Tab · Cameras": set strokes to the strokes you read from "Tab · All". Set stroke weights: top 0, right 0, left 0, bottom 2. Stroke align inside. Set the fills of its text "Cameras" to the fills you read from "All".
3. "Tab · All": remove its strokes (strokes = empty). Set the fills of its text "All" to the fills you read from "Cameras" before step 2.
4. Do not rename the tabs. Positions and heights stay.

STEP 3 · Rows
1. In "Card · Equipment" delete these rows: "Row · SimMan 3G", "Row · Patient monitor capture", "Row · Audio kit", "Row · Ceiling microphone", "Row · Spare microphone".
2. Three rows stay, in this order: "Row · Overhead camera", "Row · Foot camera", "Row · 360 camera".
3. The text "Hint" (outside the card): "Cameras only. Open one to see its picture and settings."

STEP 4 · Filter bar
1. In "Filter bar": the text "Search" in "Filter · Search" becomes "Search equipment". The text "Room" in "Filter · Room" becomes "Room: All". The text "Status" in "Filter · Status" becomes "Status: All".
2. Clone the text "Caret" ("▾") from "Select · Role" (1752:39717 in "I2 · Import, Map"). Put one clone as the last child of "Filter · Room" and one as the last child of "Filter · Status". Name them "Caret".
3. In "Filter · Room" and "Filter · Status": primary axis alignment "space between", counter axis alignment centre, gap 8. Width stays 170. The caret sits at the right edge, like a select.
4. "Filter · Search" does not get a caret.

STEP 5 · Label and caption
1. Label "Label · L10d" at x 7880, y 76: "L10d · Simulators & Equipment, Cameras".
2. Caption "Caption · L10d" at x 7880, y 1044. Two lines:
   Line 1: "The "Cameras" tab: only cameras are listed. The filter bar now looks like filters: a search, and two lists with a caret."
   Line 2: "A row opens the camera page (L9). "Room" and "Status" open a list of values (not drawn). The other tabs work the same way."

CHECK
- 1440 × 900 at x 7880, y 120. L10 is unchanged.
- "Tab · Cameras" has a bottom stroke of 2 and primary text. "Tab · All" has no stroke and secondary text.
- "Card · Equipment" has "Columns header" and three camera rows. "Filter bar" shows "Search equipment", "Room: All ▾", "Status: All ▾".
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## B7 · L11b test sound

```
Goal: one page screen "L11b · Microphone, test sound" in slot 7. The test sound plays and the microphone is muted.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L11 · Microphone" (1752:39371) into the Section at x 9440, y 120. Name the clone "L11b · Microphone, test sound". Keep 1440 × 900. Do not change L11.
Everything below happens inside this clone.

STEP 2 · Test sound
In "Card · Sound level":
1. "Button · Play test sound": set the text property "Label#3:97" to "Stop test sound". Set "State" to "Pressed" (if "Pressed" is not an option, leave it and report). Name "Button · Stop test sound".
2. Clone the muted text "3 cameras · 1 not found" (1752:19781). Characters "Playing a test sound in Sim Room 2…". Name "Note · Test sound". Put it in "Card · Sound level" after the button. Width fill.
3. The card is now 194 high (162 + 12 + 20).

STEP 3 · Mute
In "Card · Sensitivity":
1. "Button · Mute this microphone": set "Label#3:97" to "Unmute this microphone". Set "State" to "Pressed" (if not an option, leave it and report). Name "Button · Unmute this microphone".
2. The text "Current: 70%" becomes "Current: 70% · muted".
3. "Main column" now ends at y 552 of "Content" (144 + 194 + 24 + 190). Report any overflow below y 876.

STEP 4 · Label and caption
1. Label "Label · L11b" at x 9440, y 76: "L11b · Microphone, test sound".
2. Caption "Caption · L11b" at x 9440, y 1044. Two lines:
   Line 1: "The test sound plays in the room, and the microphone is muted. The button says what it will do next."
   Line 2: ""Stop test sound" ends the sound. "Unmute this microphone" goes back to L11. The level meter is a placeholder."

CHECK
- 1440 × 900 at x 9440, y 120. L11 is unchanged.
- "Card · Sound level" shows the button "Stop test sound" and the line "Playing a test sound in Sim Room 2…". "Card · Sensitivity" shows "Unmute this microphone" and "Current: 70% · muted".
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. The options of "State" you found. "Component gaps".
```

## B8 · L10e nothing found

```
Goal: one page screen "L10e · Simulators & Equipment, nothing found" in slot 8. The search "defib" finds nothing.
If the Section "13 · Devices, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L10 · Simulators & Equipment" (1752:34999) into the Section at x 11000, y 120. Name the clone "L10e · Simulators & Equipment, nothing found". Keep 1440 × 900. Do not change L10.
Everything below happens inside this clone.

STEP 2 · Search text
1. In "Filter bar" > "Filter · Search": the text "Search" becomes "defib". Copy the fills of the body text "PTZ camera" (1752:19797) to it, so it reads as typed text (text/primary).

STEP 3 · Empty list
1. In "Card · Equipment" delete all eight rows (names start with "Row ·"). Keep "Columns header".
2. Add a frame "Empty state" as the last child of "Card · Equipment". Auto-layout vertical, width fill, height hug, padding top and bottom 48, padding left and right 24, gap 12, items centred on both axes, no fill, no stroke.
3. First child: a clone of the body text "PTZ camera" (1752:19797). Characters "No equipment matches your search." Name "Empty text". Text align centre.
4. Second child: a clone of the link text "Overhead camera" (1752:19794). Characters "Clear search". Name "Link · Clear search".
5. "Card · Equipment" must hug its height: 40 + 48 + 20 + 12 + 20 + 48 = 188.
6. Set the text "Hint" (outside the card) to visible = false.

STEP 4 · Label and caption
1. Label "Label · L10e" at x 11000, y 76: "L10e · Simulators & Equipment, nothing found".
2. Caption "Caption · L10e" at x 11000, y 1044. Two lines:
   Line 1: "A search that finds no equipment. The list says so in plain words and offers one way out."
   Line 2: ""Clear search" returns to the full list (L10). The tabs and the other filters stay as they are."

CHECK
- 1440 × 900 at x 11000, y 120. L10 is unchanged.
- The search box reads "defib" in the primary text colour. "Card · Equipment" has "Columns header" and "Empty state" only and is about 188 high.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## After these run

- Claude reviews every frame in the file and adds the frames to "Screen list" in `11-16-merge-00-shared.md`.
