# 11-17 · Final round: room readiness (RR1 to RR7)

Topic T05 "Room readiness". The button "Check this room" on the room page (L8) has no result screen today. This file adds the result, the device that is not found, the warning in the room view, and "Report a problem". It builds a new Section and does not change any existing frame.

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. The concept and the requirement lines RD-1 to RD-8 are in the vault page `wiki/work/essentials-2.0-concept-room-readiness.md`.

## Context

- Coverage map row "AV diagnosis, monitoring & room readiness" is "Conceptual". The older prompt `11-16-room-readiness.md` was never run and is superseded (old shell, old page).
- The screen codes follow the concept page: RR1 results, RR2 device problem, RR3 room view warning. RR4 to RR7 are new.
- Run A is for the workshop on 11-17. Run B can wait until after the workshop.

## What I found in the file (11-16 evening, read-only)

- Page "🧭 One app · merge [D]" `1749:8314`. The last Section is "7 · Search (later, not MVP)" `1776:16712` at y 10400, 12640 × 1240. Nothing sits below y 11640.
- "L8 · Room, AV tab" `1752:19374` (1440 × 900). "Body" > "SideNav" + "Content" `1752:19378` (vertical, padding 24, gap 24). "Content" holds, in this order:
  - "Breadcrumb" (texts "Rooms", "/", "Sim Room 2").
  - "Page header" `1752:19383`: text "Greeting" ("Sim Room 2"), instance "Text · Tuesday, January 19" (sub text), and two absolute buttons: "Button · Check this room" `1752:19386` (Secondary, x 876, 128 wide) and "Button · Start recording" `1752:19609` (Primary, x 1012, 120 wide).
  - "Tabs" `1752:19584`: "Tab · Details" and "Tab · AV" (AV is active: bottom stroke 2, text/primary).
  - "Card · Cameras" `1752:19778`: "Devices header" (texts "Cameras" and "3 cameras · 1 not found"), "Columns header" (cells "Cell · Device" 360, "Cell · Kind" 260, "Cell · Status" 220, "Cell · Last seen" 242), then "Row · Overhead camera", "Row · Foot camera", "Row · Patient monitor capture". Every row is 56 high, fixed, with a 1 px top stroke, and has the same four cells.
  - "Card · Audio" `1752:19843`: same structure, one row "Row · Audio kit" `1752:19892`.
  - "Button · Add device" `1752:19906`.
- L8 has no readiness line. The older frame "AV1 · Room devices" has one: "Card · Readiness" `1560:7914` on the page "👤 SRV flow [D]" (1132 × 54, horizontal, padding 16, gap 12: instance "Badge · Needs attention" and text "Readiness text").
- "L9 · Camera, opened from a room" `1752:33497`. "Content" > "Breadcrumb" (5 children), "Page header" (with absolute "Button · Remove from room" `1752:33509`), "Columns" `1752:33717` with "Main column" (720 wide: "Card · Live picture" `1752:33719`, "Card · Saved views" `1752:33724`) and "Side column" (388 wide: "Card · Move camera" `1752:33798`, "Card · Details" `1752:33738`, "Card · Advanced" `1752:33760`).
- "L4 · Room view" `1752:40197` (1440 × 900). "Shell row" > "SideNav" (48 wide rail) + "Main" `1752:40201` (1392 × 900, vertical). "Main" > instance "Header" `1752:40202` (64 high, slots "Start Content", "Center Content" (empty, 183 × 32), "End Content" with the instance "SRV / Header actions") and "Body" `1752:40203`. "Body" > "Camera area" (1012 wide: "Camera content" with "SRV / Camera grid" `1752:40206` Layout "1 + 2", "CUSTOM · Live timeline" `1752:40207`, "SRV / Annotation input"; then "SRV / Intercom strip") and "SRV / Side panel" (380 wide).
- Component properties (read from the file):
  - Badge: "Variant" = Neutral, Info, Success, Warning, Error. Text property "Label".
  - Button: "Variant" = Primary, Secondary, Ghost, Destructive. "State" = Rest, Hover, Pressed, Disabled, Focused, Loading. Text property "Label".
  - "SRV / Header actions": "State" = Default, Camera warning, Open, Debrief. "Camera warning" adds a red dot on "Layout & audio".
  - "SRV / Camera tile": "State" = Recording, Not recording. "Not recording" is the "No signal" picture. Text property "Name".
  - "SRV / Recording button": "State" = Ready, Stopped, Recording.
- The ready state of the timeline exists in "S1 · Ready to record": frame "CUSTOM · Live timeline" `1343:4887` (980 × 60; recording button in State Ready, "00:00", empty track).
- "SRV / Report a problem" `1024:8740` is a component on "⚙️ Components (D)", 480 × 677. Its sub text reads "Your answer helps us improve LearningSpace." That word is allowed.
- The dim layer "Dim" `1360:9294` is in "S8 · Stop confirmation" (black, 50 %).
- Text styles to clone, all in L8: card title Bold 14 "Cameras" `1752:19780`; body Regular 14 "PTZ camera" `1752:19797`; muted Regular 12 "3 cameras · 1 not found" `1752:19781`; link style Medium 14 "Overhead camera" `1752:19794`.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "8 · Room readiness" at x 0, y 11900, 12640 × 1240. L7, L8 and L9 are not touched |
| Result of "Check this room" | The same room page, AV tab. While the result is shown, one list "Check result" replaces the two device lists. "Back to the device list" returns to L8 |
| Six checks | Overhead camera, Foot camera, Patient monitor capture, Audio kit, Intercom, Recording service. Five pass, one fails. This matches "Sim Room 2, 1 device not found" |
| Readiness line | A card with one badge and one sentence on top of the tab content (RD-1). It is cloned from the older "AV1" frame |
| Failed row | Fix text in plain words, then three links: "Check again", "Open device", "Report a problem" (RD-4) |
| Device page | Clone of L9. No live picture and no camera controls, because the device is not found. "What is wrong", "What to try", "Last known state" (RD-5) |
| Room view | The warning is a floating card over the cameras. It does not block "Start recording" (RD-6). The third tile shows "No signal" |
| Report a problem | The existing component "SRV / Report a problem", as a dialog over the page. The same dialog serves the room view |
| Sample values | Last seen "10 Nov, 14:32". Check time "09:41". Serial "00408C7B21D3" and address "10.0.4.25" are made up |
| Not drawn | An automatic check before each event with a notification (RD-9). It is a later step |

## Open questions for the workshop

- Can the video layer test a camera picture, a microphone level and a speaker tone on request? How long does a check take?
- A camera that is found but shows no picture: is it "Working" or "Not found"? Do we need a third state?
- Who gets "Report a problem": the customer's sim technician or Elevate support?
- Should a room that needs attention block recording, for example "no recording without the primary camera"?

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line. Nothing else may write in Section "8 · Room readiness" at the same time. Other final-round files that write in other Sections may run in parallel.

Run A (for the workshop). Check the result with Claude before Run B.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-room-readiness.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RR rules" from the second file. Then run these sections of the second file, in this order: "A1 · Section and RR1", "A2 · RR2 device not found", "A3 · RR3 room view warning". After each section, run its check list and take a screenshot before you start the next section.`

Run B (after the workshop, or tonight if there is time). It needs the finished RR1.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-room-readiness.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "RR rules" from the second file. Then run these sections of the second file, in this order: "B1 · RR4 check running", "B2 · RR5 report a problem", "B3 · RR6 all checks passed". After each section, run its check list and take a screenshot before you start the next section.`

## RR rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Write only inside the Section "8 · Room readiness". Section A1 creates it. Never change any other Section or any frame in it. You may clone from them.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar.
- Never edit, rename or move anything on "⚙️ Components (D)" (675:31351) or "👤 SRV flow [D]" (960:51213). You may create instances of their components and clone placed nodes.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility.
- Never draw a badge or a button. Clone an existing one. To change a badge colour, set its property "Variant". To change a label, set the text property "Label" (or the text override).
- IDs refer to source nodes. Inside a clone, find layers by their exact name.
- Fonts: load the font of every text before you change it.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.

SLOTS in Section "8 · Room readiness" (frames at y 120, labels at y 76, captions at y 1044)
- Slot 1, x 80: "RR1 · Room check, results"
- Slot 2, x 1640: "RR2 · Device not found"
- Slot 3, x 3200: "RR3 · Room view, room warning"
- Slot 4, x 4760: "RR4 · Room check, running"
- Slot 5, x 6320: "RR5 · Report a problem"
- Slot 6, x 7880: "RR6 · Room check, all passed"
- Slots 7 and 8 stay empty.

LABEL AND CAPTION (every frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>" (for example "Label · RR1"). Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide. Name "Caption · <code>". Text: the two lines the section gives, with a line break between them.

TEXT SOURCES (clone, then change the characters)
- Card title, Bold 14: "Cameras" (1752:19780).
- Body, Regular 14: "PTZ camera" (1752:19797).
- Muted, Regular 12: "3 cameras · 1 not found" (1752:19781).
- Link, Medium 14: "Overhead camera" (1752:19794).
```

## A1 · Section and RR1

```
Goal: the new Section and one page screen "RR1 · Room check, results" in slot 1. It is "L8 · Room, AV tab" after the user pressed "Check this room".

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 11800 to y 13200 at x 0 to x 12640, stop and report.
2. If a Section named "8 · Room readiness" already exists, do not create a second one. Use it and report that it existed.
3. Create a Section. Name "8 · Room readiness". x 0, y 11900, size 12640 × 1240. Copy the fills of Section "5 · Import" (1749:8320).

STEP 2 · Clone
1. Clone "L8 · Room, AV tab" (1752:19374) into the new Section at x 80, y 120. Name the clone "RR1 · Room check, results". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change L8.

STEP 3 · Page header
1. In "Page header", instance "Text · Tuesday, January 19": set its text to "Checked today at 09:41. A check does not change any setting."
2. Instance "Button · Check this room": set the label to "Check again". Rename the layer "Button · Check again". It is absolute. After the label change, set its x so that its right edge is 8 px left of "Button · Start recording" (x = 1012 − 8 − its new width). Keep y 0.

STEP 4 · Readiness card
1. Clone "Card · Readiness" (1560:7914) from the page "👤 SRV flow [D]". Put the clone in "Content" as the fourth child: after "Tabs", before "Card · Cameras". Width fill. Keep its name.
2. The badge "Badge · Needs attention" stays (Variant Warning, label "Needs attention").
3. Text "Readiness text": "5 of 6 checks passed. This room can record, but without the patient monitor capture."

STEP 5 · One result list
1. Move "Row · Audio kit" from "Card · Audio" into "Card · Cameras", as the last child.
2. Delete "Card · Audio" and "Button · Add device".
3. Rename "Card · Cameras" to "Card · Check result".
4. In "Devices header": text "Cameras" becomes "Check result". Text "3 cameras · 1 not found" becomes "6 checks · 1 failed".
5. In "Columns header": text "Kind" becomes "What we checked". Text "Status" becomes "Result". Text "Last seen" becomes "Details".
6. Clone "Row · Audio kit" twice and put both clones after it. Name them "Row · Intercom" and "Row · Recording service".
7. Row order in the card now: "Devices header", "Columns header", "Row · Overhead camera", "Row · Foot camera", "Row · Patient monitor capture", "Row · Audio kit", "Row · Intercom", "Row · Recording service".
8. In "Columns header" and in all six rows, set the cell widths: "Cell · Device" 300, "Cell · Kind" 240, "Cell · Status" 120, "Cell · Last seen" 422. (Total 1082.)

STEP 6 · Row texts
Set the texts in each row. "Device" is the text in "Cell · Device", "Checked" the text in "Cell · Kind", "Details" the text in "Cell · Last seen". The badge is in "Cell · Status".

| Row | Device | Checked | Badge | Details |
|---|---|---|---|---|
| Row · Overhead camera | Overhead camera (keep "Badge · Primary") | Camera picture | Working (keep) | Picture received |
| Row · Foot camera | Foot camera | Camera picture | Working (keep) | Picture received |
| Row · Patient monitor capture | Patient monitor capture | Capture picture | Not found (keep) | see STEP 7 |
| Row · Audio kit | Audio kit | Microphone level and speaker test tone | Working (keep) | Level is good. Test tone played. |
| Row · Intercom | Intercom | In-room and facilitator intercom | Working | Intercom answers |
| Row · Recording service | Recording service | Storage and recording service | Working | Ready to record |

STEP 7 · The failed row
In "Row · Patient monitor capture":
1. Set the row height to hug. Padding top and bottom: spacing/4 (16). Align the cells to the top.
2. "Cell · Last seen": make it vertical auto-layout, gap spacing/1 (4), width fixed 422, height hug.
3. Its text ("10 Nov, 14:32"): set it to "Not found since 10 Nov, 14:32. Check its power and its network cable, then press Check again." Width fill, height auto (the text wraps to two lines).
4. Add a frame "Fix actions" under that text: auto-layout horizontal, gap spacing/4 (16), hug, no fill. It holds three link texts (clones of "Overhead camera" 1752:19794), in this order: "Check again", "Open device", "Report a problem". Name the layers "Link · Check again", "Link · Open device", "Link · Report a problem".

STEP 8 · Footer
1. Clone "Row · Recording service" and put the clone as the last child of "Card · Check result". Name it "Check footer".
2. In "Check footer": delete "Cell · Kind" and "Cell · Status". Delete the badge in "Cell · Device" if there is one.
3. Text in "Cell · Device": "Back to the device list". Text in "Cell · Last seen": "Report a problem".
4. Set "Cell · Device" to width fill. Set "Cell · Last seen" to width hug.

STEP 9 · Label and caption
1. Label "Label · RR1" at x 80, y 76: "RR1 · Room check, results".
2. Caption "Caption · RR1" at x 80, y 1044. Two lines:
   Line 1: "After "Check this room" on the room page. One result per device, in plain words. A failed check says what to try."
   Line 2: "The room can still record with the devices that work. "Open device" goes to RR2. "Report a problem" opens RR5."

CHECK
- The Section "8 · Room readiness" exists at x 0, y 11900, 12640 × 1240. No other Section changed.
- "RR1 · Room check, results" is 1440 × 900 at x 80, y 120. "L8 · Room, AV tab" is unchanged.
- "Content" has exactly five children: "Breadcrumb", "Page header", "Tabs", "Card · Readiness", "Card · Check result".
- "Card · Check result" has nine children: "Devices header", "Columns header", six rows, "Check footer".
- Badges: 1 "Needs attention", 1 "Primary", 5 "Working", 1 "Not found". All are instances.
- The two header buttons do not overlap. Their gap is 8.
- No text is clipped. The lowest element ends above y 876 of the frame. If anything goes lower, report the overflow in px and do not shrink anything.
- Take one screenshot of the frame.

REPORT
- The id of the Section and of "RR1 · Room check, results".
- "Component gaps": every step you skipped.
```

## A2 · RR2 device not found

```
Goal: one page screen "RR2 · Device not found" in slot 2. It is the device page of the capture unit that the check did not find.

STEP 1 · Clone
1. Clone "L9 · Camera, opened from a room" (1752:33497) into Section "8 · Room readiness" at x 1640, y 120. Name the clone "RR2 · Device not found". Keep 1440 × 900.
Everything below happens inside this clone. Do not change L9.

STEP 2 · Breadcrumb and header
1. "Breadcrumb": the last text "Overhead camera" becomes "Patient monitor capture". The other texts stay ("Rooms", "Sim Room 2").
2. "Page header": text "Greeting" becomes "Patient monitor capture".
3. Instance "Text · Tuesday, January 19": "Capture unit · Sim Room 2 · Not found since 10 Nov, 14:32".
4. "Button · Remove from room" stays.

STEP 3 · Card "What is wrong"
1. Rename "Card · Live picture" to "Card · What is wrong".
2. In "Live picture header": the text "Live picture" becomes "What is wrong". The badge "Badge · Working": set Variant to Error and the label to "Not found". Rename it "Badge · Not found".
3. Delete the frame "Live picture frame".
4. Add these children to the card after "Live picture header", in this order. The card is vertical with gap 12; keep that.
   a. Body text, width fill: "The system can't reach this device. Sim Room 2 can still record, without the patient monitor."
   b. Card title text: "What to try".
   c. Frame "Steps": auto-layout vertical, gap spacing/1 (4), width fill, no fill. Three body texts:
      "1. Check that the capture unit has power."
      "2. Check the network cable at the unit and at the network switch."
      "3. Press Check again."
   d. Frame "Actions": auto-layout horizontal, gap spacing/2 (8), hug, no fill. Two buttons, both clones of "Button · Remove from room" from this frame's "Page header". Set layout positioning of the clones to auto (not absolute). Labels "Check again" and "Report a problem". Names "Button · Check again" and "Button · Report a problem".
   e. Muted text: "Last check: today, 09:41. Result: not found."

STEP 4 · Card "Last known state"
1. Rename "Card · Saved views" to "Card · Last known state".
2. In "Saved views header": text "Saved views" becomes "Last known state". Delete the text "Save current view".
3. Rename the rows and set their two texts (left, right):
   - "Row · Bed" becomes "Row · Last seen": "Last seen", "10 Nov, 14:32".
   - "Row · Door" becomes "Row · Last check": "Last check", "Today, 09:41, not found".
   - "Row · Wide" becomes "Row · Address": "Address", "10.0.4.25".

STEP 5 · Side column
1. Delete "Card · Move camera".
2. In "Card · Details":
   - "Row · Kind": the value "PTZ camera" becomes "Capture unit".
   - "Row · Room": unchanged ("Sim Room 2", "Change").
   - Delete "Row · Role".
   - "Row · Audio from": the value "Audio kit" becomes "No audio". "Change" stays.
   - The last text becomes "Serial 00408C7B21D3. A device belongs to one room."
3. "Card · Advanced": unchanged.

STEP 6 · Label and caption
1. Label "Label · RR2" at x 1640, y 76: "RR2 · Device not found".
2. Caption "Caption · RR2" at x 1640, y 1044. Two lines:
   Line 1: "The device page of a device that is not found: what is wrong, what to try, when it was last seen."
   Line 2: "No live picture and no camera controls while the device is missing. Technical settings stay behind "Advanced settings"."

CHECK
- "RR2 · Device not found" is 1440 × 900 at x 1640, y 120. L9 is unchanged.
- "Main column" holds "Card · What is wrong" and "Card · Last known state". "Side column" holds "Card · Details" and "Card · Advanced".
- "Card · Details" has three rows plus the serial line.
- The two buttons in "Actions" sit next to each other inside the card. They are instances.
- No text is clipped. Take one screenshot of the frame.

REPORT
- The id of "RR2 · Device not found".
- "Component gaps": every step you skipped.
```

## A3 · RR3 room view warning

```
Goal: one room view screen "RR3 · Room view, room warning" in slot 3. The user opens Sim Room 2 to record. One device is missing. The warning says so and does not block recording.

STEP 1 · Clone
1. Clone "L4 · Room view" (1752:40197) into Section "8 · Room readiness" at x 3200, y 120. Name the clone "RR3 · Room view, room warning". Keep 1440 × 900.
Everything below happens inside this clone. Do not change L4.

STEP 2 · Ready state
1. In "Camera content", find "CUSTOM · Live timeline". Note its index. Delete it.
2. Clone "CUSTOM · Live timeline" (1343:4887) from "S1 · Ready to record" on the page "👤 SRV flow [D]". Insert the clone in "Camera content" at the same index (between "SRV / Camera grid" and "SRV / Annotation input"). Width fill.
3. Check: the instance "SRV / Recording button" in it has State "Ready" and the text "Elapsed" reads "00:00". If node 1343:4887 is not this timeline, stop and report.

STEP 3 · Missing camera
1. In the instance "SRV / Camera grid", find the nested tile instance "Camera 3". Set its property State to "Not recording". Set its text property "Name" to "Patient monitor".
2. Find the instance "SRV / Header actions" in the header. Set State to "Camera warning". If the learners button no longer reads "5 learners", set it back to "5 learners".

STEP 4 · Header chip
1. In the instance "Header", find the slot "Center Content".
2. Clone "Badge · Needs attention" (1605:5899) from the page "👤 SRV flow [D]" into that slot. Label "1 device not found". Name "Badge · Room warning".
3. If the slot does not accept a child, report it under "Component gaps" and go on.

STEP 5 · Card "Room warning"
1. Create a card as a child of the frame "Main", last in the layer order (on top). Name "Card · Room warning". Layout positioning absolute. x 266, y 76 inside "Main". Width fixed 480, height hug.
2. The card: auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12), fill surface/card, 1 px inside stroke border/default, corner radius radius/container.
3. Children, in this order:
   a. Frame "Title row": auto-layout horizontal, gap spacing/3 (12), vertically centred, no fill. A clone of "Badge · Needs attention" (1605:5899), label "Needs attention", and a card title text "Sim Room 2 is not fully ready".
   b. Body text, width fill: "The patient monitor capture has not been found since 10 Nov, 14:32. You can still record with the other devices."
   c. Muted text, width fill: "What to try: check its power and its network cable."
   d. Frame "Actions": auto-layout horizontal, gap spacing/2 (8), hug, no fill. Two buttons, clones of "Button · Check this room" (1752:19386) from "L8 · Room, AV tab". Set layout positioning of the clones to auto. Labels "Check this room" and "Report a problem". Names "Button · Check this room" and "Button · Report a problem".
   e. A link text, clone of "Overhead camera" (1752:19794): "Hide". Put it in "Title row" as the last child, pushed to the right (set "Title row" to width fill and the card title text to width fill).

STEP 6 · Label and caption
1. Label "Label · RR3" at x 3200, y 76: "RR3 · Room view, room warning".
2. Caption "Caption · RR3" at x 3200, y 1044. Two lines:
   Line 1: "The room view shows the room's health when it opens. The missing device is named, with what to try."
   Line 2: "The warning does not block recording: "Start recording" works with the devices that are found. "Check this room" goes to RR1."

CHECK
- "RR3 · Room view, room warning" is 1440 × 900 at x 3200, y 120. L4 is unchanged.
- The recording button reads "Start recording" (State Ready). The time reads "00:00".
- The third camera tile shows the "No signal" state. The other two tiles show a picture.
- "Card · Room warning" floats over the upper part of the camera area, 480 wide, and covers no part of the side panel. No text is clipped.
- The side panel, the annotation input and the intercom strip are as in L4.
- Take one screenshot of the frame.

REPORT
- The id of "RR3 · Room view, room warning".
- Whether the chip in "Center Content" could be placed.
- "Component gaps": every step you skipped.
```

## B1 · RR4 check running

```
Goal: one page screen "RR4 · Room check, running" in slot 4. It is the state between the click on "Check this room" and the result.
If "RR1 · Room check, results" does not exist in Section "8 · Room readiness", stop and report.

STEP 1 · Clone
1. Clone "RR1 · Room check, results" to x 4760, y 120 in the same Section. Name "RR4 · Room check, running". Do not change RR1.

STEP 2 · Header and readiness
1. "Page header", instance "Text · Tuesday, January 19": "Checking the room. This takes about 20 seconds."
2. "Button · Check again": set the label to "Checking…" and State to "Disabled". Rename "Button · Checking". Set its x again so that the gap to "Button · Start recording" is 8.
3. "Card · Readiness": set the badge Variant to Neutral and its label to "Checking". Rename it "Badge · Checking". Text "Readiness text": "2 of 6 checks done. Nothing is changed in the room."
4. "Devices header": "6 checks · 1 failed" becomes "6 checks · 2 done".

STEP 3 · Rows
1. "Row · Overhead camera" and "Row · Foot camera": unchanged.
2. "Row · Patient monitor capture": delete the frame "Fix actions". Set the details text to "Looking for the capture unit…". Set the row back to height fixed 56, padding top and bottom 0, cells vertically centred. Badge: Variant Neutral, label "Checking…", name "Badge · Checking".
3. "Row · Audio kit", "Row · Intercom", "Row · Recording service": badge Variant Neutral, label "Waiting", name "Badge · Waiting". Details text: "Not checked yet".
4. "Check footer": the text "Back to the device list" becomes "Cancel the check". Delete the text "Report a problem" in "Cell · Last seen" (or set it to an empty string).

STEP 4 · Label and caption
1. Label "Label · RR4" at x 4760, y 76: "RR4 · Room check, running".
2. Caption "Caption · RR4" at x 4760, y 1044. Two lines:
   Line 1: "Right after "Check this room". The checks run one by one and the list fills in."
   Line 2: "The user can leave the page. The result stays on the room."

CHECK
- 1440 × 900 at x 4760, y 120. RR1 is unchanged.
- Badges: 2 "Working", 1 "Checking…", 3 "Waiting", 1 "Checking" in the readiness card, 1 "Primary". No "Not found".
- Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## B2 · RR5 report a problem

```
Goal: one page screen "RR5 · Report a problem" in slot 5. It is RR1 with the report dialog open.
If "RR1 · Room check, results" does not exist in Section "8 · Room readiness", stop and report.

STEP 1 · Clone
1. Clone "RR1 · Room check, results" to x 6320, y 120. Name "RR5 · Report a problem". Do not change RR1.

STEP 2 · Dim layer and dialog
1. Clone "Dim" (1360:9294) from "S8 · Stop confirmation" on the page "👤 SRV flow [D]". Put it in the RR5 frame as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900.
2. Create an instance of "SRV / Report a problem" (1024:8740). Put it in the RR5 frame after the dim layer (on top). Layout positioning absolute. Centre it: x 480, y 112 (the dialog is 480 × 677).
3. Do not change any text in the dialog. If a text in it shows a forbidden word from the Shared rules, report it. ("LearningSpace" is allowed.)

STEP 3 · Label and caption
1. Label "Label · RR5" at x 6320, y 76: "RR5 · Report a problem".
2. Caption "Caption · RR5" at x 6320, y 1044. Two lines:
   Line 1: "The same dialog everywhere: the room page, the device page and the room view while recording."
   Line 2: "Open question: who gets the report, the customer's sim technician or Elevate support?"

CHECK
- 1440 × 900 at x 6320, y 120. The dialog is centred and fully inside the frame. RR1 is unchanged.
- Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## B3 · RR6 all checks passed

```
Goal: one page screen "RR6 · Room check, all passed" in slot 6. The same check on Sim Room 1, where everything works.
If "RR1 · Room check, results" does not exist in Section "8 · Room readiness", stop and report.

STEP 1 · Clone
1. Clone "RR1 · Room check, results" to x 7880, y 120. Name "RR6 · Room check, all passed". Do not change RR1.

STEP 2 · Texts
1. "Breadcrumb": "Sim Room 2" becomes "Sim Room 1". "Page header" text "Greeting": "Sim Room 1".
2. "Card · Readiness": badge Variant Success, label "Ready", name "Badge · Ready". Text: "6 of 6 checks passed. This room is ready to record."
3. "Devices header": "6 checks · 1 failed" becomes "6 checks · all passed".
4. "Row · Patient monitor capture": rename the row "Row · Wall camera". Device text "Wall camera". Checked text "Camera picture". Badge: Variant Success, label "Working", name "Badge · Working". Delete "Fix actions". Details text "Picture received". Set the row back to height fixed 56, padding top and bottom 0, cells vertically centred.
5. "Check footer": delete the text "Report a problem" in "Cell · Last seen" (or set it to an empty string).

STEP 3 · Label and caption
1. Label "Label · RR6" at x 7880, y 76: "RR6 · Room check, all passed".
2. Caption "Caption · RR6" at x 7880, y 1044. Two lines:
   Line 1: "The good case. Sim Room 1: every check passed."
   Line 2: "The readiness badge "Ready" is the same badge as in the rooms list (L7)."

CHECK
- 1440 × 900 at x 7880, y 120. Badges: 1 "Ready", 1 "Primary", 6 "Working". RR1 is unchanged.
- Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## After these run

- Claude reviews every frame in the file (script and screenshots) and adds the new Section and frames to "Screen list" and "Shell facts" in `11-16-merge-00-shared.md`.
- Not in this file, on purpose: the count "3 rooms ready, 1 needs attention" on Live and Today (RD-7). It belongs to the Sessions module file. Health versus planned maintenance (RD-8) belongs to the room "Details" tab in the Rooms module file.
