# Adding events to courses — research plan

Read courses/00-direction.md. Focus: create/edit an event inside a course and the event ↔ content ↔ group linkage. Calendar overview and learner communication are sub-module 10; scenarios are 05, learner groups are 04.

## Questions
- Q1: Event creation surface: inline in course vs. global calendar with course tag
- Q2: Linking content and groups to the event (and whether that link is visible both ways)
- Q3: Recurrence and series editing (this / following / all)
- Q4: Resource conflicts (room, facilitator, equipment) surfaced at creation
- Q5: Capacity, sign-up and attendance model
- Q6: Time zone and duration handling

## Search plan
Mobbin screens use deep mode, web first; best 1–2 screen intents per pair repeated on iOS. Refero runs the same intents via refero-q.mjs / refero-mcp.mjs.

- Q1 | screens | course schedule page listing sessions with add session button
- Q1 | screens | create event form with date time, location, attendees and recurrence options
- Q1 | flows | instructor schedules a live session for a course and assigns a group
- Q2 | screens | event details side panel with linked materials and attendee list
- Q2 | screens | live class scheduling inside a course with linked lesson and cohort selector
- Q3 | screens | recurring event settings with custom repeat rule and end date
- Q3 | flows | creating a recurring class event and editing one occurrence (this / following / all)
- Q4 | screens | room and resource booking selector inside event creation
- Q4 | screens | scheduling conflict warning when booking a room or a host is busy
- Q5 | screens | live class scheduling inside a course with time zone and capacity
- Q5 | screens | event registration settings with capacity limit, waitlist and attendance check-in
- Q5 | flows | attendee registers for a session and host marks attendance
- Q6 | screens | event time picker with time zone selector and duration presets
- Q6 | screens | availability schedule with time zone and buffer settings

## Product shortlist
Canvas (Calendar + Scheduler), Google Classroom + Calendar, Moodle, Maven, Teachable, Thinkific, Docebo, Zoom, Google Calendar, Notion Calendar, Cal.com, Calendly, SavvyCal, Luma, Eventbrite, Acuity Scheduling, Skedda, Robin. Follow stronger evidence if these are absent.

## Agent split
Fable plans, merges, synthesises and QAs. Three Haiku Mobbin agents own Q1–Q2, Q3–Q4, Q5–Q6 in parallel. One Sonnet Refero agent covers all six questions (Haiku produced junk on Refero in 09). Six Sonnet pattern agents own one question each. Fetch summaries ≤200 words; pattern notes ≤350 words.

## Evidence rules
Same Mobbin task_intent for every call: "Research how top apps design events for course management in an education platform". Run fetch-assets.mjs after every search. Target 8–12 products and 30–50 references after merge; cut above 60. Separate visible UI evidence from inferred behaviour (a room picker does not prove conflict detection; a capacity field does not prove a waitlist). selected stays false. Reuse the shared builder; post.mjs patches the header after merge and inserts the synthesis.
