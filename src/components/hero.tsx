// Section anatomy (hero / grid / gallery / timeline / FAQ / CTA / footer)
// studied from shadcn-landing-page (MIT, (c) 2024 Leopoldo Miranda) and
// launch-ui (MIT, (c) 2024 Mikolaj Dobrucki); reimplemented with Koria tokens.
import { BlurFade } from "../ui/blur-fade";
import { AuroraText } from "../ui/aurora-text";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Ambient mesh background (DESIGN.md §5) */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="ks-grid-lines absolute inset-0" />
        <div
          className="animate-drift-a absolute -top-32 left-1/2 -z-10 h-[420px] w-[680px] -translate-x-[70%] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #a78bfa, transparent)",
          }}
        />
        <div
          className="animate-drift-b absolute -top-20 right-0 -z-10 h-[380px] w-[560px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #22d3ee, transparent)",
          }}
        />
        <div
          className="animate-drift-a absolute top-40 left-0 -z-10 h-[320px] w-[420px] rounded-full opacity-15 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, #f0abfc, transparent)",
          }}
        />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-24 text-center sm:pt-28 sm:pb-32">
        <BlurFade>
          <p className="inline-flex items-center gap-2 rounded-full border border-[var(--ks-line)] bg-[var(--ks-surface)]/60 px-4 py-1.5 text-[13px] font-medium text-[var(--ks-muted)] backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--ks-success)] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--ks-success)]" />
            </span>
            Booking new projects for Q4
          </p>
        </BlurFade>

        <BlurFade delay={0.1}>
          <h1
            id="hero-title"
            className="font-display mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl"
          >
            We build brands
            <br />
            with <AuroraText>AI.</AuroraText>
          </h1>
        </BlurFade>

        <BlurFade delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--ks-muted)] sm:text-lg">
            Koria Studio is an AI-native creative studio. We ship cinematic
            video, production-grade web apps, data products and automation that
            make brands move faster than their competition.
          </p>
        </BlurFade>

        <BlurFade delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="font-display inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#22d3ee] px-8 text-[15px] font-semibold text-[#0b0b12] shadow-[0_8px_30px_rgba(167,139,250,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              Start a project
            </a>
            <a
              href="#work"
              className="font-display inline-flex h-12 items-center justify-center rounded-full border border-[var(--ks-line)] bg-[var(--ks-surface)] px-8 text-[15px] font-semibold transition-colors duration-200 hover:border-[var(--ks-brand)] hover:text-[var(--ks-brand-ink)]"
            >
              See our work
            </a>
          </div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <p className="mt-12 text-xs tracking-wide text-[var(--ks-muted)] uppercase">
            Trusted by founders &amp; teams in Mumbai, Bengaluru &amp; Dubai
          </p>
        </BlurFade>
      </div>
    </section>
  );
}