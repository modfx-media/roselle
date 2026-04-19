import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as cheerio from "cheerio";
import allPosts from "../blogPosts.json";
import BlogPostClient from "./BlogPostClient";

const LIVE_BASE = "https://www.rosellecare.com/blog";

async function fetchPost(slug: string) {
  const url = `${LIVE_BASE}/${slug}`;
  const res = await fetch(url, {
    next: { revalidate: 86400 },
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  if (!res.ok) return null;
  const html = await res.text();
  const $ = cheerio.load(html);

  const title =
    $("title").text().trim() ||
    $(".blog-post__title").text().trim() ||
    slug.replace(/^\d+-/, "").replace(/-/g, " ");

  const description =
    $('meta[name="description"]').attr("content")?.trim() || "";

  const ogImage =
    $('meta[property="og:image"]').attr("content")?.trim() || "";

  const date = $(".blog-post__date").text().replace("posted:", "").trim();

  const featuredImage =
    $(".blog-post__thumbnail img").attr("src") || ogImage || "";

  const featuredImageAlt =
    $(".blog-post__thumbnail img").attr("alt") || title;

  /* ---------- body content ---------- */
  const $body = $(".blog-singlepost__content");

  // Clean up inline styles that would fight our design system
  $body.find("[style]").each((_, el) => {
    const $el = $(el);
    const style = $el.attr("style") || "";
    // Keep only text-align and display styles, strip font-size overrides
    const cleaned = style
      .split(";")
      .filter(
        (s) =>
          s.includes("text-align") ||
          s.includes("display") ||
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

  // Make all links open in new tab for external links
  $body.find("a").each((_, el) => {
    const href = $(el).attr("href") || "";
    if (href.startsWith("http") && !href.includes("rosellecare.com")) {
      $(el).attr("target", "_blank");
      $(el).attr("rel", "noopener noreferrer");
    }
    // Convert rosellecare.com links to relative
    if (href.includes("rosellecare.com")) {
      const path = href.replace(/https?:\/\/(www\.)?rosellecare\.com/, "");
      $(el).attr("href", path || "/");
    }
  });

  // Make images responsive
  $body.find("img").each((_, el) => {
    $(el).addClass("max-w-full h-auto rounded-lg");
    $(el).attr("loading", "lazy");
  });

  const bodyHtml = $body.html()?.trim() || "";

  // Extract tags if present
  const tags: string[] = [];
  $(".blog-post__tags a, .blog-post__info a").each((_, el) => {
    const tag = $(el).text().trim();
    if (tag) tags.push(tag);
  });

  return {
    title,
    description,
    date,
    featuredImage,
    featuredImageAlt,
    bodyHtml,
    tags,
    ogImage,
  };
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return { title: "Post Not Found | Roselle Center For Healing" };
  return {
    title: `${post.title} | Roselle Center For Healing`,
    description: post.description,
    openGraph: post.ogImage ? { images: [post.ogImage] } : undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) notFound();

  return (
    <BlogPostClient
      title={post.title}
      date={post.date}
      featuredImage={post.featuredImage}
      featuredImageAlt={post.featuredImageAlt}
      bodyHtml={post.bodyHtml}
      tags={post.tags}
    />
  );
}
