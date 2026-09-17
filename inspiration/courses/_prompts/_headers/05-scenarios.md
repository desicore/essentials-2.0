# Research prompt — Courses › Adding scenarios to courses

Using Mobbin & Refero MCP, research how top apps design **adding reusable content units to a course from a library** (in Essentials: simulation scenarios; analogues: lessons/modules from a content library, assessments from a question bank, templates, playbooks). Find the most relevant screens and user flows, compare patterns across products, and identify what the best apps do differently. Create a visual HTML report (images embedded directly) showing the top examples, common patterns, and the best practices top companies converge on. Keep the big picture in mind: this is one sub-module of **managing courses** in Essentials 2.0 (Semester → Courses → this).

## What the instructor is trying to do here
Browse a scenario library (institutional + own), pick scenarios for the course, order / sequence them, optionally tweak per-course settings without editing the master, and see which scenarios feed which events (06) and competencies (03). Scenario authoring itself is out of scope — the pattern is "pick from library → place in course".

## Search queries to start from
Mobbin `search_screens` (web, deep):
- "add content from library modal with search, filters and multi-select preview"
- "curriculum builder with lessons list and add existing lesson from library"
- "template gallery with categories and use template button"
- "question bank picker for adding questions to a quiz"
- "course outline with drag and drop modules and lessons"
Mobbin `search_flows` (web, then ios):
- "instructor adds existing lessons from a content library into a course outline"
- "creating a quiz by selecting questions from a question bank"
Refero: same intents; also Notion (templates / synced blocks), Figma (insert component from library), Canva (templates), Typeform/Tally (question bank), Webflow (component library) for the generic "library → instance" pattern.
Products to prioritise: Canvas (Commons, Modules), Moodle, Teachable, Thinkific, Kajabi, Docebo, 360Learning, Articulate, Typeform, Notion, Figma, Canva.

## Questions the board answers (Q1–Q6: these become the H2 sections of the report and the columns of the comparison table)
1. Library browse UX: search, filters (tags, competency, duration), preview before adding
2. Multi-select and batch add vs. one at a time
3. Instance vs. reference semantics (edits to master propagate? per-course overrides?)
4. Sequencing after add (drag reorder, grouping into sections, prerequisites between items)
5. Metadata carried along (competencies, duration, equipment) and shown in the outline
6. Empty / first-run state and suggestions
