"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Download, Mail, Star, Code, Layers } from "lucide-react";
import TypingAnimation from "@/components/typing-animation";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-950 via-slate-950 to-indigo-950/20"
    >
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
      
      {/* Mesh glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-violet-650/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-650/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center space-y-6"
        >
          {/* Availability Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-[11px] font-mono font-medium text-violet-400 shadow-md shadow-black/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Actively Seeking Internships & Full-Time Roles</span>
          </motion.div>

          {/* Headline and Title */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              Dattaraj Jadhav
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-mono text-slate-350">
              I am a <TypingAnimation words={[
                "Backend Developer",
                "Generative AI Engineer",
                "RAG Systems Builder",
                "Software Engineer",
                "Problem Solver"
              ]} />
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-450 leading-tight">
              Building Scalable Backend Systems & AI-Powered Applications
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-sans">
              B.Tech CSE (AI) student with hands-on experience in backend development, real-time systems, Retrieval-Augmented Generation (RAG), and Generative AI applications.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <a
              href="https://github.com/Dattaraj009"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 hover:text-white text-slate-300 rounded-xl transition-all shadow-md"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dattaraj-jadhav-a57581291/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 hover:text-white text-slate-300 rounded-xl transition-all shadow-md"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="p-2.5 bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 hover:text-white text-slate-300 rounded-xl transition-all shadow-md"
              aria-label="Email Dattaraj"
            >
              <Mail className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={() => onNavigate("projects")}
              className="w-full sm:w-auto px-6 py-3 bg-white text-slate-950 hover:bg-slate-100 font-semibold rounded-xl flex items-center justify-center gap-2 shadow-xl hover:shadow-white/5 active:scale-[0.98] transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/resume.pdf"
              download="Dattaraj_Jadhav_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 hover:border-slate-700 font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
            <button
              onClick={() => onNavigate("contact")}
              className="w-full sm:w-auto px-6 py-3 bg-transparent text-slate-300 hover:text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mt-12 bg-slate-900/30 border border-slate-800/80 backdrop-blur-md p-6 rounded-2xl shadow-xl text-left"
          >
            {/* LeetCode Stat */}
            <div className="flex items-start gap-4 p-2">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-xl">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">300+</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide font-mono mt-0.5">LeetCode Solved</p>
                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Strong logic & problem solving</p>
              </div>
            </div>

            {/* Projects Stat */}
            <div className="flex items-start gap-4 p-2 border-t sm:border-t-0 sm:border-l border-slate-850 sm:pl-6">
              <div className="p-3 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">3 Major</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide font-mono mt-0.5">Production Projects</p>
                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Highly optimized architectures</p>
              </div>
            </div>

            {/* DSA/OOP/DBMS Stat */}
            <div className="flex items-start gap-4 p-2 border-t sm:border-t-0 sm:border-l border-slate-850 sm:pl-6">
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">CS Core</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide font-mono mt-0.5">DSA, OOP, DBMS</p>
                <p className="text-[10px] text-slate-500 font-sans mt-0.5">Robust engineering foundations</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <span className="text-[9px] font-mono text-slate-450 uppercase tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-3 rounded-full bg-slate-400"
        />
      </div>
    </section>
  );
}
