import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";

export type { DigitalMarketingCaseStudy as AiNativeEngineeringCaseStudy };

export type AiNativeEngineeringHeroContent = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type AiNativeEngineeringPageContent = {
  hero: AiNativeEngineeringHeroContent;
  caseStudiesTitle: string;
  caseStudiesDescription: string;
  caseStudies: DigitalMarketingCaseStudy[];
  servicesTitle: string;
  services: Array<{
    title: string;
    description: string;
    iconKey: "cpu" | "code" | "workflow" | "layers";
  }>;
};

export const aiNativeEngineeringPageContent: AiNativeEngineeringPageContent = {
  hero: {
    title: "AI-Native Engineering",
    subtitle: "End-to-end build, shipped right",
    description:
      "Product strategy, AI-native apps, and launch-ready engineering for B2B and B2C teams — one connected system from brief to build.",
    ctaLabel: "Start Your Project",
    ctaHref: "/#process",
  },
  caseStudiesTitle: "AI-Native Engineering Case Studies",
  caseStudiesDescription:
    "Proof from AI product builds, copilot deployments, and full-stack systems shipped for founders moving fast.",
  caseStudies: [
    {
      slug: "bevolve",
      title: "Bevolve.ai",
      description:
        "Designed and shipped the AI product layer and communication system for a sustainability platform built for enterprise adoption.",
      category: "AI Product Build",
      thumbnailSrc: "/assets/bevolve/cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "ageshift",
      title: "AgeShift",
      description:
        "Built the product and engineering foundation for a wellness platform connecting AI-guided journeys to measurable health outcomes.",
      category: "Full-Stack Engineering",
      thumbnailSrc: "/assets/ageshift/ageshift_cover.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "tvam",
      title: "tvam",
      description:
        "Engineered the product systems and AI workflow layer that unified campaign operations across acquisition and retention surfaces.",
      category: "AI Workflow Integration",
      thumbnailSrc: "/assets/tvam/cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "general-aeronautics",
      title: "General Aeronautics",
      description:
        "Structured and shipped the technical architecture and data systems for a complex multi-product aerospace platform.",
      category: "Technical Architecture",
      thumbnailSrc: "/assets/general-aeronautics/cover-summary.jpeg",
      ctaLabel: "View Case Study",
    },
  ],
  servicesTitle: "AI-Native Engineering Services",
  services: [
    {
      title: "AI Product Strategy",
      description:
        "Shape where AI creates real leverage in your product: agent flows, copilot entry points, and automation layers that stay maintainable as the product grows.",
      iconKey: "cpu",
    },
    {
      title: "Full-Stack Engineering",
      description:
        "End-to-end engineering from backend API to frontend interface, scoped to production standards from the first sprint.",
      iconKey: "code",
    },
    {
      title: "AI Workflow Design",
      description:
        "Design and deploy the workflow systems that make your AI product repeatable, trainable, and safe at scale.",
      iconKey: "workflow",
    },
    {
      title: "Technical Architecture",
      description:
        "Platform decisions, tech stack selection, and system design that keeps your product adaptable as requirements evolve.",
      iconKey: "layers",
    },
  ],
};