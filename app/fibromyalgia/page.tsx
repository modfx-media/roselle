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

export default function FibromyalgiaPage() {
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
                  <a href="/conditions-treated" className="transition-colors duration-200 hover:text-bg">Where is Your Pain? Conditions Treated</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Fibromyalgia</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Fibromyalgia" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Understanding</p>
                    <h2 className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]">Fibromyalgia: Looking Beyond the Pain for Answers</h2>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      Fibromyalgia is an invisible illness—a condition without visible wounds or bruises that can be dismissed by those who don&rsquo;t understand it. Yet, for those living with it, the experience is anything but imaginary. It can be experienced as constant widespread pain, crushing fatigue, difficulty concentrating, and sleeping difficulties that can turn every day into an unpredictable challenge. The frustration of searching for answers or being told it&rsquo;s &ldquo;all in your head&rdquo; only deepens the burden.
                    </p>
                  </RevealSection>
                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed mt-s5" style={{ color: "rgba(42,41,40,0.68)" }}>
                      At Roselle Center for Healing in Fairfax, VA, we understand the depth of what fibromyalgia patients endure. Our approach goes beyond surface-level symptom management to address the root mechanisms behind your pain—using a combination of chiropractic care, nutrition counseling, and acupuncture. If you&rsquo;ve been looking for a chiropractor near you who truly gets it, you&rsquo;ve found the right place.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x585_80/webmgr/0g/5/2/Fibromyalgia.jpg.webp?c6831588c496b42009df99493853e10f" alt="Diagram illustrating symptoms and tender points of fibromyalgia, including anxiety, muscle pain, fatigue, and cognitive difficulties." className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Science</p>
                <SplitReveal text="The Body on High Alert" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Central sensitization is a key feature of fibromyalgia. In simple terms, your nervous system becomes &ldquo;turned up&rdquo;—amplifying pain signals and reacting intensely to stimuli that wouldn&rsquo;t bother most people. A light touch might feel painful. A mild stressor might trigger widespread discomfort. You may feel like your body has turned against you.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Understanding this mechanism is the first step toward meaningful treatment. Rather than chasing individual symptoms with medications, we focus on calming the nervous system, reducing inflammation, and restoring function—holistically.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Solution</p>
                <SplitReveal text="A Multi-Dimensional Solution" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  There is no one-size-fits-all answer for fibromyalgia. That&rsquo;s why we use a multidimensional approach—combining hands-on treatment, lifestyle support, and natural therapies to create a personalized plan for each patient. Our goal is not just to reduce your pain, but to help you reclaim your energy, mental clarity, and quality of life.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Chiropractic</p>
                <SplitReveal text="The Role of Chiropractic Care" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Chiropractic care plays a central role in our fibromyalgia treatment. The spine serves as the highway of the nervous system. When spinal misalignments—known as subluxations—are present, they can interfere with the body&rsquo;s ability to manage pain signals effectively.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Our chiropractor uses gentle, precise adjustments to restore proper alignment, which can help reduce nerve irritation and improve communication between the brain and body. Many fibromyalgia patients experience decreased pain, better sleep, and improved mood after regular chiropractic sessions.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Integrative</p>
                <SplitReveal text="Nutrition and Acupuncture" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  What you eat can either fuel inflammation or fight it. Our nutrition counseling service helps patients identify food sensitivities, reduce inflammatory triggers, and develop eating plans that support healing. Whether it&rsquo;s eliminating processed sugars or increasing anti-inflammatory nutrients, small dietary changes can make a significant difference.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Acupuncture is another powerful tool in our fibromyalgia toolkit. By targeting specific points in the body, acupuncture stimulates the release of natural pain-relieving chemicals, promotes circulation, and helps regulate the nervous system. For many patients, it provides a calming, restorative experience that helps manage pain and stress.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Your Path to Relief Starts with a Call to Our Chiropractors Near You</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Living with fibromyalgia is hard. But you don&rsquo;t have to face it alone. At Roselle Center for Healing, we offer compassionate, comprehensive care that addresses the full picture—body, mind, and lifestyle. We combine chiropractic adjustments, nutrition counseling, and acupuncture to help you manage symptoms and feel more like yourself again. If you&rsquo;re in Fairfax, VA, call (703) 698-7117 today to schedule your consultation. Let&rsquo;s build a care plan that helps you move beyond just surviving—and start thriving.
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
