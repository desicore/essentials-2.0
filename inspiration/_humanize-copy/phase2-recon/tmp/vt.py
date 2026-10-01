import sys,re
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s):
        super().__init__();s.skip=0;s.out=[]
    def handle_starttag(s,t,a):
        if t in('style','script'):s.skip+=1
        if t=='img':s.out.append('[IMG]')
    def handle_endtag(s,t):
        if t in('style','script'):s.skip-=1
        if t in('p','div','li','h1','h2','h3','article','section','tr','th','td','figcaption','label','option','button','summary'):s.out.append('\n')
    def handle_data(s,d):
        if not s.skip:s.out.append(d)
h=open(sys.argv[1],encoding='utf8').read()
p=P();p.feed(h)
t=re.sub(r'data:[^"\')\s]+','',''.join(p.out))
lines=[re.sub(r'\s+',' ',l).strip() for l in t.split('\n')]
print('\n'.join(l for l in lines if l))
