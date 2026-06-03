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

export default function BackPainViennaVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Back Pain Treatment · Near Vienna, VA · 10 Minutes Away"
            title="Back pain treatment near Vienna, VA — 10 minutes to drug-free results."
            subtitle="Vienna residents with lower back pain, disc herniation, and sciatica trust Roselle Center for Healing in Fairfax — just 10 minutes via I-66 or Maple Avenue. We treat the cause, not just the complaint."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/back-pain" },
              { label: "Back Pain Treatment Near Vienna, VA" },
            ]}
            image="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Back pain treatment near Vienna VA at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book your back pain assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "10 min", label: "From Vienna via I-66 or Maple Ave" },
              { value: "30+", label: "Years treating Northern Virginia back pain" },
              { value: "Non-surgical", label: "First-line back pain care" },
              { value: "Same-week", label: "New patient appointments" },
            ]}
          />

          <FeatureSplit
            eyebrow="What Vienna patients present with"
            title="Back pain in Vienna's commuter and professional community."
            body={[
              "Vienna is a dense commuter corridor — Metro access at Vienna station, I-66 westbound, and Route 123 all funnel long-commuting federal government workers, consultants, and tech professionals through the area daily. Extended sitting in cars and at desks, combined with the postural demands of laptop and hybrid work, creates a predictable pattern of lower back loading that we see consistently in Vienna-area patients.",
              "The most common presentations from Vienna are: lumbar disc irritation aggravated by sitting, SI joint dysfunction from long commutes, and decompensated thoracic tightness producing secondary lower back pain. Our Fairfax clinic is 10 minutes from Vienna's center, and new patients can typically be seen within the same week.",
            ]}
            image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Back pain assessment for Vienna VA commuters at Roselle Center Fairfax"
            bullets={[
              "SI joint assessment for commuter-pattern back pain",
              "Lumbar disc evaluation for sitting-aggravated pain",
              "Thoracic mobility assessment for secondary lower back loading",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="What we treat"
            title="Back conditions we address for Vienna-area patients."
            intro="Back pain is not one condition. We identify the specific structure involved and target our treatment accordingly — whether you're dealing with a disc, joint, muscle, or nerve problem."
            cta={{ label: "Read our full back pain page", href: "/back-pain" }}
            pillars={[
              {
                title: "Disc herniation and bulge",
                description:
                  "Lumbar disc herniations at L4-L5 and L5-S1 — the most common in desk workers — respond well to chiropractic flexion-distraction technique. We reduce disc pressure and nerve compression without surgery or epidural injections.",
              },
              {
                title: "SI joint dysfunction",
                description:
                  "Sacroiliac joint dysfunction produces posterior hip and lower back pain that is often misattributed to disc or muscle problems. Specific SI joint manipulation, muscle energy technique, and gluteal activation are the correct treatments.",
              },
              {
                title: "Lumbar facet syndrome",
                description:
                  "Facet joint irritation — common from repetitive extension and rotation in lifting or rotational sport — produces localized lower back pain that worsens with backward bending. Targeted adjustment, dry needling, and functional rehabilitation address this specifically.",
              },
              {
                title: "Chiropractic vs. physical therapy for back pain",
                description:
                  "The research shows both are effective for lower back pain; the evidence slightly favors chiropractic for acute presentations. At Roselle Center, we offer both the spinal manipulation that chiropractic excels at and the functional rehabilitation that PT emphasizes — without sending you to two separate providers.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Vienna patients ask"
            title="Back pain questions from Vienna-area patients."
            tone="light"
            items={[
              {
                q: "What causes lower back pain in desk workers?",
                a: "Sustained sitting in 90-degree hip flexion inhibits the hip extensors (glutes and hamstrings), shortens the hip flexors (iliopsoas and rectus femoris), and progressively loads the posterior lumbar discs and facet joints. Combined with loss of thoracic mobility — the upper back stiffens from sustained screen posture — the lower lumbar segments absorb forces they're not designed for. Vienna's commuter-heavy population spends 9–12 hours per day in this pattern. Chiropractic addresses the joint dysfunction; exercise and ergonomic correction address the ongoing loading pattern.",
              },
              {
                q: "Should I see a chiropractor or physical therapist for lower back pain?",
                a: "Both professions treat lower back pain effectively. Chiropractors bring spinal manipulation (which PT generally doesn't perform) and have stronger evidence specifically for acute and subacute lower back pain. Physical therapists bring a deeper rehabilitation toolkit for progressive functional restoration. The strongest evidence is for combined care — which is exactly what we provide at Roselle Center. You get manual therapy, spinal adjustment, and targeted rehabilitation in one coordinated plan.",
              },
              {
                q: "Can a chiropractor help a herniated disc without surgery?",
                a: "Yes. The majority of lumbar disc herniations — even significant ones producing sciatic pain — resolve or improve sufficiently with conservative care to avoid surgery. Chiropractic flexion-distraction technique, specific lumbar decompression protocols, and adjunctive acupuncture can reduce disc pressure, decrease nerve irritation, and allow natural healing. We track progress objectively and refer for surgical consultation when conservative care has been appropriately exhausted.",
              },
              {
                q: "How many chiropractic visits do I need for back pain?",
                a: "Acute lower back pain (under 4 weeks) typically shows meaningful improvement within 4–6 visits. Subacute and chronic presentations (over 3 months) typically require an initial phase of 10–16 visits before reassessment. We set measurable outcome goals at the start — pain scale, range of motion, functional activities — and track them objectively. If we're not seeing the expected progress, we adjust the plan.",
              },
              {
                q: "Does insurance cover chiropractic care for Vienna, VA residents?",
                a: "Most major health insurance plans — including BCBS, Aetna, Cigna, UnitedHealthcare, and Tricare (significant in the Vienna/Northern Virginia area) — cover chiropractic care for back pain. Federal employee plans (FEHB) broadly cover chiropractic. We accept most major insurance and will verify your specific coverage before your first appointment. Call (703) 698-7117.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Back pain care near Vienna, VA"
            title="Vienna patients: Roselle Center is 10 minutes away and same-week appointments are available."
            body="Don't let lower back pain compound over weeks of inaction. Roselle Center for Healing in Fairfax has been resolving back pain for Northern Virginia patients for over 30 years. Same-week new patient appointments."
            image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
