import Hero from "@/components/Hero";
import ProfessionalSnapshot from "@/components/ProfessionalSnapshot";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import Education from "@/components/Education";
import CVSection from "@/components/CVSection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalSnapshot />
      <About />
      <CareerTimeline />
      <Experience />
      <Expertise />
      <Projects />
      <Insights />
      <Education />
      <CVSection />
      <Contact />
    </>
  );
}
