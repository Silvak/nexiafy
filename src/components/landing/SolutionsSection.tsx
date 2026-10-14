import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import SectionContainer from "@/components/common/SectionContainer";
import { solutions, type SolutionItem } from "@/config/landingContent";

import ScrollReveal from "./ScrollReveal";

const accentClasses: Record<SolutionItem["accentClass"], string> = {
  "text-brand-sea-1": "text-brand-sea-1",
  "text-brand-yellow-1": "text-brand-yellow-1",
  "text-brand-green-1": "text-brand-green-1",
  "text-brand-orange-1": "text-brand-orange-1",
};

export default function SolutionsSection() {
  return (
    <SectionContainer spacing="none" fullBleed>
      <ScrollReveal
        variant="group"
        className="grid gap-4 px-3 pt-8 lg:grid-cols-2 lg:px-0 lg:pt-44"
      >
        {solutions.map((item) => (
          <ScrollReveal key={item.href} variant="groupItem">
            <Link
              id={item.id}
              href={item.href}
              className="group block w-full overflow-hidden rounded-3xl border border-transparent transition-all duration-300 ease-in-out hover:border-white/20"
            >
              <div
                className="flex flex-col gap-6 overflow-hidden rounded-3xl border-8 border-gray-14 bg-gray-11 bg-cover bg-center p-8 shadow-sm transition-all duration-300 ease-in-out lg:gap-8"
                style={{ backgroundImage: `url("${item.image}")` }}
              >
                <div className="relative flex items-center">
                  <p
                    className={`text-sm font-bold lg:text-base ${accentClasses[item.accentClass]}`}
                  >
                    {item.eyebrow}
                  </p>
                  <ArrowUpRight
                    aria-hidden
                    size={36}
                    strokeWidth={2}
                    className="absolute top-0 right-0 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-lg font-bold text-white lg:text-xl">
                    {item.title}
                  </p>
                  <p className="text-base font-medium text-gray-5">
                    {item.description}
                  </p>
                </div>
                <p className="flex items-center gap-2 text-white">
                  <span className="text-sm font-bold">Learn more</span>
                  <ArrowUpRight aria-hidden size={20} strokeWidth={2} />
                </p>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </ScrollReveal>
    </SectionContainer>
  );
}
