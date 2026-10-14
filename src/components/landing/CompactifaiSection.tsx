import { ArrowRight, Info, Shrink } from "lucide-react";

import Button from "@/components/common/Button";
import SectionContainer from "@/components/common/SectionContainer";
import { compactifai } from "@/config/landingContent";

import ScrollReveal from "./ScrollReveal";

export default function CompactifaiSection() {
  return (
    <SectionContainer>
      <ScrollReveal
        variant="single"
        className="flex flex-col items-center justify-center"
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-rose-1 text-white"
          >
            <Shrink size={18} strokeWidth={2.25} />
          </span>
          <span className="text-base font-bold tracking-tight text-gray-1">
            {compactifai.badgeLabel}
          </span>
        </div>
        <h3 className="mt-8 text-center text-xl font-bold text-gray-1 lg:text-2xl">
          {compactifai.title}
        </h3>
        <p className="mx-0 mt-5 text-center text-sm font-normal text-gray-6 lg:mx-28 lg:text-lg">
          {compactifai.description}
        </p>
        <ScrollReveal
          variant="group"
          className="mt-12 flex w-full flex-col gap-6 px-7 lg:flex-row lg:items-center lg:justify-center lg:px-0"
        >
          {compactifai.metrics.map((metric) => (
            <ScrollReveal
              key={metric.label}
              variant="groupItem"
              className="relative overflow-hidden rounded-[20px]"
            >
              <div
                aria-hidden
                className="absolute h-full w-full overflow-hidden bg-white/10 opacity-30"
              />
              <div className="sticky m-px flex h-full w-full gap-4 overflow-hidden rounded-[20px] bg-[#181c23] p-5 lg:w-60">
                <div className="flex flex-1 flex-col gap-1">
                  <p className="min-h-5 text-sm font-medium text-gray-8">
                    {metric.prefix}
                  </p>
                  <p className="text-[2.25rem] leading-[44px] font-bold text-white">
                    {metric.value}
                  </p>
                  <p className="text-base font-medium text-gray-6">
                    {metric.label}
                  </p>
                </div>
                <span className="inline-flex cursor-help">
                  <Info
                    aria-hidden
                    className="h-5 w-5 shrink-0 text-gray-6"
                    strokeWidth={2}
                  />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </ScrollReveal>
        <Button
          id={compactifai.cta.id}
          href={compactifai.cta.href}
          className="mt-12 px-6!"
        >
          {compactifai.cta.label}
          <ArrowRight aria-hidden size={20} strokeWidth={2} className="ml-3" />
        </Button>
      </ScrollReveal>
    </SectionContainer>
  );
}
