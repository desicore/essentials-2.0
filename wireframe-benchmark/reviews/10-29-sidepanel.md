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
8. **SP3** (Chapters tab), after SP2 (done and QA'd 11-02). Model: **Claude Opus 5.5 · Medium**. Same reason as SP2: new variants in the shared set, plus one main-component fix.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP3 · Chapters tab".`
9. **SP4** (Transcript tab), after SP3 (done and QA'd 11-02). Model: **Claude Opus 5.5 · Medium**. New variants in the shared set, and the content has a sticky header and a scroll cut to get right.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP4 · Transcript tab".`
10. **SP1-fix F** (lighter timestamps on annotation cards and chapter rows), after SP4 (done and QA'd 11-02). Model: **Claude Opus 5.5 · Medium**. It edits two main components across about 12 variants that every side panel frame uses.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix F · Timestamps".`
11. **SP1-fix G** (the three fixes from the whole-panel review, plus the Checklist toolbar moving to the top), after F (done and QA'd 11-03). Model: **Claude Sonnet 5.5 · Medium**. These are small, well-specified edits to three existing components, with no layout decisions left.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix G · Panel consistency".`
12. **SP1-fix H** (the AI label goes bottom-right on checklist items too), only AFTER G is done, because it moves what G builds. Model: **Claude Sonnet 5.5 · Medium**. It's one component with three variants.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix H · AI label position".`
   *Ran 11-03, then rejected by Daniel (it looked off). Replaced by I.*
13. **SP1-fix I** (Option B: the AI label sits next to the information it marks, on the left), after G and H. Model: **Claude Sonnet 5.5 · Medium**. Two components, five variants, with Daniel's reference frames to match.
   `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1-fix I · AI label inline".`

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
   1 · Fixed top (doesn't scroll): ONE 32 px toolbar: the tab's filter or search on the left, the inline Ehli control (icon + "Ehli" + Switch) on the right when the tab has one. Directly under it (8 px), the "SRV / Ehli status" strip, ONLY while Ehli has something to report (Preparing, Processing, Error, Ready). No Ehli switch cards (decided 10-29, Daniel: SP1e's one toolbar is the default). Checklist only: its heading ("SRV / Checklist heading", with the save status) also sits in the fixed top so the save status stays visible. It goes BELOW the toolbar with a 12 px gap, so the toolbar and Ehli switch stay at the top as on every other tab (changed 11-03, Daniel; it used to sit above).
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

## SP2 QA (11-02, Claude)

Passes. Structure, the seven item states, the fixed heading + toolbar, Ehli off, the filtered view and the menu all match; SP1 is unchanged. Two nits in SP2d's filter line, fixed directly by Claude: "Clear" is now the same underlined link as "Retry" in the save pill (12 medium), and the double gap after "·" is gone.

---

## SP3 · Chapters tab

**What it shows:**

| Frame | Mode | What it shows |
|---|---|---|
| SP3a | Debrief | The main view: Ehli on, five chapters, "Spotting deterioration" is the current one |
| SP3b | Live recording | No chapters yet: an empty state that says when they come. No status strip, same rule as Annotations |
| SP3c | Debrief | Right after the recording: Ehli processing, skeleton rows under the strip |
| SP3d | Debrief | Ehli off: "Chapters are off" empty state |

**Claude's notes (for Daniel, not for Cursor):**
- **Toolbar without a filter:** five chapters don't need one. The left side shows "5 chapters · 18:42", so the toolbar keeps the same shape and the Ehli control stays in the same spot on all three tabs.
- **Live is an empty state, not a strip:** on Annotations the strip would have taken space from your own annotations. Here the whole tab is empty during the sim anyway, so the empty state says it once, in the middle: "Chapters come after the recording."
- **I reused "SRV / Ehli status"** with chapter wording as text overrides, instead of a second status component. If that turns into a problem in the library, it gets a `Feature` property later.
- **F9 fix still open:** the Current row's dark bar sits outside the highlighted fill (R2 fix 3 didn't land). It's in this run as step 1.

```
Assumes: Shared rules from this file. Adds a row "SP3 · Chapters tab" (32 px bold row title) 400 px below the SP2 row; grow the Section's height to fit, plus 120 px bottom padding.
EXCEPTIONS for this run: you may ADD two variants to "SRV / Side panel" (605:30863), and EDIT the main component "SRV / Chapter row" (570:56166) in Section "Fixes" as in step 1 only. Nothing else in "Fixes".

1 · "SRV / Chapter row" (570:56166), State=Current: the 2 px dark bar sits outside the row, about 8 px left of the highlighted fill. Put it INSIDE the row: absolute-positioned, x 0, full row height, flush with the fill's left edge, so the row's 8 px radius clips it (clip content on). The row stays 348 × 40.

2 · Component set "SRV / Chapters toolbar" (first in the SP3 row, label above), 348 × 32, built like "SRV / Annotations toolbar" (621:12636): same icon, text and Switch instances, same spacing, Ehli control right-aligned. On the LEFT, instead of the Select, 14 regular text. Property Ehli:
   - On: left "5 chapters · 18:42" (foreground). Sparkle + "Ehli" + Switch on.
   - Off: left "Chapters" (muted). Sparkle, "Ehli" muted, Switch off.
   - Preparing: left "Chapters" (muted). Loader icon instead of the sparkle, Switch on.
   - Error: left "Chapters" (muted). Alert-triangle in the warning colour, Switch on.
   Accessible name of the switch: "Ehli AI chapters".

3 · Two new variants in "SRV / Side panel" (605:30863), same anatomy and size as the others, Tab=Chapters. Tabs: Active = Chapters. Fixed top: "SRV / Chapters toolbar". No status strip.
   - "Tab=Chapters, Mode=Debrief": toolbar Ehli=On. Scroll area: five "SRV / Chapter row" instances, 4 px apart (rows, not cards): "00:00 Briefing · 2 min", "01:30 Initial assessment · 3 min", "04:10 Spotting deterioration · 3 min" (State=Current), "07:30 Fluid resuscitation · 5 min", "12:20 SBAR handoff · 6 min". Hide the scroll fade.
   - "Tab=Chapters, Mode=Live": toolbar Ehli=On, left text "Chapters" (muted) as an override. Scroll area: the same empty-state structure as F9's Off panel (570:56422), centred vertically in the scroll area: list-video icon, 14 medium "Chapters come after the recording", 12 px muted "Ehli splits the recording into chapters a few minutes after it ends."

4 · In the SP3 row, after the toolbar set (160 px gaps, label above each):
   - "SP3a · Chapters · Debrief": instance of the Debrief variant.
   - "SP3b · Chapters · Live recording": instance of the Live variant.
   - "SP3c · Chapters · Ehli processing": instance of the Debrief variant, detach ONLY the outer instance. Toolbar Ehli=Preparing, left "Chapters". Under it (8 px) an "SRV / Ehli status" (621:12698) instance, State=Processing, text override "Ehli is splitting the recording into chapters · 60 %". Scroll area 12 px under the strip: five skeleton rows instead of the chapter rows (reuse the skeleton rows from F9's Preparing panel 570:56446).
   - "SP3d · Chapters · Ehli off": instance of the Debrief variant, detach ONLY the outer instance. Toolbar Ehli=Off. Scroll area: F9's Off empty state (list-video icon, "Chapters are off", 12 px muted "Turn on Ehli to split the recording into chapters."), centred vertically.

5 · Annotations (category "Interaction"):
   - On the Debrief variant's toolbar: "Same toolbar as the other tabs; no filter needed for five chapters. The Ehli control stays in the same place on every tab."
   - On the Current row: "Click a row to jump the playback to the chapter's start. 'Current' follows the playhead."
   - On SP3b's empty state: "No status strip during the recording (same rule as Annotations). The whole tab is empty anyway, so the empty state says when chapters come."
   - On SP3c's strip: "Then 'Ehli added 5 chapters.' (Ready) for 5 s, as on Annotations (SP1h)."
   - On SP3d's toolbar: "Off also removes the chapter headers from the Transcript tab."

When done: screenshot 570:56166 (Current), the toolbar set, both new variants, SP3a–SP3d. Check that the Current row's bar is inside the fill, the toolbar sits at the same y as on SP1a, the 16 px side padding is unchanged, every row is 348 px wide, and SP1/SP2 frames are unchanged.
```

## SP3 QA (11-02, Claude)

Passes after one fix. The Current-row bar now sits inside the fill (R2 fix 3, finally done), the toolbar has all four states, the two new variants and SP3a–SP3d match the spec, and the annotations are there. The rows below SP1 moved down because "SRV / Side panel" now has six variants (it ends at y 2828); the 400 px row gaps are intact, so that's expected.

- **Fixed directly by Claude:** in SP3a the five time pills had the play icon turned off (Icon=false on the instance), like a live time. In debrief the times jump the playback, so the icon is back on. The variant itself was right.

## SP4 · Transcript tab

**What it shows:**

| Frame | Mode | What it shows |
|---|---|---|
| SP4a | Debrief | The main view: chapter headers, anonymous speakers, the segment playing now highlighted, the list cut at the bottom (it scrolls) |
| SP4b | Live recording | No transcript yet: an empty state, same pattern as SP3b |
| SP4c | Debrief | Search "lactate", 1 of 2, the active match highlighted |
| SP4d | Debrief | Ehli chapters off (SP3d): the same transcript without chapter headers |
| SP4e | Debrief | Right after the recording: the status strip and skeleton segments |

**Claude's notes (for Daniel, not for Cursor):**
- **The search is the toolbar:** this tab has no Ehli switch, so the search takes the toolbar's full width (F10's search with its counter and up/down). The toolbar is still one 32 px row in the same place, so the panel doesn't jump between tabs.
- **Chapters off = no headers:** the transcript doesn't have its own switch, it follows the Chapters tab. SP4d shows that link, so nobody wonders where the headers went.
- **Preparing uses the same status strip:** I reused "SRV / Ehli status" with transcript wording, so "processing after the recording" looks the same on Annotations, Chapters and Transcript. Open question: is the transcript an Ehli feature or a base feature? If it's base (no AI subscription), the strip still fits, as it has no sparkle.
- **Sticky header:** the current chapter's header stays at the top of the scroll area while the segments scroll under it. In SP4a the playhead is in "Initial assessment", so that header sits at the top.

```
Assumes: Shared rules from this file. Adds a row "SP4 · Transcript tab" (32 px bold row title) 400 px below the SP3 row; grow the Section's height to fit, plus 120 px bottom padding.
EXCEPTION for this run: you may ADD two variants to "SRV / Side panel" (605:30863). Never edit Section "Fixes".
Content source: F10's component set "SRV / Transcript panel" (570:55633) in "Fixes". Rebuild its content in the side panel anatomy with NEW instances of the same components ("SRV / Transcript search" 570:55170, "SRV / Transcript chapter header" 570:55527, "SRV / Transcript segment" 570:55482), same order and copy. Don't instance the F10 panel itself.

1 · Two new variants in "SRV / Side panel", same anatomy and size as the others, Tab=Transcript. Tabs: Active = Transcript.
   Fixed top: ONE 32 px row holding "SRV / Transcript search" at full width (348), vertically centred. No Ehli control on this tab. No status strip.
   - "Tab=Transcript, Mode=Debrief": search State=Empty. Scroll area: the content of F10's State=Playing (570:55634): header "Initial assessment 01:30–04:10" at the top, its segments (03:05 State=Current), header "Spotting deterioration 04:10–07:30", its segments, and on until the list runs past the bottom. Cut + the 32 px scroll fade at the bottom (this list really overflows, so the fade stays).
   - "Tab=Transcript, Mode=Live": search State=Empty with the input disabled and the IconButtons disabled. Scroll area: the empty-state structure of SP3b (icon, 14 medium title, 12 px muted line), centred vertically, with a file-text icon (or the closest transcript icon), "The transcript comes after the recording", "Ready a few minutes after the recording ends."

2 · In the SP4 row (160 px gaps, label above each):
   - "SP4a · Transcript · Debrief": instance of the Debrief variant.
   - "SP4b · Transcript · Live recording": instance of the Live variant.
   - "SP4c · Transcript · Search": instance of the Debrief variant, detach ONLY the outer instance. Search State=Results ("lactate", "1 of 2"). Same list with the matches as in F10's State=Search (570:55773): the 03:05 segment State=Active match, the 04:12 segment State=Match. No Current highlight in this frame (the active match replaces it).
   - "SP4d · Transcript · Chapters off": instance of the Debrief variant, detach ONLY the outer instance. Delete the chapter headers, keep the segments in the same order (as F10's State=No chapters 570:55920). The 03:05 segment stays Current.
   - "SP4e · Transcript · Ehli processing": instance of the Debrief variant, detach ONLY the outer instance. Search disabled (State=Empty, input and IconButtons disabled). Under the toolbar (8 px), an "SRV / Ehli status" (621:12698) instance, State=Processing, text override "Transcribing the recording · 60 %". Scroll area 12 px under the strip: the skeleton segments from F10's State=Preparing (570:56050). Remove F10's old muted line "The transcript is ready…": the strip replaces it.

3 · Annotations (category "Interaction"):
   - On the Debrief variant's search: "No Ehli switch on this tab, so the search takes the toolbar's full width. Enter = next match, Shift+Enter = previous."
   - On the first chapter header: "Sticky: the current chapter's header stays at the top while the segments scroll under it."
   - On a segment's time: "In debrief, click to jump the playback there. The Current segment follows the playhead."
   - On "Speaker 1": "No names or faces: speakers stay anonymous (GDPR, name + biometrics need per-person consent)."
   - On SP4d's list: "Chapter headers come from Ehli's chapters. With chapters off (SP3d) the transcript is one continuous list."
   - On SP4e's strip: "Same strip as Annotations and Chapters. Search is disabled until the transcript is ready."

When done: screenshot both new variants and SP4a–SP4e. Check the toolbar row sits at the same y as on SP1a–SP3a, the 16 px side padding and 348 px width hold for every segment and header, the fade shows only in the frames whose list overflows, and the SP1–SP3 frames are unchanged.
```

## SP4 QA (11-02, Claude)

Passes, no fixes. Eight variants in "SRV / Side panel"; the search row sits at the same y as on SP1a–SP3a; every segment and header is 348 px; the fade shows only where the list overflows (SP4a, SP4c); SP4b and SP4e have the right copy; SP4d has no headers.

## SP1-fix F · Timestamps

Decided with Daniel 11-03 (grilling round). References on page "Dashboard + SRV [Drafts] (D)": 747:22297 (Live), 747:22437 (Debrief at rest), 747:22342 (Debrief hover).

| Decision | |
|---|---|
| Why | The grey play pill on every card is visual weight that competes with the annotation text |
| Live | The time is flush plain text and does nothing (as today) |
| Debrief | Astryx Ghost button, SM, 28 px, the 1 px border token, **no fill at rest**, no play icon. Hover adds a see-through fill on top; focus adds the focus ring. Hover and focus are annotations, not variants (component library later) |
| Ehli cards | Same rule: the 10-29 white pill fill goes. If the border is too faint on the grey card, the fix is a stronger border, not a fill |
| Clicks | Clicking the time jumps the playback. Clicking the rest of your card opens editing. Ehli cards edit only via "…" → Edit (as today) |
| Chapters | Same time button in "SRV / Chapter row"; the row hover stays |
| Transcript | No change: monospace underlined links |
| Touch | Out of scope: tablet components with 44 px targets come later. Desktop stays 28 px |
| Not chosen | ButtonGroup for the checklist Yes/No (11-02): keep the separate buttons; the 8 px gap isn't worth it |

```
Assumes: Shared rules from this file. EXCEPTION for this run: you may EDIT these main components in Section "Fixes" in place: "SRV / Annotation card" (565:29411) and "SRV / Chapter row" (570:56166). Don't rename variants, don't add variants. Nothing else in "Fixes".
Reference frames (read-only) on page "Dashboard + SRV [Drafts] (D)": 747:22297 (Live), 747:22437 (Debrief at rest), 747:22342 (Debrief hover).

1 · "SRV / Annotation card", every variant with Live=No (Comment · You, Tag only Default and Hover, Editing, Comment · Ehli, Edited · Ehli): the "Time pill" becomes the time button of 747:22437:
   - Swap it to the Button "Variant=Ghost, Size=SM, State=Rest, Type=Default" (the same main 747:22437 uses). Icon = off (no play icon). Keep the monospace time label as it is.
   - Add a 1 px inside stroke bound to the border colour variable (the same one 747:22437 uses). No fill.
   - On the two Source=Ehli variants, delete the white fill and the stroke added on 10-29 (R2 fix 2); they follow the same rule as the others.
   - Nothing else moves: the row stays time, 8 px, tag chip, spacer, "…".
2 · "SRV / Annotation card", the Live=Yes variants: no change (flush plain text, as 747:22297). Check they really have no box.
3 · "SRV / Chapter row" (570:56166), all three states (Default, Hover, Current): the same swap as step 1 (Ghost, Icon off, 1 px border, no fill). The row's own hover and current fills stay. The Current bar stays inside the row.
4 · SP3a (711:26825) has an instance override that turns the time pill's icon ON (Claude's 11-02 fix). Reset that override on its five chapter rows so they follow the main component (no icon).
5 · Annotations (category "Interaction"). Delete the old one on the time pill ("In debrief, the time jumps the playback there…") wherever it sits on the main component, then add:
   - On the time in "Type=Comment, Live=No, Source=You": "Rest: Ghost button + border, no fill, no play icon. Hover: a see-through fill on top (foreground ≈ 6–8 %, tuned in the UI stage). Focus: + focus ring. Click or Enter jumps the playback here. Separate target: clicking the rest of the card opens editing."
   - On the time in "Type=Comment, Live=Yes": "Live: plain text, no hover, not focusable. There's nothing to jump to yet."
   - On "Type=Comment, Live=No, Source=Ehli": "The time jumps like on your cards. Clicking the card body does nothing: edit via '…' → Edit, because editing turns it into your annotation."
   - On the time in "SRV / Chapter row", State=Default: "Same time button as the annotation cards. Clicking the row or the time jumps to the chapter's start."

When done: screenshot 565:29411 and 570:56166, then SP1a (605:31256), SP1b (605:31468), SP1h (621:13448) and SP3a (711:26825). Check: no play icon on any Debrief time, no fill at rest, the border visible on the grey Ehli cards, the Live times still flush plain text, the tag chips haven't moved, and the cards and rows are still 348 px wide. The parked SP1 copies change too (their cards are instances); that's fine.
```

## SP1-fix F QA (11-03, Claude)

Passed. Every Debrief time (7 card variants, 3 chapter-row states) is Ghost SM Rest with Icon off, no fill, and a 1 px inside stroke on var 3362:0. Live times are flush text. All 348 px wide. The border reads on the grey Ehli cards and on the Current/Hover chapter rows. The SP3a override is gone: its five rows are back on the component default. The four new annotations are in place and the old time-pill note is gone.

Fixed directly: the annotation labels on the Drafts page showed literal HTML entities (`&#39;`, `&gt;`), which is an old bug and not just F's. I decoded them on 49 nodes; the text is unchanged.

## After this runs

- ~~Send Claude the Sidepanel Section link for a QA round.~~ Done (F QA above).
- ~~Whole-panel review.~~ Done, see below.

## Whole-panel review (11-03, Claude)

Compared the four Debrief variants of "SRV / Side panel" (605:30863) side by side.

**Holds as one panel:** the toolbar sits at y 56 and is 32 px tall on all four. The scroll area starts 12 px under the fixed top (Checklist's heading exception included). Everything is 348 px wide. The type uses only two sizes, 14 and 12. Times are always monospace, and the fade shows only on Transcript, the one tab that overflows.

**Findings, most important first:**
1. **Checklist breaks the two-Ehli-symbols rule.** Ehli's answers show a sparkle inside the Yes button. By our rule the sparkle means the feature and the round AI label means content Ehli generated, and an answer is content. Proposal: drop the sparkle from the button and put the AI label in front of the stars ("AI ★★★"). As a side effect, the Yes button goes back to a plain label, which also gives back some of the width the ButtonGroup idea was after.
2. **Grey fill means three things.** It marks Ehli content (annotation cards), the current playback spot (chapter row, transcript segment) and a section header (transcript). The current spot is also drawn two ways: Chapters uses bar + fill, Transcript's current segment uses fill only. Proposal: Current = bar + fill everywhere, which means adding the bar to the transcript segment's Current state. The bar is then what says "now playing". Ehli cards keep their grey (R2); real colour comes in the UI stage.
3. **Transcript search is 28 px tall, the selects are 32 px.** When you switch tabs, the toolbar control changes height. Proposal: make the search 32 px.
4. *Note only:* where the content starts differs by tab: Checklist at 16, chapter and transcript rows at 24 (8 px inner padding for their hover fill), card text at 28. Each comes from its container and reads fine, so no change.
- Then a look at the whole panel together: the four Debrief variants side by side, checking the tabs read as one panel (toolbar position, type scale, spacing).

## SP1-fix G · Panel consistency

From the whole-panel review (11-03), approved by Daniel, plus his Fix [AI] annotation on SP2a's Fixed top (fix 4). Four fixes:

| # | Fix | Why |
|---|---|---|
| 1 | Checklist: no sparkle in the Yes button; the AI label goes in front of the stars | Sparkle = the Ehli feature, AI label = content Ehli made. An answer is content. |
| 2 | Transcript segment Current: add the chapter row's Current bar | "Playing now" = bar + fill on every tab; grey alone also means Ehli cards and headers. |
| 3 | Transcript search: 32 px tall | Matches the 32 px selects, so the toolbar keeps its height across tabs. |
| 4 | Checklist: toolbar on top, heading under it | The Ehli switch sits at the top on every other tab. The heading stays fixed, so the save status stays visible. |

```
Assumes: Shared rules from this file. EXCEPTION for this run: you may EDIT these main components in place, in Section "Fixes": "SRV / Checklist item" (565:28998), "SRV / Transcript segment" (570:55482), "SRV / Transcript search" (570:55170); and in this Section, the two Checklist variants of "SRV / Side panel" (605:30863): Tab=Checklist, Mode=Debrief (633:32565) and Mode=Live (633:32980). Don't rename variants or properties. Don't touch any other component.

1 · "SRV / Checklist item", the variants with Ehli=Suggested or Ehli=Changed:
   - Every Yes/No Button: Icon off (no sparkle). Labels, variants and 56 px widths stay.
   - In the "Meta" row (the stars): put an "SRV / AI label" instance, Type=AI, 14 × 14 (same as on "SRV / Timeline marker", Type=Ehli), BEFORE the stars, 4 px gap, centre-aligned. Item text and "Changed from Ehli's Yes" are unchanged.
   - Ehli=None variants: no change.
2 · "SRV / Transcript segment", State=Current only: add a "Current bar" exactly like the one in "SRV / Chapter row", State=Current (570:56210): a 2 px rectangle, absolute position, x 0, constraints Left + Top & Bottom (stretch), same fill (same variable), inside the segment's fill. Nothing else in the segment moves.
3 · "SRV / Transcript search", all 3 states: set the Input to size md and both IconButtons to the Size one step up from SM, so the row is 32 px tall. If md doesn't give a 32 px field, stop and report the height instead of forcing it with a resize. The counter text stays.
4 · Annotations: in the SP2 row and in Section "Fixes", find every annotation that mentions "sparkle" in the checklist context and reword it to "AI label" (e.g. SP2c's toolbar: "Off hides the AI labels, the stars and the 'To review' option. Answers stay as they are."). Leave the sparkle wording on toolbars and the Ehli switch alone: the sparkle still means the feature there.
5 · Checklist order (Daniel's Fix [AI] annotation on SP2a's Fixed top): in the "Fixed top" of both Checklist variants (633:32565, 633:32980), swap the order. "SRV / Checklist toolbar" goes first, then "SRV / Checklist heading", 12 px gap (unchanged). The toolbar now sits at y 56 like on the other tabs, and the scroll area still starts 12 px under the fixed top.
   - SP2a and SP2b are instances and follow automatically.
   - SP2c (634:33370) and SP2d (634:33575) are detached frames: make the same swap in their own "Fixed top" (634:33373, 634:33578). In SP2d, the "Toolbar + filter" group moves up as one piece, so the filter line stays right under its toolbar, then the heading.
   - "SP2 · menu open" (634:34113): move the open menu up so it keeps the same offset from the Select as before, now that the Select is at the top.
   - The annotation on SP2a's Fixed top: set its category to "Fix [AI] DONE". Keep the text.

When done: screenshot 565:28998, 570:55482, 570:55170, then "SRV / Side panel" Tab=Checklist, Mode=Debrief (633:32565) and Tab=Transcript, Mode=Debrief (734:26610), plus SP2a (634:32810), SP2d (634:33575), SP2 · menu open (634:34113) and SP4c (734:27459). Check: no sparkle in any checklist button, the AI label sits in front of the stars on items 1, 3, 4 and 5, the transcript Current segment shows the bar like the Current chapter row, the search row is 32 px and still 348 wide, the Checklist toolbar is at y 56 (same as the other tabs) with the heading 12 px under it, the menu hangs from the Select, and the scroll areas still start 12 px under the fixed top.
```

## SP1-fix H · AI label position

Daniel, 11-03: on annotation cards the AI label sits bottom-right, but G puts it bottom-left on checklist items (in front of the stars, under the item text). That's inconsistent.

**Rule:** Ehli's mark always sits bottom-right, at the end of what Ehli made. On a card, that's the whole card. On a checklist item, it's the answer, so "AI ★★★" moves under the Yes/No buttons, right-aligned. It then sits at the same bottom-right spot as on the cards, next to the answer it describes. Items with one line of text grow by about 10 px. That's fine.

```
Assumes: Shared rules from this file, and SP1-fix G already done. EXCEPTION for this run: you may EDIT the main component "SRV / Checklist item" (565:28998) in Section "Fixes". Nothing else.

1 · Variants with Ehli=Suggested (Stars=3 and Stars=1): take the "Meta" row (AI label 14 × 14 + stars, 4 px gap, from G) out of the text column, so the item text column holds only the text. Turn "Answer" into a vertical column: the Yes/No row (unchanged), then the Meta row, 4 px gap, right-aligned (its right edge flush with the No button). Keep the item's top alignment: the buttons stay level with the first text line.
2 · Variant Ehli=Changed (Stars=2): same move. In its "Answer column", the order becomes: the Yes/No row, the Meta row (AI label + stars), then "Changed from Ehli's Yes". 4 px gaps, everything right-aligned.
3 · Ehli=None variants: no change.
4 · Annotation on "Answer=Yes, Ehli=Suggested, Stars=3": "Ehli's mark sits bottom-right like on annotation cards: the AI label and its confidence stars, under the answer Ehli gave."

When done: screenshot 565:28998, "SRV / Side panel" Tab=Checklist, Mode=Debrief (633:32565), SP2a (634:32810) and SP2c (634:33370). Check: on items 1, 3, 4 and 5 the AI label + stars sit right-aligned under the buttons, there's nothing under the item text, the buttons haven't moved sideways, the item text didn't get narrower, and SP2c (Ehli off) shows no labels or stars.
```

## SP1-fix I · AI label inline

Daniel, 11-03: H's result (908:23494) is consistent but looks off: the AI label and stars hang under the buttons with nothing to attach to. He explored three options (908:24442) and picked **Option B**.

| Decision | Why |
|---|---|
| **Rule:** the AI label sits on the same line as the information it marks, on the left. It replaces H's "always bottom-right". | Position alone was the wrong rule. The label belongs with what it describes. |
| Checklist: AI label + stars under the item text (back to G's position) | Label and stars are one piece of information ("Ehli says Yes, this confident"). The buttons stay clean. |
| Option A rejected: the AI label under the No button | It reads as "Ehli said No", but Ehli said Yes. |
| Option C rejected: the AI label on its own line under the card text | It adds 18 px per card for a lone badge. |
| Card: AI label right after the time, 4 px gap, centred on the time button | You see the card is from Ehli on its first line. The grey fill already hints at it, and the label confirms it. 4 px apart, it reads as a badge, not part of the clickable time. |
| Edited Ehli card: "AI modified" moves next to the time too; the author line becomes just the name | Otherwise Ehli's mark would sit in a different place depending on whether the card was edited. |

```
Assumes: Shared rules from this file, and SP1-fix G + H already done. EXCEPTION for this run: you may EDIT the main components "SRV / Checklist item" (565:28998) and "SRV / Annotation card" (565:29411) in Section "Fixes". Nothing else.
References (read-only, Daniel's): checklist item = "Option B - Ehli 3 – impaccable" (908:24285); card = "Option B - Annotation · 03:05 · Ehli" (908:24318). Match them.

1 · "SRV / Checklist item", the three variants with Ehli=Suggested or Ehli=Changed (565:28995, 565:28996, 565:28997): undo H's move.
   - Move the "Meta" row (AI label 14 × 14 + stars, 4 px gap) back into the "Text" frame, under the item text, left-aligned. Spacing as in 908:24285.
   - Ehli=Suggested: the "Answer column" holds only the Yes/No row again. Remove the empty wrapper if H added one (907:27252, 907:27253), so "Answer" sits directly in the item row, top-aligned with the first text line as before H.
   - Ehli=Changed: "Answer column" = the Yes/No row, then "Changed from Ehli's Yes" (4 px gap, right-aligned). No Meta row there.
   - Replace H's annotation on "Answer=Yes, Ehli=Suggested, Stars=3" with: "The AI label sits with the stars it qualifies, under the item text: Ehli's answer and its confidence. Same rule as on the cards: the label goes next to what it marks."
2 · "SRV / Annotation card", "Type=Comment, Live=No, Source=Ehli" (570:55569):
   - Row 1: wrap "Time pill" and a NEW "SRV / AI label" (Type=AI, 16 × 16) in a horizontal auto-layout "Time + AI", 4 px gap, centre-aligned. Row 1 = "Time + AI", Spacer, "…".
   - Content row: delete the old AI label (609:31492). The text fills the full width again (322).
3 · "SRV / Annotation card", "Type=Edited, Live=No, Source=Ehli" (570:55599):
   - Row 1: same "Time + AI" wrapper, with the AI label Type=AI modified moved here from the author row (609:31497). Row 1 = "Time + AI", Tag, Spacer, "…". Keep the 8 px gap before the tag.
   - Author row: only "Dr. Maya Ortiz" is left.
4 · Annotation on "Type=Comment, Live=No, Source=Ehli": add one line at the end of the existing text: "The AI label sits right after the time, so you can tell the card is from Ehli on its first line."

When done: screenshot 565:28998, 565:29411, then SP1a (605:31256), SP1h (621:13448) and SP2a (634:32810). Check: the checklist AI label + stars are under the text on items 1, 3, 4 and 5 and nothing hangs under the buttons; the card AI label is 4 px after the time on both Ehli cards and gone from the content row and author line; card widths are 348; the Ehli card text wraps at the full width; SP2c (Ehli off) shows no labels or stars.
```

## SP1-fix G + I QA (11-03, Claude)

Passed, nothing for Cursor to fix.
- **G1 + I1 Checklist:** no sparkle in any button. On items 1, 3, 4 and 5 the AI label + stars sit under the item text. Item 4 keeps "Changed from Ehli's Yes" under the buttons. H's wrappers are gone.
- **G2 Transcript:** the Current segment has the bar (2 px, absolute, stretch, bound fill), the same as the Current chapter row.
- **G3 Search:** all 3 states are 32 px tall (Input md, IconButtons MD), 348 wide.
- **G5 Checklist order:** the toolbar is at y 56 in both variants, SP2c and SP2d, with the heading 12 px under it. SP2d's filter line stays with its toolbar. Daniel's annotation is set to Fix [AI] DONE.
- **I2–I3 Cards:** the AI label is 4 px after the time on both Ehli cards. "AI modified" sits before the Discuss tag. The text runs the full width, and the author line is just the name.
- **Fixed directly by Claude:** two stale annotations still said "sparkle" for Ehli content (Timeline marker Type=Ehli, and "Annotations · Ehli on (mixed)"). Both now say AI label. Also tidied blank lines in the Ehli card's annotation.
- **Correction to the F QA note:** the `&#39;` in annotation labels is how the Plugin API returns apostrophes. Writing a plain `'` reads back as `&#39;` again, so my 11-03 "fix" on 49 nodes most likely changed nothing, and the labels probably display fine in Figma.
