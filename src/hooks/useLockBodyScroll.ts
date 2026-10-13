"use client";

import { useEffect } from "react";

/**
 * Locks body scroll while `locked` is true (e.g. while the full-screen
 * mobile menu is open) and restores the previous value afterwards.
 */
export function useLockBodyScroll(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [locked]);
}
