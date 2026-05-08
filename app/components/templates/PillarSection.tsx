"use client";

import RevealSection from "../motion/RevealSection";

export type Pillar = { title: string; description: string };

export type PillarSectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  pillars: Pillar[]; // 3 or 4 ideal
  cta?: { label: string; href: string };
  tone?: "light" | "dark";
};

/**
 * Left intro + right grid of numbered pillar cards. Mobile-first.
 */
export default function PillarSection({
  eyebrow,
  title,
  intro,
  pillars,
  cta,
  tone = "dark",
}: PillarSectionProps) {
  const dark = tone === "dark";
  const sectionClass = dark
    ? "about-noise bg-fg py-section-py overflow-hidden relative"
    : "bg-bg py-section-py overflow-hidden relative";
  const titleColor = dark ? "text-bg" : "text-fg";
  const introColor = dark ? "text-bg/55" : "text-fg/65";
  const cardBg = dark
    ? "bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]"
    : "bg-[rgba(42,41,40,0.03)] border border-[rgba(42,41,40,0.08)]";
  const cardTitle = dark ? "text-bg" : "text-fg";
  const cardDesc = dark ? "text-bg/55" : "text-fg/60";

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
        <div className="grid grid-cols-12 gap-s8 max-lg:grid-cols-1 max-lg:gap-s6">
          <div className="col-span-5 max-lg:col-span-1">
            <RevealSection>
              {eyebrow && (
                <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  {eyebrow}
                </p>
              )}
              <h2 className={`text-fluid-3xl ${titleColor} font-serif tracking-tight leading-[1.12] mb-s5`}>
                {title}
              </h2>
              {intro && (
                <p className={`text-fluid-base leading-relaxed ${introColor} mb-s6`}>
                  {intro}
                </p>
              )}
              {cta && (
                <a
                  href={cta.href}
                  className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-accent hover:text-bg transition-colors"
                >
                  {cta.label} →
                </a>
              )}
            </RevealSection>
          </div>

          <div className="col-span-7 max-lg:col-span-1 grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
            {pillars.map((p, i) => (
              <RevealSection key={i} delay={i * 0.06}>
                <div className={`h-full p-s6 rounded-xl ${cardBg}`}>
                  <span className="text-xs tracking-widest uppercase text-accent font-sans">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`text-fluid-lg ${cardTitle} font-serif tracking-tight leading-snug mt-s3 mb-s2`}>
                    {p.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${cardDesc}`}>{p.description}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
