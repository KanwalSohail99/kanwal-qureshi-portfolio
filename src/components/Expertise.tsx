import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { pillars } from "@/data/skills";

export default function Expertise() {
  return (
    <section aria-label="Experience and skills" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          eyebrow="Areas of experience"
          title="A practical mix of disciplines."
          intro="Experience in laboratory work and financial services sits alongside an ongoing interest in technology and communication. The distinction between professional experience and developing skills matters."
        />
        <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.04 * i}>
              <article className={`expertise-item ${i > 0 ? "sm:border-l sm:border-line sm:pl-6 lg:pl-7" : ""}`}>
                <span className="text-xs font-semibold tabular-nums text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-display text-xl tracking-tight">{pillar.title}</h3>
                <p className="mt-2 min-h-[4.5rem] text-sm leading-[1.7] text-muted">{pillar.summary}</p>
                <ul className="mt-5 space-y-2 border-t border-line pt-4">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-[13px] leading-relaxed text-ink-2">{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
