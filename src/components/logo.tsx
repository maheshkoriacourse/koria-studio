export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label="Koria Studio — home"
    >
      <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="ks-logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a78bfa" />
            <stop offset="0.5" stopColor="#22d3ee" />
            <stop offset="1" stopColor="#f0abfc" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="14" fill="var(--ks-ink)" />
        <path
          d="M20 16v32l16-10 12 8V16z"
          fill="none"
          stroke="url(#ks-logo-g)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="4" fill="url(#ks-logo-g)" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">
        Koria<span className="text-[var(--ks-brand-ink)]"> Studio</span>
      </span>
    </a>
  );
}