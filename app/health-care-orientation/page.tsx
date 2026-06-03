import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import ImageCta from "../components/templates/ImageCta";
import GHLContactForm from "../components/GHLContactForm";

export default function HealthCareOrientationPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient Education · Fairfax, VA"
            title="Health care orientation."
            subtitle="Understanding your health care — an important part of your wellness plan with the Roselle Center for Healing."
            crumbs={[{ label: "Home", href: "/" }, { label: "Health Education", href: "/education-lectures.html" }, { label: "Health Care Orientation" }]}
            image="/services/learning.jpg"
            imageAlt="Health care orientation."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book a consultation", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Understanding Your Health Care"
            title="Your health is in your hands."
            body={[
              "This Health Care Orientation is designed to educate you about our approach to achieving optimal wellness, as well as your responsibilities. What we do in our practice only works if you do your part at home and throughout your life. This video helps you understand your body, and what we'll do together to achieve your best state of health.",
              "\"Understanding Your Health Care\" is part of your treatment plan at the Roselle Center for Healing. As part of your patient agreement, you agree to watch this video health care orientation in full and complete the form below to notify us that you have viewed this video.",
            ]}
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Confirmation</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s4 max-w-[32ch]">Post-viewing confirmation.</h2>
              <p className="text-fluid-base text-bg/55 mb-s8 max-w-[640px]">Please complete the form below to acknowledge that you have watched the health care orientation and to ask any follow-up questions.</p>
              <div className="max-w-[720px]">
                <GHLContactForm
                  eyebrow="Health Care Orientation"
                  title="Confirm and ask questions."
                  subtitle="Let us know you have watched the orientation video, and include any questions you'd like our team to address."
                  height={760}
                />
              </div>
            </div>
          </section>

          <ImageCta eyebrow="Need help?" title="Questions about your health care orientation?" body="Contact Roselle Center For Healing in Fairfax, VA for assistance." image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=70&auto=format&fit=crop" primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
