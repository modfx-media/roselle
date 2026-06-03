"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import WhyUs from "@/app/components/WhyUs";
import Testimonials from "@/app/components/Testimonials";
import PageHero from "@/app/components/templates/PageHero";
import StatStrip from "@/app/components/templates/StatStrip";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import PillarSection from "@/app/components/templates/PillarSection";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function ChiropracticCareFairfaxVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Chiropractic Care · Fairfax, VA · 30+ Years"
            title="Chiropractic care in Fairfax, VA — the best in Northern Virginia, by the numbers."
            subtitle="Roselle Center for Healing has been Fairfax County's leading chiropractic practice since the 1990s. Our approach combines spinal adjustment with applied kinesiology, acupuncture, and clinical nutrition — treating the whole person, not just the symptom."
            crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services.html" }, { label: "Chiropractic Care Fairfax, VA" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x599_80/webmgr/0g/5/2/backpain2.jpg.webp?5e09f2e65d557a69799049a7fdb7935b"
            imageAlt="Chiropractic care Fairfax VA at Roselle Center for Healing"
            primaryCta={{ label: "Book your adjustment", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />
          <StatStrip stats={[
            { value: "4.7★", label: "Google · 110 reviews" },
            { value: "30+", label: "Years in Fairfax County" },
            { value: "6", label: "Disciplines in one practice" },
            { value: "Free", label: "20-min new patient consult" },
          ]} />
          <FeatureSplit
            eyebrow="What chiropractic actually is"
            title="Spinal adjustment is the starting point, not the whole story."
            body={[
              "Chiropractic is the clinical assessment and treatment of musculoskeletal conditions through manual manipulation of the spine and joints, with a focus on the relationship between spinal structure and nervous system function. When vertebrae misalign (subluxation), they create mechanical joint dysfunction and can irritate surrounding nerves — causing pain, reduced range of motion, and systemic effects.",
              "At Roselle Center, chiropractic is the structural foundation of a broader integrative care model. Dr. Tom Roselle's PAK (Professional Applied Kinesiology) certification means every adjustment is guided by muscle-response testing — identifying which segments need correction and confirming the correction was effective. This is precision chiropractic, not rotation-and-crack chiropractic.",
            ]}
            image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic adjustment at Roselle Center Fairfax VA"
            bullets={["PAK-guided precision adjustments", "Cervical, thoracic, and lumbar care", "All ages: pediatric through geriatric"]}
          />
          <PillarSection
            tone="dark"
            eyebrow="What chiropractic treats"
            title="Conditions we address with chiropractic care in Fairfax."
            intro="Chiropractic care's evidence base extends well beyond back pain — though back pain is certainly what most Fairfax patients present with first."
            cta={{ label: "See all conditions we treat", href: "/conditions-treated" }}
            pillars={[
              { title: "Back pain (all types)", description: "Lumbar facet syndrome, disc herniation, sacroiliac dysfunction, and muscular strain — each diagnosed specifically and treated with the appropriate technique." },
              { title: "Neck pain & cervicogenic headache", description: "Upper cervical adjustment for cervicogenic headaches, cervical disc irritation, and the forward-head posture pattern endemic to Northern Virginia desk workers." },
              { title: "Sciatica & radiculopathy", description: "Spinal manipulation and flexion-distraction technique to reduce nerve root compression from disc herniation or foraminal stenosis." },
              { title: "Extremity & sports injuries", description: "Shoulder, elbow, wrist, hip, knee, and ankle adjustments — not just spinal care. Full body joint manipulation for athletes and active adults." },
            ]}
          />
          <WhyUs />
          <Testimonials />
          <FaqAccordion
            eyebrow="New patients ask"
            title="What Fairfax chiropractic patients want to know before their first visit."
            tone="light"
            items={[
              { q: "What does a chiropractic adjustment feel like?", a: "Most patients feel a sense of release and immediate reduction in pressure or tension. The 'cracking' or 'popping' sound is called cavitation — gas releasing from the joint space as the pressure equalizes. It's not painful for most people, though some tenderness in already-inflamed joints is normal. Many patients leave their first adjustment wondering why they waited so long." },
              { q: "How often should I see a chiropractor in Fairfax?", a: "During active care for pain: 2–3 times per week for 4–6 weeks, then reassessed. During maintenance: monthly visits for most patients. We base frequency recommendations on your specific condition, age, activity level, and clinical response — not a one-size protocol." },
              { q: "Why do doctors discourage chiropractors?", a: ["This is a fair question. Historically, there was significant professional conflict between medicine and chiropractic — partly philosophical, partly economic. That gap has narrowed substantially as research has accumulated. The American College of Physicians (ACP) 2017 guidelines recommend spinal manipulation as a first-line treatment for acute low back pain.", "Many Fairfax County physicians now refer patients to us. If your doctor discourages chiropractic, ask them specifically what evidence they're citing — because the current evidence consistently supports conservative chiropractic care as first-line for most musculoskeletal conditions."] },
              { q: "Do you need a referral to see a chiropractor in Virginia?", a: "No referral is needed in Virginia. You can book directly online at rosellecare.com/appointment or call (703) 698-7117. However, many patients who come through physician referral have already had imaging done, which can be useful for complex cases." },
              { q: "What should I expect at my first chiropractic appointment in Fairfax?", a: "Your first appointment includes: a detailed health history intake, orthopedic and neurological physical examination, postural assessment, and applied kinesiology muscle testing. Based on findings, we provide a working diagnosis and discuss treatment options. We don't adjust without completing a proper assessment first. The initial exam takes 45–60 minutes. Subsequent visits are 20–30 minutes." },
            ]}
          />
          <ImageCta
            eyebrow="Chiropractic care · Fairfax, VA"
            title="Fairfax County's most trusted chiropractic practice since the 1990s."
            body="4.7★ on Google. 110 reviews. 30+ years. Six specialties. No referral needed. Free 20-minute consultation for new patients — book online or call (703) 698-7117."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your adjustment", href: "/appointment" }}
            secondaryCta={{ label: "Read our reviews", href: "https://www.google.com/maps/search/Roselle+Center+for+Healing+Fairfax+VA" }}
          />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
