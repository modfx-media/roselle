"use client";
import { useState } from "react";
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

export default function HealthCareOrientationPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                  <a href="/education-lectures.html" className="transition-colors duration-200 hover:text-bg">Health Education</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Health Care Orientation</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Health Care Orientation" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Patient Education</p>
                <SplitReveal text="Understanding Your Health Care" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-s6 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Your health is in your hands. This Health Care Orientation is an important part of your wellness plan with the Roselle Center for Healing because it is designed to educate you about our approach to achieving optimal wellness, as well as your responsibilities. What we do in our practice only works if you do your part at home and throughout your life. This video helps you understand your body, and what we&apos;ll do together to achieve your best state of health.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8 p-s6 rounded-xl bg-card-bg max-w-[720px]">
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight leading-snug mb-s3">&ldquo;Understanding Your Health Care&rdquo; — Important Notice</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    &ldquo;Understanding Your Health Care&rdquo; is part of your treatment plan at the Roselle Center for Healing. As part of your patient agreement, you agree to watch this video health care orientation in full and complete the form below which will notify us that you have viewed this video. Completing &ldquo;Understanding Your Health Care&rdquo; is a requirement to health care and treatment at the Roselle Center for Healing.
                  </p>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Post Viewing Form ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Confirmation</p>
                <SplitReveal text="Health Care Orientation Post Viewing Confirmation" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <h3 className="mt-s4 text-fluid-lg leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Please complete the form below to acknowledge and confirm that you have watched
                </h3>
              </RevealSection>

              {submitted ? (
                <RevealSection delay={0.1}>
                  <div className="mt-s8 p-s8 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] max-w-[640px]">
                    <h3 className="text-fluid-2xl text-bg font-serif tracking-tight mb-s3">Thank You!</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Your confirmation has been submitted. Our team has been notified.</p>
                  </div>
                </RevealSection>
              ) : (
                <RevealSection delay={0.15}>
                  <form onSubmit={handleSubmit} className="mt-s8 max-w-[640px] flex flex-col gap-s6">
                    <div className="flex flex-col gap-s2">
                      <label htmlFor="orientation-question" className="text-sm font-medium text-bg">
                        Do you have any questions after watching this video?<span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="orientation-question"
                        required
                        rows={5}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Enter any questions you may have…"
                        className="w-full rounded-lg border border-[rgba(245,244,239,0.12)] bg-[rgba(245,244,239,0.04)] px-s4 py-s3 text-bg text-fluid-base placeholder:text-[rgba(245,244,239,0.25)] focus:outline-none focus:border-accent transition-colors duration-200 resize-y"
                      />
                    </div>
                    <MagneticButton className="btn-primary self-start" type="submit">Submit Confirmation</MagneticButton>
                  </form>
                </RevealSection>
              )}
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Questions About Your Health Care Orientation?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Roselle Center For Healing in Fairfax, VA for assistance with your health care orientation.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours + Location ── */}
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
