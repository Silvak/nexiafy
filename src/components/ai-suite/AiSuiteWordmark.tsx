type AiSuiteWordmarkSize = "hero" | "compact";

const sizeClasses: Record<AiSuiteWordmarkSize, string> = {
  hero: "h-16 gap-4 sm:h-[7.5rem] sm:gap-5",
  compact: "h-10 gap-3",
};

const markClasses: Record<AiSuiteWordmarkSize, string> = {
  hero: "h-14 w-14 text-xl sm:h-[4.5rem] sm:w-[4.5rem] sm:text-3xl",
  compact: "h-10 w-10 text-lg",
};

const titleClasses: Record<AiSuiteWordmarkSize, string> = {
  hero: "text-3xl sm:text-5xl",
  compact: "text-2xl md:text-3xl",
};

interface AiSuiteWordmarkProps {
  size?: AiSuiteWordmarkSize;
  className?: string;
}

export default function AiSuiteWordmark({
  size = "hero",
  className = "",
}: AiSuiteWordmarkProps) {
  return (
    <div
      className={`flex items-center text-white ${sizeClasses[size]} ${className}`}
      aria-label="Nexiafy AI Suite"
    >
      <span
        aria-hidden
        className={`flex shrink-0 items-center justify-center rounded-xl bg-white/15 font-bold backdrop-blur-sm ${markClasses[size]}`}
      >
        N
      </span>
      <span className={`font-bold tracking-tight ${titleClasses[size]}`}>
        AI Suite
      </span>
    </div>
  );
}
