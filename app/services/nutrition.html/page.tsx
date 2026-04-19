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

export default function NutritionPage() {
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
                  <a href="/" className="transition-colors duration-200 hover:text-bg">Home</a><span>/</span>
                  <a href="/services.html" className="transition-colors duration-200 hover:text-bg">Services</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Nutrition</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Nutrition" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro + Image ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Nutritional Counseling</p>
                <SplitReveal text="Nutritional Counseling at Roselle Center for Healing in Fairfax, VA" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <div className="grid grid-cols-2 gap-s10 mt-s8 items-start max-md:grid-cols-1">
                <RevealSection delay={0.1}>
                  <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                    Good nutrition is at the core of holistic health. Roselle Center for Healing proudly announces nutritional counseling as an additional service offered at our Fairfax, VA, facility. The same professionals you&rsquo;ve trusted for chiropractic care can now expand your holistic wellness through dietary assistance.
                  </p>
                </RevealSection>
                <RevealSection delay={0.2}>
                  <GsapImageParallax
                    src="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Nutrition_Roselle_Center_for_Healing.jpg.webp?65877bd81c6ec73799c4c772dc635bcb"
                    alt="Nutritionist writing notes during a counseling session with fresh fruits, emphasizing dietary guidance at Roselle Center for Healing."
                    className="rounded-lg w-full aspect-[3/2] object-cover"
                  />
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── What Is Nutrition Counseling? ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Services</p>
                <SplitReveal text="What Is Nutrition Counseling?" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Nutrition counseling near you can help you discover the keys to a healthier, more balanced diet. You&rsquo;ll learn elements of preventive nutrition, including what to incorporate into your diet to live a longer, healthier, happier life.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Roselle Center for Healing staffs leading Nutritionists to assist you. You can work one-on-one with our Nutritionists to discover which minerals, vitamins, and nutrients are missing from your diet.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  Eating a healthy, balanced diet can help you lose weight, sleep better, improve your energy level, and prevent chronic disease. If you have a disease or medical condition, nutrition counseling can assist with symptom management for a better quality of life. You might also lower your risk of type 2 diabetes, stroke, and heart disease by controlling your weight and avoiding obesity.
                </p>
              </RevealSection>
              <RevealSection delay={0.25}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(245,244,239,0.55)" }}>
                  An appointment with a Nutritionist will entail a review of your medical history and health, goal-setting, and diet discussions and plans.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── Is Nutrition Counseling Right for Me? ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">For You</p>
                <SplitReveal text="Is Nutrition Counseling Right for Me?" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Visiting our nutritionist at Roselle Center for Healing for nutritional counseling is a wise idea for all individuals in the Fairfax, VA, area who wish to maximize their diets and unlock the power of healthy eating. A holistic approach to health can reduce dependence on medications and medical procedures.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s5 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  We&rsquo;ll tailor your nutritional treatment to your needs, including your accessibility to food, your dietary preferences, health goals, and budget. You&rsquo;ll find your tailored nutrition plan easier to follow than a conventional one-size-fits-all plan, and you will enjoy exploring balanced meals that provide goodness for your body.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Experience the Benefits of Nutrition Counseling Today by Scheduling Your Appointment</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Roselle Center for Healing is your choice for a healthier you. Our facility in Fairfax, VA, specializes in nutrition, thermography, acupuncture, detoxification, massage therapy, allergy testing, applied kinesiology, and chiropractic care, including chiropractic sports medicine and pediatric chiropractic treatments. We can help you unlock better health with our treatments and modalities. We&rsquo;re accepting new patients and provide all our new patient forms on our website so you can print them and complete them before your appointment. Schedule your appointment today by calling (703) 698-7117.
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
