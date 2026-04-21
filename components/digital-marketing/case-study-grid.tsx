"use client";

import { motion } from "framer-motion";

import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";
import { CaseStudyCard } from "@/components/digital-marketing/case-study-card";

type CaseStudyGridProps = {
  items: DigitalMarketingCaseStudy[];
};

// This grid component owns responsive columns and stagger timing so case-study sections stay reusable.
export function CaseStudyGrid({ items }: CaseStudyGridProps) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
    >
      {items.map((item) => (
        <CaseStudyCard key={item.slug} caseStudy={item} />
      ))}
    </motion.div>
  );
}
