"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


export default function ChronicPainPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Chronic Pain</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Chronic Pain Relief in Fairfax, VA at Roselle Center for Healing"
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
                      Pain Management
                    </p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">
                      Chronic Pain Relief in Fairfax, VA
                    </h2>
                  </RevealSection>

                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      If you have chronic pain due to an injury or a condition, the discomfort can
                      limit your mobility and significantly affect your quality of life. At Roselle
                      Center for Healing in Fairfax, VA, we provide chiropractic treatments to reduce your
                      symptoms and improve your overall health. Prior to visiting us, learn more about
                      how chiropractic care can be beneficial for chronic pain click here:{" "}
                      <a href="https://vimeo.com/ondemand/agelesshealthtvspecial"
                        className="text-accent underline transition-colors hover:text-fg"
                        target="_blank" rel="noopener noreferrer">
                        https://vimeo.com/ondemand/agelesshealthtvspecial
                      </a>.
                    </p>
                  </RevealSection>
                </div>

                <RevealSection delay={0.15}>
                  <GsapImageParallax
                    src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/pain-management.jpg.webp?b6e51fcaa5995df4c0fb73d9f79cd160"
                    alt="Man experiencing lower back pain in a chiropractic clinic setting, illustrating the impact of chronic pain on mobility and quality of life."
                    className="w-full rounded-xl"
                  />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Understanding Chronic Pain ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Understanding Your Pain
                </p>
                <SplitReveal
                  text="Understanding Chronic Pain"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Sometimes, it can be hard to determine the cause of chronic pain. You may be
                  living with chronic injury, posture distortion and autoimmune disease that flares
                  up without warning. Along with that, the physical effects of chronic pain can
                  affect your mental health. However, our chiropractors offer natural and
                  non-invasive treatments to help alleviate your discomfort and improve your well-being.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Chiropractic Care for Chronic Pain ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Treatment Approach
                </p>
                <SplitReveal
                  text="Chiropractic Care for Chronic Pain"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Chiropractic care can be highly effective in easing chronic pain. When you visit
                  us for your first appointment, we will speak with you about the symptoms you
                  are experiencing and review your health history. You will receive a very thorough
                  structural and neurological exam. These details can help us learn more about
                  your condition. Afterward we will develop an individualized treatment plan for your
                  specific needs. Your treatment may consist of chiropractic adjustments,
                  acupuncture, physical therapy with lifestyle changes.
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  We will regularly talk with you about your progress to ensure that treatment is
                  helping reduce your pain. If needed, our chiropractors can adjust your care plan
                  to help you achieve your desired results.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Contact CTA ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                  Contact Us for an Appointment Today!
                </h3>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  At Roselle Center for Healing in Fairfax, VA, we understand how chronic pain can
                  affect your body and our team is here to help. Whether you&rsquo;re dealing with
                  lingering pain from an old injury, headaches, back pain, or shoulder pain, we will
                  identify the root cause of the discomfort and help you heal. To learn more about
                  our treatments or to schedule your initial consultation, contact our office at
                  (703) 698-7117 today. When you are looking for a chiropractor near me, we are delighted to
                  assist you!
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
