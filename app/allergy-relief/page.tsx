"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


export default function AllergyReliefPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Allergy Relief</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Roselle Center for Healing: Natural Allergy Relief in Fairfax, VA"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Intro with Parallax Image ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                      Holistic Allergy Care
                    </p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">
                      Natural Allergy Relief in Fairfax, VA
                    </h2>
                  </RevealSection>

                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Many people in Fairfax, VA struggle with allergies, often turning to medications
                      that only provide temporary relief. At Roselle Center For Healing, we take a
                      different approach. Rather than masking the symptoms, our clinic focuses on
                      identifying and addressing the root cause of allergic reactions. This approach helps
                      patients experience more lasting results.
                    </p>
                  </RevealSection>
                </div>

                <RevealSection delay={0.15}>
                  <GsapImageParallax
                    src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/services_functional_food_allergies.jpg.webp?68eef3a29713848aea38b07d9ef30806"
                    alt="Woman in a yellow shirt scratching her arm, showing signs of an allergic reaction, in a bright indoor setting, related to allergy relief services at Roselle Center For Healing."
                    className="w-full rounded-xl"
                  />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── The Role of the Nervous System ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Nervous System &amp; Allergies
                </p>
                <SplitReveal
                  text="The Role of the Nervous System in Allergic Reactions"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Your nervous system plays a vital role in how your body responds to allergens.
                  If there is interference in the communication between the brain and body, your
                  immune response can become exaggerated. Our chiropractors use chiropractic
                  adjustments to help restore proper nervous system function. By improving this
                  communication, the body may be better equipped to handle environmental triggers and
                  reduce the frequency or intensity of allergy symptoms.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Chiropractic Care as Natural Support ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Chiropractic Support
                </p>
                <SplitReveal
                  text="Chiropractic Care as a Natural Support for Allergies"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Chiropractic care does not treat allergies directly, but it helps support the
                  body&rsquo;s natural ability to regulate its immune response. When the spine is aligned
                  properly, the body tends to function more efficiently. Patients often report
                  reduced sinus congestion, fewer headaches, and better breathing after regular
                  chiropractic visits. Our clinic combines chiropractic care with holistic strategies
                  to enhance the body&rsquo;s overall wellness.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── The Importance of Allergy Testing ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Testing &amp; Diagnosis
                </p>
                <SplitReveal
                  text="The Importance of Allergy Testing"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Before beginning care, we recommend thorough allergy testing to better
                  understand what substances may be triggering your symptoms. Identifying specific
                  allergens allows our team to create a more personalized care plan. In some cases,
                  lifestyle changes or targeted supplements may complement your chiropractic care. The
                  goal is to reduce your body&rsquo;s sensitivity over time while improving immune
                  resilience.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── A Whole-Body Approach ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Comprehensive Care
                </p>
                <SplitReveal
                  text="A Whole-Body Approach to Allergy Relief"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  At Roselle Center For Healing, our chiropractors take a whole-body approach to
                  managing allergies. We consider spinal health, diet, environment, and stress
                  levels when designing care for each patient. This comprehensive method helps us
                  better serve individuals looking for a natural way to manage allergies. If you are
                  searching for a chiropractor near you who understands the complexities of
                  allergic responses, our team is ready to help.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Contact CTA ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                  Contact Roselle Center For Healing for Allergy Relief
                </h3>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Living with allergies can be frustrating, but you do not have to manage it
                  alone. Our chiropractors in Fairfax, VA are experienced in working with patients who
                  want to explore safe and natural strategies for allergy relief. By combining
                  chiropractic care with allergy testing and customized recommendations, we support
                  your body&rsquo;s ability to adapt and heal. Call Roselle Center For Healing today to
                  schedule an appointment and begin your journey toward lasting allergy relief.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <MagneticButton
                    className="btn-primary-inverted"
                    onClick={() => window.location.href = "tel:+17036987117"}
                  >
                    Call (703) 698-7117
                  </MagneticButton>
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
