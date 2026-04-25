"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


const CATEGORIES = [
  "Back, Body & Joint Pain",
  "Healthy Tips",
  "Exercise & Fitness",
  "Injury Rehab & Prevention",
  "Kid's Health",
  "Illness Prevention",
  "Chronic Conditions",
  "Nutrition & Healthy Eating",
  "Breaking Bad Habits",
  "Senior Health",
  "Weight Loss",
  "Pregnancy & Parenting",
  "Wellness",
  "Mind-Body Connection",
  "Stress & Anxiety",
  "Life-Work Balance",
  "Staying Young",
  "Staying Motivated",
];

const NEWSLETTERS = [
  {
    title: "April Newsletter: How Your Chiropractor Addresses Microtrauma Before Injury",
    excerpt: "Could a microtrauma be the reason for your pain? Find out how your chiropractor can help.",
  },
  {
    title: "March Newsletter: How Chiropractic Care May Improve Your Stress Levels",
    excerpt: "Has stress taken control of your life? Chiropractic care could help you relax.",
  },
  {
    title: "March Newsletter: What Disc Conditions Can a Chiropractor Help With?",
    excerpt: "Wondering if chiropractic treatment is right for your disc condition?",
  },
  {
    title: "February Newsletter: The Benefits of Regular Chiropractic Adjustments",
    excerpt: "Could regular chiropractic adjustments improve your health and comfort?",
  },
  {
    title: "February Newsletter: The Benefits of Chiropractic Care Across All Ages",
    excerpt: "Wondering if chiropractic treatments are a good idea for everyone?",
  },
  {
    title: "January Newsletter: How an Auto Accident Impacts Your Posture",
    excerpt: "Chiropractic care offers the perfect solution to your post-accident posture issues.",
  },
];

export default function NewsletterLibraryPage() {
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
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Newsletter Library</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Newsletter Library" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro + Categories ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Resources</p>
                <SplitReveal text="Health & Wellness Newsletters" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-s6 max-w-[720px] text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.68)" }}>
                  Welcome to our Newsletter Library! Here, you will find our collection of informative newsletters that cover a variety of important health and wellness topics. These complimentary newsletters are provided so that you may improve your understanding of chiropractic care and learn more about the fascinating abilities of our bodies!
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <div className="mt-s8">
                  <h3 className="text-fluid-lg text-fg font-serif tracking-tight leading-snug mb-s4">Browse by Topic</h3>
                  <div className="flex flex-wrap gap-s2">
                    {CATEGORIES.map((cat, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium tracking-wide bg-card-bg text-fg transition-colors duration-200 hover:bg-accent hover:text-fg cursor-pointer"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* ── Featured Newsletters ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Latest Issues</p>
                <SplitReveal text="Featured Newsletters" as="h2" className="text-fluid-3xl text-bg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <div className="grid grid-cols-2 gap-s6 mt-s8 max-md:grid-cols-1">
                {NEWSLETTERS.map((nl, i) => (
                  <RevealSection key={i} delay={i * 0.06}>
                    <div className="flex flex-col gap-s4 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] h-full">
                      <span className="text-[10px] tracking-widest uppercase font-sans px-2.5 py-1 rounded-full bg-accent/20 text-accent self-start">Newsletter</span>
                      <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug">{nl.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.45)" }}>{nl.excerpt}</p>
                    </div>
                  </RevealSection>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Subscribe to Our Newsletter</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Stay up to date with the latest health and wellness tips from Roselle Center For Healing in Fairfax, VA.
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
