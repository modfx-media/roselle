"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


const EVENTS = [
  {
    title: "NEW HEALTHCARE CLASS: Putting Your Best Foot Forward",
    description:
      "Your foundation matters! Every step you take sends a kinetic chain reaction from your arches all the way to your neck! Learn how to fortify your foundation, reclaim your stride, and start every day on the right foot! Join Dr. Harlan Browning, DC for a free health class at the Roselle Center for Healing on Wednesday, April 29 at 6:00 PM. Space is limited! Reserve your seat today! Call our office today to reserve a seat for this event at 703-698-7117 or register online now.",
    registerLink: "https://www.drtomroselle.com/health-education-class-registration/",
  },
  {
    title: 'NEW EVENT: Blooms & Bowls',
    description:
      'This is a special and "souper" afternoon dedicated to your health and convenience. Looking to move more easily or eat better without the kitchen stress? Join us on Wednesday, May 13, from 12-6 PM at the Roselle Center for Healing. Register below or call 703-698-7117.',
    registerLink: null,
  },
];

export default function EducationLecturesPage() {
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
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Health Education</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Roselle Center For Healing: Health Education Lectures in Fairfax, VA" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Education</p>
                <SplitReveal text="Free Health Education Lectures" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-s6 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Attend a free health education lecture at the Roselle Center for Healing. Lectures are free of charge unless otherwise indicated. Registration is required for all lectures and workshops. See our list of upcoming live lectures below. Please call <a href="tel:+17036987117" className="text-fg font-medium">(703) 698-7117</a> or register below.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s6 p-s6 rounded-xl bg-card-bg max-w-[720px]">
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight leading-snug mb-s3">Disclaimer</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.55)" }}>
                    Health care information and lectures provided at the Roselle Center for Healing are not intended or implied to be a substitute for professional medical advice, diagnosis or treatment; it is for general information and educational purposes only. Any information received should not replace the appropriate consultation and examination process by a licensed physician. Always consult your own physician prior to changing any current medical directive or prescription.
                  </p>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Events ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Upcoming</p>
                <SplitReveal text="Upcoming Lectures & Events" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <div className="grid grid-cols-2 gap-s6 mt-s8 max-md:grid-cols-1">
                {EVENTS.map((event, i) => (
                  <RevealSection key={i} delay={i * 0.08}>
                    <div className="flex flex-col gap-s4 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] h-full">
                      <span className="text-[10px] tracking-widest uppercase font-sans px-2.5 py-1 rounded-full bg-accent/20 text-accent self-start">Event</span>
                      <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug">{event.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.45)" }}>{event.description}</p>
                      <div className="flex flex-wrap gap-s3 mt-auto pt-s3" style={{ borderTop: "1px solid rgba(245,244,239,0.06)" }}>
                        <a href="tel:+17036987117" className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-bg transition-colors duration-200 hover:text-accent">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                          Call to Register
                        </a>
                        {event.registerLink && (
                          <a
                            href={event.registerLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent transition-colors duration-200 hover:text-bg"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                            Register Online
                          </a>
                        )}
                      </div>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── Radio Section ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Radio & Podcasts</p>
                <SplitReveal text="Ageless Health® with Dr. Tom Roselle, DC" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-s6 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Listen to Ageless Health® with Dr. Tom Roselle, DC live broadcast on WMAL 105.9 FM and WMAL.com on Sundays at 12:00 PM ET in Virginia, Maryland and Washington, D.C. followed by live stream and podcasts at{" "}
                  <a href="https://www.drtomroselle.com" target="_blank" rel="noopener noreferrer" className="text-accent font-medium underline underline-offset-2 transition-colors duration-200 hover:text-fg">www.drtomroselle.com</a>.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="mt-s4 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Tune into Ageless Health® with Dr. Tom Roselle, DC on the John Fredericks Media Network Saturday mornings at 7:00 AM.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <div className="mt-s8 p-s6 rounded-xl bg-card-bg max-w-[720px]">
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight leading-snug mb-s3">Webinar Library</h3>
                  <p className="text-fluid-base leading-relaxed mb-s4" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Access our library of past health education webinars and video lectures.
                  </p>
                  <a
                    href="https://vimeo.com/showcase/4371949"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-accent transition-colors duration-200 hover:text-fg"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Watch Webinars on Vimeo
                  </a>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Want to Attend a Health Education Lecture?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Roselle Center For Healing in Fairfax, VA to register for upcoming lectures and workshops.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                    <a
                      href="https://www.drtomroselle.com/health-education-class-registration/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium tracking-widest uppercase text-accent transition-colors duration-200 hover:text-fg"
                    >
                      Register Online
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
