"use client";

import AnnouncementBar from "@/components/header/AnnouncementBar";
import HeaderActions from "@/components/header/HeaderActions";
import MainNav from "@/components/header/MainNav";
import NexiafyLogo from "@/components/header/NexiafyLogo";
import { useScrolled } from "@/hooks/useScrolled";

/**
 * Fixed desktop header: announcement bar + navbar with menu and CTAs.
 * The dark background fades in on scroll to keep contrast over the content.
 */
export default function DesktopHeader() {
  const scrolled = useScrolled();

  return (
    <header className="fixed inset-x-0 top-0 z-20 hidden w-full lg:block">
      <AnnouncementBar />
      <div className="relative px-16 py-[1rem]">
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 bg-gray-14/95 backdrop-blur-sm transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 opacity-5" />
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-[auto_1fr_auto] items-center">
          <NexiafyLogo />
          <MainNav />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
