import digitalMarketingContent from "@/components/studio/data/studio-digital-marketing-content.json";

export type StudioDigitalMarketingHeroContent = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type StudioDigitalMarketingCaseStudy = {
  slug: string;
  title: string;
  description: string;
  category: string;
  thumbnailSrc?: string;
  ctaLabel: string;
};

export type StudioDigitalMarketingServiceItem = {
  title: string;
  description: string;
  iconKey: "megaphone" | "layout" | "penTool" | "lineChart";
};

export type StudioDigitalMarketingContent = {
  hero: StudioDigitalMarketingHeroContent;
  caseStudiesTitle: string;
  caseStudiesDescription: string;
  caseStudies: StudioDigitalMarketingCaseStudy[];
  servicesTitle: string;
  services: StudioDigitalMarketingServiceItem[];
};

// JSON-backed contract keeps Digital Marketing content aligned across local fallback, Supabase, and the internal editor.
export const studioDigitalMarketingContent =
  digitalMarketingContent as StudioDigitalMarketingContent;
