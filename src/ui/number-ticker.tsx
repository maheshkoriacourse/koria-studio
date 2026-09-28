// Ported from Magic UI "number-ticker" (MIT, (c) Magic UI)
// https://github.com/magicuidesign/magicui — restyled to Koria Studio tokens.
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

interface NumberTickerProps {
  value: number;
  startValue?: number;
  delay?: number;
  decimalPlaces?: number;
  className?: string;
}

export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  decimalPlaces = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(value);
      }, delay * 1000);
    }
    return () => {
      if (timer !== null) clearTimeout(timer);
    };
  }, [motionValue, isInView, delay, value]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces]
  );

  return (
    <span ref={ref} className={`inline-block tabular-nums ${className ?? ""}`}>
      {startValue}
    </span>
  );
}