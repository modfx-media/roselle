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

export default function HeadachesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Headaches · Fairfax, VA"
            title="A drug-free path to lasting headache relief."
            subtitle="From tension and migraines to cervicogenic pain — we treat the source, not the symptom."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/conditions-treated" },
              { label: "Headaches" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Patient receiving chiropractic care for headache relief."
            primaryCta={{ label: "Book an appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Drug-free", label: "Relief" },
              { value: "Non-invasive", label: "Treatment" },
              { value: "All ages", label: "Welcome" },
              { value: "Root cause", label: "Focused" },
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Understanding Headaches"
            title="Why headaches happen — and why they keep coming back."
            intro="Headaches are one of the most common conditions affecting millions of people every day. They can stem from a wide variety of causes including tension, stress, poor posture, dehydration, and spinal misalignments. While reaching for over-the-counter medication may provide temporary relief, it rarely addresses the underlying issue. At Roselle Center For Healing in Fairfax, VA, our chiropractic team offers a drug-free, whole-body approach to relieving headache pain — targeting the source of your discomfort rather than simply masking the symptoms."
            cta={{ label: "Book your assessment", href: "/appointment" }}
            pillars={[
              { title: "Tension & stress", description: "Daily stress builds chronic muscle tension across the neck and head." },
              { title: "Posture", description: "Forward-head and slouched posture place ongoing strain on the spine." },
              { title: "Dehydration", description: "Even mild dehydration can trigger frequent headache episodes." },
              { title: "Spinal alignment", description: "Misalignments in the upper spine irritate nerves and blood flow." },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Conditions We Address"
            title="Types of Headaches."
            cols={3}
            cards={[
              {
                title: "Tension Headaches",
                description:
                  "The most common type — often a constant band of pressure around the head, triggered by stress, muscle tightness, and prolonged poor posture from desk work or phone use.",
              },
              {
                title: "Migraines",
                description:
                  "Intense, throbbing pain — often on one side of the head — with nausea, light sensitivity, and visual disturbances. Spinal misalignments and upper-cervical nerve irritation are frequent contributors.",
              },
              {
                title: "Cervicogenic Headaches",
                description:
                  "Originating in the cervical spine, pain begins at the base of the skull and radiates upward. These respond exceptionally well to chiropractic care because the cause is structural.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Our Approach"
            title="Chiropractic Care for Headaches."
            body={[
              "Chiropractic adjustments restore proper alignment to the spine, particularly the cervical vertebrae that directly influence head and neck function. When the spine is misaligned, it can place undue pressure on surrounding nerves and restrict blood flow — both of which are known contributors to headaches and migraines.",
              "By gently correcting these misalignments, our chiropractors reduce nerve irritation, relieve the muscle tension that builds up across the neck, shoulders, and upper back, and improve the body's ability to heal itself. Many patients experience significant reduction in headache frequency and intensity after just a few visits.",
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Why Choose Natural Care"
            title="Benefits of Natural Headache Relief."
            cols={3}
            cards={[
              {
                title: "Drug-Free Relief",
                description:
                  "Effective relief without medications — no risk of side effects, dependency, or rebound headaches commonly associated with long-term pain medication use.",
              },
              {
                title: "Non-Invasive Treatment",
                description:
                  "Gentle, hands-on adjustments and therapeutic techniques rather than surgical intervention. Comfortable, safe, and suitable for patients of all ages.",
              },
              {
                title: "Addresses Root Causes",
                description:
                  "Rather than masking symptoms, chiropractic care targets the structural and functional issues that contribute to headaches — for lasting results and a healthier spine overall.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Find relief today"
            title="Find relief from headaches today."
            body="Schedule an appointment at Roselle Center For Healing and discover a natural path to lasting headache relief."
            image="https://images.unsplash.com/photo-1520206183501-b80df61043c2?w=1600&q=70&auto=format&fit=crop"
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
