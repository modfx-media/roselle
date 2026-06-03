"use client";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import FeatureSplit from "@/app/components/templates/FeatureSplit";
import ContentBlock from "@/app/components/templates/ContentBlock";
import FeatureGrid from "@/app/components/templates/FeatureGrid";
import StatStrip from "@/app/components/templates/StatStrip";
import CtaBand from "@/app/components/templates/CtaBand";

const SERVICES = [
  {
    title: "Chiropractic Care",
    description:
      "Spinal alignment, pain relief, and adjustments — the foundation of restoring balance and mobility throughout the body.",
    href: "/services/chiropractic.html",
    image: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
  },
  {
    title: "Acupuncture",
    description:
      "Traditional energy-balance techniques to address chronic pain and unlock the body's natural healing.",
    href: "/services/acupuncture.html",
    image: "/services/close-up-cupping-therapy-experience.jpg",
  },
  {
    title: "Applied Kinesiology",
    description:
      "Muscle testing and diagnosis to find the root imbalance — not just chase the symptom.",
    href: "/services/applied-kinesiology.html",
    image: "/services/download.jpeg",
  },
  {
    title: "Massage Therapy",
    description:
      "Targeted bodywork that supports recovery, reduces tension, and complements your full care plan.",
    href: "/services/massage-therapy.html",
    image: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
  },
  {
    title: "Functional Medicine",
    description:
      "An integrative, root-cause approach for fatigue, immunity, hormones, digestion, and chronic conditions.",
    href: "/functional-medicine",
    image: "/services/woman-with-physical-impairment-analyzing-x-ray-scan-with-doctor-checkup-visit-medical-cabinet-old-patient-wheelchair-user-looking-bones-radiography-diagnosis-results-healthcare.jpg",
  },
  {
    title: "Nutrition",
    description:
      "Personalized nutrition guidance to fuel healing, performance, and long-term wellness.",
    href: "/services/nutrition.html",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
  },
  {
    title: "Sports Medicine & Rehabilitation",
    description:
      "Rehab, performance, and recovery care designed around your sport and your timeline.",
    href: "/sports-medicine",
    image: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
  },
  {
    title: "Prenatal Chiropractic",
    description:
      "Comfort, pelvic balance, and gentle care for every trimester.",
    href: "/prenatal-chiropractic",
    image: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
  },
  {
    title: "Webster Technique",
    description:
      "A specialized prenatal protocol to support pelvic balance and optimal baby positioning.",
    href: "/webster-technique",
    image: "/services/close-up-cupping-therapy-experience.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Comprehensive care · Fairfax, VA"
            title="Care plans built around your body, not a checklist."
            subtitle="When your health feels out of sync, finding the right kind of care can feel like searching in the dark. We offer a full spectrum of services — chiropractic, acupuncture, nutrition, massage, functional medicine and more — designed to bring clarity, connection and real relief."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/services.png.webp?157e097e54c08e04ae83d378888d2a14"
            imageAlt="Chiropractor assisting patient with arm adjustment at Roselle Center for Healing."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "10+", label: "Integrative therapies" },
              { value: "40+", label: "Years of practice" },
              { value: "Whole-body", label: "Care model" },
              { value: "Custom", label: "Plans every visit" },
            ]}
          />

          <FeatureSplit
            eyebrow="Healing with purpose"
            title="Services at Roselle Center For Healing."
            body="Whether you're managing chronic back pain, navigating neck pain, or seeking answers that go deeper than surface-level symptoms, our approach is grounded in collaboration and long-term wellness. Every plan is shaped to the patient — not the other way around."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/services.png.webp?157e097e54c08e04ae83d378888d2a14"
            imageAlt="Patient receiving chiropractic care at Roselle Center for Healing."
            bullets={[
              "Chiropractic, acupuncture, nutrition, massage, functional medicine",
              "Designed around how your body wants to heal",
              "Patient education at every step",
            ]}
          />

          <ContentBlock
            tone="dark"
            eyebrow="Foundation"
            title="Chiropractic care that goes beyond the adjustment."
            body="At the center of our practice is chiropractic care — the foundation for restoring balance and mobility throughout the body. Dr. Tom Roselle brings decades of experience to each patient interaction, delivering care that's precise and tailored. Whether your goal is to relieve back pain, ease tension from neck pain, or improve your posture, chiropractic care helps bring your nervous system back into alignment so the rest of the body can follow."
          />

          <FeatureGrid
            eyebrow="Two pillars"
            title="More than one way to get you well."
            cols={2}
            cards={[
              {
                title: "Functional Medicine — looking beneath the surface",
                description:
                  "For patients tired of quick fixes, we explore how diet, inflammation, hormones, toxins, and stress influence your health. With advanced testing and individualized plans, we help you discover the 'why' behind chronic fatigue, pain, digestive issues or immune dysfunction.",
              },
              {
                title: "Massage Therapy that supports healing",
                description:
                  "More than a spa experience — our licensed massage therapists work alongside Dr. Roselle to provide targeted treatments. Whether you're recovering from injury, managing chronic muscle tension, or simply want to feel more at ease, massage restores circulation, reduces stress, and enhances mobility.",
              },
            ]}
          />

          <FeatureGrid
            tone="dark"
            eyebrow="Explore the full menu"
            title="Our full range of services."
            intro="Each service can stand alone — but they're most powerful when combined into a personalized care plan."
            cols={3}
            cards={SERVICES}
          />

          <ContentBlock
            eyebrow="Collaborative care"
            title="Patient-focused care in Fairfax, VA."
            body="What makes our services different is the way they work together. Each patient receives a customized plan that may combine chiropractic, functional medicine, massage therapy, acupuncture, or other treatments. We don't believe in one-size-fits-all solutions. Instead, we believe in giving your body what it needs to repair itself — carefully, consistently, and with the guidance of an experienced team."
          />

          <CtaBand
            tone="gold"
            eyebrow="Start your health journey"
            title="Find a chiropractor near you who treats the whole person."
            body="If you're looking for a chiropractor near you in Fairfax, VA who offers a whole-body approach to healing, call Roselle Center for Healing. Whether you're seeking relief from back pain or neck pain — or exploring functional medicine and massage therapy — we're here to help you find the answers and the care you've been looking for."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book an appointment", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
