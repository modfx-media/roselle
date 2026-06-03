"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import CtaBand from "@/app/components/templates/CtaBand";

export default function KinesiologyFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Kinesiology FAQs · Fairfax, VA"
            title="Applied kinesiology: your questions, answered."
            subtitle="Specialized assessment to identify imbalances in muscles, joints, and the nervous system."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Applied Kinesiology", href: "/services/applied-kinesiology.html" },
              { label: "FAQs" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/kinesio.jpg.webp?bfce089529f033384b2f41e1ba340d81"
            imageAlt="Kinesiology tape and tools."
            primaryCta={{ label: "Book an evaluation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Applied kinesiology FAQs."
            intro="At Roselle Center for Healing, our experienced chiropractors integrate AK into care plans to support long-term wellness and optimal function."
            items={[
              {
                q: "What is applied kinesiology?",
                a: "Applied Kinesiology combines principles of anatomy, physiology, and neurology to evaluate how different systems in the body interact. Through specific muscle testing, our chiropractors detect imbalances, weaknesses, or stressors that may affect posture, coordination, or overall function. The goal isn't just to relieve pain but to restore balance and optimize how your body works.",
              },
              {
                q: "How does applied kinesiology work with chiropractic care?",
                a: "AK and chiropractic care work hand-in-hand. While adjustments focus on improving joint alignment and nervous system function, AK identifies the underlying muscular, structural, or neurological issues contributing to misalignment. Combining these approaches creates a personalized treatment plan that promotes natural healing, stability, and overall wellness.",
              },
              {
                q: "Who can benefit from applied kinesiology?",
                a: [
                  "AK is suitable for people of all ages. It can be especially helpful for those experiencing:",
                  "• Chronic pain or fatigue",
                  "• Postural imbalances",
                  "• Stress-related conditions",
                  "• Unexplained muscle tension or weakness",
                  "• Athletes looking to improve performance",
                ],
              },
              {
                q: "How many sessions will I need?",
                a: "The number of sessions varies depending on your individual condition, overall health, and treatment goals. Some patients experience improvement after just a few sessions; others may require ongoing care to achieve optimal balance and long-term results. During your initial evaluation, our chiropractors will recommend a plan tailored to your needs.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Schedule"
            title="Schedule your appointment today."
            body="Curious about how Applied Kinesiology can support your health and enhance your recovery? Our caring team is here to help."
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
