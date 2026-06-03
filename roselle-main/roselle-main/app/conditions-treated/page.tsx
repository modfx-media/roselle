"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import CtaBand from "../components/templates/CtaBand";

export default function ConditionsTreatedPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Conditions Treated · Fairfax, VA"
            title="Where is your pain? Conditions we treat."
            subtitle="Integrated chiropractic care for the entire body — addressing root causes, not just symptoms."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Chiropractic care for various conditions."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Whole-body", label: "Care" },
              { value: "Personalized", label: "Plans" },
              { value: "Integrated", label: "Therapies" },
              { value: "Root-cause", label: "Focus" },
            ]}
          />

          <ContentBlock
            eyebrow="Overview"
            title="What we treat at Roselle Center for Healing."
            body="There are various conditions a chiropractor near you in Fairfax, VA can assess and treat. At Roselle Center for Healing, we treat the entire body and provide integrated chiropractic services to address a full range of conditions. Below are some of the conditions we commonly treat."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Common Conditions"
            title="Conditions we commonly treat."
            cols={3}
            cards={[
              {
                title: "Back Pain",
                description:
                  "One of the most common reasons people visit a chiropractor — from poor posture and herniated discs to auto injuries. Personalized care to restore mobility and prevent future issues.",
                href: "/back-pain",
              },
              {
                title: "Knee Pain",
                description:
                  "We assess how your spine, hips, and knees work together to find the root cause. Adjustments, soft tissue therapy, and rehab exercises restore function.",
                href: "/knee-pain",
              },
              {
                title: "Neck Pain",
                description:
                  "From stress, posture, or injury — we focus on spinal alignment and nerve pressure to reduce stiffness and restore range of motion.",
                href: "/neck-pain",
              },
              {
                title: "Shoulder Pain",
                description:
                  "From overuse, muscle tension, or spinal misalignment — a whole-body approach with adjustments, exercises, and soft tissue therapy.",
                href: "/shoulder-pain",
              },
              {
                title: "Sciatica",
                description:
                  "Radiating pain from the lower back down the leg, often linked to disc issues or nerve compression. Chiropractic care eases pressure and improves mobility.",
                href: "/sciatica",
              },
              {
                title: "Whiplash",
                description:
                  "A common auto injury causing neck and shoulder pain, headaches, and stiffness. Treatments restore alignment, ease pain, and support recovery.",
                href: "/whiplash",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="If you're experiencing pain from any of these conditions, our team at Roselle Center for Healing in Fairfax, VA, is here to help. We provide comprehensive chiropractic care tailored to your specific needs."
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
