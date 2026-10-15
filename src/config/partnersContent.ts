export const partnersHero = {
  title: "Partners",
  image: "/images/image2.png",
  imageAlt: "Nexiafy Partner Program",
};

export const partnersIntro = {
  title: "Why Partner with Nexiafy?",
  headline:
    "Join the Nexiafy Partner Program. Leverage our AI Suite and Nexiafy Quantum platform to deliver optimization, inference, and deployment solutions that scale. Build with a team focused on production-ready AI and grow alongside our global partner community.",
  description: `Nexiafy's model optimization stack helps teams cut infrastructure footprint by up to 90% while improving retraining cycles and inference latency for real-world workloads.

Nexiafy Quantum brings advanced algorithms to verticals such as financial services, energy, manufacturing, and healthcare. Example use cases include portfolio optimization, risk modeling, defect detection, anomaly detection, and intelligent automation.`,
};

export interface PartnerTypeCard {
  title: string;
  description: string;
}

export const partnerTypeCards: PartnerTypeCard[] = [
  {
    title: "Consulting and Systems Integrators",
    description:
      "Our consulting partners bring industry, use case, and technology expertise to help customers get the most from the Nexiafy AI Suite and Nexiafy Quantum. They understand customer goals and deliver the implementation support needed for full-scale projects.",
  },
  {
    title: "Referral Partners",
    description:
      "Referral partners translate business needs into clear outcomes. When your strength is discovery and account relationships, Nexiafy provides the technical depth, enablement, and co-selling support to win together.",
  },
  {
    title: "Platform Partners",
    description:
      "Platform partners offer Nexiafy capabilities through their own environments. Many host our stack on their cloud or marketplace listings and add vertical expertise customers expect.",
  },
  {
    title: "Technology Partners",
    description:
      "Technology partners integrate complementary products with Nexiafy so joint solutions reach market faster. Shared engineering investment helps deliver more cost-effective, secure AI deployments.",
  },
];

export const partnerLogos = [
  { src: "/logos/partners/apex-cloud.svg", alt: "Apex Cloud", width: 101, height: 31 },
  { src: "/logos/partners/northline.svg", alt: "Northline", width: 82, height: 31 },
  { src: "/logos/partners/quantumforge.svg", alt: "QuantumForge", width: 136, height: 29 },
  { src: "/logos/partners/synthworks.svg", alt: "SynthWorks", width: 78, height: 38 },
  { src: "/logos/partners/datahaven.svg", alt: "DataHaven", width: 90, height: 34 },
  { src: "/logos/partners/orbitstack.svg", alt: "OrbitStack", width: 102, height: 31 },
  { src: "/logos/partners/helix-partners.svg", alt: "Helix Partners", width: 111, height: 39 },
  { src: "/logos/partners/lumen-ai.svg", alt: "Lumen AI", width: 108, height: 24 },
  { src: "/logos/partners/vectorlane.svg", alt: "VectorLane", width: 94, height: 44 },
  { src: "/logos/partners/prism-digital.svg", alt: "Prism Digital", width: 105, height: 37 },
];

export const partnersFormSection = {
  title:
    "Join the Nexiafy Partner Program to ramp up your AI and optimization services.",
  contactHeading: "Contact Information",
  companyHeading: "Company Description",
  submitLabel: "Submit",
  successMessage:
    "Thank you. Our partnerships team will review your application and get back to you shortly.",
  fields: {
    firstName: "First Name *",
    lastName: "Last Name *",
    email: "Email *",
    phone: "Phone",
    companyName: "Company Name *",
    website: "Website URL *",
    companyDetails: "Size of the company - Revenue & Number of employees *",
    geographyDetails: "Geography / Sector Focus *",
    aiTeamDetails: "Tell us about your AI / ML team *",
    aiProjects: "How many overall AI / ML projects has your team done?",
    hearAbout: "How did you hear about us?",
    hearAboutPlaceholder: "Select an option...",
  },
  hearAboutOptions: [
    "Conference or event",
    "Existing customer referral",
    "Partner referral",
    "Web search",
    "Social media",
    "Other",
  ],
};

export const partnersContactCta = {
  title: "Want to get in touch with us?",
  buttonLabel: "Contact Us",
  email: "partners@nexiafy.com",
};
