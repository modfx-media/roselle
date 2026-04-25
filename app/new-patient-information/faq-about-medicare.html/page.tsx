"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import GsapImageParallax from "../../components/motion/GsapImageParallax";
import Contact from "../../components/Contact";


export default function FaqAboutMedicarePage() {
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
                  <a href="/new-patient-center.html" className="transition-colors duration-200 hover:text-accent">New Patient Experience</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>FAQ about Medicare</span>
                </nav>
              </RevealSection>
              <SplitReveal text="FAQ about Medicare" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Medicare</p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-[1.12] max-w-[28ch]">Medicare Chiropractic Coverage FAQs at Roselle Center For Healing</h2>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x1535_80/webmgr/0g/5/2/2024/medicare-qa.png.webp?0ff57b4bb3520dce911dcd0ac2b3cfd3" alt="Q&A document about Medicare coverage for chiropractic services, featuring questions and answers on deductible amounts, claims submission, and treatment costs, relevant to Roselle Center For Healing in Fairfax, VA." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Contact Us About Medicare Coverage</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Have questions about Medicare coverage for chiropractic services? Contact Roselle Center For Healing in Fairfax, VA today.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
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
