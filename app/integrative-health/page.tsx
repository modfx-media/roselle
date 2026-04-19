"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const MODALITIES = [
  "Stress management",
  "Physical therapy",
  "Acupuncture",
  "Chiropractic care",
  "Massage therapy",
  "Sports medicine",
];

export default function IntegrativeHealthPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* Hero */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a>
                  <span>/</span>
                  <a href="/where-is-your-pain" className="transition-colors duration-200 hover:text-bg">Where is Your Pain? Conditions Treated</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Integrative Health</span>
                </nav>
              </RevealSection>
              <SplitReveal
                text="Chiropractic & Integrative Health: Roselle Center For Healing"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* Light Section 1 - Intro */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s5">Integrative Health Approach at Roselle Center for Healing</h2>
                <p className="text-fluid-base max-w-3xl" style={{ color: "rgba(28,28,28,0.55)" }}>
                  Integrative health is a client-centered approach to promoting optimal well-being and overall health. It combines evidence-based strategies with a holistic perspective to reduce disease risk with lifestyle behaviors. This comprehensive and holistic approach to healthcare focuses on integrating various modalities and therapies to promote overall well-being.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Dark Section 1 - Benefits, Chiropractic, Core Beliefs */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-1 gap-s6">
                <RevealSection>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Benefits of Integrative Health</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      There are several benefits that integrative health can offer. Our practice can help individuals manage chronic conditions, reduce symptoms, improve quality of life, and enhance the body&apos;s natural healing abilities. This treatment promotes a comprehensive and individualized approach to healthcare that considers each person&apos;s unique needs and circumstances.
                    </p>
                  </div>
                </RevealSection>
                <RevealSection delay={0.06}>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Integrative Health in Chiropractic Care</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Chiropractic medicine offers a holistic and multidimensional approach, particularly in chronic pain relief and injury treatment. Our chiropractors use manual techniques, adjustments, and other therapeutic modalities to restore proper alignment, mobility, and function to the body.
                    </p>
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Core Beliefs</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Integrative health combines the best practices and principles from both conventional medicine and complementary and alternative therapies. We consider our patient&apos;s unique needs, preferences, and circumstances to develop a personalized approach to healthcare.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Light Section 2 - Modalities */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s5">Modalities and Therapies</h2>
                <p className="text-fluid-base mb-s5 max-w-3xl" style={{ color: "rgba(28,28,28,0.55)" }}>
                  Integrative health uses various modalities and therapies, such as:
                </p>
                <ul className="list-disc pl-6 mb-s5 max-w-3xl space-y-2">
                  {MODALITIES.map((m) => (
                    <li key={m} className="text-fluid-base" style={{ color: "rgba(28,28,28,0.55)" }}>{m}</li>
                  ))}
                </ul>
                <p className="text-fluid-base max-w-3xl" style={{ color: "rgba(28,28,28,0.55)" }}>
                  The goal is to use evidence-based practices that are safe, effective, and positively impact the individual&apos;s health and well-being.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Dark Section 2 - Partnership & Preventive Care */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-1 gap-s6">
                <RevealSection>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Partnership Between Provider and Patient</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      One of the critical principles of integrative health is the partnership between the healthcare provider and the individual seeking care. Our injury treatment chiropractor will work with you to offer support, education, and expertise to achieve health goals.
                    </p>
                  </div>
                </RevealSection>
                <RevealSection delay={0.06}>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Preventive Care and Lifestyle Modifications</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Integrative health recognizes that many chronic conditions can be prevented or managed through healthy behaviors, like eating a balanced diet, getting enough sleep, or regular exercise. Integrative health aims to treat existing health issues and prevent future ones by focusing on these factors.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Light Section 3 - Patient-Centric */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s5">Our Core Beliefs: A Patient-Centric Integrative Health Approach</h2>
                <p className="text-fluid-base max-w-3xl" style={{ color: "rgba(28,28,28,0.55)" }}>
                  Functional medicine addresses the underlying causes of disease and dysfunction, rather than merely managing symptoms. By considering lifestyle, nutrition, stress, and overall wellness, chiropractors practicing functional medicine strive to optimize the body&apos;s functioning and promote overall health.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="bg-card-bg rounded-xl p-s6 text-center">
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">
                    Contact Integrative Health at Roselle Center for Healing
                  </h3>
                  <p className="text-fluid-base mb-s5 max-w-2xl mx-auto" style={{ color: "rgba(28,28,28,0.55)" }}>
                    At Roselle Center for Healing, we improve integrative health to provide our patients with the best care. Our injury treatment chiropractor will use chiropractic care and functional medicine to relieve chronic pain, so that injuries or underlying conditions don&apos;t ruin your quality of life. Call our office at (703) 698-7117 to learn more.
                  </p>
                  <MagneticButton>
                    <a href="tel:+17036987117" className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-accent/90">
                      Call (703) 698-7117
                    </a>
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Hours + Location */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span>
                        <span className="text-bg font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p>
                      <a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p>
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
