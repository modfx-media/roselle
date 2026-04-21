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

export default function HealthResourcesPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Health Resources</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Health Resources" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Section 1: Overview (light) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_1fr] gap-s10 items-center max-[900px]:grid-cols-1 max-[900px]:gap-s8">
                <div>
                  <RevealSection>
                    <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Resources</p>
                    <SplitReveal text="Health Resources" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <p className="text-fluid-base leading-relaxed mt-s6" style={{ color: "rgba(42,41,40,0.68)" }}>
                      The following resources have been assembled to provide you with more chiropractic wellness care information available on the internet.
                    </p>
                  </RevealSection>
                </div>
                <RevealSection delay={0.15}>
                  <GsapImageParallax src="https://cdcssl.ibsrv.net/ibimg/smb/1023x1006_80/webmgr/0g/5/2/health_resources.png.webp?b8e500c32f74dde7ff9c00465b6415d6" alt="Health Resources" className="w-full rounded-xl" />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Section 2: Chiropractic Directory & Organizations (dark) ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Chiropractic</p>
                <SplitReveal text="Chiropractic Resources" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>

              <div className="mt-s8 space-y-s8">
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Chiropractic Directory</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.chiropractor-pages.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.Chiropractor-Pages.com</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Chiropractic Organizations</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.amerchiro.org/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.AmerChiro.org</a></li>
                    <li><a href="https://www.chiro.org/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.Chiro.org</a></li>
                    <li><a href="https://www.chiropractic.org/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.Chiropractic.org</a></li>
                    <li><a href="https://www.chiropracticissafe.org/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.ChiropracticIsSafe.org</a></li>
                    <li><a href="https://www.chiropracticresearchreview.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.ChiropracticResearchReview.com</a></li>
                    <li><a href="https://www.worldchiropracticalliance.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.WorldChiropracticAlliance.com</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Wellness Coaching</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.discoverwellnesscoaching.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.DiscoverWellnessCoaching.com</a></li>
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Section 3: Kids & Nutrition (light) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Wellness</p>
                <SplitReveal text="Wellness & Nutrition" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>

              <div className="mt-s8 space-y-s8">
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Wellness for Kids</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.bam.gov/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.BAM.gov</a></li>
                    <li><a href="https://www.chiropediatrics.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.ChiroPediatrics.com</a></li>
                    <li><a href="https://www.icpa4kids.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.ICPA4kids.org</a></li>
                    <li><a href="https://www.jwtumbles.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.JWTumbles.com</a></li>
                    <li><a href="https://www.kidshealth.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.KidsHealth.org</a></li>
                    <li><a href="https://www.my-gym.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.My-Gym.com</a></li>
                    <li><a href="https://www.nutritionexplorations.org/kids/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.NutritionExplorations.org/kids/</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Exercise and Nutrition</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.bodyforlife.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.BodyForLife.com</a></li>
                    <li><a href="https://www.compassionatecooks.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.CompassionateCooks.com</a></li>
                    <li><a href="https://www.coreperformance.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.CorePerformance.com</a></li>
                    <li><a href="https://www.ediets.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.Ediets.com</a></li>
                    <li><a href="https://www.fitnessplus.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.FitnessPlus.com</a></li>
                    <li><a href="https://www.foodrevolution.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.FoodRevolution.org</a></li>
                    <li><a href="https://www.ific.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.IFIC.org</a></li>
                    <li><a href="https://www.miavita.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.MiaVita.com</a></li>
                    <li><a href="https://www.nanp.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.NANP.org</a></li>
                    <li><a href="https://www.sparkpeople.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.SparkPeople.com</a></li>
                    <li><a href="https://www.thebodybygod.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.TheBodyByGod.com</a></li>
                    <li><a href="https://www.truthpublishing.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.TruthPublishing.com</a></li>
                    <li><a href="https://www.westonaprice.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.WestonAPrice.org</a></li>
                    <li><a href="https://www.whfoods.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.WHFoods.org</a></li>
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Section 4: Fitness, Meditation, Life Coach (dark) ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Fitness & Mindfulness</p>
                <SplitReveal text="Fitness & Mindfulness" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>

              <div className="mt-s8 space-y-s8">
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Fitness Centers</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.24hourfitness.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.24HourFitness.com</a></li>
                    <li><a href="https://www.ballyfitness.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.BallyFitness.com</a></li>
                    <li><a href="https://www.curves.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.Curves.com</a></li>
                    <li><a href="https://www.frogsfit.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.FrogsFit.com</a></li>
                    <li><a href="https://www.goldsgym.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.GoldsGym.com</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.15}>
                  <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Thought and Meditation</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.chopra.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.Chopra.com</a></li>
                    <li><a href="https://www.drwaynedyer.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.DrWayneDyer.com</a></li>
                    <li><a href="https://www.kenwilber.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.KenWilber.com</a></li>
                    <li><a href="https://www.tm.org/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.TM.org</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">Life Coach</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.findacoach.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.FindACoach.com</a></li>
                    <li><a href="https://www.theiacc.com/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.TheIACC.com</a></li>
                    <li><a href="https://www.coachfederation.org/" target="_blank" rel="noopener noreferrer" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">www.CoachFederation.org</a></li>
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Section 5: Other Providers (light) ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Providers</p>
                <SplitReveal text="Other Health Providers" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>

              <div className="mt-s8 space-y-s8">
                <RevealSection delay={0.1}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Acupuncture</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.acufinder.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.AcuFinder.com</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Dentist</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.1800dentist.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.1800Dentist.com</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.14}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Homeopath</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.homeopathic.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.homeopathic.org</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.16}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Naturopath</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.aanmc.org/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.aanmc.org</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.18}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Pilates</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.pilates.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.pilates.com</a></li>
                    <li><a href="https://www.thepilatescenter.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.thepilatescenter.com</a></li>
                    <li><a href="https://www.pilates-studio.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.pilates-studio.com</a></li>
                    <li><a href="https://www.powerpilates.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.powerpilates.com</a></li>
                  </ul>
                </RevealSection>

                <RevealSection delay={0.2}>
                  <h3 className="text-fluid-xl text-fg font-serif tracking-tight leading-snug mb-s3">Yoga</h3>
                  <ul className="space-y-2">
                    <li><a href="https://www.siddhayoga.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.siddhayoga.com</a></li>
                    <li><a href="https://www.yogajournal.com/" target="_blank" rel="noopener noreferrer" className="text-fg transition-colors duration-200 hover:text-accent">www.yogajournal.com</a></li>
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Explore More Resources</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Have questions about your health and wellness? Call Roselle Center For Healing in Fairfax, VA to learn more about our chiropractic, nutrition, and wellness services.
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
