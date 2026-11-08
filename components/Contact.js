"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const inquiryTypes = [
  "⚡ AI / Full-Stack Project",
  "💼 Full-Time Role",
  "🤝 Freelance / Consulting",
  "☕ Just Saying Hi",
];

export default function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState(inquiryTypes[0]);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [copiedItem, setCopiedItem] = useState(null); // 'email' | 'phone' | null

  const handleCopy = (text, type) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("app:loading:start", {
          detail: { message: "Delivering your message directly to Digvijay..." },
        })
      );
    }

    try {
      const response = await fetch("https://formspree.io/f/xykppybb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          inquiryType: selectedInquiry,
          _subject: `Portfolio Message (${selectedInquiry}) from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("app:loading:stop"));
      }
    }
  };

  return (
    <section id="contact" className="w-full max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-14 scroll-mt-20 relative z-10">
      {/* Section Header */}
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Start A Conversation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-Outfit tracking-tight text-gray-900 dark:text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-3.5 text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Have an ambitious project, an AI/full-stack opportunity, or want to discuss system architecture? My inbox and WhatsApp are always open.
          </p>
        </div>
      </Reveal>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* ================= LEFT COLUMN: Communication Hub (5 cols) ================= */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          {/* Availability Status Card */}
          <Reveal delay={100}>
            <div className="rounded-3xl p-6 bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 shadow-lg shadow-purple-500/5 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

              <div className="flex items-center gap-3 mb-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Current Status
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold font-Outfit text-gray-900 dark:text-white">
                Available for Full-Time Roles &amp; High-Impact Client Projects
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5 flex items-center gap-1.5 font-medium">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Typical response time: Under 2 hours</span>
              </p>
            </div>
          </Reveal>

          {/* Direct Communication Channels */}
          <Reveal delay={200}>
            <div className="rounded-3xl p-6 bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 shadow-lg shadow-purple-500/5 backdrop-blur-xl flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Direct Contact Channels
              </h4>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5 hover:border-rose-300 dark:hover:border-rose-500/30 transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                      Email Address
                    </div>
                    <a
                      href="mailto:digvijaysinghpundir18@gmail.com"
                      className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors truncate block"
                    >
                      digvijaysinghpundir18@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                  <button
                    onClick={() => handleCopy("digvijaysinghpundir18@gmail.com", "email")}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700/60 transition text-xs"
                    title="Copy Email Address"
                  >
                    {copiedItem === "email" ? (
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Copied!</span>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                  <a
                    href="mailto:digvijaysinghpundir18@gmail.com"
                    className="p-2 rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition"
                    title="Send Email"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5 hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                      WhatsApp Quick Chat
                    </div>
                    <a
                      href="https://wa.me/916397007167"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white hover:text-[#25D366] transition-colors truncate block"
                    >
                      +91 6397007167
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/916397007167"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1 shadow-sm hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Chat</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Direct Phone Call */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                      Direct Voice Call
                    </div>
                    <a
                      href="tel:+916397007167"
                      className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                    >
                      +91 6397007167
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                  <button
                    onClick={() => handleCopy("+916397007167", "phone")}
                    className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700/60 transition text-xs"
                    title="Copy Phone Number"
                  >
                    {copiedItem === "phone" ? (
                      <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">Copied!</span>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                  </button>
                  <a
                    href="tel:+916397007167"
                    className="p-2 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition"
                    title="Call Now"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200/60 dark:border-white/5">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                    Location &amp; Work Hours
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                    Lucknow / NCR, India • IST (UTC+5:30)
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Social Profiles Quick Bar */}
          <Reveal delay={250}>
            <div className="rounded-3xl p-5 bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 shadow-lg shadow-purple-500/5 backdrop-blur-xl flex items-center justify-between">
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400">
                Professional Profiles
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/imdigvijaysingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
                  title="GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/digvijaysinghpundir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
                  title="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64c0-.9-.74-1.64-1.64-1.64a1.64 1.64 0 0 0-1.64 1.64c0 .9.74 1.64 1.64 1.64m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/imdigvijaysingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 active:scale-95 transition-all shadow-sm"
                  title="X (Twitter) Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ================= RIGHT COLUMN: Interactive Message Form (7 cols) ================= */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="rounded-3xl p-6 sm:p-9 bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 shadow-xl shadow-purple-500/5 backdrop-blur-xl relative overflow-hidden">
              {/* Soft decorative background glows */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="mb-7">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full border border-purple-200/50 dark:border-purple-500/20">
                  Direct Inbox
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-Outfit text-gray-900 dark:text-white mt-3">
                  Send Me a Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5 font-normal">
                  Drop a project brief, hiring inquiry, or collaboration idea below.
                </p>
              </div>

              {/* What are you looking for? Chips */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                  How can I help you?
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((type) => {
                    const active = selectedInquiry === type;
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedInquiry(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                          active
                            ? "bg-gradient-to-r from-[#9333ea] to-[#ea580c] text-white shadow-md shadow-purple-500/20 scale-[1.03]"
                            : "bg-gray-100 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Status States */}
              {status === "success" ? (
                <div className="py-12 px-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold font-Outfit text-gray-900 dark:text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out! Your message was delivered straight to Digvijay&apos;s personal inbox. Expect a response shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                          className="w-full px-4 py-3 pl-11 rounded-2xl bg-gray-50/80 dark:bg-gray-800/70 border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                        />
                        <svg
                          className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                        Your Email <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 pl-11 rounded-2xl bg-gray-50/80 dark:bg-gray-800/70 border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
                        />
                        <svg
                          className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Message <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project, timeline, tech stack, or what role you are hiring for..."
                        className="w-full px-4 py-3 pl-11 rounded-2xl bg-gray-50/80 dark:bg-gray-800/70 border border-gray-200 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none"
                      />
                      <svg
                        className="w-4 h-4 text-gray-400 absolute left-4 top-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                  </div>

                  {/* Error Notification */}
                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/40 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Something went wrong while submitting. Please contact directly via WhatsApp or email!</span>
                    </div>
                  )}

                  {/* Submit Button & Security Note */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9333ea] via-[#e11d48] to-[#f97316] text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-500/25 hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                      <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                      <span>Direct delivery • Zero spam</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
