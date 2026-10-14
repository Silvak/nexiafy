import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { aiSuiteDeployment } from "@/config/aiSuiteContent";

export default function DeploymentOptionsSection() {
  return (
    <section
      id="solutions"
      className="mx-auto flex w-full max-w-screen-lg flex-col gap-16 px-5 pt-[88px] md:pt-44 lg:px-0"
    >
      <ScrollReveal
        variant="single"
        className="mx-auto flex w-full max-w-3xl flex-col gap-5 text-center"
      >
        <h2 className="text-[36px] font-bold leading-[44px] tracking-[0%] text-gray-1">
          {aiSuiteDeployment.sectionTitle}
        </h2>
        <p className="text-[20px] font-normal leading-[28px] tracking-[0px] text-gray-6">
          {aiSuiteDeployment.sectionSubtitle}
        </p>
      </ScrollReveal>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {aiSuiteDeployment.options.map((option) => (
            <ScrollReveal key={option.id} variant="single">
              <div className="flex w-full flex-col gap-6 rounded-[32px] bg-gray-11 p-5 md:flex-row md:gap-12 md:p-8">
                <div className="relative h-[188.9px] w-full overflow-hidden rounded-lg md:h-[298.89px] md:w-1/2">
                  <Image
                    src={option.image}
                    alt={option.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-between gap-6 md:h-[298.89px] md:w-1/2">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-[24px] font-bold leading-[36px] text-white md:text-[28px]">
                      {option.title}
                    </h3>
                    <p className="text-sm text-gray-6 md:text-base">
                      {option.description}
                    </p>
                  </div>
                  <Link
                    id={`ai-suite-solution-cta-${option.id}`}
                    href={option.href}
                    className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-14 items-center justify-center gap-3 self-stretch rounded-full bg-[#0961FF] px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
                  >
                    <span>{option.ctaLabel}</span>
                    <ArrowRight aria-hidden size={20} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
