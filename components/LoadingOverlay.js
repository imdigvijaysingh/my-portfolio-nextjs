"use client";

import { useEffect, useState, Suspense } from "react";
import { usePathname } from "next/navigation";

function LoadingOverlayContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("Loading experience...");
  const pathname = usePathname();

  // Reset loading smoothly whenever pathname changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    // Custom event listeners for programmatic loading triggers (e.g. form submission)
    const handleStart = (e) => {
      setMessage(e?.detail?.message || "Processing request...");
      setIsLoading(true);
    };

    const handleStop = () => {
      setIsLoading(false);
    };

    window.addEventListener("app:loading:start", handleStart);
    window.addEventListener("app:loading:stop", handleStop);

    // Global click listener to intercept navigation link clicks
    const handleLinkClick = (event) => {
      const anchor = event.target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      const download = anchor.getAttribute("download");

      // Skip external links, mailto, tel, downloads, or blank targets
      if (!href || target === "_blank" || download) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
      if (href.startsWith("http://") || href.startsWith("https://")) return;

      // Skip pure in-page hash links (e.g. #contact, #about, /#contact when on home page)
      if (href.startsWith("#")) return;
      if (pathname === "/" && href.startsWith("/#")) return;

      // If clicking the current path without hash, ignore
      if (href === pathname) return;

      // Extract destination title/message if possible
      let navMsg = "Loading page...";
      if (href.includes("/projects")) navMsg = "Loading projects showcase...";
      else if (href.includes("/experience")) navMsg = "Loading experience & timeline...";
      else if (href.includes("/hackathon") || href.includes("/iit-hyderabad")) navMsg = "Loading IIT Hyderabad showcase...";

      setMessage(navMsg);
      setIsLoading(true);

      // Failsafe: auto dismiss after 4.5s in case navigation is interrupted
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };

    document.addEventListener("click", handleLinkClick, { capture: true });

    return () => {
      window.removeEventListener("app:loading:start", handleStart);
      window.removeEventListener("app:loading:stop", handleStop);
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Loading"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/70 dark:bg-black/75 backdrop-blur-md transition-all duration-300 select-none animate-fade-in"
    >
      {/* Ambient Radial Glows */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-orange-500/20 blur-[110px] pointer-events-none animate-pulse" />

      {/* Orbital Double Ring Wheel Loader */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Rotating Conic Gradient Ring */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#9333ea] via-[#c026d3] to-[#ea580c] animate-spin shadow-lg shadow-purple-500/25">
          <div className="w-full h-full rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm" />
        </div>

        {/* Counter-Rotating Inner Dashed Ring */}
        <div
          className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-purple-400/80 dark:border-purple-300/60 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "3s" }}
        />

        {/* Pulsing Monogram Core */}
        <div className="absolute flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#9333ea] via-[#e11d48] to-[#f97316] text-white font-extrabold text-sm sm:text-base shadow-md shadow-purple-500/40 font-Outfit animate-pulse">
          D
        </div>
      </div>

      {/* Brand Title */}
      <h3 className="text-base sm:text-lg font-extrabold font-Outfit tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-1.5">
        Digvijay Singh
      </h3>

      {/* Shimmer Progress Track */}
      <div className="w-44 sm:w-52 h-1.5 rounded-full bg-gray-200/80 dark:bg-white/10 overflow-hidden relative shadow-inner mb-3">
        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-[#9333ea] via-[#c026d3] to-[#ea580c] rounded-full animate-progress" />
      </div>

      {/* Dynamic Status Message */}
      <p className="text-xs sm:text-[13px] font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
        {message}
      </p>

      <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-1 font-normal">
        Preparing intelligent interface...
      </span>
    </div>
  );
}

export default function LoadingOverlay() {
  return (
    <Suspense fallback={null}>
      <LoadingOverlayContent />
    </Suspense>
  );
}
