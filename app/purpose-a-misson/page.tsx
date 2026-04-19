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

export default function PurposeMissionPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <a href="/new-patient-center.html" className="transition-colors duration-200 hover:text-bg">New Patient Experience</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Purpose &amp; Mission</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Purpose & Misson" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Main Content ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Foundation</p>
                <SplitReveal text="Holistic Purpose & Mission of Roselle Center For Healing" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[36ch]" />
              </RevealSection>

              {/* Image */}
              <RevealSection delay={0.1}>
                <div className="mt-s8 rounded-2xl overflow-hidden">
                  <img
                    src="https://cdcssl.ibsrv.net/ibimg/smb/1023x567_80/webmgr/0g/5/2/2024/rcfh-desk.png.webp?69ad103845fefe6b7f70b54853f523bb"
                    alt="Reception area of Roselle Center for Healing, featuring two staff members assisting a male patient, with computers and a welcoming atmosphere."
                    className="w-full h-auto object-cover"
                  />
                </div>
              </RevealSection>

              {/* Purpose & Mission Statement */}
              <RevealSection delay={0.15}>
                <div className="mt-s8 max-w-[780px]">
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s5">
                    The Roselle Center for Healing is a natural integrative healthcare practice, holistic in approach with the accepted purpose and mission of:
                  </h3>

                  <div className="flex flex-col gap-s5">
                    <div className="bg-card-bg rounded-xl p-s5">
                      <p className="text-xs tracking-widest uppercase text-accent mb-s2 font-sans">Our Purpose</p>
                      <p className="text-fluid-base text-fg leading-relaxed font-medium">
                        To serve, educate and empower individuals on their path to create extraordinary health!
                      </p>
                    </div>

                    <div className="bg-card-bg rounded-xl p-s5">
                      <p className="text-xs tracking-widest uppercase text-accent mb-s2 font-sans">Our Mission</p>
                      <p className="text-fluid-base text-fg leading-relaxed font-medium">
                        To provide others with established and advanced techniques in the disciplines of chiropractic, acupuncture and nutritional healing. These goals are met by creating structural, chemical and emotional balance.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div
                  className="rounded-2xl p-s8 max-md:p-s5 text-center"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}
                >
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Begin Your Journey</p>
                  <h2 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s3">
                    Ready to Experience Extraordinary Health?
                  </h2>
                  <p className="text-sm leading-relaxed max-w-[520px] mx-auto mb-s5" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Schedule a free 20-minute consultation and take the first step toward holistic wellness.
                  </p>
                  <div className="flex gap-s3 justify-center flex-wrap">
                    <MagneticButton onClick={() => window.location.href = "/appointment"}>
                      Book a Consultation
                    </MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-colors duration-200"
                      style={{ color: "rgba(245,244,239,0.65)", border: "1px solid rgba(245,244,239,0.15)" }}
                    >
                      (703) 698-7117
                    </a>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours + Location ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Hours of Operation</p>
                  <ul className="flex flex-col gap-2">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm" style={{ color: "rgba(42,41,40,0.68)" }}>
                        <span className="text-fg font-medium">{h.day}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </RevealSection>
                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Merrifield Location in Fairfax, VA</p>
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight mb-s3">Roselle Center For Healing</h3>
                  <address className="not-italic text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    8500 Executive Park Ave STE 300<br />
                    Fairfax, VA 22031
                  </address>
                  <div className="mt-s3 flex flex-col gap-1">
                    <a href="tel:+17036987117" className="text-sm transition-colors duration-200 hover:text-fg" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Phone: (703) 698-7117
                    </a>
                    <p className="text-sm" style={{ color: "rgba(42,41,40,0.68)" }}>Fax: (703) 698-5729</p>
                    <a href="mailto:rosellecare@gmail.com" className="text-sm transition-colors duration-200 hover:text-fg" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Email: rosellecare@gmail.com
                    </a>
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
