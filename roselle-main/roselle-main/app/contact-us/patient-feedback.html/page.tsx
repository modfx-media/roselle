"use client";
import { useState, FormEvent } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import PageHero from "@/app/components/templates/PageHero";
import ContentBlock from "@/app/components/templates/ContentBlock";
import CtaBand from "@/app/components/templates/CtaBand";
import { submitContactForm } from "../../lib/sendForm";

export default function PatientFeedbackPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);
    const result = await submitContactForm("Mailing List Signup (Patient Feedback)", {
      "First name": formData.firstName,
      "Last name": formData.lastName,
      Email: formData.email,
      Phone: formData.phone,
    });
    setSending(false);
    if (result.ok) setSubmitted(true);
    else setError(result.error || "Could not submit. Please try again.");
  }

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Feedback · Fairfax, VA"
            title="Patient feedback."
            subtitle="We value our patients' experience at Roselle Center For Healing. Share your thoughts and stay informed."
            crumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }, { label: "Patient Feedback" }]}
            image="/services/patient-feedback.jpg"
            imageAlt="Patient feedback."
            primaryCta={{ label: "Download Questionnaire", href: "https://www.rosellecare.com/storage/app/media/Client_Experience_Questionnaire.pdf" }}
            secondaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
          />

          <ContentBlock
            eyebrow="Client Experience Questionnaire"
            title="We'd love your feedback."
            body="If you are currently a patient, please complete the Client Experience Questionnaire. The Questionnaire is in Adobe Acrobat format and requires the free Acrobat Reader to view."
          />

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Stay Informed</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s4 max-w-[32ch]">Join our mailing list.</h2>
              <p className="text-fluid-base text-bg/55 mb-s8 max-w-[640px]">Please complete this form to be notified of center updates, special events and health education lectures.</p>
              {submitted ? (
                <div className="max-w-[720px] p-s8 rounded-xl bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)]">
                  <p className="text-fluid-base text-bg font-medium">Thank you! You&apos;ve been added to our mailing list.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-s4 max-w-[720px] max-md:grid-cols-1">
                  <div className="flex flex-col gap-2"><label className="text-xs tracking-widest uppercase font-sans text-accent">First Name *</label><input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-bg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none focus:border-accent" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs tracking-widest uppercase font-sans text-accent">Last Name *</label><input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-bg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none focus:border-accent" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs tracking-widest uppercase font-sans text-accent">Email *</label><input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-bg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none focus:border-accent" /></div>
                  <div className="flex flex-col gap-2"><label className="text-xs tracking-widest uppercase font-sans text-accent">Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full rounded-lg px-s4 py-3 text-fluid-base text-bg bg-[rgba(245,244,239,0.08)] border border-[rgba(245,244,239,0.12)] outline-none focus:border-accent" /></div>
                  <div className="col-span-2 max-md:col-span-1 mt-s3"><button type="submit" disabled={sending} className="btn-primary-inverted disabled:opacity-60 disabled:cursor-not-allowed">{sending ? "Submitting…" : "Submit"}</button>{error && <p className="mt-s3 text-xs text-red-300">{error}</p>}</div>
                </form>
              )}
            </div>
          </section>

          <CtaBand tone="gold" eyebrow="Get in touch" title="Share your experience." body="Your feedback helps us improve our patient experience." primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }} secondaryCta={{ label: "Book online", href: "/appointment" }} />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
