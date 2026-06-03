"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";


export default function NewPatientOfficePolicyFormPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="New patient office policy."
            subtitle="Important office information and patient history we'll need on your first visit. Download the PDF or fill out online."
            crumbs={[{ label: "Home", href: "/" }, { label: "Office Policy Form" }]}
            image="/services/office-policy.jpg"
            imageAlt="New patient office policy."
          />

          {/* ── Content ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Patient Forms</p>
                <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Office Policy Form</h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  This is patient information that we need to know and some initial history information. You can download a copy of the New Patient Office Policy Form below, or visit our{" "}
                  <a href="/online-forms.html" className="text-accent underline underline-offset-2 transition-colors duration-200 hover:text-fg">Online Forms</a>{" "}
                  page to access all required and optional new patient forms.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8 flex flex-wrap gap-s4">
                  <MagneticButton className="btn-primary" onClick={() => window.open("https://www.rosellecare.com/storage/app/media/2-welcome-office-policy-for-nps.pdf", "_blank")}>
                    Download Form (PDF)
                  </MagneticButton>
                  <MagneticButton className="btn-outline" onClick={() => window.location.href = "/online-forms.html"}>
                    View All Forms
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Need Help?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      If you have any questions about the New Patient Office Policy Form or need assistance, please don&rsquo;t hesitate to call our office. Our team is ready to help you get started.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>


          <Contact />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
