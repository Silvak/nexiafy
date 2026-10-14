"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  researchInitiatives,
  type ResearchInitiative,
} from "@/config/landingContent";

import ScrollReveal from "./ScrollReveal";

function InitiativeCard({ item }: { item: ResearchInitiative }) {
  return (
    <div className="flex h-full w-full flex-col gap-12 rounded-3xl bg-gray-11 p-5 md:p-12">
      <div className="flex flex-col gap-3 md:gap-5">
        <h3 className="text-lg font-medium text-gray-1 md:text-xl md:font-bold">
          {item.title}
        </h3>
        <p className="text-base font-normal whitespace-pre-line text-gray-6 md:font-medium">
          {item.description}
        </p>
      </div>
      <div className="relative mt-auto flex flex-wrap items-center gap-6">
        {item.logos.map((logo, logoIndex) => (
          <img
            key={`${item.id}-${logoIndex}`}
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={24}
            className="h-6 w-auto contrast-110 brightness-0 grayscale invert"
          />
        ))}
      </div>
    </div>
  );
}

export default function ResearchInitiativesSection() {
  const reduceMotion = useReducedMotion() === true;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const items = researchInitiatives.items;
  const maxIndex = Math.max(0, items.length - visibleCount);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = viewport?.querySelector<HTMLElement>("[data-track]");
    const slide = viewport?.querySelector<HTMLElement>("[data-slide]");
    if (!viewport || !track || !slide) return;

    const slideWidth = slide.getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const viewportWidth = viewport.getBoundingClientRect().width;
    const nextVisible =
      slideWidth > 0
        ? Math.max(1, Math.round((viewportWidth + gap) / (slideWidth + gap)))
        : 1;

    setStep(slideWidth + gap);
    setVisibleCount(nextVisible);
  }, []);

  useEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <ScrollReveal variant="single">
    <section
      aria-label={researchInitiatives.title}
      className="flex w-full flex-col gap-5 overflow-hidden pt-16 md:gap-16 md:pt-36 lg:pt-44"
    >
      <div className="grid grid-cols-content justify-center px-5 md:px-0">
        <div className="flex w-full flex-row items-center justify-between gap-5 md:gap-8">
          <h2 className="text-xl font-bold text-gray-5 md:text-2xl md:text-white">
            {researchInitiatives.title}
          </h2>
          <div className="flex w-fit items-center justify-end gap-4">
            <button
              type="button"
              aria-label="Previous initiative"
              disabled={!canPrev}
              onClick={() => setIndex((current) => Math.max(0, current - 1))}
              className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl bg-gray-9 text-gray-5 disabled:opacity-50"
            >
              <ChevronLeft aria-hidden className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              aria-label="Next initiative"
              disabled={!canNext}
              onClick={() =>
                setIndex((current) => Math.min(maxIndex, current + 1))
              }
              className="flex aspect-square h-12 w-12 items-center justify-center rounded-xl bg-gray-9 text-gray-5 disabled:opacity-50"
            >
              <ChevronRight aria-hidden className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-content justify-center px-5 md:px-0">
        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            data-track
            className={`flex items-stretch gap-5 md:gap-8 ${
              reduceMotion
                ? ""
                : "ease-[cubic-bezier(0.95,0.05,0.795,0.035)] transition-transform duration-500"
            }`}
            style={{ transform: `translate3d(${-index * step}px, 0px, 0px)` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                data-slide
                className="flex min-w-0 flex-[0_0_100%] self-stretch md:flex-[0_0_calc(50%-1rem)]"
              >
                <InitiativeCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
