"use client";

import { useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import { useRef, type ReactNode } from "react";

import HeroSection from "@/components/landing/HeroSection";
import TrustedBySection from "@/components/landing/TrustedBySection";

const HeroSphere = dynamic(
  () => import("@/components/landing/hero-sphere/HeroSphere"),
  { ssr: false },
);

type HeroStageProps = {
  /** Section whose arrival on screen fades the sphere out. */
  children: ReactNode;
};

/**
 * Hero + trusted-by strip over a fixed WebGL sphere. The sphere stays pinned
 * to the viewport and fades out as the next section scrolls into view.
 */
export default function HeroStage({ children }: HeroStageProps) {
  const fadeTargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: fadeTargetRef,
    offset: ["start end", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      <HeroSphere opacity={opacity} />
      <HeroSection />
      <TrustedBySection />
      <div ref={fadeTargetRef}>{children}</div>
    </>
  );
}
