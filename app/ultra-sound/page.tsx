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

const CONDITIONS = [
  {
    title: "Injured Tissue",
    text: "Ultrasound therapy can help reduce inflammation and promote healing in injured tissue.",
  },
  {
    title: "Tendinitis",
    text: "Ultrasound therapy can help improve flexibility, reduce pain, and improve mobility.",
  },
  {
    title: "Muscle Spasms",
    text: "This form of physical therapy uses sound waves to penetrate deep into the skin and release tension in muscle spasms.",
  },
  {
    title: "Arthritis",
    text: "Ultrasound therapy is an effective treatment for arthritis due to its ability to increase circulation and reduce swelling.",
  },
];

export default function UltraSoundPage() {
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
                  <a href="/services.html" className="hover:text-bg transition-colors duration-200">Services</a>
                  <span>/</span>
                  <span className="text-bg">Ultra Sound</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="Ultrasound"
                as="h1"
                className="text-fluid-5xl text-bg leading-[1.05] tracking-tight max-w-4xl"
              >
                {" "}<span className="sr-word inline-block text-accent">Therapy</span>
              </SplitReveal>

              <RevealSection delay={0.2}>
                <p className="text-fluid-base mt-s4 max-w-2xl leading-relaxed" style={{ color: "rgba(245,244,239,0.6)" }}>
                  At Roselle Center For Healing in Fairfax, VA, we&rsquo;re committed to using the
                  latest technology to help you find relief and recover from injuries. If you&rsquo;re
                  suffering from pain and inflammation, our ultrasound therapy is a great tool that can
                  help reduce inflammation, restore injured tissue, and so much more.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Image Section ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 items-center max-lg:grid-cols-1">
                <RevealSection>
                  <div className="rounded-xl overflow-hidden">
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x681_80/webmgr/0g/5/2/services_theraputic_ultrasound.jpg.webp?d53f715f2f8fd5a877e5f88a1c9934b3"
                      alt="Ultrasound therapy treatment being applied on a patient's knee to reduce inflammation and promote healing."
                      speed={0.15}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">What Is It?</p>
                  <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                    What Is Ultrasound Therapy?
                  </h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                    Ultrasound therapy is a form of physical therapy that uses sound waves to
                    penetrate deep into the skin to reduce inflammation and promote healing. Ultrasound
                    therapy can also be used to break up adhesions and fibrous tissue, as well as
                    reduce swelling.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Conditions Treated ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Conditions Treated
                </p>
                <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s8">
                  Ultrasound Therapy Can <span className="text-accent">Help Treat</span>
                </h2>
              </RevealSection>

              <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                {CONDITIONS.map((c, i) => (
                  <RevealSection key={c.title} delay={i * 0.08}>
                    <div
                      className="rounded-xl p-s6 max-md:p-s4 h-full"
                      style={{
                        background: "rgba(245,244,239,0.04)",
                        border: "1px solid rgba(245,244,239,0.08)",
                      }}
                    >
                      <div className="flex items-start gap-s3">
                        <span
                          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-accent"
                          style={{ background: "rgba(198,177,128,0.12)", border: "1px solid rgba(198,177,128,0.25)" }}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="text-lg font-serif font-semibold text-bg mb-s1">{c.title}</h3>
                          <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                            {c.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── Benefits ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 text-accent font-sans">Benefits</p>
                <h2 className="text-fluid-3xl text-fg leading-tight tracking-tight mb-s4">
                  What Are the Benefits of Ultrasound Therapy?
                </h2>
                <p className="text-fluid-base leading-relaxed max-w-3xl" style={{ color: "rgba(42,41,40,0.6)" }}>
                  Ultrasound therapy has many benefits for those suffering from chronic pain or
                  injuries. It can help reduce swelling, improve range of motion, increase blood
                  flow, speed up healing time, reduce nerve irritation, alleviate muscle spasms and
                  help make movement easier. Additionally, ultrasound therapy can be used in
                  conjunction with other treatments such as chiropractic care and massage therapy for
                  further relief.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── How Long ── */}
          <section className="about-noise bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-xs tracking-widest uppercase mb-s2 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Timeline
                </p>
                <h2 className="text-fluid-3xl text-bg leading-tight tracking-tight mb-s4">
                  How Long Will It Take to <span className="text-accent">Work?</span>
                </h2>
                <p className="text-fluid-base leading-relaxed max-w-3xl" style={{ color: "rgba(245,244,239,0.55)" }}>
                  The results of ultrasound therapy can be seen almost immediately after the
                  treatment is completed. Depending on the severity of your condition, you may need a
                  series of treatments over some time to experience full relief. At Roselle Center
                  for Healing, our expert chiropractors will work with you to develop an
                  individualized treatment plan that is tailored to meet your specific needs and goals.
                </p>
              </RevealSection>
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
                    Schedule Your Ultrasound Today!
                  </h2>
                  <p className="text-fluid-base leading-relaxed max-w-2xl mx-auto mb-s6" style={{ color: "rgba(42,41,40,0.55)" }}>
                    At Roselle Center For Healing, we believe that ultrasound therapy can be a great
                    tool to help you find relief from pain and inflammation, and improve your
                    overall health. If you&rsquo;re interested in learning more about our services or
                    scheduling an appointment with us, please call us today!
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
