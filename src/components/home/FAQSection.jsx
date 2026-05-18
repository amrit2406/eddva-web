import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMessageSquare } from "react-icons/fi";

const faqData = [
  {
    id: 1,
    question: "How long do I have access to the masterclass materials and workspace sandboxes?",
    answer: "You receive lifetime access to all recorded architectural lectures, curriculum updates, and code assets. The interactive cloud sandboxes remain active for the entire duration of your cohort plus an additional 6 months post-graduation.",
  },
  {
    id: 2,
    question: "Can I transition between self-paced learning and live cohorts mid-program?",
    answer: "Yes. Our platform architecture multi-syncs progress data natively. If your schedule changes, you can request a seat transfer to the next available live cohort without losing your sandboxed instances or lesson milestones.",
  },
  {
    id: 3,
    question: "Are there dedicated enterprise or team packages available for engineering units?",
    answer: "Absolutely. We provide custom scale packages featuring centralized team management dashboards, private sandbox runtimes, and direct Slack/Discord pipelines to masterclass mentors for teams of 5 or more.",
  },
  {
    id: 4,
    question: "What happens if I encounter issues during a sandbox compilation build?",
    answer: "Every sandbox track features an automated terminal snapshot system. If your build fails, you can generate a secure repository hash with one click and ping it directly to the cohort engineering team for code review.",
  },
];

export default function FAQSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      {/* Structural Linear Vertical Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px)] bg-[size:16rem_auto] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: STICKY BRAND BLOCK */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Platform Intelligence
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.15]">
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  Inquiries.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                Can’t find the architectural detail you’re looking for? Our core engineering advisory desk is standing by to resolve specific tracks.
              </p>
            </div>

            {/* Quick Contact Micro-Trigger */}
            <div className="pt-2">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0066cc] hover:text-[#004499] transition-colors group"
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Initialize Support Desk</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE EXPANSION NODES */}
          <div className="lg:col-span-8 space-y-4">
            {faqData.map((item) => {
              const isOpen = expandedId === item.id;
              
              return (
                <div
                  key={item.id}
                  className={`border rounded-2xl bg-white transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-slate-200 shadow-md shadow-slate-100/50" 
                      : "border-slate-100 hover:border-slate-200 shadow-sm"
                  }`}
                >
                  {/* Interactive Header Node */}
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-6 text-left gap-6 group select-none focus:outline-none"
                  >
                    <span className={`text-base font-black tracking-tight transition-colors duration-200 ${
                      isOpen ? "text-[#0066cc]" : "text-slate-800 group-hover:text-slate-950"
                    }`}>
                      {item.question}
                    </span>
                    
                    {/* Minimalist Rotational Switch */}
                    <div className={`p-2 rounded-xl flex-shrink-0 border transition-all duration-300 ${
                      isOpen 
                        ? "bg-[#0066cc] border-transparent text-white rotate-45" 
                        : "bg-slate-50 border-slate-100 text-slate-400 group-hover:text-slate-700 group-hover:bg-slate-100"
                    }`}>
                      <FiPlus className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Dynamic Height Containment */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: "auto", 
                          opacity: 1,
                          transition: { height: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } }
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.15 } }
                        }}
                      >
                        <div className="px-6 pb-6 pt-0 border-t border-slate-50 text-sm sm:text-base font-medium text-slate-500 leading-relaxed bg-slate-50/30">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}