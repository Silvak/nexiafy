import { Check } from "lucide-react";
import Link from "next/link";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { ethicsCommittee } from "@/config/ourTeamContent";

export default function EthicsCommitteeSection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single">
        <h2 className="text-center text-xl font-medium text-gray-1">
          {ethicsCommittee.title}
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-8">
        {ethicsCommittee.cards.map((card) => (
          <ScrollReveal key={card.id} variant="single">
            <div className="flex h-full flex-col gap-5 rounded-[20px] bg-gray-11 p-5 md:rounded-4xl md:p-8 lg:p-12">
              <Check
                className="text-brand-green-1"
                size={16}
                strokeWidth={2}
                aria-hidden
              />
              <h3 className="text-lg font-medium text-gray-1">{card.title}</h3>
              <p className="text-gray-6">{card.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal variant="single">
        <Link
          id={ethicsCommittee.cta.id}
          href={ethicsCommittee.cta.href}
          className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] mx-auto flex h-12 w-full max-w-[291px] items-center justify-center space-x-3 rounded-full bg-brand-rose-1 pl-6 pr-4 text-sm transition-all duration-300 hover:scale-95 hover:opacity-90 md:h-16 md:pl-8 md:pr-7"
        >
          <span className="text-sm font-bold text-white">
            {ethicsCommittee.cta.label}
          </span>
        </Link>
      </ScrollReveal>
    </div>
  );
}
