import { ChevronsDown, ChevronsUp } from "lucide-react";
import Image from "next/image";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { MetricCard } from "@/config/quantum/types";

interface MetricChartCardsProps {
  title?: string;
  metrics: MetricCard[];
}

export default function MetricChartCards({
  title,
  metrics,
}: MetricChartCardsProps) {
  return (
    <section className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      {title ? (
        <ScrollReveal variant="single" direction="y">
          <div className="text-center text-lg font-bold md:text-2xl">
            {title}
          </div>
        </ScrollReveal>
      ) : null}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        {metrics.map((metric) => {
          const Icon = metric.icon === "chevronsUp" ? ChevronsUp : ChevronsDown;
          return (
            <ScrollReveal
              key={metric.id}
              variant="single"
              direction="y"
              className="flex flex-col rounded-[20px] bg-gray-11 md:rounded-4xl"
            >
              <div className="flex h-20 items-center border-b border-dashed border-gray-8">
                <div className="inline-flex h-20 w-20 shrink-0 items-center justify-center">
                  <Icon
                    className="text-brand-rose-1"
                    size={32}
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg font-medium">{metric.headerTitle}</h3>
              </div>
              <div className="grid grid-cols-[80px_1fr]">
                <div className="inline-flex w-full items-center justify-center border-r border-dashed border-gray-8 py-8 text-xs font-bold uppercase tracking-widest [text-orientation:mixed] [writing-mode:vertical-lr]">
                  <span className="rotate-180">{metric.verticalLabel}</span>
                </div>
                <div>
                  <Image
                    src={metric.chartImage}
                    alt={metric.chartAlt}
                    width={416}
                    height={461}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="grid h-20 grid-cols-[80px_1fr] border-t border-dashed border-gray-8">
                <div className="border-r border-dashed border-gray-8" />
                <div className="flex items-center justify-center text-xs font-bold uppercase tracking-widest">
                  {metric.footerLabel}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
