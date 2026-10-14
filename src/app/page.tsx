import AiModelsSection from "@/components/landing/AiModelsSection";
import ChallengesSection from "@/components/landing/ChallengesSection";
import CompanySection from "@/components/landing/CompanySection";
import CompactifaiSection from "@/components/landing/CompactifaiSection";
import FoundrySection from "@/components/landing/FoundrySection";
import HeroStage from "@/components/landing/HeroStage";
import IndustriesSection from "@/components/landing/IndustriesSection";
import InvestorsSection from "@/components/landing/InvestorsSection";
import NewsSection from "@/components/landing/NewsSection";
import PlatformSpotlightSection from "@/components/landing/PlatformSpotlightSection";
import RealResultsSection from "@/components/landing/RealResultsSection";
import ResearchInitiativesSection from "@/components/landing/ResearchInitiativesSection";
import SolutionsSection from "@/components/landing/SolutionsSection";

export default function Home() {
  return (
    <>
      <HeroStage>
        <SolutionsSection />
      </HeroStage>
      <CompactifaiSection />
      <FoundrySection />
      <RealResultsSection />
      <AiModelsSection />
      <NewsSection />
      <IndustriesSection />
      <ChallengesSection />
      <PlatformSpotlightSection />
      <InvestorsSection />
      <CompanySection />
      <ResearchInitiativesSection />
    </>
  );
}
