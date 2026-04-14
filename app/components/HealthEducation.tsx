"use client";
import { motion } from "framer-motion";
import RevealSection from "./motion/RevealSection";

const ITEMS = [
  {
    eyebrow: "AGELESS HEALTH® Documentary",
    title: "The PBS Health Documentary Special",
    desc: "Ageless Health® The TV Special is a hard-hitting, twice Emmy® award nominated documentary based on the modernization of holistic health, natural care, and integrative medicine.",
    cta: "Watch on YouTube",
    href: "https://youtu.be/STWUo8yapGw?si=J7bEubhBo5uXrF6r",
    type: "youtube",
    videoId: "STWUo8yapGw",
  },
  {
    eyebrow: "AGELESS HEALTH® Education Classes",
    title: "NEW HEALTH CLASS: Springtime Allergies",
    desc: "Join us on Wednesday, April 15, 2026 at 6:00 PM with Dr. Tom Roselle, DC. You must register for a seat. If you have a seat and cannot attend, please cancel by calling (703) 698-7117.",
    cta: "Register Now",
    href: "https://www.drtomroselle.com/health-education-class-registration/",
    type: "image",
    img: "/imgi_69_V2_Health_Education_041526_SpringtimeAllergies.png.webp",
  },
  {
    eyebrow: "AGELESS HEALTH® Podcast",
    title: "PODCAST: Allergies and Immune System Interaction",
    desc: "Listen to Dr. Tom Roselle, DC discuss your allergies and immune system interaction from a natural perspective — looking past the itchy eyes and runny noses to find out what's actually happening inside.",
    cta: "Listen Now",
    href: "https://www.drtomroselle.com/ageless-health-podcast/",
    type: "image",
    img: "/imgi_17_dtrl-podcast-available-04-12-26.png.webp",
  },
];

export default function HealthEducation() {
  return (
    <div id="health-education" data-section="health-education">
      <section className="bg-bg py-section-py">
        <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">

          <RevealSection>
            <div className="text-center mb-s10">
              <div className="flex items-center justify-center gap-3 mb-s4">
                <span className="w-6 h-px" style={{ background: "rgba(198,177,128,0.5)" }} />
                <p className="text-xs tracking-[0.22em] uppercase font-sans"
                  style={{ color: "rgba(198,177,128,0.85)" }}>Health Education</p>
                <span className="w-6 h-px" style={{ background: "rgba(198,177,128,0.5)" }} />
              </div>
              <h2 className="text-fluid-4xl text-fg tracking-tight">
                Ageless Health<span className="text-accent">®</span> with Dr. Tom Roselle
              </h2>
              <p className="text-sm mt-s3 max-w-[48ch] mx-auto" style={{ color: "rgba(42,41,40,0.55)" }}>
                Documentaries, live health classes, and podcasts to empower your wellness journey.
              </p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-3 gap-s5 max-lg:grid-cols-1">
            {ITEMS.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.1}>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col rounded-2xl overflow-hidden group h-full"
                  style={{
                    background: "rgba(245,244,239,1)",
                    border: "1px solid rgba(42,41,40,0.08)",
                    boxShadow: "0 2px 20px rgba(42,41,40,0.06)",
                    textDecoration: "none",
                  }}
                  whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(42,41,40,0.12)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Media */}
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: "#111" }}>
                    {item.type === "youtube" ? (
                      <>
                        {/* YouTube thumbnail */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Play button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="w-14 h-14 rounded-full flex items-center justify-center"
                            style={{ background: "rgba(255,0,0,0.9)", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                              <path d="M6 4l12 6-12 6V4z"/>
                            </svg>
                          </motion.div>
                        </div>
                      </>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-s2 p-s4 flex-1">
                    <p className="text-xs font-semibold tracking-widest uppercase"
                      style={{ color: "rgba(198,177,128,0.9)" }}>
                      {item.eyebrow}
                    </p>
                    <h3 className="text-base font-semibold text-fg leading-snug">{item.title}</h3>
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(42,41,40,0.6)" }}>
                      {item.desc}
                    </p>
                    <div className="flex items-center gap-1.5 mt-s2 text-sm font-medium"
                      style={{ color: "rgba(42,41,40,0.8)" }}>
                      {item.cta}
                      <motion.span
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >→</motion.span>
                    </div>
                  </div>
                </motion.a>
              </RevealSection>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
