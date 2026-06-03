"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import MagneticButton from "@/app/components/motion/MagneticButton";
import Contact from "@/app/components/Contact";
import PageHero from "@/app/components/templates/PageHero";


export default function SpineSimulatorPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Interactive Learning · Fairfax, VA"
            title="3D spine simulator."
            subtitle="Explore the spinal column in 3D. Discover how each vertebra connects to systems throughout your body and supports your overall health."
            crumbs={[{ label: "Home", href: "/" }, { label: "3D Spine Simulator" }]}
            image="/spine-simulator-1.webp"
            imageAlt="3D spine simulator."
            primaryCta={{ label: "Launch the simulator", href: "/spine-simulator.html" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          {/* Content – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Interactive Learning</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  All of the functions related to the amazing human body are controlled and coordinated by the extensive neural network. Interference or stresses in any part of the nerve system may result in health problems in a variety of areas throughout our bodies. Take a moment and explore which areas of the body are influenced by the different areas of your spine. You will be amazed at how the spine and nerve system are interrelated and connected to every aspect of our expression of health and wellness.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <MagneticButton className="btn-primary" onClick={() => window.location.href = "/spine-simulator.html"}>Launch the Simulator</MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* CTA card */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Have Questions About Your Spine?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>Our team at Roselle Center For Healing is here to help you understand your spinal health and explore your care options.</p>
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
