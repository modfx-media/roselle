"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import CtaBand from "@/app/components/templates/CtaBand";

const FORMS = [
  { number: 1, title: "Notice of Privacy Practices (NPP)", tag: "Required", description: "Describes how medical information about you may be used and disclosed.", download: "https://www.rosellecare.com/storage/app/media/documents/1_notice_of_privacy_practice_2017.pdf", fillOut: "/notice-of-privacy-practices-npp-form" },
  { number: 2, title: "New Patient Office Policy", tag: "Required", description: "Patient information and initial history we need to know.", download: "https://www.rosellecare.com/storage/app/media/2-welcome-office-policy-for-nps.pdf", fillOut: "/new-patient-office-policy-form" },
  { number: 3, title: "New Patient Welcome Form", tag: "Required", description: "Lets us know your health history, current state, questions, concerns, and wellness goals.", download: "https://www.rosellecare.com/storage/app/media/2023THFiles/Forms/3-np-hh-confidential-10242022.pdf", fillOut: "/new-patient-welcome-form" },
  { number: 4, title: "EHR Patient Health History", tag: "Required", description: null, download: "https://www.rosellecare.com/storage/app/media/documents/ehr-patient-health-history-page-1-and-2.pdf", fillOut: "/ehr-patient-health-history-form" },
  { number: 5, title: "HIPAA Consent of Treatment", tag: "Required", description: null, download: "https://www.rosellecare.com/storage/app/media/documents/5_Hippa_Consent_of_Treatment_2017.pdf", fillOut: null },
  { number: 6, title: "Symptom Survey", tag: "Required", description: null, download: "https://www.rosellecare.com/storage/app/media/documents/6_Symptom_Survey_2017.pdf", fillOut: null },
  { number: 7, title: "Accident / Injury Forms", tag: "Optional", description: null, download: "https://www.rosellecare.com/storage/app/media/2024/7_accidentandinjuryform_updated_2024.pdf", fillOut: "/auto-accidents-form" },
  { number: 8, title: "Nutritional Forms", tag: "Optional", description: null, download: "https://www.rosellecare.com/storage/app/media/documents/8_METABOLIC_SCREENING_2017.pdf", fillOut: "/nutritional-forms" },
  { number: 9, title: "FAQ About Medicare", tag: "Information", description: null, download: "https://www.rosellecare.com/storage/app/media/documents/faq-about-medicare-2017.pdf", fillOut: "/new-patient-information/faq-about-medicare.html" },
  { number: 10, title: "Thermography Centers Online Forms", tag: "Optional", description: null, download: "https://www.thermographycenters.com/patient-forms/", fillOut: null },
];

export default function OnlineFormsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="Download new patient online forms."
            subtitle="Complete your forms ahead of your visit. Print and bring them with you, or fax to (703) 698-5729."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Experience", href: "/new-patient-center.html" }, { label: "Online Forms" }]}
            image="/services/online-form-fillup.jpg"
            imageAlt="Patient forms."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Get Adobe Reader", href: "https://www.adobe.com/products/acrobat/readstep2.html" }}
          />

          <ContentBlock
            eyebrow="Instructions"
            title="How to use our forms."
            body={[
              "If you do not already have Adobe Reader® installed, click here to download the free Adobe Reader® before opening these PDF documents.",
              "Download the necessary form(s), print and complete the required information, then fax us at 703-698-5729 or bring with you to your appointment.",
            ]}
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Forms</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s8 max-w-[32ch]">All patient forms.</h2>
              <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                {FORMS.map((f) => (
                  <div key={f.number} className="flex flex-col gap-s3 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                    <div className="flex items-start justify-between gap-s3">
                      <div className="flex items-center gap-s3">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-fg text-sm font-bold shrink-0">{f.number}</span>
                        <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug">{f.title}</h3>
                      </div>
                      <span className={`text-[10px] tracking-widest uppercase font-sans px-2.5 py-1 rounded-full shrink-0 ${f.tag === "Required" ? "bg-accent/20 text-accent" : f.tag === "Optional" ? "bg-[rgba(245,244,239,0.08)] text-bg/45" : "bg-[rgba(100,180,255,0.12)] text-[rgba(150,200,255,0.85)]"}`}>{f.tag}</span>
                    </div>
                    {f.description && <p className="text-sm leading-relaxed text-bg/45">{f.description}</p>}
                    <div className="flex flex-wrap gap-s4 mt-auto pt-s3 border-t border-[rgba(245,244,239,0.06)]">
                      <a href={f.download} target="_blank" rel="noopener noreferrer" className="text-xs font-medium tracking-widest uppercase text-bg hover:text-accent transition-colors">Download &amp; Print</a>
                      {f.fillOut && (
                        <a href={f.fillOut} className="text-xs font-medium tracking-widest uppercase text-accent hover:text-bg transition-colors">Fill Out Online</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Need help?" title="Questions about your forms?" body="Our team is happy to help you complete your patient forms." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
