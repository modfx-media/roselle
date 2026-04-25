"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import Contact from "../components/Contact";


const FAQS = [
  {
    question: "What Is Applied Kinesiology?",
    answer:
      "Applied Kinesiology combines principles of anatomy, physiology, and neurology to evaluate how different systems in the body interact. Through specific muscle testing, our chiropractors can detect imbalances, weaknesses, or stressors that may be affecting your posture, coordination, or overall function. The goal is not just to relieve pain but to restore balance and optimize how your body works.",
  },
  {
    question: "How Does Applied Kinesiology Work with Chiropractic Care?",
    answer:
      "Applied Kinesiology and chiropractic care work hand-in-hand. While chiropractic adjustments focus on improving joint alignment and nervous system function, AK identifies the underlying muscular, structural, or neurological issues contributing to misalignment. By combining these approaches, our chiropractors can create a personalized treatment plan that promotes natural healing, stability, and overall wellness.",
  },
  {
    question: "Who Can Benefit from Applied Kinesiology?",
    answer:
      "Applied Kinesiology is suitable for people of all ages. It can be especially helpful for those experiencing chronic pain or fatigue, postural imbalances, stress-related conditions, unexplained muscle tension or weakness, and athletes looking to improve performance.",
    bullets: [
      "Chronic pain or fatigue",
      "Postural imbalances",
      "Stress-related conditions",
      "Unexplained muscle tension or weakness",
      "Athletes looking to improve performance",
    ],
  },
  {
    question: "How Many Sessions Will I Need?",
    answer:
      "The number of sessions needed varies depending on your individual condition, overall health, and treatment goals. Some patients experience improvement after just a few sessions, while others may require ongoing care to achieve optimal balance and long-term results. During your initial evaluation, our chiropractors will recommend a treatment plan tailored specifically to your needs.",
  },
];

export default function KinesiologyFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs mb-s4" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="hover:text-bg transition-colors duration-200">Home</a>
                  <span>/</span>
                  <a href="/services.html" className="hover:text-bg transition-colors duration-200">Services</a>
                  <span>/</span>
                  <a href="/services/applied-kinesiology.html" className="hover:text-bg transition-colors duration-200">Applied Kinesiology</a>
                  <span>/</span>
                  <span className="text-bg">Kinesiology FAQs</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Kinesiology"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">FAQs</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  At Roselle Center for Healing in Fairfax, VA, we believe that the body&rsquo;s
                  ability to move and function properly is deeply connected to its ability to heal.
                  Applied Kinesiology (AK) is a specialized approach that helps identify imbalances
                  in the body&rsquo;s muscles, joints, and nervous system, giving a more complete
                  understanding of your health.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Image + Intro ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 items-center max-lg:grid-cols-1">
                <RevealSection>
                  <div className="rounded-xl overflow-hidden">
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/kinesio.jpg.webp?bfce089529f033384b2f41e1ba340d81"
                      alt="Kinesiology tape rolls in various colors, including green, pink, and blue, alongside scissors on a wooden surface, illustrating tools used in Applied Kinesiology."
                      speed={0.15}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Applied Kinesiology</p>
                  <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                    Your Kinesiology FAQs
                  </h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                    Our experienced chiropractors integrate AK into care plans to support long-term
                    wellness and optimal function. Below, you&rsquo;ll find answers to common
                    questions about Applied Kinesiology and how it can enhance your treatment
                    experience.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── FAQ Accordion ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Frequently Asked Questions
                </p>
                <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s8">
                  Common Questions About <span className="text-accent">Applied Kinesiology</span>
                </h2>
              </RevealSection>

              <div className="flex flex-col gap-s4">
                {FAQS.map((faq, i) => (
                  <RevealSection key={faq.question} delay={i * 0.08}>
                    <div
                      className="rounded-xl p-s6 max-md:p-s4"
                      style={{
                        background: "rgba(245,244,239,0.04)",
                        border: "1px solid rgba(245,244,239,0.08)",
                      }}
                    >
                      <div className="flex items-start gap-s3">
                        <span
                          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-accent mt-0.5"
                          style={{ background: "rgba(198,177,128,0.12)", border: "1px solid rgba(198,177,128,0.25)" }}
                        >
                          Q{i + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-bg mb-s2">{faq.question}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            {faq.bullets
                              ? "Applied Kinesiology is suitable for people of all ages. It can be especially helpful for those experiencing:"
                              : faq.answer}
                          </p>
                          {faq.bullets && (
                            <ul className="mt-s2 flex flex-col gap-1.5">
                              {faq.bullets.map((b) => (
                                <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "rgba(245,244,239,0.55)" }}>
                                  <span className="text-accent mt-1">•</span>
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div
                  className="rounded-2xl p-s8 max-md:p-s6 text-center bg-card-bg"
                  style={{ border: "1px solid rgba(42,41,40,0.06)" }}
                >
                  <h2 className="text-fluid-3xl text-fg font-serif leading-tight tracking-tight mb-s3">
                    Schedule Your Appointment Today
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-2xl mx-auto mb-s6" style={{ color: "rgba(42,41,40,0.55)" }}>
                    If you&rsquo;re curious about how Applied Kinesiology can support your health
                    and enhance your recovery, our caring team at Roselle Center for Healing is here
                    to help. Call (703) 698-7117 today to schedule your appointment and learn more
                    about our integrative treatments.
                  </p>
                  <div className="flex gap-s3 justify-center flex-wrap">
                    <MagneticButton onClick={() => window.location.href = "/appointment"}>
                      Book an Appointment
                    </MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium transition-colors duration-200 text-fg"
                      style={{ border: "1px solid rgba(42,41,40,0.2)" }}
                    >
                      (703) 698-7117
                    </a>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>


          <Contact />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
