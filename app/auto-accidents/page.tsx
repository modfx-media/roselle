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

export default function AutoAccidentsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Auto Accidents · Fairfax, VA"
            title="Been in an accident? Don't wait."
            subtitle="Early chiropractic intervention helps prevent acute injuries from becoming chronic conditions."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Auto Accidents" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Patient receiving care after auto accident."
            primaryCta={{ label: "Book an evaluation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Same-day", label: "Evaluations" },
              { value: "Non-invasive", label: "Care" },
              { value: "Drug-free", label: "Recovery" },
              { value: "Personalized", label: "Plans" },
            ]}
          />

          <PillarSection
            tone="light"
            eyebrow="Post-Accident Care"
            title="Hidden injuries deserve early attention."
            intro="Auto accidents — even seemingly minor fender-benders — can cause a wide range of injuries to the spine, muscles, and soft tissues. Whiplash, back pain, herniated discs, and soft tissue damage are among the most common conditions that follow a collision. Many of these injuries don't produce immediate symptoms, making it critical to seek evaluation as soon as possible. At Roselle Center For Healing in Fairfax, VA, our team provides early chiropractic intervention to help prevent acute injuries from becoming chronic conditions."
            cta={{ label: "Book an evaluation", href: "/appointment" }}
            pillars={[
              { title: "Even minor crashes", description: "Fender-benders can cause real spinal and soft-tissue damage." },
              { title: "Delayed symptoms", description: "Pain often appears hours or days after the collision." },
              { title: "Hidden injuries", description: "Whiplash, herniated discs, and soft tissue damage hide easily." },
              { title: "Early intervention", description: "Stops acute injuries from becoming chronic problems." },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="What We See Most"
            title="Common Auto Accident Injuries."
            cols={3}
            cards={[
              {
                title: "Whiplash",
                description:
                  "Occurs when the head is rapidly thrown forward and backward during impact. Neck pain, stiffness, headaches, dizziness, and reduced range of motion — often appearing hours or days after the accident.",
              },
              {
                title: "Back & Neck Pain",
                description:
                  "Impact can misalign spinal vertebrae, strain muscles, and irritate nerves throughout the back and neck. Untreated, these injuries can develop into chronic pain conditions.",
              },
              {
                title: "Herniated Discs & Soft Tissue",
                description:
                  "The sudden jolt can cause spinal discs to herniate or bulge, placing pressure on nerves. Soft tissue injuries to muscles, tendons, and ligaments can also result. Post-accident headaches and migraines are common.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Early Intervention Matters"
            title="Why Seek Chiropractic Care After an Accident."
            body={[
              "After an auto accident, your body releases adrenaline and endorphins that can mask pain for hours or even days. Many patients feel \"fine\" immediately following a collision, only to discover significant injuries later. A prompt chiropractic evaluation can identify hidden injuries before they have a chance to worsen.",
              "Chiropractic care offers a non-invasive, drug-free path to recovery that addresses the structural damage caused by the accident rather than simply managing symptoms. Early treatment helps reduce inflammation, restore proper spinal alignment, and support the body's natural healing mechanisms — all essential to a complete recovery.",
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Your Recovery Plan"
            title="Our Treatment Approach."
            cols={2}
            cards={[
              {
                title: "Comprehensive Evaluation",
                description:
                  "Every patient receives a thorough examination — including orthopedic and neurological testing — to identify all areas of injury and develop the most effective treatment plan.",
              },
              {
                title: "Personalized Treatment Plans",
                description:
                  "No two accidents are alike. Your care is customized to address your specific injuries, symptoms, and recovery goals.",
              },
              {
                title: "Chiropractic Adjustments & Massage",
                description:
                  "Precise adjustments restore proper alignment, while therapeutic massage relieves muscle tension and promotes circulation. Together, they accelerate healing.",
              },
              {
                title: "Rehabilitation Exercises",
                description:
                  "As you heal, targeted exercises rebuild strength, improve flexibility, and restore your full range of motion — supporting recovery and preventing future problems.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Don't wait"
            title="Been in an accident? Don't wait."
            body="Schedule a consultation at Roselle Center For Healing to get evaluated and start your recovery as soon as possible."
            image="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1600&q=70&auto=format&fit=crop"
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
