import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX, FiLayers, FiRadio } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll progression to toggle floating interface states
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 shadow-sm" 
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* BRAND LOGO IDENTITY */}
          <a href="#" className="flex items-center gap-2.5 group select-none">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-to-tr from-[#004499] to-[#0066cc] flex items-center justify-center text-white font-black shadow-md shadow-blue-500/10 overflow-hidden">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FiLayers className="w-4 h-4 transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-lg font-black tracking-tighter text-slate-900">eddva</span>
              <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mt-0.5">platforms</span>
            </div>
          </a>

          {/* CENTER NAVIGATION LINK DESKTOP TRACKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500">
            <a href="#courses" className="hover:text-[#0066cc] transition-colors relative group py-2">
              Tracks
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#app" className="hover:text-[#0066cc] transition-colors relative group py-2">
              Platform App
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#blogs" className="hover:text-[#0066cc] transition-colors relative group py-2">
              Insights
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
            <a href="#faq" className="hover:text-[#0066cc] transition-colors relative group py-2">
              Inquiries
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#0066cc] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          </nav>

          {/* RIGHT ACTION HUBS */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors px-4 py-2">
              Admissions
            </a>
            <button className="group relative inline-flex items-center justify-center gap-1.5 bg-slate-950 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-900/10 overflow-hidden">
              <span>Portal Login</span>
              <FiArrowUpRight className="w-4 h-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* MOBILE MENU CONTROLLER HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>

        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN LAYER ARCHITECTURE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 pb-8 flex flex-col justify-between md:hidden"
          >
            {/* Background Structural Detail lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:2rem_2rem] opacity-40 pointer-events-none" />

            {/* Mobile Vertical Track Routes */}
            <nav className="flex flex-col gap-6 text-2xl font-black tracking-tight text-slate-900 relative z-10 text-left">
              <a href="#courses" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0066cc] transition-colors">
                Tracks
              </a>
              <a href="#app" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0066cc] transition-colors">
                Platform App
              </a>
              <a href="#blogs" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0066cc] transition-colors">
                Insights
              </a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0066cc] transition-colors">
                Inquiries
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#0066cc] transition-colors text-lg font-bold text-slate-400 mt-4">
                Admissions Support →
              </a>
            </nav>

            {/* Mobile Footer Entry Modules */}
            <div className="space-y-4 relative z-10 w-full">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff] text-white py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/10"
              >
                <span>Portal Login</span>
                <FiArrowUpRight className="w-5 h-5" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pt-2">
                <FiRadio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>All System Pipelines Operational</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}