import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Digvijay Singh Portfolio",
  description: "Terms of service and usage guidelines for Digvijay Singh's personal portfolio website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 px-5 sm:px-8 lg:px-[14%] max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 mb-8 hover:underline"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-3xl sm:text-5xl font-bold font-Outfit text-gray-900 dark:text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Agreement to Terms</h2>
            <p>
              By accessing and viewing this portfolio website, you agree to comply with and be bound by these Terms of Service. If you disagree with any part of these terms, please discontinue use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, all design layouts, text, personal branding, graphic elements, and custom code on this website are the intellectual property of Digvijay Singh. Open-source repositories linked from this website remain subject to their respective open-source licenses (e.g. MIT).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Acceptable Use</h2>
            <p>
              You agree to use this website only for legitimate purposes. You may not attempt to reverse engineer, disrupt server integrity, or scrape information using automated bots without prior permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4. Disclaimer &amp; Limitation of Liability</h2>
            <p>
              This website and its demonstrative projects are provided on an &quot;as-is&quot; basis without warranties of any kind. Digvijay Singh shall not be liable for any damages arising out of the use or inability to use this site or linked demo apps.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
