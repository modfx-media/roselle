"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


const CONDITIONS = [
  {
    title: "Back Pain",
    description:
      "Back pain can be debilitating and compromise your strength and flexibility. You may find yourself struggling to perform basic tasks due to discomfort. Whether your back pain is the result of a sports injury or some other type of personal injury, it's important to address it as soon as possible. We will treat the injury with spinal adjustments and other forms of chiropractic treatment. Not only that, but we'll also utilize techniques that can prevent the pain from reoccurring.",
  },
  {
    title: "Back Pain Relief and Preventative Chiropractic Treatments",
    description:
      "Knee pain can occur from a sports injury, arthritis, or fibromyalgia. When you visit us, we will perform a thorough evaluation to determine the root cause of your pain. Afterward, we can create a treatment plan that will reduce your symptoms.",
  },
  {
    title: "Neck Pain",
    description:
      "If you've suffered from neck pain before, you know just how disruptive it can be. In addition to preventing you from completing certain tasks, it can also make rest less comfortable. We can offer effective treatment for your neck pain, whether it is from poor posture or a personal injury.",
  },
  {
    title: "Shoulder Pain",
    description:
      "Chiropractic adjustments can be highly effective in alleviating shoulder pain. Many shoulder injuries are directly caused by misalignments in the musculoskeletal system and can be treated with chiropractic care. We will identify the underlying cause of your shoulder injury and administer immediate treatment.",
  },
  {
    title: "Sciatica",
    description:
      "Sciatica develops when the sciatic nerve becomes compressed or irritated, which can lead to lower back pain. With adjustments, we can take the pressure off of the sciatic nerve and provide relief.",
  },
  {
    title: "Whiplash",
    description:
      "After an auto accident, you may experience whiplash, which can cause neck pain and frequent headaches. Even if you are not exhibiting noticeable symptoms, it is important to receive treatment to prevent further complications.",
  },
];

export default function WhereIsYourPainPage() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* Hero */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Where is Your Pain? Conditions Treated</span>
                </nav>
              </RevealSection>
              <SplitReveal
                text="Chiropractic Conditions Treated: Roselle Center for Healing in Fairfax"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* Intro */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="text-fluid-base max-w-3xl" style={{ color: "rgba(28,28,28,0.55)" }}>
                  At Roselle Center for Healing in Fairfax, VA, we provide treatments for various conditions to reduce any discomfort you&apos;re experiencing and improve your health. If you have back pain due to an auto accident or neck pain from a medical condition, our team can help. Before visiting us, we invite you to keep reading to learn about some conditions we treat!
                </p>
              </RevealSection>
            </div>
          </section>

          {/* Conditions Grid */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-snug mb-s8">Conditions We Treat</h2>
              </RevealSection>
              <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                {CONDITIONS.map((c, i) => (
                  <RevealSection key={c.title} delay={i * 0.06}>
                    <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s6 h-full">
                      <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">{c.title}</h3>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>{c.description}</p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="bg-card-bg rounded-xl p-s6 text-center">
                  <h3 className="text-fluid-2xl text-fg font-serif tracking-tight leading-snug mb-s4">
                    Contact us for an Appointment Today!
                  </h3>
                  <p className="text-fluid-base mb-s5 max-w-2xl mx-auto" style={{ color: "rgba(28,28,28,0.55)" }}>
                    If you have neck pain or hip pain that is not subsiding, let our team at Roselle Center for Healing in Fairfax, VA, help. To learn about the treatments that we provide or to schedule your initial consultation, contact our office at (703) 698-7117 today.
                  </p>
                  <MagneticButton>
                    <a href="tel:+17036987117" className="inline-flex items-center gap-2 bg-accent text-bg px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-colors duration-200 hover:bg-accent/90">
                      Call (703) 698-7117
                    </a>
                  </MagneticButton>
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
