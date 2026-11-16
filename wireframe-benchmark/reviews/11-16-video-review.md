# 11-16 · Video review sketches (Recordings library, Review screen)

Three greyscale wireframe sketches for the workshop on 11-17/18. They illustrate the requirements VR-1 to VR-10 in the vault page `wiki/work/essentials-2.0-concept-video-review.md`. They are discussion sketches, not final designs.

## Context

- The scope area "Video review / recording library" has no design at all (coverage "Zero"). Daniel's direction: a dedicated top-level menu entry "Recordings" for reviewing recordings (one app, the menu follows OpSpace), a recording can belong to an event or be ad hoc, and a very good filter system makes it usable.
- Screen 1, **Recordings**, shows: a list with thumbnails, grouped by day, a filter bar on top (search, state chips, six filters), mixed states, and ad hoc recordings titled "Ad hoc · <room> · <date time>".
- Screen 2, **Recordings, filtered**, shows: two filters applied ("Not linked to an event" and Room), and the way an ad hoc recording is linked to an event later.
- Screen 3, **Review**, shows: the SRV layout in playback mode, same as the laptop debrief, with timeline, markers and annotations, plus the event link and what learners can see.
- Boundary with Gabor's Reports (proposal, open question for Gabor): Recordings is about the video. Reports is about learning results.

## What I found in the file (11-15, read-only)

- No recordings library exists. The only recordings list is the card "Card · Recent recordings" `307:12799` in "D1 · Dashboard" `307:12788` (Drafts page `305:18292`). It has two rows, "Recording · NURS 340 · Postpartum hemorrhage · Group A" `307:12849` and "Recording · NURS 310 · Chest pain (STEMI) · Group A" `307:12850`. Each has an instance "Thumbnail · recording" (64 × 64) and "Badge · Debrief ready" (105 × 20).
- List-page shell: frame "AV0 · Rooms" `1603:10516` (1440 × 900, Section "AV setup · Sketches" `1559:8318`). It has instance "TopNav" `1603:10517`, frame "Body" `1603:10518` with instance "SideNav" `1603:10519` (260 wide) and frame "Content" `1603:10520` (1180 wide, white, 24 px padding, 24 px gap). "Content" holds "Breadcrumb" `1603:10521`, "Page header" `1603:10527` (1132 × 52), "Card · Unassigned devices" `1605:5853` and "Card · Rooms" `1605:5790` (1132 wide). In the source, the SideNav items are Dashboard, Calendar, Recordings, Scenarios, Reports, People, and Settings in the footer. Settings is the active item. These are the old labels: the clones use the new menu (see "Product rules" in the Shared rules).
- Inside "Page header": text "Greeting" `1603:10528`, instance "Text · Tuesday, January 19" `1603:10529`, instance "Button · Customize" `1603:10530` (its label reads "Manage rooms in OpSpace").
- Badge instances in AV0: "Badge · Ready" `1605:5894`, "Badge · Needs attention" `1605:5899`, "Badge · No devices" `1605:5909`.
- Player: frame "Preview · Debrief" `1098:6920` (1440 × 948). Its collapsed SideNav already has the Recordings icon active. "Main" `1098:6924` holds instance "Header" `1098:6925`, and frame "Body" `1098:6926` with "Video column" `1098:7490` (832 × 836) and instance "SRV / Debrief panel" `1098:7612` (560 × 836). "Video column" holds "SRV / Camera grid" `1098:7491`, "SRV / Playback bar" `1098:7505` (with the instance "Timeline"), and "SRV / Annotation input" `1098:7586`. Below the annotation input the column is empty from y 655 to y 836. The frame sits on the Components page `675:31351` (Section "SRV · Debrief panel").
- In the player header, instance "SRV / Header actions" `1098:7485` holds the buttons "Button · Voice memo", "Button · Layout & audio", "Button · Report a problem", "Button · 4 learners" and "Button · Share". Instance "SRV / Mode switch" `1098:7451` sits next to the title.
- Camera tiles: instances "Camera 1", "Camera 2", "Camera 3" in "SRV / Camera grid". They show a red recording dot, which is wrong for playback.
- Label and caption sources: text "Label · AV0" `1603:10620` and text "Caption · AV0" `1603:10621` (1440 × 40) in Section `1559:8318`.
- No Chip, Dropdown or filter component was seen. Chips, the search field and the List / Grid switch are plain frames. There is no Table component, same as in the AV sketches.
- Target page "👤 SRV flow [D]" `960:51213` is 14080 × 2755 in total. Section "SRV flow · Recording" `1343:3275` is at y 0 and Section "AV setup · Sketches" `1559:8318` ends at y 2680. Nothing sits at y 4500 or lower.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | A new Section "Video review · Sketches" on the SRV flow page, at x 0, y 4500 (nothing is below y 2680) |
| Library option | Option A: list with thumbnails, grouped by day, filter bar on top. Grid is shown only as a "Grid" toggle (not built) |
| Active nav item | Recordings, the fourth item in the new menu (Today, Notifications, Events, Recordings, then the group heading "Resources" followed by Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists; Settings in the footer) |
| No breadcrumb | Recordings is a top-level entry in the menu. The breadcrumb is deleted |
| One app (11-16) | No text names "OpSpace" or "Essentials" as a place to go. Components stay Astryx. The "Manage rooms in OpSpace" button is hidden in VR1 (and so in VR2) |
| Persona in captions | Faculty: Dr. Maya Ortiz |
| Sample data | Course names and rooms from the Dashboard and the AV frames. Dates in the library are November (13 Nov and earlier). The Dashboard still shows "Tuesday, January 19". Daniel decides which to keep |
| Thumbnails | The existing 64 × 64 "Thumbnail · recording", so rows are 72 high |
| "Scenario / course" column | Shows the course code only (for example "NURS 310"). The scenario name is in the title. The filter is still called "Scenario / course" |
| Player | The laptop debrief frame, with the live-only header buttons and the Recording / Debrief switch hidden |
| Timeline | The existing "SRV / Playback bar" with its timeline and markers. This is where the timeline lives after it is removed from live recording |
| Sharing | One card under the player shows the event link and what learners can see. Nothing is shared by default |

## Gaps I expect in Cursor's report

- The SideNav may not allow "Recordings" to be set active from the instance, and it may have fewer than four item rows (Recordings is the fourth). The fallback is in the Shared rules.
- The badge variant property may not offer Info or Error on the AV badge instances.
- Cloning a thumbnail instance that sits inside another instance may not work.
- The camera tiles show a red dot. Hiding it on the instance may not be possible.
- No chip or dropdown component exists, so the filters are plain frames.

## How to run

Run in this order, one after the other. VR2 clones the frame VR1 builds. VR3 needs the Section VR1 creates.

1. **VR1 · Recordings.** **Claude Sonnet 5.5 · High**, new Cursor chat.
   `Read @wireframe-benchmark/reviews/11-16-video-review.md. Apply "Shared rules", then run ONLY section "VR1 · Recordings".`
2. **Review gate.** Tell Claude when VR1 is done. Claude checks the frame in Figma before it is cloned.
3. **VR2 · Recordings, filtered.** **Claude Sonnet 5.5 · High**, new Cursor chat.
   `Read @wireframe-benchmark/reviews/11-16-video-review.md. Apply "Shared rules", then run ONLY section "VR2 · Recordings, filtered".`
4. **VR3 · Review.** **Claude Sonnet 5.5 · High**, new Cursor chat.
   `Read @wireframe-benchmark/reviews/11-16-video-review.md. Apply "Shared rules", then run ONLY section "VR3 · Review".`

After each run, check that the frame really exists in Figma. Cursor has once reported success without writing anything.

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Target page "👤 SRV flow [D]" (960:51213). Library page "⚙️ Components (D)" (675:31351). Drafts page (305:18292), with the frame "D1 · Dashboard" (307:12788). Shell source in Section "AV setup · Sketches" (1559:8318): "AV0 · Rooms" (1603:10516). Player source on the Components page: "Preview · Debrief" (1098:6920).

Where you may write:
- Only on page "👤 SRV flow [D]", and only inside the Section "Video review · Sketches" that section VR1 creates.
- Never change, move or delete anything in the Sections "SRV flow · Recording" (1343:3275) and "AV setup · Sketches" (1559:8318), or in the text "Title · SRV flow" (1347:8395).
- "⚙️ Components (D)", the Drafts page and every "(G)" page are read-only. You may clone frames and nested instances from them and create instances of their components. Never edit a main component, add a variant, or rename, move or delete anything on those pages.

IDs and clones:
- IDs in this file refer to the source nodes. A clone has new IDs. Inside a clone, always find layers by their exact name. Several layers share one name (for example every nav item is "Navigation / .SideNavItem"): tell them apart by their text.
- If a source ID is not found, find the node by its exact name. If neither works, stop and report.

How to change an instance:
- Only through variant properties, exposed properties, text overrides and layer visibility. Never detach an instance.
- When a step says "if this is not possible, report it", don't build a workaround. Leave the instance as it is and add one line to "Component gaps" in your report: frame, component, what is missing.

Style:
- Greyscale only, including image fills.
- Font Figtree. Use only variables that "D1 · Dashboard" and "AV0 · Rooms" already use. No hard-coded colours, sizes or radii. The ones you need:
  - Text colours: text/primary, text/secondary.
  - Surfaces and borders: surface/card (card fill), border/default (card border and row dividers), core/background-surface (white page).
  - Radius: radius/container (cards), radius/element-10 (buttons, search field), radius/full (chips, badges).
  - Spacing: spacing/1 to spacing/6 (4 to 24 px).
  - Selected chip and secondary button fill: core/neutral.
- Text sizes, taken from D1:
  - Card title: Bold 14 px. Copy the style of a card title in D1.
  - Body: Regular 14 px, line height 20 px, text/primary.
  - Muted: Regular 12 px, text/secondary.
  - Label and button text: Medium 14 px.
- Every new frame uses auto-layout. No absolute positioning inside cards. Exceptions are named in the steps.

A "card" in this file means: a frame with auto-layout vertical, fill surface/card, 1 px inside stroke border/default, corner radius radius/container, clip content on. Padding and gap are given in each step.

A "chip" in this file means: a frame, auto-layout horizontal, height 32, padding left and right spacing/3 (12), gap spacing/1 (4), vertically centred, corner radius radius/full, 1 px inside stroke border/default, no fill. It holds one text, Regular 14 px, text/primary. A "selected chip" has fill core/neutral and its text is Medium 14 px. A dropdown chip ends with the text " ▾" (U+25BE) inside the same text layer. Name every chip "Chip · <label>".

Badges:
- Never draw a badge. Clone an existing badge instance from "AV0 · Rooms" ("Badge · Ready", "Badge · Needs attention" or "Badge · No devices") and change only its text and its variant.
- After creating the first clone, read its component properties. Use the property whose options include Neutral, Info, Success, Warning and Error to set the variant, and the text property (or the nested text layer) to set the label. Write the property names you found into your report.
- Variant per state: Ready = Success, Processing = Warning, Failed = Error, Shared with learners = Info.
- If a variant (for example Error or Info) is not available, use the closest one, and report it under "Component gaps".

Thumbnails:
- The source instances are "Thumbnail · recording" inside "Card · Recent recordings" (307:12799) on the Drafts page. Their node IDs are I307:12799;67:150;307:12849;2321:14582;927:29155 (thumbnail A) and I307:12799;67:150;307:12850;2321:14582;927:29472 (thumbnail B).
- Clone the instance. If cloning a nested instance is not possible, create an instance of its main component and report it under "Component gaps". Never detach it.
- A thumbnail stays 64 × 64.

Section "Video review · Sketches":
- A Section on page 960:51213 at x 0, y 4500. Size 4840 × 1180. If your metadata check shows something else in that area, stop and report.
- Three slots in one row. The screen of slot n sits at x = 80 + (n - 1) × 1560, y = 120, relative to the Section. Each screen is 1440 wide with clip content on. VR1 and VR2 are 900 high. VR3 is 948 high.
- Label: 24 px above each screen, left-aligned with it (y 76 in the Section). Make it by cloning the text "Label · AV0" (1603:10620), then set its text to the new frame's exact name and name the layer "Label · <frame code>" (for example "Label · VR1").
- Caption: 24 px below each screen, left-aligned with it, 1440 px wide (y 1044 for VR1 and VR2, y 1092 for VR3). Make it by cloning the text "Caption · AV0" (1603:10621), then set the two lines given in each section and name the layer "Caption · <frame code>".

Sample data, the same in all frames: Riverbend College of Nursing, Dr. Maya Ortiz (faculty). Rooms: Sim Room 1, Sim Room 2, Skills Lab 1, Debrief Room 1. Learners: Emily Baker, Priya Shah, Marcus Chen, Aisha Rahman. Courses: NURS 310, NURS 340.

Product rules (decided 11-16, they apply to every clone):
- One app for the customer. The source frame "AV0 · Rooms" has a button labelled "Manage rooms in OpSpace" (instance "Button · Customize"). In every clone, overwrite this button's label or hide the button. Never leave "Manage rooms in OpSpace". No product switcher anywhere. No text on any frame names "OpSpace" or "Essentials" as a place to go.
- Use Astryx components and styling only. Do not copy the OpSpace Chakra UI look.
- Side navigation: in VR1 (and so in VR2, which clones it), set the item labels of the instance "SideNav", top to bottom, to: Today, Notifications, Events, Recordings, then the group heading "Resources" followed by Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists. "Settings" stays in the footer. The SideNav component may not show a group heading: add the heading "Resources" as a text label (a clone of a muted text, Regular 12 px, text/secondary) above "Rooms", and say so in your report. Never drop the group. Use text overrides on the existing items only. Never add, copy or detach an item. The active item is "Recordings" (the fourth). If the instance has fewer than ten item rows, set as many labels as there are rows, in that order, and list the labels that did not fit under "Component gaps". If it has fewer than four rows, do not relabel anything: leave the SideNav labels as in the source, make the existing item "Recordings" the active one, and report the row count. In VR3 the side navigation is collapsed (icons only) and already has Recordings active: leave it as it is.
- Recordings is an entry in the menu. A recording opens from there. Recordings has no breadcrumb.

Report when done: the new frame IDs, the badge property names you found, the "Component gaps" list, and every step you could not do exactly as written. Then screenshot each frame you built.
```

## VR1 · Recordings

```
Goal: one frame "VR1 · Recordings" in slot 1 of a new Section.

1 · Section
Create the Section "Video review · Sketches" as described in the Shared rules. If a Section with that name already exists on the page, stop and report.

2 · Shell
- Clone "AV0 · Rooms" (1603:10516) into the Section. Place it at x 80, y 120. Rename the clone "VR1 · Recordings".
- Don't change "TopNav".
- In the clone, find the instance "SideNav". Set its item labels as described in the Shared rules ("Side navigation"). Its footer item "Settings" is the active one in the source. Make the item that reads "Recordings" the active item (the fourth item in "Items"; in the source it is the third item), and "Settings" a normal item: read the component properties of the nested "Settings" item, set the same values on the nested "Recordings" item, and set "Settings" to the values a non-active item (for example "Events") has. If this is not possible, report it and leave the SideNav as it is.
- In "Content", delete "Breadcrumb".
- Annotations: if "Content" has an annotation attached, remove it from the clone only.

3 · Page header
In "Page header":
- Text "Greeting": change its text to "Recordings".
- Instance "Text · Tuesday, January 19": change its text to "Every recording from your rooms, from events and ad hoc." If the text can't be changed on the instance, report it.
- Instance "Button · Customize" (its label in the source reads "Manage rooms in OpSpace"): set it hidden (visible = false). Do not just relabel it.

4 · Keep one badge, then remove the old cards
- Before deleting anything, clone one "Badge · Ready" instance (from "Row · Sim Room 1" in "Card · Rooms") into a temporary frame "TEMP badges", placed in the Section at x 80, y 1100. Clone one "Thumbnail · recording" twice into it as well (thumbnail A and thumbnail B, see Shared rules).
- Then delete "Card · Unassigned devices" and "Card · Rooms" from "Content".
- "Content" keeps its auto-layout, 24 px padding and 24 px gap.

5 · Filter bar
Add a frame as the second child of "Content" (after "Page header"). Name "Filter bar". Width fill (1132). Height hug. Auto-layout vertical, gap spacing/3 (12), no fill, no stroke.

5a · "Filter row 1": auto-layout horizontal, width fill, gap spacing/2 (8), vertically centred, no fill. Children, in this order:
- "Search field": a frame, width 360, height 32, auto-layout horizontal, padding left and right spacing/3 (12), vertically centred, corner radius radius/element-10, 1 px inside stroke border/default, fill surface/card. It holds one text, Regular 14 px, text/secondary: "Search title, participant or room".
- A frame "Spacer" of width 8, no fill.
- Chip "Chip · All": text "All · 41". This is a selected chip.
- Chip "Chip · Ready": text "Ready".
- Chip "Chip · Processing": text "Processing".
- Chip "Chip · Failed": text "Failed".
- Chip "Chip · Shared with learners": text "Shared with learners".
- Chip "Chip · Not linked to an event": text "Not linked to an event · 9".

5b · "Filter row 2": auto-layout horizontal, width fill, gap spacing/2 (8), vertically centred, no fill. Children, in this order, all dropdown chips (not selected):
- "Chip · Event": "Event ▾"
- "Chip · Participant": "Participant ▾"
- "Chip · Room": "Room ▾"
- "Chip · Date range": "Date range ▾"
- "Chip · Scenario / course": "Scenario / course ▾"
- "Chip · Recorded by": "Recorded by ▾"
- A frame "Spacer", width fill, no fill (pushes the next two to the right edge).
- Chip "Chip · Sort": "Newest first ▾"
- A frame "View switch": auto-layout horizontal, height 32, gap 0, corner radius radius/element-10, 1 px inside stroke border/default, clip content on. Two children, each a frame with auto-layout, height 32, padding left and right spacing/3 (12), vertically centred, one text Regular 14 px:
  - "Segment · List": text "List". Fill core/neutral, text Medium 14 px.
  - "Segment · Grid": text "Grid". No fill.

6 · Card "Recordings"
Add a card as the third child of "Content". Name "Card · Recordings". Width fill (1132). Height hug. Auto-layout vertical, padding 0, gap 0.

6a · "Columns header": auto-layout horizontal, height 40, padding left and right spacing/6 (24), gap 0, vertically centred. Cells are frames named "Cell · <label>", each with one muted-style text, left-aligned:
- "Cell · Thumbnail": width 80, empty (no text)
- "Cell · Recording": width 320, text "Recording"
- "Cell · Room": width 100, text "Room"
- "Cell · Date and time": width 112, text "Date and time"
- "Cell · Duration": width 64, text "Duration"
- "Cell · Participants": width 120, text "Participants"
- "Cell · Course": width 120, text "Course"
- "Cell · State": width 166, text "State"

6b · Day group rows. A group header is a frame "Group · <day>": auto-layout horizontal, height 32, padding left and right spacing/6 (24), vertically centred, 1 px top stroke border/default. One text, muted style, Medium weight: the day and count.

6c · Recording rows. Each row is a frame named "Row · <title>", auto-layout horizontal, height 72, padding left and right spacing/6 (24), gap 0, vertically centred, 1 px top stroke border/default. Cells are frames in the widths of 6a (80, 320, 100, 112, 64, 120, 120, 166), named like 6a. Cell contents:
- Thumbnail cell: a thumbnail instance (64 × 64).
- Recording cell: auto-layout vertical, gap 0, width 320: line 1 body text, Medium weight, the title; line 2 muted text, the second line. For an ad hoc recording, line 2 is a horizontal group named "Link line", gap spacing/2 (8): muted text "Not linked to an event", then label-style text (Medium 14 px, text/primary) "Link to event".
- Room, Date and time, Duration, Participants, Course cells: one body text each (Regular 14 px). A muted text "None yet" is used when there are no participants.
- State cell: one badge.

Build the first row completely, then clone it for the others and change texts, thumbnail and badge.

Order in the card, after "Columns header":

Group "Group · Fri 13 Nov": text "Fri 13 Nov · 3 recordings".
| Row | Title | Line 2 | Room | Date and time | Duration | Participants | Course | State (badge text, variant) |
|---|---|---|---|---|---|---|---|---|
| 1 | Ad hoc · Sim Room 2 · 13 Nov 10:32 | Link line (see above) | Sim Room 2 | 13 Nov · 10:32 | 06:15 | None yet | — | Ready, Success. Thumbnail A |
| 2 | NURS 310 · Sepsis recognition | Group A · Event | Sim Room 2 | 13 Nov · 09:00 | 18:42 | Emily Baker +3 | NURS 310 | Shared with learners, Info. Thumbnail B |
| 3 | NURS 340 · Postpartum hemorrhage | Group A · Event | Sim Room 1 | 13 Nov · 08:15 | 24:10 | Priya Shah +2 | NURS 340 | Processing, Warning. Thumbnail A |

Group "Group · Thu 12 Nov": text "Thu 12 Nov · 3 recordings".
| Row | Title | Line 2 | Room | Date and time | Duration | Participants | Course | State |
|---|---|---|---|---|---|---|---|---|
| 4 | Ad hoc · Skills Lab 1 · 12 Nov 16:20 | Link line | Skills Lab 1 | 12 Nov · 16:20 | 09:48 | None yet | — | Ready, Success. Thumbnail B |
| 5 | NURS 310 · Chest pain (STEMI) | Group A · Event | Sim Room 1 | 12 Nov · 14:00 | 17:55 | Marcus Chen +3 | NURS 310 | Ready, Success. Thumbnail A |
| 6 | NURS 340 · Pediatric asthma | Group B · Event | Skills Lab 1 | 12 Nov · 10:30 | 21:03 | Aisha Rahman +4 | NURS 340 | Failed, Error. Thumbnail B |

6d · "Footer row": auto-layout horizontal, height 44, padding left and right spacing/6 (24), vertically centred, space between, 1 px top stroke border/default.
- Left: muted text "Showing 6 of 41 recordings".
- Right: label-style text "Load more".

7 · Label and caption
- Label text: "VR1 · Recordings".
- Caption, two lines:
  "Faculty: opens Recordings to find a session by event, room, learner or date."
  "System: lists every recording, from events and ad hoc, groups it by day, shows its state, and marks ad hoc recordings that still need an event or participants."

8 · Clean up
Delete "TEMP badges".

Check before you report:
- The Section "Video review · Sketches" is 4840 × 1180 at x 0, y 4500. "VR1 · Recordings" is 1440 × 900 at x 80, y 120 in it. Label at y 76, caption at y 1044, both at x 80. Nothing changed in the Sections 1343:3275 and 1559:8318.
- The SideNav shows "Recordings" as the active item (or the gap is reported). There is no breadcrumb and no text reading "OpSpace".
- "Content" has three children: Page header, Filter bar, Card · Recordings. The header button is hidden.
- "Filter row 1" has eight children: Search field, Spacer, six chips. "Filter row 2" has nine children: six dropdown chips, Spacer, Chip · Sort, View switch.
- "Card · Recordings" has ten children: Columns header, two group headers, six rows, Footer row.
- Six badges: Ready, Shared with learners, Processing, Ready, Ready, Failed. All are instances. All six thumbnails are instances.
- Nothing overflows the 1440 × 900 frame, no text is clipped, and the card ends above y 828 in "Content".
- "TEMP badges" is gone.

Report: new IDs, badge property names, anything you could not do exactly as written, "Component gaps", and a screenshot of the frame.
```

## VR2 · Recordings, filtered

```
Goal: one frame "VR2 · Recordings, filtered" in slot 2 of the Section "Video review · Sketches". Run this only after VR1 has been checked.

1 · Clone
- Find the frame "VR1 · Recordings" in the Section "Video review · Sketches". If it doesn't exist, stop and report.
- Clone it inside the same Section. Place the clone at x 1640, y 120. Rename it "VR2 · Recordings, filtered".
- Clone "Label · VR1" to x 1640, y 76. Rename it "Label · VR2". Text: "VR2 · Recordings, filtered".
- Clone "Caption · VR1" to x 1640, y 1044. Rename it "Caption · VR2". Text, two lines:
  "Faculty: filters to ad hoc recordings in Sim Room 2, then links one to an event."
  "System: keeps the active filters visible, shows how many recordings match, and offers events from the same room and time."
- Don't change the original "VR1 · Recordings".

Everything below happens inside "VR2 · Recordings, filtered". Find layers by name.

2 · Filters
- In "Filter row 1": make "Chip · All" a normal chip (no fill, text Regular 14 px). Make "Chip · Not linked to an event" a selected chip (fill core/neutral, text Medium 14 px). Keep its text "Not linked to an event · 9".
- In "Filter row 2": change the text of "Chip · Room" to "Room: Sim Room 2 ▾" and make it a selected chip (fill core/neutral, text Medium 14 px). Rename it "Chip · Room: Sim Room 2".
- In "Filter row 2", insert after "Chip · Recorded by" and before "Spacer" a label-style text (Medium 14 px, text/primary) named "Clear filters", text "Clear filters".

3 · Rows
In "Card · Recordings":
- Group "Group · Fri 13 Nov": change its text to "Fri 13 Nov · 1 recording". Keep row 1 ("Row · Ad hoc · Sim Room 2 · 13 Nov 10:32") as it is. Delete the rows "Row · NURS 310 · Sepsis recognition" and "Row · NURS 340 · Postpartum hemorrhage".
- Group "Group · Thu 12 Nov": change its text to "Tue 10 Nov · 1 recording". Keep its first row ("Row · Ad hoc · Skills Lab 1 · 12 Nov 16:20") and delete the other two rows of that group. Change the kept row: name "Row · Ad hoc · Sim Room 2 · 10 Nov 15:05"; title "Ad hoc · Sim Room 2 · 10 Nov 15:05"; Room "Sim Room 2"; Date and time "10 Nov · 15:05"; Duration "11:30"; State badge stays "Ready".
- Clone that group header and that row once, and place both after the row. Group text "Wed 4 Nov · 1 recording". Row: name "Row · Ad hoc · Sim Room 2 · 4 Nov 09:20"; title "Ad hoc · Sim Room 2 · 4 Nov 09:20"; Room "Sim Room 2"; Date and time "4 Nov · 09:20"; Duration "08:47"; State badge "Ready".
- All three rows keep the "Link line" and the text "None yet" for participants, and "—" for course.
- "Footer row": change the left text to "Showing 3 of 9 recordings". Hide the right text "Load more" (visible = false).

4 · Link popover
Add a card to the frame itself (as a direct child of "VR2 · Recordings, filtered", on top of everything, absolute position; this is the one allowed exception to the no-absolute-positioning rule). Name "Card · Link to event". Position x 520, y 384 in the frame. Width 420. Height hug. Auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12).
- Text, card title style: "Link to an event".
- A frame "Search field", width fill, height 36, built like the "Search field" in "Filter row 1" (clone it and set width to fill, height 36): text "Search events".
- Muted text: "Suggested: same room and time".
- Two option rows, each a frame, auto-layout horizontal, width fill, space between, vertically centred, gap spacing/3 (12):
  - Left: auto-layout vertical, gap 0: body text, Medium weight, then muted text.
  - Right: label-style text "Link".
  - Row 1: "NURS 310 · Sepsis recognition" and "Group A · Fri 13 Nov · 09:00–11:00".
  - Row 2: "Open lab · Sim Room 2" and "Fri 13 Nov · 10:30–11:30".
- A 1 px line "Divider" (frame, width fill, height 1, fill border/default).
- Label-style text: "Add participants without an event".
If the popover fails or overflows the frame, delete it, finish the rest and report.

Check before you report:
- "VR1 · Recordings" is unchanged.
- "VR2 · Recordings, filtered" is 1440 × 900 at x 1640, y 120 in the Section. Label at y 76 and caption at y 1044, at x 1640.
- "Chip · Not linked to an event" and "Chip · Room: Sim Room 2" are selected, "Chip · All" is not. "Clear filters" exists.
- "Card · Recordings" has eight children: Columns header, three group headers, three rows, Footer row. "Filter row 2" has ten children (the nine from VR1 plus "Clear filters").
- Three ad hoc rows, all with a "Link line". Three Ready badges. All instances.
- The popover sits below row 1 and its top-left corner is at x 520, y 384.
- No text is clipped and nothing overflows the 1440 × 900 frame.
```

## VR3 · Review

```
Goal: one frame "VR3 · Review" in slot 3 of the Section "Video review · Sketches". Run this only after VR1 exists (the Section must exist).

1 · Clone
- Clone "Preview · Debrief" (1098:6920, Components page) into the Section "Video review · Sketches". Place it at x 3200, y 120. Rename the clone "VR3 · Review". Size stays 1440 × 948.
- Don't change the source frame.

Everything below happens inside "VR3 · Review". Find layers by name.

2 · Header
In the instance "Header" (inside "Main"):
- Text "Title text": change to "NURS 310 · Sepsis recognition" (it may already read that).
- Text "Sim Room 2" in "Meta · Room": keep. Text "Group A" in "Meta · Group": keep.
- Text in "Meta · Date" ("Tue, Jan 19 · 10:00–11:00"): change to "Fri, 13 Nov · 09:00–09:19".
- Instance "SRV / Mode switch": set it hidden (visible = false). If the QR icon next to it stays visible, hide it too and report its layer name.
- In instance "SRV / Header actions": set these three buttons hidden: "Button · Voice memo", "Button · Layout & audio", "Button · Report a problem". Keep "Button · 4 learners" and "Button · Share".
- Instance "IconButton · Back to event": keep. It goes back to the Recordings list.
If hiding is not possible on the nested instances, report it and leave them.

3 · Cameras
In the instance "SRV / Camera grid", in each of the instances "Camera 1", "Camera 2" and "Camera 3": hide the red dot that sits next to the camera name (the small round shape in the same label chip as the text). Set it hidden on the instance. Don't detach. If this is not possible, leave it and report it under "Component gaps".

4 · Player
Leave "SRV / Playback bar" (with its "Timeline" and markers), "SRV / Annotation input" and "SRV / Debrief panel" as they are. Don't change any tab. This is the timeline, markers and annotations the review screen needs.

5 · Card "Recording details"
In the frame "Video column" (832 × 836), below "SRV / Annotation input", add a card. Name "Card · Recording details". Position x 24, y 671 in "Video column" (absolute, the one allowed exception). Width 784. Height hug. Auto-layout vertical, padding spacing/4 (16), gap spacing/2 (8).
- Row "Title row": auto-layout horizontal, width fill, space between, vertically centred. Left: text, card title style: "Recording details". Right: muted text: "Recorded by Dr. Maya Ortiz · 18:42".
- Three rows, each named "Row · <label>": auto-layout horizontal, width fill, gap spacing/3 (12), vertically centred. Each has three children:
  1. A frame "Label cell", width 140, with a muted-style text (Regular 12 px, text/secondary).
  2. A frame "Value cell", width fill, with a body text.
  3. A label-style text (Medium 14 px, text/primary), hug width.
  Row · Event: "Event" · "NURS 310 · Sepsis recognition · Group A" · "Change"
  Row · Participants: "Participants" · "Emily Baker, Priya Shah and 2 others" · "Edit"
  Row · Shared: "Shared with learners" · "Video, checklist and feedback. Not shared: transcript and annotations." · "Edit"

6 · Label and caption
- Label text: "VR3 · Review". Clone "Label · AV0" (1603:10620) to x 3200, y 76 and name it "Label · VR3".
- Caption: clone "Caption · AV0" (1603:10621) to x 3200, y 1092 (24 px below the 948 px frame) and name it "Caption · VR3". Two lines:
  "Faculty: reviews the session later, jumps to markers on the timeline, and checks what learners can see."
  "System: opens the same layout as the debrief, now with the timeline, markers and annotations, and shows the event link and the sharing choices for this recording."

Check before you report:
- The source "Preview · Debrief" (1098:6920) is unchanged. In "VR3 · Review" the side navigation still shows Recordings as active, and no text reads "OpSpace".
- "VR3 · Review" is 1440 × 948 at x 3200, y 120 in the Section. Label at y 76, caption at y 1092, at x 3200.
- The header shows the title, the meta line with "Fri, 13 Nov · 09:00–09:19", "Button · 4 learners" and "Button · Share". The mode switch and the three live-only buttons are hidden (or the gap is reported).
- The playback bar still shows the timeline with its markers. The five panel tabs are unchanged.
- "Card · Recording details" has four children (Title row and three rows), is 784 wide, and ends above y 836 in "Video column". No text is clipped.
- "SRV / Camera grid", "SRV / Playback bar" and "SRV / Debrief panel" are still instances.
```

## Prototype wiring (for later)

Not part of these runs. Click targets for the prototype round:

| From | Click target | To |
|---|---|---|
| Any AV or SRV frame, "AV0 · Rooms" `1603:10516` (the Rooms page), "D1 · Dashboard" `307:12788` (the Today page) | SideNav item "Recordings" | "VR1 · Recordings" |
| "VR1 · Recordings" | "Chip · Not linked to an event" | "VR2 · Recordings, filtered" |
| "VR1 · Recordings" | "Row · NURS 310 · Sepsis recognition" | "VR3 · Review" |
| "VR2 · Recordings, filtered" | "Chip · All" | "VR1 · Recordings" |
| "VR2 · Recordings, filtered" | "Link to event" in the first row | Shows "Card · Link to event" (same frame; build as a second frame later if needed) |
| "VR3 · Review" | "IconButton · Back to event" | "VR1 · Recordings" |
| "D1 · Dashboard" `307:12788` | Rows of "Card · Recent recordings" `307:12799` | "VR3 · Review" |

## After these run

- Claude reviews the three frames in Figma (read-only) and writes a fix section here if needed.
- Likely follow-ups: a Chip / filter component, a real Table row component, a thumbnail with duration, an idle state for the camera tile, a Grid view.
