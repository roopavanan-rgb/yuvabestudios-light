import { Fragment, type ReactNode } from "react";
import {
  Cog,
  Hourglass,
  Lightbulb,
  PencilRuler,
  Rocket,
  Sparkles,
} from "lucide-react";

import { WorkflowCarousel } from "@/components/studio/studio-workflow-carousel";
import { IllustrationCard } from "@/components/ui/illustration-card";
import { cn } from "@/lib/utils";

type GraphicStep = {
  label: string;
  tone?: "muted" | "brand" | "warm";
};

type LegacyStep = {
  label: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
  circleClass: string;
  labelClass: string;
};

const legacyWorkflowSteps: LegacyStep[] = [
  {
    label: "Idea",
    subtitle: "Discovery & sparks",
    Icon: Lightbulb,
    circleClass: "border-[rgb(88_41_199/0.55)] bg-[rgb(88_41_199/0.2)] shadow-[0_0_32px_rgb(88_41_199/0.28),inset_0_0_16px_rgb(88_41_199/0.1)]",
    labelClass: "text-[rgb(160_130_255)]",
  },
  {
    label: "Design",
    subtitle: "Specs & mockups",
    Icon: PencilRuler,
    circleClass: "border-[rgb(32_160_185/0.55)] bg-[rgb(32_160_185/0.2)] shadow-[0_0_32px_rgb(32_160_185/0.28),inset_0_0_16px_rgb(32_160_185/0.1)]",
    labelClass: "text-[rgb(60_200_225)]",
  },
  {
    label: "Build",
    subtitle: "Engineering & QA",
    Icon: Cog,
    circleClass: "border-[rgb(25_145_120/0.55)] bg-[rgb(25_145_120/0.2)] shadow-[0_0_32px_rgb(25_145_120/0.28),inset_0_0_16px_rgb(25_145_120/0.1)]",
    labelClass: "text-[rgb(50_190_165)]",
  },
  {
    label: "Launch",
    subtitle: "Release & ship",
    Icon: Rocket,
    circleClass: "border-[rgb(130_155_35/0.55)] bg-[rgb(130_155_35/0.2)] shadow-[0_0_32px_rgb(130_155_35/0.28),inset_0_0_16px_rgb(130_155_35/0.1)]",
    labelClass: "text-[rgb(175_200_55)]",
  },
];

const speedGraphicSteps: GraphicStep[] = [
  { label: "Prompt", tone: "muted" },
  { label: "Prototype", tone: "brand" },
  { label: "Iteration", tone: "muted" },
];

const framingInputs = ["Signals", "Users", "Assumptions"];


function workflowStepClassName(tone: GraphicStep["tone"] = "muted") {
  if (tone === "brand") {
    return "border-[rgb(88_41_199_/_0.48)] bg-[rgb(88_41_199_/_0.18)] text-white shadow-[0_0_0_1px_rgb(88_41_199_/_0.2),0_12px_30px_rgb(88_41_199_/_0.18)]";
  }

  if (tone === "warm") {
    return "border-[rgb(255_202_45_/_0.28)] bg-[rgb(255_202_45_/_0.12)] text-white";
  }

  return "border-[rgb(203_195_223_/_0.12)] bg-[rgb(255_255_255_/_0.04)] text-[var(--color-text-inverse-muted)]";
}

// This lane graphic compares the old linear workflow with the tighter AI-native loop in one glance.
function WorkflowShiftGraphic() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[rgb(203_195_223_/_0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]">
      {/* The upper lane frames the old path as a slower, dimmer sequence. */}
      <div className="px-5 py-6 md:px-6 md:py-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-(--color-text-inverse-muted)">
            Old workflow
          </p>
          <div className="flex items-center gap-1.5 text-(--color-text-inverse-muted)/72">
            <Hourglass className="size-4 stroke-[1.6]" />
            <span className="text-label-sm">Linear production path</span>
          </div>
        </div>

        {/* Step circles */}
        <div className="flex items-start">
          {legacyWorkflowSteps.map((step, index) => (
            <Fragment key={step.label}>
              {/* Circle + label */}
              <div className="group flex flex-col items-center">
                <div
                  className={cn(
                    "flex size-20 cursor-pointer items-center justify-center rounded-full border transition-all duration-300 ease-out hover:scale-110 md:size-24",
                    step.circleClass
                  )}
                >
                  <step.Icon className="size-7 stroke-[1.5] text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                </div>
                <p className={cn("mt-2.5 text-[0.95rem] font-semibold tracking-[-0.01em]", step.labelClass)}>
                  {step.label}
                </p>
                <p className="mt-0.5 text-[0.72rem] text-(--color-text-inverse-muted)">
                  {step.subtitle}
                </p>
              </div>

              {/* Connector with step number */}
              {index < legacyWorkflowSteps.length - 1 && (
                <div className="flex flex-1 items-center self-start pt-10 md:pt-12">
                  <div className="h-px flex-1 bg-white/10" />
                  <span className="px-2 text-[0.6rem] font-medium tabular-nums tracking-widest text-(--color-text-inverse-muted)/50">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* The divider makes the AI acceleration layer explicit before the brighter lower loop begins. */}
      <div className="relative px-5 md:px-6">
        <div className="h-px bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.08)_16%,rgba(255,202,45,0.54)_50%,rgba(255,255,255,0.08)_84%,rgba(255,255,255,0))]" />
        <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(255_202_45_/_0.18)] bg-[rgb(18_12_34_/_0.92)] px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.18em] text-[rgb(255_232_186)] shadow-[0_0_30px_rgba(255,202,45,0.12)]">
            <Sparkles className="size-3.5 stroke-[1.8]" />
            AI acceleration
          </div>
        </div>
      </div>

      {/* The lower lane replaces the static diagram with an interactive step-by-step carousel. */}
      <div className="px-5 py-5 md:px-6 md:py-6">
        <WorkflowCarousel />
      </div>
    </div>
  );
}


// This compact flow keeps the speed story to three visible beats so the card stays scannable on mobile.
function SpeedGraphic() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {speedGraphicSteps.map((step, index) => (
        <div key={step.label} className="relative">
          {index < speedGraphicSteps.length - 1 ? (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[calc(100%-0.25rem)] top-1/2 hidden h-px w-[calc(100%+0.5rem)] -translate-y-1/2 sm:block bg-[rgb(88_41_199_/_0.28)]"
            />
          ) : null}

          <div
            className={cn(
              "min-h-[7.5rem] cursor-pointer rounded-[1.25rem] border px-4 py-4 transition-all duration-300 ease-out hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(88,41,199,0.2)]",
              workflowStepClassName(step.tone),
              step.tone === "brand"
                ? "before:absolute before:inset-x-[18%] before:top-[18%] before:h-8 before:rounded-full before:bg-[radial-gradient(circle,rgba(150,136,192,0.42)_0%,rgba(150,136,192,0)_78%)] before:blur-xl"
                : undefined
            )}
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <span className="text-label-sm uppercase tracking-[0.16em] text-[var(--color-text-inverse-muted)]">Step {index + 1}</span>
              <span className="text-heading-sm text-white">{step.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// These stacked panels show fidelity rising quickly without needing a literal UI screenshot.
function MvpGraphic() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {[
        {
          eyebrow: "First pass",
          title: "Wireframe",
          chrome: "bg-[rgb(255_255_255_/_0.05)]",
        },
        {
          eyebrow: "Soon after",
          title: "Interactive",
          chrome: "bg-[rgb(88_41_199_/_0.16)] border-[rgb(88_41_199_/_0.42)]",
        },
        {
          eyebrow: "Ready to learn",
          title: "Useful signal",
          chrome: "bg-[rgb(255_202_45_/_0.08)] border-[rgb(255_202_45_/_0.2)]",
        },
      ].map((panel) => (
        <div
          key={panel.title}
          className={cn(
            "cursor-pointer rounded-[1.25rem] border border-[rgb(203_195_223/0.12)] p-4 transition-all duration-300 ease-out hover:scale-[1.04] hover:border-[rgb(203_195_223/0.22)]",
            panel.chrome
          )}
        >
          <div className="space-y-3">
            <p className="text-label-sm uppercase tracking-[0.16em] text-[var(--color-text-inverse-muted)]">{panel.eyebrow}</p>
            <div className="space-y-2">
              <div className="h-2.5 w-20 rounded-full bg-[rgb(255_255_255_/_0.16)]" />
              <div className="h-2.5 w-full rounded-full bg-[rgb(255_255_255_/_0.1)]" />
              <div className="h-2.5 w-[78%] rounded-full bg-[rgb(255_255_255_/_0.08)]" />
            </div>
            <p className="text-label-lg text-white">{panel.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// This funnel makes the “many inputs into one wedge” framing idea visible without turning into a full process map.
function FramingGraphic() {
  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
      <div className="space-y-3">
        {framingInputs.map((input) => (
          <div
            key={input}
            className="cursor-default rounded-full border border-[rgb(203_195_223/0.12)] bg-[rgb(255_255_255/0.04)] px-4 py-2.5 text-label-md text-(--color-text-inverse-muted) transition-all duration-200 hover:translate-x-1.5 hover:border-[rgb(88_41_199/0.35)] hover:bg-[rgb(88_41_199/0.08)] hover:text-white"
          >
            {input}
          </div>
        ))}
      </div>

      <div className="relative mx-auto h-28 w-full max-w-[12rem] md:w-48">
        <div className="absolute left-0 right-10 top-1/2 h-px -translate-y-1/2 bg-[rgb(203_195_223_/_0.16)]" />
        <div className="absolute right-0 top-1/2 h-20 w-24 -translate-y-1/2 overflow-hidden rounded-[1.25rem] border border-[rgb(88_41_199_/_0.4)] bg-[rgb(88_41_199_/_0.16)] shadow-[0_16px_36px_rgb(88_41_199_/_0.18)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
          <div className="relative flex h-full items-center justify-center px-4 text-center text-label-md text-white">
            Right wedge
          </div>
        </div>
        <div className="absolute left-[22%] top-[18%] h-px w-[36%] rotate-[22deg] bg-[rgb(203_195_223_/_0.18)]" />
        <div className="absolute left-[22%] top-1/2 h-px w-[36%] -translate-y-1/2 bg-[rgb(203_195_223_/_0.18)]" />
        <div className="absolute left-[22%] bottom-[18%] h-px w-[36%] -rotate-[22deg] bg-[rgb(203_195_223_/_0.18)]" />
      </div>
    </div>
  );
}

type JudgmentRowProps = {
  icon: ReactNode;
  title: string;
  tone: "cool" | "warm";
};

// These rows mirror the reference card's left/right evidence list while staying inside Yuvabe's palette.
function JudgmentRow({ icon, title, tone }: JudgmentRowProps) {
  return (
    <div className="group grid cursor-default grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 transition-transform duration-200 hover:translate-x-1.5 md:grid-cols-[3rem_minmax(0,1fr)] md:gap-4">
      <span
        className={cn(
          "flex size-10 items-center justify-center transition-all duration-200 group-hover:scale-110 md:size-11",
          tone === "warm"
            ? "text-[var(--green-500)] group-hover:drop-shadow-[0_0_6px_rgb(255_202_45/0.6)]"
            : "text-[var(--cyan-200)] group-hover:drop-shadow-[0_0_6px_rgb(88_41_199/0.6)]"
        )}
      >
        {icon}
      </span>
      <p className="text-heading-md leading-[1.04] tracking-[-0.02em] text-white transition-colors duration-200 group-hover:text-white/90">{title}</p>
    </div>
  );
}

// The inline SVG keeps the beam and fulcrum geometry close to the reference while labels remain responsive HTML.
function JudgmentBalanceGraphic() {
  return (
    <div className="pt-1">
      <div className="relative mx-auto w-full max-w-[40rem]">
        {/* Labels above SVG */}
        <div className="mb-5 flex justify-around px-2 md:px-3">
          {/* AI circle — violet */}
          <div className="group flex size-36 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-[rgb(88_41_199/0.75)] bg-[rgb(88_41_199/0.14)] shadow-[0_0_28px_rgb(88_41_199/0.22)] transition-all duration-300 ease-out hover:scale-105 hover:border-[rgb(88_41_199/1)] hover:bg-[rgb(88_41_199/0.22)] hover:shadow-[0_0_48px_rgb(88_41_199/0.45)] md:size-40">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[rgb(160_130_255)] transition-colors duration-300 group-hover:text-[rgb(180_160_255)]">AI</p>
            <p className="mt-1 text-center font-display text-[0.95rem] leading-tight tracking-[-0.02em] text-white transition-transform duration-300 group-hover:scale-105">
              Many<br />AI-Generated<br />Options
            </p>
          </div>
          {/* Human circle — yellow */}
          <div className="group flex size-36 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-[rgb(255_202_45/0.65)] bg-[rgb(255_202_45/0.07)] shadow-[0_0_28px_rgb(255_202_45/0.15)] transition-all duration-300 ease-out hover:scale-105 hover:border-[rgb(255_202_45/1)] hover:bg-[rgb(255_202_45/0.13)] hover:shadow-[0_0_48px_rgb(255_202_45/0.35)] md:size-40">
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[rgb(255_202_45)] transition-colors duration-300 group-hover:text-[rgb(255_220_100)]">Human</p>
            <p className="mt-1 text-center font-display text-[0.95rem] leading-tight tracking-[-0.02em] text-white transition-transform duration-300 group-hover:scale-105">
              One<br />Human<br />Judgment
            </p>
          </div>
        </div>

        <svg
          aria-hidden="true"
          viewBox="0 0 640 150"
          className="h-34 w-full"
          preserveAspectRatio="none"
        >
          <rect x="18" y="28" width="604" height="10" fill="none" stroke="rgb(120,80,220)" strokeWidth="2.4" opacity="0.6" />
          <path d="M320 41 L365 145 H275 Z" fill="none" stroke="rgb(255,202,45)" strokeWidth="2.4" opacity="0.6" />
        </svg>
      </div>
    </div>
  );
}

function JudgmentBurstIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 5v4" />
      <path d="M16 23v4" />
      <path d="M6.5 9.5 9.6 12" />
      <path d="M22.4 20 25.5 22.5" />
      <path d="M5 16h4" />
      <path d="M23 16h4" />
      <path d="M6.5 22.5 9.6 20" />
      <path d="M22.4 12 25.5 9.5" />
      <path d="M13.2 13.8c0-1.9 1.4-3.3 2.8-3.3s2.8 1.4 2.8 3.3c0 2.1-2.8 4.3-2.8 4.3s-2.8-2.2-2.8-4.3Z" />
      <path d="M12 22h8" />
    </svg>
  );
}

function JudgmentLinesIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 9h24" />
      <path d="M4 16h18" />
      <path d="M4 23h24" />
    </svg>
  );
}

function JudgmentDoorIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 24V9.5L18 7v17" />
      <path d="M18 8.5 25 10v14l-7-1.5" />
      <path d="M14 16h.1" />
    </svg>
  );
}

function JudgmentSelectionIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7c2.5 0 4.5 2 4.5 4.5S18.5 16 16 16s-4.5-2-4.5-4.5S13.5 7 16 7Z" />
      <path d="M7 24c1.4-3.6 4.4-5.6 9-5.6 4.6 0 7.6 2 9 5.6" />
      <path d="M23.5 7.5 27 11l-3.5 3.5" />
      <path d="M27 11h-7" />
    </svg>
  );
}

function JudgmentDirectionIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="9" />
      <path d="M16 7v18" />
      <path d="M12 12.5 16 8l4 4.5" />
      <path d="M12.5 24H20" />
    </svg>
  );
}

function JudgmentValueIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 6v20" />
      <path d="M8 10h16" />
      <path d="M10.5 10 7 17h7l-3.5-7Z" />
      <path d="M25 17h-7l3.5-7 3.5 7Z" />
      <path d="M12 25h8" />
    </svg>
  );
}

// This replica follows the reference card closely while translating it into Yuvabe's token-led dark palette.
function JudgmentGraphic() {
  return (
    <div className="px-2 pb-1 pt-2 md:px-3">
      <div className="space-y-8 md:space-y-9">
        {/* The centered headline mirrors the reference card while staying in Yuvabe's typography system. */}
        <div className="mx-auto max-w-[35rem] text-center">
          <h4 className="font-display text-[clamp(1.9rem,2.7vw,2.85rem)] leading-[0.98] tracking-[-0.045em] text-white">
            AI expands possibilities, but human judgment
            <br />
            determines value.
          </h4>
        </div>

        {/* The left/right evidence columns stay close to the reference spacing and hierarchy. */}
        <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 sm:gap-y-5 md:gap-x-16">
          <div className="space-y-4 md:space-y-5">
            <JudgmentRow icon={<JudgmentBurstIcon />} title="Abundance of Choices" tone="cool" />
            <JudgmentRow icon={<JudgmentLinesIcon />} title="Lack of Clarity" tone="cool" />
            <JudgmentRow icon={<JudgmentDoorIcon />} title="Increased Possibility" tone="cool" />
          </div>

          <div className="space-y-4 md:space-y-5">
            <JudgmentRow icon={<JudgmentSelectionIcon />} title="Strategic Selection" tone="warm" />
            <JudgmentRow icon={<JudgmentDirectionIcon />} title="Clear Direction" tone="warm" />
            <JudgmentRow icon={<JudgmentValueIcon />} title="Determined Value" tone="warm" />
          </div>
        </div>

        <JudgmentBalanceGraphic />
      </div>
    </div>
  );
}

// This section packages the dark-band story into one reusable homepage-ready pattern while we review it in isolation first.
export function StudioAiFirstSection({ className }: { className?: string }) {
  return (
    <section className={cn("ds-section-brand-night relative overflow-hidden border-t border-[rgb(11_15_25_/_0.04)]", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[38%] ds-pattern-brand-night-dots opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(150,136,192,0.18)_0%,rgba(150,136,192,0)_72%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-8rem] left-[18%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(255,202,45,0.1)_0%,rgba(255,202,45,0)_74%)] blur-3xl"
      />

      {/* The dark rails preserve the homepage framing while adapting it to the night section. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 px-6 md:block md:px-10">
        <div className="absolute inset-y-0 left-0 w-px bg-white/8" />
        <div className="absolute inset-y-0 right-0 w-px bg-white/8" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        {/* The intro keeps the section argument tight so the graphic grid can do the rest of the work. */}
        <div className="max-w-4xl space-y-4 md:space-y-5">
          <p className="text-label-sm uppercase tracking-[0.22em] text-[var(--color-text-inverse-muted)]">AI-first DNA</p>
          <h2
            className="text-section-display text-white md:max-w-4xl [font-size:3.5rem] [font-weight:600] [word-spacing:.2rem]"
          >
            The 0-to-1 workflow changed.
          </h2>
          <p className="max-w-3xl text-body-lg text-[var(--color-text-inverse-muted)]">
            Execution got cheaper. The edge moved to framing, faster experiments, richer MVPs, and better judgment.
          </p>
        </div>

        {/* The workflow anchor card shows old vs new workflow, with the lower lane as an interactive carousel. */}
        <div className="mt-10">
          <IllustrationCard
            title="The workflow changed"
            body="The old path was idea → design → build → launch. The AI-native path is frame → prototype → test → decide."
            illustration={<WorkflowShiftGraphic />}
          />
        </div>

        {/* The lower grid breaks the change into four scan-friendly founder-relevant shifts. */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <IllustrationCard
            title="Making got faster"
            body="From prompt to prototype to iteration, teams can explore and ship far earlier than before."
            illustration={<SpeedGraphic />}
          />
          <IllustrationCard
            title="Richer MVPs, earlier"
            body="First versions can be usable enough to learn from without waiting for a full polished build."
            illustration={<MvpGraphic />}
          />
          <IllustrationCard
            title="Framing matters more"
            body="When execution gets cheaper, picking the right problem and wedge becomes the real advantage."
            illustration={<FramingGraphic />}
          />
          <IllustrationCard
            title="Judgment matters more"
            body="AI expands options fast, but taste, evidence, and prioritization still decide what should ship."
            illustration={<JudgmentGraphic />}
            graphicOnly
          />
        </div>
      </div>
    </section>
  );
}
