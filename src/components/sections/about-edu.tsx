"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutEdu() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-950/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* About Section (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Combining Theory with Practical Engineering
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
              <p>
                I am a B.Tech Computer Science Engineering (Artificial Intelligence) student at{" "}
                <span className="text-slate-250 font-semibold">Vishwakarma Institute of Information Technology (VIIT), Pune</span>.
                My focus lies at the intersection of robust backend systems and cutting-edge artificial intelligence.
              </p>
              <p>
                I enjoy building scalable backend systems, real-time applications, and AI-powered products. My engineering interests include software engineering, system design, retrieval systems, large language model applications, and high-performance backend architecture.
              </p>
              <p>
                I combine strong computer science fundamentals with practical software development skills to build production-grade applications. I am passionate about solving complex system-level problems and continuously improving my knowledge in backend development and Generative AI.
              </p>
            </motion.div>

            {/* Micro details badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 uppercase font-mono tracking-wider">Location</h4>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">Pune, MH, India</p>
                </div>
              </div>

              <div className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-450 uppercase font-mono tracking-wider">Role Type</h4>
                  <p className="text-sm font-medium text-slate-200 mt-0.5">Full-Time / Intern</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education & Core Coursework Section (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase">
                Education
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Academic Background
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="bg-slate-900/40 backdrop-blur-md border-slate-800 shadow-xl overflow-hidden relative group">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-550 to-indigo-550" />
                <CardContent className="p-6 space-y-6">
                  {/* Inst logo placeholder and title */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-base font-bold text-white leading-snug group-hover:text-violet-400 transition-colors">
                        Vishwakarma Institute of Information Technology (VIIT)
                      </h3>
                      <Badge className="bg-violet-500/10 border-violet-500/20 text-violet-400 font-mono text-[10px] py-0.5 shrink-0">
                        CGPA 8.51
                      </Badge>
                    </div>
                    <p className="text-xs text-indigo-400 font-mono">Pune, Maharashtra, India</p>
                  </div>

                  {/* Degree */}
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-200">
                      B.Tech in Computer Science Engineering (Artificial Intelligence)
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-450 font-mono mt-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>2023 – 2027</span>
                    </div>
                  </div>

                  {/* Relevant Coursework */}
                  <div className="border-t border-slate-850 pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-350">
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>RELEVANT COURSEWORK</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge className="bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 text-[10px] py-1 font-mono">
                        Data Structures & Algorithms
                      </Badge>
                      <Badge className="bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 text-[10px] py-1 font-mono">
                        Database Management Systems (DBMS)
                      </Badge>
                      <Badge className="bg-slate-950 hover:bg-slate-900 text-slate-300 border border-slate-800 text-[10px] py-1 font-mono">
                        Object-Oriented Programming (OOP)
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
