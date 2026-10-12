# Exploration · Tablet ↔ debrief ↔ room TV (Pencil)

Added 2026-10-08. Concept exploration, not a benchmark run: **Pencil, not Figma, no log rows.** The winning option goes back into Figma on the `IMSH · final` page afterwards.

**The question:** Maya stops the recording in Sim Room 2 and walks to Debrief Room A (65" wall display, iPad on a stand; `seed.json` → `rooms.debrief-a`). How does the tablet open *this* debrief, and how does it get video onto the TV? Engineering owns the technology (open action from 10-05). We only show the experience.

| Option | Idea | Source |
|---|---|---|
| A · QR code | After Stop, the SRV shows a QR code; scanning it opens the debrief on the tablet | Gabor, 10-06 / 10-07 checkpoints |
| B · Pairing code | The room's PC/TV shows LS with a **Use for debriefing** button and a short code; the tablet enters the code and drives the TV (like pairing a phone with a smart TV for YouTube) | Balázs Vegső, 10-05 engineering call |
| C · Room-aware | The event knows its debrief room. The Debrief Room A tablet already shows "Ready for debrief: NURS 310 · Sepsis recognition"; the TV appears in a device list ("Show on Debrief Room A display", Spotify Connect style) | Daniel + Claude, 10-08 |

**Shared content for all three** (from `wireframe-brief.md` Screen 2 and `seed.json`): NURS 310 · Sepsis recognition · Group A · Sim Room 2 · Jan 19, 10:02–10:19 (17:40) · Dr. Maya Ortiz · AI clip "The lactate result 03:50–04:40" · annotation "04:12 · Discuss · Lactate result not escalated". Room display layouts: Single / Dual / Quad.

**What goes on the TV (same for all three):** the video in the chosen layout, and **one item at a time** when Maya sends it (an AI clip or an annotation), never the whole side panel (Q-22).

**Running them:** three Cursor agents **in parallel**, one per option. Each writes to **its own .pen file**, so they can't collide. Pencil MCP `execute` takes a `filePath`: always pass it.

---

## Shared rules (already included in each prompt below)

```
Pencil rules for this exploration:
- Work ONLY in your own file (path given below). Create it if it doesn't exist. Always pass that filePath to every Pencil tool call. Never open or edit any other .pen file.
- Call get_app_state first and read the execute documentation before drawing.
- Lo-fi, greyscale: #FFFFFF / #F4F4F4 / #E6E6E6 / #6B6B6B / #111111. The only colour is recording red #D92D20, and only on a recording indicator.
- Inter, 14 body / 12 meta / 16–18 titles. lucide icons, 16–20 px. Status is icon + label, never colour alone.
- Real content only (from the brief section quoted in the prompt). No lorem ipsum.
- Frames side by side, left to right in story order, 120 px gaps, each frame titled above it ("1 · …", "2 · …").
- Don't design the whole debrief screen again: show the debrief side panel and header only where the step needs them; put a grey placeholder "Debrief (as in Screen 2)" for the rest.
- After each frame, screenshot it and fix overlaps and cut-off text before moving on.
- Reply in under 10 lines: the steps Maya takes (count taps), what could go wrong, and one open question for engineering.
```

---

## Prompt TV-A · QR code

```
Concept exploration in Pencil: option A, "QR code", for getting from the recording to the debrief tablet and the room TV.
File: pen-files/explore/tablet-tv-A-qr.pen
Read first: @wireframe-benchmark/explorations/tablet-tv.md (whole file) and @wireframe-benchmark/wireframe-brief.md ("Screen 2 · Debrief", "Screen 3 · Recording view").
Pencil rules for this exploration:
- Work ONLY in your own file (path given below). Create it if it doesn't exist. Always pass that filePath to every Pencil tool call. Never open or edit any other .pen file.
- Call get_app_state first and read the execute documentation before drawing.
- Lo-fi, greyscale: #FFFFFF / #F4F4F4 / #E6E6E6 / #6B6B6B / #111111. The only colour is recording red #D92D20, and only on a recording indicator.
- Inter, 14 body / 12 meta / 16–18 titles. lucide icons, 16–20 px. Status is icon + label, never colour alone.
- Real content only (from the brief section quoted in the prompt). No lorem ipsum.
- Frames side by side, left to right in story order, 120 px gaps, each frame titled above it ("1 · …", "2 · …").
- Don't design the whole debrief screen again: show the debrief side panel and header only where the step needs them; put a grey placeholder "Debrief (as in Screen 2)" for the rest.
- After each frame, screenshot it and fix overlaps and cut-off text before moving on.
- Reply in under 10 lines: the steps Maya takes (count taps), what could go wrong, and one open question for engineering.

Frames:
1. "1 · SRV after Stop" (1440×900, only the camera area + header need detail): the recording has stopped; a card "Recording saved · processing" with a large QR code and "Scan with the debrief tablet to open this debrief" plus the short link "ls.riverbend.edu/d/7K2Q".
2. "2 · Tablet: scan" (1194×834): the tablet's camera scanning the QR (the tablet has a "Scan to open" entry on its start screen).
3. "3 · Tablet: debrief opened" (1194×834): header with "Ready", and a "TV: not connected" control in the header. Tapping it shows the TV list or a second QR flow on the TV (decide which is simpler and show only that).
4. "4 · Tablet: send a clip to TV" (1194×834): the AI clip card "The lactate result 03:50–04:40" with a "Show on TV" button; the header shows "On TV: Debrief Room A display".
5. "5 · Room TV" (1920×1080): the clip playing full screen, a small caption "NURS 310 · Sepsis recognition · The lactate result", nothing else.
```

## Prompt TV-B · Pairing code

```
Concept exploration in Pencil: option B, "pairing code", for getting from the recording to the debrief tablet and the room TV.
File: pen-files/explore/tablet-tv-B-pairing.pen
Read first: @wireframe-benchmark/explorations/tablet-tv.md (whole file) and @wireframe-benchmark/wireframe-brief.md ("Screen 2 · Debrief").
Pencil rules for this exploration:
- Work ONLY in your own file (path given below). Create it if it doesn't exist. Always pass that filePath to every Pencil tool call. Never open or edit any other .pen file.
- Call get_app_state first and read the execute documentation before drawing.
- Lo-fi, greyscale: #FFFFFF / #F4F4F4 / #E6E6E6 / #6B6B6B / #111111. The only colour is recording red #D92D20, and only on a recording indicator.
- Inter, 14 body / 12 meta / 16–18 titles. lucide icons, 16–20 px. Status is icon + label, never colour alone.
- Real content only (from the brief section quoted in the prompt). No lorem ipsum.
- Frames side by side, left to right in story order, 120 px gaps, each frame titled above it ("1 · …", "2 · …").
- Don't design the whole debrief screen again: show the debrief side panel and header only where the step needs them; put a grey placeholder "Debrief (as in Screen 2)" for the rest.
- After each frame, screenshot it and fix overlaps and cut-off text before moving on.
- Reply in under 10 lines: the steps Maya takes (count taps), what could go wrong, and one open question for engineering.

Frames:
1. "1 · Room TV: LS start" (1920×1080): the LearningSpace sign-in page on the room's PC/TV with a large secondary option "Use for debriefing".
2. "2 · Room TV: pairing code" (1920×1080): "Debrief Room A" and a large 6-character code "K7Q-2MX", with "On your tablet, open Debrief and enter this code." and a small "Code changes in 4:59".
3. "3 · Tablet: enter code" (1194×834): Maya's debrief list ("Ready for debrief: NURS 310 · Sepsis recognition · stopped 2 min ago"), and a "Connect to a room display" sheet with a 6-character code field.
4. "4 · Tablet: connected" (1194×834): header shows "Connected: Debrief Room A display" with a disconnect option; the Room display layout control (Single / Dual / Quad) is now enabled. The AI clip card has "Show on TV".
5. "5 · Room TV: showing" (1920×1080): Dual layout (Camera 1, Camera 2), small corner label "Controlled from Dr. Maya Ortiz's tablet".
```

## Prompt TV-C · Room-aware

```
Concept exploration in Pencil: option C, "room-aware", for getting from the recording to the debrief tablet and the room TV.
File: pen-files/explore/tablet-tv-C-room-aware.pen
Read first: @wireframe-benchmark/explorations/tablet-tv.md (whole file) and @wireframe-benchmark/wireframe-brief.md ("Screen 2 · Debrief").
Pencil rules for this exploration:
- Work ONLY in your own file (path given below). Create it if it doesn't exist. Always pass that filePath to every Pencil tool call. Never open or edit any other .pen file.
- Call get_app_state first and read the execute documentation before drawing.
- Lo-fi, greyscale: #FFFFFF / #F4F4F4 / #E6E6E6 / #6B6B6B / #111111. The only colour is recording red #D92D20, and only on a recording indicator.
- Inter, 14 body / 12 meta / 16–18 titles. lucide icons, 16–20 px. Status is icon + label, never colour alone.
- Real content only (from the brief section quoted in the prompt). No lorem ipsum.
- Frames side by side, left to right in story order, 120 px gaps, each frame titled above it ("1 · …", "2 · …").
- Don't design the whole debrief screen again: show the debrief side panel and header only where the step needs them; put a grey placeholder "Debrief (as in Screen 2)" for the rest.
- After each frame, screenshot it and fix overlaps and cut-off text before moving on.
- Reply in under 10 lines: the steps Maya takes (count taps), what could go wrong, and one open question for engineering.

Idea: nothing to scan or type. The event NURS 310 · Sepsis recognition is booked with Debrief Room A as its debrief room, and the room's iPad and wall display are registered to that room. The system already knows where the debrief happens.

Frames:
1. "1 · Tablet on the stand, before" (1194×834): the Debrief Room A tablet's idle screen: room name, clock 10:20, and one big card "Ready for debrief · NURS 310 · Sepsis recognition · Group A · stopped 1 min ago · Dr. Maya Ortiz" with "Open debrief". Below it, small: "Not your session? Show all recent recordings".
2. "2 · Tablet: sign-in check" (1194×834): a light confirmation that it's Maya (her initials avatar + "Continue as Dr. Maya Ortiz" / "Someone else"), because the room tablet is shared.
3. "3 · Tablet: debrief, TV picker open" (1194×834): header button "TV" opens a small device list: "Debrief Room A display · this room" (selected, with a check) and greyed "Sim Room 2 monitor · another room". Under it, the Single / Dual / Quad layout control.
4. "4 · Tablet: send an annotation" (1194×834): the annotation row "04:12 · Discuss · Lactate result not escalated" with a "Show on TV" button; the header now says "On TV: Debrief Room A".
5. "5 · Room TV" (1920×1080): video paused at 04:12 with the annotation text as a lower-third caption.
Also add one note frame (sticky style, 400×300) next to frame 1: "If Maya brings her own tablet instead: the same 'Ready for debrief' card appears at the top of her Debrief list, and the TV picker still lists Debrief Room A first because the event is booked there."
```

---

## Decision · 10-08: option C, with four caveats (Daniel)

C (room-aware) wins: nothing to scan or type. But it assumed things that many schools don't have:

1. **No dedicated tablet on a stand.** Many schools won't have one. The faculty's own (or a shared) tablet must work just as well: the "Ready for debrief" card sits at the top of **her** Debrief list as soon as she stops the recording, because the system knows she ran the event. The room tablet idle screen (old frame 1) becomes one variant, not the main path.
2. **No dedicated debrief room.** Some schools debrief in the corridor outside the sim room. So the debrief is complete on the tablet alone. The event's "debrief room" is optional, and the TV picker only appears when a display is available.
3. **The TV is optional.** No display → the Room display control is hidden, and nothing on the tablet says "TV missing". Sending an item to the TV is an extra, never a step.
4. **How the TV connects is an assumption.** We assumed a PC behind the TV. Not our call (engineering owns it, open action from 10-05), but we recommend an approach so the UX stays honest.

### Recommended approach for engineering (a suggestion, not a spec)

| Layer | What | Why |
|---|---|---|
| **1 · Register a display once** *(Balázs's pairing code, used for setup instead of every debrief)* | Any screen with a browser (smart TV browser, the room PC, a Chromecast/Fire TV stick, a mini PC) opens the LearningSpace **display page**. It shows a short code. An admin enters the code once in Settings and names it "Debrief Room A display" or "Sim Room 2 monitor", linked to a room. | Works with whatever hardware the school has. No per-debrief pairing. |
| **2 · Pick it from the tablet** *(option C)* | The tablet lists registered displays, the event's room first ("Show on Sim Room 2 monitor"), like Spotify Connect. | One tap. Nothing to scan or type. |
| **3 · Unregistered screen** *(option B, as a fallback)* | "Another screen…" in the picker. The screen opens the display page, shows a code, and Maya types it on the tablet. Only for this debrief. | Covers a borrowed TV, a classroom projector, or a corridor monitor. |
| **4 · Plain screen mirroring** (AirPlay / Chromecast) | Not recommended as the main path. It mirrors the whole tablet, including private notes and the side panel (against Q-22: one item at a time). | Could be mentioned as an "it works today" stopgap. |

Q-30 holds the question for engineering.

### Pencil follow-up: TV-C2

`Prompt TV-C2` below redraws option C with the caveats. It goes in its own file. The old C frames stay as the record.

## Prompt TV-C2 · Room-aware, tablet first, TV optional

```
Concept exploration in Pencil: option C v2, "room-aware, tablet first, TV optional".
File: pen-files/explore/tablet-tv-C2.pen
Read first: @wireframe-benchmark/explorations/tablet-tv.md (whole file, especially "Decision · 10-08") and @wireframe-benchmark/wireframe-brief.md ("Screen 2 · Debrief").
Pencil rules for this exploration:
- Work ONLY in your own file (path given above). Create it if it doesn't exist. Always pass that filePath to every Pencil tool call. Never open or edit any other .pen file.
- Call get_app_state first and read the execute documentation before drawing.
- Lo-fi, greyscale: #FFFFFF / #F4F4F4 / #E6E6E6 / #6B6B6B / #111111. The only colour is recording red #D92D20, and only on a recording indicator.
- Inter, 14 body / 12 meta / 16–18 titles. lucide icons, 16–20 px. Status is icon + label, never colour alone.
- Real content only. No lorem ipsum.
- Two rows of frames, left to right in story order, 120 px gaps, each frame titled above it ("1 · …"). Row titles in 32 px above each row.
- Don't redraw the whole debrief: show the header and the side panel only where the step needs them; put a grey placeholder "Debrief (as in Screen 2)" for the rest.
- After each frame, screenshot it and fix overlaps and cut-off text before moving on.

Row 1 · "Tablet only (corridor debrief, no TV)":
1. "1 · Maya's tablet, Debrief list" (1194×834): her own tablet, signed in. At the top, a highlighted card "Ready for debrief · NURS 310 · Sepsis recognition · Group A · Sim Room 2 · stopped 1 min ago" with "Open debrief". Below, "Recent debriefs" (2 plain rows: NURS 340 · Postpartum hemorrhage · Group A · today 09:24 / NURS 310 · Chest pain (STEMI) · Group A · Jan 14).
2. "2 · Debrief, no display" (1194×834): the debrief header with NO room display control and no TV button. A note sticky beside it: "No display available → no TV controls. Nothing says 'TV missing'."

Row 2 · "With a display":
3. "3 · Debrief header, display available" (1194×834): header shows a "Show on screen" button (`cast` icon).
4. "4 · Display picker" (1194×834): a popover from that button. Section "In this room": "Sim Room 2 monitor" (with a check once picked). Section "Other displays": "Debrief Room A display". Then "Another screen…" (`plus`). Under the list, the Single / Dual / Quad layout control (disabled until a display is picked).
5. "5 · Another screen: enter code" (1194×834): a small dialog "Show on another screen". Text: "On the screen, open learningspace.riverbend.edu/display. Enter the code it shows." A 6-character code field showing "K7Q-4MP", and a "Connect" button. Muted: "Only for this debrief."
6. "6 · The display, waiting" (1920×1080): the display page before pairing. Large text "LearningSpace display", the code "K7Q-4MP", and small "Registered displays connect automatically. Ask your admin to add this screen."
7. "7 · Send an annotation" (1194×834): the annotation row "04:12 · Discuss · Lactate result not escalated" with "Show on screen". The header says "On screen: Sim Room 2 monitor" with a "Stop showing" button.
8. "8 · The display, showing" (1920×1080): video paused at 04:12, with the annotation as a lower-third caption.

Add one sticky (400×300) at the end of row 2: "Admin, once per screen: Settings → Displays → Add display → enter the code shown on the screen → name it and pick its room. (Balázs's pairing code, used once for setup.)"

Reply in under 10 lines: taps for the tablet-only path and the display path, what could go wrong, and one question for engineering.
```
