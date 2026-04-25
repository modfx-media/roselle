"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


export default function WhiplashPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* HERO - dark bg */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/conditions-treated" className="transition-colors duration-200 hover:text-accent">Where is Your Pain? Conditions Treated</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Whiplash</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Whiplash" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* LIGHT section with image - Intro */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Whiplash Treatment</p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Whiplash is a common injury that can occur from an auto accident or a fall and significantly affect the quality of your life. Along with that, the pain due to the condition can become chronic and lead to long-term affects if not treated on time. At Roselle Center For Healing in Fairfax, VA, we offer chiropractic treatments to reduce your symptoms and improve your health.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/whiplash3.jpg.webp?e196ad42c18aa45d0e7d4062ea76df38" alt="Woman experiencing neck pain while sitting in a car, illustrating symptoms of whiplash related to auto accidents." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* DARK section - What is Whiplash */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Understanding Whiplash</p>
                <SplitReveal text="What is Whiplash?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Whiplash happens when your neck and head are moved forward and backward forcefully. The most common cause of whiplash is a car accident. When the car stops suddenly, your head continues to move in one direction and then the other, which can strain the muscles in your neck. Whiplash can also be caused by sports injury or a slip and fall accident.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* LIGHT section - Symptoms */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Symptoms</p>
                <SplitReveal text="Symptoms of Whiplash" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  The most common symptoms of whiplash are neck pain and stiffness. The pain can be more intense when moving your head and you may have difficulty moving your head and neck. Not only that, but you might experience pain and stiffness in your shoulders, upper back, and lower back. You can also have pain in your arms and hands, blurry vision, migraines, and difficulty concentrating are also common.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* DARK section - Treatment Options with subsections */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Treatment Options</p>
                <SplitReveal text="Chiropractic Whiplash Treatment" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  While conventional medicine can offer temporary relief for whiplash, the symptoms can often return. Chiropractic care can effectively treat the root cause of whiplash and provide relief.
                </p>

                <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mt-s6 mb-s3">Chiropractic Adjustment</h3>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Chiropractic adjustment is a fundamental part of chiropractic care. Our chiropractor will use gentle pressure and thrusts to correct subluxations, also known as misalignments. A misalignment can occur due to the impact of a car accident or certain lifestyle habits. Proper spinal alignment can relieve pain, reduce inflammation, and improve nervous system function.
                </p>

                <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mt-s6 mb-s3">Physiotherapy</h3>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Physiotherapy, particularly laser therapy, can also help treat whiplash. Our chiropractor will use a laser to penetrate deep into tissues, which can help the tissues heal. Laser therapy can speed up the recovery process, reduce inflammation, and alleviate pain.
                </p>

                <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mt-s6 mb-s3">Spinal Decompression</h3>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Spinal decompression can also be beneficial for whiplash. We will use a specialized table, which creates negative pressure in the spine and helps bulging discs or herniated discs to go back into place. Not only that, but the treatment also relieves tension within the spine.
                </p>

                <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mt-s6 mb-s3">Massage Therapy</h3>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Since whiplash pain is caused by muscle tension, massage therapy helps relieves muscle tension and provide pain relief. This technique can also improve your range of motion and decrease inflammation.
                </p>

                <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mt-s6 mb-s3">Acupuncture</h3>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Acupuncture can help relieve the symptoms of whiplash. The method is designed to decrease tension, improve nervous system function, and eliminate your discomfort.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* CTA card section */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Contact us for an Appointment Today</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>If you have any symptoms of whiplash, our team at Roselle Center For Healing in Fairfax, VA, can help. We offer a range of treatments, such as chiropractic adjustments, massage therapy, acupuncture, and laser therapy, to provide relief and help you return to your normal routine quickly. To schedule your appointment, call our office at (703) 698-7117 today.</p>
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
