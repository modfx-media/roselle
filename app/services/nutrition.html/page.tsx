"use client";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import SmoothScroll from "../../components/motion/SmoothScroll";
import RevealSection from "../../components/motion/RevealSection";
import PageHero from "../../components/templates/PageHero";
import FeatureSplit from "../../components/templates/FeatureSplit";
import StatStrip from "../../components/templates/StatStrip";

export default function NutritionPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Nutrition · Fairfax, VA"
            title="Nutritional counseling at Roselle Center for Healing."
            subtitle="The same trusted team — now expanding your holistic wellness through dietary guidance."
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services.html" },
              { label: "Nutrition" },
            ]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Nutrition_Roselle_Center_for_Healing.jpg.webp?65877bd81c6ec73799c4c772dc635bcb"
            imageAlt="Nutritionist counseling session."
            primaryCta={{ label: "Book a consultation", href: "/appointment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <StatStrip
            stats={[
              { value: "1:1", label: "Personalized Plans" },
              { value: "20+", label: "Years of Care" },
              { value: "100%", label: "Whole-Body Approach" },
              { value: "5★", label: "Patient Reviews" },
            ]}
          />

          <FeatureSplit
            eyebrow="Nutritional Counseling"
            title="Good nutrition is at the core of holistic health."
            body="Roselle Center for Healing proudly offers nutritional counseling at our Fairfax, VA, facility. The same professionals you've trusted for chiropractic care can now expand your holistic wellness through dietary assistance."
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Nutrition_Roselle_Center_for_Healing.jpg.webp?65877bd81c6ec73799c4c772dc635bcb"
            imageAlt="Healthy food and counseling."
          />

          {/* ── Section: What is nutrition counseling? — pillar cards on dark ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-12 gap-s8 max-lg:grid-cols-1">
                <div className="col-span-5 max-lg:col-span-1">
                  <RevealSection>
                    <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Approach</p>
                    <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] mb-s5">
                      What is nutrition counseling?
                    </h2>
                    <p className="text-fluid-base leading-relaxed text-bg/55 mb-s6">
                      Discover the keys to a healthier, more balanced diet. Learn the elements of preventive nutrition — what to incorporate to live a longer, healthier, happier life.
                    </p>
                    <a href="/appointment" className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-accent hover:text-bg transition-colors">
                      Book a session →
                    </a>
                  </RevealSection>
                </div>

                <div className="col-span-7 max-lg:col-span-1 grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
                  {[
                    { n: "01", t: "Whole-body intake", d: "A full review of your medical history, current habits, and personal goals — so the plan fits your real life." },
                    { n: "02", t: "Targeted nutrients", d: "Work 1:1 with our nutritionist to identify the minerals, vitamins, and nutrients missing from your diet." },
                    { n: "03", t: "Disease prevention", d: "Eat to lower your risk of type 2 diabetes, stroke, and heart disease — and to better manage existing conditions." },
                    { n: "04", t: "Better daily living", d: "Sleep deeper, build steady energy, lose weight at a healthy pace, and feel like yourself again." },
                  ].map((c, i) => (
                    <RevealSection key={c.n} delay={i * 0.06}>
                      <div className="h-full p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                        <span className="text-xs tracking-widest uppercase text-accent font-sans">{c.n}</span>
                        <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug mt-s3 mb-s2">{c.t}</h3>
                        <p className="text-sm leading-relaxed text-bg/50">{c.d}</p>
                      </div>
                    </RevealSection>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── Section: Is it right for me? — checklist split ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-2 gap-s10 items-center max-lg:grid-cols-1">
                <RevealSection>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Nutrition_Roselle_Center_for_Healing.jpg.webp?65877bd81c6ec73799c4c772dc635bcb"
                      alt="Personalized nutrition plan."
                      className="w-full h-auto"
                    />
                  </div>
                </RevealSection>

                <RevealSection delay={0.1}>
                  <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">For You</p>
                  <h2 className="text-fluid-3xl text-fg font-serif tracking-tight leading-[1.12] mb-s5 max-w-[24ch]">
                    Is nutrition counseling right for me?
                  </h2>
                  <p className="text-fluid-base leading-relaxed text-fg/65 mb-s6">
                    A holistic approach to health can reduce dependence on medications and procedures. We tailor every plan to your accessibility, dietary preferences, goals, and budget — so it actually works.
                  </p>

                  <ul className="flex flex-col gap-s3">
                    {[
                      "Maximize your diet and unlock the power of healthy eating",
                      "Personalized to your preferences, budget, and lifestyle",
                      "Easier to follow than one-size-fits-all programs",
                      "Designed for sustainable, long-term results",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-s3 text-fluid-base text-fg/75">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Section: Final CTA — full-bleed image card ── */}
          <section className="bg-bg pb-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div
                  className="relative overflow-hidden rounded-2xl px-s10 py-s12 max-md:px-s6 max-md:py-s10"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.78) 60%, rgba(198,177,128,0.55) 100%), url("https://cdcssl.ibsrv.net/ibimg/smb/1023x683_80/webmgr/0g/5/2/Nutrition_Roselle_Center_for_Healing.jpg.webp?65877bd81c6ec73799c4c772dc635bcb")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="max-w-[640px]">
                    <p className="text-xs tracking-widest uppercase text-accent mb-s4 font-sans">Schedule today</p>
                    <h2 className="text-fluid-4xl text-bg font-serif tracking-tight leading-[1.08] mb-s5">
                      Experience the benefits of nutrition counseling.
                    </h2>
                    <p className="text-fluid-base leading-relaxed text-bg/75 mb-s7">
                      We specialize in nutrition, thermography, acupuncture, detoxification, massage therapy, allergy testing, applied kinesiology, and chiropractic care — accepting new patients now.
                    </p>
                    <div className="flex flex-wrap gap-s3">
                      <a
                        href="tel:+17036987117"
                        className="inline-flex items-center gap-2 bg-accent text-fg px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-bg transition-colors"
                      >
                        Call (703) 698-7117
                      </a>
                      <a
                        href="/appointment"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide text-bg border border-bg/30 hover:bg-bg/10 transition-colors"
                      >
                        Book online
                      </a>
                    </div>
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
