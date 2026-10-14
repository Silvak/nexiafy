"use client";

import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

const ease = [0.22, 0.61, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const groupVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

type ScrollRevealVariant = "single" | "group" | "groupItem";

interface ScrollRevealProps {
  variant: ScrollRevealVariant;
  className?: string;
  children: ReactNode;
}

function joinClassName(className?: string) {
  return className ? `scroll-reveal ${className}` : "scroll-reveal";
}

export default function ScrollReveal({
  variant,
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
      <motion.div className={revealClassName} variants={itemVariants}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={revealClassName}
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease }}
    >
      {children}
    </motion.div>
  );
}
