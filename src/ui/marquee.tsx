// Ported from Magic UI "marquee" (MIT, (c) Magic UI)
// https://github.com/magicuidesign/magicui — restyled to Koria Studio tokens.
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: ReactNode;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  repeat = 2,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn("group flex overflow-hidden [--gap:1rem]", className)}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "animate-marquee-track flex shrink-0 items-center justify-around gap-[--gap]",
            pauseOnHover && "group-pause group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}