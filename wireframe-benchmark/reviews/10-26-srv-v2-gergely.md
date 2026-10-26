# 10-26 · SRV v2 after Gergely's 10-22 review

Source: the 10-22 design review with Gergely and Balázs (vault: `raw/meetings/2026-10-22-thu--Essentials-Design-review-session.md`, `00:43:15`–`00:45:39`). Gergely asked for this himself at the end of the call. Confirmed again at DePo 10-26.

Target: Figma file **IMSH-MVP** (`dbJVpAusLJCtreiz0jlEh3`), page **"Dashboard (D)"** (305:18292).
Source: Section **"SRV"** (313:14668) on the same page. It stays untouched as the backup of v1. Every v2 frame is a clone.

## How to run

One Cursor chat per line, in this order. Paste the line exactly:

1. `Read @wireframe-benchmark/reviews/10-26-srv-v2-gergely.md. Apply "Shared rules", then run ONLY section "V · Header controls".`
2. `Read @wireframe-benchmark/reviews/10-26-srv-v2-gergely.md. Apply "Shared rules", then run ONLY section "T · Timeline controls".`

## What Gergely asked (10-22)

| # | Ask | Where it lands |
|---|---|---|
| 1 | A **Layout button next to the Audio button**. Click it, a side panel opens with the layout picker, close it when done. Same behaviour as Audio | V1, V2 |
| 2 | **Take the layout control off the screen** (the 1+2 / Single / Grid segmented control above the cameras) | V1 |
| 3 | **No Pause.** It's been in LearningSpace forever and nobody uses it. Just start and stop | V1, T1–T3 |
| 4 | **Try start/stop on the timeline**, like the Microsoft tool Daniel showed. Daniel's worry: accidental stop, so it needs a confirmation | T1–T3 |

Two options for #3/#4 so Daniel can compare before showing Gergely: **V** keeps Stop in the header row, **T** moves it onto the timeline. My pick is **T**: once Pause and the layout control are gone, the header row above the cameras only holds the status and one button. Moving both onto the timeline frees that whole row (~56 px) for the cameras, which was the point of the earlier "quieter SRV" round.

Out of scope here: minimal / advanced / debrief modes (an idea from the same call, not Gergely's ask), the AI-subscription nudge (waits on Gergely's approval), and the other SRV frames (S2–S5). Once Daniel settles on V or T, a follow-up prompt carries the new controls into S2–S5.

## Shared rules

```
Load the figma-use skill first. File: IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "Dashboard (D)" (305:18292).
READ-ONLY on this page: Section "SRV" (313:14668), Section "Gabor SRV" (322:28720), Section "Gabor Dashboard" (305:21628), Section "Dashboard" (307:12786), Section "Dashboard - superseded" (340:18352), and the frames 335:29670 and 335:29843. Never edit, move or rename anything in them, and never append into them.
TARGET = a NEW Section "SRV v2 · Gergely 10-22" at x=-186, y=8560 (below everything else on the page). If it already exists from the first prompt, append to it; don't create a second one.
Build every new frame by cloning a frame from Section "SRV" (node.clone()), appending the clone to the target Section, and editing the clone. The base frames are "S1 · Recording view (quieter)" (313:14675) and "S3 · Audio settings" (314:15317).
Components: reuse the instances inside the clones (Astryx, Neutral Light, greyscale; recording red is the one exception). If you need a component that isn't in the clone, clone an instance from another frame on this page rather than drawing one. Never rebuild TopNav / SideNav / Header.
Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md.
Layout inside the Section: frames in ONE horizontal row, top-aligned, 160 px gaps, 120 px padding, in the order V1, V2, T1, T2, T3. Above each frame, 96 px up, a 24 px text label with the frame name.
Naming: "<#> · <Screen>", no version suffix (the Section carries the version).
Copy: sentence case, plain English, same demo world as the clones (Riverbend College of Nursing, Dr. Maya Ortiz, NURS 310 · Sepsis recognition, Sim Room 2, Tue Jan 19).
Delete Dev Mode annotations copied with the clones. Add only the annotations given in the prompt.
When done: screenshot each new frame and check that nothing overlaps or is clipped, the text fits, and the camera tiles keep their aspect ratio.
```

---

## V · Header controls

```
Assumes: Shared rules from this file.

V1 · Recording view: clone S1 (313:14675).
 - Row above the cameras: delete the "1 + 2 / Single / Grid" segmented control and the "Pause" button. Keep "Sim Room 2 · 3 cameras" on the left. On the right keep "● Recording 08:00" and "Stop recording" as they are.
 - Bottom strip: directly LEFT of the "Audio" button, add a secondary Button with the same size and style, a layout-grid icon and the label "Layout". 8 px gap between them. Nothing else in the strip changes.
 - Annotation on "Layout": "Opens the layout side panel, same pattern as Audio (Gergely 10-22)."
 - Annotation on "Stop recording": "Start and stop only. Pause removed: nobody uses it (Gergely 10-22). Stop asks for confirmation (see T3)."

V2 · Layout settings: clone S3 (314:15317), then apply the V1 changes to the clone (row above the cameras, Layout button in the strip). "Layout" is in the pressed state and "Audio" is not.
 - Replace the Audio panel CONTENT with the layout panel. Keep the panel shell exactly: same width, same position replacing the right column, no scrim, video, timeline and note row stay fully visible.
 - Panel header: "Layout" + close IconButton (X).
 - Group 1, 12 px muted uppercase "CAMERA LAYOUT": three selectable option cards in one row (or stacked if they don't fit at a readable size), each with a small greyscale schematic thumbnail and a label: "1 + 2" (selected), "Single", "Grid". Use the selected/unselected styling of an existing card or radio component in the file.
 - Group 2, "MAIN CAMERA": a Select "Camera 1 ▾". Helper 12 px muted: "Shown large in 1 + 2 and Single."
 - Group 3, "CAMERAS": read-only muted text "Sim Room 2 · 3 cameras".
 - Annotation on the panel: "Side panel, not a modal: never cover or blur the video. Changes apply live."
```

---

## T · Timeline controls

```
Assumes: Shared rules from this file. If "V1 · Recording view" exists in the target Section, clone it as the base; otherwise clone S1 (313:14675) and apply V1 first.

T1 · Recording view (stop on timeline): clone V1.
 - Delete the whole row above the cameras ("Sim Room 2 · 3 cameras", "● Recording 08:00", "Stop recording"). Give the freed height to the camera area: the tiles grow and keep their aspect ratio, and the timeline + note row move up so the layout has no gap.
 - Timeline row, at its LEFT end, before "08:00 / 20:00": a Button with recording-red outline and a filled square stop icon, label "Stop". Right after it, a small red dot + "REC" chip in 12 px. The time readout, scrubber and "Planned 20 min" shift right to make room; the scrubber shrinks, nothing else changes size.
 - "Sim Room 2 · 3 cameras" moves into V2's layout panel only (it's already there); it no longer shows on the main screen.
 - Annotation on "Stop": "Start/stop live on the timeline (Gergely 10-22, like the Microsoft tool). Stop always confirms (T3)."

T2 · Ready to record: clone T1.
 - Timeline row: the "Stop" button becomes a filled recording-red Button with a round dot icon, "Start recording". Remove the "REC" chip.
 - Time readout "00:00 / 20:00". The scrubber is empty (no progress, no note markers).
 - Note row: input placeholder "Notes open when the recording starts." and the input + Discuss / Good practice / Marker in the disabled state.
 - Right panel, Checklist tab: header "0 of 7 answered", every row unanswered (no Yes/No selected, no "Answered" lines).
 - Annotation on "Start recording": "One button, one tap. No countdown."

T3 · Stop confirmation: clone T1. "Stop" in the pressed state. Show an AlertDialog, centred on the camera area (not the whole screen), using the dialog component already in the file if there is one:
 - Title "Stop recording?"
 - Body "This ends the recording for all 3 cameras. You can't resume it."
 - Buttons: secondary "Keep recording", and a recording-red primary "Stop recording" on the right.
 - Light scrim over the camera area only, no blur. The timer keeps running behind it.
 - Annotation: "Guards against an accidental stop now that it sits next to the scrubber (Daniel's concern, 10-22)."
```

---

## R1 · Review tweaks (10-26)

Run after V and T, as its own chat:
`Read @wireframe-benchmark/reviews/10-26-srv-v2-gergely.md. Apply "Shared rules", then run ONLY section "R1 · Review tweaks (10-26)".`

How the frames relate (Daniel, 10-26): **V = the layout change only** (Layout next to Audio, recording controls stay in the header row). **T = V + recording controls on the timeline.** V is the fallback if Gergely doesn't like T, so V keeps its own recording status and is NOT restyled to match T. The camera tiles in T stay as they are (nearly square is accepted).

```
Assumes: Shared rules from this file. This run EDITS two existing frames in Section "SRV v2 · Gergely 10-22" (384:19421) and adds one new frame. Section "SRV" (313:14668) stays read-only as before.

R1a · edit "V2 · Layout settings" (384:19605) in place: in the Layout panel, delete Group 3 ("CAMERAS" heading + "Sim Room 2 · 3 cameras") and the divider above it. The room name stays only in the row above the cameras. Nothing else changes.

R1b · new frame "T1b · Recording view (red line)": clone "T1 · Recording view (stop on timeline)" (385:35096). Leave T1 itself untouched.
 - Across the top edge of the camera area ("Cameras", 385:35115 in the original; the matching node in the clone), add a 3 px full-width bar in the recording red, flush with the top of the tiles and spanning both the main and side camera columns. It sits above the tiles, never on top of the camera chips.
 - Nothing else changes: same REC chip, Stop button and timer on the timeline.
 - Annotation: "Shown only while recording. A glanceable 'you are live' signal now that the status row above the cameras is gone."
 - Placement: insert T1b directly to the right of T1, and shift T2 and T3 (and their labels) right by 1600 px so the row keeps 160 px gaps. Rename T1b's label accordingly. Grow the Section width to fit.
When done: screenshot V2 and T1b and check nothing overlaps or is clipped.
```

---

## R2 · Per-camera recording status (10-26)

Run as its own chat:
`Read @wireframe-benchmark/reviews/10-26-srv-v2-gergely.md. Apply "Shared rules", then run ONLY section "R2 · Per-camera recording status (10-26)".`

Why R1b is replaced: the free-floating red line read as a stray divider, not as "live". A badge on the main camera alone would be misleading, because all cameras record at the same time, and red borders on every tile are too loud (Daniel, 10-26). The mix: the **session status stays on the timeline** (REC chip + timer, as in T1), **every tile gets a quiet per-camera dot**, and a **failed camera is the loud exception**, shown both on its tile and on the timeline chip (the timeline is the only place a failure shows when the failed camera isn't on screen, e.g. in the Single layout).

```
Assumes: Shared rules from this file. Edits the existing frame "T1b · Recording view (red line)" (386:21016) and adds one new frame. T1 (385:35096) stays untouched.

R2a · edit T1b in place, rename it "T1b · Recording view (per-camera dot)" and its label to match:
 - Delete the "Recording line" rectangle (386:21521).
 - In each of the three camera name chips ("Camera 1", "Camera 2", "Camera 3"), put an 8 px recording-red dot before the name, 6 px gap: "● Camera 1". Same chip size and style otherwise; the chip just grows to fit.
 - Timeline: unchanged (Stop, REC chip, timer).
 - Annotation on the Camera 1 chip: "Dot = this camera is recording. Same on every tile, because all cameras record together. The session status lives on the timeline."

R2b · new frame "T1c · Camera not recording": clone the edited T1b and place it directly to the right of T1b (shift T2 and T3 and their labels right by 1600 px; grow the Section).
 - Camera 3 tile: replace the video with a flat dark-grey fill and, centred, a camera-off icon + "No signal" (14 px, white) + "Camera 3 isn't recording. Check the cable or restart the camera." (12 px, white, muted, max 2 lines).
 - Camera 3 chip: no red dot; instead a warning icon + "Camera 3 · Not recording". For the warning colour, reuse the hardware-check warning (orange dot) style if it exists in this file; otherwise use the recording red with an outline icon.
 - Camera 1 and Camera 2 keep their red dots.
 - Timeline REC chip becomes "REC · 2 of 3 cameras" with the same warning icon/colour in front. Stop and the timer don't change.
 - Annotations: on the Camera 3 tile, "Exception state: shown only when a camera drops during recording." On the REC chip, "Also flags the failure when the failed camera isn't in the current layout (e.g. Single)."
When done: screenshot T1b and T1c and check nothing overlaps or is clipped and the chips fit.
```

## After these run

- Send Claude a screenshot round of the "SRV v2 · Gergely 10-22" Section for QA.
- Daniel picks **V** or **T** (or a mix). Then: a follow-up prompt that carries the chosen controls into S2 (panel collapsed), S3/S3b (audio), S4–S4c (learners) and S5 (simulator monitor), and Gergely gets the result.
- Only after that: file the final SRV state into the vault wiki.
