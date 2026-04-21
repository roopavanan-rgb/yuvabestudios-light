import type { StudioHomepageNavItem } from "@/components/studio/studio-homepage-content";
import {
  type DigitalMarketingPageContent,
} from "@/components/digital-marketing/digital-marketing-content";
import {
  LayoutTemplate,
  LineChart,
  Megaphone,
  PenTool,
  type LucideIcon,
} from "lucide-react";
import { CaseStudyGrid } from "@/components/digital-marketing/case-study-grid";
import { PageHero } from "@/components/digital-marketing/page-hero";
import { StudioCtaCard } from "@/components/studio/studio-cta-card";
import { StudioHeader } from "@/components/studio/studio-header";
import {
  StudioPageContainer,
  StudioPageRails,
} from "@/components/studio/studio-page-shell";
import { PremiumSurface } from "@/components/ui/premium-surface";

type DigitalMarketingPageProps = {
  navigationItems: StudioHomepageNavItem[];
  content: DigitalMarketingPageContent;
};

const serviceIconMap: Record<
  DigitalMarketingPageContent["services"][number]["iconKey"],
  LucideIcon
> = {
  megaphone: Megaphone,
  layout: LayoutTemplate,
  penTool: PenTool,
  lineChart: LineChart,
};

// This page composes a focused marketing narrative while staying on the shared studio shell and DS contracts.
export function DigitalMarketingPage({
  navigationItems,
  content,
}: DigitalMarketingPageProps) {
  return (
    <main
      data-studio-shell
      className="relative min-h-screen overflow-x-clip overflow-y-visible bg-white text-foreground"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <StudioPageRails />
        <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_14%_0%,rgba(88,41,199,0.08),rgba(255,255,255,0)_34%),radial-gradient(circle_at_88%_0%,rgba(255,202,45,0.1),rgba(255,255,255,0)_30%)]" />
      </div>

      <StudioHeader navigationItems={navigationItems} />

      <article className="relative">
        <PageHero content={content.hero} />

        <section className="relative overflow-hidden border-b border-slate-200/80 bg-[var(--color-background-canvas)] py-14 md:py-20">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.042)_1px,transparent_1px)] bg-[size:120px_100%]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.021)_1px,transparent_1px)] bg-[size:100%_120px]" />
            <StudioPageRails />
          </div>

          <StudioPageContainer className="relative z-10 space-y-10">
            <div className="max-w-4xl space-y-4 lg:pl-4 xl:pl-6">
              <h2 className="max-w-5xl text-display-muted-editorial text-[var(--neutral-950)]">
                {content.caseStudiesTitle}
              </h2>
              <p className="text-body-lg text-[var(--color-text-secondary)]">
                {content.caseStudiesDescription}
              </p>
            </div>

            <div className="lg:pl-4 xl:pl-6">
              <CaseStudyGrid items={content.caseStudies} />
            </div>
          </StudioPageContainer>
        </section>

        <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-14 md:py-20">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.042)_1px,transparent_1px)] bg-[size:120px_100%]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.021)_1px,transparent_1px)] bg-[size:100%_120px]" />
            <StudioPageRails />
          </div>

          <StudioPageContainer className="relative z-10 space-y-8">
            <h2 className="max-w-4xl text-display-muted-editorial text-[var(--neutral-950)] lg:pl-4 xl:pl-6">
              {content.servicesTitle}
            </h2>
            <div className="grid gap-4 lg:grid-cols-2 lg:pl-4 xl:pl-6">
              {content.services.map((service) => {
                const Icon = serviceIconMap[service.iconKey];

                return (
                  <PremiumSurface
                    key={service.title}
                    tone="glass"
                    elevation="sm"
                    blur="md"
                    radius="xl"
                    className="p-6"
                  >
                    {/* Service cards pair icon, title, and detail so each capability reads as a clear growth module. */}
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/88 text-[var(--color-text-brand)] shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-heading-md text-[var(--neutral-950)]">
                          {service.title}
                        </h3>
                        <p className="text-body-md text-[var(--color-text-secondary)]">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </PremiumSurface>
                );
              })}
            </div>
          </StudioPageContainer>
        </section>

        <StudioCtaCard
          eyebrow="Need digital growth momentum?"
          title="If you need campaigns that ship with product clarity, let's build your traction engine."
          description="We align positioning, landing pages, campaign execution, and analytics so every launch teaches you what to scale next."
          primaryCtaLabel="Start Your Project"
          primaryCtaHref="/#process"
        />
      </article>
    </main>
  );
}
