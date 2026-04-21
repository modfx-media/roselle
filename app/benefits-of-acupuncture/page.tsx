"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import SpotlightCard from "../components/motion/SpotlightCard";
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
  "Back and neck pain",
  "Sciatica and nerve pain",
  "Migraines and headaches",
  "Arthritis and joint pain",
  "Stress, anxiety, and sleep issues",
];

export default function BenefitsOfAcupuncturePage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-accent">Services</a><span>/</span>
                  <a href="/services/acupuncture.html" className="transition-colors duration-200 hover:text-accent">Acupuncture</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Benefits of Acupuncture</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Benefits of Acupuncture" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Ancient Healing</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Benefits of Acupuncture</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Acupuncture has been used for thousands of years to restore balance, relieve pain, and promote overall wellness. Today, it&rsquo;s recognized by modern medicine as a safe, effective therapy for a wide range of conditions, from chronic pain to stress and fatigue. At Roselle Center for Healing in Fairfax, VA, our experienced practitioners use acupuncture as part of an integrated approach to help patients heal naturally and feel their best.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x682_80/webmgr/0g/5/2/acupuncture.jpg.webp?8904b15aa078859b7c3bd086a02a1c3a" alt="Acupuncture model with needles inserted at specific points, illustrating traditional Chinese medicine concepts and energy pathways." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>About</p>
                <SplitReveal text="What Is Acupuncture?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Acupuncture is a key component of traditional Chinese medicine that involves the gentle insertion of very fine, sterile needles into specific points on the body. These points are believed to influence the flow of energy—or &ldquo;Qi&rdquo;—through pathways called meridians. From a scientific standpoint, acupuncture helps stimulate the nervous system, increase circulation, and release endorphins, the body&rsquo;s natural pain relievers.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  It&rsquo;s a natural, drug-free option for people seeking relief from both acute and chronic conditions.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Conditions Treated</p>
                <SplitReveal text="Common Conditions Acupuncture Can Help" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>Acupuncture is widely used for:</p>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s4 mt-s8 max-md:grid-cols-1">
                {CONDITIONS.map((c, i) => (
                  <RevealSection key={c} delay={0.05 * i}>
                    <SpotlightCard className="bg-card-bg rounded-xl p-s5 flex items-center gap-s3 card-hover-lift">
                      <span className="text-xs font-semibold tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-fluid-base text-fg">{c}</span>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
              <RevealSection delay={0.2}>
                <p className="text-fluid-base leading-relaxed mt-s8 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Whether you&rsquo;re looking for acupuncture for back pain, acupuncture for sciatica, or overall wellness care, this time-tested therapy offers real results for both body and mind.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Healing Process</p>
                <SplitReveal text="How Acupuncture Supports Healing" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  When performed by trained professionals, acupuncture works to bring the body back into balance. It improves blood flow, reduces inflammation, and supports the body&rsquo;s natural healing processes. Many patients notice improvements in pain, energy levels, and even digestion after just a few sessions.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  At Roselle Center for Healing, acupuncture is often combined with chiropractic care, nutrition, and lifestyle guidance for a complete, whole-body approach. This collaboration allows us to address not just symptoms but also the underlying causes of discomfort, helping you achieve long-lasting relief.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Your First Visit</p>
                <SplitReveal text="What to Expect During Treatment" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Your first acupuncture session begins with a thorough consultation. Your provider will take time to understand your health history, concerns, and goals before creating a personalized treatment plan. Most patients describe the sensation as relaxing, and many feel a sense of calm and balance afterward.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Call Our Chiropractors Near You and Experience the Benefits for Yourself</h3>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  If you&rsquo;ve been searching for acupuncture near you or a chiropractor near you who offers holistic care, we invite you to visit Roselle Center for Healing in Fairfax, VA. Discover how acupuncture can support your body&rsquo;s natural ability to heal. Call (703) 698-7117 today to schedule your appointment and take the next step toward better health—naturally.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <MagneticButton className="btn-primary-inverted" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (<div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(42,41,40,0.08)" }}><span style={{ color: "rgba(42,41,40,0.45)" }}>{h.day}</span><span className="text-fg font-medium">{h.time}</span></div>))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-fg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Address</p><p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p></div>
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Phone</p><a href="tel:+17036987117" className="text-fluid-base text-fg transition-colors duration-200 hover:text-accent">(703) 698-7117</a></div>
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Fax</p><p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>(703) 698-5729</p></div>
                    <div><p className="text-xs tracking-widest uppercase text-accent mb-1">Email</p><p className="text-fluid-base" style={{ color: "rgba(42,41,40,0.68)" }}>rosellecare@gmail.com</p></div>
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
