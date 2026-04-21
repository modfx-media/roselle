"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import MagneticButton from "../components/motion/MagneticButton";
import SpotlightCard from "../components/motion/SpotlightCard";

import type { Metadata } from "next";

const TREATMENTS = [
  {
    num: "01",
    title: "Chiropractic Care",
    body: "Chiropractic care is one type of functional medicine treatment. Chiropractic adjustments can relieve pain, improve nervous system function, reduce inflammation, and expedite the healing process.",
  },
  {
    num: "02",
    title: "Corrective Exercises",
    body: "Corrective exercises are another component of functional medicine. Corrective exercises are tailored to your specific needs and conditions. Your chiropractor determines which exercises are best for you, and teaches you how to do them in-office. You can then continue the exercises at home. This will strengthen weakened muscles, improve flexibility, improve posture, and help you maintain proper spinal alignment.",
  },
  {
    num: "03",
    title: "Nutritional Counseling",
    body: "Nutritional counseling can help with many acute and chronic conditions. Functional medicine views food as medicine. Your medical chiropractor will discuss your current diet, and recommend any needed changes. Nutritional counseling is about more than just eating healthy. It\u2019s about eating the best foods for your specific nutritional needs and issues. Your chiropractor may recommend dietary changes and nutritional supplements to help support your health and treat your conditions.",
  },
  {
    num: "04",
    title: "Lifestyle Advice",
    body: "Your lifestyle is also essential for your health. Your chiropractor may recommend that you stop certain habits and begin new ones. A few examples are beginning an exercise regimen and stopping smoking, but there are many potential beneficial lifestyle changes.",
  },
];

const HOURS = [
  { day: "Monday", time: "7:00 am - 5:00 pm" },
  { day: "Tuesday", time: "10:00 am - 7:00 pm" },
  { day: "Wednesday", time: "7:00 am - 5:00 pm" },
  { day: "Thursday", time: "2:00 pm - 7:00 pm" },
  { day: "Friday", time: "7:00 am - 5:00 pm" },
  { day: "Saturday", time: "8:00 am - 1:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function FunctionalMedicinePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1 service-page-shell">

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
                  <a href="/services.html" className="transition-colors duration-200 hover:text-accent">Services</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Functional Medicine</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Functional Medicine"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Intro Section ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Holistic Health
                </p>
                <SplitReveal
                  text="Roselle Center for Healing: Holistic Functional Medicine Services"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <div className="grid grid-cols-[1fr_1fr] gap-s10 mt-s10 items-center
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                {/* Image */}
                <RevealSection delay={0.1}>
                  <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(42,41,40,0.04)" }}>
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/integrated_medicine_services.jpg.webp?079d02753fdf6ebf5c90f88101c7b602"
                      alt="Woman practicing mindfulness and self-care by placing hands on her abdomen, emphasizing holistic health and wellness in the context of functional medicine."
                      speed={0.18}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                {/* Text */}
                <div className="flex flex-col gap-s4">
                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      At Roselle Center For Healing, in Fairfax, VA, we focus on integrative health
                      care. We take a holistic, whole-person, approach to health and wellness by
                      utilizing natural integrative medicine, including chiropractic, acupuncture, applied
                      kinesiology, functional medicine, nutrition, and massage therapy.
                    </p>
                  </RevealSection>
                </div>
              </div>
            </div>
          </section>

          {/* ── What Is Functional Medicine? ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-[1fr_1px_1fr] gap-x-s10 items-start
                              max-[900px]:grid-cols-1 max-[900px]:gap-y-s8">

                {/* Left */}
                <div className="flex flex-col gap-s8">
                  <RevealSection>
                    <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12]">
                      What Is Functional Medicine?
                    </h2>
                    <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                      Conventional medicine uses a disease treatment model. This means that a disease
                      or condition is identified, and treatment focuses on the disease, with little
                      consideration for the patient&rsquo;s overall health.
                    </p>
                    <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                      Functional medicine takes a vastly different approach. It focuses on whole body
                      health and healing. Rather than medication, functional medicine uses nutrition,
                      lifestyle changes, chiropractic care, and behavioral interventions to treat and
                      manage a variety of conditions.
                    </p>
                  </RevealSection>
                </div>

                {/* Vertical divider */}
                <div className="w-px self-stretch max-[900px]:hidden"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(198,177,128,0.3) 20%, rgba(198,177,128,0.3) 80%, transparent)" }}
                />

                {/* Right */}
                <div className="flex flex-col gap-s8">
                  <RevealSection delay={0.12}>
                    <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12]">
                      What Can be Treated with Functional Medicine?
                    </h2>
                    <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                      Nearly any chronic condition can be treated with functional medicine. This
                      includes allergies, arthritis, fibromyalgia, diabetes, digestive disorders, chronic
                      pain, and thyroid disorders. It&rsquo;s also helpful for many female health issues,
                      including PCOS, menopause, PMS, and endometriosis.
                    </p>
                  </RevealSection>
                </div>

              </div>
            </div>
          </section>

          {/* ── Functional Medicine Diagnosis ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Your Assessment
                </p>
                <SplitReveal
                  text="Functional Medicine Diagnosis"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[680px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Your diagnosis may include neurological testing, orthopedic testing, and
                  functional chiropractic testing. Your chiropractor will also spend time discussing your
                  lifestyle, concerns and symptoms, medical history, and lifestyle.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Functional Medicine Treatments ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Treatment Options
                </p>
                <SplitReveal
                  text="Functional Medicine Treatments"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.08}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[680px]" style={{ color: "rgba(245,244,239,0.62)" }}>
                  Functional medicine treatments will vary based on your condition and the
                  underlying cause of your symptoms.
                </p>
              </RevealSection>

              <div className="grid grid-cols-2 gap-s8 mt-s10 max-md:grid-cols-1">
                {TREATMENTS.map((t, i) => (
                  <RevealSection key={t.num} delay={i * 0.08}>
                    <SpotlightCard className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]
                                              rounded-xl p-s6 flex flex-col gap-s3 h-full
                                              card-hover-lift">
                      <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(198,177,128,0.85)" }}>
                        {t.num}
                      </span>
                      <h3 className="text-fluid-2xl text-bg tracking-tight leading-[1.15] mt-s1">
                        {t.title}
                      </h3>
                      <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(245,244,239,0.55)" }}>
                        {t.body}
                      </p>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA: Functional Medicine at Roselle Center ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="service-cta-panel flex items-center justify-between gap-s6 p-s8 px-s10
                                bg-fg rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h2 className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                      Functional Medicine at Roselle Center for Healing
                    </h2>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                      If you need a medial chiropractor in Fairfax, VA, contact us at Roselle Center
                      For Healing. We treat a wide variety of conditions with holistic treatments. Our
                      treatments include chiropractic adjustment, acupuncture, functional medicine,
                      and massage therapy.
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

          {/* ── Hours & Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">

                {/* Hours */}
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Hours of Operation
                  </h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day}
                        className="service-hours-row flex items-center justify-between py-3 text-sm"
                        style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span style={{ color: "rgba(245,244,239,0.7)" }}>{h.day}</span>
                        <span className="text-bg font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </RevealSection>

                {/* Location */}
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Merrifield Location In Fairfax, VA
                  </h3>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Address
                      </p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.7)" }}>
                        8500 Executive Park Ave STE 300<br />Fairfax, VA 22031
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Phone
                      </p>
                      <a href="tel:+17036987117"
                        className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">
                        (703) 698-7117
                      </a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Fax
                      </p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.7)" }}>
                        (703) 698-5729
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>
                        Email
                      </p>
                      <a href="mailto:rosellecare@gmail.com"
                        className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">
                        rosellecare@gmail.com
                      </a>
                    </div>
                  </div>
                </RevealSection>

              </div>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
