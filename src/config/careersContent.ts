export const careersHero = {
  title: "Change your life",
  image: "/images/image3.png",
  imageAlt: "Life at Nexiafy",
};

export const careersIntro = {
  title: "Join Us",
  headline:
    "We expect our hires to help shape our products. You will make decisions that influence how teams deploy AI in production and how our platform evolves.",
  description:
    "We value creativity and look for team players with curiosity and a passion for technology. We hire outstanding talent today—people who grow alongside Nexiafy as we scale globally.",
};

export const careersCultureVideo = {
  posterImage: "/images/card-code.png",
  titleAttr: "Life at Nexiafy",
};

export interface JobListing {
  id: string;
  title: string;
  department?: string;
  location: string;
  href: string;
}

export const jobListings: JobListing[] = [
  {
    id: "1",
    title: "AI Infrastructure Partnerships Manager",
    department: "Growth & Sales",
    location: "Madrid, Spain",
    href: "/contact",
  },
  {
    id: "2",
    title: "Platform Engineer",
    location: "Barcelona, Spain",
    href: "/contact",
  },
  {
    id: "3",
    title: "Mid/Senior Solution Architect",
    department: "Technical",
    location: "London, UK",
    href: "/contact",
  },
  {
    id: "4",
    title: "Engineering Manager, AI / ML",
    location: "Berlin, Germany",
    href: "/contact",
  },
  {
    id: "5",
    title: "AI Go-To-Market Manager",
    department: "Growth & Sales",
    location: "Toronto, Canada",
    href: "/contact",
  },
  {
    id: "6",
    title: "Head of Global Marketing & Communications",
    department: "Marketing",
    location: "Madrid, Spain",
    href: "/contact",
  },
  {
    id: "7",
    title: "Enterprise Account Executive – US",
    department: "Growth & Sales",
    location: "San Francisco, USA",
    href: "/contact",
  },
  {
    id: "8",
    title: "Research Scientist, Optimization",
    department: "Research",
    location: "Singapore",
    href: "/contact",
  },
];

export const jobDepartments = [
  "Admin & Finance",
  "Growth & Sales",
  "HR",
  "Marketing",
  "Research",
  "Technical",
];

export const jobLocations = [
  "Barcelona, Spain",
  "Berlin, Germany",
  "London, UK",
  "Madrid, Spain",
  "San Francisco, USA",
  "Singapore",
  "Toronto, Canada",
];

export const futureOpportunitiesCta = {
  title:
    "If there are currently no job postings matching your experience, but you are confident you would be a great fit for the company:",
  description:
    "Submit your application by connecting with us, and we will take it under careful consideration for any future opportunities.",
  buttonLabel: "Connect for future opportunities",
  href: "/contact",
};
