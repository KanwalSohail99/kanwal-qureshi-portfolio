import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { articles } from "@/data/articles";

/**
 * Homepage Insights teaser. Article cards render only for genuine
 * published essays; while none exist, an honest editorial note points
 * to the Insights page instead of showing fake cards.
 */
export default function Insights() {
  return (
    <section aria-label="Insights" className="border-t border-line">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Insights"
            title="Notes on science, business and AI."
            intro={
              articles.length > 0
                ? "Occasional essays — evidence over adjectives."
                : "Essays on scientific thinking in business, financial services and applied AI are currently being drafted. Only finished writing gets published here."
            }
          />
          <Reveal delay={0.1}>
            <Link
              href="/insights"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-line bg-surface px-6 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Visit Insights
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        {articles.length > 0 && (
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={0.07 * i}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {a.category}
                  </p>
                  <h3 className="mt-3 font-display text-lg leading-snug tracking-tight group-hover:text-accent">
                    {a.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{a.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
