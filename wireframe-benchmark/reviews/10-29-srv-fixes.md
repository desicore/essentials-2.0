# 10-29 · SRV fixes round (element-level)

Source: Daniel's `Fix [AI]` Dev Mode annotations on the SRV v3 frames (read 10-29), plus the DDC feedback of 10-27 and 10-28 (vault: `wiki/work/essentials-2.0-srv-feedback-tracker.md`).

Target: Figma file **IMSH-MVP** (`dbJVpAusLJCtreiz0jlEh3`), page **"Dashboard + SRV (D)"** (305:18292).

This round only fixes **elements**, not whole screens. Each fix becomes a local component (or component set) in a new Section **"Fixes"**, shown next to a clone of the flagged element as it is today. When every fix is approved, a later round puts the components back into the full flow.

## How to run

1. **One chat first:** `Read @wireframe-benchmark/reviews/10-29-srv-fixes.md. Apply "Shared rules", then run ONLY section "F0 · Fixes section".`
2. **Then F1–F6 in parallel, one Cursor chat each.** Each one writes only inside its own row, so they don't collide:
   - `Read @wireframe-benchmark/reviews/10-29-srv-fixes.md. Apply "Shared rules", then run ONLY section "F1 · Side panel tabs".`
   - `… run ONLY section "F2 · Ehli filter".`
   - `… run ONLY section "F3 · Checklist item".`
   - `… run ONLY section "F4 · Save status".`
   - `… run ONLY section "F5 · Layout & audio at the top".`
   - `… run ONLY section "F6 · Annotation cards".`

3. **Round 2 (Ehli, transcript, chapters; added 10-29 afternoon):**
   - One chat first: `… run ONLY section "F0b · Rows F7–F10".`
   - Then in parallel: `… run ONLY section "F7 · Ehli switch".` and `… run ONLY section "F10 · Transcript tab".`
   - When F7 is done, in parallel: `… run ONLY section "F8 · Ehli annotations".` and `… run ONLY section "F9 · Chapters tab".` (both use F7's switch).

High is enough. Rerun a section on Extra High only if it comes back broken. After a fix is approved, switch the original flag's category to `Fix [AI] DONE` yourself (the prompts never touch the v3 frames).

## The flags and what each fix does

| # | Flag (Daniel, 10-29) | Where | Fix |
|---|---|---|---|
| F1 | "Remove the no. of annotations badge" | E1 tab bar (the badge "2") | Tabs without the count. The count stays in the "All n" filter inside the Annotations tab |
| F2 | "Simplify these labels. They take up too much space." | E1 Confidence filter (470:25431) | Two rows of 5 chips become one row of 3: **All 7 · To review 1 · Unanswered 2**. The stars stay on each item |
| F3 | "Remove this label pls" | E1 "Answered 00:40" (470:24994) | Checklist item without the answered time. Plain rows lose the meta line; Ehli rows keep only the stars |
| F4 | "The auto-save label is not visible enough." | B1 "Autosaved at 08:12" (461:22359) | A save status pill on the right of the "Yes / no · no score" line, with Saved / Saving / Not saved states. It's more visible and adds no extra row |
| F5 | "Move layout and audio to the top, like 468:12979" | AN3 bottom strip (469:24993) | Decision: **top right (L3)**. Header actions get "Layout & audio". The bottom strip keeps only the intercom. The camera-warning badge moves onto the new button |
| F6 | D2: "Just cards with the timestamp, not this timeline" + AN3: "Items with no comment (quick add), and a state where faculty adds a comment afterwards" | D2 Annotations (472:26382), AN3 Annotations (469:25787) | One **annotation card** component (Comment / Tag only / Editing) and a list of plain cards, with no timeline line and no "End / Now" marker |

## Claude's review notes (for Daniel, not for Cursor)

- **F2:** a breakdown by star level (3/2/1) is more than the instructor needs. The question they actually ask is "what should I check?". So the filter becomes "To review" (Ehli answers with 1–2 stars that the instructor hasn't touched yet), and the stars on each item still show the detail. If you'd rather keep a filter by star level, use one Select ("Show: All ▾"), not chips.
- **F3:** the answered time could be useful in the debrief later (jump to the moment an item was ticked). It's dropped now. If it comes back, it should be a clickable time on the item in debrief mode only.
- **F4:** saving the checklist on every tap needs to show when it fails, otherwise "saved" is just decoration. That's why the component has a Not saved state with Retry.
- **F5:** open question, not built: in **Debrief mode**, does "Layout & audio" stay? Layout yes (it changes how the playback is laid out). The simulator voice settings make no sense after the recording stops. I suggest the same button shows only the layout section in debrief mode. Say if you agree and it goes into the flow round.
- **F6:** the time on the card is a jump link **in debrief only**. While recording live there's nothing to jump to, so there it's plain text. List order is recording order (it matches the scrubber markers).

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "Dashboard + SRV (D)" (305:18292).
READ-ONLY: everything on this page except the Section "Fixes". Never edit, move, rename or append into any other Section or frame (incl. "SRV v3 · DDC 10-27" 461:21677 and "SRV v3 · Tab options 10-28" 481:26150). Cloning FROM them is fine. Never change the existing Dev Mode annotations on the v3 frames.
TARGET = Section "Fixes". Each F1–F6 run writes ONLY inside its own row frame "Fix row · F<n>" in that Section (created by F0). Never touch another row: other chats are building them at the same time.
Inside a row: the "Before" clone (F0 puts it there) on the left, then the "After" component(s), 80 px gap, top-aligned. Above each item, 40 px up, a 16 px label ("Before · E1", "After · <component name>"). Variants of a component set sit side by side with 40 px gaps.
Components: build each fix as a LOCAL component or component set named "SRV / <Element>", with variant properties as given in the section. Build them from instances cloned from the v3 frames (Astryx, Neutral Light, greyscale; recording red is the only colour, the warning colour only where the v3 frames already use it). Don't draw primitives a v3 frame already has as an instance (Button, Badge, Tabs, IconButton, Toggle/segmented control, Textarea, Popover). Never detach the TopNav / SideNav.
Size: real size (1x), same widths as in the v3 frames (the side panel is 380 px, its content 348 px).
Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Copy: sentence case, plain English, the same demo world (Riverbend College of Nursing, Dr. Maya Ortiz, NURS 310 · Sepsis recognition, Sim Room 2, Group A). "Annotation", never "note".
Dev Mode annotations: delete any that came along with clones. Add only the ones the section asks for, category "Interaction".
When done: screenshot your row only and check that nothing overlaps or is clipped, the text fits, and every variant has the same width.
```

---

## F0 · Fixes section

Run alone, before F1–F6. It creates the Section, the six empty rows and the "Before" clones, so the parallel chats only build the "After".

```
Assumes: Shared rules from this file. This run creates the Section "Fixes" (the only time it is created) and fills nothing but row titles and Before clones.

1 · Section "Fixes": left edge aligned with Section "SRV v3 · DDC 10-27" (461:21677). Top = 400 px below the lowest bottom edge of ANY node on the page. Width 6000 px, height 8600 px (rows grow inside it). 120 px padding.
2 · Six row frames, named exactly "Fix row · F1" … "Fix row · F6": transparent, no clip, horizontal auto-layout, 80 px gap, hug contents, top-aligned. Stack them in the Section at fixed tops 120, 1520, 2920, 4320, 5720, 7120 (1400 px apart, so each row can grow up to ~1200 px without hitting the next one). Left 560 px.
3 · Row titles: at left 120 px, same top as each row, a 32 px bold text (not inside the row frame):
   F1 · Side panel tabs — no count badge
   F2 · Ehli filter — simpler labels
   F3 · Checklist item — no answered time
   F4 · Save status — more visible
   F5 · Layout & audio at the top
   F6 · Annotation cards
   Under each title, 16 px muted, max 360 px wide: the flag text from the table in this file.
4 · Before clones (node.clone(), appended into the row frame, then wrapped with a 16 px label "Before · <frame>" 40 px above it). Delete their Dev Mode annotations.
   F1: the right panel's tab bar of "E1 · Checklist with Ehli" (470:24914), the one holding the Badge "2".
   F2: "Confidence filter" (470:25431) — clone its parent "Ehli card" (470:25421) so the context shows.
   F3: the first checklist item row of E1 (the one holding "Answered at" 470:24994), plus item 4 (the "Changed from Ehli's Yes" row) and item 6 (unanswered).
   F4: "Checklist heading" (461:22352) of B1.
   F5: the page header (title block + right actions) AND the bottom strip "EXPLORATION · Room audio" (469:24993) of AN3 (469:24950), stacked, 24 px apart.
   F6: "Annotations" (472:26382) of D2 and "Annotations" (469:25787) of AN3, side by side.
When done: screenshot the whole Section and list the six row frame IDs.
```

---

## F1 · Side panel tabs

```
Assumes: Shared rules from this file. Write only in "Fix row · F1".

Component set "SRV / Side panel tabs", 380 px wide, built from the tab bar instance in the Before clone.
 - Property Active = Annotations | Checklist | Chapters | Transcript (4 variants).
 - Tabs: "Annotations", "Checklist", "Chapters", "Transcript", text only, no count Badge anywhere. Keep the collapse IconButton on the right.
 - The freed width goes to even spacing; don't stretch the tabs to fill the bar.
 - Annotation on the Annotations tab: "No count on the tab: it read like a notification (Gabor 10-28). The count lives in the 'All n' filter inside the tab."
```

---

## F2 · Ehli filter

```
Assumes: Shared rules from this file. Write only in "Fix row · F2".

Component set "SRV / Ehli card", 348 px wide (the panel's content width), built from the Ehli card in the Before clone.
 - Row 1 and Row 2 unchanged: sparkle icon + "Ehli · Checklist assistant", Badge "5 suggestions"; 12 px muted "Ehli listens to the recording and pre-fills likely answers. Stars show how sure Ehli is."
 - Row 3, ONE row of three filter chips (same chip component as now): "All 7", "To review 1", "Unanswered 2". Delete the three star chips. The row must fit in 348 px on one line at the current text size; if it doesn't, tighten the chip padding, never wrap.
 - Property Filter = All | To review | Unanswered (3 variants; the matching chip is selected).
 - Annotations:
   - On "To review": "Ehli answers with 1–2 stars that the instructor hasn't touched yet. The stars on each item still show how sure Ehli is."
   - On the card: "Was 5 chips in 2 rows; now one row (Daniel 10-29)."
```

---

## F3 · Checklist item

```
Assumes: Shared rules from this file. Write only in "Fix row · F3".

Component set "SRV / Checklist item", 348 px wide, built from the item rows in the Before clone (number, title, Yes/No button pair).
 - Delete the "Answered 00:40" text everywhere. Nothing replaces it.
 - Properties:
   - Answer = Unanswered | Yes | No
   - Ehli = None | Suggested | Changed
 - Build these 6 variants (the others aren't needed):
   1. Unanswered · None: "6  Draws blood cultures before antibiotics", neither button selected.
   2. Yes · None: "1  Performs hand hygiene and introduces self", Yes selected.
   3. No · None: "4  Escalates the lactate result to the provider", No selected.
   4. Yes · Suggested: item 1 with a sparkle icon inside the selected Yes, and ★★★ (12 px) on a line under the title.
   5. Yes · Suggested (1 star): "5  Starts IV fluids as ordered", sparkle Yes, ★ under the title.
   6. No · Changed: item 4 with ★★ under the title, No selected (no sparkle), and 12 px muted "Changed from Ehli's Yes" under the button pair, right-aligned.
 - Rows without a line under the title (variants 1–3): the title is vertically centred with the button pair; row height shrinks to fit (12 px top/bottom padding). Titles wrap to 2 lines max.
 - Annotation on variant 2: "No answered time on the item (Daniel 10-29): it cost a line on every row."
```

---

## F4 · Save status

```
Assumes: Shared rules from this file. Write only in "Fix row · F4".

1 · Component set "SRV / Save status" (a small pill, hug width, 24 px tall, Badge/outline style, 12 px MEDIUM text in the foreground colour, not muted, 14 px icon):
   - State = Saved: check-circle icon + "Saved 08:12"
   - State = Saving: loader icon + "Saving…"
   - State = Not saved: alert-triangle icon in the warning colour + "Not saved" + a link-style "Retry"
2 · Component set "SRV / Checklist heading", 348 px wide, built from the Before clone:
   - Row 1 unchanged: "Sepsis recognition checklist" (left) + "4 of 7 answered" (right).
   - Row 2: "Yes / no · no score" (left, as now) and an instance of "SRV / Save status" right-aligned on the SAME line. Delete the old "✓ Autosaved at 08:12" line, so the heading is one line shorter than before.
   - Property Save = Saved | Saving | Not saved (swap the pill's state).
 - Annotations:
   - On the pill: "Every tap saves. 'Saving…' shows while the request is out, then 'Saved' with the time. 'Not saved' stays until Retry works or the connection returns: the answers are kept on the device meanwhile."
   - On the heading: "One line shorter than the old autosave line, and readable at a glance (Daniel 10-29)."
```

---

## F5 · Layout & audio at the top

Decision (Daniel 10-29): the L3 version wins. Copy the button and panel from "L3 · Layout and audio, top right" (468:12979).

```
Assumes: Shared rules from this file. Write only in "Fix row · F5".

1 · Component set "SRV / Header actions" (the right side of the page header, hug width), built from the L3 header: secondary Button with a sliders icon "Layout & audio", then "Report a problem", then the "4 learners" select. Same sizes and gaps as in L3.
   - State = Default | Open (Layout & audio pressed, as in L3) | Camera warning (Default, plus the 8 px warning dot from B1's Layout button at the top-right corner of "Layout & audio"; the button doesn't change size)
2 · Component "SRV / Intercom strip": the bottom strip from the Before clone with the "Layout" and "Audio" buttons DELETED. Left to right as now: "Intercom" label, "In-room | Simulator | Facilitator", "Announcements" select, play IconButton, "Hold to talk". Strip width stays 1012 px; the controls stay left-aligned; nothing goes in the freed right side.
3 · Next to them (not a new component), clone the open "Layout & audio" overlay card from L3 as reference, label "After · panel (from L3, unchanged)".
 - Annotations:
   - On "Layout & audio": "Moved to the top right, right above the panel it opens (Gabor 10-27, Daniel 10-29). Replaces Layout and Audio in the bottom strip."
   - On the Camera warning variant: "Same signal as B1: stays until the camera is back, opens the panel where the camera is marked Not recording."
```

---

## F6 · Annotation cards

Replaces the vertical timeline (D2) and adds the quick-add and edit states (AN3).

```
Assumes: Shared rules from this file. Write only in "Fix row · F6".

1 · Component set "SRV / Annotation card", 348 px wide, 1 px border, 8 px radius, 12 px padding, vertical auto-layout, 8 px gap.
   Row 1 (horizontal, centred): a time pill (small secondary Button, monospace digits) "04:12", then the tag chip (icon + label, same chip as AN3: message-circle "Discuss", thumbs-up "Good practice", flag "Marker"), spacer, "…" IconButton.
   Property Type:
   - Comment: Row 1 ("04:12" · Discuss), 14 px text "Lactate came back at 4.1, nobody escalated.", 12 px muted "Dr. Maya Ortiz".
   - Tag only (added with a quick button, no comment): Row 1 ("06:05" · Good practice), then a link-style small Button with a plus icon "Add a comment", then "Dr. Maya Ortiz". No empty text line.
   - Editing (faculty adds a comment afterwards): Row 1 ("06:05", the tag chip becomes a small Select "Good practice ▾" so the tag can change too, no "…"), a Textarea (2 lines, focused) with typed text "Clear closed-loop handoff to the charge nurse" and a caret, footer right-aligned: ghost "Cancel" + primary small "Save". No author line while editing.
   Property Live = Yes | No (Yes: the time pill is plain text, not a button. No = debrief: the pill is a Button with a small play icon.) Build Live = No for all three types, plus Comment · Live = Yes.
2 · Component "SRV / Annotations list" (380 × 796, same as the panel), using instances only:
   - Top: filter chips "All 3", "Discuss", "Good practice", "Marker" ("All 3" selected). Counts only on "All". One line; tighten padding before anything wraps.
   - Cards in recording order, 8 px apart: 04:12 Discuss (Comment), 06:05 Good practice (Tag only), 07:30 Marker "Fluids started." (Comment).
   - No vertical timeline line, no "Now · 08:00" / "End · 18:42" marker.
3 · A second instance of the list next to it, label "After · list, adding a comment": the 06:05 card in the Editing variant, the others unchanged.
 - Annotations:
   - On the Tag only card: "A quick button (Discuss / Good practice / Marker) adds a card at the current time with no text. 'Add a comment' turns it into the Editing state."
   - On the Editing card: "Enter saves, Esc cancels. The tag can be changed here too. Opens from 'Add a comment' or '…' > Edit."
   - On the time pill (Live = No): "In debrief, the time jumps the playback there. While recording live, it's plain text."
   - On the list: "Plain cards with the time on each, no timeline line (Daniel 10-29). Order = recording order, same as the markers on the scrubber."
```

## Round 2 · Ehli, transcript and chapters (10-29 afternoon)

Daniel's ask: Transcript and Chapters tabs in the Astryx style, inspired by (NOT copied from) the current Essentials panels: 557:37362 (Transcript with chapter headers), 557:37845 (Chapters, Ehli off), 557:37853 (Chapters, Ehli on). Ehli gets an on/off switch on the Annotations, Checklist and Chapters tabs. Ehli's AI annotations show up in the annotation list and on the timeline, and the switch shows or hides them.

| # | Element | What it does |
|---|---|---|
| F7 | Ehli switch | One switch row for the three tabs (On / Off / Preparing). Greyscale: the sparkle icon marks Ehli, not purple and not the robot avatar |
| F8 | Ehli annotations | The F6 card gets Source = You / Ehli. The list mixes both in recording order (A) or shows them in two groups (B). The scrubber gets an Ehli marker |
| F9 | Chapters tab | Ehli switch + chapter rows (time + title), the current chapter highlighted, plus Off and Preparing states |
| F10 | Transcript tab | Search with "1 of 2" and up/down, sticky chapter headers, speaker rows with a time, the current segment highlighted |

### Claude's review notes for round 2 (for Daniel, not for Cursor)

- **Mixed vs grouped (F8):** I recommend **A, mixed in recording order**. It's one list in the same order as the scrubber, and Ehli cards are told apart by the sparkle and the tinted fill. B (two groups) is built as the alternative, so Gergely gets A/B.
- **When Ehli's items exist:** AI annotations and chapters come from processing the recording, so while recording live they don't exist yet. That's what the **Preparing** state is for ("Ready a few minutes after the recording ends"). The checklist assistant is different: it listens live, so it never shows Preparing.
- **What the switch remembers:** I wrote it as per user, per tab, remembered across recordings. Off only hides Ehli's items, nothing gets deleted. If you want one switch for all of Ehli, say so: it's a one-line change in F7.
- **Wrong AI annotations:** an Ehli card's "…" menu has "Edit" (it becomes your annotation, marked "Edited from Ehli") and "Hide". No thumbs up/down, in line with Gabor's "keep it minimal".
- **Transcript speakers:** "Speaker 1 / 2", no names or faces. That matches the GDPR line from the 09-18 review (a name plus biometrics in the cloud needs per-person consent).
- **The Transcript tab has no Ehli switch**, as you listed only the three tabs. When Ehli chapters are off, the transcript loses its chapter headers too (built as a variant).
- **Tab name:** the reference says "Data Entry". I kept "Checklist", as in F1.
- **Idea, not built:** chapters as segments on the scrubber. Worth one frame in the flow round if you want it.

---

## F0b · Rows F7–F10

Run alone, before F7–F10. Same job as F0, for the four new rows.

```
Assumes: Shared rules from this file. Run alone, before F7–F10. EDITS only the Section "Fixes" (564:28119): never touch rows F1–F6 or their content.
1 · Make the Section 14200 px tall (width unchanged).
2 · Four new row frames, same style as the existing rows (transparent, no clip, horizontal auto-layout, 80 px gap, hug, top-aligned), left 560 px, named and placed at these tops:
   "Fix row · F7" 8520 · "Fix row · F8" 9920 · "Fix row · F9" 11320 · "Fix row · F10" 12720
3 · Row titles at left 120 px, same top as the row, 32 px bold, with the 16 px muted line under each:
   F7 · Ehli switch — "One on/off switch for Ehli on the Annotations, Checklist and Chapters tabs."
   F8 · Ehli annotations — "Ehli's AI annotations in the list and on the timeline, shown or hidden by the switch."
   F9 · Chapters tab — "Astryx version of the Essentials chapters tab (557:37853)."
   F10 · Transcript tab — "Astryx version of the Essentials transcript tab (557:37362)."
4 · Before clones (node.clone(), appended into the row, 16 px label "Before · <source>" 40 px above). Delete their Dev Mode annotations:
   F7: 557:37845 ("Before · Essentials, chapters, Ehli off").
   F8: the timeline row (scrubber with markers) of "D2 · Debrief mode" (472:25836) AND one instance of the component "SRV / Annotations list" from row F6 (create an instance; don't clone the main component).
   F9: 557:37853 ("Before · Essentials, chapters, Ehli on").
   F10: 557:37362 ("Before · Essentials, transcript").
When done: screenshot the Section and list the four new row IDs.
```

---

## F7 · Ehli switch

```
Assumes: Shared rules from this file. Write only in "Fix row · F7".

1 · Component set "SRV / Ehli switch", 348 px wide, 1 px border, 8 px radius, 12 px padding. Row: sparkle icon (16 px) + title (14 px medium) on the left, the file's Switch component on the right. Under it, a 12 px muted line (max 2 lines).
   Property Tab = Annotations | Checklist | Chapters. Titles: "Ehli · AI annotations", "Ehli · Checklist assistant", "Ehli · AI chapters".
   Property State = On | Off | Preparing.
   - On: Switch on. Line: Annotations "2 annotations from Ehli, marked with ✦." · Checklist "5 suggestions. Stars show how sure Ehli is." · Chapters "5 chapters."
   - Off: Switch off, the card gets the muted background fill. Line: "Off. Turn on to see Ehli's annotations." / "… Ehli's suggestions." / "… Ehli's chapters."
   - Preparing (Annotations and Chapters only, not Checklist): Switch on, a loader icon replaces the sparkle. Line: "Ehli is preparing them. Ready a few minutes after the recording ends."
   Build the 8 variants: 3 Tabs × On/Off + Preparing for Annotations and Chapters.
2 · Next to the set, a composition "Checklist top · Ehli on / off" (frames, not components), using instances only:
   - On: "SRV / Ehli switch" (Checklist, On), 8 px gap, then an instance of "SRV / Ehli card" from row F2 with its first row (title + "5 suggestions" badge) and the intro line hidden via instance visibility overrides, so only the filter chips stay. Don't edit F2's component.
   - Off: "SRV / Ehli switch" (Checklist, Off) only; no filter chips.
 - Annotations:
   - On the set: "Per user and per tab, remembered across recordings. Off hides Ehli's items from this tab (and its markers from the timeline); nothing is deleted. Needs the AI subscription; without it the switch isn't shown."
   - On Preparing: "AI annotations and chapters come from processing the recording, so they don't exist during a live recording. The checklist assistant listens live and never shows this state."
```

---

## F8 · Ehli annotations

Needs F6 ("SRV / Annotation card", "SRV / Annotations list") and F7 ("SRV / Ehli switch").

```
Assumes: Shared rules from this file. Write only in "Fix row · F8". ONE exception: you may ADD variants to the component set "SRV / Annotation card" in row F6 (don't change or move its existing variants).

1 · In "SRV / Annotation card" (row F6), add the property Source = You | Ehli. All existing variants become Source = You. Add these Source = Ehli variants (Live = No):
   - Ehli · Comment: muted background fill (the file's secondary/muted surface), 1 px border as the others. Row 1: time pill "03:05", then a chip with the sparkle icon "Ehli", spacer, "…" IconButton. Text: "Hand hygiene skipped before the first patient contact." Footer 12 px muted: sparkle icon + "Ehli · AI annotation".
   - Ehli · Edited: same as a Source = You Comment card (white, normal author line "Dr. Maya Ortiz"), with an extra 12 px muted "Edited from Ehli" after the author. Text "Hand hygiene skipped before the first patient contact; reminded in the debrief."
   Show the "…" menu once, open (DropdownMenu) on the Ehli · Comment card, as a separate frame next to the set: "Edit" (pencil) and "Hide" (eye-off). Nothing else.
2 · Component "SRV / Timeline marker" (the markers on the scrubber), built from D2's markers: Type = Discuss | Good practice | Marker | Ehli | Cluster.
   - Discuss / Good practice / Marker: as in D2 (icon head + stem), icons match the tag icons.
   - Ehli: sparkle icon in the head, the stem dashed, same size, so it reads as "not mine" in greyscale.
   - Cluster: one head with a small count "2" for markers closer than 8 px; clicking it opens the list filtered to that moment (annotation only, no extra frame).
3 · Component "SRV / Timeline" (D2's scrubber row, playback state "00:00 / 18:42", same width as in D2), instances of the marker only. Property Ehli = On | Off:
   - On: markers 03:05 Ehli, 04:12 Discuss, 06:05 Good practice, 07:30 Marker, 11:20 Ehli.
   - Off: same without the two Ehli markers.
4 · Three list frames (380 × 796, instances only), side by side:
   A · "Annotations · Ehli on (mixed)": "SRV / Ehli switch" (Annotations, On) at the top, then the filter chips "All 5", "Yours 3", "Ehli 2", "Discuss", "Good practice", "Marker" ("All 5" selected; the row scrolls horizontally with a right-edge fade if it doesn't fit; no wrapping), then cards in recording order: 03:05 Ehli · Comment, 04:12 Discuss (You), 06:05 Good practice Tag only (You), 07:30 Marker "Fluids started." (You), 11:20 Ehli · Comment "SBAR handoff: situation and recommendation given, background missing."
   B · "Annotations · Ehli on (grouped)": same switch, chips "All 5", "Discuss", "Good practice", "Marker", then a 12 px muted uppercase heading "YOURS · 3" with the three You cards, then "EHLI · 2" with the two Ehli cards.
   C · "Annotations · Ehli off": switch (Annotations, Off), chips "All 3", "Discuss", "Good practice", "Marker", the three You cards only.
 - Annotations:
   - On A: "Recommended: one list in recording order, the same order as the timeline. Ehli's cards are told apart by the sparkle and the muted fill."
   - On B: "Alternative for the A/B with Gergely: yours first, Ehli's below."
   - On "Ehli · Edited": "Editing an Ehli annotation makes it yours; 'Edited from Ehli' keeps the trail. 'Hide' removes it from the list and the timeline for this recording."
   - On the Ehli marker: "Dashed stem + sparkle = Ehli. Hidden together with the list items when the switch is off."
```

---

## F9 · Chapters tab

Needs F7. Inspiration: 557:37853 (rows of time + title, the current one highlighted). The Astryx version uses greyscale, the file's components and the F6 time pill.

```
Assumes: Shared rules from this file. Write only in "Fix row · F9".

1 · Component set "SRV / Chapter row", 348 px wide, 40 px tall, 8 px radius, 8 px horizontal padding: the F6 time pill style (monospace digits, small secondary Button with a play icon), 12 px gap, title 14 px; on the right, 12 px muted duration.
   Property State = Default | Current (muted background fill, title 14 px medium, a 2 px dark bar on the left edge) | Hover (lighter fill).
2 · Component set "SRV / Chapters panel" (380 × 796), instances only. Property State = On | Off | Preparing:
   - On: "SRV / Ehli switch" (Chapters, On), 16 px gap, then rows: "00:00 Briefing · 1 min", "01:30 Initial assessment · 3 min", "04:10 Spotting deterioration · 3 min" (Current), "07:30 Fluid resuscitation · 5 min", "12:20 SBAR handoff · 6 min". The recording is 18:42.
   - Off: switch (Chapters, Off), then a centred empty state (the file's Empty component if it has one): list-video icon, "Chapters are off", 12 px muted "Turn on Ehli to split the recording into chapters."
   - Preparing: switch (Chapters, Preparing), then 5 skeleton rows (time pill + bar shapes, the file's Skeleton if it has one).
 - Annotations:
   - On a row: "Click to jump the playback to the chapter's start. 'Current' follows the playhead. While recording live there are no chapters yet (Preparing)."
   - On the panel: "Inspired by the current Essentials chapters tab (557:37853), rebuilt with Astryx: no robot avatar, no purple; the sparkle marks Ehli."
```

---

## F10 · Transcript tab

Inspiration: 557:37362 (search with a match counter and up/down, chapter headers with a time range, speaker rows with avatar, name and time). No Ehli switch on this tab.

```
Assumes: Shared rules from this file. Write only in "Fix row · F10".

1 · Component "SRV / Transcript search" (348 px): the file's Input with a search icon and placeholder "Search the transcript…", then 8 px gap, a 12 px muted counter, and two small IconButtons (chevron-up, chevron-down). Property State = Empty (counter hidden, IconButtons disabled) | Results (typed "lactate", counter "1 of 2") | No results (typed "insulin", counter "0 results", IconButtons disabled).
2 · Component set "SRV / Transcript segment" (348 px, 8 px vertical padding): a 28 px round avatar placeholder with a user icon (no photo, no initials), 12 px gap, then: line 1 "Speaker 1" (14 px medium) + the time (12 px muted, monospace digits, a link in debrief); line 2 the text (14 px).
   Property State = Default | Current (muted background fill, 8 px radius: the segment playing now) | Match (the search word highlighted with the file's highlight/mark style, the active match a darker highlight).
3 · Component "SRV / Transcript chapter header" (348 px, 40 px, sticky): title 14 px medium + 12 px muted range "04:10–07:30"; bottom 1 px divider. Muted background so it reads as sticky over the scrolling segments.
4 · Component set "SRV / Transcript panel" (380 × 796), instances only, content clipped at the bottom like a scrolling list. Property State:
   - Playing: search (Empty). Header "Initial assessment 01:30–04:10" pinned at the top, segments: Speaker 1 01:42 "Okay, vitals first. Heart rate one twelve, BP ninety over fifty-five." · Speaker 2 02:10 "Temp is 38.9. She's a bit confused." · Speaker 1 03:05 "Let's get a lactate and blood cultures." (Current). Then header "Spotting deterioration 04:10–07:30", Speaker 2 04:12 "Lactate is back, 4.1." · Speaker 1 04:30 "Okay, let's start fluids."
   - Search: search (Results, "lactate", 1 of 2), the same list with "lactate" highlighted in two segments, the 03:05 one the active match.
   - No chapters (Ehli chapters off): the same segments with no chapter headers.
   - Preparing: search disabled, 6 skeleton segments, 12 px muted line on top "The transcript is ready a few minutes after the recording ends."
 - Annotations:
   - On a segment's time: "In debrief, click to jump the playback there. The Current segment follows the playhead."
   - On "Speaker 1": "No names or faces: speakers stay anonymous (GDPR, name + biometrics need per-person consent)."
   - On the search: "Enter = next match, Shift+Enter = previous. The list scrolls to the active match."
```

---

## R2 · QA patch (F7–F10)

Claude's screenshot QA of rows F7–F10 (10-29). Everything is there, with all the variants. Three defects and one nit. Run as one chat: `… run ONLY section "R2 · QA patch (F7–F10)".` The fixes are on the main components, so every instance (F8 lists, F9 panel, F7 compositions) updates by itself.

```
Assumes: Shared rules from this file. EDITS main components in rows F6, F7 and F9 of Section "Fixes" in place. Don't rebuild anything, don't touch the frames that only hold instances.

1 · "SRV / Ehli switch" (570:55010), the three State=Off variants: the off Switch nearly disappears on the muted card fill (the light track on a light grey card fails the 3:1 non-text contrast). Keep the card WHITE in Off, same as On. Signal "off" with the title and the line in the muted text colour and the Switch component's own off state. If the off track is still lighter than the card border, give the track a 1 px border in the border colour. Check the F8 "Annotations · Ehli off" frame and the F9 Off panel afterwards: they should follow without edits.
2 · "SRV / Annotation card" (565:29411), variant "Type=Comment, Live=No, Source=Ehli": the time pill and the "Ehli" chip are grey on a grey card, so the time no longer reads as a button. On this variant only, give the time pill the background (white) fill with a 1 px border, and the Ehli chip a white fill. The card keeps its muted fill. Same check for the opened "…" menu frame (570:57205), which should follow by itself.
3 · "SRV / Chapter row" (570:56166), State=Current: the 2 px dark bar sits outside the row, 8 px left of the highlighted fill. Put it inside the row, flush with the fill's left edge, full row height, so the row's 8 px radius clips it. The row width stays 348 px.
4 · Nit, "SRV / Chapters panel" (570:56363), State=On: "00:00 Briefing" runs to 01:30, so its duration is "2 min", not "1 min".
5 · A way back from "Hide" (Daniel 10-29). Write in row F8 ("Fix row · F8"), appended at the end of the row:
   a · Component set "SRV / Hidden annotations", 348 px wide. Property State = Collapsed | Expanded.
      - Collapsed: one 32 px row, left-aligned: eye-off icon (14 px, muted) + 12 px muted "1 hidden" + a link-style small Button "Show". No border, no card.
      - Expanded: the same row, with "Show" replaced by "Hide again". Under it, 8 px gap, an instance of "SRV / Annotation card" (Type=Comment, Source=Ehli) at 50 % opacity: 11:20 "SBAR handoff: situation and recommendation given, background missing." Its "…" IconButton is replaced by a link-style small Button "Unhide" (eye icon), shown at full opacity.
   b · Two new list frames (380 × 796, instances only), placed after the existing F8 lists, labelled as usual:
      - "Annotations · one hidden": a copy of "Annotations · Ehli on (mixed)" (570:56573) without the 11:20 Ehli card. Chips "All 4", "Yours 3", "Ehli 1", "Discuss", "Good practice", "Marker". Under the last card, 8 px gap, "SRV / Hidden annotations" (Collapsed).
      - "Annotations · hidden, shown": the same, with "SRV / Hidden annotations" (Expanded).
   c · Annotations:
      - On the Collapsed variant: "Only appears when something is hidden. Hidden items leave the list, the count and the timeline for this recording, for this user only."
      - On "Unhide": "Puts the annotation back in its place in recording order, with its marker on the timeline."
When done: screenshot 570:55010, 565:29411, 570:56166, the F8 "Ehli off" list and the two new F8 lists, and check the off switch is visible, the hidden row sits under the last card, and nothing else moved.
```

## After these run

- Send Claude the "Fixes" Section link for a screenshot QA round.
- Once every row is approved (flags switched to `Fix [AI] DONE`), the next round swaps the old elements for instances of these components in the final IMSH flow.
