import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import Contact from "../components/Contact";
import PageHero from "../components/templates/PageHero";
import GHLContactForm from "../components/GHLContactForm";

export default function PersonalInjuryFormsPage() {
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

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="max-w-[820px] mx-auto">
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Personal Injury Intake</p>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] mb-s4 max-w-[28ch]">
                    Tell us about your injury.
                  </h2>
                  <p className="text-fluid-base mb-s8 max-w-[60ch]" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Send us your contact information and a brief description of your accident and current symptoms. Our team will reach out to walk you through next steps and the claims process.
                  </p>
                </div>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="max-w-[820px] mx-auto">
                  <GHLContactForm
                    eyebrow="Personal Injury"
                    title="Request your consultation."
                    subtitle="Include any details about your accident, symptoms, and insurance situation in the message field so we can prepare for your visit."
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
