"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FaqAccordion from "../components/templates/FaqAccordion";
import CtaBand from "../components/templates/CtaBand";

export default function LowerBackPainFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Lower Back Pain FAQs · Fairfax, VA"
            title="Lower back pain: your questions, answered."
            subtitle="From dull aches to sharp pain — natural, effective care to help you move freely again."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Lower Back Pain FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/lower-back-pain2.jpg.webp?a19c043cdf2dd82d34d928729172241e"
            imageAlt="Man experiencing lower back pain at a desk."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Lower back pain FAQs."
            intro="Lower back pain is one of the most common reasons people seek help from a chiropractor. Whether it's a dull ache after sitting too long, sharp pain that radiates down the leg, or stiffness that won't go away — our team is here to help."
            items={[
              {
                q: "What causes lower back pain?",
                a: "There isn't one single cause. It can result from poor posture, overuse, disc injuries, muscle strain, arthritis, or even stress. Sometimes the pain appears suddenly after lifting something heavy; other times it builds slowly over weeks or months. Understanding the root cause is key to choosing the right treatment.",
              },
              {
                q: "Can chiropractic care help with lower back pain?",
                a: "Absolutely. Chiropractic care focuses on restoring proper alignment and movement to the spine. When the spine is misaligned, it can irritate nearby nerves and muscles, leading to pain and stiffness. Through gentle adjustments and targeted therapies, a chiropractor can relieve pressure, improve mobility, and support the body's natural healing — without medication or surgery.",
              },
              {
                q: "What about sciatica?",
                a: "Sciatica is a specific type of lower back pain that radiates from the lower spine into the hip, leg, or foot. It's caused by irritation or compression of the sciatic nerve. We offer sciatica treatment that focuses on reducing nerve pressure, improving posture, and restoring healthy movement for long-term relief.",
              },
              {
                q: "When should I seek professional care?",
                a: "If your back pain lasts more than a few days, limits your movement, or radiates down your leg, it's time to schedule an evaluation. Early treatment can prevent chronic pain and support faster recovery.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Schedule"
            title="Schedule your visit today."
            body="Don't let back pain control your life. Personalized lower back pain treatment can help you move freely again."
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
