from pathlib import Path
import json, html
p=Path(__file__).resolve().parent
d=json.loads((p/'references.json').read_text())
r={x['id']:x for x in d['references']}
a={
'pod_add':'mobbin:30a1432c-f8fd-4f5f-a026-53b0744635b2','teach_pdf':'mobbin:fc5a2e31-b68a-4560-adbd-64534e99d8c6','teach_dialog':'mobbin:41a7198a-cb8b-4e01-8082-f4b6ddf7f73b','teach_outline':'mobbin:f9d666fe-a496-450a-acb2-e9314ac4b4b8','teach_drip':'mobbin:6739ae23-f32d-4706-9e4b-a07c9a056605','teach_editor':'refero:a68d25c8-7cda-41fb-aa23-67308245866e',
'kaj_modules':'mobbin:969eff25-d44e-41ee-94ea-498d216ae8ea','kaj_media':'mobbin:2adb72d9-f443-4e78-a576-3c919a9c2509','kaj_state':'mobbin:8f6d425a-cfdc-4b2a-a100-6ec7b5e4fcd4',
'sq_state':'mobbin:816b6484-5d04-4ef2-8a8b-2691f365fb1b','sq_video':'refero:4e5677b4-94fd-47fc-b2a7-e0ba320debcf',
'pod_state':'mobbin:79259c68-06d8-411f-b63f-4d026338d2fe','pod_structure':'mobbin:41f8b1f4-ec5f-4703-aeed-9b318eb0d5c0',
'cour_player':'mobbin:f91726c7-28d7-4144-8957-35666b76edf4','cour_resources':'mobbin:b3585969-4b16-4802-aea2-feaf40d75f33','cour_sequence':'mobbin:d167e236-9aec-4856-8c79-27389df500a2',
'skill_resources':'mobbin:bc678aba-07f0-4bbd-b48d-b4c5da47de0b','skill_outline':'mobbin:ce6bd4c3-a5bf-4936-9052-271f2415fe4b','skill_player':'mobbin:15e380f4-c72f-4706-b9d0-240ed6ba5ded',
'dash_picker':'mobbin:26e60a25-e5dd-4eff-aa2c-4ea33f1f9a2f','dash_preview':'mobbin:c899f04f-d0e2-4cfb-adfb-49a7cf92b601','drop_library':'mobbin:389bb479-d3e5-4301-a2fa-af842ae2ee4b',
'gum_content':'refero:11b3c0a4-eb09-4d98-9a1a-742439189540','gum_structure':'refero:0286dd6d-2130-4b0c-b5f8-cb3cc7b78a0b','super_structure':'mobbin:f6e3fe92-3143-4fac-a11c-f3b178b9c6f4','udemy_download':'mobbin:b9a7ca6e-c921-4ca5-9579-c18e634a7612',
'canva_move':'mobbin:bf1ec8aa-8666-4c94-acf3-5bb1db523411'}
def cite(key):
 id=a[key];ref=r[id]
 return f'<a href="#{id}">{html.escape(ref["app"])} · {id}</a>'
def cites(*keys):return ' '.join(cite(k) for k in keys)
def refs(*keys):return ' '.join(f'[{a[k]}]' for k in keys)
answers=[
'Use one contextual entry point, then make material type and source explicit. Podia groups files and embeds under New lesson; Teachable uses an Add content palette followed by a PDF-specific chooser for device, cloud and URL sources. A shared launcher does not require one undifferentiated uploader. Dropbox Dash illustrates a reusable picker for chat sources, not course attachments. '+refs('pod_add','teach_pdf','dash_picker'),
'Course structure and storage structure solve different tasks. Kajabi nests lessons inside modules and offers submodules; Teachable presents ordered sections with lesson-level content summaries. Skillshare uses a flat lesson list plus a resource tab, while SuperHi separates downloads from videos. Gumroad is the counter-example: a freeform document rather than visible module rows. For Essentials, test a short course-section structure before adding an independent folder tree. '+refs('kaj_modules','teach_outline','skill_outline','super_structure','gum_structure'),
'Canva demonstrates library-to-course reuse: choose a design from Projects, then Copy to course or Move it. Dropbox supplies a central repository analogue; Podia and Teachable demonstrate course-scoped addition. None establishes a live asset shared across multiple courses, edit propagation or pinned versions. A course-scoped upload is not proof of a silo. Essentials needs explicit copy/reference semantics and where-used information. '+refs('canva_move','drop_library','pod_add','teach_pdf'),
'Keep the lesson or library context visible during consumption. Coursera demonstrates inline video with study tools and sequence navigation; Dropbox Dash demonstrates quick look followed by a side preview pane. Teachable shows PDF rendering in the instructor editor, which does not establish learner-side document preview. Skillshare keeps video inline but directs course-file access to another tab. '+refs('cour_player','dash_preview','teach_pdf','skill_player'),
'Publication, timed release and audience scope should be treated as separate questions. Teachable combines per-lesson Publish with section-level drip; Squarespace exposes Draft/Published/Scheduled and persistent status labels. Kajabi shows a simpler binary state. Podia is a counter-example to persistent status feedback: the Hidden label disappears when an item becomes visible. Per-group visibility is not demonstrated in these captures. '+refs('teach_drip','sq_state','kaj_state','pod_state'),
'No retained pair proves that a learner view mirrors its instructor editor. Coursera supplies a distinct Resources branch beside course modules; Skillshare ties project downloads to lessons through references in a separate tab; Udemy shows learner downloads. Teachable supplies the authoring half only, with sectioned lessons and an attached document. Treat structural parity and a learner-preview check as Essentials requirements to validate, rather than a proven cross-product convention. '+refs('cour_resources','skill_resources','udemy_download','teach_editor')]
for q,answer in zip(d['questions'],answers):q['answer']=answer
(p/'references.json').write_text(json.dumps(d,indent=2))
parts=['<section id="synthesis" class="synthesis" aria-label="Research synthesis">', '<h3>Top examples</h3>',f'<p>{len(r)} references across {len(set(x["app"] for x in r.values()))} products. This is a comparison of captured patterns, not a verified feature inventory or a ranking of the market. Flow strips contain up to eight captured frames; some show alternative branches. Library analogues and missing instructor/learner pairs are labelled explicitly.</p>','<ol>']
for key,why in [
('pod_add','One New lesson menu covers multiple material types and keeps upload progress in the course section.'),
('teach_pdf','A content-type palette leads to a chooser that brings local, cloud and URL sources together; the PDF renders in the instructor lesson.'),
('kaj_modules','The module creation flow makes course hierarchy an explicit authoring action.'),
('teach_drip','Section release timing remains distinct from lesson publication.'),
('sq_state','Draft, published and scheduled states remain visible in the outline; scheduling exposes date and time.'),
('dash_preview','Quick look expands into a side pane while preserving the library context; a file-manager analogue.'),
('cour_resources','The learner Resources branch makes a useful counterpoint to a single shared course tree.'),
('canva_move','The Projects chooser names Copy to course and Move explicitly when bringing existing designs into a course.')]:
 parts.append(f'<li><strong>{html.escape(r[a[key]]["app"])} · {r[a[key]]["source"].title()}</strong> — {why} {cite(key)}</li>')
parts+=['</ol>','<h3>Pattern comparison</h3>','<p>✓ = directly observed for the stated facet; partial = limited, one-sided or adjacent evidence; ✗ = a visibly different model for the stated facet. “Unverified” means the retained set cannot answer the question; it never means the product lacks the feature. In Q6, no product receives a parity checkmark.</p>','<div class="comparison-scroll" tabindex="0" role="region" aria-label="Product comparison table"><table><thead><tr><th scope="col">Product</th>']
for q in d['questions']:parts.append(f'<th scope="col">{q["id"]}<br>{html.escape(q["title"])}</th>')
parts+=['</tr></thead><tbody>']
cells={
'Teachable': [('✓ Type palette + source chooser','teach_pdf'),('✓ Ordered sections/lessons','teach_outline'),('partial Course upload; reuse unverified','teach_pdf'),('partial Instructor PDF preview','teach_pdf'),('✓ Publish + section drip','teach_drip'),('partial Instructor half only','teach_editor')],
'Podia':[('✓ One New lesson menu','pod_add'),('✓ Mixed materials within sections','pod_structure'),('partial Course placement; reuse unverified','pod_add'),None,('✓ Hidden → visible; label disappears','pod_state'),None],
'Kajabi':[('partial Module/content entry','kaj_modules'),('✓ Modules + submodule option','kaj_modules'),None,('partial Media + PDF link; playback unproven','kaj_media'),('✓ Draft/Published card','kaj_state'),None],
'Squarespace':[('partial Add Video slot','sq_video'),('partial Lesson outline','sq_state'),None,None,('✓ Draft/Published/Scheduled','sq_state'),None],
'Coursera':[None,('partial Sequential learner lesson','cour_sequence'),None,('✓ Inline player + study tools','cour_player'),None,('partial Learner Resources branch; no pair','cour_resources')],
'Skillshare':[None,('✓ Flat numbered lessons + resource tab','skill_outline'),None,('✓ Inline video; files in another tab','skill_player'),None,('partial Learner projects/resources; no pair','skill_resources')],
'SuperHi':[None,('✓ Downloads and videos grouped by type','super_structure'),None,('partial Download/video list; preview unverified','super_structure'),None,('partial Learner grouping; no pair','super_structure')],
'Udemy':[None,None,None,('partial Mobile player/downloads','udemy_download'),None,('partial Learner downloads; no pair','udemy_download')],
'Dropbox':[None,('✓ Central shared/team folders','drop_library'),('partial Central library; course reuse unverified','drop_library'),None,None,None],
'Dropbox Dash':[('partial Chat-source picker analogue','dash_picker'),None,('partial Existing-source selection; course reuse unverified','dash_picker'),('✓ Quick look → preview pane','dash_preview'),None,None],
'Gumroad':[('partial Rich text/link + closed Insert menu','gum_content'),('✗ Freeform document; no visible module rows','gum_structure'),None,None,None,None]
}
if a['canva_move'] in r:cells['Canva']=[None,('✓ Ordered course activities','canva_move'),('✓ Projects → Copy to course / Move; live sync unverified','canva_move'),None,None,None]
for app,values in cells.items():
 if not any(x['app']==app for x in r.values()):continue
 parts.append(f'<tr><th scope="row">{app}</th>')
 for val in values:
  parts.append('<td>partial · Unverified</td>' if val is None else f'<td>{html.escape(val[0])}{cite(val[1])}</td>')
 parts.append('</tr>')
parts+=['</tbody></table></div>','<h3>What the best apps do differently</h3>','<ul>']
findings=[
('They put addition inside course structure, while preserving meaningful material types. Podia’s menu leads directly to a file row; Teachable’s palette distinguishes a PDF viewer from other blocks. For Essentials, a single Add material action can still branch by type.',('pod_add','teach_pdf')),
('They expose pedagogical containers rather than assuming a file tree. Kajabi makes modules explicit; Teachable adds content summaries and publication state to ordered lessons. Gumroad’s single document is a useful counter-example for very small courses.',('kaj_modules','teach_outline','gum_structure')),
('They make release rules visible where instructors manage content. Teachable separates drip from Publish; Squarespace persists Draft/Scheduled labels. Podia’s disappearing Hidden label shows the ambiguity that persistent positive state can avoid.',('teach_drip','sq_state','pod_state')),
('They preserve context during preview, but supporting files may still live elsewhere. Coursera surrounds video with study tools; Dropbox Dash previews inside the library; Skillshare routes course files to a separate tab. These are different compromises, not one universal layout.',('cour_player','dash_preview','skill_player')),
('They make the reuse operation explicit. Canva lets authors browse Projects and choose Copy to course or Move; Dropbox supplies shared/team storage without a captured course-attachment step. Essentials should name the operation and its effect, while separately deciding whether later edits propagate.',('canva_move','drop_library'))]
for text,keys in findings:parts.append(f'<li>{text} {cites(*keys)}</li>')
parts+=['</ul>','<h3>Best practices top companies converge on</h3>','<p>Actionable recommendations from the repeated patterns in this sample; not a claim of universal market consensus.</p>','<ul>']
for text,keys in [
('Start Add material from the relevant course section or lesson, and keep upload progress and completion there.',('pod_add','teach_pdf')),
('Show the course sequence alongside content; let sections and modules explain placement before introducing another navigation tree.',('teach_outline','kaj_modules')),
('Expose publication state and release timing near the item or section, with clear feedback after a change.',('teach_drip','sq_state')),
('Keep playback or preview close to the current context, and make supporting resources discoverable from that context.',('cour_player','dash_preview','skill_resources'))]:parts.append(f'<li>{text} {cites(*keys)}</li>')
parts+=['</ul>','<h3>Open questions for Essentials 2.0</h3>','<ul>']
for text,keys in [
('Asset semantics: Canva names copy and move, but when one PDF serves multiple courses or semesters, should Essentials use a live reference, a pinned version, or a copy? Who owns it, and how can an instructor see affected courses before replacing it? Linked-update behavior remains unresolved.',('canva_move','drop_library','teach_pdf')),
('Simulation structure: should materials attach to the whole course, a section, or a scenario from sub-module 05? Which hierarchy should the Learner Portal display, and how should a learner preview validate that structure?',('kaj_modules','teach_outline','cour_resources')),
('Release semantics: do dates use semester time, enrollment-relative delays, or event-relative offsets? How do draft, scheduled release and learner-group access combine? Group controls and event-relative rules were not demonstrated in the inspected visibility examples.',('teach_drip','sq_state','kaj_state')),
('Consumption and hand-off: which documents must preview in the Learner Portal, and which may download? When sub-module 09 sends materials to Canvas, does it send a URL or a copy, and which system controls later versions? This report leaves sending flows to 09.',('teach_pdf','cour_resources','dash_preview'))]:parts.append(f'<li>{text} {cites(*keys)}</li>')
parts+=['</ul>','</section>']
(p/'synthesis.html').write_text('\n'.join(parts))
print('Wrote six answers and synthesis with',len(cells),'comparison rows')
