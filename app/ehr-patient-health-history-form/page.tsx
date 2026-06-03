import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";
import GHLContactForm from "../components/GHLContactForm";

export default function EHRPatientHealthHistoryFormPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="EHR patient health history."
            subtitle="Share your demographics, contact preferences, and health history securely so our team can provide truly personalized care."
            crumbs={[{ label: "Home", href: "/" }, { label: "EHR Health History" }]}
            image="/services/ehr-health-history.jpg"
            imageAlt="EHR patient health history."
          />

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="max-w-[820px] mx-auto">
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Patient Intake</p>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] mb-s4 max-w-[28ch]">
                    Get started with your health history.
                  </h2>
                  <p className="text-fluid-base mb-s8 max-w-[60ch]" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Send us your contact details and a brief note about what you&apos;d like to address. Our team will follow up with the secure intake forms and next steps for your visit.
                  </p>
                </div>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="max-w-[820px] mx-auto">
                  <GHLContactForm
                    eyebrow="EHR Health History"
                    title="Request your intake forms."
                    subtitle="Tell us a bit about yourself and we'll send the secure patient health history forms to complete before your visit."
                    height={760}
                  />
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
