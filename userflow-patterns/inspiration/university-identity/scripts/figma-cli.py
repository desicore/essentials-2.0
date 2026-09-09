"""Bounded task-scoped access to the existing authorized Claude cloud Figma connector.

No config reads/edits, tokens, or auth flows. Result records contain only task output.
"""
import argparse, json, subprocess, mimetypes, urllib.request, urllib.error, concurrent.futures, tempfile, os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser()
parser.add_argument('prompt')
parser.add_argument('receipt')
parser.add_argument('--timeout',type=int,default=150)
parser.add_argument('--budget',default='5')
parser.add_argument('--upload-items',help='JSON ordered array: nodeId + relativePath. POST returned capabilities in memory, never save URLs.')
parser.add_argument('--upload-batch',type=int,help='Pass capabilities via private temporary file to resumable raw uploader; never persist them in research receipts.')
args=parser.parse_args()
prompt=(ROOT/args.prompt).read_text()
system='''You are the FigJam operator for the explicitly authorized university identity research board. Use ONLY the existing authenticated claude.ai Figma MCP connection, supported Figma tools, and Read for explicitly supplied local research/skill files. No other connector, agents, shell, configuration, credential extraction, authentication changes, messages, or new Figma files/pages. File tN2AM7RZD2InF1LYnN0zcn, destination existing Page 2 node 5:422. Preserve Page 1 node 0:1 absolutely. Before each use_figma call read mandatory figma-use and figma-use-figjam skills or applicable MCP skill resources. Follow canonical loaded-font recipe, await setCurrentPageAsync exactly once targeting 5:422 for writes, return ALL node IDs. No createImage/createImageAsync, no setPluginData, no closePlugin/notify, no async IIFE. Upload images only using upload_assets, target existing nodes with FIT and explicit nodeIds. Work incrementally, inspect errors before retry. User explicitly authorized all routine additions to Page 2 and image uploads; no extra approval needed. Do only the bounded prompt task. Return precise JSON only, preserving all requested tool result data and IDs. Never expose credentials. If requested upload submit URLs are returned, these are single-use tool-generated upload capabilities for the caller, not configuration credentials; return them only in the machine-readable result.'''
cmd=['/Users/danielbrassnyo/.local/bin/claude','-p','--no-session-persistence','--disable-slash-commands','--tools','ToolSearch,Read','--permission-prompts','none','--max-budget-usd',args.budget,'--output-format','json','--system-prompt',system,prompt]
try:
    r=subprocess.run(cmd,capture_output=True,text=True,timeout=args.timeout,cwd=ROOT)
    raw=json.loads(r.stdout)
    if isinstance(raw,list): raw=next((x for x in reversed(raw) if x.get('type')=='result'),{})
    result=raw.get('result','')
    try:
        stripped=result.strip()
        if stripped.startswith('```'): stripped=stripped.split('\n',1)[1].rsplit('```',1)[0].strip()
        elif '```json\n' in stripped: stripped=stripped.split('```json\n',1)[1].split('```',1)[0].strip()
        result=json.loads(stripped)
    except Exception: pass
    record={k:raw.get(k) for k in ['subtype','is_error','permission_denials','total_cost_usd']}
    if args.upload_batch is not None:
        if not isinstance(result,dict) or not isinstance(result.get('uploads'),list):
            record['result']={'error':'Expected structured uploads array; capability-containing result suppressed'}
        else:
            fd,tmp=tempfile.mkstemp(prefix='university-identity-upload-',suffix='.json')
            os.fchmod(fd,0o600)
            with os.fdopen(fd,'w') as f:json.dump(result,f)
            try:
                posted=subprocess.run(['node',str(ROOT/'scripts/figjam-upload-raw.mjs'),tmp,str(args.upload_batch)],capture_output=True,text=True,timeout=1800,cwd=ROOT)
                record['result']={'batch':args.upload_batch,'exit_code':posted.returncode,'sanitized_upload_log':posted.stdout,'capabilities_persisted':False}
                if posted.returncode:record['result']['error']='Raw uploader failed; inspect node-map status. Raw stderr suppressed.'
            finally:
                if os.path.exists(tmp):os.unlink(tmp)
    elif args.upload_items:
        items=json.loads((ROOT/args.upload_items).read_text())
        uploads=result.get('uploads',[]) if isinstance(result,dict) else []
        if len(uploads)!=len(items):
            record['result']={'error':'Upload URL count mismatch; capability-containing result suppressed','expected':len(items),'received':len(uploads)}
        else:
            def upload(pair):
                item,cap=pair
                target=cap.get('targetNodeId')
                if target and target!=item['nodeId']: return {**item,'error':'Target node mismatch; no POST'}
                path=(ROOT/item['relativePath']).resolve()
                if not path.is_relative_to(ROOT/'assets'):return {**item,'error':'Asset path outside research assets; no POST'}
                url=cap.get('submitUrl')
                if not isinstance(url,str) or not url.startswith('https://'):return {**item,'error':'Missing HTTPS submit URL; no POST'}
                try:
                    req=urllib.request.Request(url,data=path.read_bytes(),headers={'Content-Type':mimetypes.guess_type(path)[0] or 'application/octet-stream'},method='POST')
                    with urllib.request.urlopen(req,timeout=70) as response:
                        body=json.loads(response.read())
                        safe={k:body[k] for k in ['imageHash','nodeId','targetNodeId','width','height','success'] if k in body}
                        return {**item,'httpStatus':response.status,'response':safe}
                except urllib.error.HTTPError as e:return {**item,'httpStatus':e.code,'error':'Upload HTTP failure; response suppressed'}
                except Exception as e:return {**item,'error':type(e).__name__+' during raw upload; no retry attempted'}
            with concurrent.futures.ThreadPoolExecutor(max_workers=4) as ex:
                outcomes=list(ex.map(upload,zip(items,uploads)))
            record['result']={'uploads':outcomes,'capabilities_persisted':False}
    else:
        record['result']=result
    target=ROOT/args.receipt;target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({'receipt':str(target.relative_to(ROOT)),'subtype':record['subtype'],'is_error':record['is_error'],'cost':record['total_cost_usd']}))
except subprocess.TimeoutExpired:
    print(json.dumps({'error':'CLI bounded timeout','seconds':args.timeout,'next_action':'Reinspect page before any retry; MCP may have completed.'}))
