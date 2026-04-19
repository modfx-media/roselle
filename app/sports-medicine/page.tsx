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

const DISCIPLINES = [
  "Sports Chiropractic Applied Kinesiology",
  "Injury Rehabilitation and Strengthening",
  "Physio Therapy",
  "Acupuncture",
  "Nutrition Counseling",
  "Spinal Decompression",
  "Bio Analysis",
];

export default function SportsMedicinePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* Hero */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a>
                  <span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-bg">Services</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Sports Medicine &amp; Rehabilitation</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Expert Sports Medicine & Rehabilitation at Roselle Center for Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* Intro with Image */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Elite Athletic Care</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Sports Medicine &amp; Rehabilitation</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      At the Roselle Center for Healing, our chiropractors are highly trained to treat various sports-related injuries. We specialize in providing our patients with expert sports medicine, physical therapy, and injury rehabilitation services. In addition, we feature a team of highly skilled chiropractors committed to helping you achieve optimal health and wellness through tailored treatment plans customized to your individual needs. Our doctors have a history of treating elite professional athletes from multiple support platforms. From the NFL, NBA, WNBA to top tier Olympians and weekend warriors. We are committed to designing tailored treatment plans customized to the sport and the individual player.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sport2.jpg.webp?ef9173d16bb5404a1aa60675b9b7a777" alt="Athlete in sports attire sitting on grass, holding knee in discomfort, illustrating sports injury management and rehabilitation at Roselle Center for Healing." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Comprehensive Treatment</p>
                <SplitReveal text="Our Interdisciplinary Approach" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Our doctors use spinal chiropractic adjustments, physical medicine rehabilitation, acupuncture, low energy light laser, nutritional and nutraceutical and diet support. Whether you&rsquo;re an athlete dealing with a sport injury, chronic pain or simply wanting the physical edge to compete at a higher or seeking relief from chronic pain, our chiropractors in Fairfax, VA, are here to provide the care you need. Our interdisciplinary team has experience and training in multiple chiropractic disciplines, including:
                </p>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s4 mt-s8 max-md:grid-cols-1">
                {DISCIPLINES.map((d, i) => (
                  <RevealSection key={d} delay={0.05 * i}>
                    <SpotlightCard className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s5 flex items-center gap-s3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                      <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(198,177,128,0.85)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-fluid-base text-bg">{d}</span>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
              <RevealSection delay={0.3}>
                <p className="text-fluid-base leading-relaxed mt-s8 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  As a result, we have the knowledge and expertise to provide a comprehensive treatment plan for your specific condition.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Starting Your Journey */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Recovery</p>
                <SplitReveal text="Starting Your Rehabilitation Journey" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  If you&rsquo;ve suffered a sports injury and are seeking rehabilitation, Roselle Center for Healing is here to help. Our experienced team of chiropractors and sports medicine specialists will work with you to develop a personalized treatment plan tailored to your specific needs and goals. From spinal adjustments, acupuncture, spinal decompression, low energy light laser, and therapeutic exercises to nutritional counseling and lifestyle modifications. We offer comprehensive-integrative care to support your recovery every step of the way.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Don&rsquo;t let a sports injury sideline you any longer. Contact Roselle Center for Healing today at (703) 698-7117 to schedule a consultation. Take the first step toward a full and speedy recovery. With our expert guidance and advanced sports medicine and rehabilitation techniques, you can get back to doing what you love with confidence and peace of mind.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <div className="mt-s8">
                  <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
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
