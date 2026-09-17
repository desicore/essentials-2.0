# Files, links, media — research plan

## Scope
Instructor/admin course materials and Learner Portal consumption. No sending/distribution (09), recording production/reports (08), learner group setup (04), or scenario setup (05).

## Questions
- Q1: Upload + link + embed handled in one place vs. separate features
- Q2: Organisation model (flat list / folders / sections tied to course structure)
- Q3: Reuse across courses (central library vs. per-course silo)
- Q4: Preview and inline playback without leaving the course
- Q5: Visibility controls (draft / scheduled / per-group) and how they are surfaced
- Q6: Learner-side view mirrors instructor-side structure

## Searches
Run these intents per source (Mobbin and Refero); web first, best 1–2 queries on iOS. Mobbin screens use deep mode.

|Questions|Type|Query|
|---|---|---|
|Q1|screens|file upload area with drag and drop inside a course editor|
|Q1,Q3|screens|attach existing file from library or add external link modal|
|Q2|screens|course materials page with uploaded files links and videos organised in sections|
|Q2,Q3|screens|resource library with folders and file type filters for an instructor|
|Q3|flows|reusing a file from a shared content library in a new course|
|Q1,Q2|flows|instructor uploads files and adds links to a course module|
|Q4|screens|course lesson with inline video player and downloadable resources|
|Q4|flows|previewing a document or video in a resource library|
|Q5|screens|course material draft published scheduled visibility controls|
|Q5|flows|setting availability of a course lesson|
|Q6|screens|student view of course resources list with download and preview|
|Q6|flows|learner opens course section and views lesson resources|

## Product shortlist
Canvas, Google Classroom, Moodle, Teachable, Thinkific, Kajabi, Docebo, 360Learning, Skillshare, Notion, Google Drive, Dropbox, Loom; Figma and Slack as secondary analogues. Keep 8–12 products and 30–50 references where evidence permits; explicitly disclose coverage gaps.

## Agent split
Astra plans, merges and synthesises. Three Luna (low) Mobbin fetch agents cover Q1–Q2, Q3–Q4, Q5–Q6 in parallel. One Luna Refero fetch agent follows when a slot is free. Six Sol (medium) question analyses run in batches of three due to the four-slot limit. Raw results remain in files; only compact summaries return to Astra. Assets fetched after each Mobbin search; no previous-module edits.

## Report contract
Reuse existing schema, merge, fetch-assets and embedded report builder. Full screenshots; max eight flow steps. Synthesis directly after intro; exactly six question H2s. Every empirical synthesis claim cites a retained reference; unknowns are not absence. selected stays false. QA with Playwright for loaded images, structure, synthesis and size.

## Verified pipeline adaptations
The existing merger hard-codes access-sharing metadata and does not read the stub. Run it unchanged, then replace only module/title/intro/questions from this module's stub, preserving merged references. The report builder requires `--assets <module>/assets/manifest.json`, not the directory stated in the prompt. No shared scripts will be edited. Fetching each source overwrites the shared manifest, so regenerate it once with final references after all fetches finish.

## Execution notes
The runtime retained completed fetch threads and rejected additional new analysis threads with `agent thread limit reached`. The six Sol question analyses therefore reuse two Sol agents in three batches (Q5/Q6, Q1/Q2, Q3/Q4), keeping the requested models and evidence separation.

Visual QA corrected search-result classifications: Podia's supposed learner frame is authoring and moved to Q2; Udemy's supposed upload frame is a learner Downloads tab and moved to Q6. Teachable's Refero Q6 frame remains as explicitly labelled instructor-side evidence with its learner counterpart missing. The Gumroad receipt editor is excluded.
