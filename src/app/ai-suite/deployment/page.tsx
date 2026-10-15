import type { Metadata } from "next";

import CompressedModelsSection from "@/components/ai-suite/deployment/CompressedModelsSection";
import ContactForm from "@/components/common/ContactForm";
import { deploymentContact } from "@/config/deploymentContent";
import DeploymentHero from "@/components/ai-suite/deployment/DeploymentHero";
import DeploymentOptionsGrid from "@/components/ai-suite/deployment/DeploymentOptionsGrid";

export const metadata: Metadata = {
  title: "Private Deployment | Nexiafy",
  description:
    "Deploy optimized Nexiafy models in your cloud, on-premise, or at the edge with lower compute and energy costs.",
};

export default function DeploymentPage() {
  return (
    <div className="pb-0">
      <DeploymentHero />
      <DeploymentOptionsGrid />
      <CompressedModelsSection />
      <ContactForm
        content={deploymentContact}
        formId="deployment-contact-form"
      />
    </div>
  );
}
