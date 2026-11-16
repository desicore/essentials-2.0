# 11-16 · Session start and center overview sketches (CO1, SS1, SS2, SS3)

Four greyscale wireframe sketches for the workshop on 11-17/18. They show everything that leads INTO the Session Recording View (S1): the center overview, and the step that starts a recording from the Today page, from an event, and from a room card. Since 11-16 the center overview IS the Today page (the app follows the OpSpace menu, one app for the customer). They are discussion sketches, not final designs. The reasoning and the requirement lines (SM-1 to SM-9) are in the vault page `wiki/work/essentials-2.0-concept-session-start-center-overview.md`.

## Context

- Patrik asked on 11-13 for at least high-level wireframes or concepts for the center overview, because nobody will read long documents live.
- The SRV recording flow (S1 to S9) is built. Nothing leads into S1 yet except the "Start recording" button on the Up next row of the Today page (source frame "D1 · Dashboard").
- Design direction (Daniel, 11-15): one application, no "switch to OpSpace" moment. One start step with three entry points, all landing in S1. The entry points differ only in what is prefilled.
- CO1 shows the center overview as a wall of room cards. SS1 shows the start step for an ad hoc recording (started from the Today page). SS2 shows it for an event whose room needs attention. SS3 shows the start step opened from a room card.
- Sample data: Riverbend College of Nursing, Dr. Maya Ortiz (faculty), rooms Sim Room 1, Sim Room 2 (needs attention, 1 device not found), Skills Lab 1, Debrief Room 1.

## What I found in the file (11-15, read-only)

- Daniel's older concept for this already exists on page "Wireframe (D)" (0:1): "3a · Recordings" `1:6797` (list with "Center overview" and "New recording" buttons), "3b · Center overview" `1:6959` (2 × 2 wall of room cards with live photo), "3c · Rooms selected" `1:7067`, "3d · Record 3 rooms" `1:7184` (right-hand sheet with one Event select per room), "3e · Center overview, 3 recording" `1:7328` (banner "3 rooms recording", Stop all), "3g · Stop all confirmation" `1:7610`. They show no problem state, no scheduled-next state and no people. They use Sim Room 1 to 4 and live photos.
- Old 3-column concepts "Center Overview – Simple" `2:1141` and "Center Overview – Detailed" `2:788` (1470 × 900, older look) show a learner list per room. Not reused.
- The Dashboard "D1 · Dashboard" `307:12788` has no ad hoc "Start recording" button. Its Page header holds one button, "Button · Customize". The Up next row has "Button · Open event" and "Button · Start recording".
- Shell for CO1: "AV0 · Rooms" `1603:10516` (1440 × 900, in Section "AV setup · Sketches" `1559:8318`). Children: instance "TopNav" `1603:10517`, frame "Body" `1603:10518` with instance "SideNav" `1603:10519` and frame "Content" `1603:10520` (white, 1180 × 852). "Content" holds "Breadcrumb" `1603:10521` (texts "Settings", "Separator", "Rooms"), "Page header" `1603:10527` (text "Greeting", instance "Text · Tuesday, January 19", instance "Button · Customize" `1603:10529`/`1603:10530`), "Card · Unassigned devices" `1605:5853` (holds instance "Button · Assign" `1605:5864`, Secondary, SM) and "Card · Rooms" `1605:5790`. Badge instances in "Card · Rooms": "Badge · Ready" `1605:5894`, "Badge · Needs attention" `1605:5899`, "Badge · No devices" `1605:5909`. The layer names "Greeting" and "Text · Tuesday, January 19" are left over from the Dashboard.
- Error badge: "Badge · Not found" `1560:7975` in "AV1 · Room devices" `1559:8319`.
- Shell for SS1: "D1 · Dashboard" `307:12788` (page 305:18292, 1440 × 900): "TopNav" `307:12789`, "Body" `307:12790` with "SideNav" `307:12791` (the source has "Dashboard" active; in the clone this item reads "Today", see Shared rules) and "Content" `307:12792` with "Page header" `307:12793` (text "Greeting" `307:12794`, instance "Button · Customize" `307:13359`) and "Columns" `307:12796`.
- Scrim: rounded rectangle "Dim" `1360:9294` in "S8 · Stop confirmation" `1360:8441` (Core/Overlay 50 %).
- Sheet: instance "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" `1:7327` (480 × 1096) in "3d · Record 3 rooms" `1:7184`. Parts: "Header" with "Title" and "Subtitle", "Close Button", slot "Body" holding frame "Rooms" with three "Room block · Sim Room N" frames (each: "Room header" with texts "Room name" and "Cameras", instance "Select · Event", text "Hint"), slot "Footer Actions" with instances "Cancel" and "Start 3 recordings".
- Participants popover: component "SRV / Participants popover" `1048:5499`, used in "S2 · Participants" `1348:10885` as instance `1348:11444`. Not used in these runs; the vault page says what is missing.
- Target page "👤 SRV flow [D]" `960:51213` holds three top-level nodes: Section "SRV flow · Recording" `1343:3275` (y 0 to 1220), text "Title · SRV flow" `1347:8395` (y -80), Section "AV setup · Sketches" `1559:8318` (x 0, y 1500, 7960 × 1180, so it ends at y 2680). Nothing is below y 2680. The stray screenshot `1620:5127` is not on this page and not on "Wireframe (D)"; it may be gone.
- Component set "Badge" (Astryx) is not imported here. Badges are cloned from existing instances.

## Decisions in these prompts (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | A new Section "Session start · Sketches" at x 0, y 3000 on the SRV flow page. It leaves 320 px of air below the AV Section |
| Words on screen | "Start recording", the label the Today page (D1) and S1 already use. The design direction calls the step "Start session". Users see "Start recording" |
| Menu and names (11-16) | One app. The side navigation follows the OpSpace menu: Today, Notifications, Events, Recordings, then the group heading "Resources" followed by Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists. Settings stays in the footer. The center overview IS the Today page. No text names "OpSpace" or "Essentials" as a place to go. Components stay Astryx |
| Shell for CO1 | Clone of "AV0 · Rooms": white content area, Button and Badge instances already there. The breadcrumb is deleted (Today is a top-level page) |
| Shell for SS1 to SS3 | Clone of "D1 · Dashboard" with a dim layer and a right-hand sheet. The sheet is the one from Daniel's concept 3d, so the look is his own |
| Live picture in CO1 | A grey placeholder frame with the text "Live picture". The real card uses the camera image as in 3b. Cursor can't restructure the 3b card instances without detaching them |
| Event case | If the room is ready, the Start recording button on the event opens S1 directly, with no sheet. The sheet appears only when something needs a decision. SS2 shows that case for Sim Room 2, which needs attention |
| Stop all | Not on CO1, because only one room records. It appears when two or more rooms record (see 3e, 3g) |
| Room states | Ready, Needs attention, Recording, Scheduled next. One badge per room. Order if several apply: Recording, Needs attention, Scheduled next, Ready |
| Sample data | Sim Room 1 Ready, Sim Room 2 Needs attention, Skills Lab 1 Recording (ad hoc), Debrief Room 1 Scheduled next. The Today page (D1) puts the 13:00 NURS 340 event in "Sim Room 3", which has no row in the AV sketches. The sketches use Sim Room 1 for it. Fix when the data model is final |
| Screen size | 1440 × 900 |
| Persona in captions | Faculty (Maya) for the start step, sim technician or faculty for the overview |

## Gaps I expect in Cursor's report

- The Button property that sets Primary may have another name or option than "Primary". The report must say what it found.
- The Select instance may not expose its value text. The report must name the text layer it used.
- The sheet instance may not resize to 900 high. The fallback is in SS1.
- The nav item "Today" may not be settable as active from the instance, and the SideNav may have fewer item rows than the ten items. The fallbacks are in the Shared rules and in CO1.
- Live picture is a grey box, not a photo. That is on purpose.
- Cursor has once reported success without writing anything. Check each frame in Figma.

## How to run

All runs: **Claude Sonnet 5.5 · High**. One new Cursor chat per run. Run them one after the other, never in parallel, because SS1 and SS3 clone parts of what CO1 builds and SS2 clones SS1.

1. **CO1 · Center overview.**
   `Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "CO1 · Center overview".`
2. **Review gate. Tell Claude when CO1 is done.** Claude checks the frame in Figma before SS1 and SS3 clone parts of it.
   **Passed on 11-15.** CO1 is frame `1692:9756` in Section "Session start · Sketches" `1692:9755`. Cards: Sim Room 1 `1694:9910`, Sim Room 2 `1694:9916`, Skills Lab 1 `1694:9923`, Debrief Room 1 `1694:9929`. "TEMP badges" was removed, as planned. SS1, SS2 and SS3 are clear to run. **SS1 `1695:10571` and SS2 `1697:10563` passed on 11-15** (no must-fix; the footer buttons carry a red record dot from the source sheet).
3. **SS1 · Start session, ad hoc.**
   `Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS1 · Start session, ad hoc".`
4. **SS2 · Start session, from event.** Run only after SS1 is done.
   `Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS2 · Start session, from event".`
5. **SS3 · Start from a room card.** Run only after the CO1 gate. It is a cheap clone of CO1.
   `Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS3 · Start from a room card".`

6. **SS1b · Start session, ad hoc, from the center overview.** Added 11-15 after Daniel's review: the Recordings entry in the menu is the main place to manage recordings. Claude Sonnet 5.5 · Medium (a pure clone). Run only after SS1 is checked. If SS3 is not built yet, that is fine.
   `Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS1b · Start session, ad hoc, from the center overview".`

After each run, check that the frame really exists in Figma.

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Target page "👤 SRV flow [D]" (960:51213). Library page "⚙️ Components (D)" (675:31351).

Source nodes (all read-only, you may clone from them):
- "D1 · Dashboard" (307:12788), on the Drafts page (305:18292).
- "AV0 · Rooms" (1603:10516) and "AV1 · Room devices" (1559:8319), inside Section "AV setup · Sketches" (1559:8318). Their label "Label · AV0" (1603:10620) and caption "Caption · AV0" (1603:10621).
- "Dim" (1360:9294), inside "S8 · Stop confirmation" (1360:8441).
- "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" (1:7327), inside "3d · Record 3 rooms" (1:7184) on page "Wireframe (D)" (0:1).

Where you may write:
- Only on page "👤 SRV flow [D]", and only inside the Section "Session start · Sketches" that section CO1 creates.
- Never change, move or delete anything in the Sections "SRV flow · Recording" (1343:3275) and "AV setup · Sketches" (1559:8318), or the text "Title · SRV flow" (1347:8395).
- "⚙️ Components (D)", the Drafts page, "Wireframe (D)" and every "(G)" page are read-only. You may clone frames from them and create instances of their components. Never edit a main component, add a variant, or rename, move or delete anything on those pages.

IDs and clones:
- IDs in this file refer to the source nodes. A clone has new IDs. Inside a clone, always find layers by their exact name.
- If a layer name is not found in a clone, stop that step, don't guess, and report it.

How to change an instance:
- Only through variant properties, exposed properties, text overrides and layer visibility. Never detach an instance.
- When a step says "if this is not possible, report it", don't build a workaround. Leave the instance as it is and add one line to "Component gaps" in your report: frame, component, what is missing.
- To make a button Primary or Secondary, read the component properties of the button instance. Set the property whose options include Primary and Secondary. Write the property name and options you found into your report.

Style:
- Greyscale only, including image fills. The only colour is in status badges (green, yellow, red), which are cloned, never drawn.
- Font Figtree. Use only variables that "D1 · Dashboard" already uses. No hard-coded colours, sizes or radii. The ones you need:
  - Text colours: text/primary, text/secondary.
  - Surfaces and borders: surface/card (card fill), border/default (card border and row dividers), core/background-surface (white).
  - Radius: radius/container (cards), radius/element-10 (buttons, inner boxes), radius/full (badges).
  - Spacing: spacing/1 to spacing/6 (4 to 24 px).
  - Neutral fill for placeholders: core/neutral.
- Text sizes, taken from D1:
  - Card title: Bold 14 px. Copy the style of a card title in D1.
  - Body: Regular 14 px, line height 20 px, text/primary. "Body Medium" is the same in Medium weight.
  - Muted: Regular 12 px, text/secondary.
  - Label and button text: Medium 14 px.
- Every new frame uses auto-layout. No absolute positioning inside cards. The only absolute layers are the dim layer, the sheet and the popover, which sit on top of a 1440 × 900 frame.

A "card" in this file means: a frame with auto-layout vertical, fill surface/card, 1 px inside stroke border/default, corner radius radius/container, clip content on. Padding and gap are given in each step.

Badges and buttons:
- Never import or draw a badge or a button. Always clone an existing instance and change only its label text and its variant property.
- Badge variants and where to clone them in the first run (CO1): Success from "Badge · Ready" (1605:5894), Warning from "Badge · Needs attention" (1605:5899), Neutral from "Badge · No devices" (1605:5909), all in "AV0 · Rooms"; Error from "Badge · Not found" (1560:7975) in "AV1 · Room devices". In later runs clone them from the CO1 frame.
- After the first clone, read the badge's component properties. The property whose options include Neutral, Success, Warning and Error sets the variant. Write its name into your report.
- Buttons: clone "Button · Assign" (1605:5864 in "AV0 · Rooms"). In the built frame "CO1 · Center overview" (1692:9756) no layer is named "Button · Assign" any more: the buttons are named after their labels. There, clone "Button · Start recording" (1694:9947, Primary) or "Button · Room devices" (1694:9998, Secondary). It is Variant=Secondary, Size=SM. Change the label with the text override. Set Primary where a step says Primary.

Section "Session start · Sketches":
- A Section on page 960:51213 at x 0, y 3000. Size 6400 × 1180.
- Four slots in one row. The screen of slot n sits at x = 80 + (n - 1) × 1560, y = 120, relative to the Section: slot 1 x 80, slot 2 x 1640, slot 3 x 3200, slot 4 x 4760. Each screen is 1440 × 900 with clip content on.
- Label: at y 76, left-aligned with its screen. Make it by cloning "Label · AV0" (1603:10620), set its text to the new frame's exact name, name the layer "Label · <frame code>" (for example "Label · CO1").
- Caption: at y 1044, left-aligned with its screen, 1440 px wide. Make it by cloning "Caption · AV0" (1603:10621), name it "Caption · <frame code>", and set the two lines given in each section.

Product rules (decided 11-16, they apply to every clone):
- One app for the customer. The source frame "AV0 · Rooms" has a button labelled "Manage rooms in OpSpace" (instance "Button · Customize"). In every clone, overwrite this button's label or hide the button. Never leave "Manage rooms in OpSpace". No product switcher anywhere. No text on any frame names "OpSpace" or "Essentials" as a place to go.
- Use Astryx components and styling only. Do not copy the OpSpace Chakra UI look.
- Side navigation: in every clone of "AV0 · Rooms" or "D1 · Dashboard", the item labels, top to bottom, are: Today, Notifications, Events, Recordings, then the group heading "Resources" followed by Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists. "Settings" stays in the footer. The SideNav component may not show a group heading: add the heading "Resources" as a text label (a clone of a muted text, Regular 12 px, text/secondary) above "Rooms", and say so in your report. Never drop the group. Set the labels with text overrides on the existing items, in that order. Never add, copy or detach an item. If the instance has fewer than ten item rows, set as many as exist, in that order, and list the labels that did not fit under "Component gaps". The item "Dashboard" is now "Today". Today is the active item in CO1, SS1, SS2 and SS3. To change which item is active, read the properties of the currently active nested item, set the same values on the nested item that reads "Today", and give the old active item the values of a non-active item (for example "Events"). If this is not possible, report it and leave it as it is.

Sample data, the same in all frames: Riverbend College of Nursing, Tue 19 Jan 2027, about 09:50. Rooms: Sim Room 1 (Simulation room, 3 cameras, 2 mics, Audio kit), Sim Room 2 (Simulation room, 2 cameras, 1 device not found), Skills Lab 1 (Skills lab, 1 camera, Audio kit), Debrief Room 1 (Debrief room, no cameras). Event at 10:00: NURS 310 · Sepsis recognition, Group A, 5 learners, Sim Room 2. Event at 13:00: NURS 340 · Postpartum hemorrhage, Group B.

Report when done: the new frame IDs, the Badge and Button property names you found, the "Component gaps" list, and every step you could not do exactly as written. Then screenshot each frame you built.
```

## CO1 · Center overview

This is the frame the other runs clone from. Claude reviews it before SS1 and SS3 run.

Run: **Claude Sonnet 5.5 · High**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "CO1 · Center overview".`

```
Goal: one frame "CO1 · Center overview" in slot 1 of a new Section "Session start · Sketches".

1 · Section
Check page 960:51213: nothing may sit at y 3000 or lower. If a Section named "Session start · Sketches" already exists, or something occupies y 3000 to 4180, stop and report. Otherwise create the Section as described in the Shared rules (x 0, y 3000, 6400 × 1180).

2 · Shell
- Clone "AV0 · Rooms" (1603:10516) into the new Section. Place it at x 80, y 120. Rename the clone "CO1 · Center overview".
- In the clone, remove any annotation from the frame "Content".
- Don't change "TopNav".
- In the instance "SideNav": set the labels as described in the Shared rules ("Side navigation"). The item "Settings" (in the footer) is the active one in the source. Make "Today" (the first item, which reads "Dashboard" in the source) the active item and "Settings" a normal item: read the component properties of the nested "Settings" item, set the same values on the nested item that reads "Today", and set "Settings" to the values a non-active item (for example "Events") has. If this is not possible, report it and leave the SideNav as it is.

3 · Temporary badges
Create a frame "TEMP badges" inside the Section at x 80, y 1100. Put clones in it: one "Badge · Ready", one "Badge · Needs attention", one "Badge · No devices" (from the clone of AV0), and one "Badge · Not found" cloned from "AV1 · Room devices" (1559:8319). Also put one clone of the instance "Button · Assign" in it. Delete "TEMP badges" at the end of the run.

4 · Breadcrumb
Delete the frame "Breadcrumb" from "Content". Today is a top-level page and has no breadcrumb. Do not write "Settings", "Recordings" or "Rooms" anywhere in a breadcrumb.

5 · Page header
In "Page header":
- Text "Greeting": "Today".
- Instance "Text · Tuesday, January 19": text "4 rooms · 1 recording · 1 needs attention".
- Instance "Button · Customize": its label in the source reads "Manage rooms in OpSpace". Overwrite it with "Start recording" (see the product rules in the Shared rules). Set Variant to Primary. The icon stays hidden. If the button's width doesn't follow the text, set the width so the label has 12 px padding left and right. The button's right edge stays where it is (x 1132 inside "Page header").

6 · Remove the old cards
In "Content", delete "Card · Unassigned devices" and "Card · Rooms". "Content" keeps its auto-layout, 24 px padding and 24 px gap.

7 · Room wall
Add a frame as the second child of "Content" (after "Page header"; the breadcrumb is gone). Name "Room wall". Width fill (1132). Height hug. Auto-layout vertical, gap spacing/6 (24), no fill, no stroke.
It has two children, "Wall row 1" and "Wall row 2". Each: auto-layout horizontal, gap spacing/6 (24), width fill, height hug, top-aligned, no fill, no stroke. Each row holds two room cards, each set to fill width (554) and height 320.
Row 1: "Card · Sim Room 1", "Card · Sim Room 2". Row 2: "Card · Skills Lab 1", "Card · Debrief Room 1".

8 · Room card (the same structure for all four)
Each card: a card (see Shared rules). Auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12), width fill, height 320. Four children, in this order:

8a · "Card header": auto-layout horizontal, width fill, height hug, space between, top-aligned.
- Left: frame "Title block", auto-layout vertical, gap 0. Child 1: text, card title style: the room name. Child 2: text, muted style: the line given in the table.
- Right: a badge, cloned from "TEMP badges", variant and label given in the table.

8b · "Live picture": frame, width fill (520), height 140, auto-layout vertical, centred both ways, fill core/neutral, corner radius radius/element-10, clip content on. One text inside, muted style, centred: the text given in the table.

8c · "Details": auto-layout vertical, gap spacing/1 (4), width fill, height hug. Child 1: text, body style (Medium weight for the line marked bold in the table). Child 2: text, muted style.

8d · "Actions": auto-layout horizontal, gap spacing/2 (8), width fill, height 28, vertically centred, left-aligned. Buttons are clones of "Button · Assign" from "TEMP badges", label and variant given in the table. Hug width.

Card contents:

| Card | Title block line 2 (muted) | Badge | Live picture text | Details line 1 (body) | Details line 2 (muted) | Actions |
|---|---|---|---|---|---|---|
| Sim Room 1 | Simulation room · 3 cameras · 2 mics | Success "Ready" | Live picture | Free until 13:00 | Next: NURS 340 · Postpartum hemorrhage · Group B | Primary "Start recording" |
| Sim Room 2 | Simulation room · 2 cameras · 1 device not found | Warning "Needs attention" | Live picture | Next 10:00 · NURS 310 · Sepsis recognition | Dr. Maya Ortiz · Group A · 5 learners | Primary "Start recording", then Secondary "Room devices" |
| Skills Lab 1 | Skills lab · 1 camera · Audio kit | Error "Recording 12:20" | Live picture | Ad hoc recording, no event yet | Started 09:38 · 3 learners | Primary "Open recording", then Secondary "Stop" |
| Debrief Room 1 | Debrief room · no cameras | Neutral "Next 10:15" | No cameras in this room | 10:15 · NURS 340 · Group A debrief | 5 learners | Secondary "Open event" |

Card title style is Bold 14 px. Body line 1 is Medium weight in all four cards.

9 · Clean up
Delete "TEMP badges".

10 · Label and caption
- Label text: "CO1 · Center overview".
- Caption, two lines:
  "Faculty or sim technician: opens the center overview to see which rooms are free, in use or have a problem, and starts a recording from a room."
  "System: shows every room with its live picture and one state, and offers one main action per room. Stop all appears when two or more rooms record."

Check before you report:
- The Section "Session start · Sketches" exists at x 0, y 3000, size 6400 × 1180, and nothing in Sections 1343:3275 and 1559:8318 has changed.
- "CO1 · Center overview" is 1440 × 900 at x 80, y 120 in the new Section. Label at y 76, caption at y 1044, both at x 80.
- "Content" has exactly two children: Page header, Room wall. There is no breadcrumb. The page title reads "Today".
- "Room wall" has two rows with two cards each. Every card is 554 × 320 and has four children: Card header, Live picture, Details, Actions.
- Four badges: Ready, Needs attention, Recording 12:20, Next 10:15. All are instances. Six buttons in the cards: Start recording (Primary) x2, Room devices, Open recording (Primary), Stop, Open event. Plus the Primary header button "Start recording". All are instances.
- The nav item "Today" is active, or the gap is reported. The nav labels follow the Shared rules. No text on the frame reads "OpSpace".
- Nothing overflows the 1440 × 900 frame and no text is clipped. If a card is taller than 320, report the overflow in px and don't shrink anything.
- "TEMP badges" is gone.

Report: new IDs (Section, frame, label, caption), the Badge and Button property names you found, "Component gaps", and a screenshot of the frame.
```

## SS1 · Start session, ad hoc

Run only after the CO1 review gate.

Run: **Claude Sonnet 5.5 · High**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS1 · Start session, ad hoc".`

```
Goal: one frame "SS1 · Start session, ad hoc" in slot 2 of the Section "Session start · Sketches". It is the Today page (clone of "D1 · Dashboard") with a dim layer and a right-hand sheet "Start recording". Only a room is required. Event, learners and scenario are optional.

1 · Check
Find the Section "Session start · Sketches" and the frame "CO1 · Center overview" in it. If either is missing, stop and report.

2 · Shell
- Clone "D1 · Dashboard" (307:12788) into the Section. Place it at x 1640, y 120. Rename the clone "SS1 · Start session, ad hoc". Clip content on.
- Don't change anything in "Columns" or "TopNav".
- In the instance "SideNav": set the labels as described in the Shared rules ("Side navigation"). "Today" (the first item, "Dashboard" in the source) is already the active item. Change nothing else in "SideNav".
- In "Page header", the instance "Button · Customize": label "Start recording". Set Variant to Primary. Hide the child named "Icon" (visible = false). Keep the button's right edge where it is. If the width doesn't follow the text, set the width so the label has 12 px padding left and right.

3 · Temporary badges
Create a frame "TEMP badges" inside the Section at x 1640, y 1100. Put clones in it from "CO1 · Center overview": one Success badge (the "Ready" badge in "Card · Sim Room 1"), one Warning badge ("Needs attention" in "Card · Sim Room 2"), one Error badge ("Recording 12:20" in "Card · Skills Lab 1"). Delete "TEMP badges" at the end of the run.

4 · Dim layer
Clone "Dim" (1360:9294) into "SS1 · Start session, ad hoc" as its last child. If the frame has auto-layout, set the clone to absolute position (ignore auto-layout). Set x 0, y 0, width 1440, height 900. Keep its fill (Core/Overlay 50 %). Name it "Dim".

5 · Sheet
Clone the instance "Sheet · Record 3 rooms (Astryx Dialog Fullscreen)" (1:7327) into "SS1 · Start session, ad hoc", above "Dim". Absolute position, x 960, y 0, width 480, height 900. Name it "Sheet · Start recording".
- If the instance can't be resized to 900 high, leave its height, report it, and go on.
- "Title": "Start recording".
- "Subtitle": "Pick a room. Event, learners and scenario are optional."
- In "Footer Actions": the instance named "Start 3 recordings": set its label text to "Start recording". Keep "Cancel" as it is. Rename the instance "Start recording".

6 · Body: build the form
In the slot "Body" of the sheet:
- First clone the frame "Room block · Sim Room 1" three times inside the same slot. Rename the clones "Block · Event", "Block · Learners", "Block · Scenario".
- Then delete the frame "Rooms" (with its dividers and the remaining original blocks).
- Add a frame "Start form" in the slot. x 16, y 16, width 448 (fill the slot minus 32), height hug, auto-layout vertical, gap spacing/6 (24), no fill, no stroke. Move the three blocks into it, after the frame "Room options" that you build in step 7. Order: "Room options", "Block · Event", "Block · Learners", "Block · Scenario".
- In each block: the text "Room name" and the text "Cameras" are the header. Set "Room name" to the block's title and "Cameras" to "optional" (muted). The instance "Select · Event" shows the chosen value: set that value text (read the layer name and report it). Set the text "Hint".

| Block | "Room name" | "Cameras" | Select value | "Hint" |
|---|---|---|---|---|
| Block · Event | Event | optional | Ad hoc recording | Pick today's event to fill in learners and scenario. |
| Block · Learners | Learners | optional | Add later | Search by name or email. You can add learners during or after the recording. |
| Block · Scenario | Scenario | optional | No scenario | Pick a scenario to open its checklist. You can also choose one later. |

7 · Room options
Frame "Room options" in "Start form": width fill (448), height hug, auto-layout vertical, gap spacing/2 (8), no fill, no stroke. Children:
- "Room options header": auto-layout horizontal, width fill, space between, vertically centred. Left: text, card title style: "Room". Right: text, muted: "Ready rooms first".
- Three frames "Option · <room>", each: auto-layout horizontal, width fill, height hug, space between, vertically centred, padding spacing/3 (12), fill surface/card, 1 px inside stroke border/default, corner radius radius/element-10. Left: frame "Text", auto-layout vertical, gap 0: text body Medium (room name), then text muted. Right: a badge cloned from "TEMP badges".
  - "Option · Sim Room 1": muted "3 cameras · 2 mics · Free until 13:00". Badge Success "Ready". This option is SELECTED: its stroke is 2 px inside, colour text/primary.
  - "Option · Sim Room 2": muted "2 cameras · 1 device not found". Badge Warning "Needs attention".
  - "Option · Skills Lab 1": room name colour text/secondary. Muted "In use since 09:38". Badge Error "Recording 12:20".
- Last child: text, muted: "Rooms without cameras are not listed."

8 · Clean up
Delete "TEMP badges".

9 · Label and caption
- Label text: "SS1 · Start session, ad hoc".
- Caption, two lines:
  "Faculty (Dr. Maya Ortiz): starts a recording from the Today page without an event. Only the room is required."
  "System: lists ready rooms first, shows the problem on a room that needs attention, and leaves event, learners and scenario for later."

Check before you report:
- "SS1 · Start session, ad hoc" is 1440 × 900 at x 1640, y 120. Label at y 76, caption at y 1044, both at x 1640.
- "CO1 · Center overview" is unchanged.
- The header button reads "Start recording", Primary, with no icon. The SideNav labels follow the Shared rules and "Today" is active. No text on the frame reads "OpSpace".
- "Dim" covers the whole frame (1440 × 900). The sheet sits at x 960, y 0 and reaches y 900. Its footer buttons sit at the bottom of the sheet.
- "Start form" has four children: Room options, Block · Event, Block · Learners, Block · Scenario. "Room options" has five children: header, three options, hint.
- The sheet's Body slot no longer contains "Rooms" or any "Room block · Sim Room" frame.
- Three badges, all instances. No text is clipped and nothing overflows the sheet.
- "TEMP badges" is gone. The Today page content behind the dim layer is unchanged (apart from the SideNav labels).

Report: new IDs, the Select value layer name, "Component gaps", every step you could not do exactly as written, and a screenshot of the frame.
```

## SS2 · Start session, from event

Run only after SS1.

Run: **Claude Sonnet 5.5 · High**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS2 · Start session, from event".`

```
Goal: one frame "SS2 · Start session, from event" in slot 3. The user clicked "Start recording" on the 10:00 event. The room, learners and scenario come from the event. The room needs attention, so a short step shows the problem first. (A ready room would open the recording view directly.)

1 · Clone
- Find "SS1 · Start session, ad hoc" in the Section "Session start · Sketches". If it doesn't exist, stop and report.
- Clone it inside the same Section. Place the clone at x 3200, y 120. Rename it "SS2 · Start session, from event".
- Don't change "SS1 · Start session, ad hoc".

2 · Sheet header and footer
In "Sheet · Start recording" of the clone:
- "Title": "Start recording".
- "Subtitle": "NURS 310 · Sepsis recognition · 10:00–11:00".
- In "Footer Actions": the instance "Start recording": label "Start anyway". Rename it "Start anyway". "Cancel" stays.

3 · Keep one badge, then clear the body
In the slot "Body", before deleting anything: the frame "Option · Sim Room 2" holds a Warning badge ("Needs attention"). Clone that badge into a temporary frame "TEMP badge" inside the Section at x 3200, y 1100. Then delete the frame "Start form" from the slot.

4 · Event summary
Add a frame "Event summary" in the slot "Body". x 16, y 16, width 448, height hug, auto-layout vertical, gap spacing/6 (24), no fill, no stroke. Three children:

4a · "Card · Room warning": a card (see Shared rules), width fill, auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12).
- Row 1: auto-layout horizontal, gap spacing/3 (12), vertically centred. The Warning badge from "TEMP badge", label "Needs attention".
- Row 2: text, body style, fill width: "Sim Room 2 can record, but the patient monitor capture is not found."
- Row 3: text, label style (Medium 14 px, text/primary): "See room devices".

4b · "Card · From the event": a card, width fill, auto-layout vertical, padding 0, gap 0.
- "Event header": auto-layout horizontal, height 52, padding left and right spacing/4 (16), vertically centred, space between. Left: text, card title style: "From the event". Right: text, muted: "NURS 310 · Group A".
- Four rows. Each row: name "Row · <field>", auto-layout horizontal, height 48, padding left and right spacing/4 (16), gap spacing/3 (12), vertically centred, 1 px top stroke border/default. Three cells: a muted text in a frame of width 80 (the field), a body text with fill width (the value), a label-style text, hug width (the link; leave the cell out where the table says "none").

| Row | Field (muted) | Value (body) | Link (label style) |
|---|---|---|---|
| Row · Room | Room | Sim Room 2 | Change |
| Row · Event | Event | NURS 310 · Group A | none |
| Row · Learners | Learners | 5 learners | Edit |
| Row · Scenario | Scenario | Sepsis recognition checklist | Change |

4c · Text "Event hint": muted, width fill: "Room, learners and scenario come from the event. Changes here apply to this recording only."

5 · Clean up
Delete "TEMP badge".

6 · Label and caption
- Clone "Label · CO1" and "Caption · CO1" (they are in the Section) to x 3200, y 76 and x 3200, y 1044. Name them "Label · SS2" and "Caption · SS2".
- Label text: "SS2 · Start session, from event".
- Caption, two lines:
  "Faculty (Dr. Maya Ortiz): clicks Start recording on the 10:00 event. The room is not fully ready, so one short step shows the problem first."
  "System: fills room, learners and scenario from the event. A ready room opens the recording view directly, with no sheet."

Check before you report:
- "SS2 · Start session, from event" is 1440 × 900 at x 3200, y 120. "SS1 · Start session, ad hoc" is unchanged.
- The sheet's Body slot holds only "Event summary" with three children: Card · Room warning, Card · From the event, Event hint. "Card · From the event" has five children: Event header and four rows.
- The footer button reads "Start anyway".
- One badge, an instance. No text is clipped and nothing overflows the sheet.
- "TEMP badge" is gone.

Report: new IDs, "Component gaps", every step you could not do exactly as written, and a screenshot of the frame.
```

## SS3 · Start from a room card

Cheap clone of CO1. Run only after the CO1 review gate. SS1 and SS2 need not be done.

Run: **Claude Sonnet 5.5 · High**, one new Cursor chat.
`Read @wireframe-benchmark/reviews/11-16-session-start-center-overview.md. Apply "Shared rules", then run ONLY section "SS3 · Start from a room card".`

```
Goal: one frame "SS3 · Start from a room card" in slot 4. It is CO1 with a small popover under the "Start recording" button of Sim Room 1. The room is prefilled. Because Sim Room 1 has an event next, the popover offers it; otherwise only ad hoc is offered.

1 · Clone
- Find "CO1 · Center overview" in the Section "Session start · Sketches". If it doesn't exist, stop and report.
- Clone it inside the same Section. Place the clone at x 4760, y 120. Rename it "SS3 · Start from a room card".
- Don't change "CO1 · Center overview".

2 · Popover
Add a frame "Popover · Start in Sim Room 1" as the last child of the clone. Absolute position (ignore auto-layout), x 300, y 504, width 360, height hug. It is a card (see Shared rules): auto-layout vertical, padding spacing/4 (16), gap spacing/3 (12). Children, in this order:

2a · "Popover header": auto-layout vertical, gap spacing/1 (4), width fill. Text, card title style: "Start in Sim Room 1". Text, muted: "Pick one. You can add learners later."

2b · "Option · Ad hoc": auto-layout vertical, gap 0, width fill, height hug, padding spacing/3 (12), fill surface/card, corner radius radius/element-10. SELECTED: 2 px inside stroke text/primary. Text, body Medium: "Ad hoc recording". Text, muted: "No event. Add learners and a scenario later."

2c · "Option · Event": same structure, NOT selected: 1 px inside stroke border/default. Text, body Medium: "NURS 340 · Postpartum hemorrhage · Group B". Text, muted: "Planned 13:00–14:00. Learners and scenario come from the event."

2d · "Popover actions": auto-layout horizontal, gap spacing/3 (12), width fill, height 28, vertically centred, left-aligned.
- A clone of the button in "Card · Sim Room 1" → "Actions" whose label is "Start recording" (a clone of "Button · Assign", set to Primary). Keep it Primary.
- Text, label style (Medium 14 px, text/primary): "More options".

3 · Label and caption
- Clone "Label · CO1" and "Caption · CO1" to x 4760, y 76 and x 4760, y 1044. Name them "Label · SS3" and "Caption · SS3".
- Label text: "SS3 · Start from a room card".
- Caption, two lines:
  "Sim technician or faculty: clicks Start recording on the Sim Room 1 card. The room is already chosen."
  "System: offers the event that is next in this room, or an ad hoc recording. More options opens the full Start recording sheet."

Check before you report:
- "SS3 · Start from a room card" is 1440 × 900 at x 4760, y 120. "CO1 · Center overview" is unchanged.
- The popover sits at x 300, y 504 inside the frame, 360 wide, with four children: Popover header, Option · Ad hoc, Option · Event, Popover actions. It ends above y 900.
- The popover's button is an instance (Primary). No new badge or button was drawn.
- No text is clipped and nothing overflows the 1440 × 900 frame.

Report: new IDs, "Component gaps", every step you could not do exactly as written, and a screenshot of the frame.
```

## SS1b · Start session, ad hoc, from the center overview

```
Assumes: Shared rules from this file. SS1 is built and checked (11-15).

Goal: one frame "SS1b · Start session, ad hoc, from the center overview". It is the built frame CO1 with the same dim layer and the same sheet as SS1 on top. It shows that the sheet opens from the Today page (the center overview) too. Nothing in the sheet changes.

Sources, all inside Section "Session start · Sketches" (1692:9755). Do not change any of them:
- "CO1 · Center overview" (1692:9756), 1440 × 900.
- In "SS1 · Start session, ad hoc" (1695:10571): the rounded rectangle "Dim" (1695:11172) and the instance "Sheet · Start recording" (1695:11173).
- "Label · CO1" (1692:9871) and "Caption · CO1" (1692:9872).

1 · Make room
- Resize the Section "Session start · Sketches" (1692:9755) from 6400 × 1180 to 7960 × 1180. Keep x 0, y 3000. Do not move anything inside it.

2 · Clone the page
- Clone "CO1 · Center overview" (1692:9756) inside the same Section. Place the clone at x 6320, y 120. Rename it "SS1b · Start session, ad hoc, from the center overview". Size stays 1440 × 900. Clip content on.
- Change nothing inside the clone.

3 · Add the dim layer
- Clone "Dim" (1695:11172) into the new frame as its last child. If the frame has auto-layout, set the clone to absolute position (ignore auto-layout). x 0, y 0, width 1440, height 900. Keep its fill.

4 · Add the sheet
- Clone the instance "Sheet · Start recording" (1695:11173) into the new frame as its last child, above "Dim". Absolute position, x 960, y 0, width 480, height 900.
- The clone must keep every override of the source: title "Start recording", the three room options with Sim Room 1 selected, the blocks Event, Learners and Scenario, and the footer buttons "Cancel" and "Start recording".
- If a text or a nested layer falls back to its original content after cloning, do not rebuild it. Stop and report which layer.

5 · Label and caption
- Clone "Label · CO1" (1692:9871) to x 6320, y 76. Name it "Label · SS1b". Text: "SS1b · Start session, ad hoc, from the center overview".
- Clone "Caption · CO1" (1692:9872) to x 6320, y 1044. Name it "Caption · SS1b". Text: "The same sheet as SS1, opened from the center overview. One sheet for every way in: it only differs in what is filled in."

Check list:
- The Section is 7960 × 1180 at x 0, y 3000. CO1, SS1, SS2 and their labels and captions have not moved or changed. SS3, if it exists, has not moved.
- "SS1b · Start session, ad hoc, from the center overview" is 1440 × 900 at x 6320, y 120.
- Its last two children are "Dim" (1440 × 900 at 0, 0) and "Sheet · Start recording" (480 × 900 at 960, 0), in that order.
- Behind the dim layer the four room cards of the center overview are visible. The side navigation shows Today as active.
- The sheet looks the same as in SS1, text for text.
- Label and caption exist with the texts above.
- Report: anything that could not be cloned with its overrides.
- Take a screenshot of the frame.
```

## Prototype wiring (for later)

Not part of these runs. After the four frames pass review, wire these click targets (on click, navigate, instant). Layers inside instances must be selected by name in the frame.

| From (frame, element) | To |
|---|---|
| CO1, "Button · Customize" (reads "Start recording"), Page header | SS1b (the sheet over the center overview) |
| D1 · Dashboard (the Today page) or SS1 background, "Button · Customize" (reads "Start recording") | SS1 |
| SS1b, instance "Start recording" in "Footer Actions" | S1 · Ready to record `1343:4038` |
| SS1b, instance "Cancel", and "Close Button" | CO1 |
| CO1, button "Start recording" in "Card · Sim Room 1" | SS3 |
| CO1, button "Start recording" in "Card · Sim Room 2" | SS2 (room needs attention, event next) |
| CO1, button "Open recording" in "Card · Skills Lab 1" | S4 · Recording `1348:12538` |
| SS3, button "Start recording" in "Popover · Start in Sim Room 1" | S1 · Ready to record `1343:4038` |
| SS3, text "More options" | SS1 |
| SS1, instance "Start recording" in "Footer Actions" | S1 · Ready to record `1343:4038` |
| SS1, instance "Cancel", and "Close Button" | CO1 |
| SS2, instance "Start anyway" in "Footer Actions" | S1 · Ready to record `1343:4038` |
| SS2, instance "Cancel", and "Close Button" | CO1 |
| SS2, text "See room devices" | Sim Room 2, AV tab (frame AV1 · Room devices) `1559:8319` |

Notes:
- The Today page "Up next" row button "Start recording" (in D1 on the Drafts page, and inside the clones SS1 and SS2) should go straight to S1 for a ready room. Only the Sim Room 2 event goes to SS2.
- Every path ends at S1 `1343:4038`. The existing flow "SRV · Recording" continues from there.

## After these run

- Claude reviews each frame in Figma (read-only) and writes a fix section here if needed.
- Likely follow-ups: a real room-card component with a live thumbnail, a room health badge component, an idle state for the camera tile, an empty state for the participants popover. These belong to the component round after the workshop.
