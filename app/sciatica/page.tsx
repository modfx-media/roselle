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

export default function SciaticaPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* HERO - dark bg */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <a href="/conditions-treated" className="transition-colors duration-200 hover:text-bg">Where is Your Pain? Conditions Treated</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Sciatica</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Sciatica" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* LIGHT section with image - Intro */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Chiropractic Sciatica Treatment Options</p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      If you have ever experienced pain that runs from your lower back to your leg, it may be due to sciatica. The condition can cause pain and numbness both legs, as both legs have a bundle of sciatic nerves. At Roselle Center For Healing in Fairfax, VA, we provide treatment that can offer relief from sciatica and help you heal.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sciatica.jpg.webp?1038246deefd907bb2866e34b800ee33" alt="Person in a white shirt holding lower back, indicating pain associated with sciatica, relevant to treatment options at Roselle Center for Healing." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* DARK section - Causes */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Understanding the Condition</p>
                <SplitReveal text="Causes of Sciatica" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Sciatica can be caused by a variety of factors. The nerve may be pinched due to a herniated disk or bone spur. Other medical conditions, such as diabetes and tumors may also compress the nerve. Some causes of sciatica include:
                </p>
                <ul className="flex flex-col gap-3 mt-s4">
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Excessive weight:</strong> Excess weight puts additional stress on your spine and press on the sciatic nerve.</span>
                  </li>
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Occupation:</strong> If your job includes sitting at a desk for prolonged hours, twisting your back, or moving heavy items, these factors can lead to sciatica.</span>
                  </li>
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Age:</strong> Age can be the cause of many ailments and conditions, including sciatica. As we age, herniated disks and bone spurs become more likely to occur and cause this condition.</span>
                  </li>
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Personal injury:</strong> A car accident, slip and fall, sports injury, and personal injury can result in a herniated disk that causes sciatica pain.</span>
                  </li>
                  <li className="flex gap-3 text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    <span style={{ color: "rgba(198,177,128,0.85)" }} className="mt-1.5 shrink-0">•</span>
                    <span><strong className="text-bg">Sitting for long periods of time:</strong> When you sit for long periods of time, it can affect your spine and may lead to sciatica.</span>
                  </li>
                </ul>
              </RevealSection>
            </div>
          </section>

          {/* LIGHT section - When to Seek Treatment */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Seeking Care</p>
                <SplitReveal text="When to Seek Treatment" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  It is important to seek treatment as soon as you notice any back pain. While over-the-counter medications can provide temporary relief, the pain tends to come back. When you visit us, our chiropractors will perform an evaluation to learn more about your condition and determine the root cause of your discomfort. Afterward, we can help relieve your pain with several gentle techniques, including spinal adjustments, massage therapy, hot and cold therapies, and ultrasound therapy.
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
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>If you are experiencing symptoms of sciatica, let our team at Roselle Center For Healing in Fairfax, VA, help. We will create an individualized treatment plan that will alleviate your pain and help you heal. To learn more about our services and to schedule your appointment, call our office at (703) 698-7117 today. We look forward to improving your health and wellness!</p>
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
