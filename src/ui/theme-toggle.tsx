// Theme toggle — class-based light/dark in the shadcn mode-toggle spirit
// (MIT). Local implementation; persists to localStorage("ks-theme").
import { useEffect, useState } from "react";

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    const root = document.documentElement;
    root.classList.toggle("dark", next);
    root.classList.toggle("light", !next);
    try {
      localStorage.setItem("ks-theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };

  // Neutral icon until mounted to avoid hydration mismatch
  const icon = !mounted ? (
    <span className="block size-4.5 rounded-full border border-current opacity-40" />
  ) : dark ? (
    // Moon
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  ) : (
    // Sun
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!dark}
      className={`inline-flex size-10 items-center justify-center rounded-full border border-[var(--ks-line)] bg-[var(--ks-surface)] text-[var(--ks-foreground)] transition-colors duration-200 hover:border-[var(--ks-brand)] hover:text-[var(--ks-brand-ink)] ${className ?? ""}`}
    >
      {icon}
    </button>
  );
}