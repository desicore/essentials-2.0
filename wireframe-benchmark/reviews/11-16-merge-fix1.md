# 11-16 · One app wireframes: fix round 1 (after Claude's review)

All 28 screens of the six flows are built and sit in the right slots. Claude checked every frame by screenshot on 11-16. This file fixes what the review found. It builds no new screen.

## What the review found

| # | Where | Problem | Fix section |
|---|---|---|---|
| 1 | 20 page screens of F1a, F1b, F2, F3, F5 | No side navigation item is active. The user cannot see where they are | N1 |
| 2 | P2, P4, P5 | The active item is set, but the nav labels are cut off ("Notifica…", "Simulat…", "Recordi…", "Prep ch…") and the rows sit 5 px lower than in the other screens | N1 |
| 3 | P1, P1b, P3 | The collapsed rail shows one icon as selected. The room view has no menu entry | N2 |
| 4 | L3c | The line under the title says "none recording" while three rooms record | N2 |
| 5 | L2, L3b, L3c, L1 | The debrief event in Debrief Room 1 does not match the Today calendar. Today says "2 events" but shows five | N2 |
| 6 | L8 | The tabs sit above the page title. They belong under the page header | N2 |
| 7 | L7, L10, L10b | A breadcrumb with one level repeats the page title. L1, L2 and L5 have none | N2 |
| 8 | P5 | The sample rows do not match the roster of P1 (groups, and the walk-in is "Deactivated") | N2 |
| 9 | P2 | The footer button shows a red record dot. L3 has none | N2 |
| 10 | P4 | "Share" and "Download" sit under the video. In L6 they sit in the tab row, top right | N2 |

Not fixed here, on purpose: the room view screens show three or four camera pictures from the source frame; P3 shows old annotations in the side panel; P2 has a grey block behind the sheet instead of the Live page. They do not block the workshop.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat per section. Run N1 first, then N2. Not in parallel: both touch the same frames.

1. **N1 · Side navigation.**
   `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-fix1.md. Apply "Shared rules" from the first file and "Fix rules" from the second. Then run ONLY section "N1 · Side navigation on all page screens" of the second file.`
2. **N2 · Content fixes.**
   `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-fix1.md. Apply "Shared rules" from the first file and "Fix rules" from the second. Then run ONLY section "N2 · Small content fixes" of the second file.`
3. **N3 · Daniel's annotations** (added later on 11-16, after Daniel's Dev Mode annotations). Run it after N2, in a new chat.
   `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-fix1.md. Apply "Shared rules" from the first file and "Fix rules" from the second. Then run ONLY section "N3 · Fixes from Daniel's annotations" of the second file.`
4. Tell Claude when all three are done.

## Daniel's annotations (11-16) and what happens to each

| # | Where | Annotation, in short | Result |
|---|---|---|---|
| 1 | Side nav, "Live" | Could "Live" be called "Captured"? | No change. Open question for the workshop. Claude's view: "Captured" reads as "already recorded", so it collides with "Recordings" |
| 2 | L3, Event select | Ad hoc is not an event. Nothing should be selected; show a placeholder | N3 · K |
| 3 | L3, Learners select | "Add later" is not a state. Show a placeholder | N3 · K |
| 4 | L3, Scenario select | Should show the empty state | N3 · K |
| 5 | L4, collapsed rail | The rail must show the new menu too | N3 · L |
| 6 | L5, filter row | Follow the OpSpace filter pattern ("Add filter") | N3 · M |
| 7 | L6, content | Today's video review has more functions (side panel tabs, layout settings). Simplify, but keep them. Research first | Not in this file. Research first, then a new prompt |

## Fix rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
This run may write in the Sections "1 · Sessions" (1749:8316), "2 · Recordings and debrief" (1749:8317), "3 · Rooms and devices" (1749:8318), "4 · Participants" (1749:8319) and "5 · Import" (1749:8320). This replaces the shared rule "only inside the one Section your flow file names".
Never change Section "0 · Shell" (1749:8315) or anything in it. You may clone from it.
Change only what a step names. Do not move, rename or resize a frame. Do not restyle anything.
Find a frame by the id given here. Inside a frame, find layers by exact name, or by exact text where a step says so.
If a step cannot be done exactly, skip it, leave the frame as it was, and report it. Do not build a workaround.
```

## N1 · Side navigation on all page screens

```
Goal: every page screen gets a fresh copy of the side navigation from "Shell · Page", with exactly one item selected.

Source: the instance "SideNav" (1749:8916) inside "Body" (1749:8659) of "Shell · Page" (1749:8657). 260 × 852. Its nested item "Nav · Live" is Selected. Do not change the source.

For EACH frame in the table, do steps 1 to 5:
1. Get the frame by id. Find its child frame "Body", and in it the layer "SideNav". If "Body" has no child with that name, find the instance named "SideNav" anywhere in the frame that is 200 px wide or more. If there is none, skip the frame and report it.
2. Note the index of the old "SideNav" in its parent. Clone the source instance (1749:8916). Insert the clone into the same parent at the same index (insertChild). Name it "SideNav". Set width fixed 260 and layoutSizingVertical "FILL". Then delete the old "SideNav".
3. In the new "SideNav", find the nested instance "Nav · Live" and call setProperties({ State: "Default" }).
4. Find the nested instance named in the column "Active" and call setProperties({ State: "Selected" }).
5. Check: the new "SideNav" is at x 0, y 0 in its parent and is 260 wide. Exactly one "Nav · ..." item has State "Selected". The label "Simulators & Equipment" is not cut off.

| Frame | Id | Active |
|---|---|---|
| L1 · Today | 1752:18102 | Nav · Today |
| L1b · Start event, 2 rooms | 1752:34405 | Nav · Today |
| L2 · Live | 1752:9232 | Nav · Live |
| L3 · Start recording | 1752:18339 | Nav · Live |
| L3b · Rooms selected | 1752:32581 | Nav · Live |
| L3d · Record 3 rooms | 1752:36878 | Nav · Live |
| L3c · 3 rooms recording | 1752:38638 | Nav · Live |
| L5 · Recordings | 1752:17702 | Nav · Recordings |
| L6 · Recording | 1752:34208 | Nav · Recordings |
| L6b · Recording, Debrief tab | 1752:38118 | Nav · Recordings |
| L7 · Rooms | 1752:9953 | Nav · Rooms |
| L8 · Room, AV tab | 1752:19374 | Nav · Rooms |
| L9 · Camera, opened from a room | 1752:33497 | Nav · Rooms |
| L10 · Simulators & Equipment | 1752:34999 | Nav · Simulators & Equipment |
| L10b · Simulators & Equipment, Audio | 1752:37774 | Nav · Simulators & Equipment |
| L11 · Microphone | 1752:39371 | Nav · Simulators & Equipment |
| P2 · Start recording, Learners | 1752:32350 | Nav · Live |
| P4 · Recording, Link event and learners | 1752:37436 | Nav · Recordings |
| P5 · People, Learners | 1752:39900 | Nav · People |
| I1 · Import, Source | 1752:33120 | Nav · People |
| I2 · Import, Map | 1752:38930 | Nav · People |
| I3 · Import, Review | 1752:40839 | Nav · People |
| I4 · Import, Done | 1755:15940 | Nav · People |
| I5 · Settings, Integrations | 1755:16259 | Nav · Settings |

Frames with a dim layer and a sheet (L1b, L3, L3d, P2): the dim layer and the sheet must stay on top. Do not change their order or position.
Do not touch L4, P1, P1b, P3 in this section (room view, collapsed rail).

Check list:
1. All 24 frames: one Selected item, the one from the table. Report the frame id and the name of the Selected item, as a list.
2. No nav label is cut off in any frame.
3. "Shell · Page" is unchanged: "Nav · Live" is still Selected there.
4. Screenshot these six frames and look at them: L1, L3, L6, L10, P5, I5. The selected row has a grey fill and lines up with the other rows.

Report: the list from check 1, every skipped frame with the reason, the six screenshots.
```

## N2 · Small content fixes

```
Goal: ten small fixes. One frame at a time. After each frame, take a screenshot and check that nothing else moved.

A · L3c · 3 rooms recording (1752:38638)
- Find the text that reads exactly "4 rooms · none recording · 1 needs attention". Set it to "4 rooms · 3 recording · 1 needs attention".

B · Debrief Room 1 card, in three frames: L2 (1752:9232), L3b (1752:32581), L3c (1752:38638)
- Find the text "10:15 · NURS 340 · Group A debrief". Set it to "11:30 · NURS 310 · Group A debrief".
- Find the badge whose label reads "Next 10:15". Set the label to "Next 11:30" with the text override.
- L3 (1752:18339) and L3d (1752:36878) show the same card behind a dim layer: apply the same two changes there if the texts are found.

C · L1 · Today (1752:18102) and L1b · Start event, 2 rooms (1752:34405)
- Find the text "Tue 19 Jan 2027 · 4 rooms · 2 events". Set it to "Tue 19 Jan 2027 · 4 rooms · 5 events".

D · L8 · Room, AV tab (1752:19374)
- In "Content" the order is: "Breadcrumb", "Tabs", "Page header", then the cards. Move "Tabs" so that it sits directly after "Page header". New order: "Breadcrumb", "Page header", "Tabs", "Card · Cameras", "Card · Audio", "Button · Add device". Change nothing else.

E · One-level breadcrumbs: L7 · Rooms (1752:9953), L10 · Simulators & Equipment (1752:34999), L10b · Simulators & Equipment, Audio (1752:37774)
- In "Content", delete the frame "Breadcrumb". The page header moves up. Check that nothing overlaps.

F · Rail in the room view: P1 (1752:17138), P1b (1752:18768), P3 (1752:35244)
- In "Shell row" > instance "SideNav" (collapsed, 48 wide): find the nested "Navigation / .SideNavItem" instance with State = "Selected". Set State to "Default". Change nothing else. If this is not possible, report it and leave the rail.

G · P5 · People, Learners (1752:39900)
Set the row texts so that they match the roster of P1. Find each row by the learner's name.
- Olivia Grant: group "NURS 310 · Group A", source "Canvas".
- Noah Patel: group "NURS 310 · Group A".
- Lena Fischer: status badge "Active" (clone the "Active" badge of another row and delete the "Deactivated" badge, or change the variant to the same one the "Active" badges use and set the label). Group stays "Paramedic intake 3", source stays "Manual".

H · P2 · Start recording, Learners (1752:32350)
- In the sheet footer, the Primary button "Start recording" shows a red record dot. Hide it: set the button's icon property to false if it has one, otherwise set visible = false on its child "Icon". If neither works, report it.

I · P4 · Recording, Link event and learners (1752:37436)
- Find the buttons labelled "Share" and "Download" under the video. Move both into the row that holds the tabs "Recording" and "Debrief", at the right end of that row, order "Download" then "Share", the way "L6 · Recording" (1752:34208) has them. If the tab row is not an auto-layout frame that can hold them, leave them where they are and report it.

J · L4 · Room view (1752:40197)
- The header button reads "4 learners". The event has 5 learners. If the label is a text override or a text property, set it to "5 learners". If not, report it.

Check list:
1. Each fix A to J: done, or reported with the reason.
2. No frame changed size or position. No label or caption changed.
3. No forbidden word on any touched frame.
4. One screenshot per touched frame.

Report: per fix "done" or "not done: reason", then the screenshots.
```

## N3 · Fixes from Daniel's annotations

```
Goal: three fixes that Daniel asked for in Dev Mode annotations. One frame at a time. After each frame, take a screenshot and check that nothing else moved.
Do not delete, edit or move any annotation.

K · Empty selects in the Start recording sheet
Frames: L3 · Start recording (1752:18339). Then the same change in L3d · Record 3 rooms (1752:36878) and P2 · Start recording, Learners (1752:32350), but only where the exact texts below are found.
In the sheet there are three select instances (component "Selector / MultiSelector", properties Size, State, Display, Status). Each has one text layer named "labels". Today they read "Ad hoc recording", "Add later" and "No scenario". They look like a chosen value. They must look empty.
1. Read the options of the variant property "Display". If one option shows a placeholder (for example "Placeholder" or "Empty"), set it on all three selects. If not, keep the variant and only change the text.
2. Set the text of each select:
   - under "Event": "Select an event"
   - under "Learners": "Add learners or a group"
   - under "Scenario": "Select a scenario"
3. If the placeholder variant has its own muted text colour, keep it. Do not set a colour by hand.
4. Leave the header texts ("Event", "Learners", "Scenario", "optional") and the hint lines under the selects as they are.
5. P2 only: if the Learners select there already shows chosen learners, leave that select as it is.
Report: the "Display" options you found, and which variant you used.

L · Collapsed rail shows the new menu
Frames: L4 · Room view (1752:40197), P1 (1752:17138), P1b (1752:18768), P3 (1752:35244).
Each has an instance "SideNav" (component "Navigation / SideNav", State = Collapsed, 48 wide) with a slot "Items" that holds six "Navigation / .SideNavItem" instances. The rail still shows the old menu.
Target: eleven icon items in this order, the same order as the component "SideNav · One app" (1749:8656):
Today, Notifications, Events, Live, Recordings, Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists.
1. In "SideNav · One app" (1749:8656, read-only), read for each "Nav · <label>" item which icon component it uses.
2. In the rail of L4, read the component properties of one ".SideNavItem". Find the property that swaps the icon. Report its name.
3. Clone existing items inside the slot "Items" until there are eleven. Set each item's icon with the swap property, in the order above. Set State = "Default" on all eleven: the room view has no menu entry, so no item is selected.
4. If the expanded menu has a gap or a divider between the groups (Today to Events, Live and Recordings, Rooms to Prep checklists) and the rail component can show one, add it. If not, skip it.
5. Settings: if the rail has a footer slot with an item, set its icon to the icon of "Nav · Settings". If not, report it.
6. Do the same in P1, P1b and P3.
If the slot does not accept clones, or the icon cannot be swapped without detaching: change nothing, and report what is missing. Do not detach.

M · L5 · Recordings (1752:17702): filter row like the list pages
Reference (read-only, on this page, outside the Sections): the screenshot "CleanShot 2026-11-16 at 15.29.25 1" (1750:59349). It shows the pattern: a search field, and under it one small button "+ Add filter" that opens a menu with the filter names.
1. In "Content", find "Filter row" (1752:32239). It holds "Search field" and four chips: "Chip · Date", "Chip · Room", "Chip · Learner", "Chip · Scenario".
2. Delete the four chips. Keep "Search field" as it is.
3. Directly under "Filter row", add an auto-layout row named "Add filter row" (horizontal, hug height, fill width). Put one button in it: clone "Button · Room devices" (1694:9998, Secondary, SM), name it "Button · Add filter", label "Add filter". If the button has an icon property (Icon#3:0) and a plus icon can be set through it, show the plus icon before the label. If not, the label is "+ Add filter".
4. The list under it moves down. Check that nothing overlaps and nothing is clipped at the bottom of the frame.
5. Do not draw the open menu.
Caption of L5: change nothing.

Check list:
1. K, L, M: done, or reported with the reason.
2. No frame changed size or position. No label or caption changed. Every annotation is still there.
3. No forbidden word on any touched frame. No detached instance.
4. One screenshot per touched frame.

Report: per fix "done" or "not done: reason", the property names you found, then the screenshots.
```

## After these run

Claude checks the six N1 screenshots plus L3c, L8, P4 and P5 again, and after N3 also L3, L4 and L5. Open questions for the workshop stay as they are in the flow files.
