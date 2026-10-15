"use client";

import type { LucideIcon } from "lucide-react";
import {
  Building,
  CircleGauge,
  DollarSign,
  Plug,
  Target,
} from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  inferenceApiReasons,
  type InferenceReasonIcon,
} from "@/config/inferenceApiContent";

const reasonIcons: Record<InferenceReasonIcon, LucideIcon> = {
  dollarSign: DollarSign,
  gauge: CircleGauge,
  plug: Plug,
  building: Building,
  target: Target,
};

export default function WhyApiSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center px-5 pb-0 pt-16 md:px-12 md:py-[88px]">
      <div className="mx-auto flex w-full max-w-[1024px] flex-col items-center gap-8">
        <ScrollReveal
          variant="group"
          className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <ScrollReveal
            variant="groupItem"
            direction="y"
            className="text-center text-[28px] font-bold leading-[36px] text-gray-1 md:text-start"
          >
            <h2>{inferenceApiReasons.title}</h2>
          </ScrollReveal>

          {inferenceApiReasons.items.map((item) => {
            const Icon = reasonIcons[item.icon];
            return (
              <ScrollReveal
                key={item.id}
                variant="groupItem"
                direction="y"
                className="flex h-[184px] w-full flex-col items-center justify-center gap-[18px] rounded-[32px] bg-gray-11 p-8 text-center md:h-[240px] md:items-start md:justify-between md:gap-8 md:text-start lg:max-w-[320px]"
              >
                <Icon
                  aria-hidden
                  className={`h-9 w-9 shrink-0 ${item.colorClass}`}
                  strokeWidth={2}
                />
                <h3 className="text-[16px] font-medium leading-[24px] text-gray-1 md:text-[20px] md:leading-[28px]">
                  {item.title}
                </h3>
              </ScrollReveal>
            );
          })}
        </ScrollReveal>
      </div>
    </section>
  );
}
