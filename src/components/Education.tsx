import { GraduationCap, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";

/**
 * Education + (conditionally) Certifications.
 * The certifications block renders only when verified entries exist —
 * no placeholder credentials are ever shown.
 */
export default function Education() {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <section id="education" aria-label="Education" className="scroll-mt-24 border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading eyebrow="Education" title="The academic foundation." />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {education.map((entry) => (
            <Reveal key={entry.field}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-bg p-6 sm:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal">
                  <GraduationCap size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg tracking-tight">{entry.field}</h3>
                  {entry.institution && (
                    <p className="mt-1 text-sm font-medium text-ink-2">{entry.institution}</p>
                  )}
                  {entry.period && <p className="mt-0.5 text-xs text-muted">{entry.period}</p>}
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{entry.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}

          {certifications.map((cert) => (
            <Reveal key={cert.title}>
              <div className="flex h-full gap-5 rounded-2xl border border-line bg-bg p-6 sm:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <BadgeCheck size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg tracking-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-2">{cert.issuer}</p>
                  {cert.date && <p className="mt-0.5 text-xs text-muted">{cert.date}</p>}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-accent hover:underline"
                    >
                      Verify credential
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
