import Image from "next/image";

import type { StudioHomepageTestimonialsContent } from "@/components/studio/studio-homepage-content";
import {
  StudioPageContainer,
  StudioPageRails,
} from "@/components/studio/studio-page-shell";

function getLogoForAttribution(attribution: string): string | undefined {
  const s = attribution.toLowerCase();
  if (s.includes("tvam")) return "/assets/tvam/logo.svg";
  if (s.includes("solitude")) return "/logos/solitude-farm.svg";
  if (s.includes("matrimandir")) return "/logos/matrimandir.svg";
  if (s.includes("indic")) return "/logos/indic.svg";
  if (s.includes("bevolve")) return "/assets/bevolve/logo.svg";
  if (s.includes("kittykat") || s.includes("kitty kat")) return "/assets/KK/logo.svg";
  if (s.includes("quilt")) return "/logos/quilt.ai.svg";
  if (s.includes("aeronautics")) return "/assets/general-aeronautics/logo.svg";
  if (s.includes("ageshift") || s.includes("age shift")) return "/assets/ageshift/logo.svg";
  if (s.includes("maatram")) return "/logos/maatram.svg";
  if (s.includes("hemplanet")) return "/logos/hemplanet.svg";
  if (s.includes("northsouth") || s.includes("north south") || s.includes("nsf")) return "/logos/nsf.svg";
  return undefined;
}

function getAttributionBadgeStyle(attribution: string) {
  const s = attribution.toLowerCase();

  // TVAM uses a warmer orange badge pulled from the app icon.
  if (s.includes("tvam")) {
    return {
      backgroundColor: "rgba(242, 125, 66, 0.08)",
      borderColor: "rgba(242, 125, 66, 0.22)",
      color: "#d96d35",
    };
  }

  // A warm terracotta tone ties the Solitude badge back to the hand-drawn logo.
  if (s.includes("solitude")) {
    return {
      backgroundColor: "rgba(193, 110, 91, 0.08)",
      borderColor: "rgba(193, 110, 91, 0.24)",
      color: "#b86a58",
    };
  }

  // Indic-AI carries a soft brand blue in the mark and wordmark.
  if (s.includes("indic")) {
    return {
      backgroundColor: "rgba(132, 171, 224, 0.08)",
      borderColor: "rgba(132, 171, 224, 0.24)",
      color: "#5f86bf",
    };
  }

  // Matrimandir reads best with a muted stone tint from the logo artwork.
  if (s.includes("matrimandir")) {
    return {
      backgroundColor: "rgba(153, 145, 130, 0.08)",
      borderColor: "rgba(153, 145, 130, 0.22)",
      color: "#817765",
    };
  }

  // NorthSouth uses a restrained teal pulled from the brand palette.
  if (s.includes("northsouth") || s.includes("north south") || s.includes("nsf")) {
    return {
      backgroundColor: "rgba(74, 148, 153, 0.08)",
      borderColor: "rgba(74, 148, 153, 0.22)",
      color: "#3f8d93",
    };
  }

  return undefined;
}

type StudioTestimonialsProps = {
  content: StudioHomepageTestimonialsContent;
};

function renderFeaturedQuote(quote: string) {
  const highlightedPhrases = ["deep understanding", "strengthened our brand"];
  const normalizedQuote = quote.replace(/[“”]/g, '"');
  const lowerQuote = normalizedQuote.toLowerCase();
  const matches = highlightedPhrases
    .map((phrase) => {
      const start = lowerQuote.indexOf(phrase);
      return start >= 0 ? { phrase, start, end: start + phrase.length } : null;
    })
    .filter((match): match is { phrase: string; start: number; end: number } => Boolean(match))
    .sort((left, right) => left.start - right.start);

  if (matches.length === 0) {
    return normalizedQuote;
  }

  const segments: React.ReactNode[] = [];
  let cursor = 0;

  matches.forEach((match, index) => {
    if (cursor < match.start) {
      segments.push(normalizedQuote.slice(cursor, match.start));
    }

    segments.push(
      <span key={`${match.phrase}-${index}`} className="text-[var(--color-text-brand)]">
        {normalizedQuote.slice(match.start, match.end)}
      </span>,
    );
    cursor = match.end;
  });

  if (cursor < normalizedQuote.length) {
    segments.push(normalizedQuote.slice(cursor));
  }

  return segments;
}

// The testimonials section turns direct client quotes into a dedicated trust layer before visitors hit the deeper work grid.
export function StudioTestimonials({ content }: StudioTestimonialsProps) {
  if (content.items.length === 0) {
    return null;
  }

  const [featuredTestimonial, ...secondaryTestimonials] = content.items;
  const featuredLogo = featuredTestimonial.attribution
    ? getLogoForAttribution(featuredTestimonial.attribution)
    : undefined;
  const featuredBadgeStyle = featuredTestimonial.attribution
    ? getAttributionBadgeStyle(featuredTestimonial.attribution)
    : undefined;

  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      {/* The background stays aligned with the homepage's light editorial system while preserving the testimonial layout hierarchy. */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.042)_1px,transparent_1px)] bg-[size:120px_100%]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(148,163,184,0.021)_1px,transparent_1px)] bg-[size:100%_120px]" />
        <div className="absolute left-[-10rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(88,41,199,0.12)_0%,rgba(88,41,199,0)_72%)] blur-3xl" />
        <div className="absolute right-[-12rem] bottom-[-10rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(255,202,45,0.16)_0%,rgba(255,202,45,0)_72%)] blur-3xl" />
        <StudioPageRails />
      </div>

      <StudioPageContainer className="relative z-10 flex flex-col gap-10">
        {/* The intro keeps the same editorial hierarchy as the other homepage sections. */}
        <div className="max-w-6xl space-y-5 lg:pl-10 xl:pl-14">
          <p className="text-label-sm uppercase tracking-[0.22em] text-[var(--color-text-tertiary)]">
            {content.eyebrow}
          </p>
          <h2
            className="max-w-5xl text-display-muted-editorial text-[var(--neutral-950)]"
            style={{ fontSize: "3.5rem", fontWeight: 600, wordSpacing: ".2rem" }}
          >
            <strong style={{ fontWeight: "inherit" }}>{content.headline}</strong>
          </h2>
        </div>

        {/* The featured proof quote sits directly on the page so it reads like an editorial pull-quote instead of a card. */}
        <article className="lg:mx-10 xl:mx-14">
          <div className="space-y-6 px-6 py-2 md:px-8 lg:px-10">
            <p className="max-w-[75ch] font-display text-[2rem] leading-[1.02] tracking-[-0.04em] text-[var(--neutral-950)] sm:text-[2.2rem] md:text-[2.45rem]">
              <span className="mr-2 inline-block align-top text-[0.9em] leading-none text-[var(--neutral-900)]">
                &ldquo;
              </span>
              {renderFeaturedQuote(featuredTestimonial.quote)}&rdquo;
            </p>

            {/* The attribution stays understated so the quote remains the first thing visitors read. */}
            <div className="flex flex-col items-start gap-5 pt-1 sm:flex-row sm:items-end sm:gap-7">
              <div className="flex shrink-0 justify-start">
                {featuredTestimonial.attribution && featuredLogo ? (
                  <Image
                    src={featuredLogo}
                    alt={featuredTestimonial.attribution}
                    width={176}
                    height={80}
                    className="h-[4rem] w-auto max-w-[10rem] object-contain object-left opacity-75"
                  />
                ) : null}
              </div>

              <div className="min-w-0 flex-1 space-y-3 self-start sm:self-center">
                <h3 className="text-heading-md text-[var(--neutral-950)]">
                  {featuredTestimonial.name}
                </h3>
                {featuredTestimonial.attribution ? (
                  <p
                    className="text-label-sm uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] [overflow-wrap:anywhere]"
                    style={
                      featuredBadgeStyle
                        ? { color: featuredBadgeStyle.color }
                        : undefined
                    }
                  >
                    {featuredTestimonial.attribution}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </article>

        {/* The remaining testimonials stay grouped in the grid as supporting proof. */}
        {secondaryTestimonials.length > 0 ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white lg:mx-10 xl:mx-14">
            <div className="relative grid lg:grid-cols-2">
              {secondaryTestimonials.map((entry, index) => {
                const totalRows = Math.ceil(secondaryTestimonials.length / 2);
                const rowIndex = Math.floor(index / 2);
                const isLeftColumn = index % 2 === 0;
                const hasBottomBorder = rowIndex < totalRows - 1;
                const isLastOddCard =
                  secondaryTestimonials.length % 2 === 1 &&
                  index === secondaryTestimonials.length - 1;
                const logoSrc = entry.attribution
                  ? getLogoForAttribution(entry.attribution)
                  : undefined;
                const badgeStyle = entry.attribution
                  ? getAttributionBadgeStyle(entry.attribution)
                  : undefined;

                return (
                  <article
                    key={`${entry.name}-${index}`}
                    className={[
                      "min-h-[15rem] space-y-5 px-6 py-7 md:px-8 md:py-8",
                      hasBottomBorder ? "border-b border-slate-200/80" : "",
                      isLeftColumn && !isLastOddCard
                        ? "lg:border-r lg:border-slate-200/80"
                        : "",
                      isLastOddCard ? "lg:col-span-2" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <p className="max-w-[32rem] text-body-md font-medium italic text-[var(--neutral-700)]">
                      &ldquo;{entry.quote}&rdquo;
                    </p>

                    {/* The attribution block stacks on mobile so long names and badges never widen the card past the viewport. */}
                    <div className="flex flex-col items-start gap-5 pt-2 sm:flex-row sm:items-end sm:gap-6">
                      <div className="flex shrink-0 justify-start">
                        {entry.attribution && logoSrc ? (
                          <Image
                            src={logoSrc}
                            alt={entry.attribution}
                            width={165}
                            height={72}
                            className="h-[4.5rem] w-auto max-w-[9.75rem] object-contain object-left opacity-80"
                          />
                        ) : null}
                      </div>

                      <div className="min-w-0 flex-1 space-y-2 self-start sm:self-center">
                        <h3 className="text-heading-sm text-[var(--neutral-900)]">
                          {entry.name}
                        </h3>
                        {entry.attribution ? (
                          <div
                            className="inline-flex max-w-full rounded-full border border-white/80 bg-white/90 px-3 py-1 backdrop-blur-sm"
                            style={badgeStyle}
                          >
                            <p
                              className="text-label-sm uppercase tracking-[0.18em] text-[var(--color-text-tertiary)] [overflow-wrap:anywhere]"
                              style={badgeStyle ? { color: badgeStyle.color } : undefined}
                            >
                              {entry.attribution}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : null}
      </StudioPageContainer>
    </section>
  );
}
