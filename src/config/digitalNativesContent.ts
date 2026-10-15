export type DigitalNativesBenefitIcon =
  | "userPlus"
  | "chartPie"
  | "plug"
  | "zap"
  | "gauge"
  | "cloudDownload";

export interface DigitalNativesBenefit {
  id: string;
  icon: DigitalNativesBenefitIcon;
  colorClass: string;
  title: string;
  description: string;
}

export interface DigitalNativesPainPoint {
  id: string;
  title: string;
  description: string;
}

export interface DigitalNativesProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaIdDesktop: string;
  ctaIdMobile: string;
  /** When set, shows overlay icon badge on the image (first product only). */
  overlayIcon?: "cloudCog";
}

export interface DigitalNativesQuote {
  beforeHighlight: string;
  highlight: string;
  afterHighlight: string;
  ctaLabel: string;
  href: string;
  ctaId: string;
}

export interface DigitalNativesCta {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export const digitalNativesHero = {
  eyebrow: "for AI natives",
  title: "Scale Without Limits",
  description:
    "Nexiafy enables AI product scalability, helping digital-native teams grow fast while avoiding massive compute costs and hardware availability constraints.",
  backgroundImage: "/images/image1.png",
};

export const digitalNativesBenefits: DigitalNativesBenefit[] = [
  {
    id: "more-users",
    icon: "userPlus",
    colorClass: "text-brand-orange-1",
    title: "More users per instance",
    description:
      "+50% more throughput with optimized models, allowing you to serve significantly more users per instance.",
  },
  {
    id: "lower-cost",
    icon: "chartPie",
    colorClass: "text-brand-green-1",
    title: "Much lower cost per token",
    description:
      "Direct OPEX reduction with an immediate impact on SaaS and AI margins.",
  },
  {
    id: "ready-api",
    icon: "plug",
    colorClass: "text-brand-sea-1",
    title: "Ready-to-use API with latest AI models",
    description:
      "Plug-and-play access to state-of-the-art models. Production-ready inference in minutes, no infrastructure complexity.",
  },
  {
    id: "faster-models",
    icon: "zap",
    colorClass: "text-brand-yellow-1",
    title: "Smaller, faster models",
    description:
      "Lower latency and faster response times for real-time AI applications, delivering a better user experience.",
  },
  {
    id: "scalability",
    icon: "gauge",
    colorClass: "text-brand-purple-1",
    title: "Instant scalability",
    description:
      "Scale instantly with no delays or constraints caused by scarce or specialized compute resources.",
  },
  {
    id: "cloud-native",
    icon: "cloudDownload",
    colorClass: "text-brand-rose-1",
    title: "100% cloud-native options",
    description:
      "On-demand usage with no commitments, no CAPEX, and full operational flexibility.",
  },
];

export const digitalNativesPainPoints = {
  title: "Pain Points We Solve",
  items: [
    {
      id: "infra-costs",
      title: "High cloud infrastructure costs",
      description:
        "Rising bills as usage increases and traffic spikes become more frequent.",
    },
    {
      id: "scalability-limits",
      title: "Scalability limitations",
      description:
        "Infrastructure that does not scale efficiently under high user concurrency.",
    },
    {
      id: "token-cost",
      title: "High cost per token",
      description:
        "Margins shrink as usage grows, limiting sustainable product scaling.",
    },
    {
      id: "prototyping",
      title: "Difficulty prototyping quickly",
      description:
        "Large, slow, or complex models slow down experimentation and iteration.",
    },
    {
      id: "gpu-dependency",
      title: "Dependency on specialized hardware",
      description:
        "Limited or delayed access to compute disrupts development and production continuity.",
    },
  ] satisfies DigitalNativesPainPoint[],
};

export const digitalNativesProducts: DigitalNativesProduct[] = [
  {
    id: "ai-inference",
    title: "AI Inference",
    description:
      "Integrate optimized models via a simple API. Achieve top performance with lower latency and a smaller compute footprint.",
    image: "/images/image2.png",
    imageAlt: "AI Inference",
    href: "/ai-suite",
    ctaIdDesktop: "solutions-product-ai-inference-cta-desktop",
    ctaIdMobile: "solutions-product-ai-inference-cta-mobile",
    overlayIcon: "cloudCog",
  },
  {
    id: "documentation",
    title: "Read the Documentation",
    description:
      "Nexiafy uses advanced model optimization to deliver efficient foundational AI models, including large language models, with production-grade quality.",
    image: "/images/image3.png",
    imageAlt: "Read the Documentation",
    href: "/resources/docs",
    ctaIdDesktop: "solutions-product-read-the-documentation-cta-desktop",
    ctaIdMobile: "solutions-product-read-the-documentation-cta-mobile",
  },
];

export const digitalNativesQuote: DigitalNativesQuote = {
  beforeHighlight:
    "“Integrating Nexiafy’s optimized models into our customer support chatbot has been a game changer. We have ",
  highlight: "reduced our model footprint by over 50%",
  afterHighlight:
    " while maintaining high response quality with lower latency and cost.”",
  ctaLabel: "Read More",
  href: "/resources",
  ctaId: "solutions-digital-natives-quote-cta",
};

export const digitalNativesCta: DigitalNativesCta = {
  title: "Ready to transform your AI capabilities?",
  description:
    "Contact us today to learn how Nexiafy can streamline your AI operations and drive your business forward.",
  buttonLabel: "Contact Us",
  href: "/contact",
};
