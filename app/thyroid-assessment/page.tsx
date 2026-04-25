"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import Contact from "../components/Contact";


const QUESTIONS = [
  "Are you experiencing the hair loss or slow growth?",
  "Do you have dry and cracked heels?",
  "Do you gain or lose weight easily?",
  "Do you have any eyebrow loss?",
  "Do you have slow or fast heartbeat?",
  "Do you have heat or cold intolerance?",
  "Do you have brittle nails?",
  "Do you have irregular menstrual cycle?",
  "Do you have constipation or diarrhea?",
  "Do you feel fatigue?",
];

export default function ThyroidAssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [additionalQuestion, setAdditionalQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const allAnswered = QUESTIONS.every((_, i) => answers[i] !== undefined);

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
                  <a href="/education-lectures.html" className="transition-colors duration-200 hover:text-accent">Health Education</a><span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Thyroid Assessment</span>
                </nav>
              </RevealSection>
              <SplitReveal text="Comprehensive Thyroid Health Assessment at Roselle Center for Healing" as="h1" className="text-fluid-5xl text-bg tracking-tight leading-[1.05]" />
            </div>
          </section>

          {/* ── Intro ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Health Assessment</p>
                <SplitReveal text="Thyroid Assessment" as="h2" className="text-fluid-3xl text-fg tracking-tight leading-[1.12] max-w-[32ch]" />
              </RevealSection>
              <RevealSection delay={0.1}>
                <h3 className="mt-s4 text-fluid-lg text-fg font-serif tracking-tight leading-snug max-w-[640px]">
                  Complete this assessment and receive &ldquo;The Thyroid Puzzle&rdquo; Health Education Video
                </h3>
              </RevealSection>
            </div>
          </section>

          {/* ── Assessment Form ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              {submitted ? (
                <RevealSection>
                  <div className="p-s8 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] max-w-[640px]">
                    <h3 className="text-fluid-2xl text-bg font-serif tracking-tight mb-s3">Thank You!</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>Your thyroid assessment has been submitted. Our team will review your responses and follow up with you.</p>
                  </div>
                </RevealSection>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                    {QUESTIONS.map((q, i) => (
                      <RevealSection key={i} delay={i * 0.04}>
                        <div className="flex flex-col gap-s3 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] h-full">
                          <p className="text-fluid-base text-bg font-medium leading-snug">
                            {i + 1}. {q}<span className="text-accent">*</span>
                          </p>
                          <div className="flex items-center gap-s4 mt-auto">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name={`thyroid-q-${i}`}
                                value="yes"
                                required
                                checked={answers[i] === "yes"}
                                onChange={() => handleAnswer(i, "yes")}
                                className="accent-accent w-4 h-4"
                              />
                              <span className="text-sm" style={{ color: "rgba(245,244,239,0.65)" }}>Yes</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="radio"
                                name={`thyroid-q-${i}`}
                                value="no"
                                checked={answers[i] === "no"}
                                onChange={() => handleAnswer(i, "no")}
                                className="accent-accent w-4 h-4"
                              />
                              <span className="text-sm" style={{ color: "rgba(245,244,239,0.65)" }}>No</span>
                            </label>
                          </div>
                        </div>
                      </RevealSection>
                    ))}
                  </div>

                  <RevealSection delay={0.45}>
                    <div className="mt-s8 max-w-[640px] flex flex-col gap-s4">
                      <label htmlFor="thyroid-additional" className="text-sm font-medium text-bg">
                        Please let us know if you have any questions about thyroid.
                      </label>
                      <textarea
                        id="thyroid-additional"
                        rows={4}
                        value={additionalQuestion}
                        onChange={(e) => setAdditionalQuestion(e.target.value)}
                        placeholder="Enter any questions you may have…"
                        className="w-full rounded-lg border border-[rgba(245,244,239,0.12)] bg-[rgba(245,244,239,0.04)] px-s4 py-s3 text-bg text-fluid-base placeholder:text-[rgba(245,244,239,0.25)] focus:outline-none input-gold-focus focus:border-accent transition-colors duration-200 resize-y"
                      />
                      <button type="submit" disabled={!allAnswered} className="btn-primary self-start disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-200">Submit Assessment</button>
                    </div>
                  </RevealSection>
                </form>
              )}
            </div>
          </section>

          {/* ── CTA Card ── */}
          <section className="bg-bg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">Questions About Thyroid Health?</h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Contact Roselle Center For Healing in Fairfax, VA for a thyroid health consultation.
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
