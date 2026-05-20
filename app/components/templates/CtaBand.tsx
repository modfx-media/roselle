"use client";

import RevealSection from "../motion/RevealSection";
import MagneticButton from "../motion/MagneticButton";

export type CtaBandProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryCta?: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  /** "dark" places the band on the dark fg background; "light" places it on the cream bg */
  tone?: "light" | "dark" | "gold";
};

/**
 * Bottom-of-page CTA band. Three tonal variants.
 */
export default function CtaBand({
  eyebrow,
  title,
  body,
  primaryCta,
  secondaryCta,
  tone = "light",
}: CtaBandProps) {
  const sectionBg =
    tone === "dark" ? "bg-fg" : tone === "gold" ? "bg-bg" : "bg-bg";

  let panelStyle: React.CSSProperties;
  let titleClass: string;
  let bodyColor: string;
  let eyebrowColor: string;
  let btnClass: string;
  let secondaryColor: string;

  if (tone === "gold") {
    panelStyle = {
      background:
        "linear-gradient(135deg, #091321 0%, #091321 60%, #6b5938 100%)",
      color: "#f5f4ef",
    };
    titleClass = "text-bg";
    bodyColor = "rgba(245,244,239,0.78)";
    eyebrowColor = "rgba(198,177,128,1)";
    btnClass = "btn-primary-inverted";
    secondaryColor = "rgba(245,244,239,0.85)";
  } else if (tone === "dark") {
    panelStyle = {
      background: "rgba(245,244,239,0.04)",
      border: "1px solid rgba(245,244,239,0.08)",
    };
    titleClass = "text-bg";
    bodyColor = "rgba(245,244,239,0.6)";
    eyebrowColor = "rgba(198,177,128,0.95)";
    btnClass = "btn-primary-inverted";
    secondaryColor = "rgba(245,244,239,0.85)";
  } else {
    panelStyle = { background: "var(--color-card-bg)" };
    titleClass = "text-fg";
    bodyColor = "rgba(42,41,40,0.6)";
    eyebrowColor = "rgba(140,110,40,1)";
    btnClass = "btn-primary";
    secondaryColor = "rgba(42,41,40,0.85)";
  }

  return (
    <section className={`${sectionBg} py-section-py`}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
        <RevealSection>
          <div
            className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 relative overflow-hidden"
            style={panelStyle}
          >
            {tone === "gold" && (
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(50% 60% at 100% 0%, rgba(198,177,128,0.35) 0%, transparent 70%)",
                }}
              />
            )}
            <div className="flex flex-col gap-s3 max-w-[640px] relative z-1">
              {eyebrow && (
                <p
                  className="text-xs tracking-[0.2em] uppercase font-sans"
                  style={{ color: eyebrowColor }}
                >
                  {eyebrow}
                </p>
              )}
              <h3
                className={`text-fluid-2xl ${titleClass} font-serif font-medium tracking-tight leading-snug`}
              >
                {title}
              </h3>
              {body && (
                <p
                  className="text-fluid-base leading-relaxed"
                  style={{ color: bodyColor }}
                >
                  {body}
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-s3 items-center shrink-0 relative z-1">
              {primaryCta && (
                <MagneticButton
                  className={btnClass}
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
                  className="text-sm font-medium underline-offset-4 hover:underline transition-colors duration-200"
                  style={{ color: secondaryColor }}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
