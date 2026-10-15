import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { futureOpportunitiesCta } from "@/config/careersContent";

export default function FutureOpportunitiesCta() {
  const { title, description, buttonLabel, href } = futureOpportunitiesCta;

  return (
    <div className="pt-16 md:pt-36 lg:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="relative grid grid-cols-1 place-items-center gap-8 rounded-[20px] bg-gray-11 p-5 md:gap-12 md:rounded-4xl md:p-12 lg:p-24">
          <div className="flex flex-col items-center gap-5 text-center">
            <h2 className="text-lg font-bold md:text-xl">{title}</h2>
            <p className="text-base text-gray-6 md:text-lg">{description}</p>
          </div>
          <Link
            href={href}
            className="inline-flex shrink-0 items-center gap-5 rounded-full border border-white/20 bg-brand-rose-1 px-6 text-center text-base font-medium leading-[3rem] text-gray-1 transition-all duration-300 hover:scale-95 hover:opacity-90"
          >
            <span>{buttonLabel}</span>
            <ArrowUpRight size={20} aria-hidden />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
