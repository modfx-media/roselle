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

export default function SciaticaTreatmentPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1 service-page-shell">
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a><span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-accent">Services</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Sciatica Treatment</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Sciatica Treatment" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Overview</p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Sciatica can cause debilitating pain that originates in your lower back and travels to the buttocks and legs. Not only that, but the discomfort can also become chronic when it is left untreated. At Roselle Center for Healing in Fairfax, VA, we provide various treatments to alleviate your symptoms and prevent further complications. Before visiting us, learn more about sciatica below:
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x1248_80/webmgr/0g/5/2/sciatica%202.jpg.webp?f80d02944ad87609efdb12accdf9c39b" alt="Illustration of sciatica anatomy showing vertebrae, normal and herniated disks, sciatic nerve, and areas of pain, emphasizing the connection to lower back pain and treatment options." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Causes</p>
                <SplitReveal text="Common Causes of Sciatica: Discs, Posture & Spinal Issues" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Sciatica occurs when the sciatic nerve becomes irritated or compressed. The condition can often develop due to a bulging disc that is exerting pressure on the sciatic nerve. Not only that, but it can also happen from poor posture, excess weight, or spinal stenosis. As a result, you may experience lower back pain, numbness, and muscle weakness.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Treatment</p>
                <SplitReveal text="Treatments for Sciatica" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Chiropractic care can be highly beneficial for sciatica. Our chiropractors can treat leg pain and back pain by manipulating the spine and reducing sciatic nerve pressure. Along with that, we can also offer nutritional advice on which foods to consume and avoid to help you heal. We&rsquo;ll also teach you exercises that you can implement into your routine that are designed to ease your symptoms.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Muscles play an important role in reducing lower back pain as well. The stronger muscles are designed to help support your spine. It&rsquo;s also beneficial to stretch certain muscles, such as the ones in your hips. Stretching can also help to decrease any pressure you may be experiencing in your lower back. We can guide you through any necessary exercises that can help you heal and ensure you&rsquo;re doing them correctly to prevent straining yourself. At our practice, we are dedicated to addressing the root cause of your pain rather than masking the symptoms and to helping you recover properly.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="service-cta-panel flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Contact us for an Appointment Today</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      If you are experiencing any symptoms of sciatica, our team at Roselle Center for Healing in Fairfax, VA, our team at Roselle Center for Healing in Fairfax, VA, can help. We provide a variety of treatments, such as chiropractic adjustments, massage therapy, and acupuncture, to reduce your pain and improve your health. To learn more about our treatments or to schedule your appointment, contact us at (703) 698-7117 today. When you need a chiropractor near me, we are happy to assist you!
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
                    {HOURS.map((h) => (<div key={h.day} className="service-hours-row flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}><span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span><span className="text-bg font-medium">{h.time}</span></div>))}
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
