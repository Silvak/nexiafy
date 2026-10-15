import { ArrowRight } from "lucide-react";
import Link from "next/link";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { partnersContactCta } from "@/config/partnersContent";

export default function PartnerContactCta() {
  const { title, buttonLabel, email } = partnersContactCta;

  return (
    <div className="grid grid-cols-content justify-center gap-8 px-5 pt-5 md:gap-16 md:px-12 md:pt-16 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="flex flex-col items-center gap-8 rounded-xl bg-gray-11 px-8 py-12 md:gap-12 md:rounded-4xl md:px-12 md:py-24">
          <h2 className="text-center text-lg font-bold md:text-xl">{title}</h2>
          <Link
            href={`mailto:${email}`}
            className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] relative mx-auto flex h-12 items-center justify-center space-x-3 rounded-full bg-white/5 pl-6 pr-4 text-sm transition-all duration-300 hover:scale-95 hover:bg-gray-12"
          >
            <span className="text-gray-1">{buttonLabel}</span>
            <ArrowRight className="text-brand-rose-1" size={16} aria-hidden />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
