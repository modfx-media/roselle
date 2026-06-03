"use client";
import { useState, type FormEvent } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import Contact from "@/app/components/Contact";
import PageHero from "@/app/components/templates/PageHero";
import { serializeForm, submitContactForm } from "@/app/lib/sendForm";


const inputClass = "w-full rounded-lg bg-[rgba(245,244,239,0.06)] border border-[rgba(245,244,239,0.1)] px-4 py-3 text-sm text-bg placeholder:text-[rgba(245,244,239,0.3)] focus:outline-none input-gold-focus focus:border-accent transition-colors duration-200";
const labelClass = "block text-xs tracking-widest uppercase mb-2 font-sans";
const labelStyle = { color: "rgba(198,177,128,0.85)" };
const radioLabelClass = "flex items-center gap-2 text-sm cursor-pointer";
const radioLabelStyle = { color: "rgba(245,244,239,0.55)" };

const POST_ACCIDENT_SYMPTOMS = [
  "Headaches", "Stomach Upset", "Neck Pain", "Neck Stiff",
  "Fainting", "Face Flushed", "Nervousness", "Irritability",
  "Cold Sweats", "Dizziness", "Light Bothers Eyes", "Heavy Head",
  "Pins & Needles", "Sleeping Problems", "Back Pain", "Lower Back Pain",
  "Numbness in Toes", "Numbness in Fingers", "Fatigue", "Shortness of Breath",
  "Chest Pain", "Arm Pain", "Shoulder Pain", "Leg Pain",
  "Jaw Problems", "Ears Ringing", "Memory Loss", "Blurred Vision",
];

export default function PersonalInjuryFormsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fields = serializeForm(e.currentTarget);
    setSending(true);
    setError(null);
    const result = await submitContactForm("Personal Injury Forms", fields);
    setSending(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error || "Could not submit the form. Please try again.");
  }

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="Personal injury forms."
            subtitle="Help us understand your injury, post-accident symptoms, and our personal injury claims policy so we can support your recovery."
            crumbs={[{ label: "Home", href: "/" }, { label: "Personal Injury Forms" }]}
            image="/services/personal-injury.jpg"
            imageAlt="Personal injury forms."
          />

          {/* ── Policy Letter ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">Policy Regarding Personal Injury Claims</h2>
                  <div className="flex flex-col gap-s3 text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    <p>Dear Patient,</p>
                    <p>
                      Due to the nature of personal injury claims and the time it may take for claims to be settled, the following policy has been established for all personal injury cases handled through the Roselle Center for Healing.
                    </p>
                    <p>
                      <strong className="text-fg">Med Pay claims:</strong> Patients with Med Pay on their personal auto policy may assign their Med Pay benefits to our office. When your Med Pay is exhausted you are expected to make payment arrangements for the balance owed.
                    </p>
                    <p>
                      <strong className="text-fg">No Med Pay or Third-Party claims:</strong> When a patient does not carry Med Pay insurance, or when Med Pay benefits have been exhausted, payment is expected at the time of service. You may submit claims to your health insurance carrier and will be reimbursed according to your policy coverage.
                    </p>
                    <p>
                      <strong className="text-fg">Liens:</strong> If your attorney agrees, a Lien may be established and signed by the patient, the attorney and the doctor. Payments will be deferred until the case is settled. Interest of 1.5% per month (18% per year) will be charged on all balances unpaid for more than 90 days. These charges will be added to the total bill. In the event that the case is not settled, the patient is responsible for the balance owed plus interest.
                    </p>
                    <p className="font-medium text-fg">Sincerely,<br />Dr. R. Thomas Roselle, DC</p>
                  </div>
                </RevealSection>
              </div>
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

                    {/* Patient's Report of Accident */}
                    <RevealSection>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Patient&apos;s Report of Accident</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Name *</label><input type="text" required className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Email</label><input type="email" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Today&apos;s Date</label><input type="date" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Location of Accident</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>City</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date of Accident</label><input type="date" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Police Report #</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Were you:</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Driver", "Passenger", "Pedestrian"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="role" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Seat Belt?</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Struck from which direction?</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["Front", "Rear", "Right", "Left"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="struckFrom" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Direction of travel</label>
                            <div className="flex gap-s4 flex-wrap">
                              {["North", "South", "East", "West"].map((v) => (
                                <label key={v} className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="travelDir" value={v} className="accent-accent" /> {v}</label>
                              ))}
                            </div>
                          </div>
                          <div><label className={labelClass} style={labelStyle}>Your Speed (approx.)</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Other Vehicle Speed (approx.)</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Your Car Type</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Other Car Type</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Damage to Your Car (est.)</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Damage to Other Car (est.)</label><input type="text" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>How did the accident occur?</label><textarea rows={3} className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>How did you feel right after the accident?</label><textarea rows={3} className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>First Aid received?</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Hospitalized?</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Off work since accident?</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Traffic citations issued?</label><input type="text" className={inputClass} /></div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Multiple cars involved?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="multipleCars" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="multipleCars" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                          <div>
                            <label className={labelClass} style={labelStyle}>Did accident occur during work?</label>
                            <div className="flex gap-s4">
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="duringWork" value="Yes" className="accent-accent" /> Yes</label>
                              <label className={radioLabelClass} style={radioLabelStyle}><input type="radio" name="duringWork" value="No" className="accent-accent" /> No</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Post-Accident Symptoms */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Post-Accident Symptoms (Check all that apply)</h3>
                        <div className="grid grid-cols-3 gap-s3 max-md:grid-cols-2 max-sm:grid-cols-1">
                          {POST_ACCIDENT_SYMPTOMS.map((symptom) => (
                            <label key={symptom} className={radioLabelClass} style={radioLabelStyle}>
                              <input type="checkbox" value={symptom} className="accent-accent" /> {symptom}
                            </label>
                          ))}
                        </div>
                        <div className="mt-s4"><label className={labelClass} style={labelStyle}>Other Symptoms</label><textarea rows={2} className={inputClass} /></div>
                      </div>
                    </RevealSection>

                    {/* Attorney Information */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Attorney Information</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Attorney Name</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Medical Records and Doctor's Lien */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Medical Records and Doctor&apos;s Lien</h3>
                        <p className="text-sm leading-relaxed mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                          I hereby authorize the Roselle Center for Healing to furnish you, my attorney, with a full report of his examination, diagnosis, treatment, prognosis, etc., of myself in regard to the accident in which I was involved. I hereby authorize and direct you, my attorney, to pay directly to said doctor such sums as may be due and owing for medical service rendered me both by reason of this accident and by reason of any other illness regulatory to treatment and to withhold such sums from any settlement, judgment, or verdict as may be necessary to adequately protect said doctor. And I hereby further give a lien on my case to said doctor against any and all proceeds of my settlement, judgment, or verdict which may be paid to you, my attorney, or myself as the result of the injuries regulatory to which treatment is being rendered.
                        </p>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Patient Signature</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Attorney Signature</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Assignment of Payment */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Assignment of Payment</h3>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Date of Accident</label><input type="date" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Patient Name</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Attorney Name</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Attorney Phone</label><input type="tel" className={inputClass} /></div>
                        </div>
                        <p className="text-sm leading-relaxed mt-s4 mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                          I hereby authorize and direct you to pay directly to the Roselle Center for Healing the medical benefits of Medical Payment allowable under my current insurance policy or any applicable policies for professional services rendered. I understand that I am financially responsible for any charges not covered by this authorization. A photocopy of this assignment is to be considered as valid as the original.
                        </p>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Signature</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Insurance Information */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Insurance Information</h3>

                        {/* Car Insurance */}
                        <h4 className="text-fluid-base text-bg font-medium mb-s3">Your Car Insurance</h4>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1 mb-s6">
                          <div><label className={labelClass} style={labelStyle}>Company</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Policy #</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Contact / Adjuster</label><input type="text" className={inputClass} /></div>
                        </div>

                        {/* Health Insurance */}
                        <h4 className="text-fluid-base text-bg font-medium mb-s3">Your Health Insurance</h4>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1 mb-s6">
                          <div><label className={labelClass} style={labelStyle}>Company</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Policy #</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Contact</label><input type="text" className={inputClass} /></div>
                        </div>

                        {/* 3rd Party Insurance */}
                        <h4 className="text-fluid-base text-bg font-medium mb-s3">3rd Party Insurance (Other Driver)</h4>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Company</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Phone</label><input type="tel" className={inputClass} /></div>
                          <div className="col-span-2 max-md:col-span-1"><label className={labelClass} style={labelStyle}>Address</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Policy #</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Contact / Adjuster</label><input type="text" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Direct Payment Authorization */}
                    <RevealSection delay={0.04}>
                      <div className="p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s5">Direct Payment to Doctor Authorization</h3>
                        <p className="text-sm leading-relaxed mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                          I hereby authorize payment directly to the Roselle Center for Healing of any insurance benefits otherwise payable to me. I understand that I am financially responsible for any charges not covered by my insurance. I authorize the release of medical information necessary to process my claims.
                        </p>
                        <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
                          <div><label className={labelClass} style={labelStyle}>Patient Signature</label><input type="text" className={inputClass} /></div>
                          <div><label className={labelClass} style={labelStyle}>Date</label><input type="date" className={inputClass} /></div>
                        </div>
                      </div>
                    </RevealSection>

                    {/* Submit */}
                    <RevealSection delay={0.04}>
                      <div className="flex flex-col items-center gap-s3">
                        <button type="submit" disabled={sending} className="btn-primary px-12 py-4 text-sm tracking-widest uppercase font-sans font-medium rounded-lg bg-accent text-fg transition-colors duration-200 hover:bg-bg hover:text-fg disabled:opacity-60 disabled:cursor-not-allowed">
                          {sending ? "Submitting…" : "Submit"}
                        </button>
                        {error && <p className="text-xs text-red-300">{error}</p>}
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
