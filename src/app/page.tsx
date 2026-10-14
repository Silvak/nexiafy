import CompactifaiSection from "@/components/landing/CompactifaiSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroStage from "@/components/landing/HeroStage";
import NewsSection from "@/components/landing/NewsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import StatsSection from "@/components/landing/StatsSection";

export default function Home() {
  return (
    <>
      <HeroStage>
        <SolutionsSection />
      </HeroStage>
      <CompactifaiSection />
      <StatsSection />
      <FeaturesSection />
      <NewsSection />
    </>
  );
}
