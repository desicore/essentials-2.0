# Research plan

## Questions
- Q1: Group-as-unit enrolment (attach a group, membership stays synced) vs. copy-at-enrol
- Q2: Preview of impact before confirming (member count, conflicts, already enrolled)
- Q3: Roster view: status, role, group origin, exceptions visible
- Q4: Bulk paths (CSV, code/link, integration) alongside manual add
- Q5: Capacity / waitlist / enrolment window handling
- Q6: Notifications to learners on enrolment (seam with 07/09 — note only)

## Queries
Run each intent through Mobbin and Refero; web first, then strongest one or two Mobbin searches on iOS.
- Q1 | screens | enroll students in a course by selecting existing groups or cohorts
- Q2 | screens | add members to a project by choosing teams with member count preview
- Q1 Q2 | flows | instructor adds a class group to a course and reviews enrollment
- Q3 | screens | course roster with sections enrollment status role and add people
- Q4 | screens | course enrollment CSV import invite code and self enroll link
- Q3 Q4 | flows | bulk enrolling learners via CSV import into a course
- Q5 | screens | cohort course enrollment start date capacity waitlist
- Q6 | screens | invite members notification email toggle before confirming enrollment
- Q5 Q6 | flows | register for a full class and join the waitlist
- Q1 Q3 | screens | Slack user groups channel membership and Figma team project access
- Q4 Q6 | flows | Google Classroom join class by code and invitation

## Product shortlist
Canvas, Google Classroom, Moodle, Docebo, 360Learning, TalentLMS, Teachable, Maven, Circle, Slack, Linear, Asana, Figma. Broaden only to relevant analogues supported by screenshots.

## Agent split
Astra plans, merges and synthesizes. Three Luna agents fetch Mobbin Q1–Q2, Q3–Q4, Q5–Q6 concurrently. One Luna agent fetches Refero next. Six Sol agents produce one evidence note each, queued in batches of three. Assets downloaded after every Mobbin call. Target 8–12 products / 30–50 references, evidence quality over padding.

## Pipeline compatibility
The checked-in merge script ignores references.stub.json and hardcodes the previous module header. After using it, restore module/title/intro/questions from the stub without changing merged references. The checked-in builder expects --assets to point to assets/manifest.json, rather than the assets directory. Use that actual contract. Do not edit the shared scripts.
