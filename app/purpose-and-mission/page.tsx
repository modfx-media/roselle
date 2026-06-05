"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import CtaBand from "../components/templates/CtaBand";

export default function PurposeMissionPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Our Foundation · Fairfax, VA"
            title="Holistic purpose & mission."
            subtitle="A natural integrative healthcare practice built on serving, educating, and empowering."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "New Patient Experience", href: "/new-patient-center.html" },
              { label: "Purpose & Mission" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x567_80/webmgr/0g/5/2/2024/rcfh-desk.png.webp?69ad103845fefe6b7f70b54853f523bb"
            imageAlt="Reception at Roselle Center for Healing."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Holistic", label: "Approach" },
              { value: "Integrative", label: "Healthcare" },
              { value: "Whole-body", label: "Balance" },
              { value: "Personalized", label: "Care" },
            ]}
          />

          <FeatureGrid
            eyebrow="Purpose & Mission"
            title="The Roselle Center for Healing."
            intro="A natural integrative healthcare practice — holistic in approach — with the accepted purpose and mission of:"
            cols={2}
            cards={[
              {
                title: "Our Purpose",
                description:
                  "To serve, educate, and empower individuals on their path to create extraordinary health.",
              },
              {
                title: "Our Mission",
                description:
                  "To provide others with established and advanced techniques in chiropractic, acupuncture, and nutritional healing — by creating structural, chemical, and emotional balance.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Begin your journey"
            title="Ready to experience extraordinary health?"
            body="Schedule a free 20-minute consultation and take the first step toward holistic wellness."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
