# 11-16 · Participants (F4): P1, P1b, P2, P3, P4, P5

Six greyscale wireframes for the workshop on 11-17. They show how learners get into a recording and how the one People list works. They are discussion sketches, not final designs. The shared rules, the screen list and the sample data are in `11-16-merge-00-shared.md`. This file does not repeat them.

## Context

- Decided on 11-16: the roster comes from the event. Before, during and after a recording the user can mark a learner absent, add a walk-in learner, and add a whole learner group in one step.
- Daniel asked for "Add a group" explicitly. Adding ten learners one by one in an ad hoc recording is painful. The button must be on P1, P2, P3 and P4.
- Changes made in the room view apply to this recording only.
- An ad hoc recording can start with nobody (P3).
- There is ONE People list for the whole app (People > Learners). Its source column says Canvas, file or manual. It has an "Import" button (P5; the import steps are in F5).
- Content spec: the low-fi screens on the FigJam board `KStutzzTvN5ENoWJPj07Zg`: P1 `16:1748`, P1b `21:1634`, P2 `16:1965`, P3 `16:1855`, P4 `16:1658`, P5 `18:1365`. Structure comes from the low-fi. Sample data comes from the shared file, not from the low-fi.
- Visual source: Figma file IMSH-MVP `dbJVpAusLJCtreiz0jlEh3`.

## What I found in the file (11-16, read-only)

- "S2 · Participants" `1348:10885` (1440 × 948, in Section "SRV flow · Recording" `1343:3275`). Children: "TopNav" `1348:10886`, "Shell row" `1348:10887` (holds "SideNav" `1348:10888`, collapsed, and "Main" `1348:10889`), and the popover instance "SRV / Participants popover" `1348:11444` (x 1112, y 96, 320 wide, absolute, height hugs).
- The popover sits over the side panel, not over the camera pictures. This is the placement to keep.
- Popover component `1048:5499` is a plain COMPONENT (not a set) and has NO component properties. Everything is changed through the slot. Inside it: "Popover · Participants" `1048:5500` (instance of "Popover"), then "Popover Surface" (vertical, hugs height, 320 wide), then the text "Title" ("Participants · 5") and the SLOT "Content". The slot holds one frame "Participants" `1048:5502` (vertical, gap 8, hugs height).
- Children of "Participants", in order: five instances "Participant · Emily Baker", "Participant · Priya Shah", "Participant · Marcus Chen", "Participant · Olivia Grant", "Participant · Noah Patel"; instance "Divider"; frame "Add learner" (holds instance "Button · Add learner" (Ghost, MD, icon plus, label "Add learner") and instance "Typeahead · Name or email"); text "Footnote" ("Changes apply to this recording only.").
- A participant row is an instance of a component with property State = Present or Absent. Present row, 296 × 36 (width fills): "Avatar" (initials text inside "Content", the text layer is named "JD"), "Name" (text "Content" inside), "Checkbox" (nested instance, property Value Checked or Unchecked). Absent row (Olivia Grant): same, plus "Absent tag" (instance, Neutral pill, text layer "Label") and its checkbox is Unchecked. A row has no "Added today" tag. See Decisions.
- Because the popover content is a slot, rows, buttons and text can be added, cloned and deleted inside an instance. Changing the properties of the popover itself is not possible (there are none).
- Header of S2: "Header" `1348:10890` has "Start Content" (instance "IconButton · Back to event" and frame "Title" `1348:10930` with texts "NURS 310 · Sepsis recognition", "Sim Room 2", "Group A", "Tue, Jan 19 · 10:00–11:00") and "End Content" with instance "SRV / Header actions" `1348:10926` (property State; texts "Layout & audio", "Report a problem", "4 learners"). The "4 learners" button counts learners who are present (5 rows, 1 absent = 4). Keep that rule.
- The TopNav of S2 shows the product logo instance "ls-essentials-logo-small". The shared rules treat the logo as branding: it stays.
- S2 side panel: instance "SRV / Side panel" `1348:10903` (Tab=Checklist, Mode=Live). It holds "SRV / Side panel tabs" with properties Active (Annotations, Checklist, Chapters, Transcript) and Hidden (None, "Chapters + Transcript"). Inside, "Tabs" has a slot "Children" with four "Tab · …" instances (the label is a text layer named "Label" inside "Content"). This is the tab bar we reuse in P4 and P5.
- "Preview · Debrief" `1098:6920` (1440 × 948, collapsed rail) is a room view with a frame "Video column" `1098:7490` (832 × 836): instance "SRV / Camera grid" (photos), instance "SRV / Playback bar" `1098:7505` (State=Paused, 784 × 60), instance "SRV / Annotation input". It is NOT a page with the side navigation. P4 is a page, so P4 uses "Shell · Page" and takes only the playback bar from it. The camera grid has photos; P4 uses a grey "Video" placeholder instead (shared rule: no photos).
- "AV1 · Room devices" `1559:8319`: "Content" `1559:8323` holds "Card · Devices" `1560:7926` = "Devices header" (texts "Devices in this room", "4 devices · 1 not found"), "Columns header" (frames "Cell · Device" 420, "Cell · Kind" 220, "Cell · Status" 220, "Cell · Audio from" 180, "Cell · Actions" 44; each holds one text), rows "Row · Foot camera" `1560:7956` (56 high, five "Cell · …" frames, "Cell · Status" holds instance "Badge · Working", Success) and "Assign row" `1560:7996`. This is the table pattern for P5.
- SS1 `1695:10571` (in "Session start · Sketches") has "Dim" `1695:11172` and "Sheet · Start recording" `1695:11173` (480 × 900, Variant=Fullscreen). Sheet parts: "Header" (texts "Title", "Subtitle"; "Close Button"), slot "Body" holding frame "Start form" (448 wide, gap 24) with "Room options" (header "Room" and "Ready rooms first"; frames "Option · Sim Room 1" (selected: 2 px stroke), "Option · Sim Room 2", "Option · Skills Lab 1", text "Hint"), "Block · Event", "Block · Learners", "Block · Scenario" (each: "Room header" with texts "Room name" and "Cameras", instance "Select · Event", text "Hint"), and slot "Footer Actions" with instances "Cancel" and "Start recording".
- Buttons: "Button · Start recording" `1694:9947` (Primary, SM) and "Button · Room devices" `1694:9998` (Secondary, SM) in "CO1 · Center overview" `1692:9756`. Properties: Label (text property `Label#3:97`), Variant (Primary, Secondary, Ghost), Size, State, Type, Icon (boolean). "Dim" `1360:9294` is a rectangle in "S8 · Stop confirmation" `1360:8441`.
- The target page "🧭 One app · merge [D]" did not exist when I wrote this. The ids of "Shell · Page", the Sections and the nav method come from "Shell facts" in the shared file.
- I could not read the layer names inside "Shell · Page" (F0 has not run). The steps assume they are the names of "AV0 · Rooms": "Content", "Breadcrumb", "Page header", "Greeting", "Text · Tuesday, January 19", "Button · Customize". Every step that uses them says what to do if a name differs.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Room view base | P1, P1b, P3 are clones of "S2 · Participants" (948 high, collapsed rail stays). S2 already has the real popover, so the learner panel is a real instance, not a drawing |
| Panel placement | The panel keeps the S2 position (x 1112, y 96, 320 wide). It covers the side panel, never the camera pictures. The low-fi panel covers the cameras; the real design must not |
| Counts | Group A has 5 learners (contract). One is marked absent. One walk-in is added. So the panel title is "Participants · 6" and the header button says "5 learners" (present only, same rule as S2) |
| Names | Emily Baker, Priya Shah, Marcus Chen, Olivia Grant (absent), Noah Patel (from S2). New walk-in: Lena Fischer. The low-fi names are not used |
| Walk-in row | The row component has no "Added today" tag. Fallback: clone the Absent row (it has a tag), set its checkbox to Checked and the tag text to "Added today". If that fails, put "Added today" after the name. This is a gap to report |
| Group picker (P1b) | A second state of the same panel, rebuilt inside the popover slot. Group rows are clones of "Option · Sim Room 1/2" from SS1, so the selected look (2 px stroke) is the house one. Selected group: "NURS 310 · Group B", 6 learners. The button reads "Add 6 learners". The line reads "Learners already in the recording are skipped." |
| Buttons in the panel | "Add learner" is the existing button. "Add a group" is a clone of it. In the group picker, "Cancel" is Secondary and "Add 6 learners" is Primary (clones of the CO1 buttons) |
| P2 base | A page (clone of "Shell · Page", Live active) with a dim layer and the SS1 sheet. It does not wait for "L3 · Start recording". The page behind the dim layer is only a header and one grey block |
| P2 event | NURS 310 · Sepsis recognition, 10:00, Sim Room 2, Group A. Sim Room 2 shows its warning badge because it has a device not found (it can still record, see SS2) |
| P3 | Clone of P1 (so P1 must be done first). Same panel, empty state. The room view title says "Ad hoc recording". The side panel stays as in S2 (a checklist would not exist without a scenario); this is a known gap |
| P4 base | A page: "Shell · Page" with a grey "Video" placeholder, the playback bar from "Preview · Debrief", and a card "This recording" with four rows. Tabs "Recording" and "Debrief" are the "SRV / Side panel tabs" instance with the last two tabs hidden |
| P5 base | A page: "Shell · Page", the same tab instance with all four tabs (Staff, Learners, Groups, Standardized patients), filters, and a table cloned from "Card · Devices" of AV1 |
| P5 columns | Name, Email, Group, Source, Status. Source values: "Canvas", "File", "Manual". Status: Success badge "Active", Neutral badge "Deactivated" |
| Header button P5 | "Import" Secondary, "Add person" Primary. The low-fi shows both as outline buttons |
| Group names | Only the groups in the shared sample data are used (low-fi group names are not) |

## Gaps I expect in Cursor's report

- The popover has no properties. Subtitle, second button, walk-in tag are built inside the slot with clones. If a clone loses its text override, the report says which one.
- A row clone may show the default name after cloning. Set the text again.
- Checkbox property name (Value) and options may differ. Report what was found.
- The tab bar: property Active may not move the selected underline. Fallback is in P4.
- "Select · Event" may not expose its value text (P2, P5 filters). Report the layer name that worked.
- The sheet may not keep text overrides when cloned across pages. Report which layer.
- Cursor has once reported success without writing anything. Check each frame in Figma.

## How to run

Claude Sonnet 5.5 · High. One new Cursor chat. Start it only after the block "Shell facts" in `11-16-merge-00-shared.md` is filled in (its status must not say "not yet").

All six sections in one run:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P1 · Room view, Participants", "P1b · Room view, Add a group", "P2 · Start recording, Learners", "P3 · Room view, No learners yet", "P4 · Recording, Link event and learners", "P5 · People, Learners". After each section, run its check list and take a screenshot before you start the next section.`

One section only (for reruns). P1b and P3 clone P1, so P1 must exist. The others are independent.

P1:
`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P1 · Room view, Participants". After each section, run its check list and take a screenshot before you start the next section.`

P1b:
`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P1b · Room view, Add a group". After each section, run its check list and take a screenshot before you start the next section.`

P2:
`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P2 · Start recording, Learners". After each section, run its check list and take a screenshot before you start the next section.`

P3:
`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P3 · Room view, No learners yet". After each section, run its check list and take a screenshot before you start the next section.`

P4:
`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P4 · Recording, Link event and learners". After each section, run its check list and take a screenshot before you start the next section.`

P5:
`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f4-participants.md. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: "P5 · People, Learners". After each section, run its check list and take a screenshot before you start the next section.`

## Flow rules

```
Section: "4 · Participants" on the target page. Slots: P1 slot 1 (x 80), P1b slot 2 (x 1640), P2 slot 3 (x 3200), P3 slot 4 (x 4760), P4 slot 5 (x 6320), P5 slot 6 (x 7880). All y 120. Label y 76. Caption y 1044 (y 1092 under a 948-high screen). Write only inside this Section.

Source nodes (read-only; you may clone from them, also across pages). A clone stays on the page of its source. After cloning, move it into your Section (appendChild into the Section, then set x and y). If a clone cannot be moved across pages, stop and report.
- "S2 · Participants" 1348:10885 (page 👤 SRV flow [D] 960:51213), 1440 × 948. Popover instance "SRV / Participants popover" 1348:11444 (no component properties; change only its slot "Content").
- "SRV / Side panel tabs" (instance in "SRV / Side panel" 1348:10903 in S2). Properties Active, Hidden.
- "SS1 · Start session, ad hoc" 1695:10571: "Dim" 1695:11172, "Sheet · Start recording" 1695:11173 (480 × 900). "Option · Sim Room 1" (selected) and "Option · Sim Room 2" are inside its Body slot.
- "Dim" 1360:9294 (in "S8 · Stop confirmation" 1360:8441).
- "Preview · Debrief" 1098:6920: instance "SRV / Playback bar" 1098:7505 (inside "Video column" 1098:7490).
- "AV1 · Room devices" 1559:8319: "Card · Devices" 1560:7926, "Row · Foot camera" 1560:7956, "Assign row" 1560:7996.
- "CO1 · Center overview" 1692:9756: "Button · Start recording" 1694:9947 (Primary), "Button · Room devices" 1694:9998 (Secondary). Badges: shared rules.
- "Shell · Page" and the active-nav method: "Shell facts" in the shared file.

Button properties (found in the file): text property "Label", variant property "Variant" with Primary, Secondary, Ghost. Set a label with setProperties on the Label property of the instance, or with the text override. Report what you used.

Names in all frames (learners):
Emily Baker (EB), Priya Shah (PS), Marcus Chen (MC), Olivia Grant (OG, absent), Noah Patel (NP), Lena Fischer (LF, walk-in, "Added today").
Emails: first.last@riverbend.edu in lower case, for example emily.baker@riverbend.edu.

Learner row recipe (used in P1, P2). The rows are instances of the participant row component. Never detach.
- To make a new row, clone an existing row inside the same frame and then change: the text "Content" inside the instance "Name" (the name), the text inside "Avatar" > "Content" (the initials; the layer is named "JD"), and the layer name ("Participant · <Name>").
- Present row: State=Present, checkbox Checked.
- Absent row: State=Absent, its "Absent tag" says "Absent", checkbox Unchecked.
- Walk-in row (Lena Fischer): clone the Absent row, change the name and initials, set the text of "Absent tag" to "Added today", set the nested instance "Checkbox" to its Checked value (read its component properties first; report the property name and options). Do not change the State of the row. If the checkbox cannot be set, leave it unchecked and report. If the tag text cannot be changed, write "Lena Fischer · added today" in the name text instead and report.
- After cloning, read the name text of each row and set it again if it shows the old name.

Panel text recipe (the popover has no subtitle layer):
- Subtitle or hint: clone the text "Footnote" (muted 12, text/secondary) in the slot, change its characters, move it to the place the step says.
- Bold text: clone the text "Title" of "Popover Surface" (it reads "Participants · 5"), change its characters.

Number rules: the popover Title reads "Participants · N" where N is the number of rows. The header button "SRV / Header actions" shows the text "N learners" where N is the number of rows that are not absent.

TopNav in room view clones: keep the clone's "TopNav" exactly as it is. Do not replace it and do not hide its logo.

Tab bar recipe (P4, P5): clone the instance "SRV / Side panel tabs" from S2. Hide its frame "Actions". Properties: Active, Hidden. The four tab instances are in "Tabs" > slot "Children", the label of a tab is the text "Label" inside its "Content" frame. Set the label texts in order. If the Active property does not move the selected underline, report it and leave it.
```

## P1 · Room view, Participants

Source: "S2 · Participants" `1348:10885`. Slot 1, x 80, y 120, 1440 × 948.

Who and why: the faculty member checks who is in the room during the recording.

```
Goal: frame "P1 · Room view, Participants" in slot 1 of Section "4 · Participants". The room view with the panel "Participants · 6": one learner absent, one walk-in added, buttons "Add learner" and "Add a group".

1 · Clone
- Clone "S2 · Participants" (1348:10885). Move it into the Section at x 80, y 120. Name it "P1 · Room view, Participants". Size 1440 × 948, clip content on.
- If the clone is not 1440 × 948 or the popover is missing, stop and report.

2 · Top bar
- Keep "TopNav" as it is (see "TopNav in room view clones" in Flow rules).

3 · Title block
In the frame "Title" (Header > Start Content):
- Text "NURS 310 · Sepsis recognition": keep.
- Text "Sim Room 2": keep. Text "Group A": keep. Text "Tue, Jan 19 · 10:00–11:00": keep.

4 · Header button
In the instance "SRV / Header actions": the text "4 learners" becomes "5 learners". Keep State=Default.

5 · Panel
Work inside instance "SRV / Participants popover" > "Popover · Participants" > "Popover Surface".
- Text "Title": "Participants · 6".
- In the slot "Content", frame "Participants":
  a. Subtitle: clone "Footnote", text "From the event · NURS 310 · Group A". Move it to be the first child (above "Participant · Emily Baker").
  b. Keep rows "Participant · Emily Baker", "Participant · Priya Shah", "Participant · Marcus Chen", "Participant · Olivia Grant" (State=Absent, tag "Absent", checkbox unchecked), "Participant · Noah Patel" as they are.
  c. Add the walk-in row after "Participant · Noah Patel": see "Walk-in row" in Flow rules. Name "Participant · Lena Fischer", initials "LF", tag "Added today".
  d. Keep "Divider".
  e. In the frame "Add learner": create a frame "Add actions" (auto-layout horizontal, gap 8, hug width, height 32, no fill) as its first child. Move the instance "Button · Add learner" into it. Clone that button into "Add actions", name "Button · Add a group", set its label to "Add a group". Keep the typeahead "Typeahead · Name or email" under "Add actions". The frame "Add learner" keeps auto-layout vertical with gap 8 and fill width.
  f. Keep the text "Footnote" last: "Changes apply to this recording only."
- Do not resize the popover. It hugs its height. It must end above y 700 and stay inside x 1112 to 1432.

6 · Label and caption
- Clone "Label · AV0" (1603:10620) to x 80, y 76. Name "Label · P1". Text "P1 · Room view, Participants".
- Clone "Caption · AV0" (1603:10621) to x 80, y 1092, width 1440. Name "Caption · P1". Two lines:
  "Faculty (Dr. Maya Ortiz): checks who is in the room during the recording, marks a learner absent, adds a walk-in or adds a whole group."
  "New: the list comes from the event and can be changed at any time. A whole group can be added in one step. Changes apply to this recording only."

Check list:
- "P1 · Room view, Participants" is 1440 × 948 at x 80, y 120 in Section "4 · Participants". Label at y 76, caption at y 1092.
- The panel title reads "Participants · 6". Six rows. One has the tag "Absent", one has the tag "Added today". The header button reads "5 learners".
- Buttons "Add learner" and "Add a group" sit side by side. They are instances.
- No text on the frame reads Essentials, OpSpace or SRV. The popover does not cover the camera pictures.
- Nothing outside the Section changed. Nothing detached.
Report: new ids, checkbox property name and options, anything done differently (tag text).
```

## P1b · Room view, Add a group

Source: your own frame "P1 · Room view, Participants". Slot 2, x 1640, y 120.

Who and why: the faculty member adds a whole learner group instead of single learners.

```
Goal: frame "P1b · Room view, Add a group". The same room view; the panel is the group picker.

1 · Clone
- Find "P1 · Room view, Participants" in the Section. If it does not exist, stop and report. Clone it inside the Section at x 1640, y 120. Name "P1b · Room view, Add a group". Do not change P1.

2 · Header button
Keep "5 learners".

3 · Panel
Inside "Popover · Participants" > "Popover Surface":
- Text "Title": "Add a group".
- In the slot "Content", frame "Participants":
  a. Move the instance "Typeahead · Name or email" out of the frame "Add learner" to be the first child of "Participants". Its placeholder text reads "Search groups".
  b. Delete: all participant rows, "Divider", the frame "Add learner" (and the subtitle text from P1).
  c. Add four group rows after the typeahead. Make each by cloning a frame from the sheet "Sheet · Start recording" (1695:11173) in SS1: clone "Option · Sim Room 1" for the selected row, "Option · Sim Room 2" for the others (use their ids from a name search inside the sheet Body slot). In each clone delete the badge. Width fill. Set the two texts: name (body Medium) and muted line. Names "Option · <group>":
     - "Option · NURS 310 · Group A": "NURS 310 · Group A" / "5 learners"
     - "Option · NURS 310 · Group B": "NURS 310 · Group B" / "6 learners" (SELECTED, 2 px stroke)
     - "Option · NURS 340 · Group B": "NURS 340 · Group B" / "6 learners"
     - "Option · Paramedic intake 3": "Paramedic intake 3" / "12 learners"
     Only "NURS 310 · Group B" has the 2 px stroke. The other three have the 1 px stroke.
  d. Text after the rows (clone of "Footnote"): "Learners already in the recording are skipped."
  e. Frame "Group actions": auto-layout horizontal, gap 8, fill width, height 28, aligned right. Two buttons: clone "Button · Room devices" (1694:9998), label "Cancel", Secondary; clone "Button · Start recording" (1694:9947), label "Add 6 learners", Primary. Names "Button · Cancel", "Button · Add 6 learners".
  f. Delete the old "Footnote" (the group hint replaces it).
- Order in "Participants": typeahead, four group rows, hint, "Group actions".
- The panel hugs its height. It stays inside x 1112 to 1432 and ends above y 760.

4 · Label and caption
- Label "Label · P1b", x 1640, y 76, text "P1b · Room view, Add a group".
- Caption "Caption · P1b", x 1640, y 1092. Two lines:
  "Faculty: adds a whole learner group to the recording, for example to an ad hoc recording that started with nobody."
  "New: one step for a group, with search and learner counts. Learners who are already in the recording are skipped."

Check list:
- Frame at x 1640, y 120, 1440 × 948. P1 is unchanged.
- Panel title "Add a group". Search field "Search groups". Four group rows with counts 5, 6, 6, 12. Only "NURS 310 · Group B" is selected.
- The line "Learners already in the recording are skipped." exists.
- Two buttons: "Cancel" (Secondary), "Add 6 learners" (Primary). Both are instances.
- No clipped text. The popover does not cover the camera pictures.
Report: new ids, anything done differently.
```

## P2 · Start recording, Learners

Source: "Shell · Page" (Section "0 · Shell"), plus the sheet and dim from SS1. Slot 3, x 3200, y 120, 1440 × 900.

Who and why: the faculty member starts a recording from Live and checks the learners first.

```
Goal: frame "P2 · Start recording, Learners". Live page with a dim layer and the sheet "Start recording". The sheet shows room, event, the learner list (with Absent, Added today, "Add learner", "Add a group") and scenario.

1 · Shell
- Clone "Shell · Page" into the Section at x 3200, y 120. Name "P2 · Start recording, Learners". Size 1440 × 900, clip content on.
- Set the active nav item to "Live" (method in "Shell facts").

2 · Page behind the sheet
- Frame "Content": delete the frame "Breadcrumb" (Live is a top-level page).
- In "Page header": text "Greeting" → "Live". The instance "Text · Tuesday, January 19" → text "4 rooms · 1 recording". The instance "Button · Customize": label "Start recording", Variant Primary, hide its icon. If a name differs, read the names in "Page header" first, use the matching layers and report the names.
- After "Page header" add a frame "Backdrop · Room cards": auto-layout vertical, width fill (1132), height 560, fill core/neutral, radius radius/element-10, centred both ways, clip content on. One muted text inside, centred: "Room cards". Greyscale only.

3 · Dim layer
Clone "Dim" (1360:9294) into the frame as its last child. Absolute position, x 0, y 0, 1440 × 900. Name "Dim".

4 · Sheet
- Clone "Sheet · Start recording" (1695:11173, from SS1) into the frame, above "Dim". Absolute position, x 960, y 0, 480 × 900. Name "Sheet · Start recording".
- "Title": "Start recording".
- "Subtitle": "Check the learners. Changes apply to this recording only."
- "Footer Actions": keep "Cancel" and "Start recording".

5 · Sheet body
In the slot "Body", frame "Start form" (448 wide, gap 24):
a. Frame "Room options": delete "Option · Sim Room 1", "Option · Skills Lab 1" and the text "Hint". Keep "Room options header" (text "Room"; the right text "Ready rooms first" becomes "Change") and "Option · Sim Room 2" (Warning badge "Needs attention"; texts "Sim Room 2" and "2 cameras · 1 device not found"). Make its stroke 2 px, colour text/primary (selected).
b. "Block · Event": "Room name" text "Event", "Cameras" text "from the list". Instance "Select · Event": value "NURS 310 · Sepsis recognition · 10:00" (report the layer you used). "Hint": "Learners and scenario come from the event."
c. "Block · Learners": "Room name" text "Learners", "Cameras" text "5 from the event · 1 added today". Delete the instance "Select · Event" and the "Hint" from this block. Then add, in this order:
   - Frame "Learner list": auto-layout vertical, gap 8, width fill, no fill, no stroke. Six rows (recipe "Learner row recipe" in Flow rules; clone them from P1's "Participants" frame; if P1 is missing, from the popover 1348:11444 in S2): Emily Baker, Priya Shah, Marcus Chen, Olivia Grant (Absent), Noah Patel, Lena Fischer (Added today). Each row fills the width.
   - Frame "Add actions": auto-layout horizontal, gap 8, hug. Two buttons cloned from P1's "Add actions": "Add learner", "Add a group".
   - Text "Hint" (muted, clone of an existing "Hint"): "Changes apply to this recording only."
   The block keeps auto-layout vertical, gap 8.
d. "Block · Scenario": "Room name" "Scenario", "Cameras" "optional". Select value "Sepsis recognition checklist". "Hint": "The checklist opens when the recording starts."
Order in "Start form": Room options, Block · Event, Block · Learners, Block · Scenario.
If the Body is taller than its slot (748), delete the row "Participant · Lena Fischer" and say so in the report.

6 · Label and caption
- "Label · P2" at x 3200, y 76: "P2 · Start recording, Learners".
- "Caption · P2" at x 3200, y 1044. Two lines:
  "Faculty (Dr. Maya Ortiz): starts a recording from Live and checks who is in the room before it starts."
  "New: the learners come from the event. Before the start you can mark someone absent, add a walk-in or add a whole group."

Check list:
- Frame 1440 × 900 at x 3200, y 120. Nav item "Live" active. No text reads Essentials, OpSpace or SRV.
- Dim covers the frame. The sheet sits at x 960, y 0, 480 × 900, footer buttons at the bottom.
- "Start form" has four children. The learner list has six rows (one "Absent", one "Added today"). Two buttons "Add learner" and "Add a group".
- Nothing clipped or overflowing the sheet. All buttons and badges are instances.
Report: new ids, the Select value layer name, anything done differently.
```

## P3 · Room view, No learners yet

Source: your own frame "P1 · Room view, Participants". Slot 4, x 4760, y 120.

Who and why: faculty or technician starts an ad hoc recording with nobody listed.

```
Goal: frame "P3 · Room view, No learners yet". The same room view as P1, ad hoc, with the empty panel "Participants · 0".

1 · Clone
- Find "P1 · Room view, Participants". If it does not exist, stop and report. Clone it inside the Section at x 4760, y 120. Name "P3 · Room view, No learners yet". Do not change P1.

2 · Title block
In the frame "Title":
- Text "NURS 310 · Sepsis recognition": "Ad hoc recording".
- Text "Sim Room 2": keep.
- Text "Group A": "No event linked".
- Text "Tue, Jan 19 · 10:00–11:00": "Tue, Jan 19 · 09:50".

3 · Header button
The text "5 learners" becomes "0 learners".

4 · Side panel
In "SRV / Side panel" (instance): if its property Tab has the option Annotations, set it to Annotations (the checklist belongs to an event with a scenario). Take a screenshot. If the panel looks wrong, set it back to Checklist and report.

5 · Panel
Inside "Popover Surface":
- Text "Title": "Participants · 0".
- In the frame "Participants":
  a. The subtitle text: "No event linked · ad hoc recording".
  b. Delete all participant rows and "Divider".
  c. Add a text after the subtitle (clone of "Footnote"): "No learners yet".
  d. Keep the frame "Add learner" with "Add actions" (buttons "Add learner", "Add a group") and the typeahead.
  e. The last text "Footnote": "You can also add learners after the recording."
- The panel hugs its height and stays at x 1112, y 96.

5 · Label and caption
- "Label · P3" at x 4760, y 76: "P3 · Room view, No learners yet".
- "Caption · P3" at x 4760, y 1092. Two lines:
  "Faculty or sim technician: starts an ad hoc recording at once, without knowing yet who is in the room."
  "New: a recording can start with no learners. Add one, or a whole group, now or after the recording."

Check list:
- Frame 1440 × 948 at x 4760, y 120. The title reads "Ad hoc recording". The header button reads "0 learners".
- The panel reads "Participants · 0", has the text "No learners yet", and both buttons "Add learner" and "Add a group".
- No participant row is left. P1 is unchanged.
Report: new ids; whether the side panel Tab could be changed.
```

## P4 · Recording, Link event and learners

Source: "Shell · Page" plus "SRV / Playback bar" from "Preview · Debrief". Slot 5, x 6320, y 120, 1440 × 900.

Who and why: faculty or technician opens a past ad hoc recording and links an event and learners afterwards.

```
Goal: frame "P4 · Recording, Link event and learners". Recording page with tabs "Recording" and "Debrief". The card "This recording" shows room, event, learners and scenario, with links to change them.

1 · Shell
- Clone "Shell · Page" into the Section at x 6320, y 120. Name "P4 · Recording, Link event and learners". 1440 × 900, clip content on. Active nav item "Recordings".

2 · Breadcrumb and page header
- "Breadcrumb": texts "Recordings" / "/" / "Sim Room 2 · 19 Jan 2027". If the breadcrumb has a different number of texts, set the first and the last, delete extra texts and report.
- "Page header": text "Greeting" → "Sim Room 2 · Ad hoc recording". Instance "Text · Tuesday, January 19" → "Tue, 19 Jan 2027 · 09:12–09:41 · Dr. Maya Ortiz". Instance "Button · Customize": visible = false.

3 · Tabs
Add the tab bar after "Page header" (recipe "Tab bar recipe" in Flow rules). Name "Tabs · Recording". Properties: Hidden = "Chapters + Transcript", Active = Annotations. Labels: first tab "Recording", second tab "Debrief". Width 380, fixed.
Fallback if the tab bar cannot be made: add a frame "Tabs · Recording" (auto-layout horizontal, gap 24) with two texts, label style: "Recording" (text/primary) and "Debrief" (text/secondary). Report it as a gap.

4 · Recording row
Add a frame "Recording row" after the tabs: auto-layout horizontal, gap 24, width fill (1132), height hug, top-aligned, no fill, no stroke. Two children: "Player" and "Card · This recording".

4a · "Player": auto-layout vertical, gap 16, width 784, height hug.
- "Video": frame 784 × 440, fill core/neutral, radius radius/element-10, auto-layout vertical, centred both ways, clip on. One muted text, centred: "Video".
- A clone of the instance "SRV / Playback bar" (1098:7505), width 784, name "Playback bar".
- Frame "Player actions": auto-layout horizontal, gap 8, height 28. Two buttons cloned from "Button · Room devices" (Secondary): "Share", "Download".

4b · "Card · This recording": a card (see Shared rules), width fill (324), auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12), height hug.
- Text, card title style: "This recording".
- Four rows "Row · Room", "Row · Event", "Row · Learners", "Row · Scenario". Each: auto-layout horizontal, width fill, height 40, gap 12, vertically centred, 1 px bottom stroke border/default. Cells: a muted text in a frame of width 64 (the field), a body text with fill width (the value), then link texts (label style: Medium 14, text/primary, hug width).

| Row | Field | Value | Links |
|---|---|---|---|
| Row · Room | Room | Sim Room 2 | none |
| Row · Event | Event | None | "Link an event" |
| Row · Learners | Learners | 0 | "Add a group", "Add learners" |
| Row · Scenario | Scenario | None | "Add" |

- Last child: muted text, width fill: "Changes here apply to this recording only."
- If the row "Row · Learners" is wider than the card, set the links to a second line (the row becomes auto-layout vertical, height hug) and report it.

5 · Label and caption
- "Label · P4" at x 6320, y 76: "P4 · Recording, Link event and learners".
- "Caption · P4" at x 6320, y 1044. Two lines:
  "Faculty or sim technician: opens a past ad hoc recording and links it to an event, learners or a whole group afterwards."
  "New: a recording that started without an event can be linked to one later, and learners can be added at any time."

Check list:
- Frame 1440 × 900 at x 6320, y 120. Nav item "Recordings" active. No text reads Essentials, OpSpace or SRV.
- Two tabs "Recording" and "Debrief" (or the fallback, reported).
- Card "This recording" has a title and four rows. Links "Link an event", "Add a group", "Add learners", "Add" are all visible and not clipped.
- "Video" is a grey placeholder. No photo anywhere. The page fits 900 high without overflow.
- Buttons "Share" and "Download" and the playback bar are instances.
Report: new ids, how the tab bar was built, anything done differently.
```

## P5 · People, Learners

Source: "Shell · Page" plus the table pattern of "AV1 · Room devices". Slot 6, x 7880, y 120, 1440 × 900.

Who and why: an admin or faculty member finds and manages learners in the one People list for the whole app.

```
Goal: frame "P5 · People, Learners". One People list with tabs, filters, a table with a Source column, and an "Import" button.

1 · Shell
- Clone "Shell · Page" into the Section at x 7880, y 120. Name "P5 · People, Learners". 1440 × 900, clip content on. Active nav item "People".

2 · Breadcrumb and page header
- "Breadcrumb": "People" / "/" / "Learners" (first and last text; delete extra texts).
- "Page header": "Greeting" → "People". Instance "Text · Tuesday, January 19" → "One list for the whole app. Rosters in events and recordings come from here."
- Buttons in "Page header": the instance "Button · Customize": label "Add person", Variant Primary, hide its icon. Clone it next to it (left of it, gap 8), name "Button · Import", label "Import", Variant Secondary. Keep the right edge of "Add person" where the source button's right edge is.

3 · Tabs
Add the tab bar after "Page header" (recipe "Tab bar recipe" in Flow rules). Name "Tabs · People". Hidden = None, Active = Checklist (second tab). Labels in order: "Staff", "Learners", "Groups", "Standardized patients". Width 480, fixed. Fallback: four texts in a horizontal auto-layout frame (gap 24), "Learners" in text/primary, the others text/secondary. Report it as a gap.

4 · Filters
Add a frame "Filters" after the tabs: auto-layout horizontal, gap 8, width fill, height hug, no fill. Children:
- Clone of the instance "Typeahead · Name or email" (from P1's popover, or S2 popover 1348:11444), width 280, placeholder "Search learners". Name "Search".
- Two clones of "Select · Event" (from the sheet clone in P2, or from SS1 sheet 1695:11173), width 200, names "Filter · Group" and "Filter · Status". Values: "Group: All" and "Status: All". If the value text cannot be set, report the layer name and leave it.

5 · Table
Clone "Card · Devices" (1560:7926) of AV1 into "Content" after "Filters". Name "Card · Learners". Width fill (1132). Then:
- "Devices header": text "Devices in this room" → "Learners" ; text "4 devices · 1 not found" → "6 learners".
- "Columns header": the cells and their texts, left to right: "Cell · Device" "Name" (width 240); "Cell · Kind" "Email" (280); "Cell · Audio from" "Group" (220); clone of "Cell · Kind" named "Cell · Source" "Source" (180); "Cell · Status" "Status" (162). Order of cells exactly: Name, Email, Group, Source, Status. Delete "Cell · Actions".
- Rows: keep the first row clone of "Row · Foot camera" and delete all other rows ("Row · Overhead camera", "Row · Patient monitor capture", "Row · Audio kit"). Make six rows by cloning the kept row. Name "Row · <Name>". In each row set the same cell order and widths as the header: the status cell (with its badge) last, the actions cell deleted.
- Row texts:

| Row | Name | Email | Group | Source | Status badge |
|---|---|---|---|---|---|
| 1 | Emily Baker | emily.baker@riverbend.edu | NURS 310 · Group A | Canvas | Success "Active" |
| 2 | Priya Shah | priya.shah@riverbend.edu | NURS 310 · Group A | Canvas | Success "Active" |
| 3 | Marcus Chen | marcus.chen@riverbend.edu | NURS 310 · Group A | Canvas | Success "Active" |
| 4 | Olivia Grant | olivia.grant@riverbend.edu | NURS 310 · Group B | File | Success "Active" |
| 5 | Noah Patel | noah.patel@riverbend.edu | NURS 340 · Group B | Canvas | Success "Active" |
| 6 | Lena Fischer | lena.fischer@riverbend.edu | Paramedic intake 3 | Manual | Neutral "Deactivated" |

- For row 6 set the badge Variant to Neutral (clone nothing; change the variant property of the cloned badge instance; report the property name) and its label to "Deactivated". For the others the label is "Active".
- "Assign row": delete the text "+ Assign a device". The second text becomes "Learners come from Canvas, a file or are added by hand." Name the frame "Table footer".
- The card ends above y 900 inside the frame. If it does not fit, delete row 6 and report.

6 · Label and caption
- "Label · P5" at x 7880, y 76: "P5 · People, Learners".
- "Caption · P5" at x 7880, y 1044. Two lines:
  "Admin or faculty: finds, filters and edits learners in the one People list. Import brings in more learners."
  "New: one list for the whole app (no separate learner list per product part), with a Source column (Canvas, file, manual) and an Import button."

Check list:
- Frame 1440 × 900 at x 7880, y 120. Nav item "People" active. No text reads Essentials, OpSpace or SRV.
- Header has "Import" (Secondary) and "Add person" (Primary). Tabs show Staff, Learners, Groups, Standardized patients with Learners active (or the fallback, reported).
- The table has five columns in the order Name, Email, Group, Source, Status; six rows; header and rows line up.
- Badges: five "Active" (Success), one "Deactivated" (Neutral). All are instances.
- No text is clipped. Nothing overflows the frame.
Report: new ids, badge property name and options, how the tab bar was built, anything done differently.
```

## After these run

- Claude reviews each frame in Figma (read-only) and writes a fix section here if needed.
- Likely follow-ups: a real participant row component with an "Added today" tag, a subtitle layer and a second button in the popover component, a group picker component, a real learner table component. These belong to the component round after the workshop.
- Prototype wiring (later): P1 "Add a group" to P1b; P1b "Cancel" and "Add 6 learners" to P1; P2 "Add a group" to P1b is not wired (different surface); P4 "Add a group" to P1b is not wired either. Wire only what a review asks for.
