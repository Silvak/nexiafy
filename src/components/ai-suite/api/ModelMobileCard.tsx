import Link from "next/link";

import type { InferenceModel } from "@/config/inferenceApiContent";
import { startBuildingHref } from "@/config/inferenceApiContent";

import FeatureBadge from "./FeatureBadge";
import ModelAvatar from "./ModelAvatar";

interface ModelMobileCardProps {
  model: InferenceModel;
}

export default function ModelMobileCard({ model }: ModelMobileCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-9 bg-gray-12">
      <div className="flex items-center justify-center border-b border-gray-9 p-3">
        <div className="flex flex-1 items-center gap-3">
          <ModelAvatar name={model.name} />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[16px] font-medium leading-[24px] text-white">
                {model.name}
              </span>
              {model.features.map((feature) => (
                <FeatureBadge key={feature} feature={feature} size="sm" />
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {model.isNexiafy ? (
                <div className="flex w-fit items-center rounded-md bg-brand-green-1 px-1.5 py-0.5 text-gray-14">
                  <span className="text-[12px] font-medium leading-[16px]">
                    Nexiafy
                  </span>
                </div>
              ) : null}
              {model.isNew ? (
                <div className="flex w-fit items-center rounded-2xl bg-gray-9 px-1.5 py-0.5 text-gray-5">
                  <span className="text-[12px] font-medium leading-[16px]">
                    New
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {model.pricing.type === "tokens" ? (
        <div className="flex">
          <div className="flex flex-1 flex-col justify-center gap-0.5 px-5 py-2.5">
            <span className="text-[12px] font-medium leading-[16px] text-gray-6">
              Input Cost
            </span>
            <span className="text-[14px] font-medium leading-[20px] text-white">
              {model.pricing.input}
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-0.5 border-l border-gray-9 px-5 py-2.5">
            <span className="text-[12px] font-medium leading-[16px] text-gray-6">
              Output Cost
            </span>
            <span className="text-[14px] font-medium leading-[20px] text-white">
              {model.pricing.output}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col justify-center gap-0.5 px-5 py-2.5">
          <span className="text-[12px] font-medium leading-[16px] text-gray-6">
            Transcription Cost
          </span>
          <span className="text-[14px] font-medium leading-[20px] text-white">
            {model.pricing.perHour}
          </span>
        </div>
      )}

      <div className="border-t border-gray-9 p-5">
        <Link
          href={startBuildingHref}
          className="flex h-12 w-full items-center justify-center gap-1.5 rounded-lg bg-brand-rose-1"
          id={`model-catalog-start-building-${model.id}`}
        >
          <span className="text-[14px] font-bold leading-[20px] text-white">
            Start Building
          </span>
        </Link>
      </div>
    </div>
  );
}
