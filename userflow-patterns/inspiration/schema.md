# Inspiration reference JSON

The scripts consume a UTF-8 JSON object. A module contains questions and a flat
list of references. Keep IDs stable when changing annotations or selection.

```json
{
  "module": "access-sharing",
  "title": "Access, roles & sharing",
  "intro": "Optional introduction to this collection.",
  "questions": [
    { "id": "Q1", "title": "How can a guest enter?", "answer": "" }
  ],
  "references": [
    {
      "id": "mobbin:00000000-0000-4000-8000-000000000001",
      "source": "mobbin",
      "app": "Notion",
      "title": "Invite guests to a page",
      "kind": "flow",
      "url": "https://mobbin.com/",
      "images": [
        "https://picsum.photos/seed/guest-1/800/600",
        "https://picsum.photos/seed/guest-2/800/600"
      ],
      "question": "Q1",
      "take": "Invite someone directly from the content they need.",
      "counter_example": false,
      "selected": false,
      "crop": "0:100,80,400,300"
    }
  ]
}
```

## Module and questions

| Field | Type | Meaning |
| --- | --- | --- |
| `module` | string | Module slug, e.g. `access-sharing`. |
| `title` | string | Report title. Defaults to `Design references`. |
| `intro` | string, optional | Plain-text introductory paragraph. An empty value shows an intro prompt. |
| `questions` | array of objects | Each has unique string `id`, string `title`, and optional string `answer`. Empty answers are not rendered. |
| `references` | array of objects | Research references described below. |

Questions are sorted naturally by ID (`Q1`, `Q2`, …, `Q10`), regardless of input
order; references retain their input order within each question. All supplied
questions render, including those with no references. The stub copies the six
question titles from section 2 of `PLAN.md`. Asterisks around emphasis in question
titles render as emphasis; all other content is plain text, never executable HTML.

## References

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | string | Unique stable ID, normally `<source>:<uuid>`; both source prefixes are supported. |
| `source` | `"mobbin"` or `"refero"` | Source badge and source filter. |
| `app` | string | Product name. |
| `title` | string | Short description of the example. |
| `kind` | `"flow"` or `"screen"` | Flows show a horizontally scrolling sequence; screens show one image. |
| `url` | string | HTTP(S) link to the original reference. |
| `images` | array of strings | HTTP(S) image URLs. For flows, **one URL per step in order**. Screens should supply one URL. Downloads/embedding process all URLs even if a screen mistakenly lists several; the report shows only its first. |
| `question` | string | Must match a question's `id`. Unknown or missing IDs warn on stderr during report building and appear under Unassigned. |
| `take` | string | One line describing what this reference contributes to the question. |
| `counter_example` | boolean | `true` adds a red counter-example badge. |
| `selected` | boolean | `true` adds a subtle selection mark and includes the card when selected-only is enabled. |
| `crop` | string, optional | Empty/omitted means skip; otherwise `imageIndex:x,y,w,h` in pixels. |

## Crop and asset conventions

Image indices are **zero-based** and match positions in `images`. `0:100,80,400,300`
extracts a 400 × 300 rectangle beginning at x=100, y=80 from the first image.
All five numbers must be safe integers, index/x/y must be non-negative, and
width/height must be positive. No internal whitespace is allowed. The rectangle
must fit within the source's raw pixel dimensions (no automatic EXIF rotation or
resizing). Animated/multipage images use the first frame/page. Each reference
supports one crop note. Crop output is PNG; no crop means no output file.

`safe-id` is `encodeURIComponent(id)` with every period additionally encoded as
`%2E`. For example, `mobbin:abc` becomes `mobbin%3Aabc`; slashes and traversal
segments cannot become directories. Both scripts use the same function. Keep IDs
short enough for the operating system's filename limit.

`fetch-assets` determines extensions from HTTP Content-Type: JPEG (`jpg`), PNG,
WebP, GIF, AVIF, SVG, TIFF (`tif`), BMP, and ICO. Sharp crop support depends on the
format and its installed native build; unsupported formats fail with a message.

`manifest.json` maps original reference IDs to arrays of local paths **relative to
the manifest's directory**, preserving zero-based indices. A failed download is
`null`; a reference without images maps to `[]`:

```json
{
  "mobbin:abc": ["mobbin%3Aabc/0.jpg", "mobbin%3Aabc/1.png"]
}
```

## Tolerant reading and validation

Missing arrays become empty arrays; missing app/title/take/images/link values get
readable placeholders. Missing IDs use `reference-<1-based-row>` or `Q<1-based-row>`;
explicit IDs are strongly preferred. Missing/invalid source becomes `unknown`;
missing/invalid kind becomes `screen`. Only literal boolean `true` enables badges.
Invalid image entries keep their index and show an unavailable placeholder when
hotlinked; fetching or embedding them fails explicitly. Non-HTTP(S) links are not
rendered as links. Duplicate IDs, malformed JSON, a non-object root, and non-array
question/reference fields are errors. Input JSON is never modified.
