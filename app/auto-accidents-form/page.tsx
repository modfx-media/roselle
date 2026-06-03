import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";
import GHLContactForm from "../components/GHLContactForm";

export default function AutoAccidentsFormPage() {
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

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="max-w-[820px] mx-auto">
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Auto Accident Intake</p>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] mb-s4 max-w-[28ch]">
                    Tell us about your accident.
                  </h2>
                  <p className="text-fluid-base mb-s8 max-w-[60ch]" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Send us your contact details and a quick description of your accident and current symptoms. Our team will reach out to coordinate your evaluation and walk you through the claims process.
                  </p>
                </div>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="max-w-[820px] mx-auto">
                  <GHLContactForm
                    eyebrow="Auto Accident"
                    title="Request your consultation."
                    subtitle="Include the date of accident, current symptoms, and insurance information in the message so we can prepare for your visit."
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
