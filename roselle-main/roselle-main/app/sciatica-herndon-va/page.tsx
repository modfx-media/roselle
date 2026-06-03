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

export default function SciaticaHerndonVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sciatica Treatment · Near Herndon, VA · Non-Surgical Relief"
            title="Sciatica treatment near Herndon, VA — leg pain that actually gets resolved."
            subtitle="Serving Herndon and Reston-area patients from our Fairfax clinic, just 15 minutes via Fairfax County Pkwy. We identify whether your sciatic pain originates from a disc herniation, piriformis compression, or lumbar facet — and treat accordingly, without surgery."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Sciatica Treatment Near Herndon, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Sciatica and sciatic nerve pain treatment near Herndon VA at Roselle Center"
            primaryCta={{ label: "Book your sciatica assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "15 min", label: "From Herndon via Fairfax County Pkwy" },
              { value: "30+", label: "Years treating sciatica in Northern Virginia" },
              { value: "Non-surgical", label: "First-line treatment" },
              { value: "L4-S3", label: "Full lumbar & sacral nerve assessment" },
            ]}
          />

          <FeatureSplit
            eyebrow="Not all leg pain is sciatica"
            title="Accurate diagnosis first — treatment second."
            body={[
              "Pain running down the back of the leg is not automatically sciatica. True sciatica is compression or irritation of the sciatic nerve — which can originate from disc herniation at L4-L5 or L5-S1, piriformis syndrome (where the muscle compresses the nerve in the buttock), lumbar spinal stenosis, or sacroiliac joint dysfunction with nerve referral. Each has a different treatment approach.",
              "Herndon-area patients frequently arrive having been told they have 'sciatica' without any differentiation of which structure is actually at fault. Our clinical assessment uses straight-leg raise, FAIR test, slump test, and neurological screening to identify the specific source — which determines whether the primary intervention is disc mobilization, piriformis release, lumbar adjustment, or SI joint work.",
            ]}
            image="https://images.unsplash.com/photo-1559757175-7cb036e0e749?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Sciatic nerve assessment and diagnosis at Roselle Center near Herndon VA"
            bullets={[
              "Straight-leg raise and slump test for disc involvement",
              "FAIR test for piriformis syndrome differentiation",
              "Dermatomal pattern assessment for nerve root level",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Sciatica treatment approach"
            title="How we resolve sciatic nerve pain near Herndon."
            intro="Sciatic nerve pain is the symptom. The treatment targets the structure compressing or irritating the nerve — which is why accurate diagnosis determines everything about the care plan."
            cta={{ label: "Learn about our back pain approach", href: "/back-pain" }}
            pillars={[
              {
                title: "Disc herniation care",
                description:
                  "Flexion-distraction technique and specific lumbar adjustments reduce intradiscal pressure and nerve root compression at L4-L5 and L5-S1 — the most common levels for disc-generated sciatica. This non-surgical approach has strong clinical evidence for herniated disc sciatica.",
              },
              {
                title: "Piriformis syndrome treatment",
                description:
                  "When the piriformis muscle compresses the sciatic nerve in the posterior hip, deep soft-tissue therapy, targeted stretching, and gluteal activation exercises resolve the compression. AK testing identifies inhibited gluteal muscles that are forcing the piriformis to overwork.",
              },
              {
                title: "Acupuncture for nerve pain",
                description:
                  "Acupuncture at specific lumbar, gluteal, and distal leg points reduces neurological sensitization in the sciatic nerve pathway — particularly helpful for patients with burning, electric, or hypersensitive leg pain that doesn't fully resolve with structural treatment alone.",
              },
              {
                title: "Lumbar stabilization",
                description:
                  "Core and deep lumbar stabilizer activation reduces the repetitive loading forces on discs and facet joints during daily activity — addressing the underlying vulnerability that allowed sciatica to develop in the first place.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Herndon-area patients ask"
            title="Sciatica questions from Northern Virginia patients."
            tone="light"
            items={[
              {
                q: "What is causing the shooting pain from my lower back down my leg?",
                a: "Shooting pain from the lower back into the buttock, posterior thigh, and calf (the sciatic nerve distribution) is most commonly caused by: (1) a herniated disc at L4-L5 or L5-S1 compressing the exiting nerve root, (2) piriformis muscle tightness compressing the sciatic nerve in the posterior hip, or (3) lumbar spinal stenosis (narrowing of the spinal canal) creating nerve compression during upright posture. Less common causes include SI joint inflammation and, rarely, space-occupying lesions. Clinical examination differentiates these — not self-diagnosis.",
              },
              {
                q: "How long does sciatica last without treatment?",
                a: "Acute disc-related sciatica often improves significantly within 6–12 weeks even without treatment, but research shows that 'natural' resolution frequently leaves residual dysfunction — disc degeneration, chronic nerve irritation, and muscle inhibition patterns that set the stage for recurrence. Sciatica treated early and properly resolves faster, more completely, and with lower recurrence rates than sciatica that is watched and waited. The majority of our Herndon-area sciatica patients are functioning significantly better within 4–6 weeks of starting care.",
              },
              {
                q: "Should I see a chiropractor or surgeon for my sciatica?",
                a: "For the vast majority of sciatica presentations — including moderate disc herniations with significant leg pain — conservative chiropractic care is the appropriate first step. Surgical referral is indicated when: (1) you have loss of bladder or bowel control (cauda equina syndrome — a medical emergency), (2) you have progressive leg weakness rather than pain, or (3) conservative care has failed over a 6–12 week course. We will refer for surgical consultation in either of those scenarios without hesitation.",
              },
              {
                q: "Can piriformis syndrome cause the same pain as a disc herniation?",
                a: "Yes — and it's a frequent misdiagnosis. Piriformis syndrome produces a nearly identical distribution of leg pain, buttock pain, and paresthesia as L5-S1 disc herniation, because the sciatic nerve runs directly through or adjacent to the piriformis muscle in the posterior hip. The key differentiating feature is that piriformis syndrome pain is typically worsened by prolonged sitting (putting direct pressure on the muscle), improves with movement, and is not associated with neurological deficits on straight-leg raise. Disc herniation tends to worsen with forward bending and is provoked by straight-leg raise at low angles.",
              },
              {
                q: "How far is Roselle Center from Herndon, VA?",
                a: "Roselle Center for Healing is located in Fairfax, approximately 15 minutes from Herndon via Fairfax County Parkway South. From Herndon: take Centreville Rd south to Fairfax County Pkwy, continue south to our Fairfax location. We're also accessible from Reston via Sunrise Valley Dr to Fairfax County Pkwy. Call us at (703) 698-7117 and we can provide specific directions from your address.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Sciatica specialists serving Herndon, VA"
            title="Don't let sciatic nerve pain run your life. We're 15 minutes from Herndon."
            body="Roselle Center for Healing has been resolving sciatica for Northern Virginia patients for over 30 years. Same-week appointments available — call (703) 698-7117 or book online."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your sciatica assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
