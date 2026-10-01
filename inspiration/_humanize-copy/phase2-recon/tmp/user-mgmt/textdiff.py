import re,sys,html
def txt(p):
    s=open(p,encoding='utf-8').read()
    s=re.sub(r'<style.*?</style>|<script.*?</script>','',s,flags=re.S)
    imgs=len(re.findall(r'<img\b',s))
    s=re.sub(r'data:[^"\')\s]+','DATA',s)
    s=re.sub(r'<[^>]+>','\n',s); s=html.unescape(s)
    lines=[re.sub(r'\s+',' ',l).strip() for l in s.split('\n')]
    return [l for l in lines if l],imgs
a,ia=txt(sys.argv[1]);b,ib=txt(sys.argv[2])
print('imgs',ia,ib,'lines',len(a),len(b),'words',sum(len(l.split()) for l in a))
import difflib
d=[l for l in difflib.unified_diff(a,b,lineterm='',n=0) if not l.startswith(('---','+++','@@'))]
print('difflines',len(d)); print('\n'.join(x[:200] for x in d[:20]))
