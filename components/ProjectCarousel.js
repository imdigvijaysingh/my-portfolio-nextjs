"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function ProjectCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = images ? images.length : 0;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  if (!images || images.length === 0) return null;

  const currentImg = images[currentIndex];

  return (
    <div className="w-full">
      {/* Main Carousel Frame */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/10 shadow-xl bg-gray-900 group">
        {/* Aspect Ratio Container for Main Display */}
        <div
          className="relative w-full aspect-[16/9] cursor-zoom-in overflow-hidden select-none bg-black/50"
          onClick={() => setIsLightboxOpen(true)}
          title="Click to view full image"
        >
          <Image
            src={currentImg.src}
            alt={currentImg.title || `${title} screenshot ${currentIndex + 1}`}
            fill
            priority
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain transition-all duration-500 ease-out"
          />

          {/* Top Badge: Slide index & zoom helper */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/60 text-white backdrop-blur-md border border-white/15">
              {currentIndex + 1} / {total}
            </span>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-gray-200 backdrop-blur-md border border-white/10">
              {currentImg.title}
            </span>
          </div>

          <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              className="p-2 rounded-full bg-black/60 text-white hover:bg-black/90 backdrop-blur-md border border-white/20 transition-all hover:scale-110"
              aria-label="View Fullscreen"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Navigation Arrows (only if more than 1 image) */}
        {total > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/55 text-white hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
            >
              <svg className="w-5 h-5 -translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/55 text-white hover:bg-black/85 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
            >
              <svg className="w-5 h-5 translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Caption Bar */}
        {currentImg.caption && (
          <div className="px-5 py-3.5 bg-gray-900/95 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-white text-sm font-semibold tracking-tight">{currentImg.title}</p>
              <p className="text-gray-300 text-xs sm:text-sm font-normal mt-0.5">{currentImg.caption}</p>
            </div>
            <span className="text-[11px] text-gray-400 font-mono self-start sm:self-auto shrink-0">
              Slide {currentIndex + 1} of {total}
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail Navigation Strip */}
      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto pb-2 scrollbar-none">
          {images.map((img, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-24 sm:w-28 md:w-32 aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all duration-200 shrink-0 ${
                  isActive
                    ? "border-purple-600 dark:border-purple-400 scale-105 shadow-md shadow-purple-500/20"
                    : "border-gray-200 dark:border-white/10 opacity-60 hover:opacity-100 hover:border-gray-400"
                }`}
                aria-label={`View slide ${idx + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.title || `Thumbnail ${idx + 1}`}
                  fill
                  placeholder="blur"
                  sizes="128px"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 transition-colors ${
                    isActive ? "bg-transparent" : "bg-black/20"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Controls */}
          <div className="w-full max-w-6xl flex items-center justify-between text-white pb-3 select-none">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-base sm:text-lg">{currentImg.title}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300">
                {currentIndex + 1} of {total}
              </span>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Fullscreen Image Frame */}
          <div
            className="relative w-full max-w-6xl h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImg.src}
              alt={currentImg.title || "Fullscreen view"}
              fill
              placeholder="blur"
              sizes="100vw"
              className="object-contain"
            />

            {/* Navigation in Modal */}
            {total > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                  aria-label="Previous"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                  aria-label="Next"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Caption in Modal */}
          {currentImg.caption && (
            <p className="text-gray-300 text-sm max-w-3xl text-center mt-3" onClick={(e) => e.stopPropagation()}>
              {currentImg.caption}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
