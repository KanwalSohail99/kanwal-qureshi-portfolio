import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { pillars } from "@/data/skills";

export default function Expertise() {
  return (
    <section aria-label="What I bring" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="What I Bring"
          title="Four disciplines, one way of working."
          intro="Scientific rigour, commercial awareness, technical capability and clear communication — each reinforcing the others."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.07 * i}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]">
                <span
                  aria-hidden="true"
                  className={`h-1 w-8 rounded-full ${pillar.accent === "teal" ? "bg-teal" : "bg-accent"}`}
                />
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.16em]">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{pillar.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-5">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-[13.5px] font-medium text-ink-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
