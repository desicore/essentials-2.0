# 11-16 · F8: video review on the Recording page (L6c to L6g)

Five greyscale screens that show the simpler video review. They sit next to "L6 · Recording" and do not replace it. "L6 · Recording" and "L6b · Recording, Debrief tab" stay as they are. The decision between old and new is for a Design Critique session.

The Shared rules and the sample data are in `11-16-merge-00-shared.md`. The research is in the vault page `wiki/research/video-review-interface-patterns.md`. The low-fi screens are on the FigJam board `KStutzzTvN5ENoWJPj07Zg`: L6c `27:1674`, L6d `27:1793`, L6e `27:1912`, L6f `27:2031`, L6g `37:2487`.

## Context

- Daniel's annotation on "L6 · Recording": today's product shows much more while rewatching. He wants a simpler screen that keeps the functions.
- Daniel's comments on the low-fi (11-16):
  - The first tab is called "Annotations", not "Moments".
  - Layout management goes to the top, as "Layout & audio" in the SRV design.
  - No Chapters tab. The transcript is always open, with chapter headers inside it. A list icon next to the search opens the chapter list as an overlay.
- Nothing existing is overwritten. New ideas are added as new frames and as one new exploration component.

## What I found in the file (11-16, read-only)

- "L6 · Recording" `1752:34208`, in Section "2 · Recordings and debrief" `1749:8317`, slot 2. Structure: "Body" > "SideNav" + "Content". "Content" (1180 wide, padding 24, gap 24) holds "Breadcrumb", "Page header", "Tab row" `1752:35845` and "Body" `1752:37199`.
- "Tab row" > "Actions" `1752:35846` holds "Button · Download" `1752:35883` (Secondary, SM) and "Button · Share" `1752:35889` (Primary, SM).
- "Body" `1752:37199` is horizontal, gap 24, height hug. It holds "Player column" `1752:37200` (784 wide, vertical, gap 16) and "Card · Notes and marks" `1752:37202` (324 wide).
- "Player column" holds "Video" `1752:37201` (784 × 400), the instance "SRV / Playback bar" `1752:37207` (State=Paused) and the instance "SRV / Annotation input" `1752:37288`.
- Slots 4 to 8 of the Section are empty.
- Components on "⚙️ Components (D)" `675:31351`:
  - "SRV / Side panel" `605:30863`. Properties: Tab (Annotations, Checklist, Chapters, Transcript) and Mode (Debrief, Live). Size 380 × 836. Its tab row is a nested instance of "SRV / Side panel tabs" `565:28541`, with a layer "Tab · Chapters".
  - "SRV / Camera grid" `1029:6901`. Property Layout: Single, Side by side, 1 + 2, 2 × 2, 3 × 3.
  - "SRV / Layout & audio panel" `1048:5310` (356 × 784). A placed instance is `1348:12169` in "S3 · Layout & audio" `1348:11530` on the page "👤 SRV flow [D]".
  - "SRV / Playback bar" `1065:27829`. Play, −10s, +10s, time, timeline with markers. It has no speed control and no full screen button.
  - New on 11-16, added by Claude at Daniel's request: "SRV / Side panel · Transcript with chapter overlay (exploration)" `1784:13404`, property Overlay (Closed, Open). It is a copy of the Transcript panel without the Chapters tab, with a list icon button, and in "Open" with an overlay of five "SRV / Chapter row" instances. It sits at the bottom of the Components page in the frame "Exploration · Transcript with chapter overlay (not final)" `1784:13152`.

## Decisions in this prompt (Claude's call, for Daniel to check)

| Topic | Decision |
|---|---|
| Where | Section "2 · Recordings and debrief", slots 4 to 8. L5, L6 and L6b are not touched |
| Video | "SRV / Camera grid", Layout "1 + 2": one large camera and two small ones. This is the default view |
| Side panel | The real "SRV / Side panel" replaces "Card · Notes and marks". It is 380 wide, so the player column shrinks from 784 to 728 |
| Chapters tab | Hidden by layer visibility in the panel instance. No detach, no component change |
| Layout | A "Layout & audio" button in the tab row, left of "Download". On L6d the existing "SRV / Layout & audio panel" opens on the right, over the side panel |
| Transcript | L6f and L6g use the exploration component `1784:13404` |
| Speed and full screen | Not drawn. "SRV / Playback bar" has neither, and this run must not change a component. It is listed as a component gap |
| Learner picker in the note input | Not drawn, for the same reason. Listed as a component gap |

## Open questions for the Design Critique

- Old L6 (one video, simple list) or this version?
- Three tabs with the chapter overlay, or four tabs with a Chapters tab?
- Should the pinned chapter header open the chapter list, so the icon is not needed?
- Where do Speed and Full screen go in "SRV / Playback bar"?
- Is the transcript made during the live recording, or only after it? This decides the empty state on the live screen.

## How to run

Model: **Claude Sonnet 5.5 · High**. One new Cursor chat for each line. Run them in this order. Check the result of the first run before you start the second, because the other four frames are clones of it. Nothing else may run in Section "2 · Recordings and debrief" at the same time.

1. `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f8-video-review.md. Apply "Shared rules" from the first file and "F8 rules" from the second. Then run ONLY section "V1 · L6c base screen" of the second file.`
2. `Read @wireframe-benchmark/reviews/11-16-merge-00-shared.md and @wireframe-benchmark/reviews/11-16-merge-f8-video-review.md. Apply "Shared rules" from the first file and "F8 rules" from the second. Then run ONLY section "V2 · L6d to L6g clones" of the second file.`

## F8 rules

```
Figma file IMSH-MVP (dbJVpAusLJCtreiz0jlEh3), page "🧭 One app · merge [D]" (1749:8314).
These rules add to the Shared rules for this run:
- Write only inside Section "2 · Recordings and debrief" (1749:8317), and only in slots 4 to 8. Never change "L5 · Recordings", "L6 · Recording" (1752:34208), "L6b · Recording, Debrief tab" (1752:38118) or their labels and captions. You may clone them.
- The Shared rules that mention "TopNav" do not apply. No page screen has a top bar.
- Never edit, rename or move anything on "⚙️ Components (D)" (675:31351) or "👤 SRV flow [D]" (960:51213). You may create instances of their components and clone placed instances.
- Never detach an instance. Change instances only through variant properties, text overrides and layer visibility.
- Never draw an icon, a badge or a button. Clone an existing one.
- IDs refer to source nodes. Inside a clone, find layers by their exact name.
- If a step cannot be done exactly, skip it and report it under "Component gaps". Do not build a workaround.
```

## V1 · L6c base screen

```
Goal: one page screen "L6c · Recording, Annotations" in slot 4. It is "L6 · Recording" with three changes: a camera grid instead of the single video, the real side panel instead of the notes card, and a "Layout & audio" button.

STEP 1 · Clone
1. Clone "L6 · Recording" (1752:34208). Put the clone in Section 1749:8317 at x 4760, y 120. Name it "L6c · Recording, Annotations". Keep 1440 × 900, clip content on.

STEP 2 · "Layout & audio" button
1. In the clone, find "Tab row" > "Actions". Clone "Button · Download" inside "Actions" and put the copy first, left of "Button · Download".
2. Set its label with the text override to "Layout & audio". Keep Variant Secondary, Size SM. Name the layer "Button · Layout & audio".
3. "Actions" keeps its gap. "Tab row" stays 1132 wide.

STEP 3 · Body height
1. Find the frame "Body" that holds "Player column" (in the source it is 1752:37199). Set its height to fixed 676. Keep it horizontal, gap 24, width fill.

STEP 4 · Side panel
1. In "Body", delete "Card · Notes and marks".
2. Create an instance of "SRV / Side panel" (605:30863) with Tab = Annotations, Mode = Debrief. Put it in "Body" as the last child. Width fixed 380, height fill (676). Name it "SRV / Side panel".
3. Inside this instance, find the nested layer named "Tab · Chapters" (it is inside the nested instance "SRV / Side panel tabs"). Set visible = false. If the layer is not found, or hiding it leaves a gap in the tab row, report it and leave the tab visible.

STEP 5 · Player column
1. Set "Player column" to width fill. It becomes 728 wide. Keep vertical, gap 16.
2. Delete the frame "Video" in "Player column".
3. Create an instance of "SRV / Camera grid" (1029:6901) with Layout = 1 + 2. Put it as the first child of "Player column". Width fill (728), height fixed 410. Name it "SRV / Camera grid".
4. The nested camera tiles are instances of "SRV / Camera tile" (1027:6832). Set the property State of each tile to "Recording". This is the state that shows the picture. Do NOT use "Not recording": that state is the "No signal" error. (Corrected on 11-16 after the first run. The red dot of "Recording" stays; the component has no playback state. It is a component gap.)
5. "SRV / Playback bar" and "SRV / Annotation input" stay as they are, width fill.

STEP 6 · Label and caption
1. Label: clone "Label · AV0" (1603:10620) to x 4760, y 76 in the Section. Name "Label · L6c". Text "L6c · Recording, Annotations".
2. Caption: clone "Caption · AV0" (1603:10621) to x 4760, y 1044, 1440 wide. Name "Caption · L6c". Two lines:
   Line 1: "Proposal for the Design Critique. One large camera and two small ones. Layout and audio open from the button on top."
   Line 2: "The side panel has three tabs: Annotations, Checklist, Transcript. Not drawn: speed and full screen in the playback bar, a learner picker in the note input."

CHECK
- "L6c · Recording, Annotations" is 1440 × 900 at x 4760, y 120 and nothing is clipped at the bottom.
- "Body" is 1132 × 676. "Player column" is 728 wide. The side panel is 380 × 676.
- The tab row of the side panel shows Annotations, Checklist, Transcript and no Chapters.
- "L6 · Recording" is unchanged.
- Take one screenshot of the new frame.

REPORT
- The node id of "L6c · Recording, Annotations".
- "Component gaps": every step you skipped, with frame, component and what is missing.
```

## V2 · L6d to L6g clones

```
Goal: four more screens, each a clone of the finished "L6c · Recording, Annotations". If that frame does not exist in Section 1749:8317, stop and report. Do not change L6c.

For each frame: clone L6c, place it, rename it, make the changes, then add a label and a caption as in V1 STEP 6 (label at y 76, caption at y 1044, same x as the frame, names "Label · <code>" and "Caption · <code>").

FRAME L6d · slot 5, x 6320, y 120. Name "L6d · Recording, Layout & audio".
1. Clone the placed instance "SRV / Layout & audio panel" (1348:12169) from "S3 · Layout & audio" (1348:11530). Put the clone in the L6d frame as an absolute layer on top of everything: x 1060, y 92, size 356 × 784. Name it "SRV / Layout & audio panel".
2. In the panel, the selected layout option must be "1 + 2", the same as the camera grid. The source already has it selected. Change nothing if it matches.
3. Caption line 1: "Layout & audio is the same panel as on the live recording screen. It opens over the side panel."
   Caption line 2: "Presets replace the old Layout tab and its drag and drop."

FRAME L6e · slot 6, x 7880, y 120. Name "L6e · Recording, Checklist".
1. In the instance "SRV / Side panel", set Tab = Checklist. Mode stays Debrief.
2. A variant change can reset layer visibility. Check "Tab · Chapters" again and set visible = false.
3. Caption line 1: "The checklist stays next to the video. This is the norm in simulation products."
   Caption line 2: "Same component as on the live recording screen."

FRAME L6f · slot 7, x 9440, y 120. Name "L6f · Recording, Transcript".
1. In "Body", delete the instance "SRV / Side panel".
2. Create an instance of "SRV / Side panel · Transcript with chapter overlay (exploration)" (1784:13404) with Overlay = Closed. Put it in "Body" as the last child. Width fixed 380, height fill (676). Name it "SRV / Side panel · exploration".
3. Caption line 1: "The transcript is always open and follows the video. Chapter titles are headers inside it."
   Caption line 2: "There is no Chapters tab. The list icon next to the search opens the chapter list (L6g). Exploration component, not final."

FRAME L6g · slot 8, x 11000, y 120. Name "L6g · Recording, chapter list open".
1. Build it as a clone of the finished L6f, not of L6c.
2. In the instance "SRV / Side panel · exploration", set Overlay = Open.
3. If the overlay is cut off by the frame or by "Body", report it. Do not turn off clip content on the screen frame.
4. Caption line 1: "Click the list icon: the chapters open as an overlay. Click a chapter: video and transcript jump there and the overlay closes."
   Caption line 2: "It opens on click, not on hover, so it also works on a tablet."

CHECK
- Four new frames, each 1440 × 900, at x 6320, 7880, 9440 and 11000, y 120.
- Every frame has a label and a caption.
- L5, L6, L6b and L6c are unchanged.
- Take one screenshot of each new frame.

REPORT
- The node ids of the four frames.
- "Component gaps": every step you skipped, with frame, component and what is missing.
```
