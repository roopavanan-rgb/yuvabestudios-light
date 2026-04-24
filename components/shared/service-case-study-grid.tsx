"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";
import { ServiceCaseStudyCard } from "@/components/shared/service-case-study-card";
import { ServiceCaseStudyPreviewDialog } from "@/components/shared/service-case-study-preview-dialog";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type ServiceCaseStudyGridProps = {
  items: DigitalMarketingCaseStudy[];
};

/**
 * Equal 2-column grid matching the reference design — all cards the same size.
 * Stagger entry animation orchestrated here; cards open a preview modal on click.
 */
export function ServiceCaseStudyGrid({ items }: ServiceCaseStudyGridProps) {
  const [activeItem, setActiveItem] = useState<DigitalMarketingCaseStudy | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  function handleOpenPreview(item: DigitalMarketingCaseStudy) {
    setActiveItem(item);
    setIsPreviewOpen(true);
  }

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {items.map((item) => (
          <motion.div
            key={item.slug}
            variants={itemVariants}
            className="flex h-full flex-col"
          >
            <ServiceCaseStudyCard
              caseStudy={item}
              onOpenPreview={() => handleOpenPreview(item)}
            />
          </motion.div>
        ))}
      </motion.div>

      <ServiceCaseStudyPreviewDialog
        caseStudy={activeItem}
        open={isPreviewOpen}
        onOpenChange={setIsPreviewOpen}
        onAfterClose={() => setActiveItem(null)}
      />
    </>
  );
}
