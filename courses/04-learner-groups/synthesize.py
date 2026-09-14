from pathlib import Path
import json,html
P=Path(__file__).parent
D=json.loads((P/'references.json').read_text())
R=D['references']
# Evidence reviewed in notes/Q1.md ... Q6.md; identifiers remain stable.
IDS={
 'deel_roster':'mobbin:d3cc6573-05f4-4736-b9be-e419e60c7b56',
 'gusto_review':'mobbin:dfee87b3-81d9-4a2f-accc-256ba91e474d',
 'gusto_flow':'mobbin:9fb5633a-b981-4130-ac7f-bddf895856ae',
 'gusto_dates':'mobbin:65695f4f-db86-4ab3-b40c-e2966edd2a79',
 'gusto_notify':'mobbin:b1497c40-cdea-4b8a-8e73-6cd70a8fcb2f',
 'deel_dates':'mobbin:eac0772e-c47f-4a3d-973c-f6a7352fe5a1',
 'asana_team':'mobbin:bb93bc5a-69d4-4f3e-8f70-fa48fb9b6b53',
 'basecamp':'mobbin:03d638de-71a2-4fdd-a4a9-19fb51e82492',
 'asana':'mobbin:bb93bc5a-69d4-4f3e-8f70-fa48fb9b6b53',
 'inherit':'mobbin:7fccd8eb-8b47-4eba-9b29-c061ef84f911',
 'deel':'mobbin:e490327d-01e5-42c3-a4c7-c27925e5d6c1',
 'gusto':'mobbin:9fb5633a-b981-4130-ac7f-bddf895856ae',
 'gitbook':'mobbin:bb97eec3-4564-4fab-a695-555b70cf9245',
 'circle_members':'mobbin:3e4b87ce-37eb-41e8-af41-026d197eeccc',
 'circle_students':'mobbin:eb1701f1-73e1-45e2-a31f-80df30333517',
 'teachable_roster':'mobbin:3b608ec9-63a0-4e82-b915-4535ea70a9ac',
 'teachable_bulk':'mobbin:61127de5-672c-4250-984a-73e1c0684ce1',
 'partiful':'refero:d19d15c3-daac-4d6e-834f-a128a511a7ba',
 'podia':'mobbin:ac312350-012f-49d9-9f95-25365859a6c3',
 'luma':'refero:4f821362-5e07-4f2a-9a8d-a63a3330ccdb',
 'fresha':'mobbin:13c4d86b-b5dd-446d-8451-66c17cf96e32',
 'notify':'mobbin:e50417f0-d6e6-4ad2-8fdc-bf7b11ff4b79',
 'cloudflare':'mobbin:2e1d62a3-dcef-49da-b7f0-83211a076b8a'}
UPDATES={
 'deel_roster':('Review eligible workers before selection','Assign workers to course shows Total 96 items, worker metadata and group/status/type filters, with Continue disabled before selection. A whole-team access warning notes that missing workers may need Engage access updated. This is not a selected-learner count or duplicate-conflict screen.'),
 'gusto_review':('Review training count, dates and reminders','Before purchase, Review shows course name, number of team members, completion due date and reminder timing, with Edit links. This is a pre-commit review, not proof of completed enrollment or notification delivery.'),
 'gusto_notify':('Explain enrollment emails before purchase','The pre-purchase What happens next section states that Gusto will email course information and a link, learners complete the course in Gusto, and the admin tracks progress. This describes future behavior, not an email already sent or received.'),
 'deel_dates':('Schedule assignment and optional completion deadline','After selecting workers, choose immediate or scheduled assignment, optionally set a deadline, then Assign (96). This is assignment timing and a completion deadline, not a demonstrated enrollment-open or closing window.'),
 'gusto_dates':('Set completion dates and automatic reminders','Training assignment separates participant selection, dates/reminders and review. The settings include a completion due date, reminders near the deadline, a seven-day reminder toggle and email preview; overdue completion remains possible. A due date is not an enrollment cutoff.'),
 'basecamp':('Group membership policy — snapshot behavior','Policy excerpt from a work-management flow: choosing a group expands its current members; later membership changes do not update previous assignments or mentions. This is explicit snapshot behavior, not live course-group sync.'),
 'asana':('Select people or teams for a project template','The project-template member field accepts people or teams and says private teams are added only when the project creator is a member. No existing team is selected in the captured screen; completed attachment and ongoing sync are not demonstrated.'),
 'inherit':('Inherit members from a course space group','During course-space creation, select a Space group and optionally Add members from this space group. Existing-group inheritance is visible; later membership propagation is not established.'),
 'deel':('Review workers before assigning a course','Assign workers to course shows Selected 96 of 96 items, worker metadata, a whole-team warning and Continue into Schedule Assignment. Duplicate learners and net-new enrollment counts are not shown.'),
 'gusto':('Review a training assignment before purchase','Select a member → set due date and optional seven-day email reminder → review course, count, date and reminders with Edit links → inspect per-person and total cost plus post-purchase email disclosure. The captured flow stops before purchase; it does not prove enrollment or email delivery.'),
 'gitbook':('Make the selected count explicit before adding','A searchable, role-filtered member picker shows 1 selected and Add 1 member. This is a team-access analogy for a count-bearing enrollment confirmation.'),
 'circle_members':('Member roles and activity in a roster','Circle’s Members table shows role, joined date, paywall and last activity with add/export controls. It does not show group origin or individual enrollment exceptions.'),
 'circle_students':('Course student progress beside activity','The course dashboard shows student progress, last activity and start date; later previews visit comments. Course status Open is not a learner enrollment status. Roles, group origin and exceptions are not shown.'),
 'teachable_roster':('Filter students by course enrollment','The Students table filters by Enrolled In Specific Course(s) and exposes bulk actions, email opt-out and account/activity metadata. It is course-filtered; group origin and exceptions are not shown.'),
 'teachable_bulk':('Manual enrollment beside CSV import','Students → Add Students → manually enter learners → choose a course/product and payment/access basis → Import → success feedback. Import CSV is a sibling tab, but its mapping and execution are not captured.'),
 'partiful':('CSV invite preparation with a review area','Event-invitation analogy: Add Manually/Bulk Add, CSV template and Name/Email headers, recipient review, a message and Send emails share one modal. This does not prove course enrollment or delivery.'),
 'podia':('Set course start date and sign-up limit','Course Availability groups Start date and Sign-up limit under Limits, with no-limit and limited-sign-up options. Enrollment closing dates and over-capacity group attachment are not shown.'),
 'luma':('Pair event capacity with a waitlist policy','Event-registration analogy: Max Capacity states registration closes at the limit and exposes an Over-Capacity Waitlist toggle. Group admission and promotion rules are not shown.'),
 'fresha':('Collect preferences when joining a booking waitlist','Booking analogy: a full date leads to date/time preferences, a first-visit question, payment/notes review and Join the waitlist. It does not establish course-level capacity, queue priority or automatic promotion.'),
 'notify':('Choose invitation email or silent addition','The member-invite screen offers manual/CSV/link entry and an explicit Send invites versus Add without notification choice. It demonstrates notification intent, not email delivery or course enrollment completion.'),
 'cloudflare':('A notification exception blocks an invitation','Workspace-invite counterexample: selecting Skip confirmation email produces an Enterprise-only error and an invitation failure. The screen makes the failed action visible; it does not demonstrate a course enrollment outcome.')}
KEEP={'Asana','Basecamp','Circle','Teachable','Deel','Gusto','GitBook','Podia','Luma','Fresha','Partiful','Cloudflare'}
# Keep the reviewed core, plus relevant supplemental evidence reviewed separately.
keep_ids=set(IDS.values())
supp=P/'mobbin.supplement.json'
if supp.exists():
 for r in json.loads(supp.read_text()).get('references',[]):
  if r['app'] in KEEP and r['id'] != 'mobbin:a1406eb9-2579-4a6f-a16c-84e7f37ba4a2': keep_ids.add(r['id'])
dropped=[{'id':r['id'],'app':r['app'],'question':r['question'],'reason':'Out of course-side scope, redundant, or weaker than the retained comparison evidence.'} for r in R if r['id'] not in keep_ids]
R=[r for r in R if r['id'] in keep_ids]
byid={r['id']:r for r in R}
for k,(title,take) in UPDATES.items():
 r=byid[IDS[k]];r['title']=title;r['take']=take
byid[IDS['inherit']]['question']='Q1'
for r in R:r['selected']=False;r['counter_example']=r['id'] in {IDS['basecamp'],IDS['cloudflare'],IDS['gusto_dates']}
R.sort(key=lambda r:(r['question'],r['app']))
D['references']=R
D['intro']='Research for Essentials 2.0 · Semester → Courses → Adding Learner Groups. The retained screens and flow previews compare existing-group inheritance, enrollment review, rosters, bulk entry, limits and notification intent. Course evidence is distinguished from project, event and booking analogues. No retained example establishes live LMS cohort synchronization.'
def cite(k):
 r=byid[IDS[k]]
 return f'{r["app"]} [{r["id"]}]'
ANS=[
 f"Separate selecting a group from keeping its membership synchronized. {cite('inherit')} shows existing-group member inheritance during course-space creation; {cite('asana')} accepts teams in project-template access. Neither establishes later propagation. {cite('basecamp')} explicitly describes snapshot behavior: later group changes do not update previous assignments or mentions. For Essentials, make the chosen membership rule explicit; synchronization is a product decision requiring further validation.",
 f"Put the affected count beside the action. {cite('deel')} shows 96/96 selected and a whole-team warning; {cite('gusto')} reviews the learner count, completion date, reminders and per-person/total cost, with Edit links; {cite('gitbook')} embeds the count in Add 1 member. These support count-based review, but none demonstrates duplicate resolution, already-enrolled learners, or the net-new enrollment delta. Those remain requirements to validate for overlapping semester groups.",
 f"Treat role, enrollment status, activity and group origin as different information. {cite('circle_members')} exposes role and activity, while {cite('circle_students')} emphasizes progress and start dates. {cite('teachable_roster')} offers course-filtered students and bulk operations. None shows group-origin labels or per-learner sync exceptions. Essentials still needs a decision on how a roster explains why each learner has access.",
 f"Keep alternate entry paths next to the manual action. {cite('teachable_bulk')} shows manual enrollment and an Import CSV tab, with the manual path selecting a course and ending in success feedback. {cite('partiful')} supplies a secondary CSV-template and recipient-review analogy. {cite('notify')} also exposes CSV and link paths for member invitations. These are visible entry points; no retained flow proves LMS integration, CSV conflict handling or continuing roster sync.",
 f"Distinguish course limits from a full-state recovery path. {cite('podia')} shows course start-date and sign-up-limit settings; {cite('luma')} pairs event capacity with an optional waitlist; {cite('fresha')} demonstrates collecting preferences to join a booking waitlist. The event/booking patterns are analogues. {cite('deel_dates')} adds immediate/scheduled assignment and an optional deadline; {cite('gusto_dates')} adds completion reminders and permits overdue completion. These are assignment/completion dates, not enrollment cutoffs. No reference resolves a group larger than the remaining course capacity, partial group admission, enrollment closing dates or waitlist promotion.",
 f"Expose notification intent at enrollment confirmation. {cite('notify')} separates Send invites from Add without notification. {cite('gusto_notify')} explains future course emails and learner next steps before purchase; it is a disclosure, not proof of sending. {cite('cloudflare')} is a counter-example where a restricted skip-email option causes the invitation to fail. These screens show controls and failure feedback, not actual email delivery. Keep the course-side choice and outcome here; learner-facing access and message content remain in modules 07/09."
]
for q,a in zip(D['questions'],ANS):q['answer']=a
(P/'references.json').write_text(json.dumps(D,indent=2)+'\n')
(P/'curation.json').write_text(json.dumps({'retained':len(R),'products':len({r['app'] for r in R}),'dropped':dropped,'rationale':'Prioritized screenshot-backed course-side patterns and a 12-product comparison over filling the 30–50 reference target with weak analogues.'},indent=2)+'\n')
# HTML synthesis is inserted by postprocess.mjs after the shared builder runs.
def link(k):
 r=byid[IDS[k]]
 return f'<a href="#{html.escape(r["id"])}">{html.escape(r["app"])} <small>{html.escape(r["id"])}</small></a>'
def item(text,keys):return '<li>'+text+' '+ '; '.join(link(k) for k in keys)+'.</li>'
style='<style>#synthesis{margin-top:28px;padding:24px;border:1px solid var(--border);border-radius:8px;background:var(--surface)}#synthesis h3{margin-top:28px}#synthesis h3:first-child{margin-top:0}#synthesis li{margin:10px 0;max-width:1150px}#synthesis small{font-size:10px;overflow-wrap:anywhere}#synthesis .table-scroll{overflow-x:auto}#synthesis table{border-collapse:collapse;min-width:1220px;font-size:12px}#synthesis th,#synthesis td{border:1px solid var(--border);padding:10px;vertical-align:top;min-width:145px}#synthesis th{background:var(--subtle);text-align:left}#synthesis td small{display:block}#synthesis .evidence-note{max-width:1100px;color:var(--muted)}@media(max-width:520px){#synthesis{padding:16px}}</style>'
parts=[style,'<section id="synthesis" aria-label="Cross-product synthesis"><h3>Top examples</h3><ol>']
for k,why in [('inherit','Circle · Mobbin — closest course-specific existing-group inheritance control; continuing sync is unproven.'),('basecamp','Basecamp · Mobbin — unusually explicit snapshot-membership policy, retained as a counter-example.'),('deel','Deel · Mobbin — course assignment puts the selected count and whole-team warning before continuing.'),('teachable_bulk','Teachable · Mobbin — manual enrollment and CSV entry live together, with a course target and success feedback.'),('gusto_flow','Gusto · Mobbin — participant selection, completion timing, review, price and email consequences form one pre-purchase flow.'),('podia','Podia · Mobbin — course availability groups start-date and sign-up-limit settings.'),('luma','Luma · Refero — capacity and waitlist policy appear together in an event-admin control.'),('notify','Circle · Mobbin — explicitly choose invitation emails or silent addition.')]:parts.append(item(why,[k]))
parts+=['</ol><h3>Pattern comparison</h3><p class="evidence-note">✓ = the named behavior is visible; partial = incomplete evidence or an analogy; ✗ = not demonstrated by the retained collection. These are evidence labels, not product feature scores. In particular, no ✓ asserts live membership sync, actual delivery, or complete coverage of a question.</p><div class="table-scroll"><table><thead><tr><th scope="col">Product</th>']
for q in D['questions']:parts.append(f'<th scope="col">{q["id"]}<br>{html.escape(q["title"])}</th>')
parts.append('</tr></thead><tbody>')
cells={
'Asana':{1:('partial · teams in access picker','asana')},
'Basecamp':{1:('✓ · explicit snapshot policy','basecamp')},
'Circle':{1:('partial · inherit group members; sync unknown','inherit'),3:('partial · role and activity; provenance absent','circle_members'),4:('partial · manual, CSV and link entry','notify'),6:('✓ · email or silent add','notify')},
'Teachable':{3:('partial · course-filtered roster','teachable_roster'),4:('partial · manual path + CSV tab','teachable_bulk')},
'Deel':{2:('✓ · selected count + whole-team warning','deel'),5:('partial · scheduled assignment; optional deadline','deel_dates')},
'Gusto':{2:('✓ · count, date, reminder and cost review','gusto'),5:('partial · completion due date + reminders','gusto_dates'),6:('✓ · pre-purchase course email disclosure','gusto_notify')},
'GitBook':{2:('✓ · count in add action','gitbook')},
'Podia':{5:('partial · course start and signup cap','podia')},
'Luma':{5:('partial · event cap + waitlist','luma')},
'Fresha':{5:('partial · booking waitlist preferences','fresha')},
'Partiful':{4:('partial · event CSV template + review','partiful'),6:('partial · explicit Send emails action','partiful')},
'Cloudflare':{6:('partial · restricted skip-email failure','cloudflare')}}
for app,cs in cells.items():
 parts.append(f'<tr><th scope="row">{app}</th>')
 for n in range(1,7):
  if n in cs:
   label,k=cs[n];parts.append(f'<td>{label}<br>{link(k)}</td>')
  else:parts.append('<td>✗ · not demonstrated</td>')
 parts.append('</tr>')
parts+=['</tbody></table></div><h3>What the best apps do differently</h3><ul>']
for text,keys in [
 ('They clarify a group’s meaning. Circle shows where members are inherited; Basecamp goes further by stating that past assignments do not follow future group changes. Essentials needs that semantic clarity before implementing synchronization.',['inherit','basecamp']),
 ('They put scale into the decision. Deel exposes a whole-team warning and selection count; GitBook names the exact count in its add action. Gusto separates participant selection from scheduling and review.',['deel','gitbook','gusto']),
 ('They distinguish different roster jobs. Circle surfaces role/activity or course progress; Teachable supports course filters and bulk operations. None of these examples explains inherited access through group-origin and override labels.',['circle_members','circle_students','teachable_roster']),
 ('They make alternate bulk paths discoverable. Teachable pairs manual entry with CSV; Partiful makes CSV headers, a template and invitee review visible in the preparation surface. Only Teachable is direct course-enrollment evidence.',['teachable_bulk','partiful']),
 ('They put limits beside an explicit policy. Podia shows a course sign-up cap; Luma couples event capacity with a waitlist toggle; Fresha’s booking flow asks for acceptable dates and times. These solve different parts of the capacity problem.',['podia','luma','fresha']),
 ('They expose email consequences. Circle names email versus silent addition; Gusto explains the course email and learner next steps before purchase. Cloudflare’s restricted skip-email failure is a counter-example for recoverable enrollment errors.',['notify','gusto_notify','cloudflare'])]:parts.append(item(text,keys))
parts+=['</ul><h3>Best practices top companies converge on</h3><p class="evidence-note">The strongest repeated patterns are count-based review, adjacent entry paths and explicit action consequences. The following are proposed applications to Essentials, grounded in the references rather than claims of universal LMS behavior.</p><ul>']
for text,keys in [
 ('Show a selected-learner total immediately before confirmation; use a count-bearing enrollment action.',['deel','gitbook','gusto']),
 ('Keep manual entry and bulk alternatives reachable from the same enrollment surface.',['teachable_bulk','partiful','notify']),
 ('Make the enrollment target and access consequences visible before applying the change.',['teachable_bulk','asana']),
 ('Place course limits and the chosen full-capacity behavior where the instructor can inspect them. Adapt event waitlisting cautiously to groups.',['podia','luma']),
 ('State who receives an enrollment email and when; name silent addition explicitly and retain clear failure feedback.',['notify','gusto_notify','cloudflare'])]:parts.append(item(text,keys))
parts+=['</ul><h3>Open questions for Essentials 2.0</h3><ul>']
for text,keys in [
 ('Should attaching a semester group keep membership synchronized, or copy the current roster? If synchronized, what happens to learner progress and recordings after removal? The examples distinguish inheritance and snapshots but do not settle these rules.',['inherit','basecamp']),
 ('When two groups overlap, should the preview report unique learners, already enrolled learners and net-new seats separately? The retained previews show selected counts, not this delta.',['deel','gitbook']),
 ('How should instructors see group origin, direct additions and exclusions on one roster? How does an individual exception behave after a later group sync? These fields are not demonstrated.',['circle_members','teachable_roster']),
 ('Does capacity apply to the course, a simulation event, or both? If a group will not fit, block the whole group, admit part, or waitlist the group as a unit? The examples handle course limits or individual/event waitlists.',['podia','luma','fresha']),
 ('What does an enrollment commit create in the Learner Portal, and which system owns roster changes when Canvas is connected? Should notifications wait for a successful hand-off? Keep message composition in 07/09; invitation controls here do not establish that integration or delivery.',['teachable_bulk','notify','cloudflare'])]:parts.append(item(text,keys))
parts+=['</ul><p class="evidence-note">Scope and evidence: direct course/learning evidence is mixed with explicitly labeled work-management, event and booking analogues. Searches did not yield strong direct Canvas, Moodle, Google Classroom or LMS cohort-sync screenshots. Flow strips contain returned previews, so intermediate interactions may be absent. This report retains '+str(len(R))+' references across '+str(len(cells))+' products; weak or redundant results were excluded rather than padding the requested 30–50 target. All references remain unselected for the later converge pass.</p></section>']
(P/'synthesis.html').write_text('\n'.join(parts))
print('Synthesized',len(R),'references across',len({r['app'] for r in R}),'products')
