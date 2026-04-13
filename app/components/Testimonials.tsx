"use client";
import RevealSection from "./motion/RevealSection";
import SpotlightCard from "./motion/SpotlightCard";

const REVIEWS = [
  {
    cat: "Long-Term Patient",
    title: "10+ Years of Trust",
    quote: "I have been coming to Roselle Center for over 10 years. I love it! Dr. Lamp is exceptional in identifying root causes and intervening accordingly.",
    name: "Rhonda L.",
    date: "April 2026",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=700&fit=crop&crop=face",
    av: "https://i.pravatar.cc/80?img=25",
  },
  {
    cat: "Wellbeing",
    title: "Multi-Pronged Approach",
    quote: "Roselle Center has been such a boon to both my mental and physical health. Their multi-pronged approach fits in well with my personal outlook on health and wellness.",
    name: "Elizabeth S.",
    date: "April 2026",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=700&fit=crop",
    av: "https://i.pravatar.cc/80?img=47",
  },
  {
    cat: "Family Care",
    title: "A Doctor Who Listens",
    quote: "It's so refreshing to have a doctor that listens. Dr. Lamp has given us hope after 3 months of misdiagnoses from pediatric specialists.",
    name: "Holly S.",
    date: "April 2026",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=700&fit=crop",
    av: "https://i.pravatar.cc/80?img=32",
  },
  {
    cat: "Chiropractic",
    title: "Amazing Since 1995",
    quote: "The staff is always friendly, courteous and helpful. I have known Dr. Lamp since 1995 and he is the ONLY doctor I have seen since. He is absolutely amazing!",
    name: "Rick W.",
    date: "April 2026",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=700&fit=crop",
    av: "https://i.pravatar.cc/80?img=11",
  },
];

export default function Testimonials() {
  return (
    <div id="testimonials" data-section="testimonials">
      <section className="testimonials-section">
        <div className="site-container">

          <RevealSection>
            <div className="testimonials-header">
              <p className="section-label" style={{ justifyContent: "center", color: "rgba(198,177,128,0.8)" }}>
                Patient Stories
              </p>
              <h2>What Our Patients Say</h2>
              <p>4.5★ on Google &nbsp;·&nbsp; 52 reviews &nbsp;·&nbsp; Fairfax, VA</p>
            </div>
          </RevealSection>

          <div className="testimonials-grid">
            {REVIEWS.map((t, i) => (
              <RevealSection key={t.name} delay={i * 0.1}>
                <SpotlightCard className="testimonial-card">
                  <div className="testimonial-body">
                    <div>
                      <span className="testimonial-category">{t.cat}</span>
                      <h3>{t.title}</h3>
                      <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                    </div>
                    <div className="testimonial-author">
                      <div className="testimonial-avatar">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.av} alt={t.name} loading="lazy" />
                      </div>
                      <div>
                        <p className="testimonial-author-name">{t.name}</p>
                        <p className="testimonial-author-date">{t.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt="" aria-hidden="true" loading="lazy" />
                  </div>
                </SpotlightCard>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.25}>
            <div style={{ textAlign: "center", marginTop: "var(--s8)" }}>
              <a
                href="https://www.google.com/maps/place/Roselle+Center+for+Healing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "var(--text-sm)",
                  color: "rgba(245,244,239,0.5)",
                  borderBottom: "1px solid rgba(245,244,239,0.2)",
                  paddingBottom: "2px",
                  transition: "color 0.2s",
                }}
              >
                View all reviews on Google →
              </a>
            </div>
          </RevealSection>

        </div>
      </section>
    </div>
  );
}
