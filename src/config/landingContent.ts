/**
 * Sample copy for the landing page sections. Kept separate from the JSX so it
 * can later be swapped for Strapi content (always matched by `documentId`,
 * never by numeric `id`).
 */

export interface HeroPillItem {
  label: string;
  href: string;
}

export interface HeroContent {
  pills: HeroPillItem[];
  titleLines: [string, string];
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const hero: HeroContent = {
  pills: [
    {
      label: "Future Unicorn Award 2024 by Digital Europe",
      href: "/resources/nexiafy-wins-future-unicorn-award-2024",
    },
    {
      label: "Listed on Fortune's Change the World 2025",
      href: "/resources/nexiafy-named-on-fortunes-change-the-world-list",
    },
    {
      label: "Trusted by 40+ engineering teams worldwide",
      href: "/resources/blog",
    },
  ],
  titleLines: ["Pioneering the Era of", "Efficient & Secure AI"],
  subtitle:
    "We empower organizations to run secure, production-ready AI with tailored solutions, reducing compute costs and retaining full control across cloud, data centers and edge environments",
  primaryCta: { label: "Explore our AI models", href: "/ai-suite" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};

export interface TrustedByLogo {
  name: string;
  src: string;
}

/** Placeholder mark repeated across the logo marquee until real partners exist. */
export const trustedByLogo: TrustedByLogo = {
  name: "AWS",
  src: "/logos/aws.svg",
};

export interface SolutionItem {
  id: string;
  eyebrow: string;
  accentClass:
    | "text-brand-sea-1"
    | "text-brand-yellow-1"
    | "text-brand-green-1"
    | "text-brand-orange-1";
  title: string;
  description: string;
  href: string;
  image: string;
}

export const solutions: SolutionItem[] = [
  {
    id: "home-solutions-for-digital-natives",
    eyebrow: "For digital natives",
    accentClass: "text-brand-sea-1",
    title: "Scale Without Limits",
    description:
      "Deploy compact models that eliminate GPU shortages, reduce latency, and accelerate growth.",
    href: "/solutions/digital-natives",
    image: "/images/card-code.png",
  },
  {
    id: "home-solutions-for-corporations",
    eyebrow: "For corporations",
    accentClass: "text-brand-yellow-1",
    title: "Extend Your Infrastructure",
    description:
      "Run advanced AI on existing hardware with compressed models that cut CAPEX and energy use.",
    href: "/solutions/corporates",
    image: "/images/card-infra.png",
  },
  {
    id: "home-solutions-for-data-centers",
    eyebrow: "For data centers",
    accentClass: "text-brand-green-1",
    title: "Maximize Capacity",
    description:
      "Increase throughput and profitability without adding racks—thanks to smaller, faster models.",
    href: "/solutions/data-centers",
    image: "/images/card-capacity.png",
  },
  {
    id: "home-solutions-for-device-manufacturers",
    eyebrow: "For device manufacturers",
    accentClass: "text-brand-orange-1",
    title: "Powerful AI on Any Device",
    description:
      "Enable on-device inference with compressed models that fit limited compute and memory.",
    href: "/solutions/device-manufacturers",
    image: "/images/card-AI.png",
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: "40+", label: "AI products shipped" },
  { value: "98%", label: "Client retention" },
  { value: "12x", label: "Faster time to launch" },
  { value: "24/7", label: "Monitoring & support" },
];

export interface FeatureItem {
  title: string;
  description: string;
}

export const features: FeatureItem[] = [
  {
    title: "Custom Assistants",
    description: "Agents trained on your own data and workflows.",
  },
  {
    title: "Technical Consulting",
    description: "Assessment and technology roadmap for AI adoption.",
  },
  {
    title: "Dedicated Teams",
    description: "Scale delivery with specialists embedded in your team.",
  },
  {
    title: "Quantum Computing",
    description: "Applied research and use cases for complex problems.",
  },
];

export type AiModelIcon = "server" | "cloud-cog";

export interface AiModelItem {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  icon: AiModelIcon;
  desktopCtaId: string;
  mobileCtaId: string;
}

export interface AiModelsContent {
  title: string;
  readMoreLabel: string;
  items: AiModelItem[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface NewsContent {
  title: string;
  subtitle: string;
  cta: { id: string; label: string; href: string };
  items: NewsItem[];
}

export interface CompactifaiMetric {
  prefix: string;
  value: string;
  label: string;
}

export interface CompactifaiContent {
  badgeLabel: string;
  title: string;
  description: string;
  metrics: CompactifaiMetric[];
  cta: { id: string; label: string; href: string };
}

export const compactifai: CompactifaiContent = {
  badgeLabel: "Model Compression",
  title: "Deploy Compressed AI Models Anywhere",
  description:
    "Our advanced compression technology reduces LLM size, enabling faster, scalable and cost effective AI on any enterprise system or edge device.",
  metrics: [
    { prefix: "", value: "50-80%", label: "Lower Inference Costs" },
    { prefix: "Up to", value: "2x", label: "Faster Inference" },
    { prefix: "Close to", value: "100%", label: "Accuracy Retention" },
  ],
  cta: {
    id: "home-compression-section-cta",
    label: "Explore compression",
    href: "/ai-suite",
  },
};

export interface FoundryContent {
  image: string;
  imageAlt: string;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  descriptionEmphasis: string;
  cta: { id: string; label: string; href: string };
}

export const foundry: FoundryContent = {
  image: "/images/card-infra.png",
  imageAlt: "Nexiafy Foundry",
  badge: "Coming Soon",
  eyebrow: "Sovereign AI",
  title: "Nexiafy Foundry",
  description:
    "A unified platform for sovereign AI infrastructure: explore models, deploy GPU clusters, monitor costs and workloads, and access serverless AI services—",
  descriptionEmphasis: "all within a clean, intuitive control panel.",
  cta: {
    id: "home-foundry-section-cta",
    label: "Learn more",
    href: "/foundry",
  },
};

export interface RealResultQuotePart {
  text: string;
  emphasis?: boolean;
}

export interface RealResultItem {
  id: string;
  quote: RealResultQuotePart[];
  href: string;
}

export interface RealResultsContent {
  title: string;
  subtitle: string;
  readMoreLabel: string;
  logo: TrustedByLogo;
  items: RealResultItem[];
}

export const realResults: RealResultsContent = {
  title: "Real Results",
  subtitle: "Our Compressed AI Models have been validated by Global Leaders",
  readMoreLabel: "Read More",
  logo: trustedByLogo,
  items: [
    {
      id: "home-real-results-0",
      href: "https://hpmegatrends.com/why-we-invested-in-multiverse-computing-8760cef32091",
      quote: [
        {
          text: "We conducted extensive technical benchmarking and were very impressed with the results: decrease in time to first token, increase in token throughput, and models that are cheaper to run (",
        },
        { text: "50–80% cost and energy savings", emphasis: true },
        { text: ")" },
      ],
    },
    {
      id: "home-real-results-1",
      href: "https://multiversecomputing.com/resources/telefonica-and-multiverse-computing-develop-an-ai-based-model-to-support-customer-service-agents",
      quote: [
        {
          text: "The compressed models developed can be deployed directly on Telefónica’s network, including local facilities, making it possible to ",
        },
        {
          text: "reduce energy consumption by up to 75%",
          emphasis: true,
        },
        { text: " compared to uncompressed models." },
      ],
    },
    {
      id: "home-real-results-2",
      href: "https://multiversecomputing.com/resources/multiverse-computing-launches-compactifai-api-on-aws",
      quote: [
        {
          text: "Integrating CompactifAI’s compressed models into our customer support chatbot has been a game changer. We have ",
        },
        { text: "reduced our model footprint by over 50%", emphasis: true },
        {
          text: " while maintaining high response quality with lower latency and cost.",
        },
      ],
    },
    {
      id: "home-real-results-3",
      href: "https://arxiv.org/pdf/2507.08836",
      quote: [
        { text: "The research confirms that the model compressed via " },
        {
          text: "CompactifAI provide substantial reductions",
          emphasis: true,
        },
        {
          text: " in power consumption, operational costs, and carbon emissions while maintaining competitive accuracy.",
        },
      ],
    },
  ],
};

export const aiModels: AiModelsContent = {
  title: "Explore our AI Models",
  readMoreLabel: "Read more",
  items: [
    {
      title: "Private Deployment",
      description:
        "Run compressed models in your own cloud, on-premise, or on edge devices—maximizing security and minimizing computational costs.",
      href: "/compactifai/deployment",
      image: "/images/image1.png",
      imageAlt: "Private Deployment image",
      icon: "server",
      desktopCtaId: "solutions-product-private-deployment-cta-desktop",
      mobileCtaId: "solutions-product-private-deployment-cta-mobile",
    },
    {
      title: "AI Inference",
      description:
        "Integrate compact models via a simple API. Achieve top performance with lower latency and reduced GPU footprint.",
      href: "/compactifai/api",
      image: "/images/image3.png",
      imageAlt: "AI Inference image",
      icon: "cloud-cog",
      desktopCtaId: "solutions-product-ai-inference-cta-desktop",
      mobileCtaId: "solutions-product-ai-inference-cta-mobile",
    },
  ],
};

export const news: NewsContent = {
  title: "News",
  subtitle: "All the latest news, straight from us.",
  cta: {
    id: "home-news-show-all",
    label: "Show me all",
    href: "/resources",
  },
  items: [
    {
      id: "home-news-article-9d107bb4-58dc-4006-a8c7-e16dae13707d",
      title:
        "Multiverse Computing and Muxunav join forces to develop and launch a new family of AI models for regulated financial services and unattended commerce",
      excerpt:
        "A partnership to develop specialised AI models for identity verification (KYC), fraud prevention and voice assistance, with an initial deployment in Muxunav’s unattended payment devices and subsequent applications in regulated financial services.",
      date: "October 1st, 2026",
      href: "/resources/multiverse-computing-and-muxunav-join-forces-to-develop-and-launch-a-new-family-of-ai-models-for",
      image: "/images/image2.png",
      imageAlt:
        "Multiverse Computing and Muxunav join forces to develop and launch a new family of AI models for regulated financial services and unattended commerce thumbnail",
    },
    {
      id: "home-news-article-e846d25a-e12c-40b8-b8b2-17e70a3a0828",
      title:
        "Sports Data Campus and Multiverse Computing join forces to bring advanced artificial intelligence to the global football ecosystem",
      excerpt:
        "The collaboration combines Sports Data Campus’s educational expertise with the technology of one of Europe’s leading companies in efficient AI, quantum software and applied optimisation, with the aim of opening up new opportunities for clubs, leagues, fed...",
      date: "September 30th, 2026",
      href: "/resources/sports-data-campus-and-multiverse-computing-join-forces-to-bring-advanced-artificial",
      image: "/images/image1.png",
      imageAlt:
        "Sports Data Campus and Multiverse Computing join forces to bring advanced artificial intelligence to the global football ecosystem thumbnail",
    },
  ],
};
