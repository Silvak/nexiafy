import type { LucideIcon } from "lucide-react";
import { Scaling, SlidersVertical, Timer, Zap } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  aiSuiteKeyFeatures,
  type AiSuiteKeyFeature,
} from "@/config/aiSuiteContent";

const featureIcons: Record<AiSuiteKeyFeature["icon"], LucideIcon> = {
  scaling: Scaling,
  sliders: SlidersVertical,
  zap: Zap,
  timer: Timer,
};

export default function KeyFeaturesSection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal
        variant="single"
        className="text-center text-lg font-bold md:mx-0 md:max-w-none md:text-2xl"
      >
        {aiSuiteKeyFeatures.title}
      </ScrollReveal>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {aiSuiteKeyFeatures.items.map((item) => {
          const Icon = featureIcons[item.icon];
          return (
            <ScrollReveal
              key={item.id}
              variant="single"
              className="flex flex-col items-center gap-5 rounded-[20px] bg-gray-11 p-5 md:gap-8 md:rounded-4xl md:p-8 lg:gap-10 lg:px-8 lg:py-12"
            >
              <Icon
                aria-hidden
                className={item.colorClass}
                size={32}
                strokeWidth={2}
              />
              <div className="flex h-14 w-full items-center justify-center text-center text-gray-5">
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
