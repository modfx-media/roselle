"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


export default function HerniatedDiscsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* HERO */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/conditions-treated" className="transition-colors duration-200 hover:text-accent">Where is Your Pain? Conditions Treated</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Herniated Discs</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Herniated Discs" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Overview – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Understanding Herniated Discs</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  A herniated disc occurs when the soft, gel-like center of a spinal disc pushes through a crack in the tougher exterior casing. This displaced disc material can press on nearby spinal nerves, causing pain, numbness, tingling, or weakness that may radiate into the arms or legs. Herniated discs most commonly affect the lower back and neck, and they can significantly impact your daily life and mobility. At Roselle Center For Healing in Fairfax, VA, we provide non-surgical treatment options designed to relieve pressure, reduce inflammation, and restore proper spinal function.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Symptoms – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Recognizing the Signs</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Symptoms of Herniated Discs</h2>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Radiating Pain</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    A herniated disc in the lower back often causes sharp or burning pain that radiates down the buttock and into the leg — commonly known as sciatica. When a disc herniates in the neck, pain may shoot into the shoulder and arm. The intensity can range from a dull ache to debilitating discomfort.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Numbness &amp; Tingling</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Pressure on the spinal nerves can produce numbness, tingling, or a pins-and-needles sensation in the areas served by those nerves. This may affect the hands, fingers, feet, or toes depending on which disc is involved.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Muscle Weakness</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Nerve compression from a herniated disc can weaken the muscles that the affected nerves serve. You may notice difficulty lifting objects, gripping things securely, or an increased tendency to stumble.
                  </p>
                </RevealSection>
                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Stiffness &amp; Limited Mobility</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Stiffness in the neck or lower back is a common symptom, particularly in the morning or after prolonged sitting. The surrounding muscles may spasm as they try to stabilize the affected area, further restricting your range of motion.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Treatment Options – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Approach</p>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s6">Chiropractic Treatment Options</h2>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Spinal Adjustments</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Gentle, targeted adjustments help restore proper alignment to the spine, reducing pressure on the herniated disc and the nerves it is compressing. This can provide significant pain relief and improve mobility.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Spinal Decompression Therapy</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Non-surgical spinal decompression uses controlled traction to gently stretch the spine, creating negative pressure within the disc. This helps retract the herniated material and promotes the flow of nutrients and oxygen into the disc for healing.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Soft Tissue Therapy</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Massage therapy and myofascial release techniques help relax the muscles surrounding the herniated disc. This reduces muscle spasm, improves circulation to the injured area, and supports the body&apos;s natural healing processes.
                  </p>
                </RevealSection>
                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Therapeutic Exercises</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    We prescribe specific exercises designed to strengthen the muscles that support the spine, improve flexibility, and help prevent future disc injuries. A strong core and balanced musculature are essential to long-term spinal health.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Recovery and Prevention – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Long-Term Wellness</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Recovery and Prevention</h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Recovering from a herniated disc requires consistent, patient-centered care. Our treatment plans are tailored to your specific condition and goals, combining in-office adjustments with at-home exercises and lifestyle modifications. Posture correction, core strengthening, and ergonomic adjustments to your work and home environment all play a critical role in preventing future disc problems and maintaining a healthy spine for years to come.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* CTA card */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Get Back to Living Without Pain</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>Contact Roselle Center For Healing to discuss non-surgical treatment options for your herniated disc.</p>
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
