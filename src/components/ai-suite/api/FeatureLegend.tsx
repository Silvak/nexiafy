"use client";

import type { LucideIcon } from "lucide-react";
import {
  CircleGauge,
  DollarSign,
  Gem,
  Info,
  Shapes,
} from "lucide-react";
import { useState } from "react";

import type { ModelFeatureKey } from "@/config/inferenceApiContent";
import { modelFeatureLegend } from "@/config/inferenceApiContent";

const featureIcons: Record<ModelFeatureKey, LucideIcon> = {
  price: DollarSign,
  speed: CircleGauge,
  value: Gem,
  multimodal: Shapes,
};

const colorBgClass: Record<ModelFeatureKey, string> = {
  price: "bg-brand-green-1/20",
  speed: "bg-brand-purple-1/20",
  value: "bg-brand-yellow-1/20",
  multimodal: "bg-brand-orange-1/20",
};

function LegendItem({ featureKey }: { featureKey: ModelFeatureKey }) {
  const item = modelFeatureLegend.find((f) => f.key === featureKey);
  if (!item) {
    return null;
  }
  const Icon = featureIcons[featureKey];

  return (
    <>
      <div className="hidden md:block">
        <span className="inline-flex cursor-help" title={item.tooltip}>
          <div className="flex items-center gap-2 rounded-lg">
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${colorBgClass[featureKey]}`}
            >
              <Icon
                aria-hidden
                className={item.colorClass}
                size={16}
                strokeWidth={2}
              />
            </div>
            <span className="text-[14px] font-medium">{item.label}</span>
          </div>
        </span>
      </div>
      <div className="flex items-center gap-2 rounded-lg md:hidden">
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${colorBgClass[featureKey]}`}
        >
          <Icon
            aria-hidden
            className={item.colorClass}
            size={16}
            strokeWidth={2}
          />
        </div>
        <span className="text-[14px] font-medium">{item.label}</span>
      </div>
    </>
  );
}

export default function FeatureLegend() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative flex w-full items-center justify-between rounded-[10px] border border-white/5 bg-white/[0.03]">
      <div className="no-scrollbar flex min-w-0 flex-1 gap-4 overflow-x-auto px-3 py-2 md:flex-wrap md:overflow-visible">
        {modelFeatureLegend.map((item, index) => (
          <div key={item.key} className="flex shrink-0 items-center gap-4">
            <LegendItem featureKey={item.key} />
            {index < modelFeatureLegend.length - 1 ? (
              <div className="h-[14.65px] w-px flex-none border border-gray-8" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="relative md:hidden">
        <div className="pointer-events-none absolute -bottom-1 right-12 top-0 w-12 rounded-r-none bg-gradient-to-l from-[#181B1E] to-transparent" />
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center border-l border-l-white/5 pr-0.5"
          aria-expanded={mobileOpen}
          aria-label="Show feature legend details"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <Info aria-hidden size={20} strokeWidth={2} />
        </button>
      </div>

      {mobileOpen ? (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 rounded-xl border border-white/10 bg-gray-9 p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {modelFeatureLegend.map((item) => (
              <li key={item.key} className="text-sm text-gray-3">
                <span className="font-medium text-white">{item.label}</span>
                {" — "}
                {item.tooltip}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
