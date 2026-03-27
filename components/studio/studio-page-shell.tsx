import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type StudioPageContainerProps = ComponentPropsWithoutRef<"div">;

type StudioPageRailsProps = {
  className?: string;
  leftRailClassName?: string;
  rightRailClassName?: string;
};

// This shared container keeps every studio route on the same outer width and gutter contract.
export function StudioPageContainer({
  className,
  ...props
}: StudioPageContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}
      {...props}
    />
  );
}

// The companion rails reuse the same shell width so page dividers never drift from the content edge.
export function StudioPageRails({
  className,
  leftRailClassName,
  rightRailClassName,
}: StudioPageRailsProps) {
  return (
    <div
      className={cn(
        "absolute inset-y-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 px-6 md:block md:px-10",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-px bg-slate-200/80",
          leftRailClassName,
        )}
      />
      <div
        className={cn(
          "absolute inset-y-0 right-0 w-px bg-slate-200/80",
          rightRailClassName,
        )}
      />
    </div>
  );
}
