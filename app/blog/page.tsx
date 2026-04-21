"use client";

import { useState, useMemo, useCallback } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SmoothScroll from "../components/motion/SmoothScroll";
import RevealSection from "../components/motion/RevealSection";
import SplitReveal from "../components/motion/SplitReveal";
import MagneticButton from "../components/motion/MagneticButton";
import allPosts from "./blogPosts.json";

const POSTS_PER_PAGE = 16;
const TOTAL_POSTS = allPosts.length;
const TOTAL_PAGES = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE);

const HOURS = [
  { day: "Monday", time: "7:00 AM - 5:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 7:00 PM" },
  { day: "Wednesday", time: "7:00 AM - 5:00 PM" },
  { day: "Thursday", time: "2:00 PM - 7:00 PM" },
  { day: "Friday", time: "7:00 AM - 5:00 PM" },
  { day: "Saturday", time: "8:00 AM - 1:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function BlogPage() {
  const [page, setPage] = useState(1);

  const currentPosts = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return allPosts.slice(start, start + POSTS_PER_PAGE);
  }, [page]);

  const rangeStart = (page - 1) * POSTS_PER_PAGE + 1;
  const rangeEnd = Math.min(page * POSTS_PER_PAGE, TOTAL_POSTS);

  const goTo = useCallback((p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* pagination range: show up to 5 page numbers around current */
  const pageNumbers = useMemo(() => {
    const nums: number[] = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(TOTAL_PAGES, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) nums.push(i);
    return nums;
  }, [page]);

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* Hero */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav className="flex items-center gap-2 text-xs tracking-wide mb-s6" style={{ color: "rgba(245,244,239,0.45)" }}>
                  <a href="/" className="transition-colors duration-200 hover:text-accent">Home</a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>Blog</span>
                </nav>
              </RevealSection>
              <SplitReveal
                text="Roselle Center For Healing Blog: Chiropractic Care & Wellness Tips"
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <RevealSection>
                <p className="text-sm mb-s8" style={{ color: "rgba(245,244,239,0.45)" }}>
                  Viewing {rangeStart} – {rangeEnd} out of {TOTAL_POSTS} posts
                </p>
              </RevealSection>

              <div className="grid grid-cols-2 gap-s6 max-md:grid-cols-1">
                {currentPosts.map((post, i) => (
                  <RevealSection key={post.slug} delay={i * 0.04}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="group block bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl overflow-hidden h-full transition-colors duration-200 hover:border-[rgba(245,244,239,0.2)]"
                    >
                      {post.image && (
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-s6">
                        <p className="text-xs tracking-widest uppercase mb-s3" style={{ color: "rgba(198,177,128,0.85)" }}>{post.date}</p>
                        <h3 className="text-fluid-xl text-bg font-serif tracking-tight leading-snug mb-s3">{post.title}</h3>
                        <p className="text-fluid-base mb-s4 line-clamp-3" style={{ color: "rgba(245,244,239,0.55)" }}>{post.excerpt}</p>
                        <span className="text-sm font-medium text-accent transition-colors duration-200 group-hover:text-bg">Read More →</span>
                      </div>
                    </a>
                  </RevealSection>
                ))}
              </div>

              {/* Pagination */}
              <RevealSection>
                <div className="flex items-center justify-center gap-2 mt-s10 flex-wrap">
                  <button
                    onClick={() => goTo(page - 1)}
                    disabled={page === 1}
                    className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-bg hover:text-accent"
                  >
                    ← Previous
                  </button>

                  {pageNumbers[0] > 1 && (
                    <>
                      <button onClick={() => goTo(1)} className="w-9 h-9 text-sm rounded-lg transition-colors duration-200 text-bg hover:text-accent">1</button>
                      {pageNumbers[0] > 2 && <span className="text-sm" style={{ color: "rgba(245,244,239,0.3)" }}>…</span>}
                    </>
                  )}

                  {pageNumbers.map((n) => (
                    <button
                      key={n}
                      onClick={() => goTo(n)}
                      className={`w-9 h-9 text-sm rounded-lg transition-colors duration-200 ${
                        n === page
                          ? "bg-accent text-fg font-medium"
                          : "text-bg hover:text-accent"
                      }`}
                    >
                      {n}
                    </button>
                  ))}

                  {pageNumbers[pageNumbers.length - 1] < TOTAL_PAGES && (
                    <>
                      {pageNumbers[pageNumbers.length - 1] < TOTAL_PAGES - 1 && <span className="text-sm" style={{ color: "rgba(245,244,239,0.3)" }}>…</span>}
                      <button onClick={() => goTo(TOTAL_PAGES)} className="w-9 h-9 text-sm rounded-lg transition-colors duration-200 text-bg hover:text-accent">{TOTAL_PAGES}</button>
                    </>
                  )}

                  <button
                    onClick={() => goTo(page + 1)}
                    disabled={page === TOTAL_PAGES}
                    className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-bg hover:text-accent"
                  >
                    Next →
                  </button>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">
                      Stay Up To Date With Our Latest News
                    </h3>
                    <p className="text-fluid-base leading-relaxed" style={{ color: "rgba(42,41,40,0.6)" }}>
                      Follow our blog for the latest health tips, wellness news, and updates from Roselle Center for Healing. Call us today for more information.
                    </p>
                  </div>
                  <div className="flex flex-col gap-s3 items-center shrink-0">
                    <MagneticButton className="btn-primary" onClick={() => window.location.href = "tel:+17036987117"}>Call (703) 698-7117</MagneticButton>
                  </div>
                </div>
              </RevealSection>
            </div>
          </section>

          {/* Hours + Location */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-2 gap-s10 max-md:grid-cols-1">
                <RevealSection>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Hours of Operation</h3>
                  <div className="flex flex-col">
                    {HOURS.map((h) => (
                      <div key={h.day} className="flex items-center justify-between py-3 text-sm" style={{ borderBottom: "1px solid rgba(245,244,239,0.08)" }}>
                        <span style={{ color: "rgba(245,244,239,0.45)" }}>{h.day}</span>
                        <span className="text-bg font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </RevealSection>
                <RevealSection delay={0.12}>
                  <h3 className="text-fluid-2xl text-bg font-serif tracking-tight leading-snug mb-s5">Merrifield Location In Fairfax, VA</h3>
                  <p className="text-xs tracking-widest uppercase mb-s3 font-sans" style={{ color: "rgba(198,177,128,0.85)" }}>Your Local Chiropractic Clinic</p>
                  <p className="text-fluid-base text-bg font-medium mb-s5">Roselle Center For Healing</p>
                  <div className="flex flex-col gap-s4">
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Address</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>8500 Executive Park Ave STE 300<br />Fairfax, VA 22031</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Phone</p>
                      <a href="tel:+17036987117" className="text-fluid-base text-bg transition-colors duration-200 hover:text-accent">(703) 698-7117</a>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Fax</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>(703) 698-5729</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(198,177,128,0.85)" }}>Email</p>
                      <p className="text-fluid-base" style={{ color: "rgba(245,244,239,0.55)" }}>rosellecare@gmail.com</p>
                    </div>
                  </div>
                </RevealSection>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
