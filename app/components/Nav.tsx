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
        style={{ position: "fixed", top: "var(--s2)", left: 0, right: 0, zIndex: 100 }}
      >
        {/* ── Nav bar ── */}
        <div style={{
          width: "100%",
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "0 var(--s4)",
          height: "var(--nav-h)",
          backgroundColor: "var(--card-bg)",
          borderRadius: "var(--radius-xl)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "relative",
        }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 0,
              fontFamily: "var(--font-libre-baskerville, Georgia, serif)",
              fontSize: "var(--text-xl)", fontWeight: 500, color: "var(--fg)",
            }}
            aria-label="Go to top"
          >
            Roselle Center
          </button>

          {/* Desktop links */}
          <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "var(--s4)" }}>
            {LINKS.map(l => (
              <button
                key={l.label}
                className="nav-link"
                onClick={() => go(l.id)}
              >
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
            className="show-mobile"
            style={{
              position: "absolute",
              top: "50%", right: "var(--s3)",
              transform: "translateY(-50%)",
              width: 40, height: 40,
              background: open ? "var(--fg)" : "transparent",
              border: "none",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
              zIndex: 10,
            }}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.5, 0.5, 0, 1] }}
              style={{
                display: "block", position: "absolute",
                width: "40%", height: "2px",
                background: open ? "var(--card-bg)" : "var(--fg)",
                borderRadius: "1px",
              }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.3, ease: [0.5, 0.5, 0, 1] }}
              style={{
                display: "block", position: "absolute",
                width: "40%", height: "2px",
                background: open ? "var(--card-bg)" : "var(--fg)",
                borderRadius: "1px",
              }}
            />
          </button>

          {/* Dark dropdown */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="navigation-menu"
                initial={{ opacity: 0, scale: 0.85, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -8 }}
                transition={{ duration: 0.35, ease: [0.5, 0.5, 0, 1] }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)", right: 0,
                  width: "220px",
                  borderRadius: "var(--radius-xl)",
                  padding: "var(--s3)",
                  transformOrigin: "top right",
                  zIndex: 200,
                  boxShadow: "0 20px 40px -8px rgba(42,41,40,0.35)",
                }}
                className="nav-menu-dropdown"
              >
                <p style={{
                  fontSize: "var(--text-xl)",
                  color: "var(--card-bg)",
                  marginBottom: "var(--s3)",
                  fontFamily: "var(--font-libre-baskerville, Georgia, serif)",
                  fontWeight: 500,
                }}>
                  Menu
                </p>

                <ul role="menu" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "var(--s2)" }}>
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
                        style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          width: "100%", background: "none", border: "none",
                          cursor: "pointer", padding: 0,
                        }}
                      >
                        <span style={{ fontSize: "var(--text-base)", color: "var(--card-bg)" }}>
                          {l.label}
                        </span>
                        <span style={{
                          width: 7, height: 7, borderRadius: "50%",
                          backgroundColor: "var(--card-bg)", flexShrink: 0, opacity: 0.7,
                        }} />
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Phone in menu */}
                <div style={{ marginTop: "var(--s3)", paddingTop: "var(--s2)", borderTop: "1px solid rgba(245,244,239,0.12)" }}>
                  <a href="tel:+17036987117" style={{ fontSize: "var(--text-sm)", color: "rgba(245,244,239,0.6)" }}>
                    (703) 698-7117
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <style>{`
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
        @media (max-width: 768px) { .nav-links { display: none !important; } }
      `}</style>
    </>
  );
}
