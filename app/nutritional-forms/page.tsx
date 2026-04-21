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

const SYMPTOM_CATEGORIES = [
  {
    name: "Head",
    symptoms: ["Headaches", "Faintness", "Dizziness", "Insomnia"],
  },
  {
    name: "Eyes",
    symptoms: ["Watery or itchy eyes", "Swollen, reddened or sticky eyelids", "Bags or dark circles under eyes", "Blurred or tunnel vision"],
  },
  {
    name: "Ears",
    symptoms: ["Itchy ears", "Earaches, ear infections", "Drainage from ear", "Ringing in ears, hearing loss"],
  },
  {
    name: "Nose",
    symptoms: ["Stuffy nose", "Sinus problems", "Hay fever", "Sneezing attacks", "Excessive mucus formation"],
  },
  {
    name: "Mouth / Throat",
    symptoms: ["Chronic coughing", "Gagging, frequent need to clear throat", "Sore throat, hoarseness, loss of voice", "Swollen or discolored tongue, gums, lips", "Canker sores"],
  },
  {
    name: "Skin",
    symptoms: ["Acne", "Hives, rashes, dry skin", "Hair loss", "Flushing, hot flashes", "Excessive sweating"],
  },
  {
    name: "Heart",
    symptoms: ["Irregular or skipped heartbeat", "Rapid or pounding heartbeat", "Chest pain"],
  },
  {
    name: "Lungs",
    symptoms: ["Chest congestion", "Shortness of breath", "Difficulty breathing"],
  },
  {
    name: "Digestive Tract",
    symptoms: ["Nausea, vomiting", "Diarrhea", "Constipation", "Bloated feeling", "Belching, passing gas", "Heartburn", "Intestinal/stomach pain"],
  },
  {
    name: "Joints / Muscles",
    symptoms: ["Pain or aches in joints", "Arthritis", "Stiffness or limitation of movement", "Pain or aches in muscles", "Feeling of weakness or tiredness"],
  },
  {
    name: "Weight",
    symptoms: ["Binge eating/drinking", "Craving certain foods", "Excessive weight", "Compulsive eating", "Water retention", "Underweight"],
  },
  {
    name: "Energy / Activity",
    symptoms: ["Fatigue, sluggishness", "Apathy, lethargy", "Hyperactivity", "Restlessness"],
  },
  {
    name: "Mind",
    symptoms: ["Poor memory", "Confusion, poor comprehension", "Poor concentration", "Poor physical coordination", "Difficulty in making decisions", "Stuttering or stammering", "Slurred speech", "Learning disabilities"],
  },
  {
    name: "Emotions",
    symptoms: ["Mood swings", "Anxiety, fear, nervousness", "Anger, irritability, aggressiveness", "Depression"],
  },
  {
    name: "Other",
    symptoms: ["Frequent illness", "Frequent or urgent urination", "Genital itch or discharge"],
  },
];

const SCALE_OPTIONS = [
  { value: "0", label: "0 – Never" },
  { value: "1", label: "1 – Occasionally" },
  { value: "2", label: "2 – Sometimes" },
  { value: "3", label: "3 – Often/Moderate" },
  { value: "4", label: "4 – Frequently/Severe" },
];

export default function NutritionalFormsPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Nutritional Forms</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Nutritional Forms" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
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

                    {/* Patient Information */}
                    <RevealSection>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Patient Information</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Patient Name *</label><input type="text" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Social Security</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                          <div />
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>City</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Zip Code</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Age</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date of Birth</label><input type="date" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Sex</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="sex" value="Male" className="accent-accent" /> Male</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="sex" value="Female" className="accent-accent" /> Female</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Marital Status</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["M", "S", "W", "D"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="marital" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Email</label><input type="email" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Cell Phone</label><input type="tel" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Shoe Size</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Employer</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Employer Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Office Number</label><input type="tel" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Insurance Company</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Insurance Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Spouse Name</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Spouse Occupation</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Nearest Relative</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>How did you hear about us?</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Are you pregnant?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="pregnant" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="pregnant" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Date of Last Physical</label><input type="date" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Operations</label><textarea rows={2} className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Purpose / Major Complaint</label><textarea rows={3} className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Symptom Survey Instructions */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Symptom Survey</h3>
                        <p className="text-sm leading-relaxed mb-s3" style={{ color: "rgba(245,244,239,0.55)" }}>
                          Rate each of the following symptoms based upon your typical health profile:
                        </p>
                        <div className="flex flex-wrap gap-s3 mb-s2">
                          {SCALE_OPTIONS.map((opt) => (
                            <span key={opt.value} className="text-xs px-3 py-1 rounded-full border border-[rgba(245,244,239,0.08)]" style={{ color: "rgba(245,244,239,0.55)" }}>{opt.label}</span>
                          ))}
                        </div>
                      </div>
                    </RevealSection>

                    {/* Symptom Categories */}
                    {SYMPTOM_CATEGORIES.map((category, ci) => (
                      <RevealSection key={category.name} delay={0.02}>
                        <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                          <h4 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug mb-s4">{category.name}</h4>
                          <div className="flex flex-col gap-s3">
                            {category.symptoms.map((symptom) => (
                              <div key={symptom} className="flex items-center justify-between gap-s4 max-md:flex-col max-md:items-start max-md:gap-s2">
                                <span className="text-sm shrink-0" style={{ color: "rgba(245,244,239,0.55)" }}>{symptom}</span>
                                <div className="flex gap-s3">
                                  {SCALE_OPTIONS.map((opt) => (
                                    <label key={opt.value} className="flex items-center gap-1 text-xs cursor-pointer" style={{ color: "rgba(245,244,239,0.4)" }}>
                                      <input type="radio" name={`${ci}-${symptom}`} value={opt.value} className="accent-accent" /> {opt.value}
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </RevealSection>
                    ))}

                    {/* Authorization */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Authorization &amp; Payment Policy</h3>
                        <p className="text-sm leading-relaxed mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                          I authorize the staff to perform any necessary services needed during diagnosis and treatment. I also authorize the provider to release any information required to process insurance claims. I understand that the fee for service will be an arrangement between an insurance carrier and myself. Furthermore, I understand that this office will prepare some reports and forms to assist me in making collections from the insurance company and that any amount authorized to be paid directly to this office will be credited to my account on receipt. However, I clearly understand and agree that all services rendered me are charged directly to me and that I am personally responsible for payment.
                        </p>
                        <div className="grid grid-cols-3 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Signature</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Witness</label><input type="text" className={inputClass} /></div>
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
