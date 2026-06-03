"use client";

import RevealSection from "../motion/RevealSection";

export type ChecklistSplitProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  items: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean; // image right by default; reverse=true puts image left
  tone?: "light" | "dark";
};

/**
 * Image + checklist split. Mobile-first.
 */
export default function ChecklistSplit({
  eyebrow,
  title,
  body,
  items,
  image,
  imageAlt,
  reverse = false,
  tone = "light",
}: ChecklistSplitProps) {
  const dark = tone === "dark";
  const sectionClass = dark
    ? "about-noise bg-fg py-section-py overflow-hidden"
    : "bg-bg py-section-py overflow-hidden";
  const titleColor = dark ? "text-bg" : "text-fg";
  const bodyColor = dark ? "text-bg/65" : "text-fg/65";
  const itemColor = dark ? "text-bg/75" : "text-fg/75";

  const imageBlock = (
    <RevealSection>
      <div className="rounded-xl overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} className="w-full h-auto block" />
      </div>
    </RevealSection>
  );

  const contentBlock = (
    <RevealSection delay={0.1}>
      {eyebrow && (
        <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
          {eyebrow}
        </p>
      )}
      <h2 className={`text-fluid-3xl ${titleColor} font-serif tracking-tight leading-[1.12] mb-s5 max-w-[24ch]`}>
        {title}
      </h2>
      {body && (
        <p className={`text-fluid-base leading-relaxed ${bodyColor} mb-s6`}>{body}</p>
      )}
      <ul className="flex flex-col gap-s3">
        {items.map((t) => (
          <li key={t} className={`flex items-start gap-s3 text-fluid-base ${itemColor}`}>
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </RevealSection>
  );

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
        <div className="grid grid-cols-2 gap-s10 items-center max-lg:grid-cols-1 max-lg:gap-s6">
          {reverse ? (
            <>
              {contentBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {contentBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
