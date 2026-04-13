"use client";
import { motion } from "framer-motion";
import RevealSection from "./motion/RevealSection";
import MagneticButton from "./motion/MagneticButton";

const CONDITIONS = [
  { label: "Back Pain",         href: "https://www.rosellecare.com/back-pain" },
  { label: "Neck Pain",         href: "https://www.rosellecare.com/neck-pain" },
  { label: "Sciatica",          href: "https://www.rosellecare.com/sciatica" },
  { label: "Headaches",         href: "https://www.rosellecare.com/articles/general/category/40915" },
  { label: "Shoulder Pain",     href: "https://www.rosellecare.com/shoulder-pain" },
  { label: "Knee Pain",         href: "https://www.rosellecare.com/knee-pain" },
  { label: "Fibromyalgia",      href: "https://www.rosellecare.com/fibromyalgia" },
  { label: "Whiplash",          href: "https://www.rosellecare.com/whiplash" },
  { label: "Chronic Pain",      href: "https://www.rosellecare.com/chronic-pain" },
  { label: "Sports Injuries",   href: "https://www.rosellecare.com/sports-medicine" },
  { label: "Allergy Relief",    href: "https://www.rosellecare.com/allergy-relief" },
  { label: "Prenatal Care",     href: "https://www.rosellecare.com/prenatal-chiropractic" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const chip = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  show:   { opacity: 1, scale: 1,    y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
};

export default function Conditions() {
  return (
    <div id="conditions" data-section="conditions">
      <section className="bg-fg py-section-py">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
          <div className="grid grid-cols-[1fr_1.4fr] gap-s12 items-center
                          max-md:grid-cols-1 max-md:gap-s6">

            {/* Left */}
            <RevealSection>
              <div className="flex flex-col gap-s4">
                <p className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase mb-s3 font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>
                  Conditions Treated
                </p>
                <h2 className="text-fluid-4xl text-bg tracking-tight leading-[1.08]">
                  Where Is<br />Your <span className="text-accent">Pain?</span>
                </h2>
                <p className="text-fluid-base leading-relaxed max-w-[36ch]"
                  style={{ color: "rgba(245,244,239,0.6)" }}>
                  From acute injuries to chronic conditions, our multidisciplinary team
                  has the expertise to help you find lasting relief.
                </p>
                <MagneticButton
                  className="btn-primary-inverted"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book a Consultation
                </MagneticButton>
              </div>
            </RevealSection>

            {/* Right — chip grid */}
            <motion.div
              className="flex flex-wrap gap-s2"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {CONDITIONS.map(c => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="condition-chip"
                  variants={chip}
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {c.label}
                </motion.a>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
