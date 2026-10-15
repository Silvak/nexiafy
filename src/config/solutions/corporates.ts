import type {
  SolutionBenefit,
  SolutionCta,
  SolutionHeroContent,
  SolutionPainPointsSection,
  SolutionQuote,
} from "./types";

export const corporatesHero: SolutionHeroContent = {
  eyebrow: "for Corporations",
  title: "Extend Your Infrastructure",
  description:
    "Nexiafy helps large enterprises reduce CAPEX and OPEX, extend the lifetime of existing infrastructure, and deploy advanced AI while preserving data sovereignty, privacy, and security.",
  backgroundImage: "/images/card-infra.png",
};

export const corporatesBenefits: SolutionBenefit[] = [
  {
    id: "reduced-gpu",
    icon: "cpu",
    colorClass: "text-brand-purple-1",
    title: "Reduced GPU needs",
    description:
      "Immediate CAPEX savings by minimizing the need for high-end or additional GPUs.",
  },
  {
    id: "extended-infra",
    icon: "unplug",
    colorClass: "text-brand-orange-1",
    title: "Extended infrastructure lifetime",
    description:
      "Run state-of-the-art models on existing hardware without upgrading or acquiring new equipment.",
  },
  {
    id: "lower-energy",
    icon: "earth",
    colorClass: "text-brand-green-1",
    title: "Lower energy consumption (-50% to -80%)",
    description:
      "Reduce OPEX while improving sustainability and ESG performance.",
  },
  {
    id: "private-models",
    icon: "serverCrash",
    colorClass: "text-brand-rose-1",
    title: "Private and compliant AI models",
    description:
      "Deploy models fully within the corporate perimeter and comply with GDPR, MiFID, HIPAA, and other regulations.",
  },
  {
    id: "on-prem",
    icon: "lockKeyhole",
    colorClass: "text-brand-yellow-1",
    title: "More efficient on-prem deployments",
    description:
      "Lower pressure on racks, power, and cooling across datacenter infrastructure.",
  },
  {
    id: "tailored",
    icon: "blocks",
    colorClass: "text-brand-sea-1",
    title: "Tailored and co-developed solutions",
    description:
      "Fine-tuned models for specific use cases, with integration into internal workflows, data governance, and MLOps. Custom adaptations available when needed.",
  },
];

export const corporatesPainPoints: SolutionPainPointsSection = {
  title: "Pain Points We Solve",
  items: [
    {
      id: "high-capex",
      title: "High CAPEX on GPUs and infrastructure",
      description:
        "Large upfront investments required to support AI workloads.",
    },
    {
      id: "obsolescence",
      title: "Fast hardware obsolescence",
      description: "Equipment becomes outdated in roughly 24–36 months.",
    },
    {
      id: "constraints",
      title: "Space, power, and cooling constraints",
      description:
        "Datacenters struggle to accommodate growing compute demands.",
    },
    {
      id: "security",
      title: "Data security and confidentiality risks",
      description:
        "Sensitive data cannot leave the corporate infrastructure.",
    },
    {
      id: "regulatory",
      title: "Regulatory and compliance restrictions",
      description:
        "Cloud-only approaches are not viable in regulated industries.",
    },
    {
      id: "expertise",
      title: "Limited internal expertise",
      description:
        "Teams lack the skills to optimize models and reduce operational costs.",
    },
  ],
};

export const corporatesQuote: SolutionQuote = {
  beforeHighlight:
    "“The compressed models developed with Nexiafy can be deployed directly on enterprise networks, including local facilities, making it possible to ",
  highlight: "reduce energy consumption by up to 75%",
  afterHighlight: " compared to uncompressed models.”",
  ctaLabel: "Read More",
  href: "/resources",
  ctaId: "solutions-corporates-quote-cta",
};

export const corporatesCta: SolutionCta = {
  title: "Ready to transform your AI capabilities?",
  description:
    "Contact us today to learn how Nexiafy can streamline your AI operations and drive your business forward.",
  buttonLabel: "Contact Us",
  href: "/contact",
};
