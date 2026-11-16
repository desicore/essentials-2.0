# 11-16 · One app: shared rules for the merge wireframes (F0 to F5)

This file holds the rules that every run of the "one app" wireframes shares. It builds nothing by itself. Each flow has its own file; every run reads this file first.

| File | What it builds | Chats |
|---|---|---|
| `11-16-merge-f0-shell.md` | New page, six empty Sections, the shared shell with the new side navigation | 1, runs alone, first |
| `11-16-merge-f1a-today.md` | L1 Today, L1b Start event | 1 |
| `11-16-merge-f1b-live.md` | L2 Live, L3, L3b, L3d, L3c, L4 Room view | 1 |
| `11-16-merge-f2-recordings.md` | L5 Recordings, L6 Recording, L6b Debrief tab | 1 |
| `11-16-merge-f3-rooms-devices.md` | L7 Rooms, L8 Room · AV tab, L9, L10, L10b, L11 | 1 |
| `11-16-merge-f4-participants.md` | P1, P1b, P2, P3, P4, P5 | 1 |
| `11-16-merge-f5-import.md` | I1 to I5 | 1 |

Order: F0 alone. Then the review gate (Claude checks the shell and fills in "Shell facts" below). Then the six flow chats, in parallel. All runs: **Claude Sonnet 5.5 · High**.

The three older files `11-16-session-start-center-overview.md`, `11-16-room-readiness.md` and `11-16-video-review.md` are **superseded** by these files. Do not run them. They say "the center overview is the Today page", which is no longer true.

## Context

- OpSpace and Essentials are one app for the customer. The split is internal (teams). Decided at the standup on 11-16.
- The task: bring the old Essentials functions and the new Essentials 2.0 designs into the OpSpace menu structure. We keep Astryx components. We may propose changes to how OpSpace works today.
- The concept was drawn as 30 low-fi screens on the FigJam board "Essentials x OpSpace" (`KStutzzTvN5ENoWJPj07Zg`). These prompts turn them into greyscale Astryx wireframes in the Figma file IMSH-MVP. The low-fi screen is the content spec; the existing IMSH-MVP frames are the visual source.
- Reasoning and decisions: vault page `wiki/work/essentials-2.0-opspace-merge-map.md`.
- These are discussion wireframes for the workshop on 11-17, not final designs.

## The concept in one page

Side navigation, top to bottom:

1. Today, Notifications, Events
2. Group heading "Sessions": Live, Recordings
3. Group heading "Resources": Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists
4. Footer: Settings

- **Today** is the day calendar. An event has the button "Start event". Starting the event also starts the recording.
- **Live** shows every room now. A recording can start here (ad hoc, one room or several rooms).
- **Recordings** lists past recordings. A recording opens on a page with two tabs, "Recording" and "Debrief".
- **The room view while recording** has no menu entry. It is full screen and its title is the room name.
- **Rooms**: the room page has tabs. The "AV" tab lists cameras and audio devices in two separate groups.
- **Simulators & Equipment** lists every device, with or without a room. A device page is the same page whether it is opened from a room or from this list. Only the breadcrumb differs.
- **Participants** come from the event. They can be changed before, during and after a recording. A whole group can be added in one step.
- **Import** has four steps: Source, Map, Review, Done. Integrations are connected once, under Settings.

Words that must not appear on any frame: "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard".

## Screen list

Frame names are exact. "Low-fi" is the node id of the low-fi screen on the FigJam board.

| Frame name | Section | Slot | Active nav item | Low-fi |
|---|---|---|---|---|
| L1 · Today | 1 · Sessions | 1 | Today | `8:378` |
| L1b · Start event, 2 rooms | 1 · Sessions | 2 | Today | `13:1204` |
| L2 · Live | 1 · Sessions | 3 | Live | `8:553` |
| L3 · Start recording | 1 · Sessions | 4 | Live | `8:757` |
| L3b · Rooms selected | 1 · Sessions | 5 | Live | `10:674` |
| L3d · Record 3 rooms | 1 · Sessions | 6 | Live | `13:1038` |
| L3c · 3 rooms recording | 1 · Sessions | 7 | Live | `10:804` |
| L4 · Room view | 1 · Sessions | 8 | none (collapsed rail) | `8:911` |
| L5 · Recordings | 2 · Recordings and debrief | 1 | Recordings | `8:1304` |
| L6 · Recording | 2 · Recordings and debrief | 2 | Recordings | `8:1047` |
| L6b · Recording, Debrief tab | 2 · Recordings and debrief | 3 | Recordings | `10:1055` |
| L7 · Rooms | 3 · Rooms and devices | 1 | Rooms | `8:1395` |
| L8 · Room, AV tab | 3 · Rooms and devices | 2 | Rooms | `8:1501` |
| L9 · Camera, opened from a room | 3 · Rooms and devices | 3 | Rooms | `8:1173` |
| L10 · Simulators & Equipment | 3 · Rooms and devices | 4 | Simulators & Equipment | `10:1184` |
| L10b · Simulators & Equipment, Audio | 3 · Rooms and devices | 5 | Simulators & Equipment | `11:1154` |
| L11 · Microphone | 3 · Rooms and devices | 6 | Simulators & Equipment | `11:1006` |
| P1 · Room view, Participants | 4 · Participants | 1 | none (collapsed rail) | `16:1748` |
| P1b · Room view, Add a group | 4 · Participants | 2 | none (collapsed rail) | `21:1634` |
| P2 · Start recording, Learners | 4 · Participants | 3 | Live | `16:1965` |
| P3 · Room view, No learners yet | 4 · Participants | 4 | none (collapsed rail) | `16:1855` |
| P4 · Recording, Link event and learners | 4 · Participants | 5 | Recordings | `16:1658` |
| P5 · People, Learners | 4 · Participants | 6 | People | `18:1365` |
| I1 · Import, Source | 5 · Import | 1 | People | `18:1508` |
| I2 · Import, Map | 5 · Import | 2 | People | `18:1660` |
| I3 · Import, Review | 5 · Import | 3 | People | `18:1769` |
| I4 · Import, Done | 5 · Import | 4 | People | `18:1885` |
| I5 · Settings, Integrations | 5 · Import | 5 | Settings | `18:1988` |

## How to run

Every flow file has its own "How to run" with the full line to paste. The pattern is always:

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/<flow file>. Apply "Shared rules" from the first file and "Flow rules" from the second. Then run these sections of the second file, in this order: <sections>. After each section, run its check list and take a screenshot before you start the next section.`

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3).
Target page: "🧭 One app · merge [D]". Run F0 creates it. Its id is in "Shell facts" at the end of this file.
Library page "⚙️ Components (D)" (675:31351): read-only.

WHERE YOU MAY WRITE
- Only on the target page, and only inside the one Section your flow file names. Run F0 is the only run that creates the page and the Sections.
- Several chats build on this page at the same time. Never touch a Section that is not yours: do not move, rename, resize, restyle or delete it or anything in it. Never touch Section "0 · Shell" after F0 (you may clone from it).
- Every other page is read-only: "👤 SRV flow [D]" (960:51213), "Wireframe (D)" (0:1), the Drafts page (305:18292), "⚙️ Components (D)" and every "(G)" page. You may clone frames from them and create instances of their components. Never edit a main component, add a variant, or rename, move or delete anything there.
- Do not create a component, a style or a variable. The only exception is the one component F0 creates.

SECTIONS (created by F0, all at x 0, all 12640 × 1240)
- "0 · Shell" y 0
- "1 · Sessions" y 1500
- "2 · Recordings and debrief" y 3000
- "3 · Rooms and devices" y 4500
- "4 · Participants" y 6000
- "5 · Import" y 7500

SLOTS
- A screen in slot n sits at x = 80 + (n - 1) × 1560, y = 120, relative to its Section. Slot 1 x 80, slot 2 x 1640, slot 3 x 3200, slot 4 x 4760, slot 5 x 6320, slot 6 x 7880, slot 7 x 9440, slot 8 x 11000.
- A page screen is 1440 × 900 with clip content on. A room view screen is 1440 × 948 (it is a clone of "S1 · Ready to record", which is 948 high).
- Label: a text at y 76, left-aligned with its screen. Clone "Label · AV0" (1603:10620), set its text to the frame's exact name, name the layer "Label · <code>" (for example "Label · L2").
- Caption: a text at y 1044 (y 1092 under a 948-high screen), left-aligned with its screen, 1440 wide. Clone "Caption · AV0" (1603:10621), name it "Caption · <code>", set the two lines the section gives.
- Frame names, slots and active nav items: use the "Screen list" table in this file. Names are exact.

IDS AND CLONES
- IDs in the prompt files refer to source nodes. A clone has new IDs. Inside a clone, find layers by their exact name.
- If a named layer is not found, stop that step, do not guess, and report it.
- Build each screen by cloning the source frame the section names and changing it. Do not draw a screen from nothing unless the section says "new build".

HOW TO CHANGE AN INSTANCE
- Only through variant properties, exposed properties, text overrides and layer visibility. Never detach an instance.
- When a step says "if this is not possible, report it", do not build a workaround. Leave the instance as it is and add one line to "Component gaps" in your report: frame, component, what is missing.
- Button Primary or Secondary: read the component properties of the button instance and set the property whose options include Primary and Secondary. Report the property name and options you found.

STYLE
- Greyscale only, including image fills. The only colour is in status badges (green, yellow, red), which are cloned, never drawn.
- Font Figtree. Use only variables that "D1 · Dashboard" (307:12788) already uses. No hard-coded colours, sizes or radii:
  - Text: text/primary, text/secondary.
  - Surfaces and borders: surface/card, border/default, core/background-surface (white), core/neutral (placeholder fill).
  - Radius: radius/container (cards), radius/element-10 (buttons, inner boxes), radius/full (badges).
  - Spacing: spacing/1 to spacing/6 (4 to 24 px).
- Text sizes: card title Bold 14; body Regular 14, line height 20, text/primary; muted Regular 12, text/secondary; label and button text Medium 14. Clone an existing text of the right kind and change its characters; do not create text styles.
- Every new frame uses auto-layout. No absolute positioning inside cards. The only absolute layers are a dim layer, a sheet, a dialog and a popover, which sit on top of a screen.
- A "card" means: auto-layout vertical frame, fill surface/card, 1 px inside stroke border/default, corner radius radius/container, clip content on.
- A live picture or video is a grey placeholder frame (fill core/neutral) with a centred muted text that says what it is, for example "Live picture". No photos.

BADGES AND BUTTONS
- Never import or draw a badge or a button. Clone an existing instance and change only its label text and its variant property.
- Badge sources: Success "Badge · Ready" (1605:5894), Warning "Badge · Needs attention" (1605:5899), Neutral "Badge · No devices" (1605:5909), all in "AV0 · Rooms" (1603:10516); Error "Badge · Not found" (1560:7975) in "AV1 · Room devices" (1559:8319).
- Button source: "Button · Start recording" (1694:9947, Primary, SM) and "Button · Room devices" (1694:9998, Secondary, SM) in "CO1 · Center overview" (1692:9756). Change the label with the text override.
- Name every cloned badge "Badge · <label>" and every cloned button "Button · <label>".

SIDE NAVIGATION AND SHELL
- Every page screen starts as a clone of "Shell · Page" from Section "0 · Shell" (id in "Shell facts"). It already has the top bar, the new side navigation, an empty white content area, a breadcrumb and a page header.
- Never rebuild or relabel the side navigation. Only set the active item, with the method written in "Shell facts". The active item of each screen is in the "Screen list" table.
- A room view screen (1440 × 948) is a clone of "S1 · Ready to record" (1343:4038) or of the frame the section names. It keeps the collapsed rail as it is. Do not relabel the rail.
- No product switcher. No button or text that sends the user to another product.

WORDS
- All text on the frames is English.
- Never write these words on a frame: "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard". If a cloned source shows one of them, overwrite it with the text the section gives, or hide the layer and report it.
- Exception: the product logo in the top bar ("TopNav") is branding, not a text. Leave every TopNav and its logo exactly as the source has it. Never replace, hide or edit a TopNav.
- Copy every UI text from the section exactly, including capital letters and punctuation.

SAMPLE DATA (the same in all frames; it replaces the sample data of the low-fi board)
- Riverbend College of Nursing. Tue 19 Jan 2027, about 09:50. Signed-in user: Dr. Maya Ortiz (faculty).
- Rooms: Sim Room 1 (Simulation room, 3 cameras, 2 mics, Audio kit), Sim Room 2 (Simulation room, 2 cameras, 1 device not found), Skills Lab 1 (Skills lab, 1 camera, Audio kit), Debrief Room 1 (Debrief room, no cameras).
- Events: 10:00 to 11:30 NURS 310 · Sepsis recognition, Group A, 5 learners, Sim Room 2. 13:00 to 14:30 NURS 340 · Postpartum hemorrhage, Group B, 6 learners, Sim Room 1 and Skills Lab 1 (the event with two rooms).
- Learner groups: NURS 310 · Group A (5 learners), NURS 310 · Group B (6 learners), NURS 340 · Group B (6 learners), Paramedic intake 3 (12 learners).
- Learner names: use the names that the source frame already shows. When more are needed the flow file lists them.
- Learning system used for import: Canvas.

SELF-CHECK AFTER EACH SCREEN
1. The frame has the exact name and slot from the Screen list, the right size, clip content on.
2. Label and caption exist, with the right names and positions.
3. No forbidden word is on the frame. Search all text layers.
4. No detached instance. No hard-coded colour.
5. Nothing outside your Section changed.
6. Take a screenshot of the frame and look at it: no overlap, no clipped text, no empty gap that the section did not ask for.
If a check fails, fix it before the next section. If you cannot fix it, say so in the report.

REPORT WHEN DONE
- The id of every frame you built.
- The Badge and Button property names you found.
- "Component gaps": one line per gap.
- Every step you could not do exactly as written, and what you did instead.
- Then one screenshot per frame.
```

## Shell facts

Filled in by Claude after the F0 review gate on 11-16. **F0 passed. The flow chats may start.**

```
Status: F0 passed (checked 11-16). Flow chats may start.
Target page: "🧭 One app · merge [D]" (1749:8314)
Section ids: "0 · Shell" 1749:8315 · "1 · Sessions" 1749:8316 · "2 · Recordings and debrief" 1749:8317 · "3 · Rooms and devices" 1749:8318 · "4 · Participants" 1749:8319 · "5 · Import" 1749:8320
"Shell · Page": 1749:8657 (1440 × 900). Children: "TopNav" 1749:8658, "Body" 1749:8659 with instance "SideNav" 1749:8916 and frame "Content" 1749:8661 (1180 × 852). In "Content": "Breadcrumb" 1749:8662 and "Page header" 1749:8666.
"SideNav · One app" component: 1749:8656. Never edit it.
How to set the active nav item: in YOUR clone of "Shell · Page", find the instance "SideNav", then inside it the nested instance named "Nav · <label>" (findOne by exact name, for example "Nav · Rooms"). Call setProperties({ State: "Selected" }) on it. Then call setProperties({ State: "Default" }) on "Nav · Live", which is the selected item in the source. Exactly one item is Selected per screen. The property key is "State", values "Default" and "Selected". Item names: "Nav · Today", "Nav · Notifications", "Nav · Events", "Nav · Live", "Nav · Recordings", "Nav · Rooms", "Nav · Simulators & Equipment", "Nav · People", "Nav · Inventory", "Nav · Labels", "Nav · Prep checklists", "Nav · Settings".
Layer names inside "Shell · Page" (fixed by the F0 file, checked at the gate): "TopNav", "Body" with "SideNav" and "Content"; in "Content": "Breadcrumb" (texts "Section", "/", "Page") and "Page header" (text "Greeting" = page title, instance "Text · Tuesday, January 19" = sub text, instance "Button · Customize" = hidden header button).
Breadcrumb levels: "Breadcrumb" in "Shell · Page" has three children (text, "Separator", text) = two levels. For one level: delete the "Separator" and the last text. For three or more levels: inside YOUR clone only, duplicate the "Separator" and the last text once per extra level, keep them in order, then set the texts. This is allowed and is not a reason to stop, even if a flow file says "stop if the Breadcrumb does not have five children". The last level is text/primary, the earlier levels text/secondary (copy from the source texts).
Placeholder texts to overwrite in every clone: breadcrumb "Section" and "Page", page title "Page title", sub text "Short page description".
```
