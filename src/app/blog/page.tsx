import { redirect } from "next/navigation";

/**
 * Legacy path. The old portfolio used /blog; content now lives at
 * /insights. Static export doesn't support next.config redirects, so
 * this route performs the redirect at build/request time instead.
 */
export default function LegacyBlogRedirect() {
  redirect("/insights");
}
