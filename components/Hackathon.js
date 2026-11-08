"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

const hackathonStats = [
  { label: "Nationwide Teams", value: "3,000+", desc: "Registered across India" },
  { label: "Grand Finalists", value: "Top 72", desc: "Top 2.4% selection rate" },
  { label: "Team Leader", value: "Team Muledna", desc: "Led architecture & code" },
  { label: "Host Institute", value: "IIT Hyderabad", desc: "48-Hour On-Campus Finale" },
];

// Placeholder slots for your actual pictures from IIT Hyderabad.
// Drop your images into /public/assets/hackathon/ and update the paths below!
const hackathonMoments = [
  {
    id: 1,
    title: "IIT Hyderabad Campus & Entry",
    subtitle: "Stepping onto one of India's premier tech campuses",
    tag: "Campus Life",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
  {
    id: 2,
    title: "Team Muledna in Action",
    subtitle: "Late-night sprint, debugging, and system design",
    tag: "Leadership & Code",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 3,
    title: "Pitching to National Judges",
    subtitle: "Presenting the solution to the evaluation panel",
    tag: "Grand Finale",
    aspect: "col-span-1 aspect-[4/3]",
  },
  {
    id: 4,
    title: "The Final Round Ceremony",
    subtitle: "Standing among the Top 72 national teams",
    tag: "Achievement",
    aspect: "col-span-1 md:col-span-2 aspect-[16/10]",
  },
];

export default function Hackathon() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="hackathon" className="w-full px-5 lg:px-8 xl:px-[12%] py-16 scroll-mt-20 relative z-10">
      {/* Header */}
      <Reveal>
        <p className="text-center mb-2 text-sm md:text-base font-Ovo text-purple-600 dark:text-purple-400 font-semibold uppercase tracking-widest">
          National Level Achievement & Leadership
        </p>
        <h2 className="text-center text-4xl sm:text-5xl font-Ovo font-semibold mb-6">
          The IIT Hyderabad Journey
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base font-Ovo">
          From Saharanpur to the national tech stage — leading{" "}
          <strong className="text-gray-900 dark:text-white font-semibold">Team Muledna</strong>{" "}
          at the prestigious{" "}
          <strong className="text-purple-600 dark:text-purple-400 font-semibold">
            CyberShield Hackathon 2026
          </strong>{" "}
          at IIT Hyderabad.
        </p>
      </Reveal>

      {/* Narrative Card */}
      <Reveal delay={100}>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900/10 via-white to-pink-500/5 dark:from-purple-950/40 dark:via-darkHover/60 dark:to-purple-900/20 border border-purple-200/60 dark:border-purple-500/20 p-8 sm:p-12 mb-12 shadow-xl backdrop-blur-md">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              CyberShield Hackathon 2026 • Grand Finale
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-Ovo text-gray-900 dark:text-white mb-6 leading-snug">
              &ldquo;A journey of grit, high-pressure problem solving, and representing my roots on a national stage.&rdquo;
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Coming from Saharanpur, stepping onto the state-of-the-art campus of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">IIT Hyderabad</span>{" "}
                for a non-stop, 48-hour national hackathon was a defining chapter. Over{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">3,000+ teams</span>{" "}
                registered nationwide, and through multiple rigorous evaluation rounds, my team —{" "}
                <span className="font-semibold text-gray-900 dark:text-white">Team Muledna</span> — was selected among the{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Top 72 Grand Finalists</span>{" "}
                (top 2.4% acceptance rate).
              </p>
              <p>
                As team leader, I spearheaded our system architecture, guided rapid frontend and backend implementation,
                and pitched our live product to seasoned panels of professors and industry judges. The experience proved that
                determination, technical clarity, and authentic teamwork can compete and shine alongside the sharpest minds in the country.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Metrics Banner */}
      <Reveal delay={200}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {hackathonStats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center border border-gray-200/80 dark:border-white/10 hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Photo Showcase Section */}
      <Reveal delay={300}>
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold font-Ovo mb-2">
            Moments from the Event
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Snapshots from 2 unforgettable days at IIT Hyderabad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hackathonMoments.map((moment) => (
            <div
              key={moment.id}
              className={`${moment.aspect} group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gradient-to-br from-gray-900/90 to-purple-950 text-white shadow-lg cursor-pointer flex flex-col justify-end p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}
              onClick={() => setSelectedPhoto(moment)}
            >
              {/* Background gradient & decorative pattern */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover:scale-105 transition-transform duration-700" />

              {/* Tag badge */}
              <div className="relative z-20 mb-auto">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  {moment.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="relative z-20">
                <h4 className="text-lg sm:text-xl font-bold font-Ovo mb-1 group-hover:text-purple-300 transition-colors">
                  {moment.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 font-light">
                  {moment.subtitle}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/20 backdrop-blur-md">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Upload instruction reminder for the user */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/40 rounded-xl py-3 px-6 inline-block">
            📸 <strong>Photos Ready to Display:</strong> Drop your IIT Hyderabad pictures into <code className="font-mono text-purple-600 dark:text-purple-400">public/assets/hackathon/</code> and they will appear directly in this gallery!
          </p>
        </div>
      </Reveal>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full p-8 border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 mb-4">
              {selectedPhoto.tag}
            </span>

            <h3 className="text-2xl font-bold font-Ovo text-gray-900 dark:text-white mb-2">
              {selectedPhoto.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              {selectedPhoto.subtitle}
            </p>

            <div className="rounded-2xl bg-gradient-to-br from-purple-900 to-black p-8 text-center text-white aspect-[16/9] flex flex-col items-center justify-center border border-purple-500/30">
              <span className="text-4xl mb-3">🏛️</span>
              <p className="font-semibold text-lg font-Ovo mb-1">CyberShield Hackathon 2026</p>
              <p className="text-xs text-purple-300">IIT Hyderabad • Team Muledna</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
