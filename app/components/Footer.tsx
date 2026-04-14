"use client";

const LINKS = {
  Services: [
    { label: "Chiropractic Care",   href: "https://www.rosellecare.com/services/chiropractic.html" },
    { label: "Acupuncture",         href: "https://www.rosellecare.com/services/acupuncture.html" },
    { label: "Massage Therapy",     href: "https://www.rosellecare.com/services/massage-therapy.html" },
    { label: "Applied Kinesiology", href: "https://www.rosellecare.com/services/applied-kinesiology.html" },
    { label: "Nutrition",           href: "https://www.rosellecare.com/services/nutrition.html" },
    { label: "Functional Medicine", href: "https://www.rosellecare.com/functional-medicine" },
  ],
  Patients: [
    { label: "New Patient Center",  href: "https://www.rosellecare.com/new-patient-center.html" },
    { label: "Online Forms",        href: "https://www.rosellecare.com/online-forms.html" },
    { label: "Book Appointment",    href: "https://www.rosellecare.com/appointment" },
    { label: "Testimonials",        href: "https://www.rosellecare.com/testimonials.html" },
    { label: "Patient Feedback",    href: "https://www.rosellecare.com/contact-us/patient-feedback.html" },
  ],
  About: [
    { label: "Our Doctors",         href: "https://www.rosellecare.com/about-us.html/staff" },
    { label: "Dr. Tom Roselle, DC", href: "https://www.drtomroselle.com/" },
    { label: "Purpose & Mission",   href: "https://www.rosellecare.com/purpose-a-misson" },
    { label: "Center Hours",        href: "https://www.rosellecare.com/about-us/center-hours.html" },
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

  return (
    <footer id="footer" className="bg-fg">
      {/* removed image */}

      <div className="pt-s8 pb-s6">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          <div className="grid grid-cols-[280px_1fr] gap-s8 mb-s8 pb-s8
                          max-lg:grid-cols-1 max-lg:gap-s6"
            style={{ borderBottom: "1px solid rgba(245,244,239,0.1)" }}>
            {/* Brand column */}
            <div>
              <p className="text-2xl text-bg font-serif font-medium leading-snug">
                Roselle Center<br />for Healing
              </p>
              <p className="text-sm mt-s2 leading-relaxed" style={{ color: "rgba(245,244,239,0.4)" }}>
                Holistic chiropractic &amp; integrative wellness<br />in Fairfax, VA.
              </p>
              <div className="mt-s3 flex flex-col gap-1.5">
                <a href="tel:+17036987117" className="text-sm transition-colors duration-200 hover:text-bg"
                  style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-7117</a>
                <a href="mailto:rosellecare@gmail.com" className="text-sm transition-colors duration-200 hover:text-bg"
                  style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</a>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,244,239,0.55)" }}>
                  8500 Executive Park Ave, Suite 300<br />Fairfax, VA 22031
                </p>
              </div>
              <div className="flex gap-s3 flex-wrap mt-s3">
                {SOCIAL.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs transition-colors duration-200 hover:text-bg"
                    style={{ color: "rgba(245,244,239,0.4)" }}>
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
                  {links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors duration-200 hover:text-bg"
                      style={{ color: "rgba(245,244,239,0.6)" }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center gap-s4 flex-wrap">
            <span className="text-xs" style={{ color: "rgba(245,244,239,0.3)" }}>
              &copy; {year} Roselle Center for Healing &middot; Fairfax, VA
            </span>
            <div className="flex gap-s4">
              <a href="https://www.rosellecare.com/contact" target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 hover:text-bg"
                style={{ color: "rgba(245,244,239,0.6)" }}>Contact</a>
              <a href="https://www.rosellecare.com/sitemap" target="_blank" rel="noopener noreferrer"
                className="text-sm transition-colors duration-200 hover:text-bg"
                style={{ color: "rgba(245,244,239,0.6)" }}>Sitemap</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
