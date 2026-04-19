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

export default function CenterHoursPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Center Hours</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Roselle Center For Healing: Fairfax, VA Clinic Hours"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Hours Table (Primary) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-start
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                {/* Hours */}
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                      Hours of Operation
                    </p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] mb-s6">
                      Please Call For Available Appointments
                    </h2>
                  </RevealSection>

                  <RevealSection delay={0.1}>
                    <div className="flex flex-col">
                      {HOURS.map((h) => (
                        <div key={h.day}
                          className="flex items-center justify-between py-4 text-fluid-base"
                          style={{ borderBottom: "1px solid rgba(42,41,40,0.08)" }}>
                          <span className="font-medium text-fg">{h.day}</span>
                          <span style={{ color: h.time === "Closed" ? "rgba(42,41,40,0.4)" : "rgba(42,41,40,0.68)" }}>
                            {h.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </RevealSection>

                  <RevealSection delay={0.15}>
                    <div className="flex flex-wrap gap-s3 mt-s6">
                      <MagneticButton
                        className="btn-primary"
                        onClick={() => window.location.href = "tel:+17036987117"}
                      >
                        Call (703) 698-7117
                      </MagneticButton>
                      <MagneticButton
                        className="btn-primary"
                        onClick={() => window.location.href = "/appointment"}
                      >
                        Book Appointment
                      </MagneticButton>
                    </div>
                  </RevealSection>
                </div>

                {/* Location Card */}
                <RevealSection delay={0.12}>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s4
                                            transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            hover:-translate-y-1">
                    <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug">
                      Merrifield Location In Fairfax, VA
                    </h3>
                    <p className="text-xs tracking-widest uppercase text-accent font-sans">
                      Your Local Chiropractic Clinic
                    </p>
                    <p className="text-fluid-base text-fg font-medium">
                      Roselle Center For Healing
                    </p>
                    <div className="flex flex-col gap-s3">
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
                  </SpotlightCard>
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── Map & Directions ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Our Location
                </p>
                <SplitReveal
                  text="Directions to the Center"
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

              <RevealSection delay={0.15}>
                <div className="flex justify-center mt-s6">
                  <MagneticButton
                    className="btn-primary-inverted"
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

          {/* ── Newsletter Signup ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10
                                rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4
                                bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">
                      Stay Informed
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Please complete this form to be notified of center updates, special events
                      and health education lectures.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Contact Us
                    </MagneticButton>
                  </div>
                </div>
              </RevealSection>
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
