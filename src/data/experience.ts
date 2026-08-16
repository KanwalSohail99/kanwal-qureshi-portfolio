export type Experience = {
  organization: string;
  role: string;
  period: string;
  location?: string;
  current?: boolean;
  overview: string;
  responsibilities: string[];
  skills: string[];
};

/**
 * All entries are sourced from Kanwal's original public portfolio.
 * Descriptions are intentionally high-level and non-confidential.
 * Exact start/end dates were not published in the source material,
 * so durations are stated instead of invented dates.
 */
export const experiences: Experience[] = [
  {
    organization: "Habib Bank Limited (HBL)",
    role: "Business Acquisition — Credit Cards",
    period: "2.5+ years · Current",
    location: "Karachi, Pakistan",
    current: true,
    overview:
      "Financial-services experience in HBL's credit-card environment, currently focused on business acquisition — combining analytical thinking with client engagement in a fast-paced corporate setting.",
    responsibilities: [
      "Supporting credit-card business acquisition and customer onboarding",
      "Engaging with clients to understand needs and resolve queries",
      "Applying analytical and problem-solving skills to day-to-day casework",
      "Operating within regulated, process-driven banking workflows",
    ],
    skills: ["Business Acquisition", "Client Engagement", "Financial Services", "Problem Solving"],
  },
  {
    organization: "BMD Lab",
    role: "Laboratory Scientist",
    period: "3 years",
    location: "Karachi, Pakistan",
    overview:
      "Three years of hands-on laboratory science, developing expertise in advanced laboratory techniques and diagnostic analysis with a strong emphasis on quality and accuracy.",
    responsibilities: [
      "Performing diagnostic analysis using advanced laboratory techniques",
      "Maintaining QA/QC standards across laboratory workflows",
      "Documenting results with scientific precision and traceability",
      "Collaborating with clinical staff on sample handling and reporting",
    ],
    skills: ["Diagnostic Analysis", "Laboratory Techniques", "QA/QC", "Scientific Documentation"],
  },
  {
    organization: "Civil Hospital Karachi",
    role: "Clinical Laboratory Internship",
    period: "Internship",
    location: "Karachi, Pakistan",
    overview:
      "Clinical internship providing valuable hands-on exposure to medical and clinical research in a major public hospital environment.",
    responsibilities: [
      "Gaining hands-on experience in medical and clinical laboratory practice",
      "Observing and supporting clinical research workflows",
      "Building foundational habits in laboratory safety and procedure",
    ],
    skills: ["Clinical Laboratory Practice", "Medical Research Exposure", "Lab Procedure"],
  },
  {
    organization: "Independent",
    role: "Columnist, Scriptwriter & Voiceover Artist",
    period: "Ongoing alongside other roles",
    overview:
      "A parallel track in communication — writing columns, YouTube scripts and voiceover work, blending creativity with clear, structured storytelling.",
    responsibilities: [
      "Writing columns and long-form editorial pieces",
      "Scripting YouTube content for clarity and narrative flow",
      "Recording voiceover work for video content",
    ],
    skills: ["Editorial Writing", "Scriptwriting", "Voiceover", "Storytelling"],
  },
];
