"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";

const LINKS = [
  { label: "About",    id: "about" },
  { label: "Services", id: "features" },
  { label: "Reviews",  id: "testimonials" },
  { label: "Contact",  id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="fixed top-s2 left-0 right-0 z-100"
      >
        <div className="w-full max-w-max-w mx-auto px-s4 h-nav-h bg-card-bg rounded-xl
                        flex items-center justify-between backdrop-blur-sm relative">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-transparent border-none cursor-pointer p-0
                       font-serif text-xl font-medium text-fg"
            aria-label="Go to top"
          >
            Roselle Center
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-s4">
            {LINKS.map(l => (
              <button key={l.label} className="nav-link" onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
            <MagneticButton onClick={() => go("contact")}>Book Now</MagneticButton>
          </div>

          {/* Hamburger / X */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navigation-menu"
            className="md:hidden absolute top-1/2 right-s3 -translate-y-1/2
                       w-10 h-10 border-none rounded-md cursor-pointer
                       flex items-center justify-center transition-colors duration-300 z-10"
            style={{ background: open ? "var(--color-fg)" : "transparent" }}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.5, 0.5, 0, 1] }}
              className="block absolute w-[40%] h-0.5 rounded-sm"
              style={{ background: open ? "var(--color-card-bg)" : "var(--color-fg)" }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.3, ease: [0.5, 0.5, 0, 1] }}
              className="block absolute w-[40%] h-0.5 rounded-sm"
              style={{ background: open ? "var(--color-card-bg)" : "var(--color-fg)" }}
            />
          </button>

          {/* Dropdown menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="navigation-menu"
                initial={{ opacity: 0, scale: 0.85, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                transition={{ duration: 0.35, ease: [0.5, 0.5, 0, 1] }}
                className="nav-menu-dropdown absolute top-[calc(100%+8px)] right-0
                           w-[220px] rounded-xl p-s3 origin-top-right z-200
                           shadow-[0_20px_40px_-8px_rgba(42,41,40,0.35)]"
              >
                <p className="text-xl text-bg mb-s3 font-serif font-medium">Menu</p>

                <ul role="menu" className="list-none m-0 p-0 flex flex-col gap-s2">
                  {LINKS.map((l, i) => (
                    <motion.li
                      key={l.label}
                      role="menuitem"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1, ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
                    >
                      <button
                        aria-label={`Navigate to ${l.label}`}
                        onClick={() => go(l.id)}
                        className="flex justify-between items-center w-full bg-transparent
                                   border-none cursor-pointer p-0"
                      >
                        <span className="text-base text-bg">{l.label}</span>
                        <span className="w-[7px] h-[7px] rounded-full bg-bg shrink-0 opacity-70" />
                      </button>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-s3 pt-s2 border-t border-white/[0.12]">
                  <a href="tel:+17036987117" className="text-sm" style={{ color: "rgba(245,244,239,0.6)" }}>
                    (703) 698-7117
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
