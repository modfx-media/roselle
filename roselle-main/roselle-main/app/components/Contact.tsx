"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import SplitReveal from "./motion/SplitReveal";
import { submitContactForm } from "@/app/lib/sendForm";

const HOURS = [
  { day: "Mon", full: "Monday",    time: "7:00 – 5:00",   open: true },
  { day: "Tue", full: "Tuesday",   time: "10:00 – 7:00",  open: true },
  { day: "Wed", full: "Wednesday", time: "7:00 – 5:00",   open: true },
  { day: "Thu", full: "Thursday",  time: "2:00 – 7:00",   open: true },
  { day: "Fri", full: "Friday",    time: "7:00 – 5:00",   open: true },
  { day: "Sat", full: "Saturday",  time: "8:00 – 1:00",   open: true },
  { day: "Sun", full: "Sunday",    time: "Closed",         open: false },
];
const TODAY = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date().getDay()];

export default function Contact() {
  const [email, setEmail]   = useState("");
  const [sent, setSent]     = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]   = useState<string | null>(null);
  const sectionRef          = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div id="contact" data-section="contact">
      <section ref={sectionRef} className="relative bg-fg overflow-hidden">

        {/* ── Grain ── */}
        <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none grain-animate"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)' opacity='0.055'/%3E%3C/svg%3E")`,
            backgroundSize: "220px 220px", mixBlendMode: "overlay",
          }}
        />

        {/* ── Full-bleed background image with parallax ── */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            src="/1771.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ y: imgY, scale: 1.12, filter: "brightness(0.45) saturate(0.8)" }}
          />
          {/* Navy color tint — recolors the image blue */}
          <div
            className="absolute inset-0"
            style={{ background: "#2a4575", mixBlendMode: "multiply", opacity: 0.7 }}
          />
          {/* Vignette */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(42,69,117,0.4) 0%, rgba(26,47,82,0.85) 70%)" }} />
          {/* Gold bloom */}
          <div className="absolute pointer-events-none"
            style={{ top: "20%", right: "15%", width: "500px", height: "500px",
              background: "radial-gradient(circle, rgba(198,177,128,0.08) 0%, transparent 65%)" }} />
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 py-section-py max-md:px-s4">

          {/* ── Eyebrow ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex items-center gap-3 mb-s5"
          >
            <span className="w-8 h-px" style={{ background: "rgba(198,177,128,0.5)" }} />
            <span className="text-xs tracking-[0.22em] uppercase font-sans"
              style={{ color: "rgba(198,177,128,0.75)" }}>Get In Touch</span>
          </motion.div>

          {/* ── Headline ── */}
          <div className="mb-s12">
            <SplitReveal text="Start Your Journey" as="h2"
              className="text-fluid-5xl text-bg tracking-tight leading-[1.0]" stagger={0.05} />
            <SplitReveal text="to Wellness." as="h2"
              className="text-fluid-5xl text-bg tracking-tight leading-[1.0]" stagger={0.05}>
              <span className="sr-word inline-block text-accent">&nbsp;</span>
            </SplitReveal>
          </div>

          {/* ── Main layout: left content + right panel ── */}
          <div className="grid grid-cols-[1fr_420px] gap-s8 items-start max-lg:grid-cols-1">

            {/* ── LEFT COLUMN ── */}
            <div className="flex flex-col gap-s6">

              {/* Phone block */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-xs tracking-[0.2em] uppercase mb-s2 font-sans"
                  style={{ color: "rgba(198,177,128,0.55)" }}>Call us today</p>
                <a href="tel:+17036987117"
                  className="block font-serif font-medium text-bg tracking-tight leading-none
                             transition-colors duration-300 hover:text-accent"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>
                  (703) 698-7117
                </a>
                <div className="flex items-center gap-s3 mt-s4 flex-wrap">
                  <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs"
                    style={{
                      background: "rgba(198,177,128,0.1)",
                      border: "1px solid rgba(198,177,128,0.22)",
                      color: "rgba(198,177,128,0.85)",
                    }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Free 20-Min Consultation
                  </span>
                  <MagneticButton className="btn-primary-inverted"
                    onClick={() => window.location.href = "tel:+17036987117"}>
                    Call Now
                  </MagneticButton>
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-px origin-left"
                style={{ background: "rgba(245,244,239,0.08)" }}
              />

              {/* Email form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-fluid-base font-serif font-medium text-bg mb-s3 leading-snug">
                  Or send us a message.
                </p>
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="sent"
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl p-s4 text-sm"
                      style={{ background: "rgba(198,177,128,0.1)", border: "1px solid rgba(198,177,128,0.25)", color: "rgba(198,177,128,0.9)" }}>
                      ✓ &nbsp;Message sent — we&apos;ll be in touch soon.
                    </motion.div>
                  ) : (
                    <motion.form key="form"
                      className="flex gap-2 rounded-2xl p-1.5"
                      style={{ background: "rgba(245,244,239,0.05)", border: "1px solid rgba(245,244,239,0.1)" }}
                      onSubmit={async e => {
                        e.preventDefault();
                        setSending(true);
                        setError(null);
                        const result = await submitContactForm("Quick Contact (Footer)", { Email: email });
                        setSending(false);
                        if (result.ok) setSent(true);
                        else setError(result.error || "Could not send message.");
                      }}>
                      <input type="email" placeholder="Your email address" required
                        value={email} onChange={e => setEmail(e.target.value)}
                        aria-label="Email address"
                        className="flex-1 bg-transparent border-none px-s3 text-sm h-11 min-w-0 rounded-xl transition-all duration-200"
                        style={{
                          color: "rgba(245,244,239,0.8)",
                          outline: "none",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(198,177,128,0.35)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                      <MagneticButton className="btn-primary-inverted" type="submit">{sending ? "…" : "Send"}</MagneticButton>
                    </motion.form>
                  )}
                </AnimatePresence>
                {error && <p className="mt-s2 text-xs text-red-300">{error}</p>}
              </motion.div>

              {/* Divider */}
              <div className="h-px" style={{ background: "rgba(245,244,239,0.08)" }} />

              {/* Address + directions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start justify-between gap-s6 max-sm:flex-col"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-s2 font-sans"
                    style={{ color: "rgba(198,177,128,0.5)" }}>Address</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.65)" }}>
                    8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                  </p>
                  <a href="https://maps.app.goo.gl/5WJebWVTjWfPRX3VA"
                    target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs mt-s2 transition-opacity hover:opacity-100 opacity-60"
                    style={{ color: "rgba(198,177,128,0.9)" }}>
                    Get Directions <span className="arrow-nudge">→</span>
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase mb-s2 font-sans"
                    style={{ color: "rgba(198,177,128,0.5)" }}>Rating</p>
                  <p className="font-serif font-medium text-bg leading-none"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}>
                    4.5<span className="text-accent">★</span>
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(245,244,239,0.35)" }}>52 Google Reviews</p>
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT PANEL: Hours + Book CTA ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-s4"
            >

              {/* Hours card — liquid glass */}
              <div className="rounded-3xl p-s5 relative overflow-hidden"
                style={{
                  background: "rgba(245,244,239,0.04)",
                  backdropFilter: "blur(24px) saturate(160%)",
                  WebkitBackdropFilter: "blur(24px) saturate(160%)",
                  border: "1px solid rgba(245,244,239,0.09)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 24px 48px rgba(0,0,0,0.3)",
                }}>
                <div className="flex items-center justify-between mb-s4">
                  <p className="text-xs tracking-[0.2em] uppercase font-sans"
                    style={{ color: "rgba(198,177,128,0.6)" }}>Hours of Operation</p>
                  <span className="inline-flex items-center gap-1.5 text-xs rounded-full px-2.5 py-1 gold-pulse"
                    style={{ background: "rgba(198,177,128,0.1)", color: "rgba(198,177,128,0.8)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Open Today
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  {HOURS.map((h, i) => {
                    const isToday = h.day === TODAY;
                    return (
                      <motion.div key={h.day}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04 + 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center justify-between rounded-xl px-3 py-2.5"
                        style={{
                          background: isToday ? "rgba(198,177,128,0.12)" : "transparent",
                          border: isToday ? "1px solid rgba(198,177,128,0.2)" : "1px solid transparent",
                        }}>
                        <div className="flex items-center gap-2">
                          {isToday
                            ? <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            : <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "rgba(245,244,239,0.12)" }} />
                          }
                          <span className="text-xs font-medium"
                            style={{ color: isToday ? "rgba(245,244,239,0.95)" : "rgba(245,244,239,0.4)" }}>
                            {h.full}
                          </span>
                        </div>
                        <span className="text-xs font-mono"
                          style={{ color: h.open ? (isToday ? "rgba(245,244,239,0.85)" : "rgba(245,244,239,0.45)") : "rgba(245,244,239,0.18)" }}>
                          {h.time}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Book CTA card */}
              <div className="rounded-3xl p-s5 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(198,177,128,0.14) 0%, rgba(198,177,128,0.04) 100%)",
                  border: "1px solid rgba(198,177,128,0.18)",
                  boxShadow: "inset 0 1px 0 rgba(198,177,128,0.1)",
                }}>
                {/* Glow */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 100% 0%, rgba(198,177,128,0.1) 0%, transparent 60%)" }} />

                <p className="text-xs tracking-[0.2em] uppercase mb-s2 font-sans relative z-1"
                  style={{ color: "rgba(198,177,128,0.65)" }}>New Patients Welcome</p>
                <p className="font-serif font-medium text-bg leading-snug mb-s4 relative z-1"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                  Ready to start your<br />healing journey?
                </p>
                <div className="flex flex-col gap-2 relative z-1">
                  <MagneticButton
                    onClick={() => window.location.href = "/appointment"}
                    className="btn-primary-inverted w-fit">
                    Book Online
                  </MagneticButton>
                  <p className="text-xs" style={{ color: "rgba(245,244,239,0.3)" }}>
                    Or call (703) 698-7117
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* ── Bottom fade into footer ── */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-fg))" }} />
      </section>
    </div>
  );
}
