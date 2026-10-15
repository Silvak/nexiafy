import type { CSSProperties } from "react";
import type { Metadata } from "next";

import EthicsCommitteeSection from "@/components/company/our-team/EthicsCommitteeSection";
import OurCompanyCard from "@/components/company/our-team/OurCompanyCard";
import OurTeamHero from "@/components/company/our-team/OurTeamHero";
import TeamCarousel from "@/components/company/our-team/TeamCarousel";
import { teamGroups } from "@/config/ourTeamContent";

export const metadata: Metadata = {
  title: "Our Team | Nexiafy",
  description:
    "Meet the Nexiafy founders and leadership team building efficient AI for production teams worldwide.",
};

export default function OurTeamPage() {
  return (
    <div
      className="pb-16 pt-[var(--mobile-banner-offset,40px)] md:pt-[var(--mobile-banner-offset-md,36px)] lg:pt-0"
      style={
        {
          "--mobile-banner-offset": "40px",
          "--mobile-banner-offset-md": "36px",
        } as CSSProperties
      }
    >
      <OurTeamHero />
      <OurCompanyCard />
      {teamGroups.map((group) => (
        <TeamCarousel key={group.id} group={group} />
      ))}
      <EthicsCommitteeSection />
    </div>
  );
}
