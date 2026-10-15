import type { Metadata } from "next";

import AwsMarketplaceCta from "@/components/ai-suite/api/AwsMarketplaceCta";
import InferenceApiHero from "@/components/ai-suite/api/InferenceApiHero";
import ModelCatalogSection from "@/components/ai-suite/api/ModelCatalogSection";
import PrivateEndpointCta from "@/components/ai-suite/api/PrivateEndpointCta";
import WhyApiSection from "@/components/ai-suite/api/WhyApiSection";

export const metadata: Metadata = {
  title: "Inference API | Nexiafy",
  description:
    "Nexiafy Inference API offers frontier-class models optimized for coding and output-heavy workloads at a fraction of typical market cost.",
};

export default function InferenceApiPage() {
  return (
    <div className="pb-0">
      <InferenceApiHero />
      <WhyApiSection />
      <ModelCatalogSection />
      <AwsMarketplaceCta />
      <PrivateEndpointCta />
    </div>
  );
}
