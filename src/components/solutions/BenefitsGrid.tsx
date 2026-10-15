"use client";

import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  ChartPie,
  CircleGauge,
  CloudDownload,
  Cpu,
  Earth,
  LockKeyhole,
  Plug2,
  ServerCrash,
  Unplug,
  UserPlus,
  Zap,
} from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type {
  SolutionBenefit,
  SolutionBenefitIcon,
} from "@/config/solutions/types";

const benefitIcons: Record<SolutionBenefitIcon, LucideIcon> = {
  userPlus: UserPlus,
  chartPie: ChartPie,
  plug: Plug2,
  zap: Zap,
  gauge: CircleGauge,
  cloudDownload: CloudDownload,
  cpu: Cpu,
  unplug: Unplug,
  earth: Earth,
  serverCrash: ServerCrash,
  lockKeyhole: LockKeyhole,
  blocks: Blocks,
};

interface BenefitsGridProps {
  benefits: SolutionBenefit[];
}

export default function BenefitsGrid({ benefits }: BenefitsGridProps) {
  return (
    <section className="flex w-full flex-col items-center justify-center px-5 pb-0 pt-16 md:px-12 md:pt-[88px]">
      <ScrollReveal
        variant="group"
        className="mx-auto grid w-full max-w-[1024px] gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map((benefit) => {
          const Icon = benefitIcons[benefit.icon];
          return (
            <ScrollReveal
              key={benefit.id}
              variant="groupItem"
              className="flex w-full flex-col items-center gap-8 rounded-4xl bg-gray-11 p-8 text-center md:items-start md:text-start"
            >
              <Icon
                aria-hidden
                className={`h-9 w-9 shrink-0 ${benefit.colorClass}`}
                strokeWidth={2}
              />
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg font-medium text-gray-1">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-6">{benefit.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
