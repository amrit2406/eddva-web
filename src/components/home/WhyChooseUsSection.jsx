import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiTrendingUp, FiShield, FiCheck } from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiCpu className="w-6 h-6" />,
    title: "Hyper-Focused Curriculum",
    description: "We cut out the fluff. Every single lesson is engineered to deliver deep domain expertise in half the time of traditional certificates.",
    color: "from-blue-500/10 to-sky-500/5",
    iconColor: "text-[#0066cc] bg-blue-50 border-blue-100",
  },
  {
    id: 2,
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Vetted Industry Architecture",
    description: "Learn directly from active Principal Engineers, Design Partners, and tech executives who build the systems you use daily.",
    color: "from-purple-500/10 to-indigo-500/5",
    iconColor: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    id: 3,
    icon: <FiShield className="w-6 h-6" />,
    title: "Elite Alumni Network",
    description: "Gain lifetime access to an invite-only collective of high-performing builders, engineers, and creatives worldwide.",
    color: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
];

export default function WhyChooseUsSection() {
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
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      {/* Structural Subtle Grid Linework */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:auto_6rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* UPPER CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-6 space-y-4">
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                The Platform Advantage
              </span>
            </motion.div>

            {/* Section Main Header */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]"
            >
              Engineered for those who <br />
              <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                refuse to plateau.
              </span>
            </motion.h2>
          </div>

          <div className="lg:col-span-6 lg:pt-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-xl"
            >
              We don't do bootcamps, and we don't do boring multi-hour lecture dumps. Our ecosystem is custom-tuned for high-impact knowledge synthesis and rapid technical execution.
            </motion.p>
          </div>
        </div>

        {/* THREE COLUMN VALUE GRID */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-2xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Radial Background Light Glow on Card Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="space-y-6 relative z-10">
                {/* Custom Styled Micro Icon */}
                <div className={`p-3 w-fit rounded-xl border shadow-sm transition-all duration-300 group-hover:scale-110 ${feat.iconColor}`}>
                  {feat.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Minimalist Visual Proof/Check Tag at Bottom */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider uppercase relative z-10">
                <span className="p-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  <FiCheck className="w-3 h-3" />
                </span>
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}