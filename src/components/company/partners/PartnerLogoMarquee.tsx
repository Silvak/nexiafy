"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import Marquee from "react-fast-marquee";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { partnerLogos } from "@/config/partnersContent";

export default function PartnerLogoMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <ScrollReveal variant="single" direction="y">
      <div className="grid grid-cols-content justify-center px-5 md:px-0">
        <div className="relative overflow-hidden py-16 md:py-18">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(90deg, rgb(17, 20, 23) 0%, transparent 25%, transparent 50%, transparent 75%, rgb(17, 20, 23) 100%)",
            }}
          />
          <Marquee speed={40} pauseOnHover autoFill play={!reduceMotion}>
            {partnerLogos.map((logo) => (
              <div
                key={logo.src}
                className="flex h-[135px] items-center justify-center overflow-hidden px-9 py-8"
              >
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-auto max-h-12 object-contain grayscale"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </ScrollReveal>
  );
}
