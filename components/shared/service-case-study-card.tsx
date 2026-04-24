"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";
import { Badge } from "@/components/ui/badge";

type ServiceCaseStudyCardProps = {
  caseStudy: DigitalMarketingCaseStudy;
  /** Called when the user clicks anywhere on the card to open the preview modal. */
  onOpenPreview?: () => void;
};

const easeOut = [0.22, 1, 0.36, 1] as const;

/**
 * Shared card for all three service pages (DM, UI/UX, AI Engineering).
 * Matches reference spec: white bg, 36px radius, 32/24/24 padding, 10px gap, 545px height.
 *
 * Uses a <div role="button"> wrapper so a <button> (expand icon) can live
 * inside without creating invalid nested <button> HTML.
 */
export function ServiceCaseStudyCard({
  caseStudy,
  onOpenPreview,
}: ServiceCaseStudyCardProps) {
  const { title, description, category, thumbnailSrc, services } = caseStudy;
  const shouldReduceMotion = useReducedMotion();

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpenPreview?.();
    }
  }

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.012 }}
      transition={{ duration: 0.28, ease: easeOut }}
      className="group h-full"
    >
      {/* White card matching reference: bg white, 36px radius, 545px height */}
      <div
        className="flex h-full min-h-[545px] cursor-pointer flex-col overflow-hidden rounded-[36px] border border-slate-100 bg-white shadow-[0_2px_24px_rgba(15,23,42,0.06)]"
        onClick={onOpenPreview}
      >
        {/* Content section — padding: 32px 24px 24px, gap: 10px */}
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-label={`Preview ${title} case study`}
          className="flex flex-col gap-[10px] px-6 pb-6 pt-8 text-left"
        >
          {/* Eyebrow + expand icon row */}
          <div className="flex items-start justify-between gap-3">
            <p className="text-label-sm uppercase tracking-[0.22em] text-(--color-text-tertiary)">
              {category}
            </p>

            {/* Expand icon — aria-hidden visual only, parent div captures click */}
            <div
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-[0.75rem] border border-slate-200/90 bg-white text-(--neutral-500) shadow-[0_8px_20px_rgba(11,15,25,0.06)]"
            >
              <Maximize2 className="size-4" />
            </div>
          </div>

          {/* Title + description */}
          <div className="space-y-2">
            <h3 className="text-[clamp(1.4rem,2vw,1.75rem)] leading-[1.06] tracking-[-0.032em] text-(--neutral-950)">
              {title}
            </h3>
            <p className="text-body-md max-w-[40ch] text-(--color-text-secondary)">
              {description}
            </p>
          </div>

          {/* Service tag pills — show services array, fallback to category */}
          <div className="flex flex-wrap gap-2">
            {services && services.length > 0
              ? services.map((service) => (
                  <Badge key={service} variant="service">
                    {service}
                  </Badge>
                ))
              : <Badge variant="service">{category}</Badge>
            }
          </div>
        </div>

        {/* Thumbnail image — mt-auto fills remaining height (~55% of 545px ≈ 300px) */}
        <div className="relative mt-auto h-[18rem] w-full shrink-0 overflow-hidden sm:h-[19rem]">
          {thumbnailSrc ? (
            <Image
              src={thumbnailSrc}
              alt={`${title} preview`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <div className="h-full w-full bg-[linear-gradient(135deg,rgba(88,41,199,0.14),rgba(255,202,45,0.10))]" />
          )}
        </div>
      </div>
    </motion.div>
  );
}
