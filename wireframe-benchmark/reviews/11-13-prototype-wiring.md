# 11-13 · Prototype wiring (SRV flow + AV setup)

Click-through prototype for the workshop on 11-17/18. It only adds prototype interactions and flow starting points to frames that already exist. No frame is redesigned.

## Context

- Page "👤 SRV flow [D]" (`960:51213`) in IMSH-MVP holds two Sections: "SRV flow · Recording" (S1–S9) and "AV setup · Sketches" (five frames).
- Checked 11-13, read-only: the page has no flow starting points and no node has any interaction. So this run starts from zero.
- Three flows: "SRV · Recording", "AV setup", and "AV setup · tabs variant" (so the variant can be opened on its own).

## Decisions (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Transition | Instant, on click, everywhere |
| S4 → S5 | Click the "Annotations" tab or the annotation input. S5 is the same screen 8 minutes later with the Annotations tab open |
| S8 "Keep recording", close button, dim | All go back to S7 |
| S9 | No onward link. "Open debrief" has no destination yet |
| AV frames | Only real navigation: card, table row, breadcrumb. No click-anywhere |
| Side nav and top nav | Not wired |

## How to run

**Claude Sonnet 5.5 · High**, one new Cursor chat.

`Read @wireframe-benchmark/reviews/11-13-prototype-wiring.md. Apply "Shared rules", then run ONLY section "PW1 · Wire both flows".`

Afterwards tell Claude, who reads the interactions back from the file.

## Shared rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3). Page "👤 SRV flow [D]" (960:51213).

What you may change:
- Prototype interactions (reactions) on the layers this prompt names.
- The page's flow starting points.
- Nothing else. Don't move, resize, rename, restyle, detach or delete any layer. Don't touch other pages. Don't touch the rectangle "CleanShot 2026-11-13 at 11.23.56@2x 1" (1620:5127).

Every interaction in this prompt is the same kind:
- Trigger: On click.
- Action: Navigate to the destination frame.
- Animation: Instant (no transition).
- One interaction per layer. If the layer already has an interaction, replace it.

IDs:
- All IDs are the real nodes. IDs that start with "I" are layers inside an instance; use them in full.
- If an ID is not found, find the layer by its exact name inside the frame named in the same row. If that fails too, use the fallback below.

Setting an interaction on a layer inside an instance:
- Try it on the layer itself first. This is an override on the instance; never detach, and never edit a main component.
- Read the interaction back from the node after setting it. If it is not there, or the call fails, use the fallback.

Fallback hotspot (only when the rule above fails):
- Create a frame named "Hotspot · <label>" as a direct child of the screen frame (the 1440-wide frame named in the row), as its topmost layer.
- No fill, no stroke, no effects. Position and size: the "Bounds" given in the row (x, y, w, h relative to the screen frame).
- If the screen frame has auto-layout, set the hotspot to absolute position so nothing else moves.
- Put the interaction on the hotspot.
- List every fallback hotspot in your report.

Report when done: a table of every interaction you set (frame, layer, destination, "direct" or "fallback hotspot"), the flow starting points, and everything you could not do exactly as written.
```

## PW1 · Wire both flows

```
1 · Flow starting points
Set the page's flow starting points to exactly these three, in this order:
| Flow name | Start frame | ID |
|---|---|---|
| SRV · Recording | S1 · Ready to record | 1343:4038 |
| AV setup | AVs · Settings home | 1625:9358 |
| AV setup · tabs variant | AV0b · Rooms, with settings tabs | 1624:9221 |

2 · SRV flow (Section "SRV flow · Recording", 1343:3275)
Screen frames: S1 1343:4038, S2 1348:10885, S3 1348:11530, S4 1348:12538, S5 1358:7934, S6 1360:6148, S7 1360:7581, S8 1360:8441, S9 1360:9390.

| # | In frame | Layer to click | Layer ID | Goes to | Bounds (fallback) |
|---|---|---|---|---|---|
| 1 | S1 | "Button · 4 learners" (it reads "5 learners") | I1343:4043;2348:14254;1347:8387;468:13140 | S2 (1348:10885) | 1307, 64, 125, 28 |
| 2 | S2 | "Button · Layout & audio" | I1348:10890;2348:14254;1348:10926;468:14750 | S3 (1348:11530) | 1019, 64, 129, 28 |
| 3 | S3 | "SRV / Recording button" (label "Start recording") | 1348:11541 | S4 (1348:12538) | 64, 778, 144, 32 |
| 4 | S4 | "Tab · Annotations" | I1348:12556;633:32981;565:28391;565:28394 | S5 (1358:7934) | 1071, 120, 87, 32 |
| 5 | S4 | "Annotation input" (the text field) | I1348:12554;1024:8583 | S5 (1358:7934) | 64, 836, 628, 32 |
| 6 | S5 | "Tab · Checklist" | I1358:7952;605:30909;565:28353;565:28357 | S6 (1360:6148) | 1169, 120, 69, 32 |
| 7 | S6 | "Button · Hold to talk" | I1360:6173;565:29110 | S7 (1360:7581) | 886, 901, 122, 32 |
| 8 | S7 | "SRV / Recording button" (label "Stop recording") | 1360:7592 | S8 (1360:8441) | 64, 778, 144, 32 |
| 9 | S8 | "Stop recording" (dialog button) | I1360:9295;1024:8694;1024:8697 | S9 (1360:9390) | 805, 525, 119, 32 |
| 10 | S8 | "Keep recording (default, focused)" | I1360:9295;1024:8694;1024:8696 | S7 (1360:7581) | 676, 525, 121, 32 |
| 11 | S8 | "Close Button" (in the dialog) | I1360:9295;1024:8694;2281:8603 | S7 (1360:7581) | 896, 391, 28, 28 |
| 12 | S8 | "Dim" (rectangle, direct child of S8) | 1360:9294 | S7 (1360:7581) | 0, 0, 1440, 948 |

Notes:
- Row 12: "Dim" lies under the dialog. The dialog's own buttons must still win. After setting rows 9 to 12, check that the dialog instance (1360:9295) is above "Dim" in the layer order. If it is not, don't reorder anything; skip row 12 and report it.
- If row 12 needs the fallback, skip it and report it. Don't create a full-screen hotspot.
- S9 gets no interaction.

3 · AV setup flow (Section "AV setup · Sketches", 1559:8318)
Screen frames: AVs 1625:9358, AV0 1603:10516, AV0b 1624:9221, AV1 1559:8319, AV2 1564:8094. All layers in this table are normal frames or texts, not inside instances.

| # | In frame | Layer to click | Layer ID | Goes to | Bounds (fallback) |
|---|---|---|---|---|---|
| 13 | AVs | "Card · Rooms & devices" (the whole card) | 1625:9635 | AV0 (1603:10516) | 669, 148, 361, 210 |
| 14 | AV0 | "Row · Sim Room 2" | 1605:5827 | AV1 (1559:8319) | 285, 467, 1130, 72 |
| 15 | AV0 | Breadcrumb text "Settings" | 1603:10522 | AVs (1625:9358) | 284, 72, 46, 20 |
| 16 | AV0b | "Row · Sim Room 2" | 1624:9269 | AV1 (1559:8319) | 285, 531, 1130, 72 |
| 17 | AV0b | Breadcrumb text "Settings" | 1624:9227 | AVs (1625:9358) | 284, 72, 46, 20 |
| 18 | AV1 | "Row · Overhead camera" | 1560:7940 | AV2 (1564:8094) | 285, 363, 1130, 56 |
| 19 | AV1 | Breadcrumb text "Settings" | 1582:8084 | AVs (1625:9358) | 284, 72, 46, 20 |
| 20 | AV1 | Breadcrumb text "Rooms" | 1582:8086 | AV0 (1603:10516) | 351, 72, 38, 20 |
| 21 | AV2 | Breadcrumb text "Settings" | 1582:8090 | AVs (1625:9358) | 284, 72, 46, 20 |
| 22 | AV2 | Breadcrumb text "Rooms" | 1582:8092 | AV0 (1603:10516) | 351, 72, 38, 20 |
| 23 | AV2 | Breadcrumb text "Sim Room 2" | 1582:8094 | AV1 (1559:8319) | 410, 72, 65, 20 |

Check before you report:
- The page has exactly three flow starting points, with the names and frames in step 1.
- Read the interactions back from the file: 23 in total (12 in the SRV Section, 11 in the AV Section), or fewer only where a row was skipped and reported.
- Every interaction is On click → Navigate to → Instant.
- No layer moved, changed size or was renamed. No instance was detached. The only new layers are fallback hotspots, if any.
- S9 has no interaction.
```

## After this runs

- Claude reads the interactions back (read-only) and compares them with the two tables.
- Daniel clicks through each flow once in presentation mode. That is the only real test.
