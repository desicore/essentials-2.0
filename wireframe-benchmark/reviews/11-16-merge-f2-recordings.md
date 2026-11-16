# 11-16 · F2 Recordings and debrief (L5, L6, L6b)

Three greyscale wireframes for the workshop on 11-17. They are part of the "one app" merge. The concept and the Shared rules are in `11-16-merge-00-shared.md`. This file builds only the Section "2 · Recordings and debrief".

## Context

- Recordings is a menu entry in the group "Sessions" (below Live). It lists past recordings.
- Opening one recording gives ONE page with two tabs: "Recording" (watch, timeline, annotations) and "Debrief". Right after a session ends, the page opens on the Debrief tab.
- The Debrief tab here is a simple placeholder for Gabor's debrief design (page "Debriefing Tablet (G)" `706:22204`). It is not a copy.
- Content spec: low-fi screens on the FigJam board `KStutzzTvN5ENoWJPj07Zg`: L5 `8:1304`, L6 `8:1047`, L6b `10:1055`. Sample data: the contract (Riverbend), not the low-fi.
- All three low-fi screens show the FULL side navigation (not the collapsed rail). So all three screens are page screens, cloned from "Shell · Page".

## What I found in the file (11-16, read-only)

- Sections "VR1 / VR2 / VR3 · Video review · Sketches" were never built. Page "👤 SRV flow [D]" `960:51213` holds only Sections at y 0, 1500, 3000 (`1343:3275`, `1559:8318`, `1692:9755`). Nothing to clone from there. Build from the sources below.
- `706:22204` is a PAGE, not a frame. It holds iPad debrief frames. Landscape "AI feedback" `723:8850` shows: a card "Formative feedback" with a line "AI feedback written from the session transcription, annotations and checklist.", two sub-tabs (EHLI feedback, Facilitator feedback), three blocks side by side ("What went well", "Areas for improvement", "Reflection Questions", each with bullets), a "Video control" bar (play, −10s, +10s, 02:30, track, 06:30), and bottom tabs Feedback, Annotations & Clips, Checklist, Layout. Landscape "Checklist tab" `725:9385` shows "Evaluated checklist": groups (Compressions, Defibrillation, Medication & airway, Team communication) with numbered Yes/No questions.
- Player frame "Preview · Debrief" `1098:6920` (Components page `675:31351`, 1440 × 948). Its Debrief panel `1098:7612` already holds the feedback content that matches Gabor's design: instance "SRV / Feedback content" `I1098:7612;1098:5839` (528 × 514). It shows the toggle "AI feedback" / "Facilitator feedback", the line "Written by Ehli from the transcript, annotations and checklist.", and three cards ("What went well", "Areas for improvement", "Reflection questions", three bullets each, Sepsis sample text).
- Playback bar: instance "SRV / Playback bar" `1098:7505` (784 × 60, auto-layout horizontal). It holds "Transport" (play / pause, "Button · −10s", "Button · +10s") and instance "Timeline" (614 × 60) with readout "00:00 / 18:42" and five marker slots.
- Annotation input: instance "SRV / Annotation input" `1098:7586` (784 × 32), with text field and the buttons "Discuss", "Good practice", "Marker".
- Tabs: an existing Tabs instance is inside the debrief panel: "Tabs" `I1098:7612;1098:5791;1096:5642` (545 × 32, properties size=md, hasDivider=true). Its children are instances "Tab · Feedback" (selected, shows an "Indicator"), "Tab · Annotations", "Tab · Checklist", "Tab · Chapters", "Tab · Transcript". Each tab item has the text property "Label#222:208", the boolean "Show Icon#222:215", and the variant "state" (value "selected" seen). Use this for the page tabs.
- "SRV / Mode switch" `1098:7451` (property Active=Debrief) is a pill switch. Do NOT use it. The low-fi shows underlined tabs.
- Camera tiles show a red recording dot. Not used here: the video is a grey placeholder.
- Layer names of "Shell · Page" are NOT known yet (F0 has not run). Names used below ("Breadcrumb", "Page header", "Content") come from "AV0 · Rooms" `1603:10516` and may differ. Every step that depends on them says what to do if the layer is missing.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Menu word | "Recordings" is now the word for PAST recordings. Today the word "Recording" starts a new one. The word flips for users who know the old product. Open for the workshop. |
| Navigation | Full side navigation on all three screens, as in the low-fi. No collapsed rail. |
| Breadcrumb | L5 has none (top-level entry). L6 and L6b have "Recordings / <recording>". |
| Tabs | The existing "Tabs" instance, labels "Recording" and "Debrief". The tab row also holds the buttons "Share" and "Download" on the right (the low-fi puts Download below the video in L6; one place is simpler). |
| Sample data | Past recordings are dated Mon 18 Jan 2027 and earlier (the contract says today is Tue 19 Jan 2027). Opened recording: NURS 310 · Group A, Sepsis recognition, Sim Room 2, 09:00 to 09:19, 18:42 long, 5 learners. |
| Table | Columns as in the low-fi: Date, Title, Room, Learners, Scenario, Length. No thumbnails, no state badges, no day groups. Plain auto-layout rows (there is no Table component). |
| Debrief tab (L6b) | Left: small video, playback bar, card "Marked moments". Right: the feedback content cloned from the player panel (stands in for Gabor's "Formative feedback" with its three blocks), then a card "Checklist results". The checklist, the Annotations & Clips list and the layout choice of Gabor's design are not drawn. |

## Gaps I expect in Cursor's report

- Cloning a nested instance (Tabs, Playback bar, Feedback content, Annotation input) from the Components page may fail. Fallbacks are in each step.
- Hiding extra tab items inside the Tabs slot may not work.
- "Playback bar" or "Feedback content" may not shrink or grow cleanly when resized.
- The layer names in "Shell · Page" may differ from "Breadcrumb", "Page header", "Content".
- The "Tab" variant property for the unselected state may be named differently from "default".
- The learners button text "4 learners" is not used here. No instance with a learner count is cloned.

## How to run

Model: **Claude Sonnet 5.5 · High**. New Cursor chat.

The chat may start only after the block "Shell facts" in `11-16-merge-00-shared.md` is filled in (F0 done and reviewed). Do not start it while that block says "not yet".

All three sections in one chat:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L5 · Recordings", "L6 · Recording", "L6b · Recording, Debrief tab". After each section, run its check list and take a screenshot before you start the next section.`

One section only (for reruns):

- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L5 · Recordings". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L6 · Recording". After each section, run its check list and take a screenshot before you start the next section.`
- `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f2-recordings.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "L6b · Recording, Debrief tab". After each section, run its check list and take a screenshot before you start the next section.`

L6 and L6b clone parts from L6 only if you tell them to. They do not depend on L5. Run L5 first anyway; it is the entry screen.

After the run, check that the frames really exist in Figma. Cursor has once reported success without writing anything.

## Flow rules

```
SECTION AND SLOTS
- Write only in Section "2 · Recordings and debrief" (page "🧭 One app · merge [D]", y 3000, 12640 × 1240). Id: see "Shell facts".
- L5 · Recordings = slot 1, x 80, y 120.
- L6 · Recording = slot 2, x 1640, y 120.
- L6b · Recording, Debrief tab = slot 3, x 3200, y 120.
- All three are page screens, 1440 × 900, clip content on. Active nav item on all three: "Recordings". Set it with the method in "Shell facts".
- Label at y 76, caption at y 1044, as in the Shared rules.

SOURCES (read, clone from them, never edit them)
- "Shell · Page": id in "Shell facts". Clone for every screen.
- Player parts on the Components page (675:31351), inside frame "Preview · Debrief" 1098:6920:
  - "SRV / Playback bar" 1098:7505 (784 × 60)
  - "SRV / Annotation input" 1098:7586 (784 × 32)
  - "Tabs" I1098:7612;1098:5791;1096:5642 (inside "SRV / Debrief tabs" in "SRV / Debrief panel" 1098:7612)
  - "SRV / Feedback content" I1098:7612;1098:5839 (inside "SRV / Debrief panel")
- Buttons: "Button · Start recording" 1694:9947 (Primary) and "Button · Room devices" 1694:9998 (Secondary), in "CO1 · Center overview" 1692:9756 on page "👤 SRV flow [D]" 960:51213.
- Gabor's debrief design (read only, no clone): page "Debriefing Tablet (G)" 706:22204, frames 723:8850 and 725:9385.

LAYER NAMES IN THE CLONE OF "Shell · Page"
- Look for the frame "Content", and in it "Breadcrumb" and "Page header". If a name is missing, list the children of the clone and use the layer in the same role (the content area, the breadcrumb, the page header). Report the real names. If you cannot find a content area, stop and report.
- Do not rebuild or relabel the side navigation.

CHIP (used in L5), plain frame, no component exists
- Auto-layout horizontal, height 32, padding left and right spacing/3 (12), gap spacing/1 (4), vertically centred, corner radius radius/full, 1 px inside stroke border/default, no fill. One text, Regular 14, text/primary. A dropdown chip ends its text with " ▾" (U+25BE). Name: "Chip · <label>".

TEXT KINDS
- Title: Bold 14. Body: Regular 14, line height 20, text/primary. Muted: Regular 12, text/secondary. Label: Medium 14, text/primary. Clone an existing text of the kind, change its characters.

FORBIDDEN ON FRAMES: OpSpace, Essentials, SRV, Center overview, Video review, Dashboard. Layer names inside cloned instances may contain "SRV /". Layer names are not frame text: leave them. Do not write the words in any text.

SAMPLE DATA FOR THIS FLOW
- Past recordings, newest first (date, title, room, learners, scenario, length):
  1. 18 Jan 2027 | NURS 310 · Group A | Sim Room 2 | 5 | Sepsis recognition | 00:18:42
  2. 18 Jan 2027 | NURS 340 · Group B | Sim Room 1 | 6 | Postpartum hemorrhage | 00:24:10
  3. 15 Jan 2027 | Ad hoc · Skills Lab 1 | Skills Lab 1 | — | — | 00:09:48
  4. 14 Jan 2027 | NURS 310 · Group B | Sim Room 1 | 6 | Chest pain (STEMI) | 00:17:55
  5. 13 Jan 2027 | Paramedic intake 3 | Sim Room 2 | 12 | Cardiac arrest | 00:41:26
  6. 12 Jan 2027 | NURS 340 · Group B | Skills Lab 1 | 6 | Wound care | 00:22:30
- Opened recording (L6, L6b): row 1. Title "NURS 310 · Group A". Meta "Sepsis recognition · Sim Room 2 · Mon 18 Jan 2027, 09:00 to 09:19".
- Marked moments: "03:10 · Mark moment", "07:42 · Handover unclear", "11:05 · Mark moment", "14:30 · Escalation late".
```

## L5 · Recordings

```
Goal: one page screen "L5 · Recordings" in slot 1 of Section "2 · Recordings and debrief". Low-fi: 8:1304.

1 · Clone
- Clone "Shell · Page" (id in "Shell facts") into the Section. Place at x 80, y 120. Rename "L5 · Recordings". Size 1440 × 900, clip content on.
- Set the active side-navigation item to "Recordings" with the method in "Shell facts". If this is not possible, report it and leave the navigation as it is.
- In "Content", delete "Breadcrumb" (Recordings is a top-level entry).

2 · Page header
In "Page header":
- Title text: "Recordings".
- Subtitle text (the second text, muted): "Past recordings from events and ad hoc sessions."
- If the header holds a button, set it hidden (visible = false). Do not relabel it.
If the header has no subtitle text, leave it out and report it.

3 · Filter row
Add a frame as the second child of "Content" (after "Page header"). Name "Filter row". Width fill (1132), height hug, auto-layout horizontal, gap spacing/2 (8), vertically centred, no fill, no stroke. Children, in order:
- "Search field": frame, width 360, height 32, auto-layout horizontal, padding left and right spacing/3 (12), vertically centred, corner radius radius/element-10, 1 px inside stroke border/default, fill surface/card. One text, Regular 14, text/secondary: "Search title, learner or room".
- "Chip · Date": "Date ▾"
- "Chip · Room": "Room ▾"
- "Chip · Learner": "Learner ▾"
- "Chip · Scenario": "Scenario ▾"
(Chips as defined in Flow rules.)

4 · Card "Recordings"
Add a card as the third child of "Content". Name "Card · Recordings". Width fill (1132), height hug, auto-layout vertical, padding 0, gap 0. (Card = Shared rules.)

4a · "Columns header": auto-layout horizontal, height 40, padding left and right spacing/6 (24), gap 0, vertically centred. Cells are frames "Cell · <label>", each with one muted text, left-aligned:
- "Cell · Date": width 140, text "Date"
- "Cell · Title": width 300, text "Title"
- "Cell · Room": width 160, text "Room"
- "Cell · Learners": width 100, text "Learners"
- "Cell · Scenario": width 284, text "Scenario"
- "Cell · Length": width 100, text "Length"

4b · Rows. Each row is a frame "Row · <title> · <date>", auto-layout horizontal, height 56, padding left and right spacing/6 (24), gap 0, vertically centred, 1 px top stroke border/default. Six cells, same names and widths as 4a, each with one body text. The Title cell text is Medium 14.
Build row 1 completely. Clone it five times. Change only the texts and the row name. Texts: the six rows in "SAMPLE DATA FOR THIS FLOW" (Flow rules). Length is shown as in the table (for example "00:18:42").

4c · "Footer row": auto-layout horizontal, height 44, padding left and right spacing/6 (24), vertically centred, space between, 1 px top stroke border/default. Left: muted text "Showing 6 of 38 recordings". Right: label text "Load more".

5 · Label and caption
- Label: clone "Label · AV0" (1603:10620) to x 80, y 76. Name "Label · L5". Text "L5 · Recordings".
- Caption: clone "Caption · AV0" (1603:10621) to x 80, y 1044. Name "Caption · L5". Two lines:
  "Faculty: finds a past recording by date, room, learner or scenario, and opens it."
  "New: one list of all past recordings, in the Sessions group of the menu. Today a recording can only be reached from the dashboard card."

Check before you report:
- "L5 · Recordings" is 1440 × 900 at x 80, y 120 in the Section. Label y 76, caption y 1044.
- The side navigation shows "Recordings" active (or the gap is reported). No breadcrumb.
- "Content" has three children: Page header, Filter row, Card · Recordings.
- "Filter row" has five children. "Card · Recordings" has eight children: Columns header, six rows, Footer row.
- All six rows have six cells. Column widths add up to 1084.
- The card ends above y 852 in the frame. No clipped text.
- No forbidden word in any text. No detached instance.
```

## L6 · Recording

```
Goal: one page screen "L6 · Recording" in slot 2. Low-fi: 8:1047. The page opens on the tab "Recording". Run after L5 exists (not needed for the clone, only for order).

1 · Clone
- Clone "Shell · Page" into the Section. Place at x 1640, y 120. Rename "L6 · Recording". Size 1440 × 900, clip content on.
- Set the active side-navigation item to "Recordings" (method in "Shell facts"). If not possible, report it and leave it.

2 · Breadcrumb and header
- In "Breadcrumb": first item text "Recordings". Last item text "Sepsis recognition · 18 Jan 2027". If the breadcrumb has more items, set the extra ones hidden. If the texts cannot be changed on the instance, report it.
- In "Page header": title "NURS 310 · Group A". Subtitle "Sepsis recognition · Sim Room 2 · Mon 18 Jan 2027, 09:00 to 09:19". If the header holds a button, set it hidden.

3 · Tab row
Add a frame as the third child of "Content" (after "Page header"). Name "Tab row". Width fill (1132), height hug, auto-layout horizontal, space between, vertically centred, no fill.
Left: the tabs.
- Clone the instance "Tabs" (I1098:7612;1098:5791;1096:5642) into "Tab row" as its first child. Name it "Tabs · Recording and Debrief". Resize it to width 240.
- Keep two tab items. In the first ("Tab · Feedback") set the text property "Label#222:208" to "Recording". In the second ("Tab · Annotations") set it to "Debrief". Set the other three items ("Tab · Checklist", "Tab · Chapters", "Tab · Transcript") hidden (visible = false).
- "Recording" is the selected tab: its variant "state" is "selected" (it already is on the first item). The "Debrief" item must use the non-selected option of "state". Read the options of "state" and use the one that is not "selected". Write the option names in your report.
- If the clone of the nested instance fails, or the items cannot be hidden or relabelled: build the tabs as plain auto-layout text frames and say so in the report. Frame "Tabs · Recording and Debrief", horizontal, gap spacing/4 (16). Two frames, each auto-layout, height 32, padding left and right spacing/3 (12), vertically centred: "Tab · Recording" (text Medium 14, text/primary, 2 px bottom stroke border/default) and "Tab · Debrief" (text Regular 14, text/secondary). Never detach an instance to do this.
Right: the buttons.
- A frame "Actions", auto-layout horizontal, gap spacing/2 (8), no fill. Two children:
  - Clone "Button · Room devices" (1694:9998, Secondary). Label "Download". Name "Button · Download".
  - Clone "Button · Start recording" (1694:9947, Primary). Label "Share". Name "Button · Share".
  Order: Download, then Share. Change only the label text. If the label cannot be set, report it.

4 · Body
Add a frame as the fourth child of "Content". Name "Body". Width fill (1132), height hug, auto-layout horizontal, gap spacing/6 (24), top-aligned, no fill.

4a · "Player column": frame, width 784, height hug, auto-layout vertical, gap spacing/4 (16), no fill. Children, in order:
- "Video": frame, width fill (784), height 400, fill core/neutral, corner radius radius/element-10, auto-layout, content centred. One text, muted: "Recorded video".
- Clone "SRV / Playback bar" (1098:7505) into "Player column". Keep its name. It is 784 wide. Leave all its parts as they are (its timeline and markers are the point of this screen). If the clone fails, create an instance of its main component and report it. Never detach.
- Clone "SRV / Annotation input" (1098:7586) into "Player column". Keep its name. If the clone fails, skip it and report.

4b · "Card · Notes and marks": a card, width 324 (fixed), height hug, auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12). Children:
- Text, title: "Notes and marks".
- Muted text: "Select a note to jump to that moment."
- Four body texts, in this order, one per line (each its own text layer, named "Note · <time>"):
  "03:10 · Mark moment"
  "07:42 · Handover unclear"
  "11:05 · Mark moment"
  "14:30 · Escalation late"

5 · Label and caption
- Label: clone "Label · AV0" to x 1640, y 76. Name "Label · L6". Text "L6 · Recording".
- Caption: clone "Caption · AV0" to x 1640, y 1044. Name "Caption · L6". Two lines:
  "Faculty: watches a past recording, jumps to marked moments on the timeline and adds annotations."
  "New: watching and debrief are one page with two tabs. Today they are two separate screens."

Check before you report:
- "L6 · Recording" is 1440 × 900 at x 1640, y 120. Label y 76, caption y 1044.
- Side navigation shows "Recordings" active (or the gap is reported). Breadcrumb reads "Recordings / Sepsis recognition · 18 Jan 2027".
- "Content" has four children: Page header, Tab row, Body (and the Breadcrumb above them if the Shell has it first). Count and report.
- "Tab row" shows two tabs "Recording" (selected) and "Debrief", and the buttons "Download" and "Share". "Share" is Primary, "Download" is Secondary. Both are instances.
- "Player column" is 784 wide with the video placeholder, the playback bar (timeline with markers visible, "00:00 / 18:42") and the annotation input. "Card · Notes and marks" is 324 wide with four notes.
- The content ends above y 852 in the frame. No clipped text, no overlap. If it overflows, set the "Video" height to 340 and report.
- No forbidden word in any text. No detached instance.
```

## L6b · Recording, Debrief tab

```
Goal: one page screen "L6b · Recording, Debrief tab" in slot 3. Low-fi: 10:1055. Same page as L6, with the tab "Debrief" selected. This is where the page opens right after a session ends. The content is a placeholder for Gabor's debrief design.

1 · Clone
- Clone the finished frame "L6 · Recording" (in this Section) to x 3200, y 120. Rename "L6b · Recording, Debrief tab". If "L6 · Recording" does not exist, stop and report.
- Do not change "L6 · Recording".
- Inside the clone, find layers by name.

2 · Breadcrumb and header
Keep as in L6 (same recording).

3 · Tab row
- Switch the tab states: in "Tabs · Recording and Debrief", set "Debrief" to the "selected" option of "state" and "Recording" to the non-selected option. (If you built plain text frames: move the 2 px bottom stroke and the Medium text style from "Tab · Recording" to "Tab · Debrief", and give "Tab · Recording" the Regular text/secondary style.)
- Keep "Button · Download" and "Button · Share".

4 · Body
In "Body": delete "Player column" and "Card · Notes and marks". Then build, in this order:

4a · "Left column": frame, width 480, height hug, auto-layout vertical, gap spacing/4 (16), no fill. Children:
- "Video": a frame like the one in L6, but height 270 and width fill (480). Text "Recorded video". Build it by cloning the L6 "Video" frame (take it from "L6 · Recording" before you delete, or recreate it with the same rules).
- Clone "SRV / Playback bar" (1098:7505) into "Left column". Resize it to width 480. If its timeline does not shrink and is clipped or overlaps, delete this clone and build a simple track instead: frame "Track", width fill, height 8, fill core/neutral, corner radius radius/full, plus a muted text "00:00 / 18:42" below it. Report which one you used.
- "Card · Marked moments": a card, width fill (480), height hug, auto-layout vertical, padding spacing/4 (16), gap spacing/2 (8). Text, title: "Marked moments". Muted text: "Select a moment to jump to the video." Three body texts, each its own layer "Moment · <time>":
  "03:10 · Mark moment"
  "07:42 · Handover unclear"
  "11:05 · Mark moment"

4b · "Right column": frame, width fill (628), height hug, auto-layout vertical, gap spacing/4 (16), no fill. Children:
- Clone "SRV / Feedback content" (I1098:7612;1098:5839) into "Right column". Keep its name. Set its width to fill (628). It shows the toggle "AI feedback" / "Facilitator feedback" and three cards: "What went well", "Areas for improvement", "Reflection questions". Do not change its texts. If the clone fails, create an instance of its main component and report it. If it does not resize, leave it at 528 and report. Never detach.
- "Card · Checklist results": a card, width fill, height hug, auto-layout vertical, padding spacing/4 (16), gap spacing/2 (8). Text, title: "Checklist results". Body text: "8 of 12 items checked." Muted text: "Placeholder. The full checklist comes from the debrief design."
- Muted text at the end of "Right column", named "Note · Placeholder": "Placeholder. The debrief content comes from the debrief design."

5 · Label and caption
- Label: clone "Label · AV0" to x 3200, y 76. Name "Label · L6b". Text "L6b · Recording, Debrief tab".
- Caption: clone "Caption · AV0" to x 3200, y 1044. Name "Caption · L6b". Two lines:
  "Faculty: debriefs the group right after the session, with feedback, the marked moments and the checklist at hand."
  "New: the debrief is a tab of the recording page, so the recording and its debrief stay together. After a session ends, the page opens on this tab."

Check before you report:
- "L6b · Recording, Debrief tab" is 1440 × 900 at x 3200, y 120. Label y 76, caption y 1044. "L6 · Recording" is unchanged.
- "Debrief" is the selected tab. Both buttons are still there.
- "Body" has two children: Left column (480 wide) and Right column. Left: Video, playback bar (or the simple track), Card · Marked moments. Right: Feedback content, Card · Checklist results, Note · Placeholder.
- The feedback content shows the three cards and no text was changed. It is an instance.
- Content ends above y 852 in the frame. No clipped text, no overlap. If it overflows, set the "Video" height to 220 and report.
- No forbidden word in any text. No detached instance.
```

## After these run

- Claude reviews the three frames in Figma (read-only) and writes a fix section here if needed.
- Prototype wiring (later): menu item "Recordings" to L5; row 1 of L5 to L6; tab "Debrief" in L6 to L6b; tab "Recording" in L6b to L6; "Recordings" in the breadcrumb to L5.
