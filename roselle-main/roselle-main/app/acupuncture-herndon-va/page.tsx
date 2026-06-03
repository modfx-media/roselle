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
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function AcupunctureHerndonVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Acupuncture · Near Herndon, VA · 15 Minutes Away"
            title="Acupuncture near Herndon, VA — integrated clinical care just 15 minutes away."
            subtitle="Herndon residents seeking acupuncture for pain, stress, or chronic conditions find a clinical-grade practice at Roselle Center in Fairfax — 15 minutes via Fairfax County Pkwy. Licensed acupuncturist, integrated with chiropractic and functional medicine."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/acupuncture-fairfax-va" },
              { label: "Acupuncture Near Herndon, VA" },
            ]}
            image="https://images.unsplash.com/photo-1616012480717-cfc9a3d40b41?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Acupuncture treatment near Herndon VA at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book an acupuncture session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "15 min", label: "From Herndon via Fairfax County Pkwy" },
              { value: "Licensed", label: "Acupuncturist on staff" },
              { value: "30+", label: "Years of integrative care in Northern Virginia" },
              { value: "Integrated", label: "With chiropractic & functional medicine" },
            ]}
          />

          <FeatureSplit
            eyebrow="Why Herndon patients choose Roselle Center"
            title="Acupuncture that connects to the rest of your care."
            body={[
              "Most acupuncture studios operate as standalone services. At Roselle Center, acupuncture is one component of an integrated clinical system — your acupuncturist knows what your chiropractor is treating, and vice versa. For Herndon tech workers dealing with the combination of neck tension, stress, and sleep disruption, this means the acupuncture protocol addresses all three simultaneously rather than picking one.",
              "Herndon-area patients frequently present with stress-related tension, insomnia, and the chronic cervical and upper back pain that accompanies the Dulles Corridor workday. Acupuncture's dual action — reducing local muscular tension and down-regulating the stress response through autonomic nervous system modulation — makes it particularly effective for this population.",
            ]}
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Integrated acupuncture and chiropractic care near Herndon VA at Roselle Center"
            bullets={[
              "Stress and cortisol reduction protocols",
              "Cervical and upper back tension acupuncture",
              "Sleep quality improvement with autonomic regulation points",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="What we treat"
            title="Conditions Herndon patients bring to our acupuncture practice."
            intro="Acupuncture addresses a broader range of conditions than most patients expect. Here are the primary presentations we see from Herndon and Reston-area patients."
            cta={{ label: "Learn about our acupuncture approach", href: "/acupuncture-fairfax-va" }}
            pillars={[
              {
                title: "Neck and upper back pain",
                description:
                  "The most common presentation from Herndon's tech corridor — cervical paraspinal needling reduces local inflammation and neuromuscular tension. Coordinated with chiropractic for joint dysfunction gives faster and more durable outcomes than either alone.",
              },
              {
                title: "Stress, anxiety, and sleep",
                description:
                  "Herndon's high-pressure work environment correlates with measurable HPA-axis dysregulation. Acupuncture at specific auricular and body points reduces cortisol, activates vagal tone, and improves sleep architecture in ways that don't require medication.",
              },
              {
                title: "Migraine and headache prevention",
                description:
                  "A 2022 Cochrane review found acupuncture as effective as preventive medication for migraine. For Herndon's screen-heavy workforce producing both tension and migraine headaches, acupuncture is a drug-free prophylactic that can significantly reduce episode frequency.",
              },
              {
                title: "Digestive and hormonal conditions",
                description:
                  "IBS, acid reflux, thyroid dysfunction, and hormonal irregularities — common systemic conditions in a chronically stressed population — have established acupuncture protocols. We integrate these with our functional medicine approach for patients with complex presentations.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Herndon patients ask"
            title="Acupuncture questions from the Herndon and Reston area."
            tone="light"
            items={[
              {
                q: "How much does acupuncture cost near Herndon, VA?",
                a: "Sessions at Roselle Center are priced in line with Northern Virginia market rates — typically $80–$140 per individual session. Many BCBS, Aetna, and Cigna plans cover acupuncture for chronic pain. Federal employee plans (FEHB), which serve a significant portion of the Herndon workforce, frequently include acupuncture benefits. HSA and FSA funds can be used for acupuncture. Call (703) 698-7117 to verify your specific coverage before your first appointment.",
              },
              {
                q: "Is acupuncture safe?",
                a: "Yes. Acupuncture performed by a licensed acupuncturist using sterile, single-use needles has an exceptional safety record. Serious adverse events are extremely rare — significantly rarer than comparable pharmaceutical interventions for the same conditions. Minor side effects include occasional bruising at needle sites and mild soreness after the first 1–2 sessions. We use FDA-regulated sterile needles and follow strict clean-needle technique protocols.",
              },
              {
                q: "What conditions does acupuncture treat most effectively?",
                a: "The strongest evidence base for acupuncture includes: chronic pain (back, neck, osteoarthritis), migraine prevention, tension headaches, chemotherapy-induced nausea, and post-operative pain. Growing evidence supports acupuncture for: anxiety, insomnia, menopausal symptoms, IBS, and dysautonomia. At Roselle Center, we're honest about the evidence — we'll tell you where acupuncture is a strong first-line choice and where it's better as an adjunct to other treatments.",
              },
              {
                q: "Can I get acupuncture if I'm on blood thinners?",
                a: "Yes, with modified technique. Patients on anticoagulants (Eliquis, warfarin, Xarelto) require shallower needle insertion and avoidance of high-vascularity points. Our acupuncturist has extensive experience managing this safely. We recommend informing your prescribing physician and, if on warfarin, having a recent INR value. Coordinate with your cardiologist if you have any concerns — we're happy to speak with them directly.",
              },
              {
                q: "How many acupuncture sessions will I need?",
                a: "Acute conditions (new injury, recent-onset pain) typically respond within 4–6 sessions. Chronic conditions (long-standing pain, recurring migraines, chronic stress and sleep disorders) require an initial course of 10–12 sessions before reassessment. We track measurable outcomes — pain scores, sleep quality, functional ability — and don't recommend continuing care that isn't producing objective improvement. There are no indefinite open-ended treatment commitments at our practice.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Acupuncture near Herndon, VA"
            title="Integrated acupuncture care — 15 minutes from Herndon via Fairfax County Pkwy."
            body="Roselle Center for Healing has served Northern Virginia's communities with clinical acupuncture for over 30 years. Herndon and Reston patients: same-week appointments available. Call (703) 698-7117."
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
