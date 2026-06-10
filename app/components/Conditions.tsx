"use client";
import { useState, useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import SplitReveal from "./motion/SplitReveal";

// dotX/dotY: % of the 1400x583 rendered image container
const REGIONS = [
  { label: "Head & Neck",         sub: "Cervical · Tension",      href: "/neck-pain",                 dotX: 61, dotY: 28 },
  { label: "Upper Back",          sub: "Thoracic · Postural",     href: "/back-pain",                 dotX: 62, dotY: 38 },
  { label: "Shoulder & Clavicle", sub: "Rotator · Impingement",   href: "/rotator-cuff",              dotX: 70, dotY: 50 },
  { label: "Mid-Back",            sub: "Thoracic · Rib",          href: "/back-pain",                 dotX: 63, dotY: 60 },
  { label: "Lower Back",          sub: "Lumbar · Sacral",         href: "/lower-back-pain",           dotX: 64, dotY: 68 },
  { label: "Elbow, Hand & Wrist", sub: "Carpal · Tennis · Nerve", href: "/muscle-strains-a-sprains",  dotX: 70, dotY: 90 },
];

const IMG_W = 1400;
const IMG_H = 583;
const LABEL_W = 220;

export default function Conditions() {
  const [active, setActive] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const imgRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  const recalc = useCallback(() => {
    if (!containerRef.current || !imgRef.current) return;
    const cRect = containerRef.current.getBoundingClientRect();
    const iRect = imgRef.current.getBoundingClientRect();

    const newLines = REGIONS.map((r, i) => {
      const lEl = labelRefs.current[i];
      if (!lEl) return { x1: 0, y1: 0, x2: 0, y2: 0 };
      const lRect = lEl.getBoundingClientRect();
      // right edge center of label
      const x1 = lRect.right - cRect.left;
      const y1 = lRect.top + lRect.height / 2 - cRect.top;
      // dot position on image
      const x2 = iRect.left - cRect.left + (r.dotX / 100) * iRect.width;
      const y2 = iRect.top - cRect.top + (r.dotY / 100) * iRect.height;
      return { x1, y1, x2, y2 };
    });
    setLines(newLines);
  }, []);

  useLayoutEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  return (
    <div id="conditions" data-section="conditions">
      <section
        className="relative overflow-hidden py-section-py"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #eef1f6 12%, #8aa1c4 38%, #2a4575 70%, #1a2f52 90%, #1a2f52 100%)",
        }}
      >

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 45%, rgba(74,158,255,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          {/* Header */}
          <div className="text-center mb-s10">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-s4">
              <span className="w-6 h-px" style={{ background: "rgba(9,19,33,0.7)" }} />
              <span className="text-xs tracking-[0.22em] uppercase font-sans font-semibold"
                style={{ color: "#3d2f10" }}>Conditions Treated</span>
              <span className="w-6 h-px" style={{ background: "rgba(9,19,33,0.7)" }} />
            </motion.div>
            <SplitReveal text="Where Is Your" as="h2"
              className="text-fluid-5xl tracking-tight leading-[1.0] inline text-[#04080f]">
              {" "}<span className="sr-word inline-block text-[#6b5414]">Pain?</span>
            </SplitReveal>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm mt-s3" style={{ color: "rgba(9,19,33,0.85)" }}>
              Learn how we can help with your pain
            </motion.p>
          </div>

          {/* Layout: labels + image in one relative container for SVG overlay */}
          <div ref={containerRef} className="relative flex items-center">

            {/* SVG connector lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              {lines.map((l, i) => {
                const r = REGIONS[i];
                const act = active === r.label;
                const mx = l.x1 + (l.x2 - l.x1) * 0.6;
                return (
                  <g key={r.label}>
                    <path
                      d={`M ${l.x1} ${l.y1} C ${mx} ${l.y1}, ${mx} ${l.y2}, ${l.x2} ${l.y2}`}
                      fill="none"
                      stroke={act ? "rgba(198,177,128,0.7)" : "rgba(245,244,239,0.15)"}
                      strokeWidth={act ? 1.5 : 1}
                      strokeDasharray={act ? "none" : "4 4"}
                      style={{ transition: "stroke 0.2s, stroke-width 0.2s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Labels */}
            <div className="flex flex-col gap-s3 shrink-0 z-10" style={{ width: LABEL_W }}>
              {REGIONS.map((r, i) => {
                const act = active === r.label;
                return (
                  <motion.a
                    key={r.label}
                    ref={el => { labelRefs.current[i] = el; }}
                    href={r.href}
                    className="flex flex-col cursor-pointer rounded-xl px-4 py-3"
                    style={{
                      background: act ? "#26477a" : "#1a2f52",
                      border: `1px solid ${act ? "rgba(198,177,128,0.55)" : "rgba(245,244,239,0.15)"}`,
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={() => { setActive(r.label); recalc(); }}
                    onMouseLeave={() => setActive(null)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    animate={{
                      boxShadow: act
                        ? ["0 0 16px rgba(255,210,120,0.75)", "0 0 38px rgba(255,210,120,1)", "0 0 16px rgba(255,210,120,0.75)"]
                        : ["0 0 12px rgba(255,210,120,0.55)", "0 0 26px rgba(255,210,120,0.85)", "0 0 12px rgba(255,210,120,0.55)"],
                      transition: {
                        boxShadow: {
                          duration: act ? 1.0 : 2.8,
                          repeat: Infinity,
                          delay: act ? 0 : i * 0.45,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "#ffffff" }}>
                      {r.label}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.75)" }}>{r.sub}</p>
                  </motion.a>
                );
              })}
            </div>

            {/* Image */}
            <div
              ref={imgRef}
              className="relative shrink-0"
              style={{ width: IMG_W, height: IMG_H, marginRight: -420 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/imgi_8_wheres-your-pain-transparent.png.png"
                alt="Human anatomy showing pain regions"
                onLoad={recalc}
                onClick={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
                  const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
                  console.log(`dotX: ${x}, dotY: ${y}`);
                }}
                style={{ width: "100%", height: "auto", display: "block", maxWidth: "none",
                  filter: "drop-shadow(0 0 40px rgba(74,158,255,0.35))", cursor: "crosshair" }}
              />

              {/* Dots on figure */}
              {REGIONS.map((r) => {
                const act = active === r.label;
                return (
                  <motion.div
                    key={r.label}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${r.dotX}%`, top: `${r.dotY}%`,
                      transform: "translate(-50%, -50%)",
                      zIndex: 10,
                    }}
                    onMouseEnter={() => { setActive(r.label); recalc(); }}
                    onMouseLeave={() => setActive(null)}
                  >
                    {/* Always-on pulse ring */}
                    <motion.div
                      className="absolute rounded-full"
                      animate={{ scale: [1, 2.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                      style={{ width: 10, height: 10, top: -5, left: -5,
                        background: act ? "rgba(198,177,128,0.9)" : "rgba(255,255,255,0.5)" }}
                    />
                    {/* Extra ring on hover */}
                    {act && (
                      <motion.div className="absolute rounded-full"
                        initial={{ scale: 0.5, opacity: 0.9 }}
                        animate={{ scale: 4, opacity: 0 }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ width: 10, height: 10, top: -5, left: -5, background: "rgba(198,177,128,1)" }} />
                    )}
                    <motion.div
                      animate={{
                        width: act ? 10 : 7, height: act ? 10 : 7,
                        background: act ? "#c6b180" : "rgba(255,255,255,0.85)",
                        boxShadow: act
                          ? ["0 0 8px rgba(198,177,128,0.8)", "0 0 24px rgba(198,177,128,1)", "0 0 8px rgba(198,177,128,0.8)"]
                          : ["0 0 4px rgba(255,255,255,0.4)", "0 0 12px rgba(255,255,255,0.8)", "0 0 4px rgba(255,255,255,0.4)"],
                        transition: {
                          boxShadow: { duration: act ? 1.0 : 2.0, repeat: Infinity, ease: "easeInOut" },
                        },
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      style={{ borderRadius: "2px" }}
                    />
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center gap-s4 mt-s10">
            <MagneticButton
              className="btn-primary-inverted"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Book a Consultation
            </MagneticButton>
            <p className="text-xs" style={{ color: "rgba(245,244,239,0.3)" }}>
              Free 20-min consultation available
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
