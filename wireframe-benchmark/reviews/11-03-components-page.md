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
