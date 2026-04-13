"use client";
import RevealSection from "./motion/RevealSection";
import SpotlightCard from "./motion/SpotlightCard";
import MagneticButton from "./motion/MagneticButton";
import ParallaxImage from "./motion/ParallaxImage";

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
      <section className="services-section">
        <div className="site-container">

          <RevealSection>
            <div className="services-header">
              <div>
                <p className="section-label">Our Services</p>
                <h2 className="services-title">
                  Comprehensive Care,<br />Designed Around You
                </h2>
                <p className="services-sub">
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

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <RevealSection key={s.title} delay={i * 0.07}>
                <SpotlightCard className="service-card">
                  <div className="service-card-img">
                    <ParallaxImage src={s.img} alt={s.title} speed={0.07} />
                  </div>
                  <div className="service-card-body">
                    <div className="service-tags">
                      {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "var(--text-xs)",
                        color: "var(--fg)",
                        opacity: 0.55,
                        borderBottom: "1px solid rgba(42,41,40,0.2)",
                        paddingBottom: "1px",
                        display: "inline-block",
                        marginTop: "auto",
                        transition: "opacity 0.2s",
                      }}
                    >
                      Learn more →
                    </a>
                  </div>
                </SpotlightCard>
              </RevealSection>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
