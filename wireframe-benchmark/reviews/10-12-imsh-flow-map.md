# IMSH flow map + board review · 10-12

Source of truth: `spec/flows/IMSH-demo-story-final.md` (Gergely's five steps, approved 10-05). Board: page "wireframe test - astryx" (40:48). The latest work on it is the v3 round from the evening of 10-08. The pages "IMSH · final", "UI" and "Wireframe" are empty. The V3-r1 fix prompt (`10-08-v3-review.md`) has **not** been run yet: there are no "· v3-r1" frames.

Preview strip (rendered from screenshots, not in Figma): `10-12-imsh-flow-strip.png`. Green means ready, amber means it needs a fix or a rebase, red means the frame is missing.

## The flow, in order

| # | Step | Screen (latest frame) | Simulated tap | Status |
|---|---|---|---|---|
| 1 | Dashboard, the week before | S1 · Dashboard · v2 `235:8839` | **Calendar** in the side nav | ✅ (see gap 7) |
| 2 | Calendar | S2a · Calendar · v2 `235:15917` | the **NURS 310 · Sepsis recognition** event ("No learners") | 🟠 copy (gap 6) |
| 3 | Edit event: learner assignment | S2b · Edit event · v3 `270:16656` | Group A → **Assign group** → **Save event** | ✅ |
| 4 | Dashboard, sim day | S1 v2 (reused) | **Start recording** on today's NURS 310 row | ✅ |
| 4b | Participants: untick the sick learner | — | click the avatar stack → untick Olivia | 🔴 missing (gap 1) |
| 5 | Recording view (refined SRV) | S3 · Recording view · v3 `268:15677` | checklist **Yes/No**, **Marker**, then **Stop recording** | ✅ |
| 5+ | *Optional:* left the SRV, still recording | S7a · Recording banner · v3 `270:23813` | **Open recording view** | ✅ |
| 6 | Stop confirmation | S3 · Stop confirmation · v3 `268:16235` | **Stop recording** | ✅ |
| 7 | Tablet: Debriefs list | TV-C2 "1 · Debriefs list · v3" `262:18563` | **Open debrief** | ✅ |
| 8 | Debrief (tablet), the showpiece | S8c · Debrief · summary collapsed · v3 `259:12192` | **Show on screen** | 🟠 clips decision + 16:9 (gap 4) |
| 9 | Display picker | TV-C2 "4 · Display picker · v3" `262:19023` | **Sim Room 2 monitor**, layout Single/Dual/Quad | ✅ |
| 10 | Room TV showing | TV-C2 "8 · Display, showing · v3" `262:19712` | none (TV output) | ✅ (playhead fix on 7, gap 5) |
| 10b | Debrief before notes → Add photo | — | **Add photo of notes** | 🔴 missing (gap 2) |
| 11 | Photo of notes: capture | S8a · v2 `247:11932` | **Take photo** | ✅ |
| 12 | Photo of notes: check | S8b · v2 `247:11946` | **Use photo** | ✅ |
| 13 | Debrief with notes in the summary | S8c · summary expanded · v3 `260:18623` | **Share with participants** | ✅ |
| 14 | Share with participants | S9a · v3 `264:14426` | *(Preview as learner)* → **Share with 4 learners** | ✅ |
| 14a | Preview as learner | S9c · v3 `267:22719` | **Back to sharing** | ✅ |
| 15 | Shared: confirmation | S9b · Shared · **v2** `244:14103` | **Done** | 🟠 old base (gap 3) |
| 16 | Reports: Simulation Lab Usage | S6 · Reports · v3 `269:16842` | period tabs → **Schedule weekly report** | 🟠 V3-r1 not applied (gap 3) |
| 17 | Schedule weekly report | S6b · v3 `270:24785` | **Schedule** | 🟠 built on old S6 (gap 3) |

## Gaps, ranked

1. **Missing 4b: the participants popover in the SRV.** The story says "one learner is off sick, she unticks her". The standup on 10-09 moved the participant list into the SRV, but no frame shows it open. The same popover also covers your **ad hoc recording** to-do (adding a learner during a recording), so one frame closes two items.
2. **Missing 10b: the debrief before the notes photo.** Every debrief frame already shows "1 photo of notes", so nothing shows the moment Maya taps "Add photo of notes". The AI summary card needs an empty state with that button.
3. **The report chain is stale.** The V3-r1 fixes were never run: the legend collides with the "20 h" axis label, and the last-year ticks sit inside the black bars. S6b and S6c v3 are still built on the old S6 (no comparison). S9b Shared is still on the v2 debrief (grey video placeholder, old Room display toggle).
4. **The clips decision is still open.** I recommended option A (no approve; sharing approves) on 10-08. The v3 debrief still has Approve buttons, and the player is still not 16:9. Decide this before Wednesday's workshop, or the workshop will spend its time on it.
5. **TV-C2 step 7:** the tablet playhead says 05:13 while the TV says "Paused at 04:12" (V3-r1 item 2).
6. **Calendar copy:** "1 of your events **next week** has no learners", but the visible week (Jan 18–22) is the current one and the event is today. Either show the week of Jan 19 from Jan 12, or change the copy to "this week".
7. **The dashboard is reused for "the week before" and "sim day".** On the week-before visit, NURS 310 already sits under Today with Start recording. This is acceptable for a happy-flow demo if you narrate it, but a variant with NURS 310 under Upcoming ("No learners") makes step 1 → 2 logical.
8. Housekeeping: the copied Dev Mode annotations are still duplicated across the v3 and EXP frames.

## Your to-do list vs. the approved scope

The approved IMSH scope (10-05) is the five steps. Excel import and user management were **explicitly cut** by Gergely, and SRV sound controls (the voice modulator) are out of scope. On 10-09 Patrik said the 15-Oct state is already enough: focus on fine-tuning and a clear scope, not on a clickable prototype. With Monday off and the workshop on Wednesday, here's my recommendation:

| To-do | Call |
|---|---|
| Side nav on every screen | **Already done** on every desktop staff screen (S1, S2a, S2b, S6/S6b/S6c, S7a). **I disagree with adding it to the SRV and the tablet debrief.** The SRV is a focus mode ("Back to event"), and the tablet is full-screen touch. A nav costs 160 px of video and checklist width for no task benefit. |
| LS Essentials header everywhere | Same as above, done where there's a nav. The one real inconsistency: the Debriefs list has the logo, but the debrief and the SRV don't. Add the small logo to those two headers, not the full bar. |
| Design system from UI inspiration | Not on every screen this week. Do a **token-level theme** (colour, type, radius on the Astryx variables) on two hero screens (dashboard + debrief) for Friday. That shows direction without re-doing 20 frames before the flows are merged. |
| Ad hoc recording | **Yes, as gap 1** (the participants popover with "Add learner"). |
| Recording-quality feedback (Teams style) | Cheap: a one-line "How was the recording?" 👍/👎 on the Debriefs list or after Stop. Concept frame only. |
| Watch recordings from events | Partly there (dashboard "Open debrief"). It came up in the standup (events ↔ recordings). One frame: past event in the calendar → its recording. Concept, not in the IMSH row. |
| Settings + user manager | **A separate module.** The side nav already has "People". User management is a recurring coordinator job (every semester), while settings (rooms, cameras, simulators) is rare admin setup. Putting People under Settings hides a frequent task behind an admin door. Concept only, outside the IMSH row. |
| System health check + Center overview | **Merge them into one screen.** A centre overview (rooms, live status, today's sessions) is the natural place for health status. Concept only. |
| Import events/users from Excel | **Cut on 10-05 by Gergely.** Don't spend this week on it. |
| Extras: landing page, ElevenLabs voice modulator | Out of scope for Friday. The voice modulator is explicitly out ("SRV sound controls"). |

Everything marked "concept only" goes on the "NEXT · explorations" page, not into the IMSH row, so Friday's story stays the five steps.

---

## Update 10-12 (afternoon): the page structure and decisions

Daniel's answers to the review above. The prompts A and B from the morning version are **replaced** by W1–W4 below.

**Pages, one direction of travel:**

| Page | Role | Rule |
|---|---|---|
| wireframe test - astryx (40:48) | **Drafts.** Variants, rounds, experiments | Read-only source. Never edited again, only cloned from. |
| NEXT · explorations (202:8898) | **Concepts** that aren't decided yet (health check, centre overview, swipe ideas) | Rough is fine. A screen graduates to Wireframe once it's agreed. |
| **Wireframe (288:19165)** | **Final greyscale wireframes, Astryx.** One frame per screen state, no variants, no version suffixes | Section "IMSH flow" = one horizontal row in story order. Section "Beyond IMSH" = one row per module. |
| UI (288:19166) | Colour and detail on top of Wireframe | Same sections, same order and positions as Wireframe, so each UI frame sits under the same x as its wireframe. |
| IMSH · final (202:8897) | **The presentation.** The flow row with hotspots and prototype links | Built **once, at the end**, from UI (or from Wireframe if UI isn't ready by Friday = plan B). |

Each screen ends up in three places (Wireframe, UI, IMSH final), so copy forward only and never fix backwards: a fix goes into the latest page, and IMSH final is rebuilt rather than patched.

**Decisions:**
- **V3-r1 is not run as a separate step.** Its three fixes are folded into W1–W3 below, applied to the clean copies on Wireframe. Patching drafts we're leaving behind is wasted work.
- **Clips: A (no Approve; sharing approves).** C's bigger video doesn't survive a real 16:9 player. B puts a second sharing decision on the screen. The swipe idea from the standup (accept/reject AI clips like TikTok) is good, but it belongs in the share sheet as "Review 3 AI clips", not in the debrief layout. That gives the wow moment without crowding the showpiece.
- **The recording view is a non-touch desktop screen, and the debrief runs on an iPad first, a laptop second.** This changes my call. The recording keeps running when you leave the SRV (S7a banner), so navigating away is a real path and the nav is earned. The SRV gets the **desktop shell with the sidebar collapsed to an icon rail** (~56 px instead of ~200) plus the top bar with the logo. Cost: ~48 px of height on the densest screen, so the frame may grow to 1440×960. The iPad debrief keeps its own full-screen header (the Debriefs list already carries the logo). New: a **laptop debrief** (1440×900) inside the desktop shell with the collapsed rail. This also answers Patrik's "debrief without an external device".
- **Out for now:** health check and centre overview (Daniel is collecting references). The design-system pass waits.
- **In, as "Beyond IMSH":** Excel import (events + users), the People module (user manager, separate from Settings), Settings (rooms, cameras, simulators), recordings from events, recording-quality feedback, the voice modulator (already a control in the SRV; the ElevenLabs simulation is a prototype task, not Figma). For Friday the order is the IMSH flow first, then "and beyond". Gergely picked the five steps, so they get the polish.

---

## Shared rules for W1–W4 (paste at the top of each)

```
Load the figma-use skill first. File: Essentials 2.0 - wireframes.
SOURCE = page "wireframe test - astryx" (40:48). READ-ONLY: never edit, move or delete anything there. Clone (node.clone()) what you need and append the clone to the target section.
TARGET = page "Wireframe" (288:19165). Use ONLY the Astryx library, Neutral Light, greyscale (recording red is the one exception). Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Naming: "<#> · <Screen>" with NO version suffix (e.g. "8 · Debrief (iPad)"). One frame per screen state.
Layout: Section "IMSH flow" at x=0, y=0. Frames in ONE horizontal row in step order, top-aligned, 160 px gaps. Above each frame a 24 px text label "<#> · <Screen>"; nothing else on the canvas.
SHELL (desktop staff screens): copy the top bar + sidebar from 235:8839 (logo · divider · "Riverbend College of Nursing", search, help, user menu); set the right nav item active. Never rebuild the shell.
COLLAPSED SHELL (SRV, laptop debrief): same top bar; sidebar collapsed to an icon rail. Use the SideNav's collapsed state if the component has one; otherwise SideNavItems with labels hidden at 56 px width. Report which one you used.
Duplicated Dev Mode annotations: delete them on every clone.
```

## W1 · IMSH steps 1–6 (dashboard → calendar → recording)

```
<Shared rules>
1 · Dashboard (week before): clone 235:8839. Today = Mon Jan 12. Today's list: two other events (NURS 340 rows). NURS 310 · Sepsis recognition moves to Upcoming as "Tue 19 Jan, 10:00 · Sim Room 2 · Group A" with a "No learners" Badge. Mini calendar selects 12.
2 · Calendar: clone 235:15917. Week Jan 19–23 seen from Jan 12 (no "today" highlight on 19). Banner: "1 of your events next week has no learners assigned."
3 · Edit event: clone 270:16656. No change.
4 · Dashboard (sim day): clone 235:8839. No change.
4b · Participants popover: clone 268:15677 (recording view v3), apply the COLLAPSED SHELL (frame may grow to 1440×960; keep all controls, compress the camera area if needed). The SRV's own header row (Back to event, title, avatars) sits under the top bar. Clicking the avatar stack opens a Popover anchored under it (320 px): title "Participants · 5"; rows = Avatar + name + Checkbox; Olivia Grant unticked, muted, "Absent" Badge; divider; "+ Add learner" Button that shows a Typeahead "Name or email"; 12 px muted footnote "Changes apply to this recording only." Header count "4 present · 1 absent".
5 · Recording view: same as 4b without the popover.
5+ · Recording banner: clone 270:23813. No change.
6 · Stop confirmation: clone 268:16235, apply the same COLLAPSED SHELL as 5.
One screenshot per frame. Reply in under 6 lines.
```

## W2 · IMSH steps 7–15 (debrief → share)

```
<Shared rules> Continue the "IMSH flow" row after 6.
7 · Debriefs list (iPad): clone 262:18563. No change.
8 · Debrief (iPad): clone 259:12192. (a) Video at 16:9 at the column width (keep FILL and radius); the left column's content moves up, spare space goes to the bottom. (b) Clips = option A from 271:18471: remove the Approve buttons; badges bottom-right of each card. (c) AI summary card WITHOUT notes: remove "1 photo of notes", the "From your notes" chip and the notes text; add a secondary Button "Add photo of notes" (camera icon) under the summary, plus 12 px muted "Handwritten notes are read by the AI and added here."
8L · Debrief (laptop): 1440×900, COLLAPSED SHELL, same content as 8 laid out for the wider canvas (video left, summary + checklist right). No other changes.
9 · Display picker: clone 262:19023, apply 8's changes (a) and (b).
10 · Room TV showing: clone 262:19712. No change.
11 · Photo of notes, capture: clone 247:11932. No change.
12 · Photo of notes, check: clone 247:11946. No change.
13 · Debrief with notes: clone 260:18623, apply 8's (a) and (b) (keep the notes in the summary).
14 · Share with participants: clone 264:14426 on top of 13. Under "What to share" add a row "AI clips · 3" with a secondary Button "Review clips".
14r · Review clips: same base. Side sheet shows one clip at a time as a big card (thumbnail 16:9, title, time) with two Buttons "Skip" (x) and "Include" (check), counter "1 of 3", and a hint "Swipe right to include, left to skip".
14a · Preview as learner: clone 267:22719. AI summary expanded (it's the learner's main takeaway).
15 · Shared: rebuild 244:14103 on top of 13 (real video, Show on screen button); same side sheet.
One screenshot per frame. Reply in under 6 lines.
```

## W3 · IMSH steps 16–17 (reports)

```
<Shared rules> Continue the "IMSH flow" row after 15.
16 · Reports: clone 269:16842. (a) Move the weekly chart legend into the card header row, right-aligned before the ellipsis, clear of the "20 h" label. (b) Room / Simulator / Types of sessions: delete the vertical ticks; under each black bar add a 6 px outline bar (1 px #6B6B6B stroke, no fill) scaled to last year's value, same left edge, 2 px gap. Keep "61 h · 50 h last year". Two-swatch legend (12 px) in each card header.
16c · Customize report: rebuild 270:23151's dialog on top of 16.
17 · Schedule weekly report: rebuild 270:24785's dialog on top of 16.
One screenshot per frame. Reply in under 6 lines.
```

## W4 · Beyond IMSH (after W1–W3; one module per Cursor chat)

New Section "Beyond IMSH" under "IMSH flow" (y = IMSH row bottom + 400), one row per module. These need short briefs first. Ask Claude for the prompt per module, in this order (cheapest and most demo-able first):
1. **Excel import**: Calendar "Import" → upload → column mapping → preview with conflicts → done (events + learners).
2. **People** (user manager): list, filters (role, group), learner detail, add/import users.
3. **Recordings from events**: past event in the calendar → its recording/debrief.
4. **Recording-quality feedback**: one-line 👍/👎 after Stop or on the Debriefs list, plus a "what went wrong" chip set.
5. **Settings**: rooms, cameras, simulators (simplified, modernised add flows).
6. **Voice modulator**: already in the SRV; a focused state frame only if the prototype needs it.

## Later · the IMSH final board (run last)

Run this once UI is done, or on the Wireframe frames as plan B. Claude will re-check the frame names before you run it.

```
Load the figma-use skill first. Work ONLY on the page "IMSH · final" (202:8897). Never edit other pages: clone the frames of Section "IMSH flow" from the page "UI" (plan B: "Wireframe") in their order into a new Section "IMSH demo flow", one horizontal row, top-aligned, 160 px gaps.
Above each frame: an 8 px colour bar, the step number 40 px bold, the screen name 24 px. Under each frame: "Tap: <action>" 20 px.
Create ONE component "CUSTOM · Hotspot" (44×44 circle, no fill, 4 px #C81E1E stroke, a 28 px red pill with a white 14 px label at its top-left). Place an instance on each tapped element, found by its text layer: 1 "Calendar" nav · 2 the NURS 310 event · 3 "Assign group", "Save event" · 4 "Start recording" · 4b the avatar stack, Olivia's checkbox · 5 a checklist "Yes", "Marker", "Stop recording" · 5+ "Open recording view" · 6 "Stop recording" (dialog) · 7 "Open debrief" · 8 "Show on screen", "Add photo of notes" · 9 "Sim Room 2 monitor", layout control · 11 "Take photo" · 12 "Use photo" · 13 "Share with participants" · 14 "Review clips", "Preview as learner", "Share with 4 learners" · 14r "Include" · 14a "Back to sharing" · 15 "Done" · 16 period tabs, "Schedule weekly report" · 17 "Schedule".
Prototype: last hotspot of each frame → On click → Navigate to the next frame (14 "Review clips" → 14r → back to 14; "Preview as learner" → 14a → back to 14; 8L is a side branch from 7). Flow start = frame 1, named "IMSH demo". 2 px #444 arrows between frames.
One screenshot of the section. Reply in under 6 lines.
```
