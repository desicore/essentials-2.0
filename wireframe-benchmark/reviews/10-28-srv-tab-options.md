# 10-28 · SRV right panel: tab options

Problem (Daniel, 10-28): "Annotations 2 · Checklist · Chapters · Transcript" already fills the 380 px right panel. It gets worse on smaller screens, with a larger browser font size, and as soon as a fifth or sixth tab arrives. Icon-only tabs are ruled out: that's the problem we're fixing from current Essentials and Enterprise (labels need hover to be understood). "Notes" was shorter, but "annotation" is decided (DDC 10-27), so shortening the word isn't the fix either.

Goal: panel-only explorations, side by side, so Daniel can pick a pattern. Nothing existing gets edited.

Source: the right panel of "D2 · Debrief mode": node 472:26378 (380 × 836, Annotations tab active, timeline list).

## How to run

One Cursor chat:

`Read @wireframe-benchmark/reviews/10-28-srv-tab-options.md. Apply "Shared rules", then run ONLY section "TB · Tab options".`

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "Dashboard (D)" (305:18292).
READ-ONLY: every existing Section and frame on this page, including Section "SRV v3 · DDC 10-27" (461:21677) and everything in it. Never edit, move or rename them, never append into them. Never edit a main component; detaching an instance INSIDE your own clone is fine.
TARGET = a NEW Section "SRV v3 · Tab options 10-28", left edge aligned with Section 461:21677, top 400 px below that Section's bottom edge.
Base: clone node 472:26378 (the right panel of D2) with node.clone() for every variant, append the clone to the target Section, then edit the clone.
Grid: one ROW per option (TB1…TB5, top to bottom, 200 px between rows), two COLUMNS per row:
 - "Today": 380 px wide, the 4 real tabs: Annotations (badge 2), Checklist, Chapters, Transcript.
 - "Worst case": 300 px wide (stands in for a smaller laptop or a 125 % browser font size) and 6 tabs: the 4 real ones + "Simulator events" (badge 21) + "Files". The two extra tabs are hypothetical, they only exist to stress-test.
 120 px between columns. Above each panel, 64 px up, a 20 px label "<option> · Today" / "<option> · Worst case". Left of each row, a 28 px bold row title with the option name.
Every variant keeps the panel's content (the annotation timeline) and the collapse IconButton, and keeps "Annotations" as the active view, unless the prompt says otherwise.
Rules for every option: every tab/view keeps a visible TEXT label (no icon-only, no hover-only names), text is never smaller than the current tab text, nothing is clipped or truncated with "…".
Components: build from what's in the file (Tabs, Button, Badge, DropdownMenu, Select, Collapsible/Accordion). Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md, same icons as before: annotations = message-square, Checklist = list-checks, Chapters = list-video, Transcript = file-text, Simulator events = activity, Files = paperclip.
Delete Dev Mode annotations copied with the clones. Add only the annotations given in the prompt.
When done: screenshot every variant and check nothing overlaps, clips or truncates.
```

---

## TB · Tab options

```
Assumes: Shared rules from this file.

TB1 · Tabs + "More" (priority+)
 - Tab row keeps text tabs. As many full-width tabs as fit stay in the row; the rest collapse into a final tab "More ▾" (chevron-down). The active tab is always in the row: if the user picks a view from More, it swaps into the row.
 - Today (380): "Annotations 2 · Checklist · More ▾" if Chapters + Transcript don't fit with full labels and the collapse button; otherwise all four. Use whatever actually fits, never squeeze.
 - Worst case (300): "Annotations 2 · More ▾", with the More DropdownMenu OPEN under it: Checklist, Chapters, Transcript, Simulator events (badge 21), Files, each with its icon. If a hidden view has a badge, the More tab shows a small dot.
 - Annotation: "Scales with any number of views and any font size; the row just shows fewer tabs. The view you're on is always visible."

TB2 · View switcher (one dropdown)
 - Replace the tab row with ONE header row: a ghost Select-style Button showing the current view's icon + "Annotations" (16 px medium) + Badge "2" + chevron-down, left-aligned; the collapse IconButton stays right.
 - Today: closed.
 - Worst case: the menu OPEN, full panel width minus 16 px padding, one row per view: icon, label, count/progress on the right ("2", "4 of 7", "21"), the current view checked. Under the list, 12 px muted: "Shortcuts: 1–6".
 - Annotation: "Never runs out of room, but the other views are hidden until you open the menu (one extra click, less discoverable)."

TB3 · Labelled side rail
 - Remove the tab row. Add a 64 px vertical rail on the panel's OUTER (right) edge, full height, 1 px left border. Each item: 20 px icon above a 12 px centred label. Never break a word: "Simulator events" may wrap to two lines between the words, but "Annotations" stays on one line; widen the rail (up to 80 px) until it fits. Active item: filled muted background + bold label. Badge as a small count at the icon's top-right. The collapse IconButton moves to the bottom of the rail.
 - Today: 4 items. Worst case: 6 items (there's room for ~12 vertically).
 - The content area becomes panel width minus the rail. Rewrap the timeline cards to fit; nothing clipped.
 - Annotation: "Labels always visible and room for many more views, at the cost of ~64 px of content width. Same idea as the Teams / Figma side rails, but with labels."

TB4 · Stacked sections (no tabs)
 - Remove the tab row. The panel becomes a vertical stack of collapsible sections, each with a 40 px header row: chevron, icon, label, and on the right a status ("2", "4 of 7", "21"). Several can be open at once.
 - Today: "Annotations" open (with the timeline content), Checklist, Chapters, Transcript collapsed.
 - Worst case: same, plus Simulator events and Files collapsed.
 - Annotation: "Lets the facilitator keep Annotations and Checklist open together during a live sim. Long open sections push the others down, so the panel scrolls."

TB5 · Two groups
 - Group the views by job. Top: a full-width 2-segment control "Timeline | Assessment". Under it, a smaller text-tab row for the views in the selected group:
   - Timeline: Annotations 2 · Chapters · Transcript (· Simulator events 21 · Files in the worst case)
   - Assessment: Checklist (future: rubric, Ehli)
 - Today: "Timeline" selected, sub-row "Annotations 2 · Chapters · Transcript".
 - Worst case: "Timeline" selected, the sub-row uses the TB1 "More ▾" rule for whatever doesn't fit.
 - Annotation: "Fewer choices per row, but two levels of navigation. Only worth it if the view count really grows."
```

## Claude's take (for Daniel, not for Cursor)

- **TB1 (tabs + More)** is my pick for the SRV: it's the least change from what Gabor and Gergely have already seen, the active view always stays visible, and it degrades gracefully with font size and screen width. It's also what GitHub and Atlassian do with long tab rows.
- **TB3 (labelled rail)** is the strongest if the view count really goes past ~6 (Ehli, simulator events, files…). It costs content width, which hurts the checklist most.
- **TB4 (stacked sections)** is the dark horse: it answers a real live-sim need (checklist and annotations open together), but it changes the panel's whole model, so it needs Gabor's debrief view to agree.
- TB2 and TB5 are there to be rejected on purpose: the dropdown hides everything, and two levels are overkill for 4–6 views.
