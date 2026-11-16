# 11-17 · Final round: topic index (T01 to T10)

The workshop of 11-17 and 11-18 runs by ten topics. Per topic the designers pull up the screens on demand. This file makes any screen findable in seconds, in two ways:

1. An index at the top of the page: one column per topic, with a link to every screen of that topic. A click on a link jumps to the screen.
2. A small topic tag next to the label of every screen, for example "T04 · T05". Search (Cmd+F) for "T05" in Figma lists every screen of that topic.

No existing frame is moved, renamed or changed. The run only adds texts.

## Context

- The ten topics come from the product manager's capability list: T01 Experience & identity, T02 Course, scenario & content, T03 Planning & participants, T04 Live capture, AV & Anywhere, T05 Room readiness, T06 Debrief & formative feedback, T07 Historical Video Review, T08 Evaluation & learner sharing, T09 Customer-facing reporting, T10 AI, integrations & launch guardrails.
- The mapping of screens to topics is Claude's reading of the topic names. Daniel has not seen the capability list. If a screen is under the wrong topic, change the table "Mapping" below and run the file again.
- T02, T08 and T09 have no screens on this page. They are the other designer's areas.
- The run can be repeated. It deletes its own old index and tags first and builds them again. Run it again after later runs add screens.

## What I found in the file (11-16 evening, read-only)

- Page "🧭 One app · merge [D]" `1749:8314`. Sections start at x 0. "0 · Shell" is at y 0. Nothing sits above y 0 at x 0 to x 12640. (Three loose screenshot frames sit at negative x. They are not in the way.)
- Every screen is a direct child of a Section and has a text "Label · <code>" at y 76 of its Section, left-aligned with the screen.
- A text can link to a node: `setRangeHyperlink(start, end, { type: "NODE", value: <node id> })`.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | A new Section "Index · Topics T01 to T10" above everything: x 0, y −2200, 12640 × 1900 |
| Text size | Large on purpose, so the index reads when the page is zoomed out: topic titles 40 px, links 28 px. This is the one exception to the text sizes in the Shared rules |
| One screen, several topics | Allowed. The screen is listed in each of its topics and its tag shows all of them |
| Screens that do not exist yet | Skipped and reported. Run the file again later |

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat. **Run it alone and last**: it adds a text to every Section, so nothing else may run on the page at the same time.

`Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-topic-index.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "IX rules" from the second file. Then run these sections of the second file, in this order: "X1 · Topic tags", "X2 · Index". After each section, run its check list and take a screenshot.`

## IX rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- You may only ADD text layers and one new Section. Never move, rename, resize, restyle or delete any existing frame, label, caption or Section. The only layers you may delete are the ones an earlier run of this file made: texts whose name starts with "Topic T" and the Section "Index · Topics T01 to T10".
- The rule "write only inside one Section" of the Shared rules does not apply to this run. The rule about text sizes does not apply to the index (section X2).
- A "screen" is a FRAME that is a direct child of a SECTION on this page and whose name is in the table "Mapping". Match names exactly.
- If a name in the table has no frame on the page, skip it and list it in the report under "Not found". This is expected: some screens are built later.
- If a frame that is a direct child of a Section is NOT in the table, do nothing with it and list it in the report under "Not in the mapping".
- Fonts: load the font of every text before you change it.

MAPPING (frame name → topics)
Shell · Page → T01
L1 · Today → T01, T03
L1b · Start event, 2 rooms → T03
L2 · Live → T04
L3 · Start recording → T04
L3b · Rooms selected → T04
L3d · Record 3 rooms → T04
L3c · 3 rooms recording → T04
L4 · Room view → T04
L5 · Recordings → T07
L6 · Recording → T07
L6b · Recording, Debrief tab → T06
L6c · Recording, Annotations → T07
L6d · Recording, Layout & audio → T07
L6e · Recording, Checklist → T07
L6f · Recording, Transcript → T07, T10
L6g · Recording, chapter list open → T07, T10
L7 · Rooms → T05
L8 · Room, AV tab → T04, T05
L8f · Room, add a device → T04
L8g · Room, device added → T04
L9 · Camera, opened from a room → T04
L10 · Simulators & Equipment → T04
L10b · Simulators & Equipment, Audio → T04
L11 · Microphone → T04
P1 · Room view, Participants → T03
P1b · Room view, Add a group → T03
P2 · Start recording, Learners → T03
P3 · Room view, No learners yet → T03
P4 · Recording, Link event and learners → T03, T07
P5 · People, Learners → T03
I1 · Import, Source → T03, T10
I2 · Import, Map → T03, T10
I3 · Import, Review → T03, T10
I4 · Import, Done → T03, T10
I5 · Settings, Integrations → T10
B1 · Today, recording banner → T01, T04
B2 · Today, 3 rooms recording → T01, T04
G1 · Search, opened → T01
G2 · Search, jump to a result → T01
G3 · Search, quick action → T01
RR1 · Room check, results → T05
RR2 · Device not found → T05
RR3 · Room view, room warning → T05
RR4 · Room check, running → T05
RR5 · Report a problem → T05
RR6 · Room check, all passed → T05
V1 · Room view, ready to record → T04
V2 · Room view, Layout & audio → T04
V3 · Room view, annotations → T04
V4 · Room view, checklist → T04
V5 · Room view, intercom in use → T04
V6 · Room view, stop confirmation → T04
V7 · Room view, stopped → T04, T06
V8 · Room view, debrief hand-off → T06
V9 · Room view, chapters → T04, T10
V10 · Room view, transcript → T04, T10
V11 · Room view, tab menu → T04
V12 · Room view, side panel collapsed → T04
V13 · Room view, intercom collapsed → T04
V14 · Room view, no intercom → T04
V15 · Room view, a camera stops → T04, T05
V16 · Room view, report a problem → T04
L3e · Live, stop all → T04
L2b · Live, event in two rooms → T03, T04
L5b · Recordings, filter open → T07
L5c · Recordings, no results → T07
L5d · Recordings, none yet → T07
L6h · Recording, Share → T07, T08
L6i · Recording, Download → T07
L6j · Recording, transcript search → T07, T10
L6k · Recording, annotation menu → T07
L8b · Room, Details tab → T05
L8c · Room, edit details → T05
L7b · Rooms, Add room → T04
L8d · Room, no devices → T05
L7c · Rooms, none yet → T04
L8e · Room, Start recording → T04
I1b · Import, from Canvas → T03, T10
I1c · Import, file not accepted → T03
I2b · Import, Map, one column not matched → T03
I3b · Import, Review, all decided → T03
I3c · Import, many people would be deactivated → T03, T10
I4b · Import, Undo → T03
I5b · Integrations, Canvas → T10
I5c · Integrations, connect → T10
L3g · Start recording, event list open → T03, T04
L3h · Start recording, room needs attention → T04, T05
L3i · Live, recording saved → T04
P1c · Room view, group added → T03
P5b · People, Groups → T03
L2c · Live, no rooms yet → T04
L9b · Camera, remove from room → T04
L9c · Camera, change room → T04
L9d · Camera, advanced settings → T04
L9e · Camera, save a view → T04
L10c · Simulators & Equipment, assign to a room → T04
L10d · Simulators & Equipment, Cameras → T04
L10e · Simulators & Equipment, nothing found → T04
L11b · Microphone, test sound → T04

TOPIC TITLES
T01 · Experience & identity
T02 · Course, scenario & content
T03 · Planning & participants
T04 · Live capture, AV & Anywhere
T05 · Room readiness
T06 · Debrief & formative feedback
T07 · Historical Video Review
T08 · Evaluation & learner sharing
T09 · Customer-facing reporting
T10 · AI, integrations & launch guardrails
```

## X1 · Topic tags

```
Goal: one small text next to the label of every screen. It shows the topics of the screen.

STEP 1 · Clean up an earlier run
1. In every Section of the page, delete every TEXT layer that is a direct child of the Section and whose name starts with "Topic T". Delete nothing else.

STEP 2 · Add the tags
For every frame in the table "Mapping" that exists on the page:
1. The frame's code is the part of its name before " · " (for example "L8", "RR1", "Shell").
2. In the frame's Section, find the text "Label · <code>" (for "Shell · Page" the label may have another name: if no label is found, use "Label · AV0" (1603:10620) as the source).
3. Clone that label text into the same Section. Set its characters to the topics, joined with " · ", for example "T04 · T05".
4. Name the clone "Topic <topics with spaces> · <code>", for example "Topic T04 T05 · L8". This name is what Cmd+F finds.
5. Position: y = the y of the screen's label (76 for most screens). x = frame x + frame width − tag width, so the tag is right-aligned with the screen.
6. Do not move the label, the caption or the screen.

CHECK
- Every frame of the table that exists has exactly one tag, on the same line as its label, at the right edge of the screen.
- No label, caption, frame or Section moved. Compare the x, y, width and height of every Section and every screen before and after: they must be equal.
- Take one screenshot of Section "3 · Rooms and devices" (1749:8318).

REPORT
- The number of tags added.
- "Not found": names of the table with no frame.
- "Not in the mapping": frames in Sections that are not in the table.
```

## X2 · Index

```
Goal: one Section above the page with ten columns, one per topic. Every screen name in a column is a link to the screen.

STEP 1 · Clean up an earlier run
1. If a Section named "Index · Topics T01 to T10" exists, delete it with everything in it.

STEP 2 · Section
1. Check that no top-level node of the page sits at x 0 to x 12640 and y −2300 to y −200. If one does, stop and report.
2. Create a Section. Name "Index · Topics T01 to T10". x 0, y −2200, size 12640 × 1900. Copy the fills of Section "5 · Import" (1749:8320).

STEP 3 · Index frame (new build)
1. In the Section, create a frame "Topic index" at x 80, y 120. Auto-layout horizontal, gap spacing/6 (24), no fill, width hug, height hug.
2. In it, ten columns, T01 to T10, in order. A column is a frame named "Column · T01" (and so on): auto-layout vertical, gap spacing/3 (12), padding spacing/6 (24), width fixed 1224, height hug. It is a card: fill surface/card, 1 px inside stroke border/default, corner radius radius/container.
3. First child of a column: the topic title, for example "T04 · Live capture, AV & Anywhere". Clone the card title text "Cameras" (1752:19780), set the characters, set the font size to 40 and the line height to auto. Width fill, so that a long title wraps. Name "Title · T04".
4. Then one text per screen of that topic, in the order of the table "Mapping". Clone the body text "PTZ camera" (1752:19797), set the characters to the screen's exact frame name, set the font size to 28 and the line height to auto, and underline it. Name "Link · <code>". Width fill.
5. Make each of these texts a link to its screen: call setRangeHyperlink(0, <length>, { type: "NODE", value: <the id of the screen frame> }) on the text.
6. A topic with no screen (T02, T08, T09) gets one muted line instead of links: clone the muted text "3 cameras · 1 not found" (1752:19781), font size 28, line height auto, width fill, text: "No screens on this page. This topic is the other designer's area."
7. If the column of T04 is higher than 1700, set the gap of that column to spacing/2 (8). If it is still higher than 1700, report it and do not shrink the text.

STEP 4 · Title of the Section content
1. Above the index frame, at x 80, y 40: one text, clone of "Cameras" (1752:19780), font size 40, characters: "Workshop topics: click a screen name to jump to it. Search "T05" (Cmd+F) to list the screens of a topic." Name "Title · Index".

CHECK
- The Section is at x 0, y −2200. It does not overlap "0 · Shell".
- Ten columns, T01 to T10, left to right. No column is clipped by the Section.
- Every link text has a hyperlink of type NODE. Test three of them: read the hyperlink back and check that the id is a frame with the same name as the text.
- No existing frame, label, caption or Section moved or changed.
- Take one screenshot of the Section.

REPORT
- The id of the Section.
- The number of links per topic.
- "Not found": names of the table with no frame.
```

## After this runs

- Claude checks the tags and three links per topic.
- When later runs add screens (Recordings, Rooms, Devices, Import), Claude adds their names to the table "Mapping" and Daniel runs this file again.
