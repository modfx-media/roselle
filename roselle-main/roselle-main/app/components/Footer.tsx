"use client";
import { useRef, useEffect, useState } from "react";

const LINKS = {
  Services: [
    { label: "Chiropractic Care",   href: "/services/chiropractic.html" },
    { label: "Acupuncture",         href: "/services/acupuncture.html" },
    { label: "Massage Therapy",     href: "/services/massage-therapy.html" },
    { label: "Applied Kinesiology", href: "/services/applied-kinesiology.html" },
    { label: "Nutrition",           href: "/services/nutrition.html" },
    { label: "Functional Medicine", href: "/functional-medicine" },
  ],
  Patients: [
    { label: "New Patient Center",  href: "/new-patient-center.html" },
    { label: "Online Forms",        href: "/online-forms.html" },
    { label: "Book Appointment",    href: "/appointment" },
    { label: "Testimonials",        href: "/testimonials.html" },
    { label: "Patient Feedback",    href: "/contact-us/patient-feedback.html" },
  ],
  About: [
    { label: "Our Doctors",         href: "/about-us/meet-the-doctors---therapists.html" },
    { label: "Dr. Tom Roselle, DC", href: "https://www.drtomroselle.com/" },
    { label: "Purpose & Mission",   href: "/purpose-a-misson" },
    { label: "Center Hours",        href: "/about-us/center-hours.html" },
    { label: "Directions",          href: "https://maps.app.goo.gl/5WJebWVTjWfPRX3VA" },
  ],
};

const SOCIAL = [
  { label: "Facebook",  href: "https://www.facebook.com/rosellecare/" },
  { label: "Instagram", href: "https://instagram.com/rosellecenterforhealing" },
  { label: "YouTube",   href: "https://www.youtube.com/playlist?list=PLSD_TAHzW2viKc2panFxkNwbGcfKwOnoS" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/drtomroselledc" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="footer-gradient"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      <div className="pt-s8 pb-s8 max-md:pb-32">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
          <div className="grid grid-cols-[280px_1fr] gap-s8 mb-s8 pb-s8
                          max-lg:grid-cols-1 max-lg:gap-s6"
            style={{ borderBottom: "1px solid rgba(245,244,239,0.1)" }}>
            {/* Brand column */}
            <div>
              <img
                src="/footer-logo-white-txt.png"
                alt="Roselle Center for Healing Logo"
                style={{ maxWidth: 220, width: "100%", height: "auto", marginBottom: 12 }}
                loading="lazy"
              />
              <p className="text-sm mt-s2 leading-relaxed" style={{ color: "rgba(245,244,239,0.4)" }}>
                Holistic chiropractic &amp; integrative wellness<br />in Fairfax, VA.
              </p>
              <div className="mt-s3 flex flex-col gap-1.5">
                <a href="tel:+17036987117" className="text-sm transition-colors duration-200 hover:text-bg"
                  style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-7117</a>
                <a href="mailto:info@rosellecare.com" className="text-sm transition-colors duration-200 hover:text-bg"
                  style={{ color: "rgba(245,244,239,0.55)" }}>info@rosellecare.com</a>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                  8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                </p>
              </div>
              <div className="flex gap-s3 flex-wrap mt-s3">
                {SOCIAL.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs transition-all duration-200 hover:text-accent hover:scale-[1.15]"
                    style={{ color: "rgba(245,244,239,0.4)", display: "inline-block" }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-3 gap-s6 max-md:grid-cols-2 max-md:gap-s4
                            max-[480px]:grid-cols-1">
              {Object.entries(LINKS).map(([group, links]) => (
                <div key={group} className="flex flex-col gap-s2">
                  <span className="text-xs tracking-widest uppercase mb-s1"
                    style={{ color: "rgba(245,244,239,0.35)" }}>{group}</span>
                  {links.map(l => {
                    const isExternal = l.href.startsWith("http");
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-sm transition-colors duration-200 hover:text-bg hover-underline-gold"
                        style={{ color: "rgba(245,244,239,0.6)" }}
                      >
                        {l.label}
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-s4 pt-s2 pb-s2">
            <span className="text-xs text-center sm:text-left" style={{ color: "rgba(245,244,239,0.5)" }}>
              &copy; {year} Roselle Center for Healing &middot; Fairfax, VA &middot; Powered by{" "}
              <a href="https://modfxmedia.com/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-bg" style={{ color: "rgba(245,244,239,0.6)" }}>ModFXMedia</a>
            </span>
            <div className="flex gap-s4">
              <a href="/contact"
                className="text-xs sm:text-sm transition-colors duration-200 hover:text-bg"
                style={{ color: "rgba(245,244,239,0.6)" }}>Contact</a>
              <a href="/sitemap"
                className="text-xs sm:text-sm transition-colors duration-200 hover:text-bg"
                style={{ color: "rgba(245,244,239,0.6)" }}>Sitemap</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
