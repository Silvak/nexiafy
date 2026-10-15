import type { Metadata } from "next";

import EnvironmentalAreasGrid from "@/components/legal/EnvironmentalAreasGrid";
import { LegalSplitPageLayout } from "@/components/legal/LegalPageLayout";
import { qualityPolicyContent } from "@/config/legal/qualityPolicyContent";

export const metadata: Metadata = {
  title: "Quality & Environmental Policy | Nexiafy",
  description: qualityPolicyContent.hero.subtitle,
};

export default function QualityEnvironmentalPolicyPage() {
  const { hero, bodyBefore, bodyAfter } = qualityPolicyContent;

  return (
    <LegalSplitPageLayout
      hero={hero}
      bodyBefore={bodyBefore}
      bodyAfter={bodyAfter}
      between={<EnvironmentalAreasGrid />}
    />
  );
}
