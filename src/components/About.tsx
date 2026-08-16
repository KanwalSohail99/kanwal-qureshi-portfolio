import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { aboutParagraphs } from "@/data/profile";

export default function About() {
  return (
    <section id="about" aria-label="About" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="Scientific thinking, applied to business."
          intro="One coherent arc — from the laboratory bench to financial services, with technology as the connecting thread."
        />
        <Reveal delay={0.1}>
          <div className="space-y-5 border-l border-line pl-6 sm:pl-8">
            {aboutParagraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-ink-2">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
