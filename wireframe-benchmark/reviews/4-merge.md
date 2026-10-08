# Recording view (SRV) · merge the accepted explorations into the main frames (2026-10-07)

Accepted: **E1** Daniel's no-icon Yes/No (165:10589 Astryx, 165:11815 shadcn), **E2** tabs (164:5279, 164:4804) + a "Notes 2" count, **E3b** controls above the cameras + Stop confirmation (188:4286 + 188:9459 Astryx, 189:8453 + 189:8967 shadcn). The brief's Screen 3 is updated to match. Exploration frames stay as they are (history).

Run after the 5A/5B fix rounds (same pages).

## Prompt · Astryx

```
Update the main frame "S3 · Recording view · Astryx" (130:2098) on page "wireframe test - astryx" to the accepted design. Work on its existing nodes; don't rebuild it; don't touch any exploration frame (read them only). Astryx instances only. Read @wireframe-benchmark/wireframe-brief.md "Screen 3 · Recording view" first: it describes the target.

1. Header + camera toolbar: make them match "E3b · Recording controls on top · Astryx" (188:4286): no recording controls in the header, learners on the right; above the cameras the layout selector + "Sim Room 2 · 3 cameras" on the left, red dot + "Recording" + "08:00" · "Pause" · "Stop recording" on the right; no control row under the timeline.
2. Side panel: tabs "Notes 2" · "Checklist" (active) · "Chapters" · "Transcript", like 164:5279, with the count on the Notes tab. Notes, Chapters, Transcript have no content in this frame.
3. Checklist rows: like Daniel's version 165:10589 (equal fixed-width Yes/No without icons, flush right, "Answered 00:40" under the item text, nothing when unanswered), BUT the selected state must be a solid dark fill: build each pair from two Button instances at the same fixed width (selected = Primary, unselected = Secondary) instead of the segmented control, whose raised-white selected state is too subtle.
4. Duplicate the finished frame as "S3 · Recording view · Stop confirmation · Astryx", below it with a 200 px gap, and add the overlay + dialog exactly like 188:9459.

Screenshot after each step and fix on the existing nodes. Reply with ONE benchmark-log table line (follow-up prompts +1 on the S3 Astryx row) and 3 lines on what was hard.
```

## Prompt · shadcn (after the Astryx run finishes)

```
Update the main frame "S3 · Recording view · shadcn" (141:4156) on page "wireframe test - shadcn" to the accepted design. Work on its existing nodes; don't rebuild it; don't touch any exploration frame (read them only). shadcn instances only. Read @wireframe-benchmark/wireframe-brief.md "Screen 3 · Recording view" first: it describes the target.

1. Header + camera toolbar: make them match "E3b · Recording controls on top · shadcn" (189:8453): no recording controls in the header, learners on the right; above the cameras the layout selector + "Sim Room 2 · 3 cameras" on the left, red dot + "Recording" + "08:00" · "Pause" · "Stop recording" on the right; no control row under the timeline.
2. Side panel: tabs "Notes 2" · "Checklist" (active) · "Chapters" · "Transcript", like 164:4804, with the count on the Notes tab. Notes, Chapters, Transcript have no content in this frame.
3. Checklist rows: exactly like Daniel's version 165:11815 (equal fixed-width Yes/No without icons, selected = dark fill, unselected = outline, flush right, "Answered 00:40" under the item text, nothing when unanswered).
4. Duplicate the finished frame as "S3 · Recording view · Stop confirmation · shadcn", below it with a 200 px gap, and add the overlay + dialog exactly like 189:8967.

Screenshot after each step and fix on the existing nodes. Reply with ONE benchmark-log table line (follow-up prompts +1 on the S3 shadcn row) and 3 lines on what was hard.
```

## Status
- [ ] Astryx merged · [ ] shadcn merged · [ ] accepted
