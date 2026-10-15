import type { Metadata } from "next";

import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { suppliersPolicyContent } from "@/config/legal/suppliersPolicyContent";

export const metadata: Metadata = {
  title: "Suppliers Evaluation Policy | Nexiafy",
  description: suppliersPolicyContent.hero.subtitle,
};

export default function SuppliersEvaluationPolicyPage() {
  return <LegalPageLayout content={suppliersPolicyContent} />;
}
