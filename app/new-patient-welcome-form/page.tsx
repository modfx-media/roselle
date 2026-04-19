"use client";
import { useState, type FormEvent } from "react";
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

const inputClass = "w-full rounded-lg bg-[rgba(245,244,239,0.06)] border border-[rgba(245,244,239,0.1)] px-4 py-3 text-sm text-bg placeholder:text-[rgba(245,244,239,0.3)] focus:outline-none focus:border-accent transition-colors duration-200";
const labelClass = "block text-xs tracking-widest uppercase mb-2 font-sans";
const labelStyle = { color: "rgba(198,177,128,0.85)" };
const radioLabelClass = "flex items-center gap-2 text-sm cursor-pointer";
const radioLabelStyle = { color: "rgba(245,244,239,0.55)" };

export default function NewPatientWelcomeFormPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>New Patient Welcome Form</span>
                </nav>
              </RevealSection>
              <SplitReveal text="New Patient Welcome Form" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Form ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              {submitted ? (
                <RevealSection>
                  <div className="text-center py-s10">
                    <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s3">Thank You!</h2>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Your form has been submitted. We will contact you shortly.</p>
                  </div>
                </RevealSection>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="max-w-[820px] mx-auto flex flex-col gap-s8">

                    {/* Today's Date */}
                    <RevealSection>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <label className={labelClass} style={labelStyle}>Today&apos;s Date</label>
                        <input type="date" className={inputClass} />
                      </div>
                    </RevealSection>

                    {/* Personal Information */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Personal Information</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Name *</label><input type="text" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Social Security</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Mobile Number</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>City</label><input type="text" className={inputClass} /></div>
                          <div className="grid grid-cols-2 gap-s4">
                            <div><label className={labelClass} style={labelStyle}>State</label><input type="text" className={inputClass} /></div>
                            <div><label className={labelClass} style={labelStyle}>Zip Code</label><input type="text" className={inputClass} /></div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Age</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date of Birth</label><input type="date" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Sex</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="sex" value="Male" className="accent-accent" /> Male</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="sex" value="Female" className="accent-accent" /> Female</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Marital Status</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Children?</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Occupation</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Employer</label><input type="text" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Work Number</label><input type="tel" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Name of Spouse</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Occupation</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Work Number</label><input type="tel" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Emergency Contact</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone Number</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>How did you hear about us?</label><input type="text" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Health History */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Health History</h3>
                        <div className="flex flex-col gap-s4">
                          <div><label className={labelClass} style={labelStyle}>Purpose of this appointment</label><textarea rows={3} className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Is this condition getting progressively worse?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="worse" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="worse" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Comes and goes</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>How long has it been since you really felt good?</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>What do you believe is wrong with you?</label><textarea rows={3} className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>What positions or activities affect your condition?</label><textarea rows={3} className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Other doctors seen for this condition</label><textarea rows={3} className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Do you take any vitamins?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="vitamins" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="vitamins" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Do you think you might need vitamins or minerals?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="needVitamins" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="needVitamins" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Are you wearing:</label>
                            <div className="flex flex-wrap gap-s4">
                              {["Heel Lifts", "Sole Lifts", "Inner Soles", "Arch Supports"].map((item) => (
                                <label key={item} className={radioLabelClass} style={radioLabelStyle}>
                                  <input type="checkbox" value={item} className="accent-accent" /> {item}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Authorization & Payment Policy */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Authorization &amp; Payment Policy</h3>
                        <div className="flex flex-col gap-s4">
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            We invite you to discuss with us any questions regarding our services. The best services are based on a friendly, mutual understanding between provider and patient.
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            Our policy requires payment in full for all services rendered at the time of visit.
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            I authorize the staff to perform any necessary services needed during diagnosis and treatment. I also authorize the provider to release any information required to process insurance claims. I understand that the fee for service will be an arrangement between an insurance carrier and myself. Furthermore, I understand that this office will prepare some reports and forms to assist me in making collections from the insurance company and that any amount authorized to be paid directly to this office will be credited to my account on receipt. However, I clearly understand and agree that all services rendered me are charged directly to me and that I am personally responsible for payment.
                          </p>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            I also understand that balances that are 90 days or older will accumulate 9.5% interest. I understand that if I suspend or terminate my care and treatment, any fees for professional services rendered me will be immediately due and payable. I further understand that if I fail to pay this bill and it is turned over to an attorney or (collection agency) for collections that I will be responsible for all legal fees, court fees and collection agency fees.
                          </p>
                          <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1 mt-s4">
                            <div><label className={labelClass} style={labelStyle}>Patient&apos;s Signature</label><input type="text" className={inputClass} /></div>
                            <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                            <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Parent or Guardian Authorizing Care</label><input type="text" className={inputClass} /></div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Submit */}
                    <RevealSection delay={0.04}>
                      <div className="flex justify-center">
                        <button type="submit" className="btn-primary px-12 py-4 text-sm tracking-widest uppercase font-sans font-medium rounded-lg bg-accent text-fg transition-colors duration-200 hover:bg-bg hover:text-fg">
                          Submit
                        </button>
                      </div>
                    </RevealSection>
                  </div>
                </form>
              )}
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
