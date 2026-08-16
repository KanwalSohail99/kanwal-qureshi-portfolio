export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string; // ISO date
  modifiedAt?: string; // ISO date
  image?: string;
  /** Paragraphs of real article content. */
  body: string[];
};

/**
 * Insights — genuine writing only. This list is intentionally empty until
 * real essays are added. The /insights index renders an elegant editorial
 * empty state, and no fake article cards are shown anywhere.
 *
 * Owner action: add published pieces here with real body content and a
 * readable slug, e.g. "scientific-thinking-in-business".
 */
export const articles: Article[] = [];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
