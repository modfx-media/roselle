"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import CtaBand from "@/app/components/templates/CtaBand";

export default function WhereIsYourPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Conditions Treated · Fairfax, VA"
            title="Where is your pain? Conditions we treat."
            subtitle="Whether it's back pain from an auto accident or neck pain from a medical condition, our team is here to help."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Where is Your Pain?" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Chiropractor evaluating a patient."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <ContentBlock
            eyebrow="Overview"
            title="Treatments for a wide range of conditions."
            body="At Roselle Center for Healing in Fairfax, VA, we provide treatments for various conditions to reduce any discomfort you're experiencing and improve your health. Below are some of the conditions we commonly treat."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Conditions Treated"
            title="Where is your pain?"
            cols={2}
            cards={[
              {
                title: "Back Pain",
                description:
                  "Back pain can compromise your strength and flexibility. Whether from a sports injury or other personal injury, we treat it with spinal adjustments and other chiropractic techniques — and use approaches that prevent the pain from reoccurring.",
                href: "/back-pain",
              },
              {
                title: "Knee Pain",
                description:
                  "Knee pain can occur from a sports injury, arthritis, or fibromyalgia. We perform a thorough evaluation to determine the root cause, then create a treatment plan that reduces your symptoms.",
                href: "/knee-pain",
              },
              {
                title: "Neck Pain",
                description:
                  "Neck pain — from poor posture or personal injury — can prevent you from completing tasks and make rest uncomfortable. We offer effective treatment for both.",
                href: "/neck-pain",
              },
              {
                title: "Shoulder Pain",
                description:
                  "Many shoulder injuries are directly caused by misalignments in the musculoskeletal system. We identify the underlying cause and administer immediate treatment.",
                href: "/shoulder-pain",
              },
              {
                title: "Sciatica",
                description:
                  "Sciatica develops when the sciatic nerve becomes compressed or irritated, leading to lower back pain. With adjustments, we take pressure off the sciatic nerve and provide relief.",
                href: "/sciatica",
              },
              {
                title: "Whiplash",
                description:
                  "After an auto accident, whiplash can cause neck pain and frequent headaches. Even without obvious symptoms, it's important to receive treatment to prevent further complications.",
                href: "/whiplash",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="Contact us"
            title="Contact us for an appointment today."
            body="If you have neck pain or hip pain that isn't subsiding, let our team at Roselle Center for Healing in Fairfax, VA, help."
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
