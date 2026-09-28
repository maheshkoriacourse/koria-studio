// Ported from Magic UI "magic-card" (gradient mode) (MIT, (c) Magic UI)
// https://github.com/magicuidesign/magicui — restyled to Koria Studio tokens.
import {
  useCallback,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

interface MagicCardProps {
  children?: ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "rgba(167,139,250,0.10)",
  gradientFrom = "#a78bfa",
  gradientTo = "#22d3ee",
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handlePointerMove = useCallback(
    (e: ReactPointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  const reset = useCallback(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  const borderBackground = useMotionTemplate`
    linear-gradient(var(--ks-surface) 0 0) padding-box,
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom}, ${gradientTo}, var(--ks-line) 100%
    ) border-box`;

  const glowBackground = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientColor}, transparent 100%)`;

  return (
    <motion.div
      className={`group relative isolate overflow-hidden rounded-[inherit] ${className ?? ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      style={{ background: borderBackground, border: "1px solid transparent" }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-px z-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}