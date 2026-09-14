import json,pathlib,collections
p=pathlib.Path(__file__).parent
x=json.loads((p/'references.json').read_text()); refs=x['references']; ids=[r['id'] for r in refs]
assert len(ids)==len(set(ids)), 'Duplicate ids'
assert x['module']=='07-share-with-participants'
assert len(x['questions'])==6
assert all(q['answer'] for q in x['questions'])
assert all(r['selected'] is False and r['images'] and len(r['images'])<=8 for r in refs)
assert all(r['question'] in {q['id'] for q in x['questions']} for r in refs)
assert all(r['source'] in ['refero','mobbin'] for r in refs)
groups=collections.defaultdict(set)
for r in refs: groups[(r['app'].lower(),r['question'])].add(r['source'])
assert all(len(s)==1 for s in groups.values())
m=json.loads((p/'assets/manifest.json').read_text())
assert all(len(m[r['id']])==len(r['images']) and all(a and (p/'assets'/a).is_file() for a in m[r['id']]) for r in refs)
assert 1<=sum(r['counter_example'] for r in refs)<=3
print(json.dumps({'references':len(refs),'products':len(set(r['app'] for r in refs)),'per_question':dict(collections.Counter(r['question'] for r in refs)),'counter_examples':sum(r['counter_example'] for r in refs)},indent=2))
