import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiCoffee,
  FiHeart,
  FiGlobe,
  FiMonitor,
  FiSmile,
  FiTrendingUp,
  FiShield
} from "react-icons/fi";

// ─── Shared ease ──────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// ─── Data ─────────────────────────────────────────────────────────────────────
const roles = [
  {
    id: 1,
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    description: "Help us scale our learning platform. You'll work with React, Node.js, and AWS to build experiences that handle millions of requests.",
    color: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "New York or Remote",
    type: "Full-Time",
    description: "Shape the future of how people learn online. You'll lead UI/UX for our core curriculum delivery engine.",
    color: "from-violet-500 to-fuchsia-400",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    id: 3,
    title: "Curriculum Lead - AI/ML",
    department: "Product",
    location: "London or Remote",
    type: "Full-Time",
    description: "Design our new AI engineering track. You'll partner with industry experts to create rigorous, project-based content.",
    color: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    id: 4,
    title: "Growth Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-Time",
    description: "Drive student acquisition and community engagement across global markets through data-driven campaigns.",
    color: "from-amber-500 to-orange-400",
    bg: "bg-amber-50",
    text: "text-amber-600",
  }
];

const perks = [
  {
    title: "Work from Anywhere",
    description: "We are a remote-first team. Work from the comfort of your home, a cafe, or a co-working space anywhere in the world.",
    icon: <FiGlobe className="w-6 h-6" />
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your dependents, plus mental health days.",
    icon: <FiHeart className="w-6 h-6" />
  },
  {
    title: "Continuous Learning",
    description: "$2,000 annual budget for courses, books, and conferences. Because we believe in growth.",
    icon: <FiTrendingUp className="w-6 h-6" />
  },
  {
    title: "Home Office Setup",
    description: "We'll provide the latest gear and a stipend to make sure your workspace is comfortable and productive.",
    icon: <FiMonitor className="w-6 h-6" />
  }
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function CareersPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeDept, setActiveDept] = useState("All");
  
  const filteredRoles = activeDept === "All" 
    ? roles 
    : roles.filter(r => r.department === activeDept);

  const departments = ["All", "Engineering", "Design", "Product", "Marketing"];

  return (
    <main className="w-full bg-white text-slate-900 overflow-hidden">

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — full-bleed split layout with parallax
      ══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex overflow-hidden bg-slate-950">

        {/* Left panel — text */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-center px-8 sm:px-16 lg:px-24 pt-28 pb-16 w-full lg:w-1/2"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-[#0066cc]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">Careers at Eddva</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-8"
          >
            Join the mission.
            <br />
            <span className="font-spicy bg-gradient-to-r from-[#0066cc] via-[#00a6ff] to-cyan-300 bg-clip-text text-transparent">
              Build the future.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed max-w-md mb-10 font-medium"
          >
            We're a team of engineers, designers, and educators obsessed with fixing how the world learns. Come do your life's best work with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={() => {
                document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center gap-2 bg-[#0066cc] hover:bg-[#004499] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">View Open Roles</span>
              <FiArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right panel — image mosaic */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full overflow-hidden">
          {/* Dark overlay on left edge for blend */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute inset-0 bg-slate-950/30 z-10" />

          {/* Large Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.2 }}
            className="absolute inset-0 p-4 pl-0 py-8"
          >
            <div className="w-full h-full rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200" alt="Team collaborating" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-8 sm:left-16 lg:left-24 flex items-center gap-2 text-slate-600 text-xs font-semibold tracking-widest uppercase z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-transparent to-slate-600"
          />
          Scroll
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. PERKS & BENEFITS — highlight section
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-8 sm:px-16 lg:px-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              How we support our team
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">
              We demand exceptional work, which means we provide exceptional support. We want this to be the best place you've ever worked.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {perks.map((p, i) => (
               <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="flex flex-col gap-4"
               >
                 <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066cc] flex items-center justify-center flex-shrink-0">
                   {p.icon}
                 </div>
                 <div>
                   <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.description}</p>
                 </div>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          3. OPEN ROLES — interactive filter and list
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="open-roles" className="relative py-24 sm:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px)] bg-[size:6rem] opacity-40 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#0066cc]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">Open Positions</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Find your
                <span className="font-spicy ml-3 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  next big thing.
                </span>
              </h2>
            </motion.div>

            {/* Tabs */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-wrap gap-2"
            >
              {departments.map((dept, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDept(dept)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeDept === dept
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Roles List */}
          <div className="flex flex-col gap-4">
            {filteredRoles.map((role, i) => (
              <motion.div
                key={role.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:shadow-blue-500/10 hover:border-[#0066cc]/30 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${role.bg} ${role.text}`}>
                      {role.department}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2 group-hover:text-[#0066cc] transition-colors">
                    {role.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-2xl mb-4">
                    {role.description}
                  </p>
                  
                  <div className="flex items-center gap-5 text-xs font-semibold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-4 h-4 text-[#0066cc]" />
                      {role.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiClock className="w-4 h-4 text-[#0066cc]" />
                      {role.type}
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-[#0066cc] px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-300">
                    Apply Now
                    <FiArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
            
            {filteredRoles.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-500 font-medium">No open roles in this department right now. Check back later!</p>
              </div>
            )}
          </div>
          
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. CTA — full-width editorial closer
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 sm:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden bg-white border-t border-slate-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50/60 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0066cc]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">Don't see a fit?</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Great talent
                <br />
                <span className="font-spicy bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  creates its own role.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                Even if we don't have a role open right now, we're always looking for exceptional people who believe in our mission. Reach out.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] text-white px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10">Email Us</span>
                  <FiArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
