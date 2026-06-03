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
import ChecklistSplit from "@/app/components/templates/ChecklistSplit";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function BackPainFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Back Pain · Fairfax, VA · Drug-Free Treatment"
            title="Back pain treatment in Fairfax, VA — the root cause, not just the symptom."
            subtitle="Back pain is the most common reason patients visit our Fairfax clinic. We identify whether the source is disc, joint, muscle, nerve, or postural — and build a non-surgical, drug-free plan around that specific diagnosis."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/back-pain" },
              { label: "Back Pain Treatment Fairfax, VA" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/backpain2.jpg.webp?5e09f2e65d557a69799049a7fdb7935b"
            imageAlt="Back pain patient receiving chiropractic treatment at Roselle Center for Healing Fairfax VA"
            primaryCta={{ label: "Book your assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years treating back pain in Fairfax" },
              { value: "Drug-free", label: "Treatment approach" },
              { value: "Non-surgical", label: "First-line care options" },
              { value: "Same-week", label: "Appointments available" },
            ]}
          />

          <FeatureSplit
            eyebrow="Why most back pain treatments fail"
            title="The problem with treating where it hurts."
            body={[
              "Lower back pain affecting a Fairfax County desk worker rarely originates only in the lower back. Hip flexor tightness from prolonged sitting, thoracic spine immobility, and weak deep stabilizers all contribute to lumbar overload. Treat the low back in isolation and you'll keep coming back.",
              "At Roselle Center, we perform a comprehensive orthopedic and neurological assessment — including applied kinesiology muscle testing — to identify all the contributing factors. Then we address all of them simultaneously: spinal adjustment, soft-tissue work, targeted exercise, and nutritional anti-inflammatory support.",
            ]}
            image="https://images.unsplash.com/photo-1544717305-2782549b5136?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Comprehensive back pain assessment at Roselle Center Fairfax VA"
            bullets={[
              "Full musculoskeletal and neurological intake evaluation",
              "Orthopedic testing to differentiate disc, joint, and muscle sources",
              "Coordinated care plan across chiropractic, massage & nutrition",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Our back pain toolkit"
            title="How we treat back pain in Fairfax."
            intro="No single technique works for every back pain presentation. Our clinical toolkit lets us match the intervention to the specific source of your pain — not apply a generic protocol to every patient."
            cta={{ label: "See all condition pages", href: "/conditions-treated" }}
            pillars={[
              {
                title: "Chiropractic spinal adjustment",
                description:
                  "Precise manipulation of the lumbar, sacral, and thoracic vertebrae restores alignment, reduces nerve compression, and improves joint mobility — addressing the mechanical root of most back pain.",
              },
              {
                title: "Applied kinesiology",
                description:
                  "Muscle-response testing identifies which muscles are inhibited or overactivated around the spine, guiding more precise adjustments and corrective exercises.",
              },
              {
                title: "Therapeutic massage",
                description:
                  "Sports and deep tissue massage releases the paraspinal muscle tension that both causes and results from spinal misalignment — reducing pain and restoring movement.",
              },
              {
                title: "Acupuncture for back pain",
                description:
                  "Acupuncture reduces the neurological sensitization (central sensitization) that makes chronic back pain persist even after structural issues are addressed.",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Specific back conditions"
            title="Back pain isn't one condition — it's many."
            tone="light"
            body={[
              "Herniated discs, degenerative disc disease, sacroiliac joint dysfunction, lumbar facet syndrome, muscular strain, piriformis syndrome, and structural scoliosis all produce 'back pain' — but require different treatment approaches. Accurate diagnosis is the foundation of effective care.",
              "Our Fairfax back pain specialists identify your specific diagnosis through physical examination, orthopedic tests, and in some cases thermography or referral for imaging. Once we know what we're treating, we can tell you realistically what to expect from care — including timeline and measurable milestones.",
            ]}
          />

          <ChecklistSplit
            eyebrow="What to expect"
            title="Your back pain care plan — step by step."
            body="We don't start treatment on the first visit. We start with assessment. Here's the typical patient journey for back pain at Roselle Center."
            image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Back pain treatment plan at Roselle Center for Healing Fairfax VA"
            tone="dark"
            items={[
              "Free 20-minute new patient consultation (phone or in-office)",
              "Comprehensive intake: health history, orthopedic testing, neurological screening",
              "Working diagnosis + written care plan with timeline",
              "Phase 1 (weeks 1–4): Pain reduction through adjustment, massage, and supportive therapies",
              "Phase 2 (weeks 4–8): Mobility restoration and corrective exercise",
              "Phase 3 (ongoing): Maintenance and prevention — monthly or bi-monthly",
            ]}
          />

          <Testimonials />

          <FaqAccordion
            eyebrow="Back pain patients ask"
            title="What Fairfax patients want to know before their first visit."
            tone="light"
            items={[
              {
                q: "How do I know if my back pain needs a chiropractor or a surgeon?",
                a: [
                  "The vast majority of back pain — including herniated discs, sciatica, and facet syndrome — responds to conservative chiropractic care without surgery. Red flags that warrant immediate medical attention include: loss of bladder or bowel control, severe leg weakness or numbness below the knee, back pain following major trauma, or unexplained fever with back pain.",
                  "If none of those are present, starting with conservative chiropractic care is the evidence-supported first step. We will tell you honestly if we believe your condition requires a surgical consultation.",
                ],
              },
              {
                q: "How long does it take for chiropractic to fix lower back pain?",
                a: "Acute lower back pain (less than 4 weeks duration) typically responds significantly within 4–8 visits. Chronic lower back pain (3+ months duration) requires a longer initial phase — usually 12–16 visits over 6–8 weeks — with reassessment thereafter. The key variables are how long the condition has been present and whether contributing factors (posture, desk ergonomics, nutrition) are being addressed simultaneously.",
              },
              {
                q: "Can a chiropractor help herniated disc pain?",
                a: "Yes. Chiropractic flexion-distraction technique and targeted spinal decompression are well-established, non-surgical treatments for herniated disc pain. These methods reduce intradiscal pressure and nerve compression without the risks associated with surgical intervention. We've treated hundreds of herniated disc patients in Fairfax County and refer for surgery only when conservative care has been exhausted appropriately.",
              },
              {
                q: "Is back pain related to the commute on I-66 or I-495?",
                a: "Significantly. Long-duration driving compresses the lumbar spine, inhibits deep stabilizer muscles, and creates anterior pelvic tilt — all of which load the lower back asymmetrically. Northern Virginia's commuting culture is one of the primary environmental contributors to our patients' back pain. We address posture, seat position, and movement breaks as part of every care plan.",
              },
              {
                q: "Do you treat back pain caused by auto accidents in Fairfax?",
                a: "Yes. Auto accident back pain — including whiplash, lumbar strain, and disc injuries — is a significant part of our practice. We document injuries thoroughly for insurance purposes, coordinate with your attorney if needed, and focus on full functional recovery rather than just pain management.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Fairfax County's back pain specialists"
            title="30+ years of drug-free back pain relief in Fairfax, VA."
            body="Whether your back pain started last week or has been building for years, Roselle Center for Healing has the diagnostic tools and clinical depth to find what's driving it and fix it properly. New patients welcome — same-week appointments available."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your assessment", href: "/appointment" }}
            secondaryCta={{ label: "Learn about our back pain approach", href: "/back-pain" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
