import aiNativeContent from "@/components/studio/data/studio-ai-native-engineering-content.json";

export type StudioAiNativeEngineeringHeroContent = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type StudioAiNativeEngineeringCaseStudy = {
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

export type StudioAiNativeEngineeringServiceItem = {
  title: string;
  description: string;
  iconKey: "cpu" | "code" | "workflow" | "layers";
};

export type StudioAiNativeEngineeringContent = {
  hero: StudioAiNativeEngineeringHeroContent;
  caseStudiesTitle: string;
  caseStudiesDescription: string;
  caseStudies: StudioAiNativeEngineeringCaseStudy[];
  servicesTitle: string;
  services: StudioAiNativeEngineeringServiceItem[];
};

export const studioAiNativeEngineeringContent =
  aiNativeContent as StudioAiNativeEngineeringContent;
