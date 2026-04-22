"use client";

import Image from "next/image";
import Link from "next/link";
import { Maximize2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PremiumSurface } from "@/components/ui/premium-surface";
import { cn } from "@/lib/utils";

type ServiceCaseStudyCardProps = {
  caseStudy: DigitalMarketingCaseStudy;
  /** Increases card height and title size for the featured (first) grid slot. */
  featured?: boolean;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Shared card for all three service pages (DM, UI/UX, AI Engineering).
 * Layout: eyebrow + icon top row → title → description → tag pill → image at bottom.
 * The image fills the card's lower section; content sits above with consistent padding.
 */
export function ServiceCaseStudyCard({
  caseStudy,
  featured = false,
}: ServiceCaseStudyCardProps) {
  const { slug, title, description, category, thumbnailSrc } = caseStudy;
  const shouldReduceMotion = useReducedMotion();
  const href = `/case-studies/${slug}`;

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.012 }}
      transition={{ duration: 0.28, ease: easeOut }}
      className="group h-full"
    >
      <PremiumSurface
        tone="glass"
        elevation="md"
        blur="sm"
        radius="xl"
        className="flex h-full flex-col overflow-hidden border-white/70 p-0"
      >
        {/* ── Content ─────────────────────────────────────────────────── */}
        <div
          className={cn(
            "flex flex-col gap-4",
            featured ? "p-6 sm:p-7 md:p-8" : "p-5 sm:p-6",
          )}
        >
          {/* Eyebrow + expand icon */}
          <div className="flex items-start justify-between gap-3">
            <p className="text-label-sm uppercase tracking-[0.22em] text-(--color-text-tertiary)">
              {category}
            </p>

            {/* Icon button keeps hover independent from card lift so it reads as a clear action. */}
            <div className="shrink-0 rounded-[0.75rem] border border-slate-200/90 bg-white/95 shadow-[0_8px_20px_rgba(11,15,25,0.06)]">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="size-10 rounded-[0.75rem] border-0 bg-transparent text-(--neutral-500) shadow-none hover:bg-white/60"
              >
                <Link href={href} aria-label={`Open ${title} case study`}>
                  <Maximize2 className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Title + description */}
          <div className="space-y-2">
            <h3
              className={cn(
                "leading-[1.06] tracking-[-0.032em] text-(--neutral-950)",
                featured
                  ? "text-[clamp(1.75rem,2.5vw,2.25rem)]"
                  : "text-[clamp(1.4rem,2vw,1.75rem)]",
              )}
            >
              {title}
            </h3>
            <p
              className={cn(
                "text-(--color-text-secondary)",
                featured ? "text-body-lg max-w-[52ch]" : "text-body-md max-w-[40ch]",
              )}
            >
              {description}
            </p>
          </div>

          {/* Category tag pill */}
          <div className="flex flex-wrap gap-2">
            <Badge variant="service">{category}</Badge>
          </div>
        </div>

        {/* ── Thumbnail image ──────────────────────────────────────────── */}
        {/* mt-auto pushes the image to the card's bottom edge, filling remaining height. */}
        <div
          className={cn(
            "relative mt-auto w-full overflow-hidden",
            featured
              ? "h-[11rem] sm:h-[13rem] md:h-[15rem]"
              : "h-[9.5rem] sm:h-[11rem]",
          )}
        >
          {thumbnailSrc ? (
            <Image
              src={thumbnailSrc}
              alt={`${title} preview`}
              fill
              sizes={featured ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,rgba(88,41,199,0.14),rgba(255,202,45,0.10))]" />
          )}
        </div>
      </PremiumSurface>
    </motion.article>
  );
}
