import React from "react";
import { FiLayers, FiRadio, FiGithub, FiTwitter, FiLinkedin, FiGlobe } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-white text-slate-900 pt-20 pb-10 px-6 sm:px-12 overflow-hidden border-t border-slate-100">
      {/* Structural Decorative Bottom Lines */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#004499] via-[#0066cc] to-[#00a6ff]" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        
        {/* TOP BLOCK: SPLIT LINKS MATRIX */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Column 1: Brand Anchor Description (4 Columns wide) */}
          <div className="col-span-2 md:col-span-4 space-y-5 text-left">
            <a href="#" className="flex items-center gap-2.5 group select-none">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#004499] to-[#0066cc] flex items-center justify-center text-white font-black shadow-md shadow-blue-500/10">
                <FiLayers className="w-4 h-4" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tighter text-slate-900">eddva</span>
                <span className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mt-0.5">platforms</span>
              </div>
            </a>
            <p className="text-sm font-medium text-slate-400 max-w-xs leading-relaxed">
              Architecting the absolute benchmark for interactive technical masterclasses and secure cloud runtime workspaces.
            </p>
          </div>

          {/* Column 2: Program Tracks (2 Columns wide) */}
          <div className="col-span-1 md:col-span-2 space-y-4 text-left">
            <h5 className="text-xs font-black tracking-widest text-slate-900 uppercase">Masterclasses</h5>
            <ul className="space-y-2.5 text-sm font-bold text-slate-400">
              <li><a href="#courses" className="hover:text-[#0066cc] transition-colors">Design Systems</a></li>
              <li><a href="#courses" className="hover:text-[#0066cc] transition-colors">Edge Computing</a></li>
              <li><a href="#courses" className="hover:text-[#0066cc] transition-colors">System Architect</a></li>
              <li><a href="#courses" className="hover:text-[#0066cc] transition-colors">Compiler Labs</a></li>
            </ul>
          </div>

          {/* Column 3: Ecosystem Navigation (2 Columns wide) */}
          <div className="col-span-1 md:col-span-2 space-y-4 text-left">
            <h5 className="text-xs font-black tracking-widest text-slate-900 uppercase">Ecosystem</h5>
            <ul className="space-y-2.5 text-sm font-bold text-slate-400">
              <li><a href="#app" className="hover:text-[#0066cc] transition-colors">Mobile Platform</a></li>
              <li><a href="#blogs" className="hover:text-[#0066cc] transition-colors">Insights Blog</a></li>
              <li><a href="#faq" className="hover:text-[#0066cc] transition-colors">Faq Desk</a></li>
              <li><a href="#contact" className="hover:text-[#0066cc] transition-colors">Admissions</a></li>
            </ul>
          </div>

          {/* Column 4: Corporate / Legal (2 Columns wide) */}
          <div className="col-span-1 md:col-span-2 space-y-4 text-left">
            <h5 className="text-xs font-black tracking-widest text-slate-900 uppercase">Institutional</h5>
            <ul className="space-y-2.5 text-sm font-bold text-slate-400">
              <li><a href="#privacy" className="hover:text-[#0066cc] transition-colors">Data Privacy</a></li>
              <li><a href="#terms" className="hover:text-[#0066cc] transition-colors">Terms of Access</a></li>
              <li><a href="#security" className="hover:text-[#0066cc] transition-colors">Sandbox Guard</a></li>
              <li><a href="#press" className="hover:text-[#0066cc] transition-colors">Media Kit</a></li>
            </ul>
          </div>

          {/* Column 5: Operational Live Node Indicator (2 Columns wide) */}
          <div className="col-span-1 md:col-span-2 space-y-4 text-left">
            <h5 className="text-xs font-black tracking-widest text-slate-900 uppercase">Infrastructure</h5>
            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 shadow-sm text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">
              <FiRadio className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
              <span>Core Node: Active</span>
            </div>
          </div>

        </div>

        {/* BOTTOM BLOCK: COPYRIGHT & SOCIAL NETWORKS STRIP */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
          
          {/* Copyright parameters auto-updating */}
          <div className="flex items-center gap-1.5 order-2 sm:order-1 font-medium normal-case text-slate-400">
            <span>© {currentYear} Eddva Platforms Inc.</span>
            <span className="text-slate-200">•</span>
            <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-300"><FiGlobe /> US-EAST RUNTIME</span>
          </div>

          {/* Minimalist Grid Social Interaction Nodes */}
          <div className="flex items-center gap-5 order-1 sm:order-2 text-slate-400">
            <a href="#twitter" aria-label="Twitter Profile" className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 hover:text-[#0066cc] hover:bg-blue-50 hover:border-blue-100 transition-all duration-300">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="#github" aria-label="GitHub Repositories" className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 hover:text-slate-950 hover:bg-slate-100 hover:border-slate-200 transition-all duration-300">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn Network" className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 hover:text-[#004499] hover:bg-blue-50 hover:border-blue-100 transition-all duration-300">
              <FiLinkedin className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}