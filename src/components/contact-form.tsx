"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string; // Anti-spam field
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Anti-spam honeypot detection
    if (formData.honeypot) {
      // Quietly succeed without doing anything
      setStatus("success");
      setStatusMessage("Message sent successfully!");
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setStatus("success");
      setStatusMessage("Message sent successfully! Dattaraj will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again or email directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Send className="w-5 h-5 text-violet-400" />
        Send a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Anti-spam field: hidden from humans */}
        <div className="hidden">
          <label htmlFor="honeypot">Leave this blank</label>
          <input
            id="honeypot"
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Full Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`bg-slate-950/50 border-slate-800 text-white placeholder-slate-650 focus:border-violet-500 focus:ring-violet-500/25 ${
              errors.name ? "border-rose-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.name && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`bg-slate-950/50 border-slate-800 text-white placeholder-slate-650 focus:border-violet-500 focus:ring-violet-500/25 ${
              errors.email ? "border-rose-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.email && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Collaboration / Job Opportunity"
            value={formData.subject}
            onChange={handleChange}
            className={`bg-slate-950/50 border-slate-800 text-white placeholder-slate-650 focus:border-violet-500 focus:ring-violet-500/25 ${
              errors.subject ? "border-rose-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.subject && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Hi Dattaraj, I would love to connect..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`bg-slate-950/50 border-slate-800 text-white placeholder-slate-650 focus:border-violet-500 focus:ring-violet-500/25 resize-none ${
              errors.message ? "border-rose-500" : ""
            }`}
            disabled={isLoading}
          />
          {errors.message && <p className="text-xs text-rose-500 mt-1 font-mono">{errors.message}</p>}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-violet-650 to-indigo-650 hover:from-violet-600 hover:to-indigo-650 text-white font-medium py-3 rounded-lg shadow-lg shadow-indigo-950/30 flex items-center justify-center gap-2 border border-violet-550/20 active:scale-[0.98] transition-all"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </Button>
      </form>

      {/* Floating Status Notification */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className={`mt-4 p-4 rounded-lg flex items-start gap-3 border ${
              status === "success"
                ? "bg-emerald-950/20 border-emerald-900/40 text-emerald-300"
                : "bg-rose-950/20 border-rose-900/40 text-rose-300"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <p className="font-semibold text-xs uppercase tracking-wider font-mono">
                {status === "success" ? "Success" : "Error"}
              </p>
              <p className="text-sm mt-0.5 text-slate-350">{statusMessage}</p>
            </div>
            <button
              onClick={() => setStatus(null)}
              className="ml-auto text-slate-400 hover:text-white font-bold"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
