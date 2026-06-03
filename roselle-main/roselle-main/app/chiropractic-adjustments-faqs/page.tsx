"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FaqAccordion from "../components/templates/FaqAccordion";
import CtaBand from "../components/templates/CtaBand";

export default function ChiropracticAdjustmentsFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractic Adjustments FAQs · Fairfax, VA"
            title="Chiropractic adjustments: your questions answered."
            subtitle="Safe, personalized adjustments that help patients move freely and feel their best."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Chiropractic", href: "/services/chiropractic.html" },
              { label: "Adjustments FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Chiropractic_adjustment.jpg.webp?fa178234dda07451880b4bb658b158fe"
            imageAlt="Chiropractor performing a spinal adjustment."
            primaryCta={{ label: "Book an adjustment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Chiropractic adjustment FAQs."
            intro="Some of the most common questions we hear from patients curious about how chiropractic care works."
            items={[
              {
                q: "What is a chiropractic adjustment?",
                a: "A gentle, hands-on technique used to improve the alignment and movement of your spine and joints. When the spine isn't moving as it should, it can irritate nerves and muscles, leading to pain, stiffness, and inflammation. Adjustments restore proper motion so the body can heal naturally — without medication or surgery.",
              },
              {
                q: "Are chiropractic adjustments safe?",
                a: "Yes. When performed by a licensed chiropractor, adjustments are safe and effective. Each treatment is tailored to your specific condition, age, and comfort level. Our team takes time to explain each step before any adjustment.",
              },
              {
                q: "What conditions can chiropractic care help with?",
                a: "Adjustments are often used to treat back pain, neck pain, headaches, sciatica, and joint discomfort. Many patients also find that regular adjustments improve posture, flexibility, and overall well-being.",
              },
              {
                q: "How often should I get adjusted?",
                a: "It depends on your goals and condition. Some patients notice relief after just one or two sessions, while others benefit from a longer treatment plan to correct underlying issues and maintain lasting results.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Schedule"
            title="Schedule a chiropractic adjustment in Fairfax, VA."
            body="Discover how gentle, personalized care can make a lasting difference."
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
