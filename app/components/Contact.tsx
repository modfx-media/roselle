"use client";
import { useState } from "react";
import RevealSection from "./motion/RevealSection";
import MagneticButton from "./motion/MagneticButton";

const HOURS = [
  { day: "Monday",    hours: "7:00 am – 5:00 pm" },
  { day: "Tuesday",   hours: "10:00 am – 7:00 pm" },
  { day: "Wednesday", hours: "7:00 am – 5:00 pm" },
  { day: "Thursday",  hours: "2:00 pm – 7:00 pm" },
  { day: "Friday",    hours: "7:00 am – 5:00 pm" },
  { day: "Saturday",  hours: "8:00 am – 1:00 pm" },
  { day: "Sunday",    hours: "Closed" },
];

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <div id="contact" data-section="contact">
      <section className="contact-section">
        <div className="site-container">
          <div className="contact-grid">

            {/* CTA card */}
            <RevealSection>
              <div className="contact-card">
                <span className="contact-badge">Free 20-Min Consultation</span>
                <h2>Begin Your Healing Journey</h2>
                <p>
                  Reach out to schedule your consultation and take the first step toward
                  a healthier, more aligned life. Our expert team in Fairfax, VA is ready to help.
                </p>

                <div className="contact-form-wrap">
                  <form
                    className="contact-form"
                    onSubmit={e => {
                      e.preventDefault();
                      window.location.href = `mailto:rosellecare@gmail.com?subject=Appointment Request&body=Email: ${email}`;
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      aria-label="Email address"
                    />
                    <MagneticButton type="submit" style={{ height: "40px", borderRadius: "10px", padding: "0 1.25rem", fontSize: "var(--text-sm)" }}>
                      Inquire
                    </MagneticButton>
                  </form>
                  <p className="contact-form-note">
                    Or call us directly — we&apos;re happy to answer any questions.
                  </p>
                </div>

                <a href="tel:+17036987117" className="contact-phone">(703) 698-7117</a>

                {/* Hours */}
                <div style={{ width: "100%", maxWidth: 380, marginTop: "var(--s2)" }}>
                  <p style={{ fontSize: "var(--text-xs)", color: "rgba(42,41,40,0.5)", marginBottom: "var(--s2)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Hours of Operation</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {HOURS.map(h => (
                      <div key={h.day} style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-sm)", color: "var(--fg)" }}>
                        <span style={{ opacity: 0.7 }}>{h.day}</span>
                        <span style={{ fontWeight: h.hours === "Closed" ? 400 : 500, opacity: h.hours === "Closed" ? 0.4 : 1 }}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Address */}
                <div style={{ width: "100%", maxWidth: 380, marginTop: "var(--s3)", paddingTop: "var(--s3)", borderTop: "1px solid rgba(42,41,40,0.1)" }}>
                  <p style={{ fontSize: "var(--text-sm)", color: "rgba(42,41,40,0.6)", lineHeight: 1.6 }}>
                    8500 Executive Park Ave, Suite 300<br />
                    Fairfax, VA 22031
                  </p>
                  <a
                    href="https://maps.app.goo.gl/5WJebWVTjWfPRX3VA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "var(--text-xs)", color: "var(--fg)", borderBottom: "1px solid rgba(42,41,40,0.3)", paddingBottom: "1px", marginTop: "6px", display: "inline-block" }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </RevealSection>

            {/* Image */}
            <RevealSection delay={0.2}>
              <div className="contact-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop"
                  alt="Roselle Center for Healing — Fairfax, VA chiropractic office"
                  loading="lazy"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>
    </div>
  );
}
