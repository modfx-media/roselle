"use client";

import RevealSection from "../motion/RevealSection";

export type ImageCtaProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

/**
 * Full-bleed rounded image card with dark→gold gradient overlay and pill CTAs.
 */
export default function ImageCta({
  eyebrow,
  title,
  body,
  image,
  primaryCta,
  secondaryCta,
}: ImageCtaProps) {
  return (
    <section className="bg-bg pt-section-py pb-section-py">
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
        <RevealSection>
          <div
            className="relative overflow-hidden rounded-2xl px-s10 py-s12 max-md:px-s6 max-md:py-s10"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(42,41,40,0.92) 0%, rgba(42,41,40,0.78) 60%, rgba(198,177,128,0.55) 100%), url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-w-[640px]">
              {eyebrow && (
                <p className="text-xs tracking-widest uppercase text-accent mb-s4 font-sans">
                  {eyebrow}
                </p>
              )}
              <h2 className="text-fluid-4xl text-bg font-serif tracking-tight leading-[1.08] mb-s5">
                {title}
              </h2>
              {body && (
                <p className="text-fluid-base leading-relaxed text-bg/75 mb-s7">{body}</p>
              )}
              {(primaryCta || secondaryCta) && (
                <div className="flex flex-wrap gap-s3">
                  {primaryCta && (
                    <a
                      href={primaryCta.href}
                      className="inline-flex items-center gap-2 bg-accent text-fg px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-bg transition-colors"
                    >
                      {primaryCta.label}
                    </a>
                  )}
                  {secondaryCta && (
                    <a
                      href={secondaryCta.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide text-bg border border-bg/30 hover:bg-bg/10 transition-colors"
                    >
                      {secondaryCta.label}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
