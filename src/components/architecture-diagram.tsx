"use client";

import { motion } from "framer-motion";

interface ArchitectureDiagramProps {
  projectType: "rag" | "docuverse" | "chat";
}

export default function ArchitectureDiagram({ projectType }: ArchitectureDiagramProps) {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring", stiffness: 100 } },
  };

  if (projectType === "rag") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl p-4 md:p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4 border-b border-slate-850 pb-2">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest font-mono">
              2-Stage LangGraph Pipeline
            </h4>
          </div>
          <span className="text-[10px] bg-indigo-500/10 text-indigo-400 font-mono px-2 py-0.5 rounded border border-indigo-500/20">
            State Machine
          </span>
        </div>

        {/* Ingestion and Retrieval Pipeline Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative text-slate-300 font-mono text-[11px]">
          
          {/* Phase 1: Ingestion */}
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850">
            <div className="text-xs font-semibold text-indigo-400 mb-3 border-b border-slate-900 pb-1 flex justify-between">
              <span>1. Ingestion Graph</span>
              <span className="text-[9px] text-slate-500">Offline</span>
            </div>
            <div className="space-y-4 relative">
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center">
                📄 PDF Document (100+ pgs)
              </motion.div>
              <div className="flex justify-center text-indigo-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center">
                ✂️ Optimized Ingestion Chunking
              </motion.div>
              <div className="flex justify-center text-indigo-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-indigo-950/30 border border-indigo-900/50 rounded text-center text-indigo-200">
                🧬 Google GenAI Embeddings
              </motion.div>
              <div className="flex justify-center text-indigo-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-emerald-950/20 border border-emerald-900/40 rounded text-center text-emerald-300">
                🗄️ Supabase pgvector DB
              </motion.div>
            </div>
          </div>

          {/* Phase 2: Retrieval */}
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850">
            <div className="text-xs font-semibold text-violet-400 mb-3 border-b border-slate-900 pb-1 flex justify-between">
              <span>2. Retrieval Graph</span>
              <span className="text-[9px] text-green-400">Real-time</span>
            </div>
            <div className="space-y-4">
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center">
                👤 User Query
              </motion.div>
              <div className="flex justify-center text-violet-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center flex flex-col justify-center items-center">
                <span>🔍 Semantic Search</span>
                <span className="text-[9px] text-slate-500">Retrieves top 20 candidate chunks</span>
              </motion.div>
              <div className="flex justify-center text-violet-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-violet-950/30 border border-violet-900/50 rounded text-center text-violet-200">
                ⚡ Cross-Encoder Re-ranking
                <span className="block text-[8px] text-violet-400/80">Selects top-5 context lines</span>
              </motion.div>
              <div className="flex justify-center text-violet-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-indigo-950/40 border border-indigo-900/60 rounded text-center text-indigo-300">
                🤖 Unified LLM & SSE Streaming
                <span className="block text-[8px] text-slate-400">Groq / Gemini / OpenAI</span>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Global Pipeline Note */}
        <div className="mt-4 p-2 bg-slate-950 rounded border border-slate-850/60 text-[10px] text-slate-400 text-center font-mono">
          🚀 Ingestion latency: <span className="text-violet-400 font-semibold">Concurrent pipelines</span> | Query response: <span className="text-emerald-400 font-semibold">&lt; 5 seconds</span> (from 3 mins)
        </div>
      </motion.div>
    );
  }

  if (projectType === "docuverse") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl p-4 md:p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4 border-b border-slate-850 pb-2">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest font-mono">
              AST Parsing & LLM Documentation Pipeline
            </h4>
          </div>
          <span className="text-[10px] bg-blue-500/10 text-blue-400 font-mono px-2 py-0.5 rounded border border-blue-500/20">
            2-Phase Pipeline
          </span>
        </div>

        {/* Python AST parsing & LLaMA context pipeline diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 font-mono text-[11px]">
          
          {/* Phase 1: Static Code Analyzer */}
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850">
            <div className="text-xs font-semibold text-blue-400 mb-3 border-b border-slate-900 pb-1 flex justify-between">
              <span>Phase 1: Code Parsing</span>
              <span className="text-[9px] text-slate-500">AST Analysis</span>
            </div>
            <div className="space-y-4">
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center">
                📁 GitHub Repository Url
              </motion.div>
              <div className="flex justify-center text-blue-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center">
                🐍 Python AST Parser
                <span className="block text-[8px] text-slate-500">Extracts classes, imports, functions</span>
              </motion.div>
              <div className="flex justify-center text-blue-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-blue-950/30 border border-blue-900/50 rounded text-center text-blue-200">
                📉 Structure Caching
                <span className="block text-[8px] text-emerald-400">89% prompt reduction</span>
              </motion.div>
            </div>
          </div>

          {/* Phase 2: Generation */}
          <div className="bg-slate-950/70 p-3 rounded-lg border border-slate-850">
            <div className="text-xs font-semibold text-fuchsia-400 mb-3 border-b border-slate-900 pb-1 flex justify-between">
              <span>Phase 2: LLM DocGen</span>
              <span className="text-[9px] text-green-400">Concurrent</span>
            </div>
            <div className="space-y-4">
              <motion.div variants={nodeVariants} className="p-2 bg-slate-900 border border-slate-850 rounded text-center">
                🧵 ThreadPoolExecutor
                <span className="block text-[8px] text-slate-550">Parallel file analysis</span>
              </motion.div>
              <div className="flex justify-center text-fuchsia-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-fuchsia-950/30 border border-fuchsia-900/50 rounded text-center text-fuchsia-200">
                🦙 Groq LLaMA Engine
                <span className="block text-[8px] text-slate-400">Summaries & Mermaid.js diagrams</span>
              </motion.div>
              <div className="flex justify-center text-fuchsia-500 my-1">
                <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <motion.div variants={nodeVariants} className="p-2 bg-emerald-950/20 border border-emerald-900/40 rounded text-center text-emerald-300">
                📖 MkDocs / static site generator
              </motion.div>
            </div>
          </div>

        </div>

        {/* Global Pipeline Note */}
        <div className="mt-4 p-2 bg-slate-950 rounded border border-slate-850/60 text-[10px] text-slate-400 text-center font-mono">
          ⚙️ AST Parsing bypasses code overhead &middot; Groq LLaMA provides instant structured documentation output.
        </div>
      </motion.div>
    );
  }

  // Real-Time Chat App
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-xl p-4 md:p-6 shadow-xl"
    >
      <div className="flex items-center justify-between mb-4 border-b border-slate-850 pb-2">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-widest font-mono">
            WebSocket Real-time Messaging
          </h4>
        </div>
        <span className="text-[10px] bg-amber-500/10 text-amber-400 font-mono px-2 py-0.5 rounded border border-amber-500/20">
          Bi-Directional
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-slate-300 font-mono text-[10px] text-center">
        <div className="bg-slate-950 p-2 rounded border border-slate-850 flex flex-col justify-between h-24">
          <span className="text-amber-400 font-bold border-b border-slate-900 pb-1">Client (React)</span>
          <span className="text-[8px] text-slate-400">Stores JWT in memory, communicates via WebSocket</span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-[8px] text-emerald-400 animate-pulse mb-1">Socket.io</div>
          <svg className="w-10 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
          <div className="text-[8px] text-slate-500 mt-1">JWT Auth</div>
        </div>
        <div className="bg-slate-950 p-2 rounded border border-slate-850 flex flex-col justify-between h-24">
          <span className="text-amber-400 font-bold border-b border-slate-900 pb-1">Backend (Node.js)</span>
          <span className="text-[8px] text-slate-400">Validates JWT, manages room sockets, updates MongoDB</span>
        </div>
      </div>
    </motion.div>
  );
}
