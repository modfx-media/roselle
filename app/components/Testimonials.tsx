"use client";
import { motion } from "framer-motion";
import RevealSection from "./motion/RevealSection";

const REVIEWS = [
  {
    quote: "My health has significantly improved because of the Roselle Center. I was bedridden. I no longer pass out. I used a walker and now I walk unaided. This past weekend, I hiked four miles!",
    name: "Sandra E.",
    location: "Fairfax, VA",
    tag: "Life-Changing Care",
  },
  {
    quote: "I have known Dr. Lamp since 1995 and he is the ONLY doctor I have seen since. He is absolutely amazing!",
    name: "Rick W.",
    location: "Fairfax, VA",
    tag: "30 Years of Trust",
  },
  {
    quote: "Within 6 months I was migraine free. They treat the whole body, not just the symptoms.",
    name: "Gary W.",
    location: "Herndon, VA",
    tag: "Migraine Relief",
  },
  {
    quote: "I am 90% less inflamed within a few months. Dr. Zhang meets me where I am each time — no cookie-cutter treatments.",
    name: "KL CC",
    location: "Google Review",
    tag: "Acupuncture",
  },
  {
    quote: "Their multi-pronged approach — chiropractic, acupuncture, nutrition — fits perfectly with my personal outlook on wellness.",
    name: "Elizabeth S.",
    location: "Northern Virginia",
    tag: "Holistic Wellness",
  },
];

export default function Testimonials() {
  const [featured, ...rest] = REVIEWS;

  return (
    <div id="testimonials" data-section="testimonials">
      <section className="py-section-py overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #f5f4ef 0%, rgba(198,177,128,0.06) 50%, #f5f4ef 100%)",
        }}
      >
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          {/* Header */}
          <RevealSection>
            <div className="flex items-end justify-between gap-s4 mb-s10 max-md:flex-col max-md:items-start">
              <div>
                <div className="flex items-center gap-3 mb-s3">
                  <span className="w-5 h-px" style={{ background: "rgba(198,177,128,0.5)" }} />
                  <p className="text-xs tracking-[0.22em] uppercase font-sans"
                    style={{ color: "rgba(198,177,128,0.85)" }}>Patient Stories</p>
                </div>
                <h2 className="text-fluid-4xl text-fg tracking-tight leading-[1.05]">
                  What Our<br />Patients Say
                </h2>
              </div>
              <div className="flex items-center gap-s4 shrink-0">
                <div className="text-right">
                  <p className="text-3xl font-serif font-medium text-fg leading-none">4.7<span className="text-accent">★</span></p>
                  <p className="text-xs mt-1" style={{ color: "rgba(42,41,40,0.45)" }}>110 Google Reviews</p>
                </div>
                <div className="w-px h-10" style={{ background: "rgba(42,41,40,0.12)" }} />
                <div className="text-right">
                  <p className="text-3xl font-serif font-medium text-fg leading-none">40+</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(42,41,40,0.45)" }}>Years of healing</p>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Layout: featured left + grid right */}
          <div className="grid grid-cols-[1fr_1fr] gap-s4 max-md:grid-cols-1">

            {/* Featured large card */}
            <RevealSection>
              <motion.div
                className="relative rounded-2xl p-s8 flex flex-col justify-between h-full min-h-[380px] overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, rgba(198,177,128,0.12) 0%, rgba(198,177,128,0.04) 100%)",
                  border: "1px solid rgba(198,177,128,0.2)",
                }}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Decorative quote mark */}
                <div className="absolute top-s4 right-s5 font-serif leading-none select-none pointer-events-none"
                  style={{ fontSize: "10rem", color: "rgba(198,177,128,0.08)", lineHeight: 1 }}>
                  &ldquo;
                </div>

                <div>
                  <span className="inline-block rounded-full px-3 py-1 text-xs mb-s4"
                    style={{ background: "rgba(198,177,128,0.15)", color: "rgba(198,177,128,0.9)", border: "1px solid rgba(198,177,128,0.25)" }}>
                    {featured.tag}
                  </span>
                  <div className="flex gap-0.5 mb-s3">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-accent">★</span>)}
                  </div>
                  <blockquote className="font-serif leading-relaxed text-fg"
                    style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}>
                    &ldquo;{featured.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="flex items-center gap-s2 mt-s6 pt-s4"
                  style={{ borderTop: "1px solid rgba(198,177,128,0.15)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold shrink-0"
                    style={{ background: "rgba(198,177,128,0.2)", color: "rgba(42,41,40,0.8)" }}>
                    {featured.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg">{featured.name}</p>
                    <p className="text-xs" style={{ color: "rgba(42,41,40,0.45)" }}>{featured.location}</p>
                  </div>
                </div>
              </motion.div>
            </RevealSection>

            {/* 2x2 grid of smaller cards */}
            <div className="grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
              {rest.map((r, i) => (
                <RevealSection key={r.name} delay={i * 0.07}>
                  <motion.div
                    className="rounded-2xl p-s4 flex flex-col gap-s2 h-full"
                    style={{
                      background: i % 2 === 0 ? "rgba(42,41,40,0.03)" : "rgba(245,244,239,1)",
                      border: "1px solid rgba(42,41,40,0.07)",
                      boxShadow: "0 2px 16px rgba(42,41,40,0.04)",
                    }}
                    whileHover={{ y: -4, boxShadow: "0 12px 28px rgba(198,177,128,0.15)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-block rounded-full px-2.5 py-0.5 text-xs"
                        style={{ background: "rgba(198,177,128,0.12)", color: "rgba(198,177,128,0.85)" }}>
                        {r.tag}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => <span key={j} className="text-accent text-xs">★</span>)}
                      </div>
                    </div>
                    <blockquote className="text-sm leading-relaxed flex-1"
                      style={{ color: "rgba(42,41,40,0.7)" }}>
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-2 pt-s2"
                      style={{ borderTop: "1px solid rgba(42,41,40,0.06)" }}>
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold shrink-0"
                        style={{ background: "var(--color-fg)", color: "var(--color-bg)" }}>
                        {r.name[0]}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-fg">{r.name}</p>
                        <p className="text-xs" style={{ color: "rgba(42,41,40,0.4)" }}>{r.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>
          </div>

          {/* CTA */}
          <RevealSection delay={0.2}>
            <div className="text-center mt-s10">
              <a
                href="https://www.google.com/maps/search/Roselle+Center+for+Healing+Fairfax+VA"
                target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-100 opacity-55 text-fg hover-underline-gold"
                style={{ paddingBottom: "2px" }}
              >
                View all 110 reviews on Google <span className="arrow-nudge">→</span>
              </a>
            </div>
          </RevealSection>

        </div>
      </section>
    </div>
  );
}
