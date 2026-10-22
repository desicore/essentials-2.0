# 10-22b · Gabor's learner pattern on the SRV + dashboard customization in the floating side panel

Follows round 1 (`10-22-dashboard-srv-after-ddc.md`). Same file: IMSH-MVP (`dbJVpAusLJCtreiz0jlEh3`), page "Dashboard (D)" (305:18292).

## Before you run: one manual step (30 seconds)

The floating side panel lives in a different file, and Cursor can't clone across files. Do this once by hand:

1. Open "Essentials 2.0 - wireframes" → page "wireframe test - astryx" → select frame **"S1c · Dashboard + Assistant overlay · Astryx"** (119:1505) → Cmd+C.
2. Open IMSH-MVP → page "Dashboard (D)" → paste it anywhere **outside** the Sections, e.g. left of everything at x = -2000, y = 1600. Leave the name as it is.

## How to run

One Cursor chat per line, in this order:

1. `Read @wireframe-benchmark/reviews/10-22b-learners-and-customize-panel.md. Apply "Shared rules", then run ONLY section "L · Learners (SRV)".`
2. `Read @wireframe-benchmark/reviews/10-22b-learners-and-customize-panel.md. Apply "Shared rules", then run ONLY section "C · Customize panel (Dashboard)".`

## Review of round 1 (Claude, 10-22)

Overall the build was right and close to the brief: S1, S3 and S4 are clean, and the video got its height back. Fixes:

1. **Hold to talk lost weight (S1–S5).** It is now a small round icon with a muted caption at the bottom of the strip. It's a live action during the scenario, so make it a real secondary Button with a mic icon and the label "Hold to talk". → fixed in L0.
2. **The participants popover covers "Stop recording" (S4).** The new learner popover anchors under its own trigger and stays clear of the record controls. → fixed in L1.
3. **D2 / D3 are superseded** by the side panel (Daniel, 10-22). The per-box report dropdown (D3) also disappears: each report becomes its own widget, so there's no box-inside-a-box choice. → C0 moves D2 and D3 out of the flow.

## Decisions (Daniel, 10-22)

- **Learner management = Gabor's pattern** (Gergely asked for something similar): a "N learners" button opens a "Tagged learners" popover with a close X, a round label, learners as removable chips in a grey slot, and "Add learner". Add learner opens a **searchable list inline** in the popover, not a second popup (Gabor, DDC 10-21). The staff block stays, read-only.
- Absent learners: in Gabor's model, whoever is in the slot is in the recording. Removing a chip = not in this recording. Daniel's "Absent" tag goes away.
- **Dashboard customization = the Assistant side panel** (S1c, 380 px, floating over the content on the right) in a "Customize dashboard" mode, like the reference: a widget list with a thumbnail, title, one-line description and Add button; drag a widget onto the dashboard; the cards on the dashboard get handles and remove buttons. The composer stays at the bottom, so you can also ask the assistant in words. That makes it one panel, not two features.

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "Dashboard (D)" (305:18292).
READ-ONLY: Section "Gabor" (305:21628), Section "Gabor SRV" (322:28720), the pasted frame "S1c · Dashboard + Assistant overlay · Astryx", and page "Wireframe (D)" (0:1). Clone from them; never edit or move them.
If the frame "S1c · Dashboard + Assistant overlay · Astryx" is not on this page, STOP and tell the user to do the manual paste step in this file.
EDIT targets: Section "Dashboard · Daniel" (307:12786) and Section "SRV · Daniel" (313:14668). Build new frames by cloning (node.clone()) and editing the clone.
Components: reuse the instances inside the cloned frames (Astryx, Neutral Light, greyscale; recording red is the one exception). Never rebuild TopNav / SideNav. Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Gabor's frames use a different visual skin (blue, rounded). When you clone a piece of his UI, keep his STRUCTURE and restyle it to our greyscale Astryx look: our fonts, radii and greys, no blue.
Layout inside a Section: frames in ONE horizontal row, top-aligned, 160 px gaps, 24 px text label "<#> · <Screen>" 96 px above each frame. When you insert a frame mid-row, shift every frame and label to its right so the 160 px gaps hold. Grow the Section to fit.
Naming: "<#> · <Screen>", no version suffix. Copy: sentence case, plain English, demo world (Riverbend College of Nursing, Dr. Maya Ortiz, Tue Jan 19 2027, NURS 310/340, Sim Room 1–4, learners Emily Baker, Priya Shah, Marcus Chen, Olivia Grant, Noah Patel).
Delete duplicated Dev Mode annotations on every clone; add the new annotations given in the prompt.
When done: screenshot each new or changed frame and check that nothing overlaps or is clipped and that the text fits.
```

---

## L · Learners (SRV)

```
Assumes: Shared rules from this file.
Pattern source: in Section "Gabor SRV", frame "Live Recording – Updated" (322:27835): the trigger "Button / Learners tagged" (322:27689) and the popover "Popover / Tagged learners" (322:27718: header + close, "Round label", grey "Learner slot" with "Learner / …" chips each holding "IconButton / Remove learner", and "Button / Add learner").

L0 · All SRV frames (S1, S2, S3, S3b, S4, S5) — edit in place:
 - Header right: replace the avatar stack + "4 present · 1 absent" with ONE secondary Button: people icon + "4 learners" + chevron-down (structure from 322:27689, restyled). Keep "Report a problem" to its left.
 - Bottom strip: replace the small round mic icon + "Hold to talk" caption with a secondary Button: mic icon + "Hold to talk". Same position, keep the rest of the strip.

S4 · Participants during recording — rebuild the popover (edit in place, delete the old "Popover · Participants" 315:16166):
 Clone 322:27718, restyle it, and anchor it 8 px under the "4 learners" button, right-aligned to the button. It must NOT cover "Pause" / "Stop recording" (if it would, keep it right-aligned to the frame edge at x≈1100–1420, which overlaps only the right panel). The "4 learners" button is in the pressed state.
 - Header: "Tagged learners" + close IconButton (X).
 - Round label tab: "Round 1 · 10:00 – 10:20".
 - Grey slot with chips (avatar initials, name, X remove): Emily Baker, Priya Shah, Marcus Chen, Noah Patel. Then the "Add learner" Button (person-plus icon) inside the slot, at the bottom.
 - Below the slot, 12 px muted: "Changes apply to this recording only."
 - Divider, then the read-only STAFF block from round 1 (Facilitator · Dr. Maya Ortiz / SP · none / "Change staff in the event or in Center overview.").
 - Annotation: "Gabor's learner pattern (Gergely asked for this). Remove = not in this recording. Learners can change while recording (DDC 10-21)."
 Rename the frame and label to "S4 · Learners during recording".

S4b · Add learner (new, insert right after S4): clone S4. In the slot, "Add learner" is replaced by an inline search Input (focused, search icon) with the value "Oli", and directly under it, still inside the popover, a results list:
  - "Olivia Grant" · 12 px muted "NURS 310 · Group A" · small "Add" Button
  - "Oliver Reed" · "NURS 340 · Group B" · "Add"
  - 12 px muted row: "Not in the list? Add by email"
 The popover grows downwards (max ~620 px tall).
 Annotation: "Searchable list inside the popover, not a second popup (Gabor, DDC 10-21). Ownership of this flow: confirm with Gabor (his Learner Assignment)."

S4c · Two rounds (new, insert after S4b): clone S4. The slot shows two rounds stacked: "Round 1 · 10:00 – 10:20" with Emily Baker, Priya Shah (the current round, label in the selected state) and "Round 2 · 10:20 – 10:40" with Marcus Chen, Noah Patel, Olivia Grant (label muted, "Up next" tag). Each round has its own "Add learner". The popover scrolls if needed.
 Annotation: "Same pattern as Gabor's rounds in Center overview: starting round 2 stops round 1's recording and starts round 2 with these learners."
```

---

## C · Customize panel (Dashboard)

```
Assumes: Shared rules from this file.
Panel source: in the pasted frame "S1c · Dashboard + Assistant overlay · Astryx", the child "CUSTOM · Assistant panel" (380 px wide, floats over the content on the right, full height under the TopNav): "Toolbar · Assistant header", the message area and "Composer dock".

C0 · Move the superseded frames: create Section "Dashboard · superseded" 400 px below Section "SRV · Daniel" (x = -186). Move D2 and D3 (and their labels) into it, rename both frames and labels with the prefix "old · " (e.g. "old · D2 · Customize dashboard") so no names clash, and add a 24 px text at the top of that Section: "Superseded 10-22 by the Customize side panel (D2–D5)." Then close the gap in "Dashboard · Daniel" so D1 is followed directly by the new frames below and D4 comes last.

New order in "Dashboard · Daniel": D1 · Dashboard → D2 · Customize panel → D3 · Drag a widget → D5 · Ask the assistant → D4 · Dashboard, customized.
(D5 is placed before D4 on purpose: D4 stays the end state. Labels show the real names.)

D1 · Dashboard — edit in place: the "Customize" button stays where it is.

D2 · Customize panel (new): clone D1. "Customize" is in the pressed state. Clone "CUSTOM · Assistant panel" into the frame, same position and size (right edge, under the TopNav, floating over the content with its left-edge shadow/border; the dashboard is NOT dimmed and NOT resized).
 Panel header: sliders icon + "Customize dashboard" (replace "Assistant") and a close IconButton (X). Remove the new-chat icon.
 Panel body (replaces the conversation, scrolls): 12 px muted "Drag a widget onto your dashboard, or press Add." Then widget cards (each: 64×64 grey thumbnail with a simple greyscale glyph, title 14 px semibold, one-line 12 px muted description, and on the right a small Button "Add" or a muted "Added ✓"):
  - "Today" · "Today's sessions with start and debrief actions" · Added ✓
  - "Recent recordings" · "Latest recordings and their debrief status" · Added ✓
  - "Simulation hours" · "Hours run per week, last 12 weeks" · Added ✓
  - "Calendar" · "Month view of planned sessions" · Added ✓
  - "Upcoming" · "Next sessions after today" · Added ✓
  - "Checklist results" · "Pass rate per checklist item" · Add
  - "Room usage" · "Hours per sim room" · Add
  - "Simulator usage" · "Hours per simulator or manikin" · Add
  - "Types of sessions" · "Share of course, ad hoc and practice sessions" · Add
 Bottom: keep the "Composer dock" with the placeholder "Or tell me what to show…". Under the composer, a footer row: ghost Button "Reset to default" (left), primary Button "Done" (right).
 Dashboard in edit mode: every card gets a dashed 1 px outline, a drag handle (top-left, 16 px) and a remove IconButton (X, top-right, 24 px). The content stays visible.
 Annotation on the panel: "Same floating panel as the Assistant (S1c), in a Customize mode. Per user, auto-saves; Done just closes."

D3 · Drag a widget (new): clone D2. The "Checklist results" card is lifted out of the panel and floats over the dashboard: rotated ~3°, shadow, at about x=560, y=640. Its original place in the panel is a dashed empty slot. On the dashboard, under "Simulation hours", a dashed drop zone the width of the left column (~120 px tall) with 12 px muted text "Drop here". The cursor is a grab hand on the floating card.
 Annotation: "Drop zones appear between cards while dragging. Keyboard alternative: Add puts the widget at the end."

D5 · Ask the assistant (new): clone D2. In the panel, the widget list scrolls up a little. Above the composer, a short exchange in the Assistant message style from S1c:
  - user bubble: "Swap simulation hours for checklist results and hide upcoming."
  - assistant reply: "Done. I replaced Simulation hours with Checklist results and hid Upcoming." + a small ghost Button "Undo".
 Widget list state: "Checklist results" now "Added ✓"; "Simulation hours" and "Upcoming" now show "Add".
 Annotation: "Same assistant, scoped to the dashboard. It only changes the layout; nothing is deleted."

D4 · Dashboard, customized — edit in place: no change to the content; the panel is closed and "Customize" is not pressed.
```

## After these run

- Send the Figma link back for the review.
- Confirm with Gabor that the "add learner" flow is his or yours (S4b), and that his Center overview rounds match S4c.
