"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


export default function DrTomRosellePage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Dr. Tom Roselle, DC</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Dr. Tom Roselle, DC" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Meet Dr. Tom Roselle, DC</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <div className="flex flex-wrap gap-s3 mt-s4 mb-s6">
                  <MagneticButton className="btn-primary" onClick={() => window.location.href = "/contact-staff-member.html"}>EMAIL DR. TOM ROSELLE, DC</MagneticButton>
                  <MagneticButton className="btn-primary" onClick={() => window.location.href = "/appointment"}>SCHEDULE AN APPOINTMENT</MagneticButton>
                </div>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  In 1977, Dr. Tom Roselle DC, PAK, PAc, DCCN, DCBCN received a Doctor of Chiropractic Degree from the National College of Chiropractic in Lombard, Illinois, as well as his certifications to practice acupuncture and nutrition in New York and Virginia. He has served on the Boards of Directors of the Northern Virginia Chiropractic Society and New York State Chiropractic Association and held multiple local and state offices.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Radio &amp; Media</p>
                <SplitReveal text="Dr. Tom Roselle Live!®" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Since 1983, Dr. Roselle has hosted a radio talk show: Dr. Tom Roselle Live!® that provides listeners with the latest information on integrative, holistic, and wellness healthcare methods. He also hosts an informative podcast and livestream titled: Ageless Health® with Dr. Tom Roselle, DC.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s6">
                  <a href="https://www.instagram.com/drtomroselledc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-bg transition-colors duration-200 hover:text-accent">FOLLOW DR. ROSELLE ON INSTAGRAM</a>
                </div>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Dr. Roselle is the Founder of Caring For Others Ltd, a charity that provides alternative healthcare services and education for those in need.
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Full Biography</p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s4 mb-s4 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  <a href="https://www.drtomroselle.com/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2 transition-colors duration-200 hover:text-fg">Dr. Tom Roselle, DC, Host of Ageless Health® with Dr. Tom Roselle, DC and WMAL&apos;s Dr. Tom Roselle LIVE!</a>
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Dr. Tom Roselle, DC, PAK, PAc, DCCN, DCBCN is an integrative health &amp; wellness expert, author, talk show host, practicing health care professional, facility director, philanthropist, and Chairman of the International College of Applied Kinesiology. He is well known for his mid-Atlantic health radio talk show, &ldquo;Dr. Tom Roselle Live!,&rdquo; his acclaimed self-health book, &ldquo;Ageless Health®: Health Is A Do-It-To-Yourself Program&rdquo; and his twice Emmy® award-nominated television broadcast, &ldquo;Ageless Health® The Special.&rdquo;
                </p>
              </RevealSection>
            </div>
          </section>

          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Schedule Your Appointment</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Dr. Tom Roselle and the team at Roselle Center For Healing in Fairfax, VA to schedule your consultation today.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
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
