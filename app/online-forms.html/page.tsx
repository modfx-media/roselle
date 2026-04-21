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

const FORMS = [
  {
    number: 1,
    title: "Notice of Privacy Practices (NPP) Form",
    tag: "Required",
    description: "This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.",
    download: "https://www.rosellecare.com/storage/app/media/documents/1_notice_of_privacy_practice_2017.pdf",
    fillOut: "/notice-of-privacy-practices-npp-form",
  },
  {
    number: 2,
    title: "New Patient Office Policy Form",
    tag: "Required",
    description: "This is patient information that we need to know and some initial history information.",
    download: "https://www.rosellecare.com/storage/app/media/2-welcome-office-policy-for-nps.pdf",
    fillOut: "/new-patient-office-policy-form",
  },
  {
    number: 3,
    title: "New Patient Welcome Form",
    tag: "Required",
    description: "This lets us know the history and current state of your health. What questions, concerns, goals, regarding wellness can we help you with? Let us know!",
    download: "https://www.rosellecare.com/storage/app/media/2023THFiles/Forms/3-np-hh-confidential-10242022.pdf",
    fillOut: "/new-patient-welcome-form",
  },
  {
    number: 4,
    title: "EHR Patient Health History Form",
    tag: "Required",
    description: null,
    download: "https://www.rosellecare.com/storage/app/media/documents/ehr-patient-health-history-page-1-and-2.pdf",
    fillOut: "/ehr-patient-health-history-form",
  },
  {
    number: 5,
    title: "HIPAA Consent of Treatment Forms",
    tag: "Required",
    description: null,
    download: "https://www.rosellecare.com/storage/app/media/documents/5_Hippa_Consent_of_Treatment_2017.pdf",
    fillOut: "/hipaa-consent-of-treatment-forms",
  },
  {
    number: 6,
    title: "Symptom Survey",
    tag: "Required",
    description: null,
    download: "https://www.rosellecare.com/storage/app/media/documents/6_Symptom_Survey_2017.pdf",
    fillOut: "/symptom-survey",
  },
  {
    number: 7,
    title: "Accident/Injury Forms",
    tag: "Optional",
    description: null,
    download: "https://www.rosellecare.com/storage/app/media/2024/7_accidentandinjuryform_updated_2024.pdf",
    fillOut: "/auto-accidents-form",
  },
  {
    number: 8,
    title: "Nutritional Forms",
    tag: "Optional",
    description: null,
    download: "https://www.rosellecare.com/storage/app/media/documents/8_METABOLIC_SCREENING_2017.pdf",
    fillOut: "/nutritional-forms",
  },
  {
    number: 9,
    title: "FAQ About Medicare",
    tag: "Information",
    description: null,
    download: "https://www.rosellecare.com/storage/app/media/documents/faq-about-medicare-2017.pdf",
    fillOut: "/new-patient-information/faq-about-medicare.html",
    fillOutLabel: "Read More",
  },
  {
    number: 10,
    title: "Thermography Centers Online Forms",
    tag: "Optional",
    description: null,
    download: "https://www.thermographycenters.com/patient-forms/",
    downloadLabel: "Visit Thermography Centers",
    fillOut: null,
  },
];

export default function OnlineFormsPage() {
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
                  <a href="/new-patient-center.html" className="transition-colors duration-200 hover:text-accent">New Patient Experience</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Online Forms</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Download New Patient Online Forms for Roselle Center For Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Instructions ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Patient Forms</p>
                <SplitReveal text="Roselle Center For Healing: New Patient Forms Online" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <ul className="mt-s6 max-w-[720px] flex flex-col gap-s3">
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    • If you do not already have Adobe Reader® installed, <a href="https://www.adobe.com/products/acrobat/readstep2.html" target="_blank" rel="noopener noreferrer" className="text-fg font-medium underline underline-offset-2 transition-colors duration-200 hover:text-accent">Click Here</a> to download.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    • <a href="https://www.adobe.com/products/acrobat/readstep2.html" target="_blank" rel="noopener noreferrer" className="text-fg font-medium underline underline-offset-2 transition-colors duration-200 hover:text-accent">DOWNLOAD THE FREE ADOBE READER®</a>
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    • Download the necessary form(s), print it out and fill in the required information.
                  </li>
                  <li className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    • Fax us your printed and completed form(s) to: <a href="tel:703-698-5729" className="text-fg font-medium">703-698-5729</a> or bring it with you to your appointment.
                  </li>
                </ul>
              </RevealSection>
            </div>
          </section>

          {/* ── Forms Grid ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                {FORMS.map((form, i) => (
                  <RevealSection key={form.number} delay={i * 0.05}>
                    <div className="flex flex-col gap-s4 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] h-full">
                      <div className="flex items-start justify-between gap-s3">
                        <div className="flex items-center gap-s3">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-fg text-sm font-bold shrink-0">{form.number}</span>
                          <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug">{form.title}</h3>
                        </div>
                        <span className={`text-[10px] tracking-widest uppercase font-sans px-2.5 py-1 rounded-full shrink-0 ${
                          form.tag === "Required"
                            ? "bg-accent/20 text-accent"
                            : form.tag === "Optional"
                            ? "bg-[rgba(245,244,239,0.08)] text-[rgba(245,244,239,0.45)]"
                            : "bg-[rgba(100,180,255,0.12)] text-[rgba(150,200,255,0.85)]"
                        }`}>{form.tag}</span>
                      </div>
                      {form.description && (
                        <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.45)" }}>{form.description}</p>
                      )}
                      <div className="flex flex-wrap gap-s3 mt-auto pt-s3" style={{ borderTop: "1px solid rgba(245,244,239,0.06)" }}>
                        <a
                          href={form.download}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-bg transition-colors duration-200 hover:text-accent"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                          {form.downloadLabel || "Download & Print"}
                        </a>
                        {form.fillOut && (
                          <a
                            href={form.fillOut}
                            target={form.fillOut.startsWith("/") ? undefined : "_blank"}
                            rel={form.fillOut.startsWith("/") ? undefined : "noopener noreferrer"}
                            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent transition-colors duration-200 hover:text-bg"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                            {form.fillOutLabel || "Fill Out Online"}
                          </a>
                        )}
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Need Help With Your Forms?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Have questions about our patient forms? Contact Roselle Center For Healing in Fairfax, VA for assistance.
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
