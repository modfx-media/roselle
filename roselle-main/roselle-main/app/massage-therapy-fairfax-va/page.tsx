"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import Testimonials from "../components/Testimonials";
import PageHero from "../components/templates/PageHero";
import StatStrip from "../components/templates/StatStrip";
import FeatureSplit from "../components/templates/FeatureSplit";
import PillarSection from "../components/templates/PillarSection";
import FaqAccordion from "../components/templates/FaqAccordion";
import ImageCta from "../components/templates/ImageCta";

export default function MassageTherapyFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Massage Therapy · Fairfax, VA · Licensed & Integrated"
            title="Massage therapy in Fairfax, VA — not a spa, a clinical team."
            subtitle="Our licensed massage therapists in Fairfax coordinate directly with your chiropractor and acupuncturist. Every session has a clinical purpose: release the soft-tissue tension that holds structural dysfunction in place, speed recovery, and reduce pain signaling."
            crumbs={[{ label: "Home", href: "/" }, { label: "Massage Therapy", href: "/services/massage-therapy.html" }, { label: "Massage Therapy Fairfax, VA" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/close-up-cupping-therapy-experience.jpg.webp"
            imageAlt="Licensed massage therapy Fairfax VA at Roselle Center for Healing"
            primaryCta={{ label: "Book your massage", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "30+", label: "Years clinical massage in Fairfax" },
            { value: "3", label: "Massage types: therapeutic, sports, cupping" },
            { value: "Integrated", label: "Coordinates with chiropractic & acupuncture" },
            { value: "HSA/FSA", label: "Eligible when medically prescribed" },
          ]} />
          <FeatureSplit
            eyebrow="Clinical vs. spa massage"
            title="What makes therapeutic massage different — and why it matters."
            body={[
              "Spa massage is designed for relaxation. Clinical therapeutic massage is designed to address specific musculoskeletal dysfunction — trigger points, myofascial restrictions, lymphatic congestion, and post-injury adhesions. Our therapists know anatomy, pathology, and how their work intersects with chiropractic adjustments and acupuncture.",
              "When your chiropractor adjusts a subluxated vertebra, surrounding paraspinal muscles often resist the correction. A massage session 24 hours later releases that muscular resistance, allowing the adjustment to hold longer. This is why our patients heal faster than those who see a chiropractor or massage therapist in isolation.",
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg.webp"
            imageAlt="Clinical therapeutic massage at Roselle Center Fairfax VA"
            bullets={["Therapeutic, sports, and cupping massage available", "Integrated with chiropractic and acupuncture care plans", "Accepts most insurance when medically prescribed"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="What we offer"
            title="Three massage modalities — each with a specific clinical purpose."
            intro="Not all massage is the same. We use three distinct modalities, selected based on your condition, treatment phase, and how massage coordinates with your other care."
            cta={{ label: "Book your massage session", href: "/appointment" }}
            pillars={[
              { title: "Therapeutic massage", description: "Deep tissue and myofascial release for chronic muscle tension, injury adhesions, and postural dysfunction. This is the workhorse of clinical massage — precise, targeted, and focused on specific problem areas." },
              { title: "Sports massage", description: "Pre-event preparation (increasing circulation and mobility) and post-event recovery (flushing metabolic waste, reducing inflammation). Used extensively for Fairfax County athletes from high school level to adult recreational." },
              { title: "Cupping therapy", description: "Negative pressure cups applied to the back and shoulders decompress fascial layers, increase local circulation, and release myofascial restrictions that deep tissue massage cannot reach as effectively. Highly effective for chronic upper back tension common in desk workers." },
              { title: "Lymphatic drainage", description: "Gentle manual lymphatic drainage for post-surgical recovery, chronic swelling, and immune support — particularly relevant for patients with sinusitis, allergy-related congestion, and post-injury edema." },
            ]}
          />
          <Testimonials />
          <FaqAccordion
            eyebrow="Massage therapy patients ask"
            title="What Fairfax massage therapy patients want to know."
            tone="light"
            items={[
              { q: "How is therapeutic massage different from a spa massage?", a: "Therapeutic massage has a specific clinical goal: reducing a particular dysfunction, releasing a specific tissue restriction, or supporting recovery from injury or surgery. Our therapists document treatment notes, communicate with your chiropractor, and progress their approach as your condition improves. Spa massage is designed for relaxation and general wellness — both have value, but they serve different purposes." },
              { q: "Is massage therapy covered by insurance in Fairfax?", a: "Massage therapy is covered by many insurance plans when prescribed for a specific medical condition (back pain, cervical strain, auto accident injury, etc.). Most BlueCross BlueShield, Aetna, and Cigna plans have some massage benefit. Massage is always eligible for HSA and FSA payment. Our billing team will verify your specific coverage before your first session." },
              { q: "How often should I get therapeutic massage?", a: "During active care for pain or injury: 1–2 sessions per week, coordinated with your chiropractic visits. During maintenance: monthly sessions are typical for our regular patients. For athletes: varies by training load and competition schedule. We recommend frequency based on your clinical picture — not a generic protocol." },
              { q: "What is cupping therapy and does it hurt?", a: "Cupping creates negative pressure under silicone or glass cups applied to the skin, lifting the fascia and increasing circulation in the underlying tissues. The sensation is more pressure and warmth than pain — many patients find it deeply relaxing. The circular marks left by cups (petechiae) are normal and typically fade within 3–7 days. They are not bruises — they represent increased lymphatic activity in previously restricted tissue." },
              { q: "Can I get massage therapy after a car accident?", a: "Yes, and it's often one of the most important components of post-accident recovery. Whiplash produces significant soft-tissue injury to the neck, upper back, and shoulder muscles. Therapeutic massage, coordinated with cervical chiropractic care, addresses the muscular component of this injury. Auto insurance (Virginia MedPay or at-fault liability) typically covers massage as part of accident rehabilitation." },
            ]}
          />
          <ImageCta
            eyebrow="Massage therapy · Fairfax, VA"
            title="Clinical massage that coordinates with your full care plan."
            body="Roselle Center's massage therapists are part of a team — not isolated practitioners. Your massage sessions are designed to amplify the effect of your chiropractic and acupuncture care. Book today."
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your massage", href: "/appointment" }}
            secondaryCta={{ label: "View massage therapy page", href: "/services/massage-therapy.html" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
