"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import CtaBand from "@/app/components/templates/CtaBand";

export default function FaqAboutMedicarePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Medicare · Fairfax, VA"
            title="FAQ about Medicare."
            subtitle="Medicare chiropractic coverage answers — deductibles, claims, and reimbursement at Roselle Center For Healing."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Experience", href: "/new-patient-center.html" }, { label: "FAQ about Medicare" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x1535_80/webmgr/0g/5/2/2024/medicare-qa.png.webp?0ff57b4bb3520dce911dcd0ac2b3cfd3"
            imageAlt="Medicare Q&A document."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book a consultation", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Medicare Coverage"
            title="Medicare chiropractic coverage FAQs."
            body="Have questions about Medicare coverage for chiropractic services at Roselle Center For Healing? Our team can walk you through deductibles, claims submission, and treatment costs. Call us with specific questions."
          />

          <CtaBand tone="gold" eyebrow="Get answers" title="Questions about Medicare coverage?" body="Contact Roselle Center For Healing in Fairfax, VA today." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
