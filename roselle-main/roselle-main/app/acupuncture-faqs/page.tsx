"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import CtaBand from "@/app/components/templates/CtaBand";

export default function AcupunctureFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Acupuncture FAQs · Fairfax, VA"
            title="Holistic healing & pain relief explained."
            subtitle="A gentle, time-tested therapy that complements chiropractic care."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Acupuncture", href: "/services/acupuncture.html" },
              { label: "FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Acupuncture.jpg.webp?97c9c75b39f70acfc6ca9c9bb00a3c81"
            imageAlt="Acupuncture treatment session."
            primaryCta={{ label: "Book a session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Acupuncture FAQs."
            intro="At Roselle Center for Healing in Fairfax, VA, our team answers some of the most common questions about acupuncture and how it can support your health naturally."
            items={[
              {
                q: "What is acupuncture?",
                a: "Acupuncture is a holistic treatment from traditional Chinese medicine. It involves inserting very fine, sterile needles into specific points on the body to restore balance, improve energy flow, and encourage natural healing. Often combined with chiropractic care for longer-lasting relief from pain and stress.",
              },
              {
                q: "Is acupuncture safe and comfortable?",
                a: "Yes. When performed by a licensed practitioner, acupuncture is safe, precise, and surprisingly relaxing. Most patients describe the sensation as a light tingling or gentle warmth — many even drift off during the session. Treatments are tailored to your comfort and health goals.",
              },
              {
                q: "What conditions can acupuncture help treat?",
                a: "Acupuncture can address a wide range of concerns — from headaches and muscle stiffness to digestive issues and stress. There is also highly effective acupuncture for back pain and sciatica, reducing nerve irritation, inflammation, and muscle tightness. By improving circulation and releasing tension, acupuncture supports the body's own healing processes.",
              },
              {
                q: "How does acupuncture work with chiropractic care?",
                a: "Many patients find the best results come from combining acupuncture with chiropractic treatment. Adjustments restore alignment and joint mobility, while acupuncture promotes relaxation, reduces inflammation, and balances the nervous system — together creating a powerful, natural approach to healing.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Schedule today"
            title="Schedule acupuncture near you."
            body="If you're looking to explore natural ways to ease pain and improve wellness, the caring team at Roselle Center for Healing is here to help."
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
