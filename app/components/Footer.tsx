"use client";

const NAV_LINKS = {
  Services: [
    { label: "Chiropractic Care", href: "https://www.rosellecare.com/services/chiropractic.html" },
    { label: "Acupuncture", href: "https://www.rosellecare.com/services/acupuncture.html" },
    { label: "Massage Therapy", href: "https://www.rosellecare.com/services/massage-therapy.html" },
    { label: "Applied Kinesiology", href: "https://www.rosellecare.com/services/applied-kinesiology.html" },
    { label: "Nutrition", href: "https://www.rosellecare.com/services/nutrition.html" },
    { label: "Functional Medicine", href: "https://www.rosellecare.com/functional-medicine" },
  ],
  Patients: [
    { label: "New Patient Center", href: "https://www.rosellecare.com/new-patient-center.html" },
    { label: "Online Forms", href: "https://www.rosellecare.com/online-forms.html" },
    { label: "Book Appointment", href: "https://www.rosellecare.com/appointment" },
    { label: "Patient Feedback", href: "https://www.rosellecare.com/contact-us/patient-feedback.html" },
    { label: "Testimonials", href: "https://www.rosellecare.com/testimonials.html" },
  ],
  About: [
    { label: "Our Doctors", href: "https://www.rosellecare.com/about-us.html/staff" },
    { label: "Dr. Tom Roselle, DC", href: "https://www.drtomroselle.com/" },
    { label: "Purpose & Mission", href: "https://www.rosellecare.com/purpose-a-misson" },
    { label: "Center Hours", href: "https://www.rosellecare.com/about-us/center-hours.html" },
    { label: "Directions", href: "https://maps.app.goo.gl/5WJebWVTjWfPRX3VA" },
  ],
};

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/rosellecare/" },
  { label: "Instagram", href: "https://instagram.com/rosellecenterforhealing" },
  { label: "YouTube", href: "https://www.youtube.com/playlist?list=PLSD_TAHzW2viKc2panFxkNwbGcfKwOnoS" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/drtomroselledc" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div id="footer" data-section="footer">
      <footer className="footer-section">
        {/* Faded image */}
        <div className="footer-image-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=600&fit=crop"
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        <div className="footer-dark">
          <div className="site-container">
            <div className="footer-top">
              {/* Brand + tagline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--s2)", maxWidth: 280 }}>
                <button
                  onClick={() => go("hero")}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                >
                  <span className="footer-brand">Roselle Center<br />for Healing</span>
                </button>
                <p style={{ fontSize: "var(--text-sm)", color: "rgba(245,244,239,0.45)", lineHeight: 1.6 }}>
                  Holistic chiropractic &amp; integrative wellness in Fairfax, VA.
                </p>
                <a href="tel:+17036987117" style={{ fontSize: "var(--text-sm)", color: "rgba(245,244,239,0.7)", marginTop: "var(--s1)" }}>
                  (703) 698-7117
                </a>
                <p style={{ fontSize: "var(--text-xs)", color: "rgba(245,244,239,0.4)", lineHeight: 1.5 }}>
                  8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                </p>
                {/* Social */}
                <div style={{ display: "flex", gap: "var(--s3)", marginTop: "var(--s1)", flexWrap: "wrap" }}>
                  {SOCIAL.map(s => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "var(--text-xs)", color: "rgba(245,244,239,0.5)", transition: "color 0.2s" }}
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Link columns */}
              <div className="footer-links-row">
                {Object.entries(NAV_LINKS).map(([group, links]) => (
                  <div key={group} className="footer-col">
                    <span className="footer-col-title">{group}</span>
                    {links.map(l => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-bottom">
              <span className="footer-copy">© {year} Roselle Center for Healing · Fairfax, VA</span>
              <a
                href="https://www.rosellecare.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
