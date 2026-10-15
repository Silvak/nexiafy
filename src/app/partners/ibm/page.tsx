import type { Metadata } from "next";

import ContactForm from "@/components/common/ContactForm";
import IconFeatureGrid from "@/components/quantum/IconFeatureGrid";
import IntroSplitCard from "@/components/quantum/IntroSplitCard";
import MetricChartCards from "@/components/quantum/MetricChartCards";
import QuantumHero from "@/components/quantum/QuantumHero";
import SingleChallengeSection from "@/components/quantum/SingleChallengeSection";
import StickyTocArticle from "@/components/quantum/StickyTocArticle";
import VideoEmbed from "@/components/quantum/VideoEmbed";
import {
  ibmAdvantagesSection,
  ibmContact,
  ibmFeatures,
  ibmFeaturesSection,
  ibmHero,
  ibmIndustryChallenge,
  ibmIntro,
  ibmMetrics,
  ibmPresentationVideo,
  ibmTocSections,
  ibmUseCaseCards,
  ibmUseCasesSection,
} from "@/config/quantum/ibm";

export const metadata: Metadata = {
  title: "IBM Qiskit | Nexiafy",
  description:
    "Nexiafy Quantum ML — classification with IBM Quantum and Qiskit-compatible workflows.",
};

export default function IbmPartnerPage() {
  return (
    <div className="pb-24">
      <QuantumHero content={ibmHero} />
      <IntroSplitCard content={ibmIntro} />
      <IconFeatureGrid
        title={ibmFeaturesSection.title}
        features={ibmFeatures}
      />
      <VideoEmbed section={ibmPresentationVideo} />
      <SingleChallengeSection block={ibmIndustryChallenge} />
      <IconFeatureGrid
        title={ibmUseCasesSection.title}
        features={ibmUseCaseCards}
        columns="three"
      />
      <MetricChartCards metrics={ibmMetrics} />
      <StickyTocArticle
        title={ibmAdvantagesSection.title}
        subtitle={ibmAdvantagesSection.subtitle}
        tocAriaLabel={ibmAdvantagesSection.tocAriaLabel}
        sections={ibmTocSections}
      />
      <ContactForm content={ibmContact} formId="ibm-contact-form" />
    </div>
  );
}
