"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function NeckPainFaqsPage() {
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
                  <a href="/neck-pain" className="transition-colors duration-200 hover:text-accent">Neck Pain</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Neck Pain FAQs</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Neck Pain FAQs: Chiropractic Relief at Roselle Center, Fairfax" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* LIGHT section with image - Intro */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Neck Pain FAQs</p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Experiencing a neck injury at any age is never pleasant and it may take a long time to make a full recovery. Whether you&apos;ve recently experienced a herniated disc, whiplash, or other injury, addressing your neck issues with proper neck pain treatment from a professional chiropractor near you can help. Work with a chiropractor on our team at Roselle Center for Healing in Fairfax, VA, to help ensure you are on the right path to a complete and total recovery.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/cervical-traction.jpg.webp?22a45f7ca529237234247c7a49d4bb7c" alt="Chiropractor providing neck adjustment to patient experiencing neck pain, emphasizing chiropractic care and treatment for neck injuries." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* DARK section - Common Causes */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Common Causes</p>
                <SplitReveal text="What Are Common Causes of Neck Injuries or Pain?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Neck pain and injuries will vary by severity. Additionally, the pain you feel in your neck can be triggered by an array of external factors, such as:
                </p>
                <ul className="flex flex-col gap-3 mt-s4">
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Herniated discs:</strong> Bulging and/or herniated discs can cause neck pain, especially those with predispositions involving spinal and back issues.</span>
                  </li>
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Muscle spasms:</strong> Muscle spasms can cause temporary neck pain and discomfort.</span>
                  </li>
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Pinched nerves:</strong> If a nerve becomes pinched, also known as cervical radiculopathy, you may feel pain, numbness, irritation, and discomfort when sitting, walking, or standing in a direct position in which the nerve is pinched.</span>
                  </li>
                </ul>
              </RevealSection>
            </div>
          </section>

          {/* LIGHT section - Whiplash */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Whiplash</p>
                <SplitReveal text="What Is Whiplash?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Whiplash is when your head and neck rock back and forth rapidly, like the cracking of a whip. It usually happens during a car accident although it can be caused by other sources as well.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* DARK section - Natural and Holistic Care */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Our Approach</p>
                <SplitReveal text="Natural and Holistic Care" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  The good news is that, if you have neck pain, our chiropractic care team can help you get the natural and holistic relief you are looking for. When in pain, some patients may turn to medication or surgery to help resolve it. Unfortunately, some medications can cause addiction while surgery can have long recovery times. We at Roselle Center for Healing can provide an alternative approach that can help you avoid needing those kinds of treatments.
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
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Get Neck Pain Treatment and Whiplash Treatment from a Chiropractor Near You for a Neck Injury</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>Understanding the significance of your neck injury can be important when you need neck pain treatment. At Roselle Center for Healing in Fairfax, VA, we can help you get to the bottom of any neck injury you have sustained. Call us at (703) 698-7117 for whiplash treatment from a chiropractor near you.</p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Hours + Location - dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (<div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}><span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span><span className="text-bg font-medium">{h.time}</span></div>))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p><a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p></div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
