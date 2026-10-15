"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { TeamGroup } from "@/config/ourTeamContent";

import { clampIndex, getMaxIndex } from "./carouselMath";
import TeamMemberCard from "./TeamMemberCard";

function useVisibleSlideCount(): number {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    const md = window.matchMedia("(min-width: 768px)");
    const lg = window.matchMedia("(min-width: 1024px)");

    const sync = () => {
      if (lg.matches) {
        setVisible(4);
        return;
      }
      if (md.matches) {
        setVisible(3);
        return;
      }
      setVisible(1);
    };

    sync();
    md.addEventListener("change", sync);
    lg.addEventListener("change", sync);
    return () => {
      md.removeEventListener("change", sync);
      lg.removeEventListener("change", sync);
    };
  }, []);

  return visible;
}

function carouselTransform(index: number, visible: number): string {
  const gaps = Math.max(0, visible - 1);
  const step = `calc((100% - ${gaps}rem) / ${visible} + 1rem)`;
  return `translate3d(calc(-${index} * (${step})), 0, 0)`;
}

interface TeamCarouselProps {
  group: TeamGroup;
}

export default function TeamCarousel({ group }: TeamCarouselProps) {
  const visible = useVisibleSlideCount();
  const total = group.members.length;
  const [index, setIndex] = useState(0);
  const activeIndex = clampIndex(index, total, visible);

  const maxIndex = getMaxIndex(total, visible);
  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < maxIndex;

  const goPrev = useCallback(() => {
    setIndex((current) =>
      clampIndex(clampIndex(current, total, visible) - 1, total, visible),
    );
  }, [total, visible]);

  const goNext = useCallback(() => {
    setIndex((current) =>
      clampIndex(clampIndex(current, total, visible) + 1, total, visible),
    );
  }, [total, visible]);

  return (
    <div className="relative grid grid-cols-1 content-start items-start justify-center pt-16 md:pt-36 lg:pt-44">
      <ScrollReveal variant="single">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between space-x-4 px-5 pb-8 md:px-12 md:pb-16 lg:px-16">
          <h3 className="text-xl font-bold text-gray-1 md:text-2xl">
            {group.title}
          </h3>
          <div className="flex gap-4">
            <button
              type="button"
              className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-10/80 backdrop-blur-xs disabled:pointer-events-none disabled:opacity-50"
              disabled={!canGoPrev}
              aria-label={`Previous ${group.title}`}
              onClick={goPrev}
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-10/80 backdrop-blur-xs disabled:pointer-events-none disabled:opacity-50"
              disabled={!canGoNext}
              aria-label={`Next ${group.title}`}
              onClick={goNext}
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden px-5 md:px-12 lg:px-16">
          <div
            className="mx-auto flex w-full max-w-5xl justify-start gap-4 transition-transform duration-500 ease-out"
            style={{ transform: carouselTransform(activeIndex, visible) }}
          >
            {group.members.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
