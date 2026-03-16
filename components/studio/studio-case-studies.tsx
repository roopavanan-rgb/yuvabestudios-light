"use client";

import { useState } from "react";
import { BarChart3, Bot, LayoutGrid, ScanSearch, Sparkles, type LucideIcon } from "lucide-react";

import { StudioCaseStudyMockCard } from "@/components/studio/studio-case-study-mock-card";
import {
  studioCaseStudies,
  type StudioCaseStudySummary,
} from "@/components/studio/studio-case-study-content";
import { StudioCaseStudySummaryDialog } from "@/components/studio/studio-case-study-summary-dialog";

function ProofIcon({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="size-24 stroke-[1.4] text-[color:color-mix(in_srgb,var(--neutral-700)_82%,var(--lavender-500)_18%)]" />;
}

const additionalCaseStudies: StudioCaseStudySummary[] = [
  {
    id: "tvam",
    sector: "Health insurance AI",
    title: "TVAM",
    summary: "Built advisor-style AI tools that simplified health, policy, and exam-prep workflows through one clearer product system.",
    services: ["AI integration", "Website design", "Cloud deployment"],
    media: <ProofIcon icon={Bot} />,
    mockImageSrc: "/assets/tvam_cover.jpeg",
    mockImageAlt: "TVAM case study cover",
    mockViewport: "portrait",
    mockVariant: "aurora",
    mockLayout: "compact",
    modalIntro:
      "TVAM focused on simplifying health, policy, and exam-prep workflows through advisor-style AI tools. The opportunity was to turn multiple AI capabilities into one product experience that felt useful, reliable, and easy to navigate.",
    modalOutcomes: [
      "Built AI-powered Health and Policy Advisors plus a USMLE preparation tool.",
      "Integrated chat-based AI, secure conversation storage, TTS/STT support, vector search, and file uploads.",
      "Used Retrieval-Augmented Generation patterns and cloud deployment workflows for scale.",
      "Made complex health and policy workflows easier to use through clearer product orchestration.",
    ],
    modalProofPoints: [
      {
        title: "Delivered AI product execution",
        description: "Turned multiple advisor-style workflows into one more coherent AI product experience.",
        icon: Bot,
      },
      {
        title: "Integrated a real RAG stack",
        description: "Combined retrieval, secure storage, and AI workflow orchestration into a scalable system.",
        icon: ScanSearch,
      },
      {
        title: "Shipped cloud-ready infrastructure",
        description: "Paired product work with deployment patterns built for secure growth and iteration.",
        icon: Sparkles,
      },
    ],
    modalTestimonial: {
      quote:
        "What mattered most here was orchestration. Multiple AI tools, retrieval workflows, and cloud systems were brought into one product experience that felt useful, reliable, and much easier to navigate.",
      attribution: "TVAM engagement",
      ctaLabel: "See more work",
      ctaHref: "#work",
    },
  },
  {
    id: "kittykat",
    sector: "Fashion AI visuals",
    title: "KittyKat",
    summary: "Built a generative AI fashion platform that turned product photos into realistic model visuals at scale with faster turnaround and less production overhead.",
    services: ["Generative AI", "Data preprocessing", "Image refinement"],
    media: <ProofIcon icon={Sparkles} />,
    mockImageSrc: "/assets/KK-cover.png",
    mockImageAlt: "KittyKat AI fashion workflow cover",
    mockViewport: "portrait",
    mockVariant: "sunrise",
    mockLayout: "compact",
    modalIntro:
      "KittyKat needed a way to generate realistic fashion imagery at scale without the delay and cost of repeated production shoots. The work focused on turning product-to-model image generation into a more reliable AI workflow with the quality required for premium brand presentation.",
    modalOutcomes: [
      "Built a generative AI fashion platform that automated product-to-model image generation.",
      "Improved realism at scale through data preprocessing, model optimization, and advanced image-generation workflows.",
      "Improved facial alignment, body proportions, and final image quality for premium brand presentation.",
      "Enabled the client to generate thousands of visuals faster for stronger storytelling and customer engagement.",
    ],
    modalSections: [
      {
        title: "Context",
        body: "KittyKat was positioned around AI-generated fashion visuals, but the real product challenge was not novelty alone. The platform had to turn ordinary product photos into realistic model imagery that a fashion brand could actually use across campaigns and commerce touchpoints.",
      },
      {
        title: "Challenge",
        body: "Generating fashion imagery with AI becomes difficult when realism breaks down. Facial alignment, body proportions, and consistency all needed to hold up well enough for premium presentation, while the workflow still had to move faster than traditional production.",
      },
      {
        title: "What we changed",
        body: "Yuvabe built the product-to-model generation workflow, then improved output quality through data preprocessing, model optimization, and hierarchical image refinement. The system was tuned to make the image pipeline feel more reliable, scalable, and aligned to actual fashion-use cases instead of generic AI art output.",
      },
      {
        title: "Outcome",
        body: "The result was a generative AI fashion platform that reduced production delay, improved final image quality, and made it easier for the client to create large volumes of branded visuals for stronger storytelling and customer engagement.",
      },
    ],
    modalProofPoints: [
      {
        title: "Automated product-to-model generation",
        description: "Turned product photos into model visuals through a faster AI-led production workflow.",
        icon: Sparkles,
      },
      {
        title: "Improved realism and quality",
        description: "Used data preprocessing and hierarchical refinement to improve proportion accuracy and premium visual output.",
        icon: LayoutGrid,
      },
      {
        title: "Scaled on brand visual production",
        description: "Reduced image creation time and made it easier to produce larger volumes of usable campaign assets.",
        icon: ScanSearch,
      },
    ],
    modalTestimonial: {
      quote:
        "The value of the work was not just faster image generation. It was building an AI visual pipeline that improved realism, reduced production delay, and made large-scale branded output far more usable.",
      attribution: "KittyKat engagement",
      ctaLabel: "See more work",
      ctaHref: "#work",
    },
  },
  {
    id: "ageshift",
    sector: "AI wellness platform",
    title: "AgeShift",
    summary: "Delivered an AI-enabled wellness platform spanning mobile app, backend APIs, admin tools, and cloud infrastructure.",
    services: ["Mobile app", "Backend API", "AI integration"],
    media: <ProofIcon icon={BarChart3} />,
    mockImageSrc: "/assets/ageShift_logo.svg",
    mockImageAlt: "AgeShift logo",
    mockViewport: "landscape",
    mockVariant: "prism",
    mockLayout: "compact",
    modalIntro:
      "AgeShift needed a connected wellness product ecosystem that could guide users through routines, protocol tracking, and AI-powered recommendations while also giving administrators stronger operational visibility.",
    modalOutcomes: [
      "Built a Flutter mobile app, FastAPI backend, and Next.js admin panel on Google Cloud Platform.",
      "Added AI-driven recommendations, structured protocol tracking, and unified user/admin workflows.",
      "Implemented CI/CD pipelines for more reliable builds, testing, and deployment.",
      "Created a secure, scalable product base for ongoing growth and behavior-driven insights.",
    ],
    modalProofPoints: [
      {
        title: "Shipped cross-platform product systems",
        description: "Connected mobile, backend, and admin experiences into one operational platform.",
        icon: LayoutGrid,
      },
      {
        title: "Integrated AI recommendations",
        description: "Used AI to make routine guidance and wellness insights more personalized and actionable.",
        icon: Bot,
      },
      {
        title: "Built for secure scaling",
        description: "Paired product execution with cloud infrastructure and CI/CD for long-term reliability.",
        icon: Sparkles,
      },
    ],
    modalTestimonial: {
      quote:
        "The impact came from connecting the whole system. Mobile experience, backend APIs, admin tooling, AI recommendations, and cloud infrastructure were built to work together instead of behaving like separate layers.",
      attribution: "AgeShift engagement",
      ctaLabel: "See more work",
      ctaHref: "#work",
    },
  },
];

const homepageCaseStudies = [studioCaseStudies[0], studioCaseStudies[1], additionalCaseStudies[0], additionalCaseStudies[2], additionalCaseStudies[1]];

// The case-studies section turns named proof into a scannable homepage evidence block.
export function StudioCaseStudies() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<StudioCaseStudySummary | null>(null);
  const featuredCaseStudies = homepageCaseStudies.slice(0, 2);
  const secondaryCaseStudies = homepageCaseStudies.slice(2, 4);
  const spotlightCaseStudy = homepageCaseStudies[4];

  return (
    <>
      <section id="work" className="relative overflow-hidden bg-white px-6 py-10 md:px-10 md:py-2">
        {/* The section background extends the hero's light grid so the frame line continues below the fold. */}
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.042)_1px,transparent_1px)] bg-[size:120px_100%]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.021)_1px,transparent_1px)] bg-[size:100%_120px]" />
          <div className="absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 px-6 md:block md:px-10">
            <div className="absolute inset-y-0 left-0 w-px bg-slate-200/80" />
            <div className="absolute inset-y-0 right-0 w-px bg-slate-200/80" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10">
          {/* The section heading uses the dark reference's editorial contrast with one dominant line and one quieter display block. */}
          <div className="max-w-6xl space-y-5 lg:pl-10 xl:pl-14">
            <p className="text-label-sm uppercase tracking-[0.22em] text-[var(--color-text-tertiary)]">Work</p>
            <h2 className="text-hero-support max-w-5xl text-[var(--neutral-950)]">
              <strong>Launch faster. Reach revenue sooner.</strong>
            </h2>
            <p className="text-display-muted-editorial max-w-6xl">
              Turn roadmap bets into <span className="text-[var(--color-text-brand)]">shipped releases</span>, adoption, and compounding traction with one execution partner.
            </p>
          </div>

          {/* The work grid now follows a 2 / 2 / 1 rhythm so the final spotlight card gets its own row. */}
          <div className="space-y-6 lg:px-10 xl:px-14">
            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              {featuredCaseStudies.map((caseStudy) => (
                <StudioCaseStudyMockCard
                  key={caseStudy.id}
                  sector={caseStudy.sector}
                  title={caseStudy.title}
                  summary={caseStudy.summary}
                  services={caseStudy.services}
                  imageSrc={caseStudy.mockImageSrc ?? "/assets/GA_cover.png"}
                  imageAlt={caseStudy.mockImageAlt ?? `${caseStudy.title} case study mock`}
                  imageClassName={caseStudy.mockImageClassName}
                  mockViewport={caseStudy.mockViewport}
                  variant={caseStudy.mockVariant}
                  layout={caseStudy.mockLayout}
                  onOpenDetails={() => setActiveCaseStudy(caseStudy)}
                />
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              {secondaryCaseStudies.map((caseStudy) => (
                <StudioCaseStudyMockCard
                  key={caseStudy.id}
                  sector={caseStudy.sector}
                  title={caseStudy.title}
                  summary={caseStudy.summary}
                  services={caseStudy.services}
                  imageSrc={caseStudy.mockImageSrc ?? "/assets/GA_cover.png"}
                  imageAlt={caseStudy.mockImageAlt ?? `${caseStudy.title} case study mock`}
                  imageClassName={caseStudy.mockImageClassName}
                  mockViewport={caseStudy.mockViewport}
                  variant={caseStudy.mockVariant}
                  layout={caseStudy.mockLayout}
                  onOpenDetails={() => setActiveCaseStudy(caseStudy)}
                />
              ))}
            </div>

            {spotlightCaseStudy ? (
              <div className="grid gap-6">
                <StudioCaseStudyMockCard
                  sector={spotlightCaseStudy.sector}
                  title={spotlightCaseStudy.title}
                  summary={spotlightCaseStudy.summary}
                  services={spotlightCaseStudy.services}
                  imageSrc={spotlightCaseStudy.mockImageSrc ?? "/assets/GA_cover.png"}
                  imageAlt={spotlightCaseStudy.mockImageAlt ?? `${spotlightCaseStudy.title} case study mock`}
                  imageClassName={spotlightCaseStudy.mockImageClassName}
                  mockViewport={spotlightCaseStudy.mockViewport}
                  variant={spotlightCaseStudy.mockVariant}
                  layout={spotlightCaseStudy.mockLayout}
                  onOpenDetails={() => setActiveCaseStudy(spotlightCaseStudy)}
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <StudioCaseStudySummaryDialog
        caseStudy={activeCaseStudy}
        open={Boolean(activeCaseStudy)}
        onOpenChange={(open) => {
          if (!open) {
            setActiveCaseStudy(null);
          }
        }}
      />
    </>
  );
}





