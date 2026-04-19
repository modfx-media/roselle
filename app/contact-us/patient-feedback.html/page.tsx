"use client";
import { useState, FormEvent } from "react";
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

export default function PatientFeedbackPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent("Mailing List Request");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    window.location.href = `mailto:rosellecare@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

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
                  <a href="/contact" className="transition-colors duration-200 hover:text-bg">Contact</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Patient Feedback</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Patient Feedback" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Section 1: Questionnaire (light) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Feedback</p>
                <SplitReveal text="We value our patients' experience at Roselle Center For Healing." as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  If you are currently a patient, please feel free to complete the following Client Experience Questionnaire. The Questionnaire is in Adobe Acrobat format, and requires the free <a href="https://www.adobe.com/products/acrobat/readstep2.html" target="_blank" rel="noopener noreferrer" className="text-fg font-medium hover:text-accent transition-colors duration-200 underline">Acrobat Reader</a> to view.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <MagneticButton className="btn-primary" onClick={() => window.open("https://www.rosellecare.com/storage/app/media/Client_Experience_Questionnaire.pdf", "_blank")}>Download &amp; Print Questionnaire</MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Section 2: Contact Info (dark) ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Contact</p>
                <SplitReveal text="Roselle Center for Healing" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="mt-s6 flex flex-col gap-1">
                  <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave.</p>
                  <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Suite 300</p>
                  <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Fairfax, VA 22031</p>
                  <p className="text-fluid-base mt-s3" style={{ color: "rgba(245,244,239,0.55)" }}>Office: <a href="tel:+17036987117" className="text-bg transition-colors duration-200 hover:text-accent font-medium">(703) 698-7117</a></p>
                  <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Email: <a href="mailto:rosellecare@gmail.com" className="text-bg transition-colors duration-200 hover:text-accent font-medium">rosellecare@gmail.com</a></p>
                  <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Website: <a href="http://RoselleCare.com" target="_blank" rel="noopener noreferrer" className="text-bg transition-colors duration-200 hover:text-accent font-medium">http://RoselleCare.com</a></p>
                </div>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s8 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Please complete this form to be notified of center updates, special events and health education lectures. Contact our office by phone or email to be added to our mailing list.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                {submitted ? (
                  <div className="mt-s8 p-s8 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                    <p className="text-fluid-base text-bg font-medium">Thank you! Your email client should open shortly. If it doesn&apos;t, please email us directly at rosellecare@gmail.com.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-s8 grid grid-cols-2 gap-s4 max-w-[720px] max-md:grid-cols-1">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-xs tracking-widest uppercase font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(245,244,239,0.25)]"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-xs tracking-widest uppercase font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(245,244,239,0.25)]"
                        placeholder="Last Name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs tracking-widest uppercase font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(245,244,239,0.25)]"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs tracking-widest uppercase font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg px-s4 py-3 text-fluid-base text-fg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none transition-colors duration-200 focus:border-accent placeholder:text-[rgba(245,244,239,0.25)]"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div className="col-span-2 max-md:col-span-1 mt-s3">
                      <MagneticButton className="btn-primary" type="submit">Submit</MagneticButton>
                    </div>
                  </form>
                )}
              </RevealSection>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Share Your Feedback</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Your feedback helps us improve our patient experience at Roselle Center For Healing. Call us today to share your thoughts or learn more about our services.
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
