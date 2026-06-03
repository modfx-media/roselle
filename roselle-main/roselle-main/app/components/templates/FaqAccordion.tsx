"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "../motion/RevealSection";
import SplitReveal from "../motion/SplitReveal";

export type FaqItem = { q: string; a: string | string[] };

export type FaqAccordionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  items: FaqItem[];
  tone?: "light" | "dark";
};

export default function FaqAccordion({
  eyebrow = "Frequently asked",
  title,
  intro,
  items,
  tone = "light",
}: FaqAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const dark = tone === "dark";

  const sectionClass = dark
    ? "about-noise bg-fg py-section-py overflow-hidden relative"
    : "bg-bg py-section-py overflow-hidden";
  const eyebrowColor = dark ? "rgba(198,177,128,0.95)" : "rgba(198,177,128,1)";
  const titleColor = dark ? "text-bg" : "text-fg";
  const introColor = dark ? "rgba(245,244,239,0.65)" : "rgba(42,41,40,0.7)";
  const itemBg = dark
    ? "rgba(245,244,239,0.04)"
    : "rgba(255,255,255,0.6)";
  const itemBorder = dark
    ? "1px solid rgba(245,244,239,0.08)"
    : "1px solid rgba(42,41,40,0.08)";
  const qColor = dark ? "text-bg" : "text-fg";
  const aColor = dark ? "rgba(245,244,239,0.7)" : "rgba(42,41,40,0.7)";

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
        <div className="grid grid-cols-[420px_1fr] gap-s10 max-[900px]:grid-cols-1 max-[900px]:gap-s6">
          <div>
            <RevealSection>
              <p
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase mb-s4 font-sans"
                style={{ color: eyebrowColor }}
              >
                <span className="w-6 h-px" style={{ background: eyebrowColor }} />
                {eyebrow}
              </p>
            </RevealSection>
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

          <div className="flex flex-col gap-s3">
            {items.map((item, i) => {
              const isOpen = open === i;
              const paragraphs = Array.isArray(item.a) ? item.a : [item.a];
              return (
                <RevealSection key={i} delay={i * 0.04}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ background: itemBg, border: itemBorder }}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full text-left px-s5 py-s4 flex items-start gap-s4 group"
                    >
                      <span
                        className="shrink-0 mt-1 text-[11px] tracking-[0.2em] font-sans"
                        style={{ color: eyebrowColor }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className={`flex-1 text-fluid-lg font-serif tracking-tight leading-snug ${qColor}`}
                      >
                        {item.q}
                      </h3>
                      <span
                        className="shrink-0 mt-1 w-8 h-8 grid place-items-center rounded-full transition-transform duration-300"
                        style={{
                          background: "rgba(198,177,128,0.15)",
                          border: "1px solid rgba(198,177,128,0.4)",
                          color: "rgba(198,177,128,1)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="px-s5 pb-s5 pl-[calc(var(--spacing-s5)+2.5rem)] max-md:pl-s5">
                            {paragraphs.map((p, pi) => (
                              <p
                                key={pi}
                                className="text-fluid-base leading-relaxed mt-2"
                                style={{ color: aColor }}
                              >
                                {p}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
