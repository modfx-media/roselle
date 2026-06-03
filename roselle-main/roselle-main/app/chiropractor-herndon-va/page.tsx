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
import FeatureGrid from "../components/templates/FeatureGrid";
import ImageCta from "../components/templates/ImageCta";

export default function ChiropractorHerndonVAPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Serving Herndon & Reston, VA · Near Dulles Toll Road"
            title="Chiropractic care for Herndon, VA — without the wait."
            subtitle="Herndon and Reston residents have a high-quality option minutes away. Roselle Center for Healing in Fairfax provides comprehensive, drug-free chiropractic, acupuncture, and integrative wellness care for the Route 7 and Dulles Corridor community."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Locations Served", href: "/sitemap" },
              { label: "Chiropractor Near Herndon, VA" },
            ]}
            image="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=75&auto=format&fit=crop"
            imageAlt="Holistic chiropractic care serving Herndon and Reston Virginia"
            primaryCta={{ label: "Book your visit", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "~18 min", label: "From Herndon via Dulles Toll Rd" },
              { value: "30+", label: "Years treating Northern VA" },
              { value: "6", label: "Specialties available" },
              { value: "Free", label: "20-min new patient consult" },
            ]}
          />

          <FeatureSplit
            eyebrow="The Herndon + Reston health corridor"
            title="Tech-sector stress and Northern Virginia's body."
            body={[
              "Herndon and Reston are home to some of Northern Virginia's densest concentrations of technology and government contract workers — a population with distinct health patterns: cervical pain from prolonged screen time, wrist and elbow overuse injuries, chronic stress, and the compounding effects of the Dulles Toll Road commute.",
              "Our multidisciplinary team at Roselle Center diagnoses and treats all of these with precision. We've been doing it in Fairfax County since the 1990s — and the Herndon-Reston community has been a consistent part of our practice.",
            ]}
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1080&q=75&auto=format&fit=crop"
            imageAlt="Chiropractic care for tech workers and commuters in Herndon and Reston VA"
            bullets={[
              "Neck, shoulder, and wrist care for desk workers",
              "Stress-related tension and headache treatment",
              "Acupuncture for sleep, energy, and immune support",
            ]}
          />

          <PillarSection
            tone="dark"
            eyebrow="Our clinical approach"
            title="Why one specialist isn't enough."
            intro="Pain and dysfunction rarely have a single cause. A tight piriformis muscle can cause sciatica. A nutritional deficiency can worsen inflammation. A spinal misalignment can trigger migraines. We treat all the factors simultaneously — that's the Roselle Center model."
            cta={{ label: "Explore all services", href: "/services.html" }}
            pillars={[
              {
                title: "Chiropractic + kinesiology together",
                description:
                  "Spinal adjustments correct structure; applied kinesiology identifies the muscular and neurological imbalances that caused the misalignment in the first place.",
              },
              {
                title: "Acupuncture for systemic balance",
                description:
                  "Traditional Chinese acupuncture addresses pain, inflammation, stress hormones, and energy deficits — often producing results where isolated Western interventions plateau.",
              },
              {
                title: "Nutrition as medicine",
                description:
                  "Anti-inflammatory dietary changes and targeted supplementation reduce the body's baseline pain signaling — amplifying the benefits of manual therapies.",
              },
              {
                title: "Thermography screening",
                description:
                  "Digital infrared thermal imaging detects circulatory and soft-tissue abnormalities before they become clinical problems — preventive care at its most practical.",
              },
            ]}
          />

          <FeatureGrid
            eyebrow="Services available to Herndon patients"
            title="A full care menu — one location."
            intro="Everything Herndon and Reston patients need to address pain, recover from injury, and maintain long-term health is available at our Fairfax practice."
            cols={3}
            cards={[
              {
                icon: "🦴",
                title: "Chiropractic Care",
                description:
                  "Spinal manipulation and joint mobilization for back pain, neck pain, disc issues, and postural dysfunction.",
                href: "/services/chiropractic.html",
              },
              {
                icon: "🪡",
                title: "Acupuncture",
                description:
                  "Classical and contemporary needling for pain, inflammation, stress, fertility support, and immune regulation.",
                href: "/services/acupuncture.html",
              },
              {
                icon: "💆",
                title: "Massage Therapy",
                description:
                  "Therapeutic, sports, and cupping massage to release deep muscular tension and improve circulation.",
                href: "/services/massage-therapy.html",
              },
              {
                icon: "🧪",
                title: "Applied Kinesiology",
                description:
                  "Muscle-response diagnostics to identify neurological imbalances and guide individualized treatment.",
                href: "/services/applied-kinesiology.html",
              },
              {
                icon: "🥗",
                title: "Holistic Nutrition",
                description:
                  "Evidence-based nutritional counseling and supplementation protocols for chronic conditions and wellness optimization.",
                href: "/services/nutrition.html",
              },
              {
                icon: "🔬",
                title: "Functional Medicine",
                description:
                  "Integrative medicine for complex chronic conditions — fibromyalgia, thyroid, allergy, and hormonal imbalance.",
                href: "/functional-medicine",
              },
            ]}
          />

          <Testimonials />

          <FaqAccordion
            eyebrow="Herndon & Reston patients ask"
            title="Direct answers to common questions."
            tone="light"
            items={[
              {
                q: "Can chiropractors help blood flow and circulation?",
                a: [
                  "Yes. Chiropractic adjustments influence the autonomic nervous system, which regulates vascular tone and circulation. Cervical spine adjustments in particular have been shown to improve blood flow to the brain and upper extremities by reducing nerve interference at the cervical vertebrae.",
                  "Additionally, our thermography screening can detect areas of circulatory asymmetry before they cause symptoms — making it a useful preventive tool for Herndon patients concerned about cardiovascular wellness.",
                ],
              },
              {
                q: "What is the average cost of chiropractic care?",
                a: "For patients using insurance, chiropractic visits typically involve a specialist co-pay ($20–$50 per visit depending on your plan). Without insurance, individual adjustments in the Northern Virginia market range from $60–$150. Our new patient consultation is free. We recommend calling us at (703) 698-7117 so our billing team can run a benefits check before your first visit.",
              },
              {
                q: "Can acupuncture help with dysautonomia?",
                a: "Research published in evidence-based integrative medicine journals suggests acupuncture can help regulate the autonomic nervous system dysfunction that characterizes dysautonomia — including POTS. Needling at specific points influences heart rate variability, reduces sympathetic over-activation, and supports parasympathetic regulation. We've successfully treated patients with dysautonomia as part of a broader integrative care plan.",
              },
              {
                q: "Do you see patients from Reston, VA?",
                a: "Absolutely. Reston is approximately 20 minutes from our Fairfax clinic via the Dulles Toll Road. Many of our current patients commute from Reston, Herndon, and the Dulles corridor. We schedule early morning and evening appointments to accommodate work schedules.",
              },
              {
                q: "What is the downside of functional medicine?",
                a: "Functional medicine requires more time and patience than conventional care — root-cause investigation involves lab work, detailed health history review, and a longer initial appointment process. It also may not be fully covered by insurance (though chiropractic components typically are). The tradeoff is a more comprehensive picture of your health and interventions designed for long-term results rather than symptom suppression.",
              },
            ]}
          />

          <ImageCta
            eyebrow="Herndon and Reston — you're close"
            title="Northern Virginia's most comprehensive wellness practice."
            body="30+ years of results. Six specialties. One coordinated team. If you're in Herndon, Reston, or the Dulles Corridor, Roselle Center for Healing is your next step toward lasting health."
            image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Schedule online", href: "/appointment" }}
            secondaryCta={{ label: "(703) 698-7117", href: "tel:+17036987117" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
