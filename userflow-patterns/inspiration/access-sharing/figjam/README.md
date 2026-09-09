# FigJam node map — Access, roles & sharing (internal board)

Board: https://www.figma.com/board/tN2AM7RZD2InF1LYnN0zcn/Essentials-2.0---Inspiration
Sections: Q1 `6:7` · Q2 `6:8` · Q3 `6:9` · Q4 `6:10` · Q5 `6:11` · Q6 `6:12` (see `../sections.json`).

`results-<n>.jsonl` = one line per uploaded image: `name` is `r<rowIndex>_i<imageIndex>` (row index into
`../board-plan.json` → `rows`), `body.placedOnNodeId` is the FigJam node id. Use this to find a reference's
nodes on the board (e.g. to crop, select, or move it to the client cut). `fix-webp.json` lists the 94 nodes
whose WebP fill was replaced with PNG.

Gotcha: Figma cannot read WebP image metadata (fill renders blank). Always convert to PNG before `upload_assets`.
