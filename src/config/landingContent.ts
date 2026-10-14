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

export type IndustryIcon =
  | "coins"
  | "lightbulb"
  | "package"
  | "flask"
  | "cog"
  | "orbit"
  | "lock"
  | "shield"
  | "atom"
  | "circle-dot";

export interface IndustryItem {
  name: string;
  icon: IndustryIcon;
}

export interface IndustriesContent {
  title: string;
  items: IndustryItem[];
  banner: {
    title: string;
    cta: { id: string; label: string; href: string };
  };
}

export const industries: IndustriesContent = {
  title: "Trusted by leading efficiency-driven industries.",
  items: [
    { name: "Finance", icon: "coins" },
    { name: "Energy", icon: "lightbulb" },
    { name: "Manufacturing", icon: "package" },
    { name: "Health & Life Sciences", icon: "flask" },
    { name: "Engineering", icon: "cog" },
    { name: "Aerospace", icon: "orbit" },
    { name: "Cybersecurity", icon: "lock" },
    { name: "Defense", icon: "shield" },
    { name: "Chemistry", icon: "atom" },
    { name: "Hydrogen", icon: "circle-dot" },
  ],
  banner: {
    title: "Trusted by organizations in 10+ industries",
    cta: {
      id: "home-our-clients-see-all",
      label: "Learn more",
      href: "/clients",
    },
  },
};

export interface ChallengeItem {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface ChallengesContent {
  title: string;
  ctaLabel: string;
  items: ChallengeItem[];
}

export const challenges: ChallengesContent = {
  title: "We excel in two challenges",
  ctaLabel: "Learn more",
  items: [
    {
      id: "home-challenges-0-artificial-intelligence",
      title: "Artificial Intelligence",
      description:
        "Training and inference costs are escalating. With model sizes exploding, efficient AI is no longer optional. Our compression technology makes large-scale AI sustainable.",
      href: "/ai",
      image: "/images/image1.png",
    },
    {
      id: "home-challenges-1-green-transition",
      title: "Green Transition",
      description:
        "Energy-intensive infrastructures require smarter, more efficient algorithms. Compact AI reduces compute and power usage across critical applications.",
      href: "/green-transition",
      image: "/images/image2.png",
    },
  ],
};

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

export interface PlatformSpotlightContent {
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  image: string;
  cta: { id: string; label: string; href: string };
}

export const platformSpotlight: PlatformSpotlightContent = {
  title: "The platform for efficient AI at scale.",
  eyebrow: "Insights",
  headline: "Optimizing complex problems with Nexiafy",
  description:
    "Our optimization platform powers the breakthroughs behind our compact AI technology.",
  image: "/images/image3.png",
  cta: {
    id: "home-platform-spotlight-cta",
    label: "Explore Insights",
    href: "/insights",
  },
};

export const investors = {
  label: "Investors",
};

export interface CompanyMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface CompanyContent {
  title: string;
  description: string;
  cta: { id: string; label: string; href: string };
  members: CompanyMember[];
}

export const company: CompanyContent = {
  title: "Our Company",
  description:
    "Founded in 2019, we set out to make advanced AI practical for production teams. That work became our platform, built so clients can run efficient models without giving up control. We shape each system around a team’s constraints, and put software they can operate into the industry they already run.",
  cta: {
    id: "home-our-company-meet-team",
    label: "Meet the team",
    href: "/company/about",
  },
  members: [
    {
      id: "company-member-elena-voss",
      name: "Elena Voss",
      role: "CEO",
      bio: "Sets the direction for Nexiafy’s product and customer work. She spends her time with teams who need production AI they can run themselves, and keeps the company focused on software that stays efficient once it leaves the lab.",
    },
    {
      id: "company-member-mateo-ruiz",
      name: "Mateo Ruiz",
      role: "CTO",
      bio: "Leads the platform engineering behind compact models and the control plane that deploys them. He works on making large systems cheaper to run, faster to serve, and straightforward to operate across cloud, data centers, and edge.",
    },
    {
      id: "company-member-nora-chen",
      name: "Nora Chen",
      role: "CSO",
      bio: "Owns the science behind Nexiafy’s compression and optimization methods. She turns research into models that keep their accuracy while using less compute, and reviews every release against the quality bar our clients expect.",
    },
    {
      id: "company-member-adrian-cole",
      name: "Adrian Cole",
      role: "COO",
      bio: "Runs delivery so each engagement lands as software a team can maintain. He coordinates how we tailor models to a specific challenge and how that work ships into the client’s existing environment.",
    },
  ],
};

export interface ResearchLogo {
  alt: string;
  src: string;
}

export interface ResearchInitiative {
  id: string;
  title: string;
  description: string;
  logos: ResearchLogo[];
}

export interface ResearchInitiativesContent {
  title: string;
  items: ResearchInitiative[];
}

const researchLogo: ResearchLogo = {
  alt: trustedByLogo.name,
  src: trustedByLogo.src,
};

export const researchInitiatives: ResearchInitiativesContent = {
  title: "R&D Initiatives",
  items: [
    {
      id: "rd-synthiafleet",
      title:
        "SynthiaFleet High-Fidelity Synthetic Data Generation for EV Fleet Optimization",
      description:
        "SynthiaFleet tackles a core bottleneck in smart EV fleet management: the shortage of rich, privacy-safe operational data. Using physics-based AI and Tensor Networks, it generates synthetic fleet data that respects real physical constraints (State of Charge dynamics, depot power limits, weather-dependent solar curves) while Differential Privacy keeps the data fully decoupled from real fleet behaviour, and a dedicated edge-case module trains downstream algorithms for extreme conditions, not just the average case.\n\nSynthiaFleet was funded through O-CEI's Open Call under the EU's Horizon Europe programme, Grant Agreement No. 101189589",
      logos: [researchLogo],
    },
    {
      id: "rd-sett",
      title:
        "This company is invested in by Sociedad Española para la Transformación Tecnológica, E.P.E. (SETT)",
      description:
        "Nexiafy is backed by the Sociedad Española para la Transformación Tecnológica, E.P.E. (SETT), a Spanish public entity that promotes technological innovation. SETT’s investment reflects strong institutional support for Nexiafy’s mission to advance cutting-edge computing and AI across strategic industries.",
      logos: [researchLogo],
    },
    {
      id: "rd-optivia",
      title: "Proyecto OPTIVIA",
      description:
        "Nexiafy has focused its efforts on applying artificial intelligence and advanced optimization techniques to the aviation sector, with the aim of improving flight operational efficiency. The company has played a key role in developing models capable of analyzing large volumes of data and generating optimized solutions in complex environments.",
      logos: [researchLogo],
    },
    {
      id: "rd-chameleon",
      title: "PERTE CHAMELEON",
      description:
        "Chips for Heterogeneous Agent-based Modular Edge and HPC Operations in AI Networks (CHAMELEON)\nMIE-010100-2024-53\nThe goal of this project is to research and validate a comprehensive hardware and software infrastructure for the distributed execution of generative artificial intelligence models in agent-based architectures, with a focus on industrial deployment and edge environments.",
      logos: [researchLogo],
    },
    {
      id: "rd-secure-ai",
      title: "PROYECTO SECURE-AI",
      description:
        "Secure-by-Design AI Chips for Critical Infrastructures\nMIE-010100-2025-4\nThe goal of this project is to design, prototype, and validate a new generation of secure-by-design artificial intelligence chips, specifically designed for deployment in critical infrastructure such as defense, aerospace, advanced manufacturing, and industrial automation.",
      logos: [researchLogo],
    },
    {
      id: "rd-victor",
      title: "PERTE VICTOR",
      description:
        "Virtual Intelligent Computing Tools for the Optimization of Microelectronics\nMIE-010100-2024-2\nThe goal of this project is to investigate innovative solutions based on artificial intelligence and quantum computing to revolutionize the design and manufacturing of semiconductors and specialized chips.",
      logos: [researchLogo],
    },
    {
      id: "rd-retech",
      title: "Proyecto RETECH",
      description:
        "Nexiafy has participated in the development of the Q-AINA project, which focuses on the efficient compression and execution of artificial intelligence models using quantum and quantum-inspired techniques. Its contribution has involved the application of machine learning models for the characterization and control of quantum systems, as well as the validation of hybrid solutions that combine classical and quantum computing.\n\nThis project was developed under the RETECH Program – Line 1: Projects to Promote Technology Transfer and Innovation in the Field of AI, administered by the Department of Business and Labor of the Government of Catalonia.\nWith the support of the Government of Catalonia.",
      logos: [researchLogo],
    },
    {
      id: "rd-ontzhi",
      title: "Proyecto ONTZHI",
      description:
        "Nexiafy has drawn on its expertise in advanced modeling and the analysis of complex systems to address the challenges associated with hydrogen storage and transportation. Its work has focused on developing tools that enhance our understanding and optimization of the processes involved in this field.",
      logos: [researchLogo],
    },
    {
      id: "rd-greco",
      title: "Proyecto GRECO",
      description:
        "Nexiafy has played a key role in developing advanced artificial intelligence solutions designed to improve computational efficiency and reduce the environmental impact of digital systems. Its work has focused on researching and applying innovative techniques that optimize AI models, reducing their resource consumption without compromising performance.",
      logos: [researchLogo],
    },
    {
      id: "rd-gantt",
      title: "Gipuzkoa Advanced New Therapies Territory (GANTT)",
      description:
        "Nexiafy Research has played a key role in the development and execution of the project funded under the \"Gipuzkoa Advanced New Therapies Territory (GANTT)\" program, contributing significantly to its objectives through its leadership in advanced quantum computing technologies applied to the biotechnology sector. Our participation has ensured an innovative approach that not only strengthens the competitiveness of the technological ecosystem in Gipuzkoa, but also generates a direct impact on the advancement of advanced therapies.",
      logos: [researchLogo],
    },
    {
      id: "rd-hormigobots",
      title: "HORMIGOBOTS",
      description:
        "Research and development of solutions based on biomimetics for the generation of flexible production environments adapted to the manufacture of short series with uncertain volumes of electric, plug-in hybrid and hydrogen-powered vehicles, financed by the Center for the Development of Industrial Technology (CDTI) within the Sustainable Automotive Technology Program (PTAS).",
      logos: [researchLogo],
    },
    {
      id: "rd-cuco",
      title: "CUCO",
      description:
        "Quantum computing and its application to strategic industries. Science and Innovation Missions Program of the year 2021.",
      logos: [researchLogo],
    },
    {
      id: "rd-q4real",
      title: "Q4REAL",
      description:
        "Project No. ZE-2022/00033 - Q4REAL project. Program of support grants for business R&D - Hazitek.",
      logos: [researchLogo],
    },
    {
      id: "rd-el-kartek",
      title: "EL KARTEK",
      description:
        "KK-2023/00064 - Key Technologies for Hydrogen Storage and Transportation",
      logos: [researchLogo],
    },
    {
      id: "rd-misiones-qcdi",
      title: "MISIONES QCDI",
      description:
        "MIG-20221061 - Funded by the European Union – NextGenerationEU and supported by the CDTI. Quantum cognitive digital industry: a hyper automated, accessible and cyber-secure (quantum-resistant) digital twin based on extreme data mining. Financiado por la Unión Europea – NextGenerationEU y subvencionado por el CDTI.",
      logos: [researchLogo],
    },
    {
      id: "rd-sonnmesyc",
      title: "SoNNMESyC",
      description:
        "Solutions to the New Electric Mobility Needs based on Sustainability and Connectivity criteria",
      logos: [researchLogo],
    },
    {
      id: "rd-hermess",
      title: "HERMESS Space Technology Program",
      description:
        "PTEP-20241026 \"HERMESS (Hybrid Emergency Response Multi-Domain Ecosystem Via Satellited And Stratospheric Platforms)\" supported by the CDTI",
      logos: [researchLogo],
    },
    {
      id: "rd-inspire",
      title: "INSPIRE PERTE CHIP",
      description:
        "MIG-20231016 - Integrated Photonic Cross-Sector as a Transformative Deep Tech of Strategic Industries. “Funded by the European Union - NextGenerationEU and supported by the CDTI.”",
      logos: [researchLogo],
    },
    {
      id: "rd-chip-nese",
      title: "CHIP NESE PERTE CHIP",
      description:
        "MIG-20231006 - Design of Innovative Chips for the First High-Performance, Low-Energy Consumption Multifunctional Integrated Board in Stratospheric Balloons. “Funded by the European Union – NextGenerationEU and supported by the CDTI.”",
      logos: [researchLogo],
    },
    {
      id: "rd-emie",
      title: "EMIE",
      description:
        "Efficiency of LLM Models for Strategic Industries ZE-2024/00009",
      logos: [researchLogo],
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
