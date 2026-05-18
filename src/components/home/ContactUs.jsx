import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiMessageSquare, FiMapPin, FiSend } from "react-icons/fi";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      {/* Background Micro Dot Structure */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: COMMUNICATIONS CHANNELS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Trust Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Admissions & Support
              </span>
            </motion.div>

            {/* Section Heading */}
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Let’s architect your <br />
              <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                next breakthrough.
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed max-w-md">
              Have questions about upcoming cohort deadlines, syllabus deep-dives, or enterprise packages? Drop us a line and our advisory team will sync up within 12 hours.
            </motion.p>

            {/* Minimalist Contact Info Cards */}
            <motion.div variants={fadeInUp} className="space-y-4 pt-4 border-t border-slate-100">
              <div className="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-lg hover:border-slate-200/80">
                <div className="p-3 rounded-lg bg-blue-50 text-[#0066cc] border border-blue-100 transition-transform duration-300 group-hover:scale-110">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">Email Us Directly</span>
                  <a href="mailto:admissions@eddva.com" className="text-sm font-bold text-slate-800 hover:text-[#0066cc] transition-colors">admissions@eddva.com</a>
                </div>
              </div>

              <div className="group flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white transition-all duration-300 hover:shadow-lg hover:border-slate-200/80">
                <div className="p-3 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 transition-transform duration-300 group-hover:scale-110">
                  <FiMessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-extrabold tracking-wider text-slate-400 uppercase">Corporate Sales</span>
                  <a href="#teams" className="text-sm font-bold text-slate-800 hover:text-purple-600 transition-colors">enterprise@eddva.com</a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: PREMIUM FORM INTERFACE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 relative rounded-2xl border border-slate-100 bg-white p-8 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Absolute accent glow mirroring the Hero signature */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input 1 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066cc] focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* Input 2 */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@workspace.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066cc] focus:bg-white transition-all duration-300"
                  />
                </div>
              </div>

              {/* Input 3 */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your learning goals or team size..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0066cc] focus:bg-white transition-all duration-300 resize-none"
                />
              </div>

              {/* Action Button matching Hero Primary CTA weight */}
              <button
                type="submit"
                className="group relative w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Transmit Message</span>
                <FiSend className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}