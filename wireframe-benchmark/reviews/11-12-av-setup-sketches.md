# 11-12 · AV setup sketches (Room devices, Device detail)

Two greyscale wireframe sketches for the workshop on 11-17/18. They illustrate the AV device management requirements (AV-1 to AV-12) in the vault page `wiki/work/essentials-2.0-av-device-management.md`. They are discussion sketches, not final designs.

## Context

- The scope area "AV device management & configuration" has no design at all. Patrik said sketches help the workshop.
- Screen 1, **Room devices**, shows: a room's devices as a plain list (no numbered slots), health per device, one primary device, a missing device flagged where it is assigned, and "Assign a device".
- Screen 2, **Device detail**, shows: the device's room with a way to change it, a live picture, saved PTZ views, and technical settings behind an "Advanced" row.

## What I found in the file (11-12, read-only)

- No Rooms, Devices or Settings screen exists in greyscale. The shell is cloned from the Dashboard.
- Shell source: frame "D1 · Dashboard" `307:12788` (1440 × 900) on the Drafts page. It has instance "TopNav" `307:12789`, frame "Body" `307:12790` with instance "SideNav" `307:12791` (260 wide) and frame "Content" `307:12792` (1180 wide, auto-layout, 24 px padding, 24 px gap). "Content" holds "Page header" `307:12793` (1132 × 52) and "Columns" `307:12796` (1132 × 728).
- Live picture: component set "SRV / Camera tile" `1027:6832`, variants State=Recording `1027:6819` and State=Not recording `1027:6828` (each 336 × 306).
- Badge: Astryx component set "Badge", key `d835899fdd40301689b1ce8a746f72a132b1e988` (Neutral, Info, Success, Warning, Error). In D1 the badges are plain frames named "Badge · Done".
- There is no Table, no PTZ preset component and no collapsible component. Those parts are built as plain auto-layout frames on the target page.
- Target page "👤 SRV flow [D]" `960:51213` holds one Section, "SRV flow · Recording" `1343:3275`, at x 0, y 0, 14080 × 1220. Everything on the page sits between y -80 and y 1220.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | A new Section "AV setup · Sketches" on the SRV flow page, below the existing Section |
| Active nav item | Settings, because the nav has no Rooms item |
| Sample room | Sim Room 2, four devices, one of them missing |
| Persona in captions | Sim technician (not Maya, who is faculty) |
| Screen size | 1440 × 900, the Dashboard's size (the SRV frames are 948 high) |
| Live picture | The Recording variant of the camera tile, because no idle variant exists |

## Gaps I expect in Cursor's report

- The camera tile shows a red recording dot, which is wrong for a settings page. There is no idle state.
- The Astryx Badge may fail to import by key. The fallback is in the Shared rules.
- The SideNav may not allow "Settings" to be set active from the instance.

## How to run

Both runs: **Claude Sonnet 5.5 · High**. One new Cursor chat per run. Run them one after the other, not in parallel, because AV2 clones the frame AV1 builds.

1. **AV1 · Room devices.**
   `Read @wireframe-benchmark/reviews/11-12-av-setup-sketches.md. Apply "Shared rules", then run ONLY section "AV1 · Room devices".`
2. **Tell Claude when AV1 is done.** Claude checks the frame in Figma before it is cloned.
3. **AV2 · Device detail.**
   `Read @wireframe-benchmark/reviews/11-12-av-setup-sketches.md. Apply "Shared rules", then run ONLY section "AV2 · Device detail".`

After each run, check that the frame really exists in Figma. Cursor has once reported success without writing anything.

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Target page "👤 SRV flow [D]" (960:51213). Library page "⚙️ Components (D)" (675:31351). Source frame on the Drafts page (305:18292): "D1 · Dashboard" (307:12788).

Where you may write:
- Only on page "👤 SRV flow [D]", and only inside the Section "AV setup · Sketches" that section AV1 creates.
- Never change, move or delete anything in the existing Section "SRV flow · Recording" (1343:3275) or the text "Title · SRV flow" (1347:8395).
- "⚙️ Components (D)", the Drafts page and every "(G)" page are read-only. You may clone frames from them and create instances of their components. Never edit a main component, add a variant, or rename, move or delete anything on those pages.

IDs and clones:
- IDs in this file refer to the source frames. A clone has new IDs. Inside a clone, always find layers by their exact name.

How to change an instance:
- Only through variant properties, exposed properties, text overrides and layer visibility. Never detach an instance.
- When a step says "if this is not possible, report it", don't build a workaround. Leave the instance as it is and add one line to "Component gaps" in your report: frame, component, what is missing.

Style:
- Greyscale only, including image fills.
- Font Figtree. Use only variables that "D1 · Dashboard" already uses. No hard-coded colours, sizes or radii. The ones you need:
  - Text colours: text/primary, text/secondary.
  - Surfaces and borders: surface/card (card fill), border/default (card border and row dividers).
  - Radius: radius/container (cards), radius/element-10 (buttons), radius/full (badges).
  - Spacing: spacing/1 to spacing/6 (4 to 24 px).
  - Secondary button fill: core/neutral.
- Text sizes, taken from D1:
  - Card title: Bold 14 px. Copy the style of a card title in D1.
  - Body: Regular 14 px, line height 20 px, text/primary.
  - Muted: Regular 12 px, text/secondary.
  - Label and button text: Medium 14 px.
- Every new frame uses auto-layout. No absolute positioning inside cards.

A "card" in this file means: a frame with auto-layout vertical, fill surface/card, 1 px inside stroke border/default, corner radius radius/container, clip content on. Padding and gap are given in each step.

Badges:
- Import the Astryx component set "Badge" by key d835899fdd40301689b1ce8a746f72a132b1e988 and create instances of its pill shape.
- After creating the first instance, read its component properties. Use the property whose options include Neutral, Success, Warning and Error to set the variant, and the text property (or the nested text layer) to set the label. Write the property names you found into your report.
- If the import fails, don't draw a badge. Clone the frame named "Badge · Done" from "D1 · Dashboard" instead, change only its text, and report this under "Component gaps".

Section "AV setup · Sketches":
- A Section on page 960:51213 at x 0, y 1500. Size 3280 × 1180.
- Two slots in one row. The screen of slot n sits at x = 80 + (n - 1) × 1560, y = 120, relative to the Section. Each screen is 1440 × 900 with clip content on.
- Label: 24 px above each screen, left-aligned with it. Make it by cloning the text layer named "Label · S1" from Section 1343:3275, then set its text to the new frame's exact name and name the layer "Label · <frame code>" (for example "Label · AV1").
- Caption: 24 px below each screen, left-aligned with it, 1440 px wide. Make it by cloning the caption text that sits below "S1 · Ready to record" in Section 1343:3275 (the text at y 1092 in that Section), then set the two lines given in each section.

Sample data, the same in both frames: Sim Room 2, Riverbend College of Nursing. Devices: Overhead camera (PTZ camera, AXIS M5525), Foot camera (Fixed camera), Patient monitor capture (Capture unit), Audio kit (Microphone and speaker).

Report when done: the new frame IDs, the Badge property names you found, the "Component gaps" list, and every step you could not do exactly as written. Then screenshot each frame you built.
```

## AV1 · Room devices

```
Goal: one frame "AV1 · Room devices" in slot 1 of a new Section.

1 · Section
Create the Section "AV setup · Sketches" as described in the Shared rules. If a Section with that name already exists on the page, stop and report.

2 · Shell
- Clone "D1 · Dashboard" (307:12788) into the Section. Place it at x 80, y 120. Rename the clone "AV1 · Room devices".
- In the clone, find the instance "SideNav". Its item "Dashboard" is the active one. Make "Settings" the active item and "Dashboard" a normal item: read the component properties of the nested "Dashboard" item, set the same values on the nested "Settings" item, and set "Dashboard" to the values a non-active item (for example "Calendar") has. If this is not possible, report it and leave the SideNav as it is.
- Don't change "TopNav".

3 · Page header
In the clone, find the frame "Page header" inside "Content".
- Title text: "Sim Room 2".
- Subtitle text: "Simulation room · Riverbend College of Nursing. Room details come from OpSpace."
- The button in the header has the label "Customize". Change the label to "Assign a device". Keep its style. If the button's width doesn't follow the text, set the width so the label has 12 px padding left and right, and keep the button's right edge where it was.

4 · Remove the dashboard content
In the clone, find the frame "Columns" inside "Content". Delete it. "Content" keeps its auto-layout, 24 px padding and 24 px gap.

5 · Card "Readiness"
Add a card as the second child of "Content" (after "Page header"). Name: "Card · Readiness". Width: fill (1132). Auto-layout horizontal, padding spacing/4 (16), gap spacing/3 (12), vertically centred.
- Child 1: a Badge, variant Warning, label "Needs attention".
- Child 2: a text, body style, fill width: "3 of 4 devices are working. This room can record, but without the patient monitor."

6 · Card "Devices"
Add a card as the third child of "Content". Name: "Card · Devices". Width: fill (1132). Height: hug. Auto-layout vertical, padding 0, gap 0.

6a · Card header row. Name "Devices header". Auto-layout horizontal, height 52, padding left and right spacing/6 (24), vertically centred, space between.
- Left: text, card title style: "Devices in this room".
- Right: text, muted style: "4 devices · 1 not found".

6b · Column header row. Name "Columns header". Auto-layout horizontal, height 40, padding left and right spacing/6 (24), gap 0, vertically centred, 1 px top stroke border/default.
Four cells, each a frame with a muted-style text, left-aligned:
- "Device": width 420
- "Kind": width 220
- "Status": width 220
- "Audio from": width 180
- then an empty cell, width 44

6c · Four device rows. Each row: name "Row · <device name>", auto-layout horizontal, height 56, padding left and right spacing/6 (24), gap 0, vertically centred, 1 px top stroke border/default. Cells in the same widths as 6b (420, 220, 220, 180, 44).

Row 1, "Row · Overhead camera":
- Device cell: auto-layout horizontal, gap spacing/2 (8), vertically centred: text body style, Medium weight, "Overhead camera", then a Badge, variant Neutral, label "Primary".
- Kind cell: text body style: "PTZ camera".
- Status cell: Badge, variant Success, label "Working".
- Audio from cell: text body style: "Audio kit".
- Last cell: a text "⋯" (U+22EF), body style, text/secondary, centred. Name it "More".

Row 2, "Row · Foot camera":
- Device: "Foot camera" (Medium weight, no badge).
- Kind: "Fixed camera".
- Status: Badge Success "Working".
- Audio from: "Audio kit".
- Last cell: "⋯" as in row 1.

Row 3, "Row · Patient monitor capture":
- Device: "Patient monitor capture" (Medium weight).
- Kind: "Capture unit".
- Status cell: auto-layout vertical, gap spacing/1 (4): Badge, variant Error, label "Not found", then a muted text "Last seen 10 Nov, 14:32".
- Audio from: "No audio".
- Last cell: "⋯".
- This row is 72 high, not 56.

Row 4, "Row · Audio kit":
- Device: "Audio kit" (Medium weight).
- Kind: "Microphone and speaker".
- Status: Badge Success "Working".
- Audio from: "—".
- Last cell: "⋯".

6d · Footer row. Name "Assign row". Auto-layout horizontal, height 52, padding left and right spacing/6 (24), vertically centred, 1 px top stroke border/default.
- One text, label style (Medium 14 px), text/primary: "+ Assign a device".
- After it, 12 px gap, a muted text: "2 detected devices are not assigned to a room."

7 · Label and caption
- Label text: "AV1 · Room devices".
- Caption, two lines:
  "Sim technician: opens Sim Room 2 to check its cameras and audio before a session."
  "System: lists the room's devices with their live status, marks the primary camera, and flags the capture unit it can no longer find."

Check before you report:
- The Section "AV setup · Sketches" exists at x 0, y 1500 and nothing in Section 1343:3275 has changed.
- "AV1 · Room devices" is 1440 × 900 at x 80, y 120 in the new Section.
- "Content" has exactly three children: "Page header", "Card · Readiness", "Card · Devices".
- "Card · Devices" has seven children: Devices header, Columns header, four rows, Assign row.
- Six badges exist: Needs attention, Primary, Working × 3, Not found.
- No text is clipped and nothing overflows the 1440 × 900 frame.
```

## AV2 · Device detail

```
Goal: one frame "AV2 · Device detail" in slot 2 of the Section "AV setup · Sketches". Run this only after AV1 has been checked.

1 · Clone
- Find the frame "AV1 · Room devices" in the Section "AV setup · Sketches". If it doesn't exist, stop and report.
- Clone it inside the same Section. Place the clone at x 1640, y 120. Rename it "AV2 · Device detail".
- Don't change the original "AV1 · Room devices".

2 · Page header
In the clone, find "Page header".
- Title text: "Overhead camera".
- Subtitle text: "PTZ camera · AXIS M5525 · Detected automatically"
- Button label: change "Assign a device" to "Remove from room". Keep its style and its right edge.

3 · Remove the list content
In the clone, delete "Card · Readiness" and "Card · Devices".

4 · Two columns
Add a frame as the second child of "Content". Name: "Columns". Width: fill (1132). Height: hug. Auto-layout horizontal, gap spacing/6 (24), top-aligned, no fill, no stroke.
- Child 1: frame "Main column", width 720, auto-layout vertical, gap spacing/6 (24).
- Child 2: frame "Side column", width 388, auto-layout vertical, gap spacing/6 (24).

5 · Card "Live picture" (in "Main column")
A card. Name "Card · Live picture". Width fill (720). Auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12).
- Row 1: auto-layout horizontal, space between, vertically centred: text card title style "Live picture", and a Badge, variant Success, label "Working".
- Row 2: an instance of "SRV / Camera tile", variant State=Recording (1027:6819). Set its width to 688. If the instance resizes with its content, set the height to 387. If it can't be resized without distortion, leave it at 336 × 306, left-aligned, and report it.
- Row 3: a muted text: "Click the picture to move the camera. Scroll to zoom."

6 · Card "Saved views" (in "Main column", below the live picture)
A card. Name "Card · Saved views". Width fill (720). Auto-layout vertical, padding 0, gap 0.
- Header row: height 52, padding left and right spacing/6 (24), vertically centred, space between. Left: text card title style "Saved views". Right: text label style "+ Save current view".
- Three rows, each: height 48, padding left and right spacing/6 (24), vertically centred, space between, 1 px top stroke border/default. Left: body text. Right: label-style text "Go to".
  - "Far view"
  - "Patient monitor"
  - "Bedside"

7 · Card "Details" (in "Side column")
A card. Name "Card · Details". Width fill (388). Auto-layout vertical, padding spacing/6 (24), gap spacing/4 (16).
- Title: text card title style "Details".
- Five rows. Each row: auto-layout horizontal, space between, vertically centred. Left: muted text (the field name). Right: body text (the value).
  - "Name" → "Overhead camera"
  - "Kind" → "PTZ camera"
  - "Room" → an auto-layout horizontal group, gap spacing/2 (8): body text "Sim Room 2", then label-style text "Change"
  - "Role" → a Badge, variant Neutral, label "Primary"
  - "Audio from" → an auto-layout horizontal group, gap spacing/2 (8): body text "Audio kit", then label-style text "Change"
- Last line: a muted text, fill width: "Serial ACCC8E12F4A7. A device belongs to one room."

8 · Card "Advanced" (in "Side column", below Details)
A card. Name "Card · Advanced". Width fill (388). Auto-layout vertical, padding spacing/6 (24), gap spacing/2 (8).
- Row 1: auto-layout horizontal, space between, vertically centred: text card title style "Advanced settings", and a label-style text "Show".
- Row 2: a muted text, fill width: "Picture quality, video size and audio level. The defaults work for most rooms."

9 · Label and caption
- The clone of AV1 has no label or caption of its own, because they are separate layers. Create both for slot 2 as the Shared rules describe.
- Label text: "AV2 · Device detail".
- Caption, two lines:
  "Sim technician: opens the overhead camera to check its picture and save a view for the patient monitor."
  "System: shows the live picture, the saved views, and the room this camera belongs to. Technical settings stay closed until asked for."

Check before you report:
- "AV1 · Room devices" is unchanged.
- "AV2 · Device detail" is 1440 × 900 at x 1640, y 120 in the Section.
- "Content" has exactly two children: "Page header" and "Columns".
- "Main column" holds "Card · Live picture" and "Card · Saved views". "Side column" holds "Card · Details" and "Card · Advanced".
- The camera tile is an instance, not a detached copy.
- No text is clipped and nothing overflows the 1440 × 900 frame. If the content is taller than the frame, report the overflow in px and don't shrink anything.
```

## AV3 · Fixes after review (11-13)

Review result: AV1 and AV2 passed. Four small flaws, all from gaps in the prompts above, not from Cursor. Badge colours (green, yellow, red) stay as they are; that is Daniel's call for the workshop.

Run: **Claude Sonnet 5.5 · Medium**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-12-av-setup-sketches.md. Apply "Shared rules", then run ONLY section "AV3 · Fixes after review (11-13)".`

```
Goal: four small fixes in the two existing frames. Don't rebuild anything. Don't change badge colours or variants.

Frames, in Section "AV setup · Sketches" (1559:8318):
- "AV1 · Room devices" (1559:8319)
- "AV2 · Device detail" (1564:8094)
These IDs are the real frames, not sources. If an ID is not found, find the frame by its exact name inside the Section. If neither works, stop and report.

Fix 1 · Remove the icon from the header button (both frames)
- In "Page header", find the button: the frame that contains the text "Assign a device" (AV1) or "Remove from room" (AV2).
- Inside that button, set every child that is not the text layer to hidden (visible = false). Don't delete anything.
- If the button has auto-layout, its width now follows the text. If it doesn't, set the width to the text width plus 24 px. In both cases the button's right edge must stay at x 1132 inside "Page header" (where it is now).
- Report the name of the layer you hid.

Fix 2 · Camera tile label (AV2 only)
- In "Card · Live picture", find the instance "Camera tile" (1564:8339).
- Text override: change the nested text "Camera 1" to "Overhead camera".
- Hide the red dot next to that text: it is the small shape that sits in the same label chip as the text. Set it to hidden (visible = false) on the instance. Don't detach.
- If the text override or the hiding is not possible on the instance, leave it and report it under "Component gaps".

Fix 3 · Breadcrumb (both frames)
- Build a frame named "Breadcrumb": auto-layout horizontal, gap spacing/2 (8), vertically centred, hug width and height, no fill, no stroke.
- Its children are separate text layers, all Regular 12 px, colour text/secondary, except the last one, which is Medium 12 px, colour text/primary.
  - AV1: "Settings", "/", "Rooms", "/", "Sim Room 2"
  - AV2: "Settings", "/", "Rooms", "/", "Sim Room 2", "/", "Overhead camera"
- Insert "Breadcrumb" as the FIRST child of "Content" (before "Page header") in each frame. "Content" is auto-layout, so everything below moves down by itself. Don't change the padding or gap of "Content".
- AV2 only: to make room, delete the text "Click the picture to move the camera. Scroll to zoom." in "Card · Live picture". The card then has two rows.
- After this, check that nothing in either frame goes below y 876 of the 900 px frame. If something does, don't shrink anything; report the overflow in px.

Fix 4 · Empty header cell (AV1 only)
- In "Card · Devices" → "Columns header", find the frame "Cell · Actions" (1560:7939). It is 44 × 100.
- Set its height to 40 (or to fill the row height if the row is auto-layout). Keep the width at 44.

Check before you report:
- Both header buttons show only text, no icon, and their right edge is at x 1132 in "Page header".
- The tile label reads "Overhead camera" with no red dot, and the tile is still an instance.
- "Content" in AV1 has four children: Breadcrumb, Page header, Card · Readiness, Card · Devices.
- "Content" in AV2 has three children: Breadcrumb, Page header, Columns.
- Nothing overflows the 1440 × 900 frames.
- Labels, captions and all badges are unchanged.

Report: what you changed per fix, the "Component gaps" list, and a screenshot of both frames.
```

## AV4 · Rooms list (11-13)

AV3 passed review. This run adds the screen that comes before "Room devices": the list of rooms in Settings. It becomes slot 1, so the Section reads Rooms → Room devices → Device detail.

Inspiration: Daniel's earlier concept "S3 · Rooms & devices" (`321:531`) in the file "Essentials 2.0 - wireframes" (`maOZqRuLdksiPwUA43qSVI`). Taken from it: the callout for devices that aren't in a room yet, and the rooms table with a status per room. Changed on purpose: no "+ Add room" button, because rooms come from OpSpace (AV-1).

Run: **Claude Sonnet 5.5 · High**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-12-av-setup-sketches.md. Apply "Shared rules", then run ONLY section "AV4 · Rooms list (11-13)".`

```
Goal: a third frame, "AV0 · Rooms", in slot 1 of Section "AV setup · Sketches" (1559:8318). The two existing frames move one slot to the right.

All IDs below are the real nodes in the Section. If an ID is not found, find the node by its exact name inside the Section. If neither works, stop and report.

1 · Make room
- Resize the Section (1559:8318) to 4840 × 1180. Keep its position (x 0, y 1500).
- Move these three nodes to x 3200 (keep their y): "AV2 · Device detail" (1564:8094), "Label · AV2" (1564:8494), "Caption · AV2" (1564:8495).
- Then move these three nodes to x 1640 (keep their y): "AV1 · Room devices" (1559:8319), "Label · AV1" (1560:8021), "Caption · AV1" (1560:8022).
- Change nothing else in those frames.

2 · Clone
- Clone "AV1 · Room devices" inside the Section. Place the clone at x 80, y 120. Rename it "AV0 · Rooms".
- Clone "Label · AV1" to x 80, y 76. Rename it "Label · AV0". Text: "AV0 · Rooms".
- Clone "Caption · AV1" to x 80, y 1044. Rename it "Caption · AV0". Text, two lines:
  "Sim technician: opens Settings to see every room and which ones need attention."
  "System: lists the rooms that come from OpSpace with their cameras, audio and live status, and shows the devices it detected that aren't in a room yet."

Everything below happens inside "AV0 · Rooms". Find layers by name.

3 · Breadcrumb
In "Breadcrumb", delete the last two text layers (the second "/" and "Sim Room 2"). It now reads "Settings", "/", "Rooms". Set the text "Rooms" to Medium 12 px, colour text/primary (the style the deleted last segment had).

4 · Page header
- Title: "Rooms".
- Subtitle: "Rooms come from OpSpace. Essentials adds their cameras and audio."
- Button label: change "Assign a device" to "Manage rooms in OpSpace". The icon layer stays hidden. Keep the button's right edge at x 1132 in "Page header".

5 · Keep two badges, then remove the old content
- Before deleting anything, you need badge instances to reuse. In "Card · Devices", the badges "Working" (Success), "Not found" (Error) and "Primary" (Neutral) exist, and in "Card · Readiness" the badge "Needs attention" (Warning). In the steps below, "a Success badge" means: clone one of these existing instances with that variant and change only its label text. Never draw a badge.
- Clone one of each of the four variants to a temporary frame named "TEMP badges" placed inside the Section at x 80, y 1100. Delete "TEMP badges" at the end of the run.
- Then delete "Card · Readiness" and "Card · Devices" from "Content".

6 · Card "Unassigned devices"
Add a card as the third child of "Content" (after "Page header"). Name "Card · Unassigned devices". Width fill (1132). Auto-layout horizontal, padding spacing/4 (16), gap spacing/4 (16), top-aligned.
- Child 1: frame "Text", fill width, auto-layout vertical, gap spacing/1 (4):
  - body text, Medium weight: "2 devices were detected and aren't in a room yet."
  - muted text: "AXIS P5655 camera · 10.0.4.21"
  - muted text: "Audio kit · 10.0.4.30"
- Child 2: a button. Clone the header button from "Page header" (the frame that contains "Manage rooms in OpSpace"), put the clone here, and change its label to "Assign". The icon stays hidden. Hug width.

7 · Card "Rooms"
Add a card as the fourth child of "Content". Name "Card · Rooms". Width fill (1132). Height hug. Auto-layout vertical, padding 0, gap 0.

7a · Header row "Rooms header": auto-layout horizontal, height 52, padding left and right spacing/6 (24), vertically centred, space between.
- Left: text, card title style (Bold 14 px): "Rooms".
- Right: muted text: "4 rooms · 1 needs attention".

7b · "Columns header": auto-layout horizontal, height 40, padding left and right spacing/6 (24), gap 0, vertically centred, 1 px top stroke border/default. Cells, each a frame with a muted text, left-aligned:
- "Room": width 320
- "Type": width 200
- "Cameras": width 120
- "Audio": width 180
- "Status": width 220
- an empty cell named "Cell · Open": width 44, height 40

7c · Four rows. Each: name "Row · <room name>", auto-layout horizontal, height 56, padding left and right spacing/6 (24), gap 0, vertically centred, 1 px top stroke border/default. Cells in the widths of 7b (320, 200, 120, 180, 220, 44). Room name is body text in Medium weight. Other cells are body text Regular. The last cell holds the text "›" (U+203A), body style, colour text/secondary, centred.

| Row | Room | Type | Cameras | Audio | Status |
|---|---|---|---|---|---|
| 1 | Sim Room 1 | Simulation room | 3 | Audio kit | Success badge "Ready" |
| 2 | Sim Room 2 | Simulation room | 2 | Audio kit | Warning badge "Needs attention", and under it a muted text "1 device not found" (status cell is auto-layout vertical, gap spacing/1). This row is 72 high |
| 3 | Skills Lab 1 | Skills lab | 1 | Audio kit | Success badge "Ready" |
| 4 | Debrief Room 1 | Debrief room | — | — | Neutral badge "No devices" |

7d · Footer row "Hint row": auto-layout horizontal, height 44, padding left and right spacing/6 (24), vertically centred, 1 px top stroke border/default. One muted text: "Open a room to see and change its devices."

8 · Clean up
Delete "TEMP badges".

Check before you report:
- The Section is 4840 × 1180 at x 0, y 1500. Frames from left to right: "AV0 · Rooms" at x 80, "AV1 · Room devices" at x 1640, "AV2 · Device detail" at x 3200, all at y 120, all 1440 × 900. Each has its label at y 76 and caption at y 1044, at the same x as its frame.
- AV1 and AV2 are unchanged apart from their position.
- In "AV0 · Rooms", "Content" has four children: Breadcrumb, Page header, Card · Unassigned devices, Card · Rooms.
- "Card · Rooms" has seven children: Rooms header, Columns header, four rows, Hint row.
- Four badges in the rows: Ready, Needs attention, Ready, No devices. All are instances.
- Nothing overflows the 1440 × 900 frame and no text is clipped.
- "TEMP badges" is gone. Nothing changed in Section 1343:3275.

Report: new IDs, anything you could not do exactly as written, "Component gaps", and a screenshot of all three frames.
```

## AV5 · Settings home, tabs variant, background (11-13)

AV4 passed review. This run does three things:

1. **Answers Daniel's annotation** on "Content" in AV0 (`1603:10520`): "This gray background doesn't really work, does it? It lacks contrast with the secondary button." Agreed. The content area becomes white in all AV frames, and the cards keep their border. The "Assign" button, a Ghost button that reads as plain text, becomes Secondary.
2. **Adds "AVs · Settings home"**: the page Rooms is reached from. Six cards, taken from Daniel's concept "S1 · Settings home" (`320:16` in file `maOZqRuLdksiPwUA43qSVI`).
3. **Adds "AV0b · Rooms, with settings tabs"**: a variant of AV0 with a tab row for the other settings areas. Claude's call: tabs across the top instead of the concept's second side column, because tabs keep the content width and the finished screens don't need rebuilding.

Order in the Section after this run: Settings home → Rooms → Rooms with tabs → Room devices → Device detail.

Run: **Claude Sonnet 5.5 · High**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-12-av-setup-sketches.md. Apply "Shared rules", then run ONLY section "AV5 · Settings home, tabs variant, background (11-13)".`

```
Goal: two new frames and two fixes in Section "AV setup · Sketches" (1559:8318).

All IDs below are the real nodes. If an ID is not found, find the node by its exact name inside the Section. If neither works, stop and report.

1 · Make room
- Resize the Section (1559:8318) to 7960 × 1180. Keep its position.
- Move to x 6320 (keep y): "AV2 · Device detail" (1564:8094), "Label · AV2" (1564:8494), "Caption · AV2" (1564:8495).
- Then move to x 4760 (keep y): "AV1 · Room devices" (1559:8319), "Label · AV1" (1560:8021), "Caption · AV1" (1560:8022).
- Then move to x 1640 (keep y): "AV0 · Rooms" (1603:10516), "Label · AV0" (1603:10620), "Caption · AV0" (1603:10621).

2 · Background fix (AV0, AV1, AV2)
- In each of the three frames, find the frame "Content" (in AV0 it is 1603:10520). It has a grey fill. Change its fill to the variable core/background-surface (white). If "Content" has no fill and the grey comes from "Body", change the fill of "Body" instead and say so in the report.
- Cards keep their fill surface/card and their 1 px border/default stroke. Don't change any card.
- Don't remove or edit the annotation on "Content" in AV0.

3 · "Assign" button (AV0)
- In "Card · Unassigned devices", the button "Assign" (1605:5864) is a Button instance with Variant=Ghost. Set its Variant property to Secondary. Keep Size=SM and the label.
- In the same card, set the card's auto-layout to vertically centred (counter axis: center), so the button sits in the middle of the card's height.

4 · New frame "AV0b · Rooms, with settings tabs" (after steps 2 and 3, so the clone has the fixes)
- Clone "AV0 · Rooms" inside the Section to x 3200, y 120. Rename the clone "AV0b · Rooms, with settings tabs". Remove any annotation from the clone's "Content".
- Clone "Label · AV0" to x 3200, y 76, rename "Label · AV0b", text "AV0b · Rooms, with settings tabs".
- Clone "Caption · AV0" to x 3200, y 1044, rename "Caption · AV0b", text, two lines:
  "Variant of AV0: a tab row keeps the other settings areas one click away."
  "System: shows the same Rooms page, with Rooms & devices as the active tab."
- In the clone's "Content", insert a new frame as the SECOND child (after "Breadcrumb", before "Page header"). Name "Settings tabs". Width fill (1132). Height 40. Auto-layout horizontal, gap spacing/6 (24), bottom-aligned, no fill, 1 px bottom stroke border/default.
- Six children, each a frame named "Tab · <label>": auto-layout vertical, height 40, hug width, vertically centred, padding left and right 0. Each holds one text, Medium 14 px:
  - "Organization", colour text/secondary
  - "Rooms & devices", colour text/primary. This is the active tab: its frame has a 2 px bottom stroke in text/primary.
  - "Recordings & privacy", colour text/secondary
  - "Sign-in & security", colour text/secondary
  - "Email", colour text/secondary
  - "Integrations", colour text/secondary
- Change nothing else in the clone.

5 · New frame "AVs · Settings home"
- Clone "AV0 · Rooms" inside the Section to x 80, y 120. Rename the clone "AVs · Settings home". Remove any annotation from the clone's "Content".
- Clone "Label · AV0" to x 80, y 76, rename "Label · AVs", text "AVs · Settings home".
- Clone "Caption · AV0" to x 80, y 1044, rename "Caption · AVs", text, two lines:
  "Sim technician: opens Settings and sees at once that a room needs attention."
  "System: groups the settings into six areas and shows the room problem on the Rooms & devices card."
- In the clone:
  - Delete "Breadcrumb".
  - "Page header": title "Settings". Subtitle "Changes save automatically." Set the header button (the Button instance labelled "Manage rooms in OpSpace") to hidden (visible = false).
  - Before deleting the cards: clone the Warning badge "Needs attention" from "Card · Rooms" into a temporary frame "TEMP badge" inside the Section at x 80, y 1100.
  - Delete "Card · Unassigned devices" and "Card · Rooms".
- Add a frame as the second child of "Content". Name "Cards". Width fill (1132). Auto-layout vertical, gap spacing/6 (24), no fill, no stroke.
- "Cards" has two children, "Cards row 1" and "Cards row 2". Each: auto-layout horizontal, gap spacing/6 (24), width fill, top-aligned, no fill. Each row holds three cards, each card set to fill width (so about 361 wide) and stretch to the row's height.
- Each card: name "Card · <title>", auto-layout vertical, padding spacing/6 (24), gap spacing/3 (12), fill surface/card, 1 px inside stroke border/default, radius radius/container.
  - Line 1: the title, card title style (Bold 14 px). In the "Rooms & devices" card only, line 1 is an auto-layout horizontal frame, space between, vertically centred: the title on the left and the badge from "TEMP badge" on the right, with its label changed to "1 room needs attention".
  - Line 2: the description, muted style (Regular 12 px, text/secondary), fill width.
  - Then a frame "Links": auto-layout vertical, gap 0, width fill. Each link is a row: auto-layout horizontal, height 32, space between, vertically centred: the link text in label style (Medium 14 px, text/primary) and the text "›" (U+203A) in text/secondary.

Row 1:
| Card title | Description | Links |
|---|---|---|
| Organization | Name, language and region, demo users | "Organization details", "Language and region" |
| Rooms & devices | Rooms, cameras, microphones, simulators, intercom | "Rooms", "Unassigned devices (2)", "Intercom announcements" |
| Recordings & privacy | Storage, retention, transcription, what learners see | "Storage and retention", "What learners see" |

Row 2:
| Card title | Description | Links |
|---|---|---|
| Sign-in & security | Passwords, directory (LDAP/SSO), certificates | "Password rules", "Directory" |
| Email | Sender addresses, templates, mail server | "Templates", "Mail server" |
| Integrations | Calendar feed, Ehli AI | "Calendar feed", "Ehli AI" |

- Delete "TEMP badge".

Check before you report:
- The Section is 7960 × 1180. Frames from left to right, all at y 120 and 1440 × 900: "AVs · Settings home" x 80, "AV0 · Rooms" x 1640, "AV0b · Rooms, with settings tabs" x 3200, "AV1 · Room devices" x 4760, "AV2 · Device detail" x 6320. Each has its label at y 76 and caption at y 1044 at its own x.
- "Content" is white in all five frames. Every card still has its border.
- AV0: "Assign" is a Secondary button, centred vertically in its card.
- AV0b: "Content" has five children: Breadcrumb, Settings tabs, Page header, Card · Unassigned devices, Card · Rooms. Six tabs, "Rooms & devices" active.
- AVs: "Content" has two children: Page header, Cards. Six cards in two rows of three. One badge, on the Rooms & devices card. No breadcrumb, no visible header button.
- Nothing overflows any 1440 × 900 frame and no text is clipped.
- "TEMP badge" is gone. Nothing changed in Section 1343:3275. The annotation on AV0's "Content" still exists.

Report: new IDs, anything you could not do exactly as written, "Component gaps", and one screenshot of each of the five frames.
```

## After these run

- Claude reviews both frames in Figma (read-only) and writes a fix section here if needed.
- Likely follow-ups: an idle state for the camera tile, a real Table row component, a health badge component. These belong to the component round after the workshop.
