import type { Metadata } from "next";

import ChallengesSection from "@/components/quantum/ChallengesSection";
import IntroSplitCard from "@/components/quantum/IntroSplitCard";
import QuantumHero from "@/components/quantum/QuantumHero";
import UnderTheHoodCarousel from "@/components/quantum/UnderTheHoodCarousel";
import UnlockingFeaturesSection from "@/components/quantum/UnlockingFeaturesSection";
import UseCaseExplorer from "@/components/quantum/UseCaseExplorer";
import VideoEmbed from "@/components/quantum/VideoEmbed";
import {
  singularityChallenges,
  singularityChallengesSectionTitle,
  singularityFeaturedVideo,
  singularityHero,
  singularityIntro,
  singularityUnderTheHood,
  singularityUnlocking,
  singularityUseCaseIndustries,
  singularityUseCasesSection,
} from "@/config/quantum/singularity";

export const metadata: Metadata = {
  title: "Singularity | Nexiafy",
  description:
    "Singularity platform: quantum and quantum-inspired AI for industrial optimization and machine learning.",
};

export default function SingularityPage() {
  return (
    <div className="pb-24">
      <QuantumHero content={singularityHero} />
      <IntroSplitCard content={singularityIntro} />
      <UseCaseExplorer
        title={singularityUseCasesSection.title}
        sidebarTitle={singularityUseCasesSection.sidebarTitle}
        industries={singularityUseCaseIndustries}
      />
      <VideoEmbed section={singularityFeaturedVideo} />
      <UnlockingFeaturesSection
        title={singularityUnlocking.title}
        features={singularityUnlocking.features}
      />
      <ChallengesSection
        title={singularityChallengesSectionTitle}
        blocks={singularityChallenges}
      />
      <UnderTheHoodCarousel
        title={singularityUnderTheHood.title}
        gearImage={singularityUnderTheHood.gearImage}
        gearAlt={singularityUnderTheHood.gearAlt}
        groups={singularityUnderTheHood.groups}
      />
    </div>
  );
}
