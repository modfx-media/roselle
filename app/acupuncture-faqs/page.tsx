"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


export default function AcupunctureFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-accent">Services</a><span>/</span>
                  <a href="/services/acupuncture.html" className="transition-colors duration-200 hover:text-accent">Acupuncture</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Acupuncture FAQs</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Fairfax Acupuncture FAQs: Holistic Healing & Pain Relief Explained" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Frequently Asked Questions</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Acupuncture FAQs</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      At Roselle Center for Healing in Fairfax, VA, we understand that many people are curious about acupuncture but aren&rsquo;t sure what to expect. This gentle, time-tested therapy can be an excellent complement to chiropractic care, especially for those struggling with chronic pain or tension. Below, our team answers some of the most common questions about acupuncture and how it can support your health naturally.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Acupuncture.jpg.webp?97c9c75b39f70acfc6ca9c9bb00a3c81" alt="Acupuncture treatment session with practitioner inserting fine needles into a patient's back, emphasizing holistic health and pain relief at Roselle Center for Healing." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>FAQ</p>
                <SplitReveal text="What Is Acupuncture?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Acupuncture is a holistic treatment that originated in traditional Chinese medicine. It involves inserting very fine, sterile needles into specific points on the body to restore balance, improve energy flow, and encourage natural healing. At our center, acupuncture is often combined with chiropractic care to help patients achieve longer-lasting relief from pain and stress.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Safety &amp; Comfort</p>
                <SplitReveal text="Is Acupuncture Safe and Comfortable?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Yes. When performed by a licensed practitioner, acupuncture is safe, precise, and surprisingly relaxing. Most patients describe the sensation as a light tingling or gentle warmth. Many even drift off during the session! At Roselle Center for Healing, our practitioners make sure each treatment is tailored to your comfort and specific health goals.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Conditions</p>
                <SplitReveal text="What Conditions Can Acupuncture Help Treat?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Acupuncture can address a wide range of concerns—from headaches and muscle stiffness to digestive issues and stress. There is also highly effective acupuncture for back pain and acupuncture for sciatica, which can result in reduced nerve irritation, inflammation, or muscle tightness. By improving circulation and releasing tension, acupuncture helps support the body&rsquo;s own healing processes.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Integrative Care</p>
                <SplitReveal text="How Does Acupuncture Work with Chiropractic Care?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Many patients find the best results come from combining acupuncture with chiropractic treatment. Chiropractic adjustments restore alignment and joint mobility, while acupuncture promotes relaxation, reduces inflammation, and balances the nervous system. Together, they create a powerful, natural approach to healing.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Call Our Team to Schedule Acupuncture Near You</h3>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  If you&rsquo;re looking for acupuncture near you or want to explore natural ways to ease pain and improve wellness, the caring team at Roselle Center for Healing is here to help. Call (703) 698-7117 today to schedule your acupuncture appointment in Fairfax, VA, and discover how gentle, integrative care can help you feel your best.
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
