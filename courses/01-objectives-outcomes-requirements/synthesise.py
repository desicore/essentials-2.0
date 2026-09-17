"""Apply evidence reviews to the pipeline merge, then write the synthesis payload."""
import json,pathlib,collections
p=pathlib.Path(__file__).parent
read=lambda f:json.loads((p/f).read_text())
d=read('references.json'); stub=read('references.stub.json'); stub['references']=d['references']; d=stub
reviews=[read(f'notes/Q{i}-verdicts.json') for i in range(1,7)]
reassign={'mobbin:7fa8a407-5fc0-4de1-b169-0c7825495e47':'Q4'}
reject={r['id']:r['reason'] for v in reviews for r in v.get('reject',[]) if r['id'] not in reassign}
reject.update({
'mobbin:ffec1858-d352-4d00-9f52-585ce701769f':'Ordinary lesson formatting and a color picker do not evidence objective authoring guidance.',
'mobbin:5e554c6d-92e6-4852-99e2-f863def8f299':'Sales and opt-in copy suggestions fall outside outcome authoring.'})
corrections={r['id']:r['take'] for v in reviews for r in v.get('takeCorrections',[])}
for r in d['references']:
 r['question']=reassign.get(r['id'],r['question']);r['take']=corrections.get(r['id'],r['take']);r['selected']=False;r['crop']='';r['counter_example']=False
 if r['id']=='mobbin:3558619c-01e4-44de-9e1b-159104717ba1':r['take']='Udemy requires at least four separate outcomes, provides remaining-character counters and Add more, and explains that the statements appear publicly; reordering is not demonstrated.'
 if r['id']=='mobbin:6768ff06-2ec2-4e8b-8900-21500eb233a8':r['take']='Codecademy states completion criteria: watch all content and score at least 70%; the capture does not exercise a failure or blocking state.'
 if r['id']=='mobbin:fbde5f46-53c8-464f-8ff5-a4bca072426a':r['take']='Teachable shows populated and empty checkout bullet fields in the same repeated structure; storage semantics and reordering are not verified.'
 if r['id']=='mobbin:c9d90a3c-c778-4949-ad9f-5537e5caf0a7':r['take']='Teachable places an AI assistant beside lesson content; no objective-specific prompt or generated outcome is visible.'
 if r['id']=='refero:195b0110-a6d4-404f-81bf-be74a9af62c1':r['take']='Asana onboarding explains three objective choices and offers an unsure option; this is a choice-guidance analogue, not a measurable learning-objective editor.'
d['references']=[r for r in d['references'] if r['id'] not in reject]
d['references'].sort(key=lambda r:(r['question'],r['app']))
ids={r['id'] for r in d['references']}
R={'prerequisite':'mobbin:4b041654-20d2-49dd-8779-2f45211103f7','example':'mobbin:3476c06a-c7b3-49ac-bc99-6875a0563ec6','udemy':'mobbin:3558619c-01e4-44de-9e1b-159104717ba1','section':'mobbin:7fa8a407-5fc0-4de1-b169-0c7825495e47','learner':'mobbin:04a7c094-adec-42d4-9f50-b4500ed8825d','coursera':'mobbin:2d300077-7580-47c6-875a-369da8b0a065','coursera_mobile':'mobbin:96fd5ba3-c8bd-4fbc-b875-9b58e616c622','bullets':'mobbin:007d841f-48d2-425f-bbaf-75ba21693a3c','preview':'mobbin:e6757446-af84-43d5-bed0-da79c9a3826c','lock':'mobbin:60f6d746-a953-49ba-9af9-784ff378d031','completion':'mobbin:6768ff06-2ec2-4e8b-8900-21500eb233a8','skillshare':'mobbin:84584675-5845-46cc-a5bf-90fafdd128b4','uxcel':'mobbin:074a824b-a9f4-4e59-9039-fc5a59eb12c4','asana':'mobbin:2f67fe8d-dbad-4ee4-ad75-5d08c69fe948','choice':'refero:195b0110-a6d4-404f-81bf-be74a9af62c1','outline':'mobbin:deee3b15-0748-485c-9921-7be6cc0a456a','review':'mobbin:4753100b-9870-45a7-88f7-447b3760e712','publish':'mobbin:ca328d45-4fee-42c1-925b-ff8e298dc4b8','guide':'mobbin:2da07b87-105e-4850-8686-9cad55f3f455'}
def refs(*keys):return [R[k] for k in keys]
def entry(text,*keys):return {'text':text,'refs':refs(*keys)}
answers=[
 f"Udemy authors course outcomes as separate required fields with Add more and remaining-character counters ({R['udemy']}). Teachable uses repeated add/delete fields for optional checkout bullet points, an adjacent presentation pattern rather than a formal outcome model ({R['bullets']}). Neither capture demonstrates reordering. For Essentials, structured outcome items are well supported; moving items and preserving their order should be an explicit design decision, not a claimed industry finding.",
 f"Udemy explicitly tells instructors their Intended learners descriptions will appear publicly, and separate learner captures show outcome checklists ({R['udemy']}; {R['learner']}). Coursera presents checked outcomes on desktop and module prose on mobile ({R['coursera']}; {R['coursera_mobile']}). These are not matched author/learner captures of the same course, so exact wording and order remain unverified. Teachable's sampled preview sequence shows that draft curriculum can exist in admin while the student view is empty ({R['preview']}). Essentials needs a preview that exposes both publication state and the actual learner result.",
 f"Udemy separates prerequisite descriptions into their own authoring field with a concrete readiness example, but no admission rule is shown ({R['prerequisite']}). Distinguish entry readiness, progression locks and completion rules. Kajabi configures a module lock against completion of a selected lesson and explains that an assessment must be passed ({R['lock']}). Codecademy states all-content and 70% test-score requirements for completion ({R['completion']}); its runtime failure state was not tested. Skillshare communicates Beginner level and skills beside Watch Now ({R['skillshare']}), while Uxcel pairs beginner-friendly guidance with an enrollment path and a separate commercial upsell ({R['uxcel']}). These last two captures do not demonstrate learning-prerequisite enforcement. A requirement description must not silently imply an access rule.",
 f"Udemy associates an objective with a curriculum section above nested content, but does not demonstrate reusable course-outcome links to individual assessments or competencies ({R['section']}). Asana supplies the clearest generic relationship flow: no connected project → searchable picker → connected project with weight and progress ({R['asana']}). Its automatic roll-up is an analogue, not evidence that project completion proves learning. Essentials should preserve a linkable objective identity while leaving competency setup and scenario mapping to their neighbouring modules.",
 f"Udemy makes authoring constraints visible: at least four outcomes and per-item remaining-character counters ({R['udemy']}). Udemy also supplies a prerequisite example explaining that prior programming experience is unnecessary; this is readiness-copy guidance, not a measurable-outcome example ({R['example']}). Asana asks authors how they will define success and offers AI improvement in its goal flow ({R['asana']}); its separate onboarding screen explains choices and permits uncertainty ({R['choice']}). Kajabi generates a course outline, then exposes editable results with Apply/Discard ({R['outline']}; {R['review']}). That is useful review control, but no supplied example demonstrates action-verb coaching or AI checking whether a learning objective is measurable. Treat such support as an Essentials proposal, not observed convergence.",
 f"Udemy locates Intended learners first under Plan your course and explicitly requires at least four outcomes; the screenshot does not exercise the submission gate ({R['udemy']}). Teachable's sampled course flow proceeds from Setup guide through confirmation and launch success to Published, without exposing an objective step ({R['publish']}). Kajabi's wizard shows generation and appearance stages, but does not locate outcome authoring. Those captures cannot establish that outcomes are optional. For Essentials, define the publication requirement separately from the order in which an instructor may draft the course."
]
for q,a in zip(d['questions'],answers):q['answer']=a
for r in d['references']:
 if r['id'] in refs('skillshare','outline','preview'):r['counter_example']=True
# Compact table: unknown is an evidence gap, never a claim that the product lacks a feature.
products=sorted({r['app'] for r in d['references']})
rows=[]
for app in products:
 cells=[]
 for i,v in enumerate(reviews,1):
  verdict=next((x for x in v['verdicts'] if x['app']==app),None)
  kept=[x for x in (verdict or {}).get('refs',[]) if x in ids]
  if not verdict or not kept:cells.append({'text':'? Not observed','refs':[]});continue
  status=verdict['status'];label={'yes':'✓','partial':'partial','no':'✗','unknown':'?'}[status]
  cells.append({'text':f"{label} {verdict['text']}",'refs':kept[:2]})
 rows.append({'app':app,'cells':cells})
# Tighten table language; the adjacent source link supports each observed cell.
short={
('Udemy',1):'partial Separate items; reorder unverified',('Udemy',2):'partial Public mapping; exact fidelity unverified',('Udemy',3):'partial Separate prerequisite text; no gate shown',('Udemy',4):'partial Section-local objective; assessment mapping unverified',('Udemy',5):'✓ Minimum, counters and prerequisite example',('Udemy',6):'✓ Required in early planning',
('Teachable',1):'partial Checkout bullets; no reorder shown',('Teachable',2):'partial Student preview; published content only',('Teachable',5):'? AI button; objective coaching unseen',('Teachable',6):'? Setup → publish; objective step unseen',
('Coursera',2):'partial Learner outcomes; author side absent',
('Kajabi',3):'✓ Configured lesson/assessment lock',('Kajabi',5):'partial Reviewable AI outline; no outcome critique',('Kajabi',6):'? Wizard shown; objectives not located',
('Codecademy',3):'✓ Stated completion rule; runtime untested',('Skillshare',3):'✓ Informational level; no learning gate shown',('Uxcel',3):'partial Readiness copy; commercial upsell separate',
('Asana',4):'✓ Analogue: goal → project with progress',('Asana',5):'partial Success prompt and explained choices (analogue)'}
for row in rows:
 for i,c in enumerate(row['cells'],1):c['text']=short.get((row['app'],i),c['text'])
s={
'scope':'Curated from 39 merged candidates to 27 references across 8 products. The collection is below the 30–50 reference target because unrelated marketing, graphics and setup screens were removed. Functional evidence for instructors managing course expectations. Course products are the primary evidence; Asana is a labelled interaction analogue. Screens and sampled flow previews are historical captures, not live behaviour tests. Missing evidence is not a missing product feature. Q1–Q6 below retain the full reference board; counter-examples show meaningful contrasts rather than product defects.',
'legend':'✓ Clear evidence for the described part of the question; partial = limited or adjacent support; ✗ = observed contradiction; ? = not established by these captures. For Q3, ✓ may describe either an explicit rule or clearly informational readiness. No ✗ is assigned merely because a feature was not captured. Asana is a cross-domain analogue.',
'top':[
 {'ref':R['udemy'],'why':'The strongest direct course-outcome editor: separate required items, visible counters and an explicit public destination.'},
 {'ref':R['lock'],'why':'Connects a progression rule to a specific lesson and explains when an assessment counts as complete.'},
 {'ref':R['asana'],'why':'A three-preview connection flow makes downstream work and its progress relationship inspectable.'},
 {'ref':R['section'],'why':'Places a section objective directly above the content it frames, without claiming competency mapping.'},
 {'ref':R['coursera'],'why':'Makes the learner-facing outcome list easy to inspect before starting the course.'},
 {'ref':R['review'],'why':'Keeps generated course structure editable and gives the instructor Apply/Discard control.'},
 {'ref':R['choice'],'why':'Refero analogue: explains goal choices and permits uncertainty without forcing an uninformed answer.'}
],
'comparison':rows,
'differences':[
 entry('Udemy treats outcomes as explicit planning inputs with a minimum count and public destination; Teachable’s repeated checkout bullets serve optional presentation. Essentials should distinguish assessed outcomes from promotional summaries.','udemy','bullets'),
 entry('Udemy authors prerequisite descriptions; Kajabi configures progression through a selected lesson; Codecademy states completion criteria; Skillshare exposes readiness information. These solve different course-management decisions and need different labels.','prerequisite','lock','completion','skillshare'),
 entry('Udemy embeds an objective within a curriculum section. Asana instead offers an explicit attach/search/confirm relationship with progress roll-up. The latter interaction is transferable, but its completion metric is not evidence of learning.','section','asana'),
 entry('Udemy discloses that authored outcomes will be public, while Teachable’s preview exposes publication-state differences. A preview needs to explain what learners can currently see as well as how content is presented.','udemy','preview'),
 entry('Kajabi lets instructors edit and accept or discard generated structure. Udemy constrains outcome input, and Asana prompts authors to define success. These are complementary controls; none of the captures proves AI can validate a measurable learning outcome.','review','udemy','asana'),
 entry('Udemy visibly requires outcomes in early planning. Teachable’s sampled publication flow does not expose that step, so a publish flow alone cannot establish that outcomes are optional.','udemy','publish')
],
'practices':[
 entry('Use separate outcome items and state their learner-facing destination near the editor. Test order preservation explicitly; reorderability is not established by this board.','udemy','bullets','coursera'),
 entry('Give readiness guidance, progression rules and completion criteria separate names and controls. Use a concrete example in the requirement editor and show each enforced rule’s condition next to its configuration.','example','lock','completion','skillshare'),
 entry('Keep authored outcomes near curriculum context and make downstream connections inspectable. Treat completion roll-ups and assessed mastery as separate design decisions.','section','asana'),
 entry('Pair AI assistance with editable output and a clear acceptance action. Combine that control with explicit success criteria rather than assuming generated text is assessment-ready.','review','asana'),
 entry('Offer a learner preview that makes draft-versus-published state clear, and define the outcome publication requirement explicitly.','preview','publish','udemy')
],
'openQuestions':[
 entry('For simulation education, which readiness items are advice, which require learner acknowledgement, and which must block an event or scenario? How would a faculty override be represented? Kajabi provides a rule-configuration analogue; Skillshare provides the informational contrast.','lock','skillshare'),
 entry('Should course outcomes remain stable records with versioned wording when section objectives, scenarios or competencies change? Udemy’s local objective and Asana’s explicit relationship suggest different models; the competency and scenario sub-modules must resolve the seam.','section','asana'),
 entry('What demonstrates mastery: attendance, scenario completion, an assessment pass or faculty judgement? Codecademy’s stated completion threshold and Asana’s project progress are useful contrasts, not simulation assessment policy.','completion','asana'),
 entry('Must the Learner Portal preserve the exact outcome wording and order, and should instructors preview drafts or only the published version? Capture one same-course round trip before choosing the contract.','udemy','learner','preview'),
 entry('At the Canvas hand-off, which system owns outcome wording, stable identifiers, publication state and assessment links? This board shows local authoring and linkage patterns but does not supply evidence of Canvas interoperability. Resolve this in the adjacent hand-off module.','section','asana','publish')
]
}
for r in d['references']:
 if r['kind']=='flow' and not r['take'].startswith('Sampled') and 'sampled' not in r['take'].lower():r['take']='Sampled flow previews: '+r['take']
(p/'references.json').write_text(json.dumps(d,indent=2,ensure_ascii=False)+'\n')
(p/'synthesis.json').write_text(json.dumps(s,indent=2,ensure_ascii=False)+'\n')
(p/'notes/curation.json').write_text(json.dumps({'removed':[{'id':i,'reason':why} for i,why in reject.items()],'reassigned':reassign,'finalReferences':len(d['references']),'products':products},indent=2)+'\n')
print(json.dumps({'references':len(d['references']),'products':len(products),'byQuestion':dict(collections.Counter(r['question'] for r in d['references']))}))
