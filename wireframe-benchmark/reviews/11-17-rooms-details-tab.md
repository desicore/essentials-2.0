# 11-17 · Room page: the Details tab (L8b), from the OpSpace room page

Daniel (11-17): add the "Details" tab of the room page to Section "3 · Rooms and devices". The content comes from the room page OpSpace has today (beta, screenshot of 11-16): Room Details, Closure Dates, Operating Hours, "Edit Room", the "Active" status.

This file replaces run "A1" of `11-17-final-rooms.md`. That run drew a different Details tab (readiness, events today, maintenance) in a new Section 12. Do not run that A1 any more.

## What Claude checked before writing (11-17, read-only)

- Section "3 · Rooms and devices" `1749:8318` is 12640 × 1240 and full. Slots 1 to 8: L7, L8, L9, L10, L10b, L11, L8f, L8g. Each screen has a label (y 76), a caption (y 1044) and a topic tag (y 76, right-aligned with the screen).
- "L8 · Room, AV tab" `1752:19374` (slot 2, x 1640): one child "Body" > "SideNav" + "Content". "Content" is vertical auto-layout, padding 24, gap 24: "Breadcrumb", "Page header", "Tabs", "Card · Cameras", "Card · Audio", "Button · Add device".
- "Page header" `1752:19383`: text "Greeting" ("Sim Room 2"), instance "Text · Tuesday, January 19" (the grey line), and two buttons with absolute position: "Button · Check this room" (x 876, y 0) and "Button · Start recording" (x 1012, y 0). The buttons have the text property `Label#3:97`.
- "Tabs" `1752:19584`: plain frames "Tab · Details" (not active) and "Tab · AV" (active: bottom stroke 2, text/primary).
- Key-value card: "Card · Details" `1752:33738` in "L9 · Camera, opened from a room". Vertical, padding 24, gap 16. Children: title text "Details" (Bold 14); "Row · Kind" `1752:33743` (label Regular 12 on the left, value Regular 14 on the right); "Row · Room" `1752:33746` (label, then the frame "Room value" with a value text and the text "Change"); "Row · Role"; "Row · Audio from"; a note text (Regular 12).
- Badge: "Badge · Working" `1752:19799` in L8 (green, text property `Label#8:11`).
- Fields: instance "Select · Event" `I1752:18431;2266:9916;1752:18461` in the sheet of "L3 · Start recording" (448 × 32, shows a placeholder). Instance "Input" `I1786:20554;1784:13160;570:55172` in "L6f · Recording, Transcript" (228 × 32).

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | Slot 2 of Section 3, BEFORE L8. "Details" is the first tab, so it comes first. L8 and the six frames after it move one slot to the right (+1560). The Section grows to 14200 wide. It is the only Section wider than 12640 |
| Name | "L8b · Room, Details tab" |
| Content | The same three blocks as OpSpace: Room details, Closure dates, Operating hours. Two columns, like OpSpace |
| "Edit Room" | A third button in the page header, left of "Check this room": "Edit room" |
| "Active" | A badge next to the room name |
| "10 pax" | Written as "10 people" |
| "Equipment" | Stays as a row. It means simulators and equipment. Cameras and audio devices are on the AV tab |
| Topic tag | "T05" |
| Not drawn | The edit state, a saved closure date, weekend days. They can follow after the workshop |

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. Nothing else may run on this page at the same time.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-rooms-details-tab.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "DT rules" from the second. Then run ONLY section "D1 · L8b Room, Details tab" of the second file.`

## DT rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules replace two Shared rules for this run:
- This run writes only inside Section "3 · Rooms and devices" (1749:8318). It may resize this Section and move its children, exactly as STEP 1 says. No other Section may change.
- The Shared rule "do not move a frame" does not apply to STEP 1. After STEP 1, move nothing.
Never change the content of L7, L8, L9, L10, L10b, L11, L8f, L8g, their labels, captions or topic tags. STEP 1 only changes their x.
Never detach an instance. Never edit a main component. Change instances only through variant properties, text properties, text overrides and layer visibility.
Do not delete, edit or detach any annotation.
IDs in this file are source nodes. Inside a clone, find layers by their exact name.
If a step cannot be done exactly, skip it, and report it. Do not build a workaround.
```

## D1 · L8b Room, Details tab

```
Goal: one new page screen "L8b · Room, Details tab" in slot 2 of Section "3 · Rooms and devices". It is the room page of Sim Room 2 with the tab "Details" open. L8 and the frames after it move one slot to the right.

STEP 0 · Stop conditions
1. If a frame named "L8b · Room, Details tab" exists anywhere on the page, stop and report.
2. Read the direct children of Section 1749:8318. Expected: 8 frames at y 120 (x 80, 1640, 3200, 4760, 6320, 7880, 9440, 11000), 8 labels, 8 captions, 8 topic tags. If the frame at x 1640 is not "L8 · Room, AV tab" (1752:19374), stop and report.

STEP 1 · Make room (the only step that moves things)
1. Resize the Section 1749:8318 to 14200 × 1240 (resizeWithoutConstraints). Its x and y stay.
2. For every direct child of the Section whose x is 1640 or more: add 1560 to its x. Do not change y. This moves 7 frames, 7 labels, 7 captions and the topic tags that sit at x 3019 or more. The topic tag of L7 (x 1495) and everything of L7 stay.
3. Check: L7 is at x 80. L8 is at x 3200. L8g is at x 12560. Nothing is at x 1640 to 3080 except nothing. Report the list "name, old x, new x".

STEP 2 · Clone
1. Clone "L8 · Room, AV tab" (1752:19374) into the Section at x 1640, y 120. Name the clone "L8b · Room, Details tab". Keep 1440 × 900, clip content on.
2. Everything below happens inside this clone, in "Body" > "Content". "Content" is vertical auto-layout, padding 24, gap 24.

STEP 3 · Tabs (Details becomes the active tab)
1. In "Tabs", read first: the strokes and stroke weights of "Tab · AV", the fills of its text "AV", the fills of the text "Details".
2. "Tab · Details": set its strokes to the strokes of "Tab · AV". Stroke weights: top 0, right 0, left 0, bottom 2. Stroke align inside. Set the fills of its text "Details" to the fills you read from "AV".
3. "Tab · AV": strokes = empty. Set the fills of its text "AV" to the fills you read from "Details".

STEP 4 · Page header
1. The instance "Text · Tuesday, January 19": set its text to "Simulation room · Riverbend College of Nursing · 10 people".
2. Clone "Button · Check this room" inside "Page header". Name the clone "Button · Edit room". Set the property "Label#3:97" to "Edit room". It keeps absolute position. Set y 0 and x = 876 − 8 − (its new width). It sits left of "Button · Check this room" with a gap of 8.
3. Badge "Active": create a horizontal auto-layout frame "Title row" (gap 8, items centred vertically, hug width, hug height, no fill). Insert it in "Page header" at index 0. Move the text "Greeting" into it. Clone "Badge · Working" (1752:19799) into it after "Greeting". Name the clone "Badge · Active". Set the property "Label#8:11" to "Active". The grey line stays directly under the title row. If moving "Greeting" breaks the header layout, undo this point 3, and report it.

STEP 5 · Remove the AV content
In "Content", delete "Card · Cameras", "Card · Audio" and "Button · Add device". Keep "Breadcrumb", "Page header", "Tabs".

STEP 6 · Two columns
1. Create a horizontal auto-layout frame "Columns" as the last child of "Content": gap 24, items aligned to the top, width fill, height hug, no fill.
2. In it, create two vertical auto-layout frames, "Left column" and "Right column": gap 24, width fill (each ends up 554 wide), height hug, no fill.

STEP 7 · "Card · Room details" (Left column, first)
1. Clone "Card · Details" (1752:33738) into "Left column". Name it "Card · Room details". Width fill, height hug.
2. Set the title text "Details" to "Room details".
3. Delete "Row · Room", "Row · Role", "Row · Audio from" and the note text (the last text).
4. Clone "Row · Kind" four times, so the card has five rows after the title. Every row: width fill. Rename the rows and set the two texts (left, right):
   - "Row · Type": "Type" · "Simulation room"
   - "Row · Site": "Site" · "Riverbend College of Nursing"
   - "Row · Capacity": "Capacity" · "10 people"
   - "Row · Equipment": "Equipment" · "—"
   - "Row · Description": "Description" · "—"

STEP 8 · "Card · Operating hours" (Left column, second)
1. Clone "Card · Details" (1752:33738) again into "Left column", after "Card · Room details". Name it "Card · Operating hours". Width fill, height hug.
2. Set the title text to "Operating hours".
3. Move the note text (the last text) to index 1, directly under the title. Set it to "Timezone: UTC". Width fill.
4. Delete "Row · Kind", "Row · Role" and "Row · Audio from". Keep "Row · Room".
5. In "Row · Room" > "Room value": set the value text to "08:00 to 20:00". Delete the text "Change". Clone "Badge · Working" (1752:19799) into "Room value" after the value text, name it "Badge · Open", set "Label#8:11" to "Open". Set the left text of the row to "Monday". Rename the row "Row · Monday".
6. Clone this row four times. Rename the clones and set the left text: "Row · Tuesday" / "Tuesday", "Row · Wednesday" / "Wednesday", "Row · Thursday" / "Thursday", "Row · Friday" / "Friday". Every row: width fill.
7. Order in the card: title, "Timezone: UTC", Monday, Tuesday, Wednesday, Thursday, Friday.

STEP 9 · "Card · Closure dates" (Right column)
1. Clone "Card · Details" (1752:33738) into "Right column". Name it "Card · Closure dates". Width fill, height hug.
2. Set the title text to "Closure dates".
3. Move the note text to index 1. Set it to "Block scheduling for this room on specific dates, such as holidays or planned closures." Width fill, text auto-resize height (it wraps to two lines).
4. Before you delete the rows: clone the left text "Kind" (1752:33744, the small grey label) three times and keep the clones for the field labels below. Then delete "Row · Kind", "Row · Room", "Row · Role" and "Row · Audio from".
5. "Dates row": a horizontal auto-layout frame, gap 16, width fill, height hug, no fill. In it two vertical auto-layout frames, "Field · Start date" and "Field · End date": gap 4, width fill, height hug.
   - In each: one of the label clones on top ("Start date *" and "End date *"), then a clone of the instance "Select · Event" (I1752:18431;2266:9916;1752:18461). Name the clones "Select · Start date" and "Select · End date". Width fill. Set the placeholder to "Select date": read the component properties of the instance and use its text property; if it has none, use a text override.
6. "Field · Reason": a vertical auto-layout frame, gap 4, width fill. The third label clone on top ("Reason"), then a clone of the instance "Input" (I1786:20554;1784:13160;570:55172). Name it "Input · Reason". Width fill. Placeholder "Enter reason...". If it shows an icon and a property can hide it, hide it. If not, keep it, and report it.
7. "Actions row": a horizontal auto-layout frame, width fill, height hug, items aligned to the right (primary axis MAX). In it a clone of "Button · Start recording" from "Page header". Name it "Button · Save". Set "Label#3:97" to "Save". If the variant property "State" has the value "Disabled", set it. If not, keep "Rest", and report it.
8. "Empty note": a clone of the note text from point 3. Text "No closure dates defined." Width fill, text align centre.
9. Order in the card: title, description, "Dates row", "Field · Reason", "Actions row", "Empty note".

STEP 10 · Label, caption, topic tag
1. Clone "Label · L8" into the Section. Name "Label · L8b". Text "L8b · Room, Details tab". x 1640, y 76.
2. Clone "Caption · L8". Name "Caption · L8b". x 1640, y 1044, 1440 wide. Two lines:
   Line 1: "Sim technician or admin: opens Sim Room 2 to check its data, opening hours and closure dates."
   Line 2: "Same content as the room page in OpSpace today. Cameras and audio devices are on the AV tab (L8)."
3. Clone the topic tag "Topic T05 · L7". Name "Topic T05 · L8b". Text stays "T05". y 76. x = 1640 + 1440 − (its width), so its right edge is at x 3080.

Check list:
1. The Section is 14200 × 1240. No other Section changed size or position.
2. Frames in the Section, left to right at y 120: L7 (x 80), L8b (1640), L8 (3200), L9 (4760), L10 (6320), L10b (7880), L11 (9440), L8f (11000), L8g (12560). Every label, caption and topic tag is still aligned with its screen.
3. L8 itself is unchanged apart from its x: it still has "Card · Cameras", "Card · Audio" and the active tab "AV".
4. L8b: 1440 × 900, clip content on. Side navigation: "Rooms" is the selected item. Tab "Details" is active, "AV" is not. Three header buttons, nothing overlaps the title.
5. L8b: the two columns are 554 wide each. No text is cut off. Nothing goes below y 876 inside "Content".
6. No detached instance. No forbidden word. No annotation changed.
7. Screenshot L8b, and one screenshot of the whole Section.

Report: the list from STEP 1; the id of "L8b · Room, Details tab"; how you set the placeholders and the "Save" state (property name or override); every step you could not do exactly; the two screenshots.
```

## After this runs

Claude checks L8b and the Section by script and screenshot, then updates "Shell facts" in `11-16-merge-00-shared.md` (Section 3 is 14200 wide, nine slots).

Open after this run:
- The topic index ("Index · Topics T01 to T10") has no link to L8b yet.
- `11-17-final-rooms.md`: run A1 is replaced by this file. Run A2 ("L8c · Room, edit details") expects L8b in Section "12 · Rooms, more states" and must be rewritten before it runs. Runs B1 to B4 still need that Section, which A1 would have created.
