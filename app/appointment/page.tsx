"use client";

import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import CtaBand from "../components/templates/CtaBand";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    patientType: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    contactMethod: "Phone",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Appointment Request — ${formData.firstName} ${formData.lastName}`.trim(),
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Patient: ${formData.patientType}`,
        `Service: ${formData.service}`,
        `Preferred Date: ${formData.preferredDate}`,
        `Preferred Time: ${formData.preferredTime}`,
        `Preferred Contact: ${formData.contactMethod}`,
        "",
        `Reason for visit / notes:`,
        formData.message,
      ].join("\n"),
    );
    window.location.href = `mailto:rosellecare@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  // Shared input styling
  const fieldStyle = {
    background: "rgba(245,244,239,0.06)",
    border: "1px solid rgba(245,244,239,0.12)",
    color: "#f5f4ef",
  } as const;
  const fieldClass =
    "w-full rounded-lg px-s3 py-3 text-sm outline-none transition-colors";
  const labelClass =
    "text-[10px] tracking-[0.22em] uppercase text-accent font-sans";

  const services = [
    "Chiropractic Adjustment",
    "Acupuncture",
    "Functional Medicine Consult",
    "Nutrition / Thyroid Assessment",
    "Prenatal Chiropractic",
    "Sports Injury / Rehab",
    "Auto Accident / Whiplash",
    "New Patient Consultation",
    "Other (describe in notes)",
  ];

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Schedule · Fairfax, VA"
            title="Request an appointment."
            subtitle="Call us directly or email our office to schedule your visit. We will do our best to accommodate your preferred day and time."
            crumbs={[{ label: "Home", href: "/" }, { label: "Appointment Request" }]}
            image="/services/online-appointment.jpg"
            imageAlt="Schedule an appointment."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email rosellecare@gmail.com", href: "mailto:rosellecare@gmail.com" }}
          />

          {/* Two-column: info cards (left) + request form (right) */}
          <section className="bg-bg py-section-py relative overflow-hidden">
            {/* Ambient gold bloom */}
            <div
              aria-hidden="true"
              className="absolute pointer-events-none"
              style={{
                top: "-10%",
                left: "-8%",
                width: "520px",
                height: "520px",
                background:
                  "radial-gradient(circle, rgba(198,177,128,0.10) 0%, transparent 65%)",
              }}
            />

            <div className="relative w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              {/* Heading */}
              <div className="mb-s10">
                <div className="flex items-center gap-3 mb-s4">
                  <span
                    className="w-6 h-px"
                    style={{ background: "rgba(198,177,128,0.5)" }}
                  />
                  <p className="text-xs tracking-[0.22em] uppercase font-sans text-accent">
                    How to book
                  </p>
                </div>
                <h2 className="text-fluid-4xl text-fg tracking-tight leading-[1.05] max-w-[24ch]">
                  Two easy ways to schedule.
                </h2>
                <p
                  className="mt-s4 max-w-[60ch] text-sm leading-relaxed"
                  style={{ color: "rgba(42,41,40,0.7)" }}
                >
                  Call us directly, email our office, or send your appointment request
                  using the form. Your appointment is not confirmed until you receive
                  confirmation from our office.
                </p>
              </div>

              <div className="grid grid-cols-[1.05fr_1fr] gap-s8 items-start max-lg:grid-cols-1 max-lg:gap-s6">
                {/* Left — info cards */}
                <div className="grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" />
                        </svg>
                      ),
                      label: "Call us",
                      value: "(703) 698-7117",
                      href: "tel:+17036987117",
                      cta: "Tap to call",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                      ),
                      label: "Email us",
                      value: "rosellecare@gmail.com",
                      href: "mailto:rosellecare@gmail.com",
                      cta: "Send email",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9" />
                          <polyline points="12 7 12 12 15 14" />
                        </svg>
                      ),
                      label: "Office Hours",
                      value: "Mon–Fri 7am–7pm · Sat 8am–1pm",
                      href: "#",
                      cta: "View full schedule",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      ),
                      label: "Visit us",
                      value: "8500 Executive Park Ave STE 300, Fairfax, VA 22031",
                      href: "https://www.google.com/maps/place/Roselle+Center+for+Healing",
                      cta: "Get directions",
                    },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex flex-col gap-s3 p-s5 rounded-2xl transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.65)",
                        border: "1px solid rgba(42,41,40,0.08)",
                      }}
                    >
                      <span
                        className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors"
                        style={{
                          background: "rgba(198,177,128,0.12)",
                          color: "#c6b180",
                          border: "1px solid rgba(198,177,128,0.35)",
                        }}
                      >
                        {c.icon}
                      </span>
                      <div>
                        <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium mb-1">
                          {c.label}
                        </p>
                        <p className="text-sm text-fg leading-snug">{c.value}</p>
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs mt-auto transition-transform duration-200 group-hover:translate-x-0.5"
                        style={{ color: "rgba(42,41,40,0.7)" }}
                      >
                        {c.cta}
                        <span aria-hidden="true">→</span>
                      </span>
                    </a>
                  ))}
                </div>

                {/* Right — request form */}
                <div
                  className="p-s6 rounded-2xl max-sm:p-s5"
                  style={{
                    background: "#0a1628",
                    boxShadow:
                      "0 24px 60px rgba(10,22,40,0.18), 0 0 0 1px rgba(245,244,239,0.06)",
                  }}
                >
                  <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium mb-s2">
                    Request by Form
                  </p>
                  <h3 className="text-fluid-2xl text-bg tracking-tight leading-tight mb-s5">
                    Send us your appointment request.
                  </h3>

                  {sent ? (
                    <div
                      className="p-s5 rounded-xl"
                      style={{
                        background: "rgba(198,177,128,0.12)",
                        border: "1px solid rgba(198,177,128,0.35)",
                      }}
                    >
                      <p className="text-sm text-bg font-medium">
                        Thank you! Your email client should open shortly. If it doesn&apos;t, please email rosellecare@gmail.com directly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-s3 max-sm:grid-cols-1">
                      {/* Patient type — full row */}
                      <div className="col-span-2 max-sm:col-span-1 flex flex-col gap-2">
                        <span className={labelClass}>Are you a *</span>
                        <div className="flex flex-wrap gap-2">
                          {["New patient", "Returning patient"].map((opt) => {
                            const active = formData.patientType === opt;
                            return (
                              <label
                                key={opt}
                                className="inline-flex items-center gap-2 px-s3 py-2 rounded-full text-xs cursor-pointer transition-colors"
                                style={{
                                  background: active
                                    ? "rgba(198,177,128,0.18)"
                                    : "rgba(245,244,239,0.04)",
                                  border: active
                                    ? "1px solid rgba(198,177,128,0.55)"
                                    : "1px solid rgba(245,244,239,0.12)",
                                  color: "#f5f4ef",
                                }}
                              >
                                <input
                                  required
                                  type="radio"
                                  name="patientType"
                                  value={opt}
                                  checked={active}
                                  onChange={handleChange}
                                  className="sr-only"
                                />
                                {opt}
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Name */}
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>First name *</label>
                        <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={fieldClass} style={fieldStyle} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Last name *</label>
                        <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={fieldClass} style={fieldStyle} />
                      </div>

                      {/* Contact */}
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Email *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange} className={fieldClass} style={fieldStyle} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Phone *</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className={fieldClass} style={fieldStyle} />
                      </div>

                      {/* Service select — full row */}
                      <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                        <label className={labelClass}>Service requested *</label>
                        <select
                          required
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={fieldClass}
                          style={{
                            ...fieldStyle,
                            appearance: "none",
                            backgroundImage:
                              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5 6 6.5l5-5' stroke='%23c6b180' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                            paddingRight: "2.5rem",
                          }}
                        >
                          <option value="" disabled style={{ color: "#0a1628" }}>
                            Select a service
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s} style={{ color: "#0a1628" }}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Preferred date / time */}
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Preferred date</label>
                        <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className={fieldClass} style={fieldStyle} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className={labelClass}>Preferred time</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={fieldClass}
                          style={{
                            ...fieldStyle,
                            appearance: "none",
                            backgroundImage:
                              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5 6 6.5l5-5' stroke='%23c6b180' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "right 1rem center",
                            paddingRight: "2.5rem",
                          }}
                        >
                          <option value="" style={{ color: "#0a1628" }}>No preference</option>
                          <option value="Morning (7am–11am)" style={{ color: "#0a1628" }}>Morning (7am–11am)</option>
                          <option value="Midday (11am–2pm)" style={{ color: "#0a1628" }}>Midday (11am–2pm)</option>
                          <option value="Afternoon (2pm–5pm)" style={{ color: "#0a1628" }}>Afternoon (2pm–5pm)</option>
                          <option value="Evening (5pm–7pm)" style={{ color: "#0a1628" }}>Evening (5pm–7pm)</option>
                        </select>
                      </div>

                      {/* Preferred contact method — full row */}
                      <div className="col-span-2 max-sm:col-span-1 flex flex-col gap-2">
                        <span className={labelClass}>Preferred contact method</span>
                        <div className="flex flex-wrap gap-2">
                          {["Phone", "Email", "Text"].map((opt) => {
                            const active = formData.contactMethod === opt;
                            return (
                              <label
                                key={opt}
                                className="inline-flex items-center gap-2 px-s3 py-2 rounded-full text-xs cursor-pointer transition-colors"
                                style={{
                                  background: active
                                    ? "rgba(198,177,128,0.18)"
                                    : "rgba(245,244,239,0.04)",
                                  border: active
                                    ? "1px solid rgba(198,177,128,0.55)"
                                    : "1px solid rgba(245,244,239,0.12)",
                                  color: "#f5f4ef",
                                }}
                              >
                                <input
                                  type="radio"
                                  name="contactMethod"
                                  value={opt}
                                  checked={active}
                                  onChange={handleChange}
                                  className="sr-only"
                                />
                                {opt}
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Notes */}
                      <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                        <label className={labelClass}>Reason for visit / notes</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your symptoms, concerns, or anything we should know."
                          className={`${fieldClass} resize-none placeholder:text-[rgba(245,244,239,0.35)]`}
                          style={fieldStyle}
                        />
                      </div>

                      <p
                        className="col-span-2 max-sm:col-span-1 text-[11px] leading-relaxed"
                        style={{ color: "rgba(245,244,239,0.55)" }}
                      >
                        Submitting this form is a request only. Your appointment is not
                        confirmed until our office contacts you. Please do not include
                        sensitive medical history.
                      </p>

                      <div className="col-span-2 max-sm:col-span-1 mt-s2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 h-12 px-s5 rounded-full text-sm font-medium w-full transition-transform hover:-translate-y-0.5"
                          style={{ background: "#c6b180", color: "#0a1628" }}
                        >
                          Send Request
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          <CtaBand
            tone="gold"
            eyebrow="Ready to begin?"
            title="Schedule your visit today."
            body="Take the next step toward better health with Roselle Center For Healing in Fairfax, VA."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Email us", href: "mailto:rosellecare@gmail.com" }}
          />

          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
