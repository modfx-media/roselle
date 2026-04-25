"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


export default function KneePainPage() {
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
                  <a href="/conditions-treated" className="transition-colors duration-200 hover:text-accent">Where is Your Pain? Conditions Treated</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Knee Pain</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Knee Pain" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Overview</p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Knee pain is a common issue that can limit your mobility and reduce your quality of life. Whether it&rsquo;s from an injury, overuse, or a chronic condition, it&rsquo;s important to seek professional care. At Roselle Center for Healing in Fairfax, VA, we provide chiropractic treatments that address the root causes of knee pain and support long-term healing.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x1023_80/webmgr/0g/5/2/knee-pain.jpg.webp?802c9757dabe90041a2ae21a7536d8e4" alt="Man holding knee in pain outdoors, symbolizing the impact of knee injuries and the importance of chiropractic treatment for knee pain." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Causes</p>
                <SplitReveal text="Common Causes of Knee Pain" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <ul className="mt-s6 max-w-[720px] flex flex-col gap-s4">
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span className="text-bg font-medium">Sports Injuries:</span> High-impact sports can put immense strain on the knees, leading to tears, sprains, and other injuries.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span className="text-bg font-medium">Arthritis:</span> Conditions like osteoarthritis and rheumatoid arthritis can cause inflammation, stiffness, and pain in the knee joint.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span className="text-bg font-medium">Overuse Injuries:</span> Repetitive motions, such as running or bending, can lead to conditions like tendinitis and bursitis.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span className="text-bg font-medium">Misalignment:</span> Imbalances in the body, such as misalignment in the spine or hips, can contribute to improper knee movement and pain.
                  </li>
                </ul>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Treatment</p>
                <SplitReveal text="How Can a Chiropractor Help?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <ul className="mt-s6 max-w-[720px] flex flex-col gap-s4">
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    <span className="text-fg font-medium">Chiropractic Adjustments:</span> Our chiropractors use targeted adjustments to correct misalignments in the spine and joints, relieving pressure on the knees and promoting better movement patterns.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    <span className="text-fg font-medium">Massage Therapy:</span> Soft tissue techniques can relax tight muscles around the knee, reduce swelling, and improve blood circulation to speed up healing.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    <span className="text-fg font-medium">Physical Therapy:</span> We design customized exercise programs to strengthen the muscles supporting the knee, improve flexibility, and prevent future injuries.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    <span className="text-fg font-medium">Ultrasound Therapy:</span> This non-invasive treatment uses sound waves to reduce inflammation and promote tissue repair in the knee area.
                  </li>
                </ul>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Take Control of Your Knee Pain by Visiting Roselle Center for Healing</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Don&rsquo;t let knee pain hold you back from living your life. At Roselle Center for Healing in Fairfax, VA, we&rsquo;re committed to helping you find relief through effective, non-invasive treatments. Whether your knee pain is caused by an injury, arthritis, or overuse, our experienced team is here to guide you on your path to recovery. Schedule an appointment today by calling (703) 698-7117.
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
