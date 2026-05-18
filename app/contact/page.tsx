"use client";
import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import SmoothScroll from "../components/motion/SmoothScroll";
import PageHero from "../components/templates/PageHero";
import CtaBand from "../components/templates/CtaBand";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`);
    window.location.href = `mailto:rosellecare@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          <PageHero
            eyebrow="Contact · Fairfax, VA"
            title="Contact Roselle Center for Healing."
            subtitle="We'd love to hear from you. Reach out to schedule a visit, ask a question, or learn more about our services."
            crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
            image="https://cdcssl.ibsrv.net/ibimg/smb/1023x512_80/webmgr/0g/5/2/slider_01.jpg.webp?30ed42aefe12e4398d68ac595384cd0c"
            imageAlt="Roselle Center for Healing."
            primaryCta={{ label: "Call (703) 698-7117", href: "tel:+17036987117" }}
            secondaryCta={{ label: "Get directions", href: "https://www.google.com/maps/place/Roselle+Center+for+Healing" }}
          />

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
                    Merrifield, VA Location
                  </p>
                </div>
                <h2 className="text-fluid-4xl text-fg tracking-tight leading-[1.05] max-w-[24ch]">
                  Roselle Center For Healing.
                </h2>
              </div>

              {/* 2-col layout: info left, form right */}
              <div className="grid grid-cols-[1.05fr_1fr] gap-s8 items-start max-lg:grid-cols-1 max-lg:gap-s6">
                {/* Left — info cards */}
                <div className="grid grid-cols-2 gap-s4 max-sm:grid-cols-1">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      ),
                      label: "Address",
                      value: "8500 Executive Park Ave STE 300, Fairfax, VA 22031",
                      href: "https://www.google.com/maps/place/Roselle+Center+for+Healing",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7a2 2 0 0 1 1.72 2.03z" />
                        </svg>
                      ),
                      label: "Phone",
                      value: "(703) 698-7117",
                      href: "tel:+17036987117",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                      ),
                      label: "Email",
                      value: "rosellecare@gmail.com",
                      href: "mailto:rosellecare@gmail.com",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="9" />
                          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                        </svg>
                      ),
                      label: "Map Directions",
                      value: "Open in Google Maps",
                      href: "https://www.google.com/maps/place/Roselle+Center+for+Healing",
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
                        Open
                        <span aria-hidden="true">→</span>
                      </span>
                    </a>
                  ))}
                </div>

                {/* Right — form */}
                <div
                  className="p-s6 rounded-2xl max-sm:p-s5"
                  style={{
                    background: "#0a1628",
                    boxShadow:
                      "0 24px 60px rgba(10,22,40,0.18), 0 0 0 1px rgba(245,244,239,0.06)",
                  }}
                >
                  <p className="text-[11px] tracking-[0.22em] uppercase text-accent font-medium mb-s2">
                    Send a Message
                  </p>
                  <h3 className="text-fluid-2xl text-bg tracking-tight leading-tight mb-s5">
                    We&apos;d love to hear from you.
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
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.22em] uppercase text-accent font-sans">Name *</label>
                        <input required type="text" name="name" value={formData.name} onChange={handleChange}
                          className="w-full rounded-lg px-s3 py-3 text-sm outline-none transition-colors"
                          style={{
                            background: "rgba(245,244,239,0.06)",
                            border: "1px solid rgba(245,244,239,0.12)",
                            color: "#f5f4ef",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] tracking-[0.22em] uppercase text-accent font-sans">Email *</label>
                        <input required type="email" name="email" value={formData.email} onChange={handleChange}
                          className="w-full rounded-lg px-s3 py-3 text-sm outline-none transition-colors"
                          style={{
                            background: "rgba(245,244,239,0.06)",
                            border: "1px solid rgba(245,244,239,0.12)",
                            color: "#f5f4ef",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                        <label className="text-[10px] tracking-[0.22em] uppercase text-accent font-sans">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full rounded-lg px-s3 py-3 text-sm outline-none transition-colors"
                          style={{
                            background: "rgba(245,244,239,0.06)",
                            border: "1px solid rgba(245,244,239,0.12)",
                            color: "#f5f4ef",
                          }}
                        />
                      </div>
                      <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                        <label className="text-[10px] tracking-[0.22em] uppercase text-accent font-sans">Message *</label>
                        <textarea required name="message" rows={5} value={formData.message} onChange={handleChange}
                          className="w-full rounded-lg px-s3 py-3 text-sm outline-none transition-colors resize-none"
                          style={{
                            background: "rgba(245,244,239,0.06)",
                            border: "1px solid rgba(245,244,239,0.12)",
                            color: "#f5f4ef",
                          }}
                        />
                      </div>
                      <div className="col-span-2 max-sm:col-span-1 mt-s2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 h-12 px-s5 rounded-full text-sm font-medium w-full transition-transform hover:-translate-y-0.5"
                          style={{ background: "#c6b180", color: "#0a1628" }}
                        >
                          Send Message
                          <span aria-hidden="true">→</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-fg py-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <p className="text-xs tracking-widest uppercase text-accent mb-s3 font-sans">Our Location</p>
              <h2 className="text-fluid-3xl text-bg tracking-tight leading-[1.12] mb-s8 max-w-[28ch]">Fairfax, VA 22031 office.</h2>
              <div className="rounded-xl overflow-hidden border border-[rgba(245,244,239,0.08)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.5!2d-77.2399291!3d38.8676434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64b7fd2c0c23d%3A0x2367cc50a24ac1ff!2sRoselle%20Center%20for%20Healing!5e0!3m2!1sen!2sus!4v1"
                  className="w-full aspect-[16/7] max-md:aspect-video"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Roselle Center for Healing location map"
                />
              </div>
            </div>
          </section>

          <CtaBand
            tone="gold"
            eyebrow="Ready to begin?"
            title="Schedule a free 20-minute consultation."
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
