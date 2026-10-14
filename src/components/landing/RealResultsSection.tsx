"use client";

import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";
import Marquee from "react-fast-marquee";

import { realResults, type RealResultItem } from "@/config/landingContent";

import ScrollReveal from "./ScrollReveal";

function RealResultCard({ item }: { item: RealResultItem }) {
  return (
    <div className="mx-[16px] flex h-[384px] max-w-[296px] flex-col rounded-[40px] bg-gray-11 px-6 py-8 lg:h-[492px] lg:max-w-[363px] lg:p-8">
      <img
        src={realResults.logo.src}
        alt={realResults.logo.name}
        className="h-10 w-auto self-start brightness-0 invert lg:h-12"
      />
      <p className="mt-4 mb-6 overflow-hidden text-base font-normal text-ellipsis text-gray-6 lg:mt-10 lg:mb-16 lg:text-lg lg:[&_b]:font-medium [&_b]:text-white">
        “
        {item.quote.map((part) =>
          part.emphasis ? <b key={part.text}>{part.text}</b> : part.text,
        )}
        ”
      </p>
      <div className="flex justify-start">
        <a
          id={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden rounded-full"
        >
          <div
            aria-hidden
            className="absolute h-full w-full overflow-hidden bg-white/10 opacity-30"
          />
          <div className="sticky m-px flex h-full items-center gap-3 overflow-hidden rounded-full bg-[#181c23] py-3.5 pr-4 pl-6">
            <span className="text-sm font-medium text-gray-5">
              {realResults.readMoreLabel}
            </span>
            <ArrowRight
              aria-hidden
              className="h-4 w-4 text-brand-rose-1"
              strokeWidth={2}
            />
          </div>
        </a>
      </div>
    </div>
  );
}

/**
 * Full-bleed testimonial marquee. Reuses the trusted-by pattern
 * (react-fast-marquee + reduced-motion) so the cards scroll past both edges.
 * Each card must be a direct child so the track lays them out in one row.
 */
export default function RealResultsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <ScrollReveal variant="single">
    <section className="relative mx-auto flex w-full flex-col items-center pt-[108px] lg:pt-44">
      <h3 className="text-xl font-bold text-white lg:text-2xl">
        {realResults.title}
      </h3>
      <p className="mx-6 mt-5 mb-16 px-5 text-center text-base font-normal text-gray-6 lg:mx-0 lg:px-0 lg:text-lg">
        {realResults.subtitle}
      </p>
      <div className="relative w-full overflow-hidden lg:mt-12">
        <Marquee
          speed={40}
          pauseOnHover
          autoFill
          play={!reduceMotion}
          gradient
          gradientColor="#121519"
          gradientWidth="15%"
        >
          {realResults.items.map((item) => (
            <RealResultCard key={item.id} item={item} />
          ))}
        </Marquee>
      </div>
    </section>
    </ScrollReveal>
  );
}
