import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import { social } from "@/data/profile";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How this site handles the information you share through the contact form.",
  alternates: { canonical: `${SITE_URL}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 pb-24 pt-[136px] sm:px-8">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
        Privacy
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Last updated {new Date().getFullYear()}.
      </p>

      <div className="mt-10 space-y-6 border-t border-line pt-10 text-[15px] leading-[1.85] text-ink-2">
        <p>
          This site is a static personal portfolio. It does not run its own server, does
          not use tracking or advertising cookies, and does not include any analytics
          script.
        </p>
        <p>
          <strong className="text-ink">Contact form.</strong> When the contact form on
          this site is active, submitting it sends the name, email address, subject and
          message you enter to Formspree, a third-party form-processing service, purely
          so the message can be delivered by email. That information is not stored by
          this site, sold, or used for any purpose beyond replying to you. Formspree
          processes the submission under its own privacy policy; see{" "}
          <a
            href="https://formspree.io/legal/privacy-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Formspree&apos;s privacy policy
          </a>{" "}
          for details.
        </p>
        <p>
          <strong className="text-ink">Email.</strong> If you contact {social.email.handle}{" "}
          directly by email instead, that message is handled the same way any personal
          email is — it is not published or shared.
        </p>
        <p>
          <strong className="text-ink">Hosting.</strong> This site is hosted as static
          files on GitHub Pages. GitHub may log standard web-server request data (such
          as IP address and browser user agent) as part of operating its hosting
          infrastructure; this site does not control or access those logs.
        </p>
        <p>
          Questions about this page can be sent to{" "}
          <a href={social.email.url} className="font-medium text-accent hover:underline">
            {social.email.handle}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
