# 10-29 · Sidepanel: bringing the tabs together

Goal (Daniel 10-29): one SRV side panel with every tab and its content, in a polished final design, so we can see how it all looks together. We start with the **Annotations** tab; Checklist, Chapters and Transcript follow as their own sections in this file. This isn't a state inventory: only the states needed to show how the panel works. Every state and edge case gets built later in the component library.

Built from the approved components in Section **"Fixes"** (564:28119) of the IMSH-MVP file (`dbJVpAusLJCtreiz0jlEh3`), page "Dashboard + SRV (D)" (305:18292).

## How to run

One Cursor chat per tab, in order:

1. `Read @wireframe-benchmark/reviews/10-29-sidepanel.md. Apply "Shared rules", then run ONLY section "SP1 · Annotations tab".`
2. Checklist, Chapters, Transcript: sections to come.

High is enough.

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
   1 · Fixed top (doesn't scroll): the Ehli switch when the tab has one, then the tab's filter or search row, 12 px apart.
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

## After this runs

- Send Claude the Sidepanel Section link for a QA round.
- Then the next tab: SP2 · Checklist (F1 tabs + F7 switch + F2 filter + F4 heading + F3 items).
