import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiClock, FiLayers, FiStar } from "react-icons/fi";

const coursesData = [
  {
    id: 1,
    title: "Advanced System Architecture & Microservices",
    category: "Engineering",
    duration: "12 Weeks",
    level: "Advanced",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600",
    size: "large", // Takes up more visual real estate
    badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    id: 2,
    title: "UI/UX Masterclass: Premium Interface Design",
    category: "Design",
    duration: "8 Weeks",
    level: "All Levels",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600",
    size: "normal",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    id: 3,
    title: "Product Strategy for Next-Gen Founders",
    category: "Management",
    duration: "6 Weeks",
    level: "Intermediate",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
    size: "normal",
    badgeColor: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    id: 4,
    title: "AI Integration & Machine Learning Pipelines",
    category: "Data Science",
    duration: "10 Weeks",
    level: "Advanced",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600",
    size: "large",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

const categories = ["All Programs", "Engineering", "Design", "Management", "Data Science"];

export default function CoursesSection() {
  const [activeFilter, setActiveFilter] = useState("All Programs");

  const filteredCourses = coursesData.filter(
    (course) => activeFilter === "All Programs" || course.category === activeFilter
  );

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
      {/* Structural Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px)] bg-[size:10rem_auto] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-xl space-y-4"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Curated Syllabus
              </span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Explore Our Premium <br />
              <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                Learning Tracks.
              </span>
            </motion.h2>
          </motion.div>

          {/* Dynamic Filter Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap gap-2 max-w-xl"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${
                  activeFilter === cat
                    ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCourses.map((course) => (
            <motion.div
              layout
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`group relative rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-2xl hover:border-slate-200/80 transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                course.size === "large" ? "lg:col-span-2" : "lg:col-span-1"
              }`}
            >
              {/* Image & Tag Area */}
              <div className="relative w-full h-64 overflow-hidden bg-slate-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-[0.16, 1, 0.3, 1]"
                />
                
                {/* Overlay Top Bar inside Card */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold border backdrop-blur-md ${course.badgeColor}`}>
                    {course.category}
                  </span>
                  <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm text-xs font-bold text-slate-800">
                    <FiStar className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content Details Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#0066cc] transition-colors duration-300">
                    {course.title}
                  </h3>
                </div>

                {/* Micro Metadata Row */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-slate-50 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <FiClock className="w-4 h-4 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiLayers className="w-4 h-4 text-slate-400" />
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Hover Action Corner Strip */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
                <div className="p-3 rounded-xl bg-gradient-to-r from-[#004499] to-[#0066cc] text-white shadow-lg shadow-blue-500/20">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM GLOBAL CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
            Looking for enterprise packages?{" "}
            <a href="#contact" className="text-[#0066cc] underline hover:text-[#004499] font-bold ml-1 transition-colors">
              Talk to our advisory team
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
}