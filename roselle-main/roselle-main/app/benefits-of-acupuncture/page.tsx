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
import PillarSection from "../components/templates/PillarSection";
import ImageCta from "../components/templates/ImageCta";

export default function BenefitsOfAcupuncturePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Benefits of Acupuncture · Fairfax, VA"
            title="Acupuncture: ancient healing, modern results."
            subtitle="Safe, effective therapy for chronic pain, stress, and overall wellness."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Acupuncture", href: "/services/acupuncture.html" },
              { label: "Benefits of Acupuncture" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/acupuncture.jpg.webp?8904b15aa078859b7c3bd086a02a1c3a"
            imageAlt="Acupuncture session."
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
            eyebrow="Ancient Healing"
            title="Benefits of Acupuncture."
            body="Acupuncture has been used for thousands of years to restore balance, relieve pain, and promote overall wellness. Today, it's recognized by modern medicine as a safe, effective therapy for a wide range of conditions — from chronic pain to stress and fatigue. At Roselle Center for Healing in Fairfax, VA, our experienced practitioners use acupuncture as part of an integrated approach to help patients heal naturally."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/acupuncture.jpg.webp?8904b15aa078859b7c3bd086a02a1c3a"
            imageAlt="Acupuncture model."
          />

          <PillarSection
            tone="dark"
            eyebrow="About"
            title="What Is Acupuncture?"
            intro={`Acupuncture is a key component of traditional Chinese medicine that involves the gentle insertion of very fine, sterile needles into specific points on the body. These points are believed to influence the flow of energy — or “Qi” — through pathways called meridians. From a scientific standpoint, acupuncture helps stimulate the nervous system, increase circulation, and release endorphins, the body's natural pain relievers. It's a natural, drug-free option for people seeking relief from both acute and chronic conditions.`}
            cta={{ label: "Book a session", href: "/appointment" }}
            pillars={[
              { title: "Meridian flow", description: "Influences the flow of energy through the body's pathways." },
              { title: "Nervous system", description: "Stimulates and rebalances the body's signaling." },
              { title: "Circulation", description: "Improves blood flow to tissues that need healing." },
              { title: "Endorphins", description: "Releases the body's natural pain-relieving chemistry." },
            ]}
          />

          <FeatureGrid
            eyebrow="Conditions Treated"
            title="Common conditions acupuncture can help."
            intro="Acupuncture is widely used for relief and recovery across many concerns."
            cols={3}
            cards={[
              { title: "Back & Neck Pain", description: "Targeted needling for chronic and acute musculoskeletal pain." },
              { title: "Sciatica & Nerve Pain", description: "Reduce nerve irritation and improve mobility." },
              { title: "Migraines & Headaches", description: "A drug-free option for recurring headache patterns." },
              { title: "Arthritis & Joint Pain", description: "Reduce inflammation and improve range of motion." },
              { title: "Stress, Anxiety & Sleep", description: "Restore balance, calm the nervous system, and improve sleep." },
              { title: "Whole-Body Wellness", description: "Support digestion, energy, and recovery for overall health." },
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Healing Process"
            title="How Acupuncture Supports Healing."
            body={[
              "When performed by trained professionals, acupuncture works to bring the body back into balance. It improves blood flow, reduces inflammation, and supports the body's natural healing processes. Many patients notice improvements in pain, energy levels, and even digestion after just a few sessions.",
              "At Roselle Center for Healing, acupuncture is often combined with chiropractic care, nutrition, and lifestyle guidance for a complete, whole-body approach. This collaboration addresses not just symptoms but underlying causes — helping you achieve long-lasting relief.",
            ]}
          />

          <ContentBlock
            eyebrow="Your First Visit"
            title="What to Expect During Treatment."
            body="Your first acupuncture session begins with a thorough consultation. Your provider will take time to understand your health history, concerns, and goals before creating a personalized treatment plan. Most patients describe the sensation as relaxing, and many feel a sense of calm and balance afterward."
          />

          <ImageCta
            eyebrow="Experience it"
            title="Call our chiropractors near you."
            body="Discover how acupuncture can support your body's natural ability to heal. Call (703) 698-7117 today to schedule your appointment and take the next step toward better health — naturally."
            image="https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=1600&q=70&auto=format&fit=crop"
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
