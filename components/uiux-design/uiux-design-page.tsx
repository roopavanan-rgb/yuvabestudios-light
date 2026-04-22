import type { StudioHomepageNavItem } from "@/components/studio/studio-homepage-content";
import {
  type UiuxDesignPageContent,
} from "@/components/uiux-design/uiux-design-content";
import {
  LayoutTemplate,
  MousePointerClick,
  Palette,
  Search,
  type LucideIcon,
} from "lucide-react";
import { ServiceCaseStudyGrid } from "@/components/shared/service-case-study-grid";
import { PageHero } from "@/components/digital-marketing/page-hero";
import { StudioCtaCard } from "@/components/studio/studio-cta-card";
import { StudioHeader } from "@/components/studio/studio-header";
import {
  StudioPageContainer,
  StudioPageRails,
} from "@/components/studio/studio-page-shell";
import { PremiumSurface } from "@/components/ui/premium-surface";

type UiuxDesignPageProps = {
  navigationItems: StudioHomepageNavItem[];
  content: UiuxDesignPageContent;
};

const serviceIconMap: Record<
  UiuxDesignPageContent["services"][number]["iconKey"],
  LucideIcon
> = {
  palette: Palette,
  layout: LayoutTemplate,
  search: Search,
  pointer: MousePointerClick,
};

export function UiuxDesignPage({
  navigationItems,
  content,
}: UiuxDesignPageProps) {
  return (
    <main
      data-studio-shell
      className="relative min-h-screen overflow-x-clip overflow-y-visible bg-white text-foreground"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <StudioPageRails />
        <div className="absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_14%_0%,rgba(88,41,199,0.08),rgba(255,255,255,0)_34%),radial-gradient(circle_at_88%_0%,rgba(249,169,31,0.1),rgba(255,255,255,0)_30%)]" />
      </div>

      <StudioHeader navigationItems={navigationItems} />

      <article className="relative">
        <PageHero content={content.hero} />

        {/* Case studies section */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-[var(--color-background-canvas)] py-14 md:py-20">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.042)_1px,transparent_1px)] bg-size-[120px_100%]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.021)_1px,transparent_1px)] bg-size-[100%_120px]" />
            <StudioPageRails />
          </div>

          <StudioPageContainer className="relative z-10 space-y-10">
            <div className="max-w-4xl space-y-4 lg:pl-4 xl:pl-6">
              <h2 className="max-w-5xl text-display-muted-editorial text-(--neutral-950)">
                {content.caseStudiesTitle}
              </h2>
              <p className="text-body-lg text-(--color-text-secondary)">
                {content.caseStudiesDescription}
              </p>
            </div>

            <div className="lg:pl-4 xl:pl-6">
              <ServiceCaseStudyGrid items={content.caseStudies} />
            </div>
          </StudioPageContainer>
        </section>

        {/* Services / capabilities section */}
        <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-14 md:py-20">
          <div aria-hidden="true" className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.042)_1px,transparent_1px)] bg-size-[120px_100%]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.021)_1px,transparent_1px)] bg-size-[100%_120px]" />
            <StudioPageRails />
          </div>

          <StudioPageContainer className="relative z-10 space-y-8">
            <h2 className="max-w-4xl text-display-muted-editorial text-(--neutral-950) lg:pl-4 xl:pl-6">
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
                    <div className="flex items-start gap-4">
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/88 text-(--color-text-brand) shadow-[0_10px_28px_rgba(15,23,42,0.06)]">
                        <Icon className="size-5" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-heading-md text-(--neutral-950)">
                          {service.title}
                        </h3>
                        <p className="text-body-md text-(--color-text-secondary)">
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
          eyebrow="Need design that ships with product clarity?"
          title="If you need interfaces your users actually trust, let's design the product experience together."
          description="We work best with founders who want honest design thinking, fast iteration, and a visual system that holds up as the product evolves."
          primaryCtaLabel="Start Your Project"
          primaryCtaHref="/#process"
        />
      </article>
    </main>
  );
}