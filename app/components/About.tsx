"use client";
import RevealSection from "./motion/RevealSection";

const STATS = [
  { value: "30+", label: "Years of Practice" },
  { value: "52",  label: "Google Reviews" },
  { value: "6",   label: "Specialties" },
  { value: "All Ages", label: "Patients Served" },
];

export default function About() {
  return (
    <div id="about" data-section="about">
      <section className="about-section">
        <div className="site-container">
          <div className="about-grid">

            {/* Left — headline + stats */}
            <RevealSection>
              <div>
                <p className="section-label" style={{ color: "rgba(198,177,128,0.9)" }}>
                  Fairfax, VA · Est. 1990s
                </p>
                <h2 className="about-title">
                  A Multidisciplinary<br />Team You Can Trust
                </h2>
                <div className="about-stats">
                  {STATS.map(s => (
                    <div key={s.label} className="about-stat">
                      <p className="about-stat-value">{s.value}</p>
                      <p className="about-stat-label">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            {/* Right — body copy */}
            <div className="about-body">
              <RevealSection delay={0.12}>
                <p>
                  At Roselle Center for Healing, we take a truly holistic approach to your health.
                  Lasting wellness comes from understanding your body as a connected system — our goal
                  is to address root causes of discomfort, not just symptoms.
                </p>
              </RevealSection>
              <RevealSection delay={0.22}>
                <p>
                  Our accomplished team includes chiropractors, massage therapists, acupuncturists,
                  holistic nutritionists, and thermography specialists. Together we create
                  individualized treatment plans tailored to your needs.
                </p>
              </RevealSection>
              <RevealSection delay={0.32}>
                <p>
                  Patients of all ages — from children to seniors — benefit from our personalized,
                  natural, non-invasive methods. Many notice improvements in energy, sleep, posture,
                  and overall well-being over time.
                </p>
              </RevealSection>
              <RevealSection delay={0.4}>
                <a
                  href="https://www.rosellecare.com/about-us.html/staff"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "var(--text-sm)",
                    color: "rgba(245,244,239,0.75)",
                    borderBottom: "1px solid rgba(245,244,239,0.3)",
                    paddingBottom: "2px",
                    transition: "color 0.2s",
                    marginTop: "var(--s2)",
                  }}
                >
                  Meet our doctors &amp; specialists →
                </a>
              </RevealSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
