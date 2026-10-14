import type { LucideIcon } from "lucide-react";
import { Gauge, Leaf, PiggyBank, ShieldCheck } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  aiSuiteBenefits,
  type AiSuiteBenefit,
} from "@/config/aiSuiteContent";

const benefitIcons: Record<AiSuiteBenefit["icon"], LucideIcon> = {
  cost: PiggyBank,
  privacy: ShieldCheck,
  speed: Gauge,
  sustainability: Leaf,
};

export default function BenefitsSection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal
        variant="single"
        className="text-center text-lg font-bold md:mx-0 md:max-w-none md:text-2xl"
      >
        {aiSuiteBenefits.title}
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {aiSuiteBenefits.items.map((item) => {
          const Icon = benefitIcons[item.icon];
          return (
            <ScrollReveal
              key={item.id}
              variant="single"
              className="flex flex-col items-start gap-8 rounded-[20px] bg-gray-11 p-8 md:flex-row md:rounded-4xl"
            >
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-gray-10">
                <Icon
                  aria-hidden
                  className="h-7 w-7 text-brand-green-1"
                  strokeWidth={2}
                />
              </div>
              <div className="space-y-4 md:space-y-8">
                <h3 className="text-lg font-medium text-gray-1">{item.title}</h3>
                <p className="text-gray-6">{item.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
