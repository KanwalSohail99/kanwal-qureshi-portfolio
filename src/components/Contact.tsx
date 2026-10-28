import { Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { social } from "@/data/profile";

const channels = [
  {
    label: "Email",
    value: social.email.handle,
    href: social.email.url,
    icon: <Mail size={18} strokeWidth={1.75} aria-hidden="true" />,
    external: false,
  },
  {
    label: "LinkedIn",
    value: `in/${social.linkedin.handle}`,
    href: social.linkedin.url,
    icon: <LinkedInIcon size={17} />,
    external: true,
  },
  {
    label: "GitHub",
    value: social.github.handle,
    href: social.github.url,
    icon: <GitHubIcon size={17} />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-24 border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's connect."
          intro="For professional enquiries, collaboration or a conversation about my experience, please use one of the channels below."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <ul className="space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 border-b border-line py-5 transition-colors hover:text-accent"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-ink group-hover:text-accent">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
