"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projectsData";

const categories = [
  "All Projects",
  "3D & Creative Web",
  "E-Commerce",
  "Full Stack Enterprise",
  "Full Stack MERN",
  "AI & ML",
  "Web Performance & SEO",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All Projects" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-5 sm:px-8 lg:px-[8%]">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            Portfolio Case Studies &amp; Showcase
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-Outfit tracking-tight text-gray-900 dark:text-white">
            Crafted with Code, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] bg-clip-text text-transparent">
              Engineered for Impact
            </span>
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore a curated selection of full-stack e-commerce platforms, MERN web applications, and interactive digital products built with performance, security, and delightful UX.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search projects by name, category or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pl-11 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/15 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 shadow-sm"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-[#9333ea] to-[#ea580c] text-white shadow-md shadow-purple-500/20 scale-105"
                      : "bg-white dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-800"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Card Image Banner */}
              <Link href={`/projects/${project.slug}`} className="relative aspect-[16/10] overflow-hidden block bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges on image */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-purple-700 dark:text-purple-300 backdrop-blur-md shadow-sm border border-purple-100 dark:border-purple-900/40">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500 text-white shadow-sm">
                      Featured
                    </span>
                  )}
                </div>

                {project.images && project.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{project.images.length} screens</span>
                  </div>
                )}
              </Link>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Link href={`/projects/${project.slug}`}>
                    <h2 className="text-xl font-bold font-Outfit text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-medium text-gray-400">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-5 mt-5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  >
                    <span>View Case Study</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="Open Live Website"
                        aria-label="Live Demo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="View GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* If no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found matching &ldquo;{searchQuery}&rdquo;.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Projects");
                setSearchQuery("");
              }}
              className="mt-4 px-5 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
