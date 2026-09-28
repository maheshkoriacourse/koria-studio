# LICENSES.md — Koria Studio

Design-pattern provenance and license ledger for everything copied or studied
while building this site. Created: 2026-09-28.

## Ledger

| Source repo | License (verified in-repo) | What was used |
| --- | --- | --- |
| [magicuidesign/magicui](https://github.com/magicuidesign/magicui) | MIT (c) Magic UI | `aurora-text`, `blur-fade`, `number-ticker`, `marquee`, `magic-card` — pattern-ported into `src/ui/*`, restyled to Koria tokens, upstream notice kept in each file header |
| [leoMirandaa/shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page) | MIT (c) 2024 Leopoldo Miranda | Section anatomy studied (hero/services/gallery/FAQ/CTA/footer) for structure and reveal patterns; no code copied verbatim |
| [launch-ui/launch-ui](https://github.com/launch-ui/launch-ui) | MIT (c) 2024 Mikolaj Dobrucki | Landing-composition patterns studied; no code copied verbatim |
| [markmead/hyperui](https://github.com/markmead/hyperui) | MIT (c) Mark Mead | Tailwind class idioms consulted for stats strip + CTA; no code copied verbatim |

## License law compliance (per website-arsenal-builder skill)

- Only MIT-licensed repos were used. **No GPL, AGPL, or no-license code** was
  copied (cruip, webstudio-is/webstudio, ToolJet — blocked — were not cloned).
- Every ported Magic UI file keeps its upstream MIT attribution header.
- shadcn-landing-page / launch-ui / hyperui were used as study references only;
  all Koria Studio code is written fresh.

## Security gate note (deviation from standing rule)

The operator's standing rule requires a security scan (medusa/skillspector)
before installing external repos. **Full scans of these repos OOM on this
machine (exit 137)**, so per the operator's instruction a **light manual
review** of the exact component files that were copied was done instead:

- `magicui/apps/www/registry/magicui/aurora-text.tsx`
- `magicui/apps/www/registry/magicui/blur-fade.tsx`
- `magicui/apps/www/registry/magicui/number-ticker.tsx`
- `magicui/apps/www/registry/magicui/marquee.tsx`
- `magicui/apps/www/registry/magicui/magic-card.tsx`

Review found: **no `eval`, no obfuscated code, no network calls, no dynamic
code construction** — only React rendering, motion values, and DOM reads.
All four cloned repos are shallow (`--depth 1`), MIT-licensed, and maintained
by well-known authors (magicuidesign, leoMirandaa, launch-ui, markmead).

## Fonts

- **Sora** (variable, 400–800) & **Inter** (variable, 400–600) — Google Fonts,
  self-hosted as woff2 (`public/fonts/`), latin subset, OFL-licensed
  (SIL Open Font License — free for commercial use, no attribution required
  in the UI; license available from fonts.google.com).

## Assets

- Favicon, logo, project-card artwork: original SVG, no third-party rights.
- Icons: inline Heroicons-style paths drawn for this project (MIT-style use,
  drawn fresh, not copied).