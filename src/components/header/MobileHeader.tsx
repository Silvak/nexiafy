"use client";

import { useEffect, useState } from "react";

import AnnouncementMarquee from "@/components/header/AnnouncementMarquee";
import HeaderActions from "@/components/header/HeaderActions";
import MenuToggleButton from "@/components/header/MenuToggleButton";
import MobileNavAccordion from "@/components/header/MobileNavAccordion";
import NexiafyLogo from "@/components/header/NexiafyLogo";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useScrolled } from "@/hooks/useScrolled";

const MOBILE_MENU_ID = "mobile-nav-menu";

/**
 * Fixed mobile/tablet header: announcement marquee + bar with logo and menu
 * button. When open, a full-screen overlay slides down and the navigation
 * panel fades in once the overlay is in place.
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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-20 w-full select-none lg:hidden">
      <div
        aria-hidden="true"
        className={`fixed inset-0 -z-10 bg-gray-14/95 backdrop-blur-sm transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      />

      <div className="pointer-events-auto relative">
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 bg-gray-14/95 backdrop-blur-sm transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 opacity-5" />
        </div>
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

      <div
        id={MOBILE_MENU_ID}
        inert={!open}
        className={`fixed inset-x-0 bottom-0 top-[104px] flex flex-col overflow-y-auto px-[18px] pb-6 transition-[opacity,translate,visibility] md:top-[116px] md:px-12 md:pb-12 ${
          open
            ? "pointer-events-auto visible translate-y-0 opacity-100 delay-150 duration-300"
            : "invisible -translate-y-2 opacity-0 duration-200"
        }`}
      >
        <MobileNavAccordion onNavigate={closeMenu} />
        <HeaderActions layout="stacked" onNavigate={closeMenu} />
      </div>
    </header>
  );
}
