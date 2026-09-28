// Accordion in the shadcn/ui semantic style (MIT) — reimplemented locally
// without Radix to keep the bundle minimal. Controlled, accessible.
import { useId, useState, type ReactNode } from "react";
import { cn } from "../lib/utils";

interface AccordionItemData {
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-[var(--ks-line)]", className)}>
      {items.map((item, i) => {
        const value = `faq-${i}`;
        const isOpen = open === value;
        const triggerId = `${baseId}-t-${i}`;
        const panelId = `${baseId}-p-${i}`;
        return (
          <div key={value}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : value)}
                className="group flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-base font-medium sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-[var(--ks-line)] transition-transform duration-250 group-hover:border-[var(--ks-brand)]"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M7 1v12M1 7h12" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
              className="pb-6 pr-10 text-[15px] leading-relaxed text-[var(--ks-muted)]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}