"use client";

import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AboutEdu from "@/components/sections/about-edu";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Achievements from "@/components/sections/achievements";
import ExperienceFocus from "@/components/sections/experience-focus";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased overflow-x-hidden selection:bg-violet-500/30 selection:text-white">
      {/* Dynamic particles / grid background at app level */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-950/20 via-slate-950 to-slate-950 pointer-events-none" />

      {/* Navigation Header */}
      <Header />

      {/* Sections */}
      <main className="flex-grow z-10 relative">
        <Hero onNavigate={handleNavigate} />
        <AboutEdu />
        <Skills />
        <Projects />
        <Achievements />
        <ExperienceFocus />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
