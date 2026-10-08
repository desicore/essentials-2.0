# Review · v3 round (259:12191) + clips experiment (271:18470) · 10-08 late

## Verdicts

| Frames | Verdict | Notes |
|---|---|---|
| Debrief collapsed / expanded (259:12192, 260:18623) | **Accept** | The real video sells it. Avatar stack + "4 present · 1 absent" works. Expanded state reads well; checklist clipped at the bottom as intended. |
| TV-C2 1–8 (262:18559) | **Accept, 1 fix** | Rebuilt in Astryx, consistent with the debrief. Step 7: the tablet playhead still says 05:13 while the TV is "Paused at 04:12". Sending an annotation should jump the tablet too (playhead 04:12, paused). |
| Share v3 + several absent (264:14426, 264:21252) | **Accept** | "Absent (n)" + Include scales cleanly; the link is now one row. |
| Learner preview v3 (267:22719) | **Accept, 1 question** | Much less cramped. Question: should the summary be collapsed for **learners**? For faculty it's a tool; for a learner it's the main takeaway. I'd show it expanded on the learner page. |
| Recording v3 + Stop (268:15677, 268:16235) | **Accept** | Controls back above the cameras, three real feeds, avatar stack. |
| Reports v3 (269:16842) | **Fix** | (1) The legend row collides with the "20 h" axis label. (2) The last-year ticks sit **inside** the black bars (last year is always lower), so grey-on-black is nearly invisible. Use the same language as the weekly chart: a thin outline bar (6 px high) for last year directly under each bar. |
| Shell rollout (270:16656, 270:23151, 270:23813, 270:24785) | **Accept** | Logo shell everywhere; "remove" copy fixed; Customize added to the dialog. Known gap: S6c v3 and S6b v3 are built on the **old** S6 (dashed-circle compare button, no comparison in the charts). The prompt asked for a shell swap only. Rebase them on S6 v3 in the final merge. |
| Housekeeping | — | Duplicating copied your old Dev Mode annotations into every v3 and EXP frame (the "3 card layout variation sketches" note appears 9×). Resolve or delete them in the copies, or the next review will read stale feedback. |

## Clips experiment (271:18470)

| | What works | What doesn't |
|---|---|---|
| **A · no approve** | Calmest. Badges line up at the bottom right of every card. One decision, made in the share sheet. | The info line under the row adds a line of text; fine for a first-time hint. |
| **B · inline approve** | Approve and Approved both readable. | The "Approved" badge sits centred while "Approve" sits right, so the row looks uneven. Also the ghost "Approve" looks like plain text, not like something to tap. |
| **C · clips tab + swipe** | The right panel reads as one clean list; the swipe state is clear. | The video "grew" by being **cropped**: the player is now ~1.15:1, but the recording is 16:9. A real 16:9 video in a 710 px column is ~400 px tall, about the same as in A. So C doesn't actually buy video space; it leaves empty space under the controls and hides the clips behind a tab. |

**My pick: A.** C's main promise (a bigger video) doesn't survive a real 16:9 player, and B adds a second place to make the sharing decision. With A, Q-28 = yes: sharing approves. If you agree, I'll update `spec/open-questions.md` (Q-28 answered), the brief's Screen 2 and Screen 9, and fold A into the debrief, the TV-C2 frames and the learner preview in the final merge.

Also for every option: the player must stay 16:9 (A and B are ~1.57:1, slightly cropped too). Use FILL on a 16:9 frame, not a stretched one.

## Fix prompt (V3-r1)

```
Create new frames using ONLY the Astryx library. NEVER edit, move or delete an existing frame; work only on duplicates, named "… · v3-r1", placed in a new row at the bottom of the Section "v3 · 10-08 evening round", 200 px gaps. Icons: follow the "Icon recipe" in @wireframe-benchmark/reviews/10-08-v2-round.md. Load the figma-use skill first.

1. "S6 · Reports · v3-r1": duplicate "S6 · Reports · v3" (269:16842).
   a. Move the weekly chart's legend row up so it sits in the card header row, right-aligned next to the title (before the ellipsis button), clear of the "20 h" axis label.
   b. Room / Simulator / Types of sessions: delete the vertical ticks. Under each black bar, add a 6 px high outline bar (1 px #6B6B6B stroke, no fill), same left edge, width scaled to last year's value on the same scale, 2 px gap. Keep the value text "61 h · 50 h last year". Add the same two-swatch legend to each card header (smaller, 12 px).
2. "7 · Send an annotation · v3-r1": duplicate 262:19483. Set the player to the 04:12 moment: playhead at 04:12, the time text "04:12 / 17:40", and the Play button showing play (paused). Change nothing else.
3. Debrief video ratio: duplicate "S8c · Debrief · summary collapsed · v3" (259:12192) as "… · v3-r1" and set the video image frame to 16:9 at the column width (keep FILL, keep the radius). Let the left column's content move up; leave any spare space at the bottom.
One screenshot per frame. Reply in under 6 lines.
```
