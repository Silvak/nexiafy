import type { Metadata } from "next";

import ImageHero from "@/components/company/ImageHero";
import IntroArrowCard from "@/components/company/IntroArrowCard";
import PartnerContactCta from "@/components/company/partners/PartnerContactCta";
import PartnerForm from "@/components/company/partners/PartnerForm";
import PartnerLogoMarquee from "@/components/company/partners/PartnerLogoMarquee";
import PartnerTypeCards from "@/components/company/partners/PartnerTypeCards";
import PageShell from "@/components/common/PageShell";
import {
  partnersHero,
  partnersIntro,
} from "@/config/partnersContent";

export const metadata: Metadata = {
  title: "Partners | Nexiafy",
  description:
    "Join the Nexiafy Partner Program and deliver AI Suite and Singularity solutions with our global partner community.",
};

export default function PartnersPage() {
  return (
    <PageShell>
      <ImageHero
        title={partnersHero.title}
        imageSrc={partnersHero.image}
        imageAlt={partnersHero.imageAlt}
      />
      <IntroArrowCard
        title={partnersIntro.title}
        headline={partnersIntro.headline}
        description={partnersIntro.description}
      />
      <PartnerLogoMarquee />
      <PartnerTypeCards />
      <PartnerForm />
      <PartnerContactCta />
    </PageShell>
  );
}
