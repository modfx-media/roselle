"use client";
import { useState } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import PageHero from "@/app/components/templates/PageHero";
import ImageCta from "@/app/components/templates/ImageCta";
import { submitContactForm } from "@/app/lib/sendForm";

const QUESTIONS = [
  "Are you experiencing hair loss or slow growth?",
  "Do you have dry and cracked heels?",
  "Do you gain or lose weight easily?",
  "Do you have any eyebrow loss?",
  "Do you have a slow or fast heartbeat?",
  "Do you have heat or cold intolerance?",
  "Do you have brittle nails?",
  "Do you have an irregular menstrual cycle?",
  "Do you have constipation or diarrhea?",
  "Do you feel fatigued?",
];

export default function ThyroidAssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [additionalQuestion, setAdditionalQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleAnswer = (i: number, v: string) => setAnswers((p) => ({ ...p, [i]: v }));
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    const fields: Record<string, string> = {};
    QUESTIONS.forEach((q, i) => {
      fields[`Q${i + 1}. ${q}`] = answers[i] ?? "";
    });
    fields["Additional questions"] = additionalQuestion;
    const result = await submitContactForm("Thyroid Health Assessment", fields);
    setSending(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error || "Could not submit assessment. Please try again.");
  };
  const allAnswered = QUESTIONS.every((_, i) => answers[i] !== undefined);

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Health Assessment · Fairfax, VA"
            title="Comprehensive thyroid health assessment."
            subtitle='Complete this assessment and receive "The Thyroid Puzzle" Health Education Video.'
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Health Education", href: "/education-lectures.html" },
              { label: "Thyroid Assessment" },
            ]}
            image="/services/man-medical-office-physiotherapist-is-rehabilitating-back.jpg"
            imageAlt="Thyroid health assessment."
            primaryCta={{ label: "Take the assessment", href: "#assessment" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <section id="assessment" className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>
                  Self-screening
                </p>
                <h2 className="text-fluid-3xl text-bg font-serif tracking-tight leading-[1.12] max-w-[28ch]">
                  Answer 10 quick questions.
                </h2>
              </RevealSection>

              {submitted ? (
                <RevealSection>
                  <div className="mt-s8 p-s8 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] max-w-[640px]">
                    <h3 className="text-fluid-2xl text-bg font-serif tracking-tight mb-s3">Thank you!</h3>
                    <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>
                      Your thyroid assessment has been submitted. Our team will review your responses and follow up with you shortly.
                    </p>
                  </div>
                </RevealSection>
              ) : (
                <form onSubmit={handleSubmit} className="mt-s8">
                  <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                    {QUESTIONS.map((q, i) => (
                      <RevealSection key={i} delay={i * 0.04}>
                        <div className="flex flex-col gap-s3 p-s6 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] h-full">
                          <p className="text-fluid-base text-bg font-medium leading-snug">
                            {i + 1}. {q}<span className="text-accent">*</span>
                          </p>
                          <div className="flex items-center gap-s4 mt-auto">
                            {["yes", "no"].map((v) => (
                              <label key={v} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`thyroid-q-${i}`}
                                  value={v}
                                  required={v === "yes"}
                                  checked={answers[i] === v}
                                  onChange={() => handleAnswer(i, v)}
                                  className="accent-accent w-4 h-4"
                                />
                                <span className="text-sm capitalize" style={{ color: "rgba(245,244,239,0.65)" }}>
                                  {v}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </RevealSection>
                    ))}
                  </div>

                  <RevealSection delay={0.45}>
                    <div className="mt-s8 max-w-[640px] flex flex-col gap-s4">
                      <label htmlFor="thyroid-additional" className="text-sm font-medium text-bg">
                        Have any questions about thyroid health?
                      </label>
                      <textarea
                        id="thyroid-additional"
                        rows={4}
                        value={additionalQuestion}
                        onChange={(e) => setAdditionalQuestion(e.target.value)}
                        placeholder="Enter any questions you may have…"
                        className="w-full rounded-lg border border-[rgba(245,244,239,0.12)] bg-[rgba(245,244,239,0.04)] px-s4 py-s3 text-bg text-fluid-base placeholder:text-[rgba(245,244,239,0.25)] focus:outline-none focus:border-accent transition-colors duration-200 resize-y"
                      />
                      <button
                        type="submit"
                        disabled={!allAnswered || sending}
                        className="btn-primary self-start disabled:opacity-40 disabled:cursor-not-allowed transition-opacity duration-200"
                      >
                        {sending ? "Submitting…" : "Submit assessment"}
                      </button>
                      {error && (
                        <p className="text-xs text-red-300">{error}</p>
                      )}
                    </div>
                  </RevealSection>
                </form>
              )}
            </div>
          </section>

          <ImageCta
            eyebrow="Talk to us"
            title="Questions about thyroid health?"
            body="Contact Roselle Center For Healing in Fairfax, VA, for a thyroid health consultation."
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=70&auto=format&fit=crop"
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book online", href: "/appointment" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
