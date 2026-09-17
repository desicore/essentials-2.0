import json, pathlib, html
P=pathlib.Path(__file__).resolve().parent
D=json.loads((P/'references.pre-synthesis.json').read_text())
R={r['id']:r for r in D['references']}
def ref(key):
    matches=[r for r in D['references'] if key in r['id']]
    assert len(matches)==1,key
    r=matches[0]
    return f'<a class="ref" href="#{html.escape(r["id"])}">{html.escape(r["app"])} · {html.escape(r["id"])}</a>'
def update(key,title,take,counter=False):
    r=next(r for r in D['references'] if key in r['id'])
    r.update(title=title,take=take,counter_example=counter,selected=False)
# Captions are corrected from Sol's visual evidence notes, not search metadata.
update('c8fcc4c3','Competency scores, reliability and learning resources','Uxcel shows six competency axes, a 59/100 score, 40% reliability, peer rankings and resources for a selected competency; the calculation is not shown.')
update('41d3d178','Skill percentages and progression levels','Codecademy groups named skills with per-skill percentages and a Beginner level, including the number of additional skills needed for Intermediate; assessment provenance is not shown.')
update('042b8064','XP-based subject tracking flow','Dashboard → Skills tracking → subject/language summary → expanded catalogue → Languages filter; XP bars and learned capabilities are visible, but rubric-based assessment is not.')
update('34856cb4','Curriculum path and current topic','Brilliant shows connected topics, a current level, completed/current/upcoming states and a Start action; the path communicates curriculum progression, not validated competency.')
update('45ede6ec','Topic position and lesson counts','Brilliant adds lesson and exercise counts to topic progression; this helps learners locate the next activity but does not expose a competency score.')
update('ec3fe703','Mobile curriculum path with streak','Brilliant combines topic nodes and a next action with a streak banner; sequencing and engagement are visible, while assessed mastery is not.')
update('063b737c','Lesson path as a mastery counter-example','Duolingo shows unit position, next lesson, XP and engagement signals; these screens do not establish a competency score, rubric level or supporting evidence.',True)
update('bf1baa63','Unit checkpoint and next lesson','Duolingo presents unit checkpoints and a next action; curriculum attainment is visible but an assessed competency level is not.')
update('21f4097f','Mobile lesson-path progress','Duolingo keeps the current lesson and upcoming nodes visible on mobile; this is a progression pattern, not evidence of assessed mastery.')
update('2d300077',"Course page displays ‘Skills you’ll gain’ labels",'Coursera displays course skill labels and a View all skills link; this does not show instructor selection, taxonomy governance or assessed competencies.',True)
update('554289af','Enter profile skills in a modal','Handshake shows a skills text field, search icon, guidance to keep the set small, and Save/Cancel; the vocabulary source and governance are unknown.')
update('b8e17eec','Review removable profile-skill chips','Handshake displays removable chips and Save/Cancel for a chosen profile-skill set; chips do not establish a central taxonomy or course ownership.')
update('4a76a2f1','Take a subskill assessment and view aggregate result','A named Codecademy subskill leads through answered items and correctness feedback to an 86% result; highest/most-recent scores also appear, but the shown 85% value leaves persistence unclear.')
update('60c5af0c','Assessment result and declared skill graph impact','Uxcel connects an assessment report and attempt number to six skills, a score, reliability and timestamp; help text explains graph impact, but per-question contributions are not shown.')
update('67096453','Review learner evidence and approve or return it','ClassDojo shows a learner worksheet response/video and comment, followed by Approve or Return as draft and an approved view; this evidences review disposition, not a competency score.')
update('66a38bfc','Configure an assessment with an automatic-grading option','Kajabi exposes assessment creation, an automatic-grading toggle, Edit questions and View results; captured evidence, computed scores and competency linkage are not shown.')
# Retain progression patterns in Q5, but remove the Q4 sequence that does not establish causality.
D['references']=[r for r in D['references'] if '047e252c' not in r['id']]
answers={
'Q1': "The retained screenshots do not resolve central taxonomy versus free tags. Handshake shows skill entry and removable chips, but their vocabulary source and ownership remain unknown (refero:554289af-aead-4298-a222-73a19c1c1487; refero:b8e17eec-d089-4cd1-9663-63c8b65f85ac). Coursera’s ‘Skills you’ll gain’ labels communicate a course promise; they do not prove instructor selection or a governed framework (mobbin:2d300077-7580-47c6-875a-369da8b0a065). For Essentials, treat ‘institutional competency’ and ‘course-local skill’ as a proposed explicit distinction, with ownership and provenance visible. Choosing that model remains a product decision, not a convergence established by these examples.",
'Q4': "Codecademy brackets an assessment with the same named subskill, shows answer feedback and an aggregate result; its 86% result and 85% summary leave persistence unclear (mobbin:4a76a2f1-e45c-4d90-a3aa-a30debcc9f44). Uxcel explains that an assessment contributes to a multi-skill graph and displays reliability, but hides per-question contributions (mobbin:60c5af0c-ed0a-4f93-8c44-ca67daf3762a). ClassDojo shows evidence review and approval, while Kajabi shows assessment configuration: each covers a different part of the chain (mobbin:67096453-158a-4b59-8633-21fcb4684817; mobbin:66a38bfc-fc8d-4574-85d6-ae37dfe339cd). Essentials should connect a course competency and rubric version to the scenario/event, observation or recording, assessor and resulting score. That complete lineage is a proposed requirement; none of these captures proves it end to end.",
'Q5': "Uxcel is the strongest diagnostic example: named competency axes, a score, reliability and related learning resources coexist (mobbin:c8fcc4c3-061d-4280-90d5-4600ac48bf53). Codecademy exposes individual skill percentages and a Beginner-to-Intermediate progression rule, while its tracking flow mainly reports XP (mobbin:41d3d178-1703-47b1-820d-b5c5348118a6; mobbin:042b8064-f255-4149-9649-a2bbc057dea5). Brilliant and Duolingo make current position and the next lesson clear, but those paths do not establish assessed mastery (mobbin:34856cb4-4cb0-4248-ab60-d1d4bf64b665; mobbin:063b737c-c4d3-4788-b91d-b137f93ebb9c). For the Learner Portal, combine an actionable next activity with separately labelled competency level and supporting evidence. Do not translate completion, streaks or XP into mastery without an explicit assessment rule."
}
update('d5c43b15','Subskill percentages and Learn/Evaluate actions','Codecademy shows skill sets, percentage boxes and a subskill drawer with Builds toward, Learn and Evaluate; this is decomposition and roll-up, not rubric or level authoring.')
update('239a7ddc','Define rubric criteria, levels, descriptions and points','Google Classroom combines Use scoring, criterion title/description, level title/description/points, add-level and add-criterion controls, sorting and Save; checklist and versioning are not shown.')
update('fd8e5fc8','Edit point values within a criterion','A second Google Classroom rubric state shows a 1-point value and editable level fields, complementing the 10-point state; no scored learner example is shown.')
update('9d4ec3e3','Health-impact ratings with descriptive interpretations','Visible pairs numeric responses with descriptive interpretations and Submit and calculate score; it illustrates readable scale anchors, not instructor-defined competencies.')
answers['Q3']="Google Classroom directly supports rubric definition: criterion and level titles, descriptions, editable points, an optional scoring toggle, ordering and Save (refero:239a7ddc-e5ed-4209-87dd-f329502b2271; refero:fd8e5fc8-d22d-4b80-ad7d-83c457db08ef). Visible demonstrates readable numeric anchors in a respondent-facing questionnaire, while Codecademy exposes subskill percentages and roll-up relationships rather than a rubric builder (mobbin:9d4ec3e3-b07c-44ea-bc93-6d661226d178; mobbin:d5c43b15-4d4b-4c10-9eaf-33d1e9533e44). For Essentials, place observable performance descriptions beside each scoring level; keep criteria and rating scales editable as one structure. Checklist behavior, assessor calibration and version history remain open requirements, not patterns established by this set."
update('3345cd32','Learner selects one of four onboarding domains','Brilliant offers four broad domains, a selected state and Continue; this small single-choice list does not demonstrate selection across hundreds of competencies.')
update('e102067a','Teacher reviews, imports or adds class skills','ClassDojo shows Positive/Needs work skill categories, point-valued cards, Add skill, Import from and family visibility; search, hierarchy and import contents are not shown.')
update('c3b8347d','Browse skill progress and additional subjects','Codecademy groups subjects and languages with tabs, sorting, XP and More available; this supports catalog scanning, but does not show selecting course competencies.')
update('refero:8761','Enter and review profile skills as removable chips','Handshake moves from skill entry to removable chips, Save and a truncated profile set with View all; no suggestion menu or taxonomy-backed matches are visible.')
D['references']=[r for r in D['references'] if not any(k in r['id'] for k in ['78d51bc7','bf1baa63'])]
answers['Q2']="Handshake demonstrates text entry, accumulating removable chips, saving and reviewing a truncated set through View all; no suggestion menu is captured, so autocomplete is not established (refero:8761). ClassDojo supplies small-set instructor controls—categories, point-valued skill cards, Add skill and Import from—without exposing the import contents (mobbin:e102067a-a1a6-400a-81c4-626f7fbb066c). Codecademy contributes grouping, sorting and expansion for browsing a larger catalog, while Brilliant’s four-domain choice is deliberately small (mobbin:c3b8347d-6ee8-4087-8d92-7902f37a53d3; refero:3345cd32-03fa-4571-9153-6ce930088570). For Essentials, combine discoverable vocabulary search with a persistent chosen set and category context; this combination is a design proposal. Hierarchical selection, duplicate handling, bulk selection and behavior at hundreds of items need further validation."
answers['Q1'] += " ClassDojo adds an instructor-side clue: Add skill and Import from coexist, but the capture does not establish institutional governance or how the import works (mobbin:e102067a-a1a6-400a-81c4-626f7fbb066c)."
def item(text,keys):
    return '<li>'+text+'<br>'+' · '.join(ref(k) for k in keys)+'</li>'
intro='''<section id="synthesis" class="synthesis" aria-label="Research synthesis">
<h3>Top examples</h3>
<p class="scope">Read this as a comparison of captured interfaces, not a feature audit or a ranking of all products. Direct evidence is strongest for rubric authoring, skill entry and learner progress. No retained capture proves a governed institutional framework or competency-set reuse across semesters. Searches did not surface usable direct examples from Canvas, Moodle, Docebo, 360Learning, Degreed, Lattice, Culture Amp or Workday Skills Cloud. Recommendations below are proposals for Essentials, grounded in the linked examples; they are not claims of universal industry consensus. Flow strips show retained states in source order and may omit intermediate screens; step numbers count the displayed images.</p>
<ul>'''
top=[
('Google Classroom · Refero — show this first for criteria, described levels and editable points in one rubric builder.',['239a7ddc']),
('Handshake · Refero — the clearest captured entry → chip review → Save journey; vocabulary governance and suggestions remain unproven.',['refero:8761']),
('Codecademy · Mobbin — follows a named subskill into an assessment, answer feedback and an aggregate result.',['4a76a2f1']),
('Uxcel · Mobbin — separates competency score, reliability and related learning resources, with an explicit assessment-impact explanation nearby.',['c8fcc4c3','60c5af0c']),
('ClassDojo · Mobbin — gives teachers a visible review disposition for learner evidence, distinct from competency scoring.',['67096453']),
('Hello Ivy · Refero — shows an explicit reusable-template action; use it as an adjacent reuse pattern.',['refero:4518']),
('Brilliant · Mobbin — makes current curriculum position and the next activity clear without requiring a dense dashboard.',['34856cb4']),
('Coursera · Mobbin — a useful counter-example: course skill promises are visible, but governed competency selection is not.',['2d300077'])]
intro+=''.join(item(t,k) for t,k in top)+'</ul>'
def cell(text,keys=()):
    links=[]
    for k in keys:
        r=next(r for r in D['references'] if k in r['id'])
        links.append(f'<a href="#{r["id"]}" title="{html.escape(r["app"])} · {r["id"]}" aria-label="Evidence: {html.escape(r["app"])} {r["id"]}">↗</a>')
    return '<td>'+html.escape(text)+' '+ ' '.join(links)+'</td>'
N=('✗ Not observed',[])
rows=[
('Google Classroom',[N,N,('✓ Criteria + described points',['239a7ddc','fd8e5fc8']),N,N,N]),
('Handshake',[('partial · model unknown',['554289af','b8e17eec']),('partial · entry + chip review',['refero:8761']),N,N,N,N]),
('ClassDojo',[('partial · Add / Import',['e102067a']),('partial · small skill cards',['e102067a']),('partial · skill point values',['e102067a']),('partial · evidence + approval',['67096453']),N,('partial · import entry only',['e102067a'])]),
('Coursera',[('partial · course skill labels',['2d300077']),N,N,N,N,N]),
('Codecademy',[('partial · skill decomposition',['d5c43b15']),('partial · tabs + sorting',['c3b8347d']),('partial · percentages, no rubric',['d5c43b15']),('partial · subskill → result',['4a76a2f1']),('✓ Skill percentages + level',['41d3d178']),N]),
('Visible',[N,N,('partial · fixed descriptive anchors',['9d4ec3e3']),N,N,N]),
('Kajabi',[N,N,N,('partial · assessment setup',['66a38bfc']),N,N]),
('Uxcel',[('partial · named skill axes',['c8fcc4c3']),N,N,('partial · declared graph impact',['60c5af0c']),('✓ Score + reliability',['c8fcc4c3']),N]),
('Brilliant',[N,('partial · four-domain choice',['3345cd32']),N,N,('partial · curriculum path',['34856cb4','ec3fe703']),N]),
('Duolingo',[N,N,N,N,('partial · lesson progression',['063b737c','21f4097f']),('partial · course switching only',['789ccbbc'])]),
('Hello Ivy',[N,N,N,N,N,('partial · document template',['refero:4518'])]),
('Teachable',[N,N,N,N,N,('partial · content import entry',['5ce0dd31'])])]
comparison='<h3>Pattern comparison</h3><p>✓ = directly observed support for the stated part of the question. <strong>partial</strong> = incomplete or adjacent evidence. ✗ = not observed in this retained set; it does not mean the product lacks the feature. Arrows link to the exact reference card.</p><div class="comparison-scroll" tabindex="0" role="region" aria-label="Product comparison; scroll horizontally"><table><thead><tr><th scope="col">Product</th>'
comparison+=''.join(f'<th scope="col" title="{html.escape(q["title"])}">{q["id"]}<br>{label}</th>' for q,label in zip(D['questions'],['Framework model','Selection / scale','Levels / rubric','Traceability','Learner mastery','Reuse']))
comparison+='</tr></thead><tbody>'+''.join('<tr><th scope="row">'+app+'</th>'+''.join(cell(*c) for c in cs)+'</tr>' for app,cs in rows)+'</tbody></table></div>'
findings='<h3>What the best apps do differently</h3><p>These differences distinguish the strongest captured examples; they do not establish a market-wide ranking.</p><ol>'
findings+=''.join(item(t,k) for t,k in [
('<strong>Keep the measurement definition editable.</strong> Google Classroom puts criterion, level, description and points together. Visible makes a numeric response readable with fixed prose, but does not let the respondent author the scale. For course setup, borrow the former’s authoring structure and the latter’s readable anchors.',['239a7ddc','9d4ec3e3']),
('<strong>Carry a named skill into an assessment.</strong> Codecademy exposes subskills with Learn/Evaluate actions and repeats the subskill around the assessment. Coursera’s catalog skill labels stop at communicating what a course promises. The difference matters when an instructor must show what was actually measured.',['d5c43b15','4a76a2f1','2d300077']),
('<strong>Separate evidence review from scoring.</strong> ClassDojo gives a teacher Approve/Return controls on a learner response; Codecademy shows answer outcomes and an aggregate score. Essentials needs both concepts, with labels that keep review status and assessed level distinct.',['67096453','4a76a2f1']),
('<strong>Expose more than a progress path.</strong> Uxcel presents a score, reliability, skill dimensions and related resources. Duolingo’s captured path presents lesson position and engagement signals. A learner can use a next-step path without treating it as proof of competence.',['c8fcc4c3','063b737c']),
('<strong>Let the chosen set remain reviewable.</strong> Handshake accumulates removable skill chips, then offers Save and View all. Brilliant’s four-domain choice is a bounded single-choice step. Use the first pattern when an instructor is assembling a set; reserve the second for an intentionally small decision.',['refero:8761','3345cd32']),
('<strong>Make reuse an explicit operation.</strong> Hello Ivy exposes a template action, whereas Teachable’s retained curriculum screen exposes a content-import entry point. These are useful affordances, but neither proves reuse of stable, versioned competency definitions across semesters.',['refero:4518','5ce0dd31'])])+'</ol>'
best='<h3>Best practices top companies converge on</h3><p>Recurring interaction patterns in this evidence set support the following proposals; institutional competency governance itself remains unresolved.</p><ul>'
best+=''.join(item(t,k) for t,k in [
('Provide a visible review-and-save boundary for course configuration. Handshake makes selected skills reviewable; Google Classroom provides Save for a structured rubric.',['b8e17eec','239a7ddc']),
('Pair numbers with words. Google Classroom offers level descriptions next to points; Visible pairs selected numbers with descriptive interpretations. For simulation rubrics, write observable behavior into those descriptions.',['239a7ddc','9d4ec3e3']),
('Make the structure inspectable. ClassDojo groups class skills; Codecademy exposes subskills and the skill sets they build toward. Show a course’s chosen competencies and their relationships before attaching activities.',['e102067a','d5c43b15']),
('Connect the learner’s current state to a next action. Brilliant supplies a next activity; Uxcel offers learning resources for a selected competency. Keep that action separate from the label explaining what the score means.',['34856cb4','c8fcc4c3']),
('Give evidence and its outcome clear identities. ClassDojo names the learner activity under review; Codecademy names the subskill around its assessment. Extend this principle in Essentials with a traceable observation, assessor and rubric version.',['67096453','4a76a2f1'])])+'</ul>'
openq='<h3>Open questions for Essentials 2.0</h3><ul>'
openq+=''.join(item(t,k) for t,k in [
('<strong>Who owns the vocabulary?</strong> Handshake’s entry/chip states and Coursera’s skill labels do not reveal governance. Will Essentials distinguish institution-owned competencies from course-local skills, and who may create, rename or retire each?',['554289af','2d300077']),
('<strong>What makes a simulation rating comparable?</strong> Google Classroom exposes editable levels and points; Visible illustrates descriptive anchors. How should Essentials handle checklist items, critical failures, not-observed values, assessor calibration and scale changes after scoring begins?',['239a7ddc','9d4ec3e3']),
('<strong>What counts as evidence?</strong> ClassDojo exposes a submitted response; Codecademy exposes question outcomes. At the scenario/event seam, will an assessor observation, checklist item, recording timestamp or repeated attempt support a competency score, and what can learners inspect in reports?',['67096453','4a76a2f1']),
('<strong>What does reuse preserve?</strong> Hello Ivy’s template action and Teachable’s import entry do not resolve linked versus copied definitions. Should a new semester inherit a frozen rubric version or follow updates, and how will historical learner results remain interpretable?',['refero:4518','5ce0dd31']),
('<strong>What crosses the Canvas boundary?</strong> The captured Google Classroom rubric and ClassDojo evidence-review examples illustrate separate data objects, not a Canvas integration. Should the hand-off include competency identifiers, rubric definitions, grades, evidence links or only a summary—and which system owns later changes?',['239a7ddc','67096453'])])+'</ul></section>'
update('refero:4518','Save a page as a named personal or shared template','Hello Ivy shows Save as template, a name and preview, For everyone / For me only visibility and a success confirmation; applying the template, synchronization and versioning are not shown.')
update('5ce0dd31','Content import is not proof of competency-template reuse','Teachable exposes Import content beside Bulk edit in the curriculum editor; source, copied fields and result are absent, so competency or rubric reuse cannot be established.',True)
D['references']=[r for r in D['references'] if not any(k in r['id'] for k in ['789ccbbc','8b96d9a4'])]
answers['Q6']="Hello Ivy is the only retained example with an explicit save-for-reuse journey: open page → overflow menu → Save as template → name and preview → personal/shared visibility → save confirmation (refero:4518). It does not show applying a template or propagation of later edits. Teachable exposes Import content, but the source and outcome are absent; keep it as a counter-example to claiming reusable competency templates from an import button (mobbin:5ce0dd31-4106-4884-ab40-431b863377f9). ClassDojo’s Import from entry is similarly incomplete (mobbin:e102067a-a1a6-400a-81c4-626f7fbb066c). For Essentials, propose an explicit saved competency/rubric set with ownership, preview and target-course selection. Decide snapshot versus live link, version lineage and historical-score behavior separately. Cross-course and cross-semester competency reuse is not proven by these captures."
# Remove the unsupported course-switching reference from the already-rendered comparison.
# The table was constructed before curation; replace its single dropped-evidence cell.
import re
comparison=re.sub(r'<td>partial · course switching only .*?</td>',cell(*N),comparison)
for q in D['questions']:q['answer']=answers[q['id']]
D['intro']='Research for Essentials 2.0: Semester → Courses → skills and competencies. '+str(len(D['references']))+' curated Mobbin and Refero references across '+str(len({r['app'] for r in D['references']}))+' products compare course-skill setup, rubrics, evidence and learner progress. Adjacent patterns and unsupported capabilities are identified explicitly; scenario/event mapping, reporting and Canvas remain neighbouring seams.'
(P/'references.json').write_text(json.dumps(D,ensure_ascii=False,indent=2)+'\n')
(P/'synthesis.html').write_text(intro+comparison+findings+best+openq+'\n')
print('Final curated references:',len(D['references']),'Products:',len({r['app'] for r in D['references']}))
