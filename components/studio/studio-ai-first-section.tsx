import { Fragment } from "react";
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


const framingInputRows = [
  { number: "01", label: "Signals", tag: "what's moving" },
  { number: "02", label: "Users", tag: "who's hurting" },
  { number: "03", label: "Assumptions", tag: "what must be true" },
];



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



function FramingInputRow({ number, label, tag }: { number: string; label: string; tag: string }) {
  return (
    <div className="group flex cursor-default items-center gap-3 rounded-xl border border-[rgb(203_195_223/0.1)] bg-[rgb(255_255_255/0.03)] px-4 py-3 transition-all duration-200 hover:translate-x-1.5 hover:border-[rgb(88_41_199/0.45)] hover:bg-[rgb(88_41_199/0.08)]">
      <span className="w-6 shrink-0 text-[0.62rem] font-bold tabular-nums tracking-wider text-[rgb(88_41_199)]">{number}</span>
      <span className="flex-1 text-[0.88rem] font-semibold text-white">{label}</span>
      <span className="text-[0.7rem] italic text-[rgb(255_255_255/0.3)]">{tag}</span>
    </div>
  );
}

function FramingCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[rgb(203_195_223/0.1)] bg-[rgb(255_255_255/0.025)]">
      <div className="pointer-events-none absolute -left-12 -top-12 size-40 rounded-full bg-[radial-gradient(circle,rgb(88_41_199/0.2)_0%,transparent_70%)] transition-opacity duration-500 group-hover:opacity-150" />

      <div className="relative z-10 p-6 md:p-7">
        {/* Eyebrow + badge */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[rgb(88_41_199)]" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[rgb(88_41_199)]">I · Framing</span>
          </div>
          <span className="text-[0.65rem] tabular-nums tracking-widest text-[rgb(255_255_255/0.25)]">01/02</span>
        </div>

        {/* Title + subtitle */}
        <h3 className="mb-2 font-display text-[clamp(1.75rem,2.4vw,2.2rem)] leading-[1.06] tracking-[-0.03em] text-white">
          Framing matters <em className="not-italic text-[rgb(130_100_255)]">more.</em>
        </h3>
        <p className="mb-7 text-[0.84rem] leading-relaxed text-[rgb(255_255_255/0.42)]">
          When execution is cheap, picking the right problem and wedge becomes the real advantage. That&apos;s still human work.
        </p>

        {/* Diagram */}
        <div className="flex items-center">
          <div className="flex flex-1 flex-col gap-3">
            {framingInputRows.map((row) => (
              <FramingInputRow key={row.label} number={row.number} label={row.label} tag={row.tag} />
            ))}
          </div>

          <svg width="88" height="144" viewBox="0 0 88 144" fill="none" className="shrink-0" aria-hidden>
            <path d="M 0 20 C 36 20 50 72 65 72" stroke="rgb(88 41 199 / 0.38)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 0 72 L 65 72" stroke="rgb(88 41 199 / 0.38)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 0 124 C 36 124 50 72 65 72" stroke="rgb(88 41 199 / 0.38)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 65 72 L 88 72" stroke="rgb(88 41 199 / 0.55)" strokeWidth="1.3" strokeLinecap="round" />
            <circle cx="65" cy="72" r="2.5" fill="rgb(88 41 199)" />
          </svg>

          <div className="shrink-0 w-[8.5rem] cursor-default rounded-2xl border border-[rgb(88_41_199/0.5)] bg-[rgb(88_41_199/0.16)] p-4 shadow-[0_0_28px_rgb(88_41_199/0.2)] transition-all duration-300 hover:border-[rgb(88_41_199/0.85)] hover:shadow-[0_0_48px_rgb(88_41_199/0.4)]">
            <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.24em] text-[rgb(160_130_255/0.75)]">Output</p>
            <p className="font-display text-[1.1rem] leading-tight tracking-[-0.02em] text-white">Right<br />Wedge</p>
            <p className="mt-3 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-[rgb(88_41_199/0.7)]">→ Sharpest point</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-dashed border-[rgb(255_255_255/0.08)] pt-4">
          <p className="text-[0.72rem] italic text-[rgb(255_255_255/0.28)]">Inputs are commodity.</p>
          <p className="text-[0.72rem] italic text-[rgb(255_255_255/0.28)]">Framing is the moat.</p>
        </div>
      </div>
    </div>
  );
}

function JudgmentBurstIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 5v4M16 23v4M6.5 9.5 9.6 12M22.4 20 25.5 22.5M5 16h4M23 16h4M6.5 22.5 9.6 20M22.4 12 25.5 9.5" />
      <path d="M13.2 13.8c0-1.9 1.4-3.3 2.8-3.3s2.8 1.4 2.8 3.3c0 2.1-2.8 4.3-2.8 4.3s-2.8-2.2-2.8-4.3Z" />
    </svg>
  );
}

function JudgmentLinesIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 9h24M4 16h18M4 23h24" />
    </svg>
  );
}

function JudgmentDoorIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 24V9.5L18 7v17M18 8.5 25 10v14l-7-1.5M14 16h.1" />
    </svg>
  );
}

function JudgmentSelectionIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 7c2.5 0 4.5 2 4.5 4.5S18.5 16 16 16s-4.5-2-4.5-4.5S13.5 7 16 7Z" />
      <path d="M7 24c1.4-3.6 4.4-5.6 9-5.6 4.6 0 7.6 2 9 5.6" />
      <path d="M23.5 7.5 27 11l-3.5 3.5M27 11h-7" />
    </svg>
  );
}

function JudgmentDirectionIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="9" />
      <path d="M16 7v18M12 12.5 16 8l4 4.5M12.5 24H20" />
    </svg>
  );
}

function JudgmentValueIcon() {
  return (
    <svg viewBox="0 0 32 32" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 6v20M8 10h16M10.5 10 7 17h7l-3.5-7ZM25 17h-7l3.5-7 3.5 7ZM12 25h8" />
    </svg>
  );
}

const judgmentItems = [
  { Icon: JudgmentBurstIcon, title: "Abundance of Choices", desc: "Generation is cheap; options multiply fast.", tone: "muted" as const },
  { Icon: JudgmentSelectionIcon, title: "Strategic Selection", desc: "One choice, well-reasoned.", tone: "bright" as const },
  { Icon: JudgmentLinesIcon, title: "Lack of Clarity", desc: "Possibility without a point of view.", tone: "muted" as const },
  { Icon: JudgmentDirectionIcon, title: "Clear Direction", desc: "A single, committed line of travel.", tone: "bright" as const },
  { Icon: JudgmentDoorIcon, title: "Increased Possibility", desc: "More doors open than before.", tone: "muted" as const },
  { Icon: JudgmentValueIcon, title: "Determined Value", desc: "Worth is set at the point of choice.", tone: "bright" as const },
];

function JudgmentCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[rgb(203_195_223/0.1)] bg-[rgb(255_255_255/0.025)]">
      <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full bg-[radial-gradient(circle,rgb(88_41_199/0.15)_0%,transparent_70%)] transition-opacity duration-500 group-hover:opacity-150" />

      <div className="relative z-10 p-6 md:p-7">
        {/* Eyebrow + badge */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[rgb(88_41_199)]" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[rgb(88_41_199)]">II · Judgment</span>
          </div>
          <span className="text-[0.65rem] tabular-nums tracking-widest text-[rgb(255_255_255/0.25)]">02/02</span>
        </div>

        {/* Title */}
        <h3 className="mb-3 font-display text-[clamp(1.75rem,2.4vw,2.2rem)] leading-[1.06] tracking-[-0.03em] text-white">
          AI expands possibilities, but{" "}
          <em className="not-italic text-[rgb(130_100_255)]">human judgment</em>{" "}
          determines value.
        </h3>
        <p className="mb-7 text-[0.84rem] leading-relaxed text-[rgb(255_255_255/0.42)]">
          AI expands possibilities. Strategic selection, clear direction, and determined value still come from people who know what they&apos;re building toward.
        </p>

        {/* 2-column grid of items */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5">
          {judgmentItems.map(({ Icon, title, desc, tone }) => (
            <div
              key={title}
              className="group/item flex cursor-default flex-col gap-2 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className={cn(
                "flex size-7 items-center justify-center rounded-lg transition-all duration-200",
                tone === "bright"
                  ? "bg-[rgb(88_41_199/0.2)] text-[rgb(160_130_255)] group-hover/item:bg-[rgb(88_41_199/0.3)] group-hover/item:drop-shadow-[0_0_6px_rgb(88_41_199/0.6)]"
                  : "bg-[rgb(255_255_255/0.06)] text-[rgb(255_255_255/0.45)] group-hover/item:bg-[rgb(255_255_255/0.1)] group-hover/item:text-[rgb(255_255_255/0.65)]"
              )}>
                <Icon />
              </div>
              <p className={cn(
                "text-[0.85rem] font-semibold leading-snug",
                tone === "bright" ? "text-white" : "text-[rgb(255_255_255/0.72)]"
              )}>
                {title}
              </p>
              <p className="text-[0.72rem] leading-relaxed text-[rgb(255_255_255/0.35)]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Balance beam — AI vs Human judgment */}
        <div className="mt-8 border-t border-[rgb(255_255_255/0.06)] pt-6">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="mb-4 flex justify-around px-2">
              <div className="group flex size-32 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-[rgb(88_41_199/0.7)] bg-[rgb(88_41_199/0.12)] shadow-[0_0_24px_rgb(88_41_199/0.2)] transition-all duration-300 ease-out hover:scale-105 hover:border-[rgb(88_41_199/1)] hover:shadow-[0_0_40px_rgb(88_41_199/0.42)] md:size-36">
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[rgb(160_130_255)] transition-colors duration-300 group-hover:text-[rgb(180_160_255)]">AI</p>
                <p className="mt-1 text-center font-display text-[0.88rem] leading-tight tracking-[-0.02em] text-white transition-transform duration-300 group-hover:scale-105">
                  Many<br />AI-Generated<br />Options
                </p>
              </div>
              <div className="group flex size-32 cursor-pointer flex-col items-center justify-center rounded-full border-2 border-[rgb(255_202_45/0.55)] bg-[rgb(255_202_45/0.06)] shadow-[0_0_24px_rgb(255_202_45/0.12)] transition-all duration-300 ease-out hover:scale-105 hover:border-[rgb(255_202_45/1)] hover:shadow-[0_0_40px_rgb(255_202_45/0.3)] md:size-36">
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[rgb(255_202_45)] transition-colors duration-300 group-hover:text-[rgb(255_220_100)]">Human</p>
                <p className="mt-1 text-center font-display text-[0.88rem] leading-tight tracking-[-0.02em] text-white transition-transform duration-300 group-hover:scale-105">
                  One<br />Human<br />Judgment
                </p>
              </div>
            </div>
            <svg aria-hidden viewBox="0 0 640 120" className="w-full" preserveAspectRatio="none">
              <rect x="18" y="22" width="604" height="8" fill="none" stroke="rgb(120,80,220)" strokeWidth="2" opacity="0.55" />
              <path d="M320 33 L362 115 H278 Z" fill="none" stroke="rgb(255,202,45)" strokeWidth="2" opacity="0.55" />
            </svg>
          </div>
        </div>
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
        className="pointer-events-none absolute left-1/2 top-0 h-80 w-3xl -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(88,41,199,0.45)_0%,rgba(88,41,199,0)_65%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(120,80,220,0.22)_0%,rgba(120,80,220,0)_70%)] blur-3xl"
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
          <div className="rounded-2xl border border-[rgb(203_195_223/0.1)] bg-[rgb(255_255_255/0.025)] p-6 md:p-7">
            <h3 className="mb-3 text-[1rem] font-semibold text-white">Making got faster</h3>
            <p className="text-[0.88rem] leading-relaxed text-[rgb(255_255_255/0.45)]">
              From prompt to prototype to iteration — teams can explore and ship far earlier than before, without waiting for a full build.
            </p>
          </div>
          <div className="rounded-2xl border border-[rgb(203_195_223/0.1)] bg-[rgb(255_255_255/0.025)] p-6 md:p-7">
            <h3 className="mb-3 text-[1rem] font-semibold text-white">Richer MVPs, earlier</h3>
            <p className="text-[0.88rem] leading-relaxed text-[rgb(255_255_255/0.45)]">
              First versions can be usable enough to learn from — wireframe to interactive to useful signal — without a polished production build.
            </p>
          </div>
          <FramingCard />
          <JudgmentCard />
        </div>
      </div>
    </section>
  );
}
