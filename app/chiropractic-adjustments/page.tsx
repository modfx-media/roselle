"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import FeatureSplit from "../components/templates/FeatureSplit";
import ContentBlock from "../components/templates/ContentBlock";
import FeatureGrid from "../components/templates/FeatureGrid";
import StatStrip from "../components/templates/StatStrip";
import ImageCta from "../components/templates/ImageCta";

export default function ChiropracticAdjustmentsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractic Adjustments · Fairfax, VA"
            title="Chiropractic adjustments at Roselle Center for Healing."
            subtitle="Precise, controlled corrections that restore alignment and support natural healing."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Chiropractic", href: "/services/chiropractic.html" },
              { label: "Chiropractic Adjustments" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/chiro-adjustment.jpg.webp?7a9c86ea54bfadced91b1bda5c6a16b9"
            imageAlt="Chiropractic adjustment in progress."
            primaryCta={{ label: "Book an adjustment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Holistic", label: "Approach" },
              { value: "Drug-free", label: "Care" },
              { value: "Personalized", label: "Plans" },
              { value: "Lasting", label: "Wellness" },
            ]}
          />

          <FeatureSplit
            eyebrow="Holistic Wellness"
            title="Chiropractic Adjustments in Fairfax, VA."
            body="At Roselle Center for Healing in Fairfax, VA, patients discover a holistic approach to wellness that focuses on the body's natural ability to heal. Under the direction of Dr. Tom Roselle, the center provides a wide range of therapies — with chiropractic adjustments being one of the most trusted and effective methods of care."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/chiro-adjustment.jpg.webp?7a9c86ea54bfadced91b1bda5c6a16b9"
            imageAlt="Chiropractic adjustment care."
          />

          <ContentBlock
            tone="dark"
            eyebrow="About the Treatment"
            title="What Are Chiropractic Adjustments?"
            body="Chiropractic adjustments involve precise, controlled movements that restore proper alignment to the spine and joints. These gentle corrections help reduce pressure on nerves, improve mobility, and support the body's natural healing processes — care tailored to your unique needs."
          />

          <FeatureGrid
            eyebrow="Key Benefits"
            title="Benefits of Chiropractic Care."
            intro="Many people seek chiropractic adjustment services to address common issues such as:"
            cols={2}
            cards={[
              { title: "Back & Neck Pain", description: "Targeted adjustments and supportive therapies for relief from chronic and acute back and neck issues." },
              { title: "Headaches & Migraines", description: "Address musculoskeletal causes contributing to headache patterns." },
              { title: "Sciatica & Nerve Pain", description: "Reduce pressure on the sciatic nerve through gentle, precise adjustments." },
              { title: "Joint Stiffness", description: "Improve mobility and restore healthy joint function for daily comfort." },
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Integrative Care"
            title="Why Choose Roselle Center for Healing?"
            body="Unlike a typical clinic, Roselle Center for Healing offers an integrative approach where chiropractors collaborate with other health professionals to provide comprehensive care. Your treatment plan may include chiropractic care alongside acupuncture, nutrition, or physical rehabilitation — for lasting results."
          />

          <ImageCta
            eyebrow="Schedule today"
            title="Schedule your chiropractic adjustment today."
            body="Ready to experience the benefits of chiropractic adjustments? Call Dr. Tom Roselle and his team to take the first step toward better health and a pain-free lifestyle."
            image="https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=1600&q=70&auto=format&fit=crop"
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
