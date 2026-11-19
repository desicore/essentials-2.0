# 11-17 · Final round: fix 1 (after Claude's review of runs 1 to 4)

Claude checked every frame of the four runs in the file on 11-16, about 21:00: structure by script, and one screenshot per frame. 27 new frames and four fixes. One defect, in two frames.

## What the review found

| Frame | Finding | Action |
|---|---|---|
| RR1, RR2, RR3 | As specified. No clipped text, no overlap | None |
| V1 to V6, V9 to V16 | As specified. V9 and V10 show the empty states "Chapters come after the recording" and "The transcript comes after the recording" | None |
| **V7, V8** | **The switch "Recording / Debrief" is cut off.** "Start Content" is 589 wide and clips; the back button, the title (421) and the switch (202) need 675 | Fix M1 |
| V8 | The header actions stayed in State "Default", not "Debrief". The prompt allowed this when the wider state does not fit | None |
| L3e, L2b | As specified | None |
| L8f, L8g | As specified | None |
| P4, B1, B2, P3, L3c | All four fixes are in | None |

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. Nothing else may write in Section "9 · Room view, recording flow" at the same time. The topic index run may finish first or run after; they do not touch the same layers.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-fix1.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "Fix rules" from the second file. Then run this section of the second file: "M1 · Mode switch in V7 and V8". Run its check list and take a screenshot of both frames.`

## Fix rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
- Change only the two frames this file names, and in them only the layers it names.
- Never detach an instance. Content that sits in a slot of an instance may be moved to another slot of the same instance.
- If a step cannot be done exactly, skip it and report it. Do not build a workaround.
```

## M1 · Mode switch in V7 and V8

```
Goal: the switch "Recording / Debrief" is fully visible in the header of two frames.

Frames: "V7 · Room view, stopped" (1799:28803) and "V8 · Room view, debrief hand-off" (1799:38871), in Section "9 · Room view, recording flow" (1799:21248).

For each of the two frames:
1. Find the instance "Header" in "Main". In its slot "Start Content", find the instance "SRV / Mode switch".
2. Move that instance into the slot "Center Content" of the same "Header". It is the only child of "Center Content".
3. Do not change the property "Active" of the switch: it stays "Recording" in V7 and "Debrief" in V8.
4. "Start Content" now holds only "IconButton · Back to event" and "Title".
5. If "Center Content" does not accept the instance, put it back in "Start Content" as the last child and report it. Do not try anything else.

CHECK
- In V7 and V8 the switch shows both words, "Recording" and "Debrief", in the middle of the header.
- The switch does not overlap the title on the left or the buttons on the right.
- V7: "Recording" is the active side. V8: "Debrief" is the active side.
- Nothing else in the two frames changed.
- Take one screenshot of each frame.

REPORT
- Whether the move worked in both frames.
- The x position and the width of the switch in each frame.
```
