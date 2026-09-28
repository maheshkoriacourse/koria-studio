import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { ThemeToggle } from "../ui/theme-toggle";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-[var(--ks-line)] bg-[color-mix(in_srgb,var(--ks-background)_82%,transparent)] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        aria-label="Main"
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--ks-muted)] transition-colors hover:text-[var(--ks-foreground)]"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="font-display inline-flex h-10 items-center rounded-full bg-[var(--ks-foreground)] px-5 text-sm font-semibold text-[var(--ks-background)] transition-transform duration-200 hover:scale-[1.03]"
          >
            Start a project
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--ks-line)] bg-[var(--ks-surface)]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h10" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-[var(--ks-line)] md:hidden"
      >
        <nav
          aria-label="Mobile"
          className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-medium transition-colors hover:bg-[var(--ks-surface)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-display mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[var(--ks-foreground)] px-5 text-sm font-semibold text-[var(--ks-background)]"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}