import React from "react";
// Imported Link from react-router-dom
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiArrowUpRight,
} from "react-icons/fi";
import logo from "../assets/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-slate-950 text-slate-200 pt-24 pb-12 px-6 sm:px-12 md:px-16 overflow-hidden">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative Top Boundary */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        {/* EXACT 4 COLUMN GRID MATRIX */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 items-start">
          {/* Column 1: Logo & Live Status Node */}
          <div className="space-y-6">
            <Link to="/" className="inline-block select-none">
              <div className="bg-white rounded-lg px-2 py-1">
                <img
                  src={logo}
                  alt="eddva platforms logo"
                  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-4">
            <h5 className="text-xs font-semibold tracking-widest text-white uppercase">
              Platform
            </h5>
            <ul className="space-y-3 text-sm font-medium text-slate-200">
              {[
                { name: "AI Assessment", path: "/" },
                { name: "Doubt Solver", path: "/" },
                { name: "Live Classes", path: "/" },
                { name: "Mock Tests", path: "/" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-1 hover:text-white transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    <FiArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h5 className="text-xs font-semibold tracking-widest text-white uppercase">
              Company
            </h5>
            <ul className="space-y-3 text-sm font-medium text-slate-200">
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/" },
                { name: "Contact", path: "/" },
                // { name: "Admissions", path: "/" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="space-y-4">
            <h5 className="text-xs font-semibold tracking-widest text-white uppercase">
              Support
            </h5>
            <ul className="space-y-3 text-sm font-medium text-slate-200">
              {[
                // { name: "Faq Desk", path: "/" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms and Conditions", path: "/terms" },
                // { name: "Sandbox Guard", path: "/" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors duration-200 block w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BLOCK: COPYRIGHT & SOCIAL NETWORKS STRIP */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright and Region parameters */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-2 text-sm text-slate-300 order-2 sm:order-1">
            <span>
              © {currentYear} EDDVA — Education Plus Advancement. All rights
              reserved.
            </span>
            <span className="hidden sm:inline text-slate-800">•</span>
          </div>

          {/* Social Network Interactions (Kept as <a> anchors for external navigation) */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            {[
              {
                icon: <FiTwitter className="w-4 h-4" />,
                href: "https://twitter.com",
                label: "Twitter",
                hoverClass:
                  "hover:text-sky-400 hover:border-sky-500/30 hover:bg-sky-500/5",
              },
              {
                icon: <FiGithub className="w-4 h-4" />,
                href: "https://github.com",
                label: "GitHub",
                hoverClass:
                  "hover:text-white hover:border-slate-700 hover:bg-slate-800",
              },
              {
                icon: <FiLinkedin className="w-4 h-4" />,
                href: "https://linkedin.com",
                label: "LinkedIn",
                hoverClass:
                  "hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-2.5 rounded-xl bg-slate-900 border border-slate-850 text-slate-400 transition-all duration-300 ${social.hoverClass}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
