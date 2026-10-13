"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past the given threshold.
 * Useful to toggle a fixed header background on scroll.
 */
export function useScrolled(threshold: number = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
