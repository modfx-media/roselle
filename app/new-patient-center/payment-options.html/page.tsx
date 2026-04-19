"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import SpotlightCard from "../../components/motion/SpotlightCard";

const HOURS = [
  { day: "Monday", time: "7:00 am - 5:00 pm" },
  { day: "Tuesday", time: "10:00 am - 7:00 pm" },
  { day: "Wednesday", time: "7:00 am - 5:00 pm" },
  { day: "Thursday", time: "2:00 pm - 7:00 pm" },
  { day: "Friday", time: "7:00 am - 5:00 pm" },
  { day: "Saturday", time: "8:00 am - 1:00 pm" },
  { day: "Sunday", time: "Closed" },
];

export default function PaymentOptionsPage() {
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
                  <a href="/new-patient-center.html" className="transition-colors duration-200 hover:text-bg">New Patient Experience</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Payment Options</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Payment Options"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Intro ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Affordable Care
                </p>
                <SplitReveal
                  text="Affordable & Flexible Payment Options"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  At The Roselle Center For Healing, we believe in the value of natural care for you and your family. We have
                  maintained a pricing structure that allows care for all. Roselle Center for Healing is a
                  cash practice and therefore is not a participating provider in insurance. We
                  will, however, submit your claims with your insurance provider for consideration
                  of out-of-network reimbursement once your deductible has been met. This
                  provides you the ease of care without the cumbersome task of keeping up with insurance
                  claims paperwork. We treat auto and personal injury cases, however services
                  must be paid at the time they are rendered unless a lien has been secured with your
                  attorney. Additionally, we have flexible payment programs designed for your
                  individual needs. To learn more about our payment options for chiropractic,
                  acupuncture, nutrition and wellness care, please contact Derreth Painter at{" "}
                  <a href="tel:+17036987117" className="text-fg font-medium hover:text-accent transition-colors duration-200">
                    (703) 698-7117
                  </a>.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Insurance & No Insurance Cards ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">

                <RevealSection>
                  <SpotlightCard className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]
                                            rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            hover:-translate-y-1">
                    <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(198,177,128,0.85)" }}>
                      01
                    </span>
                    <h2 className="text-fluid-2xl text-bg tracking-tight leading-[1.15] mt-s1">
                      Insurance
                    </h2>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Our office is a cash practice, and as such are not participating providers for
                      any insurance plans. To date, chiropractic care is partially covered by
                      Medicare. As a courtesy, all services will be submitted to your primary insurance
                      company for out-of-network benefits.
                    </p>
                  </SpotlightCard>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <SpotlightCard className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]
                                            rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                                            hover:-translate-y-1">
                    <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(198,177,128,0.85)" }}>
                      02
                    </span>
                    <h2 className="text-fluid-2xl text-bg tracking-tight leading-[1.15] mt-s1">
                      No Insurance
                    </h2>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(245,244,239,0.55)" }}>
                      For patients who have limited or no insurance, flexible payment options are
                      available.
                    </p>
                  </SpotlightCard>
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── Health on a Budget ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Your Investment
                </p>
                <SplitReveal
                  text="Health on a Budget"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  At Roselle Center For Healing, we appreciate you have many choices in your
                  health care. We respect your investment in time and money to regain and maintain
                  optimal health. We continue to focus on giving every patient the care they
                  deserve and designing a means by which comprehensive care can be affordable. Paying
                  attention to your health now will be far less time consuming and less expensive
                  than trying to recover from ailments/injuries in the future. As the old saying
                  goes, &ldquo;if you don&rsquo;t have your health, you don&rsquo;t have anything.&rdquo; Unfortunately,
                  too many people don&rsquo;t discover how true that statement is until it is too late.
                  We encourage you to take care of your health now.
                </p>
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
                      Questions About Payment?
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Contact Derreth Painter to learn more about our flexible payment programs
                      designed for your individual needs.
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

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
