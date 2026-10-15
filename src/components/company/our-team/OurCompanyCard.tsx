import IntroArrowCard from "@/components/company/IntroArrowCard";
import { ourTeamIntro } from "@/config/ourTeamContent";

export default function OurCompanyCard() {
  return (
    <IntroArrowCard
      title={ourTeamIntro.title}
      headline={ourTeamIntro.headline}
      description={ourTeamIntro.description}
    />
  );
}
