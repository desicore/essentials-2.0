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
