"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import Testimonials from "@/app/components/Testimonials";
import PageHero from "@/app/components/templates/PageHero";
import StatStrip from "@/app/components/templates/StatStrip";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import PillarSection from "@/app/components/templates/PillarSection";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import ImageCta from "@/app/components/templates/ImageCta";

export default function AcupunctureFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Acupuncture · Fairfax, VA · Licensed & Certified"
            title="Acupuncture in Fairfax, VA — where ancient practice meets clinical precision."
            subtitle="Our licensed acupuncturist Dr. Mark Zhang, MS, LAc integrates traditional Chinese medicine techniques with a modern clinical framework to address pain, inflammation, stress, and chronic conditions."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Acupuncture Fairfax, VA" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/close-up-cupping-therapy-experience.jpg.webp"
            imageAlt="Licensed acupuncturist at Roselle Center for Healing Fairfax VA"
            primaryCta={{ label: "Book an acupuncture session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years of healing in Fairfax" },
              { value: "Dual", label: "Licensed: MD & Acupuncture" },
              { value: "90%", label: "Less inflamed in months*" },
              { value: "5★", label: "Patient-rated acupuncture" },
            ]}
          />

          <FeatureSplit
            eyebrow="What acupuncture treats"
            title="More than pain relief — systemic regulation."
            body={[
              "Most patients come to us for pain — back, neck, joint, migraine. They stay because acupuncture does something broader: it regulates the nervous system, reduces systemic inflammation, improves sleep quality, and restores the body's capacity to self-regulate.",
              "At Roselle Center, acupuncture is never a standalone procedure. It's integrated with your chiropractic care, nutritional plan, or massage protocol — so every needle serves a purpose within your overall treatment plan.",
            ]}
            image="https://images.unsplash.com/photo-1616012480717-cfc9a3d40b41?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Acupuncture session at Roselle Center for Healing in Fairfax VA"
            bullets={[
              "FDA-approved sterile, single-use needles only",
              "Pain-free technique adapted to individual sensitivity",
              "Traditional meridian points and trigger point protocols",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Conditions treated"
            title="What Fairfax patients use acupuncture for."
            intro="Acupuncture has a strong evidence base for pain management and growing evidence for systemic conditions. Here are the primary conditions our Fairfax patients present with."
            cta={{ label: "Read the benefits of acupuncture", href: "/benefits-of-acupuncture" }}
            pillars={[
              {
                title: "Chronic back & neck pain",
                description:
                  "Multiple randomized controlled trials show acupuncture reduces chronic low back pain as effectively as conventional treatment — with better long-term outcomes and no side effects.",
              },
              {
                title: "Migraine & tension headaches",
                description:
                  "Acupuncture reduces headache frequency and severity. A 2022 Cochrane review found acupuncture at least as effective as prophylactic drug treatment for migraines.",
              },
              {
                title: "Stress & anxiety",
                description:
                  "Needling specific points reduces cortisol, activates the parasympathetic nervous system, and improves heart rate variability — measurable markers of stress reduction.",
              },
              {
                title: "Arthritis & joint pain",
                description:
                  "Local and distal point protocols reduce joint inflammation and improve range of motion in osteoarthritis, particularly of the knee, hip, and shoulder.",
              },
              {
                title: "Sciatica & nerve pain",
                description:
                  "Acupuncture combined with chiropractic care addresses both the structural compression and the resulting nerve hypersensitivity — a more complete approach than either alone.",
              },
              {
                title: "Immune & hormonal support",
                description:
                  "Allergy relief, thyroid support, and hormonal balance are well-established applications of traditional Chinese medicine acupuncture protocols.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Acupuncture & your safety"
            title="Common questions answered honestly."
            tone="light"
            body={[
              "We know some patients arrive with legitimate questions about safety, drug interactions, and whether acupuncture is right for their specific situation. Here's our honest, clinical position on the most common concerns.",
            ]}
          />

          <ChecklistSplit
            eyebrow="Safety & special populations"
            title="When acupuncture requires extra care."
            body="Acupuncture is safe for most people. In a handful of clinical situations, we adjust technique, needle placement, or defer to your primary care physician. Transparency is part of our practice."
            image="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Safe acupuncture protocol for patients with medical considerations"
            tone="light"
            items={[
              "Blood thinners (Eliquis, Warfarin): We use modified shallow-insertion techniques and coordinate with your prescribing physician",
              "Post-surgical care: Acupuncture is generally safe 4–6 weeks after surgery with physician clearance",
              "Pregnancy: Specific points are avoided; we offer a prenatal acupuncture protocol",
              "Pacemakers: Compatible with acupuncture (but not with electro-acupuncture)",
              "Active infections or open wounds: We work around affected areas",
              "Cancer patients: We coordinate with your oncology team; lymph node areas are avoided after removal",
            ]}
          />

          <Testimonials />

          <FaqAccordion
            eyebrow="Frequently asked"
            title="Acupuncture questions from Fairfax patients."
            intro="These are the questions our new patients ask most often. Direct answers only."
            tone="dark"
            items={[
              {
                q: "What is the average cost for an acupuncture session in Fairfax, VA?",
                a: "Individual acupuncture sessions at our Fairfax practice are priced in line with Northern Virginia market rates ($80–$140 per session). Many BlueCross BlueShield, Aetna, and Cigna plans now cover acupuncture for chronic pain conditions. Acupuncture is also eligible for HSA/FSA reimbursement. Call us at (703) 698-7117 and we'll verify your specific coverage before your first appointment.",
              },
              {
                q: "Can I get acupuncture if I take Eliquis or other blood thinners?",
                a: [
                  "Yes, with appropriate precautions. Acupuncture while on anticoagulants like Eliquis (apixaban) or warfarin requires modified technique: shallower needle insertion, avoidance of certain high-vascularity points, and careful monitoring.",
                  "Our licensed acupuncturist has extensive experience treating patients on blood thinners safely. We recommend informing your prescribing physician and, ideally, getting a brief note documenting your current INR or medication dose. We work collaboratively with your care team.",
                ],
              },
              {
                q: "Can acupuncture help dysautonomia or POTS?",
                a: "Yes. Acupuncture's influence on autonomic nervous system regulation is one of its most clinically interesting applications. For dysautonomia (including POTS — postural orthostatic tachycardia syndrome), needling at points that activate the vagus nerve and support parasympathetic tone has shown measurable improvements in heart rate variability and symptom severity in observational studies. We've treated patients with dysautonomia successfully as part of a broader integrative care plan.",
              },
              {
                q: "How many acupuncture sessions do I need?",
                a: "Acute conditions (recent injury, acute pain) typically respond in 4–6 sessions. Chronic conditions usually require a 10–12 session initial course before reassessment. We use measurable outcome markers — pain scales, range of motion, functional ability — to track your progress objectively. There are no open-ended treatment commitments at Roselle Center.",
              },
              {
                q: "Does acupuncture hurt?",
                a: "Most patients feel little to no pain. Acupuncture needles are 25–40x thinner than hypodermic needles — many patients are surprised by how tolerable the sensations are. You may feel a mild pressure, warmth, or dull ache at certain points, which is the intended 'de qi' sensation indicating the needle is in the correct position. We work at your pace and adjust pressure based on your feedback.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Acupuncture Fairfax, VA"
            title="Ready to experience the difference integrated acupuncture makes?"
            body="Roselle Center for Healing has been treating Northern Virginia patients with acupuncture for over 30 years. Our approach isn't template care — it's a coordinated plan built around your specific condition, history, and goals."
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your session", href: "/appointment" }}
            secondaryCta={{ label: "Read acupuncture benefits", href: "/benefits-of-acupuncture" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
