"use client";

import RevealSection from "../motion/RevealSection";
import SplitReveal from "../motion/SplitReveal";
import GsapImageParallax from "../motion/GsapImageParallax";

export type FeatureSplitProps = {
  eyebrow?: string;
  title: string;
  /** Body copy paragraphs */
  body: string | string[];
  /** Optional bullet list rendered after body */
  bullets?: string[];
  /** Image URL */
  image: string;
  imageAlt: string;
  /** Reverse to put image on the left */
  reverse?: boolean;
  /** Light section (cream bg) or dark (fg bg). Default: light. */
  tone?: "light" | "dark";
};

/**
 * RxWellness-style 2-column split: text + soft rounded image card.
 */
export default function FeatureSplit({
  eyebrow,
  title,
  body,
  bullets,
  image,
  imageAlt,
  reverse = false,
  tone = "light",
}: FeatureSplitProps) {
  const dark = tone === "dark";
  const sectionClass = dark
    ? "about-noise bg-fg py-section-py overflow-hidden relative"
    : "bg-bg py-section-py overflow-hidden";
  const eyebrowColor = dark ? "rgba(198,177,128,0.95)" : "rgba(198,177,128,1)";
  const titleColor = dark ? "text-bg" : "text-fg";
  const bodyColor = dark ? "rgba(245,244,239,0.65)" : "rgba(42,41,40,0.7)";
  const bulletDot = dark ? "rgba(198,177,128,0.95)" : "rgba(198,177,128,1)";
  const bulletColor = dark ? "rgba(245,244,239,0.78)" : "rgba(42,41,40,0.78)";

  const paragraphs = Array.isArray(body) ? body : [body];

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
        <div
          className={`grid grid-cols-[1.05fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8 ${
            reverse ? "[&>*:first-child]:order-2 max-[900px]:[&>*:first-child]:order-1" : ""
          }`}
        >
          <div>
            {eyebrow && (
              <RevealSection>
                <p
                  className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase mb-s4 font-sans"
                  style={{ color: eyebrowColor }}
                >
                  <span
                    className="w-6 h-px"
                    style={{ background: eyebrowColor }}
                  />
                  {eyebrow}
                </p>
              </RevealSection>
            )}
            <SplitReveal
              text={title}
              as="h2"
              className={`text-fluid-3xl ${titleColor} font-serif tracking-tight leading-[1.12] max-w-[28ch]`}
            />
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
            {bullets && bullets.length > 0 && (
              <RevealSection delay={0.2}>
                <ul className="mt-s6 flex flex-col gap-s3">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-s3 items-start text-fluid-base leading-relaxed"
                      style={{ color: bulletColor }}
                    >
                      <span
                        className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ background: bulletDot }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </RevealSection>
            )}
          </div>

          <RevealSection delay={0.15}>
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                boxShadow: dark
                  ? "0 20px 60px rgba(0,0,0,0.45)"
                  : "0 18px 48px rgba(42,41,40,0.18)",
              }}
            >
              <GsapImageParallax
                src={image}
                alt={imageAlt}
                className="w-full"
              />
              {/* Soft gold accent corner */}
              <div
                className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(198,177,128,0.5) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
