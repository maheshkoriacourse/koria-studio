# Koria Studio

**We build brands with AI.** — a premium AI-native creative-studio site.

Dark-first design with an elegant light-mode toggle, animated gradient hero,
Magic UI-inspired reveals, and a 4/8/16/24/48 spacing rhythm. Built as a
static Vite + React 18 + Tailwind CSS 4 single-page site (no backend).

**Live:** https://maheshkoriacourse.github.io/koria-studio/

## Proof

| Gate | Result |
| --- | --- |
| Build | `tsc && vite build` — zero errors |
| Lighthouse | Performance **99** · Accessibility **100** · Best-Practices **100** · SEO **100** (`lighthouse.json`) |
| Load (simulated Slow-4G, Lighthouse median) | LCP **1957 ms**, FCP 1357 ms, CLS 0.000, TBT 20 ms |
| Breakpoints | Verified at 375 / 768 / 1280 px (`screenshots/`) |
| Interactions | FAQ accordion, theme toggle, mobile menu — pass with zero console errors |
| Page weight | ~105 KB gzipped (JS 98 KB + CSS 7 KB) + 72 KB self-hosted fonts |

## Stack & provenance

- Vite 6 + React 18 + Tailwind CSS 4 (CSS-first `@theme` tokens)
- Magic UI component patterns (MIT) ported into `src/ui/*` — see `LICENSES.md`
- Design tokens in `DESIGN.md` → implemented in `src/theme.css`
- Fonts: Sora + Inter (OFL), self-hosted woff2, preloaded

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # type-check + production build to dist/
npm run preview    # serve dist/
```

## Deploy

GitHub Pages via the `gh-pages` branch (workflow in `.github/workflows/`).
Deployed automatically on push to `main`.

## Structure

```
src/
  theme.css          # design tokens + keyframes (DESIGN.md implementation)
  App.tsx            # section composition
  components/        # navbar, hero, services, work, process, stats,
                     # testimonials, faq, contact-cta, footer, logo
  ui/                # ported Magic UI patterns + accordion + theme-toggle
scripts/
  verify.mjs         # screenshot + interaction verification (375/768/1280)
  fetch-fonts.mjs    # one-time font self-hosting helper
```