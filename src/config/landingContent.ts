/**
 * Sample copy for the landing page sections. Kept separate from the JSX so it
 * can later be swapped for Strapi content (always matched by `documentId`,
 * never by numeric `id`).
 */

export interface HeroPillItem {
  label: string;
  href: string;
}

export interface HeroContent {
  pills: HeroPillItem[];
  titleLines: [string, string];
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export const hero: HeroContent = {
  pills: [
    {
      label: "Future Unicorn Award 2024 by Digital Europe",
      href: "/resources/nexiafy-wins-future-unicorn-award-2024",
    },
    {
      label: "Listed on Fortune's Change the World 2025",
      href: "/resources/nexiafy-named-on-fortunes-change-the-world-list",
    },
    {
      label: "Trusted by 40+ engineering teams worldwide",
      href: "/resources/blog",
    },
  ],
  titleLines: ["Pioneering the Era of", "Efficient & Secure AI"],
  subtitle:
    "We empower organizations to run secure, production-ready AI with tailored solutions, reducing compute costs and retaining full control across cloud, data centers and edge environments",
  primaryCta: { label: "Explore our AI models", href: "/ai-suite" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};

export interface TrustedByLogo {
  name: string;
  src: string;
}

/** Placeholder mark repeated across the logo marquee until real partners exist. */
export const trustedByLogo: TrustedByLogo = {
  name: "AWS",
  src: "/logos/aws.svg",
};

export interface SolutionItem {
  title: string;
  description: string;
}

export const solutions: SolutionItem[] = [
  {
    title: "AI Automation",
    description:
      "Streamline repetitive workflows with agents that learn from your processes and act on your data.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Turn historical data into forward-looking insight so your team can act before trends happen.",
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: "40+", label: "AI products shipped" },
  { value: "98%", label: "Client retention" },
  { value: "12x", label: "Faster time to launch" },
  { value: "24/7", label: "Monitoring & support" },
];

export interface FeatureItem {
  title: string;
  description: string;
}

export const features: FeatureItem[] = [
  {
    title: "Custom Assistants",
    description: "Agents trained on your own data and workflows.",
  },
  {
    title: "Technical Consulting",
    description: "Assessment and technology roadmap for AI adoption.",
  },
  {
    title: "Dedicated Teams",
    description: "Scale delivery with specialists embedded in your team.",
  },
  {
    title: "Quantum Computing",
    description: "Applied research and use cases for complex problems.",
  },
];

export interface NewsItem {
  title: string;
  excerpt: string;
  date: string;
  href: string;
}

export const news: NewsItem[] = [
  {
    title: "Nexiafy launches Insights analytics layer",
    excerpt:
      "A new AI-powered analytics layer for product teams is now available.",
    date: "2026-09-02",
    href: "/resources/blog/nexiafy-insights",
  },
  {
    title: "Partnering with leading data platforms",
    excerpt:
      "Nexiafy now integrates natively with the data platforms teams already use.",
    date: "2026-08-14",
    href: "/resources/blog/data-platform-partnership",
  },
  {
    title: "Introducing Nexiafy Shield",
    excerpt:
      "A security and governance layer purpose-built for enterprise AI deployments.",
    date: "2026-07-21",
    href: "/resources/blog/nexiafy-shield",
  },
];
