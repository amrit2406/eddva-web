import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiTrendingUp, FiShield, FiCheck, FiZap, FiAward, FiUsers } from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: <FiCpu className="w-6 h-6" />,
    title: "Hyper-Focused Curriculum",
    description: "We cut out the fluff. Every single lesson is engineered to deliver deep domain expertise in half the time of traditional certificates.",
    color: "from-blue-500/10 to-sky-500/5",
    iconColor: "text-[#0066cc] bg-blue-50 border-blue-100",
    gradient: "from-[#0066cc] to-[#00a6ff]",
    lightGradient: "from-blue-500/20 to-sky-500/10",
  },
  {
    id: 2,
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Vetted Industry Architecture",
    description: "Learn directly from active Principal Engineers, Design Partners, and tech executives who build the systems you use daily.",
    color: "from-purple-500/10 to-indigo-500/5",
    iconColor: "text-purple-600 bg-purple-50 border-purple-100",
    gradient: "from-purple-600 to-indigo-600",
    lightGradient: "from-purple-500/20 to-indigo-500/10",
  },
  {
    id: 3,
    icon: <FiShield className="w-6 h-6" />,
    title: "Elite Alumni Network",
    description: "Gain lifetime access to an invite-only collective of high-performing builders, engineers, and creatives worldwide.",
    color: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
    gradient: "from-emerald-600 to-teal-600",
    lightGradient: "from-emerald-500/20 to-teal-500/10",
  },
];

const valueProps = [
  { icon: <FiZap className="w-4 h-4" />, label: "2x Faster Learning" },
  { icon: <FiAward className="w-4 h-4" />, label: "Industry Vetted" },
  { icon: <FiUsers className="w-4 h-4" />, label: "Elite Community" },
  { icon: <FiCheck className="w-4 h-4" />, label: "Lifetime Access" },
];

export default function WhyChooseUsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    hover: {
      y: -16,
      scale: 1.03,
      transition: { duration: 0.45, ease: [0.34, 1.56, 0.64, 1] },
    },
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-28 sm:py-36 px-6 sm:px-12 overflow-hidden">
      {/* Background with original color scheme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:auto_6rem] pointer-events-none" />
      
      {/* Subtle color accents matching original palette */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066cc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20 sm:mb-28"
        >
          {/* Trust Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm mb-8"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#0066cc] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest text-slate-600 uppercase">
              The Platform Advantage
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Why industry leaders
            <span className="block bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
              choose our platform
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            We don't do bootcamps, and we don't do boring multi-hour lecture dumps. Our ecosystem is custom-tuned for high-impact knowledge synthesis and rapid technical execution.
          </motion.p>

          {/* Value Proposition Pills */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {valueProps.map((prop, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-[#0066cc]">{prop.icon}</span>
                <span className="text-sm font-bold text-slate-700">{prop.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Features Grid */}
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
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-full rounded-2xl border border-slate-100 bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Radial Background Light Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Animated gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />

              {/* Content */}
              <div className="space-y-6 relative z-10">
                {/* Icon with hover animation */}
                <div className={`p-4 w-fit rounded-xl border shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${feat.iconColor}`}>
                  {feat.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="text-base text-slate-500 font-medium leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Check Tag */}
              <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-slate-400 tracking-wider uppercase relative z-10">
                <span className="flex items-center justify-center p-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                  <FiCheck className="w-3 h-3" />
                </span>
                <span>Verified Standard</span>
              </div>

              {/* Decorative corner accent */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${feat.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Trust Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 sm:mt-28 pt-12 border-t border-slate-100"
        >
          <div className="text-center">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
              Trusted by engineers at
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {['Google', 'Meta', 'Stripe', 'Netflix', 'Airbnb'].map((company, idx) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="text-lg sm:text-xl font-black text-slate-300 hover:text-slate-400 transition-colors duration-300"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}