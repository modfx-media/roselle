"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import RevealSection from "./motion/RevealSection";
import SplitReveal from "./motion/SplitReveal";

const SERVICES = [
  {
    title: "Chiropractic Care",
    eyebrow: "Spinal Health",
    desc: "Restore alignment and mobility through precise, gentle adjustments.",
    img: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
    href: "/services/chiropractic.html",
  },
  {
    title: "Acupuncture",
    eyebrow: "Energy & Healing",
    desc: "Support healing and balance energy through traditional acupuncture.",
    img: "/services/close-up-cupping-therapy-experience.jpg",
    href: "/services/acupuncture.html",
  },
  {
    title: "Applied Kinesiology",
    eyebrow: "Diagnostics",
    desc: "Muscle testing to identify imbalances and guide individualized care.",
    img: "/services/download.jpeg",
    href: "/services/applied-kinesiology.html",
  },
  {
    title: "Nutrition",
    eyebrow: "Whole-Body Wellness",
    desc: "Personalized plans from holistic nutritionists to improve vitality.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=900&fit=crop",
    href: "/services/nutrition.html",
  },
  {
    title: "Massage Therapy",
    eyebrow: "Recovery & Relief",
    desc: "Therapeutic and cupping massage to release tension and reduce stress.",
    img: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
    href: "/services/massage-therapy.html",
  },
  {
    title: "Functional Medicine",
    eyebrow: "Root-Cause Care",
    desc: "Integrative medicine and thermography for chronic conditions.",
    img: "/services/woman-with-physical-impairment-analyzing-x-ray-scan-with-doctor-checkup-visit-medical-cabinet-old-patient-wheelchair-user-looking-bones-radiography-diagnosis-results-healthcare.jpg",
    href: "/functional-medicine",
  },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, [updateButtons]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = 24; // matches gap-s3 ish
    const step = card ? card.offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div id="features" data-section="features">
      <section className="py-section-py bg-bg">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
          {/* Header row */}
          <RevealSection>
            <div className="flex items-end justify-between gap-s4 mb-s6 max-md:flex-col max-md:items-start max-md:gap-s3">
              <div className="max-w-[640px]">
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Our Services
                </p>
                <SplitReveal
                  text="Care that meets you where you are"
                  as="h2"
                  className="text-fluid-4xl text-fg tracking-tight"
                />
                <p className="text-fluid-base mt-s2 leading-relaxed max-w-[44ch]"
                  style={{ color: "rgba(42,41,40,0.6)" }}>
                  A full spectrum of holistic services to resolve pain and restore function.
                </p>
              </div>

              {/* Right-side controls: explore link + chevrons */}
              <div className="flex items-center gap-s3 shrink-0">
                <a
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-fg transition-colors"
                >
                  <span>Explore all services</span>
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{ border: "1px solid rgba(42,41,40,0.25)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5.5 2.5L8 5 5.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>

                <div className="flex items-center gap-s1 max-md:hidden">
                  <button
                    type="button"
                    aria-label="Previous services"
                    onClick={() => scrollByCard(-1)}
                    disabled={!canPrev}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/10"
                    style={{ border: "1px solid rgba(42,41,40,0.2)", color: "#2a2928" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next services"
                    onClick={() => scrollByCard(1)}
                    disabled={!canNext}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-accent/10"
                    style={{ border: "1px solid rgba(42,41,40,0.2)", color: "#2a2928" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </RevealSection>

          {/* Horizontal scroll track — bleed to viewport edge on the right */}
          <div className="relative -mr-s6 max-md:-mr-s4">
            <div
              ref={trackRef}
              className="services-track flex gap-s3 overflow-x-auto pb-s3 pr-s6 max-md:pr-s4 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "none" }}
            >
              {SERVICES.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  data-card
                  className="group snap-start shrink-0 relative overflow-hidden rounded-2xl
                             w-[420px] h-[520px]
                             max-lg:w-[360px] max-lg:h-[480px]
                             max-md:w-[78vw] max-md:h-[440px]
                             bg-fg"
                  style={{ boxShadow: "0 12px 40px rgba(42,41,40,0.10)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(26,25,23,0.10) 0%, rgba(26,25,23,0.15) 45%, rgba(26,25,23,0.85) 100%)",
                    }}
                  />

                  {/* Top eyebrow */}
                  <div className="absolute top-s3 left-s3 right-s3 flex items-center justify-between">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] tracking-[0.22em] uppercase font-medium"
                      style={{
                        background: "rgba(245,244,239,0.92)",
                        color: "#2a2928",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      <span className="w-1 h-1 rounded-full" style={{ background: "#c6b180" }} />
                      {s.eyebrow}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-s4 flex flex-col gap-s2">
                    <h3
                      className="text-fluid-2xl tracking-tight leading-tight"
                      style={{ color: "#f5f4ef" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-[34ch]" style={{ color: "rgba(245,244,239,0.78)" }}>
                      {s.desc}
                    </p>
                    <span className="mt-s1 inline-flex items-center gap-2 text-sm font-medium" style={{ color: "#f5f4ef" }}>
                      <span>Learn more</span>
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full transition-transform duration-200 group-hover:translate-x-0.5"
                        style={{ background: "rgba(245,244,239,0.18)", backdropFilter: "blur(8px)" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5h6M5.5 2.5L8 5 5.5 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile chevrons (under track) */}
          <div className="hidden max-md:flex items-center justify-center gap-s2 mt-s4">
            <button
              type="button"
              aria-label="Previous services"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ border: "1px solid rgba(42,41,40,0.2)", color: "#2a2928" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next services"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{ border: "1px solid rgba(42,41,40,0.2)", color: "#2a2928" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
