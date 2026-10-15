import type { Metadata } from "next";

import ChallengesSection from "@/components/quantum/ChallengesSection";
import IntroSplitCard from "@/components/quantum/IntroSplitCard";
import QuantumHero from "@/components/quantum/QuantumHero";
import UnderTheHoodCarousel from "@/components/quantum/UnderTheHoodCarousel";
import UnlockingFeaturesSection from "@/components/quantum/UnlockingFeaturesSection";
import UseCaseExplorer from "@/components/quantum/UseCaseExplorer";
import VideoEmbed from "@/components/quantum/VideoEmbed";
import {
  quantumPlatformChallenges,
  quantumPlatformChallengesSectionTitle,
  quantumPlatformFeaturedVideo,
  quantumPlatformHero,
  quantumPlatformIntro,
  quantumPlatformUnderTheHood,
  quantumPlatformUnlocking,
  quantumPlatformUseCaseIndustries,
  quantumPlatformUseCasesSection,
} from "@/config/quantum/platform";

export const metadata: Metadata = {
  title: "Nexiafy Quantum | Nexiafy",
  description:
    "Nexiafy Quantum: quantum and quantum-inspired AI for industrial optimization and machine learning.",
};

export default function QuantumPlatformPage() {
  return (
    <div className="pb-24">
      <QuantumHero content={quantumPlatformHero} />
      <IntroSplitCard content={quantumPlatformIntro} />
      <UseCaseExplorer
        title={quantumPlatformUseCasesSection.title}
        sidebarTitle={quantumPlatformUseCasesSection.sidebarTitle}
        industries={quantumPlatformUseCaseIndustries}
      />
      <VideoEmbed section={quantumPlatformFeaturedVideo} />
      <UnlockingFeaturesSection
        title={quantumPlatformUnlocking.title}
        features={quantumPlatformUnlocking.features}
      />
      <ChallengesSection
        title={quantumPlatformChallengesSectionTitle}
        blocks={quantumPlatformChallenges}
      />
      <UnderTheHoodCarousel
        title={quantumPlatformUnderTheHood.title}
        gearImage={quantumPlatformUnderTheHood.gearImage}
        gearAlt={quantumPlatformUnderTheHood.gearAlt}
        groups={quantumPlatformUnderTheHood.groups}
      />
    </div>
  );
}
