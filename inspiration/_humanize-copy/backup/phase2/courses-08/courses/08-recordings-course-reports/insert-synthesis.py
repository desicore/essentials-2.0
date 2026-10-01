"""Postprocess the existing shared builder output; does not replace the builder."""
import json, re, html
from pathlib import Path
p=Path(__file__).resolve().parent
report=p.parent/'08-recordings-course-reports.html'
d=json.loads((p/'references.json').read_text())
s=json.loads((p/'synthesis.json').read_text())
refs={r['id']:r for r in d['references']}
def esc(x): return html.escape(str(x))
def cite(ids):
 return ' '.join(f'<a href="#{esc(i)}">[{esc(refs[i]["app"])} · {esc(i)}]</a>' for i in ids)
def items(xs):
 return '<ul>'+''.join('<li>'+esc(x['text'])+' '+cite(x.get('refs',[]))+'</li>' for x in xs)+'</ul>'
block='<section id="synthesis" aria-label="Research synthesis"><h3>Top examples</h3>'+items(s['top'])
block+='<h3>Pattern comparison</h3><p>'+esc(s['legend'])+'</p><div class="comparison"><table><thead><tr><th>Product</th>'+''.join('<th title="'+esc(q['title'])+'">'+q['id']+'</th>' for q in d['questions'])+'</tr></thead><tbody>'
for row in s['comparison']:
 block+='<tr><th>'+esc(row['app'])+'<br>'+' '.join(f'<a href="#{esc(i)}" title="{esc(i)}">[{n+1}]</a>' for n,i in enumerate(row.get('refs',[])))+'</th>'+''.join('<td>'+esc(cell)+'</td>' for cell in row['cells'])+'</tr>'
block+='</tbody></table></div>'
for key,title in [('differences','What the best apps do differently'),('practices','Best practices top companies converge on'),('open','Open questions for Essentials 2.0')]:
 block+='<h3>'+title+'</h3>'+items(s[key])
block+='<p class="muted">'+esc(s['limitations'])+'</p></section>'
h=report.read_text()
h=h.replace('</header>','</header>'+block,1)
css='''#synthesis{margin:28px 0;padding:22px;background:var(--surface);border:1px solid var(--border);border-radius:8px}#synthesis h3{margin-top:24px}#synthesis li{margin:10px 0;max-width:1200px}#synthesis a{overflow-wrap:anywhere;font-size:12px}.comparison{overflow-x:auto}table{border-collapse:collapse;min-width:1050px;width:100%;font-size:13px}th,td{padding:10px;vertical-align:top;border:1px solid var(--border);text-align:left}thead{background:var(--subtle)}table{table-layout:fixed}th:first-child{width:150px}.reference-id{display:block;color:var(--muted);font-size:10px;margin-top:10px;overflow-wrap:anywhere}.subsection-label{margin-top:36px;font-size:13px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted)}'''
h=h.replace('</style>',css+'</style>',1)
# Shared builder renders references in question order. Add stable anchors and IDs.
ordered=[r for q in d['questions'] for r in d['references'] if r['question']==q['id']]
it=iter(ordered)
h=re.sub(r'<article class="card"',lambda m:'<article id="'+esc(next(it)['id'])+'" class="card"',h)
for r in ordered:
 pattern='id="'+esc(r['id'])+'" class="card"'
 start=h.index(pattern);pos=h.index('<div class="card-body">',start)+len('<div class="card-body">')
 h=h[:pos]+'<span class="reference-id">'+esc(r['id'])+'</span>'+h[pos:]
h=h.replace('<section class="question-section" data-question="0"','<div class="subsection-label">Part A · Recording organisation, access and playback</div><section class="question-section" data-question="0"',1)
h=h.replace('<section class="question-section" data-question="3"','<div class="subsection-label">Part B · Course reporting and learner results</div><section class="question-section" data-question="3"',1)
report.write_text(h)
print('Synthesis inserted; six question H2s preserved.')
