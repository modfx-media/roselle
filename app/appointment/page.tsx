"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import CtaBand from "../components/templates/CtaBand";

export default function AppointmentPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Schedule · Fairfax, VA"
            title="Request an appointment."
            subtitle="Call us directly or email our office to schedule your visit. We will do our best to accommodate your preferred day and time."
            crumbs={[{ label: "Home", href: "/" }, { label: "Appointment Request" }]}
            image="/services/online-appointment.jpg"
            imageAlt="Schedule an appointment."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email rosellecare@gmail.com", href: "mailto:rosellecare@gmail.com" }}
          />

          <ContentBlock
            eyebrow="How to book"
            title="Two easy ways to schedule."
            body={[
              "To request an appointment with Roselle Center For Healing, call us directly at (703) 698-7117 or email rosellecare@gmail.com.",
              "Please note: your appointment is not confirmed until you receive confirmation from our office.",
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Our Practice"
            title="Roselle Center for Healing."
            body="At Roselle Center For Healing, we're fully dedicated to providing solutions that address your unique needs. This personal care is why patients throughout the Fairfax area choose us."
          />

          <CtaBand tone="gold" eyebrow="Ready to begin?" title="Schedule your visit today." body="Take the next step toward better health with Roselle Center For Healing in Fairfax, VA." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Email us", href: "mailto:rosellecare@gmail.com" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
