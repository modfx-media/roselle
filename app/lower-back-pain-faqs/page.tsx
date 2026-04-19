"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import GsapImageParallax from "../components/motion/GsapImageParallax";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const FAQS = [
  {
    question: "What Causes Lower Back Pain?",
    answer:
      "There isn't one single cause of lower back pain. It can result from poor posture, overuse, disc injuries, muscle strain, arthritis, or even stress. Sometimes the pain appears suddenly after lifting something heavy, while other times it builds slowly over weeks or months. Understanding the root cause is key to choosing the right lower back pain treatment.",
  },
  {
    question: "Can Chiropractic Care Help with Lower Back Pain?",
    answer:
      "Absolutely. Chiropractic care focuses on restoring proper alignment and movement to the spine. When the spine is misaligned, it can irritate nearby nerves and muscles, leading to pain and stiffness. Through gentle adjustments and targeted therapies, a chiropractor can relieve pressure, improve mobility, and support the body's natural healing process — all without medication or surgery.",
  },
  {
    question: "What About Sciatica?",
    answer:
      "Sciatica is a specific type of lower back pain that radiates from the lower spine into the hip, leg, or foot. It's caused by irritation or compression of the sciatic nerve. At Roselle Center for Healing, we offer sciatica treatment that focuses on reducing nerve pressure, improving posture, and restoring healthy movement so you can find long-term relief.",
  },
  {
    question: "When Should I Seek Professional Care?",
    answer:
      "If your back pain lasts more than a few days, limits your movement, or radiates down your leg, it's time to schedule an evaluation. Early lower back pain treatment can prevent chronic pain and support faster recovery.",
  },
];

export default function LowerBackPainFaqsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero ── */}
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs mb-s4" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="hover:text-bg transition-colors duration-200">Home</a>
                  <span>/</span>
                  <a href="/conditions-treated" className="hover:text-bg transition-colors duration-200">Conditions Treated</a>
                  <span>/</span>
                  <span className="text-bg">Lower Back Pain FAQs</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Lower Back Pain"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">FAQs</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  Lower back pain is one of the most common reasons people seek help from a
                  chiropractor, and for good reason. Whether it&rsquo;s a dull ache after sitting
                  too long, sharp pain that radiates down the leg, or stiffness that won&rsquo;t go
                  away, back discomfort can affect everything from your sleep to your daily routine.
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
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/lower-back-pain2.jpg.webp?a19c043cdf2dd82d34d928729172241e"
                      alt="Man experiencing lower back pain while sitting at a desk, highlighting the impact of discomfort on daily activities and work life."
                      speed={0.15}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Chiropractic Care</p>
                  <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                    Your Lower Back Pain Questions, Answered
                  </h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                    At Roselle Center for Healing in Fairfax, VA, our experienced team offers
                    natural, effective lower back pain treatment designed to restore mobility and
                    improve quality of life. Here are answers to some of the most common questions
                    our patients ask about back pain and how chiropractic care can help.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── FAQ Cards ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Frequently Asked Questions
                </p>
                <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s8">
                  Common Questions About <span className="text-accent">Lower Back Pain</span>
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
                            {faq.answer}
                          </p>
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
                    Schedule Your Visit Today
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-2xl mx-auto mb-s6" style={{ color: "rgba(42,41,40,0.55)" }}>
                    Don&rsquo;t let back pain control your life. Call Roselle Center for Healing in
                    Fairfax, VA, at (703)&nbsp;698-7117 to schedule your consultation and learn how
                    personalized lower back pain treatment can help you move freely again.
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

          {/* ── Hours & Location ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 max-lg:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif leading-tight tracking-tight mb-s4">Hours of Operation</h3>
                  <ul className="flex flex-col gap-2">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm py-1.5"
                        style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span className="text-bg font-medium">{h.day}</span>
                        <span style={{ color: "rgba(245,244,239,0.45)" }}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-2xl text-bg font-serif leading-tight tracking-tight mb-s4">Location</h3>
                  <div className="rounded-xl overflow-hidden mb-s4" style={{ border: "1px solid rgba(245,244,239,0.08)" }}>
                    <iframe
                      title="Roselle Center for Healing Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.123456!2d-77.306!3d38.856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e8a3c0e1b3d%3A0x1234567890abcdef!2s8500+Executive+Park+Ave+%23300%2C+Fairfax%2C+VA+22031!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <p className="text-sm text-bg font-medium">Roselle Center For Healing</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(245,244,239,0.45)" }}>
                    8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                  </p>
                  <div className="flex flex-col gap-1 mt-s2">
                    <a href="tel:+17036987117" className="text-sm text-accent hover:text-bg transition-colors duration-200">
                      Phone: (703) 698-7117
                    </a>
                    <p className="text-sm" style={{ color: "rgba(245,244,239,0.45)" }}>Fax: (703) 698-5729</p>
                    <a href="mailto:rosellecare@gmail.com" className="text-sm text-accent hover:text-bg transition-colors duration-200">
                      rosellecare@gmail.com
                    </a>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
