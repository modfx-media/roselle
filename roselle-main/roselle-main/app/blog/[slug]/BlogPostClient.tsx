"use client";

import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import SplitReveal from "@/app/components/motion/SplitReveal";
import MagneticButton from "@/app/components/motion/MagneticButton";
import Contact from "@/app/components/Contact";


interface BlogPostClientProps {
  title: string;
  date: string;
  featuredImage: string;
  featuredImageAlt: string;
  bodyHtml: string;
  tags: string[];
}

export default function BlogPostClient({
  title,
  date,
  featuredImage,
  featuredImageAlt,
  bodyHtml,
  tags,
}: BlogPostClientProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1 post-shell">
          {/* ── Hero ── */}
          <section className="post-hero relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="post-watermark" aria-hidden="true">{title}</div>
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.4, delay: 0.2, ease: "easeOut" }}
              >
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <a href="/blog" className="transition-colors duration-200 hover:text-accent">Blog</a>
                  <span>/</span>
                  <span className="truncate max-w-[260px]" style={{ color: "rgba(245,244,239,0.7)" }}>{title}</span>
                </nav>
              </motion.div>
              <div className="post-gold-rule mb-s5" aria-hidden="true" />
              <motion.h1
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: "easeOut" }}
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              >
                {title}
              </motion.h1>
              {date && (
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                  transition={prefersReducedMotion ? undefined : { duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  className="post-meta-row mt-s4"
                >
                  <span className="post-pill">{date}</span>
                </motion.div>
              )}
            </div>
          </section>

          {/* ── Blog Body ── */}
          <section className="post-body-section py-section-py overflow-hidden">
            <div className="w-full max-w-[900px] mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="post-body-wrap">
                  {featuredImage && (
                    <motion.div
                      initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.04 }}
                      animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                      transition={prefersReducedMotion ? undefined : { duration: 1, ease: "easeOut" }}
                      className="mb-10"
                    >
                      <div className="post-featured-image group relative rounded-2xl overflow-hidden w-full">
                        <img
                          src={featuredImage}
                          alt={featuredImageAlt}
                          className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          loading="eager"
                        />
                        <div
                          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none rounded-b-2xl"
                          style={{ background: "linear-gradient(to top, rgba(3,7,18,0.45) 0%, transparent 100%)" }}
                        />
                      </div>
                    </motion.div>
                  )}
                  <div
                    className="blog-body post-dark-prose prose"
                    dangerouslySetInnerHTML={{ __html: bodyHtml }}
                  />
                </div>
              </RevealSection>

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-s8 pt-s6" style={{ borderTop: "1px solid rgba(198,177,128,0.12)" }}>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="post-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blog */}
              <div className="mt-s10">
                <a
                  href="/blog"
                  className="post-back-link text-sm font-medium"
                >
                  <span className="post-back-link-arrow">←</span>
                  <span>Back to Blog</span>
                </a>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="post-body-section pb-section-py">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="post-cta-panel flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-bg font-serif font-medium tracking-tight leading-snug">
                      Have Questions? Contact Us Today
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(245,244,239,0.68)" }}>
                      If you have any questions about the topics discussed in this article, our team is here to help. Call us to schedule a consultation.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>


          <Contact />

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
