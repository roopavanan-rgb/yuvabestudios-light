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
      slug: "kittykat",
      title: "KittyKat",
      description:
        "Built the AI-powered creative production system that enabled a brand studio to launch high-volume campaigns with AI-generated visuals.",
      category: "AI Creative Production",
      services: ["AI Integration", "Workflow Engineering", "Automation"],
      outcomes: [
        "Reduced creative production time by 80% through AI-powered automation.",
        "Built a repeatable content generation pipeline for high-volume campaigns.",
        "Delivered a production-ready system integrated into the team's existing workflow.",
        "Enabled the team to scale content output without scaling headcount.",
      ],
      thumbnailSrc: "/assets/KK/Cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "bevolve",
      title: "Bevolve AI",
      description:
        "Turned fragmented sustainability reporting into an AI-guided system teams could trust for faster, evidence-based decisions.",
      category: "ESG Intelligence",
      services: ["AI Integration", "Reporting Automation", "Decision Support"],
      outcomes: [
        "Automated ESG data collection from fragmented sources into a unified dashboard.",
        "Reduced reporting time from weeks to hours with AI-assisted generation.",
        "Made compliance evidence traceable and auditable at report time.",
        "Built an intelligence layer teams trusted for faster sustainability decisions.",
      ],
      thumbnailSrc: "/assets/bevolve/cover-summary.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "ageshift",
      title: "AgeShift",
      description:
        "Engineered the AI-driven wellness intelligence layer that personalized aging journeys for a health-first consumer platform.",
      category: "Health AI",
      services: ["AI Engineering", "Full-Stack Build", "Product Strategy"],
      outcomes: [
        "Delivered personalized aging wellness recommendations at scale.",
        "Built an AI layer that adapted journeys based on real behavioral signals.",
        "Reduced manual care coordination overhead through intelligent automation.",
        "Launched a production system handling 10K+ user personalization events daily.",
      ],
      thumbnailSrc: "/assets/ageshift/ageshift_cover.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "yuvanext",
      title: "YuvaNext",
      description:
        "Built the AI-powered coaching and career intelligence system connecting youth talent to structured learning and professional growth.",
      category: "EdTech AI",
      services: ["AI Architecture", "Full-Stack Engineering", "Product Strategy"],
      outcomes: [
        "Built an AI coaching system connecting youth to structured career pathways.",
        "Reduced career counselor workload through intelligent question routing.",
        "Improved learner engagement with personalized learning recommendations.",
        "Delivered a scalable platform ready for institutional partnerships.",
      ],
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