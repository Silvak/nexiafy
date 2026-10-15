import type { Metadata } from "next";

import BenefitsGrid from "@/components/solutions/BenefitsGrid";
import ContactCtaSection from "@/components/solutions/ContactCtaSection";
import PainPointsSection from "@/components/solutions/PainPointsSection";
import QuoteSection from "@/components/solutions/QuoteSection";
import SolutionHero from "@/components/solutions/SolutionHero";
import {
  corporatesBenefits,
  corporatesCta,
  corporatesHero,
  corporatesPainPoints,
  corporatesQuote,
} from "@/config/solutions/corporates";

export const metadata: Metadata = {
  title: "Corporates | Nexiafy",
  description:
    "Extend your infrastructure: reduce CAPEX and OPEX, deploy compliant AI on-prem, and maximize the lifetime of enterprise hardware.",
};

export default function CorporatesPage() {
  return (
    <div className="pb-0">
      <SolutionHero content={corporatesHero} />
      <BenefitsGrid benefits={corporatesBenefits} />
      <PainPointsSection section={corporatesPainPoints} />
      <QuoteSection quote={corporatesQuote} />
      <ContactCtaSection cta={corporatesCta} />
    </div>
  );
}
