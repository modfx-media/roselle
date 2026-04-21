"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function OfficeHoursPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Office Hours</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Office Hours" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── COVID Update + Call ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 text-center">
              <RevealSection>
                <a
                  href="https://mailchi.mp/drtomroselle/covid-19-rcfh-reopening-040820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-fluid-base text-accent font-medium underline underline-offset-2 transition-colors duration-200 hover:text-fg mb-s6"
                >
                  CLICK HERE FOR AN IMPORTANT MESSAGE FROM DR. TOM ROSELLE, DC
                </a>
              </RevealSection>
              <RevealSection delay={0.06}>
                <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s3">COVID-19 UPDATE - WE ARE NOW OPEN</h2>
              </RevealSection>
              <RevealSection delay={0.12}>
                <h3 className="text-fluid-2xl tracking-tight leading-snug mb-s8" style={{ color: "rgba(42,41,40,0.68)" }}>
                  PLEASE CALL <a href="tel:+17036987117" className="text-fg font-medium transition-colors duration-200 hover:text-accent">(703) 698-7117</a> FOR AVAILABLE APPOINTMENTS
                </h3>
              </RevealSection>

              {/* Hours Table */}
              <RevealSection delay={0.18}>
                <div className="max-w-[560px] mx-auto">
                  <div className="flex flex-col">
                    {[
                      { day: "Monday", time: "7:00am - 6:00pm" },
                      { day: "Tuesday", time: "10:00am - 7:00pm" },
                      { day: "Wednesday", time: "7:00am - 6:00pm" },
                      { day: "Thursday", time: "2:00pm - 7:00pm" },
                      { day: "Friday", time: "7:00am - 5:00pm" },
                      { day: "Saturday", time: "8:00am - 1:00pm" },
                      { day: "Sunday", time: "CLOSED" },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between py-4 text-fluid-base" style={{ borderBottom: "1px solid rgba(42,41,40,0.1)" }}>
                        <span className="font-medium text-fg">{h.day}</span>
                        <span style={{ color: "rgba(42,41,40,0.68)" }}>{h.time}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-s8 text-left">
                    <p className="text-fluid-base text-fg font-medium">Roselle Center For Healing</p>
                    <p className="text-fluid-base leading-relaxed mt-s2" style={{ color: "rgba(42,41,40,0.68)" }}>
                      8500 Executive Park Ave. #300A<br />
                      Fairfax, VA 22031
                    </p>
                    <p className="text-fluid-base mt-s2" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Phone: <a href="tel:+17036987117" className="text-fg font-medium transition-colors duration-200 hover:text-accent">(703) 698-7117</a>
                    </p>
                    <p className="text-fluid-base mt-s1" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Fax: 703-698-5729
                    </p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg pb-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Schedule Your Appointment</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Roselle Center For Healing in Fairfax, VA to schedule your visit.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours + Location Footer ── */}
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
