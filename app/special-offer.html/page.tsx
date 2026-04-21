"use client";

import Image from "next/image";
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

export default function SpecialOffersPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Special Offers</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Free 20-Minute Chiropractic Consultation | Roselle Center for Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
              <RevealSection delay={0.15}>
                <h2 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mt-s6" style={{ opacity: 0.7 }}>Special Offers</h2>
              </RevealSection>
            </div>
          </section>

          {/* Mother's Day Flyer */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/mothers-day-flyer.webp"
                    alt="Happy Mother's Day flyer featuring three women smiling, a white magnolia flower, and sections highlighting special wellness offers including discounts on services at Roselle Center for Healing — Moms of All Ages, Flower Essence Therapy, and Massage Therapy."
                    width={1350}
                    height={1043}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Free Health Documentary */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6">
                  <h4 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s4">
                    FREE HEALTH DOCUMENTARY: Applied Kinesiology, The BEST-KEPT secret in healthcare.
                  </h4>
                  <p className="text-fluid-base mb-s5" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Scan the QR Code to watch on your mobile device or{" "}
                    <a
                      href="https://www.youtube.com/watch?v=kr89lXmXmHs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline transition-colors duration-200 hover:text-bg"
                    >
                      CLICK HERE
                    </a>{" "}
                    to watch here now.
                  </p>
                  <a
                    href="https://www.youtube.com/watch?v=kr89lXmXmHs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-s5 rounded-lg overflow-hidden"
                  >
                    <Image
                      src="/icak-documentary-poster.webp"
                      alt='ICAK-USA documentary poster featuring "Applied Kinesiology: The Best Kept Secret in Healthcare," highlighting insights into applied kinesiology, alternative health perspectives, patient success stories, and interviews with practitioners, with a QR code for viewing.'
                      width={1320}
                      height={1020}
                      className="w-full h-auto"
                    />
                  </a>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="bg-card-bg rounded-xl p-s6 text-center">
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">
                    Schedule Your Free 20-Minute Chiropractic Consultation Today
                  </h3>
                  <p className="text-fluid-base mb-s5 max-w-2xl mx-auto" style={{ color: "rgba(28,28,28,0.55)" }}>
                    Take advantage of our special offers and start your journey to better health. Call us today to schedule your consultation.
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
