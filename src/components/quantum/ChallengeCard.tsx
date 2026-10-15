import { Check } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { ChallengeBlock } from "@/config/quantum/types";

interface ChallengeCardProps {
  block: ChallengeBlock;
}

export default function ChallengeCard({ block }: ChallengeCardProps) {
  const overlayClass = block.darkOverlay
    ? "bg-black/50"
    : "bg-black/20";

  return (
    <ScrollReveal variant="single" direction="y">
      <div className="safari-radius-fix z-0 overflow-hidden rounded-[20px] bg-gray-11 md:rounded-4xl">
        <div className="relative flex aspect-auto w-full overflow-hidden p-5 pb-20 md:aspect-[16/4] md:p-8 lg:p-12">
          {block.videoSrc ? (
            <video
              width={1920}
              height={1080}
              autoPlay
              loop
              muted
              playsInline
              poster={block.posterImage}
              aria-label={block.videoAriaLabel ?? block.bannerTitle}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={block.videoSrc} />
            </video>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={block.posterImage}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className={`absolute inset-0 h-full w-full ${overlayClass}`} />
          <h2 className="relative text-lg font-medium mix-blend-screen md:text-xl">
            {block.bannerTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {block.columns.map((column, index) => (
            <div
              key={`${block.id}-col-${index}`}
              className={`flex flex-col gap-5 p-5 py-8 md:p-8 lg:p-12 ${
                index > 0 ? "border-t border-white/5 md:border-l md:border-t-0" : ""
              }`}
            >
              <Check
                className="text-brand-green-1"
                size={16}
                strokeWidth={2}
                aria-hidden
              />
              <div className="flex flex-col gap-3">
                {column.title ? (
                  <h3 className="text-lg text-gray-1">{column.title}</h3>
                ) : null}
                <p className="text-gray-6">{column.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}
