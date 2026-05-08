"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import MagneticButton from "../components/motion/MagneticButton";
import SplitReveal from "../components/motion/SplitReveal";
import PageHero from "../components/templates/PageHero";

type Episode = {
  number: string;
  date: string;
  status: "Upcoming" | "Featured" | "Live Q&A";
  title: string;
  guest?: string;
  duration: string;
  summary: string;
  talkingPoints: string[];
  image: string;
};

const UPCOMING: Episode[] = [
  {
    number: "Ep. 014",
    date: "May 21, 2026",
    status: "Upcoming",
    title: "Rewiring the Stress Response: Functional Medicine for Modern Burnout",
    guest: "Dr. Tom Roselle, DC with Dr. Mira Chen, MD",
    duration: "48 min",
    summary:
      "A practical conversation about cortisol patterns, sleep architecture, and the small daily levers that move the nervous system out of fight-or-flight.",
    talkingPoints: [
      "How chronic stress reshapes posture, digestion, and immunity",
      "The HPA axis in plain English — and what your labs are really saying",
      "Three nervous-system resets you can run before bed tonight",
      "When to combine chiropractic care with functional medicine",
    ],
    image: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
  },
  {
    number: "Ep. 015",
    date: "June 4, 2026",
    status: "Upcoming",
    title: "Lower Back Pain Without the Pills: A Whole-Body Roadmap",
    guest: "Dr. Tom Roselle, DC",
    duration: "39 min",
    summary:
      "Why most lower back pain isn't a back problem at all — and the assessment sequence we walk every new patient through at Roselle Center.",
    talkingPoints: [
      "Hips, glutes, and feet: the real drivers behind lumbar pain",
      "What an Applied Kinesiology screen can reveal in 12 minutes",
      "Movement homework that actually sticks",
      "Red flags that mean it's time for imaging",
    ],
    image: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
  },
  {
    number: "Ep. 016",
    date: "June 18, 2026",
    status: "Live Q&A",
    title: "Live From Fairfax: Listener Questions on Prenatal Chiropractic",
    guest: "Dr. Tom Roselle, DC + Roselle Care Team",
    duration: "60 min · Live",
    summary:
      "An open-mic episode answering the prenatal questions we hear most often — from first trimester adjustments to the Webster Technique.",
    talkingPoints: [
      "Is chiropractic safe in every trimester?",
      "Webster Technique: what it is and when it helps",
      "Pelvic alignment, baby positioning, and easier labor",
      "Postpartum recovery that respects your body's timeline",
    ],
    image: "/services/woman-with-physical-impairment-analyzing-x-ray-scan-with-doctor-checkup-visit-medical-cabinet-old-patient-wheelchair-user-looking-bones-radiography-diagnosis-results-healthcare.jpg",
  },
];

const FEATURED: Episode = {
  number: "Ep. 013",
  date: "May 7, 2026",
  status: "Featured",
  title: "The Spine, the Brain, and Why Adjustments Feel So Good",
  guest: "Dr. Tom Roselle, DC",
  duration: "42 min",
  summary:
    "A deep dive into the neurology of the chiropractic adjustment — what's actually happening when the joint moves and the body lets go.",
  talkingPoints: [
    "Mechanoreceptors and the calming cascade",
    "Why one adjustment can change your whole day",
    "Posture as a window into the nervous system",
  ],
  image: "/services/close-up-cupping-therapy-experience.jpg",
};

const PLATFORMS = [
  { label: "Apple Podcasts", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "RSS", href: "#" },
];

export default function PodcastPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Podcast · New episodes weekly"
            title="The Roselle Healing Podcast."
            subtitle="Honest conversations on chiropractic care, functional medicine, and the small daily decisions that move the body toward healing. Hosted by Dr. Tom Roselle, DC — recorded in Fairfax, Virginia."
            crumbs={[{ label: "Home", href: "/" }, { label: "Podcast" }]}
            image="/services/close-up-cupping-therapy-experience.jpg"
            imageAlt="The Roselle Healing Podcast."
            primaryCta={{ label: "See upcoming episodes", href: "#upcoming" }}
            secondaryCta={{ label: "Listen on Apple Podcasts", href: "#" }}
          />

          <section className="bg-bg py-s8">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 flex flex-wrap items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-accent font-sans mr-s3">Listen on</span>
              {PLATFORMS.map((p) => (
                <a key={p.label} href={p.href} className="text-xs tracking-wide uppercase px-3 py-2 rounded-full border border-fg/15 text-fg/75 hover:border-accent hover:text-accent transition-colors">{p.label}</a>
              ))}
            </div>
          </section>

          {/* Featured Episode */}
          <section className="bg-fg about-noise py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-s4"
                  style={{ color: "rgba(198,177,128,0.85)" }}
                >
                  Now playing
                </p>
              </RevealSection>

              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1 items-stretch">
                <RevealSection>
                  <div className="rounded-xl overflow-hidden h-full bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={FEATURED.image}
                        alt={FEATURED.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-s6">
                      <div
                        className="flex items-center gap-s3 text-xs tracking-widest uppercase mb-s3"
                        style={{ color: "rgba(245,244,239,0.5)" }}
                      >
                        <span style={{ color: "rgba(198,177,128,0.95)" }}>{FEATURED.number}</span>
                        <span>·</span>
                        <span>{FEATURED.date}</span>
                        <span>·</span>
                        <span>{FEATURED.duration}</span>
                      </div>
                      <h2 className="text-fluid-2xl font-serif text-bg tracking-tight leading-snug mb-s3">
                        {FEATURED.title}
                      </h2>
                      {FEATURED.guest && (
                        <p
                          className="text-sm mb-s4"
                          style={{ color: "rgba(245,244,239,0.55)" }}
                        >
                          With {FEATURED.guest}
                        </p>
                      )}
                      <p
                        className="text-fluid-base leading-relaxed"
                        style={{ color: "rgba(245,244,239,0.65)" }}
                      >
                        {FEATURED.summary}
                      </p>
                    </div>
                  </div>
                </RevealSection>

                <RevealSection delay={0.08}>
                  <div className="h-full rounded-xl border border-[rgba(245,244,239,0.08)] bg-[rgba(245,244,239,0.03)] p-s6 flex flex-col">
                    <p
                      className="text-xs tracking-[0.2em] uppercase mb-s4"
                      style={{ color: "rgba(198,177,128,0.85)" }}
                    >
                      Talking points
                    </p>
                    <ul className="flex flex-col gap-s4 flex-1">
                      {FEATURED.talkingPoints.map((tp, i) => (
                        <li
                          key={i}
                          className="flex gap-s3 text-fluid-base leading-relaxed"
                          style={{ color: "rgba(245,244,239,0.78)" }}
                        >
                          <span
                            className="shrink-0 w-7 h-7 rounded-full grid place-items-center text-xs font-medium"
                            style={{
                              background: "rgba(198,177,128,0.15)",
                              color: "rgba(198,177,128,0.95)",
                              border: "1px solid rgba(198,177,128,0.35)",
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-s6 flex flex-wrap gap-s3">
                      <MagneticButton className="btn-primary" onClick={() => undefined}>
                        Listen now
                      </MagneticButton>
                      <a
                        href="#upcoming"
                        className="text-sm font-medium text-accent hover:text-bg transition-colors duration-200 self-center"
                      >
                        See what&apos;s next →
                      </a>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Upcoming Episodes */}
          <section id="upcoming" className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-s4"
                  style={{ color: "rgba(42,41,40,0.55)" }}
                >
                  Upcoming episodes
                </p>
              </RevealSection>

              <SplitReveal
                text="What we&rsquo;re recording next"
                as="h2"
                className="text-fluid-4xl text-fg tracking-tight leading-[1.05] max-w-[820px]"
              />

              <RevealSection delay={0.1}>
                <p
                  className="mt-s5 max-w-[640px] text-fluid-base leading-relaxed mb-s10"
                  style={{ color: "rgba(42,41,40,0.6)" }}
                >
                  Get a peek at the conversations queued up for the studio — including
                  guests, themes, and the questions we&rsquo;ll be tackling on each show.
                </p>
              </RevealSection>

              <div className="flex flex-col gap-s6">
                {UPCOMING.map((ep, i) => (
                  <RevealSection key={ep.number} delay={i * 0.05}>
                    <article className="grid grid-cols-[280px_1fr] max-md:grid-cols-1 gap-s6 p-s6 rounded-xl bg-card-bg border border-[rgba(42,41,40,0.08)]">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={ep.image}
                          alt={ep.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="flex flex-wrap items-center gap-s3 mb-s3">
                          <span
                            className="text-[11px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                            style={{
                              background:
                                ep.status === "Live Q&A"
                                  ? "rgba(198,177,128,0.18)"
                                  : "rgba(42,41,40,0.06)",
                              color:
                                ep.status === "Live Q&A"
                                  ? "rgba(140,110,40,1)"
                                  : "rgba(42,41,40,0.65)",
                              border:
                                ep.status === "Live Q&A"
                                  ? "1px solid rgba(198,177,128,0.45)"
                                  : "1px solid rgba(42,41,40,0.1)",
                            }}
                          >
                            {ep.status}
                          </span>
                          <span
                            className="text-xs tracking-widest uppercase"
                            style={{ color: "rgba(42,41,40,0.55)" }}
                          >
                            {ep.number} · {ep.date} · {ep.duration}
                          </span>
                        </div>

                        <h3 className="text-fluid-2xl font-serif text-fg tracking-tight leading-snug mb-s3">
                          {ep.title}
                        </h3>
                        {ep.guest && (
                          <p
                            className="text-sm mb-s3"
                            style={{ color: "rgba(42,41,40,0.6)" }}
                          >
                            With {ep.guest}
                          </p>
                        )}
                        <p
                          className="text-fluid-base leading-relaxed mb-s4"
                          style={{ color: "rgba(42,41,40,0.7)" }}
                        >
                          {ep.summary}
                        </p>

                        <div className="grid grid-cols-2 gap-x-s5 gap-y-2 max-md:grid-cols-1">
                          {ep.talkingPoints.map((tp, idx) => (
                            <div
                              key={idx}
                              className="flex gap-s2 text-sm leading-relaxed"
                              style={{ color: "rgba(42,41,40,0.7)" }}
                            >
                              <span className="text-accent mt-1">▸</span>
                              <span>{tp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* Subscribe CTA */}
          <section className="bg-fg about-noise py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 border border-[rgba(245,244,239,0.08)] bg-[rgba(245,244,239,0.04)]">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl font-serif text-bg tracking-tight leading-snug">
                      Never miss an episode
                    </h3>
                    <p
                      className="text-fluid-base leading-relaxed"
                      style={{ color: "rgba(245,244,239,0.6)" }}
                    >
                      Subscribe wherever you listen, or send us a question you&rsquo;d like
                      Dr. Roselle to answer on the next live Q&amp;A.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary"
                      onClick={() => (window.location.href = "tel:+17036987117")}
                    >
                      Suggest a topic
                    </MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
