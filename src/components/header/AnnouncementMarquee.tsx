"use client";

import { useReducedMotion } from "motion/react";
import Marquee from "react-fast-marquee";

import { announcements } from "@/config/navigation";

/**
 * Announcement list rendered once; react-fast-marquee clones it to fill the
 * track and create a seamless loop.
 */
function AnnouncementItems() {
  return (
    <>
      {announcements.map((item) => {
        const isExternal = item.href.startsWith("http");

        return (
          <span
            key={item.href}
            className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap px-4"
          >
            <span className="text-sm font-medium leading-5 tracking-normal text-black">
              {item.emoji} {item.text}
            </span>
            <a
              href={item.href}
              className="shrink-0 text-sm font-bold leading-5 tracking-normal text-black underline transition-opacity hover:opacity-80"
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.linkLabel}
            </a>
          </span>
        );
      })}
    </>
  );
}

/**
 * Continuously scrolling announcement strip (mobile version).
 * Pauses on hover and respects prefers-reduced-motion.
 */
export default function AnnouncementMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-[40px] w-full items-center overflow-hidden bg-brand-green-1 md:min-h-[36px]">
      <Marquee speed={40} pauseOnHover autoFill play={!reduceMotion}>
        <AnnouncementItems />
      </Marquee>
    </div>
  );
}
