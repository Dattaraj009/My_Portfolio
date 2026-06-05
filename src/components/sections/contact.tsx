"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "dattatraj321@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      {/* Background glow blur */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-950/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          {/* Info Card Block (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-violet-400 uppercase">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s Build Something Impactful
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Interested in Backend Development, Generative AI, or Software Engineering opportunities? Let&apos;s connect and discuss internships, roles, projects, or collaborations.
            </motion.p>

            {/* Email copying widget */}
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/40 border border-slate-850 p-4 rounded-xl flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2.5 bg-violet-500/10 border border-violet-500/20 text-violet-400 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-semibold text-slate-450 uppercase font-mono tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-violet-400 transition-colors block truncate mt-0.5"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 bg-slate-950 hover:bg-slate-850 border border-slate-850 hover:border-slate-700 text-slate-400 hover:text-white rounded-lg transition-all shrink-0 active:scale-95"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.div>

            {/* Social handles list */}
            <motion.div variants={itemVariants} className="space-y-3 pt-2">
              <h4 className="text-xs font-semibold text-slate-450 uppercase font-mono tracking-wider">
                Follow my work
              </h4>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <a
                  href="https://github.com/Dattaraj009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/30 hover:bg-slate-900 border border-slate-850 hover:border-slate-750 px-4 py-3 rounded-xl flex items-center justify-between text-slate-300 hover:text-white transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/dattaraj-jadhav-a57581291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/30 hover:bg-slate-900 border border-slate-850 hover:border-slate-750 px-4 py-3 rounded-xl flex items-center justify-between text-slate-300 hover:text-white transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form Block (7 Cols on desktop) */}
          <div className="lg:col-span-7 w-full">
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
