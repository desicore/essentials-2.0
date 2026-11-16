# 11-17 · Final round: Rooms, Details tab and room management

Topics T04 and T05. The room page (L8) has a "Details" tab that is not drawn, the rooms list (L7) has an "Add room" button with no result, and the list and the AV tab have no empty state. This file adds six frames in a new Section. It does not change any existing frame.

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. The concept and requirement lines are in the vault pages `wiki/work/essentials-2.0-concept-room-readiness.md` (RD-8) and `wiki/work/essentials-2.0-av-device-management.md` (AV-1, AV-6).

## Context

- This file is for AFTER the workshop of 11-17, unless the product manager asks for the Details tab. If she asks, run only "A1" (the Details tab with the two kinds of status). Then "A2".
- RD-8: live device health and planned maintenance are two different things with two different labels. The user sees both on the room. L8b shows both: the readiness card says "Live: ..." and the other card is titled "Planned maintenance".
- AV-1 says rooms come from one room list and the older S3 design left "Add room" out on purpose. The one-app list L7 already has "Button · Add room", so L7b draws what that button does. If rooms really come from another system only, L7b and L7c are the wrong picture (see the open questions).
- The audit of L7 and L8 (`audit-B-recordings-rooms-import.md`) lists these gaps: Add room, Details tab, empty room, empty list, room preselected in the Start recording sheet. This file closes them. "Edit room" is the edit state L8c. "Delete room" is not drawn (see open questions).
- Run A and Run B write different frames. They can run at the same time after A1 has created the Section.

## What I found in the file (11-16 night, read-only)

- Page "🧭 One app · merge [D]" `1749:8314`. The lowest Section is "7 · Search (later, not MVP)" `1776:16712` at y 10400. Nothing sits at y 17800 to 19200 (only loose nodes at negative x). Section "5 · Import" `1749:8320` has one fill: solid white, opacity 0.4.
- "Label · AV0" `1603:10620` (text, Medium 14) and "Caption · AV0" `1603:10621` (text, Regular 14, 1440 wide, height auto) are on the page "👤 SRV flow [D]" `960:51213`.
- "L8 · Room, AV tab" `1752:19374` (1440 × 900). "Body" > "SideNav" + "Content" `1752:19378` (vertical, padding 24, gap 24, 1180 × 900). "Content" holds: "Breadcrumb" (texts "Rooms", "/", "Sim Room 2"), "Page header" `1752:19383` (text "Greeting", instance "Text · Tuesday, January 19" with text property "Content#43:710" = "Simulation room · Riverbend College of Nursing", absolute "Button · Check this room" `1752:19386` Secondary SM, absolute "Button · Start recording" `1752:19609` Primary SM), "Tabs" `1752:19584`, "Card · Cameras" `1752:19778`, "Card · Audio" `1752:19843`, "Button · Add device" `1752:19906` (a normal child, not absolute).
- The tabs in L8 are plain frames. Active tab "Tab · AV" `1752:19599`: only a bottom stroke, weight 2 (top, left, right 0), and its text "AV" `1752:19600` uses the colour variable text/primary. Inactive tab "Tab · Details" `1752:19597`: no stroke, its text "Details" `1752:19598` uses text/secondary. Both tabs sit at y −1, 40 high.
- "L9 · Camera, opened from a room" `1752:33497`. "Columns" `1752:33717` (horizontal, gap 24, width fill) holds "Main column" `1752:33718` (720 wide, vertical, gap 24) and "Side column" `1752:33737` (388 wide, vertical, gap 24). Cards in the columns are width fill.
  - "Card · Details" `1752:33738`: vertical, padding 24, gap 16, fill surface/card. Children: text "Details" (Bold 14), "Row · Kind" `1752:33743` (horizontal, width fill, 20 high, SPACE_BETWEEN, centred; texts "Kind" Regular 12 muted and "PTZ camera" Regular 14), "Row · Room", "Row · Role", "Row · Audio from", and a serial note (Regular 12).
  - "Card · Advanced" `1752:33760`: vertical, padding 24, gap 8. Children: "Advanced header" `1752:33761` (horizontal, width fill, SPACE_BETWEEN, centred; text "Advanced settings" Bold 14 and text "Show" Medium 14 = link) and a muted text (Regular 12, width fill).
- "Card · Readiness" `1560:7914` on page "👤 SRV flow [D]": 1132 × 54, horizontal, padding 16, gap 12, width fill, height hug. Children: instance "Badge · Needs attention" (Variant Warning, "Label" = "Needs attention") and text "Readiness text" (Regular 14, width fill).
- "L3 · Start recording" `1752:18339`. Its top-level children after "Body": "Dim" `1752:18430` (rectangle, absolute, 0, 0, 1440 × 900, black, opacity about 0.5) and "Sheet · Start recording" `1752:18431` (instance of "Dialog", Variant "Fullscreen", absolute, x 960, y 0, 480 × 900).
  - Dialog properties: "Title#2266:0", "Subtitle Text#2266:6", "Has Subtitle#2266:3", "Has Close Button#2266:9", "Has Footer#2266:15".
  - Inside: "Header", "Header Divider", slot "Body" (padding 16) with one frame "Start form" (vertical, gap 24, width fill), "Footer Divider", slot "Footer Actions" with two button instances: "Cancel" (Ghost, LG) and "Start recording" (Primary, LG, text property "Label#3:97").
  - "Start form" holds "Room options" (header "Room", then "Option · Sim Room 1", "Option · Sim Room 2", "Option · Skills Lab 1" and a "Hint"), then "Block · Event", "Block · Learners", "Block · Scenario". A block is vertical, gap 8, 89 high: "Room header" (text "Room name" = the label, SemiBold 14, and text "Cameras" = the word "optional", Regular 12), an instance "Select · Event" (32 high) and a text "Hint" (Regular 12).
  - The selected room option has a 2 px stroke in text/primary (now "Option · Sim Room 1"). Other options have a 1 px stroke in border/default. The look was checked with a screenshot.
  - "Select · Event" is an instance of "Selector / MultiSelector" (properties "Size", "State", "Display", "Status"). Inside: "input-status-wrapper" > "trigger" > "Content" > text "placeholder" (Regular 14, text/secondary), and an instance "chevron" next to "Content".
- The main component of that selector is `920:27191` ("Size=Medium, State=Rest, Display=Placeholder, Status=None") on the page "Selector / MultiSelector" `920:27126`. Its Display options: Placeholder, Count, Labels, Badges. Variant "Display=Labels" `920:27199` shows a text "labels" (Medium 14, text/primary). Both variants have a first child "Label + Description" (a field label and a description) above "input-status-wrapper".
- There is no plain text input component on the file. The selector is the only field-shaped component. Text fields are drawn with the selector with its chevron hidden.
- "L7 · Rooms" `1752:9953`. "Content" `1752:9957` holds "Page header" `1752:9962` (text "Greeting" = "Rooms", instance "Text · Tuesday, January 19" with "Riverbend College of Nursing", absolute "Button · Add room" `1752:9965`, Secondary SM, x 1045) and "Card · Rooms" `1752:17977` (header, column header, four rows, "Hint row").
- Component properties: Badge "Variant" (Neutral, Info, Success, Warning, Error), text property "Label". Button: "Variant" (Primary, Secondary, Ghost, Destructive), "State" (Rest, Hover, Pressed, Disabled, Focused, Loading), text property "Label#3:97".
- Text sources, all verified in L8: card title Bold 14 "Cameras" `1752:19780`; body Regular 14 "PTZ camera" `1752:19797`; muted Regular 12 "3 cameras · 1 not found" `1752:19781`; link Medium 14 "Overhead camera" `1752:19794`.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "12 · Rooms, more states" at x 0, y 17900, 12640 × 1240. The Section number is just a name. Nothing else is at this y |
| Details tab (L8b) | A readiness card full width on top, then two columns like L9. Left: "Card · Room details" (with "Edit") and "Card · Events today". Right: "Card · Maintenance" |
| Health versus maintenance | Readiness card text starts with "Live:". The maintenance card is titled "Planned maintenance" and has its own muted line that says it is not the live health (RD-8) |
| Edit (L8c) | Same page. The values in "Card · Room details" become fields. The "Edit" link becomes "Cancel" and "Save". Type is a select, the other four are text fields |
| Fields | The selector component with Display "Labels" (filled value). Chevron hidden for text fields, visible for Type. The field label stays the row label |
| Add a room (L7b) | A right-hand sheet, the same Dialog as "Start recording". Four fields, one note, "Cancel" and "Add room" |
| Empty room (L8d) | One card with a title, a muted line and "Add device". "Check this room" is disabled because there is nothing to check |
| Empty list (L7c) | One card with a title, a muted line and a Primary "Add room". The header button stays |
| Start from the room page (L8e) | Only the selected option changes: "Sim Room 2" gets the 2 px stroke, "Sim Room 1" loses it |
| Sample values | Location "Building B, 2nd floor", capacity "8 people", notes "Adult bed, wall monitor", maintenance "22 Jan, 08:00 to 12:00 · Ceiling lamp replacement" are made up |
| Not drawn | Delete room, add-device flow, a maintenance form |

## Open questions for the workshop

- Can a customer add a room in the app, or do rooms come from another system only (AV-1)? If rooms come from elsewhere, "Add room" and the edit state go away and the Details tab is read only.
- Who sets planned maintenance: staff in the app, or does it come from a calendar? Does a room with maintenance planned still show "Ready"?
- What happens to the recordings of a deleted room? Delete room is not drawn until this is answered.
- Does "Capacity" mean people in the room or people the cameras can see?

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line. Only one chat writes in the Section "12 · Rooms, more states" while A1 runs. After A1 has reported the Section, Run A (A2) and Run B can run in two chats at the same time, because they build different frames. Other final-round files that write in other Sections may run in parallel at any time.

Run A (the Details tab and the edit state):

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-rooms.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RM rules" from the second file. Then run these sections of the second file, in this order: "A1 · Section and L8b", "A2 · L8c edit details". After each section, run its check list and take a screenshot before you start the next section.`

Run B (add, empty states, start recording). Start it after Run A has created the Section:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-rooms.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RM rules" from the second file. Then run these sections of the second file, in this order: "B1 · L7b Add room", "B2 · L8d no devices", "B3 · L7c none yet", "B4 · L8e Start recording". After each section, run its check list and take a screenshot before you start the next section.`

## RM rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Write only inside the Section "12 · Rooms, more states". Section A1 creates it. Sections B1 to B4 and A2 must find it and stop if it does not exist. Never change any other Section or any frame in it. You may clone from them.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar.
- Never edit, rename or move anything on "⚙️ Components (D)" (675:31351), "👤 SRV flow [D]" (960:51213) or the page "Selector / MultiSelector" (920:27126). You may create instances of their components and clone placed nodes.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility. Frames inside a slot (the "Body" and "Footer Actions" slots of the Dialog) may be edited like normal frames.
- Never draw a badge or a button. Clone an existing one. To change a button, set the properties "Variant", "State" and the text property "Label#3:97". To change a badge, set "Variant" and "Label#8:11".
- IDs refer to source nodes. Inside a clone, find layers by their exact name. Cloning a node and moving the clone into another frame is allowed, also from another page.
- Fonts: load the font of every text before you change it (read it from the text itself).
- Every layer you set to width "fill" or height "hug": append it to its auto-layout parent first, then set the sizing.
- Forbidden words on every frame: "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard".
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.

SLOTS in Section "12 · Rooms, more states" (frames at y 120, labels at y 76, captions at y 1044). x = 80 + (n − 1) × 1560.
- Slot 1, x 80: "L8b · Room, Details tab"
- Slot 2, x 1640: "L8c · Room, edit details"
- Slot 3, x 3200: "L7b · Rooms, Add room"
- Slot 4, x 4760: "L8d · Room, no devices"
- Slot 5, x 6320: "L7c · Rooms, none yet"
- Slot 6, x 7880: "L8e · Room, Start recording"
- Slots 7 and 8 stay empty.

LABEL AND CAPTION (every frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>" (for example "Label · L8b"). Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, width 1440 (text auto resize: height). Name "Caption · <code>". Text: the two lines the section gives, with one line break between them.

TEXT SOURCES (clone, then change the characters)
- Card title, Bold 14: "Cameras" (1752:19780).
- Body, Regular 14: "PTZ camera" (1752:19797).
- Muted, Regular 12: "3 cameras · 1 not found" (1752:19781).
- Link, Medium 14: "Overhead camera" (1752:19794).
All four are in "L8 · Room, AV tab" (1752:19374).

SHARED BUILDING BLOCKS (used in several sections)
- HEADER ROW "Advanced header" (1752:33761, in "Card · Advanced" 1752:33760 of "L9 · Camera, opened from a room" 1752:33497): a horizontal row, width fill, with a Bold 14 title on the left and a Medium 14 link on the right.
- SMALL CARD "Card · Advanced" (1752:33760): vertical, padding 24, gap 8, a header row and a muted text.
- FIELD: create an instance of the component 920:27191 (Selector / MultiSelector, page 920:27126). Used only in A2.
```

## A1 · Section and L8b

```
Goal: the new Section and one page screen "L8b · Room, Details tab" in slot 1. It is "L8 · Room, AV tab" with the Details tab open.

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 17800 to y 19200 and x 0 to x 12640, stop and report.
2. If a Section named "12 · Rooms, more states" already exists, do not create a second one. Use it and report that it existed.
3. Create a Section. Name "12 · Rooms, more states". x 0, y 17900, size 12640 × 1240. Copy the fills of Section "5 · Import" (1749:8320): one solid white fill, opacity 0.4.

STEP 2 · Clone
1. Clone "L8 · Room, AV tab" (1752:19374) into the new Section at x 80, y 120. Name the clone "L8b · Room, Details tab". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L8.

STEP 3 · Tabs (Details becomes the active tab)
1. In "Tabs", read these first: the strokes of "Tab · AV" and the fills of its text "AV"; the fills of the text "Details" in "Tab · Details".
2. "Tab · Details": set strokes to the strokes you read from "Tab · AV". Set stroke weights: top 0, right 0, left 0, bottom 2. Stroke align inside. Set the fills of its text "Details" to the fills you read from "AV" (text/primary).
3. "Tab · AV": remove its strokes (strokes = empty). Set the fills of its text "AV" to the fills you read from "Details" (text/secondary).
4. Both tabs keep y −1 and height 40. Do not rename them.

STEP 4 · Remove the AV content
1. In "Content", delete "Card · Cameras", "Card · Audio" and "Button · Add device".
2. "Breadcrumb", "Page header" and both header buttons stay as they are.

STEP 5 · Readiness card (live status)
1. Clone "Card · Readiness" (1560:7914) from the page "👤 SRV flow [D]" into "Content" as the fourth child: after "Tabs". Width fill. Keep its name.
2. The badge "Badge · Needs attention" stays (Variant Warning, label "Needs attention").
3. Text "Readiness text": "Live: 1 device not found. Patient monitor capture, last seen 10 Nov, 14:32."
4. Clone the link text "Overhead camera" (1752:19794). Characters "Open the AV tab". Name "Link · Open the AV tab". Put it in "Card · Readiness" as the last child. Height hug, width hug.

STEP 6 · Two columns
1. Clone "Columns" (1752:33717) from "L9 · Camera, opened from a room" (1752:33497) into "Content" as the fifth and last child. Width fill. Keep its name.
2. In the clone, "Main column": delete "Card · Live picture" and "Card · Saved views".
3. In the clone, "Side column": clone "Card · Details" and put the clone in "Main column" as its first child. Rename it "Card · Room details". Then clone "Card · Advanced" and put the clone in "Main column" as its last child. Rename it "Card · Events today". Width fill for both.
4. In "Side column": delete "Card · Move camera" and "Card · Details". Rename "Card · Advanced" to "Card · Maintenance".
5. "Main column" now holds, in this order: "Card · Room details", "Card · Events today". "Side column" holds "Card · Maintenance".

STEP 7 · Card "Room details"
1. Delete the text "Details" (the card title) and the last text (the serial note).
2. Clone "Advanced header" from "Card · Maintenance". Insert the clone as the first child of "Card · Room details". Width fill. Name "Room details header". Texts: "Advanced settings" becomes "Room details". "Show" becomes "Edit".
3. Delete "Row · Room", "Row · Role" and "Row · Audio from".
4. "Row · Kind": rename "Row · Name". Texts: "Kind" becomes "Name". "PTZ camera" becomes "Sim Room 2".
5. Clone "Row · Name" four times. Put the clones after it in this order and set the two texts (left, right):
   - "Row · Type": "Type", "Simulation room"
   - "Row · Location": "Location", "Building B, 2nd floor"
   - "Row · Capacity": "Capacity", "8 people"
   - "Row · Notes": "Notes", "Adult bed, wall monitor"
6. Order in the card: "Room details header", "Row · Name", "Row · Type", "Row · Location", "Row · Capacity", "Row · Notes". Height of the card: 48 + 20 + 5 × 20 + 5 × 16 = 248.

STEP 8 · Card "Planned maintenance"
1. In "Card · Maintenance", in its "Advanced header": text "Advanced settings" becomes "Planned maintenance". Delete the text "Show".
2. Clone the body text "PTZ camera" (1752:19797). Characters "22 Jan, 08:00 to 12:00 · Ceiling lamp replacement". Width fill. Insert it as the second child (after the header).
3. The muted text of the card (last child): "Planned maintenance is set by staff. It is not the live device health."

STEP 9 · Card "Events today"
1. In "Card · Events today", in its "Advanced header": text "Advanced settings" becomes "Today in this room". Delete the text "Show".
2. Clone the body text "PTZ camera" (1752:19797). Characters "10:00 to 11:30 · NURS 310 · Sepsis recognition · Group A". Width fill. Insert it as the second child.
3. Delete the muted text of the card.

STEP 10 · Label and caption
1. Label "Label · L8b" at x 80, y 76: "L8b · Room, Details tab".
2. Caption "Caption · L8b" at x 80, y 1044. Two lines:
   Line 1: "The Details tab of a room: its data, its live status and its planned maintenance. They are three separate things."
   Line 2: ""Edit" goes to L8c. "Open the AV tab" goes to L8. "Start recording" opens the sheet in L8e. The live status says "Live", the calendar item says "Planned maintenance"."

CHECK
- The Section "12 · Rooms, more states" exists at x 0, y 17900, 12640 × 1240. No other Section changed.
- "L8b · Room, Details tab" is 1440 × 900 at x 80, y 120. "L8 · Room, AV tab" is unchanged.
- "Tab · Details" has a bottom stroke of 2 and primary text. "Tab · AV" has no stroke and secondary text.
- "Content" has exactly five children: "Breadcrumb", "Page header", "Tabs", "Card · Readiness", "Columns".
- "Main column" has "Card · Room details" (header and five rows) and "Card · Events today". "Side column" has "Card · Maintenance".
- The badge in "Card · Readiness" is an instance (Warning, "Needs attention"). The two header buttons are instances and do not overlap.
- No text is clipped. The lowest element ends above y 876 of the frame (it should end near y 654). If anything goes lower, report the overflow in px and do not shrink anything.
- Take one screenshot of the frame.

REPORT
- The id of the Section and of "L8b · Room, Details tab".
- "Component gaps": every step you skipped.
```

## A2 · L8c edit details

```
Goal: one page screen "L8c · Room, edit details" in slot 2. It is L8b with the card "Room details" in edit state.
If "L8b · Room, Details tab" does not exist in Section "12 · Rooms, more states", stop and report.

STEP 1 · Clone
1. Clone "L8b · Room, Details tab" in the same Section to x 1640, y 120. Name the clone "L8c · Room, edit details". Do not change L8b.
Everything below happens inside this clone.

STEP 2 · Five fields
1. Get the main component 920:27191 ("Size=Medium, State=Rest, Display=Placeholder, Status=None", page "Selector / MultiSelector" 920:27126). Create five instances. Do not edit the component.
2. On each instance: set the variant property "Display" to "Labels". Set the layer "Label + Description" (first child) to hidden. The instance is now 32 high.
3. Set the text of the layer "labels" (Medium 14) on each instance, in this order:
   - "Input · Name": "Sim Room 2"
   - "Input · Type": "Simulation room"
   - "Input · Location": "Building B, 2nd floor"
   - "Input · Capacity": "8 people"
   - "Input · Notes": "Adult bed, wall monitor"
   Name each instance as written.
4. On "Input · Name", "Input · Location", "Input · Capacity" and "Input · Notes": set the nested instance "chevron" to hidden. These are text fields. "Input · Type" keeps its chevron. It is a select.

STEP 3 · Put the fields in the rows
1. In "Card · Room details", for each of the rows "Row · Name", "Row · Type", "Row · Location", "Row · Capacity", "Row · Notes": delete the value text (the second child). Put the matching field in the row as the second child. The label text stays the first child.
2. Each field: width fixed 360 (resize to 360 wide), height hug. The row keeps "space between" and "centre". The row height is now 32.

STEP 4 · Header buttons
1. In "Card · Room details" > "Room details header": delete the text "Edit".
2. Create a frame "Header actions": auto-layout horizontal, gap 8, width hug, height hug, no fill. Put it in the header as the last child.
3. Clone "Button · Start recording" from this frame's "Page header". Set layout positioning to auto. Set the label to "Save" (Variant stays Primary). Name "Button · Save". Put it in "Header actions".
4. Clone "Button · Check this room" from this frame's "Page header". Set layout positioning to auto. Set the label to "Cancel" and the Variant to Ghost. Name "Button · Cancel". Put it in "Header actions" as the first child, so the order is "Button · Cancel", "Button · Save".
5. The header row stays "space between" and "centre". Its height is now 28.

STEP 5 · Label and caption
1. Label "Label · L8c" at x 1640, y 76: "L8c · Room, edit details".
2. Caption "Caption · L8c" at x 1640, y 1044. Two lines:
   Line 1: "The room details in edit mode. Every value is a field. The type is a select, the other four are text fields."
   Line 2: ""Save" and "Cancel" both go back to L8b. The page header and the other cards do not change."

CHECK
- "L8c · Room, edit details" is 1440 × 900 at x 1640, y 120. L8b is unchanged.
- "Card · Room details" has the header (28 high, "Room details" and two buttons) and five rows, each with a field. Card height 48 + 28 + 5 × 32 + 5 × 16 = 316. "Main column" ends near y 722 of the frame. If anything goes lower than 876, report the overflow.
- The five fields are instances and read "Sim Room 2", "Simulation room", "Building B, 2nd floor", "8 people", "Adult bed, wall monitor". Only "Input · Type" shows a chevron.
- The two buttons are instances, next to each other, inside the card header.
- No text is clipped. Take one screenshot of the frame.

REPORT
- The id of the frame.
- Whether the layer "Label + Description" could be hidden, and whether the chevron could be hidden.
- "Component gaps": every step you skipped.
```

## B1 · L7b Add room

```
Goal: one page screen "L7b · Rooms, Add room" in slot 3. It is the rooms list with a right-hand sheet "Add a room".
If the Section "12 · Rooms, more states" does not exist, stop and report.

STEP 1 · Clone the page
1. Clone "L7 · Rooms" (1752:9953) into the Section at x 3200, y 120. Name the clone "L7b · Rooms, Add room". Keep 1440 × 900. Do not change L7.
Everything below happens inside this clone.

STEP 2 · Dim and sheet
1. Clone "Dim" (1752:18430) from "L3 · Start recording" (1752:18339). Put it in the clone as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900. Keep the name "Dim".
2. Clone "Sheet · Start recording" (1752:18431, an instance of "Dialog") from L3. Put it in the clone after "Dim" (on top). Layout positioning absolute. x 960, y 0. Size stays 480 × 900. Name it "Sheet · Add a room".
3. Set these properties on the sheet instance: "Title#2266:0" = "Add a room". "Subtitle Text#2266:6" = "Name the room and say what kind of room it is.".

STEP 3 · The form
Everything below is inside the sheet, in its slot "Body" > frame "Start form".
1. Delete the frame "Room options".
2. Clone "Block · Scenario" once. Put the clone after "Block · Scenario". You now have four blocks. Rename the blocks, in order: "Block · Name" (was "Block · Event"), "Block · Type" (was "Block · Learners"), "Block · Location" (was "Block · Scenario"), "Block · Capacity" (the clone).
3. In each block set these texts. "Label" is the text "Room name" in "Room header". "Tag" is the text "Cameras" in "Room header". "Placeholder" is the text "placeholder" inside the instance "Select · Event". "Hint" is the text "Hint".

| Block | Label | Tag | Placeholder | Hint |
|---|---|---|---|---|
| Block · Name | Name | required | For example Sim Room 3 | This is the name people see on Live and in the rooms list. |
| Block · Type | Type | required | Select a type | Simulation room, Skills lab or Debrief room. |
| Block · Location | Location | optional | Building and floor | For example Building B, 2nd floor. |
| Block · Capacity | Capacity | optional | Number of people | How many people fit in the room. |

4. Rename the four instances "Select · Event": "Input · Name", "Input · Type", "Input · Location", "Input · Capacity".
5. On "Input · Name", "Input · Location" and "Input · Capacity": set the nested instance "chevron" to hidden (text fields). "Input · Type" keeps its chevron (select).
6. Clone the text "Hint" of "Block · Capacity". Put it in "Start form" as the last child. Name "Note · Add devices". Characters: "Add cameras and audio on the AV tab after you save the room." Width fill.

STEP 4 · Footer
1. In the slot "Footer Actions": the instance "Cancel" stays (Ghost). The instance "Start recording": set its text property "Label#3:97" to "Add room". Rename the layer "Button · Add room". Variant stays Primary.

STEP 5 · Label and caption
1. Label "Label · L7b" at x 3200, y 76: "L7b · Rooms, Add room".
2. Caption "Caption · L7b" at x 3200, y 1044. Two lines:
   Line 1: "The rooms list with the sheet "Add a room". Four fields. Devices are added later on the AV tab."
   Line 2: ""Add room" saves the room and opens its AV tab, which is empty (L8d). "Cancel" closes the sheet and returns to L7."

CHECK
- "L7b · Rooms, Add room" is 1440 × 900 at x 3200, y 120. L7 and L3 are unchanged.
- The sheet is 480 × 900 at x 960. "Dim" is below the sheet in the layer order and covers the page.
- The form has four blocks and the note, in this order: Name, Type, Location, Capacity, note. Height 4 × 89 + 3 × 24 + 24 + 20 = 472. It fits in the body (748 high).
- Only "Input · Type" shows a chevron. The title is "Add a room", the primary button "Add room".
- No text is clipped. No text says "Start recording", "Event", "Learners" or "Scenario". Take one screenshot of the frame.

REPORT
- The id of the frame.
- Whether the slot content could be edited and whether the chevron could be hidden.
- "Component gaps": every step you skipped.
```

## B2 · L8d no devices

```
Goal: one page screen "L8d · Room, no devices" in slot 4. It is the AV tab of the room "Debrief Room 1", which has no devices.
If the Section "12 · Rooms, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L8 · Room, AV tab" (1752:19374) into the Section at x 4760, y 120. Name the clone "L8d · Room, no devices". Keep 1440 × 900. Do not change L8.
Everything below happens inside this clone.

STEP 2 · Room name
1. "Breadcrumb": the text "Sim Room 2" becomes "Debrief Room 1".
2. "Page header": the text "Greeting" becomes "Debrief Room 1". The instance "Text · Tuesday, January 19": set its text property "Content#43:710" to "Debrief room · Riverbend College of Nursing".
3. "Button · Check this room": set the property State to "Disabled". Keep Variant Secondary and the label. Do not change "Button · Start recording".
4. "Tabs": unchanged ("Tab · AV" stays the active tab).

STEP 3 · Empty card
1. In "Content", delete "Card · Cameras" and "Card · Audio". Keep "Button · Add device" for now.
2. Clone "Card · Advanced" (1752:33760) from "L9 · Camera, opened from a room" (1752:33497) into "Content" as the fourth child: after "Tabs", before "Button · Add device". Width fill. Name "Card · No devices".
3. In its "Advanced header": the text "Advanced settings" becomes "No devices in this room yet.". Delete the text "Show".
4. The muted text of the card: "Cameras and audio devices show up here after you add them."
5. Move "Button · Add device" into "Card · No devices" as the last child. Layout positioning auto, width hug. Make sure its label reads "Add device"; if not, set the text property "Label#3:97" to "Add device".
6. "Content" now has exactly four children: "Breadcrumb", "Page header", "Tabs", "Card · No devices".

STEP 4 · Label and caption
1. Label "Label · L8d" at x 4760, y 76: "L8d · Room, no devices".
2. Caption "Caption · L8d" at x 4760, y 1044. Two lines:
   Line 1: "The AV tab of a room that has no devices yet (Debrief Room 1). One card says what to do."
   Line 2: ""Add device" starts adding a device (not drawn). "Check this room" is disabled until the room has a device. The room is listed in L7."

CHECK
- "L8d · Room, no devices" is 1440 × 900 at x 4760, y 120. L8 is unchanged.
- "Button · Check this room" shows the disabled look. "Button · Start recording" is as in L8.
- The card holds the title, the muted line and the button, in this order. The card is about 132 high.
- No text says "Sim Room 2", "Cameras" or "Audio". No text is clipped. Take one screenshot of the frame.

REPORT
- The id of the frame.
- "Component gaps": every step you skipped.
```

## B3 · L7c none yet

```
Goal: one page screen "L7c · Rooms, none yet" in slot 5. It is the rooms list before any room exists.
If the Section "12 · Rooms, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "L7 · Rooms" (1752:9953) into the Section at x 6320, y 120. Name the clone "L7c · Rooms, none yet". Keep 1440 × 900. Do not change L7.
Everything below happens inside this clone.

STEP 2 · Empty card
1. In "Content", delete "Card · Rooms".
2. Clone "Card · Advanced" (1752:33760) from "L9 · Camera, opened from a room" (1752:33497) into "Content" as the last child (after "Page header"). Width fill. Name "Card · No rooms".
3. In its "Advanced header": the text "Advanced settings" becomes "No rooms yet.". Delete the text "Show".
4. The muted text of the card: "Add your first room to start recording."
5. Clone "Button · Add room" from this frame's "Page header". Set layout positioning to auto. Set Variant to Primary. Keep the label "Add room". Put it in "Card · No rooms" as the last child.
6. "Page header" stays as in L7, with its own Secondary "Button · Add room".

STEP 3 · Label and caption
1. Label "Label · L7c" at x 6320, y 76: "L7c · Rooms, none yet".
2. Caption "Caption · L7c" at x 6320, y 1044. Two lines:
   Line 1: "The rooms list before any room exists. One card says what to do."
   Line 2: "Both "Add room" buttons open the sheet in L7b."

CHECK
- "L7c · Rooms, none yet" is 1440 × 900 at x 6320, y 120. L7 is unchanged.
- "Content" has exactly two children: "Page header" and "Card · No rooms". The card holds the title, the muted line and the Primary button, about 132 high.
- No text mentions a room name. No text is clipped. Take one screenshot of the frame.

REPORT
- The id of the frame.
- "Component gaps": every step you skipped.
```

## B4 · L8e Start recording

```
Goal: one page screen "L8e · Room, Start recording" in slot 6. The user pressed "Start recording" on the room page of Sim Room 2. The same sheet as in L3 opens, with the room already chosen.
If the Section "12 · Rooms, more states" does not exist, stop and report.

STEP 1 · Clone the page
1. Clone "L8 · Room, AV tab" (1752:19374) into the Section at x 7880, y 120. Name the clone "L8e · Room, Start recording". Keep 1440 × 900. Do not change L8.
Everything below happens inside this clone.

STEP 2 · Dim and sheet
1. Clone "Dim" (1752:18430) from "L3 · Start recording" (1752:18339). Put it in the clone as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900. Keep the name "Dim".
2. Clone "Sheet · Start recording" (1752:18431) from L3. Put it in the clone after "Dim" (on top). Layout positioning absolute. x 960, y 0. Size stays 480 × 900. Keep the name.
3. Title, subtitle, form fields and footer buttons stay as in L3.

STEP 3 · Choose the room
1. In the sheet, in the slot "Body" > "Start form" > "Room options", find "Option · Sim Room 1" and "Option · Sim Room 2".
2. Read the strokes and the stroke weight of both options. Swap them: "Option · Sim Room 2" gets the strokes and the weight (2) of "Option · Sim Room 1". "Option · Sim Room 1" gets the strokes and the weight (1) that "Option · Sim Room 2" had. "Option · Skills Lab 1" is unchanged.
3. Nothing else changes in the sheet. The page behind the sheet is L8 and stays as it is.

STEP 4 · Label and caption
1. Label "Label · L8e" at x 7880, y 76: "L8e · Room, Start recording".
2. Caption "Caption · L8e" at x 7880, y 1044. Two lines:
   Line 1: "Start recording from a room page. The sheet is the one from L3, with this room (Sim Room 2) already chosen."
   Line 2: "Event, learners and scenario stay optional, as in L3. "Start recording" opens the room view (L4). "Cancel" returns to L8."

CHECK
- "L8e · Room, Start recording" is 1440 × 900 at x 7880, y 120. L8 and L3 are unchanged.
- In the sheet only "Sim Room 2" has the thick (2 px) dark border. "Sim Room 1" has the thin border.
- "Dim" is below the sheet in the layer order. The sheet is 480 × 900 at x 960.
- No text is clipped. Take one screenshot of the frame.

REPORT
- The id of the frame.
- Whether the strokes could be changed inside the slot.
- "Component gaps": every step you skipped.
```

## After these run

- Claude reviews every frame in the file (script and screenshots) and adds the new Section and the six frames to "Screen list" in `11-16-merge-00-shared.md`.
- Not in this file, on purpose: "Delete room", the add-device flow, a form for planned maintenance, the rooms for Sim Room 1 and Skills Lab 1 (same page as L8, other data), and the count "3 rooms ready, 1 needs attention" on Live and Today (RD-7, Sessions module).
