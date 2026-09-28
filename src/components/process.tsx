import { BlurFade } from "../ui/blur-fade";

const steps = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    desc: "Brand audit, audience mapping and a sharp problem statement. We agree on the one number that proves this worked.",
  },
  {
    step: "02",
    title: "Design",
    duration: "Week 2–3",
    desc: "Concepts, scripts or system architecture — reviewed in loops of 48 hours so momentum never dies in a doc.",
  },
  {
    step: "03",
    title: "Build",
    duration: "Week 3–6",
    desc: "AI-accelerated production: edits, code, pipelines. You watch progress in a shared workspace, not status calls.",
  },
  {
    step: "04",
    title: "Launch & Learn",
    duration: "Week 6+",
    desc: "Ship, measure against the agreed metric, then iterate monthly. Every engagement ends with a handover, not a lock-in.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="mx-auto max-w-6xl px-6 py-12 md:py-24"
      aria-labelledby="process-title"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-[var(--ks-brand-ink)] uppercase">
          Process
        </p>
        <h2
          id="process-title"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Four steps, zero theatre
        </h2>
      </div>

      <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* vertical connector (mobile) / horizontal connector (desktop) */}
        <div
          aria-hidden="true"
          className="absolute top-4 left-[19px] h-[calc(100%-2rem)] w-px bg-[var(--ks-line)] lg:top-[19px] lg:left-0 lg:h-px lg:w-full"
        />
        {steps.map((s, i) => (
          <li key={s.step} className="relative">
            <BlurFade delay={i * 0.1}>
              <div className="flex gap-5 lg:flex-col lg:gap-0">
                <span className="font-display relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[var(--ks-brand)] bg-[var(--ks-background)] text-sm font-bold text-[var(--ks-brand-ink)]">
                  {s.step}
                </span>
                <div className="lg:mt-6">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-lg font-semibold">
                      {s.title}
                    </h3>
                    <span className="text-xs font-medium text-[var(--ks-muted)]">
                      {s.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ks-muted)]">
                    {s.desc}
                  </p>
                </div>
              </div>
            </BlurFade>
          </li>
        ))}
      </ol>
    </section>
  );
}