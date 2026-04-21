"use client";
import RevealSection from "./motion/RevealSection";
import SpotlightCard from "./motion/SpotlightCard";
import MagneticButton from "./motion/MagneticButton";
import ParallaxImage from "./motion/ParallaxImage";
import ScrollScale from "./motion/ScrollScale";
import SplitReveal from "./motion/SplitReveal";

const SERVICES = [
  {
    title: "Chiropractic Care",
    desc: "Restore spinal alignment and mobility through precise, gentle adjustments. Relief from back pain, neck pain, sciatica, and more.",
    tags: ["Spinal Alignment", "Pain Relief", "Adjustments"],
    img: "/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg",
    href: "/services/chiropractic.html",
  },
  {
    title: "Acupuncture",
    desc: "Support healing, balance energy, and address chronic conditions through traditional acupuncture therapy.",
    tags: ["Energy Balance", "Chronic Pain", "Healing"],
    img: "/services/close-up-cupping-therapy-experience.jpg",
    href: "/services/acupuncture.html",
  },
  {
    title: "Applied Kinesiology (AK)",
    desc: "A diagnostic system using muscle testing to identify imbalances and guide individualized treatment.",
    tags: ["Muscle Testing", "Diagnosis", "Balance"],
    img: "/services/download.jpeg",
    href: "/services/applied-kinesiology.html",
  },
  {
    title: "Nutrition",
    desc: "Personalized nutritional plans from our holistic nutritionists to improve overall wellness and vitality.",
    tags: ["Wellness", "Diet", "Lifestyle"],
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    href: "/services/nutrition.html",
  },
  {
    title: "Massage Therapy",
    desc: "Relieve tension, reduce stress, and support your body's natural healing with therapeutic and cupping massage.",
    tags: ["Relaxation", "Cupping", "Recovery"],
    img: "/services/closeup-young-man-getting-neck-massage-therapy-spa-clinic.jpg",
    href: "/services/massage-therapy.html",
  },
  {
    title: "Functional Medicine & Thermography",
    desc: "Long-term health support addressing root causes of chronic conditions through integrative medicine and advanced thermographic imaging.",
    tags: ["Root Cause", "Thermography", "Prevention"],
    img: "/services/woman-with-physical-impairment-analyzing-x-ray-scan-with-doctor-checkup-visit-medical-cabinet-old-patient-wheelchair-user-looking-bones-radiography-diagnosis-results-healthcare.jpg",
    href: "/functional-medicine",
  },
];

export default function Services() {
  return (
    <div id="features" data-section="features">
      <section className="py-section-py bg-bg">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          <RevealSection>
            <div className="flex justify-between items-end gap-s4 mb-s8
                            max-md:flex-col max-md:items-start max-md:gap-s3">
              <div>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Our Services
                </p>
                <SplitReveal
                  text="Comprehensive Chiropractic, Acupuncture & Wellness Services"
                  as="h2"
                  className="text-fluid-4xl text-fg tracking-tight"
                />
                <p className="text-fluid-base mt-s2 leading-relaxed max-w-[40ch]"
                  style={{ color: "rgba(42,41,40,0.6)" }}>
                  A full spectrum of holistic services to resolve pain and restore function.
                </p>
              </div>
              <MagneticButton
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule a Consultation
              </MagneticButton>
            </div>
          </RevealSection>

          <div className="grid grid-cols-3 gap-s4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {SERVICES.map((s, i) => (
              <ScrollScale key={s.title}>
                <SpotlightCard className="bg-card-bg rounded-xl overflow-hidden flex flex-col h-full card-hover-lift">
                  <div className="h-[200px] relative overflow-hidden shrink-0">
                    <ParallaxImage src={s.img} alt={s.title} speed={0.07} />
                    {/* Image gradient overlay */}
                    <div className="absolute inset-0 pointer-events-none z-1"
                      style={{ background: "linear-gradient(to top, rgba(42,41,40,0.55) 0%, transparent 45%)" }} />
                  </div>
                  <div className="p-s3 pb-s4 flex flex-col gap-s2 flex-1">
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map(t => (
                        <span key={t} className="rounded-full py-0.5 px-2.5 text-xs text-fg"
                          style={{ background: "rgba(42,41,40,0.07)" }}>{t}</span>
                      ))}
                    </div>
                    <h3 className="text-xl text-fg mt-s1">{s.title}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>{s.desc}</p>
                    <a
                      href={s.href}
                      className="group text-xs text-fg inline-flex items-center gap-1 mt-auto pb-px transition-opacity duration-200
                                 opacity-55 hover:opacity-100 hover-underline-gold"
                    >
                      Learn more <span className="arrow-nudge">&rarr;</span>
                    </a>
                  </div>
                </SpotlightCard>
              </ScrollScale>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
