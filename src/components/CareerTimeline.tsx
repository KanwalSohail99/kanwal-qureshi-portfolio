import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { timeline } from "@/data/timeline";

const dotColor: Record<string, string> = {
  blue: "bg-accent",
  teal: "bg-teal",
  ink: "bg-muted",
};

export default function CareerTimeline() {
  return (
    <section aria-label="Career timeline" className="border-y border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          eyebrow="Career path"
          title="A career across different fields."
          intro="A concise view of the fields and roles that have shaped my professional experience so far."
        />
        <ol className="relative mt-14 space-y-0">
          <span
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 w-px bg-line sm:left-1/2"
          />
          {timeline.map((stage, i) => (
            <li key={stage.title} className="relative">
              <Reveal delay={0.05 * i}>
                <div
                  className={`flex items-start gap-5 py-4 pl-8 sm:w-1/2 sm:py-5 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:mr-auto sm:flex-row-reverse sm:pr-10 sm:text-right"
                      : "sm:ml-auto sm:pl-10"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-[26px] h-[15px] w-[15px] rounded-full border-[3px] border-surface ${dotColor[stage.accent]} sm:left-1/2 sm:-translate-x-1/2`}
                  />
                  <div>
                    <h3 className="font-display text-lg tracking-tight">{stage.title}</h3>
                    <p className="mt-1 text-sm text-muted">{stage.detail}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
