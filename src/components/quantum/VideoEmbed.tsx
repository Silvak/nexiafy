import Image from "next/image";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { VideoSection } from "@/config/quantum/types";

interface VideoEmbedProps {
  section: VideoSection;
  className?: string;
}

export default function VideoEmbed({ section, className = "" }: VideoEmbedProps) {
  const wrapperClass = `grid grid-cols-content justify-center px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44 ${className}`;

  if (section.title && section.embedUrl) {
    return (
      <section className={`${wrapperClass} gap-16`}>
        <ScrollReveal variant="single" direction="y">
          <h2 className="text-center text-lg font-bold md:text-2xl">
            {section.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="single" direction="y">
          <div className="relative aspect-video overflow-hidden rounded-[20px] md:rounded-4xl">
            <iframe
              src={section.embedUrl}
              className="absolute h-full w-full"
              title={section.titleAttr ?? section.title}
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"
              allow="autoplay; fullscreen; picture-in-picture"
            />
          </div>
        </ScrollReveal>
      </section>
    );
  }

  return (
    <section className={wrapperClass}>
      <ScrollReveal variant="single" direction="y">
        <div className="safari-radius-fix relative z-0 aspect-video w-full overflow-hidden rounded-2.5xl md:rounded-4xl">
          {section.embedUrl ? (
            <iframe
              src={section.embedUrl}
              allow="autoplay; fullscreen; picture-in-picture"
              title={section.titleAttr ?? "Embedded video"}
              loading="lazy"
              className="absolute inset-0 z-0 h-full w-full rounded-2.5xl md:rounded-4xl"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
            />
          ) : section.posterImage ? (
            <Image
              src={section.posterImage}
              alt={section.titleAttr ?? ""}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          ) : null}
        </div>
      </ScrollReveal>
    </section>
  );
}
