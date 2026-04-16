"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

// ── ScrollReveal ──────────────────────────────────────────────────────────────
// Fades + slides children up when they cross into the viewport.
export function ScrollReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("transition-[opacity,transform] ease-out", className)}
      style={{
        transitionDuration: "640ms",
        transitionDelay: visible ? `${delay}ms` : "0ms",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(20px)",
      }}
    >
      {children}
    </div>
  );
}

// ── useCardGlow ───────────────────────────────────────────────────────────────
// Cursor-tracking spotlight: returns a ref for the wrapper + a style for the
// glow overlay div that lives INSIDE the PremiumSurface (which clips it via
// its own overflow-hidden).
export function useCardGlow(color = "rgba(88,41,199,0.10)") {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const onMouseLeave = useCallback(() => setPos(null), []);

  const overlayStyle: CSSProperties = {
    opacity: pos ? 1 : 0,
    background: pos
      ? `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 65%)`
      : undefined,
    transition: "opacity 260ms ease, background 60ms linear",
  };

  return { wrapRef, onMouseMove, onMouseLeave, overlayStyle };
}

// ── GlowOverlay ───────────────────────────────────────────────────────────────
// Drop this as the first child inside any PremiumSurface to render the glow.
export function GlowOverlay({ style }: { style: CSSProperties }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10"
      style={style}
    />
  );
}

// ── AnimatedHeroWords ─────────────────────────────────────────────────────────
// Renders the hero h1 with each word entering like AI-generated text.
export function AnimatedHeroWords({
  lineOne,
  lineTwo,
}: {
  lineOne: string;
  lineTwo: string;
}) {
  const wordsOne = lineOne.split(" ");
  const wordsTwo = lineTwo.split(" ");

  return (
    <h1 className="max-w-5xl text-hero-display text-[var(--neutral-950)]">
      {wordsOne.map((word, i) => (
        <span
          key={`a-${i}`}
          className="ai-word-reveal inline-block"
          style={{ animationDelay: `${60 + i * 75}ms` }}
        >
          {word}
          {i < wordsOne.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
      <br />
      {wordsTwo.map((word, i) => (
        <span
          key={`b-${i}`}
          className="ai-word-reveal inline-block"
          style={{ animationDelay: `${60 + (wordsOne.length + i) * 75}ms` }}
        >
          {word}
          {i < wordsTwo.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </h1>
  );
}

// ── AnimatedHeroSupport ───────────────────────────────────────────────────────
// Fades in the hero description with a delay after the title finishes.
export function AnimatedHeroSupport({
  text,
  totalWords,
}: {
  text: string;
  totalWords: number;
}) {
  // Delay = last word delay + its duration + small gap
  const delayMs = 60 + totalWords * 75 + 120;

  return (
    <p
      className="ai-word-reveal max-w-4xl text-hero-support text-[var(--color-text-secondary)]"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {text}
    </p>
  );
}

// ── HeroPulseRings ────────────────────────────────────────────────────────────
// Three slow concentric rings that pulse outward — atmospheric AI "radar" feel.
export function HeroPulseRings({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute size-28 opacity-25",
        className
      )}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute inset-0 rounded-full border border-[var(--purple-500)]"
          style={{
            animation: `ai-pulse-ring 3.8s cubic-bezier(0, 0, 0.2, 1) ${i * 1.26}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
