# Plan — 09 Announcements / Send learning materials or send to Canvas → Shareable link

Module slug: `09-announcements-send-materials`. Priority sub-module (highlighted on the module map).
Context: Semester → Courses → this sub-module → Shareable link. Instructor or program admin communicates from inside the course; learners receive through the Learner Portal, email, a link, or Canvas.

## Questions (verbatim from the header; become the H2 sections and the comparison-table columns)

- **Q1** Composer: audience targeting (course / group / individual), attachment of course materials, scheduling
- **Q2** Channel choice (in-app feed, email, push, link, external LMS) and whether it is one composer or many features
- **Q3** Shareable link controls (expiry, access level, revoke, tracking)
- **Q4** Delivery feedback (sent / delivered / seen, reminders)
- **Q5** External LMS hand-off UX (auth, mapping to course, what is sent, confirmation)
- **Q6** Learner-side reception (feed, notification, email) and consistency with the portal

## Shared task_intent (every Mobbin call)

`Research how top apps design announcements-send-materials for course management in an education platform`

## Product shortlist

Priority: Google Classroom, Canvas, Moodle, Teachable, Thinkific, Kajabi, Circle, Slack, Notion, Loom, Google Drive, Mailchimp, Kahoot, Quizizz.
Acceptable stand-ins when the priority products do not surface: Dropbox, Figma, Substack, Beehiiv, Intercom, Gmail, Microsoft Teams, Discord, Skool, Mighty Networks, Coursera, Udemy, Docebo, 360Learning, TalentLMS, Remind, Seesaw, ClassDojo, Brightspace, Blackboard.

## Search queries (Mobbin; deep mode; web first, iOS for the best 1–2 per agent)

| # | Type | Query | Q |
|---|---|---|---|
| M1 | screens | create announcement composer for a course with audience selector and schedule option | Q1 |
| M2 | screens | compose a message to a class or member group with file attachments and a "send later" schedule picker | Q1 |
| M3 | flows | instructor posts an announcement to a class and schedules it | Q1 |
| M4 | screens | share materials modal choosing recipients groups and sending via email or link | Q2 |
| M5 | screens | post composer with notification delivery options: email members, push notification, pin to feed | Q2 |
| M6 | flows | schedule a post or message to send later to a channel or group | Q1/Q2 |
| M7 | screens | share link settings with expiration, access level and copy button | Q3 |
| M8 | screens | manage link sharing: password, expiry date, disable or revoke link, view count | Q3 |
| M9 | flows | sharing a document by generating a link with permissions and sending it | Q3 |
| M10 | screens | message or announcement read receipts showing who has seen it and who has not | Q4 |
| M11 | screens | email campaign report with sent, delivered, opened counts and resend to unopened | Q4 |
| M12 | flows | sending a reminder to recipients who have not opened or responded | Q4 |
| M13 | screens | post to external platform integration picker like Google Classroom or Slack | Q5 |
| M14 | screens | connect integration: authorize account then choose destination channel or course before publishing | Q5 |
| M15 | flows | exporting or publishing content to a connected LMS | Q5 |
| M16 | flows | connecting a third-party app and sharing an item to it with a confirmation | Q5 |
| M17 | screens | announcements feed inside a course with pinned posts and comments | Q6 |
| M18 | screens | student notification inbox listing new class announcements and shared materials | Q6 |
| M19 | flows | student opens a class announcement from a notification and views the attached material | Q6 |

## Refero queries (helper script; product-led because Refero's semantic search is weak on this topic)

| # | Type | Query | Q |
|---|---|---|---|
| R1 | screens/flows | Google Classroom stream announcement post to class | Q1, Q6 |
| R2 | screens | Canvas announcements course | Q1, Q6 |
| R3 | screens | Moodle forum announcement post | Q1 |
| R4 | screens/flows | Slack schedule message send later | Q1 |
| R5 | screens/flows | Notion publish to web share link settings | Q3 |
| R6 | screens/flows | Loom share video link settings expiry password | Q3 |
| R7 | screens/flows | Google Drive share link access general access copy link | Q3 |
| R8 | screens/flows | Mailchimp campaign schedule audience send | Q1, Q4 |
| R9 | screens | Substack publish post email schedule audience | Q2, Q4 |
| R10 | screens | Kahoot share to Google Classroom Microsoft Teams | Q5 |
| R11 | screens | Quizizz assign share to classroom | Q5 |
| R12 | screens | Circle community post email notification members | Q2 |
| R13 | screens | Teachable Thinkific Kajabi email students announcement | Q2, Q4 |
| R14 | screens | Loom video views analytics who watched | Q4 |
| R15 | screens | notification preferences email push in-app | Q6 |

## Agent split

1. **Mobbin A (Haiku)** — Q1 + Q2: M1–M6 → `mobbin.Q1-Q2.json`
2. **Mobbin B (Haiku)** — Q3 + Q4: M7–M12 → `mobbin.Q3-Q4.json`
3. **Mobbin C (Haiku)** — Q5 + Q6: M13–M19 → `mobbin.Q5-Q6.json`
4. **Refero (Haiku)** — R1–R15 → `refero.json`
5. **Merge (Fable, script)** — `merge-references.mjs` then patch the module header from `references.stub.json` (the merge script hard-codes the previous module's header and must not be edited). `fetch-assets.mjs` for anything missing. Target 8–12 products, 30–50 references; cut above 60.
6. **Pattern notes (Sonnet ×6)** — `notes/Q1.md` … `notes/Q6.md`, ≤350 words each, evidence only.
7. **Synthesis (Fable)** — answers in `references.json`, counter-examples flagged, synthesis block inserted after the intro in the built HTML, Playwright QA.

## Caps and rules for fetch agents

- Keep at most 8 references per question per agent, at most 1 per product per question, and prefer the shortlist.
- Per-source JSON is an object `{ "module": "09-announcements-send-materials", "references": [ … ] }` so `fetch-assets.mjs` accepts it directly.
- Flows: keep at most 8 step images (drop the least informative steps, keep order).
- Run `fetch-assets.mjs` after every search call: Mobbin image links expire.
- `take` is one evidence-based sentence about what the screen or flow shows, framed for someone managing a course. No analysis in the return message.
