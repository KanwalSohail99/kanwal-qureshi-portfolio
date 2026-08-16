export type Pillar = {
  title: string;
  summary: string;
  items: string[];
  accent: "blue" | "teal";
};

/** "What I Bring" — four pillars. Items reflect skills listed in the
 *  original portfolio (Biochemistry · SEO · AI · Web Dev · Python · TS). */
export const pillars: Pillar[] = [
  {
    title: "Scientific Thinking",
    summary: "Evidence-based reasoning shaped by years of laboratory work.",
    items: ["Biochemistry", "Laboratory Science", "Diagnostic Analysis", "Scientific Documentation"],
    accent: "teal",
  },
  {
    title: "Business",
    summary: "Financial-services experience grounded in real client work.",
    items: ["Business Acquisition", "Financial Services", "Client Engagement", "Problem Solving"],
    accent: "blue",
  },
  {
    title: "Technology",
    summary: "Practical, hands-on skills — applied, not theoretical.",
    items: ["Python", "HTML · CSS · JavaScript", "TypeScript", "SEO & AI Tools"],
    accent: "blue",
  },
  {
    title: "Communication",
    summary: "Making complex material clear, structured and useful.",
    items: ["Editorial Writing", "Scriptwriting", "Voiceover", "Research Communication"],
    accent: "teal",
  },
];
