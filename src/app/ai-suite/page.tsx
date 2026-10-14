import type { Metadata } from "next";

import AiSuiteHero from "@/components/ai-suite/AiSuiteHero";
import BenefitsSection from "@/components/ai-suite/BenefitsSection";
import DemoCtaSection from "@/components/ai-suite/DemoCtaSection";
import DeploymentOptionsSection from "@/components/ai-suite/DeploymentOptionsSection";
import IntroCard from "@/components/ai-suite/IntroCard";
import KeyFeaturesSection from "@/components/ai-suite/KeyFeaturesSection";
import LearnMoreSection from "@/components/ai-suite/LearnMoreSection";
import SolutionSection from "@/components/ai-suite/SolutionSection";
import WhySection from "@/components/ai-suite/WhySection";

export const metadata: Metadata = {
  title: "AI Suite | Nexiafy",
  description:
    "Nexiafy AI Suite helps teams run optimized models via API, private cloud, or edge—with lower cost, faster inference, and stronger governance.",
};

export default function AiSuitePage() {
  return (
    <div className="pb-0">
      <AiSuiteHero />
      <IntroCard />
      <DeploymentOptionsSection />
      <BenefitsSection />
      <WhySection />
      <SolutionSection />
      <KeyFeaturesSection />
      <LearnMoreSection />
      <DemoCtaSection />
    </div>
  );
}
