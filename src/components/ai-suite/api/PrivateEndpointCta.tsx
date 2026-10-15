import Link from "next/link";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { privateEndpointCta } from "@/config/inferenceApiContent";

export default function PrivateEndpointCta() {
  return (
    <div className="grid grid-cols-content justify-center gap-12 px-5 pt-6 pb-16 md:px-12 md:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="w-full">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-11 px-8 py-12 md:gap-12 md:rounded-4xl md:px-12 md:py-24">
            <div className="flex flex-col items-center gap-4 text-center md:gap-8">
              <div className="flex max-w-[568px] flex-col items-center gap-3 text-center md:gap-5">
                <h3 className="text-lg font-bold text-gray-1 md:text-xl">
                  {privateEndpointCta.title}
                </h3>
                <p className="text-gray-6 md:text-lg">
                  {privateEndpointCta.description}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={privateEndpointCta.contactHref}
                  className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-14 items-center justify-center gap-3 rounded-full border border-white/5 bg-brand-rose-1/90 px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
                >
                  <span className="text-[14px] font-bold text-white md:text-lg md:font-medium">
                    {privateEndpointCta.contactLabel}
                  </span>
                </Link>
                <Link
                  href={privateEndpointCta.deploymentHref}
                  id="section-cta-about-private-deployment"
                  className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-14 items-center justify-center gap-3 rounded-full border border-white/5 bg-gray-9 px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
                >
                  <span className="text-[14px] font-bold text-white md:text-lg md:font-medium">
                    {privateEndpointCta.deploymentLabel}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
