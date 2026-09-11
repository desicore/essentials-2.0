#!/usr/bin/env node
// Batch research runner: runs flow + screen searches per question, writes compact summaries.
// Usage: node refero-research.mjs <outDir>
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(here, 'refero-mcp.mjs');
const outDir = process.argv[2] || '/tmp/refero-research';
mkdirSync(outDir, { recursive: true });

function call(tool, args) {
  const out = execFileSync('node', [cli, 'call', tool, JSON.stringify(args)], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  return JSON.parse(out);
}

const Q = {
  Q1: {
    flows: ['magic link login without password', 'guest access without creating an account', 'single sign-on with Google or organization SSO to enter workspace', 'accept invitation and join workspace'],
    screens: ['continue as guest without account', 'sign in with SSO organization login', 'accept invite to join team'],
  },
  Q2: {
    flows: ['share a document with specific people and set permission', 'share course with a group of students', 'share video recording with a person view or edit permission', 'invite people to a project with specific access'],
    screens: ['share dialog add people with can view can edit', 'share settings restricted access specific people', 'share with group or team permission'],
  },
  Q3: {
    flows: ['import users from CSV file', 'bulk invite team members', 'sync users from directory SCIM', 'create group or cohort of students'],
    screens: ['import CSV users mapping columns', 'bulk invite members paste emails', 'user groups management admin', 'LMS integration roster sync'],
  },
  Q4: {
    flows: ['change member role owner admin member', 'manage team roles and permissions', 'custom role permissions matrix'],
    screens: ['roles and permissions settings owner admin member guest', 'permission matrix checkboxes granular permissions', 'change role dropdown member list admin'],
  },
  Q5: {
    flows: ['share link with expiration date', 'schedule publish and unpublish content', 'revoke shared link access', 'view only link sharing'],
    screens: ['link expiration settings share link', 'schedule publish date content', 'revoke access remove link', 'public link anyone with the link can view'],
  },
  Q6: {
    flows: ['passkey sign in', 'forgot password reset flow', 'login with email code one time password', 'sign in with SSO enterprise'],
    screens: ['passkey login', 'password reset email sent', 'enter verification code sent to email', 'account recovery options'],
  },
};

function short(s, n = 220) { return (s || '').replace(/\s+/g, ' ').slice(0, n); }

for (const [q, { flows, screens }] of Object.entries(Q)) {
  const lines = [];
  for (const query of flows) {
    lines.push(`\n=== FLOWS: ${query}`);
    try {
      const r = call('refero_search_flows', { query, platform: 'web', response_format: 'json' });
      lines.push(`(total ${r.pagination?.total_count})`);
      for (const rec of r.records || []) {
        lines.push(`F#${rec.id} | ${rec.site?.name} (${rec.site?.domain}) | ${rec.name} | ${rec.screens_count} steps | ${short(rec.description, 260)}`);
        lines.push(`   steps: ${(rec.steps || []).join(' > ')}`);
      }
    } catch (e) { lines.push(`ERR ${String(e).slice(0, 200)}`); }
  }
  for (const query of screens) {
    lines.push(`\n=== SCREENS: ${query}`);
    try {
      const r = call('refero_search_screens', { query, platform: 'web', response_format: 'json' });
      lines.push(`(total ${r.pagination?.total_count})`);
      for (const rec of r.records || []) {
        lines.push(`S ${rec.uuid} | ${rec.site?.name} (${rec.site?.domain}) | ${rec.page_url} | ux: ${(rec.ux_patterns || []).join(',')} | pt: ${(rec.page_types || []).join(',')} | ${short(rec.content?.description, 200)}`);
      }
    } catch (e) { lines.push(`ERR ${String(e).slice(0, 200)}`); }
  }
  writeFileSync(path.join(outDir, `${q}.txt`), lines.join('\n'));
  console.log(`${q}: wrote ${lines.length} lines`);
}
