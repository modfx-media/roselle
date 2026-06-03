import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as cheerio from "cheerio";
import allArticles from "../articlesData.json";
import ArticleClient from "./ArticleClient";

const LIVE_BASE = "https://www.rosellecare.com/articles/general";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36";

/* ── types ── */
export type SidebarCategory = {
  name: string;
  id: string;
  children: { name: string; id: string }[];
};

async function fetchArticle(slug: string) {
  const url = `${LIVE_BASE}/${slug}`;
  const res = await fetch(url, {
    next: { revalidate: 86400 },
    headers: { "User-Agent": UA },
  });
  if (!res.ok) return null;

  const html = await res.text();
  const $ = cheerio.load(html);

  /* title */
  const rawTitle = $("title").text().trim();
  const title =
    $(".article h2.component__title").text().trim() ||
    rawTitle.split("|")[0].trim() ||
    slug.replace(/^\d+-/, "").replace(/-/g, " ");

  /* meta */
  const description =
    $('meta[name="description"]').attr("content")?.trim() || "";
  let ogImage = $('meta[property="og:image"]').attr("content")?.trim() || "";
  if (ogImage.startsWith("//")) ogImage = `https:${ogImage}`;

  /* category info */
  const category = $(".article__info-item")
    .text()
    .replace(/Created in/i, "")
    .trim()
    .replace(/\s+/g, " ");

  /* body content */
  const $body = $(".article__content");

  // Clean inline styles — keep text-align, display, margin; strip font-size
  $body.find("[style]").each((_, el) => {
    const $el = $(el);
    const style = $el.attr("style") || "";
    const cleaned = style
      .split(";")
      .filter(
        (s) =>
          s.includes("text-align") ||
          s.includes("display") ||
          s.includes("margin") ||
          s.includes("max-width") ||
          s.includes("width") ||
          s.includes("height")
      )
      .join(";")
      .trim();
    if (cleaned) {
      $el.attr("style", cleaned);
    } else {
      $el.removeAttr("style");
    }
  });

  // Fix protocol-relative image URLs
  $body.find("img").each((_, el) => {
    const src = $(el).attr("src") || "";
    if (src.startsWith("//")) $(el).attr("src", `https:${src}`);
    $(el).addClass("max-w-full h-auto rounded-lg");
    $(el).attr("loading", "lazy");
    // Remove fixed width/height to make responsive
    $(el).removeAttr("width");
    $(el).removeAttr("height");
  });

  // Handle links
  $body.find("a").each((_, el) => {
    const href = $(el).attr("href") || "";
    if (href.startsWith("http") && !href.includes("rosellecare.com")) {
      $(el).attr("target", "_blank");
      $(el).attr("rel", "noopener noreferrer");
    }
    if (href.includes("rosellecare.com")) {
      const path = href.replace(/https?:\/\/(www\.)?rosellecare\.com/, "");
      $(el).attr("href", path || "/");
    }
  });

  const bodyHtml = $body.html()?.trim() || "";

  /* featured image — first img in body */
  let featuredImage = "";
  let featuredImageAlt = "";
  const firstImg = $body.find("img").first();
  if (firstImg.length) {
    featuredImage = firstImg.attr("src") || "";
    featuredImageAlt = firstImg.attr("alt") || title;
  }
  if (!featuredImage && ogImage) {
    featuredImage = ogImage;
    featuredImageAlt = title;
  }

  /* sidebar categories */
  const sidebar: SidebarCategory[] = [];
  $(".articles__categories-list > .articles__categories-item").each((_, el) => {
    const link = $(el).children(".articles__categories-link");
    const catName = link.text().trim();
    const catHref = link.attr("href") || "";
    const catId = catHref.match(/category\/(\d+)/)?.[1] || "";
    const children: SidebarCategory["children"] = [];
    $(el)
      .find(".category__list-child .articles__categories-item")
      .each((_, child) => {
        const childLink = $(child).children(".articles__categories-link");
        const childName = childLink.text().trim();
        const childHref = childLink.attr("href") || "";
        const childId = childHref.match(/category\/(\d+)/)?.[1] || "";
        if (childName && childId) {
          children.push({ name: childName, id: childId });
        }
      });
    if (catName && catId) {
      sidebar.push({ name: catName, id: catId, children });
    }
  });

  return {
    title,
    description,
    ogImage,
    category,
    featuredImage,
    featuredImageAlt,
    bodyHtml,
    sidebar,
  };
}

/* ── static params ── */
type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article)
    return { title: "Article Not Found | Roselle Center For Healing" };
  return {
    title: article.title.includes("|")
      ? article.title
      : `${article.title} | Chiropractor in Fairfax, VA | Roselle Center For Healing`,
    description: article.description,
    openGraph: article.ogImage ? { images: [article.ogImage] } : undefined,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await fetchArticle(slug);
  if (!article) notFound();

  return (
    <ArticleClient
      title={article.title}
      category={article.category}
      bodyHtml={article.bodyHtml}
      sidebar={article.sidebar}
    />
  );
}
