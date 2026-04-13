"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import RevealSection from "./motion/RevealSection";
import MagneticButton from "./motion/MagneticButton";
import ParallaxImage from "./motion/ParallaxImage";

const HOURS = [
  { day: "Monday",    time: "7:00 am \u2013 5:00 pm",  open: true },
  { day: "Tuesday",   time: "10:00 am \u2013 7:00 pm", open: true },
  { day: "Wednesday", time: "7:00 am \u2013 5:00 pm",  open: true },
  { day: "Thursday",  time: "2:00 pm \u2013 7:00 pm",  open: true },
  { day: "Friday",    time: "7:00 am \u2013 5:00 pm",  open: true },
  { day: "Saturday",  time: "8:00 am \u2013 1:00 pm",  open: true },
  { day: "Sunday",    time: "Closed",              open: false },
];

export default function Contact() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div id="contact" data-section="contact">
      <section className="py-section-py bg-bg">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          {/* Section header */}
          <RevealSection>
            <div className="mb-s10">
              <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                Get In Touch
              </p>
              <h2 className="text-fluid-4xl text-fg tracking-tight leading-[1.08] mt-s1">
                Start Your Journey<br />
                to <span className="text-accent">Wellness</span>
              </h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 gap-s6 items-start max-md:grid-cols-1">

            {/* Left: CTA card */}
            <RevealSection delay={0.1}>
              <div className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s4">

                {/* Phone */}
                <div className="flex flex-col gap-s1">
                  <p className="text-xs tracking-widest uppercase"
                    style={{ color: "rgba(42,41,40,0.5)" }}>Call us today</p>
                  <a href="tel:+17036987117"
                    className="text-fluid-3xl font-serif font-medium text-fg tracking-tight leading-none
                               transition-colors duration-200 hover:text-accent">
                    (703) 698-7117
                  </a>
                  <span className="consult-badge inline-flex items-center gap-1.5 rounded-full
                                   py-1 px-3 text-xs w-fit mt-s1"
                    style={{
                      background: "rgba(198,177,128,0.18)",
                      border: "1px solid rgba(198,177,128,0.35)",
                      color: "rgba(42,41,40,0.75)",
                    }}>
                    Free 20-Min Consultation
                  </span>
                </div>

                <div className="w-full h-px" style={{ background: "rgba(42,41,40,0.09)" }} />

                {/* Email form */}
                <div className="flex flex-col gap-s1">
                  <p className="text-sm mb-s2" style={{ color: "rgba(42,41,40,0.6)" }}>
                    Or send us a message and we&apos;ll get back to you shortly.
                  </p>
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg p-s3 text-sm text-fg"
                      style={{
                        background: "rgba(198,177,128,0.15)",
                        border: "1px solid rgba(198,177,128,0.4)",
                      }}
                    >
                      &#10003; &nbsp;Message sent — we&apos;ll be in touch soon.
                    </motion.div>
                  ) : (
                    <form
                      className="flex gap-1 rounded-lg p-1"
                      style={{ background: "rgba(42,41,40,0.07)" }}
                      onSubmit={e => {
                        e.preventDefault();
                        window.location.href = `mailto:rosellecare@gmail.com?subject=Appointment Request&body=Email: ${email}`;
                        setSent(true);
                      }}
                    >
                      <input
                        type="email"
                        placeholder="Your email address"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        aria-label="Email address"
                        className="flex-1 bg-transparent border-none outline-none px-s2 text-sm text-fg h-10 min-w-0"
                      />
                      <MagneticButton type="submit">Send</MagneticButton>
                    </form>
                  )}
                </div>

                <div className="w-full h-px" style={{ background: "rgba(42,41,40,0.09)" }} />

                {/* Hours */}
                <div className="flex flex-col gap-[7px]">
                  <p className="text-xs tracking-widest uppercase mb-s1"
                    style={{ color: "rgba(42,41,40,0.45)" }}>Hours of Operation</p>
                  {HOURS.map(h => (
                    <div key={h.day} className="flex justify-between items-center text-sm">
                      <span style={{ color: "rgba(42,41,40,0.6)" }}>{h.day}</span>
                      <span className={`flex items-center gap-1.5 font-medium ${!h.open ? "font-normal" : ""}`}
                        style={{ color: h.open ? "var(--color-fg)" : "rgba(42,41,40,0.3)" }}>
                        {h.open && <span className="w-[5px] h-[5px] rounded-full bg-accent shrink-0" />}
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px" style={{ background: "rgba(42,41,40,0.09)" }} />

                {/* Address */}
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                    8500 Executive Park Ave, Suite 300<br />
                    Fairfax, VA 22031
                  </p>
                  <a
                    href="https://maps.app.goo.gl/5WJebWVTjWfPRX3VA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-fg opacity-55 hover:opacity-100 inline-block pb-px
                               transition-opacity duration-200"
                    style={{ borderBottom: "1px solid rgba(42,41,40,0.2)" }}
                  >
                    Get Directions &rarr;
                  </a>
                </div>

              </div>
            </RevealSection>

            {/* Right: image stack */}
            <RevealSection delay={0.2}>
              <div className="relative flex flex-col gap-s3">
                <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&h=700&fit=crop"
                    alt="Roselle Center for Healing — Fairfax, VA"
                    speed={0.08}
                  />
                  <div className="absolute bottom-s3 left-s3 rounded-lg p-s2 px-s3 z-2"
                    style={{
                      background: "rgba(42,41,40,0.72)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: "1px solid rgba(198,177,128,0.2)",
                    }}>
                    <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(198,177,128,0.9)" }}>Location</span>
                    <p className="text-sm text-bg font-medium mt-0.5">Merrifield &middot; Fairfax, VA</p>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden aspect-[16/7] relative">
                  <ParallaxImage
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                    alt="Chiropractic care"
                    speed={0.12}
                  />
                </div>

                {/* Floating stat card */}
                <motion.div
                  className="absolute top-s3 right-s3 bg-card-bg rounded-lg p-s2 px-s3
                             shadow-[0_8px_24px_rgba(42,41,40,0.12)] z-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 18 }}
                >
                  <p className="text-fluid-3xl text-fg font-serif leading-none tracking-tight">
                    4.5<span className="text-accent">&#9733;</span>
                  </p>
                  <p className="text-xs mt-1" style={{ color: "rgba(42,41,40,0.55)" }}>52 Google Reviews</p>
                </motion.div>
              </div>
            </RevealSection>

          </div>
        </div>
      </section>
    </div>
  );
}
