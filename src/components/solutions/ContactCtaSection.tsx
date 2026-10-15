import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { SolutionCta } from "@/config/solutions/types";

interface ContactCtaSectionProps {
  cta: SolutionCta;
}

export default function ContactCtaSection({ cta }: ContactCtaSectionProps) {
  return (
    <div className="mx-auto mt-[64px] w-full max-w-[1024px] px-5 md:mt-36 lg:px-0">
      <ScrollReveal variant="single" direction="y">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-11 px-8 py-12 md:gap-12 md:rounded-4xl md:px-12 md:py-24">
          <div className="flex flex-col items-center gap-4 text-center md:gap-8">
            <div className="flex max-w-[568px] flex-col items-center gap-3 text-center md:gap-5">
              <h3 className="text-lg font-bold text-gray-1 md:text-xl">
                {cta.title}
              </h3>
              <p className="text-gray-6 md:text-lg">{cta.description}</p>
            </div>
            <Link
              href={cta.href}
              className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] mx-auto flex h-12 items-center justify-center space-x-3 rounded-full bg-brand-rose-1 pl-6 pr-4 text-lg font-medium text-white transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90 md:h-16 md:pl-8 md:pr-7"
            >
              <span className="text-[14px] font-bold text-white md:text-lg md:font-medium">
                {cta.buttonLabel}
              </span>
              <ArrowRight aria-hidden size={20} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
