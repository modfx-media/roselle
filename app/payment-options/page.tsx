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

export default function PaymentOptionsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* Hero */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <a href="/new-patient-center" className="transition-colors duration-200 hover:text-accent">New Patient Experience</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Payment Options</span>
                </nav>
              </RevealSection>
              <SplitReveal
                text="Affordable & Flexible Payment Options at Roselle Center for Healing"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* Intro */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-fluid-base max-w-3xl" style={{ color: "rgba(28,28,28,0.55)" }}>
                  At The Roselle Center For Healing, we believe in the value of natural care for you and your family. We have maintained a pricing structure that allows care for all. Roselle Center for Healing is a cash practice and therefore is not a participating provider in insurance. We will, however, submit your claims with your insurance provider for consideration of out-of-network reimbursement once your deductible has been met. This provides you the ease of care without the cumbersome task of keeping up with insurance claims paperwork. We treat auto and personal injury cases, however services must be paid at the time they are rendered unless a lien has been secured with your attorney. Additionally, we have flexible payment programs designed for your individual needs. To learn more about our payment options for chiropractic, acupuncture, nutrition and wellness care, please contact Derreth Painter at (703) 698-7117.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Payment Cards */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-3 gap-s6 max-md:grid-cols-1">
                <RevealSection>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6 h-full">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Insurance</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Our office is a cash practice, and as such are not participating providers for any insurance plans. To date, chiropractic care is partially covered by Medicare. As a courtesy, all services will be submitted to your primary insurance company for out-of-network benefits.
                    </p>
                  </div>
                </RevealSection>
                <RevealSection delay={0.06}>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6 h-full">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">No Insurance</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      For patients who have limited or no insurance, flexible payment options are available.
                    </p>
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6 h-full">
                    <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Health on a Budget</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      At Roselle Center For Healing, we appreciate you have many choices in your health care. We respect your investment in time and money to regain and maintain optimal health. We continue to focus on giving every patient the care they deserve and designing a means by which comprehensive care can be affordable. Paying attention to your health now will be far less time consuming and less expensive than trying to recover from ailments/injuries in the future. As the old saying goes, &quot;if you don&apos;t have your health, you don&apos;t have anything.&quot; Unfortunately, too many people don&apos;t discover how true that statement is until it is too late. We encourage you to take care of your health now.
                    </p>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="bg-card-bg rounded-xl p-s6 text-center">
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">
                    Questions About Payment Options?
                  </h3>
                  <p className="text-fluid-base mb-s5 max-w-2xl mx-auto" style={{ color: "rgba(28,28,28,0.55)" }}>
                    Contact our office to learn more about our flexible payment programs designed for your individual needs.
                  </p>
                  <MagneticButton>
                    <a href="tel:+17036987117" className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-accent/90">
                      Call (703) 698-7117
                    </a>
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Hours + Location */}
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
