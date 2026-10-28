import Reveal from "./Reveal";
import { profile } from "@/data/profile";

const details = [
  { label: "Professional experience", title: "Financial services", text: "Credit-card business acquisition and client-facing work at HBL." },
  { label: "Earlier experience", title: "Laboratory science", text: "Three years at BMD Lab, following a clinical laboratory internship." },
  { label: "Current development", title: "Technology & communication", text: "Building skills in web development, Python, SEO and AI; continuing editorial and scriptwriting work." },
];

export default function ProfessionalSnapshot() {
  return (
    <section aria-label="Professional overview" className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-16">
        <Reveal>
          <div className="flex flex-col gap-2 border-b border-line pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Current position</p>
              <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">{profile.currently.organization}</h2>
              <p className="mt-1 text-sm font-medium text-accent">{profile.currently.focus}</p>
            </div>
            <p className="text-sm text-muted">{profile.location}</p>
          </div>
        </Reveal>
        <div className="grid gap-0 md:grid-cols-3">
          {details.map((item, index) => (
            <Reveal key={item.label} delay={0.05 * index}>
              <div className={`snapshot-item ${index > 0 ? "md:border-l md:border-line md:pl-7" : ""}`}>
                <p className="eyebrow">{item.label}</p>
                <h3 className="mt-3 font-display text-xl tracking-tight">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-[1.75] text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
