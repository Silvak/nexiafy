"use client";

import AnnouncementBar from "@/components/header/AnnouncementBar";
import HeaderActions from "@/components/header/HeaderActions";
import HeaderBackdrop from "@/components/header/HeaderBackdrop";
import MainNav from "@/components/header/MainNav";
import NexiafyLogo from "@/components/header/NexiafyLogo";
import { useScrolled } from "@/hooks/useScrolled";

/**
 * Fixed desktop header: announcement bar + navbar with menu and CTAs.
 * A frosted-glass background fades in on scroll to keep contrast over the content.
 */
export default function DesktopHeader() {
  const scrolled = useScrolled();

  return (
    <header className="fixed inset-x-0 top-0 z-20 hidden w-full lg:block">
      <AnnouncementBar />
      <div className="relative px-16 py-[1rem]">
        <HeaderBackdrop visible={scrolled} />
        <div className="mx-auto grid max-w-screen-lg grid-cols-[auto_1fr_auto] items-center">
          <NexiafyLogo />
          <MainNav />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
