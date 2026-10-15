import type { Metadata } from "next";

import ImageHero from "@/components/company/ImageHero";
import IntroArrowCard from "@/components/company/IntroArrowCard";
import FutureOpportunitiesCta from "@/components/company/careers/FutureOpportunitiesCta";
import JobsBoard from "@/components/company/careers/JobsBoard";
import PageShell from "@/components/common/PageShell";
import ScrollReveal from "@/components/landing/ScrollReveal";
import VideoEmbed from "@/components/quantum/VideoEmbed";
import {
  careersCultureVideo,
  careersHero,
  careersIntro,
} from "@/config/careersContent";

export const metadata: Metadata = {
  title: "Careers | Nexiafy",
  description:
    "Join Nexiafy and help shape production-ready AI. Explore open roles and connect for future opportunities.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <ImageHero
        title={careersHero.title}
        imageSrc={careersHero.image}
        imageAlt={careersHero.imageAlt}
      />
      <IntroArrowCard
        title={careersIntro.title}
        headline={careersIntro.headline}
        description={careersIntro.description}
      />
      <div className="grid grid-cols-content justify-center px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
        <ScrollReveal variant="single" direction="y">
          <VideoEmbed section={careersCultureVideo} className="!px-0 !pt-0" />
        </ScrollReveal>
        <div className="pt-16 md:pt-36 lg:pt-44">
          <JobsBoard />
        </div>
        <FutureOpportunitiesCta />
      </div>
    </PageShell>
  );
}
