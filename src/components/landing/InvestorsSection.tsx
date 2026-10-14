"use client";

import { useReducedMotion } from "motion/react";
import Marquee from "react-fast-marquee";

import SectionContainer from "@/components/common/SectionContainer";
import { investors, trustedByLogo } from "@/config/landingContent";

import ScrollReveal from "./ScrollReveal";

function InvestorLogo() {
  return (
    <div className="mx-4 flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl px-6 py-8 md:mx-6 md:h-28 md:w-48">
      <img
        src={trustedByLogo.src}
        alt={trustedByLogo.name}
        className="h-full w-full object-contain contrast-110 grayscale brightness-0 invert"
      />
    </div>
  );
}

/**
 * Investor logo marquee, capped at the shared 1024px content column.
 * Same track as the hero trusted-by strip, with a short label above and
 * the placeholder mark repeated until real investor logos exist.
 */
export default function InvestorsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionContainer spacing="none" fullBleed className="relative mt-[72px]">
      <ScrollReveal
        variant="single"
        className="relative z-10 flex w-full flex-col items-center gap-4 py-8"
      >
        <h3 className="px-5 text-xs font-bold tracking-wide text-gray-6 uppercase lg:px-0">
          {investors.label}
        </h3>
        <div className="relative w-full overflow-hidden">
          <Marquee
            speed={80}
            pauseOnHover
            autoFill
            play={!reduceMotion}
            gradient
            gradientColor="#121519"
            gradientWidth="15%"
          >
            <InvestorLogo />
          </Marquee>
        </div>
      </ScrollReveal>
    </SectionContainer>
  );
}
