"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function SportsInjuriesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* HERO */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <a href="/conditions-treated" className="transition-colors duration-200 hover:text-bg">Where is Your Pain? Conditions Treated</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Sports Injuries</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Sports Injuries" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Overview – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Athletic Recovery</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Sports injuries are a reality for athletes at every level — from weekend warriors to competitive professionals. Whether it&apos;s a sudden sprain on the field or a gradual overuse injury from repetitive training, these conditions can sideline you and affect your performance long after the initial pain subsides. At Roselle Center For Healing in Fairfax, VA, our chiropractic team helps athletes recover from injury, restore full function, and build resilience against future setbacks.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Common Sports Injuries – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>What We Treat</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Common Sports Injuries We Treat</h2>
              </RevealSection>
              <div className="grid grid-cols-3 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Sprains &amp; Strains</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Ligament sprains and muscle strains are among the most frequent sports injuries. They occur when tissues are stretched beyond their normal range, causing pain, swelling, and limited mobility. Proper treatment is essential to ensure complete healing and prevent re-injury.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Joint Dysfunction &amp; Overuse Injuries</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Repetitive motion can lead to joint dysfunction, tendinitis, and stress fractures. These overuse injuries develop gradually and often worsen without intervention. Chiropractic care helps restore proper joint mechanics and address the biomechanical imbalances that caused the problem.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Shoulder, Knee &amp; Muscle Injuries</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Rotator cuff injuries, knee ligament damage, and muscle imbalances are common across many sports. These conditions benefit from a combination of chiropractic adjustments, soft tissue therapy, and targeted rehabilitation to restore strength and stability.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Chiropractic Sports Rehabilitation – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Approach</p>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s6">Chiropractic Sports Rehabilitation</h2>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Spinal Adjustments</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Precise chiropractic adjustments correct spinal misalignments that may be contributing to pain, reduced range of motion, or impaired performance. Proper spinal alignment is the foundation of efficient movement and athletic function.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Soft Tissue Therapy</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Therapeutic massage and myofascial release techniques break up adhesions, reduce inflammation, and promote blood flow to injured tissues. This accelerates healing and helps restore flexibility and comfort.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Corrective Exercises</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    We design sport-specific exercise programs that address your unique injury and biomechanical needs. These exercises rebuild strength, correct muscle imbalances, and improve coordination to support a full return to activity.
                  </p>
                </RevealSection>
                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Performance Optimization</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Beyond injury recovery, chiropractic care can enhance athletic performance by improving joint mobility, nervous system function, and overall body mechanics. Many professional athletes rely on regular chiropractic care as part of their training regimen.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Getting Back in the Game – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Path Forward</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Getting Back in the Game</h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Returning to sport after an injury requires more than the absence of pain — it demands that your body has fully healed and is strong enough to withstand the demands of your activity. Rushing back too soon is one of the most common causes of re-injury. Our team guides you through a gradual, structured return-to-play process, ensuring that each milestone is met before progressing to the next. We also provide ongoing preventive care to keep your body performing at its best and reduce the risk of future injuries.
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
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Recover Faster, Perform Better</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>Contact Roselle Center For Healing to start your sports injury rehabilitation and get back to doing what you love.</p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Hours + Location – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span>
                        <span className="text-bg font-medium">{h.time}</span>
                      </div>
                    ))}
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
