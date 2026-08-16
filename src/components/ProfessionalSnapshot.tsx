import { FlaskConical, Briefcase, Cpu } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

const cards = [
  {
    icon: FlaskConical,
    title: "Background",
    text: "Biochemistry and laboratory science — clinical internship at Civil Hospital Karachi and three years at BMD Lab.",
    accent: "text-teal",
  },
  {
    icon: Briefcase,
    title: "Experience",
    text: "Financial services and professional operations — over two and a half years in HBL's credit-card environment.",
    accent: "text-accent",
  },
  {
    icon: Cpu,
    title: "Focus",
    text: "Technology, AI and data-driven problem solving — Python, web development and applied AI tools.",
    accent: "text-accent",
  },
];

export default function ProfessionalSnapshot() {
  return (
    <section aria-label="Professional snapshot" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="eyebrow">Currently</p>
              <h2 className="mt-3 font-display text-2xl tracking-tight sm:text-3xl">
                {profile.currently.organization}
              </h2>
              <p className="mt-1.5 text-[15px] font-medium text-accent">
                {profile.currently.focus}
              </p>
            </div>
            <p className="text-sm text-muted">{profile.location}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={0.08 * i}>
              <div className="group h-full rounded-2xl border border-line bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(11,18,32,0.08)]">
                <card.icon size={20} strokeWidth={1.75} className={card.accent} />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.14em]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
