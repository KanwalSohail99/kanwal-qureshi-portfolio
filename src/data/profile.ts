/**
 * Central profile data — the single source of truth for personal details.
 * Every value here is taken from Kanwal Sohail's original public portfolio
 * (github.com/KanwalSohail99) and verified public profiles. Do not add
 * unverified facts.
 */
export const profile = {
  name: "Kanwal Sohail",
  firstName: "Kanwal",
  role: "Banking professional | Biochemistry & technology",
  tagline:
    "Financial-services experience shaped by an earlier career in laboratory science, with an ongoing interest in technology and clear communication.",
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
  "My academic background is in biochemistry. I began my professional experience with a clinical laboratory internship at Civil Hospital Karachi, followed by three years as a laboratory scientist at BMD Lab. Laboratory work gave me a strong appreciation for accuracy, careful documentation and evidence-led thinking.",
  "Alongside my main roles, I have worked in communication as a columnist, YouTube scriptwriter and voiceover artist. I enjoy shaping information into writing that is clear and accessible.",
  "I later moved into financial services at Habib Bank Limited. My current focus is business acquisition in the credit-card area, where the work brings together client engagement, commercial awareness and day-to-day problem solving.",
  "I am now developing my skills in web development, Python, SEO and AI. These are areas of continued learning alongside my professional work, rather than a claim to a long-standing technology career.",
];
