"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Cpu, Database, ShieldAlert, CpuIcon, Radio, Wrench, FileCode2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
  color: string; // for border/glow accent
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: Terminal,
    skills: ["Python", "JavaScript", "TypeScript", "C++"],
    color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/25",
  },
  {
    title: "Backend Development",
    icon: Cpu,
    skills: ["Node.js", "Express.js", "Prisma ORM", "REST APIs"],
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/25",
  },
  {
    title: "AI & Generative AI",
    icon: CpuIcon,
    skills: ["LangChain", "LangGraph", "Hugging Face", "Retrieval-Augmented Generation (RAG)"],
    color: "from-violet-500/20 to-fuchsia-500/20 text-violet-400 border-violet-500/25",
  },
  {
    title: "Databases & Vector DBs",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Vector Databases (pgvector)"],
    color: "from-indigo-500/20 to-blue-500/20 text-indigo-400 border-indigo-500/25",
  },
  {
    title: "Authentication & Security",
    icon: ShieldAlert,
    skills: ["JWT", "bcrypt", "Session Management"],
    color: "from-rose-500/20 to-orange-500/20 text-rose-400 border-rose-500/25",
  },
  {
    title: "Real-Time Technologies",
    icon: Radio,
    skills: ["WebSockets", "Socket.IO"],
    color: "from-amber-500/20 to-yellow-500/20 text-amber-400 border-amber-500/25",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Postman"],
    color: "from-slate-500/20 to-zinc-500/20 text-slate-350 border-slate-700/50",
  },
  {
    title: "Core Computer Science",
    icon: FileCode2,
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)"],
    color: "from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/25",
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      className="relative py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-950 via-slate-950 to-indigo-950/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            Skills Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Expertise & Core Strengths
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hover over the badges to explore the languages, frameworks, AI tools, and computer science concepts I leverage to build production systems.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SKILL_CATEGORIES.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="bg-slate-900/40 backdrop-blur-md border-slate-800/80 shadow-lg h-full overflow-hidden hover:border-slate-700 transition-all duration-300 group">
                  <CardContent className="p-5 flex flex-col h-full space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} border shrink-0`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-sm text-white group-hover:text-violet-400 transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {category.skills.map((skill, sIndex) => (
                        <motion.div
                          key={sIndex}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Badge className="bg-slate-950/70 border border-slate-850 hover:border-violet-500/40 text-slate-300 font-mono text-[10px] py-1 px-2.5 rounded hover:text-white transition-all cursor-default select-none shadow-sm">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
