"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type WorkflowStep = {
  label: string;
  highlight?: boolean;
};

type WorkflowStage = {
  id: string;
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  description: string;
};

const workflowStages: WorkflowStage[] = [
  {
    id: "frame",
    title: "Frame",
    subtitle: "We begin by understanding the problem, audience, and vision.",
    steps: [
      { label: "Define the problem" },
      { label: "Analyze your audience", highlight: true },
      { label: "Identify Business Goals" },
    ],
    description:
      "Projects with a clear framing phase are 3× more likely to meet objectives. This step ensures alignment before any execution begins.",
  },
  {
    id: "prototype",
    title: "Prototype",
    subtitle: "Build fast — turning ideas into interactive, testable products.",
    steps: [
      { label: "Share concept" },
      { label: "Build rapid prototype", highlight: true },
      { label: "Kickoff iteration" },
    ],
    description:
      "AI-native prototyping compresses weeks of work into days. You can show something real much earlier in the process.",
  },
  {
    id: "test",
    title: "Test",
    subtitle: "Put prototypes in front of real users and real constraints.",
    steps: [
      { label: "Recruit participants" },
      { label: "Run usability sessions", highlight: true },
      { label: "Capture friction points" },
    ],
    description:
      "Testing early and often turns assumptions into evidence. The cost of a wrong answer here is hours, not quarters.",
  },
  {
    id: "decide",
    title: "Decide",
    subtitle: "Translate evidence into the next committed step.",
    steps: [
      { label: "Synthesize findings" },
      { label: "Choose the next wedge", highlight: true },
      { label: "Cut what didn't land" },
    ],
    description:
      "Human judgment closes the loop. AI expands options; deciding is where value gets set.",
  },
];

function StagePanel({ stage }: { stage: WorkflowStage }) {
  return (
    <div className="flex h-full flex-col">
      {/* Stage content */}
      <div className="flex flex-1 flex-col gap-8 px-7 py-8 md:px-8 md:py-9">
        <div className="space-y-2">
          <h3 className="font-display text-[2.2rem] leading-tight tracking-[-0.03em] text-white">
            {stage.title}
          </h3>
          <p className="text-[0.88rem] italic text-[rgb(255_255_255_/_0.45)]">
            {stage.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-4">
          {stage.steps.map((step, i) => (
            <div key={step.label} className={["place-self-start", "place-self-center", "place-self-end"][i]}>
              {step.highlight ? (
                <div className="inline-flex items-center gap-3 rounded-md border-l-[3px] border-[rgb(88_120_255)] bg-[rgb(88_120_255/0.12)] px-4 py-2.5">
                  <span className="text-[0.95rem] font-semibold text-white">
                    {step.label}
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-3 rounded-md border-l-2 border-[rgb(255_255_255/0.2)] bg-[rgb(255_255_255/0.05)] px-4 py-2.5">
                  <span className="text-[0.9rem] font-medium text-[rgb(255_255_255/0.8)]">
                    {step.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom description */}
      <div className="border-t border-[rgb(255_255_255/0.07)] bg-[rgb(255_255_255/0.02)] px-7 py-5 md:px-8">
        <p className="text-[0.8rem] leading-relaxed text-[rgb(255_255_255_/_0.42)]">
          {stage.description}
        </p>
      </div>
    </div>
  );
}

export function WorkflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Each panel is 3/4 wide — 1 full panel + 1/4 peek. Max = last panel.
  const maxIndex = workflowStages.length - 1;

  const next = () => setActiveIndex((i) => Math.min(i + 1, maxIndex));
  const prev = () => setActiveIndex((i) => Math.max(i - 1, 0));

  // translateX(%) is relative to the element's own width (= container width).
  // Each panel is 60% wide → one index step = 60%. Cap so last panel has no empty space.
  const panelPct = 60;
  const maxTranslate = workflowStages.length * panelPct - 100; // 4×60 − 100 = 140
  const translatePct = Math.min(activeIndex * panelPct, maxTranslate);

  return (
    <div className="overflow-hidden rounded-[1.25rem] border border-[rgb(255_255_255/0.07)]">
      {/* Header strip */}
      <div className="border-b border-[rgb(255_255_255/0.07)] px-7 py-3 md:px-8">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[rgb(255_232_186_/_0.72)]">
          New AI-native workflow
        </p>
      </div>

      {/* Sliding track — overflow is clipped by the parent */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(-${translatePct}%)` }}
        >
          {workflowStages.map((stage, i) => (
            <div
              key={stage.id}
              className={cn(
                "w-[60%] shrink-0",
                "border-r border-[rgb(255_255_255/0.07)] last:border-r-0",
                "transition-opacity duration-500",
                i === activeIndex + 1 ? "opacity-60" : "opacity-100"
              )}
            >
              <StagePanel stage={stage} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation footer */}
      <div className="flex items-center justify-between border-t border-[rgb(255_255_255/0.07)] px-7 py-4 md:px-8">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {workflowStages.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(Math.min(i, maxIndex))}
              aria-label={`Go to stage ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeIndex
                  ? "w-5 bg-[rgb(255_232_186)]"
                  : "w-1.5 bg-[rgb(255_255_255/0.18)] hover:bg-[rgb(255_255_255/0.35)]"
              )}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous stage"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(255_255_255/0.12)] text-white/60 transition-all duration-200 hover:border-[rgb(255_255_255/0.28)] hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={next}
            disabled={activeIndex >= maxIndex}
            aria-label="Next stage"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgb(255_255_255/0.12)] text-white/60 transition-all duration-200 hover:border-[rgb(255_255_255/0.28)] hover:text-white disabled:cursor-not-allowed disabled:opacity-25"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
