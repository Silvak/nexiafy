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
        label: "Automation",
        description: "AI-powered workflows for your team.",
        href: "/ai-suite/automation",
      },
      {
        label: "Predictive Analytics",
        description: "Stay ahead of your key metrics.",
        href: "/ai-suite/analytics",
      },
      {
        label: "Custom Assistants",
        description: "Agents trained on your own data.",
        href: "/ai-suite/assistants",
      },
    ],
  },
  {
    label: "Expertise",
    links: [
      {
        label: "Technical Consulting",
        description: "Assessment and technology roadmap.",
        href: "/expertise/consulting",
      },
      {
        label: "Custom Development",
        description: "End-to-end digital products.",
        href: "/expertise/development",
      },
      {
        label: "Dedicated Teams",
        description: "Scale your team with specialists.",
        href: "/expertise/teams",
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
