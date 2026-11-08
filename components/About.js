"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

import vscodeIcon from "@/public/assets/vscode.webp";
import postmanIcon from "@/public/assets/postman.webp";
import mongodbIcon from "@/public/assets/mongodb.webp";
import figmaIcon from "@/public/assets/figma.webp";
import gitIcon from "@/public/assets/git.webp";

const specializations = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    color: "from-purple-500 to-indigo-500",
    bgLight: "bg-purple-50 dark:bg-purple-950/40",
    textLight: "text-purple-600 dark:text-purple-400",
    borderLight: "border-purple-200/70 dark:border-purple-500/30",
    title: "MERN Stack Architecture",
    description: "End-to-end full-stack web applications with React.js, Node.js, Express.js, and MongoDB.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    color: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50 dark:bg-rose-950/40",
    textLight: "text-rose-600 dark:text-rose-400",
    borderLight: "border-rose-200/70 dark:border-rose-500/30",
    title: "Secure Auth & RBAC",
    description: "Enterprise dual-token JWT authentication, role-based access control & session security.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zm0 5h16" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50 dark:bg-emerald-950/40",
    textLight: "text-emerald-600 dark:text-emerald-400",
    borderLight: "border-emerald-200/70 dark:border-emerald-500/30",
    title: "Scalable Data Modeling",
    description: "Schema design, index optimization, aggregation pipelines & high-throughput REST APIs.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 dark:bg-amber-950/40",
    textLight: "text-amber-600 dark:text-amber-400",
    borderLight: "border-amber-200/70 dark:border-amber-500/30",
    title: "Production Engineering",
    description: "Hands-on delivery of real-world platforms, cloud deployments & CDN media workflows.",
  },
];

const highlights = [
  {
    badge: "Education",
    badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    icon: (
      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: "B.Tech CSE (2023 – 2027)",
    subtitle: "AKTU, Lucknow",
    description: "Core computer science fundamentals, data structures, algorithms, and web systems.",
  },
  {
    badge: "Live Platforms",
    badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    icon: (
      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Production Projects",
    subtitle: "OnBoard & Campus ERP",
    description: "Built scalable real-time social networking & role-based university management platforms.",
  },
  {
    badge: "Recognition",
    badgeColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    icon: (
      <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "IIT Hyderabad Hackathon",
    subtitle: "National Finalist",
    description: "Collaborated under intense deadlines to architect and prototype innovative solutions.",
  },
];

const skillCategories = [
  {
    category: "Frontend Engineering",
    gradient: "from-cyan-500 to-blue-600",
    badgeBg: "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/40",
    dotColor: "bg-cyan-500",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5 & CSS3", "React Hooks", "React Router", "Axios", "Responsive UI"],
  },
  {
    category: "Backend & Security",
    gradient: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40",
    dotColor: "bg-emerald-500",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth (Dual-Token)", "RBAC", "Session Fingerprinting", "Middleware"],
  },
  {
    category: "Databases & DevOps",
    gradient: "from-purple-500 to-pink-600",
    badgeBg: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/40",
    dotColor: "bg-purple-500",
    skills: ["MongoDB", "MongoDB Atlas", "MySQL", "ImageKit CDN", "Git & GitHub", "Vercel & Netlify", "Data Aggregation"],
  },
];

const tools = [
  { name: "VS Code", icon: vscodeIcon, color: "hover:border-blue-400" },
  { name: "Postman", icon: postmanIcon, color: "hover:border-orange-400" },
  { name: "MongoDB", icon: mongodbIcon, color: "hover:border-emerald-400" },
  { name: "Figma", icon: figmaIcon, color: "hover:border-pink-400" },
  { name: "Git", icon: gitIcon, color: "hover:border-rose-400" },
];

export default function About() {
  return (
    <section id="about" className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 scroll-mt-20 relative z-10">
      {/* Section Header */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-Outfit tracking-tight text-gray-900 dark:text-white">
            About <span className="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3.5 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            AI Full Stack Engineer building robust, scalable web products — pairing clean architectural foundations with responsive, high-fidelity UI.
          </p>
        </div>
      </Reveal>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mb-8">
        {/* ================= CARD 1: Specialization Highlights (7 cols) ================= */}
        <div className="lg:col-span-7">
          <Reveal delay={100} className="h-full">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-gray-900/70 border border-gray-200/80 dark:border-white/10 shadow-lg shadow-purple-500/5 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between group hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300">
              {/* Soft decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200/50 dark:border-purple-500/20">
                    Engineering DNA
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    3+ Years Experience
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-Outfit text-gray-900 dark:text-white leading-snug mb-5">
                  Turning complex business logic into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">production-ready reality</span>.
                </h3>

                {/* 4 Feature Micro-Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-6">
                  {specializations.map((spec) => (
                    <div
                      key={spec.title}
                      className={`p-4 rounded-2xl ${spec.bgLight} border ${spec.borderLight} transition-all duration-200 hover:-translate-y-0.5`}
                    >
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${spec.color} text-white flex items-center justify-center shadow-sm mb-3`}>
                        {spec.icon}
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white leading-tight mb-1">
                        {spec.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                        {spec.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom quote strip */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 flex items-center gap-2 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="font-handwriting text-gray-600 dark:text-gray-300 text-sm sm:text-base italic">
                  &ldquo;Passionate about clean code, scalable architecture &amp; frictionless user experience.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================= CARD 2: Highlights & Milestones (5 cols) ================= */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {highlights.map((item, idx) => (
            <Reveal key={item.title} delay={150 + idx * 80} className="flex-1">
              <div className="h-full rounded-2xl p-5 sm:p-5.5 bg-white/80 dark:bg-gray-900/70 border border-gray-200/80 dark:border-white/10 shadow-sm backdrop-blur-xl hover:border-purple-300 dark:hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-base font-bold font-Outfit text-gray-900 dark:text-white leading-snug">
                  {item.title}
                </h4>
                <div className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5 mb-1.5">
                  {item.subtitle}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ================= ROW 2: Categorized Tech Arsenal (3 Columns) ================= */}
      <Reveal delay={300}>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <h3 className="text-base sm:text-lg font-bold font-Outfit text-gray-900 dark:text-white">
              Technical Arsenal &amp; Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.category}
                className="rounded-2xl p-5 bg-white/80 dark:bg-gray-900/70 border border-gray-200/80 dark:border-white/10 shadow-sm backdrop-blur-xl hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${cat.dotColor}`} />
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white font-Outfit">
                      {cat.category}
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${cat.badgeBg} shadow-2xs hover:scale-105 transition-transform duration-150 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ================= ROW 3: Tools & Action Footer Banner ================= */}
      <Reveal delay={380}>
        <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-r from-purple-50/70 via-pink-50/40 to-orange-50/60 dark:from-purple-950/30 dark:via-gray-900/50 dark:to-orange-950/20 border border-purple-200/60 dark:border-white/10 shadow-md backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Tools */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Daily Development Stack
              </span>
            </div>
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  title={tool.name}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-200/80 dark:border-white/10 shadow-2xs transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-pointer ${tool.color}`}
                >
                  <Image src={tool.icon} alt={tool.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain" />
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap w-full md:w-auto justify-start md:justify-end">
            <a
              href="/Digvijay_Singh_Resume.pdf"
              download="Digvijay_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-500/20 hover:shadow-orange-500/25 hover:scale-[1.03] active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              <span>Download Full Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <Link
              href="/projects"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/15 text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm hover:scale-[1.03] active:scale-95 transition-all duration-300 whitespace-nowrap"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
