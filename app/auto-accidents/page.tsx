"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


export default function AutoAccidentsPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Auto Accidents</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Auto Accidents" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Overview – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Post-Accident Care</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Auto accidents — even seemingly minor fender-benders — can cause a wide range of injuries to the spine, muscles, and soft tissues. Whiplash, back pain, herniated discs, and soft tissue damage are among the most common conditions that follow a collision. Many of these injuries don&apos;t produce immediate symptoms, making it critical to seek evaluation as soon as possible. At Roselle Center For Healing in Fairfax, VA, our team provides early chiropractic intervention to help prevent acute injuries from becoming chronic conditions.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Common Auto Accident Injuries – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>What We See Most</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Common Auto Accident Injuries</h2>
              </RevealSection>
              <div className="grid grid-cols-3 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Whiplash</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Whiplash occurs when the head is rapidly thrown forward and backward during impact, straining the muscles and ligaments of the neck. Symptoms include neck pain, stiffness, headaches, dizziness, and reduced range of motion — often appearing hours or days after the accident.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Back &amp; Neck Pain</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    The force of impact can misalign spinal vertebrae, strain muscles, and irritate nerves throughout the back and neck. Left untreated, these injuries can develop into chronic pain conditions that significantly affect your quality of life.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Herniated Discs &amp; Soft Tissue Injuries</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    The sudden jolt of a car accident can cause spinal discs to herniate or bulge, placing pressure on surrounding nerves. Soft tissue injuries to muscles, tendons, and ligaments may also result in inflammation, bruising, and restricted movement. Post-accident headaches and migraines are also common.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Why Seek Care – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Early Intervention Matters</p>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s6">Why Seek Chiropractic Care After an Accident</h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  After an auto accident, your body releases adrenaline and endorphins that can mask pain for hours or even days. Many patients feel &ldquo;fine&rdquo; immediately following a collision, only to discover significant injuries later. A prompt chiropractic evaluation can identify hidden injuries before they have a chance to worsen.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Chiropractic care offers a non-invasive, drug-free path to recovery that addresses the structural damage caused by the accident rather than simply managing symptoms. Early treatment helps reduce inflammation, restore proper spinal alignment, and support the body&apos;s natural healing mechanisms — all of which are essential to a complete recovery.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Our Treatment Approach – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Recovery Plan</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Our Treatment Approach</h2>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Comprehensive Evaluation</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Every patient receives a thorough examination to identify all areas of injury, including orthopedic and neurological testing. We take the time to understand exactly what happened during the accident so we can develop the most effective treatment plan.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Personalized Treatment Plans</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    No two accidents are alike, and neither are our treatment plans. Your care is customized to address your specific injuries, symptoms, and recovery goals — combining the therapies that will be most effective for your situation.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Chiropractic Adjustments &amp; Massage</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Precise spinal adjustments restore proper alignment, while therapeutic massage relieves muscle tension and promotes circulation to injured tissues. Together, these therapies accelerate healing and reduce pain.
                  </p>
                </RevealSection>
                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Rehabilitation Exercises</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    As you heal, we introduce targeted exercises to rebuild strength, improve flexibility, and restore your full range of motion. These exercises are designed to support your recovery and help prevent future problems.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* CTA card */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Been in an Accident? Don&apos;t Wait.</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>Schedule a consultation at Roselle Center For Healing to get evaluated and start your recovery as soon as possible.</p>
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
