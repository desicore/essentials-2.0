# 11-03 · ⚙️ Components page (temporary greyscale library)

Figma: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "⚙️ Components" (675:31351), empty today.

## Context

- **What this page is:** a temporary greyscale wireframe library in this file. The final components, with colour and UI, go later to a separate "Essentials 2.0 Components" file (DDC 11-03 with Gabor).
- **Plan for 11-03:**
  1. Move the stable SRV components here.
  2. Finish the SRV flow, then the Dashboard, using these components.
  3. After the Vertex news, decide on the base kit and add new components.
  4. Joint review with Gabor. Then he swaps his own screens; Daniel does not touch Gabor's pages.
- **Decision, 11-03:** Balázs Végső approved leaving out the timeline jump during recording, so in Live the annotation time stays plain text and doesn't jump. The current components already work this way.
- **Not moved, because still open:** the SRV screen layout. Debrief vs Video Review is unresolved and the tablet versions don't exist yet. Only parts are moved here; whole screens are not.

## How to run

1. Tell Gabor before running it, since it's his file too.
2. **C1 · Move SRV components.** Model: **Claude Sonnet 5.5 · Medium**. The moves are mechanical with a fixed list of IDs. The only risk is Cursor cloning a component instead of moving it, so the prompt forbids that and checks instance counts.
   `Read @wireframe-benchmark/reviews/11-03-components-page.md, then run ONLY section "C1 · Move SRV components".`
3. **C2 · Checklist status row.** Model: **Claude Opus 5.5 · Medium**. It's a small change on screen, but it adds a component and removes variants from one that 5 instances use, so the order of steps matters.
   `Read @wireframe-benchmark/reviews/11-03-components-page.md, then run ONLY section "C2 · Checklist status row".`
4. **C3 · Ehli switch property.** Model: **Claude Opus 5.5 · Medium**. It changes three component sets that 20 instances use, exposes nested properties on the Side panel and adds three frames, so the order of steps matters.
   `Read @wireframe-benchmark/reviews/11-03-components-page.md, then run ONLY section "C3 · Ehli switch property".`
5. **C4–C7 run in parallel, one Cursor chat each.** Each chat works on its own components and its own spot on the page, so no setup run is needed. Start them in any order.
   - **C4 · Tab menu and panel collapse.** Model: **Claude Opus 5.5 · Medium**. It changes a component with over 30 instances.
     `Read @wireframe-benchmark/reviews/11-03-components-page.md. Apply "Shared rules (C4–C7)", then run ONLY section "C4 · Tab menu and panel collapse".`
   - **C5 · Intercom collapse.** Model: **Claude Sonnet 5.5 · Medium**. One component with no instances yet.
     `Read @wireframe-benchmark/reviews/11-03-components-page.md. Apply "Shared rules (C4–C7)", then run ONLY section "C5 · Intercom collapse".`
   - **C6 · Recording controls and dialogs.** Model: **Claude Sonnet 5.5 · High**. Four new components from existing frames.
     `Read @wireframe-benchmark/reviews/11-03-components-page.md. Apply "Shared rules (C4–C7)", then run ONLY section "C6 · Recording controls and dialogs".`
   - **C7 · Cameras and Layout & audio.** Model: **Claude Opus 5.5 · High**. The biggest run: nested components, image fills and five grid layouts.
     `Read @wireframe-benchmark/reviews/11-03-components-page.md. Apply "Shared rules (C4–C7)", then run ONLY section "C7 · Cameras and Layout & audio".`
6. **C8 · QA fixes for C5–C7.** Model: **Claude Sonnet 5.5 · High**. Seven small patches, in one chat because several touch the same components.
   `Read @wireframe-benchmark/reviews/11-03-components-page.md. Apply "Shared rules (C4–C7)", then run ONLY section "C8 · QA fixes for C5–C7".`
7. **C9 · Participants and recording banner.** Model: **Claude Sonnet 5.5 · High**. Three new components from page 0:1. It can run at the same time as C8, because it only adds to its own Section.
   `Read @wireframe-benchmark/reviews/11-03-components-page.md. Apply "Shared rules (C4–C7)", then run ONLY section "C9 · Participants and recording banner".`

## C1 QA (11-03, Claude)

Passed.
- **All 20 moved:** every component is on "⚙️ Components" with its original node ID. No copies, and the page holds no extra components.
- **Instance counts:** all identical to the table. The AI label (59) and Annotation card (92) only read lower until the Drafts page was loaded, because getInstancesAsync counts only loaded pages. Nothing was lost.
- **Layout:** 8 Sections in the right order, each component labelled, plus the title and description at the top.
- **Old locations:** the 5 superseded components are still in "Fixes", and 20 "Moved to ⚙️ Components (11-03)" notes mark the empty spots.
- **Screens:** SP1a, SP2a and SP4c render unchanged.

## C1 · Move SRV components

| Section on ⚙️ Components | Components (ID · instances on 11-03) |
|---|---|
| SRV · Side panel | Side panel 605:30863 · 8; Side panel tabs 565:28541 · 32; Annotations toolbar 621:12636 · 7; Checklist toolbar 633:32518 · 7; Chapters toolbar 711:26209 · 6 |
| SRV · Ehli (shared) | AI label 609:31470 · 59; Ehli status 621:12698 · 5 |
| SRV · Annotations | Annotation card 565:29411 · 92; Hidden annotations 602:30521 · 2 |
| SRV · Checklist | Checklist item 565:28998 · 43; Checklist heading 565:29372 · 7; Save status 565:29346 · 10 |
| SRV · Chapters | Chapter row 570:56166 · 15 |
| SRV · Transcript | Transcript search 570:55170 · 11; Transcript chapter header 570:55527 · 15; Transcript segment 570:55482 · 70 |
| SRV · Player | Timeline 570:56218 · 0; Timeline marker 570:56124 · 8 |
| SRV · Header | Header actions 565:29001 · 0; Intercom strip 565:29096 · 0 |

**Staying in "Fixes" as history, NOT moved** (superseded): Ehli card 565:28820 (replaced by the Annotation card's Ehli variants); Ehli switch 570:55010 (the switch cards were dropped on 10-29); Annotations list 565:29625, Chapters panel 570:56363 and Transcript panel 570:55633 (all replaced by Side panel).

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Source page "Dashboard + SRV [Drafts] (D) {Grayscale}" (305:18292). Target page "⚙️ Components" (675:31351), empty.

Rules:
- MOVE the main components; never clone, duplicate, recreate or detach them. Moving keeps their node IDs and keeps every instance in the file linked. A copy would break that.
- Don't change any component's content, variants, properties, size or name.
- Don't touch any other page, Gabor's pages ("(G)") included.

1 · On "⚙️ Components", build this layout:
   - A header text at the top left (x 0, y 0), 32 px bold: "SRV · temporary greyscale library". Under it, 16 px regular, max 800 px wide: "Wireframe components for the SRV flow, moved from the Drafts page on 11-03. Temporary: the final components with colour and UI go to a separate 'Essentials 2.0 Components' file. Edit a component here and every screen that uses it updates."
   - Then ONE Section per row in the table below, stacked vertically, 160 px apart, in the table's order. Section names exactly as in the first column.
   - Inside each Section: 80 px padding. The components sit in one row, left to right in the table's order, 120 px apart and top-aligned. Each one has a label text 24 px above it (16 px medium, its exact component name). If a row would be wider than 6000 px, wrap to a second row 160 px lower.
   - Resize each Section to fit its contents plus the padding.

| Section | Components (ID) |
| SRV · Side panel | 605:30863, 565:28541, 621:12636, 633:32518, 711:26209 |
| SRV · Ehli (shared) | 609:31470, 621:12698 |
| SRV · Annotations | 565:29411, 602:30521 |
| SRV · Checklist | 565:28998, 565:29372, 565:29346 |
| SRV · Chapters | 570:56166 |
| SRV · Transcript | 570:55170, 570:55527, 570:55482 |
| SRV · Player | 570:56218, 570:56124 |
| SRV · Header | 565:29001, 565:29096 |

2 · Before moving anything, record each component's instance count (sum over its variants, with getInstancesAsync). After moving, count again. The counts must be identical. If any count changes, stop and report.

3 · Move the components into their Sections (appendChild on the Section, or the auto-layout row you built inside it). Keep their annotations.

4 · In the source page, every "After · <name>" wrapper (in Section "Fixes") or spot (in Section "Sidepanel") that held a moved component is now empty. Put a 14 px muted text inside it: "Moved to ⚙️ Components (11-03)". Don't delete the wrappers or the "Before" columns, because the fix history stays readable.

5 · Leave these where they are, untouched: 565:28820, 570:55010, 565:29625, 570:56363, 570:55633.

When done, report a table: component, ID, Section, instances before → after. Then screenshot the whole "⚙️ Components" page, and the Drafts page frames SP1a (605:31256), SP2a (634:32810) and SP4c (734:27459) to show the screens still render with their instances.
```

## C2 · Checklist status row

From Daniel's annotations on the Checklist heading (11-04), all on 633:32825:

| Decision | Why |
|---|---|
| Remove "Yes / no · no score" | The buttons already show yes/no on every row. "No score" describes a feature we ruled out on 10-15. |
| Count and save status move to one row of their own, between the fixed top and the scroll area | Both describe the state of the answers, not the title. The row doesn't scroll, so the save status stays visible (F4). |
| The heading becomes the title alone | The title leads; the count is supporting information (12 px Text/Secondary, already applied 11-03). |

The list starts 8 px lower than today (y 168 instead of 160), because the row sits in Content with its 12 px gaps.

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "⚙️ Components" (675:31351) and the Drafts page (305:18292). Don't touch any other page.

You may edit: "SRV / Checklist heading" (565:29372), the two Checklist variants of "SRV / Side panel" (633:32565 Debrief, 633:32980 Live), and the detached frames SP2c (634:33370) and SP2d (634:33575). Nothing else. Do the steps in this order.

1 · New component set "SRV / Checklist status", in Section "SRV · Checklist", right after "SRV / Checklist heading", with a label in the same style as the others.
   - 348 px wide, hug height (24), horizontal auto-layout, space between, centre-aligned.
   - Left: text "Answered count", style Text/Supporting, fill Text/Secondary (same as the count in the heading today). Make it a text property "Count", default "5 of 7 answered".
   - Right: an instance of "SRV / Save status" (565:29346).
   - Property Save = Saved | Saving | Not saved, each swapping the pill to the matching state.
   - Annotation on the set: "Sits between the fixed top and the scroll area: it's about the answers, not the title. It doesn't scroll, so the save status stays visible."

2 · Add an instance as a direct child of the Content frame, between "Fixed top" and "Scroll area", FILL width. Content's 12 px gap gives the spacing.
   - 633:32565 (Debrief): Save=Saved, Count "5 of 7 answered".
   - 633:32980 (Live): Save=Saving, Count "4 of 7 answered".
   - SP2c (634:33370, Content 634:33372): Save=Saved, Count "5 of 7 answered".
   - SP2d (634:33575, Content 634:33577): Save=Saved, Count "5 of 7 answered".
   SP2a and SP2b are instances and follow automatically.

3 · Set every "SRV / Checklist heading" instance to Save=Saved. The Live variant's one (633:33098) is on Saving today.

4 · Edit "SRV / Checklist heading":
   - In Save=Saved: delete "Answered count" from Title row, and delete the whole Meta row ("Subtitle" and the Save status). The title is all that's left, so the height is 20.
   - Delete the Save=Saving and Save=Not saved variants. Rename the remaining variant "State=Default".
   - Replace the annotation on the set with: "Title only. The count and save status live in 'SRV / Checklist status', under the fixed top."
   - Daniel's three open annotations on 633:32825 sit on the deleted layers and go with them. That's expected.

5 · Instance 908:23770 is in a loose copy of SP2a on the Drafts page (Daniel's exploration). Leave it alone: it will just show the title.

When done, screenshot the "SRV · Checklist" Section, then 633:32565, 633:32980, SP2c (634:33370), SP2d (634:33575) and SP2a (634:32810).
Check, measured from the top of each panel:
   - 633:32565, 633:32980, SP2a, SP2c: toolbar y 56, title y 100 (h 20), status row y 132 (h 24), scroll area y 168.
   - SP2d: toolbar + filter y 56, title y 128, status row y 160, scroll area y 196.
   - No "Yes / no · no score" anywhere in these. The count is on the left and the pill on the right, both inside 348 px. The Live variant shows "4 of 7 answered" and "Saving…".
```

## C2 QA (11-04, Claude)

Passed, nothing for Cursor to fix.
- **Positions:** toolbar y 56, title y 100, status row y 132, list y 168 on both Checklist variants and SP2c. SP2d: title y 128, status row y 160, list y 196.
- **Status row:** "SRV / Checklist status" (936:6959) has all three Save states, 348 px wide. Live shows "4 of 7 answered" and "Saving…".
- **Heading:** one variant, title only, instances intact. "Yes / no · no score" is gone.

## Transcript chapter header gap (11-04, fixed directly by Claude)

Daniel's Fix [AI]: a Current line right above a chapter header collided with it, because both are grey with no gap between them.
- "SRV / Transcript chapter header" (570:55527) now has a boolean property "Top gap" (8 px, on by default). The grey band is a child frame called "Band". Text overrides are kept.
- It's turned off on the first header of each list (734:26794, 734:27676, 570:55654, 570:55793), so the list top stays 12 px under the fixed top.
- Daniel's test wrapper "Frame 1" (934:42890) is removed and the header is back in the list; his annotation went with it.

## C3 · Ehli switch property

Gergely asked to remove the Ehli on/off switch from the Annotations, Checklist and Chapters tabs, because Ehli will always be on in the next Essentials. Daniel wants to keep the work, so the switch becomes a property instead of being deleted.

| Decision | Why |
|---|---|
| New boolean "Show switch" on the three toolbars, off by default | Every screen loses the switch at once, and it can come back on any instance. |
| It hides only the switch. The icon and "Ehli" label stay | The icon is where Preparing (loader) and Error (alert) show. |
| Checklist toolbar gets Preparing and Error | It only has On and Off today, so it can't show that Ehli is working or has failed. |
| New frames: Checklist processing, Checklist error, Chapters error | These are the only tabs and states with no frame. Annotations has them in SP1f and SP1g, and Chapters processing is SP3c. |
| No Ready strip on Checklist or Chapters | The suggestions and chapters appear in the list itself. Gabor already called the Checklist top noisy. |
| "Ehli=Off" and SP2c / SP3d stay, marked as parked | Nothing is lost. They keep the switch visible, because their "Turn on Ehli" text makes no sense without it. |

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "⚙️ Components" (675:31351) and the Drafts page (305:18292). Don't touch any other page, Gabor's pages ("(G)") included.

You may edit: "SRV / Annotations toolbar" (621:12636), "SRV / Checklist toolbar" (633:32518), "SRV / Chapters toolbar" (711:26209), the six toolbar instances inside "SRV / Side panel" listed in step 3, the instances 634:33375 and 711:27168, the names of SP2c (634:33370) and SP3d (711:27164), and the three new frames in step 5. Nothing else. Don't delete any variant, frame or layer. Do the steps in this order.

0 · Before changing anything, record the instance count of each of the three toolbar sets (sum over variants, with getInstancesAsync, with both pages loaded). Expected: Annotations 7, Checklist 7, Chapters 6.

1 · Add two variants to "SRV / Checklist toolbar", so its Ehli options match the other two toolbars: On, Off, Preparing, Error.
   - Clone Ehli=On twice. Name the clones Ehli=Preparing and Ehli=Error.
   - In "Ehli switch (inline)", swap icon/sparkle to icon/loader in Preparing and to icon/triangle-alert in Error, as in "SRV / Annotations toolbar".
   - Keep the switch State=On in both, and keep the text "All items · 7".

2 · On each of the three toolbar sets, add a boolean property "Show switch", default FALSE. In every variant, bind the visibility of the Switch instance inside "Ehli switch (inline)" to it:
   - "Switch · Ehli AI annotations" in the Annotations toolbar
   - "Switch · Ehli checklist assistant" in the Checklist toolbar
   - "Switch · Ehli AI chapters" in the Chapters toolbar
   Hide only the Switch. The icon and the "Ehli" text stay. "Ehli switch (inline)" must hug its contents, so the label moves to the right edge of the toolbar. If it has a fixed width, set it to hug.

3 · In "SRV / Side panel" (605:30863), set isExposedInstance = true on the six toolbar instances, so "Show switch" can be set from a Side panel instance: 626:33059, 626:33073, 633:32837, 633:33110, 711:26414, 711:26663. Don't set any override on them.

4 · Park the "Ehli off" frames:
   - On 634:33375 (SP2c) and 711:27168 (SP3d), set Show switch = true.
   - Add " (parked 11-04)" to the end of both frame names. Don't move them.

5 · Add three frames to Section "Sidepanel" (605:31205). Each is 380 × 836, in the same row as the frames it belongs with. Check the spot is free first, and if it isn't, use the next free 540 px step.

   SP2e · Checklist · Ehli processing, at x 3848, y 6736:
   - Clone SP2a (634:32810) and detach only the top-level instance. Nested instances stay instances.
   - Set the toolbar to Ehli=Preparing.
   - In "Fixed top", wrap the toolbar in a vertical auto-layout frame "Toolbar + status", gap 8, FILL width, as in SP2d's "Toolbar + filter". Put an "SRV / Ehli status" (621:12698) instance under the toolbar, State=Processing, FILL width, text "Ehli is suggesting answers · 60 %". "Fixed top" keeps its 12 px gap to the heading.
   - Ehli has no results yet, so change the items with setProperties, which keeps their text. Items 1, 3 and 5: Answer=Unanswered, Ehli=None, Stars=None. Item 4: Answer=No, Ehli=None, Stars=None. Leave items 2, 6 and 7.
   - "SRV / Checklist status": Count "2 of 7 answered", Save=Saved.

   SP2f · Checklist · Ehli error, at x 4388, y 6736:
   - Clone SP2e. Toolbar Ehli=Error. Status State=Error, text "Ehli couldn't suggest answers.", and keep the Retry action. The items stay as in SP2e, because the faculty can still answer by hand.

   SP3e · Chapters · Ehli error, at x 3308, y 8012:
   - Clone SP3c (711:27060). Toolbar Ehli=Error. Status State=Error, text "Ehli couldn't create chapters.", and keep the Retry action. The list stays empty, as in SP3c.

6 · Add one annotation to each of the three toolbar sets: "Ehli is always on, so the switch is hidden. Turn on 'Show switch' to bring it back. The icon shows the status: sparkle, loader or alert. Ehli=Off is parked and is only used by SP2c and SP3d."

When done:
- Report a table: toolbar set, instances before → after. The counts must be identical. If any count changes, stop and report.
- Screenshot the "SRV · Side panel" Section, then SP1a (605:31256), SP1b (605:31468), SP1g (621:13426), SP2a (634:32810), SP2c (634:33370), SP2e, SP2f, SP3a (711:26825), SP3d (711:27164) and SP3e.

Check:
- SP1a, SP1b, SP1g, SP2a and SP3a show no switch, and the "Ehli" label sits at the right edge of the toolbar, inside 348 px.
- SP2c and SP3d still show the switch, in the off position.
- Setting Show switch on a Side panel instance brings the switch back. Test it on a temporary off-canvas instance, then delete that instance.
- SP2e, measured from the top of the panel: toolbar y 56, status strip y 96 (h 46), title y 154, status row y 186, scroll area y 222.
- SP2f: toolbar y 56, status strip y 96 (h 44), title y 152, status row y 184, scroll area y 220.
- Neither error text wraps to a second line next to Retry.
- SP2e and SP2f show no "Changed from Ehli's Yes" note and no stars.
```

## C3 QA (11-04, Claude)

Passed, nothing for Cursor to fix.
- **Property:** "Show switch" is on all three toolbars, default off, and bound to the Switch in every variant. "Ehli switch (inline)" hugs at 47 px, so the label sits at the right edge.
- **Checklist toolbar:** On, Off, Preparing and Error, with the loader and alert icons.
- **Side panel:** all six toolbar instances are exposed, with no overrides.
- **Instances:** Annotations 7 → 7. Checklist 7 → 9 and Chapters 6 → 7, and the increases are exactly the three new frames.
- **Parked:** SP2c and SP3d have Show switch on, and both names end in "(parked 11-04)".
- **New frames:** SP2e (1009:27482), SP2f (1009:27852) and SP3e (1009:27961). All positions match the prompt: SP2e title y 154, status row y 186, list y 222; SP2f title y 152, status row y 184, list y 220. Error text stays on one line, and no stars or "Changed from" notes remain.
- **Seen on screen:** SP2e, SP2f and SP1b. The rest was checked from the file data.
- **Open design question for Daniel:** in the normal state, "✦ Ehli" carries no information (visible in SP1b, Live). In Processing and Error, the toolbar icon repeats what the strip already says.

## Decisions for C4–C7 (11-04, Daniel)

- **Tabs:** four tabs only (Annotations, Checklist, Chapters, Transcript). Simulator events and Files stay out.
- **Layout & audio:** at the top. "SRV / Header actions" already has it there, so the old bottom buttons in B0, L1, AN* and D1 simply don't carry into the flow.
- **C4 change (Cursor found four md tabs + two buttons don't fit):** one ⋯ button only. "Collapse panel" becomes the last item in the Tab menu, under a divider. The old Collapse button stays as a hidden layer behind a boolean "Show collapse button", default off. Expanding stays one click, from the collapsed rail.
- **C6 change:** "SRV / Annotation input" keeps the Typeahead as an Astryx instance, and the placeholder is a text override. No detaching.
- **Left for later:** the Recording/Debrief switch and the QR popup (Debrief vs Video Review is open), the "How was the recording?" rating (6b; placement is open with Gabor), Teams-pin zoom, and L4 tile resizing.

## Shared rules (C4–C7)

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Library page "⚙️ Components" (675:31351). Source frames are on the Drafts page (305:18292) and the old "Wireframe (D)" page (0:1).

Other Cursor chats are working in this file at the same time, so:
- Edit only what your section names, and build only inside your own spot on the page. Don't move, tidy or rename anything else.
- Never touch the "(G)" pages. The Drafts frames and page 0:1 are source material: read or clone from them, but don't change them, unless your section says so.
- Never delete a variant, layer or frame that your section doesn't name.

How to build:
- Greyscale only. Bind fills, strokes, text styles and spacing to the variables and styles already in this file, as the existing "SRV / ..." components do. No hard-coded values.
- Use Astryx components (Button, Divider, Switch, SegmentedControl and so on) as instances, and auto-layout everywhere. Clone from the source first, then clean up. Don't redraw what already exists.
- Name components "SRV / <Name>". Add each one to its Section with a label 24 px above it (16 px medium, its exact name), 120 px apart and top-aligned. New Sections have 80 px padding. Resize your Section to fit.
- When you edit a component that has instances, record its instance count first (sum over variants, with getInstancesAsync, with both pages loaded). It must not go down. If it does, stop and report.

When done, report the new component IDs, then screenshot your Section and any frames your section lists.
```

## C4 · Tab menu and panel collapse

Users can hide tabs they don't use (Gergely, 10-29: "user-selectable tabs on small screens"). The side panel collapse button exists but has no collapsed state. Both live on the tab bar, so they're one run.

Behaviour: the menu lists all four tabs with a checkmark each. Annotations can't be hidden, so the panel always has a home tab. Hiding the open tab moves you to Annotations. A dot on the menu button means a hidden tab has a result or an error. The choice is saved per user.

```
You may edit: "SRV / Side panel tabs" (565:28541). You may add: two new components in Section "SRV · Side panel" (924:10199), placed to the right of what's there, and new frames in Section "Sidepanel" (605:31205) on the Drafts page.

1 · In "SRV / Side panel tabs", add a 28 px Ghost icon button "IconButton · Tab menu", directly left of "IconButton · Collapse panel", 4 px apart. Use the same ⋯ icon as the Annotation card menu.
   - Everything must fit in the 380 px bar with all four tabs showing. Keep the tab size at md and reduce the gap between tabs as needed, to 12 px at the least. If it still doesn't fit, stop and report.

2 · Add a boolean property "Dot", default false, bound to a new 6 px dot (Text/Primary fill) on the top right of the Tab menu button.

3 · Add a variant property "Hidden" = None | Chapters + Transcript, in every Active option that stays visible: Annotations and Checklist. For Hidden=Chapters + Transcript, hide those two tabs. The Chapters and Transcript active options only need Hidden=None. Existing instances stay on None.

4 · New component set "SRV / Tab menu row", 220 px wide, 36 px high: a check icon slot, a tab icon, a label (text property "Label"). Property State = Checked | Unchecked | Locked. Locked looks like Checked but with disabled colours. Icons: the same ones as in the reference 481:26267.

5 · New component "SRV / Tab menu": a popover with the same surface, radius and shadow as the reference 481:26267. It has four "SRV / Tab menu row" instances: Annotations (Locked), Checklist, Chapters, Transcript (all Checked).
   - Annotation: "Hide tabs you don't use. Saved per user. Annotations always stays. Hiding the open tab moves you to Annotations. A dot on the menu button means a hidden tab has a result or an error."

6 · New component "SRV / Side panel collapsed": 48 × 836, same background and left border as the Side panel. At the top, a 28 px Ghost icon button "IconButton · Expand panel", with the Collapse panel icon flipped. Add a boolean "Dot", default false, with the same dot on the button.
   - Annotation: "The video area takes the freed width. A dot means a tab has a result or an error."

7 · Add a new row in Section "Sidepanel", below the last row with the same gap as the other rows, at the same x positions. Clone SP1a (605:31256) for these, detaching only the top-level instance:
   - SP5a · Tab menu open: the "SRV / Tab menu" sits 4 px under the Tab menu button, right-aligned with it.
   - SP5b · Two tabs hidden: tabs Hidden=Chapters + Transcript, menu closed.
   - SP5c · Hidden tab has an update: as SP5b with Dot on.
   - SP5d · Panel collapsed: one "SRV / Side panel collapsed" instance on its own.

Check: all four tabs and both buttons fit inside 380 px in every Active option. SP1a, SP2a, SP3a and SP4a (734:27051) still look right, apart from the new button and the tab gap.
Screenshot SP5a–d, SP1a and SP4a too.
```

## C5 · Intercom collapse

Collapse, not hide. Hold to talk is the action people need fast, and it goes to the selected channel, so both stay visible when collapsed. Collapsing saves about 20 px of height. The real gain is that five controls become one line.

```
You may edit: "SRV / Intercom strip" (565:29096), in Section "SRV · Header" (924:10249). It has no instances yet.

1 · Turn it into a component set with property State = Expanded | Collapsed. Keep the width at 1012.

2 · Expanded: as it is today, plus a 28 px Ghost icon button "IconButton · Collapse intercom" at the right end of the row, with icon/chevron-down.

3 · Collapsed: 44 px high, same horizontal padding, space between.
   - Left: icon/mic, "Intercom", then the active channel as text. Make that a text property "Channel", default "In-room".
   - Right: "Hold to talk" (Button, Secondary, Size=SM), then a 28 px Ghost icon button "IconButton · Expand intercom" with icon/chevron-up.
   - Channels and Announcements are hidden.

4 · Annotation on the set: "Shown while recording only. Collapsed keeps Hold to talk and the active channel, because that's where the voice goes. Saved per user."

Check: the Collapsed variant is 44 px high, and the Section stays above y 8000 on the page.
```

## C6 · Recording controls and dialogs

None of these are in the library yet. "Report a problem" is voluntary and sits in the header, so it stays off the Stop path. The debrief must be ready within 30 seconds.

```
You may add: a new Section "SRV · Recording" on "⚙️ Components" at x 0, y 8000, with these four components, in this order.

1 · "SRV / Recording button". Clone from the button row in B2 (461:22825), B0 (461:21679) and D1 (472:25286). Property State = Ready | Recording | Stopped, with the labels "Start recording", "Stop recording" and "Open debrief". All three have the same fixed width, so the timeline doesn't jump.

2 · "SRV / Annotation input". Clone the row with the input and the three quick tags from L3 (468:12979). Make the placeholder a text property "Placeholder", default "Add an annotation at 08:00…".

3 · "SRV / Stop confirmation". Clone "Dialog · Stop the recording?" (1:2917) from page 0:1. 440 px wide, no backdrop inside the component. Keep the text as it is. Buttons: "Keep recording" (Secondary) and "Stop recording" (Destructive).
   - Annotation: "Opens from Stop recording, over a 40 % backdrop."

4 · "SRV / Report a problem". Clone "Dialog · Recording feedback, details" (1:6795) from page 0:1. 480 px wide, no backdrop.
   - Change the title to "Report a problem". Remove any star or score rating row, and keep the problem options, the text field and the logs checkbox.
   - Buttons: "Cancel" and "Send".
   - Annotation: "Opens only from Report a problem in the header. Never opens by itself, because the debrief must be ready within 30 seconds."

Check: all three button states have the same width, and the Section stays above y 9200.
```

## C7 · Cameras and Layout & audio

These parts exist only as loose layers in L1–L3 and B1, so the flow can't reuse them yet.

```
You may add: a new Section "SRV · Layout & audio" at x 0, y 9200, and a new Section "SRV · Video" at x 0, y 10400, both on "⚙️ Components".

Section "SRV · Video":
1 · "SRV / Camera tile". Clone a tile from "Camera area" (468:12986) in L3, keeping the image fill and the name chip with the red dot. Property State = Recording | Not recording, with the second taken from B1 (461:22285). Text property "Name", default "Camera 1". The tile must resize with its parent.

2 · "SRV / Camera grid". Width 964, the height of the video area in L3, built from "SRV / Camera tile" instances. Property Layout = Single | Side by side | 1 + 2 | 2 × 2 | 3 × 3. Keep the same gaps and corner radius as L3. Use the three camera images and repeat them to fill 2 × 2 and 3 × 3.

Section "SRV · Layout & audio":
3 · "SRV / Layout option". Clone one option from "Layout options" (468:14781). Property State = Default | Selected, and a text property "Label".

4 · "SRV / Layout camera card". Clone a card from "Group · Cameras in this room" (468:14828): thumbnail, drag handle, name, slot chip. Text properties "Name" and "Slot".

5 · "SRV / Layout & audio panel". Clone "CUSTOM · Layout & audio card" (468:14773), 356 × 784, and replace the loose layout options and camera cards with instances of 3 and 4. Keep every audio group as it is, and keep the panel scrolling.
   - Annotation: "Opens from Layout & audio in the header and floats over the side panel. The tabs stay reachable after closing it with ✕."

Check: all five grid layouts fill the tile area with no gaps or stretched images. Show one "SRV / Camera grid" (Layout=1 + 2) next to the panel: it should match L3.
```

## C4–C7 QA (11-04, Claude)

**C4 passed.** The ⋯ button sits at x 344 and the last tab ends at x 334, so all four tabs fit in every Active option. The old Collapse button is a hidden layer behind "Show collapse button". The menu has the divider and the "Collapse panel" row. SP5a–d exist, and SP5c has Dot on. Instances: 32 → 38, and the six extra are SP2e, SP2f, SP3e and SP5a–c.

**C5 passed, one change.** Expanded 64 px, Collapsed 44 px, annotation in place. Hold to talk jumps from the middle to the far right between the two states, so it goes into C8.

**C6 needs fixes.** Sizes, widths and the Stop confirmation are right. "SRV / Annotation input" keeps the Typeahead instance, as agreed. Three problems:
- "Stop recording" lost its red outline and label, so it has no button shape. L3 and B0 have them.
- "SRV / Report a problem" opens with Echo and Frozen camera already selected.
- Its footer says "with technical logs" even if the logs checkbox is off.

**C7 needs fixes.** Grid sizes (964 × 624), tile counts (1, 2, 3, 4, 9), the panel's instances and the Not recording state are right. Three problems:
- The camera images are in colour. L3 uses saturation -1, and the new tile has 0.
- All ten "SRV / Layout option" variants are labelled "Single". The panel's instances are fine.
- "Slot" isn't a property on "SRV / Layout camera card".

**Daniel's request (Feedback [AI] on 1036:4579):** a version of the panel with its whole length visible. This goes into C8.

## C8 · QA fixes for C5–C7

```
You may edit: "SRV / Intercom strip" (1024:8550), "SRV / Recording button" (1024:8555), "SRV / Report a problem" (1024:8740), "SRV / Camera tile" (1027:6832), "SRV / Camera grid" (1029:6901), "SRV / Layout option" (1034:4510), "SRV / Layout camera card" (1035:4417), "SRV / Layout & audio panel" (1036:4579), the Preview frame in Section "SRV · Layout & audio", and the position of Section "SRV · Video" (1027:6811). Nothing else. Keep Daniel's annotation on 1036:4579.

1 · Greyscale images. In "SRV / Camera tile" and every tile instance in "SRV / Camera grid" and in the Preview, set the image fill filter to saturation -1, as on "CUSTOM · Camera 1" in L3 (468:12986). Change only the filter, and keep the image. Fix the instance overrides too, since the grid uses different images.

2 · Stop recording. In "SRV / Recording button", State=Recording, match "Stop recording" in L3: 1 px red stroke, red label and red square icon, with the same colour variable as L3. Keep the width at 144.

3 · Report a problem.
   - Set every option chip to its unselected state.
   - Change the footer text to "Sent to Elevate."
   - Keep the checkbox "Include technical logs (no video or audio)".

4 · Layout option labels. In "SRV / Layout option", give each variant the label of its Layout: Single, Side by side, 1 + 2, 2 × 2, 3 × 3. Keep the "Label" property working, and check the panel still shows the right five labels.

5 · Slot property. Add a text property "Slot" to "SRV / Layout camera card", bound to the chip text, default "Main". Keep the values on the panel's three cards: Main, Right top, Right bottom. If the chip is an instance with its own text property, expose it instead.

6 · Full-length panel. Turn "SRV / Layout & audio panel" into a component set with a property Length = Scroll | Full.
   - Scroll is the panel as it is today, 356 × 784.
   - Full shows everything: height hugs the content, nothing is clipped, and the Scrollbar is hidden.
   - Keep the Preview on Length=Scroll.
   - The panel gets taller, so first move Section "SRV · Video" down to y 10800, then resize Section "SRV · Layout & audio". Nothing else on the page moves.

7 · Hold to talk position. In "SRV / Intercom strip", State=Expanded, move "Hold to talk" to the right end of the row, next to the chevron, so it's in the same place in both states. Keep the chevron at the far right. The other controls stay on the left.

Check:
- No colour in any camera image, in the tile, the grid or the Preview.
- "Stop recording" looks like L3, and all three button states are 144 px wide.
- No chip is selected in the dialog.
- The right edge of Hold to talk is the same in both Intercom states.
- The Full panel shows "Send to screen" at the bottom with nothing cut off.
Screenshot Sections "SRV · Header", "SRV · Recording", "SRV · Layout & audio" and "SRV · Video".
```

## C9 · Participants and recording banner

The last two parts the SRV story needs that aren't in the library: step 2 (untick a learner who is off sick) and the "left the SRV while recording" state.

| Decision | Why |
|---|---|
| The banner has no Pause | The current SRV has only Start and Stop, so a Pause here would be a feature that exists nowhere else. |
| The banner's Stop opens "SRV / Stop confirmation" | Stopping should work the same from everywhere. |
| An absent learner stays in the list | Unticking is easy to undo, and "Changes apply to this recording only" stays true. |

```
You may add: a new Section "SRV · Participants & banner" on "⚙️ Components" at x 0, y 12600, with these three components, in this order. Page 0:1 is source material only. Don't edit "SRV / Header actions".

1 · "SRV / Participant row". Clone one row from "Popover · Participants" (1:2220) on page 0:1: avatar with initials, name, checkbox. 296 px wide.
   - Property State = Present | Absent. Present has the checkbox ticked. Absent has the name and avatar muted, the "Absent" tag showing, and the checkbox unticked, as in the "Olivia Grant" row.
   - Text properties "Name" and "Initials".

2 · "SRV / Participants popover". Clone "Popover · Participants" (1:2220), 320 px wide, and replace the five rows with "SRV / Participant row" instances. Keep the names, and keep Olivia Grant on Absent.
   - Keep "Participants · 5", "Add learner", the "Name or email" field and "Changes apply to this recording only."
   - Annotation: "Opens from the learners button in the header. The header count shows who is present, so unticking one of five shows 4 learners. Absent learners stay in the list. Learners can still be added during or after the recording."

3 · "SRV / Recording banner". Clone "CUSTOM · Recording banner" (1:2503), 1440 × 48.
   - Remove the "Pause" button and the hidden "Paused at" text.
   - Keep "Recording", the context text, the elapsed time, "Open recording view" and "Stop".
   - Replace the literal red on the recording dot with the same colour variable as the dot on "SRV / Camera tile".
   - Text properties "Context" (default "Sim Room 2 · NURS 310 · Sepsis recognition") and "Elapsed" (default "08:00").
   - Annotation: "Shows on every screen while a recording runs and the user has left the SRV. Open recording view goes back. Stop opens 'SRV / Stop confirmation'."

Check: both row states fit in 296 px, the popover matches frame 4b, and no Pause is left in the banner.
Screenshot the new Section.
```

## C8 and C9 QA (11-04, Claude)

**C8 passed, nothing for Cursor to fix.**
- **Images:** all 33 image fills on the page have saturation -1.
- **Stop recording:** red stroke and label on the same red variable as the camera and banner dots, 144 px wide like the other two states.
- **Report a problem:** no chip selected, footer reads "Sent to Elevate."
- **Layout option:** each variant shows its own label. The Label property is gone, as Daniel decided in Cursor (the Layout property already names the option).
- **Camera card:** the Slot chip is an exposed instance, so its label can be set from a card instance.
- **Panel:** new set 1048:5310 with Length = Scroll (1036:4579, 356 × 784) and Full (1048:5102, 356 × 1158), and the five labels and three slots are kept in both. "Send to screen" is fully visible in Full.
- **Intercom:** the right edge of Hold to talk is at x 960 in both states.
- **Sections:** "SRV · Video" moved to y 10800, and no Sections overlap.

**C9 passed, nothing for Cursor to fix.**
- **Components:** Participant row 1048:4987, Participants popover 1048:5499, Recording banner 1048:27519.
- **Popover:** matches frame 4b, with Olivia Grant Absent.
- **Banner:** no Pause, and the dot uses the shared red variable.
- **Small difference from the prompt:** "Name" is exposed from the nested text instance instead of being a text property, and "Initials" is a normal override on the Avatar. Both can still be edited on an instance.

Daniel's Feedback [AI] on 1036:4579 is covered, and he can mark it done.
