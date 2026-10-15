import Link from "next/link";

import type { InferenceModel } from "@/config/inferenceApiContent";
import { startBuildingHref } from "@/config/inferenceApiContent";

import FeatureBadge from "./FeatureBadge";
import ModelAvatar from "./ModelAvatar";

interface ModelRowProps {
  model: InferenceModel;
}

export default function ModelRow({ model }: ModelRowProps) {
  return (
    <div className="flex items-center gap-3 p-3">
      <div className="flex min-w-0 flex-1">
        <div className="flex items-center gap-3">
          <ModelAvatar name={model.name} />
          <div className="flex min-w-0 flex-col gap-0.5">
            <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center">
              <span className="text-[20px] font-medium leading-[28px] text-white">
                {model.name}
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {model.isNexiafy ? (
                  <div className="flex w-fit items-center rounded-md bg-brand-green-1 px-2 py-0.5 text-[14px] font-bold leading-[20px] text-gray-14">
                    <span className="text-[12px] font-medium leading-[16px]">
                      Nexiafy
                    </span>
                  </div>
                ) : null}
                {model.isNew ? (
                  <div className="flex w-fit items-center rounded-2xl bg-gray-9 px-1.5 py-0.5 text-[12px] font-medium leading-[16px] text-gray-5">
                    <span>New</span>
                  </div>
                ) : null}
                {model.features.map((feature) => (
                  <FeatureBadge key={feature} feature={feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden shrink-0 md:block">
        {model.pricing.type === "tokens" ? (
          <div className="flex gap-6">
            <div className="flex w-[87px] flex-col items-start">
              <span className="text-[12px] font-medium leading-[16px] text-gray-6">
                Input Cost
              </span>
              <span className="block text-right text-[14px] font-medium leading-[20px] text-white">
                {model.pricing.input}
              </span>
            </div>
            <div className="flex w-[87px] flex-col items-start">
              <span className="text-[12px] font-medium leading-[16px] text-gray-6">
                Output Cost
              </span>
              <span className="block text-right text-[14px] font-medium leading-[20px] text-white">
                {model.pricing.output}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex w-[198px] flex-col items-start">
            <span className="text-[12px] font-medium leading-[16px] text-gray-6">
              Transcription Cost
            </span>
            <span className="block text-right text-[14px] font-medium leading-[20px] text-white">
              {model.pricing.perHour}
            </span>
          </div>
        )}
      </div>

      <div className="hidden shrink-0 md:flex md:w-[250px] lg:w-[319px]">
        <div className="flex w-full items-center justify-end gap-3">
          <div className="md:w-[48px] lg:w-[124px]" />
          <Link
            href={startBuildingHref}
            className="flex h-12 w-[151px] items-center justify-center gap-1.5 rounded-lg bg-brand-rose-1"
          >
            <span className="text-[14px] font-bold leading-[20px] text-white">
              Start Building
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
