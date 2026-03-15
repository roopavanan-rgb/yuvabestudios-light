import type { MouseEvent } from "react";
import Link from "next/link";
import { Maximize2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StudioCaseStudyExpandButtonProps = {
  title: string;
  href?: string;
  onOpenDetails?: () => void;
  containerClassName?: string;
  stopPropagation?: boolean;
};

// This shared action keeps the expand button shell, icon sizing, and interaction pattern consistent across case-study cards.
export function StudioCaseStudyExpandButton({
  title,
  href,
  onOpenDetails,
  containerClassName,
  stopPropagation = false,
}: StudioCaseStudyExpandButtonProps) {
  const canOpenDetails = Boolean(onOpenDetails);

  // This click handler optionally stops parent-card gestures before opening the shared detail affordance.
  function handleOpenDetails(event?: MouseEvent<HTMLButtonElement>) {
    if (stopPropagation) {
      event?.stopPropagation();
    }

    onOpenDetails?.();
  }

  if (href) {
    return (
      <div
        className={cn(
          "shrink-0 rounded-[1rem] border border-[rgba(209,213,219,0.9)] bg-[rgba(255,255,255,0.96)] text-[rgb(75,85,99)] shadow-[0_8px_20px_rgba(11,15,25,0.06)]",
          containerClassName,
        )}
      >
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="size-12 rounded-[1rem] border-0 bg-transparent text-current shadow-none cursor-pointer hover:bg-transparent sm:size-14"
        >
          <Link href={href} aria-label={`Open ${title} case study`}>
            <Maximize2 className="size-4" />
          </Link>
        </Button>
      </div>
    );
  }

  if (!canOpenDetails) {
    return null;
  }

  return (
    <div
      className={cn(
        "shrink-0 rounded-[1rem] border border-[rgba(209,213,219,0.9)] bg-[rgba(255,255,255,0.96)] text-[rgb(75,85,99)] shadow-[0_8px_20px_rgba(11,15,25,0.06)]",
        containerClassName,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleOpenDetails}
        className="size-12 rounded-[1rem] border-0 bg-transparent text-current shadow-none cursor-pointer hover:bg-transparent sm:size-14"
        aria-label={`Open ${title} case study details`}
      >
        <Maximize2 className="size-4" />
      </Button>
    </div>
  );
}
