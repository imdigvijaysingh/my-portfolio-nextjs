import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCarousel from "@/components/ProjectCarousel";
import { projects } from "@/data/projectsData";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Digvijay Singh Portfolio`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Find next and previous projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-24 px-5 sm:px-8 lg:px-[10%]">
        {/* Breadcrumb Navigation */}
        <div className="max-w-6xl mx-auto flex items-center justify-between pb-6 border-b border-gray-200/80 dark:border-white/10 mb-8 select-none">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to all projects</span>
          </Link>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/40">
            {project.category}
          </span>
        </div>

        {/* Project Header */}
        <div className="max-w-6xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-Outfit text-gray-900 dark:text-white tracking-tight leading-[1.12]">
            {project.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action CTAs & Tech Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200/70 dark:border-white/10">
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-white/10 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9333ea] via-[#e11d48] to-[#f97316] text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  <span>Live Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-white/15 text-gray-800 dark:text-white font-medium text-xs sm:text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* ================= MULTIPLE IMAGES IN CAROUSEL ================= */}
        <section className="max-w-6xl mx-auto mb-16">
          <ProjectCarousel images={project.images} title={project.title} />
        </section>

        {/* ================= KEY METRICS & STATS ================= */}
        {project.stats && project.stats.length > 0 && (
          <section className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-200/80 dark:border-white/10 shadow-md text-center hover:scale-[1.02] transition-transform"
                >
                  <p className="text-2xl sm:text-3xl font-bold font-Outfit bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ================= ORGANIZED DESCRIPTION WITH SUBHEADINGS & PARAGRAPHS ================= */}
        <article className="max-w-4xl mx-auto space-y-16">
          {/* Section 1: Executive Overview */}
          {project.overview && (
            <section className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm font-bold">
                  01
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white">
                  {project.overview.heading}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base sm:text-[17px] leading-relaxed">
                {project.overview.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          )}

          {/* Section 2: Problem Statement & Challenge */}
          {project.problemStatement && (
            <section className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400 text-sm font-bold">
                  02
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white">
                  {project.problemStatement.heading}
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-base sm:text-[17px] leading-relaxed">
                {project.problemStatement.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          )}

          {/* Section 3: Core Features & Functionality */}
          {project.features && project.features.length > 0 && (
            <section className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-sm font-bold">
                  03
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white">
                  Key Features &amp; Technical Capabilities
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5 hover:border-purple-300 dark:hover:border-purple-800/60 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-purple-600" />
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white font-Outfit">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 4: System Architecture */}
          {project.architecture && (
            <section className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-sm font-bold">
                  04
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white">
                  {project.architecture.heading || "System Architecture & Engineering"}
                </h2>
              </div>

              <div className="space-y-5">
                {project.architecture.frontend && (
                  <div className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                      Frontend Architecture
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.architecture.frontend}
                    </p>
                  </div>
                )}

                {project.architecture.backend && (
                  <div className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                      Backend &amp; API Layer
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.architecture.backend}
                    </p>
                  </div>
                )}

                {project.architecture.database && (
                  <div className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 mb-2">
                      Database &amp; Data Integrity
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.architecture.database}
                    </p>
                  </div>
                )}

                {project.architecture.devops && (
                  <div className="p-4 sm:p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                      DevOps, CDN &amp; Deployment
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.architecture.devops}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section 5: Engineering Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-rose-100 dark:bg-rose-900/50 flex items-center justify-center text-rose-600 dark:text-rose-400 text-sm font-bold">
                  05
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white">
                  Technical Challenges &amp; Creative Solutions
                </h2>
              </div>

              <div className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 font-Outfit flex items-center gap-2">
                      <span className="text-purple-600 dark:text-purple-400 font-bold">Q:</span>
                      {challenge.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed pl-6 border-l-2 border-purple-500/50">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Section 6: Key Results & Outcomes */}
          {project.results && project.results.length > 0 && (
            <section className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 sm:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400 text-sm font-bold">
                  06
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white">
                  Impact, Performance &amp; Key Results
                </h2>
              </div>

              <ul className="space-y-3.5">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Call to Action Banner */}
          <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-950 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl font-bold font-Outfit mb-3">
              Need a high-performing web application like this?
            </h2>
            <p className="text-sm sm:text-base text-purple-200 max-w-xl mx-auto mb-8">
              Whether it&apos;s a scalable e-commerce store, a custom MERN platform, or a modern SaaS dashboard, let&apos;s turn your vision into reality.
            </p>
            <a
              href="/#contact"
              className="px-8 py-3.5 rounded-full bg-white text-purple-900 font-bold text-sm sm:text-base shadow-lg hover:bg-purple-50 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <span>Start a Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </section>

          {/* Next / Previous Project Navigation */}
          <nav className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 border-t border-gray-200/80 dark:border-white/10">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-purple-400 transition-all flex items-center gap-3 text-left group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400">Previous Project</span>
                  <p className="text-sm font-bold text-gray-900 dark:text-white font-Outfit">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="w-full sm:w-auto p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 hover:border-purple-400 transition-all flex items-center gap-3 text-right group ml-auto"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-gray-400">Next Project</span>
                  <p className="text-sm font-bold text-gray-900 dark:text-white font-Outfit">{nextProject.title}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
