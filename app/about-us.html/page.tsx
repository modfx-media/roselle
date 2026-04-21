"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import GsapImageParallax from "../components/motion/GsapImageParallax";
import MagneticButton from "../components/motion/MagneticButton";
import SpotlightCard from "../components/motion/SpotlightCard";

export default function AboutUsPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>About</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="About Us"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Intro Section: Rooted In Results ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Our Story
                </p>
                <SplitReveal
                  text="Rooted In Results: Meet Roselle Center For Healing"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <div className="grid grid-cols-[1fr_1fr] gap-s10 mt-s10 items-center
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                {/* Image */}
                <RevealSection delay={0.1}>
                  <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(42,41,40,0.04)" }}>
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/about%20us.png.webp?9756851d43ab801c42fe6f45e0b23372"
                      alt="Woman receiving laser therapy on her arm from a healthcare professional in a healing center, highlighting integrative chiropractic care at Roselle Center for Healing in Fairfax, VA."
                      speed={0.18}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                {/* Text */}
                <div className="flex flex-col gap-s4">
                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Health isn&rsquo;t a single destination—it&rsquo;s a dynamic journey. At Roselle Center for
                      Healing in Fairfax, VA, we help people reclaim their health through
                      personalized, integrative care that treats the whole person, not just the pain. Whether
                      you&rsquo;re dealing with chronic back pain, stubborn neck pain, or looking for a deeper
                      understanding of your health, Dr. Tom Roselle and his experienced team are here
                      to guide you toward lasting wellness.
                    </p>
                  </RevealSection>
                </div>
              </div>
            </div>
          </section>

          {/* ── A Different Kind Of Healing Center ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-[1fr_1px_1fr] gap-x-s10 items-start
                              max-[900px]:grid-cols-1 max-[900px]:gap-y-s8">

                {/* Left */}
                <div className="flex flex-col gap-s8">
                  <RevealSection>
                    <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12]">
                      A Different Kind Of Healing Center
                    </h2>
                    <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                      Roselle Center for Healing isn&rsquo;t your average chiropractic clinic. It&rsquo;s a place
                      where conventional and functional medicine work together to uncover root causes,
                      not just manage symptoms. From chiropractic care and massage therapy to
                      nutrition, acupuncture, and advanced diagnostic tools, we build treatment plans that
                      support how your body naturally wants to heal. That means no guesswork—just
                      thoughtful care shaped by years of experience and a passion for helping people feel
                      like themselves again.
                    </p>
                  </RevealSection>
                </div>

                {/* Vertical divider */}
                <div className="w-px self-stretch max-[900px]:hidden"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(198,177,128,0.3) 20%, rgba(198,177,128,0.3) 80%, transparent)" }}
                />

                {/* Right */}
                <div className="flex flex-col gap-s8">
                  <RevealSection delay={0.12}>
                    <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12]">
                      Expert Care From A Chiropractor Near You In Fairfax, VA
                    </h2>
                    <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                      Finding a chiropractor near you should mean more than picking the closest
                      option. At our Fairfax, VA center, Dr. Tom Roselle brings decades of clinical
                      experience, a deep commitment to patient education, and a whole-person approach to every
                      appointment. He&rsquo;s helped thousands find relief from back pain and neck pain
                      using methods that combine traditional chiropractic with innovative therapies,
                      always tailored to the individual.
                    </p>
                  </RevealSection>
                </div>

              </div>
            </div>
          </section>

          {/* ── Addressing Pain With Purpose + Whole-Body Reset ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s8 max-md:grid-cols-1">

                <RevealSection>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            card-hover-lift">
                    <span className="text-xs text-accent font-semibold tracking-widest">01</span>
                    <h2 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                      Addressing Pain With Purpose
                    </h2>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>
                      Back pain and neck pain are two of the most common complaints we see—but they&rsquo;re
                      rarely the whole story. Pain often points to deeper imbalances in the body.
                      That&rsquo;s why we look beyond the obvious, considering how posture, stress, nutrition,
                      and lifestyle all play a role. With chiropractic adjustments, targeted massage
                      therapy, and supportive functional medicine practices, we treat pain at its
                      source—not just the surface.
                    </p>
                  </SpotlightCard>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                            card-hover-lift">
                    <span className="text-xs text-accent font-semibold tracking-widest">02</span>
                    <h2 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                      More Than Symptom Relief—A Whole-Body Reset
                    </h2>
                    <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>
                      What sets Roselle Center for Healing apart is the belief that healing should
                      lead to more than comfort—it should lead to clarity. Whether you&rsquo;re struggling with
                      fatigue, unresolved pain, or a health concern that no one&rsquo;s been able to
                      explain, we&rsquo;re here to ask different questions and look in new places. Our team works
                      closely with you, offering care that adapts as your body begins to change and
                      improve.
                    </p>
                  </SpotlightCard>
                </RevealSection>

              </div>
            </div>
          </section>

          {/* ── Meet Expert Chiropractors ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">

              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Our Team
                </p>
                <SplitReveal
                  text="Meet Expert Chiropractors and Therapists"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.12}>
                <div className="mt-s8 rounded-xl overflow-hidden"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}>
                  {/* Video */}
                  <div className="w-full aspect-video">
                    <iframe
                      src="https://player.vimeo.com/video/279532866?h=0&title=0&byline=0&portrait=0"
                      className="w-full h-full"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Roselle Center for Healing Introduction"
                    />
                  </div>

                  {/* Description */}
                  <div className="p-s6">
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.62)" }}>
                      At the Roselle Center for Healing, we take a holistic approach to the health. By educating
                      patients about the body and about the treatments, they become active partners in achieving
                      optimal health. We are a practice of chiropractors, acupuncturists, nutritionists, massage
                      therapists, rehabilitation specialists, and functional medicine experts. Our team works
                      together to provide complete care to our patients through natural integrative medicine.
                      This video provides an introduction to our practice and our facility, but we encourage
                      you to come see for yourself why almost one million patients have visited us over the
                      last four decades.
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* CTA link */}
              <RevealSection delay={0.2}>
                <a
                  href="https://www.rosellecare.com/about-us.html/staff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm pb-0.5 mt-s6 transition-colors duration-200"
                  style={{ color: "rgba(245,244,239,0.65)", borderBottom: "1px solid rgba(245,244,239,0.2)" }}
                >
                  Meet our doctors &amp; specialists
                  <span className="text-accent arrow-nudge">&rarr;</span>
                </a>
              </RevealSection>
            </div>
          </section>

          {/* ── Take The First Step CTA ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10
                                bg-fg rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                      Take The First Step Toward Real Relief
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                      If you&rsquo;re looking for a chiropractor near you in Fairfax, VA who offers more
                      than quick fixes, call Roselle Center for Healing at (703) 698-7117. Dr. Tom
                      Roselle and his team are here to help you uncover the deeper causes of your symptoms
                      and support your body&rsquo;s natural ability to heal—through chiropractic, functional
                      medicine, massage therapy, and more.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "tel:+17036987117"}
                    >
                      Call (703) 698-7117
                    </MagneticButton>
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "/appointment"}
                    >
                      Book an Appointment
                    </MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours & Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">

                {/* Hours */}
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">
                    Hours of Operation
                  </h3>
                  <div className="flex flex-col">
                    {[
                      { day: "Monday",    time: "7:00 am - 5:00 pm" },
                      { day: "Tuesday",   time: "10:00 am - 7:00 pm" },
                      { day: "Wednesday", time: "7:00 am - 5:00 pm" },
                      { day: "Thursday",  time: "2:00 pm - 7:00 pm" },
                      { day: "Friday",    time: "7:00 am - 5:00 pm" },
                      { day: "Saturday",  time: "8:00 am - 1:00 pm" },
                      { day: "Sunday",    time: "Closed" },
                    ].map((h, i) => (
                      <div key={h.day} className="flex justify-between items-center py-s2"
                        style={{ borderBottom: i < 6 ? "1px solid rgba(245,244,239,0.08)" : "none" }}>
                        <span className="text-sm font-medium text-bg">{h.day}</span>
                        <span className="text-sm" style={{ color: h.time === "Closed" ? "rgba(245,244,239,0.35)" : "rgba(245,244,239,0.6)" }}>
                          {h.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </RevealSection>

                {/* Location */}
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s2">
                    Merrifield Location In Fairfax, VA
                  </h3>
                  <p className="text-xs tracking-widest uppercase mb-s5"
                    style={{ color: "rgba(198,177,128,0.75)" }}>
                    Your Local Chiropractic Clinic
                  </p>

                  <div className="flex flex-col gap-s3">
                    <div>
                      <p className="text-sm font-semibold text-bg mb-1">Roselle Center For Healing</p>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                        8500 Executive Park Ave STE 300<br />Fairfax, VA 22031
                      </p>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <a href="tel:+17036987117"
                        className="text-sm transition-colors duration-200 hover:text-bg"
                        style={{ color: "rgba(245,244,239,0.6)" }}>
                        Phone: (703) 698-7117
                      </a>
                      <p className="text-sm" style={{ color: "rgba(245,244,239,0.55)" }}>
                        Fax: (703) 698-5729
                      </p>
                      <a href="mailto:rosellecare@gmail.com"
                        className="text-sm transition-colors duration-200 hover:text-bg"
                        style={{ color: "rgba(245,244,239,0.6)" }}>
                        Email: rosellecare@gmail.com
                      </a>
                    </div>

                    <a
                      href="https://maps.app.goo.gl/5WJebWVTjWfPRX3VA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm mt-s2 pb-0.5 transition-colors duration-200"
                      style={{ color: "rgba(245,244,239,0.65)", borderBottom: "1px solid rgba(245,244,239,0.2)" }}
                    >
                      Get Directions
                      <span className="text-accent arrow-nudge">&rarr;</span>
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
