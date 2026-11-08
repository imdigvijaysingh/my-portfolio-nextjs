"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

import lipstick1 from "@/public/assets/projects/3d-lipstick-image-1.webp";
import ecommerce1 from "@/public/assets/projects/e-commerce-image-1.webp";
import erp1 from "@/public/assets/projects/ERP-image-1.webp";
import work1 from "@/public/assets/work-1.webp";
import work3 from "@/public/assets/work-3.webp";
import work4 from "@/public/assets/work-4.webp";

const categories = [
  "All Projects",
  "3D & Creative Web",
  "E-Commerce",
  "Enterprise & Systems",
  "Full Stack MERN",
  "AI & ML",
];

const projects = [
  {
    id: "3d-lipstick-landing-page",
    slug: "3d-lipstick-landing-page",
    title: "Maison Rouge — 3D Beauty Landing Page",
    tagline:
      "High-fidelity 3D cosmetics landing page built with Next.js, real-time WebGL shader lighting, rotational arcs, and interactive shade customization.",
    category: "3D & Creative Web",
    badge: "3D Web Experience",
    coverImage: lipstick1,
    techStack: ["Next.js", "Three.js", "React Three Fiber", "WebGL", "Tailwind CSS", "Framer Motion"],
    highlights: ["60 FPS 3D Engine", "Draco Mesh Compression", "Interactive 3D Twist"],
    liveUrl: "https://github.com/imdigvijaysingh",
    githubUrl: "https://github.com/imdigvijaysingh",
    statusBadge: "Next.js ✦",
    glowColor: "from-rose-500/10 via-red-500/5 to-transparent",
  },
  {
    id: "shyvora-ecommerce",
    slug: "shyvora-ecommerce",
    title: "Shyvora — High-Performance E-Commerce",
    tagline:
      "Modern consumer electronics storefront with 8-department filtering, curated brand collections, persistent cart, and Stripe checkout.",
    category: "E-Commerce",
    badge: "E-Commerce Platform",
    coverImage: ecommerce1,
    techStack: ["Next.js", "React 18", "Node.js", "Express", "MongoDB", "Stripe API", "Redux"],
    highlights: ["8 Category Filters", "Frictionless Cart", "Fast API Response"],
    liveUrl: "https://novastore-demo.vercel.app",
    githubUrl: "https://github.com/imdigvijaysingh/novastore-mern-ecommerce",
    statusBadge: "Live Store ⚡",
    glowColor: "from-indigo-500/10 via-purple-500/5 to-transparent",
  },
  {
    id: "college-erp-cms",
    slug: "college-erp-cms",
    title: "Shyvora ERP — Campus Operating System",
    tagline:
      "Secure, multi-tenant campus operating system empowering educational institutions with biometric attendance analytics, AI risk radar & admissions CRM.",
    category: "Enterprise & Systems",
    badge: "Campus Operating System",
    coverImage: erp1,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT RBAC", "Tailwind CSS"],
    highlights: ["Multi-Tenant RBAC", "Biometric Analytics", "Admissions CRM"],
    liveUrl: "https://digvijayp.netlify.app/",
    githubUrl: "https://github.com/imdigvijaysingh",
    statusBadge: "Enterprise ERP 🏢",
    glowColor: "from-purple-500/10 via-indigo-500/5 to-transparent",
  },
  {
    id: "onboard-social",
    slug: "onboard-social",
    title: "OnBoard — Scalable Social Platform",
    tagline:
      "Real-time social architecture with normalized 16MB-safe MongoDB collections, UUID idempotent messaging, and dual-token JWT sessions.",
    category: "Full Stack MERN",
    badge: "Social Platform",
    coverImage: work4,
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT Auth", "ImageKit", "Tailwind CSS"],
    highlights: ["UUID Idempotent Sync", "Zero-Cost Feed Engine", "< 16MB BSON Safe"],
    liveUrl: "https://onboardsocial.netlify.app/",
    githubUrl: "https://github.com/imdigvijaysingh",
    statusBadge: "Live Platform 🟢",
    glowColor: "from-purple-500/10 via-indigo-500/5 to-transparent",
  },
  {
    id: "language-detective",
    slug: "language-detective",
    title: "Language Detective — AI/ML Classifier",
    tagline:
      "Machine learning powered multilingual text analysis platform with sub-120ms syntactic inference and 97.4% accuracy across 22+ languages.",
    category: "AI & ML",
    badge: "AI/ML Classifier",
    coverImage: work3,
    techStack: ["Next.js", "Python", "Flask", "Scikit-Learn", "Tailwind CSS", "Vercel"],
    highlights: ["22+ Languages", "97.4% Model Accuracy", "< 120ms Latency"],
    liveUrl: "https://language-detection-lbny.vercel.app/",
    githubUrl: "https://github.com/imdigvijaysingh",
    statusBadge: "AI Model 🤖",
    glowColor: "from-cyan-500/10 via-blue-500/5 to-transparent",
  },
  {
    id: "college-redesign",
    slug: "college-redesign",
    title: "Dev Bhoomi Institutional Portal",
    tagline:
      "Ground-up institutional SPA architecture that slashed load times from 9.5s to 0.3s (31x faster) with 95% reduced network overhead.",
    category: "Enterprise & Systems",
    badge: "High-Speed React SPA",
    coverImage: work1,
    techStack: ["React SPA", "Tailwind CSS", "HTTP/2 Multiplexing", "Technical SEO", "Netlify"],
    highlights: ["0.3s Load Time", "-95% Requests", "100/100 SEO"],
    liveUrl: "https://dbgisre.netlify.app",
    githubUrl: "https://github.com/imdigvijaysingh",
    statusBadge: "31x Faster 🚀",
    glowColor: "from-amber-500/10 via-orange-500/5 to-transparent",
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All Projects") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="work" className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 py-1 sm:py-2 scroll-mt-20 relative z-10">
      {/* Invisible anchor target for #projects */}
      <div id="projects" className="absolute -top-24 pointer-events-none" />

      {/* Section Header */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span>Featured Creations &amp; Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-Outfit tracking-tight text-gray-900 dark:text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-3.5 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Production-grade platforms built with modern full-stack architectures, AI workflows, and intelligent user experiences.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 -mx-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:gap-2.5 mt-6 sm:mt-8">
            {categories.map((category) => {
              const active = selectedCategory === category;
              const count =
                category === "All Projects"
                  ? projects.length
                  : projects.filter((p) => p.category === category).length;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-300 flex items-center gap-1.5 ${
                    active
                      ? "bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] text-white shadow-md shadow-purple-500/25 scale-[1.02]"
                      : "bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 border border-gray-200/80 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 hover:text-purple-600 dark:hover:text-purple-400"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8 mb-14">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100}>
            <div className="group h-full rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 shadow-lg shadow-purple-500/5 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col overflow-hidden relative">
              {/* Soft ambient background glow */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.glowColor} rounded-full blur-3xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500`}
              />

              {/* Card Image Banner */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
                  placeholder="blur"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Contrast Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold backdrop-blur-md bg-gray-950/75 text-white border border-white/20 shadow-sm truncate max-w-[65%] sm:max-w-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                    <span className="truncate">{project.badge}</span>
                  </span>

                  <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold backdrop-blur-md bg-black/75 text-white/90 border border-white/20 shadow-sm shrink-0">
                    {project.statusBadge}
                  </span>
                </div>

                {/* Quick Action Floating Links (Bottom-Right of Image) */}
                <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 flex items-center gap-1.5 sm:gap-2 z-10">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 active:scale-95 transition-all shadow-md backdrop-blur-md border border-white/20"
                      title="Open Live Platform"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:p-2.5 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 active:scale-95 transition-all shadow-md backdrop-blur-md border border-white/20"
                      title="View GitHub Repository"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 lg:p-7 flex flex-col flex-1 justify-between gap-3.5 sm:gap-5">
                <div>
                  {/* Title & Arrow */}
                  <Link href={`/projects/${project.slug}`} className="group/title block">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-Outfit text-gray-900 dark:text-white group-hover/title:text-purple-600 dark:group-hover/title:text-purple-400 transition-colors flex items-center justify-between gap-2">
                      <span className="line-clamp-1">{project.title}</span>
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-gray-400 group-hover/title:text-purple-600 dark:group-hover/title:text-purple-400 group-hover/title:translate-x-1 group-hover/title:-translate-y-1 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H7m10 0v10" />
                      </svg>
                    </h3>
                  </Link>

                  {/* Tagline */}
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Highlights Chips */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-3.5">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold bg-gray-100/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 border border-gray-200/60 dark:border-white/5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-3.5 pt-2.5 sm:pt-3 border-t border-gray-100 dark:border-white/10">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md text-[10px] sm:text-[11px] font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/50 dark:border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-gray-400 self-center">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom Card Action Footer */}
                <div className="pt-3 sm:pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 group/link"
                  >
                    <span>Read Case Study</span>
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] sm:text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-white transition-colors"
                      >
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Complete Archive & Architecture CTA Strip */}
      <Reveal delay={200}>
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-purple-950 via-indigo-950 to-gray-900 border border-purple-500/30 text-white shadow-2xl relative overflow-hidden">
          {/* Ambient light spots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-semibold uppercase tracking-wider mb-3 backdrop-blur-md">
                <span>🚀 Complete Portfolio Archive</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-Outfit tracking-tight leading-snug">
                Need deep-dive system architecture &amp; benchmark reports?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal">
                Explore comprehensive breakdown case studies with database schemas, concurrency handling, and live performance metrics across all projects.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 w-full lg:w-auto flex-shrink-0">
              <Link
                href="/projects"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>View All 20+ Case Studies</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/hackathon"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md whitespace-nowrap"
              >
                <span>🏆 IIT Hyderabad Recognition</span>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
