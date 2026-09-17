from pathlib import Path
import json,re,html
mod=Path(__file__).resolve().parent.parent
report=mod.parent/'05-scenarios.html'
d=json.loads((mod/'references.json').read_text())
s=report.read_text()
# Give each existing builder card a stable deep-link and visible reference ID.
refs=[r for q in d['questions'] for r in d['references'] if r['question']==q['id']]
i=iter(refs)
def card(m):
 r=next(i)
 return '<article id="'+html.escape(r['id'],quote=True)+'" '+m.group(1)
s=re.sub(r'<article (class="card")',card,s)
i=iter(refs)
def badge(m):
 r=next(i)
 return m.group(0)+'<p class="ref-id"><a href="#'+html.escape(r['id'],quote=True)+'">'+html.escape(r['id'])+'</a></p>'
s=re.sub(r'<div class="card-body">',badge,s)
block=(mod/'synthesis.html').read_text()
s=s.replace('</p></header>','</p></header>\n'+block,1)
css='''\n.synthesis{margin:28px 0;padding:24px;border:1px solid var(--border);border-radius:8px;background:var(--surface)}.synthesis h3{margin-top:26px}.synthesis h3:first-child{margin-top:0}.synthesis li{margin:9px 0}.synthesis p,.synthesis li{max-width:1100px}.comparison-scroll{overflow-x:auto}.synthesis table{border-collapse:collapse;width:100%;min-width:1100px;font-size:12px}.synthesis th,.synthesis td{border:1px solid var(--border);padding:10px;vertical-align:top;text-align:left}.synthesis th{background:var(--subtle)}.synthesis td a{display:block;margin-top:5px;font-size:10px;overflow-wrap:anywhere}.ref-id{font-size:10px;color:var(--muted);overflow-wrap:anywhere}.synthesis code{font-size:11px;overflow-wrap:anywhere}@media(max-width:520px){.synthesis{padding:16px}}\n'''
s=s.replace('</style>',css+'</style>',1)
report.write_text(s)
print(f'Postprocessed {len(refs)} cards; {report.stat().st_size/1024/1024:.2f} MiB')
