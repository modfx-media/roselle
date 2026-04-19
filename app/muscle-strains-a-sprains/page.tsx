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

const TREATMENTS = [
  {
    title: "Chiropractic Adjustments",
    text: "When the spine is misaligned, it can put pressure on the surrounding soft tissues. Chiropractic adjustments help correct any misalignments to help the body work more efficiently and allow it to heal itself. Not only that, but the adjustments can prevent injuries from reoccurring.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Acupuncture Therapy",
    text: "Acupuncture can be highly effective for strains, sprains, and sore soft tissues. During the treatment, thin needles are inserted into certain points of the body, which can reduce inflammation and help you feel your best.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Massage Therapy",
    text: "Massage therapy helps to reduce the soreness in the soft tissues. Depending on where the injury is, different massage techniques may be used. Some massages use deep pressure to reduce knots that can form in the soft tissue, while other types help the soft tissue relax and relieve pain.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
      </svg>
    ),
  },
  {
    title: "Hot and Cold Packs",
    text: "When you have a sprain or a strain, hot and cold packs can provide relief. The treatment helps to slow blood flow in the area, reduce any swelling or inflammation, and reduces pain.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
  },
  {
    title: "Therapeutic Exercises",
    text: "Your personalized care plan may also consist of therapeutic exercises. Our chiropractors can teach you specific exercises that you can do at home to increase your strength, range of motion, and prevent further injury.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function MuscleStrainsSprainsPage() {
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
                  <span className="text-bg">Muscle Strains &amp; Sprains</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Muscle Strains"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">&amp; Sprains</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  Muscle strains and sprains sound alike, but they are very different. Sprains occur
                  when a ligament is torn or stretched, while a strain happens when a muscle
                  stretches or tears. Both can result in severe pain that limits your mobility and
                  affects your daily activities.
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
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/pulled-muscle.jpg.webp?2a3d4b1fbda62fc8a368934d9955c646"
                      alt="Massage therapy session focused on muscle recovery for strains and sprains, with a therapist applying pressure to the leg of a patient on a treatment table."
                      speed={0.15}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Treatment Options</p>
                  <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                    Comprehensive Care for Strains &amp; Sprains
                  </h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                    At Roselle Center for Healing in Fairfax, VA, we provide various treatments to
                    alleviate your discomfort and help you heal fully. Whether your injury is from a
                    sport, auto accident, or daily activity, our team will develop a personalized
                    treatment plan for your unique needs.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Treatments ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Our Approach
                </p>
                <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s8">
                  Treatment <span className="text-accent">Methods</span>
                </h2>
              </RevealSection>

              <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                {TREATMENTS.map((t, i) => (
                  <RevealSection key={t.title} delay={i * 0.08}>
                    <div
                      className="rounded-xl p-s6 max-md:p-s4 h-full"
                      style={{
                        background: "rgba(245,244,239,0.04)",
                        border: "1px solid rgba(245,244,239,0.08)",
                      }}
                    >
                      <div className="flex items-start gap-s3">
                        <span
                          className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-accent"
                          style={{ background: "rgba(198,177,128,0.12)", border: "1px solid rgba(198,177,128,0.25)" }}
                        >
                          {t.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-bg mb-s1">{t.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            {t.text}
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
                    Contact Roselle Center for Healing
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-2xl mx-auto mb-s6" style={{ color: "rgba(42,41,40,0.55)" }}>
                    If you have a muscle strain or sprain due to a sport or auto accident, our team
                    at Roselle Center for Healing in Fairfax, VA, can help. After an evaluation, we
                    will develop a treatment plan for your unique needs. Call (703)&nbsp;698-7117
                    today to schedule an appointment.
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
