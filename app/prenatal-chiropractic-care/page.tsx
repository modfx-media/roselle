"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


const BENEFITS = [
  {
    title: "Prenatal Pelvic Pain Relief With Webster Technique",
    text: "Pelvic pain is common in pregnancy, as the body is helping accommodate for the growing baby. Our chiropractors can utilize the Webster technique to gently relax and open up the pelvis, which provides more room and increases comfort for both mom and baby.",
  },
  {
    title: "Sciatica Treatment",
    text: "As the abdomen grows bigger during the later stages of pregnancy, it puts more pressure on the sciatic nerve. This nerve originates in the lower back and runs down the buttocks and into each leg. When this nerve is pinched, it can cause extreme pain, numbness, and pressure. Our chiropractors can massage the surrounding muscles and relieve pressure off of the nerve to reduce your symptoms.",
  },
  {
    title: "Nausea Relief",
    text: "Nausea is more common during early pregnancy. With chiropractic treatments, we can help provide relief from morning sickness, motion sickness, and general nausea without prescription pills that could harm the baby. The techniques also help rebalance the inner ear, which can reduce nausea and vomiting.",
  },
  {
    title: "Reduced Anxiety and Stress",
    text: "Pregnancy can also be a stressful and anxious time for new mothers, especially if this is their first baby. Chiropractic adjustments, massage therapy, and other types of manual therapy can help mothers relax and understand changes in their bodies. In addition, regular visits also help improve sleep quality, which is important for the development of the baby.",
  },
  {
    title: "Optimal Fetal Position",
    text: "Our chiropractors can ensure that the baby is in the optimal position for delivery. When the baby is in the ideal position, it can help with a smoother delivery and reduce labor time.",
  },
];

export default function PrenatalChiropracticCarePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1 service-page-shell">

          {/* ── Hero ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs mb-s4" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="hover:text-bg transition-colors duration-200">Home</a>
                  <span>/</span>
                  <a href="/services.html" className="hover:text-bg transition-colors duration-200">Services</a>
                  <span>/</span>
                  <span className="text-bg">Prenatal Chiropractic Care</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Prenatal Chiropractic"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">Care</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  Pregnancy may be an exciting time in someone&rsquo;s life, however, it can also cause
                  pain and discomfort. At Roselle Center for Healing in Fairfax, VA, we provide
                  prenatal chiropractic care to offer relief and make your pregnancy journey more enjoyable.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Image Section ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="rounded-xl overflow-hidden max-w-3xl mx-auto">
                  <GsapImageParallax
                    src="https://cdcssl.ibsrv.net/ibimg/smb/1023x723_80/webmgr/0g/5/2/pre-natal.jpg.webp?75968df221e7e79b6f8de19c71e96499"
                    alt="Pregnant woman receiving chiropractic care from a practitioner, emphasizing prenatal health and comfort during pregnancy."
                    speed={0.15}
                    className="w-full rounded-xl"
                  />
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Benefits ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Benefits of Prenatal Care
                </p>
                <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s8">
                  How Chiropractic Care Helps <span className="text-accent">During Pregnancy</span>
                </h2>
              </RevealSection>

              <div className="flex flex-col gap-s8">
                {BENEFITS.map((b, i) => (
                  <RevealSection key={b.title} delay={i * 0.08}>
                    <div
                      className="rounded-xl p-s6 max-md:p-s4"
                      style={{
                        background: "rgba(245,244,239,0.04)",
                        border: "1px solid rgba(245,244,239,0.08)",
                      }}
                    >
                      <div className="flex items-start gap-s4">
                        <span
                          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-accent"
                          style={{ background: "rgba(198,177,128,0.12)", border: "1px solid rgba(198,177,128,0.25)" }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-bg mb-s2">{b.title}</h3>
                          <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                            {b.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div
                  className="rounded-2xl p-s8 max-md:p-s6 text-center bg-card-bg"
                  style={{ border: "1px solid rgba(42,41,40,0.06)" }}
                >
                  <h2 className="text-fluid-3xl text-fg font-serif leading-tight tracking-tight mb-s3">
                    Contact Us for an Appointment Today
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-2xl mx-auto mb-s6" style={{ color: "rgba(42,41,40,0.55)" }}>
                    At Roselle Center for Healing in Fairfax, VA, we can help you enjoy a healthy,
                    happy pregnancy. When you visit us, we will discuss your specific needs with you
                    and recommend a personalized treatment plan for you and your baby. To learn more
                    about our treatments or to schedule your initial consultation, contact us today.
                  </p>
                  <div className="flex gap-s3 justify-center flex-wrap">
                    <MagneticButton onClick={() => window.location.href = "/appointment"}>
                      Book an Appointment
                    </MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium transition-colors duration-200 text-fg"
                      style={{ border: "1px solid rgba(42,41,40,0.2)" }}
                    >
                      (703) 698-7117
                    </a>
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
