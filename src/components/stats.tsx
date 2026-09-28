import { NumberTicker } from "../ui/number-ticker";
import { BlurFade } from "../ui/blur-fade";

const stats = [
  { value: 19, suffix: "+", label: "Years of craft behind the studio" },
  { value: 40, suffix: "+", label: "Projects shipped with AI pipelines" },
  { value: 12, suffix: "×", label: "Faster turnaround vs. traditional" },
  { value: 98, suffix: "%", label: "Clients who return for round two" },
];

export function Stats() {
  return (
    <section
      aria-label="Studio statistics"
      className="border-y border-[var(--ks-line)] bg-[var(--ks-surface)]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-6 py-12 md:py-16 lg:grid-cols-4">
        {stats.map((s, i) => (
          <BlurFade key={s.label} delay={i * 0.06} className="text-center">
            <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              <NumberTicker value={s.value} />
              <span className="text-gradient">{s.suffix}</span>
            </p>
            <p className="mx-auto mt-3 max-w-[180px] text-sm text-[var(--ks-muted)]">
              {s.label}
            </p>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}