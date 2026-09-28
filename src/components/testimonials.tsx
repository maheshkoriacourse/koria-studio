import { Marquee } from "../ui/marquee";
import { BlurFade } from "../ui/blur-fade";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
  hue: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Koria Studio rebuilt our investor narrative end to end — deck, site and launch film. We closed our seed round in six weeks with material we were proud to send.",
    name: "Ananya Rao",
    role: "Founder, NextPlay Kids",
    initials: "AR",
    hue: "#a78bfa",
  },
  {
    quote:
      "The brand system landed with zero rework. Identity, print and motion all spoke the same language — our launch reel hit 40k organic views in week one.",
    name: "Karthik Menon",
    role: "Director, SVASTA",
    initials: "KM",
    hue: "#22d3ee",
  },
  {
    quote:
      "They wired our content pipeline with AI agents and quietly removed ~10 hours of manual work a week. The ROI conversation took one meeting.",
    name: "Priya Deshmukh",
    role: "Head of Growth, Meridian Labs",
    initials: "PD",
    hue: "#f0abfc",
  },
];

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col gap-5 rounded-2xl border border-[var(--ks-line)] bg-[var(--ks-surface)] p-6 sm:w-[420px]">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-[var(--ks-brand-ink)] opacity-70"
      >
        <path
          d="M7.5 5C4.5 6.5 3 9 3 12.2c0 2.7 1.6 4.3 3.6 4.3 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-2.9-2.9-2.9-.3 0-.6 0-.8.1.3-1.6 1.5-3 3.2-3.9L7.5 5Zm9 0c-3 1.5-4.5 4-4.5 7.2 0 2.7 1.6 4.3 3.6 4.3 1.8 0 3.1-1.3 3.1-3.1 0-1.7-1.2-2.9-2.9-2.9-.3 0-.6 0-.8.1.3-1.6 1.5-3 3.2-3.9L16.5 5Z"
          fill="currentColor"
        />
      </svg>
      <blockquote className="text-[15px] leading-relaxed">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        <span
          aria-hidden="true"
          className="font-display inline-flex size-10 items-center justify-center rounded-full text-sm font-bold text-[#0b0b12]"
          style={{ background: `linear-gradient(135deg, ${t.hue}, #ffffff33)` }}
        >
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold">{t.name}</span>
          <span className="block text-xs text-[var(--ks-muted)]">
            {t.role}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-6xl overflow-hidden px-6 py-12 md:py-24"
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-wide text-[var(--ks-brand-ink)] uppercase">
          Testimonials
        </p>
        <h2
          id="testimonials-title"
          className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
        >
          What partners say
        </h2>
      </div>

      <BlurFade delay={0.1}>
        <div className="mt-12 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Marquee pauseOnHover={true} className="py-2">
            <div className="flex gap-6 pr-6">
              {testimonials.map((t) => (
                <Card key={t.name} t={t} />
              ))}
            </div>
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}