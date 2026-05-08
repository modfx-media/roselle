"use client";

import RevealSection from "../motion/RevealSection";
import SplitReveal from "../motion/SplitReveal";

export type FeatureCard = {
  title: string;
  description: string;
  href?: string;
  icon?: string;
  image?: string;
};

export type FeatureGridProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  cards: FeatureCard[];
  /** Number of columns at desktop. Default: 3. */
  cols?: 2 | 3 | 4;
  tone?: "light" | "dark";
};

/**
 * RxWellness-style icon/feature card grid.
 */
export default function FeatureGrid({
  eyebrow,
  title,
  intro,
  cards,
  cols = 3,
  tone = "light",
}: FeatureGridProps) {
  const dark = tone === "dark";
  const sectionClass = dark
    ? "about-noise bg-fg py-section-py overflow-hidden relative"
    : "bg-bg py-section-py overflow-hidden";
  const eyebrowColor = dark ? "rgba(198,177,128,0.95)" : "rgba(198,177,128,1)";
  const titleColor = dark ? "text-bg" : "text-fg";
  const introColor = dark ? "rgba(245,244,239,0.65)" : "rgba(42,41,40,0.7)";
  const cardBg = dark
    ? "rgba(245,244,239,0.04)"
    : "rgba(255,255,255,0.65)";
  const cardBorder = dark
    ? "1px solid rgba(245,244,239,0.08)"
    : "1px solid rgba(42,41,40,0.08)";
  const cardHoverBorder = dark
    ? "rgba(198,177,128,0.4)"
    : "rgba(198,177,128,0.5)";
  const cardTitleColor = dark ? "text-bg" : "text-fg";
  const cardDescColor = dark ? "rgba(245,244,239,0.6)" : "rgba(42,41,40,0.65)";

  const colsClass =
    cols === 4
      ? "grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1"
      : cols === 2
      ? "grid-cols-2 max-md:grid-cols-1"
      : "grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1";

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
        <div className="max-w-[820px] mb-s10">
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
          <SplitReveal
            text={title}
            as="h2"
            className={`text-fluid-3xl ${titleColor} font-serif tracking-tight leading-[1.12]`}
          />
          {intro && (
            <RevealSection delay={0.1}>
              <p
                className="text-fluid-base leading-relaxed mt-s5"
                style={{ color: introColor }}
              >
                {intro}
              </p>
            </RevealSection>
          )}
        </div>

        <div className={`grid ${colsClass} gap-s5`}>
          {cards.map((c, i) => {
            const Wrapper: React.ElementType = c.href ? "a" : "div";
            const wrapperProps = c.href ? { href: c.href } : {};
            return (
              <RevealSection key={i} delay={i * 0.05}>
                <Wrapper
                  {...wrapperProps}
                  className="group block h-full p-s5 rounded-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: cardBg,
                    border: cardBorder,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLElement>) =>
                    (e.currentTarget.style.borderColor = cardHoverBorder)
                  }
                  onMouseLeave={(e: React.MouseEvent<HTMLElement>) =>
                    (e.currentTarget.style.borderColor = dark
                      ? "rgba(245,244,239,0.08)"
                      : "rgba(42,41,40,0.08)")
                  }
                >
                  {c.image ? (
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-s4">
                      <img
                        src={c.image}
                        alt={c.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full grid place-items-center text-xl mb-s4"
                      style={{
                        background: "rgba(198,177,128,0.15)",
                        border: "1px solid rgba(198,177,128,0.4)",
                        color: "rgba(198,177,128,1)",
                      }}
                    >
                      {c.icon || String(i + 1).padStart(2, "0")}
                    </div>
                  )}
                  <h3
                    className={`text-fluid-xl ${cardTitleColor} font-serif tracking-tight leading-snug mb-s3`}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-fluid-base leading-relaxed"
                    style={{ color: cardDescColor }}
                  >
                    {c.description}
                  </p>
                  {c.href && (
                    <p
                      className="mt-s4 text-sm font-medium tracking-wide flex items-center gap-2 transition-colors duration-200 group-hover:gap-3"
                      style={{ color: "rgba(198,177,128,1)" }}
                    >
                      Learn more <span>→</span>
                    </p>
                  )}
                </Wrapper>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
