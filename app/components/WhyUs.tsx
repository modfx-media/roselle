"use client";
import RevealSection from "./motion/RevealSection";
import SpotlightCard from "./motion/SpotlightCard";
import MagneticButton from "./motion/MagneticButton";
import TextScramble from "./motion/TextScramble";
import SplitReveal from "./motion/SplitReveal";

const PILLARS = [
  { num: "01", title: "Root-Cause Focus", body: "We don\u2019t just treat symptoms. Every care plan starts with understanding the underlying cause of your discomfort." },
  { num: "02", title: "Multidisciplinary Team", body: "Chiropractors, acupuncturists, massage therapists, nutritionists, and thermography specialists \u2014 all under one roof." },
  { num: "03", title: "All Ages Welcome", body: "From pediatric care to senior wellness, our natural, non-invasive methods are tailored to every stage of life." },
  { num: "04", title: "Education-First", body: "We take time to explain your options. Informed patients heal faster and maintain better long-term health." },
  { num: "05", title: "30+ Years of Trust", body: "Serving the Fairfax, VA community since the 1990s with consistent, compassionate, evidence-based care." },
  { num: "06", title: "Ageless Health\u00AE Program", body: "Dr. Roselle\u2019s twice Emmy\u00AE-nominated health philosophy \u2014 integrative medicine that empowers you to take control." },
];

export default function WhyUs() {
  return (
    <div id="why-us" data-section="why-us">
      <section className="bg-bg py-section-py">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          <RevealSection>
            <div className="grid grid-cols-2 gap-s8 items-end mb-s10
                            max-md:grid-cols-1 max-md:gap-s4">
              <div>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Why Roselle
                </p>
                <h2 className="text-fluid-4xl text-fg tracking-tight leading-[1.08]">
                  <SplitReveal text="The Roselle" as="h2" className="text-fluid-4xl text-fg tracking-tight leading-[1.08]">
                    {" "}<span className="sr-word inline-block gradient-text">Difference</span>
                  </SplitReveal>
                </h2>
              </div>
              <p className="text-fluid-base leading-relaxed max-w-[42ch] self-end"
                style={{ color: "rgba(42,41,40,0.6)" }}>
                Coordinated, holistic care that treats you as a whole person —
                not just a set of symptoms.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-3 gap-s3 max-lg:grid-cols-2 max-md:grid-cols-1">
            {PILLARS.map((p, i) => (
              <RevealSection key={p.num} delay={i * 0.07}>
                <SpotlightCard className="bg-card-bg rounded-xl p-s5 px-s4 flex flex-col gap-s2
                                          transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                                          hover:-translate-y-1">
                  <TextScramble text={p.num} className="text-xs text-accent font-semibold tracking-widest" speed={50} />
                  <h3 className="text-xl text-fg leading-snug mt-s1">{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>{p.body}</p>
                </SpotlightCard>
              </RevealSection>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <RevealSection delay={0.3}>
            <div className="flex items-center justify-between gap-s4 mt-s10 p-s6 px-s8
                            bg-fg rounded-xl max-md:flex-col max-md:text-center max-md:p-s5 max-md:px-s4">
              <p className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                Ready to experience the difference?
              </p>
              <MagneticButton
                className="btn-primary-inverted"
                onClick={() => window.location.href = "/appointment"}
              >
                Book an Appointment
              </MagneticButton>
            </div>
          </RevealSection>

        </div>
      </section>
    </div>
  );
}
