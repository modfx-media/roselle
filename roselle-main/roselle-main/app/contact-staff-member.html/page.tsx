"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import CtaBand from "@/app/components/templates/CtaBand";

export default function ContactStaffMemberPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Get in touch · Fairfax, VA"
            title="Contact a staff member directly."
            subtitle="Reach our team in Fairfax — we're happy to direct your inquiry to the right person."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
              { label: "Staff Member" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x512_80/webmgr/0g/5/2/slider_01.jpg.webp?30ed42aefe12e4398d68ac595384cd0c"
            imageAlt="Roselle Center for Healing."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email front desk", href: "mailto:info@rosellecare.com" }}
          />

          <FeatureGrid
            eyebrow="Roselle Center For Healing"
            title="How to reach us."
            cols={2}
            cards={[
              { title: "Address", description: "8500 Executive Park Ave, STE 300 — Fairfax, VA 22031" },
              { title: "Phone", description: "(703) 698-7117", href: "tel:+17036987117" },
              { title: "Fax", description: "(703) 698-5729" },
              { title: "Email Front Desk", description: "info@rosellecare.com", href: "mailto:info@rosellecare.com" },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Speak with us"
            title="Ready to connect with our team?"
            body="To reach a specific staff member, call our front desk or email us — we'll direct your inquiry to the right person."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email us", href: "mailto:info@rosellecare.com" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
