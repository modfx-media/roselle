"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";

const NAV = [
  {
    label: "About",
    id: "about",
    links: [
      { label: "Our Story",         href: "https://www.rosellecare.com/about-us.html" },
      { label: "Our Doctors",       href: "https://www.rosellecare.com/about-us.html/staff" },
      { label: "Dr. Tom Roselle",   href: "https://www.drtomroselle.com/" },
      { label: "Purpose & Mission", href: "https://www.rosellecare.com/purpose-a-misson" },
      { label: "Center Hours",      href: "https://www.rosellecare.com/about-us/center-hours.html" },
      { label: "Directions",        href: "https://maps.app.goo.gl/5WJebWVTjWfPRX3VA" },
    ],
  },
  {
    label: "Services",
    id: "features",
    links: [
      { label: "Chiropractic Care",   href: "https://www.rosellecare.com/services/chiropractic.html" },
      { label: "Acupuncture",         href: "https://www.rosellecare.com/services/acupuncture.html" },
      { label: "Massage Therapy",     href: "https://www.rosellecare.com/services/massage-therapy.html" },
      { label: "Applied Kinesiology", href: "https://www.rosellecare.com/services/applied-kinesiology.html" },
      { label: "Nutrition",           href: "https://www.rosellecare.com/services/nutrition.html" },
      { label: "Thermography",        href: "https://www.rosellecare.com/services/thermography.html" },
      { label: "Functional Medicine", href: "https://www.rosellecare.com/functional-medicine" },
    ],
  },
  {
    label: "New Patients",
    id: null,
    links: [
      { label: "New Patient Center",  href: "https://www.rosellecare.com/new-patient-center.html" },
      { label: "Health Orientation",  href: "https://www.rosellecare.com/health-care-orientation" },
      { label: "Online Forms",        href: "https://www.rosellecare.com/online-forms.html" },
      { label: "Book Appointment",    href: "https://www.rosellecare.com/appointment" },
      { label: "Patient Feedback",    href: "https://www.rosellecare.com/contact-us/patient-feedback.html" },
    ],
  },
  {
    label: "Health Education",
    id: null,
    links: [
      { label: "Health Blog",         href: "https://www.rosellecare.com/blog" },
      { label: "Health Classes",      href: "https://www.rosellecare.com/health-classes" },
      { label: "Podcast",             href: "https://www.rosellecare.com/podcast" },
      { label: "Ageless Health Store",href: "https://www.rosellecare.com/ageless-health-store" },
    ],
  },
  {
    label: "Contact",
    id: "contact",
    links: [
      { label: "Contact Us",          href: "https://www.rosellecare.com/contact" },
      { label: "Book Appointment",    href: "https://www.rosellecare.com/appointment" },
      { label: "Testimonials",        href: "https://www.rosellecare.com/testimonials.html" },
      { label: "Google Reviews",      href: "https://www.google.com/maps/search/Roselle+Center+for+Healing+Fairfax+VA" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, y: -4, scale: 0.97, transition: { duration: 0.15 } },
};

function NavItem({ item, onScrollTo }: {
  item: typeof NAV[0];
  onScrollTo: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => { if (timer.current) clearTimeout(timer.current); setOpen(true); };
  const hide = () => { timer.current = setTimeout(() => setOpen(false), 120); };

  const handleClick = () => {
    if (item.id) onScrollTo(item.id);
    else setOpen(o => !o);
  };

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        className="nav-link flex items-center gap-1"
        onClick={handleClick}
        aria-expanded={open}
      >
        {item.label}
        <motion.svg
          width="10" height="10" viewBox="0 0 10 10" fill="none"
          animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}
          style={{ opacity: 0.45 }}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden" animate="show" exit="exit"
            className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 z-50 min-w-[220px]"
            onMouseEnter={show} onMouseLeave={hide}
          >
            {/* Arrow */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 rounded-sm"
              style={{ background: "var(--color-fg)" }} />

            <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_60px_-8px_rgba(42,41,40,0.35)]"
              style={{
                background: "var(--color-fg)",
                border: "1px solid rgba(245,244,239,0.08)",
              }}>
              {/* Gold top accent */}
              <div className="h-px w-full" style={{ background: "linear-gradient(to right, transparent, rgba(198,177,128,0.5), transparent)" }} />

              <div className="p-2">
                {item.links.map((l, i) => (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-s3 px-3 py-2.5 rounded-xl group"
                    style={{ color: "rgba(245,244,239,0.7)" }}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ backgroundColor: "rgba(245,244,239,0.07)", color: "rgba(245,244,239,1)" }}
                  >
                    <span className="text-sm font-medium">{l.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-xs">→</span>
                  </motion.a>
                ))}
              </div>

              <div className="h-px w-full" style={{ background: "rgba(245,244,239,0.06)" }} />
              <div className="px-4 py-2.5">
                <p className="text-xs" style={{ color: "rgba(245,244,239,0.25)" }}>Roselle Center · Fairfax, VA</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const go = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav role="navigation" aria-label="Main navigation" className="fixed top-s2 left-0 right-0 z-100">
      <div className="w-full max-w-max-w mx-auto px-s4 h-nav-h bg-card-bg rounded-xl
                      flex items-center justify-between backdrop-blur-sm relative">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-transparent border-none cursor-pointer p-0 font-serif text-xl font-medium text-fg"
          aria-label="Go to top"
        >
          Roselle Center
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-s3">
          {NAV.map(item => (
            <NavItem key={item.label} item={item} onScrollTo={go} />
          ))}
          <MagneticButton onClick={() => go("contact")}>Book Now</MagneticButton>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden absolute top-1/2 right-s3 -translate-y-1/2
                     w-10 h-10 border-none rounded-md cursor-pointer
                     flex items-center justify-center transition-colors duration-300 z-10"
          style={{ background: mobileOpen ? "var(--color-fg)" : "transparent" }}
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
            transition={{ duration: 0.3 }}
            className="block absolute w-[40%] h-0.5 rounded-sm"
            style={{ background: mobileOpen ? "var(--color-card-bg)" : "var(--color-fg)" }} />
          <motion.span animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="block absolute w-[40%] h-0.5 rounded-sm"
            style={{ background: mobileOpen ? "var(--color-card-bg)" : "var(--color-fg)" }} />
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="nav-menu-dropdown absolute top-[calc(100%+8px)] right-0
                         w-[280px] rounded-2xl p-s3 origin-top-right z-200
                         shadow-[0_20px_40px_-8px_rgba(42,41,40,0.35)]"
            >
              <p className="text-xl text-bg mb-s3 font-serif font-medium px-1">Menu</p>
              <div className="flex flex-col gap-1">
                {NAV.map(item => (
                  <div key={item.label}>
                    <button
                      onClick={() => {
                        if (item.id) go(item.id);
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                      }}
                      className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl
                                 bg-transparent border-none cursor-pointer text-left"
                      style={{ color: "rgba(245,244,239,0.85)" }}
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <motion.span
                        animate={{ rotate: mobileExpanded === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ opacity: 0.4, fontSize: 10 }}
                      >▼</motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3"
                        >
                          {item.links.map(l => (
                            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                              className="block px-3 py-2 text-xs rounded-lg"
                              style={{ color: "rgba(245,244,239,0.55)" }}
                              onClick={() => setMobileOpen(false)}>
                              {l.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <div className="mt-s3 pt-s2" style={{ borderTop: "1px solid rgba(245,244,239,0.1)" }}>
                <a href="tel:+17036987117" className="text-sm" style={{ color: "rgba(245,244,239,0.5)" }}>
                  (703) 698-7117
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
