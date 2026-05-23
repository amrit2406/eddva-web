import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiTarget,
  FiEye,
  FiUsers,
  FiAward,
  FiZap,
  FiBookOpen,
  FiStar,
  FiMapPin,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import MD from "../assets/md.png";
import A1 from "../assets/img1.png";
import A2 from "../assets/img2.png";
import A3 from "../assets/img3.png";
import A4 from "../assets/img4.png";
import A5 from "../assets/img5.png";
import A6 from "../assets/img6.png";

// ─── Shared ease ──────────────────────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// ─── Data ─────────────────────────────────────────────────────────────────────
const pillars = [
  {
    num: "01",
    icon: <FiTarget className="w-6 h-6" />,
    title: "Precision Over Volume",
    body: "We obsess over signal-to-noise ratio. Every lesson is stripped of filler and rebuilt around the exact insight that changes how you think.",
    accent: "#0066cc",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-[#0066cc]",
  },
  {
    num: "02",
    icon: <FiZap className="w-6 h-6" />,
    title: "Velocity by Design",
    body: "Our adaptive tracks compress years of industry experience into weeks of focused, high-leverage practice.",
    accent: "#7c3aed",
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-600",
  },
  {
    num: "03",
    icon: <FiShield className="w-6 h-6" />,
    title: "Vetted at Every Layer",
    body: "Mentors, content, and community — nothing ships without passing our rigorous quality bar. 100% of instructors are active practitioners.",
    accent: "#059669",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
  },
  {
    num: "04",
    icon: <FiGlobe className="w-6 h-6" />,
    title: "Built for the World",
    body: "Learners in 40+ countries. Cohorts that span time zones. A community that doesn't sleep because ambition never does.",
    accent: "#d97706",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
  },
];

const team = [
  {
    name: "Ankit Tripathi",
    role: "Additional Director",
    bio: "Former Principal Engineer at a Fortune 500. Built Eddva to democratize elite-level technical education.",
    image: A2,
    tag: "Founder",
    tagColor: "bg-blue-50 text-[#0066cc] border-blue-100",
  },
  {
    name: "Ayush Kumar Dubey",
    role: "Senior JEE educator",
    bio: "Ex-Google educator with 12 years designing learning systems that scale from 10 to 10 million students.",
    image: A1,
    tag: "Curriculum",
    tagColor: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    name: "Priyanka SV",
    role: "Marketing Head",
    bio: "Full-stack architect obsessed with building learning experiences that feel as smooth as they are powerful.",
    image: A3,
    tag: "Engineering",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    name: "Subham Mishra",
    role: "Full-Stack AI/ML Developer",
    bio: "Former Principal Engineer at a Fortune 500. Built Eddva to democratize elite-level technical education.",
    image: A6,
    tag: "Founder",
    tagColor: "bg-blue-50 text-[#0066cc] border-blue-100",
  },
  {
    name: "Akankshya Kar",
    role: "AI/ML Developer",
    bio: "Ex-Google educator with 12 years designing learning systems that scale from 10 to 10 million students.",
    image: A5,
    tag: "Curriculum",
    tagColor: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    name: "Bhagyashree Sendh",
    role: "Full-Stack Developer",
    bio: "Full-stack architect obsessed with building learning experiences that feel as smooth as they are powerful.",
    image: A4,
    tag: "Engineering",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

const timeline = [
  {
    year: "2020",
    event: "The Idea",
    detail:
      "Born from frustration with passive, low-quality online education. A napkin sketch became a conviction.",
  },
  {
    year: "2021",
    event: "First Cohort",
    detail:
      "200 hand-picked learners. 97% completion rate. We knew we had something real.",
  },
  {
    year: "2022",
    event: "Public Launch",
    detail: "Opened the doors. 10,000 active learners in the first 90 days.",
  },
  {
    year: "2023",
    event: "Global Scale",
    detail: "40+ countries. 200+ vetted mentors. The movement went worldwide.",
  },
  {
    year: "2024",
    event: "AI-Powered Paths",
    detail:
      "Adaptive learning tracks and live cohort masterclasses with global experts.",
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="w-full bg-white text-slate-900 overflow-hidden">
      {/* hero */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex overflow-hidden bg-slate-950"
      >
        {/* Left panel — text */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 flex flex-col justify-center px-8 sm:px-16 lg:px-24 pt-28 pb-16 w-full lg:w-1/2"
        >
          {/* Eyebrow */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-px w-10 bg-[#0066cc]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">About Eddva</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight mb-8"
          >
            A new standard
            <br />
            <span className="font-spicy bg-gradient-to-r from-[#0066cc] via-[#00a6ff] to-cyan-300 bg-clip-text text-transparent">
              in learning.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-10 font-medium"
          >
            Eddva exists at the intersection of intelligence and intention. We
            are redefining learning as an experience that is not only
            effective—but elevated. Moving beyond outdated systems, we offer an
            environment where understanding is deep, progress is deliberate, and
            growth is inevitable. Our philosophy is simple: Learning should be
            as refined as the ambitions it serves. This is why Eddva is designed
            to adapt, evolve, and respond to you—creating a seamless flow of
            knowledge that aligns with your pace and sharpens your thinking.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-10 font-medium"
          >
            Here, learning is not passive. It is precise. Purposeful.
            Transformative. This is not traditional education. This is
            intelligent mastery.
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="group relative inline-flex items-center gap-2 bg-[#0066cc] hover:bg-[#004499] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 overflow-hidden">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Explore Courses</span>
              <FiArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 border border-white/10 text-white/70 hover:text-white hover:border-white/30 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300">
              <FiBookOpen className="w-4 h-4" />
              Our Manifesto
            </button>
          </motion.div> */}

          {/* Stat row */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-6"
          >
            {[["50K+", "Learners"], ["98%", "Completion"], ["40+", "Countries"]].map(([val, lbl], i) => (
              <div key={i}>
                <p className="text-2xl font-black text-white">{val}</p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{lbl}</p>
              </div>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Right panel — image mosaic */}
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full overflow-hidden">
          {/* Dark overlay on left edge for blend */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute inset-0 bg-slate-950/30 z-10" />

          {/* Mosaic grid */}
          <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full p-2">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.2 }}
              className="row-span-2 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.35 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.5 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=600"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease, delay: 0.4 }}
              className="col-span-2 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
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

      {/* founders msg */}
      <section className="relative py-24 sm:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden bg-white">
        {/* Thin accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#0066cc]/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* LEFT: Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Editorial Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.15] tracking-tight">
                Built on discipline.
                <span className="font-spicy bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  Driven by vision.
                </span>
                {/* <p className="text-slate-500 text-xl font-medium leading-relaxed text-base mt-4">
                Lt. Col. Anil Tripathi (Retd.), Sena Medal Awardee
              </p> */}
              </h2>

              {/* Paragraphs split into two columns internally */}
              <div className="text-slate-500 font-medium leading-relaxed text-base">
                <p>
                  Lt. Col. Anil Tripathi (Retd.), Sena Medal Awardee, embodies a
                  legacy of discipline, leadership, and purpose. From serving
                  the nation with distinction to building Port Translogistics
                  Pvt. Ltd. into a respected enterprise, his journey reflects a
                  relentless pursuit of excellence.
                </p>
                <p>
                  Yet, beyond achievement, he recognized a deeper gap—a learning
                  system that lacked adaptability, depth, and true
                  understanding.
                </p>
                <p>
                  He envisioned something better: a platform that doesn’t just
                  deliver information, but interprets, adapts, and empowers.
                </p>
                <p>
                  Eddva was born from that vision—a refined learning ecosystem
                  designed for those who refuse to settle for conventional
                  paths.
                </p>
                <p>
                  Because true growth is not about access to knowledge—it is
                  about mastering it with clarity and intent.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Founder Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Glow Background */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-3xl rounded-full opacity-70" />

              {/* Floating Accent */}
              <div className="absolute top-6 -left-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-10 -right-4 w-28 h-28 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />

              {/* Main Image Card */}
              <motion.div
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                }}
                transition={{ type: "spring", stiffness: 180 }}
                className="group relative w-full max-w-md aspect-[4/5]"
                style={{ perspective: 1000 }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-[28px] p-[1.5px]">
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-white/80 backdrop-blur-xl border border-white/20">
                    {/* Image */}
                    <img
                      src={MD}
                      alt="Eddva Founder"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Gradient */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" /> */}

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                      <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transform translate-x-[500px] transition-transform duration-1000 group-hover:translate-x-[900px]" />
                    </div>

                    {/* Caption */}
                    <div
                      className="absolute bottom-5 left-5 right-5"
                    >
                      <div className="bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] border border-white/20 rounded-2xl px-5 py-4 shadow-xl">
                        <p className="text-white text-sm md:text-base font-semibold text-center tracking-wide">
                          Lt. Col. Anil Tripathi (Retd.)
                        </p>

                        <p className="text-white text-xs md:text-sm text-center mt-1 tracking-wider uppercase">
                          Sena Medal Awardee
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="relative py-24 sm:py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#0066cc]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">Our Pillars</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
                What we're
                <span className="font-spicy block bg-gradient-to-r from-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  built on.
                </span>
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-xs text-sm leading-relaxed sm:text-right">
              Four non-negotiable principles that shape every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25, ease } }}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-6xl font-black text-white/5 select-none leading-none">
                  {p.num}
                </span>

                <div className={`w-12 h-12 rounded-xl ${p.bg} ${p.border} border flex items-center justify-center ${p.text} mb-6`}>
                  {p.icon}
                </div>

                <h3 className="text-lg font-black text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">{p.body}</p>

                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: `linear-gradient(to right, ${p.accent}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="relative py-24 sm:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px)] bg-[size:6rem] opacity-40 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#0066cc]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">Our Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Five years.
              <span className="font-spicy ml-3 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                One mission.
              </span>
            </h2>
          </motion.div>

          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {timeline.map((t, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === i
                    ? "bg-[#0066cc] text-white shadow-lg shadow-blue-500/20"
                    : "bg-white border border-slate-200 text-slate-500 hover:border-[#0066cc]/30 hover:text-slate-700"
                }`}
              >
                {t.year}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-12 shadow-sm"
          >
            <div className="grid sm:grid-cols-12 gap-8 items-center">
              <div className="sm:col-span-3">
                <span className="text-7xl font-black text-slate-100 leading-none block">{timeline[activeTab].year}</span>
              </div>
              <div className="sm:col-span-9">
                <span className="inline-block text-xs font-black text-[#0066cc] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                  Milestone {activeTab + 1} of {timeline.length}
                </span>
                <h3 className="text-3xl font-black text-slate-900 mb-4">{timeline[activeTab].event}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-lg">{timeline[activeTab].detail}</p>

                <div className="flex gap-2 mt-8">
                  {timeline.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeTab ? "w-8 bg-[#0066cc]" : "w-1.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section> */}

      {/* Team Section */}
      <section className="relative py-24 sm:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              {/* <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#0066cc]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">
                  The Team
                </span>
              </div> */}
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                Where expertise meets
                <span className="font-spicy block bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  innovation.
                </span>
              </h2>
            </div>
            <p className="text-slate-400 font-medium max-w-xs text-sm leading-relaxed sm:text-right">
              Eddva is shaped by a collective of educators, technologists, and
              visionaries - each committed to delivering excellence at every
              layer of the experience.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.12 }}
                className="flex flex-col items-center text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm font-medium text-[#0066cc]">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 px-8 sm:px-16 lg:px-24 overflow-hidden bg-white border-t border-slate-100">
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50/60 to-transparent pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: big text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7"
            >
              {/* <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[#0066cc]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#0066cc] uppercase">
                  Get Started
                </span>
              </div> */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
                Your next chapter
                <br />
                <span className="font-spicy bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] bg-clip-text text-transparent">
                  starts here.
                </span>
              </h2>
            </motion.div>

            {/* Right: description + buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="lg:col-span-5 space-y-6"
            >
              <p className="text-slate-500 font-medium leading-relaxed text-lg">
                Join 50,000+ learners who chose to invest in themselves. Secure
                your seat in our next cohort and start building the career you
                actually want.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* Primary Button */}
                <Link
                  to="/register"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] text-white px-7 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <span className="relative z-10">Get Instant Access</span>

                  <FiArrowUpRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Secondary Button */}
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-600 hover:border-[#0066cc]/40 hover:text-slate-900 px-7 py-4 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-md"
                >
                  <FiTrendingUp className="w-4 h-4" />
                  View Courses
                </Link>
              </div>

              {/* Trust micro-copy */}
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <FiShield className="w-3.5 h-3.5 text-emerald-500" />
                14-day money-back guarantee. No questions asked.
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
