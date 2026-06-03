"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import CtaBand from "@/app/components/templates/CtaBand";

export default function PaymentOptionsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Affordable Care · Fairfax, VA"
            title="Affordable & flexible payment options."
            subtitle="We've maintained a pricing structure and payment programs that allow natural care for all."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Experience", href: "/new-patient-center.html" }, { label: "Payment Options" }]}
            image="/services/payment-options.jpg"
            imageAlt="Payment options."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Our Approach"
            title="Natural care for you and your family."
            body="At The Roselle Center For Healing, we believe in the value of natural care. Roselle Center for Healing is a cash practice and is not a participating provider in insurance — however, we will submit your claims for out-of-network reimbursement once your deductible has been met. We treat auto and personal injury cases. To learn more about payment options, contact Derreth Painter at (703) 698-7117."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Your Options"
            title="Insurance, flexible payment, and budget care."
            cols={3}
            cards={[
              { title: "Insurance", description: "Our office is a cash practice. As a courtesy, all services will be submitted to your primary insurance company for out-of-network benefits." },
              { title: "No Insurance", description: "For patients who have limited or no insurance, flexible payment options are available." },
              { title: "Health on a Budget", description: "We continue to focus on giving every patient the care they deserve and designing a means by which comprehensive care can be affordable." },
            ]}
          />

          <CtaBand tone="gold" eyebrow="Questions?" title="Talk to us about payment options." body="Contact our office to learn more about our flexible payment programs designed for your individual needs." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book an appointment", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
