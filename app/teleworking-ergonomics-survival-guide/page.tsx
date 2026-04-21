"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const PARTS = [
  {
    number: 1,
    title: "Part 1: Introduction",
    description: "Dr. Scott Lamp introduces the teleworking ergonomics survival guide and covers the foundations of proper workplace setup.",
  },
  {
    number: 2,
    title: "Part 2: Teleworking Basics",
    description: "Peripheral Devices, Keyboard, Laptop Surfaces & More, Keyboard Size, Lumbar Support, Mouse, Wristpads and More!",
  },
  {
    number: 3,
    title: "Part 3: Memory Pegs",
    description: "Dr. Lamp covers memory pegs to help you remember and apply key ergonomic principles throughout your workday.",
  },
];

export default function TeleworkingErgonomicsPage() {
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
                  <a href="/education-lectures.html" className="transition-colors duration-200 hover:text-accent">Health Education</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Teleworking: Ergonomics Survival Guide</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Teleworking: Ergonomics Survival Guide" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Ergonomics</p>
                <SplitReveal text="Home & Workplace Ergonomics" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-s6 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Dr. Scott Lamp, DC, CCSP of the Roselle Center for Healing presents a thorough teleworking survival guide for home/workplace ergonomics.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="mt-s4 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  In this 3-PART SERIES, Dr. Lamp covers improvement processes that may remove risk factors that lead to musculoskeletal injuries. Utilizing Dr. Lamp&apos;s recommendation will allow for improved performance and productivity, and will help avoid ergonomics-related injuries and stress.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <a
                  href="https://vimeo.com/showcase/6960732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-s6 text-sm font-medium tracking-widest uppercase text-accent transition-colors duration-200 hover:text-fg"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Watch on Vimeo
                </a>
              </RevealSection>
            </div>
          </section>

          {/* ── 3 Parts ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Video Series</p>
                <SplitReveal text="3-Part Ergonomics Series" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <div className="grid grid-cols-3 gap-s6 mt-s8 max-md:grid-cols-1">
                {PARTS.map((part, i) => (
                  <RevealSection key={part.number} delay={i * 0.08}>
                    <div className="flex flex-col gap-s4 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] h-full">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-fg text-sm font-bold shrink-0">{part.number}</span>
                      <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug">{part.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.45)" }}>{part.description}</p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── Disclaimer + Contact ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="p-s6 rounded-xl bg-card-bg max-w-[720px]">
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight leading-snug mb-s3">Disclaimer</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.55)" }}>
                    Health care information and lectures provided at the Roselle Center for Healing are not intended or implied to be a substitute for professional medical advice, diagnosis or treatment; it is for general information and educational purposes only. Any information received should not replace the appropriate consultation and examination process by a licensed physician. Always consult your own physician prior to changing any current medical directive or prescription.
                  </p>
                </div>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="mt-s8 max-w-[720px]">
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight leading-snug mb-s3">Contact Dr. Lamp</h3>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    If you have questions or need to schedule a consultation with Dr. Scott Lamp, DC, CCSP, please contact Dr. Lamp by completing the <a href="/contact" className="text-accent font-medium underline underline-offset-2 transition-colors duration-200 hover:text-fg">CONTACT US</a> form or by calling the office at <a href="tel:+17036987117" className="text-fg font-medium">(703) 698-7117</a>.
                  </p>
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
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Have Questions About Ergonomics?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Roselle Center For Healing in Fairfax, VA for a consultation with Dr. Scott Lamp, DC, CCSP.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Hours + Location ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (<div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}><span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span><span className="text-bg font-medium">{h.time}</span></div>))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p><a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p></div>
                    <div><p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p><p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p></div>
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
