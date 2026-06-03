"use client";

import RevealSection from "../motion/RevealSection";

export type Stat = { value: string; label: string };

export type StatStripProps = {
  stats: Stat[];
  tone?: "light" | "dark";
};

/**
 * RxWellness-style stat strip. 4 columns desktop, 2 mobile.
 */
export default function StatStrip({ stats, tone = "light" }: StatStripProps) {
  const dark = tone === "dark";
  const sectionBg = dark ? "bg-fg" : "bg-bg";
  const valueColor = dark ? "text-bg" : "text-fg";
  const labelColor = dark ? "rgba(245,244,239,0.55)" : "rgba(42,41,40,0.55)";
  const divider = dark
    ? "1px solid rgba(245,244,239,0.1)"
    : "1px solid rgba(42,41,40,0.08)";

  return (
    <section className={`${sectionBg} py-s10`}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
        <div
          className="grid grid-cols-4 max-md:grid-cols-2"
          style={{ borderTop: divider, borderBottom: divider }}
        >
          {stats.map((s, i) => (
            <RevealSection key={i} delay={i * 0.05} className="h-full">
              <div
                className="py-s6 px-s3 text-center min-w-0 h-full flex flex-col items-center justify-center"
                style={{
                  borderRight:
                    i < stats.length - 1 ? divider : undefined,
                }}
              >
                <p
                  className={`text-lg md:text-xl lg:text-2xl ${valueColor} font-serif tracking-tight text-balance`}
                  style={{ lineHeight: 1.15, wordBreak: "normal", overflowWrap: "break-word", hyphens: "manual" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[11px] md:text-xs tracking-[0.18em] uppercase mt-s3 font-sans"
                  style={{ color: labelColor }}
                >
                  {s.label}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
