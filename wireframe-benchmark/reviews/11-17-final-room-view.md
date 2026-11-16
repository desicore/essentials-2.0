# 11-17 · Final round: the room view, every state (V1 to V16)

Topic T04 "Live capture, AV & Anywhere", and the hand-off to T06 "Debrief". The room view in the new shell has one state today (L4, recording). This file adds every other state: ready, layout and audio, annotations, checklist, intercom, stop, stopped, the debrief hand-off, the other tabs, the tab menu, a collapsed side panel, no intercom strip, a camera that stops, and "Report a problem".

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. The story is in `11-04-srv-story.md`.

## Context

- Two versions of the room view exist. The detailed one is "S1" to "S9" on the page "👤 SRV flow [D]" (old top bar, old rail). The new one is "L4 · Room view" on the one-app page (rail, no top bar).
- **Decision: L4 is the base.** Evidence: in both versions the frame "Main" has the same children, the same components and the same layer names (header 64, body 836, camera area 1012, side panel 380). The S frames differ from each other only inside "Body" and in overlays. An S frame cannot move to the new shell without deleting its top bar and re-parenting its rail.
- So every state is built the same way: clone L4, keep its rail and header, and swap in the "Body" of the S frame that shows the state. Nothing is redrawn.
- S1 to S9 stay where they are, as the archive. Do not change them.
- The word "SRV" appears in layer and component names only. It must not appear in any text on a frame.

## What I found in the file (11-16 evening, read-only)

- "L4 · Room view" `1752:40197` (1440 × 900, vertical). One child "Shell row" `1752:40199` > "SideNav" (rail, 48 wide) + "Main" `1752:40201` (1392 × 900, vertical).
- "Main" > instance "Header" `1752:40202` (64 high) and frame "Body" `1752:40203` (1392 × 836, width fill, height fixed).
- "Header" slots: "Start Content" (instance "IconButton · Back to event", frame "Title" with the text "Title text" = "Sim Room 2" and a "Meta" row), "Center Content" (empty), "End Content" (instance "SRV / Header actions", State Default; its learners button reads "5 learners").
- "Body" > "Camera area" (fill) + instance "SRV / Side panel" (380 fixed, Tab Checklist, Mode Live).
- "Camera area" (vertical) > "Camera content" (fill, fill) + instance "SRV / Intercom strip" (1012 × 64, fixed, State Expanded).
- "Camera content" > "SRV / Camera grid" (980 × 624, fixed, Layout "1 + 2"), "CUSTOM · Live timeline" (width fill), "SRV / Annotation input".
- Positions inside L4: "IconButton · Tab menu" at x 1404, y 74 (28 × 28).
- The "Body" frames of the S frames (all 1392 × 836, same structure as in L4):

| S frame | "Body" id | State |
|---|---|---|
| S1 · Ready to record `1343:4038` | `1343:4044` | Grid 2 × 2, "Start recording", 00:00 |
| S3 · Layout & audio `1348:11530` | `1348:11536` | Grid 1 + 2, ready. Overlay "SRV / Layout & audio panel" `1348:12169` (356 × 784) |
| S5 · Annotations, Live `1358:7934` | `1358:7940` | 08:00, three markers on the timeline, Annotations tab with three cards |
| S6 · Checklist, Live `1360:6148` | `1360:6154` | 08:20, checklist 4 of 7 answered |
| S7 · Intercom in use `1360:7581` | `1360:7587` | 08:45, "Simulator" chosen, "Hold to talk" pressed |
| S8 · Stop confirmation `1360:8441` | `1360:8447` | 18:42. Overlays "Dim" `1360:9294` and "SRV / Stop confirmation" `1360:9295` (440 × 198) |
| S9 · Stopped `1360:9390` | `1360:9396` | "Open debrief", intercom strip hidden, grid height fill |

- Components on "⚙️ Components (D)" `675:31351`:
  - "SRV / Side panel" `605:30863`: Tab = Annotations, Checklist, Chapters, Transcript. Mode = Debrief, Live.
  - "SRV / Header actions" `565:29001`: State = Default, Camera warning, Open, Debrief.
  - "SRV / Intercom strip" `1024:8550`: State = Expanded, Collapsed (44 high).
  - "SRV / Camera tile" `1027:6832`: State = Recording, Not recording ("No signal").
  - "SRV / Mode switch" `1065:26880`: Active = Recording, Debrief (202 × 32).
  - "SRV / Tab menu" `1041:4818` (228 × 207: Annotations, Checklist, Chapters, Transcript, Collapse panel).
  - "SRV / Side panel collapsed" `1041:4858` (48 × 836).
  - "SRV / Playback bar" `1065:27829`: State = Paused, Playing.
  - "SRV / Report a problem" `1024:8740` (480 × 677).

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Base | L4. Every state is a clone of L4 with the "Body" of an S frame, or with variant properties set |
| Header | Always the L4 header: the title is the room name "Sim Room 2". The S frames show the event name as title; that is the old rule |
| Where | Two new Sections: "9 · Room view, recording flow" (y 13400) in story order, and "10 · Room view, more states" (y 14900) |
| No intercom | V14 has no intercom strip at all. Hardware buttons are planned, so the screen must work without the strip |
| Debrief hand-off | V8: after "Open debrief" the layout stays. The side panel is a labelled placeholder for the debrief content, which is designed separately. Nothing of that content is drawn here |
| Camera stops | V15: the tile shows "No signal" and the header shows the warning dot. A message at the moment it happens is not drawn |
| Not drawn | Announcements list open, the assistant switch off, the "All items" filter open, the menu of an annotation card. They wait until after the workshop |

## Component gaps (for Daniel, not for this run)

- The intercom strip has no "talking now" state besides the pressed button.
- The side panel has no Participants tab; participants stay in the popover (P1).
- The recording button has no "starting" state.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line. The two lines write in different Sections, so they may run at the same time, and at the same time as the room readiness file. Nothing else may write in Section "9 · Room view, recording flow" or "10 · Room view, more states".

1. `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-room-view.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "V rules" from the second file. Then run these sections of the second file, in this order: "W1 · Section 9 and V1 to V5", "W2 · V6 to V8". After each section, run its check list and take a screenshot of every new frame before you start the next section.`
2. `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-17-final-room-view.md. Apply "Shared rules" from the first file, with the "Shell facts" update that there is no top bar, and "V rules" from the second file. Then run this section of the second file: "W3 · Section 10 and V9 to V16". Run its check list and take a screenshot of every new frame.`

## V rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Write only inside the Section your section names ("9 · Room view, recording flow" or "10 · Room view, more states"). Never change any other Section or any frame in it. You may clone from them.
- Never change "L4 · Room view" (1752:40197). Never change anything on "👤 SRV flow [D]" (960:51213) or "⚙️ Components (D)" (675:31351). You may clone placed nodes from them and create instances of their components.
- The Shared rules that mention "TopNav" do not apply. No screen has a top bar. A room view screen is 1440 × 900, not 948.
- Never detach an instance. Change instances only through variant properties, text properties, text overrides and layer visibility.
- Never draw an icon, a badge or a button.
- IDs refer to source nodes. Inside a clone, find layers by their exact name.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.
- No text on a frame may read "SRV". Layer names may.

HOW TO BUILD A STATE (used by most frames; called "body swap" below)
1. Clone "L4 · Room view" (1752:40197) into the Section at the slot position. Rename the clone. Keep 1440 × 900, clip content on.
2. In the clone, find "Shell row" > "Main". "Main" has two children: the instance "Header" and the frame "Body".
3. Delete "Body" in the clone.
4. Clone the "Body" frame of the S frame that the section names (the id is given). Append the clone to "Main" as the second child, after "Header".
5. Set the new "Body" to width fill, height fixed 836.
6. Do not touch the "Header" unless the section says so. Its title stays "Sim Room 2".
7. Check: "Main" is 1392 × 900 and has exactly two children, "Header" and "Body".

LABEL AND CAPTION (every frame)
- Label: clone "Label · AV0" (1603:10620) into the Section at the frame's x, y 76. Name "Label · <code>" (for example "Label · V1"). Text: the frame's exact name.
- Caption: clone "Caption · AV0" (1603:10621) into the Section at the frame's x, y 1044, 1440 wide. Name "Caption · <code>". Text: the two lines the section gives, with a line break between them.

SLOTS: slot 1 x 80, slot 2 x 1640, slot 3 x 3200, slot 4 x 4760, slot 5 x 6320, slot 6 x 7880, slot 7 x 9440, slot 8 x 11000. Frames at y 120.
```

## W1 · Section 9 and V1 to V5

```
Goal: the Section "9 · Room view, recording flow" and five room view screens in slots 1 to 5.

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 13300 to y 14700 at x 0 to x 12640, stop and report.
2. If a Section named "9 · Room view, recording flow" already exists, use it and report that it existed.
3. Create a Section. Name "9 · Room view, recording flow". x 0, y 13400, size 12640 × 1240. Copy the fills of Section "5 · Import" (1749:8320).

FRAME V1 · slot 1, x 80. Name "V1 · Room view, ready to record".
1. Body swap with "Body" 1343:4044 (from S1).
2. Caption line 1: "The room is open and nothing is recording yet. Four cameras, the checklist is ready, the intercom works."
   Caption line 2: ""Start recording" goes to L4. "Layout & audio" goes to V2. "5 learners" opens the participants (P1)."

FRAME V2 · slot 2, x 1640. Name "V2 · Room view, Layout & audio".
1. Body swap with "Body" 1348:11536 (from S3).
2. In the "Header" of the clone, find the instance "SRV / Header actions". Set State to "Open". If the learners button no longer reads "5 learners", set it back to "5 learners".
3. Clone the placed instance "SRV / Layout & audio panel" (1348:12169) from "S3 · Layout & audio". Put the clone in the V2 frame as the last child (on top). Layout positioning absolute. x 1068, y 52. Size 356 × 784.
4. Caption line 1: "Layout & audio opens over the side panel. Camera layout presets, the simulator voice, the microphones."
   Caption line 2: "The user picks "1 + 2": one large camera and two small ones. The X closes the panel."

FRAME V3 · slot 3, x 3200. Name "V3 · Room view, annotations".
1. Body swap with "Body" 1358:7940 (from S5).
2. Caption line 1: "Recording, minute 8. Three annotations are on the timeline and in the Annotations tab."
   Caption line 2: ""Discuss", "Good practice" and "Marker" add an annotation at the current time."

FRAME V4 · slot 4, x 4760. Name "V4 · Room view, checklist".
1. Body swap with "Body" 1360:6154 (from S6).
2. Caption line 1: "The checklist while recording. Four of seven items are answered with Yes or No."
   Caption line 2: "The answers save by themselves. The same checklist shows later on the Recording page (L6e)."

FRAME V5 · slot 5, x 6320. Name "V5 · Room view, intercom in use".
1. Body swap with "Body" 1360:7587 (from S7).
2. Caption line 1: "The facilitator talks to the simulator: "Simulator" is chosen and "Hold to talk" is pressed."
   Caption line 2: "V13 shows the strip collapsed. V14 shows the room view with no intercom strip."

CHECK
- The Section exists at x 0, y 13400, 12640 × 1240.
- Five frames, each 1440 × 900 at y 120, with a label and a caption.
- Every frame has the rail with 11 icons on the left and no top bar. Every header title reads "Sim Room 2".
- V1 shows "Start recording" and 00:00. V3, V4 and V5 show "Stop recording".
- In V2 the panel is fully inside the frame and its bottom edge is at y 836.
- "L4 · Room view" and all S frames are unchanged.
- No text on any frame reads "SRV".

REPORT
- The ids of the Section and the five frames.
- "Component gaps": every step you skipped.
```

## W2 · V6 to V8

```
Goal: three more room view screens in slots 6 to 8 of Section "9 · Room view, recording flow". If the Section does not exist, stop and report.

FRAME V6 · slot 6, x 7880. Name "V6 · Room view, stop confirmation".
1. Body swap with "Body" 1360:8447 (from S8).
2. Clone "Dim" (1360:9294) from "S8 · Stop confirmation". Put it in the V6 frame as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900.
3. Clone the placed instance "SRV / Stop confirmation" (1360:9295) from S8. Put it in the V6 frame after the dim layer (on top). Layout positioning absolute. x 500, y 351.
4. Caption line 1: "After "Stop recording". The dialog asks once. "Keep recording" is the default."
   Caption line 2: ""Stop recording" goes to V7. "Keep recording" and the X go back to the recording."

FRAME V7 · slot 7, x 9440. Name "V7 · Room view, stopped".
1. Body swap with "Body" 1360:9396 (from S9). In this body the intercom strip is hidden and the camera grid fills the height. Keep that.
2. Create an instance of "SRV / Mode switch" (1065:26880) with Active = Recording. In the "Header" of the clone, find the slot "Start Content". Append the instance to that slot as the last child, after "Title". If the slot does not accept a child, report it under "Component gaps" and go on.
3. Caption line 1: "The recording is stopped and saved. The button now reads "Open debrief"."
   Caption line 2: ""Open debrief" and the switch "Debrief" go to V8. The recording is also in Recordings (L5)."

FRAME V8 · slot 8, x 11000. Name "V8 · Room view, debrief hand-off".
1. Clone the finished "V7 · Room view, stopped" to x 11000, y 120. Rename it.
2. In the header: set the instance "SRV / Mode switch" to Active = Debrief. Set the instance "SRV / Header actions" to State "Debrief". If the learners button no longer reads "5 learners", set it back. If the header actions are cut off or overlap the title, report it and set State back to "Default".
3. In "Camera content", find "CUSTOM · Live timeline". Note its index and delete it. Create an instance of "SRV / Playback bar" (1065:27829) with State = Paused and insert it at the same index. Width fill.
4. In "Body", delete the instance "SRV / Side panel".
5. New build: a frame named "Placeholder · Debrief content". Append it to "Body" as the last child. Width fixed 380, height fill. Auto-layout vertical, padding spacing/6 (24), gap spacing/2 (8), children centred on both axes. Fill: copy the fills of the frame "Live picture frame" (1752:33817) in "L9 · Camera, opened from a room". Left stroke 1 px border/default (copy the stroke paint from "Card · Cameras" 1752:19778).
6. In the placeholder, two texts, centred, width fill:
   a. Card title text (clone "Cameras" 1752:19780): "Debrief content".
   b. Muted text (clone "3 cameras · 1 not found" 1752:19781): "Designed separately. Feedback, clips and checklist results plug in here. The cameras, the playback bar and the annotations on the left stay as they are."
7. Caption line 1: "Hand-off to the debrief. The layout of the room view stays; the timeline becomes a playback bar."
   Caption line 2: "The right side is the place for the debrief content. It is not designed in this file. The same content shows in the Debrief tab of the Recording page (L6b)."

CHECK
- Three frames, each 1440 × 900 at y 120, with a label and a caption.
- V6: the dialog is centred over the dimmed screen.
- V7: the button reads "Open debrief". There is no intercom strip and no empty gap under the cameras.
- V8: the right side is one grey placeholder, 380 wide, full height. No side panel tabs are visible.
- "L4 · Room view" and all S frames are unchanged. No text reads "SRV".

REPORT
- The ids of the three frames.
- Whether the mode switch could be placed in "Start Content".
- "Component gaps": every step you skipped.
```

## W3 · Section 10 and V9 to V16

```
Goal: the Section "10 · Room view, more states" and eight room view screens. Every frame here is a plain clone of "L4 · Room view" (1752:40197) with a few changes. No body swap in this section.

STEP 1 · Section
1. Look at every top-level node of page 1749:8314. If any node reaches into y 14800 to y 16200 at x 0 to x 12640, stop and report.
2. If a Section named "10 · Room view, more states" already exists, use it and report that it existed.
3. Create a Section. Name "10 · Room view, more states". x 0, y 14900, size 12640 × 1240. Copy the fills of Section "5 · Import" (1749:8320).

For each frame: clone L4 into the Section at the slot position, rename it, make the changes, add the label and the caption.

FRAME V9 · slot 1, x 80. Name "V9 · Room view, chapters".
1. In the instance "SRV / Side panel": set Tab = Chapters. Mode stays Live.
2. Caption line 1: "The Chapters tab while recording. Chapters are made from what is said and done."
   Caption line 2: "Open question: are chapters and the transcript made live, or only after the recording stops?"

FRAME V10 · slot 2, x 1640. Name "V10 · Room view, transcript".
1. In the instance "SRV / Side panel": set Tab = Transcript. Mode stays Live.
2. Caption line 1: "The Transcript tab while recording."
   Caption line 2: "The search finds a word in the transcript. Same open question as V9."

FRAME V11 · slot 3, x 3200. Name "V11 · Room view, tab menu".
1. Create an instance of "SRV / Tab menu" (1041:4818). Put it in the V11 frame as the last child (on top). Layout positioning absolute. x 1204, y 106.
2. Caption line 1: "The "…" at the end of the tab row opens this menu. It lists the tabs and "Collapse panel"."
   Caption line 2: "A tab name switches the tab (V3, L4, V9, V10). "Collapse panel" goes to V12."

FRAME V12 · slot 4, x 4760. Name "V12 · Room view, side panel collapsed".
1. In "Body", delete the instance "SRV / Side panel".
2. Create an instance of "SRV / Side panel collapsed" (1041:4858). Append it to "Body" as the last child. Width fixed 48, height fill.
3. "Camera area" is width fill, so it grows to 1344. Set "SRV / Camera grid" to width fill and "SRV / Intercom strip" to width fill. If a camera tile is stretched in a wrong way or a width cannot be set, report it and leave the width as it was.
4. Caption line 1: "The side panel is collapsed. The cameras use the full width."
   Caption line 2: "The icons on the right open the panel again on that tab."

FRAME V13 · slot 5, x 6320. Name "V13 · Room view, intercom collapsed".
1. Set the instance "SRV / Intercom strip" to State = Collapsed. It becomes 44 high.
2. Set "SRV / Camera grid" to height fill, so that no gap appears.
3. Caption line 1: "The intercom strip is collapsed to one line. "Hold to talk" stays."
   Caption line 2: "The arrow opens the strip again (L4)."

FRAME V14 · slot 6, x 7880. Name "V14 · Room view, no intercom".
1. Set the instance "SRV / Intercom strip" to visible = false.
2. Set "SRV / Camera grid" to height fill. It becomes 688 high, as in "S9 · Stopped".
3. Caption line 1: "The room view with no intercom strip, for rooms that use hardware intercom buttons."
   Caption line 2: "Everything else works the same. Open question: is the strip a room setting or a user choice?"

FRAME V15 · slot 7, x 9440. Name "V15 · Room view, a camera stops".
1. In the instance "SRV / Camera grid", find the nested tile instance "Camera 3". Set its property State to "Not recording".
2. In the header, set the instance "SRV / Header actions" to State "Camera warning". If the learners button no longer reads "5 learners", set it back to "5 learners".
3. Caption line 1: "One camera stops while recording. Its tile shows "No signal". The other cameras keep recording."
   Caption line 2: "The red dot on "Layout & audio" points to the camera list. "Report a problem" opens V16. Not drawn: the message at the moment it happens."

FRAME V16 · slot 8, x 11000. Name "V16 · Room view, report a problem".
1. Clone "Dim" (1360:9294) from "S8 · Stop confirmation" on the page "👤 SRV flow [D]". Put it in the V16 frame as the last child. Layout positioning absolute. x 0, y 0, size 1440 × 900.
2. Create an instance of "SRV / Report a problem" (1024:8740). Put it in the V16 frame after the dim layer (on top). Layout positioning absolute. x 480, y 112.
3. Do not change any text in the dialog.
4. Caption line 1: ""Report a problem" in the header opens this dialog. The recording goes on behind it."
   Caption line 2: "The same dialog is used on the room page and the device page (RR5)."

CHECK
- The Section exists at x 0, y 14900, 12640 × 1240.
- Eight frames, each 1440 × 900 at y 120, with a label and a caption.
- V9 and V10 show the right tab as active. V11: the menu is fully inside the frame and under the "…" button.
- V12: no 380 px side panel; a 48 px strip on the right. V13 and V14: no empty gap between the cameras, the timeline and the bottom.
- V15: the third tile shows "No signal".
- "L4 · Room view" is unchanged. No text on any frame reads "SRV".

REPORT
- The ids of the Section and the eight frames.
- "Component gaps": every step you skipped.
```

## After these run

- Claude reviews every frame in the file and adds the two Sections and 16 frames to "Screen list" and "Shell facts" in `11-16-merge-00-shared.md`.
- P1, P1b and P3 (participants) stay as they are. They are the same screen with the participants popover.
- "RR3 · Room view, room warning" (in the room readiness file) is the ready state with a room warning.
