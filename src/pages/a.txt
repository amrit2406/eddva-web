import React from "react";
import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiAward, FiArrowRight } from "react-icons/fi";

export default function AboutPage() {
  // Animation Variants (Matching your Login Page)
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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  return (
    <main className="w-full bg-white text-slate-900 overflow-hidden">
      
      {/* 1. HERO BANNER - High Impact */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-40">
           <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:3rem_3rem]" />
        </div>
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-slate-900" 
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 text-center px-6"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
          >
            Empowering <span className="text-blue-400">Mindsets.</span><br/>
            Building <span className="font-spicy bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Eddva.</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            We're more than a platform; we're a movement dedicated to bridging the gap between potential and mastery.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. FOUNDER'S STORY SECTION */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background Dot Matrix (Matching your Login page) */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:2rem_2rem] opacity-70 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeInUp} className="text-blue-600 font-bold tracking-widest uppercase text-sm">
                Our Origin
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black mt-4 mb-6 text-slate-900">
                Built on discipline.<br/>
                <span className="text-slate-500">Driven by vision.</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  Eddva didn't start in a boardroom; it started with a single realization: the current education system rewards memory, but the future rewards <strong>mastery</strong>.
                </p>
                <p>
                  Our founder envisioned a space where discipline isn't a chore, but a competitive advantage. By blending high-performance psychology with cutting-edge technology, we created a sanctuary for the ambitious.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex gap-8">
                <div>
                  <h4 className="text-3xl font-black text-blue-600">10k+</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase">Students</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-blue-600">95%</h4>
                  <p className="text-sm font-bold text-slate-500 uppercase">Success Rate</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
              <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden border border-slate-200 shadow-2xl relative z-10">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-transparent flex items-center justify-center">
                   <FiTarget className="w-32 h-32 text-blue-200" />
                </div>
              </div>
              {/* Decorative Rings (Matching Hero) */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-2 border-dashed border-blue-200 rounded-full animate-spin-slow pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR TEAM SECTION */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Where expertise meets <span className="text-blue-600">innovation</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-slate-500 max-w-2xl mx-auto font-medium">
              Meet the architects of your growth. A collective of educators, developers, and strategists.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rivers", role: "Founder & CEO", icon: <FiAward /> },
              { name: "Sarah Chen", role: "Head of Content", icon: <FiUsers /> },
              { name: "Marcus Vane", role: "Lead Developer", icon: <FiTarget /> }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white rounded-3xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-slate-500 font-medium mb-4">{member.role}</p>
                <div className="h-px w-full bg-slate-100 mb-4" />
                <button className="text-sm font-bold text-blue-600 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Profile <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}