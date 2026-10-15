import Image from "next/image";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { QuantumHeroContent } from "@/config/quantum/types";

interface QuantumHeroProps {
  content: QuantumHeroContent;
}

export default function QuantumHero({ content }: QuantumHeroProps) {
  return (
    <div className="relative flex items-center justify-center px-5 pb-40 pt-28 md:px-8 md:pb-72 md:pt-40 lg:px-12">
      {content.videoSrc ? (
        <video
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          playsInline
          poster={content.posterImage}
          aria-label={content.videoAriaLabel ?? content.title}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={content.videoSrc} />
        </video>
      ) : (
        <Image
          src={content.posterImage}
          alt=""
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black/10" aria-hidden />
      <ScrollReveal
        variant="single"
        className="relative mx-auto flex max-w-screen-md flex-col gap-8 md:gap-12"
      >
        <h1 className="relative text-center text-xl font-bold text-gray-1 mix-blend-screen md:text-2xl lg:text-3xl">
          {content.title}
        </h1>
        {content.subtitleLines?.length ? (
          <div className="flex flex-col items-center gap-4 text-center md:gap-6">
            {content.subtitleLines.map((line) => (
              <span
                key={line}
                className="text-lg font-medium text-gray-1 mix-blend-screen md:text-xl"
              >
                {line}
              </span>
            ))}
          </div>
        ) : null}
        {content.logo ? (
          content.logo.type === "text" ? (
            <span
              className={`mx-auto block w-full text-center text-2xl font-bold tracking-tight text-gray-1 mix-blend-screen md:text-4xl ${content.logo.className ?? ""}`}
            >
              {content.logo.text}
            </span>
          ) : (
            <span
              className={`mx-auto block w-full ${content.logo.className ?? "max-w-[160px]"}`}
            >
              <img
                src={content.logo.src}
                alt={content.logo.alt}
                className="mx-auto w-full object-contain brightness-0 invert mix-blend-screen"
              />
            </span>
          )
        ) : null}
      </ScrollReveal>
    </div>
  );
}
