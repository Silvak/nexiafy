"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { useRotatingIndex } from "@/hooks/useRotatingIndex";
import type { HeroPillItem } from "@/config/landingContent";

const PILL_CLASSNAME =
  "flex items-center justify-center gap-2 rounded-[48px] bg-white/20 px-3 py-2 backdrop-blur-[12px] transition-all duration-300 ease-in-out hover:bg-white/30 active:scale-95";

function PillContent({ label }: { label: string }) {
  return (
    <>
      <span className="line-clamp-1 overflow-hidden text-ellipsis text-center text-xs font-bold uppercase tracking-widest text-white">
        {label}
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-white"
      />
    </>
  );
}

interface HeroPillProps {
  pills: HeroPillItem[];
  intervalMs?: number;
}

/**
 * Rotating announcement pill. An invisible copy of the current pill sizes
 * the wrapper so the layout doesn't jump, while an absolutely positioned
 * copy on top cross-fades between pills.
 */
export default function HeroPill({ pills, intervalMs = 4000 }: HeroPillProps) {
  const index = useRotatingIndex(pills.length, intervalMs);
  const current = pills[index];

  if (!current) return null;

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <a
          aria-hidden="true"
          tabIndex={-1}
          href={current.href}
          className={`${PILL_CLASSNAME} pointer-events-none invisible`}
        >
          <PillContent label={current.label} />
        </a>
        <div className="absolute inset-0 z-10">
          <AnimatePresence mode="wait">
            <motion.a
              key={current.href}
              href={current.href}
              className={PILL_CLASSNAME}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <PillContent label={current.label} />
            </motion.a>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
