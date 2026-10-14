import CompactifaiSection from "@/components/landing/CompactifaiSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import NewsSection from "@/components/landing/NewsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import StatsSection from "@/components/landing/StatsSection";
import TrustedBySection from "@/components/landing/TrustedBySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <SolutionsSection />
      <CompactifaiSection />
      <StatsSection />
      <FeaturesSection />
      <NewsSection />
    </>
  );
}
