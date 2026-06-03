import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";
import GHLContactForm from "../components/GHLContactForm";

export default function NutritionalFormsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient Forms · Fairfax, VA"
            title="Nutritional forms."
            subtitle="A complete metabolic & symptom screening to help us identify nutritional imbalances and design a personalized program."
            crumbs={[{ label: "Home", href: "/" }, { label: "Nutritional Forms" }]}
            image="/services/nutritional-forms.jpg"
            imageAlt="Nutritional forms."
          />

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="max-w-[820px] mx-auto">
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Nutrition Intake</p>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] mb-s4 max-w-[28ch]">
                    Start your nutrition consult.
                  </h2>
                  <p className="text-fluid-base mb-s8 max-w-[60ch]" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Send us your contact information and a brief note about your nutritional concerns or symptoms. We&apos;ll follow up with the metabolic screening and next steps for your personalized plan.
                  </p>
                </div>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="max-w-[820px] mx-auto">
                  <GHLContactForm
                    eyebrow="Nutritional Consultation"
                    title="Request your nutrition assessment."
                    subtitle="Share what you'd like help with — digestion, energy, weight, hormones, allergies, etc. — and we'll prepare the right intake forms for you."
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
