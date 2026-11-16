# 11-16 · Room readiness sketches (Check this room, Device problem, Ready to record)

Three greyscale wireframe sketches for the workshop on 11-17/18. They illustrate the diagnosis and readiness layer on top of AV device management. The requirements are RD-1 to RD-8 in the vault page `wiki/work/essentials-2.0-concept-room-readiness.md`. They extend AV-8 and AV-9 in `wiki/work/essentials-2.0-av-device-management.md`. They are discussion sketches, not final designs.

## Context

- The scope area "AV diagnosis, monitoring & room readiness" is rated Conceptual. Health is shown where the room is shown (AV-9), so there is no diagnostics page. The sketches add three screens next to the existing AV sketches.
- RR1, **Room check, results**, shows: the result of "Check this room" for Sim Room 2, one result per device, plain fix text for the device that failed, and the actions "Check again" and "Report a problem".
- RR2, **Device problem**, shows: the device page of the missing patient monitor capture with what is wrong, what to try, and when it was last seen.
- RR3, **Ready to record, with a room warning**, shows: the ready-to-record screen with a room warning that has a fix and does not block recording.
- Sample data matches the AV sketches: Sim Room 2, Riverbend College of Nursing. Devices: Overhead camera (PTZ camera, AXIS M5525), Foot camera (Fixed camera), Patient monitor capture (Capture unit, not found, last seen 10 Nov, 14:32), Audio kit (Microphone and speaker).

## What I found in the file (11-15, read-only)

- Page "👤 SRV flow [D]" `960:51213` has two Sections and one text: "SRV flow · Recording" `1343:3275` (x 0, y 0, 14080 × 1220), "AV setup · Sketches" `1559:8318` (x 0, y 1500, 7960 × 1180), and the text "Title · SRV flow" `1347:8395` (x 0, y -80). Nothing is on the page below y 2680, so the new Section at y 6000 is free. The stray screenshot `1620:5127` from the 11-13 notes is no longer on the page.
- Source frames, all 1440 wide:
  - "AV1 · Room devices" `1559:8319`, 900 high. Layers (names are exact): "TopNav" `1559:8320`; "Body" `1559:8321` with "SideNav" `1559:8322` and "Content" `1559:8323`. In "Content": "Breadcrumb" `1582:8083` (texts "Settings", "Separator", "Rooms", "Separator", "Sim Room 2"), "Page header" `1559:8324` (text "Greeting" `1559:8325`, instance "Text · Tuesday, January 19" `1559:8326`, instance "Button · Customize" `1559:8327`), "Card · Readiness" `1560:7914` (instance "Badge · Needs attention" `1560:7915`, text "Readiness text" `1560:7918`), "Card · Devices" `1560:7926`. In "Card · Devices": "Devices header" `1560:7927`, "Columns header" `1560:7930`, "Row · Overhead camera" `1560:7940`, "Row · Foot camera" `1560:7956`, "Row · Patient monitor capture" `1560:7969` (72 high), "Row · Audio kit" `1560:7983`, "Assign row" `1560:7996`. Cells in each row: "Cell · Device" (420 wide), "Cell · Kind" (220), "Cell · Status" (220), "Cell · Audio from" (180), "Cell · Actions" (44). Content height is 852 and its content ends at y 608 plus 24 padding.
  - "AV2 · Device detail" `1564:8094`, 900 high. In "Content": "Breadcrumb" `1582:8089`, "Page header" `1564:8099` (instance "Button · Customize" `1564:8102`), "Columns" `1564:8336` (675 high) with "Main column" `1564:8337` (720 wide: "Card · Live picture" `1564:8364`, "Card · Saved views" `1564:8378`) and "Side column" `1564:8351` (388 wide: "Card · Details" `1564:8460`, "Card · Advanced" `1564:8486`). The page had only 9 px of spare height. This sketch removes the 387 px camera tile, so there is room.
  - "S1 · Ready to record" `1343:4038`, 948 high (not 900). Layers: "TopNav" `1343:4039`, "Shell row" `1343:4040` with "SideNav" `1343:4041` and "Main" `1343:4042` (x 48, 1392 × 900). In "Main": instance "Header" `1343:4043` (64 high; its slot "Center Content" is 183 × 32 at x 604.5, empty; its slot "End Content" holds instance "SRV / Header actions" `1347:8387` with "Button · Layout & audio", "Button · Report a problem" `468:13139`, "Button · 4 learners") and "Body" `1343:4044`. "Body" holds "Camera area" `1343:4045` (camera grid `1343:4744`, timeline `1343:4887`, annotation input `1343:4775`, intercom strip `1343:4822`) and "SRV / Side panel" `1347:8173`. There is no spare height in the camera area.
- Existing labels and captions to clone: "Label · AV1" `1560:8021` (x 4760, y 76, 124 × 20) and "Caption · AV1" `1560:8022` (x 4760, y 1044, 1440 × 40) in Section `1559:8318`. For a 948-high frame the caption sits at y 1092, as "Caption · S1" `1347:8394` does.
- Existing badges are instances, named "Badge · <label>": Needs attention (Warning) `1560:7915`, Primary (Neutral) `1560:7943`, Working (Success) `1560:7949`, Not found (Error) `1560:7975`. Clone these. Do not import the Astryx component again.
- Muted text to clone: "Last seen 10 Nov, 14:32" `1560:7978`. Label-style text to clone: "+ Assign a device" `1560:7997`. Body text to clone: "Capture unit" `1560:7973`. Card title text to clone: "Devices in this room" `1560:7928`.
- Old concepts that these frames build on: "Card / Hardware check" `2:344` on page "Wireframe (D)" `0:1` (dashboard count of faulty devices), "B1 · Camera not recording" `461:22285` on the Drafts page (fix text under a tile with no signal), "S3 · Rooms & devices" in file `maOZqRuLdksiPwUA43qSVI`. They are read-only references. Do not touch them.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | A new Section "Room readiness · Sketches" at x 0, y 6000 on the SRV flow page, 4840 × 1220. Metadata on 11-15 showed nothing below y 2680, so y 6000 is free |
| Slots | Same pattern as the AV sketches: frames at x 80, x 1640, x 3200 (1440 frame plus 120 gap, so the pitch is 1560), y 120. Label at y 76, caption at y 1044 (RR3: y 1092) |
| RR1 layout | Clone of AV1. The device table is reused with new column meanings: Device, What we checked, Result. "Audio from" and the "⋯" column go away |
| Six checks | Overhead camera, Foot camera, Patient monitor capture, Audio kit, Intercom, Recording service. Five pass, one fails. This matches "Sim Room 2 needs attention, 1 device not found" in AV0 |
| Header buttons | RR1 has two: "Assign a device" (kept from AV1) and "Check again" next to it. The label before any check is "Check this room". That state has no frame |
| RR2 | Clone of AV2. The live picture card becomes "What is wrong". Saved views become "Last known state". Role row is deleted because only cameras can be primary |
| RR3 warning | A floating card under a chip in the header, not a banner, because the camera area has no spare height and the frame must stay 948 high. It does not block recording: the Start recording button is not touched |
| Sample values | "00408C7B21D3" (serial) and "10.0.4.25" (address) are made up for the sketch. Last seen "10 Nov, 14:32" and the check time "09:41" are the same in all frames |
| Badge colours | Green, yellow and red stay, as in the AV sketches |

## Gaps I expect in Cursor's report

- In RR1 the status cells may not be auto-layout. The rule says to set auto-layout where it is missing.
- The "Page header" in AV1 may not be auto-layout, so the second header button has to be placed by x.
- The "Center Content" slot of the S1 header may refuse a child. Then the chip cannot be placed. The run must report it and still build the warning card.
- The warning card in RR3 is absolute-positioned inside "Main". This depends on "Main" having auto-layout.
- S1 shows four camera tiles in Sim Room 2, but the AV sketches say two cameras and one capture unit. RR3 does not change the grid. This is a known mismatch, not a bug in the run.
- The cloned "Button · Customize" may have an icon that is hidden. Keep it hidden.

## How to run

All runs: **Claude Sonnet 5.5 · High**. One new Cursor chat per run. Run them one after the other, in this order, because RR1 creates the Section.

1. **RR1 · Room check, results.** Model and effort: Claude Sonnet 5.5 · High.
   `Read @wireframe-benchmark/reviews/11-16-room-readiness.md. Apply "Shared rules", then run ONLY section "RR1 · Room check, results".`
2. **Tell Claude when RR1 is done.** Claude checks the frame in Figma.
3. **RR2 · Device problem.** Model and effort: Claude Sonnet 5.5 · High.
   `Read @wireframe-benchmark/reviews/11-16-room-readiness.md. Apply "Shared rules", then run ONLY section "RR2 · Device problem".`
4. **RR3 · Ready to record, with a room warning.** Model and effort: Claude Sonnet 5.5 · High.
   `Read @wireframe-benchmark/reviews/11-16-room-readiness.md. Apply "Shared rules", then run ONLY section "RR3 · Ready to record, with a room warning".`

After each run, check that the frame really exists in Figma. Cursor has once reported success without writing anything.

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Target page "👤 SRV flow [D]" (960:51213). Library page "⚙️ Components (D)" (675:31351).

Where you may write:
- Only on page "👤 SRV flow [D]", and only inside the Section "Room readiness · Sketches" that section RR1 creates.
- Never change, move or delete anything in the existing Sections "SRV flow · Recording" (1343:3275) and "AV setup · Sketches" (1559:8318), or in the text "Title · SRV flow" (1347:8395). You clone out of them. A clone of a node is new and may be edited. The original may not.
- "⚙️ Components (D)", the Drafts page and every "(G)" page are read-only. You may create instances of their components. Never edit a main component, add a variant, or rename, move or delete anything on those pages.

IDs and clones:
- IDs in this file refer to the source nodes. A clone has new IDs. Inside a clone, always find layers by their exact name.
- If a source ID is not found, find the source by its exact name. If neither works, stop and report.

How to change an instance:
- Only through variant properties, exposed properties, text overrides and layer visibility. Never detach an instance.
- When a step says "if this is not possible, report it", don't build a workaround. Leave the instance as it is and add one line to "Component gaps" in your report: frame, component, what is missing.

Style:
- Greyscale only, including image fills. The status badges keep their green, yellow and red because they are existing instances.
- Font Figtree. Use only variables that the source frames already use. No hard-coded colours, sizes or radii. The ones you need:
  - Text colours: text/primary, text/secondary.
  - Surfaces and borders: surface/card (card fill), border/default (card border and row dividers).
  - Radius: radius/container (cards), radius/element-10 (buttons), radius/full (badges).
  - Spacing: spacing/1 to spacing/6 (4 to 24 px).
- Text styles. Don't make new ones. Copy them by cloning a text layer from the same frame:
  - Card title: Bold 14 px. Clone "Devices in this room" (in AV1 "Devices header").
  - Body: Regular 14 px, line height 20 px, text/primary. Clone "Capture unit" (in AV1 "Row · Patient monitor capture", "Cell · Kind").
  - Muted: Regular 12 px, text/secondary. Clone "Last seen 10 Nov, 14:32" (same row, "Cell · Status").
  - Label: Medium 14 px, text/primary. Clone "+ Assign a device" (in AV1 "Assign row").
- Every new frame uses auto-layout, except where a step says "absolute".
- A "card" in this file means: a frame with auto-layout vertical, fill surface/card, 1 px inside stroke border/default, corner radius radius/container, clip content on. Padding and gap are given in each step.

Badges:
- Never draw a badge and never import the Astryx Badge again. Clone an existing badge instance from the frame "AV1 · Room devices" (1559:8319) and change only its label text:
  - Warning: "Badge · Needs attention" (in "Card · Readiness").
  - Success: "Badge · Working" (in "Row · Overhead camera", "Cell · Status").
  - Error: "Badge · Not found" (in "Row · Patient monitor capture", "Cell · Status").
  - Neutral: "Badge · Primary" (in "Row · Overhead camera", "Cell · Device").
- If a clone cannot be moved into the target frame, report it under "Component gaps".

Buttons:
- Never draw a button. Clone the Button instance named "Button · Customize" from the "Page header" of the frame you are building, or, in RR3, the buttons in "SRV / Header actions". Change only the label text and the visibility of its "Icon" layer. The "Icon" layer of "Button · Customize" stays hidden.

Section "Room readiness · Sketches":
- A Section on page 960:51213 at x 0, y 6000. Size 4840 × 1220.
- Three slots in one row. The frame of slot n sits at x = 80 + (n - 1) × 1560, y = 120, relative to the Section. Slot 1 = RR1 (x 80), slot 2 = RR2 (x 1640), slot 3 = RR3 (x 3200). Each frame keeps the size of its source (RR1 and RR2: 1440 × 900, RR3: 1440 × 948) with clip content on.
- Label: 44 px above the frame (y 76), left-aligned with it. Make it by cloning "Label · AV1" (1560:8021) from Section 1559:8318, then set its text to the new frame's exact name and name the layer "Label · <frame code>" (for example "Label · RR1").
- Caption: below the frame, left-aligned with it, 1440 px wide. Make it by cloning "Caption · AV1" (1560:8022) from Section 1559:8318 and set its y: 1044 for RR1 and RR2, 1092 for RR3. Name it "Caption · <frame code>". Set the two lines given in each section.

Report when done: the new frame IDs, the "Component gaps" list, and every step you could not do exactly as written. Then take a screenshot of the frame you built.
```

## RR1 · Room check, results

```
Goal: one frame "RR1 · Room check, results" in slot 1 of a new Section.

1 · Section
- On page 960:51213, look at every top-level node. If any of them reaches into y 5900 to y 7300, stop and report. (On 11-15 nothing sat below y 2680.)
- If a Section named "Room readiness · Sketches" already exists on the page, stop and report.
- Create the Section "Room readiness · Sketches" as described in the Shared rules: x 0, y 6000, 4840 × 1220.

2 · Clone
- Clone "AV1 · Room devices" (1559:8319) into the new Section. Place it at x 80, y 120. Rename the clone "RR1 · Room check, results".
- Clone "Label · AV1" (1560:8021) into the Section at x 80, y 76. Rename it "Label · RR1". Text: "RR1 · Room check, results".
- Clone "Caption · AV1" (1560:8022) into the Section at x 80, y 1044. Rename it "Caption · RR1". Text, two lines:
  "Facilitator or sim technician: presses Check this room before a session and reads one result per device."
  "System: tested every device in the room, flags the capture unit it could not find, and says what to try."
- Don't change the original "AV1 · Room devices".

Everything below happens inside "RR1 · Room check, results". Find layers by name.

3 · Page header
In "Content", find "Page header".
- Text "Greeting": "Sim Room 2" (it already says this).
- Instance "Text · Tuesday, January 19": set its text to "Room check finished today at 09:41. Nothing was changed in the room."
- Instance "Button · Customize": set its label to "Check again". Keep its style and its right edge at x 1132 inside "Page header".
- Clone this button. In the clone set the label to "Assign a device". Place the clone 8 px to the left of the original, same y. If "Page header" is not auto-layout, set the x of the clone to (x of the original − 8 − width of the clone).
- Name the original "Button · Check again" and the clone "Button · Assign a device".

4 · Card "Readiness"
In "Card · Readiness":
- Keep the badge "Badge · Needs attention".
- Text "Readiness text": "5 of 6 checks passed. This room can record, but without the patient monitor."

5 · Card "Devices"
In "Card · Devices". Don't rename the card.

5a · Devices header
- Text "Devices in this room": "Check result".
- Text "4 devices · 1 not found": "6 checks · 1 failed".

5b · Columns header
- Text "Kind": "What we checked".
- Text "Status": "Result".
- Delete the frames "Cell · Audio from" and "Cell · Actions".
- Set the widths of the remaining cells to: "Cell · Device" 280, "Cell · Kind" 300, "Cell · Status" 502. (Total 1082 = 1130 minus 24 padding on each side.)

5c · Rows
In every row ("Row · Overhead camera", "Row · Foot camera", "Row · Patient monitor capture", "Row · Audio kit"): delete "Cell · Audio from" and "Cell · Actions", and set the cell widths to 280, 300 and 502 as in 5b.

For the Status cell of rows 1, 2 and 4 (and the two new rows 5 and 6): if "Cell · Status" is not auto-layout horizontal, make it auto-layout horizontal, gap spacing/2 (8), vertically centred. Then add, after the badge, a muted text (clone "Last seen 10 Nov, 14:32" from "Row · Patient monitor capture" BEFORE you edit that row; keep the clone as a spare until all rows are done).

Row 1, "Row · Overhead camera" (56 high):
- Cell · Device: unchanged (name and "Badge · Primary").
- Cell · Kind: text "Camera picture".
- Cell · Status: "Badge · Working" stays; muted text: "Picture received".

Row 2, "Row · Foot camera" (56 high):
- Cell · Device: unchanged.
- Cell · Kind: text "Camera picture".
- Cell · Status: "Badge · Working" stays; muted text: "Picture received".

Row 3, "Row · Patient monitor capture" (set the height to 112, auto-layout, cells vertically centred):
- Cell · Device: unchanged ("Patient monitor capture").
- Cell · Kind: text "Capture picture". Before you change this text, clone the text layer "Capture unit" and keep the clone as the spare body text.
- Cell · Status: auto-layout vertical, gap spacing/1 (4), width 502. Children in this order:
  1. "Badge · Not found" (keep).
  2. A body text, fill width: "Camera not found. Check the network cable, then press Check again." (clone of the spare body text)
  3. The muted text "Last seen 10 Nov, 14:32" (keep).
  4. A new frame "Fix actions": auto-layout horizontal, gap spacing/4 (16), hug. It holds two label-style texts (clones of "+ Assign a device" from "Assign row"): "Check again" and "Report a problem".

Row 4, "Row · Audio kit" (56 high):
- Cell · Device: unchanged.
- Cell · Kind: text "Microphone level and speaker test tone".
- Cell · Status: "Badge · Working" stays; muted text: "Microphone level is good. Speaker plays the test tone."

Row 5, new. Clone "Row · Audio kit" and place it after it. Rename "Row · Intercom". 56 high.
- Cell · Device: text "Intercom".
- Cell · Kind: text "In-room and facilitator intercom".
- Cell · Status: "Badge · Working" and muted text "Intercom answers".

Row 6, new. Clone "Row · Audio kit" again and place it after "Row · Intercom". Rename "Row · Recording service". 56 high.
- Cell · Device: text "Recording service".
- Cell · Kind: text "Storage and recording service".
- Cell · Status: "Badge · Working" and muted text "Ready to record".

Row order in the card: Overhead camera, Foot camera, Patient monitor capture, Audio kit, Intercom, Recording service. Then delete the spare clones.

5d · Footer
- Rename "Assign row" to "Check footer". Keep height 52.
- First text "+ Assign a device": "Check again".
- Second text (muted): "A check does not change any setting."

6 · Label and caption
Done in step 2.

Check before you report:
- The Section "Room readiness · Sketches" exists at x 0, y 6000, 4840 × 1220. Nothing in Sections 1343:3275 and 1559:8318 has changed.
- "RR1 · Room check, results" is 1440 × 900 at x 80, y 120 in the new Section. Its label is at y 76 and its caption at y 1044.
- "Content" has exactly four children: "Breadcrumb", "Page header", "Card · Readiness", "Card · Devices".
- "Card · Devices" has nine children: Devices header, Columns header, six rows, Check footer.
- Eight badges exist: 1 Needs attention, 1 Primary, 5 Working, 1 Not found. All are instances.
- "Page header" has two buttons: "Button · Check again" with its right edge at x 1132, and "Button · Assign a device" to its left.
- No text is clipped and nothing goes below y 876 of the 900 px frame.
- Take a screenshot of the frame.
```

## RR2 · Device problem

```
Goal: one frame "RR2 · Device problem" in slot 2 of the Section "Room readiness · Sketches". Run this only after RR1 has been checked.

1 · Clone
- Find the Section "Room readiness · Sketches". If it doesn't exist, stop and report.
- Clone "AV2 · Device detail" (1564:8094) into that Section. Place it at x 1640, y 120. Rename the clone "RR2 · Device problem".
- Clone "Label · AV1" (1560:8021) to x 1640, y 76. Rename it "Label · RR2". Text: "RR2 · Device problem".
- Clone "Caption · AV1" (1560:8022) to x 1640, y 1044. Rename it "Caption · RR2". Text, two lines:
  "Sim technician: opens the missing capture unit from the room check and follows the steps."
  "System: says what is wrong, what to try, and when the device was last seen. Technical settings stay closed."
- Don't change the original "AV2 · Device detail".

Everything below happens inside "RR2 · Device problem". Find layers by name.

2 · Spare badge
Before you delete anything: clone "Badge · Not found" from "AV1 · Room devices" (1559:8319, "Row · Patient monitor capture", "Cell · Status") into a temporary frame named "TEMP badge" inside the Section at x 80, y 1300. Delete "TEMP badge" at the end of the run.

3 · Breadcrumb
In "Breadcrumb", change the last text "Overhead camera" to "Patient monitor capture". Everything else stays.

4 · Page header
- Text "Greeting": "Patient monitor capture".
- Instance "Text · Tuesday, January 19": "Capture unit · Not found since 10 Nov, 14:32".
- Button "Button · Customize" ("Remove from room"): unchanged. Keep its right edge at x 1132.

5 · Main column: card "What is wrong"
Rename "Card · Live picture" to "Card · What is wrong". It is auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12), width fill (720).
- In "Live picture header": the text "Live picture" becomes "What is wrong". Delete "Badge · Working" and put a clone of the spare Error badge in its place, label "Not found", as the second child (right side).
- Delete the instance "Camera tile".
- Add these children after "Live picture header", in this order:
  1. A body text, fill width: "The system can't reach this device. Sim Room 2 can still record, without the patient monitor."
  2. A text, card title style: "What to try".
  3. A frame "Steps": auto-layout vertical, gap spacing/1 (4), fill width. Three body texts:
     "1. Check that the capture unit has power."
     "2. Check the network cable at the unit and at the network switch."
     "3. Press Check again."
  4. A frame "Actions": auto-layout horizontal, gap spacing/2 (8), hug. Two buttons, clones of "Button · Customize" from "Page header": labels "Check again" and "Report a problem". Icons stay hidden.
  5. A muted text: "Last check: today, 09:41. Result: not found."
- If the old text "Click the picture to move the camera. Scroll to zoom." still exists in the card, delete it.

6 · Main column: card "Last known state"
Rename "Card · Saved views" to "Card · Last known state". Keep its structure (header row plus three rows).
- In "Saved views header": text "Saved views" becomes "Last known state". Text "+ Save current view" becomes "Check again".
- Rename the rows and set their two texts. The right text is label style and keeps its right edge at x 694 inside the row (the row is 718 wide with 24 px padding):
  - "Row · Far view" becomes "Row · Last seen": left "Last seen", right "10 Nov, 14:32".
  - "Row · Patient monitor" becomes "Row · Last check": left "Last check", right "Today, 09:41, not found".
  - "Row · Bedside" becomes "Row · Address": left "Address", right "10.0.4.25".

7 · Side column: card "Details"
In "Card · Details":
- "Row · Name": value "Patient monitor capture".
- "Row · Kind": value "Capture unit".
- "Row · Room": unchanged ("Sim Room 2", "Change").
- "Row · Role": delete the whole row (only cameras can be primary).
- "Row · Audio from": value "No audio", "Change" stays.
- The last text (muted): "Serial 00408C7B21D3. A device belongs to one room."

8 · Side column: card "Advanced"
In "Card · Advanced": the muted text becomes "Video size and picture quality. The defaults work for most rooms." Everything else stays.

9 · Clean up
Delete "TEMP badge".

Check before you report:
- "AV2 · Device detail" is unchanged. "RR2 · Device problem" is 1440 × 900 at x 1640, y 120 in the Section. Label at y 76, caption at y 1044.
- "Content" has exactly three children: "Breadcrumb", "Page header", "Columns".
- "Main column" holds "Card · What is wrong" and "Card · Last known state". "Side column" holds "Card · Details" and "Card · Advanced".
- "Card · What is wrong" has no camera tile. Its badge reads "Not found" and is an instance.
- "Card · Details" has four rows plus the serial line.
- No text is clipped. The lowest element ends above y 876 of the 900 px frame. If anything goes lower, report the overflow in px and don't shrink anything.
- "TEMP badge" is gone. Nothing changed in Sections 1343:3275 and 1559:8318.
- Take a screenshot of the frame.
```

## RR3 · Ready to record, with a room warning

```
Goal: one frame "RR3 · Ready to record, with a room warning" in slot 3 of the Section "Room readiness · Sketches". Run this only after RR1 exists.

1 · Clone
- Find the Section "Room readiness · Sketches". If it doesn't exist, stop and report.
- Clone "S1 · Ready to record" (1343:4038, 1440 × 948) from Section 1343:3275 into the new Section. Place it at x 3200, y 120. Rename the clone "RR3 · Ready to record, with a room warning". It stays 1440 × 948.
- Clone "Label · AV1" (1560:8021) to x 3200, y 76. Rename it "Label · RR3". Text: "RR3 · Ready to record, with a room warning".
- Clone "Caption · AV1" (1560:8022) to x 3200, y 1092. Rename it "Caption · RR3". Text, two lines:
  "Facilitator: opens the room to record and sees that one device is missing. The warning says how to fix it and does not stop recording."
  "System: shows the room's live health when the screen opens. The patient monitor capture is not found. Start recording still works."
- Don't change the original S1 or anything else in Section 1343:3275.

Everything below happens inside "RR3 · Ready to record, with a room warning". Find layers by name. Don't change the camera grid, the timeline, the side panel or the intercom strip.

2 · Spare badge and buttons
Clone "Badge · Needs attention" from "AV1 · Room devices" (1559:8319, "Card · Readiness") into a temporary frame named "TEMP badge" inside the Section at x 80, y 1300. You will use clones of it below. Delete "TEMP badge" at the end.

3 · Header chip
- Find the instance "Header" in "Main", then its slot "Center Content" (about 183 × 32).
- Put one clone of the spare Warning badge in that slot. Label: "1 device not found". Name the clone "Badge · Room warning".
- If the slot does not accept a child, report it under "Component gaps" and continue with step 4.

4 · Card "Room warning"
Add a card as a child of the frame "Main". Name: "Card · Room warning". Make it absolute: layout positioning absolute, so it floats over the camera area and does not move anything. Position inside "Main": x 520, y 68. Width 480. Height hug. Auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12). Put it above everything else in the layer order of "Main".
Children, in this order:
1. Frame "Title row": auto-layout horizontal, gap spacing/3 (12), vertically centred. A clone of the spare Warning badge (label "Needs attention") and a text, card title style: "Sim Room 2 is not fully ready".
2. A body text, fill width: "The patient monitor capture has not been found since 10 Nov, 14:32. You can still record with the other devices."
3. A muted text, fill width: "What to try: check its power and its network cable."
4. Frame "Actions": auto-layout horizontal, gap spacing/2 (8), hug. Two buttons:
   - A clone of the instance "Button · Layout & audio" (in "SRV / Header actions"). Label "Check this room". Hide its "Icon" layer.
   - A clone of the instance "Button · Report a problem" (in "SRV / Header actions"). Label unchanged. Keep its icon visible.
   Name them "Button · Check this room" and "Button · Report a problem".
If "Main" is not auto-layout, "absolute" does not apply: just place the card at the same x and y. Report which case it was.

5 · Clean up
Delete "TEMP badge".

Check before you report:
- "RR3 · Ready to record, with a room warning" is 1440 × 948 at x 3200, y 120 in the Section. Label at y 76, caption at y 1092.
- S1 `1343:4038` is unchanged.
- The camera grid, the timeline with "Start recording", the side panel and the intercom strip are as in S1.
- "Card · Room warning" floats over the upper part of the camera area. It is 480 wide. Its right edge is inside "Main". No text is clipped.
- The header chip reads "1 device not found". It is an instance. If it could not be placed, say so.
- Both buttons in the card are instances. Nothing was detached.
- "TEMP badge" is gone. Nothing changed in Sections 1343:3275 and 1559:8318.
- Take a screenshot of the frame.
```

## Prototype wiring (for later)

Not part of these runs. When the frames are checked, Claude writes a short prompt for the wiring. Click targets, all on click, navigate, instant:

| From | Click target | To |
|---|---|---|
| AV0 · Rooms `1603:10516` | Row "Sim Room 2" (shows "Needs attention") | AV1 `1559:8319` (already wired) |
| AV1 · Room devices `1559:8319` | A new button "Check this room" in "Page header" (to be added when wiring) | RR1 |
| RR1 | "Button · Check again", "Check again" in "Fix actions", "Check footer" | RR1 (same frame, no change; a real check is a later state) |
| RR1 | Row "Patient monitor capture" | RR2 |
| RR1 | "Report a problem" in "Fix actions" | The Report a problem dialog `1024:8738` (check which frame holds it before wiring) |
| RR1 | Breadcrumb "Sim Room 2" | AV1 `1559:8319` |
| RR2 | "Check again" in "Actions" and in "Card · Last known state" | RR1 |
| RR2 | "Report a problem" in "Actions" | The Report a problem dialog |
| RR2 | Breadcrumb "Sim Room 2" | AV1 `1559:8319` |
| RR3 | "Button · Check this room" in "Card · Room warning" | RR1 |
| RR3 | "Button · Report a problem" in "Card · Room warning" | The Report a problem dialog |
| RR3 | "Badge · Room warning" in the header | Shows or hides "Card · Room warning" (needs a second frame; skip if it costs too much) |
| AVs · Settings home `1625:9358` | Badge "1 room needs attention" on the Rooms & devices card | AV0 `1603:10516` (already wired) |

After these run, Claude reviews the three frames in Figma (read-only) and writes a fix section here if needed.
