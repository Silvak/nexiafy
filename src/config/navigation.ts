/**
 * Editable header data: announcements, main menu and CTAs.
 * Keep copy and links here so visual components don't need to change.
 */

export interface AnnouncementConfig {
  emoji: string;
  text: string;
  linkLabel: string;
  href: string;
}

export const announcements: AnnouncementConfig[] = [
  {
    emoji: "🚀",
    text: "Introducing Nexiafy Insights: our new analytics and AI layer for product teams. ",
    linkLabel: "Learn more.",
    href: "/insights",
  },
  {
    emoji: "🎁",
    text: "First month free for new Nexiafy API users. ",
    linkLabel: "Start building for free!",
    href: "/signup",
  },
  {
    emoji: "🤝",
    text: "New partnership: Nexiafy now integrates with leading data platforms. ",
    linkLabel: "Read more.",
    href: "/resources/partnership",
  },
  {
    emoji: "🛡️",
    text: "Introducing Nexiafy Shield: our new security and governance layer for enterprise AI. ",
    linkLabel: "Learn more.",
    href: "/shield",
  },
];

export interface NavLink {
  label: string;
  description?: string;
  href: string;
}

export interface NavItem {
  label: string;
  links: NavLink[];
}

export const navItems: NavItem[] = [
  {
    label: "AI Suite",
    links: [
      {
        label: "Overview",
        description: "Optimized models for every deployment.",
        href: "/ai-suite",
      },
      {
        label: "Inference API",
        description: "Frontier models at a fraction of the cost.",
        href: "/ai-suite/api",
      },
      {
        label: "Private Deployment",
        description: "Run optimized models in your cloud or on-prem.",
        href: "/ai-suite/deployment",
      },
    ],
  },
  {
    label: "Expertise",
    links: [
      {
        label: "Digital Natives",
        description: "Scale AI products without limits.",
        href: "/solutions/digital-natives",
      },
      {
        label: "Corporates",
        description: "Extend your infrastructure.",
        href: "/solutions/corporates",
      },
    ],
  },
  {
    label: "Quantum",
    links: [
      {
        label: "Quantum Computing",
        description: "Use cases and applied research.",
        href: "/quantum/computing",
      },
      {
        label: "Advanced Simulation",
        description: "Complex models at scale.",
        href: "/quantum/simulation",
      },
    ],
  },
  {
    label: "Resources",
    links: [
      {
        label: "News",
        description: "All the latest news, straight from us.",
        href: "/resources",
      },
      {
        label: "Blog",
        description: "News, guides and success stories.",
        href: "/resources/blog",
      },
      {
        label: "Documentation",
        description: "Technical guides for developers.",
        href: "/resources/docs",
      },
      {
        label: "Events",
        description: "Webinars and conferences.",
        href: "/resources/events",
      },
    ],
  },
  {
    label: "Company",
    links: [
      {
        label: "About Us",
        description: "Our mission and team.",
        href: "/company/about",
      },
      {
        label: "Our Team",
        description: "Meet the people behind Nexiafy.",
        href: "/company/our-team",
      },
      {
        label: "Careers",
        description: "Join the Nexiafy team.",
        href: "/company/careers",
      },
      {
        label: "Contact",
        description: "Let's talk about your project.",
        href: "/contact",
      },
    ],
  },
];

export interface HeaderAction {
  id: string;
  label: string;
  href: string;
  variant: "secondary" | "primary";
  external?: boolean;
}

export const headerActions: HeaderAction[] = [
  {
    id: "nav-header-cta",
    label: "Start Building",
    href: "/signup",
    variant: "secondary",
  },
  {
    id: "nav-header-contact",
    label: "Contact",
    href: "/contact",
    variant: "primary",
  },
];
