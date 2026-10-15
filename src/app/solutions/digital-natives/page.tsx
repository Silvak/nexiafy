import type { Metadata } from "next";

import BenefitsGrid from "@/components/solutions/digital-natives/BenefitsGrid";
import ContactCtaSection from "@/components/solutions/digital-natives/ContactCtaSection";
import DigitalNativesHero from "@/components/solutions/digital-natives/DigitalNativesHero";
import PainPointsSection from "@/components/solutions/digital-natives/PainPointsSection";
import ProductCardsSection from "@/components/solutions/digital-natives/ProductCardsSection";
import QuoteSection from "@/components/solutions/digital-natives/QuoteSection";

export const metadata: Metadata = {
  title: "Digital Natives | Nexiafy",
  description:
    "Scale AI products without limits: lower cost per token, faster inference, and cloud-native deployment for digital-native teams.",
};

export default function DigitalNativesPage() {
  return (
    <div className="pb-0">
      <DigitalNativesHero />
      <BenefitsGrid />
      <PainPointsSection />
      <ProductCardsSection />
      <QuoteSection />
      <ContactCtaSection />
    </div>
  );
}
