import type { LucideIcon } from "lucide-react";

export interface QuantumHeroContent {
  title: string;
  subtitleLines?: string[];
  posterImage: string;
  videoSrc?: string;
  videoAriaLabel?: string;
  logo?:
    | { type: "image"; src: string; alt: string; className?: string }
    | { type: "text"; text: string; className?: string };
}

export interface IntroSplitContent {
  title: string;
  headline: string;
  description: string;
  /** Plain string or segments with optional internal link */
  descriptionRich?: {
    link?: { href: string; label: string };
    afterLink?: string;
    beforeLink?: string;
  };
}

export interface UseCaseItem {
  id: string;
  title: string;
  description: string;
  videoEmbedUrl?: string;
  posterImage?: string;
}

export interface UseCaseIndustry {
  id: string;
  label: string;
  cases: UseCaseItem[];
}

export interface IconFeature {
  id: string;
  icon: LucideIcon;
  iconColorClass: string;
  title: string;
  description?: string;
}

export interface ChallengeColumn {
  title?: string;
  body: string;
}

export interface ChallengeBlock {
  id: string;
  bannerTitle: string;
  posterImage: string;
  videoSrc?: string;
  videoAriaLabel?: string;
  darkOverlay?: boolean;
  columns: ChallengeColumn[];
}

export interface CarouselSlide {
  id: string;
  title: string;
  body: string;
}

export interface CarouselGroup {
  id: string;
  title: string;
  titleMuted?: string;
  slides: CarouselSlide[];
}

export interface MetricCard {
  id: string;
  headerTitle: string;
  verticalLabel: string;
  footerLabel: string;
  chartImage: string;
  chartAlt: string;
  icon: "chevronsUp" | "chevronsDown";
}

export interface TocSection {
  id: string;
  anchor: string;
  title: string;
  paragraphs: string[];
  externalLink?: { href: string; label: string };
}

export interface VideoSection {
  title?: string;
  embedUrl?: string;
  posterImage?: string;
  titleAttr?: string;
}

export interface UnlockingFeature {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}
