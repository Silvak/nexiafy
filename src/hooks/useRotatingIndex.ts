"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Cycles through indexes `0..length-1` on a fixed interval, looping back to
 * the start. Used to rotate the hero announcement pills. Stays at `0` when
 * there's nothing to rotate through or the user prefers reduced motion.
 */
export function useRotatingIndex(length: number, intervalMs: number): number {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (length <= 1 || reduceMotion) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);

    return () => clearInterval(id);
  }, [length, intervalMs, reduceMotion]);

  // Guards against a stale index if `length` shrinks between renders,
  // without calling setState during the effect.
  return length > 0 ? index % length : 0;
}
