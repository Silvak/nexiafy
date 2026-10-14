import { stagger, type Transition, type Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const overlayTransition: Transition = { duration: 0.45, ease: easeOut };

/**
 * Navigation panel: waits for the overlay to slide in, then reveals its
 * children one after another. Closing is quick and without delay.
 */
export const menuPanelVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,
      delay: 0.15,
      delayChildren: stagger(0.04, { startDelay: 0.2 }),
    },
  },
};

export const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
};

export const accordionPanelTransition: Transition = {
  duration: 0.3,
  ease: easeOut,
};
