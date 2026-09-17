# Research plan

## Scope
Course recording access/playback and course reporting, including the learner projection. Competency definitions belong to 03; event setup to 06; course invitations to 07; announcements/Canvas delivery to 09. Research UI evidence, not product feature inventories.

## Questions
- Q1: Recording organisation (by event / by learner / by scenario) and search
- Q2: Access control on recordings (learner sees own only, group, time-limited)
- Q3: Playback enrichments (chapters, transcript, annotations, timestamps) — link to Elevate's AI video annotation / chapterization
- Q4: Report structure: overview → per-learner drill-down → export
- Q5: Metrics shown by default (completion, attendance, score, mastery) and comparability across cohorts
- Q6: Learner-side results view: same data, simplified

## Queries (each on Mobbin and Refero)
- Q1: screens — recordings library with video thumbnails, duration, date and search
- Q2: screens — Zoom Loom recording privacy sharing permissions expiration
- Q1 Q2: flows — user finds a meeting recording, sets viewing permissions and shares it
- Q3: screens — video player page with transcript chapters comments timestamps Loom Vimeo
- Q3: flows — user opens recording transcript and adds timestamp comment
- Q4: screens — course analytics dashboard attendance completion scores per learner
- Q4: flows — instructor opens a course report filters by student and exports
- Q5: screens — gradebook table students assignments scores mastery Canvas Moodle
- Q5: flows — Mixpanel Amplitude compare cohorts analytics export report
- Q6: screens — learner progress page completed items scores certificates Coursera Udemy
- Q6: flows — learner opens course progress reviews quiz results certificate
Web first; Mobbin deep screens, then iOS for the strongest one or two intents in each assignment. Keep ordered flow previews, at most eight. Shared task_intent: Research how top apps design recordings-course-reports for course management in an education platform

## Shortlist
Zoom, Loom, Vimeo, Google Meet/Drive, Canvas, Moodle, Docebo, 360Learning, Coursera, Udemy, Teachable, Mixpanel, Amplitude. Prefer 8–12 with actual evidence; document catalog gaps.

## Agent split
Three Luna fetch workers: Q1–Q2, Q3–Q4, Q5–Q6; fourth Luna Refero worker follows as a slot opens. Six Sol pattern workers, one per question, in batches of three. Astra merges, synthesizes and verifies. Fetch summaries ≤200 words; notes ≤350 words.

## Pipeline observations
The existing merge script does not read the stub despite the prompt description: run unchanged, then restore the header from references.stub.json in this module only. Per-source inputs must be objects with references arrays for fetch-assets. Concurrent downloads share assets; final fetch reconstructs the complete manifest.
