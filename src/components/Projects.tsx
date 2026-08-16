import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/data/projects";
import { social } from "@/data/profile";

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <section id="work" aria-label="Selected work" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="Selected Work"
          title="A short list, kept honest."
          intro="Only real work appears here. Covers are original abstract compositions — not fake screenshots."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.08 * i}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_rgba(11,18,32,0.1)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {project.category}
                    </p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="text-muted transition-colors hover:text-accent"
                      >
                        <GitHubIcon size={17} />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-3 font-display text-xl tracking-tight">{project.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs text-muted">
                    <span className="font-semibold text-ink-2">Role:</span> {project.role}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tools">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {project.link.label}
                      <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-line bg-surface px-6 py-10 text-center">
            <p className="font-display text-xl tracking-tight">
              Have an opportunity worth discussing?
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-ink px-6 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
              >
                Discuss an Opportunity
              </Link>
              <a
                href={social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-line px-6 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon size={15} />
                More on GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
