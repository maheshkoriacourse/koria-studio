import { BlurFade } from "../ui/blur-fade";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-12 md:py-24"
      aria-labelledby="contact-title"
    >
      <BlurFade>
        <div className="relative isolate overflow-hidden rounded-3xl border border-[var(--ks-line)] px-6 py-16 text-center sm:px-16 sm:py-20">
          {/* glow backdrop */}
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div
              className="absolute top-1/2 left-1/2 h-[340px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, #a78bfa, #22d3ee, transparent)",
              }}
            />
            <div className="ks-grid-lines absolute inset-0" />
          </div>

          <p className="text-sm font-semibold tracking-wide text-[var(--ks-brand-ink)] uppercase">
            Contact
          </p>
          <h2
            id="contact-title"
            className="font-display mx-auto mt-4 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl"
          >
            Let's build your brand with AI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--ks-muted)]">
            Tell us what you're launching. We'll reply within one working day
            with a plan, a price and a start date.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:studio@koria.studio?subject=Project%20inquiry"
              className="font-display inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#a78bfa] via-[#c084fc] to-[#22d3ee] px-8 text-[15px] font-semibold text-[#0b0b12] shadow-[0_8px_30px_rgba(167,139,250,0.35)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              studio@koria.studio
            </a>
            <a
              href="#top"
              className="font-display inline-flex h-12 items-center justify-center rounded-full border border-[var(--ks-line)] bg-[var(--ks-surface)] px-8 text-[15px] font-semibold transition-colors duration-200 hover:border-[var(--ks-brand)] hover:text-[var(--ks-brand-ink)]"
            >
              Book a discovery call
            </a>
          </div>
          <p className="mt-8 text-xs tracking-wide text-[var(--ks-muted)] uppercase">
            Mumbai · Bengaluru · Remote worldwide
          </p>
        </div>
      </BlurFade>
    </section>
  );
}