import { ArrowRight } from "lucide-react";
import Link from "next/link";

import SectionContainer from "@/components/common/SectionContainer";
import { platformSpotlight } from "@/config/landingContent";

export default function PlatformSpotlightSection() {
  return (
    <SectionContainer spacing="compact">
      <div className="grid grid-cols-1 gap-16">
        <h2 className="text-center text-xl font-bold text-gray-5 md:text-2xl lg:text-gray-1">
          {platformSpotlight.title}
        </h2>
        <div className="relative mt-0 h-auto w-full overflow-hidden rounded-4xl lg:mt-12">
          <img
            src={platformSpotlight.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative inset-0 z-10 flex h-full w-full flex-col items-center gap-8 rounded-4xl bg-gray-11/50 px-6 py-14 lg:px-8 lg:py-20">
            <p className="text-center text-lg font-black text-white">
              {platformSpotlight.eyebrow}
            </p>
            <p className="text-center text-xl font-bold text-gray-1 lg:text-2xl">
              {platformSpotlight.headline}
            </p>
            <p className="mx-0 text-center text-base font-medium text-gray-3 lg:mx-32 lg:text-lg lg:font-normal">
              {platformSpotlight.description}
            </p>
            <Link
              id={platformSpotlight.cta.id}
              href={platformSpotlight.cta.href}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-brand-rose-1 px-6 text-sm font-bold text-white backdrop-blur-xs transition-all duration-300 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] hover:scale-95 hover:opacity-90"
            >
              {platformSpotlight.cta.label}
              <ArrowRight
                aria-hidden
                size={20}
                strokeWidth={2}
                className="ml-3 text-white"
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
