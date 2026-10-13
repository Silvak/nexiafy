import { announcements } from "@/config/navigation";

/**
 * Top announcement strip above the main navbar (desktop).
 * Shows the first announcement; mobile uses AnnouncementMarquee instead.
 */
export default function AnnouncementBar() {
  const announcement = announcements[0];
  const isExternal = announcement.href.startsWith("http");

  return (
    <div className="w-full overflow-hidden bg-brand-green-1">
      <div className="relative mx-auto flex min-h-[40px] max-w-screen-2xl items-center justify-center px-4 py-2.5 md:min-h-[36px] md:py-2">
        <div className="flex w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1 px-2 text-center">
          <span className="text-center text-sm font-medium leading-5 tracking-normal text-black">
            {announcement.emoji} {announcement.text}
            <a
              href={announcement.href}
              className="text-center text-sm font-bold leading-5 tracking-normal underline transition-opacity hover:opacity-80"
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {announcement.linkLabel}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
