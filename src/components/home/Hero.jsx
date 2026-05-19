import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiPlay,
  FiBookOpen,
  FiUsers,
  FiAward,
} from "react-icons/fi";

// Mock data for the curved gallery cards
const galleryItems = [
  {
    id: 1,
    type: "gradient",
    color: "from-teal-100 to-emerald-50",
    rotate: "-45deg",
    translate: "-360px 180px",
  },
  {
    id: 2,
    type: "image",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400",
    rotate: "-35deg",
    translate: "-320px 60px",
  },
  {
    id: 3,
    type: "image",
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400",
    rotate: "-25deg",
    translate: "-280px -40px",
  },
  {
    id: 4,
    type: "gradient",
    color: "from-purple-100 to-indigo-50",
    rotate: "-15deg",
    translate: "-240px -110px",
  },
  {
    id: 5,
    type: "image",
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400",
    rotate: "-5deg",
    translate: "-160px -140px",
  },
  // Center Item (Peak of the arch)
  { id: 6, type: "icon", rotate: "0deg", translate: "-80px -150px" },
  {
    id: 7,
    type: "image",
    url: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400",
    rotate: "5deg",
    translate: "20px -140px",
  },
  {
    id: 8,
    type: "gradient",
    color: "from-amber-100 to-orange-50",
    rotate: "15deg",
    translate: "160px -110px",
  },
  {
    id: 9,
    type: "image",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400",
    rotate: "25deg",
    translate: "280px -40px",
  },
  {
    id: 10,
    type: "image",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
    rotate: "35deg",
    translate: "320px 60px",
  },
  {
    id: 11,
    type: "gradient",
    color: "from-blue-100 to-cyan-50",
    rotate: "45deg",
    translate: "360px 180px",
  },
];

export default function HeroSection() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const archCardVariant = (translate, rotate) => ({
    hidden: {
      opacity: 0,
      scale: 0.8,
      transform: `translate(0px, 0px) rotate(0deg)`,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transform: `translate(${translate.split(" ")[0]}, ${translate.split(" ")[1]}) rotate(${rotate})`,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <section className="relative min-h-screen w-full bg-white text-slate-900 overflow-hidden flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12">
      {/* Background Decorative Grid Subtle Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col items-center justify-center relative z-10 mt-12">
        {/* THE CREATIVE INTERACTIVE ARCH */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none h-[450px] top-[-80px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="relative w-full h-full flex items-center justify-center"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={archCardVariant(item.translate, item.rotate)}
                className="absolute w-20 h-28 sm:w-38 sm:h-36 rounded-2xl shadow-xl overflow-hidden bg-white border border-slate-100 flex-shrink-0"
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
                    alt="Platform Preview"
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                )}
                {item.type === "gradient" && (
                  <div
                    className={`w-full h-full bg-gradient-to-tr ${item.color} opacity-80`}
                  />
                )}
                {item.type === "icon" && (
                  <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                    <div className="p-3 bg-emerald-500 rounded-full text-white shadow-lg shadow-emerald-200">
                      <FiBookOpen className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* HERO TYPOGRAPHY & CALL TO ACTIONS */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="text-center max-w-3xl pt-52 sm:pt-48 relative z-20"
        >
          {/* Trust Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
              Next Generation Learning
            </span>
          </motion.div>

          {/* Main H1 Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Smarter Learning. <br />
            <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
              Brighter Futures.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed mb-10"
          >
            "Eddva is not built for average learning. It is designed for those who seek precision, clarity, and an edge".
          </motion.p>

          {/* Dual Action CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
              {/* Shine effect */}
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10">Explore Courses</span>

              <FiArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 bg-white/80 backdrop-blur-sm text-slate-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-slate-50 hover:border-[#0066cc]/40 hover:shadow-lg">
              <span className="p-1 rounded-full bg-gradient-to-r from-[#004499] to-[#0066cc] text-white">
                <FiPlay className="w-4 h-4 fill-white" />
              </span>

              <span>Meet Our Mentors</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* FLOATING PREMIUM METRICS (BOTTOM ROW) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-slate-100 relative z-20"
      >
        {/* Metric 1 */}
        <div className="flex items-center gap-4 px-4 py-2">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 shadow-sm">
            <FiUsers className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">50K+ Active</h4>
            <p className="text-sm text-slate-400 font-medium">
              Global Lifelong Learners
            </p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex items-center gap-4 px-4 py-2 md:justify-center">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 shadow-sm">
            <FiAward className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">98% Success</h4>
            <p className="text-sm text-slate-400 font-medium">
              Course Completion Rate
            </p>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="flex items-center gap-4 px-4 py-2 md:justify-end">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 shadow-sm">
            <FiBookOpen className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">20+ Weekly</h4>
            <p className="text-sm text-slate-400 font-medium">
              New Premium Masterclasses
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
