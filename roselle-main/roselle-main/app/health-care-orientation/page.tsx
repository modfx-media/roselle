"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import ContentBlock from "../components/templates/ContentBlock";
import ImageCta from "../components/templates/ImageCta";
import { submitContactForm } from "../lib/sendForm";

export default function HealthCareOrientationPage() {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    const result = await submitContactForm("Health Care Orientation Confirmation", {
      "Confirmation": "Patient confirms watching the orientation video.",
      "Questions after watching": question,
    });
    setSending(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error || "Could not submit. Please try again.");
  };

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Patient Education · Fairfax, VA"
            title="Health care orientation."
            subtitle="Understanding your health care — an important part of your wellness plan with the Roselle Center for Healing."
            crumbs={[{ label: "Home", href: "/" }, { label: "Health Education", href: "/education-lectures.html" }, { label: "Health Care Orientation" }]}
            image="/services/learning.jpg"
            imageAlt="Health care orientation."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Book a consultation", href: "/appointment" }}
          />

          <ContentBlock
            eyebrow="Understanding Your Health Care"
            title="Your health is in your hands."
            body={[
              "This Health Care Orientation is designed to educate you about our approach to achieving optimal wellness, as well as your responsibilities. What we do in our practice only works if you do your part at home and throughout your life. This video helps you understand your body, and what we'll do together to achieve your best state of health.",
              "\"Understanding Your Health Care\" is part of your treatment plan at the Roselle Center for Healing. As part of your patient agreement, you agree to watch this video health care orientation in full and complete the form below to notify us that you have viewed this video.",
            ]}
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Confirmation</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s4 max-w-[32ch]">Post-viewing confirmation.</h2>
              <p className="text-fluid-base text-bg/55 mb-s8 max-w-[640px]">Please complete the form below to acknowledge that you have watched the health care orientation.</p>
              {submitted ? (
                <div className="max-w-[640px] p-s8 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight mb-s3">Thank You!</h3>
                  <p className="text-fluid-base text-bg/55">Your confirmation has been submitted. Our team has been notified.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-[640px] flex flex-col gap-s4">
                  <label htmlFor="orientation-question" className="text-sm font-medium text-bg">Do you have any questions after watching this video? <span className="text-accent">*</span></label>
                  <textarea id="orientation-question" required rows={5} value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Enter any questions you may have…" className="w-full rounded-lg border border-[rgba(245,244,239,0.12)] bg-[rgba(245,244,239,0.04)] px-s4 py-s3 text-bg text-fluid-base placeholder:text-bg/25 focus:outline-none focus:border-accent transition-colors resize-y" />
                  <button type="submit" disabled={sending} className="btn-primary-inverted self-start disabled:opacity-60 disabled:cursor-not-allowed">{sending ? "Submitting…" : "Submit Confirmation"}</button>
                  {error && <p className="text-xs text-red-300">{error}</p>}
                </form>
              )}
            </div>
          </section>

          <ImageCta eyebrow="Need help?" title="Questions about your health care orientation?" body="Contact Roselle Center For Healing in Fairfax, VA for assistance." image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=70&auto=format&fit=crop" primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
