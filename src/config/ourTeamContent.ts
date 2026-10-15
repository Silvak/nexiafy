export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedinUrl?: string;
}

export interface TeamGroup {
  id: string;
  title: string;
  members: TeamMember[];
}

export interface EthicsCard {
  id: string;
  title: string;
  description: string;
}

export const ourTeamHero = {
  image: "/images/image1.png",
  imageAlt: "Nexiafy team and founders",
};

export const ourTeamIntro = {
  title: "Our Company",
  headline: "We are dedicated to employing the best talent in the world.",
  description:
    "This makes Nexiafy an incredible place to build your career, as you will be working alongside leading experts in efficient AI, model optimization, machine learning, and product engineering.",
};

export const teamGroups: TeamGroup[] = [
  {
    id: "team-group-founders",
    title: "Founders",
    members: [
      {
        id: "team-founder-elena-voss",
        name: "Elena Voss",
        role: "CEO",
        bio: "Founder and CEO of Nexiafy. She sets company strategy and works with product teams who need production AI they can operate themselves. Her focus is building software that stays efficient and reliable once it leaves the lab.",
      },
      {
        id: "team-founder-nora-chen",
        name: "Nora Chen",
        role: "CSO",
        bio: "Leads research behind Nexiafy’s compression and optimization methods. She turns scientific advances into models that keep their accuracy while using less compute, and reviews every release against the quality bar our clients expect.",
      },
      {
        id: "team-founder-mateo-ruiz",
        name: "Mateo Ruiz",
        role: "CTO",
        bio: "Architects the platform that deploys compact models across cloud, data centers, and edge. He focuses on making large systems cheaper to run, faster to serve, and straightforward for engineering teams to maintain.",
      },
      {
        id: "team-founder-adrian-cole",
        name: "Adrian Cole",
        role: "COO",
        bio: "Runs delivery so each engagement lands as software a team can maintain. He coordinates how we tailor models to specific challenges and how that work ships into each client’s existing environment.",
      },
    ],
  },
  {
    id: "team-group-leadership",
    title: "Leadership Team",
    members: [
      {
        id: "team-leader-sophia-martinez",
        name: "Sophia Martinez",
        role: "Chief Financial Officer",
        bio: "Oversees finance, planning, and operational reporting for Nexiafy. She brings experience in corporate finance and helps the company scale sustainably while investing in long-term product development.",
      },
      {
        id: "team-leader-james-okonkwo",
        name: "James Okonkwo",
        role: "Chief Sales Officer",
        bio: "Leads global sales and partnerships for Nexiafy’s AI platform. He works with digital-native and enterprise teams to align deployment goals with measurable business outcomes.",
      },
      {
        id: "team-leader-lina-andersson",
        name: "Lina Andersson",
        role: "Chief Growth Officer",
        bio: "Drives growth initiatives, customer programs, and strategic alliances. She has spent years managing innovation projects and helping teams turn research into shipped products.",
      },
      {
        id: "team-leader-david-park",
        name: "David Park",
        role: "Global GenAI Director",
        bio: "Connects technical depth with go-to-market strategy for generative AI offerings. He leads cross-functional programs that bring new model capabilities to production for Nexiafy clients.",
      },
      {
        id: "team-leader-emily-foster",
        name: "Emily Foster",
        role: "Chief Technical Product Officer",
        bio: "Owns the technical product roadmap and quality standards for Nexiafy’s control plane and model tooling. Her background spans applied mathematics and large-scale software systems.",
      },
      {
        id: "team-leader-clara-nakamura",
        name: "Clara Nakamura",
        role: "Chief People Officer",
        bio: "Builds the people practices that help Nexiafy hire and retain exceptional talent. She focuses on inclusion, learning, and teams that can do their best work across distributed locations.",
      },
    ],
  },
];

export const ethicsCommittee = {
  title: "Nexiafy Ethics Committee",
  cards: [
    {
      id: "ethics-why",
      title: "Why is ethics important for AI?",
      description:
        "We believe that ethics must be central to the development of any new technology, and in particular in efficient AI and model deployment. Nexiafy aims to be a responsible leader in how AI is built and operated in production.",
    },
    {
      id: "ethics-what",
      title: "What is Nexiafy doing about it?",
      description:
        "We founded the Nexiafy Ethics Committee to shape our vision and culture, creating an ethics-driven environment where we promote diversity, inclusion, well-being, and sustainability.",
    },
  ] satisfies EthicsCard[],
  cta: {
    id: "our-team-ethics-committee-cta",
    label: "Learn more",
    href: "/company/ethics-committee",
  },
};
