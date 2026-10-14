import AiModelsSection from "@/components/landing/AiModelsSection";
import CompactifaiSection from "@/components/landing/CompactifaiSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import FoundrySection from "@/components/landing/FoundrySection";
import HeroStage from "@/components/landing/HeroStage";
import NewsSection from "@/components/landing/NewsSection";
import RealResultsSection from "@/components/landing/RealResultsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import StatsSection from "@/components/landing/StatsSection";

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
      <StatsSection />
      <FeaturesSection />
    </>
  );
}
