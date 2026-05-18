import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLayers, FiRadio, FiTerminal, FiTrendingUp } from "react-icons/fi";

const resources = [
  {
    id: 1,
    icon: <FiTerminal className="w-5 h-5" />,
    title: "Eddva DevLab Sandbox",
    description: "An interactive, browser-based playground to run microservice simulations and test code architecture pipelines live.",
    tag: "Beta Access",
    color: "group-hover:border-blue-500/30 group-hover:bg-blue-50/50 text-blue-600",
  },
  {
    id: 2,
    icon: <FiRadio className="w-5 h-5" />,
    title: "Weekly Architecture Briefings",
    description: "Deep-dive tech teardowns and system design breakdowns delivered straight to your dashboard every Sunday.",
    tag: "Free Content",
    color: "group-hover:border-purple-500/30 group-hover:bg-purple-50/50 text-purple-600",
  },
  {
    id: 3,
    icon: <FiLayers className="w-5 h-5" />,
    title: "Enterprise Ecosystems",
    description: "Custom-tailored skill matrices and private learning portals engineered specifically for high-growth engineering teams.",
    tag: "For Teams",
    color: "group-hover:border-emerald-500/30 group-hover:bg-emerald-50/50 text-emerald-600",
  },
];

export default function ExploreMoreSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      {/* Background Decorative Linework */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px)] bg-[size:14rem_auto] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
            <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
              Beyond the Classroom
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
            Explore More From <br />
            <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
              The Eddva Ecosystem.
            </span>
          </h2>
        </div>

        {/* INTERACTIVE SPLIT HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: THE SIGNATURE FOCUS CARD (DARK PREMIUM POP) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative rounded-2xl bg-slate-950 p-8 sm:p-10 text-white flex flex-col justify-between overflow-hidden shadow-2xl min-h-[400px] lg:min-h-full"
          >
            {/* Subtle inner-glow graphic mapping to your hero shape */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#0066cc]/20 via-sky-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(circle_at_100%_0%,#000_50%,transparent_100%)] pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="p-3 w-fit rounded-xl bg-white/5 border border-white/10 text-sky-400">
                <FiTrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">Quarterly Publication</span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  The Tech Horizon <br />Report 2026
                </h3>
                <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
                  Get our exhaustive, data-backed breakdown of microservice patterns, decentralized architecture, and next-gen UI paradigms shaping product development this year.
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 hover:bg-slate-100 hover:scale-[1.02]">
                <span>Download Free Blueprint</span>
                <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: MINIMALIST RESOURCE TRACK STACK */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-between gap-4"
          >
            {resources.map((res) => (
              <motion.div
                key={res.id}
                variants={fadeInUp}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-full border border-slate-100 bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 overflow-hidden"
              >
                {/* Horizontal Content Stack */}
                <div className="flex items-start gap-4 flex-1">
                  <div className={`p-3 rounded-xl border border-slate-100 bg-slate-50 shadow-sm transition-all duration-300 ${res.color}`}>
                    {res.icon}
                  </div>
                  <div className="space-y-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#0066cc] transition-colors duration-200">
                        {res.title}
                      </h4>
                      <span className="text-[10px] font-extrabold tracking-wider text-slate-400 border border-slate-200 bg-slate-50 px-1.5 py-0.5 rounded uppercase">
                        {res.tag}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                </div>

                {/* Minimalist Micro Arrow Icon Reveal */}
                <div className="self-end sm:self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-slate-400 group-hover:text-[#0066cc]">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}