# Storyboard prompts · DF-1, DF-2, DF-3 (for Weavy)

Written 2026-10-02 from `spec/flows/`. DF-2 follows **v2** (`DF-2-day-off-plan--v2.md`, proposal), which contains every v1 step too. If v1 wins, skip DF-2 panels 1–5.

Style matches Gabor's 10-frame lifecycle storyboard (`db-llm-second-brain/raw/assets/essentials-2.0/essentials-storyboard-*.png`), so both sets read as one family. Feed one of those PNGs to Weavy as a **style reference image**.

## How to set it up in Weavy

1. **One text node for STYLE** (below), one for **CHARACTERS**, and one per panel. Concatenate them: `STYLE + CHARACTERS (only the people in the panel) + PANEL`.
2. **Generate a character sheet first** (prompt at the end of this file), then feed it as an image reference to every panel. Without it, Maya won't look like the same person twice.
3. Model: one that handles reference images and short text well (Nano Banana / Gemini image, GPT Image, Flux Kontext). 16:9, 1280×720 or larger.
4. **Screen text:** image models garble long text. Each panel names at most one or two short on-screen labels. The UI in the panels is illustrative. The real UI comes from the wireframes.
5. Frame text: the header counter and footer title are in each prompt. If the model keeps misspelling them, generate without text and add the header and footer in Figma.

## STYLE (paste into every panel)

> Clean flat vector illustration for a product storyboard, 16:9. Muted slate-blue, grey and white palette with teal accents (#2E7D7A) and a single red only for recording indicators. Thin dark-grey outlines, soft flat shading, no gradients, no photorealism. A rounded white card on a light grey background. Header bar in small caps: "STORYBOARD — {N} OF {TOTAL}" on the left, "ESSENTIALS 2.0 · {FLOW}" on the right. The main illustration is inside a rounded panel, with teal pill labels naming the location. Footer strip: a circular outline icon on the left, a large dark-slate title "{N} · {TITLE}", and under it in teal "{WHO} · {WHERE} · {TOOL}". Calm, professional, healthcare-education setting. Screens show simplified UI with only the labels given.

## CHARACTERS (paste only the ones in the panel)

- **Dr. Maya Ortiz** (faculty, uses the product about twice a month): woman in her late 40s, shoulder-length dark wavy hair, reading glasses, white lab coat over a teal blouse, ID lanyard.
- **Sam Keller** (sim tech / operator): man in his early 30s, short brown hair, short beard, grey-blue scrubs, radio clipped to the belt, ID lanyard.
- **Dana Whitfield** (sim coordinator): woman in her 50s, short silver bob, navy cardigan, office setting, two monitors.
- **Emily Baker** (nursing student, recipient): woman around 21, long dark ponytail, navy student scrubs, backpack.
- **Learners**: groups of five nursing students in navy scrubs. **Priya Shah** (DF-1): student with a long braid, arrives late. **Aisha Rahman** (DF-2): student in navy scrubs with a navy hijab.
- **Manikin**: a full-body patient simulator in a hospital bed, with a vitals monitor.

---

## DF-1 · Walk in and record (12 panels)

FLOW = "DF-1 WALK IN AND RECORD" · TOTAL = 12 · Wednesday 30 September, 13:50

| N | TITLE | WHO · WHERE · TOOL | PANEL prompt |
|---|---|---|---|
| 1 | Open Essentials | Faculty · Control room · Essentials | Maya sits at the control-room laptop, the sim room visible through a one-way window behind the laptop. Through an open door, five learners wait in the corridor. On the laptop: a home screen with a short status line "3 of 4 rooms ready" and one large teal button "Record now". Maya looks slightly rushed but calm. |
| 2 | Pick a free room | Faculty · Control room · Essentials | Close-up over Maya's shoulder. A side panel slides over the laptop screen with a list of three room cards: the top one highlighted teal "Sim Room 2 · Free", one with a small amber dot, one greyed out "In use". Her finger points at the top card. |
| 3 | Scenario and group, both optional | Faculty · Control room · Essentials | Same side panel. Two small sections with chips: a scenario chip "Sepsis recognition" and a group chip "Group A" showing five tiny avatar circles. A small caption on screen reads "optional". Maya nods. |
| 4 | Open the room | Faculty · Control room · Essentials | Maya clicks a teal button "Open room". A soft transition arrow points from the side panel to a live room view starting to appear. Minimal panel, focus on one click. |
| 5 | The live room | Faculty · Control room · Essentials | The laptop shows three camera tiles of the sim room (manikin in bed, learners entering), a thin audio strip, and a right-hand list of five names with a small amber note "Confirm who's here". Through the window, the five learners gather around the manikin. |
| 6 | Tap who's here | Faculty · Control room · Essentials | Close-up of the participant list: four names with teal check marks, one name greyed "Not here". Maya taps the last check. A small counter "4 of 5". |
| 7 | Recording, confirmed | Faculty · Control room · Essentials | A red recording banner runs across the top of the laptop screen with a red dot and a timer. Maya leans back, relieved. Split detail: a small inset of the button changing from "Starting…" to "Recording". |
| 8 | Drop a marker | Faculty · Control room · Essentials | During the scenario, Maya taps a "Marker" button; a small flag appears on a timeline strip under the cameras. Through the window, a learner holds a lab result while the others work on the manikin. |
| 9 | Talk to the room | Faculty · Control room → Sim room · Essentials | Split panel with a teal arrow. Left, control room: Maya holds a "Talk" button, a small sound-wave icon. Right, sim room: learners look up at a ceiling speaker, listening. Pill labels "CONTROL ROOM" and "SIMULATION ROOM". |
| 10 | Late arrival, no restart | Faculty · Control room · Essentials | Priya hurries into the sim room, still tying her hair. On the laptop, Maya types "Priy…" into a small add field; the list now shows five checks, Priya marked "joined 06:30". Recording banner still red and running. |
| 11 | Stop | Faculty · Control room · Essentials | Maya clicks "Stop". A small one-line confirmation box on screen. Through the window, learners step back from the manikin, scenario over. |
| 12 | Saved, debrief ready | Faculty · Control room · Essentials | A "Recording saved" card on the laptop with one large teal button "Open debrief" and a small QR code. Maya picks up her tablet, ready to walk to debrief. Teal arrow pointing out of frame toward "DEBRIEF ROOM". |

---

## DF-2 · Your spreadsheet in, the day runs itself (15 panels, v2)

FLOW = "DF-2 THE DAY RUNS ITSELF" · TOTAL = 15 · Panels 1–5: Monday 28 Sept. Panels 6–15: Thursday 1 Oct, OB sim day.

| N | TITLE | WHO · WHERE · TOOL | PANEL prompt |
|---|---|---|---|
| 1 | Drop in the spreadsheet you already have | Coordinator · Office · Essentials | Dana at her office desk with two monitors. On one screen a messy department spreadsheet (colourful columns, merged cells). She drags the file onto the other screen's upload area, a dashed drop zone. No template, no forms. Calendar on the wall shows "Monday". |
| 2 | Columns matched for you | Coordinator · Office · Essentials | The screen shows two columns linked by thin teal lines: spreadsheet headings on the left, Essentials fields on the right, each line tagged with a small "Suggested" label. One line is dashed amber, unmatched. Dana reads, coffee mug in hand. |
| 3 | Preview before anything is saved | Coordinator · Office · Essentials | Three large stat tiles on screen: "3 sessions", "14 learners", "1 duplicate", and one small amber row "1 row needs a fix". A shield-style icon suggests nothing has been saved yet. |
| 4 | Fix it in place | Coordinator · Office · Essentials | Close-up: Dana picks "Sim Room 1" from a small dropdown next to an amber row; two duplicate person cards merge into one with a teal link icon. The amber counter turns teal "0 to fix". |
| 5 | The week is in | Coordinator · Office · Essentials | A success card "Imported" with a teal check, and behind it a week calendar view filling with session blocks per room. Dana closes her laptop lid halfway, done. |
| 6 | Thursday, 08:48 | Sim tech · Control room · Essentials | Sam in the control room with a laptop, coffee, radio on his belt. The home screen shows his session on top: "09:00 · Sim Room 1 · 3 groups" with a teal "Open room" button. Through the window, the room is being reset; the manikin bed is unmade. |
| 7 | One learner swapped, one click | Sim tech · Control room · Essentials | At the door, Aisha (navy hijab) steps in as another student waves and leaves. On the laptop, two name chips swap places between "Group A" and "Group C" with a curved teal arrow, and a small "Swap" button. |
| 8 | It asks, it doesn't guess | Sim tech · Control room · Essentials | 09:00 on a wall clock. A prompt card pops up on the laptop: "Group A is due now" with two buttons "Start recording" and "Not yet". Through the window, Sam's colleague is still fixing the bed sheets. Sam's hand hovers over "Not yet". |
| 9 | Running 12 minutes late | Sim tech · Control room · Essentials | Wall clock at 09:12. A small amber chip on screen "12 min late" and a teal recording banner starting. Through the window, Group A (five students incl. Aisha) now around the manikin. A thin timeline strip under the cameras shows a teal segment "Group A". |
| 10 | Next group, one tap | Sim tech · Control room · Essentials | Group A leaves through one door, Group B enters through another. Sam taps "Next group". The timeline strip shows segment "A" ending and segment "B" starting, recording still running (red dot never stops). |
| 11 | Missed a switch? It tells you | Sim tech · Control room · Essentials | After Stop: a summary card on screen with three group pills, A and B teal, C amber with "not in this recording yet" and a small "Fix parts" link. Sam raises an eyebrow, not alarmed. Teal arrow toward "DEBRIEF" at the frame edge. |
| 12 | Fix parts *(wireframe level, optional panel)* | Sim tech · Control room · Essentials | Close-up of a video timeline with a thumbnail strip; Sam drags a vertical teal split line at the moment the room resets. A new segment labelled "Who is this?". |
| 13 | Assign and say why *(optional)* | Sim tech · Control room · Essentials | The new segment gets a "Group C" pill. A small text field with a one-line reason. A consequence note on screen with a small pause icon next to a share. |
| 14 | Everything adds up *(optional)* | Sim tech · Control room · Essentials | Session summary: three teal group segments A · B · C side by side, no overlaps, a small "History · 3 changes" tab. Sam closes the laptop. |
| 15 | Shares stay correct *(optional)* | Sim tech · Control room · Essentials | A share card with a pause icon and a teal "Resume with new range" button. Nothing goes out to learners until it's reviewed. |

Booth cut: panels 1, 3, 5, 6, 8, 10, 11 tell the story in seven frames.

---

## DF-3 · Debrief in 30 seconds, then share (12 panels)

FLOW = "DF-3 DEBRIEF AND SHARE" · TOTAL = 12 · 14:41, straight after DF-1

| N | TITLE | WHO · WHERE · TOOL | PANEL prompt |
|---|---|---|---|
| 1 | It's already waiting | Faculty · Debrief room · Essentials on iPad | Debrief Room A: a table, chairs, a wall display. Maya picks up an iPad from a stand; on it, the session she just ran sits at the top of a list with a teal "Open debrief" button. The five learners come through the door and sit down. |
| 2 | Opens on the first marker | Faculty · Debrief room · iPad | iPad in landscape: video player paused on a marked moment (not at the start), a right rail with marker flags, some with a small "AI" badge. Three tiny camera thumbnails under the video. |
| 3 | Jump to the key moment | Faculty · Debrief room · iPad | Maya taps a marker flag; video and a transcript line highlight together. Small "‹ Prev · Next ›" buttons under the player. A small lock icon by her notes. |
| 4 | Video on the wall, notes in her hand | Faculty + Learners · Debrief room · iPad + wall display | Split view: the wall display shows only the video, large; the learners watch. In Maya's hands the iPad still shows notes and markers, private. A teal bar on the iPad "Showing on room display". |
| 5 | Add a moment while you talk | Faculty · Debrief room · iPad | A learner points at the wall display; Maya taps to add a new marker, a green "Good practice" flag appears on the timeline. Conversation, nodding students. |
| 6 | Select the part worth keeping | Faculty · Debrief room · iPad | Close-up of the iPad timeline: a teal highlighted range between two handles, a small label "2 min 30 s", a button "Share range". |
| 7 | Recipients already filled in | Faculty · Debrief room · iPad | A share sheet slides up on the iPad: five small avatar chips (Group A) already filled in, a toggle "Download" switched off, an expiry chip "14 Oct". |
| 8 | Approve is the send | Faculty · Debrief room · iPad | Maya taps a large teal button "Approve and send to 5". Five small envelope icons fly out of the iPad toward the edge of the panel. |
| 9 | She sees who opened it | Faculty · Office · Essentials | Later: Maya at her desk with the laptop; a list of five names with status chips "Opened", "Sent", "Not opened", and small "Resend" / "Revoke" links. |
| 10 | The link arrives | Learner · Bus / campus · Phone | Emily on a campus bench or bus, backpack on her lap, looking at her phone. On the phone: an email card "Maya Ortiz shared part of your simulation" with a teal "Open" button. No app icon, no password field. |
| 11 | A code, not a password | Learner · Campus · Phone | Close-up of Emily's phone: six digit boxes being filled, a small padlock. Her thumb on the keypad. |
| 12 | Just her moment, nothing else | Learner · Campus · Phone | Emily watches a short video clip on her phone with two marker flags on its timeline and a small line "available until 14 Oct". She looks engaged and thoughtful. No menus, no other recordings visible. |

---

## Character sheet (generate first)

> STYLE as above, but no header or footer. A character reference sheet on a plain light grey background: Dr. Maya Ortiz, Sam Keller, Dana Whitfield and Emily Baker, each shown full body front view and a three-quarter head close-up, name label under each in small dark-slate caps. Descriptions: {paste CHARACTERS}. Consistent proportions, same line weight, same palette.
