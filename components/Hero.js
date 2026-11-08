"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import profileImg from "@/public/assets/profile.webp";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Subtle, buttery-smooth scroll zoom calculation:
  // When scrolling down, smoothly zooms out slightly (e.g. 1.0 -> 0.90) with origin pinned to bottom center.
  // When scrolling up, smoothly returns to 1.0.
  const photoScale = Math.max(0.9, 1 - scrollY * 0.00025);

  return (
    <section
      id="top"
      className="relative w-full h-screen h-[100dvh] min-h-[100dvh] max-h-[100dvh] lg:h-screen lg:min-h-[600px] lg:max-h-screen flex flex-col justify-end overflow-hidden pt-16 pb-0 lg:pt-14 lg:pb-0"
    >
      {/* Subtle blueprint grid paper background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.05] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Ambient background glow orbs */}
      <div className="absolute top-10 -left-20 w-[450px] h-[450px] rounded-full bg-purple-400/20 dark:bg-purple-600/15 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[480px] h-[480px] rounded-full bg-orange-300/20 dark:bg-orange-600/10 blur-[130px] pointer-events-none -z-10" />

      {/* Main Grid Content Area */}
      <div className="w-full max-w-[1480px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-14 relative z-10 h-full flex flex-col justify-between lg:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-2 items-end h-full">
          {/* ===================== LEFT COLUMN: Text & CTAs ===================== */}
          <div className="lg:col-span-5 xl:col-span-5 lg:col-start-1 flex flex-col justify-center self-center z-20 py-4 lg:py-0">
            <div>
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] xl:text-[58px] 2xl:text-[64px] font-extrabold font-Outfit tracking-tight leading-[1.08] text-gray-900 dark:text-white">
                Hi, I&apos;m <br />
                <span className="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] bg-clip-text text-transparent drop-shadow-sm">
                  Digvijay Singh
                </span>
              </h1>

              {/* Role Subtitle with vertical accent */}
              <div className="flex items-center gap-2.5 mt-3.5 sm:mt-5 text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-bold font-Outfit text-gray-900 dark:text-white">
                <span className="text-purple-600 dark:text-purple-400 text-2xl sm:text-3xl lg:text-4xl font-light leading-none">
                  |
                </span>
                <span className="tracking-tight">AI Full Stack Engineer</span>
              </div>

              {/* Description */}
              <p className="mt-4 sm:mt-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-[17px] xl:text-lg leading-relaxed max-w-md lg:max-w-lg font-normal">
                Specializing in React.js, Node.js, Express.js, and MongoDB.
                Hands-on experience architecting production-grade web platforms,
                scalable data models, and role-based ERP/CMS infrastructure.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-6 sm:mt-7">
                <a
                  href="/#contact"
                  className="px-5 sm:px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9333ea] via-[#e11d48] to-[#f97316] text-white font-semibold text-xs sm:text-sm lg:text-[15px] flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-orange-500/30 hover:scale-[1.03] active:scale-95 transition-all duration-300 whitespace-nowrap"
                >
                  <span>Let&apos;s work together</span>
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <a
                  href="/Digvijay_Singh_Resume.pdf"
                  download="Digvijay_Singh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2.5 rounded-full bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-white/15 text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/40 font-semibold text-xs sm:text-sm lg:text-[15px] flex items-center gap-2 shadow-sm hover:bg-purple-50/50 dark:hover:bg-purple-950/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 group whitespace-nowrap"
                  title="Download Digvijay Singh's Resume (PDF)"
                >
                  <span>Resume</span>
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-y-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </a>
              </div>

              {/* Social Media Links Bar */}
              <div className="hidden sm:flex items-center gap-3 sm:gap-4 mt-6 sm:mt-7 py-2 sm:py-2.5 px-4 sm:px-5 rounded-full bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-md w-fit">
                <a
                  href="https://github.com/imdigvijaysingh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/digvijaysinghpundir"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/digvijays45"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  title="X (formerly Twitter)"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="mailto:digvijaysinghpundir18@gmail.com"
                  aria-label="Email digvijaysinghpundir18@gmail.com"
                  title="Email: digvijaysinghpundir18@gmail.com"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
                <a
                  href="tel:+916397007167"
                  aria-label="Call +91 6397007167"
                  title="Call +91 6397007167"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/916397007167"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp +91 6397007167"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#25D366] hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </a>
              </div>

              {/* Bottom Left Doodle & Scroll down indicator */}
              <div className="flex items-center gap-2.5 sm:gap-3 mt-7 sm:mt-8 lg:mt-9 select-none">
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-orange-500 dark:text-orange-400 -rotate-6"
                  viewBox="0 0 30 30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 6 C 12 10, 8 18, 10 24" />
                  <path d="M6 19 L 10 25 L 15 21" />
                </svg>
                <p className="font-handwriting text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-xl leading-tight -rotate-3">
                  Scroll down
                  <br />
                  to explore more
                </p>
                <div className="w-4 h-7 sm:w-4.5 sm:h-8 rounded-full border-2 border-gray-400 dark:border-gray-500 flex justify-center pt-1.5 ml-1">
                  <div className="w-1.5 h-2.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== CENTER COLUMN: Cutout Photo Touching Bottom & Dynamic Parallax ===================== */}
          <div className="lg:col-span-4 xl:col-span-4 lg:col-start-6 flex justify-center items-end relative self-end h-full select-none">
            {/* Top right sparklines above head */}
            <svg
              className="absolute top-8 sm:top-12 right-14 sm:right-20 w-6 h-6 text-purple-600 dark:text-purple-400 z-20 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="12" y1="2" x2="12" y2="7" />
              <line x1="4.93" y1="4.93" x2="8.46" y2="8.46" />
              <line x1="19.07" y1="4.93" x2="15.54" y2="8.46" />
            </svg>

            {/* Hand-drawn "building for the web" annotation with curved doodle arrow */}
            <div className="absolute top-6 right-2 sm:right-6 z-20 flex flex-col items-center pointer-events-none">
              <span className="font-handwriting text-gray-800 dark:text-gray-200 text-sm sm:text-base xl:text-2xl font-bold leading-tight rotate-[-4deg]">
                building
                <br />
                for the web
              </span>
              <svg
                className="w-9 h-8 text-gray-800 dark:text-gray-200 mt-0.5"
                viewBox="0 0 50 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M40 8 C 28 6, 14 14, 16 32" />
                <path d="M9 25 L 16 33 L 23 27" />
              </svg>
            </div>

            {/* Orange sparklines left of neck */}
            <svg
              className="absolute top-[32%] left-4 sm:left-8 w-6 h-6 text-orange-500 dark:text-orange-400 z-20 pointer-events-none"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="14" y1="4" x2="9" y2="9" />
              <line x1="17" y1="12" x2="10" y2="12" />
              <line x1="14" y1="20" x2="9" y2="15" />
            </svg>

            {/* 3D Glowing Elliptical Orbital Ring with purple-to-orange gradient */}
            <svg
              className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] lg:w-[640px] h-[200px] sm:h-[240px] lg:h-[290px] -rotate-[16deg] pointer-events-none -z-10"
              viewBox="0 0 580 310"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="orbitGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.85" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <ellipse
                cx="290"
                cy="155"
                rx="275"
                ry="140"
                stroke="url(#orbitGrad)"
                strokeWidth="2.5"
                filter="url(#glow)"
              />
            </svg>

            {/* Organic soft gradient backdrop blob behind the portrait */}
            <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[360px] lg:w-[400px] h-[300px] sm:h-[360px] lg:h-[400px] rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-gradient-to-tr from-purple-300/35 via-pink-200/30 to-orange-200/35 dark:from-purple-900/30 dark:via-pink-900/20 dark:to-orange-900/20 blur-2xl pointer-events-none -z-10" />

            {/* ================= FLOATING TECH ICONS (Pure icons without container/text) ================= */}

            {/* 1. React Icon - Top Left */}
            <div
              title="React"
              className="float-anim absolute top-20 sm:top-24 left-3 sm:left-6 lg:left-0 xl:left-4 z-20 hover:scale-125 transition-transform duration-300 drop-shadow-[0_4px_16px_rgba(0,216,255,0.45)] cursor-pointer"
            >
              <svg
                viewBox="-11.5 -10.23174 23 20.46348"
                className="w-8 h-8 sm:w-12 sm:h-12"
                fill="#00d8ff"
              >
                <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
                <g stroke="#00d8ff" strokeWidth="1.2" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </div>

            {/* 2. Node.js Icon - Mid/Lower Left */}
            <div
              title="Node.js"
              className="float-anim2 absolute top-[52%] -left-1 sm:left-2 lg:-left-2 xl:left-2 z-20 hover:scale-125 transition-transform duration-300 drop-shadow-[0_4px_16px_rgba(34,197,94,0.45)] cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 sm:w-14 sm:h-14"
                fill="none"
              >
                <path
                  d="M12 2L3 7.2v9.6L12 22l9-5.2V7.2L12 2z"
                  fill="#22c55e"
                />
                <path
                  d="M12 6.5l-5 2.9v5.8l5 2.9 5-2.9V9.4l-5-2.9z"
                  fill="#15803d"
                  opacity="0.4"
                />
                <text
                  x="12"
                  y="14.5"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="7"
                  fontWeight="bold"
                  fontFamily="sans-serif"
                >
                  JS
                </text>
              </svg>
            </div>

            {/* 3. MongoDB Icon - Top Right */}
            <div
              title="MongoDB"
              className="float-anim absolute top-20 sm:top-24 right-3 sm:right-6 lg:right-0 xl:right-4 z-20 hover:scale-125 transition-transform duration-300 drop-shadow-[0_4px_16px_rgba(16,185,129,0.45)] cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-7 h-9 sm:w-12 sm:h-14"
                fill="none"
              >
                <path
                  d="M12 1.5c-.5.5-4.5 5.5-4.5 10.5 0 3.5 2 6.5 4.5 8.5 2.5-2 4.5-5 4.5-8.5 0-5-4-10-4.5-10.5z"
                  fill="#10b981"
                />
                <path
                  d="M12 1.5v19c.1 0 .2 0 .3-.1 2.2-1.8 4.2-4.7 4.2-7.9 0-5-4-10-4.5-10.5-.1-.2-.3-.5-.5-.5H12z"
                  fill="#059669"
                />
                <path
                  d="M12 18.5v2c-.2.4-.6.8-1 1.2-.2.2-.2.4-.2.6 0 .4.3.7.7.7.2 0 .4-.1.5-.2.6-.6 1-1.3 1.2-2.1v-2.2H12z"
                  fill="#9ca3af"
                />
              </svg>
            </div>

            {/* 4. JavaScript Icon - Mid/Lower Right */}
            <div
              title="JavaScript"
              className="float-anim2 absolute top-[54%] right-2 sm:right-4 lg:right-0 xl:right-3 z-20 hover:scale-125 transition-transform duration-300 drop-shadow-[0_4px_16px_rgba(247,223,30,0.5)] cursor-pointer"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-[#f7df1e] flex items-center justify-center text-black font-extrabold text-xs sm:text-xl font-sans tracking-tight shadow-md">
                JS
              </div>
            </div>

            {/* ================= PHOTO CONTAINER: Anchored to Bottom (0 gap) with Scroll Parallax Zoom ================= */}
            <div
              className="relative flex justify-center items-end z-10 origin-bottom will-change-transform transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${photoScale * 1.35})`, //don't change this
                transformOrigin: "bottom center",
              }}
            >
              <Image
                src={profileImg}
                alt="Digvijay Singh"
                priority
                placeholder="blur"
                style={{ width: "auto", height: "auto" }}
                className="w-auto h-auto max-h-[58vh] sm:max-h-[62vh] lg:max-h-[80vh] xl:max-h-[90vh] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] pointer-events-none block mb-0 align-bottom"
              />
            </div>
          </div>

          {/* ===================== RIGHT COLUMN: Stats & Handwritten Doodles ===================== */}
          <div className="hidden lg:flex lg:col-span-3 xl:col-span-3 lg:col-start-10 flex-col justify-center self-center gap-2.5 z-20 pl-0 lg:pl-2 xl:pl-4 py-4 lg:py-0">
            <div>
              {/* Top Handwritten Annotation */}
              <div className="self-end lg:self-start mb-1.5 select-none">
                <div className="font-handwriting text-purple-600 dark:text-purple-400 text-lg lg:text-2xl font-bold leading-tight rotate-[6deg]">
                  3+ <br />
                  Years of Learning &amp; Building
                </div>
                <svg
                  className="w-24 h-3.5 text-purple-500/80 -mt-0.5"
                  viewBox="0 0 100 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 8 Q 20 2, 35 8 T 65 8 T 95 8" />
                </svg>
              </div>

              {/* Stat Card 1: 20+ Projects Completed */}
              <div className="w-full max-w-[270px] mx-auto lg:mx-0 bg-white dark:bg-gray-900 rounded-2xl p-2.5 sm:p-3 xl:p-3.5 shadow-md shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/10 flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 mb-2 xl:mb-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                  </svg>
                </div>
                <div>
                  <div className="text-base sm:text-lg xl:text-xl font-bold font-Outfit text-gray-900 dark:text-white leading-tight">
                    20+
                  </div>
                  <div className="text-[10px] sm:text-[11px] xl:text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Stat Card 2: B.Tech CSE AKTU, Lucknow ↗ */}
              <div className="w-full max-w-[270px] mx-auto lg:mx-0 bg-white dark:bg-gray-900 rounded-2xl p-2.5 sm:p-3 xl:p-3.5 shadow-md shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-white/10 flex items-center justify-between gap-3 transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs xl:text-sm font-bold text-gray-900 dark:text-white leading-tight">
                      B.Tech CSE (2023-27)
                    </div>
                    <div className="text-[10px] xl:text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                      AKTU, Lucknow
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors ml-auto">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </span>
              </div>

              {/* Bottom Handwritten Quote */}
              <div className="mt-2.5 lg:mt-3 self-end lg:self-start select-none">
                <div className="flex items-center gap-1.5 font-handwriting text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base font-bold italic rotate-[-2deg]">
                  <span className="text-purple-500 text-base sm:text-lg xl:text-2xl font-serif">
                    &ldquo;
                  </span>
                  <span className="leading-tight xl:text-2xl">
                    Clean Code
                    <br />
                    Better Experiences
                  </span>
                  <span className="text-purple-500 text-base sm:text-lg xl:text-2xl font-serif">
                    &rdquo;
                  </span>
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 ml-1 inline"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="4" y1="16" x2="16" y2="4" />
                    <line x1="8" y1="18" x2="18" y2="8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
