"use client";

import { motion } from "framer-motion";

import type { DigitalMarketingCaseStudy } from "@/components/digital-marketing/digital-marketing-content";
import { ServiceCaseStudyCard } from "@/components/shared/service-case-study-card";

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
 * Shared grid for all three service pages.
 * Layout: first item is a full-width featured card; remaining items fill a 2-column grid.
 * Stagger entry animation is orchestrated here; cards manage hover independently.
 */
export function ServiceCaseStudyGrid({ items }: ServiceCaseStudyGridProps) {
  const [featured, ...rest] = items;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className="grid gap-4 md:grid-cols-2"
    >
      {/* First card spans the full grid width at a larger size */}
      {featured && (
        <motion.div variants={itemVariants} className="md:col-span-2">
          <ServiceCaseStudyCard caseStudy={featured} featured />
        </motion.div>
      )}

      {/* Remaining cards fill the 2-column grid equally */}
      {rest.map((item) => (
        <motion.div
          key={item.slug}
          variants={itemVariants}
          className="flex h-full flex-col"
        >
          <ServiceCaseStudyCard caseStudy={item} />
        </motion.div>
      ))}
    </motion.div>
  );
}
