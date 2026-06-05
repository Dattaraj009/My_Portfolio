"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Server, Compass, Zap, HelpCircle, Check } from "lucide-react";

interface FocusArea {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  bulletPoints: string[];
  description: string;
  colorClass: string;
}

const EXPERTISE_AREAS: FocusArea[] = [
  {
    title: "Backend Development",
    icon: Server,
    description: "Designing reliable, highly-scalable backend nodes capable of managing heavy transactional loads and concurrent data pipes.",
    bulletPoints: [
      "REST APIs architecture & modular routing",
      "Authentication Systems (JWT, sessions, bcrypt)",
      "Relational & NoSQL Database Design",
      "Scalable Systems Architecture & Prisma ORM integration"
    ],
    colorClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
  },
  {
    title: "Generative AI Engineering",
    icon: Compass,
    description: "Engineering advanced Retrieval-Augmented Generation (RAG) structures and multi-model agent pipelines.",
    bulletPoints: [
      "Retrieval-Augmented Generation (RAG) orchestration",
      "LangChain & LangGraph state machine designs",
      "Embeddings & Vector Databases semantic search",
      "Multi-Provider LLM abstraction layers (Gemini, Groq, OpenAI)"
    ],
    colorClass: "text-violet-400 border-violet-500/20 bg-violet-500/5",
  },
  {
    title: "Real-Time Systems",
    icon: Zap,
    description: "Establishing low-latency persistent socket channels to stream payloads and synchronize distributed states in real-time.",
    bulletPoints: [
      "Socket.IO connection managers & lifecycle events",
      "WebSocket persistent connections & messaging",
      "Event-Driven micro-routing architectures",
      "Server-Sent Events (SSE) streaming responses"
    ],
    colorClass: "text-amber-400 border-amber-500/20 bg-amber-500/5",
  },
  {
    title: "Problem Solving & Core CS",
    icon: HelpCircle,
    description: "Applying algorithm design paradigms and fundamental computer science architectures to solve code blockages.",
    bulletPoints: [
      "300+ solved algorithmic LeetCode challenges",
      "Advanced Data Structures & Big O time complexities",
      "Object-Oriented Programming (OOP) design patterns",
      "Systems Thinking & architectural bottlenecks profiling"
    ],
    colorClass: "text-blue-400 border-blue-500/20 bg-blue-500/5",
  },
];

export default function ExperienceFocus() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience-focus" className="relative py-24 bg-slate-950 border-t border-slate-900">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-950/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Areas of Core Specialization
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A granular breakdown of my engineering capabilities and technical specializations.
          </p>
        </div>

        {/* Expertise Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {EXPERTISE_AREAS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} variants={cardVariants}>
                <Card className="bg-slate-900/30 border-slate-800/80 backdrop-blur-md h-full overflow-hidden hover:border-slate-700 transition-all duration-300 relative group">
                  <CardContent className="p-6 md:p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                      <div className={`p-3.5 rounded-xl border ${item.colorClass} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-350 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="space-y-2 pt-2 border-t border-slate-850">
                      {item.bulletPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                          <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
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
