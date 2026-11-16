# 11-16 · F7: global search in the side navigation (G1, G2, G3)

Three greyscale wireframes so the idea is not forgotten. **Not in the MVP.** Each is the Today page with the search modal open: G1 just opened, G2 a sample search that jumps to a result, G3 a quick action. They are discussion sketches, not final designs. The concept, the Shared rules and the sample data are in `11-16-merge-00-shared.md`. The reasoning is in the vault page `wiki/research/global-search-patterns-and-concept.md`.

## Context

- Daniel, 11-16: the search sits at the top of the side navigation (as in Dropbox Dash). A first version would be a "jump to" search over names: recordings, events, people and groups, rooms, devices. Quick actions (as in Raycast) are a good idea but may be early. So: draw a few screens, keep them out of the MVP.
- The search field is already in the side navigation since run T1 ("Search row" in "SideNav · One app"). This run does not change the side navigation.
- The side navigation is 260 wide, too narrow for results. So the field opens a modal in the middle of the screen.

## What I found in the file (11-16, read-only)

- "SideNav · One app" `1749:8656`, 260 × 900: "Header", "Search row" `1771:17056` with the instance "Search" `1771:17042` (244 × 28), "Items", "Footer".
- "L1 · Today" `1752:18102` is 1440 × 900 with one auto-layout child "Body" ("SideNav" 260 wide, "Content" 1180 wide) and the absolute layer "Popover · Start event".
- "L3 · Start recording" `1752:18339` has an absolute layer "Dim" (1440 × 900) under its sheet. It is the source for the dim layer.
- Sections end with "6 · Recording banner" `1767:16448` at x 0, y 9000, 12640 × 1240. The next free place is y 10400.
- No modal, list row or keyboard hint component was checked for this run. The modal is built from cloned texts and icons, as a plain card.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "7 · Search (later, not MVP)", under "6 · Recording banner" |
| Modal, not page | A modal 640 wide over the dimmed Today page. Dash shows a page; a modal fits a "jump to" search better and needs no new page in the menu |
| Opened, nothing typed (G1) | "Recent" (five things the user opened) and, under it, "Quick actions" (two rows). So the quick action is visible without typing |
| Sample search (G2) | The query "nurs 310". One query that hits three types. Groups in a fixed order: Recordings, Events, People |
| "Show all" link | "Show all 7 in Recordings". It opens the Recordings list with the query in the list's own search. The global search has no results page of its own |
| Quick action (G3) | The query "start". "Start recording" opens the existing Start recording sheet; it never starts a recording by itself. This keeps one way to pick the room |
| Keyboard | A hint line at the bottom of the modal. No shortcut hint inside the side navigation field: that would need a change in a library component |
| Past recordings | Two invented past recordings of NURS 310 (18 Jan and 14 Jan). They are not in the shared sample data |
| People | Only learner groups appear, no single person. The shared sample data fixes no learner names |

## Open questions for the workshop

- Is a quick action that only opens an existing sheet useful enough, or must it do the thing?
- Should the room view (full screen, while recording) have the search at all?

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. Nothing else may run on this page at the same time.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f7-search.md. Apply "Shared rules" from the first file and "F7 rules" from the second. Then run ONLY section "G · Search modal on Today" of the second file.`

## F7 rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules replace two Shared rules for this run:
- This run creates ONE new Section, "7 · Search (later, not MVP)", and writes only inside it. Every other Section on the page is read-only. You may clone from them.
- The Shared rules that mention "TopNav" do not apply. No frame has a top bar (see "Shell facts", the block "Changed later on 11-16").
Never edit the component "SideNav · One app" (1749:8656) or any library component. Never detach an instance.
Never draw an icon, a badge or a button. Clone an existing one.
Do not create text styles. For every text, clone an existing text of the right kind and change its characters:
- Regular 14, text/primary and Regular 12 or 14, text/secondary: clone "Line 1" and "Line 2" from an event block in "L1 · Today", or the text "Institution" (muted, Regular 12) from the side navigation.
- Medium 14: clone the "Label" text of a nav item.
- Group heading (small, muted): clone the "Label" text inside "Heading · Sessions" (1749:8651).
If a step cannot be done exactly, skip it, and report it. Do not build a workaround.
```

## G · Search modal on Today

```
Goal: three frames. Each is a clone of "L1 · Today" with a dim layer and a search modal on top.

STEP 0 · Section
1. Read Section "6 · Recording banner" (1767:16448): its fills and its size.
2. Create a Section named "7 · Search (later, not MVP)" on the page at x 0, y 10400, size 12640 × 1240, with the same fills.

STEP 1 · Frame G1, the base
1. Clone "L1 · Today" (1752:18102). Put the clone in the new Section at slot 1: x 80, y 120. Name it "G1 · Search, opened". It stays 1440 × 900, clip content on.
2. In the clone, delete the layer "Popover · Start event".
3. Dim: clone the layer "Dim" from "L3 · Start recording" (1752:18339; find it by exact name, it is a direct child of the frame). Put it in G1 as an absolute layer at x 0, y 0, 1440 × 900, above "Body". Name it "Dim".
4. Modal: create a frame "Modal · Search" as an absolute layer above "Dim", at x 400, y 120, width 640, height hug. It is a "card" as the Shared rules define it (vertical auto-layout, fill surface/card, 1 px inside stroke border/default, corner radius radius/container, clip content on). No padding on the card itself, gap 0.
5. Children of "Modal · Search", top to bottom:
   a. "Field row": horizontal auto-layout, fill width, padding 12 all sides, 1 px bottom stroke border/default. Inside it: a clone of the instance "Search" from the side navigation of this frame (inside "SideNav" > "Search row"). Set its width to fill (616). If the instance has a text property for the placeholder or the value, read its component properties and set the text to "Search or jump to…". If it has none, use a text override on its text layer. Report which one you used.
   b. "Results": vertical auto-layout, fill width, padding 8 all sides, gap 0. It holds the groups (step 6).
   c. "Hint row": horizontal auto-layout, fill width, padding 12 left and right, 8 top and bottom, 1 px top stroke border/default. One muted text (Regular 12, text/secondary): "↑ ↓ to move  ·  Enter to open  ·  Esc to close".
6. Build the two reusable parts inside "Results" (plain frames, not components):
   - "Group heading": a frame with padding 8 left and right, 8 top, 4 bottom, fill width, with one text cloned from the "Label" of "Heading · Sessions".
   - "Row": horizontal auto-layout, fill width, height hug, padding 8 left and right, 8 top and bottom, gap 12, items centred vertically, corner radius radius/container. Children: (1) "Icon": a clone of the 16 px "Icon" instance from the nav item named in the table below; (2) "Texts": vertical auto-layout, fill width, gap 0, with "Title" (Regular 14, text/primary) and "Meta" (Regular 12, text/secondary); (3) "Kind": a muted text at the right end (Regular 12, text/secondary), hug width.
   - A selected row has the fill that the selected nav item uses (read the fill variable of a nav item with State "Selected" and bind the same variable). Other rows have no fill.
7. Content of "Results" in G1:
   Group heading "Recent"
   | Icon from | Title | Meta | Kind | Selected |
   | Nav · Events | NURS 310 · Sepsis recognition | Today, 10:00 to 11:30 · Sim Room 2 · Group A | Event | yes |
   | Nav · Rooms | Sim Room 2 | Simulation room · 2 cameras | Room | no |
   | Nav · Recordings | NURS 310 · Sepsis recognition | Mon 18 Jan · 41 min · Sim Room 2 · Group B | Recording | no |
   | Nav · People | NURS 310 · Group A | 5 learners | Learner group | no |
   | Nav · Simulators & Equipment | Skills Lab 1 · Camera 1 | Camera · Skills Lab 1 | Device | no |
   Group heading "Quick actions"
   | Nav · Live | Start recording | Opens the room picker | Action | no |
   | Nav · Events | Create event | Opens a new event | Action | no |
8. Change nothing else in the clone. The side navigation keeps "Today" as the selected item.

STEP 2 · Frame G2, a sample search
1. Clone the finished "G1 · Search, opened". Put it at slot 2: x 1640, y 120. Name it "G2 · Search, jump to a result".
2. Set the text in the "Search" instance of the modal to "nurs 310". If the instance has a State or a "filled" variant property, set it to the filled value. If not, set the text colour to text/primary through the same property or override you used in step 1; do not hard-code a colour.
3. Replace the content of "Results". Delete the groups of G1 and build these, reusing the "Group heading" and "Row" frames:
   Group heading "Recordings"
   | Nav · Recordings | NURS 310 · Sepsis recognition | Mon 18 Jan · 41 min · Sim Room 2 · Group B | Recording | yes |
   | Nav · Recordings | NURS 310 · Medication safety | Thu 14 Jan · 38 min · Sim Room 1 · Group A | Recording | no |
   Then a "Link row" (same padding as a Row, no icon): one text "Show all 7 in Recordings" (Medium 14, text/primary).
   Group heading "Events"
   | Nav · Events | NURS 310 · Sepsis recognition | Today, 10:00 to 11:30 · Sim Room 2 · Group A | Event | no |
   Group heading "People"
   | Nav · People | NURS 310 · Group A | 5 learners | Learner group | no |
   | Nav · People | NURS 310 · Group B | 6 learners | Learner group | no |
4. In every "Title" of this frame the part "NURS 310" is Medium weight, the rest stays Regular (a range style on the same text layer: copy the font of a Medium 14 text in the file onto characters 0 to 8). If range styling fails, leave the title Regular and report it.

STEP 3 · Frame G3, a quick action
1. Clone the finished "G2 · Search, jump to a result". Put it at slot 3: x 3200, y 120. Name it "G3 · Search, quick action".
2. Set the text in the "Search" instance of the modal to "start".
3. Replace the content of "Results":
   Group heading "Quick actions"
   | Nav · Live | Start recording | Opens the room picker | Action | yes |
   | Nav · Events | Start event: NURS 310 · Sepsis recognition | Today, 10:00 · Sim Room 2 · Group A | Action | no |
   No other group. All titles are Regular; only the word "Start" at the beginning of each title is Medium (characters 0 to 5).
4. In the "Hint row" set the text to: "↑ ↓ to move  ·  Enter to run  ·  Esc to close".

STEP 4 · Labels and captions
Follow the Shared rules (clone "Label · AV0" 1603:10620 and "Caption · AV0" 1603:10621). The frames are 900 high, so the caption sits at y 1044.
- "Label · G1": text "G1 · Search, opened", x 80, y 76.
- "Caption · G1", x 80, y 1044, 1440 wide, two lines:
  "Later, not in the MVP. The field in the side navigation opens this modal. Nothing typed: the last things the user opened, and two quick actions."
  "Keyboard: / or Ctrl/Cmd K opens it."
- "Label · G2": text "G2 · Search, jump to a result", x 1640, y 76.
- "Caption · G2", x 1640, y 1044, 1440 wide, two lines:
  "Later, not in the MVP. Search by name only: recordings, events, people and groups, rooms, devices. Groups keep a fixed order."
  "Show all opens the Recordings list with the same words in its own search. The global search has no results page."
- "Label · G3": text "G3 · Search, quick action", x 3200, y 76.
- "Caption · G3", x 3200, y 1044, 1440 wide, two lines:
  "Later, not in the MVP. A quick action opens the existing sheet or form. It never starts a recording by itself."
  "Open question: is that useful enough, or must the action do the thing?"

Check list:
1. The new Section exists at x 0, y 10400, 12640 × 1240. No other Section changed.
2. Three frames, 1440 × 900, clip content on. In each: "Body", "Dim", "Modal · Search", in this order from bottom to top. No "Popover · Start event".
3. The modal is 640 wide, starts at x 400, y 120, and does not reach the bottom edge of the frame. Exactly one selected row per frame.
4. "L1 · Today" (1752:18102) and "L3 · Start recording" (1752:18339) are unchanged.
5. "SideNav · One app" (1749:8656) is unchanged. No detached instance. No hard-coded colour.
6. No forbidden word on the three frames (the logo is branding and stays).
7. Screenshot the three frames and look at them: no clipped text, no overlap, the icons are visible.

Report: the ids of the Section and the three frames; how you set the text of the Search instance (property name or text override); the name of the fill variable of the selected row; every step you could not do exactly; the three screenshots.
```

## After this runs

Claude checks G1, G2 and G3 by screenshot.
