"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

import CompressedModelCard from "@/components/ai-suite/deployment/CompressedModelCard";
import {
  customModelCta,
  deploymentModels,
  deploymentModelsSection,
} from "@/config/deploymentContent";
import { filterDeploymentModels } from "@/lib/deploymentModels";

export default function CompressedModelsSection() {
  const [onlyOwn, setOnlyOwn] = useState(false);
  const [query, setQuery] = useState("");

  const filteredModels = useMemo(
    () =>
      filterDeploymentModels(deploymentModels, {
        query,
        onlyOwn,
      }),
    [query, onlyOwn],
  );

  return (
    <section
      id="models"
      className="grid grid-cols-content justify-center gap-12 px-5 pb-16 pt-16 md:gap-16 md:px-12 md:pt-44"
    >
      <h2 className="text-center text-[36px] font-bold leading-[44px] text-gray-1 md:text-[48px] md:leading-[56px]">
        {deploymentModelsSection.title}
      </h2>

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-4 rounded-[20px] border border-white/5 bg-white/[0.03] p-3 backdrop-blur-[50px]">
          <div className="flex w-full flex-col-reverse items-center gap-4 lg:flex-row">
            <div className="flex w-full flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setOnlyOwn(false)}
                className={
                  !onlyOwn
                    ? "flex h-12 items-center justify-center rounded-[10px] border border-gray-6 bg-white/[0.12] px-3.5 text-base font-bold text-white"
                    : "flex h-12 items-center justify-center rounded-[10px] border border-white/5 bg-white/[0.03] px-3.5 text-base font-bold text-white"
                }
              >
                {deploymentModelsSection.filterAllLabel}
              </button>
              <button
                type="button"
                onClick={() => setOnlyOwn(true)}
                className={
                  onlyOwn
                    ? "flex h-12 items-center justify-center rounded-[10px] border border-gray-6 bg-white/[0.12] px-3.5 text-base font-bold text-white"
                    : "flex h-12 items-center justify-center rounded-[10px] border border-white/5 bg-white/[0.03] px-3.5 text-base font-bold text-white"
                }
              >
                {deploymentModelsSection.filterOwnLabel}
              </button>
            </div>

            <div className="flex w-full flex-col items-center gap-3 md:flex-row lg:w-fit lg:justify-end">
              <div className="flex h-12 w-full min-w-[212px] items-center gap-3 rounded-[10px] border border-white/5 bg-white/[0.03] px-4 lg:max-w-[212px]">
                <Search
                  aria-hidden
                  className="text-gray-5"
                  size={16}
                  strokeWidth={2}
                />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={deploymentModelsSection.searchPlaceholder}
                  aria-label="Search model"
                  className="w-[100px] bg-transparent text-[16px] font-medium leading-[24px] text-white placeholder:text-gray-7 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-full gap-4 md:grid-cols-2">
        {filteredModels.map((model) => (
          <CompressedModelCard key={model.id} model={model} />
        ))}

        <div className="flex flex-col items-center gap-4 rounded-3xl bg-gray-11 p-10">
          <p className="text-center text-[24px] font-bold leading-[32px] text-gray-1">
            {customModelCta.title}
          </p>
          <p className="text-center text-sm text-gray-6">
            {customModelCta.description}
          </p>
          <Link
            href={customModelCta.href}
            className="flex h-12 items-center justify-center rounded-full bg-brand-rose-1 px-6 text-sm font-bold text-white hover:opacity-90"
            id="deployment-custom-model-cta"
          >
            <span>{customModelCta.buttonLabel}</span>
            <ArrowRight aria-hidden size={20} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
