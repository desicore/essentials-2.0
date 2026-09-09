#!/usr/bin/env node
// Minimal MCP Streamable-HTTP client for the Refero MCP server.
// Usage:
//   node refero-mcp.mjs list
//   node refero-mcp.mjs call <toolName> '<jsonArgs>'
//   node refero-mcp.mjs raw <toolName> '<jsonArgs>'   (prints raw result including content wrappers)

const URL_ = process.env.REFERO_MCP_URL || 'https://api.refero.design/mcp';
const TOKEN = process.env.REFERO_MCP_TOKEN || 'mcp-PDxhiuUk5Oozfz9x';

let sessionId = null;
let nextId = 1;

function headers(extra = {}) {
  const h = {
    Accept: 'application/json, text/event-stream',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
    ...extra,
  };
  if (sessionId) h['mcp-session-id'] = sessionId;
  return h;
}

async function parseBody(res) {
  const ct = res.headers.get('content-type') || '';
  const text = await res.text();
  if (!text.trim()) return null;
  if (ct.includes('text/event-stream')) {
    const messages = [];
    for (const block of text.split(/\n\n+/)) {
      const data = block
        .split('\n')
        .filter((l) => l.startsWith('data:'))
        .map((l) => l.slice(5).trim())
        .join('\n');
      if (!data) continue;
      try { messages.push(JSON.parse(data)); } catch { /* ignore */ }
    }
    return messages.length === 1 ? messages[0] : messages;
  }
  try { return JSON.parse(text); } catch { return { raw: text }; }
}

async function rpc(method, params, { notify = false } = {}) {
  const body = { jsonrpc: '2.0', method };
  if (params !== undefined) body.params = params;
  if (!notify) body.id = nextId++;
  const res = await fetch(URL_, { method: 'POST', headers: headers(), body: JSON.stringify(body) });
  const sid = res.headers.get('mcp-session-id');
  if (sid) sessionId = sid;
  if (notify) {
    if (!res.ok && res.status !== 202) {
      const t = await res.text();
      throw new Error(`HTTP ${res.status} on ${method}: ${t.slice(0, 500)}`);
    }
    return null;
  }
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`HTTP ${res.status} on ${method}: ${t.slice(0, 500)}`);
  }
  const parsed = await parseBody(res);
  const msg = Array.isArray(parsed) ? parsed.find((m) => m && m.id === body.id) || parsed[parsed.length - 1] : parsed;
  if (msg && msg.error) throw new Error(`RPC error on ${method}: ${JSON.stringify(msg.error)}`);
  return msg ? msg.result : null;
}

async function init() {
  await rpc('initialize', {
    protocolVersion: '2025-03-26',
    capabilities: {},
    clientInfo: { name: 'refero-mcp-cli', version: '0.1.0' },
  });
  await rpc('notifications/initialized', undefined, { notify: true });
}

function unwrap(result) {
  // Tool results usually come as { content: [{type:'text', text:'...json...'}], structuredContent? }
  if (result && result.structuredContent) return result.structuredContent;
  if (result && Array.isArray(result.content)) {
    const texts = result.content.filter((c) => c.type === 'text').map((c) => c.text);
    if (texts.length === 1) {
      try { return JSON.parse(texts[0]); } catch { return texts[0]; }
    }
    return texts.map((t) => { try { return JSON.parse(t); } catch { return t; } });
  }
  return result;
}

async function main() {
  const [cmd, tool, argsJson] = process.argv.slice(2);
  if (!cmd) {
    console.error('usage: refero-mcp.mjs list | call <tool> <jsonArgs> | raw <tool> <jsonArgs>');
    process.exit(2);
  }
  await init();
  if (cmd === 'list') {
    const r = await rpc('tools/list', {});
    console.log(JSON.stringify(r, null, 2));
    return;
  }
  if (cmd === 'call' || cmd === 'raw') {
    const args = argsJson ? JSON.parse(argsJson) : {};
    const r = await rpc('tools/call', { name: tool, arguments: args });
    console.log(JSON.stringify(cmd === 'raw' ? r : unwrap(r), null, 2));
    return;
  }
  console.error('unknown command', cmd);
  process.exit(2);
}

main().catch((e) => { console.error(String(e.stack || e)); process.exit(1); });
