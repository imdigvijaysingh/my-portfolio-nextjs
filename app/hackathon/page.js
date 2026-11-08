import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hackathon from "@/components/Hackathon";
import Link from "next/link";

export const metadata = {
  title: "IIT Hyderabad CyberShield Hackathon 2026 • National Finalist | Digvijay Singh",
  description:
    "The journey of leading Team Muledna at the CyberShield Hackathon 2026 Grand Finale at IIT Hyderabad, competing against 3,000+ teams nationwide.",
  openGraph: {
    title: "IIT Hyderabad CyberShield Hackathon 2026 • National Finalist | Digvijay Singh",
    description:
      "The journey of leading Team Muledna at the CyberShield Hackathon 2026 Grand Finale at IIT Hyderabad, competing against 3,000+ teams nationwide.",
    url: "https://imdigvijaysingh.com/hackathon",
  },
};

export default function HackathonPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 pb-16 relative">
        {/* Ambient Gradients */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen transition-opacity">
          <div className="absolute top-10 right-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-[130px]" />
          <div className="absolute bottom-10 left-[-10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-[130px]" />
        </div>

        {/* Top Breadcrumb & Back Navigation */}
        <div className="w-full px-5 lg:px-8 xl:px-[12%] mb-6">
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
              <span className="text-purple-600 dark:text-purple-400 font-semibold">IIT Hyderabad Hackathon</span>
            </div>
          </div>
        </div>

        {/* The Hackathon Component */}
        <Hackathon />

        {/* Deep-Dive Case Study Narrative */}
        <div className="w-full px-5 lg:px-8 xl:px-[12%] mt-12 space-y-12">
          {/* Key Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-start">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold font-Ovo mb-3 text-gray-900 dark:text-white">
                High-Pressure Execution
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-Ovo">
                Working through an intense 48-hour sprint in unfamiliar territory demanded crystal-clear prioritisation, rapid bug triage, and zero hesitation. Every architectural decision had to hold up under real-time testing.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200/80 dark:border-white/10 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-start">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-xl sm:text-2xl font-bold font-Ovo mb-3 text-gray-900 dark:text-white">
                Leadership as Team Muledna Lead
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-Ovo">
                Guiding teammates through sleepless nights, delegating modules across frontend and backend, resolving merge conflicts, and aligning the final pitch under judge scrutiny taught me what leadership truly means.
              </p>
            </div>
          </div>

          {/* Quick Navigation to Other Sections */}
          <div className="flex items-center justify-between border-t border-gray-200 dark:border-white/10 pt-8 flex-wrap gap-4">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 hover:border-purple-300 text-sm font-semibold shadow-sm transition"
            >
              <span>← View Work Experience</span>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-md transition"
            >
              <span>Explore Projects Showcase →</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
