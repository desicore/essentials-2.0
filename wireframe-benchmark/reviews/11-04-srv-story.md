# 11-04 · SRV flow story (draft)

The story sets the order of the frames on page "SRV flow [D]" (960:51213), which is empty today. Each step is one frame unless it says otherwise. The state table covers everything off the main path.

Based on the IMSH demo story (Act 2 and the start of Act 3), the 10-12 flow map, and the decisions since then. Maya Ortiz is the faculty member, and the session is NURS 310 · Sepsis recognition, Group A, in Sim Room 2.

## The story

| # | Maya | The system | Frame | Built from | Ready? |
|---|---|---|---|---|---|
| 1 | Sees today's session on the dashboard and clicks **Start recording** | Opens the SRV with room, scenario and group filled in | S1 · Ready to record | B2 (461:22825), Header actions, Camera grid, Recording button | After C6, C7 |
| 2 | Opens **4 learners** and unticks a learner who is off sick | The count updates. People can still be added later | S2 · Participants | Header actions (State=Open), Participants popover | After C9 |
| 3 | Opens **Layout & audio**, picks 1 + 2, closes the panel | The grid changes. Off-screen cameras still record | S3 · Layout & audio | Layout & audio panel | After C7 |
| 4 | Clicks **Start recording** | The timer runs and the cameras show the red dot. The button becomes Stop recording | S4 · Recording | Recording button, Timeline, Side panel (Live) | After C6, C7 |
| 5 | Taps **Discuss** at 04:12 and types a comment. Adds a Marker at 07:30 | The annotations appear in the list and on the timeline. Times stay plain text in Live | S5 · Annotations, Live | Annotation input, Side panel (Annotations, Live) | After C6 |
| 6 | Opens **Checklist** and answers items as they happen | Each answer saves by itself | S6 · Checklist, Live | Side panel (Checklist, Live) | ✅ |
| 7 | Holds **Hold to talk** on the Simulator channel to speak as the patient | Her voice goes to the selected channel | S7 · Intercom in use | Intercom strip | After C5 |
| 8 | Clicks **Stop recording** | Asks for confirmation | S8 · Stop confirmation | Stop confirmation | After C6 |
| 9 | Confirms **Stop recording** | Recording ends and processing starts. The button becomes Open debrief | S9 · Stopped | Recording button | After C6 |
| 10 | Walks to the debrief room | Ehli works in the background | S10 · Ehli processing | SP1f, SP2e, SP3c | ✅ |
| 11 | Clicks **Open debrief** on this computer. (On a tablet she scans the QR code instead, which is Gabor's design) | The Mode switch moves to Debrief and the Feedback tab opens, with AI feedback hidden | S11 · Debrief opens | Debrief panel, Mode switch, Header actions (Debrief), Playback bar | ✅ |
| 12 | Clicks **Show feedback** | Ehli's feedback appears and stays for this debrief | S12 · AI feedback | Feedback content (AI ready) | ✅ |
| 13 | Opens **Annotations** and clicks 04:12 | The video jumps to 04:12 | S13 · Annotations | Debrief panel (Annotations) | ✅ |
| 14 | Switches to **AI short clips** and plays one | The clip plays in the video area | S14 · Clips | Debrief panel (Clips), AI clip row | ✅ |
| 15 | Opens **Checklist** and changes an answer | The change saves by itself | S15 · Checklist | Debrief panel (Checklist) | ✅ |
| 16 | Opens **Facilitator feedback**, types her points, clicks **Save to feedback** | Her feedback is saved | S16 · Facilitator feedback | Feedback content (Facilitator) | ✅ |
| 17 | Clicks **Share**, checks what's included | The dialog opens with AI feedback ticked, because she has read it | S17 · Share | Share dialog (Reviewed) | ✅ |
| 18 | Clicks **Share with 4 learners** | Each learner gets an email link | S18 · Shared | ⚠️ No confirmation component yet | ❌ |

Debrief on the laptop is specified in `11-04-debrief.md`. Debrief is the conversation right after the session, and video review is rewatching later.

## States off the main path

| Screen | State | Why it matters | Source |
|---|---|---|---|
| Recording | Camera not recording | Header warning plus the tile state | B1 (461:22285), Header actions, Camera tile |
| Recording | Left the SRV while recording | She needs a way back | Recording banner, after C9 |
| Recording | Report a problem | Voluntary, from the header | C6 |
| Recording | Panel collapsed | The video gets wider | SP5d, needs a full-screen frame |
| Recording | Intercom collapsed | Less noise during the session | C5 |
| Recording | Intercom hidden | Gergely wants physical hardware buttons to replace it in the long run, so the screen must work without the strip | No strip, and the video area takes the 64 px |
| Recording | Tabs hidden, with and without the dot | Small screens | SP5a–c |
| Stop confirmation | Keep recording | Returns to S4 with nothing lost | No new frame |
| Checklist | Not saved | Her answers must not get lost silently | Checklist status |
| After Stop | Ehli error on each tab | Manual work carries on | SP1g, SP2f, SP3e |
| After Stop | Ehli results ready | Annotations, suggested answers, chapters | SP1a, SP1h, SP2a, SP3a |
| Debrief | AI feedback still processing or failed | The rest of the debrief still works | Feedback content (AI processing, AI error) |
| Debrief | Back to Recording | The Mode switch goes both ways | Mode switch |
| Debrief | Open on a tablet | Laptop to tablet handoff | QR popup |
| Share | AI feedback not reviewed | She can't approve what she hasn't read | Share dialog (Not reviewed) |
| Debrief | Transcript search | Jumps between matches, video stays put | SP4c, in the Debrief panel |

## Still open

1. **Multiple rooms:** page 0:1 has a "Stop all" flow (3a–3g). This story covers one room, which is what the IMSH flow needs.
2. **SimTech:** the story follows Faculty. In some sessions a SimTech runs the recording, and that's the first thing to test in the persona walkthrough, along with what they need from Layout & audio.
3. **Tablet debrief:** stays in Gabor's design. The touch components are part of the joint library review.
4. **Shared confirmation (step 18):** no component yet. The old frame is 15 · Shared (1:4516).
5. **Sample text to fix in the flow:** the annotation input says "at 08:00" while the player shows 00:00.
