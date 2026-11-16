# 11-16 · F5 Import (I1 to I5)

Five greyscale wireframes in Section "5 · Import": the people import in four steps (I1 to I4) and Settings › Integrations (I5). Discussion wireframes for the workshop on 11-17, not final designs. This file needs `11-16-merge-00-shared.md`: it fits its screen list, slots, Shared rules and sample data exactly.

## Context

- One import pattern with four steps: Source, Map, Review, Done. The same four steps will serve people, events and courses. These screens show the people import, started from People › Learners.
- Active nav item for I1 to I4 is **People**. Breadcrumb: People / Learners / Import.
- I1 offers a file or Canvas, and lists earlier imports with "Undo".
- I2 matches columns: "4 of 5 matched automatically."
- I3 reviews counts: 42 new, 8 updated, 2 need a decision.
- I4 shows the result with "Undo import".
- I5 is Settings › Integrations. Canvas, a calendar feed and the sign-in directory (LDAP) are connected once here. Active nav item **Settings**.
- Content spec = the low-fi screens on the FigJam board "Essentials x OpSpace" (`KStutzzTvN5ENoWJPj07Zg`): I1 `18:1508`, I2 `18:1660`, I3 `18:1769`, I4 `18:1885`, I5 `18:1988`. Structure comes from the low-fi, sample data from the Shared rules.

## What I found in the file (11-16, read-only)

- **Shell · Page** does not exist yet (run F0 builds it). Everything below that depends on its layers assumes the layer names of the AV1 frame: "Content" holds "Breadcrumb" (texts and "Separator" texts), "Page header" ("Greeting" text, instance "Text · Tuesday, January 19" with a text layer "Content", instance "Button · Customize").
- **Components page 675:31351** holds only "SRV / ..." components (45 components). No stepper, select, file drop, table or radio. The "SRV / ... tabs" components carry the word SRV: do not use them.
- **Astryx library components used somewhere in the file** (checked on the SRV flow page and the Drafts page): Button, Badge, Tabs / TabList, SegmentedControl, Selector / MultiSelector (seen only inside SRV frames), Typeahead, Checkbox / CheckboxInput, Toggle, ProgressBar, DropdownMenu (with a radio item), TextArea, Dialog, EmptyState, Card. **None of them is a stepper, a file drop, a table or a plain select.** So these are plain auto-layout builds in this file (see "Gaps I expect").
- **Table-like rows**: frame "AV1 · Room devices" `1559:8319` (page "👤 SRV flow [D]" `960:51213`, Section "AV setup · Sketches" `1559:8318`). "Card · Devices" `1560:7926`: children "Devices header" (52), "Columns header" (40), four rows "Row · <name>" (56 high, five cells "Cell · <name>"), "Assign row" (52). Row 1:1 with a table. "Card · Readiness" `1560:7914`: a card with a badge and a text. "Breadcrumb" `1582:8083`: texts "Settings", "Separator", "Rooms", "Separator", "Sim Room 2" (Regular 12 muted, last one Medium 12 primary).
- **Settings tab strip**: frame "AV0b · Rooms, with settings tabs" `1624:9221` has a plain-frame tab strip "Settings tabs" `1624:9476` (1132 × 40, auto-layout, gap 24, 1 px bottom stroke). Tabs "Tab · Organization", "Tab · Rooms & devices" `1624:9478`, "Tab · Recordings & privacy", "Tab · Sign-in & security", "Tab · Email", "Tab · Integrations" `1624:9482`. The **active** tab is `1624:9478`: text Medium 14 text/primary, 2 px bottom stroke. The inactive tabs: text Medium 14 text/secondary, no stroke.
- **Card with text and a button**: "Card · Unassigned devices" `1624:9234` in AV0b: a text frame "Text" (texts "Unassigned title", "Device 1", "Device 2") and the button instance "Button · Assign" on the right.
- **Settings home**: "AVs · Settings home" `1625:9358` is a grid of cards, each with a title, a description and link rows. It has a card "Integrations" (links Calendar feed, Ehli AI). It confirms that Settings is a page of cards; I5 uses tabs instead (see Decisions). Its menu and breadcrumbs are superseded.
- **Low-fi (all five)** read with get_figjam (every text). I1: cards "Upload a file" and "From Canvas", table "Past imports". I2: table with 5 mapping rows. I3: three count tiles, table with 2 problems, a note, Back and "Import 50 people". I4: title, three count tiles, three buttons. I5: tabs and three integration rows. Differences to the low-fi are in "Decisions".
- **Earlier explorations** (file `maOZqRuLdksiPwUA43qSVI`, page "NEXT · explorations" `202:8898`) were not opened; the low-fi board already carries their content.

## Decisions in this file (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where Settings sits in the real menu | **Not verified.** The side navigation has Settings in the footer (concept in the shared file). I5 uses the active item Settings. The caption of I5 does not claim a place in the real product menu. |
| Settings layout | I5 uses a row of tabs (Organization, Users and access, Integrations, Notifications) as in the low-fi, not the card grid of "AVs · Settings home". Only "Integrations" is built; the other tabs are labels only. |
| Dates in "Past imports" | Moved after the sample date: 05 Jan 2027, 15 Dec 2026, 29 Oct 2026 (low-fi had Nov 2026). Newest first. The file in the running import is "learners-spring.xlsx" (52 rows = 42 + 8 + 2), the older one is "learners-fall.xlsx". |
| Canvas sync time | I1 and I5 both say "last sync today 02:00" (low-fi I1 said 06:00, I5 said 02:00). |
| Group name | "NURS 340 · Group B" (Shared rules spelling), not "NURS 340 Group B". |
| Learner names | Ava Miller (I2 example) and Liam Ortega, Mia Chen (I3) come from the low-fi, because the Shared rules list no names for this flow. |
| Buttons | Secondary: Back, Choose file, Use Canvas, Manage, Undo import, Import another file, Choose a role, Update or skip. Primary (one per screen): Next: Review, Import 50 people, See imported people, Connect. |
| "Goes to" in I2 | A plain select (a bordered box with a "▾") with a muted "→" before it. The low-fi wrote "→ Name" as plain text. |
| Count tiles | Low-fi had one text ("42 new"). Each tile gets a muted second line so it is not empty. The sizes stay inside the shared text sizes (no big numbers). |
| Notes on I5 | The low-fi note said that the place of Settings "in the OpSpace menu is not verified". That sentence is a design note, not a UI text: it is not on the frame (it also holds a forbidden word). It is here. |
| Persona | Maya Ortiz (faculty) imports learners. I5 is written for an administrator, because connecting a system is not a faculty task. This is Claude's guess. |

## Gaps I expect in Cursor's report

- Stepper, select, file drop and count tile do not exist as components. They are plain frames (named in each section).
- The "Button" property that holds Primary or Secondary may not be a plain variant. Follow the Shared rules.
- Shell layer names may differ from the AV1 names ("Breadcrumb", "Page header", "Greeting"). If so: stop and report.
- Deleting the extra badge instance in a cloned row may not be possible. Then hide it (visible off) and report.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. The chat may start only after "Shell facts" in `11-16-merge-00-shared.md` is filled (status is not "not yet").

Full run, all five screens:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f5-import.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "I1 · Import, Source", "I2 · Import, Map", "I3 · Import, Review", "I4 · Import, Done", "I5 · Settings, Integrations". After each section, run its check list and take a screenshot before you start the next section.`

Rerun of one section (I2 to I4 need a finished I1 in the Section; I5 does not):

- I1: `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f5-import.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "I1 · Import, Source". After each section, run its check list and take a screenshot before you start the next section.`
- I2: `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f5-import.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "I2 · Import, Map". After each section, run its check list and take a screenshot before you start the next section.`
- I3: `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f5-import.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "I3 · Import, Review". After each section, run its check list and take a screenshot before you start the next section.`
- I4: `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f5-import.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "I4 · Import, Done". After each section, run its check list and take a screenshot before you start the next section.`
- I5: `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f5-import.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "I5 · Settings, Integrations". After each section, run its check list and take a screenshot before you start the next section.`

After each run, check in Figma that the frame really exists. Cursor has once reported success without writing anything.

## Flow rules

```
SECTION AND SLOTS
- Write only inside Section "5 · Import" on the target page. If it does not exist, stop and report.
- Slots (x relative to the Section, y 120): I1 x 80, I2 x 1640, I3 x 3200, I4 x 4760, I5 x 6320. Each screen is 1440 x 900, clip content on.
- Label at y 76, caption at y 1044, as in the Shared rules (clone "Label · AV0" 1603:10620 and "Caption · AV0" 1603:10621).
- If a frame with the same name already exists in the Section, stop and report. Never overwrite.

SOURCE NODES (read-only, clone only). Page "👤 SRV flow [D]" (960:51213):
- "Card · Devices" 1560:7926 in "AV1 · Room devices" 1559:8319: table card (header 52, column header 40, rows 56 high, five cells per row).
- "Card · Readiness" 1560:7914 in AV1: card with a badge and a text.
- Texts to clone for styles, all in AV1: card title "Devices in this room" 1560:7928 (Bold 14); body Medium "Overhead camera" 1560:7942; body Regular "PTZ camera" 1560:7947; muted "Device" 1560:7932 (Regular 12, text/secondary); label "+ Assign a device" 1560:7997 (Medium 14).
- "Settings tabs" 1624:9476 and "Card · Unassigned devices" 1624:9234, both in "AV0b · Rooms, with settings tabs" 1624:9221.
- Buttons: Primary "Button · Start recording" 1694:9947, Secondary "Button · Room devices" 1694:9998 (both SM, in "CO1 · Center overview" 1692:9756). Badges: as in the Shared rules.
- "Shell · Page": id in "Shell facts".

STEP BY STEP SCREENS
- I2, I3, I4 are clones of the finished frame "I1 · Import, Source" (same Section, new slot). Keep the shell, breadcrumb, page header and "Stepper". Delete what the section says and add the new content.
- Content order inside "Content" (24 px padding, 24 px gap, as in AV1): Breadcrumb, Page header, Stepper, the screen content, Footer.
- All new frames inside "Content" are fill width (1132). All new frames are auto-layout.

SHELL (every screen)
- Active nav item: People (I1 to I4), Settings (I5). Method: "Shell facts".
- Breadcrumb for I1 to I4: People / Learners / Import (clone the texts: set "People", "Learners", "Import"; the last text keeps the Medium 12 primary style). If the Breadcrumb has a different number of texts than five (text, separator, text, separator, text), stop and report.
- Page header for I1 to I4: "Greeting" text: "Import people". Subtitle (text layer "Content" inside the instance "Text · Tuesday, January 19"): "Learners · Riverbend College of Nursing". Hide "Button · Customize" (visibility off).

PLAIN BUILDS (no component exists; build exactly as written)
Stepper "Stepper": auto-layout horizontal, gap spacing/3 (12), vertically centred, hug width and height. Children in this order:
  "Step · Source", "Line 1", "Step · Map", "Line 2", "Step · Review", "Line 3", "Step · Done".
  - "Step · <name>": auto-layout horizontal, gap spacing/2 (8), vertically centred, hug. Children: "Circle", then the label text.
  - "Circle": frame 24 x 24, auto-layout (centred both ways), radius/full, 1 px inside stroke border/default. It holds one muted-style text (clone of 1560:7932, Regular 12): the number "1", "2", "3" or "4".
  - "Line n": frame 32 x 1, no fill, stroke border/default, bottom weight 1 and all other weights 0.
  - Step labels (set the text "Source", "Map", "Review", "Done") are clones of body texts.
  - Three states, set by these rules:
    Active: Circle fill core/neutral, stroke weight 2, number text copies the fills of the clone 1560:7942 (text/primary); label is a clone of 1560:7942 (Medium 14, text/primary).
    Done: Circle fill core/neutral, stroke weight 1, the number is replaced by the text "✓", text/primary; label is a clone of 1560:7947 (Regular 14, text/primary).
    Upcoming: Circle fill core/background-surface, stroke weight 1, number text/secondary; label is a clone of 1560:7947 whose fills are replaced by the fills array of 1560:7932 (text/secondary).
  - To copy a text colour use: node.fills = sourceText.fills (this keeps the variable binding). Never type a colour.
Select "Select · <field>": auto-layout horizontal, width 260, height 32, padding left and right spacing/3 (12), space between, vertically centred, fill core/background-surface, 1 px inside stroke border/default, radius/element-10, clip content on. Children: the value (body Regular 14, a clone of 1560:7947) and the text "▾" (muted, a clone of 1560:7932).
Count tile "Count · <label>": card (Shared rules definition) as auto-layout vertical, padding spacing/4 (16), gap spacing/1 (4), fill width. Children: card title text (Bold 14, clone of 1560:7928), muted text (clone of 1560:7932). Tiles sit in a frame "Counts": auto-layout horizontal, gap spacing/6 (24), fill width, hug height, no fill, no stroke; the tiles are fill width.
Footer "Footer": auto-layout horizontal, fill width, hug height, space between, vertically centred, no fill, no stroke. Left: one muted text (the note of the screen). Right: a frame "Buttons" (auto-layout horizontal, gap spacing/3 (12), hug) that holds the cloned buttons. Buttons: clone, set the label text and the Primary or Secondary variant property. Name each "Button · <label>".

WORDS
- Never on a frame: OpSpace, Essentials, SRV, Center overview, Video review, Dashboard.
- The word "Learners" in the breadcrumb is the People page; do not add other menu words.
```

## I1 · Import, Source

Frame name `I1 · Import, Source`. Slot 1: x 80, y 120. Active nav: People. Low-fi `18:1508`.

```
Goal: one frame "I1 · Import, Source" in slot 1 of Section "5 · Import".

1 · Shell
- Clone "Shell · Page" (id in "Shell facts") into the Section. Place it at x 80, y 120. Rename it "I1 · Import, Source". Size 1440 x 900, clip content on.
- Set the active nav item to People (method in "Shell facts").
- Breadcrumb and Page header: as in "Flow rules > SHELL".
- If the Shell has no layer "Breadcrumb", "Page header" or "Greeting": stop and report.

2 · Stepper
Add the frame "Stepper" as the third child of "Content" (after "Page header"), as in "Flow rules > PLAIN BUILDS".
- State: "Step · Source" Active (number "1"). "Step · Map" Upcoming ("2"). "Step · Review" Upcoming ("3"). "Step · Done" Upcoming ("4").

3 · Two source cards
Add a frame "Sources" as the fourth child of "Content": auto-layout horizontal, gap spacing/6 (24), fill width, hug height, no fill, no stroke. Two cards inside it, each fill width.
3a · Card "Card · Upload a file". A card (Shared rules). Auto-layout vertical, padding spacing/6 (24), gap spacing/2 (8). Set the stroke to dashed (dash pattern 6, 4), still border/default, 1 px. If the dash pattern cannot be set, keep it solid and report.
- Text, card title style (clone 1560:7928): "Upload a file"
- Text, muted style (clone 1560:7932), fill width: "Excel or CSV. Drop it here or choose a file."
- A gap of spacing/4 (16): put it as extra bottom padding on the muted text, or as a frame "Spacer" 1 x 16 with no fill.
- Button "Button · Choose file": clone Secondary (1694:9998), label "Choose file".
3b · Card "Card · From Canvas". Same card build, solid stroke.
- Title: "From Canvas"
- Muted text: "Connected · last sync today 02:00"
- Button "Button · Use Canvas": clone Secondary, label "Use Canvas".
Both cards must end up the same height (set both to the taller one if they differ).

4 · Card "Past imports"
Add a card as the fifth child of "Content": clone "Card · Devices" (1560:7926) and rename it "Card · Past imports". Width fill (1132). Edit it:
- "Devices header": left text (card title): "Past imports". Delete the right text "4 devices · 1 not found".
- "Columns header": the five cell texts become: "Date", "Source", "Result", "By", "" (empty, keep the last cell as a frame with no text). Cell widths: 150, 300, 330, 222, 80 (all five cells, in the header and in every row). Set the cell frames to those fixed widths.
- Delete the rows "Row · Overhead camera", "Row · Patient monitor capture", "Row · Audio kit" and the frame "Assign row". Keep "Row · Foot camera". Duplicate it twice. Rename the three rows "Row · 05 Jan 2027", "Row · 15 Dec 2026", "Row · 29 Oct 2026".
- In each row: the Status cell ("Cell · Status") holds a badge instance. Delete the badge instance (not detach) and put a clone of the text from "Cell · Kind" into that cell. If the badge cannot be deleted, hide it and report it. Then rename the cells "Cell · Date", "Cell · Source", "Cell · Result", "Cell · By", "Cell · Undo" and set the texts:
  - Row 1: "05 Jan 2027" · "Canvas" · "3 added, 12 updated" · "Maya Ortiz" · "Undo"
  - Row 2: "15 Dec 2026" · "File: learners-fall.xlsx" · "42 added, 8 updated" · "Maya Ortiz" · "Undo"
  - Row 3: "29 Oct 2026" · "File: staff-list.csv" · "6 added, 0 updated" · "Jonas Weber" · "Undo"
- The text "Undo" in "Cell · Undo": label style (Medium 14): copy the font style from the clone 1560:7997.
- The "Date" cell texts of the rows: Medium style as in AV1 (the device name was Medium); the other cells Regular. Keep what the clone has.

5 · Footer
Add the frame "Footer" as the sixth child of "Content". Left text (muted): "Same four steps for people, events and courses. Connect Canvas once in Settings." No buttons (delete the frame "Buttons", or do not create it).

6 · Label and caption
- Label: "I1 · Import, Source". Layer "Label · I1".
- Caption "Caption · I1", two lines:
  "Faculty (Maya Ortiz): starts a people import from People, either with a file or from Canvas, and sees earlier imports."
  "New: one import with four steps, shown as a step bar; earlier imports are listed with Undo."

Check before you report:
- "I1 · Import, Source" is 1440 x 900 at x 80, y 120 in Section "5 · Import". The active nav item is People.
- "Content" has six children in this order: Breadcrumb, Page header, Stepper, Sources, Card · Past imports, Footer.
- The breadcrumb reads: People / Learners / Import. The header title is "Import people".
- "Stepper" has seven children. Only "Step · Source" is Active.
- "Sources" has two cards of the same height. "Card · Past imports" has three rows and three "Undo" texts.
- Both buttons exist ("Choose file", "Use Canvas"), both cloned, none detached.
- No forbidden word, no clipped text, nothing leaves the 1440 x 900 frame.
```

## I2 · Import, Map

Frame name `I2 · Import, Map`. Slot 2: x 1640, y 120. Active nav: People. Low-fi `18:1660`.

```
Goal: one frame "I2 · Import, Map" in slot 2 of Section "5 · Import". Run this only after I1 is done. If "I1 · Import, Source" is not in the Section, stop and report.

1 · Clone
- Clone "I1 · Import, Source" inside the Section. Place the clone at x 1640, y 120. Rename it "I2 · Import, Map". Do not change I1.

2 · Stepper
- "Step · Source": Done (circle text "✓", stroke weight 1, label as the Done state).
- "Step · Map": Active (number "2").
- "Step · Review" and "Step · Done": Upcoming (unchanged).
Set the states as in "Flow rules > PLAIN BUILDS" (clone the labels again from the sources, do not recolour by hand).

3 · Remove the I1 content
In "Content", delete "Sources" and, after step 4 has taken what it needs, the original "Card · Past imports" (steps 4 and 5 reuse its clone).
Do step 4 first (make the clone), then delete the original and "Sources".

4 · Card "Card · Mapping"
- Duplicate "Card · Past imports" and rename the duplicate "Card · Mapping". Put it after "Stepper".
- "Devices header" (rename "Mapping header"): left text (card title): "Match your columns". Right text (muted, add a clone of the muted text 1560:7932): "learners-spring.xlsx · 52 rows".
- "Columns header": delete the two last cells so three remain. Texts and widths: "Column in your file" 340, "Goes to" 340, "Example" 402.
- Rows: keep "Row · 05 Jan 2027" and duplicate it four times (five rows). Rename them "Row · Full name", "Row · E-mail", "Row · Class", "Row · Role", "Row · Student ID". In each row delete the two last cells so three remain, named "Cell · File column", "Cell · Goes to", "Cell · Example", widths 340, 340, 402.
- Cell texts:
  - "Full name" · Select "Name" · "Ava Miller"
  - "E-mail" · Select "Email" · "ava.miller@school.edu"
  - "Class" · Select "Group" · "NURS 340 · Group B"
  - "Role" · Select "Role" · "Learner"
  - "Student ID" · Select "Not imported" · "20418"
- "Cell · Goes to" (auto-layout horizontal, gap spacing/3 (12), vertically centred) holds: a muted text "→" (clone 1560:7932), then a Select (plain build in "Flow rules"), named "Select · Name", "Select · Email", "Select · Group", "Select · Role", "Select · Not imported". In the row "Student ID" the value text of the Select is muted: copy the fills of 1560:7932 to it.
- The first column ("Cell · File column") texts are Medium style (as the first cell of the clone), the third column Regular.
- Row heights stay 56. If the Select (32 high) does not fit, report it.

5 · Match note
Inside "Card · Mapping", add a last child, the frame "Match note": auto-layout horizontal, height 44, padding left and right spacing/6 (24), vertically centred, 1 px top stroke border/default. One body text (clone 1560:7947): "4 of 5 matched automatically."

6 · Footer
- "Footer" left text (muted): "Same four steps for people, events and courses. Connect Canvas once in Settings." (unchanged)
- Add the frame "Buttons" on the right: "Button · Back" (Secondary, label "Back") and "Button · Next: Review" (Primary, label "Next: Review"). Clone from the sources in "Flow rules".

7 · Page header
Unchanged ("Import people").

8 · Label and caption
- Label: "I2 · Import, Map". Layer "Label · I2".
- Caption "Caption · I2", two lines:
  "Faculty (Maya Ortiz): checks which column of the file goes where, before anything is imported."
  "New: columns are matched automatically and only the odd one needs a choice."

Check before you report:
- "I2 · Import, Map" is 1440 x 900 at x 1640, y 120. Active nav item People. "I1 · Import, Source" is unchanged.
- "Content" has children: Breadcrumb, Page header, Stepper, Card · Mapping, Footer.
- "Stepper": Source Done, Map Active, Review and Done Upcoming.
- "Card · Mapping" has: header, column header, five rows, "Match note". Five Selects exist; the fifth reads "Not imported".
- "Footer" has the note and two buttons (Back Secondary, Next: Review Primary).
- No clipped text, no forbidden word, nothing outside the frame.
```

## I3 · Import, Review

Frame name `I3 · Import, Review`. Slot 3: x 3200, y 120. Active nav: People. Low-fi `18:1769`.

```
Goal: one frame "I3 · Import, Review" in slot 3 of Section "5 · Import". Run this only after I1 and I2 are done. If "I2 · Import, Map" is not in the Section, stop and report.

1 · Clone
- Clone "I2 · Import, Map" inside the Section. Place the clone at x 3200, y 120. Rename it "I3 · Import, Review". Do not change I2.

2 · Stepper
- "Step · Source" and "Step · Map": Done.
- "Step · Review": Active (number "3").
- "Step · Done": Upcoming.

3 · Counts
Add the frame "Counts" (Flow rules) after "Stepper". Three tiles "Count · New", "Count · Updated", "Count · Need a decision":
- "42 new" / muted: "Not in the system yet"
- "8 will be updated" / muted: "Matched by email"
- "2 need a decision" / muted: "Fix them below or skip them"

4 · Card "Needs a decision"
- Duplicate "Card · Mapping" and rename the duplicate "Card · Needs a decision". Put it after "Counts". Delete "Card · Mapping" afterwards, as the last step of this section. Delete the child "Match note" of the duplicate.
- "Mapping header": left text (card title): "Needs a decision". Right text (muted): "2 people".
- "Columns header": four cells. Texts and widths: "Row" 90, "Name" 220, "Problem" 420, "Fix" 352. (Duplicate a cell if needed.)
- Rows: two rows "Row · 17" and "Row · 31", four cells each named "Cell · Row", "Cell · Name", "Cell · Problem", "Cell · Fix", the same widths. Delete the Select and the "→" text of the old cells.
  - Row 17: "17" · "Liam Ortega" · "No role in the file" · Button Secondary SM, label "Choose a role"
  - Row 31: "31" · "Mia Chen" · "Same email as an existing person" · Button Secondary SM, label "Update or skip"
- Buttons: clone Secondary (1694:9998). Name them "Button · Choose a role" and "Button · Update or skip". They sit in the cell "Cell · Fix".

5 · Note card
Clone "Card · Readiness" (1560:7914), rename "Card · No deactivations", place it after "Card · Needs a decision". Delete its badge instance (not detach; if it cannot be deleted, hide it and report). Text (body): "Nobody will be deactivated by this import."

6 · Footer
- Left text (muted): "People are matched by email. The import pauses if it would deactivate more than 10 people."
- "Buttons": "Button · Back" (Secondary, "Back") and "Button · Import 50 people" (Primary, label "Import 50 people").

7 · Label and caption
- Label: "I3 · Import, Review". Layer "Label · I3".
- Caption "Caption · I3", two lines:
  "Faculty (Maya Ortiz): sees what the import will do and decides the two odd rows before it runs."
  "New: a review step with counts and a safety rule, so nothing changes by surprise."

Check before you report:
- "I3 · Import, Review" is 1440 x 900 at x 3200, y 120. Active nav item People. I2 is unchanged.
- "Content" has children: Breadcrumb, Page header, Stepper, Counts, Card · Needs a decision, Card · No deactivations, Footer. "Card · Mapping" is gone.
- "Stepper": Source and Map Done, Review Active, Done Upcoming.
- "Counts" has three tiles of equal width. "Card · Needs a decision" has two rows and two buttons.
- The button "Import 50 people" is Primary, "Back" is Secondary.
- No clipped text, no forbidden word, nothing outside the frame.
```

## I4 · Import, Done

Frame name `I4 · Import, Done`. Slot 4: x 4760, y 120. Active nav: People. Low-fi `18:1885`.

```
Goal: one frame "I4 · Import, Done" in slot 4 of Section "5 · Import". Run this only after I3 is done. If "I3 · Import, Review" is not in the Section, stop and report.

1 · Clone
- Clone "I3 · Import, Review" inside the Section. Place the clone at x 4760, y 120. Rename it "I4 · Import, Done". Do not change I3.

2 · Stepper
- "Step · Source", "Step · Map" and "Step · Review": Done.
- "Step · Done": Active (number "4").

3 · Remove the review content
Delete "Card · Needs a decision" and "Card · No deactivations". Keep "Counts" (step 5 changes it) and "Footer".

4 · Result title
Add a text as the fourth child of "Content" (after "Stepper"), a clone of the text "Greeting" in "Page header" (same size and weight, text/primary). Name it "Result title". Text: "50 people imported".

5 · Counts
Move "Counts" to after "Result title". Change the three tiles (rename the layers too):
- "Count · Added": "42 added" / muted: "New learners"
- "Count · Updated": "8 updated" / muted: "Details changed"
- "Count · Skipped": "2 skipped" / muted: "Left out on purpose"

6 · Actions
Add a frame "Actions" after "Counts": auto-layout horizontal, gap spacing/3 (12), hug, no fill, no stroke. Three buttons (clone, set label and variant):
- "Button · See imported people": Primary, label "See imported people"
- "Button · Undo import": Secondary, label "Undo import"
- "Button · Import another file": Secondary, label "Import another file"

7 · Footer
- Left text (muted): "Every import can be undone and stays in the history."
- Delete the frame "Buttons" in "Footer" (the actions are above).

8 · Label and caption
- Label: "I4 · Import, Done". Layer "Label · I4".
- Caption "Caption · I4", two lines:
  "Faculty (Maya Ortiz): sees the result of the import and can open the new people or undo everything."
  "New: Undo import is on the result page, and the import stays in the history."

Check before you report:
- "I4 · Import, Done" is 1440 x 900 at x 4760, y 120. Active nav item People. I3 is unchanged.
- "Content" has children: Breadcrumb, Page header, Stepper, Result title, Counts, Actions, Footer.
- "Stepper": the first three Done, "Step · Done" Active.
- Counts read 42 added, 8 updated, 2 skipped. Three buttons exist, only "See imported people" is Primary.
- The Footer has the note only.
- No clipped text, no forbidden word, nothing outside the frame.
```

## I5 · Settings, Integrations

Frame name `I5 · Settings, Integrations`. Slot 5: x 6320, y 120. Active nav: Settings. Low-fi `18:1988`. This section does not need I1 to I4 (it clones the Shell). It uses sources in "AV0b".

```
Goal: one frame "I5 · Settings, Integrations" in slot 5 of Section "5 · Import".

1 · Shell
- Clone "Shell · Page" (id in "Shell facts") into the Section. Place it at x 6320, y 120. Rename it "I5 · Settings, Integrations". Size 1440 x 900, clip content on.
- Set the active nav item to Settings (method in "Shell facts").
- Breadcrumb: two texts. Set the first to "Settings", the last to "Integrations". If the Breadcrumb has five children, delete the last two (a "Separator" text and a text) after setting the first text, the first separator and the third child ("Integrations"). Then it reads: Settings / Integrations.
- Page header: "Greeting": "Settings". Subtitle (text layer "Content" in the instance): "Riverbend College of Nursing". Hide "Button · Customize".

2 · Tab strip
- Clone "Settings tabs" (1624:9476, page "👤 SRV flow [D]", frame 1624:9221) into "Content", as the third child (after "Page header"). Keep its name "Settings tabs".
- Edit the tabs. Final order and layer names: "Tab · Organization", "Tab · Users and access", "Tab · Integrations", "Tab · Notifications".
  - "Tab · Organization": keep (inactive: text/secondary, no stroke).
  - "Tab · Recordings & privacy": rename "Tab · Users and access", text "Users and access". It is inactive.
  - "Tab · Rooms & devices" is the ACTIVE tab in the source (text/primary, 2 px bottom stroke). Rename it "Tab · Integrations", text "Integrations", and move it to the third position.
  - Delete "Tab · Sign-in & security", "Tab · Email" and the old "Tab · Integrations".
  - Duplicate "Tab · Organization", rename it "Tab · Notifications", text "Notifications", and put it last.
- Make sure each tab is hug width (layout sizing horizontal HUG), the gap stays 24, and exactly one tab (Integrations) is active.

3 · Three integration cards
Add a frame "Integrations" as the fourth child of "Content": auto-layout vertical, gap spacing/3 (12), fill width, hug height, no fill, no stroke. Three cards inside, each a clone of "Card · Unassigned devices" (1624:9234, fill width):
3a · "Card · Canvas"
- Title text ("Unassigned title" layer, rename it "Title"): "Canvas"
- Muted-style description ("Device 1" layer, rename it "Description"; copy the fills of the muted clone 1560:7932 so it is text/secondary, Regular 14): "Connected · syncs people and courses every night at 02:00 · last sync today 02:00, no errors"
- Delete the text "Device 2".
- Button ("Button · Assign" layer): label "Manage", Secondary. Rename it "Button · Manage".
3b · "Card · Calendar feed"
- Title: "Calendar feed"
- Description: "Not connected"
- Button: label "Connect", Primary. Rename it "Button · Connect".
3c · "Card · Sign-in directory (LDAP)"
- Title: "Sign-in directory (LDAP)"
- Description: "Connected · syncs users and groups nightly"
- Button: label "Manage", Secondary. Name "Button · Manage".
Check that each card has the button on the right and the text on the left, vertically centred. If the card does not follow the new text, fix with auto-layout (card: horizontal, space between, vertically centred), never with positions.

4 · Footer
Add the frame "Footer" as the fifth child of "Content": one muted text: "Connect once here. Every import then offers the connected source."

5 · Label and caption
- Label: "I5 · Settings, Integrations". Layer "Label · I5".
- Caption "Caption · I5", two lines:
  "Administrator: connects Canvas, the calendar feed and the sign-in directory once, so every import can use them."
  "New: all connections live in one place in Settings; the import steps only offer what is connected."

Check before you report:
- "I5 · Settings, Integrations" is 1440 x 900 at x 6320, y 120. Active nav item Settings.
- "Content" has children: Breadcrumb, Page header, Settings tabs, Integrations, Footer.
- "Settings tabs" has four tabs in order Organization, Users and access, Integrations, Notifications. Only Integrations has the 2 px bottom stroke and text/primary.
- "Integrations" has three cards. Two buttons "Manage" (Secondary), one "Connect" (Primary). None detached.
- The frame says nothing about where Settings sits in the product menu (the unverified note is not on the frame).
- No clipped text, no forbidden word, nothing outside the frame.
```

## After these run

Claude checks I1 to I5 in Figma against the low-fi board, then the whole Section "5 · Import". Open points for the workshop: where Settings sits in the real menu (not verified), and whether events and courses reuse the same four steps.
