import uiuxDesignContent from "@/components/studio/data/studio-uiux-design-content.json";

export type StudioUiuxDesignHeroContent = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type StudioUiuxDesignCaseStudy = {
  slug: string;
  title: string;
  description: string;
  category: string;
  services?: string[];
  outcomes?: string[];
  thumbnailSrc?: string;
  ctaLabel: string;
  workGallery?: Array<{ src: string; alt: string; label: string }>;
  proofPoints?: Array<{ iconKey: "barChart3" | "bot" | "layoutGrid" | "scanSearch" | "sparkles"; title: string; description: string }>;
  testimonial?: { quote: string; attribution: string };
};

export type StudioUiuxDesignServiceItem = {
  title: string;
  description: string;
  iconKey: "palette" | "layout" | "search" | "pointer";
};

export type StudioUiuxDesignContent = {
  hero: StudioUiuxDesignHeroContent;
  caseStudiesTitle: string;
  caseStudiesDescription: string;
  caseStudies: StudioUiuxDesignCaseStudy[];
  servicesTitle: string;
  services: StudioUiuxDesignServiceItem[];
};

export const studioUiuxDesignContent =
  uiuxDesignContent as StudioUiuxDesignContent;
