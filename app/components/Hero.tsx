"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import ParallaxImage from "./motion/ParallaxImage";

const TAGS = ["Chiropractic", "Acupuncture", "Massage Therapy", "Nutrition", "Functional Medicine", "Applied Kinesiology", "Thermography"];
const REVIEWS = [
  { name: "Rick W.", avatar: "https://i.pravatar.cc/80?img=11" },
  { name: "Elizabeth S.", avatar: "https://i.pravatar.cc/80?img=47" },
  { name: "Holly S.", avatar: "https://i.pravatar.cc/80?img=32" },
  { name: "Rhonda L.", avatar: "https://i.pravatar.cc/80?img=25" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const items = [...TAGS, ...TAGS, ...TAGS, ...TAGS];

  return (
    <div id="hero" data-section="hero">
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />

        <div className="site-container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div className="hero-text-block" variants={container} initial="hidden" animate="show">

            {/* Avatar stack + rating */}
            <motion.div variants={item} className="avatar-stack">
              <div className="avatar-stack-imgs">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="avatar-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.avatar} alt={r.name} loading="lazy" />
                  </div>
                ))}
              </div>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--fg)" }}>
                <strong>4.5★</strong> · 52 Google reviews
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="hero-title">
              Holistic Healing in{" "}
              <span className="gradient-text">Fairfax, VA</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={item} className="hero-sub">
              Roselle Center for Healing takes a truly multidisciplinary approach — chiropractic,
              acupuncture, massage, nutrition, and more — to address root causes, not just symptoms.
            </motion.p>

            {/* Free consult badge */}
            <motion.div variants={item}>
              <span style={{
                display: "inline-block",
                background: "rgba(198,177,128,0.18)",
                border: "1px solid rgba(198,177,128,0.4)",
                borderRadius: "var(--radius-full)",
                padding: "4px 14px",
                fontSize: "var(--text-xs)",
                color: "var(--fg)",
                marginBottom: "var(--s1)",
              }}>
                Free 20-Minute Consultation Available
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} style={{ display: "flex", gap: "var(--s2)", flexWrap: "wrap", justifyContent: "center" }}>
              <MagneticButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Book an Appointment
              </MagneticButton>
              <a href="tel:+17036987117" style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                height: 44, padding: "0 var(--s4)", borderRadius: "var(--radius-full)",
                border: "1px solid rgba(42,41,40,0.25)", fontSize: "var(--text-sm)",
                color: "var(--fg)", fontWeight: 500, whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}>
                (703) 698-7117
              </a>
            </motion.div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative", marginBottom: "var(--s4)" }}
          >
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "16/9", position: "relative" }}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop"
                alt="Roselle Center for Healing — chiropractic clinic in Fairfax, VA"
                speed={0.12}
                className="w-full h-full"
              />

              {/* Review overlay */}
              <motion.div
                className="hero-overlay"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 120, damping: 20 }}
              >
                <div style={{ display: "flex", gap: "2px", marginBottom: "6px" }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: "var(--accent)", fontSize: "var(--text-sm)" }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--fg)", lineHeight: 1.4, marginBottom: "10px" }}>
                  &ldquo;I have been coming to Roselle Center for over 10 years. I love it!&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, overflow: "hidden", flexShrink: 0, background: "var(--fg)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://i.pravatar.cc/80?img=25" alt="Rhonda L." style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  </div>
                  <div>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--fg)" }}>Rhonda L.</p>
                    <p style={{ fontSize: "var(--text-xs)", color: "rgba(42,41,40,0.6)" }}>Google Review</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Marquee */}
          {mounted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
              <div className="marquee-wrap">
                <div className="marquee-track">
                  {items.map((t, i) => (
                    <span key={i} className="marquee-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
