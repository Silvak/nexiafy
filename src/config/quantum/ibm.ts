import type {
  ChallengeBlock,
  IconFeature,
  IntroSplitContent,
  MetricCard,
  QuantumHeroContent,
  TocSection,
  VideoSection,
} from "./types";
import {
  Atom,
  AudioLines,
  BadgeCheck,
  ClipboardCheck,
  PencilRuler,
  Puzzle,
  Rocket,
  ShieldAlert,
  Users,
  Zap,
} from "lucide-react";

import { deploymentContact } from "@/config/deploymentContent";

export const ibmHero: QuantumHeroContent = {
  title: "Nexiafy Quantum ML",
  subtitleLines: [
    "Classification",
    "Now Available on IBM Qiskit Functions Catalogue",
  ],
  posterImage: "/images/image3.png",
  logo: {
    type: "text",
    text: "IBM Quantum",
    className: "text-3xl md:text-5xl",
  },
};

export const ibmIntro: IntroSplitContent = {
  title: "Nexiafy Quantum ML on IBM Qiskit",
  headline:
    "Through our alliance with IBM, Nexiafy offers Nexiafy Quantum ML's Classification on IBM Quantum's Qiskit functions. Thanks to its intuitive interface, the tool allows users with minimal experience in quantum computing to solve classification problems.",
  description: "",
  descriptionRich: {
    beforeLink:
      "Nexiafy Quantum ML is a cloud service that uses quantum machine learning for solving supervised learning problems. One can train models leveraging Qiskit's distributed training capabilities and infer on previously unseen datasets. ",
    link: {
      href: "/quantum/platform",
      label: "Nexiafy Quantum ML",
    },
    afterLink:
      " greatly speeds up the development of use-case specific solutions because it easily integrates with standard ML libraries and workflows. This allows users to design a custom solution, seamlessly incorporating our function in their existing workflows. This integration compatibility with the other components in the workflow, enables users to leverage the power of Nexiafy Applied AI without changing their current processes.",
  },
};

export const ibmFeaturesSection = {
  title: "Features & Benefits",
};

export const ibmFeatures: IconFeature[] = [
  {
    id: "train-quantum",
    icon: Atom,
    iconColorClass: "text-brand-purple-1",
    title:
      "Train an optimum model on IBM's Quantum Computer. Infer anywhere.",
  },
  {
    id: "integrates",
    icon: Puzzle,
    iconColorClass: "text-brand-sea-1",
    title: "Integrates seamlessly into existing ML workflows",
  },
  {
    id: "easy",
    icon: BadgeCheck,
    iconColorClass: "text-brand-green-1",
    title: "Easy to use & Flexible – no quantum experience required",
  },
  {
    id: "outperform",
    icon: Rocket,
    iconColorClass: "text-brand-rose-1",
    title: "Outperform classical algorithms, providing superior model accuracy",
  },
];

export const ibmPresentationVideo: VideoSection = {
  title: "Video Presentation",
  embedUrl: "https://video.ibm.com/embed/recorded/134088134",
  titleAttr: "IBM partner video",
};

export const ibmIndustryChallenge: ChallengeBlock = {
  id: "any-industry",
  bannerTitle: "Develop Machine Learning Models for any Industry",
  posterImage: "/images/card-infra.png",
  videoAriaLabel: "Develop Machine Learning Models for any Industry",
  columns: [
    {
      body: "Nexiafy Quantum ML is a foundational engine and therefore can be customized or tailored to solve classification problems cases in any industry.",
    },
    {
      body: "You can use it to improve a production process, reduce defects on the edge, identify any kind of anomaly, detect potential fraudulent cases in banking or insurance, or get better insights into customer segmentation for up selling or cross selling. The use cases are unlimited!",
    },
  ],
};

export const ibmUseCasesSection = {
  title: "The Use Cases are Unlimited!",
};

export const ibmUseCaseCards: IconFeature[] = [
  {
    id: "predictive",
    icon: PencilRuler,
    iconColorClass: "text-brand-orange-1",
    title: "Predictive Maintenance",
  },
  {
    id: "segmentation",
    icon: Users,
    iconColorClass: "text-brand-green-1",
    title: "Customer Segmentation",
  },
  {
    id: "fraud",
    icon: ShieldAlert,
    iconColorClass: "text-brand-yellow-1",
    title: "Fraud Detection",
  },
  {
    id: "medical",
    icon: ClipboardCheck,
    iconColorClass: "text-brand-purple-1",
    title: "Medical Diagnosis",
  },
  {
    id: "grid",
    icon: Zap,
    iconColorClass: "text-brand-sea-1",
    title: "Electric Grid Stability",
  },
  {
    id: "nlp",
    icon: AudioLines,
    iconColorClass: "text-brand-rose-1",
    title: "Natural Language Processing",
  },
];

export const ibmMetrics: MetricCard[] = [
  {
    id: "accuracy",
    headerTitle: "20% Higher",
    verticalLabel: "Accuracy Redefined",
    footerLabel: "Grid Stability Forecasting",
    chartImage: "/images/quantum/chart-accuracy.svg",
    chartAlt: "Accuracy Graph",
    icon: "chevronsUp",
  },
  {
    id: "efficiency",
    headerTitle: "13x smaller & 13x insightful",
    verticalLabel: "Efficiency Boost",
    footerLabel: "Credit Rating",
    chartImage: "/images/quantum/chart-efficiency.svg",
    chartAlt: "Efficiency Graph",
    icon: "chevronsDown",
  },
];

export const ibmAdvantagesSection = {
  title: "Advantages of Nexiafy Quantum ML",
  subtitle: "Classification",
  tocAriaLabel: "Sections",
};

export const ibmTocSections: TocSection[] = [
  {
    id: "robust",
    anchor: "more-robust-optimal-predictions",
    title: "More Robust & Optimal Predictions",
    paragraphs: [
      "For many industrial machine learning problems, a strong solution is often constructed using ensemble methods. Nexiafy Quantum ML - Classification differs from traditional ensemble classification libraries as it allows mixing of different types and proportions of learners, ensemble training methods, and optimization algorithms for maximizing ensemble diversity and generalization.",
      "In classical ensemble learning approach, finding the optimal weight for each learner is an exponentially complex optimization problem as the number of learners increases. Also, processing a significant number of features can be resource-consuming, and it is impossible to exhaustively search the space of solutions at very large sizes. The classical method uses a suboptimal shortcut to select relevant features. This optimization problem is notoriously hard to solve and out of bounds even for the best classical solvers in the market, but in Nexiafy Quantum ML more precise solutions are found thanks to the use of quantum solvers which run on real quantum hardware or through quantum-inspired tensor networks (TN) algorithms.",
      "As a result, our solutions give better, more reliable, and precise predictions since it takes away biases that have a very strong dependence. You can learn more about our approach in this paper:",
    ],
    externalLink: {
      href: "https://arxiv.org/pdf/2212.03223",
      label: "https://arxiv.org/pdf/2212.03223",
    },
  },
  {
    id: "unlimited-size",
    anchor: "unlimited-problem-size-and-complexity",
    title: "Unlimited Problem Size and Complexity",
    paragraphs: [
      "Unlike other Quantum ML products, Nexiafy Quantum ML is capable of handling large datasets with millions of examples and features without being limited by the number of qubits in the target QPU. The number of qubits only determines the size of the ensemble that can be trained.",
      "Nexiafy Quantum ML works seamlessly on classically challenging problems involving high-dimensional, noisy, and unbalanced datasets.",
    ],
  },
  {
    id: "threshold",
    anchor: "adjust-model-for-different-threshold-levels",
    title: "Adjust the Model for Different ´Threshold´ Levels",
    paragraphs: [
      "An important feature of Nexiafy Quantum ML - Classification is its ability to allow users to fine-tune the machine learning model according to the specific requirements of their use case. Depending on the context, the users may need to minimize false positives or false negatives. Our quantum-enhanced classifier essentially comprises one hyperparameter which simplifies the hyperparameter tuning process significantly and makes it straightforward for the users to adjust the model's behavior. For example, in scenarios where a more conservative approach is required such as cancer detection or defect detection, a user can easily \"tweak\" the model's hyperparameters to prioritize more caution in detecting an instance as not defective or benign without needing in-depth coding knowledge in quantum computing.",
    ],
  },
  {
    id: "performance",
    anchor: "performance",
    title: "Performance",
    paragraphs: [
      "As the size of the model increases, one of the advantages is that overall performance, meaning accuracy and faster training time, are achieved. In ensemble methods, overall performance is increased as the datasets grow. As IBM's quantum platform develops and grows, customers will benefit from an increase in efficiency and speed as our function will scale proportionately.",
    ],
  },
  {
    id: "interpretability",
    anchor: "looking-ahead-interpretability-of-the-model",
    title: "Looking ahead: Interpretability of the Model",
    paragraphs: [
      "Another significant benefit of Nexiafy's Nexiafy Quantum ML vs. classical ML is the interpretability of the model. This is crucial in highly regulated industries such as healthcare and finance where the interpretability of the result is extremely important. The growing complexity of AI models significantly intensifies the need for interpretability. As organizations rely more on sophisticated algorithms, ensuring these models are understandable, transparent, and accountable is paramount for safe and responsible AI adoption. Nexiafy Quantum ML allows solving complex ML problems by striking the right balance between model complexity and interpretability. In addition, it allows you access to global and local interpretability methods for understanding the overall behavior of the classifier as well as the specific reasons behind a model's prediction for each case.",
    ],
  },
];

export const ibmContact = {
  ...deploymentContact,
  title: "Contact",
  subtitle:
    "Interested in seeing our Quantum AI software in action? Contact us.",
};
