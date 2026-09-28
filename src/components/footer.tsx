import { Logo } from "./logo";

const serviceLinks = [
  { label: "AI Video Production", href: "#services" },
  { label: "Web Apps", href: "#services" },
  { label: "Data Products", href: "#services" },
  { label: "Automation", href: "#services" },
];

const studioLinks = [
  { label: "Selected work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--ks-line)] bg-[var(--ks-surface)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-[var(--ks-muted)]">
            An AI-native creative studio building brands that move — video,
            web, data and automation under one roof.
          </p>
        </div>
        <nav aria-label="Services">
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-[var(--ks-muted)] transition-colors hover:text-[var(--ks-brand-ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Studio">
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Studio
          </h3>
          <ul className="mt-4 space-y-2.5">
            {studioLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-[var(--ks-muted)] transition-colors hover:text-[var(--ks-brand-ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">
            Say hello
          </h3>
          <a
            href="mailto:studio@koria.studio"
            className="mt-4 block text-sm text-[var(--ks-muted)] transition-colors hover:text-[var(--ks-brand-ink)]"
          >
            studio@koria.studio
          </a>
          <p className="mt-2 text-sm text-[var(--ks-muted)]">
            Mumbai · Bengaluru · Remote
          </p>
        </div>
      </div>
      <div className="border-t border-[var(--ks-line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-[var(--ks-muted)] sm:flex-row">
          <p>© 2026 Koria Studio. All rights reserved.</p>
          <p>
            Built with AI — designed by hand.{" "}
            <a
              href="#top"
              className="underline-offset-4 hover:underline"
            >
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}