import { CloudUpload, DatabaseZap } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import {
  deploymentOptionsSection,
  type DeploymentOption,
} from "@/config/deploymentContent";

function OptionIcon({ option }: { option: DeploymentOption }) {
  const className = `h-7 w-7 ${option.iconColorClass}`;
  if (option.icon === "cloudUpload") {
    return <CloudUpload aria-hidden className={className} strokeWidth={2} />;
  }
  return <DatabaseZap aria-hidden className={className} strokeWidth={2} />;
}

export default function DeploymentOptionsGrid() {
  return (
    <section className="grid w-full grid-cols-content justify-center gap-[64px] px-5 pt-[88px] md:px-12">
      <ScrollReveal variant="single">
        <h2 className="text-center text-[28px] font-bold leading-[36px] text-gray-1">
          {deploymentOptionsSection.title}
        </h2>
      </ScrollReveal>

      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {deploymentOptionsSection.options.map((option) => (
          <ScrollReveal key={option.id} variant="single" className="h-full">
            <div className="flex h-full flex-col items-start gap-[18px] rounded-3xl bg-[#181C20] p-6 md:gap-8">
              <div className="flex flex-col items-start gap-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-[10px] border ${option.iconBorderClass} ${option.iconBgClass}`}
                >
                  <OptionIcon option={option} />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-[28px] font-medium leading-[36px]">
                    {option.title}
                  </h3>
                  <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-6">
                    {option.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-[16px] font-normal leading-[24px] text-gray-6">
                {option.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
