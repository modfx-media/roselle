"use client";

import { useState, useMemo, useCallback } from "react";
import Nav from "../../../../components/Nav";
import Footer from "../../../../components/Footer";
import SmoothScroll from "../../../../components/motion/SmoothScroll";
import RevealSection from "../../../../components/motion/RevealSection";
import SplitReveal from "../../../../components/motion/SplitReveal";
import MagneticButton from "../../../../components/motion/MagneticButton";
import type { CategoryArticle, SidebarCategory } from "./page";
import Contact from "../../../../components/Contact";

const POSTS_PER_PAGE = 16;


interface Props {
  categoryId: string;
  name: string;
  description: string;
  articles: CategoryArticle[];
  sidebar: SidebarCategory[];
}

export default function CategoryClient({
  categoryId,
  name,
  description,
  articles,
  sidebar,
}: Props) {
  const [page, setPage] = useState(1);
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>(
    () => {
      /* auto-expand the parent that contains the active sub-category */
      const init: Record<string, boolean> = {};
      for (const cat of sidebar) {
        if (
          cat.active ||
          cat.children.some((c) => c.active)
        ) {
          init[cat.id] = true;
        }
      }
      return init;
    }
  );

  const totalPages = Math.max(1, Math.ceil(articles.length / POSTS_PER_PAGE));

  const currentArticles = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return articles.slice(start, start + POSTS_PER_PAGE);
  }, [page, articles]);

  const rangeStart = (page - 1) * POSTS_PER_PAGE + 1;
  const rangeEnd = Math.min(page * POSTS_PER_PAGE, articles.length);

  const goTo = useCallback((p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleCat = useCallback((id: string) => {
    setExpandedCats((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const pageNumbers = useMemo(() => {
    const nums: number[] = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) nums.push(i);
    return nums;
  }, [page, totalPages]);

  const hasArticles = articles.length > 0;

  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="relative z-1">
          {/* ── Hero ── */}
          <section className="inner-hero-gradient relative overflow-hidden">
            <div className="hero-grid-bg" />
            <div className="relative z-10 w-full max-w-max-w mx-auto px-s6 max-md:px-s4 pt-[calc(var(--spacing-nav-h)+6rem)] pb-section-py">
              <RevealSection>
                <nav
                  className="flex items-center gap-2 text-xs tracking-wide mb-s6"
                  style={{ color: "rgba(245,244,239,0.45)" }}
                >
                  <a
                    href="/"
                    className="transition-colors duration-200 hover:text-bg"
                  >
                    Home
                  </a>
                  <span>/</span>
                  <a
                    href="/articles/general"
                    className="transition-colors duration-200 hover:text-bg"
                  >
                    Articles
                  </a>
                  <span>/</span>
                  <span style={{ color: "rgba(245,244,239,0.7)" }}>
                    {name}
                  </span>
                </nav>
              </RevealSection>
              <SplitReveal
                text={name}
                as="h1"
                className="text-fluid-5xl text-bg tracking-tight leading-[1.05]"
              />
            </div>
          </section>

          {/* ── Content + Sidebar ── */}
          <section className="about-noise bg-fg py-section-py overflow-hidden relative">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4 relative z-1">
              <div className="grid grid-cols-[1fr_340px] gap-s10 max-lg:grid-cols-1">
                {/* ── Left Column ── */}
                <div>
                  {/* Description */}
                  {description && (
                    <RevealSection>
                      <div className="mb-s10">
                        {description.split("\n\n").map((p, i) => (
                          <p
                            key={i}
                            className="text-fluid-base leading-relaxed mb-s4 last:mb-0"
                            style={{ color: "rgba(245,244,239,0.6)" }}
                          >
                            {p}
                          </p>
                        ))}
                      </div>
                    </RevealSection>
                  )}

                  {/* Article List */}
                  {hasArticles && (
                    <>
                      <RevealSection>
                        <p
                          className="text-sm mb-s8"
                          style={{ color: "rgba(245,244,239,0.45)" }}
                        >
                          Viewing {rangeStart} – {rangeEnd} out of{" "}
                          {articles.length} articles
                        </p>
                      </RevealSection>

                      <div className="flex flex-col gap-s6">
                        {currentArticles.map((article, i) => (
                          <RevealSection key={article.slug} delay={i * 0.03}>
                            <a
                              href={`/articles/general/${article.slug}`}
                              className="group flex gap-s5 bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl overflow-hidden transition-colors duration-200 hover:border-[rgba(245,244,239,0.2)] max-sm:flex-col"
                            >
                              {/* Thumbnail */}
                              {article.image ? (
                                <div className="w-[220px] min-h-[140px] shrink-0 overflow-hidden max-sm:w-full max-sm:aspect-[2/1]">
                                  <img
                                    src={article.image}
                                    alt={article.imageAlt || article.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>
                              ) : (
                                <div className="w-[220px] min-h-[140px] shrink-0 bg-[rgba(245,244,239,0.06)] flex items-center justify-center max-sm:w-full max-sm:aspect-[2/1]">
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="rgba(245,244,239,0.15)"
                                    strokeWidth="1.5"
                                  >
                                    <rect
                                      x="3"
                                      y="3"
                                      width="18"
                                      height="18"
                                      rx="2"
                                    />
                                    <circle cx="8.5" cy="8.5" r="1.5" />
                                    <path d="m21 15-5-5L5 21" />
                                  </svg>
                                </div>
                              )}

                              {/* Content */}
                              <div className="flex flex-col justify-center py-s4 pr-s5 max-sm:px-s4 max-sm:pb-s4 max-sm:pt-0">
                                <h3 className="text-fluid-lg text-bg font-serif tracking-tight leading-snug mb-s2">
                                  {article.title}
                                </h3>
                                {article.category && (
                                  <p
                                    className="text-xs tracking-widest uppercase mb-s2"
                                    style={{
                                      color: "rgba(198,177,128,0.85)",
                                    }}
                                  >
                                    {article.category.split(",")[0].trim()}
                                  </p>
                                )}
                                {article.excerpt && (
                                  <p
                                    className="text-sm line-clamp-2 mb-s3"
                                    style={{
                                      color: "rgba(245,244,239,0.5)",
                                    }}
                                  >
                                    {article.excerpt}
                                  </p>
                                )}
                                <span className="text-sm font-medium text-accent transition-colors duration-200 group-hover:text-bg">
                                  Read More →
                                </span>
                              </div>
                            </a>
                          </RevealSection>
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
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
                                <button
                                  onClick={() => goTo(1)}
                                  className="w-9 h-9 text-sm rounded-lg transition-colors duration-200 text-bg hover:text-accent"
                                >
                                  1
                                </button>
                                {pageNumbers[0] > 2 && (
                                  <span
                                    className="text-sm"
                                    style={{
                                      color: "rgba(245,244,239,0.3)",
                                    }}
                                  >
                                    …
                                  </span>
                                )}
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

                            {pageNumbers[pageNumbers.length - 1] <
                              totalPages && (
                              <>
                                {pageNumbers[pageNumbers.length - 1] <
                                  totalPages - 1 && (
                                  <span
                                    className="text-sm"
                                    style={{
                                      color: "rgba(245,244,239,0.3)",
                                    }}
                                  >
                                    …
                                  </span>
                                )}
                                <button
                                  onClick={() => goTo(totalPages)}
                                  className="w-9 h-9 text-sm rounded-lg transition-colors duration-200 text-bg hover:text-accent"
                                >
                                  {totalPages}
                                </button>
                              </>
                            )}

                            <button
                              onClick={() => goTo(page + 1)}
                              disabled={page === totalPages}
                              className="px-4 py-2 text-sm rounded-lg transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed text-bg hover:text-accent"
                            >
                              Next →
                            </button>
                          </div>
                        </RevealSection>
                      )}
                    </>
                  )}

                  {/* No articles message for parent categories */}
                  {!hasArticles && (
                    <RevealSection>
                      <p
                        className="text-fluid-base leading-relaxed"
                        style={{ color: "rgba(245,244,239,0.5)" }}
                      >
                        Browse the categories to find articles on specific
                        topics.
                      </p>
                    </RevealSection>
                  )}
                </div>

                {/* ── Right: Categories Sidebar ── */}
                <aside className="max-lg:order-first">
                  <RevealSection>
                    <div className="bg-[rgba(245,244,239,0.04)] border border-[rgba(245,244,239,0.08)] rounded-xl p-s5">
                      <h2 className="text-fluid-lg text-bg font-serif tracking-tight mb-s4">
                        Categories
                      </h2>
                      <ul className="flex flex-col gap-1">
                        {sidebar.map((cat) => {
                          const isCurrentParent =
                            cat.id === categoryId ||
                            cat.children.some((c) => c.id === categoryId);
                          return (
                            <li key={cat.id}>
                              <div className="flex items-center justify-between">
                                <a
                                  href={`/articles/general/category/${cat.id}`}
                                  className={`text-sm py-1.5 transition-colors duration-200 hover:text-accent ${
                                    cat.id === categoryId
                                      ? "text-accent font-medium"
                                      : ""
                                  }`}
                                  style={
                                    cat.id === categoryId
                                      ? undefined
                                      : {
                                          color: "rgba(245,244,239,0.7)",
                                        }
                                  }
                                >
                                  {cat.name}
                                </a>
                                {cat.children.length > 0 && (
                                  <button
                                    onClick={() => toggleCat(cat.id)}
                                    className="w-6 h-6 flex items-center justify-center text-xs transition-transform duration-200"
                                    style={{
                                      color: "rgba(245,244,239,0.4)",
                                    }}
                                  >
                                    <svg
                                      width="12"
                                      height="12"
                                      viewBox="0 0 12 12"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                      className={`transition-transform duration-200 ${
                                        expandedCats[cat.id]
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    >
                                      <path d="M3 4.5L6 7.5L9 4.5" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                              {cat.children.length > 0 &&
                                (expandedCats[cat.id] || isCurrentParent) && (
                                  <ul
                                    className="ml-3 mt-1 mb-2 flex flex-col gap-0.5"
                                    style={{
                                      borderLeft:
                                        "1px solid rgba(245,244,239,0.08)",
                                    }}
                                  >
                                    {cat.children.map((sub) => (
                                      <li key={sub.id}>
                                        <a
                                          href={`/articles/general/category/${sub.id}`}
                                          className={`block text-xs pl-3 py-1 transition-colors duration-200 hover:text-accent ${
                                            sub.id === categoryId
                                              ? "text-accent font-medium"
                                              : ""
                                          }`}
                                          style={
                                            sub.id === categoryId
                                              ? undefined
                                              : {
                                                  color:
                                                    "rgba(245,244,239,0.5)",
                                                }
                                          }
                                        >
                                          {sub.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </RevealSection>
                </aside>
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="bg-bg py-section-py overflow-hidden">
            <div className="w-full max-w-max-w mx-auto px-s6 max-md:px-s4">
              <RevealSection>
                <div className="flex items-center justify-between gap-s6 p-s8 px-s10 rounded-xl max-md:flex-col max-md:text-center max-md:p-s6 max-md:px-s4 bg-card-bg">
                  <div className="flex flex-col gap-s3 max-w-[560px]">
                    <h3 className="text-fluid-2xl text-fg font-serif font-medium tracking-tight leading-snug">
                      Schedule Your Appointment Today
                    </h3>
                    <p
                      className="text-fluid-base leading-relaxed"
                      style={{ color: "rgba(42,41,40,0.6)" }}
                    >
                      At Roselle Center For Healing, we are fully dedicated to
                      providing solutions to address your unique needs. Call us
                      today for more information.
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
