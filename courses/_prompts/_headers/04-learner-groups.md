# Research prompt — Courses › Adding Learner Groups to Courses

Using Mobbin & Refero MCP, research how top apps design **enrolling groups of learners into a course** (cohorts, classes, sections, teams; adding existing groups vs. individuals; roster management). Find the most relevant screens and user flows, compare patterns across products, and identify what the best apps do differently. Create a visual HTML report (images embedded directly) showing the top examples, common patterns, and the best practices top companies converge on. Keep the big picture in mind: this is one sub-module of **managing courses** in Essentials 2.0 (Semester → Courses → this).

## What the instructor is trying to do here
Attach one or more pre-existing learner groups (semester cohorts, sections, small teams) to a course, see the resulting roster, handle exceptions (add / remove individuals, waitlists, capacity), and keep groups in sync when membership changes. User & group management itself was researched already (see `../userflow-patterns--user-mgmt/`) — do NOT redo group creation; focus on the course-side attach / roster experience.

## Search queries to start from
Mobbin `search_screens` (web, deep):
- "enroll students in a course by selecting groups or cohorts from a list"
- "course roster page with sections, enrollment status and add people button"
- "add members to a project by choosing teams with member count preview"
- "cohort management page for a course with start date and capacity"
- "enrollment settings with self-enroll link, invite code and approval toggle"
Mobbin `search_flows` (web, then ios):
- "instructor adds a class group to a course and reviews the roster"
- "bulk enrolling learners via CSV import into a course"
Refero: same intents; also Slack (add user groups to channel), Linear/Asana (add team to project), Figma (team access), Google Classroom (invite by class code), Canvas (Sections), Moodle (Cohort sync).
Products to prioritise: Canvas, Google Classroom, Moodle, Docebo, 360Learning, TalentLMS, Teachable, Maven (cohorts), Circle (spaces/groups), Slack, Linear, Asana, Figma.

## Questions the board answers (Q1–Q6: these become the H2 sections of the report and the columns of the comparison table)
1. Group-as-unit enrolment (attach a group, membership stays synced) vs. copy-at-enrol
2. Preview of impact before confirming (member count, conflicts, already enrolled)
3. Roster view: status, role, group origin, exceptions visible
4. Bulk paths (CSV, code/link, integration) alongside manual add
5. Capacity / waitlist / enrolment window handling
6. Notifications to learners on enrolment (seam with 07/09 — note only)
