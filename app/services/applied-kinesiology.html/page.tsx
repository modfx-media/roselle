"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import SpotlightCard from "../../components/motion/SpotlightCard";
import GsapImageParallax from "../../components/motion/GsapImageParallax";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const BENEFITS = [
  "Relief from chronic pain and muscle tension",
  "Improved posture and flexibility",
  "Support for injury recovery",
  "Better stress management",
  "Enhanced overall energy and wellness",
];

export default function AppliedKinesiologyPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1 service-page-shell">
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-accent">Services</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Applied Kinesiology</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Applied Kinesiology in Fairfax, VA | Roselle Center for Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Holistic Assessment</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Discover the Benefits of Kinesiology in Fairfax, VA</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      When it comes to understanding how the body works and finding natural solutions for pain and stress, kinesiology is a powerful tool. At Roselle Center for Healing in Fairfax, VA, Dr. Tom Roselle and his team offer specialized care, including Applied Kinesiology, to help patients achieve balance, restore function, and improve overall well-being.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x578_80/webmgr/0g/5/2/68950206e498b_AppliedKinesiology.png.webp?fe0223bb81434c67b13f30eca32771ff" alt="Chiropractor demonstrating Applied Kinesiology technique with patient in Fairfax, VA, focusing on muscle testing and body balance." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>About</p>
                <SplitReveal text="What Is Kinesiology?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Kinesiology is the study of human movement and how muscles, joints, and the nervous system work together. In chiropractic care, it goes beyond anatomy to assess how the body responds to stress, injuries, or imbalances. If you&rsquo;ve been searching for kinesiology near you, this therapy offers a unique way to identify underlying issues that may not always show up in standard medical tests.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">How It Works</p>
                <SplitReveal text="How Applied Kinesiology Works" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Applied Kinesiology is a hands-on method used by a chiropractor near you to evaluate muscle function and its relationship to the body&rsquo;s systems. Through gentle muscle testing, a chiropractor can detect imbalances that may be contributing to pain, fatigue, or other health concerns. Once identified, personalized care plans may include adjustments, nutritional support, and kinesiology therapy to restore strength and balance.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Key Benefits</p>
                <SplitReveal text="Benefits of Kinesiology Therapy" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Patients often turn to kinesiology therapy for a wide range of reasons, including:
                </p>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s4 mt-s8 max-md:grid-cols-1">
                {BENEFITS.map((b, i) => (
                  <RevealSection key={b} delay={0.05 * i}>
                    <SpotlightCard className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s5 flex items-center gap-s3 card-hover-lift">
                      <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(198,177,128,0.85)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-fluid-base text-bg">{b}</span>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
              <RevealSection delay={0.3}>
                <p className="text-fluid-base leading-relaxed mt-s8 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  By combining chiropractic care with applied kinesiology, patients in Fairfax, VA receive a more holistic and comprehensive approach to health.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Why Us</p>
                <SplitReveal text="Why Choose Roselle Center for Healing?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  At Roselle Center for Healing, Dr. Tom Roselle and his team take the time to understand each patient&rsquo;s unique needs. With a blend of chiropractic techniques and applied kinesiology, they help restore balance to the body and empower patients to take charge of their health. If you&rsquo;re looking for a trusted chiropractor near you who provides kinesiology therapy, this clinic offers proven solutions in a supportive environment.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Take the First Step Toward Better Health</h3>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Whether you&rsquo;re struggling with ongoing discomfort, recovering from an injury, or simply want to feel stronger and more balanced, kinesiology may be the key. Call Roselle Center for Healing at (703) 698-7117 today to schedule your consultation and learn how applied kinesiology can help you live your healthiest life.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <MagneticButton className="btn-primary-inverted" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (<div key={h.day} className="service-hours-row flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(42,41,40,0.08)" }}><span style={{ color: "rgba(42,41,40,0.45)" }}>{h.day}</span><span className="text-fg font-medium">{h.time}</span></div>))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-fg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Address</p><p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p></div>
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Phone</p><a href="tel:+17036987117" className="text-fluid-base text-fg transition-colors duration-200 hover:text-accent">(703) 698-7117</a></div>
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Fax</p><p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>(703) 698-5729</p></div>
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Email</p><p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>rosellecare@gmail.com</p></div>
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
