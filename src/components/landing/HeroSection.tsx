"use client";

import { MotionConfig, motion } from "motion/react";

import Button from "@/components/common/Button";
import HeroPill from "@/components/landing/HeroPill";
import { hero } from "@/config/landingContent";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Landing hero: rotating announcement pill, two-line title, subtitle and
 * primary/secondary CTAs. The header is fixed and overlays the page, so the
 * margins below clear it directly (no layout-level padding offset).
 */
export default function HeroSection() {
  const [titleLineOne, titleLineTwo] = hero.titleLines;

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative z-10 mx-5 mb-[88px] mt-[124px] flex flex-[1_0_0] flex-col items-center justify-center lg:mx-auto lg:mt-[300px] lg:w-[1021px]">
        <motion.div
          className="grid items-center gap-6 lg:gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <HeroPill pills={hero.pills} />
          <h1 className="mx-6 text-center text-xl font-bold text-gray-1 lg:mx-0 lg:text-3xl">
            <span>
              {titleLineOne}
              <br />
            </span>
            <span>{titleLineTwo}</span>
          </h1>
          <p className="text-center text-sm font-normal text-gray-5 lg:text-[28px] lg:font-medium lg:leading-[36px]">
            {hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-4"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          <Button href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
