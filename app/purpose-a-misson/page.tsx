"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


export default function PurposeMissionPage() {
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
                  <a href="/new-patient-center.html" className="transition-colors duration-200 hover:text-accent">New Patient Experience</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Purpose &amp; Mission</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Purpose & Misson" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Main Content ── */}
          <section
            className="bg-bg py-section-py overflow-hidden"
            style={{
              background: "radial-gradient(ellipse 72% 58% at 50% 18%, rgba(198,177,128,0.12) 0%, transparent 62%), linear-gradient(180deg, #f5f4ef 0%, #efebe3 100%)",
            }}
          >
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="py-s2">
                <RevealSection>
                  <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Foundation</p>
                  <SplitReveal text="Holistic Purpose & Mission of Roselle Center For Healing" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[36ch]" />
                  <div
                    className="mt-s4 h-px w-16"
                    aria-hidden="true"
                    style={{ background: "linear-gradient(90deg, #c6b180 0%, rgba(198,177,128,0) 100%)" }}
                  />
                </RevealSection>

                <div className="mt-s8 grid grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] gap-s8 items-start max-[900px]:grid-cols-1">
                  <RevealSection delay={0.1}>
                    <div
                      className="rounded-[24px] overflow-hidden relative"
                      style={{
                        border: "1px solid rgba(198,177,128,0.2)",
                        boxShadow: "0 20px 60px rgba(42,41,40,0.14)",
                      }}
                    >
                      <img
                        src="https://cdcssl.ibsrv.net/ibimg/smb/1023x567_80/webmgr/0g/5/2/2024/rcfh-desk.png.webp?69ad103845fefe6b7f70b54853f523bb"
                        alt="Reception area of Roselle Center for Healing, featuring two staff members assisting a male patient, with computers and a welcoming atmosphere."
                        className="w-full h-auto object-cover"
                      />
                      <div
                        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                        aria-hidden="true"
                        style={{ background: "linear-gradient(180deg, rgba(42,41,40,0) 0%, rgba(42,41,40,0.18) 100%)" }}
                      />
                    </div>
                  </RevealSection>

                  <RevealSection delay={0.15}>
                    <div
                      className="p-s2"
                    >
                      <p className="text-fluid-xl text-fg font-serif tracking-tight leading-snug">
                        The Roselle Center for Healing is a natural integrative healthcare practice, holistic in approach with the accepted purpose and mission of:
                      </p>
                    </div>
                  </RevealSection>
                </div>

                <RevealSection delay={0.2}>
                  <div
                    className="mt-s8 rounded-[28px] p-s6 max-md:p-s5"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(245,244,239,0.86) 100%)",
                      border: "1px solid rgba(198,177,128,0.16)",
                      boxShadow: "0 18px 50px rgba(42,41,40,0.07)",
                    }}
                  >
                    <div className="grid grid-cols-2 gap-s5 max-[900px]:grid-cols-1">
                      <div
                        className="rounded-[22px] p-s5"
                        style={{
                          background: "linear-gradient(180deg, rgba(218,214,205,0.82) 0%, rgba(245,244,239,0.94) 100%)",
                          border: "1px solid rgba(198,177,128,0.16)",
                          boxShadow: "0 16px 40px rgba(42,41,40,0.08)",
                        }}
                      >
                        <p className="text-xs tracking-widest uppercase text-accent mb-s2 font-sans">Our Purpose</p>
                        <div
                          className="mb-s4 h-px w-12"
                          aria-hidden="true"
                          style={{ background: "linear-gradient(90deg, #c6b180 0%, rgba(198,177,128,0) 100%)" }}
                        />
                        <p className="text-fluid-base text-fg leading-relaxed font-medium">
                          To serve, educate and empower individuals on their path to create extraordinary health!
                        </p>
                      </div>

                      <div
                        className="rounded-[22px] p-s5"
                        style={{
                          background: "linear-gradient(180deg, rgba(218,214,205,0.82) 0%, rgba(245,244,239,0.94) 100%)",
                          border: "1px solid rgba(198,177,128,0.16)",
                          boxShadow: "0 16px 40px rgba(42,41,40,0.08)",
                        }}
                      >
                        <p className="text-xs tracking-widest uppercase text-accent mb-s2 font-sans">Our Mission</p>
                        <div
                          className="mb-s4 h-px w-12"
                          aria-hidden="true"
                          style={{ background: "linear-gradient(90deg, #c6b180 0%, rgba(198,177,128,0) 100%)" }}
                        />
                        <p className="text-fluid-base text-fg leading-relaxed font-medium">
                          To provide others with established and advanced techniques in the disciplines of chiropractic, acupuncture and nutritional healing. These goals are met by creating structural, chemical and emotional balance.
                        </p>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div
                  className="rounded-2xl p-s8 max-md:p-s5 text-center"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}
                >
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Begin Your Journey</p>
                  <h2 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s3">
                    Ready to Experience Extraordinary Health?
                  </h2>
                  <p className="text-sm leading-relaxed max-w-[520px] mx-auto mb-s5" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Schedule a free 20-minute consultation and take the first step toward holistic wellness.
                  </p>
                  <div className="flex gap-s3 justify-center flex-wrap">
                    <MagneticButton onClick={() => window.location.href = "/appointment"}>
                      Book a Consultation
                    </MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
                      style={{ color: "rgba(245,244,239,0.65)", border: "1px solid rgba(245,244,239,0.15)" }}
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
