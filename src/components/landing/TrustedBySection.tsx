"use client";

import { useReducedMotion } from "motion/react";
import Marquee from "react-fast-marquee";

import SectionContainer from "@/components/common/SectionContainer";
import { trustedByLogo } from "@/config/landingContent";

function TrustedByItems() {
  return (
    <div className="mx-4 flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl px-6 py-8 md:mx-6 md:h-28 md:w-48">
      <img
        src={trustedByLogo.src}
        alt={trustedByLogo.name}
        className="h-full w-full object-contain brightness-0 invert"
      />
    </div>
  );
}

/**
 * Full-bleed logo marquee. Reuses the `AnnouncementMarquee` pattern
 * (react-fast-marquee + reduced-motion support) but without the fixed
 * gutter, so the track reaches both edges of the content column.
 */
export default function TrustedBySection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionContainer spacing="none" fullBleed>
      <div className="w-full overflow-hidden">
        <Marquee
          speed={80}
          pauseOnHover
          autoFill
          play={!reduceMotion}
          gradient
          gradientColor="#121519"
          gradientWidth="15%"
        >
          <TrustedByItems />
        </Marquee>
      </div>
    </SectionContainer>
  );
}
