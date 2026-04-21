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

const SYMPTOMS = [
  {
    label: "Severe Fatigue",
    desc: "Waking up tired, even after sleeping for ten hours.",
  },
  {
    label: "\"Fibro Fog\"",
    desc: "Difficulty concentrating or remembering details.",
  },
  {
    label: "Sleep Disturbances",
    desc: "Restless legs or sleep apnea.",
  },
  {
    label: "Sensory Sensitivity",
    desc: "Strong reactions to bright lights, noise, or odors.",
  },
];

export default function FibromyalgiaFaqsPage() {
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
                  <a href="/conditions-treated" className="hover:text-bg transition-colors duration-200">Conditions Treated</a>
                  <span>/</span>
                  <a href="/fibromyalgia" className="hover:text-bg transition-colors duration-200">Fibromyalgia</a>
                  <span>/</span>
                  <span className="text-bg">Fibromyalgia FAQs</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Fibromyalgia"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">FAQs</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  Symptoms, causes &amp; chiropractic care in Fairfax, VA. Understanding fibromyalgia
                  is the first step toward reclaiming your health.
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
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/elbowpain.jpg.webp?3e133dc321a6cb3315ba317476add68a"
                      alt="Patient consulting with chiropractor, examining elbow pain, emphasizing personalized care for fibromyalgia treatment."
                      speed={0.15}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Understanding Fibromyalgia</p>
                  <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                    Causes &amp; Symptoms
                  </h2>
                  <p className="text-fluid-base leading-relaxed mb-s3" style={{ color: "rgba(42,41,40,0.6)" }}>
                    It is one of the most frustrating diagnoses a patient can receive. You look fine
                    on the outside. Your blood work often comes back normal. Yet, you feel like you
                    have the flu every single day. Your muscles ache, your energy is non-existent,
                    and your brain feels foggy.
                  </p>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                    Fibromyalgia is a complex, chronic disorder that affects millions of people, yet
                    it remains widely misunderstood. At the Roselle Center For Healing, we look past
                    the symptoms to understand why your body is sounding the alarm.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── The "Volume Knob" Theory ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 items-start max-lg:grid-cols-1">
                <RevealSection>
                  <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                    How It Works
                  </p>
                  <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s4">
                    The &ldquo;Volume Knob&rdquo; <span className="text-accent">Theory</span>
                  </h2>
                  <p className="text-fluid-base leading-relaxed mb-s3" style={{ color: "rgba(245,244,239,0.55)" }}>
                    While the exact cause is still being researched, most experts agree that
                    fibromyalgia is a problem with how the brain and spinal cord process pain
                    signals.
                  </p>
                  <p className="text-fluid-base leading-relaxed mb-s3" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Think of your nervous system like a stereo. In a healthy body, the volume is set
                    to a normal level. In a body with fibromyalgia, that volume knob is turned all
                    the way up. This process, called &ldquo;central sensitization,&rdquo; means that
                    things that shouldn&rsquo;t hurt&mdash;like a gentle touch or a change in
                    weather&mdash;are interpreted by your brain as intense pain.
                  </p>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Triggers for this shift can vary. It often begins after a physical trauma (like a
                    car accident), surgery, infection, or significant psychological stress.
                  </p>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                    Common Symptoms
                  </p>
                  <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s4">
                    Recognizing the <span className="text-accent">Signs</span>
                  </h2>
                  <p className="text-fluid-base leading-relaxed mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                    The hallmark symptom is widespread musculoskeletal pain. But it rarely stops
                    there. Patients often experience:
                  </p>

                  <div className="flex flex-col gap-s3">
                    {SYMPTOMS.map((s, i) => (
                      <div
                        key={s.label}
                        className="rounded-xl p-s4"
                        style={{
                          background: "rgba(245,244,239,0.04)",
                          border: "1px solid rgba(245,244,239,0.08)",
                        }}
                      >
                        <div className="flex items-start gap-s3">
                          <span
                            className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-accent"
                            style={{ background: "rgba(198,177,128,0.12)", border: "1px solid rgba(198,177,128,0.25)" }}
                          >
                            {i + 1}
                          </span>
                          <div>
                            <h3 className="text-base font-serif font-semibold text-bg mb-0.5">{s.label}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.5)" }}>
                              {s.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── A Holistic Path Forward ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Treatment Approach</p>
                <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                  A Holistic Path Forward
                </h2>
                <p className="text-fluid-base leading-relaxed max-w-3xl mb-s3" style={{ color: "rgba(42,41,40,0.6)" }}>
                  Because this is a multi-system issue, a single pill is rarely the answer. You need
                  a comprehensive approach.
                </p>
                <p className="text-fluid-base leading-relaxed max-w-3xl" style={{ color: "rgba(42,41,40,0.6)" }}>
                  That is where we come in. As a holistic clinic, we combine chiropractic care,
                  acupuncture, and nutrition to address the root dysfunction. If you are searching
                  for a chiropractor near you, you need a team that understands how to calm a
                  hypersensitive nervous system.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div
                  className="rounded-2xl p-s8 max-md:p-s6 text-center"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}
                >
                  <h2 className="text-fluid-3xl text-bg font-serif leading-tight tracking-tight mb-s3">
                    There Is Hope!
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-2xl mx-auto mb-s6" style={{ color: "rgba(245,244,239,0.55)" }}>
                    You don&rsquo;t have to navigate this alone. If you are looking for effective
                    fibromyalgia treatment near you, we are ready to help you lower the volume on
                    your pain. Call the Roselle Center For Healing today at (703)&nbsp;698-7117 to
                    discuss your fibromyalgia treatment options.
                  </p>
                  <div className="flex gap-s3 justify-center flex-wrap">
                    <MagneticButton onClick={() => window.location.href = "/appointment"}>
                      Book an Appointment
                    </MagneticButton>
                    <a
                      href="tel:+17036987117"
                      className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full font-medium transition-colors duration-200 text-bg"
                      style={{ border: "1px solid rgba(245,244,239,0.25)" }}
                    >
                      (703) 698-7117
                    </a>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours & Location ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 max-lg:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-fg font-serif leading-tight tracking-tight mb-s4">Hours of Operation</h3>
                  <ul className="flex flex-col gap-2">
                    {HOURS.map((h) => (
                      <li key={h.day} className="flex justify-between text-sm py-1.5"
                        style={{ borderBottom: "1px solid rgba(42,41,40,0.08)" }}>
                        <span className="text-fg font-medium">{h.day}</span>
                        <span style={{ color: "rgba(42,41,40,0.45)" }}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-2xl text-fg font-serif leading-tight tracking-tight mb-s4">Location</h3>
                  <div className="rounded-xl overflow-hidden mb-s4" style={{ border: "1px solid rgba(42,41,40,0.08)" }}>
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
                  <p className="text-sm text-fg font-medium">Roselle Center For Healing</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(42,41,40,0.45)" }}>
                    8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                  </p>
                  <div className="flex flex-col gap-1 mt-s2">
                    <a href="tel:+17036987117" className="text-sm text-accent hover:text-fg transition-colors duration-200">
                      Phone: (703) 698-7117
                    </a>
                    <p className="text-sm" style={{ color: "rgba(42,41,40,0.45)" }}>Fax: (703) 698-5729</p>
                    <a href="mailto:rosellecare@gmail.com" className="text-sm text-accent hover:text-fg transition-colors duration-200">
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
