import { announcements } from "@/config/navigation";

/**
 * Announcement list rendered once; AnnouncementMarquee duplicates it to
 * create a seamless loop.
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
  return (
    <div className="w-full overflow-hidden bg-brand-green-1">
      <div className="flex min-h-[40px] items-center md:min-h-[36px]">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
          <div className="flex shrink-0 items-center">
            <AnnouncementItems />
          </div>
          <div className="flex shrink-0 items-center" aria-hidden="true" inert>
            <AnnouncementItems />
          </div>
        </div>
      </div>
    </div>
  );
}
