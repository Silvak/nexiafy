export interface AiSuiteIntroContent {
  title: string;
  headline: string;
  description: string;
}

export interface AiSuiteDeploymentOption {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  href: string;
}

export interface AiSuiteBenefit {
  id: string;
  title: string;
  description: string;
  icon: "cost" | "privacy" | "speed" | "sustainability";
}

export interface AiSuiteWhyCard {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface AiSuiteSolutionPoint {
  id: string;
  title: string;
  description: string;
}

export interface AiSuiteKeyFeature {
  id: string;
  title: string;
  icon: "scaling" | "sliders" | "zap" | "timer";
  colorClass: string;
}

export interface AiSuiteLearnMoreItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  variant: "video" | "article";
}

export const aiSuiteIntro: AiSuiteIntroContent = {
  title: "Nexiafy AI Suite",
  headline:
    "The AI optimization layer to make intelligent systems faster, more affordable, and energy efficient.",
  description:
    "Deploy optimized models that use less memory and storage, so AI initiatives stay practical to run and easier to scale across your organization.",
};

export const aiSuiteDeployment = {
  sectionTitle: "Run optimized AI models from Nexiafy anywhere.",
  sectionSubtitle:
    "Access our technology as a managed API, in your own cloud, or on the edge.",
  options: [
    {
      id: "api-inference",
      title: "API Inference",
      description:
        "The ideal solution for rapid development. Integrate high-performing models with a simple API call and scale on demand without managing infrastructure yourself.",
      image: "/images/card-code.png",
      imageAlt: "API inference dashboard",
      ctaLabel: "Discover",
      href: "/ai-suite/automation",
    },
    {
      id: "private-deployment",
      title: "Private Deployment",
      description:
        "Take full ownership of your AI stack. Deploy optimized models in your own cloud, on-premise, or at the edge for security, compliance, and performance while reducing compute costs.",
      image: "/images/card-infra.png",
      imageAlt: "Private deployment infrastructure",
      ctaLabel: "Discover",
      href: "/ai-suite/assistants",
    },
  ] satisfies AiSuiteDeploymentOption[],
};

export const aiSuiteBenefits = {
  title: "Benefits of Using Nexiafy AI Suite",
  items: [
    {
      id: "cost",
      title: "Cost Savings",
      description: "Lower energy use and reduce hardware expenses.",
      icon: "cost",
    },
    {
      id: "privacy",
      title: "Privacy",
      description:
        "Keep sensitive data in your environment with models that can run locally.",
      icon: "privacy",
    },
    {
      id: "speed",
      title: "Speed",
      description:
        "Overcome hardware limits and accelerate AI-driven projects.",
      icon: "speed",
    },
    {
      id: "sustainability",
      title: "Sustainability",
      description: "Cut energy consumption and support greener operations.",
      icon: "sustainability",
    },
  ] satisfies AiSuiteBenefit[],
};

export const aiSuiteWhy = {
  title: "Why Nexiafy AI Suite?",
  lead: [
    "Modern AI workloads often grow faster than the value they deliver, with model size increasing sharply while gains in accuracy taper off.",
    "This imbalance leads to:",
  ],
  cards: [
    {
      id: "compute",
      title: "Skyrocketing Computing Power Demands",
      description:
        "The computational resources required are growing at an unsustainable rate.",
      image: "/images/image1.png",
      imageAlt: "Growing compute demand",
    },
    {
      id: "energy",
      title: "Soaring Energy Costs",
      description:
        "Higher energy use impacts budgets and raises environmental concerns.",
      image: "/images/image2.png",
      imageAlt: "Energy costs visualization",
    },
    {
      id: "chips",
      title: "Limited Chip Supply",
      description:
        "Scarcity of advanced hardware can slow innovation and growth.",
      image: "/images/image3.png",
      imageAlt: "Hardware supply constraints",
    },
  ] satisfies AiSuiteWhyCard[],
};

export const aiSuiteSolution = {
  title: "The Solution",
  paragraphs: [
    "Revolutionizing AI efficiency and portability: Nexiafy AI Suite applies advanced compression and optimization techniques to foundational models.",
    "This approach offers several key benefits:",
  ],
  points: [
    {
      id: "efficiency",
      title: "Enhanced efficiency",
      description:
        "Drastically reduces the computational power required for AI operations.",
    },
    {
      id: "specialized",
      title: "Specialized AI models",
      description:
        "Enables smaller, task-focused models that run efficiently where you need them.",
    },
    {
      id: "governance",
      title: "Privacy and governance requirements",
      description:
        "Supports private, secure environments for ethical and compliant AI use.",
    },
    {
      id: "portability",
      title: "Portability",
      description: "Optimize once and deploy across cloud, data center, or edge.",
    },
  ] satisfies AiSuiteSolutionPoint[],
};

export const aiSuiteKeyFeatures = {
  title: "Key Features",
  items: [
    {
      id: "size",
      title: "Size Reduction",
      icon: "scaling",
      colorClass: "text-brand-yellow-1",
    },
    {
      id: "params",
      title: "Parameter Reduction",
      icon: "sliders",
      colorClass: "text-brand-green-1",
    },
    {
      id: "inference",
      title: "Faster Inference",
      icon: "zap",
      colorClass: "text-brand-rose-1",
    },
    {
      id: "retrain",
      title: "Faster Retraining",
      icon: "timer",
      colorClass: "text-brand-purple-1",
    },
  ] satisfies AiSuiteKeyFeature[],
};

export const aiSuiteLearnMore = {
  title: "Learn more",
  items: [
    {
      id: "video",
      title: "Watch the overview",
      image: "/images/card-AI.png",
      imageAlt: "Product overview preview",
      href: "/resources",
      variant: "video",
    },
    {
      id: "article",
      title: "Read the guide",
      image: "/images/card-capacity.png",
      imageAlt: "Technical guide preview",
      href: "/resources",
      variant: "article",
    },
  ] satisfies AiSuiteLearnMoreItem[],
};

export const aiSuiteDemoCta = {
  title: "Ready to transform your AI capabilities?",
  description:
    "Contact us today to learn how Nexiafy AI Suite can streamline your AI operations and drive your business forward.",
  buttonLabel: "Request AI Suite Demo",
  href: "/contact",
};
