import Link from "next/link";

import ModelAvatar from "@/components/ai-suite/api/ModelAvatar";
import {
  privateOfferCta,
  type DeploymentModel,
} from "@/config/deploymentContent";

interface CompressedModelCardProps {
  model: DeploymentModel;
}

export default function CompressedModelCard({ model }: CompressedModelCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-9 bg-gray-12">
      <div className="flex items-center justify-center border-b border-gray-9 p-3">
        <div className="flex flex-1 items-center gap-3">
          <ModelAvatar name={model.name} />
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="text-[16px] font-medium leading-[24px] text-white">
              {model.name}
            </span>
            <div className="flex flex-wrap gap-1.5">
              <div className="flex w-fit items-center rounded-md bg-brand-green-1 px-1.5 py-0.5 text-gray-14">
                <span className="text-[12px] font-medium leading-[16px]">
                  {model.tagLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-1 flex-col justify-center gap-0.5 px-5 py-2.5 md:gap-2 md:p-5">
          <span className="text-[12px] font-medium leading-[16px] text-gray-6">
            Parameters (B)
          </span>
          <span className="text-[14px] font-medium leading-[20px] text-white">
            {model.parameters}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-9 p-5">
        <Link
          href={privateOfferCta.href}
          className="flex h-12 w-full items-center justify-center gap-1.5 rounded-lg bg-[#0961FF]"
          id={`deployment-model-offer-${model.id}`}
        >
          <span className="text-[14px] font-bold leading-[20px] text-white">
            {privateOfferCta.label}
          </span>
        </Link>
      </div>
    </div>
  );
}
