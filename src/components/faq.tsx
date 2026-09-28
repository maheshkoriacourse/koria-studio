import { Accordion } from "../ui/accordion";
import { BlurFade } from "../ui/blur-fade";

const faqs = [
  {
    question: "What does an engagement look like?",
    answer:
      "A short discovery call, then a fixed-scope proposal with timeline and price. Most first projects run 2–6 weeks depending on the mix of video, web and data work.",
  },
  {
    question: "How do you use AI in production?",
    answer:
      "AI sits inside the pipeline, not in front of the craft: script coverage, generative b-roll, edit assemblies, code scaffolding and data synthesis. Every deliverable is human-reviewed before it ships.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Yes. We extend existing identity systems rather than replacing them — tokens, motion rules and templates are handed back so your team can keep shipping.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You do. Full source files, code repositories and usage rights transfer on final payment. No lock-in, no licensing traps.",
  },
  {
    question: "How do we start?",
    answer:
      "Send a note through the contact form or email studio@koria.studio with two lines about the project. You'll get a reply within one working day.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl px-6 py-12 md:py-24"
      aria-labelledby="faq-title"
    >
      <BlurFade>
        <h2
          id="faq-title"
          className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Frequently asked{" "}
          <span className="text-gradient">questions</span>
        </h2>
        <div className="mt-10">
          <Accordion items={faqs} />
        </div>
        <p className="mt-10 text-[15px] text-[var(--ks-muted)]">
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-medium text-[var(--ks-accent-ink)] underline-offset-4 hover:underline"
          >
            Talk to us
          </a>
        </p>
      </BlurFade>
    </section>
  );
}