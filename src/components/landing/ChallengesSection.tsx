import { ArrowRight } from "lucide-react";
import Link from "next/link";

import SectionContainer from "@/components/common/SectionContainer";
import { challenges, type ChallengeItem } from "@/config/landingContent";

import ScrollReveal from "./ScrollReveal";

const textScrim =
  "linear-gradient(180deg, rgba(23, 27, 31, 0) 0%, rgba(23, 27, 31, 0.01) 6.67%, rgba(23, 27, 31, 0.04) 13.33%, rgba(23, 27, 31, 0.08) 20%, rgba(23, 27, 31, 0.15) 26.67%, rgba(23, 27, 31, 0.23) 33.33%, rgba(23, 27, 31, 0.33) 40%, rgba(23, 27, 31, 0.44) 46.67%, rgba(23, 27, 31, 0.56) 53.33%, rgba(23, 27, 31, 0.67) 60%, rgba(23, 27, 31, 0.77) 66.67%, rgba(23, 27, 31, 0.85) 73.33%, rgba(23, 27, 31, 0.92) 80%, rgba(23, 27, 31, 0.96) 86.67%, rgba(23, 27, 31, 0.99) 93.33%, #171b1f 100%)";

function ChallengeCard({ item }: { item: ChallengeItem }) {
  return (
    <div className="relative overflow-hidden rounded-4xl md:h-96">
      <img
        src={item.image}
        alt=""
        className="absolute inset-0 m-[1px] h-full w-full rounded-4xl object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 m-[1px] rounded-4xl bg-[rgba(30,30,30,0.8)]"
      />
      <div
        className="relative z-10 m-[1px] flex h-full flex-col justify-between rounded-4xl p-8 backdrop-blur-[6px] lg:p-12"
        style={{ background: textScrim }}
      >
        <div>
          <h3 className="text-lg font-bold text-white md:text-xl">
            {item.title}
          </h3>
          <p className="mt-6 text-base font-medium text-gray-3 md:mt-8 md:text-lg">
            {item.description}
          </p>
        </div>
        <Link
          id={item.id}
          href={item.href}
          className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] mt-8 flex h-12 w-fit items-center justify-center space-x-3 rounded-full bg-white/5 pr-4 pl-6 text-sm transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90 md:mt-0"
        >
          <span className="text-sm font-medium text-gray-5">
            {challenges.ctaLabel}
          </span>
          <ArrowRight
            aria-hidden
            className="h-4 w-4 text-brand-rose-1"
            strokeWidth={2}
          />
        </Link>
      </div>
    </div>
  );
}

export default function ChallengesSection() {
  return (
    <SectionContainer spacing="none" fullBleed className="pt-16 md:pt-44">
      <div className="relative grid grid-cols-1 gap-16 px-5 md:px-0">
        <h2 className="text-center text-xl font-bold text-gray-5 mix-blend-screen md:text-2xl lg:text-white">
          {challenges.title}
        </h2>
        <ScrollReveal
          variant="group"
          className="grid grid-cols-1 gap-8 overflow-hidden md:grid-cols-2"
        >
          {challenges.items.map((item) => (
            <ScrollReveal key={item.id} variant="groupItem">
              <ChallengeCard item={item} />
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
