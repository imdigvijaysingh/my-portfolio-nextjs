"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const experiences = [
  {
    id: "shyvora-technologies",
    role: "Independent Web Developer & Mentor",
    company: "Shyvora Technologies",
    location: "Remote",
    period: "2026 — Present",
    type: "Client & Mentorship",
    featuredBadge: "Current Role",
    summary:
      "Delivering custom web applications for small-business clients end-to-end and mentoring early-career engineers on full-stack architecture.",
    achievements: [
      "Deliver custom web applications for small-business clients end-to-end, from requirements gathering through deployment and handoff.",
      "Mentor early-career developers on React.js, Node.js, and full-stack project architecture and code review practices.",
      "Guide software architecture decisions, state management patterns, and production debugging best practices.",
    ],
    skills: ["React.js", "Node.js", "Client Delivery", "Full-Stack Architecture", "Code Review", "Mentorship"],
    metric: { value: "End-to-End", label: "Client Delivery & Mentorship" },
  },
  {
    id: "erp-tech-pro",
    role: "Web Developer",
    company: "ERP Tech Pro",
    location: "Remote / Hybrid",
    period: "June 2026 — August 2026",
    type: "Professional Experience",
    featuredBadge: "ERP & Full-Stack",
    summary:
      "Developed and deployed business websites and ERP modules for multiple clients using React.js, Node.js, Express.js, and Tailwind CSS.",
    achievements: [
      "Developed and deployed business websites and ERP modules for multiple clients using React.js, Node.js, Express.js, and Tailwind CSS.",
      "Built reusable React components, secure authentication workflows, and CRUD/REST API integrations with role-based access control (RBAC), reducing repeat development time across projects.",
      "Designed CMS/Admin panels enabling non-technical staff to independently manage users, business data, and website content.",
      "Gathered client requirements directly and translated ambiguous business needs into production-ready technical specifications.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "RBAC", "REST APIs", "CRUD", "CMS Design"],
    metric: { value: "Reusable", label: "Component & RBAC Workflows" },
  },
  {
    id: "dev-bhoomi",
    role: "Freelance Web Developer",
    company: "Dev Bhoomi Group of Institutions",
    location: "Dehradun / Saharanpur",
    period: "Dec 2025 — Feb 2026",
    type: "Client Freelance",
    featuredBadge: "9.5s → 0.3s Load",
    summary:
      "Spearheaded the complete ground-up redesign and performance overhaul of the official institutional website.",
    achievements: [
      "Redesigned and deployed the official institutional website as a React SPA, cutting page load time from 9.5s to 0.3s.",
      "Reduced resource requests by 95% and implemented HTTP/2 for faster asset delivery.",
      "Improved technical SEO by fixing H1 structure, metadata, image alt attributes, and blocking JavaScript issues.",
      "Delivered a responsive, high-converting digital portal with accessible UI and streamlined course navigation.",
    ],
    skills: ["React.js", "Performance Optimization", "Technical SEO", "HTTP/2", "SPA Architecture", "Core Web Vitals"],
    metric: { value: "0.3s", label: "Page Load (Down from 9.5s)" },
  },
  {
    id: "cybershield-iit",
    role: "Team Leader & Lead Architect",
    company: "CyberShield Hackathon 2026 (IIT Hyderabad)",
    location: "IIT Hyderabad Campus",
    period: "2026 (48h National Grand Finale)",
    type: "Hackathon & Leadership",
    featuredBadge: "Top 72 of 3,000+ Teams",
    summary:
      "Led Team Muledna representing Saharanpur to the national finale at IIT Hyderabad, competing with 3,000+ teams nationwide.",
    achievements: [
      "Competed against more than 3,000 teams across India and selected for the grand finale among the top 72 teams.",
      "Led Team Muledna in rapid prototype architecture, full-stack implementation, and presentation before IIT faculty and cybersecurity leaders.",
      "Spearheaded real-time frontend integration and system resilience under intense 48-hour hackathon conditions.",
    ],
    skills: ["Team Leadership", "System Architecture", "IIT Hyderabad", "CyberShield 2026", "Team Muledna", "Rapid Prototyping"],
    metric: { value: "Top 72", label: "Selected out of 3,000+ Teams" },
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : activeTab === "work"
      ? experiences.filter((e) => e.type.includes("Professional") || e.type.includes("Client"))
      : experiences.filter((e) => e.type.includes("Hackathon") || e.type.includes("Leadership"));

  return (
    <section id="experience" className="w-full px-5 lg:px-8 xl:px-[12%] py-16 scroll-mt-20 relative z-10">
      {/* Header */}
      <Reveal>
        <p className="text-center mb-2 text-sm md:text-base font-Ovo text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest">
          Career Journey & Milestones
        </p>
        <h2 className="text-center text-4xl sm:text-5xl font-Ovo font-semibold mb-4">
          Work Experience
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base font-Ovo">
          A proven track record of architecting high-performance web applications, leading competitive hackathon teams, and delivering production-ready software.
        </p>
      </Reveal>

      {/* Filter Tabs */}
      <Reveal delay={100}>
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "all"
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-purple-300"
            }`}
          >
            All Milestones ({experiences.length})
          </button>
          <button
            onClick={() => setActiveTab("work")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "work"
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-purple-300"
            }`}
          >
            Engineering & Internships (3)
          </button>
          <button
            onClick={() => setActiveTab("leadership")}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeTab === "leadership"
                ? "bg-purple-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-purple-300"
            }`}
          >
            Leadership & Hackathons (1)
          </button>
        </div>
      </Reveal>

      {/* Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing Vertical Spine Line */}
        <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 -translate-x-1/2 bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-40 dark:opacity-50" />

        <div className="space-y-8 sm:space-y-12">
          {filteredExperiences.map((exp, index) => (
            <Reveal key={exp.id} delay={index * 100}>
              <div className="relative pl-10 sm:pl-16 group">
                {/* Timeline Dot Indicator */}
                <div className="absolute left-4 sm:left-6 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.6)] group-hover:scale-125 group-hover:bg-purple-500 transition-all duration-300 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:bg-white transition-colors" />
                </div>

                {/* Experience Card */}
                <div className="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
                  {/* Subtle Corner Glow Accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                  {/* Top Bar: Role, Company & Badges */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold font-Ovo text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.featuredBadge && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
                            {exp.featuredBadge}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 flex-wrap">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Period & Metric Pill */}
                    <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium">
                        <svg className="w-3.5 h-3.5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                      {exp.metric && (
                        <div className="hidden sm:flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                          <span className="text-purple-600 dark:text-purple-400 font-bold">{exp.metric.value}</span>
                          <span>{exp.metric.label}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed font-Ovo">
                    {exp.summary}
                  </p>

                  {/* Key Bullet Points */}
                  <ul className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-300">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <svg
                          className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills / Tech Stack Badges */}
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap pt-3 border-t border-gray-100 dark:border-white/5">
                    <span className="text-xs text-gray-400 font-medium mr-1">Stack:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Resume Download CTA */}
        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <a
              href="/assets/resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:bg-purple-600 dark:hover:bg-purple-500 dark:hover:text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
