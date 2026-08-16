/**
 * Central profile data — the single source of truth for personal details.
 * Every value here is taken from Kanwal Sohail's original public portfolio
 * (github.com/KanwalSohail99) and verified public profiles. Do not add
 * unverified facts.
 */
export const profile = {
  name: "Kanwal Sohail",
  firstName: "Kanwal",
  role: "Banking Professional with a Background in Biochemistry & Technology",
  tagline:
    "Scientific training, financial-services experience and a growing focus on technology, data and AI.",
  location: "Karachi, Pakistan",
  email: "kanwalsohilknwal99@gmail.com",
  currently: {
    organization: "Habib Bank Limited (HBL)",
    focus: "Business Acquisition — Credit Cards",
  },
  /**
   * CV asset. Owner action: place the real PDF at `public/Kanwal-Sohail-CV.pdf`
   * and flip `available` to true. Until then the CV section renders an
   * honest "available on request" state — never a broken link.
   */
  cv: {
    available: false,
    path: "/Kanwal-Sohail-CV.pdf",
  },
} as const;

export const social = {
  github: {
    label: "GitHub",
    url: "https://github.com/KanwalSohail99",
    handle: "KanwalSohail99",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/kanwalsohail99/",
    handle: "kanwalsohail99",
  },
  email: {
    label: "Email",
    url: "mailto:kanwalsohilknwal99@gmail.com",
    handle: "kanwalsohilknwal99@gmail.com",
  },
} as const;

/** Professional narrative used in the About section. Grounded in the
 *  original portfolio's biography — rewritten, not invented. */
export const aboutParagraphs: string[] = [
  "I trained as a biochemist and started my career in the laboratory — first through a clinical internship at Civil Hospital Karachi, then through three years as a laboratory scientist at BMD Lab, working with advanced laboratory techniques and diagnostic analysis. That period taught me the habits I still rely on: precision, evidence, and process discipline.",
  "Alongside laboratory work, I built a parallel track in communication — writing columns, YouTube scripts and voiceover work — learning how to take complex material and make it clear.",
  "I then moved into financial services at Habib Bank Limited, where I have spent over two and a half years in the credit-card environment, currently focused on business acquisition. Working in a fast-paced corporate setting sharpened my analytical, client-engagement and problem-solving skills.",
  "Today I am extending that foundation into technology: web development, Python, SEO and a deepening interest in AI. The through-line across all of it is the same — scientific thinking applied to real business problems, explained clearly.",
];
