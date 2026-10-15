export type SolutionBenefitIcon =
  | "userPlus"
  | "chartPie"
  | "plug"
  | "zap"
  | "gauge"
  | "cloudDownload"
  | "cpu"
  | "unplug"
  | "earth"
  | "serverCrash"
  | "lockKeyhole"
  | "blocks";

export interface SolutionBenefit {
  id: string;
  icon: SolutionBenefitIcon;
  colorClass: string;
  title: string;
  description: string;
}

export interface SolutionPainPoint {
  id: string;
  title: string;
  description: string;
}

export interface SolutionPainPointsSection {
  title: string;
  items: SolutionPainPoint[];
}

export interface SolutionProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaIdDesktop: string;
  ctaIdMobile: string;
  overlayIcon?: "cloudCog";
}

export interface SolutionQuote {
  beforeHighlight: string;
  highlight: string;
  afterHighlight: string;
  ctaLabel: string;
  href: string;
  ctaId: string;
  logoSrc?: string;
  logoAlt?: string;
}

export interface SolutionCta {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export interface SolutionHeroContent {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImage: string;
}
