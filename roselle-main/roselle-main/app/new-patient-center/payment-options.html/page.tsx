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
            title="Payment options."
            subtitle="We believe in the value of natural care for you and your family — with a pricing structure and flexible programs that allow care for all."
            crumbs={[{ label: "Home", href: "/" }, { label: "New Patient Experience", href: "/new-patient-center.html" }, { label: "Payment Options" }]}
            image="/services/payment-options.jpg"
            imageAlt="Payment options."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book an appointment", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Affordable & Flexible"
            title="Care that fits your needs."
            body="At The Roselle Center For Healing, we maintain a pricing structure that allows care for all. Roselle Center for Healing is a cash practice and is not a participating provider in insurance — however, we will submit your claims for consideration of out-of-network reimbursement once your deductible has been met. We treat auto and personal injury cases (services must be paid at time of service unless a lien has been secured with your attorney). To learn more about our payment options, contact Derreth Painter at (703) 698-7117."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Your Options"
            title="Insurance & flexible payment."
            cols={2}
            cards={[
              { title: "Insurance", description: "Our office is a cash practice and is not a participating provider for any insurance plans. To date, chiropractic care is partially covered by Medicare. As a courtesy, all services will be submitted to your primary insurance company for out-of-network benefits." },
              { title: "No Insurance", description: "For patients who have limited or no insurance, flexible payment options are available — designed for your individual needs." },
            ]}
          />

          <ContentBlock
            eyebrow="Your Investment"
            title="Health on a budget."
            body="At Roselle Center For Healing, we appreciate you have many choices in your health care. We respect your investment in time and money to regain and maintain optimal health. We continue to focus on giving every patient the care they deserve and designing a means by which comprehensive care can be affordable."
          />

          <CtaBand tone="gold" eyebrow="Questions about payment?" title="Contact Derreth Painter today." body="Learn more about our flexible payment programs designed for your individual needs." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book an appointment", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
