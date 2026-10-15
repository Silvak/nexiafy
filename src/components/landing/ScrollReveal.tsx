"use client";

import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

const ease = [0.22, 0.61, 0.36, 1] as const;

const itemVariantsX = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const itemVariantsY = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

type ScrollRevealDirection = "x" | "y";

function getItemVariants(direction: ScrollRevealDirection) {
  return direction === "y" ? itemVariantsY : itemVariantsX;
}

const groupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

type ScrollRevealVariant = "single" | "group" | "groupItem";

interface ScrollRevealProps {
  variant: ScrollRevealVariant;
  /** Vertical reveal matches solution landing sections (translateY 80px). */
  direction?: ScrollRevealDirection;
  className?: string;
  children: ReactNode;
}

function joinClassName(className?: string) {
  return className ? `scroll-reveal ${className}` : "scroll-reveal";
}

export default function ScrollReveal({
  variant,
  direction = "x",
  className,
  children,
}: ScrollRevealProps) {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPrefersReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const revealClassName = joinClassName(className);

  if (prefersReduced) {
    return <div className={revealClassName}>{children}</div>;
  }

  if (variant === "group") {
    return (
      <motion.div
        className={revealClassName}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={groupVariants}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "groupItem") {
    return (
      <motion.div
        className={revealClassName}
        variants={getItemVariants(direction)}
      >
        {children}
      </motion.div>
    );
  }

  const singleHidden =
    direction === "y"
      ? { opacity: 0, y: 80 }
      : { opacity: 0, x: 16 };
  const singleVisible =
    direction === "y" ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 };

  return (
    <motion.div
      className={revealClassName}
      initial={singleHidden}
      whileInView={singleVisible}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.div>
  );
}
