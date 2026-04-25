"use client";
import Nav from "../../app/components/Nav";
import Footer from "../../app/components/Footer";
import SmoothScroll from "../../app/components/motion/SmoothScroll";
import RevealSection from "../../app/components/motion/RevealSection";
import SplitReveal from "../../app/components/motion/SplitReveal";
import GsapImageParallax from "../../app/components/motion/GsapImageParallax";
import MagneticButton from "../../app/components/motion/MagneticButton";
import SpotlightCard from "../../app/components/motion/SpotlightCard";
import Contact from "../components/Contact";

const FIRST_VISIT_TESTS = [
  {
    title: "Acugraph",
    body: "Used to analyze and document the energetic status of your acupuncture meridians. These meridians are invisible energy pathways in your body that have been used therapeutically for over 5,000 years.",
  },
  {
    title: "Blood Pressure in 3 Positions",
    body: "Lying, sitting, and standing blood pressure. Why? This information allows the doctors to assess adrenal and physiological function.",
  },
  {
    title: "Gate Scan",
    body: "An assessment of the way you stand, walk, and run. Like the foundation of a house, your feet support the weight of everything above them and effects structural integrity.",
  },
  {
    title: "pH Testing",
    body: "A test strip is placed in saliva to determine alkaline or acidity level in your body. An alkaline body is more conducive to health and well-being. An acidic pH can lead to a variety of negative health effects.",
  },
  {
    title: "Zinc Testing",
    body: "Zinc is an important mineral required for several bodily functions involving energy and metabolism. Zinc is necessary for a strong immune system, normal growth. Zinc also assists in healing of wounds. When holding zinc in your mouth, a lack of taste may indicate an insufficiency, where is a strong or immediate taste may indicate adequate levels of zinc.",
  },
];

const EXAM_STEPS = [
  {
    title: "Consultation",
    body: "An in-depth medical history, current condition, and main area of concern or complaint are discussed.",
  },
  {
    title: "Examination",
    body: "Your doctor may conduct either a neuro-physical applied kinesiological examination, nutritional assessment or energetic evaluation to assess and collect information regarding the root cause or the \u201cwhy is that?\u201d of your condition. Your doctor may also request additional testing to accurately assess your condition (blood work, x-ray, thermography, etc.)",
  },
];


export default function NewPatientCenterPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">

          {/* ── Hero Banner ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4
                            pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>New Patient Experience</span>
                </nav>
              </RevealSection>

              <SplitReveal
                text="New Patient Experience"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Welcome Section ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Welcome
                </p>
                <SplitReveal
                  text="Welcome To The Roselle Center For Healing!"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <div className="grid grid-cols-[1fr_1fr] gap-s10 mt-s10 items-center
                              max-[900px]:grid-cols-1 max-[900px]:gap-s8">

                {/* Image */}
                <RevealSection delay={0.1}>
                  <div className="about-image-overlay w-full rounded-xl overflow-hidden relative"
                    style={{ background: "rgba(42,41,40,0.04)" }}>
                    <GsapImageParallax
                      src="https://cdcssl.ibsrv.net/ibimg/smb/1023x488_80/webmgr/0g/5/2/2024/new%20patient%20exp.png.webp?b9279124930bfdb3279d708f6feb93d2"
                      alt="Older woman consulting with a chiropractor, discussing spinal health using a vertebra model and viewing an x-ray on a computer screen in a chiropractic office setting."
                      speed={0.18}
                      className="w-full rounded-xl"
                    />
                  </div>
                </RevealSection>

                {/* Text */}
                <div className="flex flex-col gap-s4">
                  <RevealSection delay={0.15}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      We make every effort to make you, our patient, feel comfortable. Prepare to be
                      greeted with a warm smile, relaxing music, and calming atmosphere. You will
                      find our staff friendly, knowledgeable, and ready to serve. You, our new patient,
                      are family.
                    </p>
                  </RevealSection>
                  <RevealSection delay={0.2}>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                      As a new patient, you will experience teaming with our practitioners and staff
                      to reach your optimal level of health and wellness through total body balance&mdash;
                      structurally, chemically, and emotionally using Chiropractic, Applied Kinesiology,
                      Acupuncture, Massage Therapy and Nutritional Functional Medicine.
                    </p>
                  </RevealSection>
                </div>
              </div>
            </div>
          </section>

          {/* ── Scheduling Your Appointment ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Getting Started
                </p>
                <SplitReveal
                  text="Scheduling Your New Patient Appointment"
                  as="h2"
                  className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(245,244,239,0.62)" }}>
                  To schedule your new patient appointment, which is 90 minutes, simply call our
                  office at{" "}
                  <a href="tel:+17036987117" className="text-bg hover:text-accent transition-colors duration-200 font-medium">
                    (703) 698-7117
                  </a>{" "}
                  or click on our Home Page and our staff will promptly respond to your request.
                  Our staff will assist in finding a time with the practitioner of your choice
                  that works well with your schedule. We will also review new patient fees, deposit
                  requirements, and cancellation policy.
                </p>
              </RevealSection>

              <RevealSection delay={0.15}>
                <p className="text-fluid-base leading-relaxed mt-s4 max-w-[720px]" style={{ color: "rgba(245,244,239,0.62)" }}>
                  New Patient Forms should be completed prior to your appointment arrival. They
                  are available on our website for online completion. If you prefer, our staff can
                  mail or email those to you if this is a better option.
                </p>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="mt-s8">
                  <MagneticButton
                    className="btn-primary-inverted"
                    onClick={() => window.open("https://rosellecare.com/online-forms.html", "_blank")}
                  >
                    Click Here for Our Online Forms
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Your First Visit: Assessments ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  First Visit
                </p>
                <SplitReveal
                  text="Your First Visit at Roselle Center for Healing: What to Expect"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]"
                />
              </RevealSection>

              {/* Assessment cards */}
              <div className="grid grid-cols-2 gap-s6 mt-s10 max-md:grid-cols-1">
                {FIRST_VISIT_TESTS.map((test, i) => (
                  <RevealSection key={test.title} delay={i * 0.06}>
                    <SpotlightCard className="bg-card-bg rounded-xl p-s6 flex flex-col gap-s3 h-full
                                              card-hover-lift">
                      <span className="text-xs text-accent font-semibold tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-fluid-2xl text-fg tracking-tight leading-[1.15] mt-s1">
                        {test.title}
                      </h3>
                      <p className="text-fluid-base leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.65)" }}>
                        {test.body}
                      </p>
                    </SpotlightCard>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── Examination Process ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  The Examination
                </p>
                <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[28ch]">
                  Next you will meet with your doctor to begin the examination process:
                </h2>
              </RevealSection>

              <div className="grid grid-cols-[1fr_1px_1fr] gap-x-s10 mt-s10 items-start
                              max-[900px]:grid-cols-1 max-[900px]:gap-y-s8">

                {/* Consultation */}
                <RevealSection delay={0.08}>
                  <h3 className="text-fluid-2xl text-bg tracking-tight leading-[1.15]">
                    Consultation
                  </h3>
                  <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                    An in-depth medical history, current condition, and main area of concern or
                    complaint are discussed.
                  </p>
                </RevealSection>

                {/* Vertical divider */}
                <div className="w-px self-stretch max-[900px]:hidden"
                  aria-hidden="true"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(198,177,128,0.3) 20%, rgba(198,177,128,0.3) 80%, transparent)" }}
                />

                {/* Examination */}
                <RevealSection delay={0.16}>
                  <h3 className="text-fluid-2xl text-bg tracking-tight leading-[1.15]">
                    Examination
                  </h3>
                  <p className="text-fluid-base leading-relaxed mt-s4" style={{ color: "rgba(245,244,239,0.62)" }}>
                    Your doctor may conduct either a neuro-physical applied kinesiological
                    examination, nutritional assessment or energetic evaluation to assess and collect
                    information regarding the root cause or the &ldquo;why is that?&rdquo; of your condition. Your
                    doctor may also request additional testing to accurately assess your condition
                    (blood work, x-ray, thermography, etc.)
                  </p>
                </RevealSection>
              </div>
            </div>
          </section>

          {/* ── Your Second Visit ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">
                  Second Visit
                </p>
                <SplitReveal
                  text="Your Second Visit: Report of Findings"
                  as="h2"
                  className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[28ch]"
                />
              </RevealSection>

              <RevealSection delay={0.1}>
                <p className="text-fluid-base leading-relaxed mt-s6 max-w-[720px]" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Your doctor will review his assessment of your condition based on your initial
                  examination, review of records, and lab test results. Your doctor will design and
                  present an individualized projection of care or treatment plan. Typically, a
                  new patient treatment plan will take you from your acute condition to a repair
                  process, and transition into a wellness program. In this appointment, you will have
                  the opportunity to discuss any questions and concerns before committing to your
                  care plan. Additionally, you will be requested to view a healthcare orientation
                  video before beginning your wellness journey. This video orientation will help
                  you understand the approach in philosophy that has helped thousands of patients
                  whom we have proudly served for 40+ years. You will also meet with one of our
                  Patient Advocates to review your financial breakdown and options as well as
                  schedule appointments that will minimally interrupt your routine.
                </p>
              </RevealSection>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10
                                rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4"
                  style={{
                    background: "rgba(245,244,239,0.04)",
                    border: "1px solid rgba(245,244,239,0.08)",
                  }}>
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                      Ready to Begin Your Wellness Journey?
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Schedule your 90-minute new patient appointment today. Call us or complete
                      our online forms to get started.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.location.href = "tel:+17036987117"}
                    >
                      Call (703) 698-7117
                    </MagneticButton>
                    <MagneticButton
                      className="btn-primary-inverted"
                      onClick={() => window.open("https://rosellecare.com/online-forms.html", "_blank")}
                    >
                      Online Forms
                    </MagneticButton>
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
