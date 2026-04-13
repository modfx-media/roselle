"use client";
import RevealSection from "./motion/RevealSection";

const STATS = [
  { value: "30+", label: "Years of Practice" },
  { value: "52", label: "Google Reviews" },
  { value: "6", label: "Specialties" },
  { value: "All Ages", label: "Patients Served" },
];

export default function About() {
  return (
    <div id="about" data-section="about">
      <section className="about-section">
        <div className="site-container">
          <div className="about-grid">
            <RevealSection>
              <div>
                <span style={{
                  display: "inline-block",
                  background: "rgba(245,244,239,0.12)",
                  border: "1px solid rgba(245,244,239,0.2)",
                  borderRadius: "var(--radius-full)",
                  padding: "4px 14px",
                  fontSize: "var(--text-xs)",
                  color: "rgba(245,244,239,0.7)",
                  marginBottom: "var(--s3)",
                }}>
                  Fairfax, VA · Est. 1990s
                </span>
                <h2 className="about-title">A Multidisciplinary Team You Can Trust</h2>

                {/* Stats row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--s3)", marginTop: "var(--s6)" }}>
                  {STATS.map(s => (
                    <div key={s.label} style={{ borderTop: "1px solid rgba(245,244,239,0.15)", paddingTop: "var(--s2)" }}>
                      <p style={{ fontSize: "var(--fluid-3xl)", color: "var(--bg)", fontFamily: "var(--font-libre-baskerville, Georgia, serif)", lineHeight: 1 }}>{s.value}</p>
                      <p style={{ fontSize: "var(--text-sm)", color: "rgba(245,244,239,0.55)", marginTop: "4px" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <div className="about-body">
              <RevealSection delay={0.15}>
                <p>
                  At Roselle Center for Healing, we take a truly holistic approach to your health.
                  Lasting wellness comes from understanding your body as a connected system — our goal
                  is to help you address root causes of discomfort, not just symptoms.
                </p>
              </RevealSection>
              <RevealSection delay={0.25}>
                <p>
                  Our accomplished team includes chiropractors, massage therapists, acupuncturists,
                  holistic nutritionists, and thermography specialists. Working together, we create
                  individualized treatment plans tailored to your needs.
                </p>
              </RevealSection>
              <RevealSection delay={0.35}>
                <p>
                  Patients of all ages — from children to seniors — benefit from our personalized,
                  natural, non-invasive methods. Many notice improvements in energy, sleep, posture,
                  and overall well-being over time.
                </p>
              </RevealSection>
              <RevealSection delay={0.42}>
                <a
                  href="https://www.rosellecare.com/about-us.html/staff"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "var(--text-sm)", color: "var(--bg)",
                    borderBottom: "1px solid rgba(245,244,239,0.4)",
                    paddingBottom: "2px",
                    transition: "border-color 0.2s",
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
