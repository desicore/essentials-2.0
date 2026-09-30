#!/usr/bin/env python3
"""Inline shortlist images and rewrite sibling report hrefs.

Standard library plus requests only. Substitutes src="..." and href="..."
via regex so the rest of the document is unchanged.
"""

from __future__ import annotations

import base64
import mimetypes
import re
import sys
import time
from pathlib import Path

import requests

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent
SRC = ROOT / "user-manager-shortlist.html"
OUT = HERE / "01-user-manager-shortlist.html"

R1_NAME = "02-R1-access-roles-sharing.html"
R2_NAME = "03-R2-university-identity-directory-sync.html"

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/128.0.0.0 Safari/537.36"
)

MIME_BY_EXT = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".avif": "image/avif",
    ".bmp": "image/bmp",
    ".ico": "image/x-icon",
}

MAGIC = [
    (b"\x89PNG\r\n\x1a\n", "image/png"),
    (b"\xff\xd8\xff", "image/jpeg"),
    (b"RIFF", "image/webp"),  # refined below
    (b"GIF87a", "image/gif"),
    (b"GIF89a", "image/gif"),
    (b"<svg", "image/svg+xml"),
    (b"<?xml", "image/svg+xml"),
]


def sniff_mime(data: bytes, hint: str | None, url_or_path: str) -> str:
    if hint and hint.startswith("image/") and hint != "image/octet-stream":
        return hint.split(";")[0].strip()
    ext = Path(url_or_path.split("?", 1)[0]).suffix.lower()
    if ext in MIME_BY_EXT:
        return MIME_BY_EXT[ext]
    if data.startswith(b"RIFF") and b"WEBP" in data[:16]:
        return "image/webp"
    for magic, mime in MAGIC:
        if data.startswith(magic):
            return mime
    guessed, _ = mimetypes.guess_type(url_or_path)
    if guessed:
        return guessed
    return "application/octet-stream"


def data_uri(data: bytes, mime: str) -> str:
    b64 = base64.b64encode(data).decode("ascii")
    return f"data:{mime};base64,{b64}"


def referer_for(url: str) -> str:
    if "mobbin.com" in url:
        return "https://mobbin.com/"
    if "refero.design" in url:
        return "https://refero.design/"
    return "https://www.google.com/"


def download(url: str) -> bytes:
    headers = {
        "User-Agent": UA,
        "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        "Referer": referer_for(url),
    }
    last_err: Exception | None = None
    for attempt in range(3):  # initial try + 2 retries
        try:
            resp = requests.get(url, headers=headers, timeout=30, allow_redirects=True)
            resp.raise_for_status()
            if not resp.content:
                raise ValueError("empty body")
            return resp.content, resp.headers.get("Content-Type")
        except Exception as exc:  # noqa: BLE001 — collect and retry
            last_err = exc
            time.sleep(0.6 * (attempt + 1))
    raise last_err  # type: ignore[misc]


def main() -> int:
    html = SRC.read_text(encoding="utf-8")
    cache: dict[str, str] = {}
    failures: list[str] = []
    inlined_rel = 0
    inlined_http = 0

    def replace_src(match: re.Match[str]) -> str:
        nonlocal inlined_rel, inlined_http
        src = match.group(1)
        if src in cache:
            if src.startswith("university-identity/assets/"):
                inlined_rel += 1
            elif src.startswith("https://mobbin.com/") or src.startswith(
                "https://images.refero.design/"
            ):
                inlined_http += 1
            return f'src="{cache[src]}"'
        if src.startswith("university-identity/assets/"):
            path = ROOT / src
            if not path.is_file():
                failures.append(f"missing file {src}")
                return match.group(0)
            data = path.read_bytes()
            mime = sniff_mime(data, None, src)
            uri = data_uri(data, mime)
            cache[src] = uri
            inlined_rel += 1
            return f'src="{uri}"'
        if src.startswith("https://mobbin.com/") or src.startswith(
            "https://images.refero.design/"
        ):
            try:
                data, ctype = download(src)
            except Exception as exc:  # noqa: BLE001
                failures.append(f"{src} ({exc})")
                cache[src] = src
                return match.group(0)
            mime = sniff_mime(data, ctype, src)
            uri = data_uri(data, mime)
            cache[src] = uri
            inlined_http += 1
            return f'src="{uri}"'
        return match.group(0)

    def replace_href(match: re.Match[str]) -> str:
        href = match.group(1)
        if href.startswith("tmp/report-hotlink.html"):
            rest = href[len("tmp/report-hotlink.html") :]  # may be "" or "#frag"
            return f'href="{R1_NAME}{rest}"'
        if href.startswith("university-identity/report.html"):
            rest = href[len("university-identity/report.html") :]
            return f'href="{R2_NAME}{rest}"'
        return match.group(0)

    html = re.sub(r'src="([^"]*)"', replace_src, html)
    html = re.sub(r'href="([^"]*)"', replace_href, html)
    OUT.write_text(html, encoding="utf-8")

    print(f"wrote {OUT}")
    print(f"inlined relative images: {inlined_rel}")
    print(f"inlined http images: {inlined_http}")
    print(f"unique cached srcs: {len(cache)}")
    print(f"failures: {len(failures)}")
    for item in failures:
        print(f"FAIL {item}")
    return 0 if True else 1


if __name__ == "__main__":
    sys.exit(main())
