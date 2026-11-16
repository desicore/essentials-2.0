# 11-17 · Final round: Import and integrations, more states

Topics T03 and T10. The import flow (I1 to I5) shows only the good path. This file adds the states around it: Canvas as the source, a file that is not accepted, one column not matched, all rows decided, many people would be deactivated, Undo, the Canvas sheet in Settings, and connecting an integration. It builds a new Section and changes one existing frame (fix F1).

This file is for AFTER the workshop of 11-17. Do not run it before.

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. How I1 to I5 were built is in `11-16-merge-f5-import.md`. The rules for who owns a field and what a sync may change are in the vault page `wiki/work/essentials-2.0-onespace-ownership-model.md` (OW-8 to OW-11).

## Context

- Import has four steps: Source, Map, Review, Done. Canvas is connected once in Settings, then Integrations (I5). A sync or import lands with the owner of the data: for learners and groups Canvas wins at the next sync; things that exist only here are never changed by a sync; a person removed in Canvas is deactivated, never deleted.
- Audit of I1 to I5 (11-16): no error state, no Canvas path, no Undo confirmation, no safety-rule state, no sync status, no "all decided" state.
- Sample data: Riverbend College of Nursing, Tue 19 Jan 2027. Canvas courses: NURS 310 · Sepsis recognition (11 learners), NURS 340 · Postpartum hemorrhage (6 learners), Paramedic intake 3 (12 learners). 11 + 6 + 12 = 29 learners.

## What I found in the file (11-16 evening, read-only)

- Page "🧭 One app · merge [D]" `1749:8314`. Last Section is "7 · Search (later, not MVP)" `1776:16712` at y 10400. Nothing sits at y 20800 to 22200. The other final files use the Sections at y 11900, 13400, 14900, 16400, 17900, 19400, so y 20900 is free.
- "I1 · Import, Source" `1752:33120` (1440 × 900). "Body" > "SideNav" + "Content" `1752:33124` (vertical, padding 24, gap 24, 1180 × 900). "Content" holds: "Breadcrumb" `1752:33125`, "Page header" `1752:33129`, "Stepper" `1752:33774`, "Sources" `1752:34926` (two cards: "Card · Upload a file" `1752:34927`, vertical, padding 24, gap 8, dashed stroke, children "Title", "Description", "Spacer", "Button · Choose file" `1752:34935`; "Card · From Canvas" `1752:34945`, same build), "Card · Past imports" `1752:35895`, "Footer" `1752:37320`.
- "Card · Past imports": "Devices header" 52 high, "Columns header" 40 high with cells "Cell · Date" 150, "Cell · Source" 300, "Cell · Result" 330, "Cell · By" 222, "Cell · Undo" 80, then three rows 56 high (fixed, horizontal, padding left and right 24, cells vertically centred) "Row · 05 Jan 2027" `1752:35921`, "Row · 15 Dec 2026", "Row · 29 Oct 2026", each with the same five cells.
- "I2 · Import, Map" `1752:38930`: "Card · Mapping" `1752:39215` with "Mapping header", "Columns header" (cells "Cell · File column" 340, "Cell · Goes to" 340, "Cell · Example" 402), five rows "Row · Full name", "Row · E-mail", "Row · Class", "Row · Role", "Row · Student ID" `1752:39295`, then "Match note" `1752:39719` (horizontal, height 44, text "Note" "4 of 5 matched automatically."). The fifth row already reads "Student ID" · "Select · Not imported" `1752:39718` · "20418". "Select · <field>" is a plain frame (260 × 32): texts "Value" (Regular 14) and "Caret" ("▾", Regular 12). "Footer" `1752:39022` has the note and "Buttons" `1752:39847` with "Button · Back" (Secondary) and "Button · Next: Review" (Primary).
- "I3 · Import, Review" `1752:40839`: "Counts" `1752:41133` (tiles "Count · New", "Count · Updated", "Count · Need a decision", each with texts "Title" and "Description"), "Card · Needs a decision" `1752:41155` (header "Mapping header" with text "Count info" "2 people"; rows "Row · 17" `1752:41166` and "Row · 31" `1752:41176`, each with "Cell · Fix" holding one button instance), "Card · No deactivations" `1752:41246` (horizontal, padding 16, gap 12, one text "Readiness text"), "Footer" `1752:40937` (text "Note" and "Buttons" with "Button · Back" and "Button · Import 50 people" `1752:40941`, Primary).
- "I4 · Import, Done" `1755:15940`: "Result title" "50 people imported", "Counts" (42 added, 8 updated, 2 skipped), "Actions" `1755:16220` with "Button · See imported people", "Button · Undo import" `1755:16237`, "Button · Import another file", "Footer".
- "I5 · Settings, Integrations" `1755:16259`: "Settings tabs", "Integrations" `1755:16500` with "Card · Canvas" `1755:16502` (button "Manage" `1755:16507`, text "Connected · syncs people and courses every night at 02:00 · last sync today 02:00, no errors"), "Card · Calendar feed" `1755:16517` (text "Not connected", button "Connect" `1755:16522`, Primary), "Card · Sign-in directory (LDAP)" `1755:16547`. **The only button "Connect" belongs to the calendar feed. Canvas has "Manage".** There is no Moodle or other learning system in I5.
- Dim: "Dim" `1752:18430` in "L3 · Start recording" `1752:18339` is a rectangle, 1440 × 900, absolute at 0/0, black 50 %, fill bound to a variable. It is the same layer as "Dim" `1360:9294` in "S8 · Stop confirmation" on "👤 SRV flow [D]" (that one is 1440 × 948). Use `1752:18430`: it is on the same page and has the right height.
- Sheet: "Sheet · Start recording" `1752:18431` in L3 (instance, 480 × 900, absolute, x 960, y 0, Variant Fullscreen). Text properties: "Title#2266:0", "Subtitle Text#2266:6". Inside: "Header", "Header Divider", slot "Body" (480 × 748, vertical, padding 16) holding the frame "Start form" `1752:18436` (vertical, gap 24), "Footer Divider", slot "Footer Actions" (padding 16, gap 8, aligned right) with the instances "Cancel" (Ghost, LG) and "Start recording" (Primary, LG). "Start form" holds "Room options" `1752:18437` (header "Room options header" with two texts; three rows "Option · Sim Room 1" `1752:18441`, "Option · Sim Room 2" `1752:18446`, "Option · Skills Lab 1"; text "Hint"), "Block · Event" `1752:18457` (header, instance "Select · Event", text "Hint"), "Block · Learners", "Block · Scenario". An "Option · …" row is horizontal, padding 12, space between, with a frame "Text" (two texts: title, detail) and a badge instance. "Option · Sim Room 2" is 66 high, 1 px stroke.
- Checkbox: "Checkbox · checked" `1752:33333` in "L3b · Rooms selected" `1752:32581` (instance, 24 × 24). Properties: "Value" (Unchecked, Checked, Indeterminate), "Size" (sm, md), "State" (Default, Hover, Focused, Disabled), booleans "hasDescription" and "Label".
- Confirmation dialog: "SRV / Stop confirmation" `1024:8693` on "⚙️ Components (D)" `675:31351` is a COMPONENT (440 × 198), not a variant. Tree: instance "Dialog" `1024:8694` > "Header" > "Title Wrapper" > TEXT "Title" ("Stop the recording?"); slot "Body" with one TEXT (the body); slot "Footer Actions" with instances "Keep recording (default, focused)" (Secondary, MD, State Focused) and "Stop recording" (Primary, MD), each with a TEXT "Label". Texts are plain text layers: they can be changed with text overrides.
- There is **no text input component** on the page. The only inputs are "Select · Event" (a Selector instance with a chevron), the side navigation "Search" (Typeahead, has a search icon) and the plain frame "Select · <field>" in I2.
- Badge sources on this page: Warning "Badge · Needs attention" `1752:18016` (in L7), Error "Badge · Not found" `1752:19821` (in L8), Success "Badge · Working" `1752:19799` (in L8). Badge properties: "Variant" (Neutral, Info, Success, Warning, Error), text property "Label" (key starts with "Label").
- Button "Button · Import 50 people" `1752:40941`: properties "Variant", "State" (Rest, Hover, Pressed, Disabled, Focused, Loading), "Size", text "Label". Primary buttons in the sheet are LG; page buttons are SM.
- Text sources, all in L8 `1752:19374`: card title Bold 14 "Cameras" `1752:19780`; body Regular 14 "PTZ camera" `1752:19797`; muted Regular 12 "3 cameras · 1 not found" `1752:19781`; link Medium 14 "Overhead camera" `1752:19794`.
- Label and caption sources on "👤 SRV flow [D]": "Label · AV0" `1603:10620`, "Caption · AV0" `1603:10621`.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "14 · Import, more states" at x 0, y 20900, 12640 × 1240. I1 to I5 are not touched, except fix F1 |
| Canvas time | I1 and I5 say "last sync today 02:00" and "every night at 02:00". All new frames say 02:00, not 06:00. Dates: today is 19 Jan 2027 |
| I1b | The Canvas source is shown as a table of courses with checkboxes, built from "Card · Past imports". The source cards and the past imports are not on this frame |
| I2b | The fifth row ("Student ID") is the one not matched. Student ID is not a required field, so "Next: Review" stays enabled. A required field not matched (button Disabled) is not drawn |
| I3b button | The label is **"Import 52 people"**, not 50. Both rows are imported: Liam Ortega as new (43 new), Mia Chen as update (9 updated). 43 + 9 = 52. "Import 50 people" would only fit if both rows were skipped. I4 keeps its numbers (50, a separate case) |
| I3c | Clone of I3b (all rows decided), so the button is Disabled for one reason only. The rule "more than 10 people" is already in I3 ("The import pauses if it would deactivate more than 10 people") and in the ownership page's earlier I5 frame (guard when more than 10 people would be deactivated). Supported |
| Deactivate, not delete | The ownership page says a person removed in the LMS is deactivated, never deleted (OW-11). I3c says so in a muted line. I4b says "deactivates", not "removes" |
| I4b numbers | I4 shows 42 added and 8 updated. The dialog says 42 and 8, not 48 and 2 |
| I5c | The only "Connect" button in I5 is the calendar feed's. The sheet is "Connect calendar feed". The field and the muted text are about a feed address, not about a learning system |
| Input field | No input component exists. The field is a clone of the plain frame "Select · Name" `1752:39714` with the caret deleted |
| Dialog or sheet | I4b uses the dialog component (small). I5b and I5c use the sheet from L3 (480 wide, has room for content) |
| Sync log | Three rows: two good, one failed. The failed one says Canvas did not answer and that nothing was changed (a failed sync changes nothing) |

## Open questions for the workshop

- Undo and people who already have recordings: if someone added by an import was already recorded, can Undo still remove them? We say "deactivates". The ownership page only decides the case "removed in the LMS".
- Does a re-sync after "Undo import" bring the people back from Canvas? Probably yes. Should Undo then pause the sync for those people?
- Who may connect, sync and disconnect an integration: administrators only? (The ownership page leaves the roles open.)
- "Disconnect": what happens to people that came from Canvas? They are kept. Do they stay marked as "from Canvas" and read-only?
- Is the limit "more than 10 people" fixed, or a setting per organisation?
- Which fields does Canvas own and which stay local? (Open for Gabor on the ownership page.) The sheet says only "Learners and groups".
- Is a calendar feed the right integration to show for "Connect"? If the customer connects a learning system (for example Moodle) a connect screen needs a second "Connect" card in I5.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line. Nothing else may write in Section "14 · Import, more states" at the same time. Other final-round files that write in other Sections may run in parallel. Run A must finish before Run B starts.

Run A (creates the Section, six frames; clones I1, I2, I3, I4 and reads Section "5 · Import"):

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-import.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "IM rules" from the second file. Then run these sections of the second file, in this order: "A1 · Section and I1b", "A2 · I1c file not accepted", "A3 · I2b one column not matched", "A4 · I3b all decided", "A5 · I3c many deactivations", "A6 · I4b undo". After each section, run its check list and take a screenshot before you start the next section.`

Run B (after Run A; clones I5, needs the Section):

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-import.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "IM rules" from the second file. Then run these sections of the second file, in this order: "B1 · I5b Canvas sheet", "B2 · I5c connect". After each section, run its check list and take a screenshot before you start the next section.`

Run C (fix F1). It writes in Section "5 · Import". It must not run while Run A is running, because Run A clones I3 and I1 to I4 from that Section. It may run in parallel with Run B (Run B only clones I5):

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-import.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "IM rules" from the second file. Then run these sections of the second file, in this order: "F1 · I3 button". After each section, run its check list and take a screenshot before you start the next section.`

## IM rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Runs A and B: write only inside Section "14 · Import, more states". Section A1 creates it. Run C (F1) writes only on the frame "I3 · Import, Review" in Section "5 · Import". Never change any other Section or any frame in it. You may clone from them.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar.
- Never edit, rename or move anything on "⚙️ Components (D)" (675:31351) or "👤 SRV flow [D]" (960:51213). You may create instances of their components and clone placed nodes.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility.
- Never draw a badge, button, checkbox or input. Clone an existing one. To change a badge colour set its property "Variant". To change a label set the text property whose key starts with "Label". For buttons set "Variant" and "State" the same way.
- IDs refer to source nodes. Inside a clone, find layers by their exact name. When two layers have the same name, the step says which (by order).
- Fonts: load the font of every text before you change it (use the node's current font, getStyledTextSegments).
- Every new frame uses auto-layout. The only absolute layers are the dim layer, the sheet and the dialog.
- If a step cannot be done exactly, skip it, do not build a workaround, and write it under "Component gaps" (frame, step, what failed).
- Never write on a frame: "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard". Layer names inside instances may keep their old names; rename the ones the steps name.
- Every clone is placed at the slot x and y written in its section. Clone, then name, then edit. If a frame with the same name exists, stop and report. Never overwrite.

SLOTS in Section "14 · Import, more states" (frames at y 120, labels at y 76, captions at y 1044)
- Slot 1, x 80: "I1b · Import, from Canvas"
- Slot 2, x 1640: "I1c · Import, file not accepted"
- Slot 3, x 3200: "I2b · Import, Map, one column not matched"
- Slot 4, x 4760: "I3b · Import, Review, all decided"
- Slot 5, x 6320: "I3c · Import, many people would be deactivated"
- Slot 6, x 7880: "I4b · Import, Undo"
- Slot 7, x 9440: "I5b · Integrations, Canvas"
- Slot 8, x 11000: "I5c · Integrations, connect"

LABEL AND CAPTION (every frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>" (for example "Label · I1b"). Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide. Name "Caption · <code>". Text: the two lines the section gives, with a line break between them.

SOURCES (clone, then change the characters or properties)
- Card title Bold 14: "Cameras" 1752:19780. Body Regular 14: "PTZ camera" 1752:19797. Muted Regular 12: "3 cameras · 1 not found" 1752:19781. Link Medium 14: "Overhead camera" 1752:19794. All in "L8 · Room, AV tab" (1752:19374).
- Badges (instances, in this file): Warning "Badge · Needs attention" 1752:18016 (L7), Error "Badge · Not found" 1752:19821 (L8), Success "Badge · Working" 1752:19799 (L8).
- Checkbox: "Checkbox · checked" 1752:33333 (L3b, instance 24 × 24). Unchecked: set "Value" to "Unchecked".
- Dim: "Dim" 1752:18430 (L3 · Start recording 1752:18339, rectangle 1440 × 900, absolute 0/0).
- Sheet: "Sheet · Start recording" 1752:18431 (L3, instance 480 × 900, absolute x 960, y 0).
- Dialog: component "SRV / Stop confirmation" 1024:8693 (on page 675:31351).
- Button, Secondary SM: "Button · Manage" 1755:16507 (I5). Buttons "Back" and "Next: Review": frame "Buttons" 1752:39847 (I2).
- Select box (plain frame): "Select · Role" 1752:39717 and "Select · Name" 1752:39714 (I2).
```

## A1 · Section and I1b

```
Goal: the new Section and one page screen "I1b · Import, from Canvas" in slot 1. It is I1 after the user chose "Use Canvas": the Canvas courses to import.

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 20800 to y 22200 at x 0 to x 12640, stop and report.
2. If a Section named "14 · Import, more states" already exists, do not create a second one. Use it and report that it existed.
3. Create a Section. Name "14 · Import, more states". x 0, y 20900, size 12640 × 1240. Copy the fills, strokes and stroke weight of Section "5 · Import" (1749:8320).

STEP 2 · Clone
1. Clone "I1 · Import, Source" (1752:33120) into the new Section at x 80, y 120. Name the clone "I1b · Import, from Canvas". Keep 1440 × 900, clip content on.
Everything below happens inside this clone. Do not change I1.
2. The active nav item stays "People". "Breadcrumb", "Page header" and "Stepper" stay as they are (step "Source" is Active).

STEP 3 · Course table
1. In "Content", duplicate "Card · Past imports". Rename the duplicate "Card · Canvas courses". Put it after "Stepper", before "Sources". Then delete "Sources" and the original "Card · Past imports".
2. "Devices header": the text "Past imports" becomes "Canvas courses". Add a muted text (clone of 1752:19781) as the last child with the text "Connected · last sync today 02:00". Set "Devices header" to space between, vertically centred, if it is not already. (The header is horizontal; if the second text does not sit on the right, report it.)
3. "Columns header": delete "Cell · By" and "Cell · Undo". Rename "Cell · Date" to "Cell · Pick", "Cell · Source" to "Cell · Course", "Cell · Result" to "Cell · Learners". Set the text in "Cell · Pick" to "" (empty). Texts: "Course", "Learners". Fixed widths: "Cell · Pick" 56, "Cell · Course" 700, "Cell · Learners" 326 (sum 1082).
4. Rows: keep "Row · 05 Jan 2027" and "Row · 15 Dec 2026" and "Row · 29 Oct 2026". In each row delete "Cell · By" and "Cell · Undo", rename the three cells as in the header, set the same fixed widths. Rename the rows "Row · NURS 310", "Row · NURS 340", "Row · Paramedic intake 3".
5. In each row, in "Cell · Pick": delete the text, then add one clone of "Checkbox · checked" (1752:33333) and name it "Checkbox · NURS 310" (and "Checkbox · NURS 340", "Checkbox · Paramedic intake 3"). Row 1 and row 2: Value Checked. Row 3: set the property "Value" to "Unchecked". Keep the cell vertically centred.
6. Texts:
   - Row 1: "NURS 310 · Sepsis recognition" · "11 learners"
   - Row 2: "NURS 340 · Postpartum hemorrhage" · "6 learners"
   - Row 3: "Paramedic intake 3" · "12 learners"
   Keep the text styles the clone has (first column Medium, second Regular).

STEP 4 · Footer
1. "Footer" > text "Note": "2 courses selected · 17 learners. Canvas is the source for learners and groups. A sync never changes what you set only here."
2. Clone the frame "Buttons" (1752:39847) from "I2 · Import, Map" (1752:38930) into "Footer" as the last child. Keep "Button · Back" (Secondary, label "Back"). Set the label of "Button · Next: Review" to "Next" and rename the layer "Button · Next".
3. Check: "Footer" is space between, so the note is on the left and the buttons are on the right.

STEP 5 · Label and caption
1. Label "Label · I1b" at x 80, y 76: "I1b · Import, from Canvas".
2. Caption "Caption · I1b" at x 80, y 1044. Two lines:
   Line 1: "Faculty (Maya Ortiz) chose Canvas as the source and picks the courses to import. Two of three courses are ticked."
   Line 2: ""Next" goes to the step Map (I2). "Back" returns to the source choice (I1)."

CHECK
- The Section "14 · Import, more states" exists at x 0, y 20900, 12640 × 1240. No other Section changed.
- "I1b · Import, from Canvas" is 1440 × 900 at x 80, y 120. I1 is unchanged.
- "Content" has five children in this order: "Breadcrumb", "Page header", "Stepper", "Card · Canvas courses", "Footer".
- "Card · Canvas courses" has five children: "Devices header", "Columns header", three rows. Each row has three cells and one checkbox instance. Two checkboxes are Checked, one is Unchecked.
- The footer shows one Secondary and one Primary button. No detached instance.
- Lowest element ends above y 876. No text is clipped. Take one screenshot of the frame.

REPORT
- The id of the Section and of "I1b · Import, from Canvas".
- The checkbox property names found.
- "Component gaps": every step you skipped.
```

## A2 · I1c file not accepted

```
Goal: one page screen "I1c · Import, file not accepted" in slot 2. The user chose a PDF. The error sits under the upload area.
If the Section "14 · Import, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "I1 · Import, Source" (1752:33120) into the Section at x 1640, y 120. Name the clone "I1c · Import, file not accepted". Keep 1440 × 900. Do not change I1.

STEP 2 · Error block
1. In "Sources" > "Card · Upload a file" add a frame "Upload error" as the last child (after "Button · Choose file"). Auto-layout horizontal, gap spacing/2 (8), align top, width fill, height hug, no fill, no stroke.
2. First child: a clone of "Badge · Not found" (1752:19821). Set the text property "Label" to "Error". Keep Variant Error. Name it "Badge · Error".
3. Second child: frame "Text", auto-layout vertical, gap 0, width fill, height hug, no fill. Two texts:
   a. Body text (clone of 1752:19797), weight stays Regular: "learners-2027.pdf"
   b. Body text (clone of 1752:19797): "This file type is not supported. Use a CSV or XLSX file."
   Set both text widths to fill.
4. The stroke of the card stays dashed. The card becomes about 206 high. "Card · From Canvas" is fill height in "Sources" and grows to the same height. If the two cards differ, set both to the taller one.
5. The label of "Button · Choose file" stays "Choose file".

STEP 3 · Label and caption
1. Label "Label · I1c" at x 1640, y 76: "I1c · Import, file not accepted".
2. Caption "Caption · I1c" at x 1640, y 1044. Two lines:
   Line 1: "Faculty (Maya Ortiz) dropped a PDF. The file is not accepted and the error says why, under the upload area."
   Line 2: "Nothing was uploaded. "Choose file" opens the file picker again and goes on to the step Map (I2)."

CHECK
- "I1c · Import, file not accepted" is 1440 × 900 at x 1640, y 120. I1 is unchanged.
- "Content" has the same six children as I1. "Card · Upload a file" has five children ending with "Upload error".
- The two source cards have the same height. The lowest element ends above y 876.
- One Error badge reads "Error". No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## A3 · I2b one column not matched

```
Goal: one page screen "I2b · Import, Map, one column not matched" in slot 3. The fifth column ("Student ID") is not matched. The case drawn: it is an optional column, so "Next: Review" stays enabled.
If the Section "14 · Import, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "I2 · Import, Map" (1752:38930) into the Section at x 3200, y 120. Name the clone "I2b · Import, Map, one column not matched". Keep 1440 × 900. Do not change I2.

STEP 2 · Fifth row
In "Card · Mapping" > "Row · Student ID":
1. "Select · Not imported": rename "Select · Choose a field". Its text "Value": "Choose a field". The text stays muted (as in the source).
2. "Cell · Example": it holds the text "20418". Make "Cell · Example" auto-layout horizontal, gap spacing/3 (12), vertically centred, keep the width 402 (fixed). Add a clone of "Badge · Needs attention" (1752:18016) as the last child. Set Variant to Warning (keep) and the text property "Label" to "Not matched". Name it "Badge · Not matched".

STEP 3 · Match note
1. "Match note": the text "Note" stays "4 of 5 matched automatically."
2. Set "Match note" gap (item spacing) to spacing/4 (16). Add a muted text (clone of 1752:19781) as the last child: "Rows import without this column if you leave it empty." Name "Hint".
3. The footer stays as in I2: "Button · Back" Secondary, "Button · Next: Review" Primary, State Rest.

STEP 4 · Label and caption
1. Label "Label · I2b" at x 3200, y 76: "I2b · Import, Map, one column not matched".
2. Caption "Caption · I2b" at x 3200, y 1044. Two lines:
   Line 1: "Faculty (Maya Ortiz): the file has one column that goes nowhere yet. The row is marked "Not matched" and says what happens."
   Line 2: "The column is optional, so "Next: Review" goes on to I3. A required column that is not matched would block "Next: Review" (not drawn)."

CHECK
- "I2b · Import, Map, one column not matched" is 1440 × 900 at x 3200, y 120. I2 is unchanged.
- "Row · Student ID" reads "Student ID" · "Choose a field" · "20418" and a Warning badge "Not matched". The row is still 56 high.
- "Match note" has two texts side by side. No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## A4 · I3b all decided

```
Goal: one page screen "I3b · Import, Review, all decided" in slot 4. Both odd rows are resolved. The counts are updated. The button is active.
If the Section "14 · Import, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "I3 · Import, Review" (1752:40839) into the Section at x 4760, y 120. Name the clone "I3b · Import, Review, all decided". Keep 1440 × 900. Do not change I3.

STEP 2 · Counts
In "Counts" set the texts "Title" and "Description" of the three tiles:
- "Count · New": "43 new" / "Not in the system yet"
- "Count · Updated": "9 will be updated" / "Matched by email"
- "Count · Need a decision": "0 need a decision" / "All decided"

STEP 3 · Card "Needs a decision"
1. "Mapping header": the text "Count info" becomes "2 of 2 decided".
2. "Row · 17" > "Cell · Fix": delete the instance "Button · Choose a role". Add a clone of "Select · Role" (1752:39717, from I2). Set its text "Value" to "Learner". Name it "Select · Learner".
3. "Row · 31" > "Cell · Fix": delete the instance "Button · Update or skip". Add a clone of "Select · Role" (1752:39717). Set its text "Value" to "Update". Name it "Select · Update".
4. Keep the Problem texts as they are ("No role in the file", "Same email as an existing person"). Rows stay 56 high. If a Select (260 × 32) does not fit in the cell (352), report it.

STEP 4 · Footer
1. "Button · Import 50 people": set the text property "Label" to "Import 52 people". Rename the layer "Button · Import 52 people". State stays "Rest", Variant stays Primary.
2. The note stays: "People are matched by email. The import pauses if it would deactivate more than 10 people."
3. "Card · No deactivations" stays.

STEP 5 · Label and caption
1. Label "Label · I3b" at x 4760, y 76: "I3b · Import, Review, all decided".
2. Caption "Caption · I3b" at x 4760, y 1044. Two lines:
   Line 1: "Faculty (Maya Ortiz) chose a role for one person and "Update" for the other. Nothing is left to decide and the counts have moved."
   Line 2: "The button is active. "Import 52 people" goes to I4. "Back" goes to I2."

CHECK
- "I3b · Import, Review, all decided" is 1440 × 900 at x 4760, y 120. I3 is unchanged.
- Counts read 43 new, 9 will be updated, 0 need a decision. Two Selects read "Learner" and "Update". No "Choose a role" or "Update or skip" button is left.
- "Button · Import 52 people" is Primary, State Rest. "Back" is Secondary.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## A5 · I3c many deactivations

```
Goal: one page screen "I3c · Import, many people would be deactivated" in slot 5. A safety rule stops the import: 12 people are not in the file and would be deactivated.
If "I3b · Import, Review, all decided" does not exist in the Section "14 · Import, more states", stop and report.
This is a clone of I3b (all rows decided), not of I3, so that the button is Disabled for one reason only.

STEP 1 · Clone
1. Clone "I3b · Import, Review, all decided" to x 6320, y 120 in the same Section. Name the clone "I3c · Import, many people would be deactivated". Do not change I3b.

STEP 2 · Warning card
1. In "Content", duplicate "Card · No deactivations". Rename the duplicate "Card · Deactivation check". Put it in the place of "Card · No deactivations" (after "Card · Needs a decision", before "Footer"). Delete "Card · No deactivations".
2. Set "Card · Deactivation check" to auto-layout vertical, align left and top, padding spacing/4 (16), gap spacing/3 (12), width fill, height hug. Keep fill, stroke and radius.
3. Children, in this order:
   a. Frame "Title row": auto-layout horizontal, gap spacing/3 (12), vertically centred, no fill. A clone of "Badge · Needs attention" (1752:18016), text property "Label" "Check before you import" (Variant Warning), name "Badge · Check before you import".
   b. The existing text "Readiness text", width fill: "12 people are not in this file and would be deactivated. That is more than 10."
   c. A muted text (clone of 1752:19781), width fill: "They are deactivated, not deleted. Their recordings and results stay."
   d. Frame "Confirm row": auto-layout horizontal, gap spacing/2 (8), vertically centred, width fill, no fill. Children: a clone of "Checkbox · checked" (1752:33333) with the property "Value" set to "Unchecked", name "Checkbox · I checked the list"; a body text (clone of 1752:19797): "I checked the list. Deactivate these 12 people."; a link text (clone of 1752:19794) "Show the 12 people", name "Link · Show the 12 people". Set the body text width to hug. Put an empty frame "Spacer" (16 × 1, no fill) between the body text and the link, so the link sits 16 px (plus the gap) away from the sentence.

STEP 3 · Footer
1. "Button · Import 52 people": set "State" to "Disabled". Keep the label "Import 52 people". Variant stays Primary.
2. The note stays: "People are matched by email. The import pauses if it would deactivate more than 10 people."

STEP 4 · Label and caption
1. Label "Label · I3c" at x 6320, y 76: "I3c · Import, many people would be deactivated".
2. Caption "Caption · I3c" at x 6320, y 1044. Two lines:
   Line 1: "Safety rule: 12 people are not in this file and would be deactivated, which is more than 10. The import pauses until the user checks the list."
   Line 2: "People are deactivated, never deleted. "Show the 12 people" opens that list (not drawn). When the box is ticked the button turns active and goes to I4."

CHECK
- "I3c · Import, many people would be deactivated" is 1440 × 900 at x 6320, y 120. I3b is unchanged.
- "Content" children: "Breadcrumb", "Page header", "Stepper", "Counts", "Card · Needs a decision", "Card · Deactivation check", "Footer".
- "Card · Deactivation check" is about 148 high, the lowest element of the frame ends above y 876.
- One Warning badge, one Unchecked checkbox. "Button · Import 52 people" has State Disabled.
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. "Component gaps".
```

## A6 · I4b undo

```
Goal: one page screen "I4b · Import, Undo" in slot 6. It is I4 with the confirmation after "Undo import".
If the Section "14 · Import, more states" does not exist, stop and report.

STEP 1 · Clone
1. Clone "I4 · Import, Done" (1755:15940) into the Section at x 7880, y 120. Name the clone "I4b · Import, Undo". Keep 1440 × 900. Do not change I4.

STEP 2 · Dim layer
1. Clone "Dim" (1752:18430) from "L3 · Start recording" (1752:18339). Put it in the I4b frame as the last child (after "Body"). Layout positioning absolute. x 0, y 0, 1440 × 900.

STEP 3 · Dialog
1. Create an instance of the component "SRV / Stop confirmation" (1024:8693). Put it in the I4b frame after the dim layer (on top). Layout positioning absolute. Name it "Dialog · Undo this import".
2. Text overrides (find each text by its layer name or place, load its font first):
   - The TEXT named "Title" (in "Header" > "Title Wrapper"): "Undo this import?"
   - The one TEXT in the slot "Body": "This deactivates the 42 people that this import added and restores the 8 it updated. Recordings are not touched."
   - The instance "Keep recording (default, focused)": rename "Button · Keep the import". Its TEXT "Label": "Keep the import".
   - The instance "Stop recording": rename "Button · Undo import". Its TEXT "Label": "Undo import".
   Do not change the properties of the two buttons (Secondary Focused, Primary Rest).
3. Centre the dialog: x = (1440 − width) / 2, y = (900 − height) / 2 (440 × 198 gives x 500, y 351). Read the height after the text change. If the body wraps to three lines and the dialog grows, centre it with the new height and report the height in px. Do not resize it by hand.

STEP 4 · Label and caption
1. Label "Label · I4b" at x 7880, y 76: "I4b · Import, Undo".
2. Caption "Caption · I4b" at x 7880, y 1044. Two lines:
   Line 1: "Faculty (Maya Ortiz) pressed "Undo import". The dialog says what changes: 42 added people, 8 updated people. Recordings stay."
   Line 2: ""Undo import" returns to I4 with the import marked as undone (not drawn). "Keep the import" closes the dialog (I4)."

CHECK
- "I4b · Import, Undo" is 1440 × 900 at x 7880, y 120. I4 is unchanged.
- The dim layer covers the whole frame. The dialog is centred and fully inside the frame. Its title reads "Undo this import?". The word "recording" in the body is fine.
- No text in the dialog is clipped. Both buttons are instances. No forbidden word on the frame (the old texts "Stop the recording?" and "Stop recording" are gone).
- Take one screenshot.

REPORT
- The id of the frame, the dialog height in px.
- "Component gaps".
```

## B1 · I5b Canvas sheet

```
Goal: one page screen "I5b · Integrations, Canvas" in slot 7. It is I5 after "Manage" on the Canvas card: a right-hand sheet with the status, the last sync, what syncs, the sync log, "Sync now" and "Disconnect".
If the Section "14 · Import, more states" does not exist, stop and report.
Risk: the sheet content is in a slot of an instance. If a step below (clone into the slot, delete in the slot) is refused, stop the step, leave the sheet as it is, and report it under "Component gaps".

STEP 1 · Clone and overlay
1. Clone "I5 · Settings, Integrations" (1755:16259) into the Section at x 9440, y 120. Name the clone "I5b · Integrations, Canvas". Keep 1440 × 900. Do not change I5. The active nav item stays "Settings", the tab "Integrations" stays active.
2. Clone "Dim" (1752:18430) from L3 as the last child of the I5b frame. Absolute, x 0, y 0, 1440 × 900.
3. Clone "Sheet · Start recording" (1752:18431) from L3 as the last child (on top). Absolute, x 960, y 0, 480 × 900. Name it "Sheet · Canvas". Do not detach it.
4. Set its text properties: "Title" (key "Title#2266:0") "Canvas"; "Subtitle Text" (key "Subtitle Text#2266:6") "Connected learning system".

STEP 2 · Body, block "Status"
Inside the slot "Body" of "Sheet · Canvas", the frame "Start form" is vertical with gap 24. Keep "Start form". Build its content like this (delete children only when a step says so):
1. Keep "Room options". Rename it "Block · Status".
   a. "Room options header": the left text "Room" becomes "Status". Delete the right text "Ready rooms first".
   b. Keep "Option · Sim Room 2" (66 high). Rename it "Option · Canvas". Delete "Option · Sim Room 1" and "Option · Skills Lab 1".
   c. In "Option · Canvas" > "Text": first text (title) "Canvas", second text (detail) "Last sync: today, 02:00 · 3 courses, 29 learners". The badge instance: set Variant "Success" and the text property "Label" "Connected". Name it "Badge · Connected".
   d. After "Option · Canvas" add a clone of "Button · Manage" (1755:16507, from the I5b frame, Secondary SM). Set the text property "Label" to "Sync now". Name it "Button · Sync now". Align it left.
   e. The text "Hint" becomes: "Canvas is checked every night at 02:00."
2. Delete "Block · Event", "Block · Learners" and "Block · Scenario". Do this only after steps 3 and 4 have cloned "Room options header" (from "Block · Status") and "Option · Canvas" (from "Block · Status"). Those are the only sources the later steps use.

STEP 3 · Block "What syncs"
1. Add a frame "Block · What syncs" after "Block · Status": auto-layout vertical, gap spacing/2 (8), width fill, height hug, no fill. Children: a clone of "Room options header" (keep the left text, set it to "What syncs", delete the right text), then a frame "List": auto-layout vertical, gap spacing/2 (8), width fill, no fill, with three body texts (clones of 1752:19797), width fill:
   - "Learners and groups: Canvas is the source"
   - "Events and recordings: stay here"
   - "Someone removed in Canvas: is deactivated, never deleted"
   Name the texts "Line · Learners and groups", "Line · Events and recordings", "Line · Removed in Canvas".

STEP 4 · Block "Sync log"
1. Add a frame "Block · Sync log" after "Block · What syncs": auto-layout vertical, gap spacing/2 (8), width fill, height hug, no fill. Children: a clone of "Room options header" with the left text "Sync log" (delete the right text), then three clones of "Option · Canvas" with a gap of 8 between them. Name them "Row · 19 Jan", "Row · 18 Jan", "Row · 17 Jan".
2. Row texts (title / detail) and badges:
   - "Row · 19 Jan": "19 Jan, 02:00" / "3 courses, 29 learners updated". Badge Variant Success, label "Done".
   - "Row · 18 Jan": "18 Jan, 02:00" / "Canvas did not answer. Nothing was changed." Badge: Variant Error, label "Failed". (Set the property "Variant" of the badge instance. Do not replace it.)
   - "Row · 17 Jan": "17 Jan, 02:00" / "3 courses, 29 learners updated". Badge Variant Success, label "Done".
   Name the badges "Badge · Done", "Badge · Failed", "Badge · Done".
3. Order in the Body now: "Block · Status", "Block · What syncs", "Block · Sync log". Expected content height about 552 px, the slot has 716 px. The Body must not scroll or clip.

STEP 5 · Footer
1. In the slot "Footer Actions": instance "Cancel": text "Close", name "Button · Close" (stays Ghost).
2. Instance "Start recording": set Variant to "Destructive", text property "Label" "Disconnect", name "Button · Disconnect". Keep Size LG, State Rest.

STEP 6 · Label and caption
1. Label "Label · I5b" at x 9440, y 76: "I5b · Integrations, Canvas".
2. Caption "Caption · I5b" at x 9440, y 1044. Two lines:
   Line 1: "Administrator: pressed "Manage" on the Canvas card in I5. Sees the status, the last sync, what Canvas owns and the sync log, including a failed sync."
   Line 2: ""Sync now" starts a sync. "Disconnect" asks for a confirmation (not drawn). "Close" returns to I5."

CHECK
- "I5b · Integrations, Canvas" is 1440 × 900 at x 9440, y 120. I5 is unchanged.
- The dim layer and the sheet are the last two children. The sheet title reads "Canvas". The sheet is an instance.
- The Body shows three blocks. One badge "Connected", two "Done", one "Failed" (Error). Buttons: "Sync now" (Secondary SM), "Close" (Ghost), "Disconnect" (Destructive).
- No text is clipped. Nothing is cut at the bottom of the sheet. Take one screenshot.

REPORT
- The id of the frame and of "Sheet · Canvas".
- Whether cloning into and deleting inside the slot worked.
- The badge and button property names. "Component gaps".
```

## B2 · I5c connect

```
Goal: one page screen "I5c · Integrations, connect" in slot 8. It is I5 after "Connect" on the calendar feed card: a sheet with one field.
If the Section "14 · Import, more states" does not exist, stop and report.
The only "Connect" button in I5 is on "Card · Calendar feed" (1755:16522). So the integration is "Calendar feed", not a learning system.
Risk: same as B1 (the content is in a slot). Report what is refused, do not work around it.

STEP 1 · Clone and overlay
1. Clone "I5 · Settings, Integrations" (1755:16259) into the Section at x 11000, y 120. Name the clone "I5c · Integrations, connect". Keep 1440 × 900. Do not change I5.
2. Clone "Dim" (1752:18430) as the last child. Absolute, x 0, y 0, 1440 × 900.
3. Clone "Sheet · Start recording" (1752:18431) as the last child. Absolute, x 960, y 0, 480 × 900. Name it "Sheet · Connect calendar feed". Do not detach it.
4. Text properties: "Title#2266:0" "Connect calendar feed"; "Subtitle Text#2266:6" "An administrator connects it once for the whole organisation."

STEP 2 · Body
In the slot "Body", in the frame "Start form" (vertical, gap 24):
1. Keep "Block · Event". Rename it "Block · Address". Delete "Room options", "Block · Learners" and "Block · Scenario".
2. "Room header": the text "Room name" (it holds "Event") becomes "Address of the calendar feed". Delete the text "Cameras" (it holds "optional").
3. Delete the instance "Select · Event". In its place add a clone of "Select · Name" (1752:39714, from I2), set to width fill (448), and delete its text "Caret". Its text "Value": "https://" (keep it muted: copy the fills of 1752:19781 to it). Name it "Field · Address".
4. The text "Hint": "Paste the address of the feed. Nothing is imported until you continue."

STEP 3 · Footer
1. Instance "Cancel" stays Ghost, label "Cancel", name "Button · Cancel".
2. Instance "Start recording": label "Continue", name "Button · Continue". Variant stays Primary.

STEP 4 · Label and caption
1. Label "Label · I5c" at x 11000, y 76: "I5c · Integrations, connect".
2. Caption "Caption · I5c" at x 11000, y 1044. Two lines:
   Line 1: "Administrator: pressed "Connect" on the Calendar feed card in I5. One field: the address of the feed."
   Line 2: ""Continue" connects it and returns to I5 with the card marked as connected (not drawn). "Cancel" returns to I5."

CHECK
- "I5c · Integrations, connect" is 1440 × 900 at x 11000, y 120. I5 is unchanged.
- The sheet title reads "Connect calendar feed". The Body has one block with a label, the field and the hint.
- The field is a plain frame clone, 448 wide, with no caret. Buttons: "Cancel" (Ghost), "Continue" (Primary).
- No text is clipped. Take one screenshot.

REPORT
- The id of the frame. Whether the slot edits worked. "Component gaps".
```

## F1 · I3 button

```
Goal: on the original "I3 · Import, Review" (1752:40839) in Section "5 · Import", two rows are still undecided, so the button must not look active. Change one property. Add nothing else.
This section writes in Section "5 · Import". Nothing else may clone from or write in that Section while it runs.

STEP 1
1. Find the instance "Button · Import 50 people" (1752:40941) in "I3 · Import, Review". If it is not found, stop and report.
2. Set its property "State" to "Disabled". Do not change "Variant" (Primary), "Size", the label, the name or the position.
3. Change nothing else on I3 or on any other frame.

CHECK
- "Button · Import 50 people" has State Disabled and still reads "Import 50 people".
- "Button · Back" is unchanged (Secondary, Rest).
- Take one screenshot of I3.

REPORT
- The property name and the options you found. "Component gaps".
```

## After these run

- Claude reviews every frame (script and screenshots), then adds Section 14 and the eight frames to "Screen list" in `11-16-merge-00-shared.md`.
- Not drawn, on purpose: the list behind "Show the 12 people"; the "Import undone" result of I4; a sync in progress; the "Disconnect" confirmation; a required column not matched (Next disabled); the file picker; connecting a learning system other than the calendar feed.
