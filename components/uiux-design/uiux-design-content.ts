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
      slug: "matrimandir",
      title: "Matrimandir",
      description:
        "Designed a contemplative digital presence for the iconic Auroville meditation center — balancing sacred depth with accessible clarity.",
      category: "Spiritual Design",
      services: ["UX Design", "Visual Identity", "Web Design"],
      outcomes: [
        "Designed a contemplative presence balancing sacred depth with accessibility.",
        "Created navigation guiding visitors through multiple levels of experience.",
        "Delivered a visual language that felt quiet, intentional, and culturally resonant.",
        "Made information about visiting and programs easier to discover.",
      ],
      thumbnailSrc: "/assets/martimandir/matrimandirpage.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "buglerock",
      title: "Buglerock",
      description:
        "Designed the product identity and interface architecture for a music-driven platform connecting artists, venues, and event creators.",
      category: "Platform Design",
      services: ["Product Design", "Design System", "Brand Identity"],
      outcomes: [
        "Defined a product identity making the platform's value immediately legible.",
        "Designed an interface reducing friction for artists, venues, and creators.",
        "Built a design system that accelerated the team's development cycles.",
        "Improved onboarding completion through clearer user flow design.",
      ],
      thumbnailSrc: "/assets/buglerock/homepage.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "prakiti-sattva",
      title: "Prakiti Sattva",
      description:
        "Built an Ayurvedic wellness brand's digital touchpoints around a natural design system that made product trust visible.",
      category: "Wellness UX",
      services: ["UX Research", "Product Design", "Design System"],
      outcomes: [
        "Built a natural design system making product trust visible before purchase.",
        "Improved conversion paths through cleaner product discovery flows.",
        "Designed assets that cohered into a single brand experience.",
        "Helped communicate Ayurvedic credibility to modern wellness buyers.",
      ],
      thumbnailSrc: "/assets/prakritisattva/product.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "general-aeronautics",
      title: "General Aeronautics",
      description:
        "Redesigned the product messaging and visual hierarchy across a complex multi-product platform to improve navigability and trust.",
      category: "Interface Design",
      services: ["Interface Design", "Information Architecture", "UX"],
      outcomes: [
        "Reframed a broad drone portfolio into a sharper market story.",
        "Made technical capabilities easier for non-technical audiences to understand.",
        "Improved credibility across web, applications, and communication assets.",
        "Built a stronger platform for future product and growth decisions.",
      ],
      thumbnailSrc: "/assets/general-aeronautics/cover-home.png",
      ctaLabel: "View Case Study",
    },
    {
      slug: "bevikve",
      title: "Bevikve",
      description:
        "Designed the core product UI and onboarding flows for a B2B platform built around operational clarity and team workflows.",
      category: "B2B Product Design",
      services: ["Product UX", "Onboarding Design", "UI Systems"],
      outcomes: [
        "Reduced onboarding time through cleaner flow design and task sequencing.",
        "Designed a UI making complex B2B workflows visually navigable.",
        "Improved team adoption rates by prioritizing clarity over feature density.",
        "Created a component system ready to scale with the product roadmap.",
      ],
      ctaLabel: "View Case Study",
    },
    {
      slug: "kittykat",
      title: "KittyKat",
      description:
        "Designed the visual language and production system that turned AI-generated assets into a repeatable creative engine for campaigns.",
      category: "Visual Design System",
      services: ["Design System", "Visual Language", "Creative Ops"],
      outcomes: [
        "Built a production system turning AI assets into campaign-ready creatives.",
        "Reduced creative turnaround time from days to hours.",
        "Established a visual language keeping AI-generated assets brand-consistent.",
        "Created a scalable system usable across multiple campaigns and channels.",
      ],
      thumbnailSrc: "/assets/KK/Cover-summary.png",
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