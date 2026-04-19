"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import SpotlightCard from "../components/motion/SpotlightCard";
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

export default function ChiropracticAdjustmentsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* Hero Banner */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a>
                  <span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-bg">Services</a>
                  <span>/</span>
                  <a href="/services/chiropractic.html" className="transition-colors duration-200 hover:text-bg">Chiropractic</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Chiropractic Adjustments</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Fairfax, VA Chiropractic Adjustments at Roselle Center for Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Intro with Image */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Holistic Wellness</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Chiropractic Adjustments in Fairfax, VA</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      At Roselle Center for Healing in Fairfax, VA, patients discover a holistic approach to wellness that focuses on the body&rsquo;s natural ability to heal. Under the direction of Dr. Tom Roselle, the center provides a wide range of therapies, with chiropractic adjustments being one of the most trusted and effective methods of care.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/chiro-adjustment.jpg.webp?7a9c86ea54bfadced91b1bda5c6a16b9" alt="Chiropractic adjustment in progress, practitioner applying pressure on patient's back, promoting spinal alignment and pain relief at Roselle Center for Healing, Fairfax, VA." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* What Are Chiropractic Adjustments? */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>About the Treatment</p>
                <SplitReveal text="What Are Chiropractic Adjustments?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Chiropractic adjustments involve precise, controlled movements that restore proper alignment to the spine and joints. These gentle corrections help reduce pressure on nerves, improve mobility, and support the body&rsquo;s natural healing processes. If you&rsquo;ve been searching for chiropractic adjustments near me, you&rsquo;ll find that care at Roselle Center for Healing is tailored to your unique needs.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Benefits of Chiropractic Care */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Key Benefits</p>
                <SplitReveal text="Benefits of Chiropractic Care" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Many people seek chiropractic adjustment Fairfax services to address common issues such as:
                </p>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s6 mt-s8 max-md:grid-cols-1">
                {[
                  { num: "01", title: "Back and neck pain" },
                  { num: "02", title: "Headaches and migraines" },
                  { num: "03", title: "Sciatica and nerve pain" },
                  { num: "04", title: "Joint stiffness or reduced mobility" },
                ].map((item) => (
                  <RevealSection key={item.num} delay={0.1}>
                    <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                      <span className="text-xs font-semibold tracking-widest text-accent">{item.num}</span>
                      <h3 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">{item.title}</h3>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
              <RevealSection delay={0.2}>
                <p className="text-fluid-base leading-relaxed mt-s8 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Regular chiropractic adjustments not only provide relief but also promote better posture, improved function, and long-term wellness.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Why Choose Roselle */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Integrative Care</p>
                <SplitReveal text="Why Choose Roselle Center for Healing?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Unlike a typical clinic, Roselle Center for Healing offers an integrative approach where chiropractors collaborate with other health professionals to provide comprehensive care. This means your treatment plan may include chiropractic care alongside therapies like acupuncture, nutrition, or physical rehabilitation for lasting results.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Schedule CTA */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Schedule Your Chiropractic Adjustment Today</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      If you&rsquo;re ready to experience the benefits of chiropractic adjustments near me, Roselle Center for Healing is here to help. Call Dr. Tom Roselle and his team today at (703) 698-7117 to schedule your chiropractic adjustment in Fairfax, VA and take the first step toward better health and a pain-free lifestyle.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Hours & Location */}
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
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p>
                      <a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p>
                    </div>
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
