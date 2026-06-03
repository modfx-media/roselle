"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function HerniatedDiscsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Herniated Discs · Fairfax, VA"
            title="Non-surgical care for herniated discs."
            subtitle="Relieve pressure, reduce inflammation, and restore proper spinal function — without surgery."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Herniated Discs" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Patient receiving spinal care for herniated disc."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Non-surgical", label: "Care" },
              { value: "Drug-free", label: "Approach" },
              { value: "Personalized", label: "Plans" },
              { value: "Lasting", label: "Relief" },
            ]}
          />

          <PillarSection
            eyebrow="Understanding Herniated Discs"
            title="What's happening inside the spine."
            intro="A herniated disc occurs when the soft, gel-like center of a spinal disc pushes through a crack in the tougher exterior casing. This displaced disc material can press on nearby spinal nerves, causing pain, numbness, tingling, or weakness that may radiate into the arms or legs. At Roselle Center For Healing in Fairfax, VA, we provide non-surgical treatment options designed to relieve pressure, reduce inflammation, and restore proper spinal function."
            tone="light"
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Disc structure", description: "Soft inner gel pushes through a tear in the disc's outer casing." },
              { title: "Nerve pressure", description: "Displaced material presses on nearby spinal nerves." },
              { title: "Radiating symptoms", description: "Pain, numbness, tingling, or weakness in the arms or legs." },
              { title: "Non-surgical care", description: "Relieve pressure, reduce inflammation, restore function." },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Recognizing the Signs"
            title="Symptoms of Herniated Discs."
            cols={2}
            cards={[
              {
                title: "Radiating Pain",
                description:
                  "A herniated disc in the lower back often causes sharp or burning pain that radiates down the buttock and into the leg — commonly known as sciatica. When a disc herniates in the neck, pain may shoot into the shoulder and arm.",
              },
              {
                title: "Numbness & Tingling",
                description:
                  "Pressure on the spinal nerves can produce numbness, tingling, or a pins-and-needles sensation in the areas served by those nerves. This may affect the hands, fingers, feet, or toes.",
              },
              {
                title: "Muscle Weakness",
                description:
                  "Nerve compression from a herniated disc can weaken the muscles that the affected nerves serve. You may notice difficulty lifting objects, gripping things securely, or an increased tendency to stumble.",
              },
              {
                title: "Stiffness & Limited Mobility",
                description:
                  "Stiffness in the neck or lower back is a common symptom, particularly in the morning or after prolonged sitting. The surrounding muscles may spasm as they try to stabilize the affected area.",
              },
            ]}
          />

          <FeatureGrid
            eyebrow="Our Approach"
            title="Chiropractic Treatment Options."
            cols={2}
            cards={[
              {
                title: "Spinal Adjustments",
                description:
                  "Gentle, targeted adjustments help restore proper alignment to the spine, reducing pressure on the herniated disc and the nerves it is compressing — significant pain relief and improved mobility.",
              },
              {
                title: "Spinal Decompression Therapy",
                description:
                  "Non-surgical decompression uses controlled traction to gently stretch the spine, creating negative pressure within the disc. This helps retract the herniated material and promotes nutrient flow.",
              },
              {
                title: "Soft Tissue Therapy",
                description:
                  "Massage therapy and myofascial release help relax the muscles surrounding the herniated disc — reducing spasm, improving circulation, and supporting natural healing.",
              },
              {
                title: "Therapeutic Exercises",
                description:
                  "Specific exercises designed to strengthen the muscles that support the spine, improve flexibility, and prevent future disc injuries. A strong core is essential to long-term spinal health.",
              },
            ]}
          />

          <ChecklistSplit
            tone="dark"
            eyebrow="Long-Term Wellness"
            title="Recovery and Prevention."
            body="Recovering from a herniated disc requires consistent, patient-centered care. Our treatment plans are tailored to your specific condition and goals, combining in-office adjustments with at-home exercises and lifestyle modifications."
            image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Patient performing rehab exercises for spinal health."
            items={[
              "Tailored in-office adjustments",
              "At-home exercises and lifestyle modifications",
              "Posture correction and core strengthening",
              "Ergonomic adjustments at work and home",
            ]}
          />

          <ImageCta
            eyebrow="Get back to living"
            title="Get back to living without pain."
            body="Contact Roselle Center For Healing to discuss non-surgical treatment options for your herniated disc."
            image="https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=1600&q=70&auto=format&fit=crop"
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
