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

export default function AcupunctureViennaVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Acupuncture · Near Vienna, VA · 10 Minutes Away"
            title="Acupuncture near Vienna, VA — where clinical precision meets traditional medicine."
            subtitle="Vienna residents find integrative acupuncture care at Roselle Center in Fairfax — just 10 minutes via I-66 or Maple Avenue. Our licensed acupuncturist treats pain, hormonal conditions, stress, and chronic illness within a fully integrated clinical framework."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/acupuncture-fairfax-va" },
              { label: "Acupuncture Near Vienna, VA" },
            ]}
            image="https://images.unsplash.com/photo-1616012480717-cfc9a3d40b41?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Acupuncture near Vienna VA at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book an acupuncture session", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "10 min", label: "From Vienna via I-66 or Maple Ave" },
              { value: "Licensed", label: "Virginia-certified acupuncturist" },
              { value: "30+", label: "Years of integrative care in Northern Virginia" },
              { value: "HSA/FSA", label: "Eligible for reimbursement" },
            ]}
          />

          <FeatureSplit
            eyebrow="Why Vienna patients choose Roselle Center"
            title="Acupuncture integrated with chiropractic and functional medicine."
            body={[
              "Vienna is a family-oriented community with a high proportion of federal government professionals, dual-income households, and active families. The health concerns we see most from Vienna residents reflect this demographic: hormonal imbalances and fertility support, stress and sleep issues in working parents, pediatric concerns, and the musculoskeletal effects of active family life.",
              "Unlike a standalone acupuncture studio, Roselle Center integrates acupuncture with chiropractic and functional medicine under one roof. Your acupuncturist and chiropractor coordinate on your care — which means a patient dealing with both hormonal irregularity and lower back pain gets a plan that addresses both systemically, not one at a time.",
            ]}
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Integrated acupuncture care near Vienna VA - coordinated with chiropractic"
            bullets={[
              "Hormonal and reproductive health acupuncture protocols",
              "Stress and sleep regulation for working families",
              "Pediatric-adapted acupuncture for appropriate age groups",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="What we treat"
            title="Conditions Vienna patients bring to our acupuncture practice."
            intro="Vienna's community health profile shapes the conditions we focus on. Here's what we most commonly address for patients coming from the Vienna area."
            cta={{ label: "Learn about our full acupuncture approach", href: "/acupuncture-fairfax-va" }}
            pillars={[
              {
                title: "Pain and musculoskeletal conditions",
                description:
                  "Chronic back and neck pain, joint pain, sciatica, and headaches — the most common acupuncture indications. We coordinate with chiropractic for patients with structural contributors, using acupuncture to address neural sensitization and residual inflammation that manual therapy alone doesn't fully resolve.",
              },
              {
                title: "Hormonal health and fertility",
                description:
                  "Acupuncture has a growing evidence base for menstrual irregularity, PCOS, perimenopause, and fertility support. TCM protocols targeting kidney, liver, and spleen meridians support hormonal regulation in ways that complement both conventional care and our functional medicine approach.",
              },
              {
                title: "Stress, burnout, and sleep",
                description:
                  "Vienna's professional families often carry chronic stress that disrupts cortisol patterns, sleep quality, and immune function. Acupuncture's vagal activation and HPA-axis modulation provides measurable physiological change — not just subjective relaxation.",
              },
              {
                title: "Immune and allergy conditions",
                description:
                  "Acupuncture for allergic rhinitis and immune regulation has established protocols. For Vienna residents dealing with Northern Virginia's pollen seasons, acupuncture is a drug-free adjunct that reduces histamine response and nasal inflammation.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Vienna patients ask"
            title="Acupuncture questions from the Vienna, VA community."
            tone="light"
            items={[
              {
                q: "How much do acupuncture sessions cost near Vienna, VA?",
                a: "Sessions at Roselle Center are $80–$140 per visit for individual sessions, in line with Northern Virginia market rates. Initial consultations may vary. Many BCBS, Aetna, and Cigna plans cover acupuncture for chronic pain conditions, and federal employee plans (FEHB) frequently include acupuncture benefits. HSA and FSA funds are eligible. We verify your specific insurance coverage before your first visit — call (703) 698-7117.",
              },
              {
                q: "Can acupuncture help with hormonal imbalances?",
                a: [
                  "Yes. Traditional Chinese medicine has specific, well-developed protocols for hormonal health — addressing conditions including PCOS, luteal phase deficiency, irregular cycles, perimenopause, and thyroid dysfunction. From a Western clinical perspective, acupuncture influences the hypothalamic-pituitary-ovarian (HPO) axis, modulates cortisol, and reduces systemic inflammation — all of which affect hormonal balance.",
                  "At Roselle Center, we often combine acupuncture with our functional medicine approach for hormonal cases: identifying nutritional deficiencies, thyroid dysfunction, and adrenal patterns through thermography and clinical assessment, then using both acupuncture and targeted nutrition to address the multiple contributors to hormonal imbalance.",
                ],
              },
              {
                q: "Is acupuncture safe for children?",
                a: "Yes, with age-appropriate technique adaptation. Pediatric acupuncture uses fewer needles, shallower insertion, and shorter retention times than adult protocols. For younger children (under 8), we often use non-insertive acupressure tools or shonishin (Japanese pediatric technique using instruments rather than needles) as an introduction. Common pediatric indications include: recurring ear infections, allergies, bedwetting, digestive issues, and anxiety. We assess the child's comfort level and adapt the entire session accordingly.",
              },
              {
                q: "How is acupuncture different from dry needling?",
                a: "Dry needling uses acupuncture needles but within a purely Western anatomical framework — targeting trigger points in muscles to release myofascial tension. Traditional acupuncture uses a comprehensive diagnostic system (TCM) with meridian points that address both local and systemic conditions. Dry needling is performed by PTs and some chiropractors; licensed acupuncturists receive 3–4 years of specialized training in the full TCM system. At Roselle Center, our licensed acupuncturist applies both local trigger-point protocols and systemic TCM approaches — providing the breadth of both systems.",
              },
              {
                q: "How do I get to Roselle Center from Vienna?",
                a: "From Vienna, Roselle Center is approximately 10 minutes away. Two easy routes: (1) Take I-66 East from Vienna/Nutley St interchange to the first Fairfax exit, then follow to our location; or (2) Take Maple Ave / Route 123 West toward Fairfax. We're also accessible via the Vienna/Fairfax-GMU Metro station (Orange Line) — we're a short drive from the station. Call (703) 698-7117 for specific directions from your Vienna address.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Acupuncture near Vienna, VA"
            title="Clinical acupuncture serving Vienna and Northern Virginia for 30+ years."
            body="Roselle Center for Healing offers licensed acupuncture integrated with chiropractic and functional medicine — just 10 minutes from Vienna. New patients welcome, same-week appointments available."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
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
