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
      <section className="bg-bg py-section-py">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          <RevealSection>
            <div className="text-center mb-s8">
              <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans justify-center"
                style={{ color: "rgba(198,177,128,0.8)" }}>
                Patient Stories
              </p>
              <h2 className="text-fluid-4xl text-fg tracking-tight mb-s2">What Our Patients Say</h2>
              <p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.55)" }}>
                4.5&#9733; on Google &nbsp;&middot;&nbsp; 52 reviews &nbsp;&middot;&nbsp; Fairfax, VA
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 gap-s4 max-md:grid-cols-1">
            {REVIEWS.map((t, i) => (
              <RevealSection key={t.name} delay={i * 0.1}>
                <SpotlightCard className="bg-card-bg rounded-xl overflow-hidden grid grid-cols-2 min-h-[300px]
                                          max-md:grid-cols-1">
                  <div className="p-s4 flex flex-col justify-between gap-s3">
                    <div>
                      <span className="inline-block rounded-full py-0.5 px-2.5 text-xs text-fg w-fit mb-s1"
                        style={{ background: "rgba(42,41,40,0.08)" }}>{t.cat}</span>
                      <h3 className="text-xl text-fg mb-s2">{t.title}</h3>
                      <blockquote className="text-sm leading-relaxed italic"
                        style={{ color: "rgba(42,41,40,0.7)" }}>
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-s2 mt-auto pt-s2"
                      style={{ borderTop: "1px solid rgba(42,41,40,0.08)" }}>
                      <div className="w-[38px] h-[38px] rounded-md overflow-hidden shrink-0 bg-fg relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.av} alt={t.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg">{t.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(42,41,40,0.5)" }}>{t.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative max-md:min-h-[220px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.img} alt="" aria-hidden="true" loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </SpotlightCard>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.25}>
            <div className="text-center mt-s8">
              <a
                href="https://www.google.com/maps/place/Roselle+Center+for+Healing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm pb-0.5 transition-colors duration-200"
                style={{ color: "rgba(42,41,40,0.5)", borderBottom: "1px solid rgba(42,41,40,0.15)" }}
              >
                View all reviews on Google &rarr;
              </a>
            </div>
          </RevealSection>

        </div>
      </section>
    </div>
  );
}
