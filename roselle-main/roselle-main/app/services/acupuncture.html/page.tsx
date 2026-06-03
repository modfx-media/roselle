"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function AcupuncturePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Acupuncture · Fairfax, VA"
            title="Acupuncture: pain relief & wellness, naturally."
            subtitle="An ancient practice meets modern integrative care for safe, drug-free healing."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Acupuncture" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/acupuncture.png.webp?370ea31548f3e6120912ccbd9441e91f"
            imageAlt="Woman receiving acupuncture treatment."
            primaryCta={{ label: "Book a session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Drug-free", label: "Therapy" },
              { value: "Whole-body", label: "Care" },
              { value: "Time-tested", label: "Practice" },
              { value: "Personalized", label: "Plans" },
            ]}
          />

          <FeatureSplit
            eyebrow="A Natural Path to Relief"
            title="Acupuncture in Fairfax, VA."
            body="At Roselle Center for Healing, patients discover that healing doesn't always come in the form of medication or surgery. Under the guidance of Dr. Tom Roselle, the center combines chiropractic care with holistic therapies like acupuncture to address pain, restore balance, and improve overall well-being."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/acupuncture.png.webp?370ea31548f3e6120912ccbd9441e91f"
            imageAlt="Acupuncture session."
          />

          <PillarSection
            tone="dark"
            eyebrow="Traditional Chinese Medicine"
            title="What is acupuncture?"
            intro="Acupuncture is an ancient practice rooted in Traditional Chinese Medicine that focuses on stimulating specific points in the body to promote healing. Today, it's widely recognized as a safe, effective therapy for managing pain, reducing stress, and improving circulation."
            cta={{ label: "Book a session", href: "/appointment" }}
            pillars={[
              { title: "Ancient origins", description: "Rooted in Traditional Chinese Medicine and refined over thousands of years of practice." },
              { title: "Targeted points", description: "Stimulates specific points in the body to trigger your natural healing response." },
              { title: "Safe & effective", description: "A modern, widely-recognized therapy for pain, stress, and circulation issues." },
              { title: "Drug-free", description: "Whole-body healing without medication or invasive procedures." },
            ]}
          />

          <FeatureGrid
            eyebrow="Pain Management"
            title="Acupuncture for back pain & sciatica."
            intro="Chronic discomfort is one of the most common reasons people seek acupuncture."
            cols={2}
            cards={[
              { title: "Acupuncture for Back Pain", description: "Stimulates blood flow, eases tension, and reduces inflammation in the spine and muscles." },
              { title: "Acupuncture for Sciatica", description: "Helps relieve nerve compression, reduce radiating pain down the legs, and support the body's healing response." },
            ]}
          />

          <ChecklistSplit
            eyebrow="Integrative Care"
            title="Why choose Roselle Center for Healing?"
            body="Unlike a standard clinic, Roselle Center for Healing offers integrative care where multiple disciplines work together for your benefit. Whether it's chiropractic adjustments, nutritional counseling, or acupuncture therapy — the focus is on treating the root cause of discomfort, not masking symptoms."
            image="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Acupuncture needles arranged on a treatment table."
            items={[
              "Multiple disciplines working together for you",
              "Treats the root cause, not just symptoms",
              "Safe, effective therapies under one roof",
              "Compassionate, skilled care from Dr. Tom Roselle's team",
            ]}
          />

          <ImageCta
            eyebrow="Take the next step"
            title="Take the next step toward relief."
            body="If you're struggling with ongoing discomfort or searching for natural options for healing, acupuncture could be the answer."
            image="https://images.unsplash.com/photo-1591343395082-e120087004b4?w=1600&q=70&auto=format&fit=crop"
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
