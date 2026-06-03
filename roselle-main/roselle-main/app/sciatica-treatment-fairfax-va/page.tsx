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
import ChecklistSplit from "../components/templates/ChecklistSplit";
import FaqAccordion from "../components/templates/FaqAccordion";
import ImageCta from "../components/templates/ImageCta";

export default function SciaticaTreatmentFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Sciatica Treatment · Fairfax, VA · Drug-Free"
            title="Sciatica doesn't fix itself. Let's find what's compressing the nerve."
            subtitle="Shooting pain from your lower back to your foot is your nervous system's distress signal. At Roselle Center for Healing in Fairfax, we identify the exact source of your sciatic nerve compression and eliminate it — without injections or surgery."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Sciatica", href: "/sciatica" },
              { label: "Sciatica Treatment Fairfax, VA" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sciatica.jpg.webp?1038246deefd907bb2866e34b800ee33"
            imageAlt="Sciatica treatment Fairfax VA — chiropractic spinal decompression and nerve pain relief"
            primaryCta={{ label: "Book your sciatica assessment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years treating sciatica in Fairfax" },
              { value: "Drug-free", label: "No injections or NSAIDs" },
              { value: "Non-surgical", label: "Conservative first approach" },
              { value: "5★", label: "Patient-rated outcomes" },
            ]}
          />

          <FeatureSplit
            eyebrow="What is sciatica, really?"
            title="One nerve. Five possible causes. One assessment to know which."
            body={[
              "Sciatica is irritation or compression of the sciatic nerve — the longest nerve in the human body, running from the lumbar spine through the buttocks and down each leg. The burning, shooting, or electric pain you feel in your leg isn't coming from your leg. It's coming from your spine.",
              "The compression can originate at the L4–S1 vertebral levels from a herniated disc, bone spur, piriformis muscle spasm, sacroiliac joint dysfunction, or spinal stenosis. Each source requires a different treatment protocol. Our diagnostic evaluation identifies yours.",
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sciatica.jpg.webp?1038246deefd907bb2866e34b800ee33"
            imageAlt="Sciatic nerve anatomy and compression points treated at Roselle Center Fairfax VA"
            bullets={[
              "Orthopedic provocative testing to identify compression source",
              "Neurological assessment for leg weakness, reflex changes",
              "Differentiation between disc, joint, and muscle contributions",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Treatment options"
            title="How we eliminate sciatic nerve compression."
            intro="Sciatica treatment is not one-size-fits-all. The combination of techniques we use depends on what's compressing the nerve and how long it's been doing so. Here are the primary tools we deploy."
            cta={{ label: "View our full sciatica page", href: "/sciatica" }}
            pillars={[
              {
                title: "Chiropractic lumbar adjustment",
                description:
                  "Targeted manipulation of the L4–S1 vertebral segments reduces the mechanical compression of disc herniations and facet joint inflammation on the sciatic nerve roots.",
              },
              {
                title: "Flexion-distraction technique",
                description:
                  "A specialized, low-force decompression technique that increases disc height and moves herniated material away from the nerve — particularly effective for disc-origin sciatica.",
              },
              {
                title: "Piriformis soft-tissue therapy",
                description:
                  "When the piriformis muscle is the compressing structure (piriformis syndrome), massage and trigger point therapy releases the muscle directly, providing rapid symptom relief.",
              },
              {
                title: "Acupuncture for nerve sensitization",
                description:
                  "Chronic sciatica creates central sensitization — the nervous system becomes hypersensitive even after structural compression is resolved. Acupuncture down-regulates this pain signaling.",
              },
            ]}
          />

          <ChecklistSplit
            eyebrow="Sciatica red flags"
            title="When sciatica requires immediate attention."
            body="Most sciatica is not a medical emergency and responds well to conservative chiropractic care. However, there are specific symptoms that require same-day medical evaluation. We tell every patient about these — because knowing them can prevent a serious outcome."
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=70&auto=format&fit=crop"
            imageAlt="Sciatica red flags and emergency signs"
            tone="light"
            items={[
              "Loss of bladder or bowel control — go to the ER immediately",
              "Sudden, severe weakness in both legs",
              "Numbness in the groin or saddle area (cauda equina syndrome)",
              "Back pain with fever (may indicate spinal infection)",
              "Sciatica following major physical trauma",
              "Progressive weakness in the foot/ankle that doesn't improve",
            ]}
          />

          <Testimonials />

          <FaqAccordion
            eyebrow="Sciatica patients ask"
            title="What Fairfax sciatica patients need to know."
            tone="dark"
            items={[
              {
                q: "Can chiropractic care help sciatica?",
                a: "Yes. Multiple randomized controlled trials confirm that chiropractic spinal manipulation is effective for reducing sciatic nerve pain and improving function. A 2010 study in Spine found that 60% of sciatica patients who failed to respond to medical care achieved clinically significant improvement with chiropractic manipulation. The key is correct diagnosis — we need to confirm chiropractic is appropriate for your specific type of sciatica before we begin.",
              },
              {
                q: "How long does it take for chiropractic to help sciatica?",
                a: "Acute sciatica (under 4 weeks) typically shows significant improvement within 6–10 chiropractic visits over 3–4 weeks. Chronic sciatica (months to years of symptoms) requires a longer initial course — typically 12–20 visits over 6–10 weeks — with monthly reassessment. If you haven't improved by visit 6, we tell you and adjust the plan.",
              },
              {
                q: "Can sciatica cause permanent nerve damage?",
                a: "In most cases, no. The vast majority of sciatica presentations are compressive rather than destructive — the nerve is irritated, not severed. However, prolonged severe compression (particularly from large disc herniations) can cause progressive neurological deficits. This is why we advise against waiting years before seeking treatment. The sooner compression is reduced, the better the neurological recovery.",
              },
              {
                q: "What is the difference between sciatica and piriformis syndrome?",
                a: "Sciatica technically describes pain from sciatic nerve compression at the spine (disc herniation, stenosis). Piriformis syndrome is when the piriformis muscle in the buttock compresses the sciatic nerve as it passes through or beneath the muscle. Symptoms are similar — buttock pain, leg pain, numbness — but treatment is different. Our physical examination distinguishes between them reliably.",
              },
              {
                q: "Should I rest or keep moving with sciatica?",
                a: "Keep moving — within pain tolerance. Bed rest for sciatica has been shown to prolong recovery compared to staying active. Gentle walking, swimming, or specific stretches (McKenzie exercises, piriformis stretches) maintain circulation and reduce nerve tension. We'll give you specific exercises appropriate for your diagnosis at your first appointment.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Sciatica relief Fairfax, VA"
            title="Stop managing sciatic pain. Start resolving it."
            body="30+ years of sciatica treatment in Fairfax County. We've seen every presentation — from mild disc irritation to severe piriformis compression. We'll find what's causing yours and build a specific plan to eliminate it."
            image="https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book sciatica assessment", href: "/appointment" }}
            secondaryCta={{ label: "Read about sciatica treatment", href: "/sciatica" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
