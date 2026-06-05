"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
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
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-900">
          {/* Col 1: Bio */}
          <div className="space-y-4">
            <button
              onClick={scrollToTop}
              className="font-mono text-base font-bold text-white flex items-center gap-1.5"
            >
              <span className="text-violet-500 font-extrabold">&lt;</span>
              <span>Dattaraj</span>
              <span className="text-violet-500 font-extrabold">/&gt;</span>
            </button>
            <p className="text-slate-450 text-xs sm:text-sm leading-relaxed font-sans max-w-sm">
              Backend Developer & Generative AI Engineer. Specializing in high-performance architectures, real-time message streams, and LLM orchestration.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4 font-mono text-xs sm:text-sm">
            <h4 className="text-xs font-semibold text-slate-450 uppercase tracking-widest">Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-slate-350">
              <button onClick={() => scrollToSection("hero")} className="text-left hover:text-white transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-left hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection("skills")} className="text-left hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection("projects")} className="text-left hover:text-white transition-colors">Projects</button>
              <button onClick={() => scrollToSection("achievements")} className="text-left hover:text-white transition-colors">Achievements</button>
              <button onClick={() => scrollToSection("contact")} className="text-left hover:text-white transition-colors">Contact</button>
            </div>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-4 font-mono text-xs sm:text-sm">
            <h4 className="text-xs font-semibold text-slate-450 uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col space-y-2 text-slate-350">
              <a
                href="mailto:dattatraj321@gmail.com"
                className="hover:text-white transition-colors flex items-center gap-2 truncate"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>dattatraj321@gmail.com</span>
              </a>
              <a
                href="https://github.com/Dattaraj009"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github.com/Dattaraj009</span>
              </a>
              <a
                href="https://www.linkedin.com/in/dattaraj-jadhav-a57581291/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin.com/in/dattaraj-jadhav</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower block: copyright & back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-[10px] sm:text-xs font-mono text-slate-450">
            &copy; {currentYear} Dattaraj Jadhav. All rights reserved. Built with Next.js 15.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 border border-slate-850 hover:border-slate-700 text-slate-450 hover:text-white rounded-lg transition-all shadow-md flex items-center gap-1 text-[11px] font-mono hover:bg-slate-850"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
