import { MagicCard } from "../ui/magic-card";
import { BlurFade } from "../ui/blur-fade";

interface WorkItem {
  title: string;
  kind: string;
  year: string;
  desc: string;
  palette: [string, string];
  glyph: React.ReactNode;
}

const work: WorkItem[] = [
  {
    title: "NextPlay Kids",
    kind: "Brand + pitch site",
    year: "2026",
    desc: "Investor brand and conversion site for an AI-powered kids' learning platform.",
    palette: ["#a78bfa", "#6d28d9"],
    glyph: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 12h8m-4-4v8m7-8a5 5 0 0 0-10 0 5 5 0 0 0-5 5 5 5 0 0 0 5 5h10a5 5 0 0 0 5-5 5 5 0 0 0-5-5Z"
      />
    ),
  },
  {
    title: "SVASTA",
    kind: "Brand identity",
    year: "2025",
    desc: "Premium travel identity system — logo, palette, print and launch reel.",
    palette: ["#22d3ee", "#0e7490"],
    glyph: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13 3 6h-6l3-6Z"
      />
    ),
  },
  {
    title: "Memory OS",
    kind: "Poster series",
    year: "2026",
    desc: "Seven-layer memory architecture rendered as a collectible tech poster set.",
    palette: ["#f0abfc", "#a21caf"],
    glyph: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h16M4 12h16M4 17h10m6-15v20M9 2v20"
      />
    ),
  },
  {
    title: "Hermes Evolution",
    kind: "Product page",
    year: "2026",
    desc: "Long-form evolution chronicle page with timeline UI and live telemetry cards.",
    palette: ["#a78bfa", "#22d3ee"],
    glyph: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7Z"
      />
    ),
  },
  {
    title: "Investor Deck",
    kind: "Data product",
    year: "2025",
    desc: "30-slide dark-theme deck system with generated charts and narrative arc.",
    palette: ["#c084fc", "#7c3aed"],
    glyph: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3v18h18M7 15l3-4 3 3 5-7"
      />
    ),
  },
  {
    title: "Filmcraft Pipeline",
    kind: "AI production",
    year: "2026",
    desc: "Script-to-screen AI film pipeline: 30-second productions in under a day.",
    palette: ["#22d3ee", "#f0abfc"],
    glyph: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.75 10.5 4.5-2.5v8l-4.5-2.5v3.75a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v4.5Z"
      />
    ),
  },
];

function Thumb({ item }: { item: WorkItem }) {
  const [from, to] = item.palette;
  return (
    <div
      aria-hidden="true"
      className="relative flex h-44 items-center justify-center overflow-hidden rounded-t-[inherit]"
      style={{
        background: `linear-gradient(135deg, color-mix(in srgb, ${from} 20%, var(--ks-surface)), color-mix(in srgb, ${to} 16%, var(--ks-surface)))`,
      }}
    >
      <div
        className="absolute -top-10 -right-10 h-36 w-36 rounded-full opacity-30 blur-2xl"
        style={{ background: from }}
      />
      <div
        className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full opacity-25 blur-2xl"
        style={{ background: to }}
      />
      <svg
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="none"
        stroke="url(#ks-work-g)"
        strokeWidth="1.2"
        className="relative"
      >
        <defs>
          <linearGradient id="ks-work-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={from} />
            <stop offset="1" stopColor={to} />
          </linearGradient>
        </defs>
        {item.glyph}
      </svg>
      <span className="absolute bottom-3 left-4 rounded-full bg-[#0b0b12]/70 px-2.5 py-1 text-[11px] font-medium text-white/80 backdrop-blur">
        {item.kind}
      </span>
    </div>
  );
}

export function Work() {
  return (
    <section
      id="work"
      className="mx-auto max-w-6xl px-6 py-12 md:py-24"
      aria-labelledby="work-title"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[var(--ks-brand-ink)] uppercase">
            Selected work
          </p>
          <h2
            id="work-title"
            className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Proof, not promises
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[var(--ks-muted)]">
          A slice of recent builds across video, web, data and automation —
          every project shipped with the same bar: cinematic quality, measured
          results.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item, i) => (
          <BlurFade key={item.title} delay={(i % 3) * 0.08}>
            <MagicCard
              className="h-full rounded-2xl bg-[var(--ks-surface)]"
              gradientColor="rgba(167,139,250,0.10)"
            >
              <article className="flex h-full flex-col">
                <Thumb item={item} />
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <span className="text-xs text-[var(--ks-muted)]">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--ks-muted)]">
                    {item.desc}
                  </p>
                </div>
              </article>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}