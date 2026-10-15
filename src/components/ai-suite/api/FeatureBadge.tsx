import type { LucideIcon } from "lucide-react";
import { CircleGauge, DollarSign, Gem, Shapes } from "lucide-react";

import type { ModelFeatureKey } from "@/config/inferenceApiContent";
import { modelFeatureLegend } from "@/config/inferenceApiContent";

const featureIcons: Record<ModelFeatureKey, LucideIcon> = {
  price: DollarSign,
  speed: CircleGauge,
  value: Gem,
  multimodal: Shapes,
};

interface FeatureBadgeProps {
  feature: ModelFeatureKey;
  size?: "sm" | "md";
}

export default function FeatureBadge({ feature, size = "md" }: FeatureBadgeProps) {
  const meta = modelFeatureLegend.find((item) => item.key === feature);
  if (!meta) {
    return null;
  }

  const Icon = featureIcons[feature];

  const colorBgClass: Record<ModelFeatureKey, string> = {
    price: "bg-brand-green-1/20",
    speed: "bg-brand-purple-1/20",
    value: "bg-brand-yellow-1/20",
    multimodal: "bg-brand-orange-1/20",
  };

  const sizeClass =
    size === "sm" ? "h-5 w-5" : "h-6 w-6";

  return (
    <span className="inline-flex cursor-help" title={meta.tooltip}>
      <div className="flex items-center gap-2 rounded-lg">
        <div
          className={`flex shrink-0 items-center justify-center rounded-full ${colorBgClass[feature]} ${sizeClass}`}
        >
          <Icon
            aria-hidden
            className={meta.colorClass}
            size={16}
            strokeWidth={2}
          />
        </div>
      </div>
      <span className="sr-only">{meta.label}</span>
    </span>
  );
}
