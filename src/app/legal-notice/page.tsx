import type { Metadata } from "next";

import LegalPageLayout from "@/components/legal/LegalPageLayout";
import { legalNoticeContent } from "@/config/legal/legalNoticeContent";

export const metadata: Metadata = {
  title: "Legal Notice | Nexiafy",
  description: legalNoticeContent.hero.subtitle,
};

export default function LegalNoticePage() {
  return <LegalPageLayout content={legalNoticeContent} />;
}
