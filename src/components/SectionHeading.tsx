import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-[15px] leading-relaxed text-muted">{intro}</p> : null}
    </Reveal>
  );
}
