import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";
import GHLContactForm from "../components/GHLContactForm";

export default function NewPatientWelcomeFormPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="New patient welcome form."
            subtitle="Tell us about your health history, current state, and wellness goals so we can prepare for your first visit."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Welcome Form" }]}
            image="/services/new-patient-welcome.jpg"
            imageAlt="New patient welcome form."
          />

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="max-w-[820px] mx-auto">
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">New Patient Welcome</p>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] mb-s4 max-w-[28ch]">
                    Let&apos;s get you started.
                  </h2>
                  <p className="text-fluid-base mb-s8 max-w-[60ch]" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Send us your contact details and a brief note about your wellness goals. Our team will follow up with the welcome packet and intake forms before your first visit.
                  </p>
                </div>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="max-w-[820px] mx-auto">
                  <GHLContactForm
                    eyebrow="New Patient Welcome"
                    title="Request your welcome packet."
                    subtitle="Share what you'd like to address (pain, condition, wellness goals) and we'll send the welcome forms ahead of your first appointment."
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
