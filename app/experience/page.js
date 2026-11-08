import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Link from "next/link";

export const metadata = {
  title: "Work Experience & Career Milestones | Digvijay Singh",
  description:
    "Explore Digvijay Singh's professional software engineering experience, freelance client projects, web developer internships, and technical impact metrics.",
  openGraph: {
    title: "Work Experience & Career Milestones | Digvijay Singh",
    description:
      "Explore Digvijay Singh's professional software engineering experience, freelance client projects, web developer internships, and technical impact metrics.",
    url: "https://digvijaysingh-one.vercel.app/experience",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-16 relative">
        {/* Subtle Ambient Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen transition-opacity">
          <div className="absolute top-10 left-[-10%] w-96 h-96 bg-purple-400/40 dark:bg-purple-600/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-[-10%] w-96 h-96 bg-pink-400/30 dark:bg-pink-600/20 rounded-full blur-[120px]" />
        </div>

        {/* Top Breadcrumb & Back Navigation */}
        <div className="px-5 lg:px-8 xl:px-[12%] max-w-7xl mx-auto mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Link
              href="/#top"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>

            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
              <Link href="/#top" className="hover:underline">Home</Link>
              <span>/</span>
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Experience</span>
            </div>
          </div>
        </div>

        {/* Experience Timeline Section */}
        <Experience />

        {/* Hire / Connect CTA Banner */}
        <div className="px-5 lg:px-8 xl:px-[12%] max-w-4xl mx-auto mt-12">
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-purple-900 to-indigo-950 text-white text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-bold font-Ovo mb-3">
              Looking for a Dedicated AI Full Stack Engineer?
            </h3>
            <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto mb-6">
              I am open to full-time roles, freelance client projects, and high-impact engineering opportunities.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href="/#contact"
                className="px-6 py-2.5 rounded-full bg-white text-purple-950 font-semibold text-sm hover:bg-gray-100 transition shadow-sm"
              >
                Send a Message
              </Link>
              <a
                href="https://wa.me/916397007167"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-sm flex items-center gap-2"
              >
                <span>WhatsApp Directly</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
