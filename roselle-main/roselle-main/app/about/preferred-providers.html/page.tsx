"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import PageHero from "../../components/templates/PageHero";
import ContentBlock from "../../components/templates/ContentBlock";
import CtaBand from "../../components/templates/CtaBand";

export default function PreferredProvidersPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Preferred Providers · Fairfax, VA"
            title="Our preferred providers network."
            subtitle="Trusted partners who share our holistic, integrative approach to wellness."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about-us.html" },
              { label: "Preferred Providers" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Preferred providers network."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <ContentBlock
            eyebrow="Our Network"
            title="Preferred providers."
            body="Roselle Center for Healing partners with trusted preferred providers across the Fairfax, VA area to ensure our patients receive comprehensive, coordinated care. For specific provider information or referrals, please contact our office."
          />

          <CtaBand
            tone="gold"
            eyebrow="Get in touch"
            title="Questions about our preferred providers?"
            body="Our team is happy to help you find the right care across our network of trusted providers."
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
