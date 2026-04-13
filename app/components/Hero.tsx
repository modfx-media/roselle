"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import ParallaxImage from "./motion/ParallaxImage";
import ScrollMarquee from "./motion/ScrollMarquee";
import SplitReveal from "./motion/SplitReveal";

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
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div id="hero" data-section="hero">
      <section className="pt-[calc(var(--spacing-nav-h)+var(--spacing-s8))] pb-s10 relative">
        <div className="hero-grid-bg" aria-hidden="true" />

        <div className="w-full max-w-max-w mx-auto px-s6 relative z-1 max-md:px-s4">
          <motion.div
            className="flex flex-col items-center text-center gap-s3 mb-s8 max-w-[760px] mx-auto"
            variants={container} initial="hidden" animate="show"
          >
            {/* Avatar stack + rating */}
            <motion.div variants={item} className="flex items-center gap-s2">
              <div className="flex">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="w-[34px] h-[34px] rounded-md overflow-hidden
                                          border-2 border-bg bg-card-bg shrink-0 [&+&]:-ml-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.avatar} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-fg">
                <strong>4.5&#9733;</strong> &middot; 52 Google reviews
              </span>
            </motion.div>

            {/* Headline — word-by-word GSAP reveal */}
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
              Roselle Center for Healing takes a truly multidisciplinary approach — chiropractic,
              acupuncture, massage, nutrition, and more — to address root causes, not just symptoms.
            </motion.p>

            {/* Free consult badge */}
            <motion.div variants={item}>
              <span className="inline-block rounded-full px-3.5 py-1 text-xs text-fg mb-s1"
                style={{ background: "rgba(198,177,128,0.18)", border: "1px solid rgba(198,177,128,0.4)" }}>
                Free 20-Minute Consultation Available
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex gap-s2 flex-wrap justify-center">
              <MagneticButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
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

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-s4"
          >
            <div className="rounded-xl overflow-hidden aspect-video relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&h=900&fit=crop"
                alt="Roselle Center for Healing — chiropractic clinic in Fairfax, VA"
                speed={0.12}
                className="w-full h-full"
              />

              {/* Review overlay */}
              <motion.div
                className="absolute bottom-s3 left-s3 bg-card-bg rounded-lg p-s2 px-s3 max-w-[280px] z-10"
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
                    <p className="text-xs" style={{ color: "rgba(42,41,40,0.6)" }}>Google Review</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll-velocity-reactive marquee */}
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
