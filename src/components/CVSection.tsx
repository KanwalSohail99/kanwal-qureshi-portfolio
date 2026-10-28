import { FileText, Download } from "lucide-react";
import Reveal from "./Reveal";
import { profile, social } from "@/data/profile";
import { LinkedInIcon } from "./BrandIcons";

/**
 * CV section. When `profile.cv.available` is true (and the PDF exists at
 * public/Kanwal-Sohail-CV.pdf), real View/Download buttons render.
 * Until then an honest "available on request" state is shown — never a
 * dead link.
 */
export default function CVSection() {
  const { cv } = profile;

  return (
    <section id="cv" aria-label="CV" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
        <Reveal>
          <div className="relative border-y border-line bg-surface px-6 py-12 text-left sm:px-10 sm:py-14">
            <p className="eyebrow">
              Experience on Paper
            </p>
            <h2 className="relative mt-3 max-w-2xl font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Want the complete professional overview?
            </h2>

            {cv.available ? (
              <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={cv.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  <FileText size={16} strokeWidth={2} aria-hidden="true" />
                  View CV
                </a>
                <a
                  href={cv.path}
                  download
                  className="button-secondary"
                >
                  <Download size={16} strokeWidth={2} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            ) : (
              <>
                <p className="relative mt-4 max-w-xl text-sm leading-relaxed text-muted">
                  A downloadable CV is not currently available on this site. Please get in touch if you would like to discuss my experience.
                </p>
                <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={social.email.url}
                    className="button-primary"
                  >
                    <FileText size={16} strokeWidth={2} aria-hidden="true" />
                    Request CV by Email
                  </a>
                  <a
                    href={social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-secondary"
                  >
                    <LinkedInIcon size={15} />
                    Connect on LinkedIn
                  </a>
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
