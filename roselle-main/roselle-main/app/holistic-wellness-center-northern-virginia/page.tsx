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
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FaqAccordion from "@/app/components/templates/FaqAccordion";
import ImageCta from "@/app/components/templates/ImageCta";
import CtaBand from "@/app/components/templates/CtaBand";

export default function HolisticWellnessCenterNorthernVirginiaPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Holistic Wellness · Fairfax, VA · Serving All of NOVA"
            title="Northern Virginia's most complete holistic wellness center."
            titleAccent="Est. 1990s. Still evolving."
            subtitle="Roselle Center for Healing brings six integrative specialties under one roof: chiropractic, acupuncture, massage therapy, applied kinesiology, holistic nutrition, and functional medicine — all coordinated around your individual health picture."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Holistic Wellness Center Northern Virginia" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/sciatica.jpg.webp?1038246deefd907bb2866e34b800ee33"
            imageAlt="Roselle Center for Healing — Northern Virginia's integrative wellness center in Fairfax VA"
            primaryCta={{ label: "Start with a free consult", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "30+", label: "Years serving Northern VA" },
              { value: "6", label: "Integrated specialties" },
              { value: "4.7★", label: "Google · 110 reviews" },
              { value: "∞", label: "Patients served" },
            ]}
          />

          <FeatureSplit
            eyebrow="What a holistic wellness center actually is"
            title="Not alternative medicine. Integrative medicine."
            body={[
              "A holistic wellness center is a practice that evaluates and treats you as a complete system — not as a collection of isolated symptoms. Rather than referring you to four different specialists who never communicate, we coordinate care across disciplines internally.",
              "At Roselle Center, that means your chiropractor knows what your acupuncturist found, your nutritionist knows what your applied kinesiologist identified, and your care plan reflects all of that. This is what makes outcomes here different from what you get from a single-specialty office.",
            ]}
            image="/dr-tom-roselle.webp"
            imageAlt="Dr. Tom Roselle DC — Facility Director and integrative medicine expert in Fairfax VA"
            bullets={[
              "Internal care coordination — no referral silos",
              "Root-cause focus, not symptom suppression",
              "All ages, all conditions, all stages of life",
            ]}
          />

          <FeatureGrid
            eyebrow="Six specialties. One team."
            title="Everything your health requires — under one roof."
            intro="Each of our six disciplines is a standalone specialty. Together, they create a clinical environment that addresses the full complexity of how the human body works — and breaks down."
            cols={3}
            cards={[
              {
                icon: "🦴",
                title: "Chiropractic Care",
                description:
                  "Spinal adjustment, joint manipulation, and neurological care for structural causes of pain and dysfunction.",
                href: "/services/chiropractic.html",
              },
              {
                icon: "🪡",
                title: "Acupuncture",
                description:
                  "Traditional Chinese and contemporary acupuncture for pain, inflammation, stress, hormonal balance, and chronic conditions.",
                href: "/services/acupuncture.html",
              },
              {
                icon: "💆",
                title: "Massage Therapy",
                description:
                  "Therapeutic, cupping, and sports massage to address soft-tissue tension, lymphatic drainage, and pain recovery.",
                href: "/services/massage-therapy.html",
              },
              {
                icon: "🧪",
                title: "Applied Kinesiology",
                description:
                  "Muscle-response testing to identify neurological and structural imbalances invisible to standard imaging.",
                href: "/services/applied-kinesiology.html",
              },
              {
                icon: "🥗",
                title: "Holistic Nutrition",
                description:
                  "Anti-inflammatory dietary planning and clinical supplementation that supports healing at the cellular level.",
                href: "/services/nutrition.html",
              },
              {
                icon: "🔬",
                title: "Functional Medicine & Thermography",
                description:
                  "Digital infrared thermal imaging and integrative medicine for complex, chronic, or unexplained conditions.",
                href: "/functional-medicine",
              },
            ]}
          />

          <ContentBlock
            eyebrow="Dr. Tom Roselle, DC"
            title="The Ageless Health® philosophy — and why it matters."
            body={[
              "Facility Director Dr. Tom Roselle holds multiple post-doctoral certifications: PAK (Professional Applied Kinesiology), PAc (Practical Acupuncture), DCCN (Diplomate of the Chiropractic Clinical Nutrition), and DCBCN (Diplomate of the Chiropractic Board of Clinical Nutrition). His twice Emmy®-nominated Ageless Health® television program has been educating Northern Virginia viewers on integrative health for decades.",
              "Dr. Roselle's clinical philosophy is simple: the body heals when you remove what's interfering with normal function and supply what's missing for it. Adjustments remove structural interference. Acupuncture restores energetic and neurological balance. Nutrition provides the biochemical substrate for healing. Applied kinesiology identifies which interventions are actually needed — not assumed.",
            ]}
            tone="dark"
            width="wide"
          />

          <WhyUs />

          <Testimonials />

          <FaqAccordion
            eyebrow="Commonly asked"
            title="Your holistic wellness questions, answered."
            intro="Northern Virginia patients ask these questions before their first visit. We answer them directly."
            tone="light"
            items={[
              {
                q: "What is a holistic wellness center?",
                a: "A holistic wellness center is a healthcare practice that addresses the full person — physical structure, nervous system, nutrition, and lifestyle — rather than individual symptoms in isolation. At Roselle Center, this means your chiropractor, acupuncturist, and nutritionist all contribute to a single coordinated care plan. The goal is identifying and removing the root causes of your condition, not just managing symptoms.",
              },
              {
                q: "Is holistic medicine covered by insurance?",
                a: [
                  "Chiropractic care is covered by most major insurance plans including BlueCross BlueShield, Aetna, Cigna, UnitedHealthcare, and Medicare. Coverage typically includes a set number of visits per year.",
                  "Acupuncture is increasingly covered — especially for chronic pain — by many commercial plans after the ACA expanded coverage. Massage therapy is often covered when medically prescribed.",
                  "Functional medicine and nutritional counseling have variable coverage. HSA and FSA accounts can be used for all of our services. Call us at (703) 698-7117 and our billing team will verify your specific benefits before your first appointment.",
                ],
              },
              {
                q: "What is the downside of functional medicine?",
                a: "Functional medicine requires more time investment than conventional care — longer initial appointments, detailed health history intake, and a phased approach to treatment. It is not ideal for patients seeking an immediate, single-visit fix. The cost is also sometimes higher upfront, though outcomes tend to be more durable. At Roselle Center, we're transparent about realistic timelines and costs from the first consultation.",
              },
              {
                q: "Which is better — a holistic doctor or a naturopathic doctor?",
                a: "They serve different roles. A holistic physician (like a chiropractic doctor with integrative training) operates within a clinical, evidence-based framework while addressing the whole person. A naturopathic doctor (ND) holds a separate doctoral degree and may use botanical medicine, homeopathy, and hydrotherapy. The two approaches are complementary rather than competitive. At Roselle Center, our team's integrative framework draws from chiropractic science, traditional Chinese medicine, and functional nutrition — a pragmatic combination that most patients find highly effective.",
              },
              {
                q: "Do you serve patients from all across Northern Virginia?",
                a: "Yes. Our Fairfax location is accessible from Vienna, Burke, Herndon, Reston, Springfield, Oakton, Annandale, Falls Church, and McLean — all within 20–25 minutes. We offer early morning, daytime, and some evening appointments to accommodate NOVA commuter schedules.",
              },
            ]}
          />

          <CtaBand
            tone="gold"
            eyebrow="New patients welcome"
            title="The most complete wellness practice in Northern Virginia is accepting new patients."
            body="Free 20-minute consultation for every new patient. No referral needed. Call or book online."
            primaryCta={{ label: "Book online now", href: "/appointment" }}
            secondaryCta={{ label: "(703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
