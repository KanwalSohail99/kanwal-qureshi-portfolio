import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, social } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero-section" aria-label="Introduction">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">Professional profile <span aria-hidden="true">/</span> Karachi, Pakistan</p>
          <h1 className="mt-7 max-w-3xl font-display text-[clamp(2.65rem,6vw,5.2rem)] leading-[1.04] tracking-[-0.045em]">
            A career shaped by <span className="text-accent">science</span>, grounded in banking, and growing through technology.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-[1.85] text-muted sm:text-lg">
            I&apos;m {profile.name}. I work in credit-card business acquisition at Habib Bank Limited, following three years in laboratory science. Alongside my professional work, I continue to build my skills in web development, Python, SEO and AI.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/#experience" className="button-primary">
              Explore experience <ArrowDown size={15} aria-hidden="true" />
            </Link>
            <Link href="/#contact" className="button-secondary">Get in touch</Link>
          </div>
          <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent">
            LinkedIn profile <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <aside className="hero-details" aria-label="Professional details">
          <p className="eyebrow">At a glance</p>
          <dl className="mt-5 divide-y divide-line">
            <div className="detail-row">
              <dt>Current role</dt>
              <dd>Business Acquisition<br />Credit Cards</dd>
            </div>
            <div className="detail-row">
              <dt>Organization</dt>
              <dd>{profile.currently.organization}</dd>
            </div>
            <div className="detail-row">
              <dt>Previous field</dt>
              <dd>Laboratory science</dd>
            </div>
            <div className="detail-row">
              <dt>Developing skills</dt>
              <dd>Web development · Python · SEO · AI</dd>
            </div>
          </dl>
          <p className="mt-5 text-xs leading-relaxed text-muted">A professional profile based on experience to date; technical skills are an ongoing area of development.</p>
        </aside>
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8"><div className="section-rule" /></div>
    </section>
  );
}
