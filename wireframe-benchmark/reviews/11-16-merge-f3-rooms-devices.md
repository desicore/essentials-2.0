# 11-16 · F3 · Rooms and devices (L7 to L11)

Six greyscale wireframes for the workshop on 11-17. They show Rooms as its own entry in the menu, the room page with an AV tab, and one device page with two entrances: from a room and from Simulators & Equipment. They are discussion wireframes, not final designs.

This file builds on `11-16-merge-00-shared.md` (concept, screen list, "Shared rules", slots, sample data). Read that file first. The older AV sketches (`11-12-av-setup-sketches.md`, `11-16-room-readiness.md`) are only a visual source now. Their menu and their breadcrumbs ("Settings / Rooms") are superseded.

## Context

- The content spec is the low-fi screens on the FigJam board "Essentials x OpSpace" (`KStutzzTvN5ENoWJPj07Zg`): L7 `8:1395`, L8 `8:1501`, L9 `8:1173`, L10 `10:1184`, L10b `11:1154`, L11 `11:1006`. Structure comes from the low-fi. Sample data comes from the contract (Riverbend rooms and devices as the AV frames show them).
- Decided behaviour:
  - Rooms is a top-level entry in the group "Resources". Breadcrumb "Rooms / Sim Room 2", never "Settings / ...".
  - The room page has tabs. The "AV" tab lists Cameras and Audio as two separate groups.
  - A device is ONE record with two entrances: the room's AV tab and Simulators & Equipment. The device page is the same page. Only the breadcrumb and the active nav item differ.
  - The room can be changed from the device page too ("Change" next to the room).
  - L9 is a PTZ camera page (move, zoom, saved views). L11 is a microphone page (live level, sensitivity).
  - Simulators & Equipment lists every simulator and device, with or without a room. Tabs separate Cameras and Audio. A device with no room can be assigned there.
- Screens in this file:

| Frame | Slot | Active nav item | Low-fi |
|---|---|---|---|
| L7 · Rooms | 1 | Rooms | `8:1395` |
| L8 · Room, AV tab | 2 | Rooms | `8:1501` |
| L9 · Camera, opened from a room | 3 | Rooms | `8:1173` |
| L10 · Simulators & Equipment | 4 | Simulators & Equipment | `10:1184` |
| L10b · Simulators & Equipment, Audio | 5 | Simulators & Equipment | `11:1154` |
| L11 · Microphone | 6 | Simulators & Equipment | `11:1006` |

## What I found in the file (11-16, read-only)

- Page "👤 SRV flow [D]" `960:51213`, Section "AV setup · Sketches" `1559:8318` (7960 × 1180) holds nine frames at y 120, all 1440 × 900, each with a label (y 76) and a caption (y 1044):
  - "AVs · Settings home" `1625:9358`, "AV0 · Rooms" `1603:10516`, "AV0b · Rooms, with settings tabs" `1624:9221`, "AV1 · Room devices" `1559:8319`, "AV2 · Device detail" `1564:8094`. (Labels and captions are separate text layers, for example "Label · AV0" `1603:10620`, "Caption · AV0" `1603:10621`.) The list above is complete.
- Layer names that matter (all verified by a read-only script):
  - "AV0 · Rooms": "Content" `1603:10520` has "Breadcrumb" `1603:10521`, "Page header" `1603:10527`, "Card · Unassigned devices" `1605:5853` (with "Button · Assign" `1605:5864`), "Card · Rooms" `1605:5790` (1132 × 378). In "Card · Rooms": "Rooms header" `1605:5791`, "Columns header" `1605:5794`, four rows "Row · Sim Room 1" `1605:5804`, "Row · Sim Room 2" `1605:5827` (72 high), "Row · Skills Lab 1" `1605:5816`, "Row · Debrief Room 1" `1605:5839`, and "Hint row" `1605:5850`. Cells in each row: "Cell · Room" (320), "Cell · Type" (200), "Cell · Cameras" (120), "Cell · Audio" (180), "Cell · Status" (220), "Cell · Open" (44, holds "›"). The Status cells hold the cloned badges "Ready", "Needs attention" and "No devices".
  - "AV1 · Room devices": "Card · Devices" `1560:7926` (1132 wide). Children: "Devices header" `1560:7927` (texts "Devices in this room" `1560:7928`, "4 devices · 1 not found" `1560:7929`), "Columns header" `1560:7930` with "Cell · Device" (420), "Cell · Kind" (220), "Cell · Status" (220), "Cell · Audio from" (180), "Cell · Actions" (44); rows "Row · Overhead camera" `1560:7940` (56 high, with "Badge · Primary" `1560:7943` and "Badge · Working" `1560:7949`), "Row · Foot camera" `1560:7956` (56), "Row · Patient monitor capture" `1560:7969` (72; its Status cell is vertical: "Badge · Not found" `1560:7975` plus the muted text "Last seen 10 Nov, 14:32" `1560:7978`), "Row · Audio kit" `1560:7983`, "Assign row" `1560:7996`. "Cell · Actions" holds a text "More" ("⋯"). The device name is Medium weight.
  - "AV2 · Device detail": "Content" `1564:8098` has "Breadcrumb" `1582:8089` (texts "Settings", "Rooms", "Sim Room 2", "Overhead camera", with a "Separator" between each), "Page header" `1564:8099` (text "Greeting" `1564:8100`, instance "Text · Tuesday, January 19" `1564:8101` whose property "Content#43:710" holds the subtitle, instance "Button · Customize" `1564:8102`, Variant=Secondary, Size=SM) and "Columns" `1564:8336` (1132 × 675, horizontal, gap 24).
    - "Main column" `1564:8337` (720, vertical, gap 24): "Card · Live picture" `1564:8364` (header row `1564:8338` with text "Live picture" `1564:8369` and "Badge · Working" `1564:8370`; instance "Camera tile" `1564:8339`), "Card · Saved views" `1564:8378` (header `1564:8441`; rows "Row · Far view" `1564:8445`, "Row · Patient monitor" `1564:8450`, "Row · Bedside" `1564:8455`; each row has a left text and a right text "Go to").
    - "Side column" `1564:8351` (388, vertical, gap 24): "Card · Details" `1564:8460` (title text "Details" `1564:8465` Bold; rows "Row · Name" `1564:8344`, "Row · Kind" `1564:8345`, "Row · Room" `1564:8346` with group "Room value" `1564:8349` holding body text and a Medium text "Change" `1564:8471`, "Row · Role" `1564:8347` with "Badge · Primary" `1564:8473`, "Row · Audio from" `1564:8348` with group "Audio value" `1564:8350`; last text "Serial ACCC8E12F4A7. A device belongs to one room." `1564:8485`), "Card · Advanced" `1564:8486` (header `1564:8343` with "Advanced settings" and "Show"; muted text `1564:8493`).
- Button instances: the label property is "Label#3:97", the icon switch "Icon#3:0" (false). Badge instances: label "Label#8:11", "Variant" (Neutral, Info, Success, Warning, Error), "Shape" (Pill). The sources named in "Shared rules" exist: "Button · Start recording" `1694:9947` (Primary, SM), "Button · Room devices" `1694:9998` (Secondary, SM), "Badge · Ready" `1605:5894`, "Badge · Needs attention" `1605:5899`, "Badge · No devices" `1605:5909`, "Badge · Not found" `1560:7975`. Label "Label · AV0" `1603:10620` and caption "Caption · AV0" `1603:10621` exist.
- Tabs: no generic tabs component exists in "⚙️ Components (D)". The only tab components are SRV-only with fixed labels ("SRV / Side panel tabs" `565:28541`, "SRV / Debrief tabs" `1097:5900`). Do not use them. The one existing tab row is plain frames: "Settings tabs" `1624:9476` in "AV0b · Rooms, with settings tabs" (1132 × 40, auto-layout horizontal, gap 24, six frames "Tab · <label>", each with one Medium 14 text). "Tab · Rooms & devices" `1624:9478` is the active tab style (2 px bottom stroke text/primary, text text/primary). "Tab · Organization" `1624:9477` is the inactive style (no stroke, text text/secondary).
- No search box, select, slider or level meter component exists. They are built as plain auto-layout frames (see "Flow rules").
- "Shell facts" in the shared file says "not yet" today. The ids of "Shell · Page", the target page and Section "3 · Rooms and devices" come from there. The layer names inside "Shell · Page" are therefore not verified. The steps below read them first and have a fallback.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Open question: capture unit | The capture unit "Patient monitor capture" sits in the Cameras group on L8 and L10 because it delivers a picture. This is not decided: it could be its own group. L10 has no "Capture units" tab for the same reason |
| Open question: maintenance | Maintenance is linked to a device today. The device pages show no maintenance block. Not decided where it lives |
| Open question: side panels vs full pages | L9 and L11 are full pages, as in the low-fi. A side panel from the list is possible. Not decided |
| Open question: mic to camera pairing | L11 shows a read-only row "Used by: Overhead camera, Foot camera". The camera page shows "Audio from: Audio kit" with "Change". Not decided which side owns the link |
| Open question: portable cameras with no room | L10 shows "360 camera" (Portable camera) with "No room" and a link "Assign". How a portable camera is booked into a session is not decided |
| Where the tab bar sits | On the room page (L8) the tabs sit under the breadcrumb, above the title (like the room is the page). On the list (L10, L10b) the tabs sit under the page header (they filter the list) |
| Tab labels in L10 | All, Simulators, Cameras, Audio, Other (from the low-fi). L10 shows "All". L10b shows "Audio". The Cameras tab has no frame |
| Microphone sample | L11 is the "Audio kit" of Sim Room 2 (Microphone and speaker). It fits the AV frames ("Audio from: Audio kit") and the "Play test sound" button. The low-fi used "Ceiling microphone" |
| Camera name | L9 uses "Overhead camera" (contract) instead of the low-fi's "Ceiling camera" |
| Room columns | L7 uses the low-fi columns: Name, Type, Capacity, Equipment, Status. The AV0 columns "Cameras" and "Audio" become "Capacity" and "Equipment" |
| Invented sample values | Capacities (12, 10, 16, 10 people), serial numbers other than ACCC8E12F4A7 and 00408C7B21D3, "SimMan 3G", "Ceiling microphone", "360 camera", "Spare microphone", "Skills Lab audio kit". They are made up for the wireframes |
| "Add room" | Kept, as in the low-fi. There is no OpSpace to send people to any more |
| "Start recording" on L8 | Kept from the low-fi as the Primary button next to "Check this room" |
| Unassigned devices card | The card from AV0 is not on L7. Unassigned devices are in L10 with the link "Assign" |

## Gaps I expect in Sonnet's report

- "Shell · Page" layer names differ from "Breadcrumb", "Page header", "Greeting" (the step then replaces the header with a clone of AV2's header and says so).
- The header buttons may be absolute-positioned, or in the auto-layout flow. The step covers both; the second button on L8 may need a manual x.
- A cloned frame cannot be moved from page "👤 SRV flow [D]" into the target page. This is the one thing I could not test read-only. The step says stop and report.
- No input, select or slider component: the filter bar, the level meter and the slider are plain frames (listed under "Component gaps" by design).
- L9 right column is tall. The content may end near the bottom edge of the 900 px frame. The check list says report the overflow, do not shrink.
- Button instances may refuse a resize. Pad buttons keep their hug width, so the D-pad will not have equal buttons.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for the whole file, or one chat per section for reruns. Start the chat **only after "Shell facts" in `11-16-merge-00-shared.md` is filled** (status not "not yet"). The sections are independent except L10b (clones L10) and L11 (clones L9), so keep the order.

All six sections, in order:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L7 · Rooms", "L8 · Room, AV tab", "L9 · Camera, opened from a room", "L10 · Simulators & Equipment", "L10b · Simulators & Equipment, Audio", "L11 · Microphone". After each section, run its check list and take a screenshot before you start the next section.`

One section only, for reruns (L10b needs L10 to exist, L11 needs L9):

- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L7 · Rooms". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L8 · Room, AV tab". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L9 · Camera, opened from a room". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L10 · Simulators & Equipment". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L10b · Simulators & Equipment, Audio". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f3-rooms-devices.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L11 · Microphone". After each section, run its check list and take a screenshot before you start the next section.`

After each run, check that the frames really exist in Figma. Cursor has once reported success without writing anything.

## Flow rules

```
FLOW: F3 · Rooms and devices
Section: "3 · Rooms and devices" (id in "Shell facts", "Section ids"). Write only inside it. Section is at x 0, y 4500, 12640 × 1240.
Slots (x inside the Section, y 120, each screen 1440 × 900, clip content on):
  L7 · Rooms x 80 · L8 · Room, AV tab x 1640 · L9 · Camera, opened from a room x 3200 ·
  L10 · Simulators & Equipment x 4760 · L10b · Simulators & Equipment, Audio x 6320 · L11 · Microphone x 7880.
If a frame with the same name already exists in the Section, stop and report. Never overwrite.

SOURCES (all on page "👤 SRV flow [D]" 960:51213, Section "AV setup · Sketches" 1559:8318, except where noted). Read-only. Clone, never move:
  AV0 · Rooms 1603:10516: Card · Rooms 1605:5790
  AV1 · Room devices 1559:8319: Card · Devices 1560:7926
  AV2 · Device detail 1564:8094: Page header 1564:8099 · Button · Customize 1564:8102 · Breadcrumb 1582:8089 · Columns 1564:8336 · Text "Change" 1564:8471
  AV0b 1624:9221: Settings tabs 1624:9476 · Tab · Rooms & devices (active style) 1624:9478 · Tab · Organization (inactive style) 1624:9477
  Muted text: "Last seen 10 Nov, 14:32" 1560:7978 · Label style text: "+ Assign a device" 1560:7997
  Buttons and badges: the sources in "Shared rules" (CO1 buttons 1694:9947 and 1694:9998; badges 1605:5894, 1605:5899, 1605:5909, 1560:7975).
  Label and caption: "Label · AV0" 1603:10620, "Caption · AV0" 1603:10621.
Look nodes up with getNodeByIdAsync. It works across pages, no page switch needed. Switch to the target page at most once per call. A clone is made, then added to its new parent with appendChild or insertChild. If a clone cannot be moved into the target frame, stop that step and report. Do not rebuild it by hand.

A · START OF A PAGE SCREEN (every screen)
 1. Clone "Shell · Page" (id in "Shell facts") into the Section. Set x and y from the slot, name it with the exact frame name. Do not touch the original.
 2. Set the active nav item with the method in "Shell facts". Do not relabel anything in "SideNav".
 3. In the clone, find "Content". List its children (name and type) and write the list in your report. Expected: "Breadcrumb", "Page header", and possibly an empty area. Delete an empty leftover child only if it has no children and no text. If something else is there, stop and report.
 4. Do the steps of the section. Keep "Content" auto-layout, its padding and its gap as the shell has them.

B · BREADCRUMB AND PAGE HEADER
 Breadcrumb: texts and "Separator" texts in a row, all Regular 12 text/secondary except the last, which is Medium 12 text/primary. Set the segments the section gives.
   - To add a segment, clone the last "Separator" and the last text, place them at the end, and set the text. To remove a segment, delete its text and the "Separator" before it. Keep the last text Medium 12 text/primary.
   - If "Breadcrumb" in the shell has no "Separator" layers, delete it and insert a clone of "Breadcrumb" 1582:8089 (from AV2) as the first child of "Content". Then edit that clone. Say so in the report.
 Page header: needs a title text, a subtitle (instance "Text · ..." with property "Content#43:710"), and the button area.
   - If "Page header" in the shell has the layers "Greeting" and an instance named "Text · ...", use them. Title: set the text "Greeting". Subtitle: set the text property of the instance. Header button: use the instance "Button · Customize" if it exists.
   - If not, delete the shell's "Page header" and insert a clone of "Page header" 1564:8099 (from AV2) after "Breadcrumb" (and after "Tabs" where a section puts tabs under the breadcrumb). Say so in the report.
   - Buttons: set the label with the text property "Label#3:97" and keep "Icon#3:0" false. The right edge of the rightmost button stays at x 1132 inside "Page header" (as in AV2, same y as "Button · Customize" 1564:8102). If a second button is needed, clone the first (or the Primary source 1694:9947), set its label, and place it 8 px to the left of the rightmost one (x = x of the right one − 8 − width of the new one), same y. If the buttons are in the auto-layout flow and cannot be placed by x, put the second one first in child order and report it.
   - If the section says to hide the button, set it to hidden.
 Name every button "Button · <label>".

C · TABS (plain frames, no tabs component exists)
 - Clone "Settings tabs" 1624:9476 into "Content" at the place the section says. Name the clone "Tabs". It is auto-layout horizontal, gap 24 (spacing/6), 1132 × 40, fill width.
 - Delete all six "Tab · ..." frames in the clone. Then add the tabs the section lists, in that order, as clones of the style sources: the active tab is a clone of "Tab · Rooms & devices" 1624:9478; every other tab is a clone of "Tab · Organization" 1624:9477. Set the one text in each clone to the label. Name each frame "Tab · <label>". Never edit a stroke or a colour: the style comes from which source you cloned.
 - To change the active tab later (L10b): replace the old active frame with a clone of 1624:9477 (same label, same index) and the new one with a clone of 1624:9478. Use insertChild at the same index, then delete the old frame.
 - Say in the report: "Tabs are plain auto-layout frames cloned from AV0b. No tabs component exists."

D · FILTER BAR (plain frames; L10 and L10b)
 - A frame "Filter bar": auto-layout horizontal, gap spacing/2 (8), width fill, height hug, no fill, no stroke.
 - Three children, each a frame: "Filter · Search" (width 300), "Filter · Room" (width 170), "Filter · Status" (width 170). Each: auto-layout horizontal, padding left and right spacing/3 (12), padding top and bottom spacing/2 (8), fill core/background-surface, 1 px inside stroke border/default, radius radius/element-10, vertically centred. One muted text each (clone of 1560:7978): "Search", "Room", "Status". The Room and Status frames hug their text but keep the width given.
 - Report under "Component gaps": no input or select component exists.

E · DEVICE TABLE ROW (L10 and L10b) — see section L10 for the one-time build; every other row is a clone of the finished template row.
 - Status badges: Working = clone of "Badge · Working" (Success) from "Row · Foot camera"; Not found = clone of 1560:7975; Not checked = clone of 1605:5909 with the label "Not checked" (Neutral).
 - Cell with "No room": auto-layout horizontal, gap spacing/2 (8): the body text "No room", then a clone of the Medium text "Change" 1564:8471 with the text "Assign".

F · LABEL AND CAPTION (every screen)
 - Label: clone 1603:10620 into the Section at the slot x, y 76. Name "Label · <code>" (L7, L8, L9, L10, L10b, L11). Set the text to the exact frame name.
 - Caption: clone 1603:10621 into the Section at the slot x, y 1044, width 1440. Name "Caption · <code>". Two lines, separated by a line break, with no trailing empty line.

G · COPY RULES
 - Text styles: clone an existing text and change the characters. Card title = Bold 14. Body = Regular 14. Muted = Regular 12 text/secondary. Label = Medium 14. Device names in tables are Medium.
 - Card = auto-layout vertical, fill surface/card, 1 px inside stroke border/default, radius radius/container, clip content on.
 - Fills for the level meter and the slider (L11): track = core/neutral; filled part and knob = text/secondary (knob: text/primary). If a text variable cannot be bound to a fill, use border/default and report which one you used. No hard-coded colours.
 - Forbidden words on frames: OpSpace, Essentials, SRV, Center overview, Video review, Dashboard. After each screen, search every text layer. The AV sources hold "Manage rooms in OpSpace" and a line about rooms coming from OpSpace: never clone them. "Card · Unassigned devices" and "Button · Assign" from AV0 are not used.
 - Never detach an instance. Never draw a button or a badge.
```

## L7 · Rooms

Source: "Shell · Page" (clone), plus "Card · Rooms" `1605:5790` from "AV0 · Rooms" `1603:10516`. Low-fi `8:1395`. Slot 1 (x 80). Active nav item: Rooms.

```
Goal: one frame "L7 · Rooms" in slot 1 of Section "3 · Rooms and devices".

1 · Start
- Do "A · Start of a page screen". Name: "L7 · Rooms". x 80, y 120. Active nav item: Rooms.

2 · Breadcrumb
- "Breadcrumb" has one segment: "Rooms" (Medium 12 text/primary). Delete any other segment and its "Separator".

3 · Page header
- Do "B". Title: "Rooms". Subtitle: "Riverbend College of Nursing". One button, Secondary: label "Add room", right edge at x 1132. Name "Button · Add room".

4 · Card · Rooms
- Clone "Card · Rooms" 1605:5790 from AV0. Add it to "Content" as the third child (after "Page header"). Keep the name.
- "Rooms header": left text "Rooms" (keep). Right text: "4 rooms · 1 needs attention" (keep).
- Columns, in "Columns header" and in every row. The cells are in this order: Room, Type, Cameras, Audio, Status, Open. Rename and resize:
  - "Cell · Room": width 240. Header text "Name".
  - "Cell · Type": width 180. Header text "Type".
  - "Cell · Cameras": rename "Cell · Capacity", width 120. Header text "Capacity".
  - "Cell · Audio": rename "Cell · Equipment", width 300. Header text "Equipment".
  - "Cell · Status": width 198. Header text "Status".
  - "Cell · Open": width 44, unchanged.
  Widths add up to 1082.
- Rows. Texts in the cells (body Regular 14; the room name stays Medium). Keep every badge instance. Change only what is listed:
  1. "Row · Sim Room 1": Name "Sim Room 1", Type "Simulation room", Capacity "12 people", Equipment "3 cameras, 2 mics, Audio kit", Status badge "Ready" (keep).
  2. "Row · Sim Room 2" (stays 72 high): Name "Sim Room 2", Type "Simulation room", Capacity "10 people", Equipment "2 cameras, Audio kit", Status: badge "Needs attention" (keep) and under it the muted text "1 device not found" (keep).
  3. "Row · Skills Lab 1": Name "Skills Lab 1", Type "Skills lab", Capacity "16 people", Equipment "1 camera, Audio kit", Status badge "Ready" (keep).
  4. "Row · Debrief Room 1": Name "Debrief Room 1", Type "Debrief room", Capacity "10 people", Equipment "—" (U+2014), Status badge "No devices" (keep).
- "Hint row": the text stays "Open a room to see and change its devices."
- If a cell does not have a text with the old value, find the text by position in the cell (each cell has one text). If a cell is empty, stop and report.

5 · Label and caption
- Do "F". Label text: "L7 · Rooms". Caption, two lines:
  "Facilitator or sim technician: opens Rooms to see every room and which ones need attention."
  "New: Rooms is its own entry under Resources, not under Settings. Status shows live readiness. Add room is here."

Check list (L7):
- "L7 · Rooms" is 1440 × 900 at x 80, y 120, clip content on. Label at y 76, caption at y 1044, both at x 80.
- Active nav item is Rooms (or the gap is reported). No relabelled nav item.
- "Content" has exactly three children: "Breadcrumb", "Page header", "Card · Rooms". Breadcrumb reads "Rooms" only.
- "Card · Rooms" has seven children: Rooms header, Columns header, four rows, Hint row. Column headers read: Name, Type, Capacity, Equipment, Status.
- Four badges, all instances: Ready, Needs attention, Ready, No devices. No other badge on the frame.
- The button "Add room" is an instance, Secondary, right edge at x 1132 in "Page header".
- No forbidden word. No text clipped. Nothing below y 876.
- Screenshot taken and looked at.
```

## L8 · Room, AV tab

Source: "Shell · Page" (clone), "Card · Devices" `1560:7926` from "AV1 · Room devices" `1559:8319`, tabs from "Settings tabs" `1624:9476`. Low-fi `8:1501`. Slot 2 (x 1640). Active nav item: Rooms.

```
Goal: one frame "L8 · Room, AV tab" in slot 2.

1 · Start
- Do "A". Name: "L8 · Room, AV tab". x 1640, y 120. Active nav item: Rooms.

2 · Breadcrumb
- Segments: "Rooms", "Sim Room 2" (two texts, one "Separator").

3 · Tabs
- Do "C". Insert "Tabs" as the second child of "Content", after "Breadcrumb" and before "Page header". Tabs, in this order: "Details" (inactive), "AV" (active).

4 · Page header
- Do "B". Title: "Sim Room 2". Subtitle: "Simulation room · Riverbend College of Nursing".
- Two buttons: the Primary clone (source 1694:9947) with the label "Start recording" at the right edge (x 1132), and the Secondary one with the label "Check this room" 8 px to its left. Names "Button · Start recording" and "Button · Check this room".

5 · Card · Cameras
- Clone "Card · Devices" 1560:7926 from AV1 into "Content" as the fourth child (after "Page header"). Name "Card · Cameras".
- "Devices header": left text "Cameras". Right text: "3 cameras · 1 not found".
- "Columns header": delete "Cell · Actions". Rename "Cell · Audio from" to "Cell · Last seen" and set its text to "Last seen". Widths: "Cell · Device" 360, "Cell · Kind" 260, "Cell · Status" 220, "Cell · Last seen" 242. Texts: "Device", "Kind", "Status", "Last seen".
- Rows. In every kept row: delete "Cell · Actions"; rename "Cell · Audio from" to "Cell · Last seen" (width 242, text as given); set the other widths as in the header.
  - "Row · Overhead camera" (56): Device "Overhead camera" with the badge "Primary" (keep). Kind "PTZ camera". Status badge "Working" (keep). Last seen "now".
  - "Row · Foot camera" (56): Device "Foot camera". Kind "Fixed camera". Status "Working" (keep). Last seen "now".
  - "Row · Patient monitor capture": set the height to 56. Device "Patient monitor capture". Kind "Capture unit". Status cell: keep "Badge · Not found". Delete the muted text "Last seen 10 Nov, 14:32" in the Status cell (it moves to the last column). Last seen "10 Nov, 14:32".
  - Delete "Row · Audio kit" and "Assign row" from this card.
- The card now has five children: Devices header, Columns header, three rows.

6 · Card · Audio
- Clone "Card · Devices" 1560:7926 from AV1 again (the original, not Card · Cameras). Add it as the fifth child of "Content". Name "Card · Audio".
- "Devices header": left "Audio". Right "1 device".
- Header and widths exactly as in step 5 (delete "Cell · Actions", "Cell · Audio from" becomes "Cell · Last seen", widths 360, 260, 220, 242).
- Keep only "Row · Audio kit" (56). Delete "Row · Overhead camera", "Row · Foot camera", "Row · Patient monitor capture" and "Assign row". In "Row · Audio kit": delete "Cell · Actions"; "Cell · Audio from" becomes "Cell · Last seen" with the text "now"; Device "Audio kit"; Kind "Microphone and speaker"; Status "Working" (keep).

7 · Add device
- Clone the Secondary button source 1694:9998. Set the label "Add device". Name "Button · Add device". Add it as the last child of "Content", left aligned, hug width.

8 · Label and caption
- Do "F". Label text: "L8 · Room, AV tab". Caption, two lines:
  "Sim technician: opens Sim Room 2 and checks its cameras and audio devices before a session."
  "New: room settings and AV settings are in one place. Cameras and audio are two separate groups. Rooms is its own menu entry."

Check list (L8):
- "L8 · Room, AV tab" is 1440 × 900 at x 1640, y 120. Label y 76, caption y 1044, both at x 1640.
- Active nav item is Rooms. Breadcrumb reads "Rooms / Sim Room 2" with one "Separator". It does not contain "Settings".
- "Content" has exactly six children, in this order: Breadcrumb, Tabs, Page header, Card · Cameras, Card · Audio, Button · Add device.
- "Tabs" has two tab frames, "Tab · Details" and "Tab · AV". "Tab · AV" is the clone of the active style.
- "Card · Cameras" has five children: Devices header, Columns header, three rows. "Card · Audio" has three children: Devices header, Columns header, one row.
- Badges, all instances: Primary 1, Working 3 (Overhead camera, Foot camera, Audio kit), Not found 1. No "Needs attention" badge.
- Two header buttons: "Button · Start recording" (Primary) with its right edge at x 1132, "Button · Check this room" to its left.
- No text mentions "Settings" or a forbidden word. No text clipped. Nothing goes below y 876 of the 900 px frame. If it does, report the overflow in px and do not shrink anything.
- Screenshot taken and looked at.
```

## L9 · Camera, opened from a room

Source: "Shell · Page" (clone), "Columns" `1564:8336` from "AV2 · Device detail" `1564:8094`. Low-fi `8:1173`. Slot 3 (x 3200). Active nav item: Rooms.

```
Goal: one frame "L9 · Camera, opened from a room" in slot 3. A PTZ camera page: move, zoom, saved views.

1 · Start
- Do "A". Name: "L9 · Camera, opened from a room". x 3200, y 120. Active nav item: Rooms.

2 · Breadcrumb
- Segments: "Rooms", "Sim Room 2", "Overhead camera" (three texts, two "Separator"). The last is Medium 12 text/primary.

3 · Page header
- Do "B". Title: "Overhead camera". Subtitle: "PTZ camera · Sim Room 2 · Working". One button, Secondary, label "Remove from room", right edge at x 1132. Name "Button · Remove from room".

4 · Columns
- Clone "Columns" 1564:8336 from AV2. Add it as the third child of "Content" (after "Page header"). It holds "Main column" (720) and "Side column" (388).

5 · Main column, "Card · Live picture"
- Header row "Live picture header": text "Live picture" (keep), "Badge · Working" (keep).
- Delete the instance "Camera tile".
- After the header row add a frame "Live picture frame": auto-layout vertical, centred on both axes, width fill (688), height 260, fill core/neutral, radius radius/element-10. One muted text (clone of 1560:7978): "Live picture".

6 · Main column, "Card · Saved views"
- "Saved views header": left text "Saved views" (keep). Right text "+ Save current view" becomes "Save current view".
- Rows: "Row · Far view" becomes "Row · Bed" with the left text "Bed". "Row · Patient monitor" becomes "Row · Door" with the left text "Door". "Row · Bedside" becomes "Row · Wide" with the left text "Wide". The right text "Go to" stays in each row.

7 · Side column, new "Card · Move camera" (first child of "Side column", above "Card · Details")
- A card: padding spacing/6 (24), gap spacing/3 (12), width fill (388). Auto-layout vertical.
- Child 1: a clone of the Bold text "Details" 1564:8465. Text: "Move camera".
- Child 2: a frame "Pad": auto-layout vertical, gap spacing/1 (4), width fill, items centred horizontally. Three children, each an auto-layout horizontal frame, gap spacing/1 (4), hug:
  - "Pad row 1": one button "↑".
  - "Pad row 2": three buttons "←", "Home", "→".
  - "Pad row 3": one button "↓".
  Every pad button is a clone of the Secondary source 1694:9998 with the label set. Names "Button · Up", "Button · Left", "Button · Home", "Button · Right", "Button · Down". Arrows are U+2191, U+2190, U+2192, U+2193.
- Child 3: a frame "Zoom row": auto-layout horizontal, gap spacing/2 (8), hug, three buttons (clones of 1694:9998): "Zoom +", "Zoom −" (U+2212), "Focus: Auto". Names "Button · Zoom in", "Button · Zoom out", "Button · Focus".

8 · Side column, "Card · Details"
- Delete "Row · Name".
- "Row · Kind": value "PTZ camera". "Row · Room": "Sim Room 2" with "Change" (keep). "Row · Role": badge "Primary" (keep). "Row · Audio from": "Audio kit" with "Change" (keep).
- Last text (muted): "Serial ACCC8E12F4A7. A device belongs to one room."

9 · Side column, "Card · Advanced"
- Header: "Advanced settings" and "Show" (keep). Muted text: "Picture size and quality. The defaults work for most rooms."

10 · Label and caption
- Do "F". Label text: "L9 · Camera, opened from a room". Caption, two lines:
  "Sim technician: opens the overhead camera from Sim Room 2, moves it, zooms, and saves a view for the bed."
  "New: one device page for every device. Opened from a room, the breadcrumb starts with Rooms. The room can be changed here."

Check list (L9):
- "L9 · Camera, opened from a room" is 1440 × 900 at x 3200, y 120. Label y 76, caption y 1044, both at x 3200.
- Active nav item is Rooms. Breadcrumb reads "Rooms / Sim Room 2 / Overhead camera". No "Settings".
- "Content" has exactly three children: Breadcrumb, Page header, Columns.
- "Main column" holds "Card · Live picture" (header, "Live picture frame") and "Card · Saved views" (header, three rows Bed, Door, Wide). "Side column" holds "Card · Move camera", "Card · Details", "Card · Advanced".
- No "Camera tile" instance on the frame. The picture is a grey frame with the text "Live picture".
- "Card · Move camera" has 5 pad buttons and 3 zoom buttons, all instances. "Card · Details" has four rows plus the serial line, no "Name" row.
- Badges: Working 1, Primary 1. All instances.
- The lowest element ends above y 876. If it does not, report the overflow in px and do not shrink anything.
- No forbidden word, no clipped text.
- Screenshot taken and looked at.
```

## L10 · Simulators & Equipment

Source: "Shell · Page" (clone), "Card · Devices" `1560:7926` from "AV1 · Room devices" `1559:8319`, tabs from "Settings tabs" `1624:9476`. Low-fi `10:1184`. Slot 4 (x 4760). Active nav item: Simulators & Equipment.

```
Goal: one frame "L10 · Simulators & Equipment" in slot 4. One list of every simulator and device, with or without a room.

1 · Start
- Do "A". Name: "L10 · Simulators & Equipment". x 4760, y 120. Active nav item: Simulators & Equipment.

2 · Breadcrumb
- One segment: "Simulators & Equipment".

3 · Page header
- Do "B". Title: "Simulators & Equipment". Subtitle: "Every simulator and device at Riverbend College of Nursing, with or without a room". One button, Secondary, label "Add equipment", right edge at x 1132. Name "Button · Add equipment".

4 · Tabs
- Do "C". Insert "Tabs" as the third child of "Content" (after "Page header"). Tabs, in this order: "All" (active), "Simulators", "Cameras", "Audio", "Other".

5 · Filter bar
- Do "D". Insert "Filter bar" as the fourth child of "Content".

6 · Card · Equipment, build the template row
- Clone "Card · Devices" 1560:7926 from AV1. Add it as the fifth child of "Content". Name "Card · Equipment".
- Delete "Devices header", "Assign row", and the rows "Row · Overhead camera", "Row · Patient monitor capture" and "Row · Audio kit". Keep "Columns header" and "Row · Foot camera".
- In "Row · Foot camera", the cells are: Device (420), Kind (220), Status (220), Audio from (180), Actions (44). Make them: Device, Kind, Room, Status, Serial:
  - Clone "Cell · Audio from" and insert the clone at index 2 (after "Cell · Kind"). Name it "Cell · Room".
  - Rename the old "Cell · Audio from" to "Cell · Serial". Delete "Cell · Actions".
  - Widths: "Cell · Device" 260, "Cell · Kind" 200, "Cell · Room" 220, "Cell · Status" 160, "Cell · Serial" 242. (Sum 1082.)
- Do the same cell changes in "Columns header". Header texts, in order: "Name", "Kind", "Room", "Status", "Serial".
- Rename "Row · Foot camera" to "Row · template". It is 56 high. The Device text is Medium.

7 · Rows
- Make eight rows as clones of "Row · template", in this order, and name each "Row · <Name>". Set the texts. The Status badge follows "E". "No room" cells follow "E". Then delete "Row · template".

| Name | Kind | Room | Status badge | Serial |
|---|---|---|---|---|
| SimMan 3G | Simulator | Sim Room 1 | Working | SM-20418 |
| Overhead camera | PTZ camera | Sim Room 2 | Working | ACCC8E12F4A7 |
| Foot camera | Fixed camera | Sim Room 2 | Working | ACCC8E12F51B |
| Patient monitor capture | Capture unit | Sim Room 2 | Not found | 00408C7B21D3 |
| Audio kit | Microphone and speaker | Sim Room 2 | Working | 5C0A1B7D9E42 |
| Ceiling microphone | Microphone | Sim Room 1 | Working | MC-5521 |
| 360 camera | Portable camera | No room, with "Assign" | Working | PC-0093 |
| Spare microphone | Microphone | No room, with "Assign" | Not checked | MC-5530 |

- Every row is 56 high.

8 · Hint
- Add a muted text (clone of 1560:7978) as the last child of "Content". Name "Hint". Text: "Assign a device to a room here or on the room's AV tab."

9 · Label and caption
- Do "F". Label text: "L10 · Simulators & Equipment". Caption, two lines:
  "Sim technician: opens Simulators & Equipment to find any device, see its room and status, or assign a loose device to a room."
  "New: one list for every simulator and device, with or without a room. Tabs keep cameras and audio apart."

Check list (L10):
- "L10 · Simulators & Equipment" is 1440 × 900 at x 4760, y 120. Label y 76, caption y 1044, both at x 4760.
- Active nav item is Simulators & Equipment. Breadcrumb reads "Simulators & Equipment".
- "Content" has exactly six children, in this order: Breadcrumb, Page header, Tabs, Filter bar, Card · Equipment, Hint.
- "Tabs" has five tab frames: All (active style), Simulators, Cameras, Audio, Other (inactive style).
- "Filter bar" has three frames: Search, Room, Status.
- "Card · Equipment" has nine children: Columns header and eight rows. Header texts: Name, Kind, Room, Status, Serial. No "Row · template" is left.
- Badges, all instances: Working 5, Not found 1, Not checked 1 (Neutral). Two rooms cells read "No room" with a "Assign" text.
- No text is clipped. Nothing below y 876. If something is, report the overflow in px and do not shrink anything.
- No forbidden word. Screenshot taken and looked at.
```

## L10b · Simulators & Equipment, Audio

Source: the finished "L10 · Simulators & Equipment". Low-fi `11:1154`. Slot 5 (x 6320). Active nav item: Simulators & Equipment.

```
Goal: one frame "L10b · Simulators & Equipment, Audio" in slot 5. The same list, with the Audio tab active and a level column.

1 · Clone
- Find "L10 · Simulators & Equipment" in the Section. If it does not exist, stop and report.
- Clone it inside the Section. Set x 6320, y 120. Name "L10b · Simulators & Equipment, Audio". Do not change the original.
- The active nav item is already Simulators & Equipment.

2 · Tabs
- In "Tabs": replace "Tab · All" with a clone of "Tab · Organization" 1624:9477 (text "All") at index 0. Replace "Tab · Audio" with a clone of "Tab · Rooms & devices" 1624:9478 (text "Audio") at index 3. Delete the two old frames. Names "Tab · All" and "Tab · Audio". Use "C" for the method.

3 · Table
- In "Card · Equipment", "Columns header": the last cell text "Serial" becomes "Level".
- Delete these rows: "Row · SimMan 3G", "Row · Overhead camera", "Row · Foot camera", "Row · Patient monitor capture", "Row · 360 camera".
- Put the remaining rows in this order: Ceiling microphone, Audio kit, then a new row, then Spare microphone. The new row is a clone of "Row · Audio kit", named "Row · Skills Lab audio kit".
- In every row, the last cell holds the level text. Final rows:

| Name | Kind | Room | Status badge | Level |
|---|---|---|---|---|
| Ceiling microphone | Microphone | Sim Room 1 | Working | OK |
| Audio kit | Microphone and speaker | Sim Room 2 | Working | OK |
| Skills Lab audio kit | Audio kit | Skills Lab 1 | Working | OK |
| Spare microphone | Microphone | No room, with "Assign" | Not checked | – (U+2013) |

- Keep every badge as an instance.

4 · Hint
- The text "Hint" becomes: "Audio devices only. Open one to set its sensitivity."

5 · Label and caption
- Do "F". Label text: "L10b · Simulators & Equipment, Audio". Caption, two lines:
  "Sim technician: opens the Audio tab to see every microphone and speaker and their level, then opens one to set its sensitivity."
  "New: the Audio tab shows audio devices only, with a level column. Today one filter mixes cameras and audio."

Check list (L10b):
- Frame exact name, 1440 × 900 at x 6320, y 120. Label y 76, caption y 1044, at x 6320. "L10" is unchanged.
- "Tab · Audio" is the active style (clone of 1624:9478). "Tab · All" is inactive style.
- "Card · Equipment" has five children: Columns header and four rows. Header texts: Name, Kind, Room, Status, Level.
- Badges, all instances: Working 3, Not checked 1.
- No forbidden word on the frame. No clipped text. Screenshot taken and looked at.
```

## L11 · Microphone

Source: the finished "L9 · Camera, opened from a room". Low-fi `11:1006`. Slot 6 (x 7880). Active nav item: Simulators & Equipment.

```
Goal: one frame "L11 · Microphone" in slot 6. The device page of the Audio kit, opened from Simulators & Equipment: live level and sensitivity.

1 · Clone
- Find "L9 · Camera, opened from a room" in the Section. If it does not exist, stop and report.
- Clone it inside the Section. Set x 7880, y 120. Name "L11 · Microphone". Do not change the original.
- Set the active nav item to Simulators & Equipment with the method in "Shell facts". Give the old active item (Rooms) the values of a non-active item.

2 · Breadcrumb
- Segments: "Simulators & Equipment", "Audio kit". Delete the third segment and its "Separator". The last text is Medium 12 text/primary.

3 · Page header
- Title: "Audio kit". Subtitle: "Microphone and speaker · Sim Room 2 · Working". The button "Remove from room" stays.

4 · Main column
- Delete "Card · Live picture" and "Card · Saved views".
- Add "Card · Sound level" as the first child of "Main column". A card: padding spacing/4 (16), gap spacing/3 (12), width fill (720), auto-layout vertical. Children, in this order:
  1. A text, Bold 14 (clone of 1564:8465): "Sound level".
  2. A frame "Level meter": auto-layout horizontal, width fill (688), height 24, fill core/neutral, radius radius/full, clip content on, no gap. One child "Level fill": width 413, height 24, fill text/secondary (see "G").
  3. A muted text: "Live level".
  4. A button, Secondary (clone of 1694:9998): "Play test sound". Name "Button · Play test sound".
- Add "Card · Sensitivity" as the second child of "Main column". A card: padding spacing/4 (16), gap spacing/3 (12), width fill (720), auto-layout vertical. Children, in this order:
  1. A text, Bold 14: "Sensitivity (gain)".
  2. A frame "Slider": auto-layout horizontal, width fill (688), height 20, vertically centred, gap 0, no fill. Three children: "Slider filled" (width 482, height 8, fill text/secondary, radius radius/full), "Slider knob" (a frame 20 × 20, fill text/primary, radius radius/full), "Slider rest" (width fill, height 8, fill core/neutral, radius radius/full).
  3. A frame "Scale": auto-layout horizontal, space between, width fill. Two muted texts: "Low" and "High".
  4. A muted text: "Current: 70%".
  5. A button, Secondary (clone of 1694:9998): "Mute this microphone". Name "Button · Mute this microphone".

5 · Side column
- Delete "Card · Move camera".
- "Card · Details": rows, in this order:
  - "Row · Kind": value "Microphone and speaker".
  - "Row · Room": "Sim Room 2" with "Change" (keep).
  - "Row · Role" becomes "Row · Used by": label "Used by". Delete "Badge · Primary". Add a body text (clone of the value text in "Row · Kind"): "Overhead camera, Foot camera".
  - Delete "Row · Audio from".
  - Last text (muted): "Serial 5C0A1B7D9E42. A device belongs to one room."
- "Card · Advanced": header "Advanced settings" and "Show" (keep). Muted text: "Noise reduction. The defaults work for most rooms."

6 · Label and caption
- Do "F". Label text: "L11 · Microphone". Caption, two lines:
  "Sim technician: opens the audio kit from Simulators & Equipment, checks the live level and sets how sensitive it is."
  "New: the same device page opens from a room or from this list. Only the breadcrumb and the active menu item differ."

Check list (L11):
- "L11 · Microphone" is 1440 × 900 at x 7880, y 120. Label y 76, caption y 1044, at x 7880. "L9" is unchanged.
- Active nav item is Simulators & Equipment. Breadcrumb reads "Simulators & Equipment / Audio kit". The word "Rooms" is not in the breadcrumb.
- "Content" has three children: Breadcrumb, Page header, Columns. "Main column" holds "Card · Sound level" and "Card · Sensitivity". "Side column" holds "Card · Details" and "Card · Advanced" (no "Card · Move camera").
- "Card · Details" has three rows (Kind, Room, Used by) plus the serial line. No badge on the frame.
- The two buttons in the main column are instances. The level meter and the slider are frames, not instances. Report them under "Component gaps": no meter or slider component exists.
- No forbidden word, no clipped text, nothing below y 876. If something is, report the overflow in px.
- Screenshot taken and looked at.
```

## After these run

- Claude reviews the six frames in Figma (read-only) and writes a fix section here if needed.
- Wiring (later, not part of these runs): Rooms row "Sim Room 2" in L7 to L8; row "Overhead camera" in L8 to L9; breadcrumb "Rooms" in L8 and L9 to L7; breadcrumb "Sim Room 2" in L9 to L8; tab "Audio" in L10 to L10b; row "Audio kit" in L10b to L11; breadcrumb "Simulators & Equipment" in L11 to L10.
