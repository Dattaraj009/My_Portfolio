"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Code, ShieldCheck, Database, GitMerge } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "Solved 300+ LeetCode Problems",
    description: "Demonstrated strong logic, analytical thinking, and efficient implementation of complex algorithms under timing constraints.",
    icon: Code,
    tag: "DSA & Algorithms",
  },
  {
    title: "Built Production-Style Systems",
    description: "Designed modular API routes, data validations, secure sessions, and scalable containerization pipelines for real-world reliability.",
    icon: ShieldCheck,
    tag: "Systems Design",
  },
  {
    title: "Developed Advanced RAG Pipelines",
    description: "Reduced multi-page document extraction latency from 3 mins to <5s using state-machine routing and intelligent semantic caching.",
    icon: GitMerge,
    tag: "Generative AI",
  },
  {
    title: "LangChain & LangGraph Expert",
    description: "Engineered state machines and memory graph architectures to coordinate agent workflows with multi-model fallback routines.",
    icon: Zap,
    tag: "AI Orchestration",
  },
  {
    title: "Built Real-Time Applications",
    description: "Engineered low-latency bi-directional messaging with Socket.IO, active room synchronizers, and connection lifecycle handlers.",
    icon: Award,
    tag: "Real-time Systems",
  },
  {
    title: "Strong Foundations in CS Core",
    description: "Applied object-oriented patterns, proper normalization, database indexes, and algorithmic complexities across systems.",
    icon: Database,
    tag: "Computer Science Core",
  },
];

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="achievements" className="relative py-24 bg-slate-950">
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-950/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Key Achievements & Highlights
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A summary of performance indicators, engineering accomplishments, and core programming capabilities.
          </p>
        </div>

        {/* Grid of Highlight Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ACHIEVEMENTS_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="bg-slate-900/40 border-slate-800/80 hover:border-violet-550/40 transition-all duration-300 backdrop-blur-md h-full group hover:shadow-lg hover:shadow-indigo-950/20 relative">
                  <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                    <div className="space-y-3">
                      {/* Badge / Tag */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-violet-400 font-semibold font-mono tracking-wider uppercase bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                          {item.tag}
                        </span>
                        <Icon className="w-5 h-5 text-slate-450 group-hover:text-violet-400 transition-colors" />
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
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
