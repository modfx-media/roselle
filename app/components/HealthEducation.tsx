"use client";
import { motion } from "framer-motion";
import RevealSection from "./motion/RevealSection";

const FEATURE = {
  eyebrow: "AGELESS HEALTH® Documentary",
  title: "The PBS Health Documentary Special",
  desc: "Ageless Health® The TV Special is a hard-hitting, twice Emmy® award nominated documentary based on the modernization of holistic health, natural care, and integrative medicine.",
  cta: "Watch on YouTube",
  href: "https://youtu.be/STWUo8yapGw?si=J7bEubhBo5uXrF6r",
  videoId: "STWUo8yapGw",
};

const HIGHLIGHTS = [
  { label: "Twice Emmy® award nominated" },
  { label: "PBS national broadcast" },
  { label: "Holistic, integrative perspective" },
  { label: "Hosted by Dr. Tom Roselle, DC" },
];

export default function HealthEducation() {
  return (
    <div id="health-education" data-section="health-education">
      <section
        className="py-section-py relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, #f5f4ef 0%, #f0ede6 100%)" }}
      >
        {/* Ambient bloom */}
        <div
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            top: "-10%",
            right: "-5%",
            width: "560px",
            height: "560px",
            background:
              "radial-gradient(circle, rgba(198,177,128,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="relative w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
          <RevealSection>
            <div className="text-center mb-s10">
              <div className="flex items-center justify-center gap-3 mb-s4">
                <span
                  className="w-6 h-px"
                  style={{ background: "rgba(198,177,128,0.5)" }}
                />
                <p
                  className="text-xs tracking-[0.22em] uppercase font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}
                >
                  Health Education
                </p>
                <span
                  className="w-6 h-px"
                  style={{ background: "rgba(198,177,128,0.5)" }}
                />
              </div>
              <h2 className="text-fluid-4xl text-fg tracking-tight">
                Ageless Health<span className="text-accent">®</span> with Dr. Tom Roselle
              </h2>
              <p
                className="text-sm mt-s3 max-w-[52ch] mx-auto"
                style={{ color: "rgba(42,41,40,0.55)" }}
              >
                A twice Emmy® nominated PBS documentary on holistic health, natural
                care, and integrative medicine.
              </p>
            </div>
          </RevealSection>

          <RevealSection>
            <div className="grid grid-cols-2 gap-s8 items-center max-lg:grid-cols-1 max-lg:gap-s6">
              {/* Video card */}
              <motion.a
                href={FEATURE.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  background: "#0a1628",
                  boxShadow:
                    "0 24px 60px rgba(10,22,40,0.18), 0 0 0 1px rgba(42,41,40,0.08)",
                }}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                aria-label={FEATURE.title}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${FEATURE.videoId}/maxresdefault.jpg`}
                  alt={FEATURE.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Navy tint */}
                <div
                  className="absolute inset-0"
                  style={{ background: "rgba(10,22,40,0.25)" }}
                />
                {/* Play disc */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(255,0,0,0.92)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                    }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <span
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{
                        background: "rgba(255,0,0,0.35)",
                        animationDuration: "2.4s",
                      }}
                      aria-hidden="true"
                    />
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 20 20"
                      fill="white"
                      className="relative ml-1"
                    >
                      <path d="M6 4l12 6-12 6V4z" />
                    </svg>
                  </motion.div>
                </div>
                {/* Bottom badge */}
                <div
                  className="absolute left-s4 bottom-s4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: "rgba(10,22,40,0.65)",
                    border: "1px solid rgba(245,244,239,0.18)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#c6b180" }}
                  />
                  <span
                    className="text-[10px] tracking-[0.22em] uppercase font-medium"
                    style={{ color: "#f5f4ef" }}
                  >
                    Watch the Special
                  </span>
                </div>
              </motion.a>

              {/* Content */}
              <div className="flex flex-col gap-s5">
                <p
                  className="text-xs font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "rgba(198,177,128,0.95)" }}
                >
                  {FEATURE.eyebrow}
                </p>
                <h3 className="text-fluid-3xl text-fg tracking-tight leading-[1.1]">
                  {FEATURE.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(42,41,40,0.7)" }}
                >
                  {FEATURE.desc}
                </p>

                <ul className="grid grid-cols-2 gap-s3 mt-s2 max-sm:grid-cols-1">
                  {HIGHLIGHTS.map((h) => (
                    <li
                      key={h.label}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: "rgba(42,41,40,0.8)" }}
                    >
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "#c6b180" }}
                        aria-hidden="true"
                      />
                      {h.label}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-s3 mt-s4 max-sm:flex-col max-sm:items-stretch">
                  <motion.a
                    href={FEATURE.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-s5 rounded-full text-sm font-medium"
                    style={{
                      background: "#0a1628",
                      color: "#f5f4ef",
                    }}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  >
                    {FEATURE.cta}
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                  <a
                    href="https://www.drtomroselle.com/ageless-health/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-s5 rounded-full text-sm font-medium transition-colors"
                    style={{
                      color: "rgba(42,41,40,0.85)",
                      border: "1px solid rgba(42,41,40,0.18)",
                    }}
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
