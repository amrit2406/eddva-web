import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiLayers, FiSmartphone, FiZap, FiDownload, FiCheck, FiStar, FiTrendingUp } from "react-icons/fi";

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
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const features = [
    { icon: <FiZap className="w-4 h-4" />, text: "Offline Native Playback", color: "text-[#0066cc]", bg: "bg-blue-50", border: "border-blue-200" },
    { icon: <FiLayers className="w-4 h-4" />, text: "Progress Multi-Sync", color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
    { icon: <FiCheck className="w-4 h-4" />, text: "Instant Push Notifications", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200" },
    { icon: <FiTrendingUp className="w-4 h-4" />, text: "Bite-sized Interactive Labs", color: "text-indigo-600", bg: "bg-indigo-50", border: "border-indigo-200" },
  ];

  const reviews = [
    { rating: 4.9, downloads: "50K+", label: "App Store Rating" },
    { rating: 4.8, downloads: "100K+", label: "Google Play Rating" },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 py-28 sm:py-36 px-6 sm:px-12 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:6rem_6rem]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#0066cc]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-10 items-center">
          
          {/* LEFT: Content & CTAs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Trust Badge */}
            <motion.div 
              variants={fadeInUp}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200/80 shadow-lg shadow-slate-200/50"
            >
              <motion.span 
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#0066cc] to-[#00a6ff]"
              />
              <span className="text-xs font-bold tracking-[0.2em] text-slate-600 uppercase">
                Free Mobile App
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]"
            >
              Your learning engine.
              <span className="block bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent mt-2">
                Now in your pocket.
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-slate-600 font-medium leading-relaxed"
            >
              Take your courses anywhere with zero friction. Offline video syncing, interactive sandboxes, and instant notifications from your mentors — all in one beautiful app.
            </motion.p>

            {/* Feature Grid */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${feature.bg} border ${feature.border} shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${feature.bg} ${feature.color} border border-white shadow-sm`}>
                    {feature.icon}
                  </div>
                  <span className="text-sm font-bold text-slate-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Review Badges */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              {reviews.map((review, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-slate-200 shadow-sm"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-black text-slate-900">{review.rating}</div>
                    <div className="text-xs text-slate-500 font-medium">{review.downloads}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* App Store Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-slate-950 text-white px-7 py-4 rounded-2xl font-bold shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300 overflow-hidden min-w-[220px]"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10"
                >
                  <FiSmartphone className="w-5 h-5 text-[#0066cc]" />
                </motion.div>
                <div className="text-left leading-tight flex-grow">
                  <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Download on the</span>
                  <span className="text-sm font-black">App Store</span>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc] to-[#00a6ff] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 border-2 border-slate-200 bg-white text-slate-700 px-7 py-4 rounded-2xl font-bold hover:bg-slate-50 hover:border-[#0066cc]/50 hover:shadow-lg transition-all duration-300 min-w-[220px]"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50"
                >
                  <svg className="w-5 h-5 text-slate-700 fill-current" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.783 12 3.609 22.186c-.183.183-.314.419-.374.678l13.447-7.768 3.565-2.06c.712-.411.712-1.442 0-1.853l-3.565-2.06L3.235 1.361c.06.259.191.495.374.678z" />
                  </svg>
                </motion.div>
                <div className="text-left leading-tight flex-grow">
                  <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider">Get it on</span>
                  <span className="text-sm font-black">Google Play</span>
                </div>
                <FiArrowUpRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </motion.div>

            {/* Download Stats */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-6 pt-4 border-t border-slate-200"
            >
              <div>
                <div className="text-2xl font-black text-slate-900">250K+</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Users</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-2xl font-black text-slate-900">94%</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Retention Rate</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <div className="text-2xl font-black text-slate-900">4.8★</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Average Rating</div>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT: Phone Graphics Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 relative w-full h-[650px] flex items-center justify-center"
          >
            {/* Background Glow */}
            <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#0066cc]/20 via-purple-500/15 to-transparent rounded-full blur-3xl" />
            
            {/* Floating Notification Cards */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="absolute top-12 left-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shadow-sm">
                  <FiCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lesson Complete</div>
                  <div className="text-sm font-black text-slate-900">Microservices 101</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 right-8 p-4 bg-white rounded-2xl border border-slate-200 shadow-xl z-20 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0066cc]/10 text-[#0066cc] shadow-sm">
                  <FiZap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">New Lesson</div>
                  <div className="text-sm font-black text-slate-900">System Design</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
              className="absolute top-20 right-0 p-3 bg-white rounded-xl border border-slate-200 shadow-lg z-20 hidden xl:block"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                  <FiTrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase">Streak</div>
                  <div className="text-xs font-black text-slate-900">14 Days 🔥</div>
                </div>
              </div>
            </motion.div>

            {/* Phone Graphics Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -15 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop"
                alt="Eddva Mobile App on iPhone"
                className="w-64 sm:w-72 h-[580px] sm:h-[620px] object-cover rounded-[48px] shadow-2xl shadow-slate-900/30 border-4 border-slate-900"
              />
              
              {/* Phone Screen Glow */}
              <div className="absolute inset-0 rounded-[48px] bg-gradient-to-br from-[#0066cc]/10 via-transparent to-purple-500/10 pointer-events-none" />
            </motion.div>

            {/* Decorative Rotating Circles */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 w-full h-full border-2 border-[#0066cc]/10 rounded-full pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 w-full h-full border-2 border-purple-500/10 rounded-full pointer-events-none"
              style={{ transform: 'scale(1.1)' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}