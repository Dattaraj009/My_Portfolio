"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, Network, CheckCircle, Code, ShieldCheck } from "lucide-react";
import ArchitectureDiagram from "@/components/architecture-diagram";

interface Project {
  id: "rag" | "docuverse" | "chat";
  title: string;
  techStack: string[];
  description: string;
  achievements: string[];
  githubUrl: string;
  hasDiagram: boolean;
  demoUrl?: string;
  demoLabel?: string;
  highlightIcon: React.ComponentType<{ className?: string }>;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "rag",
    title: "Retrieval-Augmented Document Intelligence System",
    techStack: ["TypeScript", "LangChain", "LangGraph", "Supabase", "Groq", "pgvector"],
    description: "Engineered a production-style, two-stage Retrieval-Augmented Generation (RAG) pipeline utilizing LangGraph state machines for highly reliable extraction and query answering over large documents.",
    achievements: [
      "Split architecture into optimized Ingestion and Retrieval graphs for parallel, fault-tolerant execution.",
      "Reduced query latency on 100-page PDFs from approximately 3 minutes to under 5 seconds using custom indexing.",
      "Implemented Cross-Encoder re-ranking, selecting top-5 results with page-level source citations.",
      "Used Google GenAI embeddings with Supabase pgvector semantic search for high accuracy context retrieval.",
      "Implemented Server-Sent Events (SSE) based real-time response streaming for instant UI feedback.",
      "Built a unified LLM abstraction layer supporting Groq, OpenAI, Gemini, and Anthropic API nodes."
    ],
    githubUrl: "https://github.com/Dattaraj009",
    hasDiagram: true,
    highlightIcon: Network,
  },
  {
    id: "docuverse",
    title: "DocuVerse.AI – Codebase Analyzer",
    techStack: ["Python", "FastAPI", "Groq LLaMA", "MkDocs", "AST Parsing"],
    description: "Developed an automated documentation generation platform that ingests, parses, and converts full GitHub repositories into structured, deployable technical wikis.",
    achievements: [
      "Created a 2-phase LLM documentation pipeline for code analysis and markdown content compilation.",
      "Implemented AST-based parsing using Python's 'ast' library to extract class structures and dependency imports.",
      "Reduced LLM prompt context usage by ~89% through intelligent file indexing and AST-based structure caching.",
      "Built concurrent multi-file analyzing using Python ThreadPoolExecutor for highly performant indexing.",
      "Designed FastAPI backend for safe concurrent job queues with real-time status updates.",
      "Integrated Mermaid.js diagram validation to verify generated structural flowcharts."
    ],
    githubUrl: "https://github.com/Dattaraj009",
    hasDiagram: true,
    highlightIcon: Code,
  },
  {
    id: "chat",
    title: "Real-Time Chat Application",
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT", "bcrypt"],
    description: "Built a fully-featured, secure messaging platform enabling real-time communications, instant online tracking, and persistent chat logging.",
    achievements: [
      "Established low-latency bi-directional message synchronization using Socket.IO server instances.",
      "Secured communication routes using JSON Web Tokens (JWT) and bcrypt hashing for user credential safety.",
      "Structured a robust RESTful API with modular route handlers and validation middlewares.",
      "Handled socket lifecycle management, supporting rooms, active status indicators, and offline fallbacks.",
      "Designed database schemas in MongoDB for dynamic storage, indexing, and fast history fetching."
    ],
    githubUrl: "https://github.com/Dattaraj009",
    hasDiagram: true,
    demoUrl: "#contact",
    demoLabel: "Request Demo",
    highlightIcon: ShieldCheck,
  }
];

export default function Projects() {
  const [expandedDiagram, setExpandedDiagram] = useState<string | null>("rag");

  const toggleDiagram = (projectId: string) => {
    if (expandedDiagram === projectId) {
      setExpandedDiagram(null);
    } else {
      setExpandedDiagram(projectId);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="relative py-24 bg-slate-950 border-t border-slate-900">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Production-Style Implementations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A showcase of backend systems and Generative AI applications built with scalability, performance, and robust system design in mind.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {PROJECTS_DATA.map((project) => {
            const Icon = project.highlightIcon;
            const isDiagramOpen = expandedDiagram === project.id;
            return (
              <motion.div key={project.id} variants={projectVariants}>
                <Card className="bg-slate-900/30 border-slate-800/80 backdrop-blur-md overflow-hidden relative shadow-xl hover:border-slate-750 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-550 to-indigo-550" />
                  
                  <CardContent className="p-6 md:p-8 space-y-6">
                    {/* Upper row: Icon, Title, and Badges */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-xl shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white tracking-tight">{project.title}</h3>
                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.techStack.map((tech) => (
                              <Badge key={tech} className="bg-slate-950 hover:bg-slate-950 border border-slate-850 text-slate-350 font-mono text-[9px] py-0.5 px-2">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* GitHub / Demo CTA Buttons */}
                      <div className="flex items-center gap-2.5 shrink-0 self-start md:self-center font-mono">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-300 hover:text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            className="px-3.5 py-2 bg-violet-600 hover:bg-violet-750 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-violet-950/20"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{project.demoLabel || "Live Demo"}</span>
                          </a>
                        )}

                        {project.hasDiagram && (
                          <Button
                            onClick={() => toggleDiagram(project.id)}
                            variant="ghost"
                            className={`px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all border ${
                              isDiagramOpen
                                ? "bg-violet-500/10 border-violet-500/30 text-violet-400 hover:bg-violet-500/20"
                                : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900"
                            }`}
                          >
                            <Network className="w-3.5 h-3.5" />
                            <span>{isDiagramOpen ? "Hide Diagram" : "View Architecture"}</span>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-350 text-sm md:text-base leading-relaxed max-w-4xl">
                      {project.description}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-semibold text-slate-450 uppercase font-mono tracking-wider">
                        Key Engineering Achievements
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-350 text-xs sm:text-sm leading-relaxed">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Architecture Diagram Drawer */}
                    <AnimatePresence>
                      {isDiagramOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-850 pt-6 mt-4">
                            <ArchitectureDiagram projectType={project.id} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

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
