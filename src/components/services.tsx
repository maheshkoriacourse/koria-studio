import { MagicCard } from "../ui/magic-card";
import { BlurFade } from "../ui/blur-fade";

const services = [
  {
    title: "AI Video Production",
    desc: "Cinematic brand films, ad creatives and explainers — scripted, generated and edited with AI pipelines that cut turnaround from weeks to days.",
    tag: "From ₹75k / film",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5v3.75m0 3.75v-.75m-9-7.5h9m-9 3.75h9m-9 3.75h9M4.5 19.5h15a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 19.5 4.5h-15A1.5 1.5 0 0 0 3 6v12a1.5 1.5 0 0 0 1.5 1.5Z"
      />
    ),
  },
  {
    title: "Web Apps",
    desc: "Marketing sites, dashboards and full products built on modern stacks — fast, accessible and ready to scale from day one.",
    tag: "From ₹1.5L / build",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5a1.5 1.5 0 0 0 1.5-1.5V6.75A1.5 1.5 0 0 0 18.75 5.25H5.25a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5Z"
      />
    ),
  },
  {
    title: "Data Products",
    desc: "Investor decks, market reports and internal copilots — structured data turned into decision-grade products your team actually uses.",
    tag: "From ₹50k / product",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
      />
    ),
  },
  {
    title: "Automation",
    desc: "Lead flows, content pipelines and ops workflows wired together with AI agents — quietly removing hours of manual work every week.",
    tag: "From ₹40k / flow",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.7 5.55a4.5 4.5 0 0 1 3.6-1.8h5.4a4.5 4.5 0 0 1 3.6 1.8l2.1 2.7a4.5 4.5 0 0 1 .9 2.7m-18.9 3v2.25m19.5-5.25v2.25M6 18.75v1.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75v-1.5m9 0v1.5a.75.75 0 0 0 .75.75h.75a.75.75 0 0 0 .75-.75v-1.5"
      />
    ),
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-12 md:py-24"
      aria-labelledby="services-title"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-[var(--ks-brand-ink)] uppercase">
          Services
        </p>
        <h2
          id="services-title"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Four ways we make brands move
        </h2>
        <p className="mt-4 text-[var(--ks-muted)]">
          One studio, one roadmap: video earns the attention, the web app
          captures it, data sharpens the pitch, automation keeps it running.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => (
          <BlurFade key={s.title} delay={i * 0.08}>
            <MagicCard
              className="h-full rounded-2xl bg-[var(--ks-surface)]"
              gradientColor="rgba(167,139,250,0.10)"
            >
              <div className="flex h-full flex-col gap-4 p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-[var(--ks-line)] text-[var(--ks-brand-ink)]">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                  </span>
                  <span className="rounded-full bg-[color-mix(in_srgb,var(--ks-brand)_12%,transparent)] px-3 py-1 text-xs font-medium text-[var(--ks-brand-ink)]">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--ks-muted)]">
                  {s.desc}
                </p>
              </div>
            </MagicCard>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}