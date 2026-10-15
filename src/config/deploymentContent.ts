import {
  contactFormShared,
  type ContactFormContent,
} from "@/config/contactFormContent";

export type DeploymentOptionIcon = "cloudUpload" | "databaseZap";

export interface DeploymentHeroAction {
  id: string;
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: "arrowDown";
}

export interface DeploymentOption {
  id: string;
  icon: DeploymentOptionIcon;
  iconColorClass: string;
  iconBorderClass: string;
  iconBgClass: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface DeploymentModel {
  id: string;
  name: string;
  parameters: string;
  tagLabel: string;
}

export const deploymentHero = {
  breadcrumbParent: { label: "Nexiafy AI Suite", href: "/ai-suite" },
  breadcrumbCurrent: "Deployment",
  title: "Deploy Optimized Versions of Leading AI Models",
  description:
    "Lower your computational and energy costs with optimized AI models ready to run anywhere.",
  backgroundImage: "/images/image1.png",
  actions: [
    {
      id: "deployment-hero-view-models",
      label: "View Models",
      href: "#models",
      variant: "primary",
      icon: "arrowDown",
    },
    {
      id: "deployment-hero-start-today",
      label: "Start Today",
      href: "#contact",
      variant: "secondary",
    },
  ] satisfies DeploymentHeroAction[],
};

export const deploymentOptionsSection = {
  title: "Deployment Options",
  options: [
    {
      id: "cloud",
      icon: "cloudUpload",
      iconColorClass: "text-brand-sea-1",
      iconBorderClass: "border-brand-sea-1",
      iconBgClass: "bg-brand-sea-1/10",
      title: "Cloud Deployment",
      subtitle: "Control, Compliance, Flexibility",
      description:
        "Deploy in your own cloud environment for seamless integration, on-demand scalability, and full control over your data and security.",
    },
    {
      id: "on-prem-edge",
      icon: "databaseZap",
      iconColorClass: "text-brand-rose-1",
      iconBorderClass: "border-brand-rose-1",
      iconBgClass: "bg-brand-rose-1/10",
      title: "On Prem / On Edge Deployment",
      subtitle: "Full ownership of infrastructure",
      description:
        "Deploy on your own servers for maximum control, ultra-low latency, and strong security—ideal for sensitive data and offline edge applications.",
    },
  ] satisfies DeploymentOption[],
};

export const deploymentModelsSection = {
  title: "Explore our compressed models",
  filterAllLabel: "All",
  filterOwnLabel: "Nexiafy",
  searchPlaceholder: "Search Model",
};

export const deploymentModels: DeploymentModel[] = [
  {
    id: "quasar-438b",
    name: "Quasar 438B",
    parameters: "438",
    tagLabel: "Nexiafy",
  },
  {
    id: "carina-60b",
    name: "Carina 60B",
    parameters: "60B",
    tagLabel: "Nexiafy",
  },
];

export const customModelCta = {
  title: "Don't see the Model you need?",
  description:
    "Tell us which open-source model you use, and our team can create a custom optimized version tailored to your performance and cost needs.",
  buttonLabel: "Contact Us",
  href: "#contact",
};

export type { ContactFormContent };

export const deploymentContact: ContactFormContent = {
  ...contactFormShared,
  title: "Contact Us",
  subtitle:
    "Interested in deploying optimized models in your environment? Contact us.",
  successMessage:
    "Thank you. Your message has been recorded locally for this demo. We will follow up soon.",
};

export const privateOfferCta = {
  label: "Request Private Offer",
  href: "#contact",
};
