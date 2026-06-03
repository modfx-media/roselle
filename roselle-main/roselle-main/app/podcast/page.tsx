"use client";

import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import SpotlightCard from "@/app/components/motion/SpotlightCard";
import SplitReveal from "@/app/components/motion/SplitReveal";

const PODCAST_URL = "https://www.drtomroselle.com/ageless-health-podcast";
const CONNECT_URL = "https://www.drtomroselle.com/connect/";

type PodcastCard = {
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  icon: "calendar" | "headphones" | "bell";
};

const CARDS: PodcastCard[] = [
  {
    eyebrow: "Upcoming Episodes",
    title: "What's coming next on Ageless Health®.",
    body: "Browse upcoming episodes, guest interviews, and talking points on Dr. Tom Roselle's official podcast page — kept up to date by the clinic team.",
    cta: { label: "View upcoming episodes", href: PODCAST_URL },
    icon: "calendar",
  },
  {
    eyebrow: "Listen On",
    title: "Stream on your favorite platform.",
    body: "One link, every platform — Apple, Spotify, and more, all from Dr. Roselle's connect page.",
    cta: { label: "Listen On", href: CONNECT_URL },
    icon: "headphones",
  },
  {
    eyebrow: "Never Miss an Episode",
    title: "Sign up for the newsletter.",
    body: "Follow Ageless Health® with Dr. Tom Roselle, DC and get every new episode the moment it drops.",
    cta: { label: "Subscribe & follow", href: "https://www.drtomroselle.com/newsletter-sign-up/" },
    icon: "bell",
  },
];

function CardIcon({ name }: { name: PodcastCard["icon"] }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "calendar") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 3v4M16 3v4" />
      </svg>
    );
  }
  if (name === "headphones") {
    return (
      <svg {...common}>
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
        <path d="M4 15a2 2 0 0 1 2-2h2v6H6a2 2 0 0 1-2-2v-2zM20 15a2 2 0 0 0-2-2h-2v6h2a2 2 0 0 0 2-2v-2z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2z" />
      <path d="M10 20a2 2 0 0 0 4 0" />
    </svg>
  );
}

function PodcastHub() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="about-noise bg-fg py-section-py overflow-hidden relative">
      {/* Ambient motion graphics */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(198,177,128,0.22), transparent 70%)" }}
            animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(198,177,128,0.16), transparent 70%)" }}
            animate={{ x: [0, -30, 20, 0], y: [0, -20, 10, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="max-w-[1200px] mx-auto px-s4 relative">
        <div className="max-w-[760px] mb-s7">
          <div
            className="text-xs uppercase tracking-[0.18em] mb-s3"
            style={{ color: "rgba(198,177,128,0.95)" }}
          >
            The Podcast Hub
          </div>
          <SplitReveal
            text="Three ways to stay close to the show."
            as="h2"
            className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] text-bg"
          />
          <p
            className="mt-s4 text-base leading-relaxed max-w-[620px]"
            style={{ color: "rgba(245,244,239,0.7)" }}
          >
            Find the next episode, choose how you listen, and never miss a release — all from one place.
          </p>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-s5">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.eyebrow}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
              }
            >
              <SpotlightCard
                className="h-full p-s6 rounded-2xl flex flex-col"
                style={{
                  background: "rgba(245,244,239,0.04)",
                  border: "1px solid rgba(245,244,239,0.08)",
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-s5"
                  style={{
                    background: "rgba(198,177,128,0.12)",
                    color: "rgba(198,177,128,1)",
                  }}
                  whileHover={prefersReducedMotion ? undefined : { rotate: [0, -8, 8, 0], scale: 1.08 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <CardIcon name={card.icon} />
                </motion.div>

                <div
                  className="text-[11px] uppercase tracking-[0.18em] mb-s2"
                  style={{ color: "rgba(198,177,128,0.95)" }}
                >
                  {card.eyebrow}
                </div>
                <h3 className="font-serif text-2xl leading-tight text-bg mb-s3">
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-s5"
                  style={{ color: "rgba(245,244,239,0.65)" }}
                >
                  {card.body}
                </p>

                <div className="mt-auto pt-s2">
                  <a
                    href={card.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium px-s4 h-11 rounded-full transition-all"
                    style={{
                      background: "rgba(198,177,128,1)",
                      color: "var(--color-fg)",
                    }}
                  >
                    <span>{card.cta.label}</span>
                    <motion.span
                      aria-hidden
                      className="inline-block"
                      initial={{ x: 0 }}
                      whileHover={prefersReducedMotion ? undefined : { x: 4 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function PodcastPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Podcast · Ageless Health® with Dr. Tom Roselle, DC"
            title="The Roselle Healing Podcast."
            subtitle="Honest conversations on chiropractic care, functional medicine, and the small daily decisions that move the body toward healing. Hosted by Dr. Tom Roselle, DC — recorded in Fairfax, Virginia."
            crumbs={[{ label: "Home", href: "/" }, { label: "Podcast" }]}
            image="/services/close-up-cupping-therapy-experience.jpg"
            imageAlt="The Roselle Healing Podcast."
          />

          <PodcastHub />

          <ContentBlock
            eyebrow="Suggested Topic"
            title="Have something you'd like Dr. Roselle to cover?"
            body="We love hearing from listeners. Share the health question or wellness topic you'd like discussed on a future episode and our team will pass it along to Dr. Roselle."
          >
            <div className="mt-s5 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium px-s4 h-11 rounded-full transition-colors"
                style={{ background: "var(--color-fg)", color: "var(--color-bg)" }}
              >
                Suggest a topic →
              </a>
              <a
                href={CONNECT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-s4 h-11 rounded-full border transition-colors"
                style={{ borderColor: "rgba(42,41,40,0.2)", color: "var(--color-fg)" }}
              >
                Connect with Dr. Roselle ↗
              </a>
            </div>
          </ContentBlock>

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
