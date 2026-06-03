"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import ImageCta from "@/app/components/templates/ImageCta";

export default function IntegrativeHealthPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Integrative Health · Fairfax, VA"
            title="Chiropractic & integrative health for whole-body wellness."
            subtitle="A client-centered approach blending evidence-based therapies with holistic care."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions Treated", href: "/where-is-your-pain" },
              { label: "Integrative Health" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Integrative health consultation."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "Whole-person", label: "Care" },
              { value: "Evidence-based", label: "Therapies" },
              { value: "Personalized", label: "Plans" },
              { value: "Preventive", label: "Focus" },
            ]}
          />

          <ContentBlock
            eyebrow="Our Approach"
            title="Integrative Health Approach at Roselle Center for Healing."
            body="Integrative health is a client-centered approach to promoting optimal well-being and overall health. It combines evidence-based strategies with a holistic perspective to reduce disease risk through lifestyle behaviors. This comprehensive approach focuses on integrating various modalities and therapies to promote overall well-being."
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Why Integrative"
            title="Benefits, Care & Beliefs."
            cols={3}
            cards={[
              {
                title: "Benefits of Integrative Health",
                description:
                  "Manage chronic conditions, reduce symptoms, improve quality of life, and enhance the body's natural healing abilities — care built around each person's unique needs.",
              },
              {
                title: "Integrative Health in Chiropractic Care",
                description:
                  "A holistic, multidimensional approach — particularly in chronic pain relief and injury treatment. Manual techniques, adjustments, and therapeutic modalities restore alignment, mobility, and function.",
              },
              {
                title: "Core Beliefs",
                description:
                  "We combine the best practices from conventional medicine and complementary therapies, considering each patient's needs, preferences, and circumstances.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Modalities"
            title="Modalities and Therapies."
            body="Integrative health uses various modalities and therapies — stress management, physical therapy, acupuncture, chiropractic care, massage therapy, and sports medicine. The goal is evidence-based practices that are safe, effective, and positively impact the individual's health and well-being."
          >
            <ul className="mt-s4 grid grid-cols-2 gap-s2 text-sm text-fg/70 max-w-[640px]">
              {["Stress management", "Physical therapy", "Acupuncture", "Chiropractic care", "Massage therapy", "Sports medicine"].map((m) => (
                <li key={m} className="flex items-center gap-s2"><span className="w-1.5 h-1.5 rounded-full bg-accent" />{m}</li>
              ))}
            </ul>
          </ContentBlock>

          <FeatureGrid
            tone="dark"
            eyebrow="How We Care"
            title="Partnership & Prevention."
            cols={2}
            cards={[
              {
                title: "Partnership Between Provider and Patient",
                description:
                  "Our injury treatment chiropractor will work with you to offer support, education, and expertise to help you achieve your health goals.",
              },
              {
                title: "Preventive Care & Lifestyle",
                description:
                  "Many chronic conditions can be prevented or managed through healthy behaviors — balanced diet, sleep, and regular exercise. We treat existing issues and help prevent future ones.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Patient-Centric"
            title="A Patient-Centric Integrative Health Approach."
            body="Functional medicine addresses the underlying causes of disease and dysfunction, rather than merely managing symptoms. By considering lifestyle, nutrition, stress, and overall wellness, our chiropractors strive to optimize the body's functioning and promote overall health."
          />

          <ImageCta
            eyebrow="Contact us"
            title="Contact Integrative Health at Roselle Center for Healing."
            body="We blend chiropractic care and functional medicine to relieve chronic pain so injuries or underlying conditions don't ruin your quality of life. Call our office at (703) 698-7117 to learn more."
            image="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=70&auto=format&fit=crop"
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
