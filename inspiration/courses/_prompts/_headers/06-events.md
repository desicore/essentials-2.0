# Research prompt — Courses › Adding Events to Courses

Using Mobbin & Refero MCP, research how top apps design **scheduling events inside a course** (sessions, live classes, labs, exam slots: creating an event, tying it to content and groups, recurrence, rooms/resources). Find the most relevant screens and user flows, compare patterns across products, and identify what the best apps do differently. Create a visual HTML report (images embedded directly) showing the top examples, common patterns, and the best practices top companies converge on. Keep the big picture in mind: this is one sub-module of **managing courses** in Essentials 2.0 (Semester → Courses → this).

## What the instructor is trying to do here
Create the course's calendar of simulation sessions: date/time, room and equipment, which scenario(s) run (05), which learner group(s) attend (04), facilitators, capacity, recurrence. The calendar overview and communicating dates to learners is sub-module 10 — here focus on the **create/edit event inside a course** flow and the event ↔ content ↔ group linkage.

## Search queries to start from
Mobbin `search_screens` (web, deep):
- "create event form with date time, location, attendees and recurrence options"
- "course schedule page listing sessions with add session button"
- "live class scheduling inside a course with time zone and capacity"
- "event details side panel with linked materials and attendee list"
- "room and resource booking selector inside event creation"
Mobbin `search_flows` (web, then ios):
- "instructor schedules a live session for a course and assigns a group"
- "creating a recurring class event and editing one occurrence"
Refero: same intents; also Google Calendar, Notion Calendar, Cal.com, Calendly, Luma, Zoom (schedule meeting), Eventbrite, Skedda / Robin (room booking).
Products to prioritise: Canvas (Calendar + Scheduler), Google Classroom + Calendar, Moodle, Maven (live sessions), Teachable / Thinkific live events, Docebo ILT sessions, Zoom, Google Calendar, Notion Calendar, Cal.com, Luma, Robin.

## Questions the board answers (Q1–Q6: these become the H2 sections of the report and the columns of the comparison table)
1. Event creation surface: inline in course vs. global calendar with course tag
2. Linking content and groups to the event (and whether that link is visible both ways)
3. Recurrence and series editing (this / following / all)
4. Resource conflicts (room, facilitator, equipment) surfaced at creation
5. Capacity, sign-up and attendance model
6. Time zone and duration handling
