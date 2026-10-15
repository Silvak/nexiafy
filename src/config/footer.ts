export interface FooterLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterColumn {
  groups: FooterGroup[];
}

export const footerTagline = "Pioneering the era of efficient and secure AI.";

export const footerContact = {
  label: "Contact",
  href: "/contact",
};

/** Three columns matching the reference footer, filled with the site nav. */
export const footerColumns: FooterColumn[] = [
  {
    groups: [
      {
        title: "AI Suite",
        links: [
          {
            id: "footer-col-0-automation",
            label: "Automation",
            href: "/ai-suite/automation",
          },
          {
            id: "footer-col-0-predictive-analytics",
            label: "Predictive Analytics",
            href: "/ai-suite/analytics",
          },
          {
            id: "footer-col-0-custom-assistants",
            label: "Custom Assistants",
            href: "/ai-suite/assistants",
          },
        ],
      },
      {
        title: "Quantum",
        links: [
          {
            id: "footer-col-0-quantum-computing",
            label: "Quantum Computing",
            href: "/quantum/computing",
          },
          {
            id: "footer-col-0-advanced-simulation",
            label: "Advanced Simulation",
            href: "/quantum/simulation",
          },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Expertise",
        links: [
          {
            id: "footer-col-1-technical-consulting",
            label: "Technical Consulting",
            href: "/expertise/consulting",
          },
          {
            id: "footer-col-1-custom-development",
            label: "Custom Development",
            href: "/expertise/development",
          },
          {
            id: "footer-col-1-dedicated-teams",
            label: "Dedicated Teams",
            href: "/expertise/teams",
          },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Resources",
        links: [
          {
            id: "footer-col-2-blog",
            label: "Blog",
            href: "/resources/blog",
          },
          {
            id: "footer-col-2-documentation",
            label: "Documentation",
            href: "/resources/docs",
          },
          {
            id: "footer-col-2-events",
            label: "Events",
            href: "/resources/events",
          },
        ],
      },
      {
        title: "Company",
        links: [
          {
            id: "footer-col-2-about-us",
            label: "About Us",
            href: "/company/about",
          },
          {
            id: "footer-col-2-our-team",
            label: "Our Team",
            href: "/company/our-team",
          },
          {
            id: "footer-col-2-careers",
            label: "Careers",
            href: "/company/careers",
          },
          {
            id: "footer-col-2-contact",
            label: "Contact",
            href: "/contact",
          },
        ],
      },
    ],
  },
];

export const footerLegal: FooterLink[] = [
  {
    id: "footer-legal-legal-notice",
    label: "Legal Notice",
    href: "/legal-notice",
  },
  {
    id: "footer-legal-privacy-policy",
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    id: "footer-legal-quality-environmental-policy",
    label: "Quality & Environmental Policy",
    href: "/quality-and-environmental-policy",
  },
  {
    id: "footer-legal-suppliers-policy",
    label: "Suppliers Policy",
    href: "/suppliers-evaluation-policy",
  },
];

export const footerReport: FooterLink = {
  id: "footer-report-concern",
  label: "Report a Concern",
  href: "/report-a-concern",
};

export const footerSocial: FooterLink[] = [
  {
    id: "footer-social-youtube",
    label: "YouTube",
    href: "https://www.youtube.com/@nexiafy",
    external: true,
  },
  {
    id: "footer-social-twitter",
    label: "X",
    href: "https://x.com/nexiafy",
    external: true,
  },
  {
    id: "footer-social-linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/nexiafy",
    external: true,
  },
];
