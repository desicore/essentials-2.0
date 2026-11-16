# 11-16 · One app wireframes: fix round 2, no top bar

Daniel's annotation on "B1 · Today, recording banner" (11-16): OpSpace has no top bar like the one we designed for Essentials. Remove it. Its functions move into the side navigation: search, help, and the user. The user is separate from Settings. The recording banner stays on top.

Reference: the OpSpace screenshot on the page, node `1762:62575` (logo at the top of the side navigation, user card at the bottom).

## What Claude checked before writing (11-16, read-only)

- N1, N2, N3 and F6 ran. All 24 page screens have the right active menu item. The selects in L3 are empty, the rail has the new icons, L5 has "Add filter", L8 has the tabs under the title, B1 and B2 exist.
- One fix of N2 was not done: on P4 "Share" and "Download" are still under the video. Not repeated here.
- All 30 frames are vertical auto-layout frames with "TopNav" as a direct child (48 high). Page screens: "TopNav", then "Body" (fill). Room views (L4, P1, P1b, P3): "TopNav", then "Shell row" (900 high, hug). B1 and B2: "Recording banner", "TopNav", "Body".
- "SideNav · One app" (`1749:8656`) is a local component, 260 × 852, vertical auto-layout: frame "Items" (11 nav items and 2 headings) and frame "Footer" (only "Nav · Settings"). Every page screen uses an instance of it, so a change in the component reaches all screens.
- "TopNav" is an instance of the library component "Navigation / TopNav". Inside it: frame "Brand · LearningSpace + institution" (instance "ls-essentials-logo-small" 222 × 22, a divider, text "Institution"), and in "End Content": instance "Search" (280 × 28), instance "Help" (28 × 28), instance "Avatar · Maya" (36 × 36), instance "User menu" (label "Dr. Maya Ortiz").
- Absolute layers that depend on the top bar: "Popover · Start event" in L1 (y 510), "Selection bar" in L3b and L3d (inside "Content", y 788), "SRV / Participants popover" in P1, P1b, P3 (y 96). Dim layers and sheets are 900 high and start at y 0.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Logo | Top of the side navigation, with the institution name under it, as in the reference |
| Search | Under the logo, full width of the side navigation. Note: OpSpace has no global search, only a search per page. This one is our addition. Open question for the workshop |
| Help | A menu row "Help" in the footer, above "Settings" |
| User | Its own row at the very bottom, under "Settings", with a line above it: avatar, name, chevron. Not merged with Settings |
| Room views | The top bar goes too. The frame becomes 900 high. The rail gets no logo (48 px is too narrow for it); the avatar goes to the bottom of the rail if the slot allows it |
| Banner | Stays full width at the very top, above the side navigation (B1, B2) |
| Which logo | The current one stays. Which brand the one app carries is a workshop question, not a wireframe fix |

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. Nothing else may run on this page at the same time.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-fix2.md. Apply "Shared rules" from the first file and "Fix 2 rules" from the second. Then run ONLY section "T1 · Remove the top bar" of the second file.`

## Fix 2 rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules replace three Shared rules for this run:
- This run may write in ALL Sections of the page, including "0 · Shell" (1749:8315), and it may edit the local component "SideNav · One app" (1749:8656). It is the only component you may edit.
- The Shared rule "Never replace, hide or edit a TopNav" does not apply. This run deletes every TopNav on this page. Before a TopNav is deleted, its logo, search, help and user parts are cloned out of it (step 1).
- The logo "ls-essentials-logo-small" is branding. Clone it as it is. Never redraw or relabel it.
Never detach an instance. Never edit a library component. Do not delete, edit or move any annotation; if an annotation sits on a layer you must delete, report it and delete the layer anyway.
Do not move or rename a frame. Change a frame's size only where a step says so.
If a step cannot be done exactly, skip it, and report it. Do not build a workaround.
```

## T1 · Remove the top bar

```
Goal: no screen has a top bar. Logo, search, help and user live in the side navigation.

STEP 1 · Extend the component "SideNav · One app" (1749:8656)
Source for the parts: the instance "TopNav" (1749:8658) inside "Shell · Page" (1749:8657). Clone the named layers out of it into the component (a clone of a layer inside an instance becomes a normal layer or instance; this is not a detach).
The component is a vertical auto-layout frame, 260 wide, with the children "Items" and "Footer". New order of children, top to bottom:
1. "Header" (new): vertical auto-layout frame, fill width, hug height, padding 16 left and right, 16 top, 8 bottom, gap 4.
   - a clone of the instance "ls-essentials-logo-small" (222 × 22)
   - a clone of the text "Institution" ("Riverbend College of Nursing"); muted Regular 12, text/secondary. Do not clone the "Divider".
2. "Search" (new): a clone of the instance "Search" from the TopNav, inside a wrapper frame "Search row" (auto-layout, fill width, padding 8 left and right, 4 top, 8 bottom). The Search instance fills the row width (244).
3. "Items": unchanged. Its vertical sizing is fill, so it takes the space that is left.
4. "Footer": vertical auto-layout, fill width. New content, top to bottom:
   - "Nav · Help" (new): a clone of "Nav · Settings" (1749:8489). Label "Help". Icon: the same icon the TopNav "Help" instance uses ("icon/circle-question-mark"); set it with the icon swap property of the nav item (read the component properties to find it, the same way the other items got their icons). State "Default".
   - "Nav · Settings": unchanged.
   - "User row" (new): horizontal auto-layout frame, fill width, padding 8 left and right, 8 top and bottom, gap 8, items centred vertically, 1 px top stroke border/default. Content: a clone of the instance "Avatar · Maya"; a text "Dr. Maya Ortiz" (clone the "Label" text of "Nav · Settings" out and set the characters; Medium 14, text/primary; fill width); a 16 px chevron icon at the right end (clone the icon inside "End Content" of the TopNav "User menu" trigger). If the avatar looks too large in the row, keep it: do not resize it by hand unless it has a Size property.
Set the component height to 900.
Check: every nav item still has its name "Nav · <label>" and its State property. "Nav · Live" keeps the State it had in the component.

STEP 2 · "Shell · Page" (1749:8657)
Delete "TopNav" (1749:8658). This must happen AFTER step 1. "Body" then fills the frame: 900 high. The frame stays 1440 × 900.

STEP 3 · The 24 page screens
Frames: L1 1752:18102, L1b 1752:34405, L2 1752:9232, L3 1752:18339, L3b 1752:32581, L3d 1752:36878, L3c 1752:38638, L5 1752:17702, L6 1752:34208, L6b 1752:38118, L7 1752:9953, L8 1752:19374, L9 1752:33497, L10 1752:34999, L10b 1752:37774, L11 1752:39371, P2 1752:32350, P4 1752:37436, P5 1752:39900, I1 1752:33120, I2 1752:38930, I3 1752:40839, I4 1755:15940, I5 1755:16259.
For each frame:
1. Delete the direct child "TopNav".
2. "Body" must now be at y 0 and 900 high (its vertical sizing is fill). The frame stays 1440 × 900. If "Body" is still 852 high, set its vertical sizing to fill.
3. The "SideNav" instance inside "Body" must be 900 high and show the new header, search, help and user row. Its selected item must be the same as before this run. If the new parts do not show, do not rebuild them in the frame: report it.
4. Absolute layers:
   - L1 only: "Popover · Start event": move it up by 48 (y 510 becomes 462).
   - L3b and L3d: "Selection bar" inside "Content": keep it at the bottom of "Content" (y = height of "Content" minus 64).
   - "Dim" and every "Sheet · ..." layer: do not touch.

STEP 4 · The four room views
Frames: L4 1752:40197, P1 1752:17138, P1b 1752:18768, P3 1752:35244. Each is 1440 × 948: "TopNav" (48), then "Shell row" (900).
For each frame:
1. Delete the direct child "TopNav". "Shell row" moves to y 0.
2. Set the frame height to 900.
3. Move the caption of the frame ("Caption · L4", "Caption · P1", "Caption · P1b", "Caption · P3") from y 1092 to y 1044. Do not change its text.
4. P1, P1b, P3: move "SRV / Participants popover" up by 48 (y 96 becomes 48).
5. The collapsed rail: if its footer slot accepts a child, add a clone of "Avatar · Maya" as the last item at the bottom. If not, skip it and report it. No logo in the rail.

STEP 5 · B1 and B2
Frames: "B1 · Today, recording banner" (1767:16449) and "B2 · Today, 3 rooms recording" (1767:17142). Each is 1440 × 948: "Recording banner" (48), "TopNav" (48), "Body" (852).
1. Delete "TopNav". The annotation of Daniel sits on the TopNav of B1; it goes with it. That is expected here.
2. The frame stays 948 high. "Recording banner" stays at y 0, full width. "Body" is at y 48 and 900 high.
3. Set the first line of "Caption · B1" to: "One room records. The banner sits above the whole app on every page and pushes it down." Keep the second line.

Check list:
1. No layer named "TopNav" is left anywhere on the page. Report the count you deleted (expected: 31).
2. Every page screen: exactly one selected nav item, the same as before. Report frame and item as a list.
3. In every expanded side navigation: logo, institution, search, the 11 items, Help, Settings, user row. No label is cut off. Nothing overlaps.
4. Room views are 900 high, their captions sit at y 1044, the popovers still point at the "learners" button.
5. No frame moved. No label changed. No detached instance. No forbidden word (the logo is branding and stays).
6. Screenshot and look at: "Shell · Page", L1, L3, L3b, L4, L6, P1, B1.

Report: the lists from checks 1 and 2, the name of the icon swap property, every step you could not do exactly, the eight screenshots.
```

## T2 · Menu label "Live/Capture"

Added after T1 ran and passed Claude's check (11-16). Daniel: until the name is decided, the menu item reads "Live/Capture". Only the menu label changes. Page titles ("Live"), the banner button "Open Live" and the layer names stay.

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-fix2.md. Apply "Shared rules" from the first file and "Fix 2 rules" from the second. Then run ONLY section "T2 · Menu label Live/Capture" of the second file.`

```
T2 · Menu label Live/Capture

Goal: the side navigation item "Live" reads "Live/Capture" on every screen.

1. In the component "SideNav · One app" (1749:8656), find the nested instance "Nav · Live" (1749:8425). Set its text "Label" to "Live/Capture" (text override, or the label text property if the item has one). Do NOT rename the layer: it stays "Nav · Live".
2. Check the instances: in every frame of the Sections 1 to 6 that has an expanded "SideNav", the item must now read "Live/Capture". If a frame still reads "Live" (an old override), set the same text on its "Nav · Live" instance.
3. Change nothing else: no page title, no button, no caption, no icon, no State.

Check list:
1. Count the expanded side navigations that read "Live/Capture" (expected: 27, that is "Shell · Page" plus 26 frames) and those that still read "Live" (expected: 0).
2. The label is not cut off. The selected state of every frame is unchanged.
3. Screenshot "L2 · Live" and "L5 · Recordings".

Report: the two counts and the two screenshots.
```

## After this runs

T1 is checked (11-16): no "TopNav" is left, every screen kept its selected item, room views are 900 high. "Shell facts" in `11-16-merge-00-shared.md` is updated.
