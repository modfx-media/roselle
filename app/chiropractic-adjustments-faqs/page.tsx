"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


export default function ChiropracticAdjustmentsFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* Hero */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-accent">Services</a>
                  <span>/</span>
                  <a href="/services/chiropractic.html" className="transition-colors duration-200 hover:text-accent">Chiropractic</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Chiropractic Adjustments FAQs</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Chiropractic Adjustments FAQs" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Intro with Image */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Frequently Asked Questions</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Your Questions, Answered</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      If you&rsquo;ve ever searched for a chiropractor near you or wondered what really happens during a chiropractic adjustment, you&rsquo;re not alone. At Roselle Center for Healing in Fairfax, VA, our team of experienced chiropractors takes a personalized approach to care—helping patients move more freely, reduce pain, and feel their best through safe, effective chiropractic adjustments.
                    </p>
                  </RevealSection>
                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Here are some of the most common questions we hear from patients who are curious about how chiropractic care works.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Chiropractic_adjustment.jpg.webp?fa178234dda07451880b4bb658b158fe" alt="Chiropractor performing a spinal adjustment on a patient, illustrating chiropractic care and treatment techniques for pain relief and improved mobility." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* FAQ 1 */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>FAQ</p>
                <SplitReveal text="What Is a Chiropractic Adjustment?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  A chiropractic adjustment is a gentle, hands-on technique used to improve the alignment and movement of your spine and joints. When the spine isn&rsquo;t moving as it should, it can irritate surrounding nerves and muscles, leading to pain, stiffness, and inflammation. By restoring proper motion and balance, chiropractic adjustments help the body heal naturally, without the need for medication or surgery.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* FAQ 2 */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Safety</p>
                <SplitReveal text="Are Chiropractic Adjustments Safe?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Yes. When performed by a licensed chiropractor, adjustments are both safe and effective. At Roselle Center for Healing, each treatment is tailored to your specific condition, age, and comfort level. Our chiropractors take time to explain each step before making any adjustment, so you&rsquo;ll always know what to expect.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* FAQ 3 */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Conditions Treated</p>
                <SplitReveal text="What Conditions Can Chiropractic Care Help With?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Chiropractic adjustments are often used to treat back pain, neck pain, headaches, sciatica, and joint discomfort. Many patients also find that regular adjustments improve posture, flexibility, and overall well-being. If you&rsquo;re searching for &ldquo;chiropractic adjustments near me&rdquo; or want to experience the benefits of natural pain relief, our team in Fairfax, VA, is here to help.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* FAQ 4 */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Frequency</p>
                <SplitReveal text="How Often Should I Get Adjusted?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  The frequency of your visits depends on your goals and condition. Some patients notice relief after just one or two sessions, while others benefit from a longer treatment plan to correct underlying issues and maintain lasting results.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* CTA */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Call Our Center to Schedule a Chiropractic Adjustment in Fairfax, VA</h3>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  If you&rsquo;re ready to take the next step toward better mobility and comfort, our friendly team at Roselle Center for Healing is here for you. Call (703) 698-7117 today to schedule your chiropractic adjustment in Fairfax, VA, and discover how gentle, personalized care can make a lasting difference.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <MagneticButton className="btn-primary-inverted" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
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
