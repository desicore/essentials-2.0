# 10-29 · Sidepanel: bringing the tabs together

Goal (Daniel 10-29): one SRV side panel with every tab and its content, in a polished final design, so we can see how it all looks together. We start with the **Annotations** tab; Checklist, Chapters and Transcript follow as their own sections in this file. This isn't a state inventory: only the states needed to show how the panel works. Every state and edge case gets built later in the component library.

Built from the approved components in Section **"Fixes"** (564:28119) of the IMSH-MVP file (`dbJVpAusLJCtreiz0jlEh3`), page "Dashboard + SRV (D)" (305:18292).

## How to run

One Cursor chat per tab, in order:

1. **SP1** (done 10-29):
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1 · Annotations tab".`
2. **SP1-fix A** (component edits). Model: **Claude Opus 5.5 · Medium**. It edits five component sets that are used as instances everywhere, so a mistake spreads. Worth the smarter model; no need for High.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix A · Components".`
3. **SP1-fix B** (three filter options), after A. Model: **Claude Sonnet 5.5 · High**. It only composes existing instances into new frames, so speed over depth.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix B · Filter options".`
4. **SP1-fix C** (AI label bottom-right + SP1a card bug). Model: **Claude Sonnet 5.5 · High**. Two targeted component edits, nothing structural.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix C · AI label and card bug".`
5. **SP1-fix D** (Ehli status for the one-toolbar layout), in parallel with C. Model: **Claude Sonnet 5.5 · High**. Two small components and three frames composed from instances.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix D · Ehli status in the toolbar".`
6. **SP1-fix E** (the toolbar becomes the default, the chip version is parked), AFTER C and D. Model: **Claude Sonnet 5.5 · High**. It swaps the fixed top in two variants and parks copies; clear instructions, no new design. (done and QA'd 10-29)
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix E · Toolbar as default".`
7. **SP2** (Checklist tab). Model: **Claude Opus 5.5 · Medium**. It adds two variants to the shared "SRV / Side panel" set and builds a new toolbar component, so a mistake reaches SP1a/SP1b too. Worth the smarter model.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP2 · Checklist tab".`
8. Chapters, Transcript: sections to come.

If a picker name differs, take the closest model of the same family and tier.

## What the Annotations tab shows

| Frame | Mode | What it shows |
|---|---|---|
| SP1a | Debrief | The main view: Ehli on, your and Ehli's annotations mixed in recording order (option A from F8), enough cards that the list scrolls |
| SP1b | Live recording | What the faculty sees while the sim is running: only their own annotations, Ehli "Preparing", times as plain text |

Not in this round: Ehli off, grouped (B), hidden items, editing, the "…" menu. They exist as components in Fixes and come back in the library.

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "Dashboard + SRV (D)" (305:18292).
READ-ONLY: everything on this page except the Section "Sidepanel". Cloning FROM other Sections and creating instances of their components is fine; never edit them. One exception per run, if a section says so explicitly.
TARGET = Section "Sidepanel". If it doesn't exist yet, create it: left edge aligned with Section "Fixes" (564:28119), top 400 px below the Fixes Section's bottom edge, width 4000 px, 120 px padding. If it exists, append to it; never create a second one.
Inside the Section: ONE horizontal row per tab, top to bottom in tab order (Annotations, Checklist, Chapters, Transcript), 400 px between rows. Left of each row, a 32 px bold row title ("SP1 · Annotations tab", …). Frames in a row are top-aligned with 160 px gaps. Above each frame, 40 px up, a 16 px label with the frame name.

PANEL ANATOMY (the same for every tab, so the tabs look like one panel):
 - Component set "SRV / Side panel", 380 × 836, white background, 1 px left border in the border colour (it separates the panel from the video area). Clip content. Properties: Tab = Annotations | Checklist | Chapters | Transcript (each run adds its own) and Mode = Live | Debrief.
 - Top: an instance of "SRV / Side panel tabs" (565:28541) with Active = the tab, full width, 40 px.
 - Content area: 16 px padding left/right, 16 px top. Two parts:
   1 · Fixed top (doesn't scroll): ONE 32 px toolbar: the tab's filter or search on the left, the inline Ehli control (icon + "Ehli" + Switch) on the right when the tab has one. Directly under it (8 px), the "SRV / Ehli status" strip, ONLY while Ehli has something to report (Preparing, Processing, Error, Ready). No Ehli switch cards (decided 10-29, Daniel: SP1e's one toolbar is the default). Checklist only: its heading ("SRV / Checklist heading", with the save status) sits ABOVE the toolbar, 12 px gap, because the save status must stay visible.
   2 · Scroll area: starts 12 px under the fixed top, fills to the bottom, 16 px bottom padding. Items 8 px apart. When the content is longer than the panel, it's cut at the bottom with a 32 px white-to-transparent fade over the last visible item (shows that it scrolls). No scrollbar drawn.
 - Type scale: content text 14 regular, titles 14 medium, meta and helper 12 muted, group headings 12 muted uppercase. No other sizes.
 - Width of everything inside: 348 px.
Instances only, from the components in Section "Fixes". Don't detach them and don't draw your own versions. If a variant you need doesn't exist, use the closest one and say so in your reply, unless the section allows adding it.
Greyscale Astryx, Neutral Light. Recording red only where the components already use it.
Copy: sentence case, the same demo world (Riverbend College of Nursing, Dr. Maya Ortiz, NURS 310 · Sepsis recognition, recording 18:42). "Annotation", never "note".
Dev Mode annotations: only the ones the section asks for, category "Interaction".
When done: screenshot each new frame and check that nothing overlaps or is clipped (apart from the deliberate scroll cut), the 16 px side padding is identical top to bottom, and every card is 348 px wide.
```

---

## SP1 · Annotations tab

```
Assumes: Shared rules from this file. Creates the Section "Sidepanel" if needed, the component set "SRV / Side panel" with its first two variants, and nothing else.
ONE exception: if "SRV / Annotation card" (565:29411) has no variant "Type=Tag only, Live=Yes, Source=You", ADD it to that set (copy "Type=Tag only, Live=No, Source=You", make the time pill plain text as in "Type=Comment, Live=Yes"). Don't change anything else in that set.

Variant 1 · Tab=Annotations, Mode=Debrief (frame label "SP1a · Annotations · Debrief"):
 - Tabs: Active = Annotations.
 - Fixed top:
   - "SRV / Ehli switch" (570:55010): Tab=Annotations, State=On ("2 annotations from Ehli, marked with ✦.").
   - Filter chips (the same chips as in F8's mixed list, 570:56573): "All 6" (selected), "Yours 4", "Ehli 2", "Discuss", "Good practice", "Marker". One line, scrolls horizontally with the right-edge fade; no wrapping.
 - Scroll area, "SRV / Annotation card" (565:29411) instances in recording order, all Live=No:
   1. 03:05 · Source=Ehli, Comment: "Hand hygiene skipped before the first patient contact."
   2. 04:12 · You, Comment, Discuss: "Lactate came back at 4.1, nobody escalated."
   3. 06:05 · You, Tag only, Good practice ("Add a comment").
   4. 07:30 · You, Comment, Marker: "Fluids started."
   5. 11:20 · Source=Ehli, Comment: "SBAR handoff: situation and recommendation given, background missing."
   6. 15:40 · You, Comment, Good practice: "Clear closed-loop handoff to the charge nurse."
   Cards 5–6 run past the bottom: cut + fade as in the anatomy rules.

Variant 2 · Tab=Annotations, Mode=Live (frame label "SP1b · Annotations · Live recording"):
 - Tabs: Active = Annotations.
 - Fixed top:
   - "SRV / Ehli switch": Tab=Annotations, State=Preparing.
   - Filter chips: "All 3" (selected), "Discuss", "Good practice", "Marker". No "Yours" / "Ehli" chips (Ehli has nothing yet).
 - Scroll area, Live=Yes cards (plain-text time, no play icon), recording order, Source=You:
   1. 04:12 · Comment, Discuss: "Lactate came back at 4.1, nobody escalated."
   2. 06:05 · Tag only, Good practice ("Add a comment").
   3. 07:30 · Comment, Marker: "Fluids started."
   Under the last card, the empty rest of the panel stays white (no empty-state illustration: the list grows as the faculty adds annotations).

Place both variants in the Annotations row (Debrief first), as the component set, plus one instance of each next to the set so they can be reviewed outside the set's frame.

Annotations (Dev Mode, category "Interaction"):
 - On the fixed top of SP1a: "The Ehli switch and the filters stay put; only the cards scroll."
 - On card 1 of SP1a: "Ehli's and your annotations in one list, in recording order: the same order as the markers on the timeline (option A, Daniel 10-29)."
 - On the scroll fade: "Cut + fade = more below. Same treatment on every tab."
 - On SP1b's switch: "AI annotations come from processing the recording, so during a live recording Ehli shows Preparing. They appear in this list when ready."
 - On SP1b's last card: "New annotations are added at the bottom and the list scrolls to them. Times are plain text while recording live; in debrief they jump the playback."
```

---

## SP1 review round (10-29)

Daniel's flags on SP1a (605:31256) and on the Ehli switch (570:55010), plus Claude's QA of both SP1 frames.

| # | Flag | Fix |
|---|---|---|
| 1 | Ehli switch: "the LED line can be turned on/off from the properties" | Read as **the description line** under the title (the 12 px "2 annotations from Ehli…"). It becomes a boolean property "Show description". If you meant something else, say so |
| 2 | Ehli card: Ehli chip on top + "Ehli · AI annotation" at the bottom is overkill; use the small round AI label (606:55472) | A local component "SRV / AI label" from your label set. Ehli cards keep only the round "AI" label after the time. The edited card gets the "AI MODIFIED" pill instead of the "Edited from Ehli" text. Timeline Ehli markers get the AI label too |
| 3 | Tag-only card: smaller by default, no "Add a comment" until clicked, but it should look editable | A one-line compact card. Hover/focus shows a pencil "Add a comment" button and a light tint; clicking the card opens Editing; "…" also has "Add a comment" |
| 4 | Filter chips take too much space: a labels-only version, a surprise version, plus Daniel's segmented-control idea. Don't overwrite SP1a | Three new frames next to SP1a (fix B) |
| 5 | Question: the icon at the right end of the tab bar? | Answered below. **Decision (Daniel 10-29): keep it.** Flow round: tooltip + accessible name "Hide side panel" |
| QA | The tab bar starts 8 px from the edge, the content 16 px | The first tab's label lines up with the 16 px content edge |

**About the icon (flag 5):** it's the **collapse-panel** button from the original SRV ("S2 · Panel collapsed", 313:15376). It folds the side panel away so the video gets the full width, and a small button on the right edge brings it back. It's not leftover: on a laptop it's the quickest way to get pixels back, which was Gabor's concern. I'd keep it. Its icon is ambiguous next to tabs, so in the flow round it needs a tooltip and the accessible name "Hide side panel". If you'd rather drop the feature, it's a one-line patch.

**Why two Ehli symbols:** the sparkle ✦ marks Ehli the *feature* (the switch, the assistant). The round AI label marks *content Ehli generated* (cards, timeline markers), in the spirit of the EU AI Act transparency labels you based the set on. One symbol per job, so neither is redundant.

**The three filter options (fix B):**
- **O1 · Labels only:** plain text filters, with the selected one darker and medium weight. It's the smallest, but it can read like a second row of tabs under the tab bar. That's my concern with it.
- **O2 · Segmented (your idea):** Astryx segmented control "All 6 | Yours 4 | Ehli 2" plus a "Filter by tag" icon button. Source and tag are different questions, so splitting them is cleaner than six chips in a row.
- **O3 · Surprise:** no Ehli card and no chip row. One 32 px toolbar: a "All annotations · 6 ▾" select on the left (source and tags in one menu) and an inline "✦ Ehli" switch on the right. The fixed top goes from 110 px to 32 px, so about one and a half more cards are visible.

---

## SP1-fix A · Components

```
Assumes: Shared rules from this file. EXCEPTION for this run: you may EDIT these main components in Section "Fixes" (564:28119) in place: "SRV / Ehli switch" (570:55010), "SRV / Annotation card" (565:29411), "SRV / Timeline marker" (570:56124), "SRV / Side panel tabs" (565:28541). You may create ONE new component in row "Fix row · F8". Change nothing else. Don't rename existing variants (instances depend on them).

1 · "SRV / Ehli switch" (570:55010): add a BOOLEAN component property "Show description" (default true) bound to the visibility of the 12 px description line, in every variant. With it off, the card hugs to one row (title + switch), same padding.

2 · New component set "SRV / AI label" in row "Fix row · F8" (append at the end of the row, label "After · SRV / AI label"):
   - Type=AI: from the frame "LABEL_AI_black 1" (606:55398, the solid black circle with white "AI"). Clone its vector content into a component and scale it proportionally to 16 × 16 (constraints: scale).
   - Type=AI modified: from "LABEL_AI MODIFIED_black 1" (606:55403), scaled proportionally to 16 px tall.
   The source frames in Section 606:55472 stay untouched.

3 · "SRV / Annotation card" (565:29411), the Source=Ehli variants:
   - "Type=Comment, Live=No, Source=Ehli": delete the "Ehli" chip from row 1 and the whole footer ("✦ Ehli · AI annotation"). Row 1 = time pill, 8 px, an "SRV / AI label" (Type=AI) instance, spacer, "…". Then the text. Muted card fill stays. Accessible name on the label: "AI-generated by Ehli".
   - "Type=Edited, Live=No, Source=Ehli": in the author line, replace the text "Edited from Ehli" with an "SRV / AI label" (Type=AI modified) instance, 8 px after "Dr. Maya Ortiz", vertically centred. Accessible name: "Edited from an Ehli annotation".

4 · "SRV / Annotation card" (565:29411), the Tag only variants ("Type=Tag only, Live=No, Source=You" and "Type=Tag only, Live=Yes, Source=You"): make them ONE row:
   - Row: time pill, 8 px, tag chip, spacer, "…". Delete the "Add a comment" button and the author line. Padding 8 px top/bottom, 12 px left/right, so the card is about 48 px tall (was ~118).
   - Add a property "State" = Default | Hover to these two variants only (the other variants get State=Default). Hover: the card's fill turns to the muted surface and a ghost IconButton with a pencil icon (accessible name "Add a comment") appears directly left of "…". Same height.
   - Annotation on the Hover variant: "Click anywhere on the card (or Enter when focused) opens the Editing state. '…' also has 'Add a comment', so it's never hover-only. The author shows once a comment is added."

5 · "SRV / Timeline marker" (570:56124), Type=Ehli: replace the sparkle icon in the head with an "SRV / AI label" (Type=AI) instance at 14 × 14. The dashed stem stays.

6 · "SRV / Side panel tabs" (565:28541), every variant: the first tab's LABEL must start at x = 16 (the panel's content edge). Adjust the tab bar's left padding, not the tab component. Keep at least 8 px between "Transcript" and the collapse IconButton; if that doesn't fit, reduce the gap between tabs evenly. Don't shrink the text.

When done: screenshot 570:55010 (one variant with Show description off), 565:29411, 570:56124, 565:28541, and the Sidepanel frames SP1a (605:31256) and SP1b (605:31468), which should pick up every change by themselves. Check the compact tag-only card is about 48 px tall and nothing in SP1a/SP1b overlaps.
```

---

## SP1-fix B · Filter options

Run after A. Three new frames next to SP1a. SP1a itself stays as it is.

```
Assumes: Shared rules from this file, and SP1-fix A has run.
For each option: create an instance of "SRV / Side panel" (605:30863), variant Tab=Annotations, Mode=Debrief. Detach ONLY that outer instance (nested instances stay instances), rename it, and place it in the SP1 row after the existing frames (160 px gaps, label above). Replace only the "Fixed top" content; the tab bar and the cards stay as they are. The scroll area starts 12 px under the new fixed top, so more cards show.
Counts in this demo: All 6, Yours 4, Ehli 2, Discuss 1, Good practice 2, Marker 1.

O1 · "SP1c · Filters, labels only":
 - "SRV / Ehli switch" (Annotations, On) with Show description = OFF.
 - 12 px under it, one line of plain text filters, no chip backgrounds or borders, 16 px apart: "All 6" (selected: foreground colour, 14 medium), "Yours 4", "Ehli 2", "Discuss", "Good practice", "Marker" (14 regular, muted). Scrolls horizontally with the right-edge fade; no wrapping. No underline (it would read as a second tab bar).
 - Annotation: "Smallest option. Risk: plain text under a tab bar can read like a second row of tabs."

O2 · "SP1d · Filters, segmented":
 - "SRV / Ehli switch" (Annotations, On) with Show description = OFF.
 - 12 px under it, one row: the segmented control (reuse the segmented-control instance from the "Recording | Debrief" switch in "D1 · Recording stopped" 472:25286, size M, text only) with three segments "All 6" (selected), "Yours 4", "Ehli 2", filling the width; then 8 px, a secondary IconButton with a list-filter icon (accessible name "Filter by tag"), same height as the segmented control.
 - Next to the frame (not inside), a small frame "SP1d · tag menu open": a DropdownMenu as it opens under the IconButton: 12 px muted heading "TAGS", checkbox rows "Discuss 1", "Good practice 2", "Marker 1" (none checked), divider, "Clear".
 - Annotations:
   - On the segmented control: "Who made it: all, yours, Ehli's (Daniel's idea, Astryx segmented control). Tags are a separate question, so they live in the filter button."
   - On the IconButton: "When a tag filter is active the button shows a small dot and the list says 'Filtered by Discuss · Clear'."

O3 · "SP1e · Filters, one toolbar" (the surprise):
 - Delete the Ehli switch card and the chips. One 32 px row instead:
   - Left: a small outline Select "All annotations · 6" with chevron-down.
   - Right: sparkle icon + 14 medium "Ehli" + the file's Switch (on), 8 px apart, right-aligned. Accessible name of the switch: "Ehli AI annotations".
 - Next to the frame, a small frame "SP1e · menu open": the Select's menu: heading "SHOW" with radio rows "All annotations 6" (selected), "Yours 4", "Ehli 2", divider, heading "TAG" with "Discuss 1", "Good practice 2", "Marker 1", divider, "Clear filters", and a 12 px muted footer line "2 from Ehli, marked AI".
 - Annotations:
   - On the toolbar: "The fixed top is 32 px instead of 110 px: about 1.5 more cards visible. Source and tag filters in one menu; Ehli on/off right next to them."
   - On the Ehli switch: "Same behaviour as the Ehli switch card; the description moves into the menu as a footer line: '2 from Ehli, marked AI'."

When done: screenshot SP1c, SP1d, SP1e and the two menu frames, and check the three fixed tops are the only difference from SP1a.
```

---

## SP1 review round 2 (10-29 evening)

| # | Input | Fix |
|---|---|---|
| 1 | Daniel's card proposal (617:56085): the AI label bottom-right, row 1 only time + "…" | Adopted on both Ehli card variants (fix C). The edited card's "AI MODIFIED" label moves to the same corner |
| 2 | Claude's QA: in SP1a (605:31256) the 6th card reads "04:12 · Discuss" with a thumbs-up icon and an over-wide chip | Back to "15:40 · Good practice" as specified (fix C). SP1e has it right |
| 3 | Daniel on SP1e (612:32505): likes the one-toolbar filter, but it has no place for Ehli status messages (loading, progress, error) | A status strip that appears under the toolbar only when Ehli has something to say, plus a status icon on the toolbar's Ehli control (fix D) |

**Claude's notes:**
- **The bottom-right label:** agreed. Row 1 becomes time + "…" for every Ehli card, and the label sits where a content watermark usually goes. Telling Ehli cards apart at a glance still relies on the muted fill, so keep the fill. The label is the formal AI marker, not the scanning cue.
- **Ehli status with the toolbar:** status is an event, not a permanent fixture. With nothing to report, you get the 32 px toolbar alone, so the vertical space you liked stays. A one-line strip appears under it only for Preparing, Processing, Error and a short "Ready" confirmation. The icon in the toolbar (sparkle → loader → warning) keeps the state visible even after the "Ready" strip is gone. The same strip can serve Chapters and the Checklist assistant later.
- **Processing with a percentage** only makes sense if the backend can report progress. If it can't, Preparing (no number) is the honest state. Worth asking Bence.
- **Your call:** if SP1e is the direction, the next step is to make the toolbar the default in "SRV / Side panel" (SP1a/SP1b update by themselves) and park the chip version. That's not in this patch; say the word.

---

## SP1-fix C · AI label and card bug

```
Assumes: Shared rules from this file. EXCEPTION for this run: you may EDIT the main component "SRV / Annotation card" (565:29411) in Section "Fixes", and the component set "SRV / Side panel" (605:30863) in this Section. Nothing else. Don't rename variants.

1 · "SRV / Annotation card", "Type=Comment, Live=No, Source=Ehli": match Daniel's reference frame 617:56085 (read-only).
   - Row 1: time pill, spacer, "…". Delete the AI label from row 1.
   - Content row: horizontal auto-layout, 8 px gap, bottom-aligned: the text (fill width, wraps) and an "SRV / AI label" (Type=AI, 16 × 16) at the right. So the label sits in the card's bottom-right corner, level with the last text line, and long text wraps before it instead of running under it.
   - Muted card fill and the white time pill stay.
2 · "SRV / Annotation card", "Type=Edited, Live=No, Source=Ehli": the author line becomes a horizontal row, centre-aligned: "Dr. Maya Ortiz" (fill) and the "SRV / AI label" (Type=AI modified) right-aligned at the end. Delete the label's old spot after the name.
3 · "SRV / Side panel", variant "Tab=Annotations, Mode=Debrief": the 6th card in the scroll area must be: 15:40 · Source=You, Type=Comment, tag "Good practice" (thumbs-up), text "Clear closed-loop handoff to the charge nurse." Today it shows "04:12" and a thumbs-up chip labelled "Discuss" that is wider than the others. Reset that instance's overrides and set it again: the tag chip hugs its label like the other cards.
When done: screenshot 565:29411, SP1a (605:31256) and SP1e (612:32067). Check the AI label sits bottom-right on both Ehli cards, no text runs under it, and card 6 in SP1a matches SP1e.
```

---

## SP1-fix D · Ehli status in the toolbar

```
Assumes: Shared rules from this file. Creates two components in this Section (a new row under the SP1 row, row title "SP1 · Toolbar status", 400 px below the SP1 row) and three new frames in that row. Don't touch SP1a–SP1e.

1 · Component set "SRV / Annotations toolbar", 348 × 32, built from SP1e's "Toolbar" (612:32505): left the outline Select "All annotations · 6" with chevron, right the Ehli control (icon + 14 medium "Ehli" + Switch), right-aligned, 8 px apart. Property Ehli:
   - On: sparkle icon, Switch on.
   - Off: sparkle icon, "Ehli" in the muted colour, Switch off. Select reads "All annotations · 4".
   - Preparing: a loader icon instead of the sparkle, Switch on. Select "All annotations · 4".
   - Error: an alert-triangle in the warning colour instead of the sparkle, Switch on. Select "All annotations · 4".
2 · Component set "SRV / Ehli status", 348 px wide, hug height: muted fill, 8 px radius, 8 px vertical / 12 px horizontal padding, 16 px icon + 12 px text (foreground, not muted), 8 px gap. Property State:
   - Preparing: loader icon, "Ehli is preparing AI annotations. Ready a few minutes after the recording ends."
   - Processing: loader icon, "Ehli is analysing the recording · 60 %", and under the text a 4 px progress bar at 60 % (the file's Progress component if it has one).
   - Error: alert-triangle (warning colour), "Ehli couldn't analyse this recording.", then a link-style small Button "Retry".
   - Ready: check-circle, "Ehli added 2 annotations.", and a small ghost IconButton X on the right.
3 · Three frames: create an instance of "SRV / Side panel" (605:30863), Tab=Annotations, Mode=Debrief, detach ONLY the outer instance (nested instances stay instances). Replace the Fixed top with: "SRV / Annotations toolbar", then 8 px gap, then "SRV / Ehli status" when the frame has one. The scroll area starts 12 px under the fixed top.
   - "SP1f · Ehli processing": toolbar Ehli=Preparing; status Processing; cards: the four Source=You cards only (04:12, 06:05, 07:30, 15:40).
   - "SP1g · Ehli error": toolbar Ehli=Error; status Error; the same four cards.
   - "SP1h · Ehli ready": toolbar Ehli=On ("All annotations · 6"); status Ready; all six cards in recording order (03:05 Ehli, 04:12, 06:05, 07:30, 11:20 Ehli, 15:40).
 - Annotations (category "Interaction"):
   - On the status in SP1h: "Shows only when Ehli has something to say. 'Ready' hides after 5 s or on X; Preparing, Processing and Error stay until the state changes. With nothing to report, only the 32 px toolbar shows."
   - On the toolbar icon in SP1g: "The icon keeps the state visible after the strip is dismissed: sparkle = ready, loader = working, warning = failed."
   - On Processing: "Only if the backend reports progress. Otherwise use Preparing (no number)."
When done: screenshot the three frames and the two component sets. Check the strip never pushes the toolbar, the 16 px side padding is unchanged, and the cards start 12 px under the fixed top in every frame.
```

---

## SP1-fix E · Toolbar as default

Decision (Daniel 10-29): the one-toolbar layout (SP1e + fix D's status strip) becomes the default in "SRV / Side panel". The chip version is parked, not deleted.

**Live recording:** the panel shows no status strip. Ehli's annotations only exist after the recording, so a "Preparing" strip would sit there for the whole sim and take the space this layout saves. The strip appears when the recording stops (Preparing, then Processing, then Ready). The Select's menu tells faculty what to expect.

```
Assumes: Shared rules from this file, and SP1-fix C and D have run. EDITS the component set "SRV / Side panel" (605:30863) in this Section, the annotation text in step 6, and frame SP1h in step 7. Don't touch Section "Fixes".

1 · Park the chip version first: create one instance of each of the two variants ("Tab=Annotations, Mode=Debrief" and "Tab=Annotations, Mode=Live"), detach ONLY the outer instance of each, rename them "Parked · SP1a chips" and "Parked · SP1b chips", and place them in a new row "SP1 · Parked" (32 px bold row title, same as other rows) 400 px below the lowest row in this Section. Add a 16 px muted note above the row: "Chip filters + Ehli switch card. Replaced by the one toolbar on 10-29; kept for comparison."
2 · Variant "Tab=Annotations, Mode=Debrief": replace the whole Fixed top (Ehli switch card + chip row) with an instance of "SRV / Annotations toolbar" (from fix D), Ehli=On ("All annotations · 6"). No status strip (the default state has nothing to report). The scroll area moves up to start 12 px under the toolbar; the six cards stay as they are (incl. fix C's card 6: 15:40 · Good practice).
3 · Variant "Tab=Annotations, Mode=Live": replace the Fixed top with "SRV / Annotations toolbar", Ehli=On, the Select reading "All annotations · 3". No status strip. Cards unchanged (the three Live=Yes cards).
4 · SP1a (605:31256) and SP1b (605:31468) are instances of these variants and update by themselves. Check that no override from the old fixed top is left over (e.g. a hidden Ehli card still taking space).
5 · Annotations (category "Interaction"), on the variants:
   - Debrief, on the toolbar: "Default since 10-29: one 32 px toolbar. The Ehli status strip appears under it only while Ehli is preparing, processing, failed, or just finished (see SP1f–SP1h)."
   - Live, on the toolbar: "No strip during the recording: Ehli's annotations only exist afterwards. The Select's menu says so in its footer: 'Ehli's annotations appear after the recording.'"
   - Delete the old annotations that described the Ehli switch card and the chips.
6 · "SRV / Annotations toolbar": change ONLY the Dev Mode annotation on "Ehli switch (inline)" (all four variants) to: "Turns Ehli's AI annotations on or off. What the switch card used to explain ('2 from Ehli, marked AI') is in the Select menu's footer." Nothing else in that set. Frames SP1c–SP1g stay unchanged.
7 · Scroll fade: it says "more below", so it shows ONLY when the list is longer than the scroll area. In the Debrief variant and in SP1h (621:13448) all six cards now fit, so hide "Scroll fade" in both. Keep it in the Live variant only if its cards overflow (they don't: hide it there too).
8 · In the Debrief variant, rename the 6th card layer "SRV / Annotation card" to "Annotation · 15:40 · Good practice" (same naming as the others).
When done: screenshot the component set, SP1a, SP1b, SP1h and the parked row. Check that SP1a matches SP1h minus the status strip, no fade sits over empty white, and the parked copies look exactly like the old SP1a/SP1b.
```

## QA round 3 (10-29 night, Claude)

C and D checked in the Sidepanel Section (605:31205). E hadn't run yet.

- **C: passes.** Both Ehli card variants have the AI label bottom-right and no text runs under it. The edited card's "AI MODIFIED" sits in the same corner. Card 6 in SP1a is 15:40 · Good practice and matches SP1e.
- **D: passes.** Toolbar (On/Off/Preparing/Error) and status strip (Preparing/Processing/Error/Ready) built as specified. In SP1f–h the strip sits 8 px under the toolbar, the cards start 12 px under it, the side padding is 16 px and every card is 348 px. The three annotations are there.
- **Folded into E (steps 6–8):** the toolbar's switch annotation still points to "the Ehli switch card", which E removes; the scroll fade now sits over empty white in SP1a and SP1h, because the compact tag card made all six fit; card 6's layer name.

## SP2 · Checklist tab

**What it shows:**

| Frame | Mode | What it shows |
|---|---|---|
| SP2a | Debrief | The main view: Ehli on, 5 of 7 answered, Ehli's suggestions with stars, one changed answer, two unanswered |
| SP2b | Live recording | Mid-sim: 4 of 7 answered, the save pill on "Saving…" (a tap just happened). Ehli listens live, so there's no Preparing here |
| SP2c | Debrief | Ehli off: no sparkles, no stars, no "To review" filter |
| SP2d | Debrief | Filtered to "To review 1", with the filter line and Clear |
| SP2 · menu open | | The Select's menu |

**Claude's notes (for Daniel, not for Cursor):**
- **Same toolbar as Annotations:** a Select on the left ("All items · 7"), and the inline Ehli switch on the right. F2's three chips ("All 7 · To review 1 · Unanswered 2") become the Select's menu, so the two tabs look and work the same.
- **The heading stays fixed, above the toolbar:** it carries the save status, which was your F4 flag ("not visible enough"). If it scrolls away, the flag comes back. It's the only exception to the one-toolbar rule, and I wrote it into the shared rules.
- **No status strip on the Checklist:** the assistant listens live, so there's no Preparing or Processing. If Ehli fails mid-sim, that's an Error strip, but it's not built here.
- **Open question for Bence:** can Ehli tell us live that it stopped listening (for example, the audio dropped)? If not, a live Error state is just decoration.

```
Assumes: Shared rules from this file. Adds a row "SP2 · Checklist tab" (32 px bold row title) 400 px below the lowest row in this Section ("SP1 · Parked"); grow the Section's height to fit, plus 120 px bottom padding.
EXCEPTION for this run: you may ADD two variants to the component set "SRV / Side panel" (605:30863). Don't change its existing variants. Never edit Section "Fixes".

1 · Component set "SRV / Checklist toolbar" (first in the SP2 row, label above), 348 × 32, built like "SRV / Annotations toolbar" (621:12636): use instances of the same Select, icon, text and Switch, same spacing. Property Ehli:
   - On: Select "All items · 7" with chevron, right: sparkle + 14 medium "Ehli" + Switch on.
   - Off: Select "All items · 7", "Ehli" in the muted colour, Switch off.
   Accessible name of the switch: "Ehli checklist assistant".

2 · Two new variants in "SRV / Side panel" (605:30863), same anatomy and size as the Annotations variants, Tab=Checklist:
   Tabs: "SRV / Side panel tabs" with Active = Checklist.
   Fixed top: "SRV / Checklist heading" (565:29372), 12 px gap, then "SRV / Checklist toolbar". No status strip.
   Scroll area: "SRV / Checklist item" (565:28998) instances, 8 px apart, in item order. Override the number and the title text only.
   - Variant "Tab=Checklist, Mode=Debrief": heading Save=Saved, "5 of 7 answered". Toolbar Ehli=On. Items:
     1. Answer=Yes, Ehli=Suggested, Stars=3: "1  Performs hand hygiene and introduces self"
     2. Answer=Yes, Ehli=None: "2  Takes a full set of vital signs"
     3. Answer=Yes, Ehli=Suggested, Stars=3: "3  Recognizes SIRS criteria"
     4. Answer=No, Ehli=Changed, Stars=2: "4  Escalates the lactate result to the provider"
     5. Answer=Yes, Ehli=Suggested, Stars=1: "5  Starts IV fluids as ordered"
     6. Answer=Unanswered: "6  Draws blood cultures before antibiotics"
     7. Answer=Unanswered: "7  Uses SBAR in the handoff"
   - Variant "Tab=Checklist, Mode=Live": heading Save=Saving, "4 of 7 answered". Toolbar Ehli=On. Items 1–4 as above; items 5, 6 and 7 Answer=Unanswered.
   Seven items fit, so hide "Scroll fade" if you reused it (the fade only shows when the list overflows).

3 · In the SP2 row, after the toolbar set (160 px gaps, label above each):
   - "SP2a · Checklist · Debrief": instance of the Debrief variant.
   - "SP2b · Checklist · Live recording": instance of the Live variant.
   - "SP2c · Checklist · Ehli off": instance of the Debrief variant, detach ONLY the outer instance. Toolbar Ehli=Off. Every item becomes Ehli=None with the same answer (item 4 Answer=No, Ehli=None, so no "Changed from Ehli's Yes" line).
   - "SP2d · Checklist · To review": instance of the Debrief variant, detach ONLY the outer instance. Select reads "To review · 1". Directly under the toolbar (8 px), a 12 px muted line "Filtered by To review · " followed by a link-style "Clear". Then only item 5. Under it, 16 px, a 12 px muted line: "Ehli answers with 1 star that you haven't checked yet."
   - "SP2 · menu open" (280 px wide, like "SP1e · menu open" 613:13234, reuse its menu structure): heading "SHOW" with radio rows "All items 7" (selected), "To review 1", "Unanswered 2", divider, a 12 px muted footer "5 answers suggested by Ehli. Stars show how sure Ehli is."

4 · Annotations (category "Interaction"):
   - On the Debrief variant's toolbar: "Same toolbar as Annotations. F2's three chips are now the Select's menu."
   - On the Debrief variant's heading: "Stays fixed above the toolbar: it carries the save status (Daniel's F4 flag)."
   - On SP2b's heading: "Every tap saves. The pill shows Saving… while the request is out."
   - On SP2c's toolbar: "Off hides the sparkles, the stars and the 'To review' option. Answers stay as they are."
   - On the menu's "To review": "Ehli answers with 1–2 stars that the instructor hasn't touched yet."

When done: screenshot the toolbar set, both new variants, SP2a–SP2d and the menu. Check that the tab bar, the 16 px side padding and the toolbar's position look the same as in SP1a (the heading pushes the toolbar down; nothing else moves), every item is 348 px wide, and SP1a/SP1b are unchanged.
```

## After this runs

- Send Claude the Sidepanel Section link for a QA round.
- Then the next tab: SP3 · Chapters (F7/F9 chapters + the toolbar with the Ehli Preparing status).
