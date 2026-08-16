import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/data/articles";
import { profile } from "@/data/profile";
import { SITE_URL, OG_IMAGE } from "@/lib/site";

export const dynamicParams = false;

/**
 * Next's static export requires at least one entry from
 * generateStaticParams() for a dynamic segment to be valid. While
 * `articles` is genuinely empty (no fabricated posts), this route falls
 * back to a single unreachable placeholder param so the export still
 * builds; it is never linked from anywhere and immediately 404s below.
 */
export function generateStaticParams() {
  if (articles.length === 0) return [{ slug: "_none" }];
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `${SITE_URL}/insights/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: article.title,
      description: article.description,
      publishedTime: article.publishedAt,
      modifiedTime: article.modifiedAt ?? article.publishedAt,
      authors: [profile.name],
      images: [{ url: article.image ?? OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image ?? OG_IMAGE],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt ?? article.publishedAt,
    author: { "@type": "Person", name: profile.name, url: `${SITE_URL}/` },
    mainEntityOfPage: `${SITE_URL}/insights/${article.slug}`,
    keywords: article.tags.join(", "),
  };

  return (
    <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-[136px] sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/insights"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} strokeWidth={2} aria-hidden="true" />
        All Insights
      </Link>
      <p className="eyebrow mt-8">{article.category}</p>
      <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
        {article.title}
      </h1>
      <p className="mt-4 text-sm text-muted">
        {profile.name} ·{" "}
        <time dateTime={article.publishedAt}>
          {new Date(article.publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </p>
      <div className="mt-10 space-y-6 border-t border-line pt-10">
        {article.body.map((p, i) => (
          <p key={i} className="text-[16px] leading-[1.85] text-ink-2">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
