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

export default function HeadachesPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Headaches</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Headaches" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Overview – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Understanding Headaches</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Headaches are one of the most common conditions affecting millions of people every day. They can stem from a wide variety of causes including tension, stress, poor posture, dehydration, and spinal misalignments. While reaching for over-the-counter medication may provide temporary relief, it rarely addresses the underlying issue. At Roselle Center For Healing in Fairfax, VA, our chiropractic team offers a drug-free, whole-body approach to relieving headache pain — targeting the source of your discomfort rather than simply masking the symptoms.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Types of Headaches – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Conditions We Address</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Types of Headaches</h2>
              </RevealSection>
              <div className="grid grid-cols-3 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Tension Headaches</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    The most common type of headache, tension headaches often feel like a constant band of pressure around the head. They are frequently triggered by stress, muscle tightness in the neck and shoulders, and prolonged periods of poor posture — such as sitting at a desk or looking down at a phone.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Migraines</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Migraines produce intense, throbbing pain — often on one side of the head — and can be accompanied by nausea, light sensitivity, and visual disturbances. While triggers vary from person to person, spinal misalignments and nerve irritation in the upper cervical spine are frequently contributing factors.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Cervicogenic Headaches</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Cervicogenic headaches originate from dysfunction in the cervical spine — the bones, joints, and soft tissues of the neck. Pain typically begins at the base of the skull and radiates upward. These headaches respond exceptionally well to chiropractic care because the root cause is structural.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Chiropractic Care for Headaches – light */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Approach</p>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s6">Chiropractic Care for Headaches</h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Chiropractic adjustments restore proper alignment to the spine, particularly the cervical vertebrae that directly influence head and neck function. When the spine is misaligned, it can place undue pressure on surrounding nerves and restrict blood flow — both of which are known contributors to headaches and migraines.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  By gently correcting these misalignments, our chiropractors reduce nerve irritation, relieve the muscle tension that builds up across the neck, shoulders, and upper back, and improve the body&apos;s ability to heal itself. Many patients experience significant reduction in headache frequency and intensity after just a few visits.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Benefits of Natural Headache Relief – dark */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Why Choose Natural Care</p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s6">Benefits of Natural Headache Relief</h2>
              </RevealSection>
              <div className="grid grid-cols-3 gap-s8 max-md:grid-cols-1">
                <RevealSection delay={0.05}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Drug-Free Relief</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Chiropractic care provides effective headache relief without the need for medications. This means no risk of side effects, dependency, or rebound headaches that are commonly associated with long-term pain medication use.
                  </p>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Non-Invasive Treatment</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Our approach relies on gentle, hands-on adjustments and therapeutic techniques rather than surgical intervention. Treatment is comfortable, safe, and suitable for patients of all ages.
                  </p>
                </RevealSection>
                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-lg text-bg font-serif tracking-tight mb-s3">Addresses Root Causes</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Rather than masking symptoms, chiropractic care targets the structural and functional issues that contribute to headaches. This means lasting results and a healthier spine overall.
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
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Find Relief From Headaches Today</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>Schedule an appointment at Roselle Center For Healing and discover a natural path to lasting headache relief.</p>
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
