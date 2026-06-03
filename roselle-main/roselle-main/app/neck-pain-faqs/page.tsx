"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FaqAccordion from "../components/templates/FaqAccordion";
import CtaBand from "../components/templates/CtaBand";

export default function NeckPainFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Neck Pain FAQs · Fairfax, VA"
            title="Neck pain FAQs: chiropractic relief at Roselle Center."
            subtitle="Learn how proper neck pain treatment can put you on the path to a complete recovery."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Neck Pain", href: "/neck-pain" },
              { label: "FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/cervical-traction.jpg.webp?22a45f7ca529237234247c7a49d4bb7c"
            imageAlt="Chiropractor providing neck adjustment."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Neck pain FAQs."
            intro="Whether you've recently experienced a herniated disc, whiplash, or other injury, addressing your neck issues with proper treatment from a professional chiropractor can help."
            items={[
              {
                q: "What are common causes of neck injuries or pain?",
                a: [
                  "Neck pain and injuries vary by severity and can be triggered by an array of external factors, including:",
                  "• Herniated discs — bulging or herniated discs can cause neck pain, especially with predispositions involving spinal and back issues.",
                  "• Muscle spasms — temporary neck pain and discomfort.",
                  "• Pinched nerves — also known as cervical radiculopathy; you may feel pain, numbness, irritation, and discomfort when the nerve is pinched.",
                ],
              },
              {
                q: "What is whiplash?",
                a: "Whiplash is when your head and neck rock back and forth rapidly, like the cracking of a whip. It usually happens during a car accident, although it can be caused by other sources as well.",
              },
              {
                q: "How does Roselle Center for Healing approach neck pain?",
                a: "Our chiropractic care team can help you get the natural and holistic relief you're looking for — without the addiction risk of medications or the long recovery times of surgery. We provide an alternative approach that helps you avoid those treatments.",
              },
              {
                q: "Is chiropractic care safe for neck injuries?",
                a: "Yes. When performed by a licensed chiropractor, neck adjustments are safe and tailored to your specific condition, age, and comfort level. Our team explains every step of the treatment.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Get treatment"
            title="Get neck pain treatment from a chiropractor near you."
            body="At Roselle Center for Healing in Fairfax, VA, we can help you get to the bottom of any neck injury you've sustained."
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
