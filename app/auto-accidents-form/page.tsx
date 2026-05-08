"use client";
import { useState, type FormEvent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";


const inputClass = "w-full rounded-lg bg-[rgba(245,244,239,0.06)] border border-[rgba(245,244,239,0.1)] px-4 py-3 text-sm text-bg placeholder:text-[rgba(245,244,239,0.3)] focus:outline-none input-gold-focus focus:border-accent transition-colors duration-200";
const labelClass = "block text-xs tracking-widest uppercase mb-2 font-sans";
const labelStyle = { color: "rgba(198,177,128,0.85)" };
const radioLabelClass = "flex items-center gap-2 text-sm cursor-pointer";
const radioLabelStyle = { color: "rgba(245,244,239,0.55)" };

const SYMPTOMS = [
  "Dizziness", "Memory loss", "Headache(s)", "Blurred vision",
  "Buzzing in ear", "Ears ringing", "Difficulty Sleeping", "Irritability",
  "Fatigue", "Tension", "Neck pain", "Neck stiff",
  "Jaw problems", "Arms-shoulder pain", "Numb hands-fingers", "Chest pain",
  "Shortness of breath", "Stomach upset", "Nausea", "Back pain",
  "Lower back pain", "Back stiffness", "Leg pain", "Numb feet-toes", "Other",
];

const WORK_ACTIVITIES = [
  "Standing", "Sitting", "Walking", "Lifting",
  "Driving", "Twisting", "Crawling", "Bending",
  "Operating equipment", "Work with arms above head", "Typing", "Stooping", "Other",
];

export default function AutoAccidentsFormPage() {
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

          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="Auto accidents form."
            subtitle="Help us understand your accident and current symptoms so we can provide the most effective care."
            crumbs={[{ label: "Home", href: "/" }, { label: "Auto Accidents Form" }]}
            image="/services/auto-accident-form.jpg"
            imageAlt="Auto accidents form."
          />

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

                    {/* Section 1: Auto Accident Information */}
                    <RevealSection>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Auto Accident Information</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Patient Name *</label><input type="text" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date of Accident</label><input type="date" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Time of Accident</label><input type="time" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Were you the:</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Driver", "Front Passenger", "Rear Passenger"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="role" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Vehicle Make &amp; Model</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Traffic Violation</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Number of People in Vehicle</label><input type="number" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Did Police Come?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="police" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="police" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Report Filed?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="report" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="report" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Were there any witnesses?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="witnesses" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="witnesses" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Were you wearing a seat belt?</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Were there airbags?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="airbags" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="airbags" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Did they inflate?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="inflated" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="inflated" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Head Rest Position</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Above", "Below", "At base of skull"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="headrest" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Impact by</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Another Vehicle", "Other"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="impact" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Explain</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Did your body strike anything?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="bodyStrike" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="bodyStrike" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Describe</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Other Vehicle Make &amp; Model</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Location / Street</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Direction of Travel</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["North", "South", "East", "West"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="direction" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Speed</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Impact Direction</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Front", "Rear", "Right Side", "Left Side", "Other"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="impactDir" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Facing Direction</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["North", "South", "East", "West"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="facing" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Section 2: After Injury */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">After Injury</h3>
                        <div className="flex flex-col gap-s4">
                          <div>
                            <label className={labelClass} style={labelStyle}>Were you unconscious?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="unconscious" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="unconscious" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>If yes, for how long?</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>How did you feel after the accident?</label><textarea rows={3} className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Did you go to the hospital or see a doctor?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="hospital" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="hospital" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>When?</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Just after", "Next day", "2 days plus"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="when" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>How did you get there?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="transport" value="Ambulance" className="accent-accent" /> Ambulance</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="transport" value="Private" className="accent-accent" /> Private</label>
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Hospital Name</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Doctor Type</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["DC", "MD", "DO", "DDS"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="doctorType" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Treatment Received</label><textarea rows={3} className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Were X-Rays taken?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="xrays" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="xrays" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Were you given medication?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="medication" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="medication" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Are you able to work?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="ableToWork" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="ableToWork" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Is your work restricted?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="workRestricted" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="workRestricted" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Symptoms Checklist */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Symptoms (Check all that apply)</h3>
                        <div className="grid grid-cols-3 gap-s3 max-md:grid-cols-2 max-sm:grid-cols-1">
                          {SYMPTOMS.map((symptom) => (
                            <label key={symptom} className={radioLabelClass} style={radioLabelStyle}>
                              <input type="checkbox" value={symptom} className="accent-accent" /> {symptom}
                            </label>
                          ))}
                        </div>
                      </div>
                    </RevealSection>

                    {/* Work Activities */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Work Activities Affected (Check all that apply)</h3>
                        <div className="grid grid-cols-3 gap-s3 max-md:grid-cols-2 max-sm:grid-cols-1">
                          {WORK_ACTIVITIES.map((activity) => (
                            <label key={activity} className={radioLabelClass} style={radioLabelStyle}>
                              <input type="checkbox" value={activity} className="accent-accent" /> {activity}
                            </label>
                          ))}
                        </div>
                        <div className="flex flex-col gap-s4 mt-s4">
                          <div><label className={labelClass} style={labelStyle}>Light Duty Positions</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Prior Capability</label>
                            <div className="flex gap-s4">
                              {["Yes", "No", "N/A"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="priorCapability" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Coworker Help</label>
                            <div className="flex gap-s4">
                              {["Yes", "No", "N/A"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="coworkerHelp" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Light Duty Available</label>
                            <div className="flex gap-s4">
                              {["Yes", "No", "N/A"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="lightDutyAvail" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Authorization */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Authorization &amp; Payment Policy</h3>
                        <p className="text-sm leading-relaxed mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                          I authorize the staff to perform any necessary services needed during diagnosis and treatment. I also authorize the provider to release any information required to process insurance claims. I understand that the fee for service will be an arrangement between an insurance carrier and myself. Furthermore, I understand that this office will prepare some reports and forms to assist me in making collections from the insurance company and that any amount authorized to be paid directly to this office will be credited to my account on receipt. However, I clearly understand and agree that all services rendered me are charged directly to me and that I am personally responsible for payment.
                        </p>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Signature</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Relationship</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Adult Patient", "Parent or Guardian", "Spouse"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="relationship" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
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


          <Contact />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
