"use client";
import RevealSection from "./motion/RevealSection";
import GsapImageParallax from "./motion/GsapImageParallax";
import CountUp from "./motion/CountUp";
import SplitReveal from "./motion/SplitReveal";
import ScrollDrift from "./motion/ScrollDrift";

const STATS = [
  { value: "30", suffix: "+", label: "Years of Practice" },
  { value: "52",  suffix: "",  label: "Google Reviews" },
  { value: "6",   suffix: "",  label: "Specialties" },
  { value: "\u221E",  suffix: "",  label: "Patients Served" },
];

export default function About() {
  return (
    <div id="about" data-section="about">
      <section className="about-noise bg-fg py-section-py overflow-hidden relative">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
          <div className="grid grid-cols-[1fr_1px_1fr] gap-x-s10 items-stretch relative z-1
                          max-[900px]:grid-cols-1 max-[900px]:gap-y-s8">

            {/* Left: drifting image card */}
            <RevealSection>
              <div className="flex flex-col gap-s6 max-[900px]:pr-0 pr-s4">
                <ScrollDrift distance={320}>
                  <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/450x600_80/webmgr/0g/5/2/2024/rtr-bio-photo-2016.jpg.webp?60de3fe80a9047a9c27cf25f1300a844"
                      alt="Dr. Tom Roselle, DC"
                      speed={0.22}
                      className="w-full rounded-xl"
                    />
                    <div className="absolute bottom-s3 left-s3 right-s3 rounded-lg p-s2 px-s3 z-2"
                      style={{
                        background: "rgba(42,41,40,0.75)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(198,177,128,0.2)",
                      }}>
                      <p className="text-sm font-semibold text-bg font-serif">Dr. Tom Roselle, DC</p>
                      <p className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(198,177,128,0.85)" }}>
                        PAK &middot; PAc &middot; DCCN &middot; DCBCN &middot; Facility Director
                      </p>
                    </div>
                  </div>
                </ScrollDrift>
              </div>
            </RevealSection>

            {/* Vertical divider */}
            <div className="w-px self-stretch max-[900px]:hidden"
              aria-hidden="true"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(198,177,128,0.3) 20%, rgba(198,177,128,0.3) 80%, transparent)" }}
            />

            {/* Right: content */}
            <div className="flex flex-col justify-center gap-s6 max-[900px]:pl-0 pl-s4">
              <RevealSection delay={0.1}>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Fairfax, VA &nbsp;&middot;&nbsp; Est. 1990s
                </p>
                <SplitReveal
                  text="A Multidisciplinary Team You Can"
                  as="h2"
                  className="text-fluid-4xl text-bg leading-[1.08] tracking-tight"
                >
                  {" "}<span className="sr-word inline-block text-accent">Trust</span>
                </SplitReveal>
              </RevealSection>

              <div className="flex flex-col gap-s3">
                <RevealSection delay={0.18}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.62)" }}>
                    At Roselle Center for Healing, we take a truly holistic approach to your health.
                    Lasting wellness comes from understanding your body as a connected system — our goal
                    is to address root causes of discomfort, not just symptoms.
                  </p>
                </RevealSection>
                <RevealSection delay={0.26}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.62)" }}>
                    Our accomplished team includes chiropractors, massage therapists, acupuncturists,
                    holistic nutritionists, and thermography specialists. Together we create
                    individualized treatment plans tailored to your unique needs.
                  </p>
                </RevealSection>
                <RevealSection delay={0.34}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.62)" }}>
                    Patients of all ages — from children to seniors — benefit from our personalized,
                    natural, non-invasive methods. Many notice improvements in energy, sleep, posture,
                    and overall well-being over time.
                  </p>
                </RevealSection>
              </div>

              {/* Stats strip */}
              <RevealSection delay={0.42}>
                <div className="grid grid-cols-4 mt-s2 rounded-lg overflow-hidden
                                max-[900px]:grid-cols-2 max-[480px]:grid-cols-2"
                  style={{ border: "1px solid rgba(245,244,239,0.08)" }}>
                  {STATS.map((s, i) => (
                    <div key={s.label} className="p-s3"
                      style={{
                        borderRight: i < STATS.length - 1 ? "1px solid rgba(245,244,239,0.08)" : "none",
                      }}>
                      <p className="text-fluid-2xl text-bg font-serif leading-none tracking-tight">
                        <CountUp value={s.value} className="text-fluid-2xl text-bg font-serif leading-none tracking-tight" />
                        {s.suffix && <span className="text-accent">{s.suffix}</span>}
                      </p>
                      <p className="text-xs mt-1.5 tracking-wide leading-snug"
                        style={{ color: "rgba(245,244,239,0.38)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </RevealSection>

              {/* CTA link */}
              <RevealSection delay={0.5}>
                <a
                  href="https://www.rosellecare.com/about-us.html/staff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm pb-0.5 transition-colors duration-200"
                  style={{ color: "rgba(245,244,239,0.65)", borderBottom: "1px solid rgba(245,244,239,0.2)" }}
                >
                  Meet our doctors &amp; specialists
                  <span className="text-accent">&rarr;</span>
                </a>
              </RevealSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
