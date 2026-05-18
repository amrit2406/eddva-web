import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBookOpen, FiAward, FiSmartphone, FiCheck } from 'react-icons/fi';

const segments = [
  {
    id: "schools",
    title: "Schools & Colleges",
    subtitle: "Institutional Management",
    description: "Complete academic infrastructure designed to streamline governance, maximize connectivity, and automate resource tracking.",
    icon: FiBookOpen,
    features: [
      "Enterprise Grade ERP Engine",
      "Real-time Attendance Modules",
      "Dynamic Assessment & Grading",
      "Parent-Teacher Portal Matrix"
    ]
  },
  {
    id: "institutes",
    title: "JEE / NEET Institutes",
    subtitle: "High-Performance Testing",
    description: "Advanced computational evaluation architectures engineered for high-stakes competitive examinations and precision ranking metrics.",
    icon: FiAward,
    features: [
      "Adaptive Test Simulation Engines",
      "Granular Analytical Analytics",
      "AI-Driven Rank Predictors",
      "Optical OMR Evaluation Matrix"
    ]
  },
  {
    id: "students",
    title: "For Students",
    subtitle: "Personalized Ecosystems",
    description: "Direct-to-learner digital learning vectors designed to accelerate comprehension through immersive analytics and custom-paced paths.",
    icon: FiSmartphone,
    features: [
      "Interactive Learning Tracks",
      "Personalized Command Dashboards",
      "Real-Time Simulated Mock Tests",
      "Adaptive Error Log Aggregators"
    ]
  }
];

export default function SegmentNavigator() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Parent Stagger Container Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-white text-slate-950 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      
      {/* Structural Minimalist Grid Overlay for visual alignment */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px)] bg-[size:4rem] opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#00469C]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00469C]">
                Target Gateways
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Select your customized operating profile.
            </h2>
          </div>
          <p className="text-slate-400 font-medium max-w-xs leading-relaxed text-sm md:text-base">
            Deploy specialized structural toolsets tailored exactly to your functional parameters and deployment goals.
          </p>
        </div>

        {/* INTERACTIVE CARDS GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {segments.map((segment, idx) => {
            const IconComponent = segment.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={segment.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden group shadow-sm"
                style={{
                  boxShadow: isHovered 
                    ? '0 30px 60px -15px rgba(0, 70, 156, 0.08), 0 0 0 1px rgba(0, 93, 188, 0.15)' 
                    : '0 1px 3px 0 rgba(0, 0, 0, 0.02)'
                }}
                whileHover={{ y: -10 }}
              >
                {/* Dynamic Border Glow Effect using absolute divs */}
                <span 
                  className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00469C] to-[#005DBC] transition-transform duration-500 origin-left"
                  style={{ transform: isHovered ? 'scaleX(1)' : 'scaleX(0)' }}
                />

                <div>
                  {/* Top Header Group inside Card */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 transition-all duration-500 group-hover:bg-[#00469C]/5 group-hover:border-[#00469C]/20">
                      <IconComponent className="w-6 h-6 text-[#00469C] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    
                    {/* Animated Link Arrow */}
                    <div className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-400 transition-all duration-300 group-hover:bg-[#00469C] group-hover:text-white group-hover:border-transparent">
                      <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </div>
                  </div>

                  {/* Card Main Typography */}
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-400 block mb-1">
                      {segment.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#00469C] transition-colors duration-300">
                      {segment.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium mb-8">
                    {segment.description}
                  </p>

                  {/* Features Divider & Content List */}
                  <div className="border-t border-slate-100 pt-6 mt-auto">
                    <ul className="flex flex-col gap-3.5">
                      {segment.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center transition-all duration-500 group-hover:bg-[#005DBC]/5 group-hover:border-[#005DBC]/30">
                            <FiCheck className="w-2.5 h-2.5 text-[#005DBC]" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-600 transition-colors duration-300 group-hover:text-slate-800">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Micro bottom brand cue bar */}
                <div 
                  className="mt-8 pt-4 flex items-center gap-2 text-xs font-black tracking-widest uppercase transition-all duration-500 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-[#00469C]"
                >
                  <span>Initialize Gateway</span>
                  <span className="w-4 h-[1px] bg-[#00469C]" />
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}