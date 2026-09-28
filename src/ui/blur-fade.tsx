// Ported from Magic UI "blur-fade" (MIT, (c) Magic UI)
// https://github.com/magicuidesign/magicui — restyled to Koria Studio tokens.
import { useRef, type ReactNode } from "react";
import { motion, useInView } from "motion/react";

interface BlurFadeProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  offset?: number;
  inView?: boolean;
  blur?: string;
}

export function BlurFade({
  children,
  className,
  duration = 0.45,
  delay = 0,
  offset = 6,
  inView = true,
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: "-50px" });
  const isInView = !inView || inViewResult;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset, filter: `blur(${blur})` }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: offset, filter: `blur(${blur})` }
      }
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}