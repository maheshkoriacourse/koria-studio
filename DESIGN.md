# DESIGN.md — Koria Studio

> Token-first spec. Written before any page code, per the website-arsenal build
> rules. All spacing, radius, type and motion values below are the single source
> of truth; `src/theme.css` implements them 1:1 as Tailwind v4 `@theme` tokens.
> Base rhythm: **4 / 8 / 16 / 24 / 48 px** (scale: `space-1`…`space-5`).
> Derived sizes (12, 32, 64, 96) are compositions of the base rhythm.

## 1. Brand

| Token | Value | Notes |
| --- | --- | --- |
| `--color-brand` | `#a78bfa` | Violet-400 — primary brand accent |
| `--color-brand-strong` | `#c084fc` | Purple-400 — hover / emphasis |
| `--color-accent` | `#22d3ee` | Cyan-400 — secondary accent, links |
| `--color-accent-2` | `#f0abfc` | Fuchsia-300 — tertiary, gradients |
| `--color-success` | `#34d399` | Emerald-400 — availability dot, positive deltas |

Gradient recipe for display type and glow orbs:
`linear-gradient(135deg, #a78bfa, #22d3ee 50%, #f0abfc)`.

## 2. Type

- Display: **Sora** (600–800), tight tracking, generous line-height (1.1).
- Body/UI: **Inter** (400–600), relaxed line-height (1.6).
- Google Fonts: Sora + Inter, loaded with `display=swap` + preconnect.
- Scale (px, mobile → desktop):
  - Hero display: 40 → 72 (mobile → 1280)
  - Section title: 30 → 44
  - Eyebrow: 12–13, uppercase, 0.1em tracking
  - Body: 16; small: 14
- Fluid sizing via Tailwind `clamp()`-free steps: `text-4xl sm:text-5xl md:text-7xl`.

## 3. Spacing rhythm (4 / 8 / 16 / 24 / 48)

| Token | px | Use |
| --- | --- | --- |
| `space-1` | 4 | Icon gaps, chip padding |
| `space-2` | 8 | Inline gaps, chip padding-y |
| `space-3` | 16 | Card padding, list gaps |
| `space-4` | 24 | Card padding-lg, grid gaps |
| `space-5` | 48 | Section vertical rhythm (`py-12 md:py-24` = 48/96 composed) |

Section vertical padding: 48px on mobile, 96px on desktop (48 × 2).

## 4. Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius-md` | 8px | Chips, inputs, small buttons |
| `radius-lg` | 12px | Cards, thumbnails |
| `radius-xl` | 16px | Feature cards, modals |
| `radius-2xl` | 24px | Hero panels, big cards |
| `radius-full` | 9999px | Pills, avatars, toggles |

## 5. Elevation & surfaces

- **Dark (default):** bg `#05050a`, surface `#0b0b12`, line `#1c1c28`.
- **Light:** bg `#fafaff`, surface `#ffffff`, line `#e5e7f2`.
- Shadows: soft ambient `0 8px 30px rgba(2, 6, 23, 0.35)` (dark only);
  light mode uses 1px hairline borders + faint tinted shadows.
- Hero glow orbs: large blurred radial blobs (brand/accent), `blur-3xl`,
  20–30% opacity, GPU-animated slow drift.

## 6. Motion

- Durations: micro 150ms, standard 250ms, reveal 400–700ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint feel).
- Reveal pattern: `BlurFade` (opacity + 6px y-offset + blur 6px), staggered
  0.08–0.12s per item, triggered once at 50% in-view.
- Hero aurora text: 10s looping gradient sweep (Magic UI AuroraText pattern).
- Ambient mesh: 18–24s eased drift on absolutely-positioned blurred blobs;
  `prefers-reduced-motion` → all animation off, content visible.
- Marquee logos: 30s linear loop, pause on hover, duplicated track ×2.

## 7. Components inventory (source provenance — see LICENSES.md)

- AuroraText, BlurFade, NumberTicker, Marquee, MagicCard — Magic UI (MIT),
  copied into `src/ui/`, restyled to these tokens, upstream notice kept.
- Section anatomy (hero / grid / gallery / timeline / FAQ / CTA / footer) —
  patterns studied from shadcn-landing-page (MIT) and launch-ui (MIT).
- Accordion + Toggle group semantics — shadcn/ui-style (MIT) reimplemented
  locally (no Radix dependency; controlled React state).
- HyperUI (MIT) consulted for Tailwind class idioms on stats strip + CTA.

## 8. Accessibility

- Contrast: body text ≥ 4.5:1 in both themes; brand text on dark uses 400-level
  tints; never raw 300-level on white.
- Focus: 2px `--color-accent` focus ring, 2px offset, visible on all
  interactive elements.
- Hit areas ≥ 44px; aria-labels on icon-only controls; FAQ uses
  `button[aria-expanded]` + region pattern.
- `prefers-reduced-motion` honored globally.