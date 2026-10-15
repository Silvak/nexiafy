import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { digitalNativesQuote } from "@/config/digitalNativesContent";

export default function QuoteSection() {
  return (
    <ScrollReveal
      variant="single"
      direction="y"
      className="relative mx-auto mt-[88px] flex w-full max-w-[1024px] flex-col items-center overflow-hidden px-5 lg:px-0"
    >
      <div className="flex w-full flex-col gap-8 rounded-4xl bg-gray-11 p-8 lg:flex-row lg:gap-18 lg:p-12">
        <div className="flex h-[50px] w-[192px] shrink-0 justify-start">
          <span
            aria-hidden
            className="flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-brand-rose-1 text-xl font-bold text-white"
          >
            N
          </span>
        </div>
        <div className="flex flex-col gap-8 lg:gap-12">
          <p className="text-lg font-medium text-gray-6 lg:text-xl">
            <span>{digitalNativesQuote.beforeHighlight}</span>
            <span className="text-white">{digitalNativesQuote.highlight}</span>
            <span>{digitalNativesQuote.afterHighlight}</span>
          </p>
          <Link
            id={digitalNativesQuote.ctaId}
            href={digitalNativesQuote.href}
            className="flex w-fit items-center justify-center gap-3 rounded-full bg-gray-10 py-3.5 pl-6 pr-4 text-white backdrop-blur-xs"
          >
            <span className="text-sm font-normal text-gray-5">
              {digitalNativesQuote.ctaLabel}
            </span>
            <ArrowRight
              aria-hidden
              className="h-4 w-4 text-brand-rose-1"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
