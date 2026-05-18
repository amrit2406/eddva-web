import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiClock, FiEye, FiTag } from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "Designing for the Next Decade: The Rise of Kinetic Minimalist Systems",
    excerpt: "An exhaustive teardown of fluid responsive layouts, intentional high-contrast type scales, and physics-based motion vectors shaping luxury digital products.",
    category: "Design Systems",
    readTime: "8 min read",
    views: "2.4K views",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    title: "The Shift to Edge Architectures: Moving Compute Closer to the Consumer",
    category: "Engineering",
    readTime: "6 min read",
    date: "May 11, 2026",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=500",
    featured: false,
  },
  {
    id: 3,
    title: "Navigating Seed Rounds in 2026: A Blueprint for Tech Executives",
    category: "Management",
    readTime: "5 min read",
    date: "May 06, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
    featured: false,
  },
  {
    id: 4,
    title: "How to Build High-Performance Engineering Culture in Distributed Teams",
    category: "Culture",
    readTime: "7 min read",
    date: "April 29, 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500",
    featured: false,
  },
];

export default function BlogsSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className="relative w-full bg-white text-slate-900 py-24 sm:py-32 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      {/* Structural Minimalist Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px)] bg-[size:12rem_auto] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#0066cc]" />
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Intellect & Perspective
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              The Eddva Editorial <br />
              <span className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                & Industry Insights.
              </span>
            </h2>
          </div>
          
          <button className="group inline-flex items-center gap-2 text-sm font-bold text-[#0066cc] hover:text-[#004499] transition-colors pb-1">
            <span>View All Publications</span>
            <FiArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* ASYMMETRIC MASONRY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: THE FEATURED INSIGHT COMPONENT */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group lg:col-span-6 border border-slate-100 bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:border-slate-200/80 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative w-full h-80 overflow-hidden bg-slate-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-102 transition-all duration-500 ease-[0.16, 1, 0.3, 1]"
                />
                <div className="absolute top-4 left-4 bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md">
                  Featured Insight
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                    <span className="text-[#0066cc] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">{featuredPost.category}</span>
                    <span>•</span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#0066cc] transition-colors duration-200">
                    {featuredPost.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><FiClock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
                    <span className="flex items-center gap-1"><FiEye className="w-3.5 h-3.5" /> {featuredPost.views}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 group-hover:bg-gradient-to-r group-hover:from-[#004499] group-hover:to-[#0066cc] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <FiArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RIGHT: TRACK STACK LIST */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="lg:col-span-6 flex flex-col justify-between gap-6"
          >
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border border-slate-100 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex items-center justify-between gap-6 overflow-hidden"
              >
                {/* Horizontal Details */}
                <div className="flex items-center gap-5 flex-1 min-w-0">
                  {/* Aspect-Fixed Minimal Image Square */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-slate-50 flex-shrink-0 border border-slate-100 hidden sm:block">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                      <span className="text-slate-600 font-extrabold uppercase tracking-wide">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug truncate sm:whitespace-normal sm:line-clamp-2 group-hover:text-[#0066cc] transition-colors duration-200">
                      {post.title}
                    </h4>
                    <span className="block text-[11px] text-slate-400 font-medium">{post.date}</span>
                  </div>
                </div>

                {/* Micro Icon Pull */}
                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0066cc] flex-shrink-0">
                  <FiArrowUpRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}