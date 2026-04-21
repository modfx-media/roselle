"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import SpotlightCard from "../../components/motion/SpotlightCard";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const DIRECTIONS_STEPS = [
  "START - DC / VA: From the northern Virginia suburbs or from Washington, DC, take I-66 to the beltway (I-495).",
  "START - MD: From Maryland, take I-495 toward northern Virginia / Fairfax.",
  "From I-66, take I-495 South (toward Alexandria) for 0.5 miles.",
  "Take the Exit for Route 50 / Arlington Boulevard West (toward Fairfax). Stay left at the fork on the exit ramp to merge onto Route 50 / Arlington Boulevard.",
  "Travel approximately 0.5 miles to the stoplight at Prosperity Avenue. Turn right at the light then take an immediate right onto Executive Park Avenue. We are located in the first building on the left - 3rd Floor.",
];

export default function DirectionsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Directions</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Directions to Roselle Center For Healing in Fairfax, VA"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Directions Content ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Directions to the Center
                </p>
                <SplitReveal
                  text="How to Find Us"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  The Roselle Center for Healing is located less than a mile off of I-495 on Route 50
                  (Arlington Boulevard) in Fairfax, Virginia. This is also very close to the intersection
                  of I-66 and I-495, making them both great &ldquo;starting points&rdquo; for your directions.
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <ul className="mt-s6 flex flex-col gap-s4 max-w-[720px]">
                  {DIRECTIONS_STEPS.map((step, i) => (
                    <li key={i} className="flex gap-s3 text-fluid-base leading-relaxed">
                      <span className="shrink-0 text-accent font-semibold">•</span>
                      <span style={{ color: "rgba(42,41,40,0.68)" }}>{step}</span>
                    </li>
                  ))}
                </ul>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="flex flex-wrap gap-s3 mt-s6">
                  <MagneticButton
                    className="btn-primary"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/dir//Roselle+Center+for+Healing,+8500+Executive+Park+Ave+%23300,+Fairfax,+VA+22031",
                        "_blank"
                      )
                    }
                  >
                    Get Directions from Google Maps
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Map Embed ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Our Location
                </p>
                <SplitReveal
                  text="Merrifield Location in Fairfax, VA"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <div className="mt-s8 rounded-xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.2399291!3d38.8676434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b7fd2c0c23d%3A0x2367cc50a24ac1ff!2sRoselle%20Center%20for%20Healing!5e0!3m2!1sen!2sus!4v1"
                    className="w-full aspect-[16/7] max-md:aspect-video"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Roselle Center for Healing location map"
                  />
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours & Location ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">

                {/* Hours */}
                <RevealSection>
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s5">
                    Hours of Operation
                  </h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day}
                        className="flex items-center justify-between py-3 text-sm"
                        style={{ borderBottom: "1px solid rgba(42,41,40,0.08)" }}>
                        <span style={{ color: "rgba(42,41,40,0.6)" }}>{h.day}</span>
                        <span className="text-fg font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </RevealSection>

                {/* Location */}
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s5">
                    Merrifield Location In Fairfax, VA
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans text-accent">
                    Your Local Chiropractic Clinic
                  </p>
                  <p className="text-fluid-base text-fg font-medium mb-s5">
                    Roselle Center For Healing
                  </p>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1 text-accent">Address</p>
                      <p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.7)" }}>
                        8500 Executive Park Ave STE 300<br />Fairfax, VA 22031
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1 text-accent">Phone</p>
                      <a href="tel:+17036987117"
                        className="text-fluid-base text-fg transition-colors duration-200 hover:text-accent">
                        (703) 698-7117
                      </a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1 text-accent">Fax</p>
                      <p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.7)" }}>
                        (703) 698-5729
                      </p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1 text-accent">Email</p>
                      <a href="mailto:rosellecare@gmail.com"
                        className="text-fluid-base text-fg transition-colors duration-200 hover:text-accent">
                        rosellecare@gmail.com
                      </a>
                    </div>
                  </div>
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10
                                rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}>
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                      Free 20-Minute Consultation
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Call us today to schedule your free consultation and take the first step
                      toward better health.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "tel:+17036987117"}
                    >
                      Call (703) 698-7117
                    </MagneticButton>
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "/appointment"}
                    >
                      Book an Appointment
                    </MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
