"use client";

import RevealSection from "../motion/RevealSection";
import SplitReveal from "../motion/SplitReveal";
import MagneticButton from "../motion/MagneticButton";

export type Crumb = { label: string; href?: string };

export type PageHeroProps = {
  /** Eyebrow pill text (small uppercase tag above the headline) */
  eyebrow?: string;
  /** Main headline text — uses SplitReveal */
  title: string;
  /** Optional secondary line displayed in italic gold serif at the end of the headline */
  titleAccent?: string;
  /** Subcopy below the title */
  subtitle?: string;
  /** Breadcrumb trail */
  crumbs?: Crumb[];
  /** Background image URL (full-bleed cinematic mode). When omitted, falls back to the dark gradient hero. */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Primary CTA */
  primaryCta?: { label: string; href: string; external?: boolean };
  /** Secondary ghost CTA */
  secondaryCta?: { label: string; href: string; external?: boolean };
  /** Optional video shown on the right side of the banner (e.g. Vimeo / YouTube embed URL) */
  video?: { src: string; title?: string };
  /** Reduced vertical padding (use on minor pages) */
  compact?: boolean;
};

/**
 * Modern full-bleed page hero.
 * - With `image`: cinematic Tony-Robbins style full-bleed image + dark overlays.
 * - Without `image`: keeps the existing gradient hero look so legacy pages still match.
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  crumbs,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  video,
  compact = false,
}: PageHeroProps) {
  const padTop = "calc(var(--spacing-nav-h) + 6rem)";
  const padBottom = compact ? "var(--spacing-s10)" : "var(--spacing-section-py)";

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: image ? "#091321" : undefined,
      }}
    >
      {/* Background — image or fallback gradient */}
      {image ? (
        <>
          <img
            src={image}
            alt={imageAlt || ""}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.55 }}
          />
          {/* Dark vertical gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,22,40,0.85) 0%, rgba(10,22,40,0.55) 35%, rgba(10,22,40,0.85) 100%)",
            }}
          />
          {/* Gold radial accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 50% at 80% 20%, rgba(198,177,128,0.18) 0%, transparent 70%)",
            }}
          />
        </>
      ) : (
        <>
          <div className="inner-hero-gradient absolute inset-0" />
          <div className="hero-grid-bg absolute inset-0" />
        </>
      )}

      <div
        className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4"
        style={{ paddingTop: padTop, paddingBottom: padBottom }}
      >
        <div
          className={video ? "page-hero-split" : ""}
          style={
            video
              ? {
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 520px)",
                  gap: "var(--spacing-s8)",
                  alignItems: "center",
                }
              : undefined
          }
        >
          <div>
        {crumbs && crumbs.length > 0 && (
          <RevealSection>
            <nav
              className="flex items-center flex-wrap gap-2 text-xs tracking-wide mb-s6"
              style={{ color: "rgba(245,244,239,0.45)" }}
            >
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  {c.href ? (
                    <a
                      href={c.href}
                      className="transition-colors duration-200 hover:text-accent"
                    >
                      {c.label}
                    </a>
                  ) : (
                    <span style={{ color: "rgba(245,244,239,0.7)" }}>{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <span>/</span>}
                </span>
              ))}
            </nav>
          </RevealSection>
        )}

        {eyebrow && (
          <RevealSection delay={0.05}>
            <span
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase mb-s5 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(198,177,128,0.12)",
                border: "1px solid rgba(198,177,128,0.35)",
                color: "rgba(198,177,128,0.95)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {eyebrow}
            </span>
          </RevealSection>
        )}

        <SplitReveal
          text={title}
          as="h1"
          className="text-fluid-5xl text-bg tracking-tight leading-[1.05] max-w-[18ch]"
        />

        {titleAccent && (
          <RevealSection delay={0.12}>
            <p
              className="text-fluid-4xl mt-s2 italic"
              style={{
                fontFamily: "var(--font-serif)",
                color: "rgba(198,177,128,0.95)",
                lineHeight: 1.05,
              }}
            >
              {titleAccent}
            </p>
          </RevealSection>
        )}

        {subtitle && (
          <RevealSection delay={0.18}>
            <p
              className="mt-s5 max-w-[640px] text-fluid-base leading-relaxed"
              style={{ color: "rgba(245,244,239,0.65)" }}
            >
              {subtitle}
            </p>
          </RevealSection>
        )}

        {(primaryCta || secondaryCta) && (
          <RevealSection delay={0.24}>
            <div className="mt-s10 flex flex-wrap items-center gap-s3">
              {primaryCta && (
                <MagneticButton
                  className="btn-primary"
                  onClick={() =>
                    primaryCta.external
                      ? window.open(primaryCta.href, "_blank", "noopener,noreferrer")
                      : (window.location.href = primaryCta.href)
                  }
                >
                  {primaryCta.label}
                </MagneticButton>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  target={secondaryCta.external ? "_blank" : undefined}
                  rel={secondaryCta.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm font-medium pl-2 pr-1 py-2 rounded-full transition-colors duration-200"
                  style={{ color: "rgba(245,244,239,0.85)" }}
                >
                  {secondaryCta.label}
                  <span
                    className="w-8 h-8 grid place-items-center rounded-full"
                    style={{
                      background: "rgba(198,177,128,0.18)",
                      border: "1px solid rgba(198,177,128,0.45)",
                    }}
                  >
                    →
                  </span>
                </a>
              )}
            </div>
          </RevealSection>
        )}
          </div>

          {video && (
            <RevealSection delay={0.18}>
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  background: "rgba(10,22,40,0.6)",
                  border: "1px solid rgba(198,177,128,0.35)",
                  boxShadow:
                    "0 20px 60px -20px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04) inset",
                }}
              >
                <iframe
                  src={video.src}
                  title={video.title || "Video"}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </RevealSection>
          )}
        </div>
      </div>
    </section>
  );
}
