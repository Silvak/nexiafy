import type { Metadata } from "next";

import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { privacyPolicyContent } from "@/config/legal/privacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexiafy",
  description: privacyPolicyContent.hero.subtitle,
};

export default function PrivacyPolicyPage() {
  return <LegalPageLayout content={privacyPolicyContent} />;
}
