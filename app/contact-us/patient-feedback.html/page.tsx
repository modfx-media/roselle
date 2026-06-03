import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import ContentBlock from "../../components/templates/ContentBlock";
import CtaBand from "../../components/templates/CtaBand";
import GHLContactForm from "../../components/GHLContactForm";

export default function PatientFeedbackPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Feedback · Fairfax, VA"
            title="Patient feedback."
            subtitle="We value our patients' experience at Roselle Center For Healing. Share your thoughts and stay informed."
            crumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }, { label: "Patient Feedback" }]}
            image="/services/patient-feedback.jpg"
            imageAlt="Patient feedback."
            primaryCta={{ label: "Download Questionnaire", href: "https://www.rosellecare.com/storage/app/media/Client_Experience_Questionnaire.pdf" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <ContentBlock
            eyebrow="Client Experience Questionnaire"
            title="We'd love your feedback."
            body="If you are currently a patient, please complete the Client Experience Questionnaire. The Questionnaire is in Adobe Acrobat format and requires the free Acrobat Reader to view."
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Stay Informed</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s4 max-w-[32ch]">Join our mailing list.</h2>
              <p className="text-fluid-base text-bg/55 mb-s8 max-w-[640px]">Please complete this form to be notified of center updates, special events and health education lectures.</p>
              <div className="max-w-[720px]">
                <GHLContactForm
                  eyebrow="Patient Feedback"
                  title="Send us a message."
                  subtitle="Share your feedback or join our mailing list to stay informed about center updates, special events and health education lectures."
                  height={760}
                />
              </div>
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Get in touch" title="Share your experience." body="Your feedback helps us improve our patient experience." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
