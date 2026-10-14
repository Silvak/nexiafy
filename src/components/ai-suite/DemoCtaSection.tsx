import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { aiSuiteDemoCta } from "@/config/aiSuiteContent";

export default function DemoCtaSection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 pb-24 md:px-12 md:pt-36 md:pb-36 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single">
        <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-11 px-8 py-12 md:gap-12 md:rounded-4xl md:px-12 md:py-24">
          <div className="flex flex-col items-center gap-4 text-center md:gap-8">
            <div className="flex flex-col items-center gap-3 text-center md:gap-5">
              <h3 className="text-lg font-bold text-gray-1 md:text-xl">
                {aiSuiteDemoCta.title}
              </h3>
              <p className="text-gray-6 md:text-lg">
                {aiSuiteDemoCta.description}
              </p>
            </div>
            <Link
              href={aiSuiteDemoCta.href}
              className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] mx-auto flex h-12 items-center justify-center space-x-3 rounded-full bg-brand-rose-1 pl-6 pr-4 text-lg font-medium text-white transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90 md:h-16 md:pl-8 md:pr-7"
            >
              <span>{aiSuiteDemoCta.buttonLabel}</span>
              <ArrowRight aria-hidden size={20} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
