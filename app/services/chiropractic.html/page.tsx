"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import SplitReveal from "../../components/motion/SplitReveal";
import MagneticButton from "../../components/motion/MagneticButton";
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

export default function ChiropracticPage() {
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
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a>
                  <span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-bg">Services</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Chiropractic</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Chiropractic Care in Fairfax, VA at Roselle Center For Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro with Image ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Chiropractic Care</p>
                    <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s4">Comprehensive Chiropractic Treatment</h2>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Chiropractic care is one of the most common methods used to treat ailments of the spine and nervous system. But it&apos;s also an effective method to treat a variety of other ailments. Neuro immunology, chronic pain, neuro-viceral problems and immune support. We at Roselle Center for Healing treat many patients in Fairfax, Vienna, Falls Church, Alexandria, Tysons Corner, and Merrifield, VA who experience pain and discomfort.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <div className="rounded-xl overflow-hidden">
                    <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x714_80/webmgr/0g/5/2/chiro-care.jpg.webp?f9393c8f6c680007b73fbb4678628f8b" alt="Chiropractor performing a leg manipulation on a patient in a bright, calming treatment room, emphasizing chiropractic care for pain relief and mobility enhancement." />
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Back Pain Relief ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s4">Chiropractic Techniques Help Provide Back Pain Relief</h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    The primary spinal structural segmental disrelation that chiropractic is concerned with is known as spinal subluxation. Chiropractic care uses a variety of techniques to reduce the subluxation complex and provide pain relief, including specific manual spinal adjustments, joint mobilization, sacral cranial technique, spinal decompression physio therapeutics and massage therapy. Spinal manipulation is the most common type of chiropractic care, and it involves using the hands to apply pressure to the spine. Chiropractic adjustment can help relieve pain and improve your body&apos;s range of motion and optimizing function. A chiropractor will assess your body&apos;s needs and determine if you would benefit from chiropractic adjustments for back pain.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Improve Mobility ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s4">Chiropractic Care Helps Improve Your Mobility</h2>
                  <p className="text-fluid-base leading-relaxed mb-s4" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Through a though chiropractic analysis our chiropractors may assess your body and determine that you would benefit from improving your mobility. One method we may recommend involves using gentle strain / counter strain movements to stretch and loosen the muscles and joints. This type of care can help to improve your flexibility and range of motion.
                  </p>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Exercises and stretches are also used to improve your mobility. These rehabilitative exercises can help to strengthen the muscles and ligaments around the spine, which can help to prevent future injuries.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Integrative Healthcare ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s4">Chiropractic Care Offers Integrative Healthcare</h2>
                  <p className="text-fluid-base leading-relaxed mb-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                    In addition to providing pain relief, chiropractic care offers a variety of other health benefits. Chiropractic care is an integrative healthcare approach that can help to improve your overall health and well-being. We look for evidence of injury, biochemical / bioelectrical imbalance and emotional stress as the trigger of any spinal and structural distortion.
                  </p>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                    Additional benefits of Chiropractic care are posture improvement, stress relief, and reduction of inflammation. It can also help to improve your sleep quality, boost your energy levels, and promote natural healing.
                  </p>
                  <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.55)" }}>
                    If you&apos;re looking for an integrative healthcare approach that can help you achieve optimal health, chiropractic care may be the right choice for you. You&apos;ll soon see that chiropractic care is about much more than chiropractic adjustments.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── How Chiropractic Can Help ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="max-w-[820px]">
                <RevealSection>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-snug mb-s4">How Chiropractic Care Can Help</h2>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    If you are suffering from headaches, sports injuries, allergies, chronic pain, immune system issues, and more. Chiropractic may be the answer. Treatment is also helpful for injuries like back pain, shoulder pain, and neck pain.
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-bg pb-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Contact Us for an Appointment Today!</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Chiropractic treatment is a way to treat many common ailments. If you&apos;re looking for an alternative to traditional medicine, you may find our methods helpful. At Roselle Center for Healing, patients from Fairfax, VA, Falls Church, VA, Merrifield, VA, Arlington, VA and Vienna, VA, find pain relief and more.
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
