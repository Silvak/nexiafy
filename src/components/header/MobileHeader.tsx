"use client";

import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { useEffect, useState } from "react";

import AnnouncementMarquee from "@/components/header/AnnouncementMarquee";
import HeaderActions from "@/components/header/HeaderActions";
import HeaderBackdrop from "@/components/header/HeaderBackdrop";
import MenuToggleButton from "@/components/header/MenuToggleButton";
import MobileNavAccordion from "@/components/header/MobileNavAccordion";
import NexiafyLogo from "@/components/header/NexiafyLogo";
import {
  menuItemVariants,
  menuPanelVariants,
  overlayTransition,
} from "@/components/header/mobileMenuMotion";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useScrolled } from "@/hooks/useScrolled";

const MOBILE_MENU_ID = "mobile-nav-menu";

/**
 * Fixed mobile/tablet header: announcement marquee + bar with logo and menu
 * button. When open, a full-screen overlay slides down and the navigation
 * items fade in one by one once the overlay is in place.
 */
export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <header className="pointer-events-none fixed inset-x-0 top-0 z-20 w-full select-none lg:hidden">
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu-overlay"
              aria-hidden="true"
              className="fixed inset-0 -z-10 bg-background/95 backdrop-blur-sm"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={overlayTransition}
            />
          )}
        </AnimatePresence>

        <div className="pointer-events-auto relative">
          <HeaderBackdrop visible={scrolled || open} showDivider={!open} />
          <AnnouncementMarquee />
          <div className="md:px-12">
            <div className="grid h-16 w-full grid-cols-[auto_auto] items-center justify-between px-5 md:h-20 md:px-0">
              <NexiafyLogo />
              <MenuToggleButton
                open={open}
                onToggle={() => setOpen((prev) => !prev)}
                controlsId={MOBILE_MENU_ID}
              />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu-panel"
              id={MOBILE_MENU_ID}
              className="pointer-events-auto fixed inset-x-0 bottom-0 top-[104px] flex flex-col overflow-y-auto px-[18px] pb-6 md:top-[116px] md:px-12 md:pb-12"
              variants={menuPanelVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <MobileNavAccordion onNavigate={closeMenu} />
              <motion.div variants={menuItemVariants}>
                <HeaderActions layout="stacked" onNavigate={closeMenu} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </MotionConfig>
  );
}
