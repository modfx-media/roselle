"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


export default function ContactStaffMemberPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/contact" className="transition-colors duration-200 hover:text-accent">Contact</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Contact a Staff Member Directly</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Contact a Staff Member Directly" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Section 1: Contact Info (light) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Get In Touch</p>
                <SplitReveal text="Contact Our Staff" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px] uppercase font-medium" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Please feel free to contact a staff member directly using the information below, or contact us at:
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <div className="mt-s8 max-w-[540px]">
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s4">Roselle Center For Healing</h3>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-accent mb-1 font-sans">Address</p>
                      <p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>8500 Executive Park Ave, STE 300<br />Fairfax, VA 22031</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-accent mb-1 font-sans">Phone</p>
                      <a href="tel:+17036987117" className="text-fluid-base text-fg transition-colors duration-200 hover:text-accent">(703) 698-7117</a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-accent mb-1 font-sans">Fax</p>
                      <p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>(703) 698-5729</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-accent mb-1 font-sans">Email Front Desk</p>
                      <a href="mailto:rosellecare@gmail.com" className="text-fluid-base text-fg transition-colors duration-200 hover:text-accent">rosellecare@gmail.com</a>
                    </div>
                  </div>

                  <div className="mt-s8 p-s6 rounded-xl" style={{ backgroundColor: "rgba(198,177,128,0.08)", border: "1px solid rgba(198,177,128,0.2)" }}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      To reach a specific staff member, please call our front desk at <a href="tel:+17036987117" className="text-fg font-medium hover:text-accent transition-colors duration-200">(703) 698-7117</a> or email us at <a href="mailto:rosellecare@gmail.com" className="text-fg font-medium hover:text-accent transition-colors duration-200">rosellecare@gmail.com</a> and we will direct your inquiry to the appropriate team member.
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Get In Touch</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Our team at Roselle Center For Healing is ready to assist you. Call us today to speak with a staff member directly.
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
