"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import ScrollMarquee from "./motion/ScrollMarquee";
import SplitReveal from "./motion/SplitReveal";

const TAGS = ["Chiropractic", "Acupuncture", "Massage Therapy", "Nutrition", "Functional Medicine", "Applied Kinesiology", "Thermography"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div id="hero" data-section="hero">
      <section className="pt-[calc(var(--spacing-nav-h)+var(--spacing-s8))] pb-s10 relative overflow-hidden">

        {/* ── Grain texture overlay ── */}
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }} />

        {/* ── Grid lines ── */}
        <div className="hero-grid-bg" aria-hidden="true" />

        {/* ── Animated ambient orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 600, height: 600,
              top: "-15%", left: "60%",
              background: "radial-gradient(circle, rgba(198,177,128,0.13) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 500, height: 500,
              top: "30%", left: "-10%",
              background: "radial-gradient(circle, rgba(74,158,255,0.07) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
            animate={{ x: [0, -30, 40, 0], y: [0, 40, -20, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 400, height: 400,
              bottom: "10%", right: "5%",
              background: "radial-gradient(circle, rgba(198,177,128,0.09) 0%, transparent 70%)",
              filter: "blur(35px)",
            }}
            animate={{ x: [0, 20, -30, 0], y: [0, -20, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          />
        </div>

        <div className="w-full max-w-max-w mx-auto px-s6 relative z-1 max-md:px-s4">
          <motion.div
            className="flex flex-col items-center text-center gap-s3 mb-s8 max-w-[760px] mx-auto"
            variants={container} initial="hidden" animate="show"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3">
              <span className="w-5 h-px" style={{ background: "rgba(198,177,128,0.5)" }} />
              <span className="text-xs tracking-[0.22em] uppercase font-sans"
                style={{ color: "rgba(198,177,128,0.85)" }}>Roselle Center for Healing · Fairfax, VA</span>
              <span className="w-5 h-px" style={{ background: "rgba(198,177,128,0.5)" }} />
            </motion.div>

            {/* Headline */}
            <SplitReveal
              text="Holistic Healing in"
              as="h1"
              className="text-fluid-5xl text-fg leading-[1.08] tracking-tight"
            >
              {" "}<span className="sr-word inline-block gradient-text">Fairfax,&nbsp;VA</span>
            </SplitReveal>

            {/* Sub */}
            <motion.p variants={item} className="text-fluid-lg leading-relaxed max-w-[52ch]"
              style={{ color: "rgba(42,41,40,0.65)" }}>
              A truly multidisciplinary approach — chiropractic, acupuncture, massage, nutrition,
              and more — to address root causes, not just symptoms.
            </motion.p>

            {/* Free consult badge */}
            <motion.div variants={item}>
              <span className="inline-block rounded-full px-3.5 py-1 text-xs text-fg"
                style={{ background: "rgba(198,177,128,0.18)", border: "1px solid rgba(198,177,128,0.4)" }}>
                Free 20-Minute Consultation Available
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex gap-s2 flex-wrap justify-center">
              <MagneticButton onClick={() => window.location.href = "/appointment"}>
                Book an Appointment
              </MagneticButton>
              <a href="tel:+17036987117"
                className="inline-flex items-center justify-center h-11 px-s4 rounded-full
                           text-sm text-fg font-medium whitespace-nowrap transition-colors duration-200"
                style={{ border: "1px solid rgba(42,41,40,0.25)" }}>
                (703) 698-7117
              </a>
            </motion.div>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-s4"
          >
            {/* Glow behind video */}
            <div className="absolute -inset-4 rounded-2xl pointer-events-none z-0" style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(198,177,128,0.12) 0%, transparent 70%)",
              filter: "blur(20px)",
            }} />
            <div className="rounded-xl overflow-hidden aspect-video relative bg-fg z-1"
              style={{ boxShadow: "0 32px 80px rgba(42,41,40,0.18), 0 0 0 1px rgba(198,177,128,0.12)" }}>
              <video
                autoPlay muted loop playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/welcome_to_the_roselle_center_for_healing (1080p).mp4" type="video/mp4" />
              </video>

              {/* Review overlay */}
              <motion.div
                className="absolute bottom-s3 left-s3 rounded-xl p-s2 px-s3 max-w-[280px] z-10"
                style={{
                  background: "rgba(245,244,239,0.92)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(42,41,40,0.15)",
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 120, damping: 20 }}
              >
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-sm">&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-fg leading-snug mb-2.5">
                  &ldquo;I have been coming to Roselle Center for over 10 years. I love it!&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-fg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://i.pravatar.cc/80?img=25" alt="Rhonda L." className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-fg">Rhonda L.</p>
                    <p className="text-xs" style={{ color: "rgba(42,41,40,0.5)" }}>Google Review · 10+ years</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats badge top-right */}
              <motion.div
                className="absolute top-s3 right-s3 rounded-xl px-s3 py-2 z-10 text-right"
                style={{
                  background: "rgba(245,244,239,0.92)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(42,41,40,0.12)",
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 120, damping: 20 }}
              >
                <p className="text-xl font-serif font-medium text-fg leading-none">40+</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(42,41,40,0.5)" }}>Years of healing</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Marquee */}
          {mounted && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
              <ScrollMarquee items={TAGS} baseSpeed={50} direction={1} />
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
