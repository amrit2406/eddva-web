import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLayers, FiSmartphone, FiZap } from "react-icons/fi";

export default function DownloadAppSection() {
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
      {/* Background Subtle Wave Grid Matrix Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:8rem_5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_50%,#000_60%,transparent_100%)] opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT: PREMIUM PITCH & DOWNLOAD CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Trust Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Eddva Mobile Platform
              </span>
            </motion.div>

            {/* Main Segment Header */}
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Your learning engine. <br />
              <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                Now in your pocket.
              </span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-xl">
              Take your courses on the go with zero friction. Experience pristine offline video syncing, custom bite-sized interactive sandboxes, and instantaneous push notifications from your core program mentors.
            </motion.p>

            {/* Micro Feature Points */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                <div className="p-1.5 rounded-lg bg-blue-50 text-[#0066cc] border border-blue-100">
                  <FiZap className="w-4 h-4" />
                </div>
                <span>Offline Native Playback</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-slate-700">
                <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-100">
                  <FiLayers className="w-4 h-4" />
                </div>
                <span>Progress Multi-Sync</span>
              </div>
            </motion.div>

            {/* App Store Buttons matching Hero Button layout weights */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-950 text-white px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-900/10 overflow-hidden">
                <FiSmartphone className="w-5 h-5 text-sky-400" />
                <div className="text-left leading-tight">
                  <span className="block text-[10px] text-slate-400 font-medium uppercase tracking-wider">Download on the</span>
                  <span className="text-sm font-black">App Store</span>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-slate-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-2" />
              </button>

              <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:shadow-lg">
                <svg className="w-5 h-5 text-slate-600 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.783 12 3.609 22.186c-.183.183-.314.419-.374.678l13.447-7.768 3.565-2.06c.712-.411.712-1.442 0-1.853l-3.565-2.06L3.235 1.361c.06.259.191.495.374.678z" />
                </svg>
                <div className="text-left leading-tight">
                  <span className="block text-[10px] text-slate-400 font-medium uppercase tracking-wider">Get it on</span>
                  <span className="text-sm font-black">Google Play</span>
                </div>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT: THE ROTATED HERO-STYLE PHONE CANVAS */}
          <div className="lg:col-span-6 relative w-full h-[550px] flex items-center justify-center mt-12 lg:mt-0 select-none">
            {/* Massive Signature Backdrop Radial Glow */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-blue-100/40 via-sky-100/20 to-transparent rounded-[100px] blur-3xl -z-10" />

            {/* Bottom/Back Device Mockup Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, transform: "translateX(-40px) translateY(40px) rotate(-18deg)" }}
              whileInView={{ opacity: 0.6, scale: 1, transform: "translateX(-60px) translateY(50px) rotate(-14deg)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ transform: "translateX(-70px) translateY(40px) rotate(-10deg)", opacity: 0.8, zIndex: 20 }}
              className="absolute w-56 h-[420px] rounded-[36px] bg-slate-900 border-4 border-slate-950 p-3 shadow-xl overflow-hidden hidden sm:block"
            >
              {/* Fake dashboard structure matching your platform */}
              <div className="w-full h-full rounded-[26px] bg-gradient-to-b from-slate-950 to-slate-900 p-4 space-y-4">
                <div className="h-4 w-20 bg-white/10 rounded-full" />
                <div className="h-32 w-full bg-gradient-to-tr from-purple-500/20 to-indigo-500/10 rounded-xl border border-white/5" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-white/10 rounded-full" />
                  <div className="h-3 w-4/5 bg-white/5 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Top/Front Primary Device Mockup Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, transform: "translateX(40px) translateY(-20px) rotate(8deg)" }}
              whileInView={{ opacity: 1, scale: 1, transform: "translateX(20px) translateY(0px) rotate(6deg)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              whileHover={{ scale: 1.05, transform: "translateX(10px) translateY(-10px) rotate(2deg)", zIndex: 30 }}
              className="absolute w-64 h-[460px] rounded-[42px] bg-white border-[6px] border-slate-950 p-3 shadow-2xl overflow-hidden"
            >
              {/* Native Screen UI Content */}
              <div className="w-full h-full rounded-[30px] bg-white p-4 flex flex-col justify-between relative overflow-hidden">
                {/* Dynamic Island Phone Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-full z-40" />

                <div className="space-y-4 pt-6">
                  {/* Fake User Profile Heading */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Welcome Back</span>
                      <div className="h-3 w-16 bg-slate-900 rounded-full" />
                    </div>
                    <div className="h-7 w-7 rounded-full bg-slate-100 border border-slate-200" />
                  </div>

                  {/* Curated Mini Card Block matching Hero Section Grist */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-500 to-sky-500 text-white space-y-3 shadow-md">
                    <div className="h-6 w-6 rounded-lg bg-white/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="h-3 w-3/4 bg-white rounded-full" />
                      <div className="h-2 w-1/2 bg-white/60 rounded-full" />
                    </div>
                  </div>

                  {/* Staggered Lessons List */}
                  <div className="space-y-2 pt-2">
                    <div className="h-2 w-20 bg-slate-200 rounded-full mb-3" />
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-2 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-md bg-slate-50 border border-slate-100" />
                          <div className="h-2 w-24 bg-slate-400 rounded-full" />
                        </div>
                        <div className="h-2 w-6 bg-slate-200 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom App Navigation pill */}
                <div className="h-1 w-20 bg-slate-300 rounded-full mx-auto" />
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}