# Personas

Status: **draft for Gabor's review**, 2026-09-30. It's built from the four agreed personas (journey-map session, 2026-09-02) and the customer research. Every quote comes from the site-visit and discovery notes. **Check each quote against the original recordings before it's used outside the team.** Used for: the AI walkthrough tests, persona chats, and the "who is this screen for" check.

Source keys: **KSU** Kent State site visit · **JCU** John Carroll site visit · **GAL** Galen Miami site visit · **DISC** discovery findings · **PERS** personas and journey-map session (2026-09-02) · **SURV** customer survey · **CONC** concept validation (2026-09-10)

Demo names (fictional, from `data/seed.json`) are in brackets.

---

## Faculty  {#faculty}

*[Dr. Maya Ortiz]* · Product role: Faculty · **The main design target for C1.**

**Context**
- Designs or brings scenarios, pre-briefs, observes, debriefs and assesses (PERS `00:05:14`).
- Uses the product rarely: a couple of sim days a month with gaps of three weeks or more at JCU (`01:23:06`). Kent runs 3–4 lab days a week, but faculty rely on the admin (KSU).
- Doesn't author in the product. Materials are Word or NLN packets handed to the admin (KSU `00:49:40`).
- Grades after the session from video, or on paper in the control room (DISC finding 2, JCU).

**Goals**
- Find the key moment for the debrief without scrubbing (GAL).
- Cut grading time. Today it's 30–60 min of faculty time per 20-min encounter (KSU `02:47:20`).
- Run a session without calling the tech or the coordinator (PRD C1, EXP-06).

**Frustrations today**
- Video isn't used in debrief because there's no time to organise clips (KSU `00:08:09`).
- Features get forgotten between uses (JCU `01:11:17`).
- Can't hear learners behind the glass when the audio fails (JCU `00:04:28`).
- Can't be scoped to only their own students' videos (GAL).

**Typical sentences**
1. *"We don't show recordings in our debriefing. We don't use that piece of it. We don't have the time to do that… it would take someone that would have to sit back there and organize."* (KSU `00:08:09`)
2. *"the system is not that difficult to use. It's just when you don't use it a lot, remembering how everything functions separately."* (JCU `01:11:17`)
3. *"we're not grading them behind the window"* (KSU `01:37:04`)
4. *"the bar at the bottom, you could almost highlight… and then they all just kind of go into a one, two, three"* (KSU `00:11:27`)

**Test lens:** would Maya get through this screen on her first use in three weeks, without asking anyone?

---

## SimTech / operator  {#simtech}

*[Sam Keller]* · Product role: Faculty (plus Admin at many small centers)

**Context**
- Hands-on: loads simulators, preps equipment, runs recording, troubleshoots. *"Wants to run the session alone, in a place where recording just works"* (PERS `00:03:28`).
- Usually one person, sometimes two. A hospital lab runs about 500 events a year with 6–10 learners each as a "one-man show" (DISC).
- Often also the LearningSpace admin: cases, users, groups, recording, video release (KSU).

**Goals**
- Recording that starts and is attributed correctly without hand-setting each room in a 5-minute turnaround (KSU `01:34:37`).
- Know the rig is healthy before learners arrive (JCU `02:02:24`).
- Clear audio both ways (JCU; PRD C2).
- Usage numbers to justify staff or a hardware replacement (GAL; KSU `02:25:22`).

**Frustrations today**
- Recorder hardware failures, and audio driver freezes (KSU `00:02:22`, `01:15:49`).
- An audio feedback loop, so staff turn the system off mid-sim (JCU `00:48:21`).
- A central "start recording" wipes per-station assignments (KSU).
- Locked out for six months by a password timeout (JCU `00:17:13`).

**Typical sentences**
1. *"It's always something OneBox related… I have a graveyard of them upstairs."* (KSU `00:02:22`)
2. *"If we have the mannequin on, you get this feedback loop through LearningSpace, and that's why we've been turning it off…"* (JCU `00:48:21`)
3. *"I would love for LearningSpace and the mannequins themselves to be able to do self-diagnosis… and then a report saying hey, you need to go check this out."* (JCU `02:02:24`)
4. *"I haven't been in LearningSpace in six months because they timed out my password…"* (JCU `00:17:13`)

**Test lens:** does this screen survive a messy, late, walk-in day without Sam having to redo anything?

---

## SimCoordinator  {#coordinator}

*[Dana Whitfield]* · Product role: Admin (often also Faculty)

**Context**
- Administrative: *"sits in front of a machine, schedules, generates a report when asked"* (PERS `00:02:19`).
- Works mostly outside LearningSpace: Outlook, Google Sheets, Word, Excel, Canvas, Qualtrics, paper (KSU; DISC finding 3).
- At small centers she is often the same person as the SimTech (PERS).

**Goals**
- A schedule that bends on the day (KSU `01:10:28`).
- Prove utilisation: sim hours, learner counts, room use, contact hours. 8–10 of 13 survey respondents collect or want these (SURV).
- Enter data once and carry it into reports (PRD C7).

**Frustrations today**
- Double entry: students pick slots in a Google Doc, users are created one by one from Excel, and the whole quarter is rebuilt in Outlook (KSU `01:03:19`; GAL).
- Reporting is basically headcounts (KSU `02:24:01`; JCU `01:05:10`).
- No Canvas link (KSU `00:55:07`).

**Typical sentences**
1. *"I'd love to use the scheduling feature… It needs to be a little more flexible so that we could follow the schedule, but that it could be altered fairly easily."* (KSU `01:10:28`)
2. *"in order to see for staffing… I need to be able to prove that we are running a lot of simulations"* (GAL)
3. *"No, I have to duplicate the events."* (GAL)
4. *"I would love to be more proactive instead of reactive… We're still so manual."* (JCU `02:13:26`)

**Test lens:** did anything on this screen make Dana type something she already typed somewhere else?

---

## Learner (recipient)  {#learner}

*[Emily Baker]* · Product role: Recipient (no full account)

⚠️ **Thin evidence: no learner was interviewed.** Everything below is staff talking about learners. Don't present these as learner voices.

**Context**
- Nursing student who comes to the lab in groups of 4–8, infrequently (KSU; JCU `01:24:49`).
- Has no LearningSpace login at most sites today (JCU `00:40:32`; CONC).

**Goals (inferred)**
- Watch their own part of the recording and read the feedback after the session (JCU ask #6; CONC).
- Know where they stand: a "scorecard… like a report card" (JCU `01:45:35`).

**Frustrations (second-hand)**
- No access, and video doesn't reach Canvas (JCU `00:41:18`).
- Audio noise breaks realism (GAL).

**Typical sentences (staff on learners)**
1. (JCU director) *"since the students don't have access to these products, it's really faculty driven"* (JCU `00:42:45`)
2. (Kent faculty) *"In a dream world… when the student's ready, they could walk in and that starts the clock on that individual room."* (KSU `01:39:53`)

**Test lens:** can Emily open what was shared on her phone in under a minute, with no password, and see nothing that wasn't meant for her?

---

## Out of scope as personas

Leadership (they receive reports and don't use the app), IT admin (a support engineer's concern), and standardized patients or guests (they appear only as participants). Source: PERS.
