"use client";
import RevealSection from "./motion/RevealSection";
import GsapImageParallax from "./motion/GsapImageParallax";
import CountUp from "./motion/CountUp";
import SplitReveal from "./motion/SplitReveal";
import ScrollDrift from "./motion/ScrollDrift";
import AboutImageMotion from "./motion/AboutImageMotion";
import { PRACTICE_STATS } from "../lib/practice-stats";

const STATS = [
  { value: "30", suffix: "+", label: "Years of Practice" },
  { value: String(PRACTICE_STATS.reviewCount),  suffix: "",  label: "Google Reviews" },
  { value: "6",   suffix: "",  label: "Specialties" },
  { value: "\u221E",  suffix: "",  label: "Patients Served" },
];

export default function About() {
  return (
    <div id="about" data-section="about">
      <section className="py-section-py overflow-hidden relative"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #eef1f6 12%, #8aa1c4 38%, #2a4575 70%, #1a2f52 90%, #1a2f52 100%)",
        }}
      >
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
          <div className="grid grid-cols-[1fr_1px_1fr] gap-x-s10 items-stretch relative z-1
                          max-[900px]:grid-cols-1 max-[900px]:gap-y-s8">

            {/* Left: drifting image card */}
            <RevealSection>
              <div className="flex flex-col gap-s6 max-[900px]:pr-0 pr-s4">
                <div className="max-[900px]:hidden">
                  <ScrollDrift distance={320}>
                    <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                      style={{ background: "rgba(255,255,255,0.04)" }}>
                      <GsapImageParallax
                        src="/dr-tom-roselle.jpg"
                        alt="Dr. Tom Roselle, DC"
                        speed={0.22}
                        className="w-full rounded-xl"
                      />
                      <AboutImageMotion />
                      <div className="absolute bottom-s3 left-s3 right-s3 rounded-lg p-s2 px-s3 z-2"
                        style={{
                          background: "rgba(10,22,40,0.75)",
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
                <div className="hidden max-[900px]:block">
                  <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(255,255,255,0.04)" }}>
                    <GsapImageParallax
                      src="/dr-tom-roselle.jpg"
                      alt="Dr. Tom Roselle, DC"
                      speed={0.22}
                      className="w-full rounded-xl"
                    />
                    <AboutImageMotion />
                    <div className="absolute bottom-s3 left-s3 right-s3 rounded-lg p-s2 px-s3 z-2"
                      style={{
                        background: "rgba(10,22,40,0.75)",
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
                </div>
              </div>
            </RevealSection>

            {/* Vertical divider */}
            <div className="w-px self-stretch max-[900px]:hidden"
              aria-hidden="true"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(9,19,33,0.25) 30%, rgba(198,177,128,0.45) 85%, transparent)" }}
            />

            {/* Right: content */}
            <div className="flex flex-col justify-center gap-s6 max-[900px]:pl-0 pl-s4">
              <RevealSection delay={0.1}>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "#6b5414" }}>
                  Fairfax, VA &nbsp;&middot;&nbsp; Est. 1990s
                </p>
                <SplitReveal
                  text="A Multidisciplinary Team You Can"
                  as="h2"
                  className="text-fluid-4xl leading-[1.08] tracking-tight text-[#04080f]"
                >
                  {" "}<span className="sr-word inline-block text-[#6b5414]">Trust</span>
                </SplitReveal>
              </RevealSection>

              <div className="flex flex-col gap-s3">
                <RevealSection delay={0.18}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(9,19,33,0.88)" }}>
                    At Roselle Center for Healing, we take a truly holistic approach to your health.
                    Lasting wellness comes from understanding your body as a connected system — our goal
                    is to address root causes of discomfort, not just symptoms.
                  </p>
                </RevealSection>
                <RevealSection delay={0.26}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.92)" }}>
                    Our accomplished team includes chiropractors, massage therapists, acupuncturists,
                    holistic nutritionists, and thermography specialists. Together we create
                    individualized treatment plans tailored to your unique needs.
                  </p>
                </RevealSection>
                <RevealSection delay={0.34}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.85)" }}>
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
                  style={{ border: "1px solid rgba(198,177,128,0.28)", boxShadow: "0 0 0 1px rgba(0,0,0,0.2) inset" }}>
                  {STATS.map((s, i) => (
                    <div key={s.label} className="p-s3 relative"
                      style={{
                        borderRight: i < STATS.length - 1 ? "1px solid rgba(198,177,128,0.18)" : "none",
                        background: "radial-gradient(circle at 50% 0%, rgba(198,177,128,0.22) 0%, transparent 75%)",
                      }}>
                      <p className="text-fluid-2xl text-bg font-serif leading-none tracking-tight">
                        <CountUp value={s.value} className="text-fluid-2xl text-bg font-serif leading-none tracking-tight" />
                        {s.suffix && <span className="text-accent">{s.suffix}</span>}
                      </p>
                      <p className="text-xs mt-1.5 tracking-wide leading-snug"
                        style={{ color: "rgba(245,244,239,0.7)" }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </RevealSection>

              {/* CTA link */}
              <RevealSection delay={0.5}>
                <a
                  href="/about-us/meet-the-doctors---therapists.html"
                  className="group inline-flex items-center gap-2 text-sm pb-0.5 transition-colors duration-200"
                  style={{ color: "rgba(245,244,239,0.92)", borderBottom: "1px solid rgba(198,177,128,0.5)" }}
                >
                  Meet our doctors &amp; specialists
                  <span className="text-accent arrow-nudge">&rarr;</span>
                </a>
              </RevealSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
