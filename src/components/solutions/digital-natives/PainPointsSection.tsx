import { Check } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { digitalNativesPainPoints } from "@/config/digitalNativesContent";

export default function PainPointsSection() {
  return (
    <section className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:pt-36 lg:px-0 lg:pt-44">
      <ScrollReveal
        variant="single"
        direction="y"
        className="text-center text-lg font-medium text-gray-5 md:text-xl"
      >
        {digitalNativesPainPoints.title}
      </ScrollReveal>
      <ScrollReveal
        variant="single"
        direction="y"
        className="flex flex-col gap-5 rounded-4xl bg-gray-11 p-5 md:gap-8 md:p-8"
      >
        {digitalNativesPainPoints.items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 items-start gap-5 md:grid-cols-[auto_1fr_1fr] md:gap-0"
          >
            <div className="flex h-7 w-fit items-center justify-center">
              <Check
                aria-hidden
                className="mt-1.5 shrink-0 text-brand-green-1"
                size={16}
                strokeWidth={2}
              />
            </div>
            <h3 className="text-lg font-medium text-gray-1 md:ml-4">
              {item.title}
            </h3>
            <p className="text-base text-gray-6">{item.description}</p>
          </div>
        ))}
      </ScrollReveal>
    </section>
  );
}
