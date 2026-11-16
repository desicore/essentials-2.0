# 11-16 · Merge run F0: page, Sections and shell

Run F0 of the "one app" wireframes. It runs alone, before the six flow chats. It builds no screen. It creates the page, the six empty Sections, one component (the new side navigation) and one shell frame that all flows clone. The rules and the screen list are in `11-16-merge-00-shared.md`.

## Context

- One app for the customer. The side navigation has more items than the old one: Today, Notifications, Events, group "Sessions" (Live, Recordings), group "Resources" (Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists), footer Settings.
- The old "SideNav" instance has 6 item rows and 1 footer row. An instance cannot get more items, so F0 builds a new nav from clones of the item instances and turns it into a component.
- This is the only component the merge runs create. It lives on the new page, not on the Components page.
- Discussion wireframes for the workshop on 11-17.

## What I found in the file (11-16, read-only)

**SideNav (old).**
- Main component set "Navigation / SideNav" `927:31209`, variant "State=Expanded" `927:31210`. It is a library component (it has no page in this file). Its only properties: `State` (variant, "Expanded") and three slots `Top Content#2401:3`, `Items#2401:4`, `Footer#2401:5`. It has no label or icon properties.
- Instance in "AV0 · Rooms": `1603:10519`, 260 × 852, white fill (variable core/background-surface), no stroke. Children: slot "Items" `I1603:10519;2398:17709` (260 × 768, vertical, padding 4 top and bottom, 8 left and right, gap 8) and frame "Footer Zone" `I1603:10519;2396:15565` (260 × 84, vertical, padding top 4, gap 8, one stroke).
- "Footer Zone" holds slot "Footer" `I1603:10519;2398:18434` (one item, Settings) and frame "Footer Row" (a collapse button, instance "Navigation / .SideNavCollapseButton"). F0 does not copy the collapse button.
- "D1 · Dashboard" `307:12788` has the same nav (`307:12791`) with the same 7 labels.

**Item rows.** Yes, they are instances of one item component, so they can be cloned.
- Main component set "Navigation / .SideNavItem" `927:31072` (library). Default md = `927:31073`, Selected md = `927:31080`. Layer name of every row: "Navigation / .SideNavItem", 244 × 32. Row pitch is 40 (32 + gap 8).
- Rows in the Items slot (id suffix after `I1603:10519;2398:17709;`): `1603:10611` Dashboard (icon/layout-dashboard), `1603:10612` Calendar (icon/calendar), `1603:10613` Recordings (icon/video), `1603:10614` Scenarios (icon/clipboard-list), `1603:10615` Reports (icon/chart-bar), `1603:10616` People (icon/users). Footer row: `I1603:10519;2398:18434;1603:10609` Settings (icon/settings), the only one that is Selected in the source.
- Item properties (keys exactly as written, with the suffix): `Label#252:264` (TEXT), `State` (VARIANT: Default, Hover, Selected, Disabled), `Size` (VARIANT: md, sm, lg), `Show Icon#252:268` (BOOLEAN, true), `Show EndContent#252:272`, `Has Expand#2392:4`, `Expanded#2392:8`, `Nested#2392:0` (all false), slot `EndContent#2394:0`.
- **Active marker: `State`. "Selected" = active (it has a fill), "Default" = not active.** Size stays "md".
- Icon: no swap property on the item. The icon is a nested instance: item → instance "Icon" → instance "icon/<name>". It can be swapped with `swapComponent` on the "icon/<name>" instance (not tested; it is a write).
- Group headings do not exist in the SideNav. Muted 12 px text to clone: "Settings" `1603:10522` in "Breadcrumb" `1603:10521` of "AV0 · Rooms" (Figtree Regular 12, line height 20, fill text/secondary).

**Icons that exist in the file (all remote library icons, seen as instances on "⚙️ Components (D)"):** layout-dashboard `1:795`, calendar `1:798`, clipboard-list `1:802`, chart-bar `1:804`, settings `1:791`, users `1:806`, video `1:800`, play `592:41754`, mic `1:30`, audio-lines `1:993`, camera-off `387:36939`, door-open `340:19871`, sliders-horizontal `1:968`, layout-grid `1:1442`, flag `1:958`, list-checks `313:15928`, message-circle `1:983`, qr-code `34:12523`, link `1:1450`, star `1:1465`, sparkle `470:25419`, circle-check `1:836`, eye `1:1446`, share-2 `209:13526`, plus `1:930`, and a few arrows and chevrons. There is no bell, no box and no tag icon.

Icon pick per item (S = stand-in, because no exact icon exists):

| Item | Icon | Id | Note |
|---|---|---|---|
| Today | layout-dashboard | `1:795` | the old Dashboard icon, kept |
| Notifications | message-circle | `1:983` | S (no bell) |
| Events | calendar | `1:798` | |
| Live | play | `592:41754` | |
| Recordings | video | `1:800` | |
| Rooms | door-open | `340:19871` | |
| Simulators & Equipment | sliders-horizontal | `1:968` | S |
| People | users | `1:806` | |
| Inventory | layout-grid | `1:1442` | S (no box) |
| Labels | flag | `1:958` | S (no tag) |
| Prep checklists | list-checks | `313:15928` | |
| Settings | settings | `1:791` | |

**"AV0 · Rooms" `1603:10516`** (1440 × 900, clip on, vertical auto-layout, in Section "AV setup · Sketches" `1559:8318`, x 1640, y 120):
- "TopNav" `1603:10517` (instance, 1440 × 48).
- "Body" `1603:10518` (frame, horizontal, gap 0, 1440 × 852) with "SideNav" `1603:10519` (260 × 852) and "Content" `1603:10520` (1180 × 852, vertical, padding 24, gap 24).
- "Content" children: "Breadcrumb" `1603:10521` (texts "Settings", "Separator" with "/", "Rooms"), "Page header" `1603:10527` (1132 × 52), "Card · Unassigned devices" `1605:5853`, "Card · Rooms" `1605:5790`.
- "Page header" children: text "Greeting" `1603:10528` (Bold 20, reads "Rooms"), instance "Text · Tuesday, January 19" `1603:10529` (text property `Content#43:710`, now "Rooms come from OpSpace. Essentials adds their cameras and audio."), instance "Button · Customize" `1603:10530` (Secondary, SM, label property `Label#3:97` = "Manage rooms in OpSpace", `Icon#3:0` false).
- Label "Label · AV0" `1603:10620` and caption "Caption · AV0" `1603:10621` are children of the Section, not of the frame.

**CO1 `1692:9756`: no.** Its nav still has the old labels (Dashboard, Calendar, Recordings, Scenarios, Reports, People, Settings) and "Recordings" is the Selected item. Nothing in CO1 can be reused for the new nav.

**Page "🧭 One app · merge [D]" does not exist yet** (checked the page list).

## Decisions in this file (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Item source | Every item is a clone of the "Dashboard" row; the Settings row is a clone of the footer Settings row. Text, icon and State are then set |
| Icons | Table above. Stand-ins are marked S. Labels carry the meaning |
| Footer | Only "Nav · Settings". No collapse button (the flows do not use it) |
| Group headings | A frame "Heading · Sessions" or "Heading · Resources" with one muted 12 px text. Not clickable |
| Active item | Method written in "Shell facts": set `State` on the nested instance "Nav · <label>" |
| Shell texts | Breadcrumb "Section" / "Page", page title "Page title", sub text "Short page description". Button "Manage rooms in OpSpace" is hidden, not deleted, so a flow can show it again |
| Layer names kept from AV0 | "Breadcrumb", "Page header", "Greeting" (this is the page title), "Text · Tuesday, January 19" (this is the sub text), "Button · Customize". Flows find them by these names |
| Slot 2 of Section "0 · Shell" | Holds the component (x 1640, y 120) |
| Cross-page work | The sources are on another page. Each script switches page once |

## Gaps I expect in Cursor's report

- Cloning a nested instance out of an instance may fail or give a detached frame. The fallbacks are in step 2.
- `swapComponent` for icons may fail on remote icons. Fallback in step 3.
- A variable lookup for the footer stroke may fail. Fallback in step 3.
- Cursor has once reported success without writing anything. Check each node in Figma.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. It runs alone.

1. **F0 · Page, Sections and shell.**
   `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f0-shell.md. Apply "Shared rules" from the first file. Then run ONLY section "F0 · Page, Sections and shell" of the second file.`
2. **Review gate.** Tell Claude when F0 is done. Claude checks the page, the Sections, the component and "Shell · Page" in Figma, then fills in "Shell facts" at the end of `11-16-merge-00-shared.md`. Do not start a flow chat before that.

## F0 · Page, Sections and shell

```
Goal: create the page and six empty Sections, build the component "SideNav · One app", build the frame "Shell · Page". Nothing else.

Where you may write: only the new page "🧭 One app · merge [D]" that you create in step 1. Every other page is read-only: clone from it, never change it. Never edit a main component. Never touch the Components page.
Exception to the shared rule "do not create a component": you create exactly one, "SideNav · One app".
Never detach an instance. Never draw a nav item or an icon. If a step fails and its fallback fails too, stop and report. Never draw a fake nav.
Each script switches the current page at most once. Return the ids of everything you create.

1 · Page and Sections
- Check the page list. If a page named "🧭 One app · merge [D]" already exists, stop and report.
- Create the page with that exact name. Switch to it.
- Create six Sections on it. All at x 0, all 12640 × 1240 (create the Section, set x and y, then resizeWithoutConstraints(12640, 1240)). Exact names and y:
  "0 · Shell" y 0
  "1 · Sessions" y 1500
  "2 · Recordings and debrief" y 3000
  "3 · Rooms and devices" y 4500
  "4 · Participants" y 6000
  "5 · Import" y 7500
- Return the page id and the six Section ids.

2 · Item instances
- Switch to the page "👤 SRV flow [D]" (960:51213), or load node 1603:10516 with getNodeByIdAsync. Do not change anything there.
- Source rows (all inside "AV0 · Rooms" 1603:10516, instance "SideNav" 1603:10519):
  Items row "Dashboard": I1603:10519;2398:17709;1603:10611
  Footer row "Settings": I1603:10519;2398:18434;1603:10609
  Both are named "Navigation / .SideNavItem".
- Clone the "Dashboard" row 11 times and the "Settings" row once. Put the 12 clones on the new page, inside Section "0 · Shell", in the temporary frame "TEMP items" at x 80, y 1000 (auto-layout vertical, gap 8). Report what you got: node type of each clone (must be INSTANCE) and the id of its main component (must be 927:31073 for the Dashboard clones, 927:31080 for the Settings clone).
- Fallback A: if a clone is not an INSTANCE, or cloning from inside the instance fails, create the instances from the item main component: id 927:31073 (State=Default, Size=md), by getNodeByIdAsync(...).createInstance(), or by item.getMainComponentAsync() on a source row, then createInstance(). Report that you used the fallback.
- Fallback B: if that also fails, STOP and report the exact error. Do not draw items.
- For each clone set the properties with setProperties (the keys have a suffix, copy them exactly):
  "Label#252:264" = the label
  "State" = "Default" (also for the Settings clone: it comes as Selected, set it to Default)
  Leave "Size" = "md" and "Show Icon#252:268" = true.
- Name each clone "Nav · <label>". The 12 labels, in this order, with exact capital letters:
  Today, Notifications, Events, Live, Recordings, Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists, Settings.
  Check afterwards: every clone has the right label text.

3 · Icons
- In each clone, find the nested instance whose name starts with "icon/" (path: item → "Icon" → "icon/<name>"). Swap it with swapComponent to the icon component in the table. Get the component with getNodeByIdAsync(id).
  Today 1:795 · Notifications 1:983 · Events 1:798 · Live 592:41754 · Recordings 1:800 · Rooms 340:19871 · Simulators & Equipment 1:968 · People 1:806 · Inventory 1:1442 · Labels 1:958 · Prep checklists 313:15928 · Settings 1:791
- Fallback: if an id returns null or the swap fails, skip that icon, leave the icon the clone has, and add the item to "Component gaps". Do not stop.

4 · The component "SideNav · One app"
- Create a frame "SideNav · One app" in Section "0 · Shell": x 1640, y 120, 260 × 852, vertical auto-layout, gap 0, padding 0, clip content on. Fill: copy the fills array of the old SideNav instance 1603:10519 (white, variable core/background-surface). No stroke on the frame.
- Child 1: frame "Items". Vertical auto-layout. Padding top 4, bottom 4, left 8, right 8. Gap 8. Width fill, height fill. No fill, no stroke.
- Child 2: frame "Footer". Vertical auto-layout. Padding top 4, bottom 4, left 8, right 8. Gap 8. Width fill, height hug. No fill. Top stroke only: 1 px, inside, colour = variable border/default (look it up by name in the local variables or copy the stroke of "Footer Zone" I1603:10519;2396:15565). If you cannot get the variable, leave the footer without a stroke and report it.
- Group headings: clone the text "Settings" (1603:10522, in "Breadcrumb" 1603:10521 of "AV0 · Rooms"). Put each clone in a new frame, auto-layout horizontal, width fill, height hug, padding left 8, top 8, right 8, bottom 0, no fill, no stroke. Name the frames "Heading · Sessions" and "Heading · Resources". Set the text to "Sessions" and "Resources" and name the text layer "Label". The text stays Figtree Regular 12, line height 20, text/secondary.
- Fill "Items", in this order, moving the clones from "TEMP items" (each item: width fill, height hug; set after appending):
  Nav · Today
  Nav · Notifications
  Nav · Events
  Heading · Sessions
  Nav · Live
  Nav · Recordings
  Heading · Resources
  Nav · Rooms
  Nav · Simulators & Equipment
  Nav · People
  Nav · Inventory
  Nav · Labels
  Nav · Prep checklists
- Move "Nav · Settings" into "Footer".
- Delete "TEMP items" (it must be empty by now).
- Turn the frame "SideNav · One app" into a component with figma.createComponentFromNode. Keep the name. The component is on the new page only.
- Check: the component is 260 × 852. "Items" has 13 children. "Footer" has 1 child. Nothing is clipped. All 12 items are INSTANCE nodes.
- Take a screenshot of the component.

5 · Frame "Shell · Page"
- Clone "AV0 · Rooms" (1603:10516). Put the clone in Section "0 · Shell" at x 80, y 120. Name it "Shell · Page". It stays 1440 × 900 with clip content on.
- Delete the instance "SideNav" in "Body". Create an instance of "SideNav · One app" and insert it as the FIRST child of "Body" (insertChild at index 0). Name it "SideNav". Set width fixed 260 and layoutSizingVertical "FILL". It must sit at x 0, y 0 in "Body", next to "Content".
- In "Content" delete the frames "Card · Unassigned devices" and "Card · Rooms". "Content" keeps its auto-layout, padding 24, gap 24.
- Keep "Breadcrumb" and "Page header". Set the texts:
  In "Breadcrumb": the text "Settings" → "Section". The text "Separator" stays "/". The text "Rooms" → "Page". Do not rename the layers.
  In "Page header": the text "Greeting" → "Page title". The instance "Text · Tuesday, January 19": text property "Content#43:710" → "Short page description". The instance "Button · Customize": visible = false.
- Do not change "TopNav". Its product logo stays as it is (shared rules, logo exception).
- Active item: the nested instance "Nav · Live" inside the new "SideNav" instance. Set State = "Selected" on it (setProperties({ State: "Selected" })). All other items stay "Default".
- Check: "Body" has 2 children (SideNav, Content). "Content" has 2 children (Breadcrumb, Page header) and no card. Search all text layers of the frame: none of "OpSpace", "Essentials", "SRV", "Center overview", "Video review", "Dashboard".

6 · Label and caption
- Clone "Label · AV0" (1603:10620) into Section "0 · Shell" at x 80, y 76. Name "Label · Shell". Text "Shell · Page".
- Clone "Caption · AV0" (1603:10621) into Section "0 · Shell" at x 80, y 1044. Name "Caption · Shell". Two lines:
  "Every page screen starts as a clone of this frame. It has the top bar, the new side navigation, a breadcrumb and a page header."
  "The side navigation is the component SideNav · One app. Only the active item changes from screen to screen."
- Clone "Label · AV0" again to x 1640, y 76. Name "Label · SideNav". Text "SideNav · One app".

7 · Test: set the active item
On the instance "SideNav" inside "Shell · Page":
- Set "Nav · Rooms" State = "Selected" and "Nav · Live" State = "Default". Take a screenshot of "Shell · Page" (maxDimension 1024). Rooms must look active (filled row).
- Set them back: "Nav · Live" = "Selected", "Nav · Rooms" = "Default". Take a screenshot again. Live must look active.
- Write down the exact calls you used, and whether the property key is "State" or something else.
- If setProperties on the nested instance fails: find the nested instance with findOne(n => n.type === "INSTANCE" && n.name === "Nav · Live") on the SideNav instance, and try again. If it still fails, report the exact error text and the property keys that the nested instance shows.

Check list (run it, then report):
1. The page "🧭 One app · merge [D]" exists. It has exactly six Sections, with the names, y values and size 12640 × 1240 from step 1, all at x 0.
2. Section "0 · Shell" holds exactly: "Shell · Page" (x 80, y 120, 1440 × 900), "SideNav · One app" (x 1640, y 120, 260 × 852, type COMPONENT), "Label · Shell", "Caption · Shell", "Label · SideNav". No "TEMP items".
3. The other five Sections are empty.
4. The nav labels, top to bottom, read: Today, Notifications, Events, Sessions, Live, Recordings, Resources, Rooms, Simulators & Equipment, People, Inventory, Labels, Prep checklists, and Settings in the footer.
5. In "Shell · Page" the item "Live" is Selected and no other item is.
6. "Shell · Page": Body has 2 children, Content has 2 children, the button "Button · Customize" is hidden, no card, no forbidden word.
7. No detached instance. No hard-coded colour in the frames you built (fills and strokes use the variables you copied).
8. Nothing on any other page changed. No main component was edited.
9. The screenshots of the component and of the shell show no overlap and no clipped text.

Report when done:
- Page id. The six Section ids. The id of "Shell · Page". The id of "SideNav · One app". The ids of its 12 "Nav · ..." items.
- How you made the items: cloned from the instance, or fallback A.
- Icon swaps: which worked, which are in "Component gaps".
- The exact method to set the active item on an instance of the component (which nested instance, which property key, which values), and the result of the test in step 7.
- "Component gaps": one line per gap.
- Every step you could not do exactly as written, and what you did instead.
- Screenshots: the component, "Shell · Page" with Live active, and "Shell · Page" with Rooms active (from the test).
```

## Shell facts (for Claude, after the review gate)

Claude copies the report into the "Shell facts" block at the end of `11-16-merge-00-shared.md`. Expected form of "How to set the active nav item" (to be confirmed by the test in step 7):

```
In the screen's "SideNav" instance, find the nested instance named "Nav · <label>" (findOne, type INSTANCE).
Set State = "Selected" on it (setProperties({ State: "Selected" })).
Set State = "Default" on the item that was active before (Live in a clone of "Shell · Page").
Never change Label, Size or the icon.
A screen with no active item (collapsed rail screens) is not a clone of "Shell · Page".
```

## After this runs

- Claude checks the component and the shell in Figma (read-only) and fills in "Shell facts".
- If the component has gaps (icons, footer stroke), they are listed under "Component gaps" and go into the shared file before the flows start.
- Then the six flow chats run in parallel.
