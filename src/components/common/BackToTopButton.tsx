"use client";

import { ArrowUp } from "lucide-react";
import { motion, useReducedMotion, useScroll } from "motion/react";

/**
 * Fixed button that scrolls back to the top of the page. A ring around it
 * fills according to the page scroll progress.
 */
export default function BackToTopButton() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden sm:bottom-16 sm:right-16 2xl:block">
      <div className="relative p-1">
        <svg
          width="56"
          height="56"
          viewBox="0 0 52 52"
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -rotate-90"
        >
          <motion.circle
            cx="26"
            cy="26"
            r="24"
            strokeWidth={2}
            className="fill-transparent stroke-white/20"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-none bg-gray-10/80 backdrop-blur-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        >
          <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
