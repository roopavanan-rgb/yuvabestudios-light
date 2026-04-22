import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";

export type { DigitalMarketingCaseStudy as UiuxDesignCaseStudy };

export type UiuxDesignHeroContent = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type UiuxDesignPageContent = {
  hero: UiuxDesignHeroContent;
  caseStudiesTitle: string;
  caseStudiesDescription: string;
  caseStudies: DigitalMarketingCaseStudy[];
  servicesTitle: string;
  services: Array<{
    title: string;
    description: string;
    iconKey: "palette" | "layout" | "search" | "pointer";
  }>;
};

export const uiuxDesignPageContent: UiuxDesignPageContent = {
  hero: {
    title: "UI/UX Design",
    subtitle: "Interfaces people actually use",
    description:
      "Research-led design, product flows, and visual systems built for clarity, conversion, and the real contexts founders are shipping into.",
    ctaLabel: "Start Your Project",
    ctaHref: "/#process",
  },
  caseStudiesTitle: "UI/UX Design Case Studies",
  caseStudiesDescription:
    "Proof from product design systems, interface builds, and visual language work shipped for founders who care about how things feel.",
  caseStudies: [
    {
      slug: "kittykat",
      title: "KittyKat",
      description:
        "Designed the visual language and production system that turned AI-generated assets into a repeatable creative engine for campaign launches.",
      category: "Visual Design System",
      thumbnailSrc: "/assets/KK/Cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "tvam",
      title: "tvam",
      description:
        "Designed the product interface and UX flows that unified campaign touchpoints and improved clarity across acquisition and retention surfaces.",
      category: "Product UX",
      thumbnailSrc: "/assets/tvam/cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "bevolve",
      title: "Bevolve.ai",
      description:
        "Shaped the interface architecture and design system for an AI sustainability platform built for enterprise onboarding and adoption.",
      category: "Design System",
      thumbnailSrc: "/assets/bevolve/cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "general-aeronautics",
      title: "General Aeronautics",
      description:
        "Redesigned the product messaging and visual hierarchy across a complex multi-product platform to improve navigability and trust.",
      category: "Interface Design",
      thumbnailSrc: "/assets/general-aeronautics/cover-summary.jpeg",
      ctaLabel: "View Case Study",
    },
  ],
  servicesTitle: "UI/UX Design Services",
  services: [
    {
      title: "Product Design",
      description:
        "End-to-end UX from discovery to polished interface, built around how your users actually make decisions and take action.",
      iconKey: "palette",
    },
    {
      title: "Design Systems",
      description:
        "Build a visual language and component library that makes your product faster to ship and consistent to trust across every surface.",
      iconKey: "layout",
    },
    {
      title: "User Research",
      description:
        "Structured discovery sessions, prototype testing, and insight synthesis that reduce the guesswork in every product decision.",
      iconKey: "search",
    },
    {
      title: "Prototyping & Flows",
      description:
        "High-fidelity prototypes and interaction flows that prove ideas before engineering begins — so no sprint starts on a bad assumption.",
      iconKey: "pointer",
    },
  ],
};