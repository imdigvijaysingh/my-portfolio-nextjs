import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Digvijay Singh Portfolio",
  description: "Privacy policy regarding data collection, contact forms, and security on Digvijay Singh's portfolio.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Overview</h2>
            <p>
              Your privacy is of paramount importance. This Privacy Policy details how this portfolio website collects, uses, and safeguards personal information when you browse or submit inquiries through the contact form.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Information Collection</h2>
            <p>
              We only collect information voluntarily provided by you when using the &quot;Connect with me&quot; contact form (such as your name, email address, and message content). Messages are transmitted securely via Formspree solely for the purpose of communicating regarding potential projects, collaborations, or technical inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Cookies and Local Storage</h2>
            <p>
              This website uses standard browser local storage exclusively to remember your preferred color theme (Light Mode or Dark Mode). We do not use intrusive tracking cookies, analytics spyware, or third-party marketing beacons.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4. Third-Party Links</h2>
            <p>
              This website contains links to external profiles and demo platforms (e.g. GitHub, LinkedIn, Twitter, Netlify, Vercel). We are not responsible for the privacy practices or content of third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">5. Contact</h2>
            <p>
              For questions regarding this policy, please reach out via email at:{" "}
              <a href="mailto:digvijaysinghpundir18@gmail.com" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                digvijaysinghpundir18@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
