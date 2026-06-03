"use client";

import RevealSection from "../motion/RevealSection";
import SplitReveal from "../motion/SplitReveal";

export type ContentBlockProps = {
  eyebrow?: string;
  title?: string;
  /** One or more paragraphs */
  body: string | string[];
  tone?: "light" | "dark";
  /** Wide max-width content (default: 720px). Pass "full" for content using grid layouts inside. */
  width?: "narrow" | "default" | "wide";
  /** Children render below body for richer compositions */
  children?: React.ReactNode;
};

const widthMap: Record<string, string> = {
  narrow: "max-w-[640px]",
  default: "max-w-[820px]",
  wide: "max-w-[980px]",
};

/**
 * Single-column text block. Alternate `tone` for visual rhythm.
 */
export default function ContentBlock({
  eyebrow,
  title,
  body,
  tone = "light",
  width = "default",
  children,
}: ContentBlockProps) {
  const dark = tone === "dark";
  const sectionClass = dark
    ? "about-noise bg-fg py-section-py overflow-hidden relative"
    : "bg-bg py-section-py overflow-hidden";
  const eyebrowColor = dark ? "rgba(198,177,128,0.95)" : "rgba(198,177,128,1)";
  const titleColor = dark ? "text-bg" : "text-fg";
  const bodyColor = dark ? "rgba(245,244,239,0.65)" : "rgba(42,41,40,0.7)";

  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
        <div className={widthMap[width]}>
          {eyebrow && (
            <RevealSection>
              <p
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase mb-s4 font-sans"
                style={{ color: eyebrowColor }}
              >
                <span className="w-6 h-px" style={{ background: eyebrowColor }} />
                {eyebrow}
              </p>
            </RevealSection>
          )}
          {title && (
            <SplitReveal
              text={title}
              as="h2"
              className={`text-fluid-3xl ${titleColor} font-serif tracking-tight leading-[1.12]`}
            />
          )}
          {paragraphs.map((p, i) => (
            <RevealSection key={i} delay={0.1 + i * 0.05}>
              <p
                className="text-fluid-base leading-relaxed mt-s5"
                style={{ color: bodyColor }}
              >
                {p}
              </p>
            </RevealSection>
          ))}
          {children && <div className="mt-s6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
