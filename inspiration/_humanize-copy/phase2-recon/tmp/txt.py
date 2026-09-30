import sys,re
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s): super().__init__(); s.out=[]; s.skip=0; s.imgs=0
    def handle_starttag(s,t,a):
        if t in('style','script'): s.skip+=1
        if t=='img': s.imgs+=1
    def handle_endtag(s,t):
        if t in('style','script'): s.skip-=1
    def handle_data(s,d):
        if not s.skip:
            d=' '.join(d.split())
            if d: s.out.append(d)
p=P(); p.feed(open(sys.argv[1]).read())
open(sys.argv[2],'w').write('\n'.join(p.out)+'\n')
print(sys.argv[1].split('/')[-1],'imgs',p.imgs,'words',sum(len(x.split()) for x in p.out))
