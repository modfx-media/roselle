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

export default function ChiropractorAnnandaleVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractor · Near Annandale, VA · 15 Minutes via I-66"
            title="Chiropractor near Annandale, VA — integrated spinal care 15 minutes away."
            subtitle="Annandale residents seeking chiropractic care for back pain, neck pain, or sports injuries find a clinical-grade integrative practice at Roselle Center in Fairfax — just 15 minutes via I-66 West. 30+ years serving Northern Virginia."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Conditions", href: "/conditions-treated" },
              { label: "Chiropractor Near Annandale, VA" },
            ]}
            image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Chiropractor serving Annandale VA patients at Roselle Center for Healing in Fairfax"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "15 min", label: "From Annandale via I-66 West" },
              { value: "30+", label: "Years of chiropractic in Northern Virginia" },
              { value: "Integrated", label: "Chiro, acupuncture & massage" },
              { value: "Same-week", label: "New patient appointments" },
            ]}
          />

          <FeatureSplit
            eyebrow="What Annandale patients come to us for"
            title="A diverse community with varied musculoskeletal needs."
            body={[
              "Annandale's culturally diverse, densely populated community brings a wide range of presentations to our practice: long-term musculoskeletal conditions in older adults, sports injuries in active families, work-related repetitive strain in trade workers and office professionals, and auto accident injuries from the heavily trafficked I-495 and Route 236 corridors.",
              "Unlike single-modality practices, Roselle Center can address all of these within one coordinated care plan — combining chiropractic adjustment, applied kinesiology, massage therapy, and acupuncture based on what each patient's presentation actually requires.",
            ]}
            image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Comprehensive chiropractic assessment for Annandale VA patients at Roselle Center"
            bullets={[
              "Auto accident injury documentation for I-495 area crashes",
              "Applied kinesiology for complex or recurring presentations",
              "Acupuncture integrated with spinal care",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="What we treat"
            title="Conditions we address for Annandale-area patients."
            intro="Annandale patients present with the full spectrum of musculoskeletal and chronic health conditions. Here are the four most common areas our Annandale-area patients come to us for."
            cta={{ label: "See all conditions treated", href: "/conditions-treated" }}
            pillars={[
              {
                title: "What we treat",
                description:
                  "Back pain, neck pain, sciatica, headaches, sports injuries, auto accident injuries, and extremity joint conditions. We also address systemic conditions through our functional medicine and acupuncture services.",
              },
              {
                title: "Our multidisciplinary approach",
                description:
                  "Chiropractic adjustment, applied kinesiology, acupuncture, massage therapy, and functional medicine under one roof. Your providers coordinate directly — so your care plan is a single integrated strategy, not four separate agendas.",
              },
              {
                title: "Dr. Roselle's credentials",
                description:
                  "Over 30 years of clinical practice in Northern Virginia. Applied kinesiology certification, comprehensive musculoskeletal training, and a reputation built on clinical outcomes rather than marketing. Many of our patients are referrals from other providers who recognize the depth of care we provide.",
              },
              {
                title: "Getting here from Annandale",
                description:
                  "From Annandale: take I-66 West toward Fairfax. The drive is approximately 15 minutes in normal traffic. Alternative route via Route 236 (Little River Turnpike) West directly to Fairfax city. Ample parking at our facility. Call (703) 698-7117 for specific directions.",
              },
            ]}
          />

          <FaqAccordion
            eyebrow="Annandale patients ask"
            title="Questions from the Annandale community about chiropractic care."
            tone="light"
            items={[
              {
                q: "Is chiropractic effective for long-term back pain?",
                a: "Yes — particularly when chiropractic is combined with targeted rehabilitation and addresses contributing factors like posture, muscle imbalance, and ergonomics. Multiple systematic reviews confirm chiropractic's effectiveness for both acute and chronic lower back pain. The key distinction at Roselle Center is that we don't just manage pain — we identify the structural and functional contributors and address them directly, which is why our patients' results tend to last.",
              },
              {
                q: "Do you accept walk-in appointments from Annandale?",
                a: "We see new patients by scheduled appointment to ensure adequate intake time — we don't rush a first visit. However, we offer same-week scheduling for new patients with acute pain. Call (703) 698-7117 or book online at /appointment. For patients coming from Annandale, we can typically schedule within 2–3 business days.",
              },
              {
                q: "What if I've already had an MRI and been told I need surgery?",
                a: "A surgical recommendation from one provider is not an obligation to proceed immediately. The vast majority of spinal conditions that generate surgical referrals — including disc herniations, degenerative disc disease, and spinal stenosis — have a conservative chiropractic management option that should be attempted first. We review existing imaging and reports as part of our intake, and give you our honest clinical assessment of whether conservative care is likely to help your specific case.",
              },
              {
                q: "Do you treat auto accident injuries from I-495 or Route 236 crashes?",
                a: "Yes. I-495 and Route 236 (Little River Turnpike) are both high-accident corridors for the Annandale area. We're experienced in treating and documenting whiplash, lumbar strain, and disc injuries from vehicle accidents. We coordinate with your auto insurance's MedPay coverage and work with personal injury attorneys when appropriate. Early evaluation (within 72 hours of the accident) is important for both recovery and insurance documentation.",
              },
              {
                q: "How is Roselle Center different from other chiropractors near Annandale?",
                a: "The primary differentiators: applied kinesiology adds a diagnostic layer most chiropractors don't use, allowing more precise identification of primary subluxations and neurologically inhibited muscles. Our integration of chiropractic, acupuncture, massage, and functional medicine in a coordinated plan produces outcomes that single-modality practices can't replicate. And 30+ years in Northern Virginia means we have clinical depth and a referral network built on documented patient results.",
              },
            ]}
          />

          <Testimonials />

          <ImageCta
            eyebrow="Chiropractic care near Annandale, VA"
            title="Roselle Center is 15 minutes from Annandale — and worth the drive."
            body="Integrated chiropractic, acupuncture, and functional medicine for Northern Virginia patients. 30+ years of results, not promises. New patients welcome — same-week appointments available."
            image="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your appointment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
