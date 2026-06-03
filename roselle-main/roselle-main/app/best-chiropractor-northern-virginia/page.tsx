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
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";

export default function BestChiropractorNorthernVirginiaPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Northern Virginia · Fairfax, VA · Est. 1990s"
            title="What makes a chiropractor worth choosing — and why Northern Virginia families choose us."
            subtitle="A lot of practices call themselves the best. We let 30 years of patient outcomes and 110 Google reviews do the talking. Here's exactly what you get at Roselle Center for Healing in Fairfax, VA."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Best Chiropractor Northern Virginia" },
            ]}
            image="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Roselle Center for Healing — the most trusted chiropractic practice in Northern Virginia"
            primaryCta={{ label: "Book your first visit free", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "4.7★", label: "Google average · 110 reviews" },
              { value: "30+", label: "Years in Fairfax County" },
              { value: "6", label: "Specialties in one practice" },
              { value: "40+", label: "Years of healing experience" },
            ]}
          />

          <FeatureSplit
            eyebrow="The clinical difference"
            title="Multidisciplinary isn't a marketing word here — it's how we work."
            body={[
              "Most chiropractic offices are exactly that: a chiropractor. Some add massage. Very few offer applied kinesiology, functional medicine, clinical nutrition, traditional Chinese acupuncture, and thermography under one roof — coordinated by practitioners who communicate with each other about your case.",
              "Roselle Center for Healing was doing multidisciplinary integrative care before it became a trend. Dr. Tom Roselle, DC has built a team that approaches each patient as a system, not a symptom — and the patient outcomes reflect it.",
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/450x600_80/webmgr/0g/5/2/2024/rtr-bio-photo-2016.jpg.webp?60de3fe80a9047a9c27cf25f1300a844"
            imageAlt="Dr. Tom Roselle DC and the Roselle Center team — best chiropractor in Northern Virginia"
            bullets={[
              "Internal care coordination — not external referrals",
              "30+ year track record in the same Fairfax location",
              "Free 20-minute new patient consultation",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="What to look for"
            title="How to evaluate any chiropractor in Northern Virginia."
            intro="Before you book anywhere, ask these questions. We'll answer them for ourselves — and you can use the same framework to evaluate any other practice in the area."
            cta={{ label: "Meet our doctors", href: "/about-us/meet-the-doctors---therapists.html" }}
            pillars={[
              {
                title: "Does the practice do a real assessment?",
                description:
                  "We do. Every new patient receives an orthopedic and neurological intake evaluation. We don't start adjusting before we understand what we're dealing with.",
              },
              {
                title: "Do they tell you how long it will take?",
                description:
                  "We do. After your first evaluation, you receive a written care plan with a realistic timeline, milestone goals, and a re-evaluation date. No indefinite open-ended treatment.",
              },
              {
                title: "Can they treat your whole family?",
                description:
                  "Yes. We treat pediatric through geriatric patients — student athletes, prenatal, seniors — with techniques appropriate for each stage of life.",
              },
              {
                title: "Do they look beyond the spine?",
                description:
                  "We do. Applied kinesiology, functional nutrition, and acupuncture mean we can address the neurological, biochemical, and energetic contributors to your condition — not just the structural ones.",
              },
            ]}
          />

          <FeatureGrid
            eyebrow="Who we treat"
            title="Northern Virginia's full spectrum of chiropractic patients."
            intro="Our patient population mirrors Northern Virginia's demographics — and the distinct health patterns that come with it."
            cols={3}
            cards={[
              {
                icon: "💼",
                title: "Federal Employees & Contractors",
                description:
                  "Long commutes, desk-intensive work, and security clearance stress. We treat the full musculoskeletal and fatigue profile that comes with this career type.",
              },
              {
                icon: "🏃",
                title: "Athletes & Active Adults",
                description:
                  "NOVA's recreational sports culture produces consistent overuse injuries, sports trauma, and performance optimization requests. We do all of it.",
              },
              {
                icon: "👶",
                title: "Families & Children",
                description:
                  "From newborn craniosacral care to pediatric sports injuries, we offer age-appropriate techniques for every stage of childhood and adolescence.",
              },
              {
                icon: "🤰",
                title: "Prenatal & Postnatal",
                description:
                  "Webster Technique certified prenatal chiropractic care. We also treat postpartum musculoskeletal changes and nursing-related strain.",
                href: "/prenatal-chiropractic",
              },
              {
                icon: "🧓",
                title: "Seniors",
                description:
                  "Gentle techniques adapted for osteoporosis, arthritis, and age-related degenerative changes. Maintaining mobility and independence is our goal.",
              },
              {
                icon: "🚗",
                title: "Auto Accident Victims",
                description:
                  "Post-accident musculoskeletal trauma, insurance documentation, and full functional recovery care — with coordination with your attorney if needed.",
                href: "/auto-accidents",
              },
            ]}
          />

          <WhyUs />

          <Testimonials />

          <FaqAccordion
            eyebrow="Northern Virginia patients ask"
            title="Questions we hear from patients comparing practices."
            tone="dark"
            items={[
              {
                q: "Why do some doctors discourage chiropractic care?",
                a: [
                  "This question comes up often. Historically, there was professional friction between the chiropractic and medical professions. That tension has decreased significantly as research has accumulated and integrative care models have become the standard in progressive healthcare systems.",
                  "Modern evidence — including systematic reviews by the Cochrane Collaboration and guidelines from the American College of Physicians — supports chiropractic spinal manipulation as a first-line treatment for acute and chronic low back pain. Many Fairfax County physicians now actively refer patients to our practice.",
                ],
              },
              {
                q: "What are red flags in chiropractic that I should be aware of?",
                a: [
                  "Legitimate red flags in any chiropractic practice include: no intake assessment before starting treatment, no written care plan with a timeline, promises of a cure rather than improvement expectations, and pressure to prepay large treatment packages.",
                  "We operate the opposite way: comprehensive assessment before any treatment, written care plans with milestones, honest outcome expectations, and pay-as-you-go flexibility. If a patient doesn't need ongoing care, we tell them that.",
                ],
              },
              {
                q: "How does Roselle Center compare to The Joint Chiropractic?",
                a: "The Joint Chiropractic is a walk-in, high-volume model with a flat-rate monthly membership. It's convenient for patients who know they need routine maintenance and don't want comprehensive care. Roselle Center is the opposite model: diagnostic-first, multidisciplinary, with an individualized care plan for each patient. If you have a complex condition or want to understand what's actually driving your symptoms, our approach will produce better outcomes.",
              },
              {
                q: "Do you take new patients without a referral?",
                a: "Yes. No referral is needed to book at Roselle Center for Healing. You can call (703) 698-7117 or use our online booking at rosellecare.com/appointment. We offer a free 20-minute consultation for all new patients.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Northern Virginia · Fairfax, VA"
            title="The practice Northern Virginia has trusted since the 1990s."
            body="30+ years. 6 specialties. 110 Google reviews. A team that knows the Northern Virginia patient — because we've been treating them for decades. Book your free consultation and see the difference for yourself."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Book your free consult", href: "/appointment" }}
            secondaryCta={{ label: "Read our reviews", href: "https://www.google.com/maps/search/Roselle+Center+for+Healing+Fairfax+VA" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
