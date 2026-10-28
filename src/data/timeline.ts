export type TimelineStage = {
  title: string;
  detail: string;
  accent: "blue" | "teal" | "ink";
};

/** Career arc: Science → Laboratory → Communication → Banking → Technology */
export const timeline: TimelineStage[] = [
  { title: "Biochemistry", detail: "Scientific foundation", accent: "teal" },
  { title: "Civil Hospital Karachi", detail: "Clinical laboratory internship", accent: "teal" },
  { title: "BMD Lab", detail: "Laboratory scientist — 3 years", accent: "teal" },
  { title: "Writing & Communication", detail: "Columnist, scriptwriter & voiceover", accent: "ink" },
  { title: "Habib Bank Limited", detail: "Financial services", accent: "blue" },
  { title: "Business Acquisition — Credit Cards", detail: "Current professional focus", accent: "blue" },
  { title: "Technology & AI", detail: "Continuous development", accent: "ink" },
];
