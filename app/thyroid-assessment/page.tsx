import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import PageHero from "../components/templates/PageHero";
import ImageCta from "../components/templates/ImageCta";
import GHLContactForm from "../components/GHLContactForm";

export default function ThyroidAssessmentPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Health Assessment · Fairfax, VA"
            title="Comprehensive thyroid health assessment."
            subtitle='Complete this assessment and receive "The Thyroid Puzzle" Health Education Video.'
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Health Education", href: "/education-lectures.html" },
              { label: "Thyroid Assessment" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Thyroid health assessment."
            primaryCta={{ label: "Take the assessment", href: "#assessment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <section id="assessment" className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Self-screening
                </p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] max-w-[28ch]">
                  Request your assessment.
                </h2>
                <p className="mt-s4 text-fluid-base max-w-[60ch]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Share your symptoms and contact details below. Our team will review your responses and follow up to schedule your thyroid consultation and send you &ldquo;The Thyroid Puzzle&rdquo; Health Education Video.
                </p>
              </RevealSection>

              <RevealSection delay={0.1}>
                <div className="mt-s8 max-w-[820px]">
                  <GHLContactForm
                    eyebrow="Thyroid Health Assessment"
                    title="Tell us about your symptoms."
                    subtitle="Include any thyroid-related symptoms you are experiencing in the message field so we can tailor your follow-up."
                    height={780}
                  />
                </div>
              </RevealSection>
            </div>
          </section>

          <ImageCta
            eyebrow="Talk to us"
            title="Questions about thyroid health?"
            body="Contact Roselle Center For Healing in Fairfax, VA, for a thyroid health consultation."
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
