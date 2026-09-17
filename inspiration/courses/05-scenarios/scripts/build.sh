#!/bin/sh
set -eu
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/../../.." && pwd)
PIPE="$ROOT/userflow-patterns--user-mgmt/inspiration/scripts"
MOD="$ROOT/courses/05-scenarios"
node "$PIPE/build-report.mjs" "$MOD/references.json" --embed --assets "$MOD/assets/manifest.json" --out "$ROOT/courses/05-scenarios.html"
python3 "$MOD/scripts/postprocess.py"
