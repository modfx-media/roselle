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
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
    href: "https://www.rosellecare.com/services/chiropractic.html",
  },
  {
    title: "Acupuncture",
    desc: "Support healing, balance energy, and address chronic conditions through traditional acupuncture therapy.",
    tags: ["Energy Balance", "Chronic Pain", "Healing"],
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=600&fit=crop",
    href: "https://www.rosellecare.com/services/acupuncture.html",
  },
  {
    title: "Massage Therapy",
    desc: "Relieve tension, reduce stress, and support your body's natural healing with therapeutic massage.",
    tags: ["Relaxation", "Tension Relief", "Recovery"],
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    href: "https://www.rosellecare.com/services/massage-therapy.html",
  },
  {
    title: "Applied Kinesiology",
    desc: "A diagnostic system using muscle testing to identify imbalances and guide individualized treatment.",
    tags: ["Muscle Testing", "Diagnosis", "Balance"],
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    href: "https://www.rosellecare.com/services/applied-kinesiology.html",
  },
  {
    title: "Nutritional Guidance",
    desc: "Personalized nutritional plans from our holistic nutritionists to improve overall wellness and vitality.",
    tags: ["Wellness", "Diet", "Lifestyle"],
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop",
    href: "https://www.rosellecare.com/services/nutrition.html",
  },
  {
    title: "Functional Medicine",
    desc: "Long-term health support addressing root causes of chronic conditions through integrative medicine.",
    tags: ["Root Cause", "Chronic Conditions", "Prevention"],
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop",
    href: "https://www.rosellecare.com/functional-medicine",
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
                  text="Comprehensive Care, Designed Around You"
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
                <SpotlightCard className="bg-card-bg rounded-xl overflow-hidden flex flex-col h-full">
                  <div className="h-[200px] relative overflow-hidden shrink-0">
                    <ParallaxImage src={s.img} alt={s.title} speed={0.07} />
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-fg inline-block mt-auto pb-px transition-opacity duration-200
                                 opacity-55 hover:opacity-100"
                      style={{ borderBottom: "1px solid rgba(42,41,40,0.2)" }}
                    >
                      Learn more &rarr;
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
