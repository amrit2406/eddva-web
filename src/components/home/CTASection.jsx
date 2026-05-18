import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiCornerDownRight } from "react-icons/fi";

// Mock data for the inverted launching arch cards (reversing the Hero curve)
const ctaGalleryItems = [
  { id: 1, type: "gradient", color: "from-teal-100 to-emerald-50", rotate: "-25deg", translate: "-280px 120px" },
  { id: 2, type: "image", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=200", rotate: "-15deg", translate: "-190px 50px" },
  { id: 3, type: "gradient", color: "from-purple-100 to-indigo-50", rotate: "-5deg", translate: "-100px 10px" },
  // Center Launcher Icon
  { id: 4, type: "icon", rotate: "0deg", translate: "0px 0px" },
  { id: 5, type: "image", url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=200", rotate: "5deg", translate: "100px 10px" },
  { id: 6, type: "gradient", color: "from-amber-100 to-orange-50", rotate: "15deg", translate: "190px 50px" },
  { id: 7, type: "image", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200", rotate: "25deg", translate: "280px 120px" },
];

export default function CTASection() {
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
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const archCardVariant = (translate, rotate) => ({
    hidden: {
      opacity: 0,
      scale: 0.8,
      transform: `translate(0px, 40px) rotate(0deg)`,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transform: `translate(${translate.split(" ")[0]}, ${translate.split(" ")[1]}) rotate(${rotate})`,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <section className="relative w-full bg-white text-slate-900 pt-24 pb-40 px-6 sm:px-12 overflow-hidden border-t border-slate-100 flex flex-col items-center justify-center">
      {/* Background Decorative Grid matching the Hero pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50% 100%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Radial ambient background glow behind text */}
      <div className="absolute w-[600px] h-[300px] bg-gradient-to-tr from-blue-100/20 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none top-12" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-20 space-y-8">
        {/* Trust Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
          <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
            Limited Cohort Capacity
          </span>
        </motion.div>

        {/* Main Title Head */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
        >
          Ready to rewrite your <br />
          <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
            technical trajectory?
          </span>
        </motion.h2>

        {/* Subtitle description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed"
        >
          Join Eddva today. Secure your seat in our upcoming masterclasses, unlock elite workspace sandboxes, and accelerate your engineering skills.
        </motion.p>

        {/* Action Buttons matching Hero Weights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pb-16"
        >
          <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Instant Access</span>
            <FiArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-slate-50 hover:border-[#0066cc]/40 hover:shadow-lg">
            <FiCornerDownRight className="w-4 h-4 text-slate-400" />
            <span>View Pricing Plans</span>
          </button>
        </motion.div>
      </div>

      {/* BOTTOM LAUNCHER ARCH (Mirrors Hero layout perfectly but supports structural symmetry) */}
      <div className="relative w-full h-[220px] flex items-center justify-center pointer-events-none select-none mt-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {ctaGalleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={archCardVariant(item.translate, item.rotate)}
              className="absolute w-16 h-22 sm:w-28 sm:h-32 rounded-xl shadow-xl overflow-hidden bg-white border border-slate-100 flex-shrink-0"
              whileHover={{
                scale: 1.15,
                zIndex: 50,
                transition: { duration: 0.2 },
              }}
              style={{ pointerEvents: "auto" }}
            >
              {item.type === "image" && (
                <img
                  src={item.url}
                  alt="Platform Student"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              )}
              {item.type === "gradient" && (
                <div className={`w-full h-full bg-gradient-to-tr ${item.color} opacity-80`} />
              )}
              {item.type === "icon" && (
                <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                  <div className="p-2.5 bg-emerald-500 rounded-full text-white shadow-lg shadow-emerald-200">
                    <FiBookOpen className="w-4 h-4 animate-pulse" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}