import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { articles } from "@/data/articles";
import { social } from "@/data/profile";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Essays and notes by Kanwal Sohail on scientific thinking, financial services, technology and AI.",
  alternates: { canonical: `${SITE_URL}/insights` },
};

export default function InsightsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-[136px] sm:px-8">
      <p className="eyebrow">Insights</p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
        Notes on science, business, technology and AI.
      </h1>
      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
        Occasional writing — scientific thinking applied to everyday business problems,
        observations from financial services, and practical notes on learning technology.
      </p>

      {articles.length === 0 ? (
        <div className="mt-16 rounded-3xl border border-line bg-surface px-6 py-16 text-center sm:px-12">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
            <PenLine size={24} strokeWidth={1.75} aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-display text-2xl tracking-tight">
            The first essays are being drafted.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Only finished, genuine writing gets published here — no filler posts. In the
            meantime, the conversation is open on LinkedIn.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-bg transition-transform hover:-translate-y-0.5"
            >
              Follow on LinkedIn
            </a>
            <Link
              href="/#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line px-7 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              See Selected Work
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group block rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                {a.category}
              </p>
              <h2 className="mt-3 font-display text-xl leading-snug tracking-tight group-hover:text-accent">
                {a.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{a.description}</p>
              <time dateTime={a.publishedAt} className="mt-4 block text-xs text-muted">
                {new Date(a.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
