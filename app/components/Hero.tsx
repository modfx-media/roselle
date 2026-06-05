"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollMarquee from "./motion/ScrollMarquee";

const TAGS = [
  "Chiropractic",
  "Acupuncture",
  "Massage Therapy",
  "Nutrition",
  "Functional Medicine",
  "Applied Kinesiology",
  "Thermography",
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  useEffect(() => setMounted(true), []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (videoOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [videoOpen]);

  return (
    <div id="hero" data-section="hero">
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "100vh", background: "#091321" }}
      >
        {/* ── Full-bleed background image ── */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Navy color tint — recolors the image blue */}
          <div
            className="absolute inset-0"
            style={{ background: "#091321", mixBlendMode: "multiply", opacity: 0.85 }}
          />
          {/* Dark cinematic gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,22,40,0.78) 0%, rgba(10,22,40,0.62) 30%, rgba(10,22,40,0.78) 75%, rgba(10,22,40,0.95) 100%)",
            }}
          />
          {/* Extra contrast layer for headline legibility */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(10,22,40,0.25)" }}
          />
          {/* Subtle gold tint */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(198,177,128,0.10) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-50"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />

        {/* ── Content ── */}
        <div
          className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 flex flex-col"
          style={{
            minHeight: "100vh",
            paddingTop: "calc(var(--spacing-nav-h) + var(--spacing-s8))",
          }}
        >
          {/* Centered headline block */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-s4"
              style={{
                background: "rgba(245,244,239,0.10)",
                border: "1px solid rgba(198,177,128,0.45)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#c6b180" }}
              />
              <span
                className="text-[11px] tracking-[0.22em] uppercase font-sans"
                style={{ color: "rgba(245,244,239,0.85)" }}
              >
                Roselle Center for Healing · Fairfax, VA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="leading-[1.02] tracking-tight max-w-[14ch]"
              style={{
                color: "#f5f4ef",
                fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)",
              }}
            >
              Heal naturally.{" "}
              <span className="italic font-serif" style={{ color: "#c6b180" }}>
                Live fully.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-s4 text-fluid-lg leading-relaxed max-w-[54ch]"
              style={{ color: "rgba(245,244,239,0.75)" }}
            >
              A truly multidisciplinary approach — chiropractic, acupuncture, massage,
              nutrition, and more — to address root causes, not just symptoms.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-s5 flex items-center gap-s3 flex-wrap justify-center"
            >
              <a
                href="/appointment"
                className="inline-flex items-center justify-center h-12 px-s5 rounded-full
                           text-sm font-semibold whitespace-nowrap transition-transform duration-200
                           hover:scale-[1.03]"
                style={{ background: "#c6b180", color: "#2a2928" }}
              >
                Book Appointment
              </a>
              <a
                href="tel:+17036987117"
                className="group inline-flex items-center gap-2 h-12 px-s2 text-sm font-medium transition-colors"
                style={{ color: "#f5f4ef" }}
              >
                <span>Free 20-min consultation</span>
                <span
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full
                             transition-transform duration-200 group-hover:translate-x-0.5"
                  style={{ border: "1px solid rgba(245,244,239,0.4)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5h6M5.5 2.5L8 5 5.5 7.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </motion.div>
          </div>

          {/* Bottom row: Watch button (right) */}
          <div className="relative pb-s6 pt-s8 flex items-end justify-end gap-s4 max-md:flex-col max-md:items-stretch">
            <motion.button
              type="button"
              onClick={() => setVideoOpen(true)}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative self-end max-md:self-stretch"
              aria-label="Watch welcome video"
            >
              {/* Small video thumbnail card */}
              <div
                className="relative overflow-hidden rounded-xl
                           w-[420px] h-[240px] max-lg:w-[360px] max-lg:h-[210px]
                           max-md:w-full max-md:h-[220px]
                           transition-transform duration-300 group-hover:scale-[1.02]"
                style={{
                  boxShadow:
                    "0 18px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(245,244,239,0.12)",
                }}
              >
                <img
                  src="/welcome-video-poster.jpg"
                  alt="Welcome to Roselle Center for Healing"
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dim overlay */}
                <div
                  className="absolute inset-0 transition-colors duration-300 group-hover:bg-[#091321]/10"
                  style={{ background: "rgba(10,22,40,0.45)" }}
                />

                {/* WATCH label (left) */}
                <span
                  className="absolute left-s3 top-1/2 -translate-y-1/2 text-[11px] tracking-[0.28em] uppercase font-medium"
                  style={{ color: "#f5f4ef" }}
                >
                  Watch
                </span>

                {/* Play disc (center) */}
                <span
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                             inline-flex items-center justify-center w-[72px] h-[72px] rounded-full
                             transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "#c6b180",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
                  }}
                >
                  <span
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{
                      background: "rgba(198,177,128,0.35)",
                      animationDuration: "2.4s",
                    }}
                    aria-hidden="true"
                  />
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 18 20"
                    fill="none"
                    className="relative ml-0.5"
                  >
                    <path d="M2 2v16l14-8L2 2z" fill="#2a2928" />
                  </svg>
                </span>
              </div>
            </motion.button>
          </div>

          {/* Marquee strip */}
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="pb-s4 -mx-s6 max-md:-mx-s4"
              style={{
                borderTop: "1px solid rgba(245,244,239,0.10)",
                paddingTop: "var(--spacing-s3)",
              }}
            >
              <div style={{ color: "rgba(245,244,239,0.55)" }}>
                <ScrollMarquee items={TAGS} baseSpeed={40} direction={1} />
              </div>
            </motion.div>
          )}
        </div>

        {/* ── Video Modal ── */}
        <AnimatePresence>
          {videoOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-s4"
              style={{ background: "rgba(10,22,40,0.92)", backdropFilter: "blur(8px)" }}
              onClick={() => setVideoOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[1100px] aspect-video rounded-xl overflow-hidden"
                style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  autoPlay
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover bg-fg"
                >
                  <source
                    src="/welcome_to_the_roselle_center_for_healing (1080p).mp4"
                    type="video/mp4"
                  />
                </video>
                <button
                  type="button"
                  onClick={() => setVideoOpen(false)}
                  aria-label="Close video"
                  className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
                  style={{ background: "rgba(10,22,40,0.5)", color: "#f5f4ef" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 2l10 10M12 2L2 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
