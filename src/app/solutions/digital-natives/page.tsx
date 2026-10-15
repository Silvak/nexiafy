import type { Metadata } from "next";

import BenefitsGrid from "@/components/solutions/BenefitsGrid";
import ContactCtaSection from "@/components/solutions/ContactCtaSection";
import PainPointsSection from "@/components/solutions/PainPointsSection";
import ProductCardsSection from "@/components/solutions/ProductCardsSection";
import QuoteSection from "@/components/solutions/QuoteSection";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  digitalNativesBenefits,
  digitalNativesCta,
  digitalNativesHero,
  digitalNativesPainPoints,
  digitalNativesProducts,
  digitalNativesQuote,
} from "@/config/solutions/digitalNatives";

export const metadata: Metadata = {
  title: "Digital Natives | Nexiafy",
  description:
    "Scale AI products without limits: lower cost per token, faster inference, and cloud-native deployment for digital-native teams.",
};

export default function DigitalNativesPage() {
  return (
    <div className="pb-0">
      <SolutionHero content={digitalNativesHero} />
      <BenefitsGrid benefits={digitalNativesBenefits} />
      <PainPointsSection section={digitalNativesPainPoints} />
      <ProductCardsSection products={digitalNativesProducts} />
      <QuoteSection quote={digitalNativesQuote} />
      <ContactCtaSection cta={digitalNativesCta} />
    </div>
  );
}
