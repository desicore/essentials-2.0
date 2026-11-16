# 11-16 · F6: the global Recording banner on Today (B1, B2)

Two greyscale wireframes for the workshop on 11-17. Both are the Today page with the Recording banner above the top bar. B1 shows one room recording. B2 shows three rooms recording, with one combined line. They are discussion sketches, not final designs. The concept, the Shared rules and the sample data are in `11-16-merge-00-shared.md`.

## Context

- While a room records, the user can leave the room and still see, on every page, that a recording runs, and get back to it or stop it. First described in `wireframe-brief.md`, "Screen 7 · Recording banner".
- The banner sits ABOVE the top bar and pushes the page down. So the frame is 1440 × 948, not 900.
- Earlier prompts: `cursor-prompts.md` "Prompt 7A", `reviews/11-03-components-page.md` "C9". The only finished screen is in the old wireframe file ("S7a · v3", `270:23813`).

## What I found in the file (11-16, read-only)

- Component "SRV / Recording banner" `1048:27519`, page "⚙️ Components (D)", 1440 × 48, horizontal auto-layout. No variants.
- Two text properties: `Context#1048:6` (default "Sim Room 2 · NURS 310 · Sepsis recognition") and `Elapsed#1048:7` (default "08:00").
- Layers: "Status" > "State" > "Indicator" (the red dot) and text "State label" ("Recording"); text "Context"; frame "Elapsed" > text "Elapsed time". "Actions" > button instances "Open recording view" and "Stop". No Pause.
- The component has no instance anywhere in IMSH-MVP (checked by script). These two frames are its first use.
- "L1 · Today" `1752:18102` is a vertical auto-layout frame, 1440 × 900: "TopNav" (48 high), "Body" (fills the rest), and an absolute layer "Popover · Start event".
- Section "1 · Sessions" has all 8 slots taken. So the banner gets its own Section.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | New Section "6 · Recording banner", under "5 · Import". Slot 1 = B1, slot 2 = B2. The banner is a global element, not a step of the Sessions flow |
| When to run | After N1 and N2 of `11-16-merge-fix1.md`. The clone then already has the active "Today" item and the "5 events" line. It can run next to N3 (N3 does not touch L1) |
| Word "Recording" | Stays. It is a state, like the "Recording 02:14" badge on Live. It does not collide with the menu item "Recordings" (the list of past recordings) |
| "Open recording view" | Changed on the frames to "Open Sim Room 2". Reason: in the one-app concept the room view has no name in the UI, its title is the room name. "Recording view" would be a third name next to "Live" and "Recordings". The component default stays as it is; this is a text override. Proposal, not final |
| Several rooms | "Recording" · "3 rooms · longest 02:14" · buttons "Open Live" and "Stop all". Same words as the banner on "L3c · 3 rooms recording". "Open Live" goes to the Live page, not into one room |
| Elapsed in B2 | The "Elapsed" frame is hidden. The time is inside the combined line |
| Popover | "Popover · Start event" is deleted in both frames. NURS 310 already runs, so nobody is starting it |
| Clock | B1 is about 10:08 (08:00 into the 10:00 event). L1 was drawn for 09:50. If the calendar has a "now" line, it is not moved. Small mismatch, accepted |
| Red dot | Stays. It is part of the component. It is the one colour on these frames besides the badges |

## Component gap (for Daniel, not for this run)

The banner was built for one room. For several rooms it has no variant. Text overrides are enough for the wireframe, but the component is missing:
- a state for several recordings (one combined line, no single elapsed time),
- properties for the state label and the two button labels (today they are plain overrides),
- a "Stop all" behaviour: its confirmation must list the rooms, which the one-room confirmation does not do.

## Open question for the workshop

Do we need the global banner if the Live page already shows the running recordings? Or do both live together: the banner means "I see it from anywhere and get back", Live means "I manage it"?

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. Run it after N1 and N2 of the fix file.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f6-recording-banner.md. Apply "Shared rules" from the first file and "F6 rules" from the second. Then run ONLY section "R1 · Recording banner on Today" of the second file.`

## F6 rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules replace two Shared rules for this run:
- This run creates ONE new Section, "6 · Recording banner", and writes only inside it. Every other Section on the page is read-only. You may clone from them.
- The red dot inside the banner component stays as it is. It is not a colour you add.
Never edit the main component "SRV / Recording banner" (1048:27519). Use instances and overrides only. Never detach.
If a step cannot be done exactly, skip it, and report it. Do not build a workaround.
```

## R1 · Recording banner on Today

```
Goal: two frames. Each is a clone of "L1 · Today" with the Recording banner above the top bar.

STEP 0 · Section
1. Read Section "5 · Import" (1749:8320): its fills and its size.
2. Create a Section named "6 · Recording banner" on the page at x 0, y 9000, size 12640 × 1240, with the same fills as "5 · Import".

STEP 1 · Frame B1
1. Clone "L1 · Today" (1752:18102). Put the clone in the new Section at slot 1: x 80, y 120.
2. Name it "B1 · Today, recording banner".
3. In the clone, delete the layer "Popover · Start event".
4. Set the frame height to 948 (width stays 1440, clip content stays on). The frame is a vertical auto-layout frame with fixed size.
5. Create an instance of "SRV / Recording banner" (1048:27519). Insert it as the FIRST child of the frame (insertChild at index 0), above "TopNav". Name it "Recording banner". Width: fill (1440). Height: 48.
6. Check the stack: "Recording banner" y 0, height 48. "TopNav" y 48, height 48. "Body" y 96, height 852. If "Body" is not 852 high, set its vertical sizing to fill.
7. Instance texts:
   - property "Context#1048:6": "Sim Room 2 · NURS 310 · Sepsis recognition"
   - property "Elapsed#1048:7": "08:00"
   - the text "State label" stays "Recording"
   - the button instance "Open recording view": set its label to "Open Sim Room 2", with its label text property if it has one, otherwise with a text override. The button may grow wider; the row is auto-layout.
   - the button "Stop" stays "Stop".
8. Change nothing else in the clone. The side navigation keeps "Today" as the selected item.

STEP 2 · Frame B2
1. Clone the finished "B1 · Today, recording banner". Put it at slot 2: x 1640, y 120.
2. Name it "B2 · Today, 3 rooms recording".
3. Instance texts:
   - property "Context#1048:6": "3 rooms · longest 02:14"
   - the text "State label" stays "Recording"
   - the frame "Elapsed" inside the instance: set visible = false
   - the button "Open recording view": label "Open Live"
   - the button "Stop": label "Stop all"
4. Change nothing else.

STEP 3 · Labels and captions
Follow the Shared rules (clone "Label · AV0" 1603:10620 and "Caption · AV0" 1603:10621). The frames are 948 high, so the caption sits at y 1092.
- "Label · B1": text "B1 · Today, recording banner", x 80, y 76.
- "Caption · B1", x 80, y 1092, 1440 wide, two lines:
  "One room records. The banner sits above the top bar on every page and pushes the page down."
  "Open question: is the banner needed when Live already shows the running recordings?"
- "Label · B2": text "B2 · Today, 3 rooms recording", x 1640, y 76.
- "Caption · B2", x 1640, y 1092, 1440 wide, two lines:
  "Three rooms record. One combined line. Open Live goes to the Live page, not into one room."
  "The banner component has no state for several rooms. This frame uses text overrides."

Check list:
1. The new Section exists at x 0, y 9000, 12640 × 1240. No other Section changed.
2. Both frames: 1440 × 948, clip content on, banner at y 0, top bar at y 48, nothing overlaps, the calendar is not cut off at the bottom more than in L1.
3. "L1 · Today" (1752:18102) is unchanged and still has its popover.
4. The main component (1048:27519) is unchanged. No detached instance.
5. No forbidden word on the two frames.
6. Screenshot both frames and look at them.

Report: the ids of the Section and the two frames; how you set the button labels (property name or text override); every step you could not do exactly; the two screenshots.
```

## After this runs

Claude checks B1 and B2 by screenshot.
