"use client";

import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


export default function SpineSimulatorPage() {
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
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <a href="/education-lectures.html" className="transition-colors duration-200 hover:text-accent">Health Education</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Spine Simulator</span>
                </nav>
              </RevealSection>
              <SplitReveal
                text="Discover Our Interactive Spine Simulator at Roselle Center For Healing"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Intro + Images ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s8">
                  Please click anywhere on the graphics below to view our interactive Spine Simulator.
                </p>
              </RevealSection>

              <div className="flex flex-col gap-s8">
                <RevealSection>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/spine-simulator-1.webp"
                      alt="3D spine simulator interface displaying spinal anatomy, labeled vertebrae, and nerve connections, relevant to chiropractic services and spinal health at Roselle Center For Healing."
                      width={1023}
                      height={952}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </RevealSection>

                <RevealSection>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/spine-simulator-2.webp"
                      alt="Spine simulator graphic illustrating correct and incorrect driving postures, highlighting good posture elements like straight head and shoulders back, alongside bad posture elements such as tilted head and rounded shoulders, related to chiropractic health and wellness."
                      width={1023}
                      height={954}
                      className="w-full h-auto"
                    />
                  </div>
                </RevealSection>

                <RevealSection>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src="/spine-simulator-3.webp"
                      alt="3D spine simulator illustrating spinal segments, subluxation, bulging discs, and nerves, relevant to chiropractic care and spinal health at Roselle Center For Healing."
                      width={1023}
                      height={949}
                      className="w-full h-auto"
                    />
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="bg-card-bg rounded-xl p-s6 text-center">
                  <h3 className="text-fluid-2xl text-white font-serif tracking-tight leading-snug mb-s4">
                    Contact Roselle Center for Spine Simulator Services in Fairfax, VA
                  </h3>
                  <p className="text-fluid-base mb-s5 max-w-2xl mx-auto text-white/80">
                    Have questions about spinal health? Call us today to schedule a consultation with our chiropractic team.
                  </p>
                  <MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-accent/90"
                    >
                      Call (703) 698-7117
                    </a>
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
