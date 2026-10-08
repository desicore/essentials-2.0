# Review · 10-08 evening · v2 annotations → v3 round + TV-C2 into Figma

Source: Daniel's Dev Mode annotations in the Section "v2 · 10-08 review round" (235:8821) and his sketch frames 251:23164 / 251:25721. Same rule as v2: **never edit an existing frame**; every prompt duplicates and names the copy `… · v3`.

## What the annotations ask, and where I refine them

| # | Annotation | My take |
|---|---|---|
| 1 | Absent learners: put them in the avatar stack, crossed/greyed, stack the avatars slightly; label "4 learners 1 absent" (Debrief, SRV, Share sheet "what if several are absent?") | **Agree, one wording change.** "4 learners, 1 absent" reads as 4 total *or* 5 total. Use **"4 present · 1 absent"**. The absent avatar: greyed, 1 px diagonal strike, **and** a small `user-x` badge, so it isn't colour alone. In the share sheet, absent learners become a collapsed group **"Absent (1)"**, each row with an **"Include"** button; that scales to any number of absentees. |
| 2 | SRV: move the recording controls back above the player (as in 207:14842) | **Accepted.** My header argument was about consistency with the banner; your toolbar placement (E3b) has the stronger safety argument anyway. The header right keeps only the learner stack. |
| 3 | Reports: compare is on but no chart shows last year | **Agree, it's confusing.** I'd brief the comparison on the tiles only (Gabor's "too complex" point). But a switch that changes nothing visible is worse. Weekly chart: paired bars (this year solid, last year outline only); horizontal charts: a thin tick for last year's value. The last-year split per week, room, simulator and session type isn't in `seed.json`. The values below are **illustrative** (they add up to the seed's previous totals). |
| 4 | Debrief: collapsible AI summary | **Agree.** Collapsed shows **2 lines** (1 line said nothing) with the "From your notes" badge still visible, plus "Show more". Your sketch says "2 photos"; the seed has **one** (10:31), so "1 photo of notes". The learner preview (V3-3) is the safety net: the summary is read in full before it's shared. |
| 5 | Debrief: 3 clip-card sketches | **Variant 1** (16:9 thumbnail with duration badge · title · range · Approve under the title). Variant 2 makes Approve the biggest thing on the card and drops the thumbnail, but playing the clip is the main action. Variant 3 is variant 1 with a thumbnail too small to recognise. Tapping the thumbnail plays (play icon on hover/press). |
| 6 | Share sheet: link section too tall | Agree: one row. `link` icon · "Secure link" · select "14 days" · muted "until Feb 2, 2027". The explanation goes into the select's helper/tooltip. |
| 7 | Learner preview: right panel cramped | Same treatment as the debrief: collapsible summary, the variant-1 clip cards (without Approve), flat checklist rows. |

**One thing the annotations didn't mention, from TV-C2:** option C was decided on 10-08 (tablet first, TV optional). So the debrief header's **"Room display · Single / Dual / Quad"** control is outdated: in C2 the layout lives inside the **"Show on screen"** picker, and the button only appears when a display is available. V3-1 fixes that.

## Images (generated 10-08, `wireframe-benchmark/assets/`)

| File | What | Used for |
|---|---|---|
| `cam1-sim-room-wide.png` | Ceiling camera, wide: 4 students around the manikin | Debrief video, SRV Camera 1, TV display, Debrief list thumbnail |
| `cam2-iv-fluids.png` | Foot-of-bed camera: hanging the saline bag | SRV Camera 2, clip "Fluids before cultures" |
| `cam3-lab-results.png` | Student reading lab results at the workstation | SRV Camera 3, clip "The lactate result", TV display paused at 04:12 |
| `cam4-sbar-phone.png` | Student on the wall phone with the SBAR sheet | clip "SBAR handoff" |
| `s8a-…`, `s8b-…` | Photo of notes | already placed in v2 |

All 1536×864 (16:9). Same greyscale rule as V2-5: saturation filter −100 after placing.

---

## Run order (all on page "wireframe test - astryx" → one at a time, each a new Cursor chat)

**V3-1 Debrief → V3-5 TV-C2 → V3-3 Share + preview → V3-2 Recording → V3-4 Reports → V3-6 Shell rollout.** V3-5 and V3-3 duplicate the debrief from V3-1.

### Shared blocks (every prompt points Cursor here)

```
RULES. Create new frames using ONLY the Astryx library. NEVER edit, move or delete an existing frame; work only on duplicates. New frames go in a new Section "v3 · 10-08 evening round" placed 400 px below the Section "v2 · 10-08 review round" (create it if missing), one row per prompt, 200 px gaps, frames named "… · v3".
Match the established Astryx look of the v2 frames: same type styles, spacing, radii, borders, button variants and sizes. Reuse parts by duplicating them from existing v2/v3 frames before building anything new. Greyscale; the only colour is recording red #D92D20.
Icons: follow the "Icon recipe" block in @wireframe-benchmark/reviews/10-08-v2-round.md exactly.
SHELL (Daniel, 10-08): every staff-app frame with the left nav uses the shell of "S1 · Dashboard · Astryx · v2" (235:8839): top bar = ls-essentials-logo-small · 1 px divider · "Riverbend College of Nursing", search, help, user menu; sidebar WITHOUT the "Essentials" row. Copy that top bar + sidebar from 235:8839 and set the right nav item active; never rebuild it. Tablet screens without nav keep their own header.

IMAGE RECIPE. Create the target rectangle or frame first (the placeholder's exact size and corner radius), then call the Figma MCP tool upload_assets with count=N, nodeIds=[...target ids in order], scaleMode FILL. POST each PNG from the terminal: curl -X POST -H "Content-Type: image/png" --data-binary @wireframe-benchmark/assets/<file> "<upload url>". Then set each image paint's saturation filter to -100. Remove the old placeholder icon + label.

AVATAR STACK (learners). 5 initials Avatars, size SM, overlapping by 8 px, each with a 2 px white ring (stroke) so the overlap reads. Order: EB, PS, MC, NP, then OG. OG is absent: avatar at 40 % opacity, a 1 px #6B6B6B diagonal line across it, and a tiny user-x badge at its bottom-right. Label right of the stack: "4 present · 1 absent" (14 px, "1 absent" muted). No absent name written out.
```

### V3-1 · Debrief v3 (collapsible summary, clip variant 1, real video)

```
Read first: @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks, table rows 1, 4, 5, and the TV-C2 note) and @wireframe-benchmark/wireframe-brief.md "Screen 2 · Debrief". Load the figma-use skill before any Figma tool call.
<Apply RULES, IMAGE RECIPE and AVATAR STACK from the Shared blocks.>

Base: duplicate Daniel's sketch "S8c · Debrief · Astryx · v2" (251:25721): its card layout on white is the direction. Make TWO frames:

1. "S8c · Debrief · summary collapsed · v3"
   a. Header: remove "Room display" + the Single/Dual/Quad control. In their place a secondary Button "Show on screen" (icon cast). Keep Ready and "Share with participants".
   b. Learners row (right panel top): replace with the AVATAR STACK.
   c. AI summary card, COLLAPSED: header row sparkles icon · "AI summary" · muted "1 photo of notes" · chevron-down icon button (right). Body: the first 2 lines of the summary text, ending with "…", then the Neutral badge "From your notes" (pencil-line) on its own line, then a link-style button "Show more". Use the summary text from S8c (228:7076).
   d. Checklist card: as in the sketch (tabs "Checklist · 7" · "Annotations · 6").
   e. Video: image cam1-sim-room-wide.png, FILL, same radius as the placeholder.
   f. AI clips row: three cards, sketch VARIANT 1 (the left card in 255:26548): 16:9 thumbnail on the left with a duration badge bottom-left (0:50 / 1:00 / 0:50) · title · range under it (12 px muted) · secondary Button "Approve" (check, default size, hug) under the title. Thumbnails: The lactate result = cam3-lab-results.png, 03:50–04:40 · Fluids before cultures = cam2-iv-fluids.png, 08:30–09:30 · SBAR handoff = cam4-sbar-phone.png, 10:50–11:40. Titles wrap to 2 lines max, never truncated.
2. "S8c · Debrief · summary expanded · v3": duplicate frame 1. The summary card is EXPANDED: chevron-up, full summary text with the "From your notes" badge inline before the added sentence, the photo source row (48 px thumbnail = s8b-photo-of-notes.png · "Photo of notes · 10:31" · trash-2), then "AI-generated · review before sharing" and "Add another photo". The checklist card moves down; let its list scroll inside the card (show it clipped at the frame bottom).

Screenshot each frame and fix on the new nodes. Reply in under 8 lines: node ids, icon fallbacks.
```

### V3-5 · TV-C2 "Show on screen" flow, migrated from Pencil

```
Read first: @wireframe-benchmark/explorations/tablet-tv.md ("Decision · 10-08" and "Prompt TV-C2"), @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks), and look at the 8 reference images @wireframe-benchmark/explorations/tv-c2/step-1.png … step-8.png (exported from the Pencil file pen-files/explore/tablet-tv-C2.pen). Load the figma-use skill before any Figma tool call.
<Apply RULES, IMAGE RECIPE and AVATAR STACK from the Shared blocks.>

The Pencil frames are the CONTENT and FLOW reference only. Do NOT copy their styling: rebuild every screen in the Astryx look of the v2/v3 frames (Astryx instances, type styles, buttons, popover/dialog built the same way as "S6c · Customize report" and the Stop confirmation dialog). Where Pencil shows a grey box "Debrief (as in Screen 2)", use a duplicate of "S8c · Debrief · summary collapsed · v3" instead, so every tablet step shows the real debrief.

Put the flow in its own Section "TV-C2 · Show on screen" inside the v3 Section, two rows like the Pencil file, row titles 32 px: "Tablet only (corridor debrief, no TV)" and "With a display". Frame titles above each frame ("1 · …").

Row 1
1. "1 · Debriefs list" 1194×834: tablet, no nav. Top bar: ls-essentials-logo-small (207:12316) · 1 px divider · "Debriefs" · right Avatar MO + "Dr. Maya Ortiz". A highlighted card: thumbnail (cam1-sim-room-wide.png, 200×112) · circle-check "Ready for debrief" · "NURS 310 · Sepsis recognition" · muted "Group A · Sim Room 2 · stopped 1 min ago" · primary Button "Open debrief" (arrow-right). Under it "Recent debriefs": 2 ListItems with chevron-right (NURS 340 · Postpartum hemorrhage · Group A · today 09:24 / NURS 310 · Chest pain (STEMI) · Group A · Jan 14).
2. "2 · Debrief, no display": duplicate the collapsed debrief v3 and REMOVE the "Show on screen" button. Beside the frame, a note card (CUSTOM · Note, 400 wide, #F4F4F4, 12 px radius, 14 px text): "No display available → no TV controls. Nothing says 'TV missing'. The debrief is complete on the tablet alone."
Row 2
3. "3 · Display available": duplicate the collapsed debrief v3 as is ("Show on screen" visible).
4. "4 · Display picker": duplicate 3; open a popover under "Show on screen", about 360 wide, built like the S6c popover: title "Show on screen" · group "Where this event ran": ListItem monitor icon "Sim Room 2 monitor" · muted "Sim Room 2" · check + "Selected" · group "Other displays": tv icon "Debrief Room A display" · divider · plus icon "Another screen…" · muted "Enter the code shown on the screen" · group "Layout": Astryx SegmentedControl Single (selected) / Dual / Quad with icons. (Label changed from Pencil's "In this room": the tablet doesn't know which room it is in, but the event does.)
5. "5 · Another screen: enter code": duplicate 3, add the overlay and a dialog built like the Stop confirmation: title "Show on another screen" · text "On the screen, open learningspace.riverbend.edu/display. Enter the code it shows." · a TextInput showing "K7Q-4MP" · muted "Only for this debrief." · "Cancel" (secondary) · "Connect" (primary).
6. "6 · Display, waiting" 1920×1080: white page, centred: ls-essentials-logo-small (local component 207:12316) · large code "K7Q-4MP" (64 px, tabular) · muted "Registered displays connect automatically. Ask your admin to add this screen." Nothing else.
7. "7 · Send an annotation": duplicate 3. Header: replace "Show on screen" with a secondary dropdown Button "On screen: Sim Room 2 monitor" (cast, chevron-down) + secondary Button "Stop showing" (x). Right panel: Annotations tab active; the row "04:12 · Maya · Discuss · Lactate result not escalated" is selected (muted fill) with a secondary Button "Show on screen" (cast) under its text. Other rows as in the brief's annotation list.
8. "8 · Display, showing" 1920×1080: full-bleed cam3-lab-results.png (paused frame at 04:12). Top-left chip "NURS 310 · Sepsis recognition · Group A"; top-right chip pause icon "Paused at 04:12". Bottom: a lower-third card (white, 4 px left bar #111111): message-circle "04:12 · Discuss · Maya" (24 px muted) and "Lactate result not escalated" (56 px semibold). Progress bar 04:12 / 17:40 under it. Chips and card use Astryx surfaces/radii.
At the end of row 2, a CUSTOM · Note: "Admin, once per screen: Settings → Displays → Add display → enter the code shown on the screen → name it and pick its room. (Balázs's pairing code, used once for setup.)"

Screenshot each frame; fix overlaps and clipped text on the new nodes. Reply in under 10 lines: what was CUSTOM, icon fallbacks.
```

### V3-3 · Share sheet v3 + learner preview v3

```
Read first: @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks, rows 1, 6, 7) and @wireframe-benchmark/wireframe-brief.md "Screen 9". Load the figma-use skill before any Figma tool call.
<Apply RULES, IMAGE RECIPE and AVATAR STACK from the Shared blocks.>

1. "S9a · Share with participants · v3": duplicate "S9a · Share with participants · Astryx · v2" (244:13042). Swap the dimmed background for a duplicate of "S8c · Debrief · summary collapsed · v3" (copy the sheet + overlay onto it). In the sheet:
   a. Learners: 4 rows as now (with remove x). Then a collapsed row "Absent (1)" (chevron-down, user-x icon). Show it EXPANDED: one row "Olivia Grant · ogrant@student.riverbend.edu" in muted text with a secondary Button "Include" (plus). Delete the line "Olivia Grant was absent and isn't included."
   b. Link: ONE row: link icon · "Secure link" · Select "14 days" (size SM) · muted "until Feb 2, 2027" · info icon button (tooltip: "Opens in the browser without logging in"). Delete the old 3-line block.
   c. The role note and the rest stay.
2. "S9a · Share · several absent · v3": duplicate frame 1; the absent group reads "Absent (2)" with Olivia Grant and "Liam Foster · lfoster@student.riverbend.edu" (ILLUSTRATIVE second absentee, not in seed). Purpose: answers "what if several are absent?".
3. "S9c · Learner preview · v3": duplicate "S9c · Learner preview · Astryx" (245:12744). Video = cam1-sim-room-wide.png. Right panel like the debrief v3: AI summary card COLLAPSED (2 lines + "Show more", badge "AI · reviewed by Dr. Maya Ortiz"), checklist results as flat rows, Clips as the variant-1 cards WITHOUT Approve: The lactate result (cam3) and SBAR handoff (cam4). More whitespace between the three blocks (24 px).

Screenshot each frame and fix on the new nodes. Reply in under 8 lines.
```

### V3-2 · Recording view v3

```
Read first: @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks, rows 1–2). Load the figma-use skill before any Figma tool call.
<Apply RULES, IMAGE RECIPE and AVATAR STACK from the Shared blocks.>

1. "S3 · Recording view · v3": duplicate "S3 · Recording view · Astryx · v2" (241:10154).
   a. Move the recording state (red dot · "Recording" · 08:00) + "Pause" + "Stop recording" from the header into the camera toolbar row, right side, exactly like 207:14842 (copy those nodes). The header right keeps only the AVATAR STACK.
   b. Cameras: Camera 1 = cam1-sim-room-wide.png, Camera 2 = cam2-iv-fluids.png, Camera 3 = cam3-lab-results.png (FILL, keep radii). Keep a small "Camera 1/2/3" label chip at each feed's top-left (white surface, 12 px). Keep Camera 1's selected border and its Preset/zoom toolbar.
2. "S3 · Stop confirmation · v3": duplicate frame 1 and copy the overlay + dialog from "S3 · Stop confirmation · Astryx · v2" (241:16753).
Screenshot each and fix. Reply in under 6 lines.
```

### V3-4 · Reports v3: the comparison shows in the charts

```
Read first: @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks, row 3) and @wireframe-benchmark/wireframe-brief.md "Screen 6". Load the figma-use skill before any Figma tool call.
<Apply RULES from the Shared blocks.>

"S6 · Reports · v3": duplicate "S6 · Reports · Astryx · v2" (235:9430). The compare switch stays ON. Values below are ILLUSTRATIVE (they sum to the seed's last-year totals).
1. Simulation hours per week: each week gets a PAIR of bars: this period solid #111111 (as now), same period last year = outline only (1 px #6B6B6B, no fill), 4 px gap, last-year bar on the left. Last-year values: 10 · 12 · 11 · 13 · 13 · 12 · 14 · 12 · 15 · 13 · 14 · 13. Value labels stay on this period's bars only. Add a legend row under the chart title: a solid swatch "Oct 26, 2026 – Jan 17, 2027" · an outline swatch "Same period last year".
2. Room usage, Simulator usage, Types of sessions: keep the bars; add a 2 px tall, 12 px high vertical tick (#6B6B6B) at last year's value on each bar's track, and append muted text to each value: "61 h · 50 h last year".
   Rooms last year: Sim Room 2 50 · Sim Room 1 47 · Sim Room 3 33 · Sim Room 4 22.
   Simulators last year: manikin 2 46 · manikin 1 43 · Birthing simulator 29 · Pediatric manikin 20 · IV training arm 14.
   Sessions last year: High-fidelity 81 · Task trainer 35 · Standardized patient 22 · Hybrid 8 (footer "174 events · 146 last year").
3. Delete the muted line under the KPI row only if the legend makes it redundant; otherwise keep it.
Screenshot and fix. Reply in under 6 lines.
```

### V3-6 · Shell rollout: the new LearningSpace nav everywhere

```
Read first: @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks, especially SHELL). Load the figma-use skill before any Figma tool call.
<Apply RULES and SHELL from the Shared blocks.>

Duplicate each staff-app frame that still has the old top bar (institution badge + name) or the "Essentials" sidebar row, and swap ONLY the shell (copy top bar + sidebar from 235:8839, set the right nav item active). Change nothing else. Name each copy "<original name> · v3".
- "S2b · Edit event · Astryx" (177:3879) → Calendar active. Also fix the stale helper text: "You can untick anyone later, also on the day." → "You can remove anyone later, also on the day."
- "S6c · Customize report · Astryx" (221:5663) → Reports active.
- "S6b · Weekly report dialog · Astryx" (216:5204) → Reports active. Also add the "Customize" button (secondary, sliders-horizontal) left of "Schedule weekly report", as on S6.
- "S7a · Recording banner · Astryx" → Dashboard active; the recording banner stays ABOVE the new top bar. If there is more than one frame with that name, stop and ask.
- Before you start, list any other frame on the page that is 1440 wide, has the left nav, and isn't on this list or already in the v2/v3 Sections. Ask me before touching those.
One screenshot per frame. Reply in under 6 lines.
```

### V3-7 · EXPERIMENT: three ways to handle Approve on AI clips

Daniel, 10-08: the clip cards still look off (Approve floats at a different height on every card). Three options to compare visually; nothing is decided. Base = Daniel's test frame "AI Clips test" (256:28988).

```
EXPERIMENT. Read first: @wireframe-benchmark/reviews/10-08-v3-round.md (Shared blocks: RULES, icon recipe). Load the figma-use skill before any Figma tool call.
NEVER edit, move or delete an existing frame. Work only on duplicates. Astryx instances only, greyscale.

Another Cursor run may be writing to this page at the same time. So: create your own Section "EXP · Clips approve" placed 2000 px LEFT of the leftmost node on the page (same y as 256:28988), and put all three copies inside it in one row, 200 px gaps. Never place anything outside that Section, and ignore any frame named "… · v3" or any Section named "v3 · …" (another run owns them). Duplicate the frame "AI Clips test" (256:28988) THREE times into that Section. Names:
"EXP · Clips A · no approve" / "EXP · Clips B · inline approve" / "EXP · Clips C · clips tab + swipe".
Change ONLY what is listed for each copy. Keep the existing thumbnail images.

Common fix for A and B (the alignment problem): inside each clip card the text column is vertical auto-layout with SPACE_BETWEEN, so the title + range sit at the top and the status element (badge or button) is pinned to the card's BOTTOM edge. All three cards share the tallest card's height. Titles wrap to 2 lines max, never truncated.

A · no approve (sharing approves, Q-28 = yes)
- Delete the "Approve" button from all three cards.
- At the bottom of the text column: a Neutral Badge, size SM, sparkles icon + "Not shared yet".
- Under the clips row, one muted 12 px line with an info icon: "AI clips reach learners only if you tick them when sharing."

B · inline approve, with an approved state
- Replace each "Approve" button with a ghost Button, size SM, check icon + "Approve", pinned bottom-left of the text column.
- Show mixed states: "The lactate result" APPROVED → instead of the button, a Neutral Badge size SM, check icon + "Approved" (tooltip "Tap to undo"); "Fluids before cultures" and "SBAR handoff" show the ghost "Approve".

C · clips move into the side panel as a tab, with a swipe shortcut
- Left column: delete the whole "AI clips" section (header + cards). Let the Player grow to fill the freed height (video taller, timeline and controls stay under it, keep the image FILL).
- Side panel, "Checklist card": add a third Tab "Clips · 3" after "Annotations · 6" and make it ACTIVE (hide the checklist panel, keep it in the layers).
- Clips tab panel: 3 full-width ListItem rows with dividers. Each: 120×68 thumbnail (copy the image from the matching card, keep the duration badge) · title (14) + range (12 muted) · right: ghost Button SM check + "Approve". "The lactate result" is APPROVED (Neutral Badge check + "Approved" instead of the button).
- Row 2 ("Fluids before cultures") shows the SWIPE state: the row content is shifted 112 px to the left and clipped; the revealed area on the right is a 112 px wide block, fill #111111, with a white check icon over white "Approve" text, centred. Name it "CUSTOM · Swipe action". The ghost Approve button is still visible inside the shifted row.
- Under the rows, muted 12 px with an info icon: "Swipe a clip left or tap Approve. AI clips reach learners only when you share them."

After each frame, take a screenshot and fix on the new nodes. Reply in under 8 lines: the three node ids, the clip card height in A and B, icon fallbacks.
```

## Status
- [ ] V3-7 experiment · [ ] V3-1 · [ ] V3-5 · [ ] V3-3 · [ ] V3-2 · [ ] V3-4 · [ ] V3-6 · [ ] reviewed
