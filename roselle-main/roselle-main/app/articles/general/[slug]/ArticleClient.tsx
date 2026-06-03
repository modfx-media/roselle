"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/motion/SmoothScroll";
import RevealSection from "@/app/components/motion/RevealSection";
import MagneticButton from "@/app/components/motion/MagneticButton";
import type { SidebarCategory } from "./page";
import Contact from "@/app/components/Contact";


interface Props {
  title: string;
  category: string;
  bodyHtml: string;
  sidebar: SidebarCategory[];
}

export default function ArticleClient({
  title,
  category,
  bodyHtml,
  sidebar,
}: Props) {
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({});
  const prefersReducedMotion = useReducedMotion();

  const toggleCat = useCallback((id: string) => {
    setExpandedCats((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

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
                <nav
                  className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}
                >
                  <a
                    href="/"
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    Home
                  </a>
                  <span>/</span>
                  <a
                    href="/articles/general"
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    Articles
                  </a>
                  <span>/</span>
                  <span
                    className="truncate max-w-[260px]"
                    style={{ color: "rgba(245,244,239,0.7)" }}
                  >
                    {title}
                  </span>
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
              {category && (
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0 }}
                  animate={prefersReducedMotion ? undefined : { opacity: 1 }}
                  transition={prefersReducedMotion ? undefined : { duration: 0.4, delay: 0.2, ease: "easeOut" }}
                  className="post-meta-row mt-s4"
                >
                  <span className="post-pill">{category}</span>
                </motion.div>
              )}
            </div>
          </section>

          {/* ── Article Body + Sidebar ── */}
          <section className="post-body-section py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <div className="grid grid-cols-[1fr_300px] gap-s10 max-lg:grid-cols-1">
                {/* ── Left: Article Content ── */}
                <div>
                  <RevealSection>
                    <div className="post-body-wrap">
                    <div
                      className="blog-body post-dark-prose prose"
                      dangerouslySetInnerHTML={{ __html: bodyHtml }}
                    />
                    </div>
                  </RevealSection>

                  {/* Back to Articles */}
                  <div className="mt-s10">
                    <a
                      href="/articles/general"
                      className="post-back-link text-sm font-medium"
                    >
                      <span className="post-back-link-arrow">←</span>
                      <span>Back to Articles</span>
                    </a>
                  </div>
                </div>

                {/* ── Right: Categories Sidebar ── */}
                <aside className="max-lg:order-first">
                  <div className="post-body-wrap">
                    <h2 className="text-fluid-lg text-bg font-serif tracking-tight mb-s4">
                      Categories
                    </h2>
                    <ul className="flex flex-col gap-1">
                      {sidebar.map((cat) => (
                        <li key={cat.id}>
                          <div className="flex items-center justify-between">
                            <a
                              href={`/articles/general/category/${cat.id}`}
                              className="text-sm py-1.5 transition-colors duration-200 hover:text-accent"
                              style={{ color: "rgba(245,244,239,0.7)" }}
                            >
                              {cat.name}
                            </a>
                            {cat.children.length > 0 && (
                              <button
                                onClick={() => toggleCat(cat.id)}
                                className="w-6 h-6 flex items-center justify-center text-xs transition-transform duration-200"
                                style={{ color: "rgba(245,244,239,0.4)" }}
                              >
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  className={`transition-transform duration-200 ${
                                    expandedCats[cat.id] ? "rotate-180" : ""
                                  }`}
                                >
                                  <path d="M3 4.5L6 7.5L9 4.5" />
                                </svg>
                              </button>
                            )}
                          </div>
                          {cat.children.length > 0 && expandedCats[cat.id] && (
                            <ul
                              className="ml-3 mt-1 mb-2 flex flex-col gap-0.5"
                              style={{
                                borderLeft: "1px solid rgba(198,177,128,0.12)",
                              }}
                            >
                              {cat.children.map((sub) => (
                                <li key={sub.id}>
                                  <a
                                    href={`/articles/general/category/${sub.id}`}
                                    className="block text-xs pl-3 py-1 transition-colors duration-200 hover:text-accent"
                                    style={{ color: "rgba(245,244,239,0.55)" }}
                                  >
                                    {sub.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
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
                    <p
                      className="text-fluid-base leading-relaxed"
                      style={{ color: "rgba(245,244,239,0.68)" }}
                    >
                      If you have any questions about the topics discussed in
                      this article, our team is here to help. Call us to schedule
                      a consultation.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton
                      className="btn-primary"
                      onClick={() =>
                        (window.location.href = "tel:+17036987117")
                      }
                    >
                      Call (703) 698-7117
                    </MagneticButton>
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
