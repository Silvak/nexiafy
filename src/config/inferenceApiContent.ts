export type InferenceReasonIcon =
  | "dollarSign"
  | "gauge"
  | "plug"
  | "building"
  | "target";

export type ModelFeatureKey = "price" | "speed" | "value" | "multimodal";

export interface InferenceApiHeroAction {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
  icon?: "arrowDown";
}

export interface InferenceReason {
  id: string;
  icon: InferenceReasonIcon;
  colorClass: string;
  title: string;
}

export interface ModelFeatureLegendItem {
  key: ModelFeatureKey;
  label: string;
  icon: ModelFeatureKey;
  colorClass: string;
  tooltip: string;
}

export type ModelPricing =
  | { type: "tokens"; input: string; output: string }
  | { type: "transcription"; perHour: string };

export interface InferenceModel {
  id: string;
  name: string;
  provider: string;
  isNexiafy?: boolean;
  isNew?: boolean;
  features: ModelFeatureKey[];
  pricing: ModelPricing;
}

export const inferenceApiHero = {
  breadcrumbParent: { label: "Nexiafy", href: "/ai-suite" },
  breadcrumbCurrent: "Inference API",
  title: "Frontier intelligence at an unbeatable price",
  description:
    "Nexiafy's Inference API gives developers a curated catalog of frontier-class models, combining our own leading models with select third-party models, optimized for coding and output-heavy workloads, at a fraction of typical market cost.",
  backgroundImage: "/images/image1.png",
  actions: [
    {
      id: "inference-api-hero-view-models",
      label: "View Models",
      href: "#models",
      variant: "primary",
      icon: "arrowDown",
    },
    {
      id: "inference-api-hero-docs",
      label: "Read Documentation",
      href: "/resources/docs",
      variant: "secondary",
    },
  ] satisfies InferenceApiHeroAction[],
  promoPill: "1st Month Free for New Sign-ups",
};

export const inferenceApiReasons = {
  title: "Why our API?",
  items: [
    {
      id: "lowest-cost",
      icon: "dollarSign",
      colorClass: "text-brand-green-1",
      title: "Lowest Cost for Open-Source Models",
    },
    {
      id: "throughput",
      icon: "gauge",
      colorClass: "text-brand-purple-1",
      title: "Strongest Throughput & TTFT-to-Price Performance Ratio",
    },
    {
      id: "plug-play",
      icon: "plug",
      colorClass: "text-brand-yellow-1",
      title: "Plug & Play, No Infrastructure Needed",
    },
    {
      id: "enterprise",
      icon: "building",
      colorClass: "text-brand-sea-1",
      title: "Scalable Enterprise Deployment & Billed per Usage",
    },
    {
      id: "private-endpoints",
      icon: "target",
      colorClass: "text-brand-rose-1",
      title: "Private Endpoints Available on Private Offer",
    },
  ] satisfies InferenceReason[],
};

export const modelFeatureLegend: ModelFeatureLegendItem[] = [
  {
    key: "price",
    label: "Market-Leading Price",
    icon: "price",
    colorClass: "text-brand-green-1",
    tooltip: "Among the lowest per-token pricing in the catalog.",
  },
  {
    key: "speed",
    label: "TOP Speed-to-Price Ratio",
    icon: "speed",
    colorClass: "text-brand-purple-1",
    tooltip: "High throughput relative to cost.",
  },
  {
    key: "value",
    label: "Best Value",
    icon: "value",
    colorClass: "text-brand-yellow-1",
    tooltip: "Strong balance of quality, speed, and price.",
  },
  {
    key: "multimodal",
    label: "Multimodal",
    icon: "multimodal",
    colorClass: "text-brand-orange-1",
    tooltip: "Supports multiple input modalities.",
  },
];

export const inferenceModels: InferenceModel[] = [
  {
    id: "quasar-438b",
    name: "Quasar 438B",
    provider: "Nexiafy",
    isNexiafy: true,
    isNew: true,
    features: [],
    pricing: { type: "tokens", input: "$0.60/M", output: "$1.80/M" },
  },
  {
    id: "glm-5-3",
    name: "GLM 5.3",
    provider: "Z.ai",
    isNew: true,
    features: ["price"],
    pricing: { type: "tokens", input: "$1.10/M", output: "$3.5/M" },
  },
  {
    id: "glm-5-2",
    name: "GLM 5.2",
    provider: "Z.ai",
    features: ["price"],
    pricing: { type: "tokens", input: "$1.10/M", output: "$3.5/M" },
  },
  {
    id: "qwen-3-8-27b",
    name: "Qwen 3.8 27B",
    provider: "Qwen",
    isNew: true,
    features: ["price"],
    pricing: { type: "tokens", input: "$0.40/M", output: "$2.00/M" },
  },
  {
    id: "hypernova-60b",
    name: "Hypernova 60B",
    provider: "Nexiafy",
    isNexiafy: true,
    features: ["value"],
    pricing: { type: "tokens", input: "$0.04/M", output: "$0.14/M" },
  },
  {
    id: "carina-60b",
    name: "Carina 60B",
    provider: "Nexiafy",
    isNexiafy: true,
    features: [],
    pricing: { type: "tokens", input: "$0.05/M", output: "$0.20/M" },
  },
  {
    id: "whisper-large-v3",
    name: "Whisper Large V3 Turbo Slim",
    provider: "Nexiafy",
    isNexiafy: true,
    features: [],
    pricing: { type: "transcription", perHour: "$0.01/Hour" },
  },
  {
    id: "nemotron-3-nano",
    name: "Nemotron 3 Nano Omni",
    provider: "NVIDIA",
    features: [],
    pricing: { type: "tokens", input: "$0.20/M", output: "$0.80/M" },
  },
  {
    id: "mistral-small-3-1",
    name: "Mistral Small 3.1",
    provider: "Mistral",
    features: ["multimodal", "speed"],
    pricing: { type: "tokens", input: "$0.11/M", output: "$0.17/M" },
  },
];

export const catalogPromoBanner = "All models free your first month";

export const startBuildingHref = "/signup";

export const awsMarketplaceCta = {
  logoAlt: "Already Building on AWS?",
  logoSrc: "/logos/aws.svg",
  title: "Already Building on AWS?",
  description:
    "Access the same models through AWS Marketplace. Deploy directly in your existing AWS account, keep billing consolidated with your other AWS spend, and integrate with the infrastructure your team already runs on.",
  buttonLabel: "Buy with",
  href: "https://aws.amazon.com/marketplace/pp/prodview-ce2dp5ibd7lli",
  id: "inference-api-aws-marketplace-cta",
};

export const privateEndpointCta = {
  title: "Need a Private Endpoint or Have Questions?",
  description:
    "Our team is ready to help you with custom deployments, private offers, and any technical questions you may have.",
  contactLabel: "Contact Us",
  contactHref: "/contact",
  deploymentLabel: "About Private Deployment",
  deploymentHref: "/ai-suite/deployment",
};
