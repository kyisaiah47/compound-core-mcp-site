# ParseRail MCP site: Simple view review

Built on `main` on 2026-10-01. Blueprint: `compound-ops/standards/SIMPLE-VIEW-BLUEPRINT.md`.

## Truth map (2.A)

| Item | Source fact |
| --- | --- |
| Primary user | A person who uses Claude, Cursor or another MCP client and wants it to read documents. |
| Problem | The client has no tools to parse documents, extract fields or redact PII. |
| Input | No form. The first action is copying a setup: the `claude mcp add` command or the `mcpServers` entry (the install guide's own text, in `src/lib/install.ts`). |
| Output | The client gets the tools in `lib/captured.ts` `TOOLS`, captured from the package's own `tools/list`. |
| Free and paid | Pay per successful call; no subscription (`SOURCES` readme-pricing). One credit is `CREDIT_USD`. Per-call prices are `PRICES` from ParseRail's pricing.json. A key comes with 500 free credits (readme-setup). Account reads and the late-fee dataset are free. |
| Permissions | A ParseRail API key in `PARSERAIL_API_KEY`. The site itself has no account and no API routes. |
| Failure states | Calls are charged only on success. The site sends nothing. |
| Recovery | The new 404 page. |

How it differs from CiteRank: there is no check to run. The action card holds a client picker and the setup text to copy. The example is one tool from the captured tool list, explained in a sentence with its price, and its inputs behind a disclosure.

## Route inventory (2.E)

| Route | Treatment |
| --- | --- |
| `/` | Curated Simple: hero, setup card (client listbox + copy), one tool explained (tool listbox), what calls cost, next steps. The Console ledger stays in Console. |
| `/guides/install-parserail-mcp` | Readable adaptation: the guide's own sections in Simple chrome. |
| 404 | New `not-found.tsx` in both views. |
| `/llms.txt`, `/robots.txt`, `/sitemap.xml` | Unchanged. |

## Mechanics

`src/components/site-view/`: provider (`compound-core-mcp:view`, `compound-core-mcp:welcome-off`), welcome, footer view controls (also added to the Console footers), disclosure, themed listbox, copy control. `simple.css` maps the kit's `--sv-*` aliases onto this site's tokens.

## Verification

- `npx tsc --noEmit`, `npm run check` (register gate) and `npm run build` pass.
- `node scripts/verify-simple.mjs http://localhost:3313 compound-core-mcp-site`: 26 of 26. Welcome open, Escape, backdrop, footer reopen, suppression, URL override, parameter preservation, phone dialog fit, listbox keyboard and focus, inert collapsed disclosure, one header and footer with no overflow and no native select on 3 routes at 1440 and 390.
- Not verified: copying to the clipboard in a real browser session (the headless run does not grant clipboard permission).
