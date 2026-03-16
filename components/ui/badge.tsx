import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { premiumSurfaceVariants } from "@/components/ui/premium-surface";
import { cn } from "@/lib/utils";

// Keep badge styles centralized so proof tags and future chips share one contract.
const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/20 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border text-foreground",
        service: "px-3 py-1.5 text-label-sm text-[var(--color-text-glass-pill)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const isService = variant === "service";

  return (
    <div
      className={cn(
        isService
          ? premiumSurfaceVariants({
              tone: "glassPillSubtle",
              elevation: "sm",
              blur: "md",
              radius: "full",
            })
          : badgeVariants({ variant }),
        badgeVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
