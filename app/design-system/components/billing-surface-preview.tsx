import Image from "next/image";
import { ArrowUpRight, Maximize2 } from "lucide-react";

import { PremiumSurface, type PremiumSurfaceProps } from "@/components/ui/premium-surface";

const gradientMockVariants: Array<{
  eyebrow: string;
  title: string;
  description: string;
  mockFrameClassName: string;
  mockImageClassName: string;
  note: string;
  noteAccentClassName: string;
  tone: NonNullable<PremiumSurfaceProps["tone"]>;
}> = [
  {
    eyebrow: "Aurora blend",
    title: "Reference-balanced",
    description: "Closest to the original energy balance, now used as a neutral backdrop for the actual GA product mock.",
    mockFrameClassName: "mx-auto w-full max-w-[13.5rem] rounded-[2rem] border border-white/72 bg-white/66 p-3 shadow-[0_24px_70px_rgba(15,23,42,0.16)] backdrop-blur-sm",
    mockImageClassName: "rounded-[1.45rem]",
    note: "Best default for high-trust product hero cards",
    noteAccentClassName: "bg-[rgba(245,243,255,0.88)] text-[var(--purple-500)]",
    tone: "billing",
  },
  {
    eyebrow: "Sunrise lift",
    title: "Warmer launch card",
    description: "Adds more yellow-orange momentum around the mock for launch banners, promos, and CTA-heavy storytelling.",
    mockFrameClassName: "mx-auto w-full max-w-[13.8rem] rounded-[2.2rem] border border-white/72 bg-[rgba(255,255,255,0.62)] p-3 shadow-[0_30px_86px_rgba(240,78,40,0.18)] backdrop-blur-sm rotate-[-4deg] origin-bottom",
    mockImageClassName: "rounded-[1.55rem]",
    note: "Best for bolder feature launches and campaign sections",
    noteAccentClassName: "bg-[rgba(255,248,234,0.92)] text-[color:color-mix(in_srgb,var(--orange-500)_72%,var(--purple-500))]",
    tone: "billingSunrise",
  },
  {
    eyebrow: "Prism drift",
    title: "Cooler product card",
    description: "Leans more technical and product-forward with cooler support hues around the same mock specimen.",
    mockFrameClassName: "mx-auto w-full max-w-[13.75rem] rounded-[2.1rem] border border-white/72 bg-[rgba(255,255,255,0.64)] p-3 shadow-[0_28px_82px_rgba(43,183,199,0.16)] backdrop-blur-sm",
    mockImageClassName: "rounded-[1.5rem] saturate-[1.03]",
    note: "Best for product-system and technical capability stories",
    noteAccentClassName: "bg-[rgba(237,249,251,0.92)] text-[color:color-mix(in_srgb,var(--cyan-500)_72%,var(--purple-500))]",
    tone: "billingPrism",
  },
];

type GradientMockCardProps = (typeof gradientMockVariants)[number];

// This shared specimen keeps the mock constant so the review stays focused on the gradient and framing differences.
function GradientMockCard({ description, eyebrow, mockFrameClassName, mockImageClassName, note, noteAccentClassName, title, tone }: GradientMockCardProps) {
  return (
    <PremiumSurface tone={tone} elevation="lg" blur="none" radius="xl" className="min-h-[760px] p-5 sm:p-6 md:p-7">
      {/* These internal glow layers keep the lower-half color field vivid even once a real mock is placed on top. */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
        <div className="absolute inset-x-[12%] top-[12%] h-[24%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.5)_42%,transparent_76%)] blur-3xl" />
        <div className="absolute -left-[14%] bottom-[14%] h-[38%] w-[42%] rounded-full bg-[radial-gradient(circle,rgba(255,202,45,0.44)_0%,rgba(249,169,31,0.26)_40%,transparent_76%)] blur-3xl" />
        <div className="absolute left-[20%] right-[18%] bottom-[-6%] h-[42%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.48)_0%,rgba(139,92,246,0.26)_38%,transparent_76%)] blur-3xl" />
        <div className="absolute -right-[10%] bottom-[8%] h-[34%] w-[36%] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.34)_0%,rgba(43,183,199,0.18)_40%,transparent_74%)] blur-3xl" />
      </div>

      <div className="relative z-10 flex h-full flex-col gap-6">
        {/* The card header names each direction before the user compares the framed mock. */}
        <div className="space-y-2">
          <p className="text-label-sm uppercase tracking-[0.22em] text-[var(--color-text-tertiary)]">{eyebrow}</p>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <h3 className="text-heading-md text-foreground">{title}</h3>
              <p className="max-w-[34ch] text-body-sm text-[var(--color-text-secondary)]">{description}</p>
            </div>

            <div className={`flex size-11 shrink-0 items-center justify-center rounded-[var(--ds-radius-xl)] shadow-[0_10px_28px_rgba(88,41,199,0.08)] ${noteAccentClassName}`}>
              <Maximize2 className="size-4" />
            </div>
          </div>
        </div>

        {/* The image stage replaces the billing placeholder with the real GA cover mock. */}
        <div className="mt-auto space-y-5">
          <div className="flex min-h-[460px] items-end justify-center px-4 pb-2 pt-8 sm:px-6">
            <div className={mockFrameClassName}>
            <div className="overflow-hidden rounded-[1.6rem] bg-[rgba(17,24,39,0.05)]">
              <Image
                src="/assets/GA_cover.png"
                alt="General Aeronautics mobile product mock"
                width={402}
                height={804}
                className={`h-auto w-full ${mockImageClassName}`}
                priority={false}
              />
            </div>
          </div>
          </div>

          {/* The note row shows intended usage so the variants are actionable system options rather than just visual experiments. */}
          <PremiumSurface tone="neutral" elevation="sm" blur="none" radius="lg" className="mx-auto flex w-full max-w-[30rem] items-center justify-between gap-3 border-white/70 bg-white/88 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
            <p className="text-body-sm text-[var(--color-text-secondary)]">{note}</p>
            <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${noteAccentClassName}`}>
              <ArrowUpRight className="size-4" />
            </span>
          </PremiumSurface>
        </div>
      </div>
    </PremiumSurface>
  );
}

// This preview compares three gradient directions around a real mock so the design system evaluates true production-style usage.
export function BillingSurfacePreview() {
  return (
    <section className="space-y-6">
      {/* The section intro clarifies that the gradients are wrappers for product mocks, not billing-specific UI. */}
      <div className="max-w-4xl space-y-2">
        <p className="text-label-sm uppercase tracking-[0.22em] text-[var(--color-text-tertiary)]">Premium / Gradient mock cards</p>
        <h2 className="text-heading-lg text-foreground">Three image-led directions</h2>
        <p className="text-body-md text-muted-foreground">
          The billing layout was only a placeholder. These three directions now test the same gradient surfaces with a real General Aeronautics mock so the system reflects actual studio presentation needs.
        </p>
      </div>

      {/* The responsive grid keeps the variants comparable at a glance while still collapsing cleanly on smaller screens. */}
      <div className="grid gap-6 xl:grid-cols-3">
        {gradientMockVariants.map((variant) => (
          <GradientMockCard key={variant.eyebrow} {...variant} />
        ))}
      </div>
    </section>
  );
}
