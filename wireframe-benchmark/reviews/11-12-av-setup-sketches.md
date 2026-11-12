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

## After these run

- Claude reviews both frames in Figma (read-only) and writes a fix section here if needed.
- Likely follow-ups: an idle state for the camera tile, a real Table row component, a health badge component. These belong to the component round after the workshop.
