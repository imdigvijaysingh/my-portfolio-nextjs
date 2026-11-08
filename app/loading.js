export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 dark:bg-[#11001F]/85 backdrop-blur-xl transition-all select-none">
      {/* Ambient Radial Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/30 to-pink-500/20 blur-[100px] pointer-events-none animate-pulse" />

      {/* Futuristic Orbital Ring Loader */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Rotating Conic Gradient Ring */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-purple-600 via-pink-500 to-amber-400 animate-spin">
          <div className="w-full h-full rounded-full bg-white dark:bg-[#11001F]" />
        </div>

        {/* Counter-Rotating Inner Glow Ring */}
        <div
          className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-purple-400/60 dark:border-purple-300/40 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "4s" }}
        />

        {/* Pulsing Monogram Core */}
        <div className="absolute flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-purple-500/30 font-Ovo animate-pulse">
          D
        </div>
      </div>

      {/* Animated Brand Headline */}
      <h2 className="text-lg sm:text-xl font-bold font-Ovo tracking-wide bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text mb-2">
        Digvijay Singh
      </h2>

      {/* Shimmer Progress Track */}
      <div className="w-40 sm:w-48 h-1 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden relative shadow-inner mb-3">
        <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-pink-500 rounded-full animate-progress" />
      </div>

      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider uppercase animate-pulse">
        Loading experience...
      </p>
    </div>
  );
}
