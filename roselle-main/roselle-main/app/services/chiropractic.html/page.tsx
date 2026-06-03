"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import PillarSection from "@/app/components/templates/PillarSection";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function ChiropracticPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1 service-page-shell">
          <PageHero
            eyebrow="Chiropractic Care · Fairfax, VA"
            title="Move better. Live more freely."
            subtitle="Chiropractic care is one of the most common methods used to treat ailments of the spine and nervous system — and it's an effective approach for many other conditions, too. We treat patients in Fairfax, Vienna, Falls Church, Alexandria, Tysons Corner and Merrifield, VA."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Chiropractic" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x714_80/webmgr/0g/5/2/chiro-care.jpg.webp?f9393c8f6c680007b73fbb4678628f8b"
            imageAlt="Chiropractor performing a leg manipulation on a patient in a calming treatment room."
            primaryCta={{ label: "Book an adjustment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years of practice" },
              { value: "Drug-free", label: "Whole-body care" },
              { value: "10k+", label: "Patients helped" },
              { value: "5★", label: "Reviewed care" },
            ]}
          />

          <FeatureSplit
            eyebrow="Comprehensive treatment"
            title="Chiropractic care goes beyond pain relief."
            body="Chiropractic care is one of the most common methods used to treat ailments of the spine and nervous system. But it's also effective for neuro immunology, chronic pain, neuro-visceral problems and immune support. We at Roselle Center for Healing treat many patients across Northern Virginia who experience pain and discomfort."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x714_80/webmgr/0g/5/2/chiro-care.jpg.webp?f9393c8f6c680007b73fbb4678628f8b"
            imageAlt="Chiropractor performing a leg manipulation in a bright treatment room."
            bullets={[
              "Spine & nervous system optimization",
              "Chronic pain & immune support",
              "Whole-body, drug-free approach",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Pain relief"
            title="Chiropractic techniques for back pain relief."
            intro="The primary spinal structural segmental disrelation that chiropractic is concerned with is known as spinal subluxation. Chiropractic care uses a variety of techniques to reduce the subluxation complex and provide pain relief."
            cta={{ label: "Book an adjustment", href: "/appointment" }}
            pillars={[
              { title: "Manual adjustments", description: "Specific, hands-on spinal adjustments to restore alignment and ease pain." },
              { title: "Joint mobilization", description: "Gentle techniques that improve joint motion and reduce stiffness." },
              { title: "Spinal decompression", description: "Targeted decompression to relieve nerve pressure and disc-related pain." },
              { title: "Physio & massage", description: "Sacral cranial technique, physio-therapeutics, and massage therapy as needed." },
            ]}
          />

          <ChecklistSplit
            eyebrow="Mobility"
            title="Chiropractic care helps improve your mobility."
            body="Through a thorough chiropractic analysis our chiropractors may assess your body and determine that you would benefit from improving your mobility. Exercises and stretches strengthen the muscles and ligaments around the spine — helping prevent future injuries."
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Chiropractor guiding a patient through gentle spinal mobilization."
            items={[
              "Gentle strain / counter strain stretching",
              "Improved flexibility and range of motion",
              "Targeted rehab exercises for the spine",
              "Stronger muscles and ligaments to prevent re-injury",
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Integrative healthcare"
            title="Chiropractic care offers integrative healthcare."
            body={[
              "In addition to providing pain relief, chiropractic care offers a variety of other health benefits. It's an integrative healthcare approach that can help to improve your overall health and well-being. We look for evidence of injury, biochemical / bioelectrical imbalance and emotional stress as the trigger of any spinal and structural distortion.",
              "Additional benefits include posture improvement, stress relief, and reduction of inflammation. It can also help to improve your sleep quality, boost your energy levels, and promote natural healing.",
              "If you're looking for an integrative healthcare approach that can help you achieve optimal health, chiropractic care may be the right choice for you. You'll soon see that chiropractic care is about much more than chiropractic adjustments.",
            ]}
          />

          <FeatureGrid
            eyebrow="Conditions we help with"
            title="How chiropractic care can help."
            intro="Treatment is helpful for a wide range of conditions — from acute injuries to chronic, system-wide issues."
            cols={3}
            cards={[
              { title: "Headaches", description: "Tension, migraine, and cervicogenic headaches relieved through targeted adjustments and posture work." },
              { title: "Sports Injuries", description: "Get back in motion with rehab-focused care designed around your sport and recovery timeline." },
              { title: "Allergies", description: "Restoring proper nervous system function can help the body better regulate immune responses." },
              { title: "Chronic Pain", description: "A whole-body protocol that addresses the root cause, not just the surface symptom." },
              { title: "Immune Support", description: "Adjustments support the nervous system pathways that regulate immune function." },
              { title: "Back, Neck & Shoulder Pain", description: "The classic chiropractic specialty — gentle, precise care to restore alignment and ease pain." },
            ]}
          />

          <ImageCta
            eyebrow="Get started"
            title="Contact us for an appointment today."
            body="Chiropractic treatment is a way to treat many common ailments. If you're looking for an alternative to traditional medicine, you may find our methods helpful. Patients from Fairfax, Falls Church, Merrifield, Arlington and Vienna, VA find pain relief — and more."
            image="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1600&q=70&auto=format&fit=crop"
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
