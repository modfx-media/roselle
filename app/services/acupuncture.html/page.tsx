"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import SpotlightCard from "../../components/motion/SpotlightCard";
import GsapImageParallax from "../../components/motion/GsapImageParallax";
import Contact from "../../components/Contact";


export default function AcupuncturePage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Acupuncture</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Acupuncture in Fairfax, VA: Pain Relief & Wellness at Roselle Center"
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
                      A Natural Path to Relief
                    </p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">
                      Acupuncture in Fairfax, VA: A Natural Path to Relief
                    </h2>
                  </RevealSection>

                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      At Roselle Center for Healing in Fairfax, VA, patients discover that healing
                      doesn&rsquo;t always come in the form of medication or surgery. Under the guidance of Dr.
                      Tom Roselle, the center combines chiropractic care with holistic therapies like
                      acupuncture to address pain, restore balance, and improve overall well-being.
                    </p>
                  </RevealSection>
                </div>

                <RevealSection delay={0.15}>
                  <GsapImageParallax
                    src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/acupuncture.png.webp?370ea31548f3e6120912ccbd9441e91f"
                    alt="Woman receiving acupuncture treatment on her back from a practitioner in a clinical setting, promoting holistic healing and pain relief."
                    className="w-full rounded-xl"
                  />
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── What Is Acupuncture? ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Traditional Chinese Medicine
                </p>
                <SplitReveal
                  text="What Is Acupuncture?"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Acupuncture is an ancient practice rooted in Traditional Chinese Medicine that
                  focuses on stimulating specific points in the body to promote healing. Today,
                  it&rsquo;s widely recognized as a safe, effective therapy for managing pain, reducing
                  stress, and improving circulation. If you&rsquo;re searching for acupuncture near you,
                  this natural therapy may be the solution you&rsquo;ve been seeking.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Back Pain & Sciatica ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Pain Management
                </p>
                <SplitReveal
                  text="Acupuncture for Back Pain and Sciatica"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Chronic discomfort is one of the most common reasons people seek acupuncture.
                  Many patients find relief with:
                </p>
              </RevealSection>

              <div className="grid grid-cols-2 gap-s8 mt-s8 max-md:grid-cols-1">
                <RevealSection delay={0.15}>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            card-hover-lift">
                    <span className="text-xs font-semibold tracking-widest text-accent">01</span>
                    <h3 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                      Acupuncture for Back Pain
                    </h3>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Stimulates blood flow, eases tension, and reduces inflammation in the spine
                      and muscles.
                    </p>
                  </SpotlightCard>
                </RevealSection>

                <RevealSection delay={0.2}>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            card-hover-lift">
                    <span className="text-xs font-semibold tracking-widest text-accent">02</span>
                    <h3 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                      Acupuncture for Sciatica
                    </h3>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Helps relieve nerve compression, reduce radiating pain down the legs, and
                      support the body&rsquo;s healing response.
                    </p>
                  </SpotlightCard>
                </RevealSection>
              </div>

              <RevealSection delay={0.25}>
                <p className="text-fluid-base leading-relaxed mt-s8 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  By combining acupuncture with chiropractic care, patients experience a more
                  comprehensive approach to pain management and long-term recovery.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Why Choose Acupuncture ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Integrative Care
                </p>
                <SplitReveal
                  text="Why Choose Acupuncture at Roselle Center for Healing?"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Unlike a standard clinic, Roselle Center for Healing offers integrative care
                  where multiple disciplines work together for your benefit. Whether it&rsquo;s
                  chiropractic adjustments, nutritional counseling, or acupuncture therapy, the focus is on
                  treating the root cause of discomfort rather than masking symptoms.
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[720px]"
                  style={{ color: "rgba(245,244,239,0.55)" }}>
                  Dr. Tom Roselle and his team are dedicated to helping patients in Fairfax, VA
                  achieve better health with safe and effective therapies. If you&rsquo;ve been searching
                  for a chiropractor near you who also offers acupuncture near you, you&rsquo;ll find
                  compassionate and skilled care here.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Take the Next Step CTA ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="service-cta-panel flex items-center justify-between gap-s6 p-s8 px-s10
                                rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4
                                bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">
                      Take the Next Step Toward Relief
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      If you&rsquo;re struggling with ongoing discomfort or searching for natural options
                      for healing, acupuncture could be the answer.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary"
                      onClick={() => window.location.href = "tel:+17036987117"}
                    >
                      Call (703) 698-7117
                    </MagneticButton>
                    <MagneticButton
                      className="btn-primary"
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
