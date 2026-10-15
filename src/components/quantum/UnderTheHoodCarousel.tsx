"use client";

import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { CarouselGroup } from "@/config/quantum/types";

interface UnderTheHoodCarouselProps {
  title: string;
  gearImage: string;
  gearAlt: string;
  groups: CarouselGroup[];
}

function CarouselGroupBlock({ group }: { group: CarouselGroup }) {
  const [index, setIndex] = useState(0);
  const visibleCount = 2;
  const maxIndex = Math.max(0, group.slides.length - visibleCount);

  function goPrev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  function goNext() {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }

  const visibleSlides = group.slides.slice(index, index + visibleCount);

  return (
    <>
      <div className="flex items-start justify-between border-t border-white/5 p-5 md:p-8 lg:p-12">
        <h3 className="text-md font-medium md:text-xl">
          <span>{group.title}</span>
          {group.titleMuted ? (
            <>
              {" "}
              <span className="text-gray-6">{group.titleMuted}</span>
            </>
          ) : null}
        </h3>
        <div className="flex gap-4">
          <button
            type="button"
            aria-label="Previous"
            disabled={index === 0}
            onClick={goPrev}
            className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-10/80 backdrop-blur-xs disabled:pointer-events-none disabled:opacity-50"
          >
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={index >= maxIndex}
            onClick={goNext}
            className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-10/80 backdrop-blur-xs disabled:pointer-events-none disabled:opacity-50"
          >
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {visibleSlides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex flex-col gap-5 border-l border-t border-white/5 p-5 py-8 first:border-l-0 md:p-8 lg:p-12"
            >
              <Check
                className="text-brand-green-1"
                size={16}
                strokeWidth={2}
                aria-hidden
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-md md:text-lg">{slide.title}</h3>
                <p className="text-gray-6">{slide.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function UnderTheHoodCarousel({
  title,
  gearImage,
  gearAlt,
  groups,
}: UnderTheHoodCarouselProps) {
  return (
    <section className="grid grid-cols-content justify-center gap-12 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="flex flex-col overflow-hidden rounded-[20px] bg-gray-11 md:rounded-4xl">
          <div className="flex items-start justify-between p-5 md:p-8 lg:p-12">
            <h2 className="text-xl font-bold md:text-2xl">{title}</h2>
            <Image
              src={gearImage}
              alt={gearAlt}
              width={56}
              height={56}
              className="h-9 w-9 md:h-14 md:w-14"
            />
          </div>
          {groups.map((group) => (
            <CarouselGroupBlock key={group.id} group={group} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
