"use client";
import { useState } from "react";
import RevealSection from "./motion/RevealSection";
import MagneticButton from "./motion/MagneticButton";

const HOURS = [
  { day: "Monday",    time: "7:00 am – 5:00 pm" },
  { day: "Tuesday",   time: "10:00 am – 7:00 pm" },
  { day: "Wednesday", time: "7:00 am – 5:00 pm" },
  { day: "Thursday",  time: "2:00 pm – 7:00 pm" },
  { day: "Friday",    time: "7:00 am – 5:00 pm" },
  { day: "Saturday",  time: "8:00 am – 1:00 pm" },
  { day: "Sunday",    time: "Closed" },
];

export default function Contact() {
  const [email, setEmail] = useState("");

  return (
    <div id="contact" data-section="contact">
      <section className="contact-section">
        <div className="site-container">

          <div className="contact-grid">
            {/* Left — CTA card */}
            <RevealSection>
              <div className="contact-card">
                <span className="contact-badge">Free 20-Min Consultation</span>

                <h2>Begin Your<br />Healing Journey</h2>

                <p>
                  Reach out to schedule your consultation and take the first step toward
                  a healthier, more aligned life. Our expert team in Fairfax, VA is ready to help.
                </p>

                {/* Email form */}
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
                      placeholder="Your email address"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      aria-label="Email address"
                    />
                    <MagneticButton
                      type="submit"
                      style={{ height: 40, borderRadius: 10, padding: "0 1.25rem", fontSize: "var(--text-sm)" }}
                    >
                      Inquire
                    </MagneticButton>
                  </form>
                  <p className="contact-form-note">
                    Or call us — we&apos;re happy to answer any questions.
                  </p>
                </div>

                <a href="tel:+17036987117" className="contact-phone">(703) 698-7117</a>

                <div className="contact-divider" />

                {/* Hours */}
                <div className="contact-hours">
                  <p style={{ fontSize: "var(--text-xs)", color: "rgba(42,41,40,0.45)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "var(--s1)" }}>
                    Hours of Operation
                  </p>
                  {HOURS.map(h => (
                    <div key={h.day} className="contact-hours-row">
                      <span className="contact-hours-day">{h.day}</span>
                      <span className={`contact-hours-time${h.time === "Closed" ? " closed" : ""}`}>{h.time}</span>
                    </div>
                  ))}
                </div>

                <div className="contact-divider" />

                {/* Address */}
                <div>
                  <p className="contact-address">
                    8500 Executive Park Ave, Suite 300<br />
                    Fairfax, VA 22031
                  </p>
                  <a
                    href="https://maps.app.goo.gl/5WJebWVTjWfPRX3VA"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--fg)",
                      opacity: 0.55,
                      borderBottom: "1px solid rgba(42,41,40,0.25)",
                      paddingBottom: "1px",
                      marginTop: "8px",
                      display: "inline-block",
                      transition: "opacity 0.2s",
                    }}
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </RevealSection>

            {/* Right — image */}
            <RevealSection delay={0.18}>
              <div className="contact-image">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=900&fit=crop"
                  alt="Roselle Center for Healing — Fairfax, VA"
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
