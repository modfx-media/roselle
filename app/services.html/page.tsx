"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import MagneticButton from "../components/motion/MagneticButton";
import SpotlightCard from "../components/motion/SpotlightCard";
import ParallaxImage from "../components/motion/ParallaxImage";
import ScrollScale from "../components/motion/ScrollScale";
import Contact from "../components/Contact";

const SERVICES = [
  {
    title: "Chiropractic Care",
    href: "/services/chiropractic.html",
    tags: ["Spinal Alignment", "Pain Relief", "Adjustments"],
    img: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
  },
  {
    title: "Acupuncture",
    href: "/services/acupuncture.html",
    tags: ["Energy Balance", "Chronic Pain", "Healing"],
    img: "/services/close-up-cupping-therapy-experience.jpg",
  },
  {
    title: "Applied Kinesiology",
    href: "/services/applied-kinesiology.html",
    tags: ["Muscle Testing", "Diagnosis", "Balance"],
    img: "/services/download.jpeg",
  },
  {
    title: "Massage Therapy",
    href: "/services/massage-therapy.html",
    tags: ["Relaxation", "Cupping", "Recovery"],
    img: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
  },
  {
    title: "Functional Medicine",
    href: "/functional-medicine",
    tags: ["Root Cause", "Integrative", "Prevention"],
    img: "/services/woman-with-physical-impairment-analyzing-x-ray-scan-with-doctor-checkup-visit-medical-cabinet-old-patient-wheelchair-user-looking-bones-radiography-diagnosis-results-healthcare.jpg",
  },
  {
    title: "Nutrition",
    href: "https://www.rosellecare.com/services/nutrition.html",
    tags: ["Wellness", "Diet", "Lifestyle"],
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  },
  {
    title: "Sports Medicine & Rehabilitation",
    href: "/sports-medicine",
    tags: ["Rehab", "Performance", "Recovery"],
    img: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
  },
  {
    title: "Prenatal Chiropractic",
    href: "/prenatal-chiropractic",
    tags: ["Pregnancy", "Comfort", "Wellness"],
    img: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
  },
  {
    title: "Webster Technique",
    href: "/webster-technique",
    tags: ["Prenatal", "Pelvis", "Balance"],
    img: "/services/close-up-cupping-therapy-experience.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Services</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Comprehensive Chiropractic Care at Roselle Center for Healing"
                as="h1"
                className="text-fluid-4xl text-bg tracking-tight leading-[1.05] max-w-[20ch]"
              />
            </div>
          </section>

          {/* ── Intro: Healing With Purpose ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Our Services
                </p>
                <SplitReveal
                  text="Healing With Purpose: Services At Roselle Center For Healing"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[26ch]"
                />
              </RevealSection>

              <div className="grid grid-cols-[1fr_1fr] gap-s10 mt-s10 items-center
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                {/* Image */}
                <RevealSection delay={0.1}>
                  <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(42,41,40,0.04)" }}>
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/services.png.webp?157e097e54c08e04ae83d378888d2a14"
                      alt="Chiropractor assisting patient with arm adjustment in clinical setting at Roselle Center for Healing."
                      speed={0.18}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                {/* Text */}
                <div className="flex flex-col gap-s4">
                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      When your health feels out of sync, finding the right kind of care can feel like
                      searching in the dark. At Roselle Center for Healing in Fairfax, VA, we offer a
                      full spectrum of services designed to bring clarity, connection, and real
                      relief. Whether you&rsquo;re managing chronic back pain, navigating neck pain, or seeking
                      answers that go deeper than surface-level symptoms, our approach is grounded in
                      collaboration and long-term wellness.
                    </p>
                  </RevealSection>
                </div>
              </div>
            </div>
          </section>

          {/* ── Chiropractic Care Section ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[22ch]">
                  Chiropractic Care That Goes Beyond The Adjustment
                </h2>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[65ch]" style={{ color: "rgba(245,244,239,0.62)" }}>
                  At the center of our practice is chiropractic care—the foundation for restoring
                  balance and mobility throughout the body. Dr. Tom Roselle brings decades of
                  experience to each patient interaction, delivering care that&rsquo;s precise and tailored.
                  Whether your goal is to relieve back pain, ease tension from neck pain, or
                  improve your posture, chiropractic care helps bring your nervous system back into
                  alignment so the rest of the body can follow.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Functional Medicine + Massage Therapy Cards ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">

                <RevealSection>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            card-hover-lift">
                    <span className="text-xs text-accent font-semibold tracking-widest">01</span>
                    <h2 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                      Functional Medicine: Looking Beneath The Surface
                    </h2>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>
                      For patients who are tired of quick fixes and want to understand the root of
                      their health concerns, our functional medicine services offer a deeper path. We
                      explore how diet, inflammation, hormone imbalances, toxins, and stress all work
                      together to influence your health. With advanced testing and individualized
                      treatment plans, we help patients discover the &ldquo;why&rdquo; behind their symptoms—whether it&rsquo;s
                      chronic fatigue, pain, digestive issues, or immune dysfunction.
                    </p>
                  </SpotlightCard>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            card-hover-lift">
                    <span className="text-xs text-accent font-semibold tracking-widest">02</span>
                    <h2 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                      Massage Therapy That Supports Healing, Not Just Relaxation
                    </h2>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>
                      Massage therapy at Roselle Center for Healing is more than a spa experience—it&rsquo;s
                      a powerful part of our integrative care model. Our licensed massage therapists
                      work closely with Dr. Roselle and the rest of the care team to provide targeted
                      treatments that support healing. Whether you&rsquo;re recovering from injury, managing
                      chronic muscle tension, or simply want to feel more at ease in your body,
                      massage therapy helps restore circulation, reduce stress, and enhance mobility.
                    </p>
                  </SpotlightCard>
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── All Services Grid ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">

              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Explore
                </p>
                <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[22ch] mb-s8">
                  Our Full Range of Services
                </h2>
              </RevealSection>

              <div className="grid grid-cols-3 gap-s4 max-lg:grid-cols-2 max-md:grid-cols-1">
                {SERVICES.map((s) => {
                  const isExternal = s.href.startsWith("http");
                  return (
                    <ScrollScale key={s.title}>
                      <SpotlightCard className="rounded-xl overflow-hidden flex flex-col h-full"
                        style={{ background: "rgba(245,244,239,0.04)", border: "1px solid rgba(245,244,239,0.08)" }}>
                        <div className="h-[200px] relative overflow-hidden shrink-0">
                          <ParallaxImage src={s.img} alt={s.title} speed={0.07} />
                        </div>
                        <div className="p-s3 pb-s4 flex flex-col gap-s2 flex-1">
                          <div className="flex flex-wrap gap-1.5">
                            {s.tags.map(t => (
                              <span key={t} className="rounded-full py-0.5 px-2.5 text-xs"
                                style={{ background: "rgba(245,244,239,0.06)", color: "rgba(245,244,239,0.55)" }}>{t}</span>
                            ))}
                          </div>
                          <h3 className="text-xl text-bg mt-s1">{s.title}</h3>
                          <a
                            href={s.href}
                            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group text-xs inline-block mt-auto pb-px transition-opacity duration-200
                                       opacity-55 hover:opacity-100 hover-underline-gold"
                            style={{ color: "rgba(245,244,239,0.65)" }}
                          >
                            Learn more <span className="arrow-nudge">&rarr;</span>
                          </a>
                        </div>
                      </SpotlightCard>
                    </ScrollScale>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Collaborative Care ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[24ch]">
                  Collaborative, Patient-Focused Care In Fairfax, VA
                </h2>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[65ch]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  What makes our services different is the way they work together. Each patient
                  receives a customized plan that may combine chiropractic, functional medicine,
                  massage therapy, acupuncture, or other treatments. We don&rsquo;t believe in
                  one-size-fits-all solutions. Instead, we believe in giving your body what it needs to repair
                  itself—carefully, consistently, and with the guidance of an experienced team.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA: Start Your Health Journey ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10
                                rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4"
                  style={{ background: "rgba(245,244,239,0.04)", border: "1px solid rgba(245,244,239,0.08)" }}>
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                      Start Your Health Journey With A Chiropractor Near You
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                      If you&rsquo;re looking for a chiropractor near you in Fairfax, VA who offers a
                      whole-body approach to healing, call Roselle Center for Healing at (703) 698-7117.
                      Whether you&rsquo;re seeking relief from back pain or neck pain or exploring functional
                      medicine and massage therapy, we&rsquo;re here to help you find the answers—and the
                      care—you&rsquo;ve been looking for.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "tel:+17036987117"}
                    >
                      Call (703) 698-7117
                    </MagneticButton>
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "/appointment"}
                    >
                      Book an Appointment
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