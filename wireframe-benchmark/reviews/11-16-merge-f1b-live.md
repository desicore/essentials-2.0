# 11-16 · Merge F1b: Live, start recording, several rooms, room view (L2, L3, L3b, L3d, L3c, L4)

Six greyscale wireframes in Section "1 · Sessions" of the page "🧭 One app · merge [D]". They show the Live page, the Start recording sheet, recording in several rooms, and the full-screen room view. They are discussion wireframes for the workshop on 11-17, not final designs. The shared concept, screen list and Shared rules are in `11-16-merge-00-shared.md`. Slots 1 and 2 of this Section belong to the F1a chat (L1, L1b). Never touch them.

## Context

- Live replaces the old center overview. It shows every room now as a card, with one state badge and one main action.
- The user always picks ONE room to start a recording. Event, learners and scenario are optional labels. They are prefilled when the recording starts from an event, and can be added later.
- Several rooms: select room cards on Live, then "Record 3 rooms" opens a side sheet. Each room is matched to its calendar event, or is ad hoc. Afterwards a banner shows the running recordings with "Stop all".
- The room view while recording is full screen, has no menu entry, and its title is the room name.
- Content spec = the low-fi screens on the FigJam board "Essentials x OpSpace" (`KStutzzTvN5ENoWJPj07Zg`): L2 `8:553`, L3 `8:757`, L3b `10:674`, L3d `13:1038`, L3c `10:804`, L4 `8:911`. Sample data comes from the contract, not from the low-fi (the low-fi has six rooms and "Sim Room 3/4"; the contract has four rooms).

## What I found in the file (11-16, read-only)

- "Shell · Page" does not exist yet. F0 builds it. This file must not run before "Shell facts" in the shared file is filled.
- CO1 `1692:9756` (built, 1440 × 900) has: "Page header" `1692:9765` with text "Greeting" `1692:9766`, instance "Text · Tuesday, January 19" `1692:9767`, instance "Button · Customize" `1692:9768` (Primary, SM, absolute, x 1012, y 0, 120 × 28; its label reads "Start recording"). "Room wall" `1694:9908` (1132 × 664, vertical) with "Wall row 1" `1694:9909` and "Wall row 2" `1694:9922`. Each row holds two cards, 554 × 320: "Card · Sim Room 1" `1694:9910`, "Card · Sim Room 2" `1694:9916`, "Card · Skills Lab 1" `1694:9923`, "Card · Debrief Room 1" `1694:9929`.
- Card layers, same in all four: "Card header" > "Title block" > texts "Room name", "Room meta"; badge instance (Property `Variant` = Success, Warning, Error or Neutral; the label is the child text "Label"); "Live picture" > text "Live picture text"; "Details" > texts "Details line 1", "Details line 2"; "Actions" > button instances. Buttons have Property `Variant` = Primary or Secondary, Size SM; the label is the child text "Label".
- CO1 button names: "Button · Start recording" `1694:9947` (Primary, in Sim Room 1), "Button · Room devices" `1694:9998` (Secondary, in Sim Room 2), "Button · Open recording" `1694:10020` (Primary) and "Button · Stop" `1694:10033` (Secondary) in Skills Lab 1, "Button · Open event" `1694:10053` (Secondary) in Debrief Room 1.
- CO1 still has a "Breadcrumb" and a title "Center overview". Do not clone them. CO1 is only a source for the room wall and the buttons.
- SS1 `1695:10571` (built): rounded rectangle "Dim" `1695:11172` (50 % black) and instance "Sheet · Start recording" `1695:11173` (480 × 900, x 960, y 0, Variant=Fullscreen). Sheet parts: "Header" > "Title Wrapper" > texts "Title", "Subtitle"; "Close Button"; slot "Body" > frame "Start form" > "Room options" (header, three "Option · <room>" frames with a "Text" frame and a badge, a "Hint" text), "Block · Event", "Block · Learners", "Block · Scenario" (each: "Room header" with texts "Room name" and "Cameras", instance "Select · Event", text "Hint"); slot "Footer Actions" with instances "Cancel" and "Start recording". The value text of a "Select · Event" is the text layer named "labels" (inside "input-status-wrapper" > "trigger"). The footer button "Start recording" has a red record dot in its "Icon" child.
- Old sheet "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" `1:7327` on "Wireframe (D)" (0:1), inside "3d · Record 3 rooms" `1:7184`: 480 × 1096, Title "Record 3 rooms", Subtitle "Each room records on its own. You can stop them one by one.", slot "Body" > frame "Rooms" > "Room block · Sim Room 1", "Divider", "Room block · Sim Room 3", "Divider", "Room block · Sim Room 4". Each block: "Room header" (texts "Room name", "Cameras"), instance "Select · Event", text "Hint". Footer: "Cancel" and "Start 3 recordings" (Primary, red dot in its "Icon" child).
- Old selection bar "Sticky action bar" `1:7179` in "3c · Rooms selected" `1:7067` (1180 × 64, absolute): frame "Selection" with text "Selected count" and instance "Button · Clear" (Ghost, MD), instance "Button · Record 3 rooms" (Primary, MD). The old selected card is an instance "Room card · Sim Room 1" `1:7126` with a 2 px stroke and a nested instance "Checkbox · checked" `I1:7126;67:150;1:7113` (Property `Value` = Checked; the unchecked one is `I1:7143;67:150;1:7130`, `Value` = Unchecked). The old cards have a live photo and "LIVE" tags: do not clone them.
- Old banner "CUSTOM · Recording banner (multi)" `1:7329` in 3e `1:7328`: it has a hard-coded red dot (#D92D20) and a link "Center overview". Do not clone it. L3c builds a new banner from clones of buttons.
- S4 · Recording `1348:12538` (page "👤 SRV flow [D]" 960:51213, Section "SRV flow · Recording" `1343:3275`, 1440 × 948) is the recording-state twin of S1 `1343:4038`. Same structure: "TopNav", "Shell row" > "SideNav" (Collapsed) and "Main" > "Header", "Body" > "Camera area" (camera grid, "CUSTOM · Live timeline" with "Elapsed" `00:42`, "Track" > "Progress · 00:42 of 20:00" > "Bar", annotation input, intercom strip) and "SRV / Side panel". The Header shows title "NURS 310 · Sepsis recognition", room "Sim Room 2", "Group A", "Tue, Jan 19 · 10:00–11:00", a back arrow, "Layout & audio", "Report a problem", "5 learners".
- Both S1 and S4 TopNav show the product logo. The shared rules treat the logo as branding: L4 keeps the TopNav as it is.
- The old SideNav in CO1 has only six item rows. The new one is built by F0.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Rooms on Live | Four rooms (contract), 2 × 2 wall cloned from CO1, not the six of the low-fi |
| L2 states at 09:50 | Sim Room 1 Ready, Sim Room 2 Needs attention, Skills Lab 1 Ready, Debrief Room 1 Next 10:15 (no cameras). Nothing records yet. Reason: L3b, L3d and L3c need three rooms with cameras that are free: Sim Room 1, Sim Room 2, Skills Lab 1 |
| Rooms that can record | Only rooms with cameras. Debrief Room 1 has no checkbox and cannot be selected |
| L3 sheet | The SS1 sheet, text unchanged: it already reads "Start recording" and has the room list plus optional Event, Learners, Scenario. L3 is the ad hoc state (Event: Ad hoc recording). The prefilled state is L1b's job |
| L3d matching | Sim Room 1 ad hoc, Sim Room 2 matched to NURS 310 · Sepsis recognition 10:00 (5 learners), Skills Lab 1 ad hoc |
| Dim on L3d | A dim layer is added, as in SS1. The low-fi has none |
| L3c banner | Built as a new auto-layout frame, with cloned buttons "Manage" and "Stop all". No red dot (colour rule) |
| L3c times | All three started 09:48. Sim Room 1 02:14, Sim Room 2 02:11, Skills Lab 1 02:09. "longest 02:14" |
| L4 source | S4 (recording state) instead of S1 (ready state), because the low-fi shows a running recording. Sim Room 2, so S4's event, group and checklist fit |
| L4 not copied from the low-fi | Pause, "Add note", "Mark moment", "Audio", "Layout" and the "Notes and marks" panel. S4 already has Stop recording, the annotation input with Discuss / Good practice / Marker, "Layout & audio" and the side panel. Do not draw buttons |
| L4 camera grid | Left as in S4 (it shows three cameras). Sim Room 2 has two cameras and one device not found: fix when the data model is final |
| L4 red dots | The red record dots in the camera tiles and on "Stop recording" come from S4 and stay. They are inside instances |
| Low-fi footnotes | Lines like "Replaces Center overview" and "Replaces SRV" are notes to the reader. They are not copied |

## Gaps I expect in Cursor's report

- A cloned nested instance (checkbox) may not clone out of its parent. The fallback is in L3b.
- The Button or Badge property may not be called `Variant`. The report must name what it found.
- The sheet may not resize to 900 high. The fallback is in L3 and L3d.
- The nav item "Live" may not be settable as active. The method is in "Shell facts"; report if it fails.
- The "Progress" bar may not accept a width. Leave it and report.
- The rail item in L4 may not switch to Default. Leave it and report.
- Cursor has once reported success without writing anything. Check each frame in Figma.

## How to run

All runs: **Claude Sonnet 5.5 · High**. One new Cursor chat. The chat may start only after "Shell facts" in `11-16-merge-00-shared.md` is filled (Status is not "not yet").

Full run, all six screens:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L2 · Live", "L3 · Start recording", "L3b · Rooms selected", "L3d · Record 3 rooms", "L3c · 3 rooms recording", "L4 · Room view". After each section, run its check list and take a screenshot before you start the next section.`

One section only (reruns). L3b, L3d and L3c clone the finished L2, and L3d clones L3b, so rerun in that order.

- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run this section of the second file: "L2 · Live". After the section, run its check list and take a screenshot.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run this section of the second file: "L3 · Start recording". After the section, run its check list and take a screenshot.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run this section of the second file: "L3b · Rooms selected". After the section, run its check list and take a screenshot.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run this section of the second file: "L3d · Record 3 rooms". After the section, run its check list and take a screenshot.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run this section of the second file: "L3c · 3 rooms recording". After the section, run its check list and take a screenshot.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f1b-live.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run this section of the second file: "L4 · Room view". After the section, run its check list and take a screenshot.`

## Flow rules

```
Section: "1 · Sessions". Build only here. Slots 1 and 2 (x 80 and x 1640) are not yours: never touch them or anything in them.
Slots and frames (names are exact):
- slot 3, x 3200, y 120: "L2 · Live"                 1440 × 900, nav active: Live
- slot 4, x 4760, y 120: "L3 · Start recording"     1440 × 900, nav active: Live
- slot 5, x 6320, y 120: "L3b · Rooms selected"     1440 × 900, nav active: Live
- slot 6, x 7880, y 120: "L3d · Record 3 rooms"     1440 × 900, nav active: Live
- slot 7, x 9440, y 120: "L3c · 3 rooms recording"  1440 × 900, nav active: Live
- slot 8, x 11000, y 120: "L4 · Room view"          1440 × 948, rail collapsed, no active item
Label at y 76, caption at y 120 + frame height + 24 (1044 for page screens, 1092 for L4), both at the frame's x.

Source nodes (read-only; IDs are for the sources, clones get new IDs):
- "Shell · Page": id in "Shell facts" (Section "0 · Shell"). Start of L2.
- CO1 "CO1 · Center overview" 1692:9756 on page "👤 SRV flow [D]" (960:51213): "Room wall" 1694:9908, buttons "Button · Room devices" 1694:9998 (Secondary), "Button · Stop" 1694:10033 (Secondary), "Button · Start recording" 1694:9947 (Primary).
- SS1 "SS1 · Start session, ad hoc" 1695:10571 (same page): "Dim" 1695:11172, "Sheet · Start recording" 1695:11173.
- "3c · Rooms selected" 1:7067 on page "Wireframe (D)" (0:1): "Sticky action bar" 1:7179, nested checkboxes I1:7126;67:150;1:7113 (checked) and I1:7143;67:150;1:7130 (unchecked).
- "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" 1:7327 on "Wireframe (D)", inside 1:7184.
- "S4 · Recording" 1348:12538 on page "👤 SRV flow [D]", Section 1343:3275. Start of L4.
- "Label · AV0" 1603:10620 and "Caption · AV0" 1603:10621.

Flow rules:
1. Never clone a whole old page frame (CO1, SS1, 3c, 3d, 3e). Page screens start from "Shell · Page" and take only parts (wall, sheet, bar, buttons) from old frames. L3b, L3d, L3c start from a clone of the finished "L2 · Live" of this run (L3d from "L3b · Rooms selected"). L3 starts from a clone of L2.
2. Cloning from another page: clone the node on its own page, then move the clone into the target Section with appendChild, then set x and y. Switch pages at most once per use_figma call. If the move across pages fails, stop and report.
3. Forbidden words (shared rules) appear in the sources in these places. Replace or remove each one:
   - CO1: text "Center overview" in "Greeting" and in "Breadcrumb". Not cloned. The page title is "Live".
   - 3c/3e: "Center overview" in titles, breadcrumbs and the link "Link · Center overview". Not cloned.
   - TopNav of S4: the product logo stays (shared rules, logo exception).
   - Low-fi footnotes ("Replaces Center overview", "Replaces SRV"): not copied.
4. Only rooms with cameras can record. "Debrief Room 1" (no cameras) has no checkbox and is never selected.
5. Greyscale: no red. Hide the child "Icon" (visible = false) of the footer buttons "Start recording" (L3) and "Start 3 recordings" (L3d): it is a red record dot. Allowed exception in L4: the red record dots inside S4's camera tiles and its "Stop recording" button (inside instances).
6. Selected state of a card: stroke weight 2, inside. To get the stroke, copy "strokes" and "strokeWeight" from the frame "Option · Sim Room 1" in the sheet "Sheet · Start recording" of SS1 (1695:11173, path Body > Start form > Room options). Its stroke is bound to text/primary. If you cannot copy it, set stroke colour from variable text/primary and weight 2. Never type a hex colour.
7. Buttons and badges: clone, change only the label (the child text "Label") and the variant property. Read the property name and options on the first clone and report them (shared rules).
8. After every text override, also rename the layer to match (for example "Badge · Recording 02:14", "Button · Open recording").
9. Text styles: card title = clone the text "Room name" of a room card. Muted = clone "Room meta". Body = clone "Details line 1".
```

## L2 · Live

Source: "Shell · Page" (id in "Shell facts") plus the page header button and the room wall from CO1 `1692:9756`.

```
Goal: "L2 · Live" in slot 3 (x 3200, y 120). The Live page: all four rooms as cards, header buttons "Select rooms" and "Start recording".

1 · Shell
- Clone "Shell · Page" into Section "1 · Sessions". Place at x 3200, y 120. Rename "L2 · Live". Size 1440 × 900, clip content on.
- Set the active nav item to "Live" with the method in "Shell facts". If it fails, report it and leave the nav as it is.
- Do not change "TopNav".
- If "Content" has a child "Breadcrumb", delete it. Live is a top-level page.
- Find in "Content" the frame "Page header". Find in it: text "Greeting", instance "Text · Tuesday, January 19", instance "Button · Customize". If one of them is missing or has another name, stop and report the names you found.

2 · Page header
- Text "Greeting": "Live".
- Instance "Text · Tuesday, January 19": set its text to "4 rooms · none recording · 1 needs attention".
- Instance "Button · Customize": label "Start recording". Variant Primary. Hide its child "Icon" if there is one. Rename it "Button · Start recording". It stays absolute. Keep its right edge where it is (the right edge of "Page header", x 1132). If the width does not follow the text, set the width so the label has 12 px padding left and right.
- Clone "Button · Room devices" (1694:9998, Secondary, SM) from CO1 into "Page header". Rename it "Button · Select rooms". Label "Select rooms". Set layoutPositioning to ABSOLUTE, y 0, x = (x of "Button · Start recording") − 8 − (its own width). Set the x after the label is set, so the width is final.

3 · Room wall
- Clone "Room wall" (1694:9908) from CO1 into "Content", as the child right after "Page header". "Content" keeps its auto-layout, 24 px padding and 24 px gap. If its gap or padding is different, do not change it and report the values.
- Do not clone anything else from CO1.

4 · Edit the cards
Find layers inside each card by exact name. Card "Card · Sim Room 1" and "Card · Sim Room 2" and "Card · Debrief Room 1": no change.
Card "Card · Skills Lab 1" (it comes from CO1 as a recording room; it is now ready):
- Badge instance (named "Badge · Recording 12:20"): set Variant to Success. Label "Ready". Rename "Badge · Ready".
- Text "Details line 1": "Free until 13:00".
- Text "Details line 2": "Next: NURS 340 · Postpartum hemorrhage · Group B".
- In "Actions": instance "Button · Open recording": label "Start recording" (it stays Primary). Rename "Button · Start recording". Delete the instance "Button · Stop".
- Text "Room meta" stays "Skills lab · 1 camera · Audio kit".

5 · Label and caption
- Label: clone "Label · AV0" (1603:10620) to x 3200, y 76. Text "L2 · Live". Name "Label · L2".
- Caption: clone "Caption · AV0" (1603:10621) to x 3200, y 1044, width 1440. Name "Caption · L2". Two lines:
  "Faculty or sim technician: opens Live to see which rooms are free, in use or have a problem, and starts a recording from a room."
  "New: one page for all rooms, with a Select rooms mode to record several rooms at once."

Check list:
- "L2 · Live" is 1440 × 900 at x 3200, y 120 in Section "1 · Sessions", clip content on. Slots 1 and 2 are unchanged.
- "Content" has exactly two children: "Page header", "Room wall". No breadcrumb. The page title reads "Live".
- The header has two buttons, both instances: "Button · Select rooms" (Secondary) and "Button · Start recording" (Primary). They do not overlap and the right edge of "Button · Start recording" is at x 1132 of "Page header".
- "Room wall" has two rows with two cards each, all 554 × 320. Badges: Ready, Needs attention, Ready, Next 10:15. Buttons: Start recording (Primary) in Sim Room 1, Sim Room 2 and Skills Lab 1; "Room devices" (Secondary) in Sim Room 2; "Open event" (Secondary) in Debrief Room 1.
- Nav item "Live" is active, or the gap is reported. No text on the frame says "Center overview", "Essentials", "OpSpace", "SRV", "Dashboard" or "Video review".
- Nothing overflows 1440 × 900. No text is clipped.
- Label and caption exist with the right names and positions.

Report: new IDs (frame, label, caption), Badge and Button property names, "Component gaps", steps you could not do, screenshot.
```

## L3 · Start recording

Source: a clone of "L2 · Live" (this run) with the dim and the sheet from SS1.

```
Goal: "L3 · Start recording" in slot 4 (x 4760, y 120). L2 with a dim layer and the right-hand sheet "Start recording". The user picks one room. Event, learners and scenario are optional.

1 · Clone
- Find "L2 · Live" in Section "1 · Sessions". If it does not exist, stop and report.
- Clone it in the same Section. Place the clone at x 4760, y 120. Rename it "L3 · Start recording". Do not change "L2 · Live".

2 · Dim
- Clone "Dim" (1695:11172) from SS1 into "L3 · Start recording" as the last child. If the frame has auto-layout, set the clone to absolute position (layoutPositioning ABSOLUTE). x 0, y 0, width 1440, height 900. Keep its fill. Name "Dim".

3 · Sheet
- Clone the instance "Sheet · Start recording" (1695:11173) from SS1 into "L3 · Start recording" as the last child, above "Dim". Absolute position, x 960, y 0, width 480, height 900. Keep the name "Sheet · Start recording".
- If the clone loses a text override, stop and report which layer. Do not rebuild it.
- If the instance cannot be set to 900 high, leave its height and report it.
- "Title" stays "Start recording". "Subtitle" stays "Pick a room. Event, learners and scenario are optional."
- In slot "Footer Actions": instance "Start recording": hide its child "Icon" (red dot). Label stays "Start recording". "Cancel" stays.

4 · Room options (inside the sheet: Body > Start form > Room options)
- "Option · Sim Room 1": stays selected (2 px stroke). Muted text: "3 cameras · 2 mics · Free until 13:00". Badge "Ready" stays.
- "Option · Sim Room 2": no change ("2 cameras · 1 device not found", Warning badge "Needs attention").
- "Option · Skills Lab 1": it comes from SS1 as an in-use room. Make it ready:
  - Room name text (in its "Text" frame, first text): set its fill to the same fill as the room name text in "Option · Sim Room 1" (copy "fills").
  - Muted text: "1 camera · Audio kit · Free until 13:00".
  - Badge (named "Badge · Recording 12:20"): Variant Success, label "Ready", rename "Badge · Ready".
- Blocks "Block · Event", "Block · Learners", "Block · Scenario": no change (values "Ad hoc recording", "Add later", "No scenario").

5 · Label and caption
- Label "Label · L3" at x 4760, y 76, text "L3 · Start recording".
- Caption "Caption · L3" at x 4760, y 1044, two lines:
  "Faculty (Dr. Maya Ortiz): starts an ad hoc recording from Live. Only the room is required."
  "New: event, learners and scenario are optional labels. They are prefilled when the recording starts from an event, and can be added later."

Check list:
- "L3 · Start recording" is 1440 × 900 at x 4760, y 120. "L2 · Live" is unchanged.
- The last two children are "Dim" (1440 × 900 at 0, 0) and "Sheet · Start recording" (480 × 900 at 960, 0), in that order.
- The three options show: Ready (selected), Needs attention, Ready. The only colour is in the badges; the footer button has no red dot.
- Behind the dim layer the Live wall and the nav (Live active) are visible.
- No text says "Recording 12:20". No forbidden word. Nothing is clipped or overflows the sheet.
- Label and caption exist.

Report: new IDs, which text layer you used for the Select value ("labels" expected), "Component gaps", steps you could not do, screenshot.
```

## L3b · Rooms selected

Source: a clone of "L2 · Live" with checkboxes, selected cards and the selection bar from 3c.

```
Goal: "L3b · Rooms selected" in slot 5 (x 6320, y 120). Live in selection mode: Sim Room 1, Sim Room 2 and Skills Lab 1 are selected. A bar at the bottom says "3 rooms selected" with "Clear" and "Record 3 rooms".

1 · Clone
- Find "L2 · Live". If it does not exist, stop and report. Clone it in the same Section. Place at x 6320, y 120. Rename "L3b · Rooms selected". Do not change "L2 · Live".

2 · Header
- Instance "Button · Start recording" in "Page header": set visible = false.
- Instance "Button · Select rooms": label "Cancel selection". Rename "Button · Cancel selection". Set x = 1132 − (its width) after the label is set, y 0.

3 · Checkboxes and selected state (cards Sim Room 1, Sim Room 2, Skills Lab 1 only)
For each of the three cards:
- In "Card header": create a frame "Title group": auto-layout horizontal, gap spacing/2 (8), vertically centred, hug width, hug height, no fill, no stroke. Put it as the first child of "Card header". Move the existing "Title block" into it.
- Clone the nested instance "Checkbox · checked" (I1:7126;67:150;1:7113 on page "Wireframe (D)") into "Title group", as the first child (before "Title block"). Name "Checkbox · checked". If the clone fails, use the main component of that node to create an instance, then set Property `Value` to Checked. If that also fails, stop this step and report it.
- Set the card's stroke to the selected state (flow rule 6): weight 2, inside, text/primary. Check that the card is still 554 wide and 320 high. If the content now needs more than 320 px, report the overflow in px and do not shrink anything.
"Card · Debrief Room 1": no checkbox, no change.

4 · Selection bar
- Clone "Sticky action bar" (1:7179, on page "Wireframe (D)") into "Content" as the last child. Set layoutPositioning ABSOLUTE, x 0, y 788, width 1180, height 64. Name "Selection bar".
- Text "Selected count": "3 rooms selected".
- "Button · Clear": label "Clear" (Ghost, stays).
- "Button · Record 3 rooms": label "Record 3 rooms" (Primary, stays).
- If the bar has no fill, set fill surface/card and a 1 px top stroke border/default. Report it.
- If a nested layer name is not found, stop that step and report the names you found.

5 · Label and caption
- "Label · L3b" at x 6320, y 76, text "L3b · Rooms selected".
- "Caption · L3b" at x 6320, y 1044, two lines:
  "Sim technician or faculty: selects several rooms on Live to record them together."
  "New: room cards can be selected. A bar shows the count and offers Record 3 rooms. Rooms without cameras cannot be selected."

Check list:
- "L3b · Rooms selected" is 1440 × 900 at x 6320, y 120. "L2 · Live" unchanged.
- The header has one button, "Cancel selection" (Secondary), right edge at x 1132 of "Page header".
- Three cards (Sim Room 1, Sim Room 2, Skills Lab 1) show a checked checkbox and a 2 px stroke. Debrief Room 1 has none.
- "Selection bar" is absolute at y 788 inside "Content", 1180 × 64. It does not cover any card (the wall ends at y 764). Texts "3 rooms selected", "Clear", "Record 3 rooms". Both buttons are instances.
- No forbidden word. Nothing clipped. Label and caption exist.

Report: new IDs, how you got the checkbox (clone or main component), the Checkbox property name, "Component gaps", steps you could not do, screenshot.
```

## L3d · Record 3 rooms

Source: a clone of "L3b · Rooms selected" with the dim and the old sheet 1:7327.

```
Goal: "L3d · Record 3 rooms" in slot 6 (x 7880, y 120). L3b with the side sheet "Record 3 rooms": each room is matched to its calendar event, or is ad hoc.

1 · Clone
- Find "L3b · Rooms selected". If it does not exist, stop and report. Clone it in the same Section. Place at x 7880, y 120. Rename "L3d · Record 3 rooms". Do not change "L3b".

2 · Dim
- Clone "Dim" (1695:11172) from SS1 into the frame as the last child. Absolute, x 0, y 0, 1440 × 900. Keep its fill. Name "Dim".

3 · Sheet
- Clone the instance "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" (1:7327, page "Wireframe (D)") into the frame as the last child, above "Dim". Absolute, x 960, y 0, width 480, height 900. Name "Sheet · Record 3 rooms". If it cannot be set to 900 high, leave the height and report it.
- "Title": "Record 3 rooms" (stays). "Subtitle": "Each room records on its own. You can stop them one by one." (stays).
- Footer: "Cancel" stays. The instance "Start 3 recordings": hide its child "Icon" (red dot). Label stays "Start 3 recordings".

4 · Room blocks (slot "Body" > "Rooms")
Three blocks and two "Divider" instances. Change the blocks as in the table. In each block the text "Room name" and the text "Cameras" are the header. The instance "Select · Event" shows its value in the text layer named "labels". The text "Hint" is the line under it. Rename each block "Room block · <room>".

| Block (source name) | New name | "Room name" | "Cameras" | "labels" (value) | "Hint" |
|---|---|---|---|---|---|
| Room block · Sim Room 1 | Room block · Sim Room 1 | Sim Room 1 | 3 cameras | Ad hoc recording | Add an event and learners during or after the recording. |
| Room block · Sim Room 3 | Room block · Sim Room 2 | Sim Room 2 | 2 cameras | NURS 310 · Sepsis recognition, 10:00 | Matched from today's calendar · 5 learners |
| Room block · Sim Room 4 | Room block · Skills Lab 1 | Skills Lab 1 | 1 camera | Ad hoc recording | Add an event and learners during or after the recording. |

- If "labels" is not found in a block, stop that block and report the text layer names you found.

5 · Label and caption
- "Label · L3d" at x 7880, y 76, text "L3d · Record 3 rooms".
- "Caption · L3d" at x 7880, y 1044, two lines:
  "Faculty: matches each selected room to its calendar event, or leaves it ad hoc."
  "New: one side sheet for all selected rooms. Each room gets its own event and learners, and the calendar fills them in when it can."

Check list:
- "L3d · Record 3 rooms" is 1440 × 900 at x 7880, y 120. "L3b" unchanged.
- The last two children are "Dim" and "Sheet · Record 3 rooms" (480 × 900 at 960, 0), in that order.
- The sheet has three blocks: Sim Room 1, Sim Room 2, Skills Lab 1, with the values from the table. Footer buttons "Cancel" and "Start 3 recordings", no red dot. The footer is at the bottom of the sheet and nothing overflows it.
- Behind the dim layer the three selected cards and the selection bar are visible.
- No "Sim Room 3", "Sim Room 4" or "Suturing" text anywhere. No forbidden word. Label and caption exist.

Report: new IDs, "Component gaps", steps you could not do, screenshot.
```

## L3c · 3 rooms recording

Source: a clone of "L2 · Live". Three cards switch to Recording. A banner shows "3 rooms recording".

```
Goal: "L3c · 3 rooms recording" in slot 7 (x 9440, y 120). Live while Sim Room 1, Sim Room 2 and Skills Lab 1 record. Banner with "Manage" and "Stop all".

1 · Clone
- Find "L2 · Live". If it does not exist, stop and report. Clone it in the same Section. Place at x 9440, y 120. Rename "L3c · 3 rooms recording". Do not change "L2 · Live".

2 · Header
- Instance "Button · Select rooms": set visible = false. "Button · Start recording" stays.

3 · Buttons for later steps (do this before step 4 so nothing is lost)
- Make a temporary frame "TEMP buttons" in the Section at x 9440, y 1100. Clone into it: "Button · Stop" (1694:10033) from CO1 once.

4 · Cards
Same layers as in L2. Badge Variant Error for all three.

| Card | Badge label | "Details line 1" | "Details line 2" |
|---|---|---|---|
| Card · Sim Room 1 | Recording 02:14 | Ad hoc recording, no event yet | Started 09:48 · no learners yet |
| Card · Sim Room 2 | Recording 02:11 | NURS 310 · Sepsis recognition | Started 09:48 · Group A · 5 learners |
| Card · Skills Lab 1 | Recording 02:09 | Ad hoc recording, no event yet | Started 09:48 · no learners yet |

Rename each badge "Badge · <label>". "Room meta" texts stay. "Live picture" stays.
"Actions" of each of the three cards must hold exactly two buttons, in this order, with these labels:
- "Button · Open recording": Primary, label "Open recording".
- "Button · Stop": Secondary, label "Stop".
How:
- Sim Room 1 and Skills Lab 1: the Primary button "Button · Start recording": label "Open recording", rename. Then add a clone of "Button · Stop" from "TEMP buttons" as the second child.
- Sim Room 2: "Button · Start recording": label "Open recording", rename. "Button · Room devices": label "Stop", rename "Button · Stop".
"Card · Debrief Room 1": no change.

5 · Banner
Add a frame "Recording banner" in "Content" as the child between "Page header" and "Room wall". Auto-layout horizontal, space between, vertically centred, padding top and bottom spacing/1 (4), left and right spacing/4 (16), width fill, height hug, fill surface/card, 1 px inside stroke border/default, corner radius radius/element-10. Two children:
- Text (card title style, clone "Room name"): "3 rooms recording · longest 02:14". Name "Banner title".
- Frame "Banner actions": auto-layout horizontal, gap spacing/2 (8), hug, no fill, no stroke. Two buttons, both clones of "Button · Room devices" from the frame "L2 · Live" (Secondary, SM): "Button · Manage" with label "Manage", "Button · Stop all" with label "Stop all".
No red dot, no icon. If a button has an icon child, hide it.
The banner is about 36 px high. With it, "Content" is 24 + 52 + 24 + 36 + 24 + 664 + 24 = 848 high and fits. If "Content" overflows, report the px and do not shrink anything.

6 · Clean up
Delete "TEMP buttons".

7 · Label and caption
- "Label · L3c" at x 9440, y 76, text "L3c · 3 rooms recording".
- "Caption · L3c" at x 9440, y 1044, two lines:
  "Faculty or sim technician: sees every running recording at a glance and stops one room or all of them."
  "New: a banner shows how many rooms record and the longest time, with Manage and Stop all. Each room keeps its own recording."

Check list:
- "L3c · 3 rooms recording" is 1440 × 900 at x 9440, y 120. "L2 · Live" unchanged.
- "Content" has three children: "Page header", "Recording banner", "Room wall". The header has one button, "Start recording".
- Three Error badges: Recording 02:14, Recording 02:11, Recording 02:09. Debrief Room 1 still shows Next 10:15.
- Each of the three recording cards has "Open recording" (Primary) and "Stop" (Secondary). All are instances. The banner has "Manage" and "Stop all".
- "TEMP buttons" is gone. No forbidden word. Nothing overflows 1440 × 900. Label and caption exist.

Report: new IDs, "Component gaps", steps you could not do, screenshot.
```

## L4 · Room view

Source: a clone of "S4 · Recording" `1348:12538` (the recording-state twin of "S1 · Ready to record" `1343:4038`).

```
Goal: "L4 · Room view" in slot 8 (x 11000, y 120). The full-screen room view while recording. No menu entry (collapsed rail, nothing active). The title is the room name.

1 · Clone
- Clone "S4 · Recording" (1348:12538, page "👤 SRV flow [D]") on its own page, then move the clone into Section "1 · Sessions" (flow rule 2). Place at x 11000, y 120. Rename "L4 · Room view". Size 1440 × 948, clip content on. If S4 is missing, clone "S1 · Ready to record" (1343:4038) instead and report it.
- Do not change S4 or S1.

2 · TopNav
- Keep the "TopNav" of the clone exactly as it is. Do not replace it and do not hide its logo.

3 · Rail (no menu entry)
- In "Shell row" > instance "SideNav" (State=Collapsed, 48 wide): find the nested "Navigation / .SideNavItem" instance with State=Selected. Set its State to Default (the same value as the items next to it). Change nothing else. If this is not possible, report it and leave the rail.

4 · Header
In "Main" > instance "Header", find these text layers by exact name. If a name is not found, find the text by its characters and report the name.
- "Title text" (reads "NURS 310 · Sepsis recognition"): "Sim Room 2".
- The text named "Sim Room 2" next to the door icon: "NURS 310 · Sepsis recognition".
- "Group A", "Tue, Jan 19 · 10:00–11:00" and the learners button ("5 learners"): no change.
- The back arrow "IconButton · Back to event" stays. It returns to Live.

5 · Timer
In "CUSTOM · Live timeline":
- Text "Elapsed": "02:11".
- Frame "Progress · 00:42 of 20:00": rename "Progress · 02:11 of 20:00". Its child "Bar": set the width to 72 (02:11 of 20:00, 661 px track). If the width cannot be set, leave it and report it.
- Text "Planned": no change.
Everything else (camera grid, annotation input, intercom strip, side panel) stays as in S4.

6 · Label and caption
- "Label · L4" at x 11000, y 76, text "L4 · Room view".
- "Caption · L4" at x 11000, y 1092, width 1440, two lines:
  "Faculty: watches and annotates one room while it records."
  "New: full screen with no menu entry, and the title is the room name. It opens from Start recording or Open recording on Live."

Check list:
- "L4 · Room view" is 1440 × 948 at x 11000, y 120, clip content on. S4 and S1 unchanged.
- The title reads "Sim Room 2". The line under it reads "NURS 310 · Sepsis recognition" once. The TopNav is unchanged.
- The rail has no active item, or the gap is reported.
- "Elapsed" reads "02:11".
- No forbidden word in any text layer. No detached instance. The only red is the record dots from S4 (camera tiles, "Stop recording").
- Label and caption exist (caption at y 1092).

Report: new IDs, the TopNav result, the State property of the rail item, "Component gaps", steps you could not do, screenshot.
```

## After these run

- Claude reviews each frame in Figma (read-only) and writes a fix section here if needed.
- Prototype wiring later: Live "Start recording" opens L3; "Select rooms" opens L3b; "Record 3 rooms" opens L3d; "Start 3 recordings" opens L3c; "Open recording" opens L4; L3 "Start recording" opens L4.
