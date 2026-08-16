import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work has happened."
          intro="High-level, non-confidential summaries of real roles — no inflated titles, no invented metrics."
        />

        <div className="mt-14 space-y-6">
          {experiences.map((exp, i) => (
            <Reveal key={exp.organization + exp.role} delay={0.06 * i}>
              <article className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(11,18,32,0.08)] sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
                  <div className="lg:w-[300px] lg:shrink-0">
                    {exp.current && (
                      <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                        Current
                      </span>
                    )}
                    <h3 className="font-display text-xl tracking-tight">{exp.organization}</h3>
                    <p className="mt-1 text-[15px] font-medium text-accent">{exp.role}</p>
                    <p className="mt-2 text-sm text-muted">{exp.period}</p>
                    {exp.location && (
                      <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                        <MapPin size={12} strokeWidth={1.75} aria-hidden="true" />
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-[15px] leading-relaxed text-ink-2">{exp.overview}</p>
                    <ul className="mt-4 space-y-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex gap-3 text-sm leading-relaxed text-muted">
                          <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Relevant skills">
                      {exp.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/#work"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-7 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              View My Work
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
