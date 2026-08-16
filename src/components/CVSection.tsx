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
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center dark:border dark:border-line sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(37,99,235,0.22),transparent_70%)]"
            />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8ea8d8]">
              Experience on Paper
            </p>
            <h2 className="relative mt-4 font-display text-3xl tracking-tight text-[#f8fafc] sm:text-4xl">
              Want the complete professional overview?
            </h2>

            {cv.available ? (
              <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={cv.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f8fafc] px-7 text-sm font-semibold text-[#0b1220] transition-transform hover:-translate-y-0.5"
                >
                  <FileText size={16} strokeWidth={2} aria-hidden="true" />
                  View CV
                </a>
                <a
                  href={cv.path}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[rgba(248,250,252,0.25)] px-7 text-sm font-semibold text-[#f8fafc] transition-colors hover:border-[#5b8def] hover:text-[#8ea8d8]"
                >
                  <Download size={16} strokeWidth={2} aria-hidden="true" />
                  Download CV
                </a>
              </div>
            ) : (
              <>
                <p className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#94a3b8]">
                  The full CV is shared on request — reach out by email or connect on LinkedIn
                  and it will be with you shortly.
                </p>
                <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={social.email.url}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#f8fafc] px-7 text-sm font-semibold text-[#0b1220] transition-transform hover:-translate-y-0.5"
                  >
                    <FileText size={16} strokeWidth={2} aria-hidden="true" />
                    Request CV by Email
                  </a>
                  <a
                    href={social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[rgba(248,250,252,0.25)] px-7 text-sm font-semibold text-[#f8fafc] transition-colors hover:border-[#5b8def] hover:text-[#8ea8d8]"
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
