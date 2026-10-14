import { ArrowRight } from "lucide-react";

import Button from "@/components/common/Button";
import SectionContainer from "@/components/common/SectionContainer";
import { foundry } from "@/config/landingContent";

export default function FoundrySection() {
  return (
    <SectionContainer spacing="none" className="pb-20 pt-[176px] lg:pt-44">
      <div className="relative overflow-hidden rounded-4xl bg-gray-11">
        <div className="flex flex-col gap-6 p-5 md:flex-row md:gap-12 md:p-8">
          <div className="relative shrink-0 md:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl md:aspect-auto md:h-full md:min-h-[400px]">
              <img
                src={foundry.image}
                alt={foundry.imageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute top-0 right-0 z-10 flex items-center justify-center rounded-bl-md bg-brand-yellow-1">
                <p className="px-2 pt-[1.5px] pb-[2.5px] text-sm font-bold text-gray-14">
                  {foundry.badge}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 md:w-1/2">
            <div className="flex flex-col gap-3">
              <p className="text-[10px] text-xs font-medium tracking-wide text-white uppercase">
                {foundry.eyebrow}
              </p>
              <h3 className="text-lg font-bold text-white md:text-[2.25rem] md:leading-[2.75rem]">
                {foundry.title}
              </h3>
              <p className="text-sm font-normal text-gray-6 lg:text-lg">
                <span>{foundry.description}</span>
                <span className="font-medium text-gray-3">
                  {foundry.descriptionEmphasis}
                </span>
              </p>
            </div>
            <Button
              id={foundry.cta.id}
              href={foundry.cta.href}
              className="w-full self-start px-6! md:w-auto"
            >
              {foundry.cta.label}
              <ArrowRight aria-hidden size={20} strokeWidth={2} className="ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
