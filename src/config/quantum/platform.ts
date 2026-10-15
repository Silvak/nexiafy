import type {
  CarouselGroup,
  ChallengeBlock,
  IntroSplitContent,
  QuantumHeroContent,
  UnlockingFeature,
  UseCaseIndustry,
  VideoSection,
} from "./types";

export const quantumPlatformHero: QuantumHeroContent = {
  title: "Empowering Solutions",
  posterImage: "/images/image1.png",
  videoAriaLabel: "Empowering Solutions",
  logo: { type: "text", text: "Nexiafy Quantum" },
};

export const quantumPlatformIntro: IntroSplitContent = {
  title: "Nexiafy Quantum",
  headline:
    "Our collaborative approach with customers drives the development of Nexiafy Quantum, our purpose-built software platform, integrates seamlessly into industrial value chains and addresses production challenges effectively.",
  description:
    "Nexiafy Quantum features diverse high and low-level APIs for a flexible, user-friendly experience. Its core harnesses sophisticated proprietary algorithms, combining quantum and quantum-inspired computing to effectively address complex AI and optimization challenges with precision.",
};

export const quantumPlatformUseCasesSection = {
  title: "Witness Nexiafy Quantum in Action",
  sidebarTitle: "Using Nexiafy Quantum in...",
};

export const quantumPlatformUseCaseIndustries: UseCaseIndustry[] = [
  {
    id: "foundations",
    label: "Foundations",
    cases: [
      {
        id: "tensor-basics",
        title: "Tensor Networks Basics",
        description:
          "Foundations of tensor networks applied to compact models and efficient training.",
        posterImage: "/images/image1.png",
      },
    ],
  },
  {
    id: "finance",
    label: "Finance",
    cases: [
      {
        id: "portfolio-optimization",
        title: "Portfolio Optimization",
        description:
          "Portfolio optimization with complex constraints and accelerated convergence.",
        posterImage: "/images/image2.png",
      },
    ],
  },
  {
    id: "manufacturing",
    label: "Manufacturing",
    cases: [
      {
        id: "anomalous-vibration",
        title: "Anomalous Vibration Detection",
        description:
          "Real time anomaly detection indicating potential tool malfunction or wear. An alert will be send to the appropriate system or operator to make the appropriate interventions.",
        posterImage: "/images/image3.png",
      },
      {
        id: "cnc-routing",
        title: "CNC Routing",
        description:
          "Routing and machining parameter optimization to reduce cycle times and scrap.",
        posterImage: "/images/card-code.png",
      },
      {
        id: "conveyor-vibration",
        title: "Conveyor Belt Vibration Analysis",
        description:
          "Conveyor belt vibration analysis for predictive maintenance.",
        posterImage: "/images/card-infra.png",
      },
      {
        id: "defect-detection",
        title: "Defect Detection",
        description:
          "Interpretable computer vision for in-line production defect detection.",
        posterImage: "/images/card-AI.png",
      },
      {
        id: "kitchen-tooling",
        title: "Intelligent Kitchen Tooling",
        description:
          "Intelligent tooling for food production environments.",
        posterImage: "/images/card-capacity.png",
      },
      {
        id: "predictive-maintenance",
        title: "Predictive Maintenance",
        description:
          "Predictive maintenance based on multivariate signals and robust models.",
        posterImage: "/images/image1.png",
      },
      {
        id: "product-tracker",
        title: "Product Tracker",
        description:
          "In-plant product tracking with traceability and operational alerts.",
        posterImage: "/images/image2.png",
      },
      {
        id: "scrap-reduction",
        title: "Scrap Reduction",
        description:
          "Scrap reduction through real-time process optimization.",
        posterImage: "/images/image3.png",
      },
    ],
  },
  {
    id: "energy",
    label: "Energy",
    cases: [
      {
        id: "grid-stability",
        title: "Grid Stability",
        description:
          "Electrical grid forecasting and stability with fast optimization models.",
        posterImage: "/images/image1.png",
      },
    ],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    cases: [
      {
        id: "anomaly-traffic",
        title: "Network Anomaly Detection",
        description:
          "Anomalous network traffic pattern detection for early response.",
        posterImage: "/images/image2.png",
      },
    ],
  },
  {
    id: "aerospace",
    label: "Aerospace & Defense",
    cases: [
      {
        id: "mission-planning",
        title: "Mission Planning",
        description:
          "Planning under complex constraints with interpretability requirements.",
        posterImage: "/images/image3.png",
      },
    ],
  },
  {
    id: "life-science",
    label: "Life Science & Health",
    cases: [
      {
        id: "diagnostics-support",
        title: "Diagnostics Support",
        description:
          "Diagnostic support with models adjustable to clinical thresholds.",
        posterImage: "/images/card-AI.png",
      },
    ],
  },
];

export const quantumPlatformFeaturedVideo: VideoSection = {
  posterImage: "/images/image2.png",
  titleAttr: "Nexiafy Quantum platform",
};

export const quantumPlatformUnlocking = {
  title: "Unlocking the Potential of Nexiafy Quantum",
  features: [
    {
      id: "production-ready",
      title: "Production Ready",
      description:
        "Enjoy tailored interfaces for user-friendliness and flexible deployment choices, from on-premises to customer VPC integration.",
      image: "/images/card-capacity.png",
      imageAlt: "Production Ready",
    },
    {
      id: "core-tech",
      title: "Powerful Core Technology",
      description:
        "Leverage specialized algorithms for interpretable Machine Learning, deep learning, and optimization, including quantum-powered proprietary routines that outperform commercial models.",
      image: "/images/card-AI.png",
      imageAlt: "Powerful Core Technology",
    },
    {
      id: "customer-centric",
      title: "Customer-Centric",
      description:
        "Experience demonstrated effectiveness across diverse real use-cases, while diving deeper into sections like \"Users,\" \"AI,\" and \"Green Impact\" for additional insights.",
      image: "/images/card-code.png",
      imageAlt: "Customer-Centric",
    },
  ] satisfies UnlockingFeature[],
};

export const quantumPlatformChallengesSectionTitle =
  "Addressing Critical Challenges with Nexiafy Quantum";

export const quantumPlatformChallenges: ChallengeBlock[] = [
  {
    id: "efficient-ai",
    bannerTitle: "Faster, Cheaper, More Efficient AI",
    posterImage: "/images/image1.png",
    videoAriaLabel: "Faster, Cheaper, More Efficient AI",
    darkOverlay: true,
    columns: [
      {
        title: "Revolutionizing Deep Learning Costs with Tensor Networks",
        body: "The landscape of deep learning is undergoing a seismic shift, marked by escalating computational costs. Recent rounds of training for Large Language Models (LLMs) reached staggering costs of $100M, with this expense doubling every 10 months. Projections point to the necessity of a technological paradigm shift to continue adequately training AI models, contingent upon having sufficient training data.",
      },
      {
        title: "Empowering Accelerated Training with Tensorized AI",
        body: "Nexiafy Quantum leverages Tensor Networks to revolutionize this scenario. Our tensorized models showcase accelerated training, decreased data requirements, and reduced power consumption. Achieving accelerations exceeding 1000x, this innovation disrupts high-power applications such as machine vision and Large Language Models. It's a game-changer for technologies at the edge, rendering tensorized AI indispensable for autonomous vehicles. Notably, Nexiafy is recognized as one of the top 100 most promising AI companies globally in 2023 by CB Insights.",
      },
    ],
  },
  {
    id: "interpretable-ml",
    bannerTitle: "Interpretable ML",
    posterImage: "/images/image2.png",
    videoAriaLabel: "Interpretable ML",
    columns: [
      {
        title: "Unveiling Clarity: Addressing AI's Opacity Challenge",
        body: "A pervasive challenge in the AI landscape is the opacity of many machine learning (ML) models. Often, these models function as enigmatic black boxes, lacking industrial relevance in numerous contexts. Nexiafy Quantum steps in to provide clarity by addressing crucial questions: What is the confidence level in our predictions? What underpins a particular decision? How does a change in circumstances impact predictions?",
      },
      {
        title: "Empowering Transparency in Mission-Critical Applications",
        body: "The significance of these answers cannot be overstated, particularly in mission-critical applications where transparency is essential. Nexiafy Quantum's commitment to interpretable ML empowers industries to leverage AI with confidence.",
      },
    ],
  },
  {
    id: "optimization",
    bannerTitle: "Faster, More Accurate Optimization",
    posterImage: "/images/image3.png",
    videoAriaLabel: "Faster, More Accurate Optimization",
    columns: [
      {
        title: "Navigating Complex Optimization Challenges",
        body: "Optimization quandaries underscore the heart of various sectors, yet solving them often proves elusive. These challenges translate into inefficiencies across industrial and financial operations. The predicament is especially poignant in the realm of Green Energy, where a transition hinges on more precise and swifter optimization solutions for electrical distribution.",
      },
      {
        title: "Revolutionizing Optimization with Concealed Data Structures",
        body: "Nexiafy Quantum takes a revolutionary approach, harnessing concealed data structures to converge quicker than prevailing algorithms. This disruptive potential has far-reaching implications, especially in time-sensitive optimization problems involving numerous variables.",
      },
    ],
  },
];

export const quantumPlatformUnderTheHood = {
  title: "Under the hood",
  gearImage: "/images/quantum/gear-icon.svg",
  gearAlt: "Gear coming out of a box",
  groups: [
    {
      id: "quantum-methods",
      title: "Quantum Methods",
      slides: [
        {
          id: "in-house",
          title: "In-House Quantum Algorithms",
          body: "Nexiafy develops proprietary algorithms that utilize current quantum platforms, particularly for complex optimization tasks and interpretable machine learning.",
        },
        {
          id: "hardware-agnostic",
          title: "Hardware-Agnostic Approach",
          body: "Recognizing the diversity of quantum hardware platforms (superconducting, photonic, neutral atoms, ion traps, etc.), Nexiafy remains hardware-agnostic. Major quantum hardware manufacturers have partnered with Nexiafy.",
        },
        {
          id: "strategic-deploy",
          title: "Strategic Deployment of Quantum Solutions",
          body: "While long-term quantum computing power is promising, its immediate application is limited. Nexiafy emphasizes the importance of strategically deploying quantum solutions for tangible economic value, avoiding purely exploratory applications.",
        },
        {
          id: "expertise",
          title: "Expertise in Quantum Solution Deployment",
          body: "Nexiafy possesses the expertise to guide the deployment of quantum solutions effectively, ensuring they outperform current alternatives and offer real value to customers.",
        },
      ],
    },
    {
      id: "quantum-inspired",
      title: "Quantum-Inspired Methods",
      titleMuted: "Tensor Networks",
      slides: [
        {
          id: "classical-inspired",
          title: "Classical Quantum-Inspired Approaches",
          body: "Quantum-inspired methods, such as Tensor Networks, are employed on non-quantum computers (FPGAs, laptops, Supercomputers). These methods are designed based on insights from how quantum computers manipulate information.",
        },
        {
          id: "families",
          title: "Diverse Quantum-Inspired Approaches",
          body: "Various families of quantum-inspired computing exist, including Tensor Networks, Digital Annealing, Parallel Tempering, Population Annealing, and Quantum-Inspired Monte Carlo.",
        },
        {
          id: "tn-power",
          title: "Power of Tensor Networks",
          body: "Nexiafy employs Tensor Networks as the most powerful, rapid, and challenging-to-implement quantum-inspired approach. Not to be confused with Tensor Flow, Tensor Networks are renowned as the world's fastest classical algorithms.",
        },
        {
          id: "supremacy-benchmark",
          title: "Role in Quantum Supremacy Validation",
          body: "Tensor Networks serve as a benchmark for assessing quantum supremacy. They are pivotal in determining if a quantum computer has achieved superior computational capabilities over classical computers.",
        },
        {
          id: "accelerate-ai",
          title: "Accelerating AI and Optimization",
          body: "Nexiafy leverages Tensor Networks to significantly accelerate AI and optimization tasks, achieving more than a 1000-fold speedup.",
        },
        {
          id: "versatile",
          title: "Versatile Deployment",
          body: "Tensor Networks excel in scenarios without cloud connectivity, such as factories, satellites, and defense battlefields.",
        },
        {
          id: "cso",
          title: "CSO Expertise",
          body: "Nexiafy's Chief Science Officer (CSO) is a founding figure in the realm of Tensor Networks. Mastery in these methods is rare, and Nexiafy is well-equipped to provide both success stories and lessons from challenges encountered in this field.",
        },
      ],
    },
  ] satisfies CarouselGroup[],
};
