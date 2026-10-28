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
    <section id="work" aria-label="Selected work and practice" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <SectionHeading
          eyebrow="Work & practice"
          title="A few things I have worked on."
          intro="This section separates a public web project from ongoing communication work. Where a public sample is not available, I say so rather than presenting a mock-up as client work."
        />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={0.05 * i}>
              <article className="work-row grid gap-5 py-8 md:grid-cols-[5rem_1fr_1fr] md:gap-8 md:py-10">
                <p className="font-display text-3xl tracking-tight text-accent/70">0{i + 1}</p>
                <div>
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-2 font-display text-2xl tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.role}</p>
                </div>
                <div>
                  <p className="text-sm leading-[1.8] text-ink-2">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Tools and disciplines">
                    {project.tools.map((tool) => <li key={tool} className="text-xs text-muted">{tool}</li>)}
                  </ul>
                  {project.link && (
                    <a href={project.link.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                      {project.link.label} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                  {project.github && !project.link && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
                      <GitHubIcon size={15} /> View repository <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-muted">For professional enquiries, collaborations or a conversation about my work, please get in touch.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="button-primary">Contact me</Link>
              <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="button-secondary">GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
