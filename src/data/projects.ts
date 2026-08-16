export type Project = {
  title: string;
  category: string;
  description: string;
  tools: string[];
  role: string;
  image: string;
  imageAlt: string;
  link?: { label: string; url: string };
  github?: string;
};

/**
 * Selected Work — verified items only. A short list of real work is
 * deliberately preferred over a long list of fabricated projects.
 */
export const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "A hand-built personal portfolio — designed, written and coded from scratch and published on GitHub Pages. The project that anchors an ongoing move into web development.",
    tools: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    role: "Design & Development",
    image: "/images/projects/project-01.png",
    imageAlt: "Abstract editorial cover with layered geometric interface forms in ink and blue",
    github: "https://github.com/KanwalSohail99/KanwalSohail99-kanwalsohail.github.io",
    link: {
      label: "View Repository",
      url: "https://github.com/KanwalSohail99/KanwalSohail99-kanwalsohail.github.io",
    },
  },
  {
    title: "Editorial Writing & Scriptwriting",
    category: "Content & Media",
    description:
      "An ongoing body of work as a columnist, YouTube scriptwriter and voiceover artist — turning complex topics into clear, structured narratives for broad audiences.",
    tools: ["Editorial Writing", "Script Structure", "Voiceover"],
    role: "Writer & Voice Artist",
    image: "/images/projects/project-02.png",
    imageAlt: "Abstract editorial cover with flowing typographic lines in ivory and teal",
    link: {
      label: "Connect on LinkedIn",
      url: "https://www.linkedin.com/in/kanwalsohail99/",
    },
  },
];
