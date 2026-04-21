"use client";
import { useState, type FormEvent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const inputClass = "w-full rounded-lg bg-[rgba(245,244,239,0.06)] border border-[rgba(245,244,239,0.1)] px-4 py-3 text-sm text-bg placeholder:text-[rgba(245,244,239,0.3)] focus:outline-none input-gold-focus focus:border-accent transition-colors duration-200";
const labelClass = "block text-xs tracking-widest uppercase mb-2 font-sans";
const labelStyle = { color: "rgba(198,177,128,0.85)" };
const radioLabelClass = "flex items-center gap-2 text-sm cursor-pointer";
const radioLabelStyle = { color: "rgba(245,244,239,0.55)" };

const RACE_OPTIONS = [
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Native Hawaiian or Other Pacific Islander",
  "White",
  "Other Race",
  "Declined to Specify",
];

const LANGUAGE_OPTIONS = [
  "English", "Spanish", "French", "German", "Chinese", "Japanese",
  "Korean", "Vietnamese", "Tagalog", "Arabic", "Russian", "Portuguese",
  "Italian", "Hindi", "Other",
];

const VERIFICATION_QUESTIONS = [
  "What is your mother's maiden name?",
  "What city were you born in?",
  "What is the name of your first pet?",
  "What is your favorite movie?",
  "What street did you grow up on?",
  "What was the make of your first car?",
  "What is your favorite book?",
  "What school did you attend for sixth grade?",
];

const CONTACT_METHODS = [
  "Primary Phone",
  "Secondary Phone",
  "Mobile Phone",
  "Home Email",
  "Work Email",
];

export default function EHRPatientHealthHistoryFormPage() {
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
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>EHR Patient Health History Form</span>
                </nav>
              </RevealSection>
              <SplitReveal text="EHR Patient Health History Form" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
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

                    {/* Demographics */}
                    <RevealSection>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Demographics</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Today&apos;s Date</label><input type="date" className={inputClass} /></div>
                          <div />
                          <div><label className={labelClass} style={labelStyle}>First Name *</label><input type="text" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Nick Name</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Last Name *</label><input type="text" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Middle Name</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Suffix</label><input type="text" className={inputClass} placeholder="Jr., Sr., III, etc." /></div>
                          <div />
                          <div><label className={labelClass} style={labelStyle}>Home Email</label><input type="email" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Work Email</label><input type="email" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Email Preference</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="emailPref" value="Home" className="accent-accent" /> Home</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="emailPref" value="Work" className="accent-accent" /> Work</label>
                            </div>
                          </div>
                          <div />
                          <div>
                            <label className={labelClass} style={labelStyle}>Preferred Contact Method</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {CONTACT_METHODS.map((m) => (<option key={m} value={m}>{m}</option>))}
                            </select>
                          </div>
                          <div />
                          <div><label className={labelClass} style={labelStyle}>Date of Birth *</label><input type="date" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Age</label><input type="number" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Gender</label>
                            <div className="flex gap-s4">
                              {["Male", "Female", "Unspecified"].map((g) => (
                                <label key={g} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="gender" value={g} className="accent-accent" /> {g}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Marital Status</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {["Single", "Married", "Other"].map((s) => (<option key={s} value={s}>{s}</option>))}
                            </select>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Social Security Number</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Employment Status</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {["Employed", "Full-Time Student", "Part-Time Student", "Other", "Retired", "Self Employed"].map((s) => (<option key={s} value={s}>{s}</option>))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Race / Ethnicity / Language */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Race, Ethnicity &amp; Language</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div className="col-span-2 max-md:col-span-1">
                            <label className={labelClass} style={labelStyle}>Race</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {RACE_OPTIONS.map((r) => (<option key={r} value={r}>{r}</option>))}
                            </select>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Multi-Racial</label>
                            <div className="flex gap-s4">
                              {["Yes", "No", "Unknown"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="multiRacial" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Ethnicity</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              <option value="Hispanic or Latino">Hispanic or Latino</option>
                              <option value="Not Hispanic or Latino">Not Hispanic or Latino</option>
                              <option value="Declined to Specify">Declined to Specify</option>
                            </select>
                          </div>
                          <div className="col-span-2 max-md:col-span-1">
                            <label className={labelClass} style={labelStyle}>Preferred Language</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {LANGUAGE_OPTIONS.map((l) => (<option key={l} value={l}>{l}</option>))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Verification */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Verification Question</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div className="col-span-2 max-md:col-span-1">
                            <label className={labelClass} style={labelStyle}>Select a Verification Question</label>
                            <select className={inputClass}>
                              <option value="">Select...</option>
                              {VERIFICATION_QUESTIONS.map((q) => (<option key={q} value={q}>{q}</option>))}
                            </select>
                          </div>
                          <div className="col-span-2 max-md:col-span-1">
                            <label className={labelClass} style={labelStyle}>Verification Answer</label>
                            <input type="text" className={inputClass} />
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Smoking Status */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Smoking Status</h3>
                        <div className="flex flex-col gap-s4">
                          <div>
                            <label className={labelClass} style={labelStyle}>Do you currently smoke or have you ever smoked?</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Yes", "Former Smoker", "Never"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="smoking" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>If yes, how often?</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Interest in quitting (0 = Not Interested, 10 = Very Interested)</label>
                            <input type="range" min="0" max="10" className="w-full accent-accent" />
                            <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(245,244,239,0.35)" }}><span>0</span><span>5</span><span>10</span></div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Medical Info */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Medical Information</h3>
                        <div className="flex flex-col gap-s4">
                          <div><label className={labelClass} style={labelStyle}>List current medications</label><textarea rows={3} className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>List any allergies</label><textarea rows={3} className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>List current health problems</label><textarea rows={3} className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Do you have hypertension?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="hypertension" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="hypertension" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Do you have diabetes?</label>
                            <div className="flex gap-s4 flex-wrap">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="diabetes" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="diabetes" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>If yes, type?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="diabetesType" value="Type I" className="accent-accent" /> Type I</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="diabetesType" value="Type II" className="accent-accent" /> Type II</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Last hemoglobin test date</label><input type="date" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Vitals */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Vitals</h3>
                        <div className="grid grid-cols-3 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Height</label><input type="text" className={inputClass} placeholder="e.g. 5'10&quot;" /></div>
                          <div><label className={labelClass} style={labelStyle}>Weight</label><input type="text" className={inputClass} placeholder="e.g. 170 lbs" /></div>
                          <div><label className={labelClass} style={labelStyle}>Blood Pressure</label><input type="text" className={inputClass} placeholder="e.g. 120/80" /></div>
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
