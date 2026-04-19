"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
import SpotlightCard from "../../components/motion/SpotlightCard";
import GsapImageParallax from "../../components/motion/GsapImageParallax";

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const TECHNIQUES = [
  { name: "Swedish Massage", desc: "Uses gentle, flowing strokes to promote relaxation and improve circulation" },
  { name: "Deep Tissue Massage", desc: "Targets deeper muscle layers to relieve chronic tension and knots" },
  { name: "Sports Massage", desc: "Focuses on preventing injury and enhancing recovery for athletes" },
  { name: "Trigger Point Therapy", desc: "Applies pressure to specific points to reduce localized pain" },
  { name: "Prenatal Massage", desc: "Designed for expectant mothers to reduce pregnancy-related discomfort" },
  { name: "Reflexology", desc: "Stimulates pressure points on the feet or hands linked to other body areas" },
];

const MASSAGE_BENEFITS = [
  "Reducing muscle tension and stiffness",
  "Alleviating chronic pain and improving joint mobility",
  "Enhancing blood circulation and promoting faster healing",
  "Lowering stress and anxiety levels",
  "Boosting mood through the release of endorphins",
  "Supporting recovery from injuries and physical exertion",
];

export default function MassageTherapyPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <section className="bg-fg relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-bg">Services</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Massage Therapy</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Expert Massage Therapy at Roselle Center for Healing in Fairfax, VA" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Therapeutic Care</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Expert Massage Therapy in Fairfax, VA</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Massage therapy provides clients with a natural way to relax, reduce tension, and support their overall health. By applying skilled techniques to the muscles and soft tissues, massage therapists help alleviate pain, improve circulation, and promote mental well-being. Before scheduling your appointment at Roselle Center for Healing in Fairfax, VA, learn more about this treatment below.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x681_80/webmgr/0g/5/2/massage%20therapy.jpg.webp?5d81ced378b1d807f74ed89a022d31f0" alt="Massage therapy session with therapist applying techniques to alleviate back pain and promote relaxation." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>About</p>
                <SplitReveal text="Understanding Massage Therapy" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Massage therapy involves the manipulation of muscles, tendons, and ligaments to relieve discomfort and improve physical function. It is often used to address chronic pain, injuries, or everyday stress. This hands-on approach also helps release built-up tension and improve overall mobility. Each session is tailored to the client&rsquo;s individual needs to ensure targeted care and effective results.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Techniques</p>
                <SplitReveal text="Types of Techniques Used" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  There are several types of massage therapy designed to meet different goals. Some of these types include the following:
                </p>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s4 mt-s8 max-md:grid-cols-1">
                {TECHNIQUES.map((t, i) => (
                  <RevealSection key={t.name} delay={0.05 * i}>
                    <SpotlightCard className="bg-card-bg rounded-xl p-s5 flex flex-col gap-s2 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                      <span className="text-xs font-semibold tracking-widest text-accent">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-fluid-lg text-fg font-medium">{t.name}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>{t.desc}</p>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Key Benefits</p>
                <SplitReveal text="The Benefits of Massage Therapy" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Massage therapy offers a wide range of benefits that support both body and mind, including:
                </p>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s4 mt-s8 max-md:grid-cols-1">
                {MASSAGE_BENEFITS.map((b, i) => (
                  <RevealSection key={b} delay={0.05 * i}>
                    <SpotlightCard className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s5 flex items-center gap-s3 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1">
                      <span className="text-xs font-semibold tracking-widest" style={{ color: "rgba(198,177,128,0.85)" }}>{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-fluid-base text-bg">{b}</span>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Visit Roselle Center for Healing for Chronic Pain Treatment</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      If you&rsquo;re considering massage therapy, contact Roselle Center for Healing in Fairfax, VA, at (703) 698-7117 today. We&rsquo;re happy to answer any questions you may have and help you schedule your appointment. When you&rsquo;re searching for massage therapy near you, our team is ready to assist!
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

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
