"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import PillarSection from "../components/templates/PillarSection";
import ImageCta from "../components/templates/ImageCta";

export default function SportsInjuriesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sports Injuries · Fairfax, VA"
            title="Recover faster. Perform better."
            subtitle="From weekend warriors to competitive professionals — chiropractic care that restores function and builds resilience."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Sports Injuries" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Athlete receiving sports rehabilitation care."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "All levels", label: "Athletes" },
              { value: "Return-to-play", label: "Programs" },
              { value: "Performance", label: "Optimization" },
              { value: "Injury", label: "Prevention" },
            ]}
          />

          <PillarSection
            tone="light"
            eyebrow="Athletic Recovery"
            title="A reality for athletes at every level."
            intro="Sports injuries are a reality for athletes at every level — from weekend warriors to competitive professionals. Whether it's a sudden sprain on the field or a gradual overuse injury from repetitive training, these conditions can sideline you and affect your performance long after the initial pain subsides. At Roselle Center For Healing in Fairfax, VA, our chiropractic team helps athletes recover from injury, restore full function, and build resilience against future setbacks."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Recover", description: "Restore full function after injury — not just symptom relief." },
              { title: "Resilience", description: "Build the durability to withstand future training loads." },
              { title: "All levels", description: "From weekend warriors to competitive professionals." },
              { title: "Whole-athlete care", description: "Spinal, soft tissue, and rehabilitative work combined." },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="What We Treat"
            title="Common Sports Injuries We Treat."
            cols={3}
            cards={[
              {
                title: "Sprains & Strains",
                description:
                  "Among the most frequent — when tissues are stretched beyond their normal range, causing pain, swelling, and limited mobility. Proper treatment is essential to prevent re-injury.",
              },
              {
                title: "Joint Dysfunction & Overuse",
                description:
                  "Repetitive motion can lead to joint dysfunction, tendinitis, and stress fractures. Chiropractic care restores proper joint mechanics and addresses the biomechanical imbalances behind the problem.",
              },
              {
                title: "Shoulder, Knee & Muscle Injuries",
                description:
                  "Rotator cuff injuries, knee ligament damage, and muscle imbalances are common across sports. We combine adjustments, soft tissue therapy, and rehab to restore strength and stability.",
              },
            ]}
          />

          <FeatureGrid
            eyebrow="Our Approach"
            title="Chiropractic Sports Rehabilitation."
            cols={2}
            cards={[
              {
                title: "Spinal Adjustments",
                description:
                  "Precise adjustments correct spinal misalignments that may be contributing to pain, reduced range of motion, or impaired performance. Proper alignment is the foundation of efficient movement.",
              },
              {
                title: "Soft Tissue Therapy",
                description:
                  "Therapeutic massage and myofascial release break up adhesions, reduce inflammation, and promote blood flow to injured tissues. Faster healing, restored flexibility.",
              },
              {
                title: "Corrective Exercises",
                description:
                  "Sport-specific exercise programs that address your unique injury and biomechanical needs — rebuilding strength, correcting imbalances, and improving coordination.",
              },
              {
                title: "Performance Optimization",
                description:
                  "Beyond recovery, chiropractic care can enhance athletic performance by improving joint mobility, nervous system function, and overall body mechanics.",
              },
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Your Path Forward"
            title="Getting Back in the Game."
            body="Returning to sport after an injury requires more than the absence of pain — it demands that your body has fully healed and is strong enough to withstand the demands of your activity. Rushing back too soon is one of the most common causes of re-injury. Our team guides you through a gradual, structured return-to-play process, ensuring that each milestone is met before progressing to the next. We also provide ongoing preventive care to keep your body performing at its best."
          />

          <ImageCta
            eyebrow="Recover and perform"
            title="Recover faster, perform better."
            body="Contact Roselle Center For Healing to start your sports injury rehabilitation and get back to doing what you love."
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=70&auto=format&fit=crop"
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
