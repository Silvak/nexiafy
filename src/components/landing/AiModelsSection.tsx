import { ArrowRight, CloudCog, Server, type LucideIcon } from "lucide-react";
import Link from "next/link";

import SectionContainer from "@/components/common/SectionContainer";
import {
  aiModels,
  type AiModelIcon,
  type AiModelItem,
} from "@/config/landingContent";

const icons: Record<AiModelIcon, LucideIcon> = {
  server: Server,
  "cloud-cog": CloudCog,
};

function ModelCard({ item }: { item: AiModelItem }) {
  const Icon = icons[item.icon];

  return (
    <div className="flex w-full flex-col justify-between rounded-4xl bg-gray-11 p-5 lg:h-[660px] lg:p-8">
      <div>
        <div className="relative h-[188px] overflow-hidden rounded-xl lg:h-[300px] lg:rounded-2xl">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute z-10 flex h-full w-full items-center justify-center">
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[rgba(232,255,254,0.24)] backdrop-blur-[6px] lg:h-[104px] lg:w-[104px]">
              <Icon
                aria-hidden
                className="h-8 w-8 text-white lg:h-10 lg:w-10"
                strokeWidth={2}
              />
            </div>
          </div>
        </div>
        <p className="mt-6 text-lg font-bold text-white lg:mt-12 lg:text-xl">
          {item.title}
        </p>
        <p className="mr-0 mt-3 text-sm font-normal text-gray-6 lg:mr-20">
          {item.description}
        </p>
      </div>
      <Link
        id={item.desktopCtaId}
        href={item.href}
        className="mt-6 hidden items-center justify-center gap-2 rounded-full bg-gray-10 px-6 py-3 text-white backdrop-blur-xs lg:flex"
      >
        <span className="text-sm font-bold">{aiModels.readMoreLabel}</span>
        <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={2} />
      </Link>
      <Link
        id={item.mobileCtaId}
        href={item.href}
        className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#0961FF] px-6 py-4 text-white backdrop-blur-xs lg:hidden"
      >
        <span className="text-sm font-bold">{aiModels.readMoreLabel}</span>
        <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={2} />
      </Link>
    </div>
  );
}

export default function AiModelsSection() {
  return (
    <SectionContainer spacing="none" className="mt-[88px] lg:mt-[176px]">
      <div className="relative flex w-full flex-col items-center gap-12">
        <h3 className="mb-6 text-center text-xl font-bold text-white lg:mb-4 lg:text-2xl">
          {aiModels.title}
        </h3>
        <div className="relative grid w-full grid-cols-1 gap-6 overflow-hidden lg:grid-cols-2 lg:gap-4">
          {aiModels.items.map((item) => (
            <ModelCard key={item.href} item={item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
