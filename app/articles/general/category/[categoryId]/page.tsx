import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as cheerio from "cheerio";
import allCategories from "../../categoriesData.json";
import CategoryClient from "./CategoryClient";

const BASE = "https://www.rosellecare.com/articles/general/category";
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36";

/* ── types ── */
export type CategoryArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

export type SidebarCategory = {
  name: string;
  id: string;
  active: boolean;
  children: { name: string; id: string; active: boolean }[];
};

/* ── helpers ── */
function getAllCategoryIds(): string[] {
  const ids: string[] = [];
  for (const cat of allCategories) {
    ids.push(cat.id);
    for (const child of cat.children) {
      ids.push(child.id);
    }
  }
  return ids;
}

async function fetchPage(categoryId: string, pageNum: number) {
  const url =
    pageNum > 1 ? `${BASE}/${categoryId}/${pageNum}` : `${BASE}/${categoryId}`;
  const res = await fetch(url, {
    next: { revalidate: 86400 },
    headers: { "User-Agent": UA },
  });
  if (!res.ok) return null;

  const html = await res.text();
  const $ = cheerio.load(html);

  /* title from <title> tag */
  const pageTitle = $("title").text().trim();

  /* meta description */
  const metaDesc =
    $('meta[name="description"]').attr("content")?.trim() || "";

  /* category name from breadcrumb */
  const name =
    $(".breadcrumb__item").last().text().trim() ||
    pageTitle.split("|")[0].trim() ||
    "Articles";

  /* description */
  const description = $(".category__description")
    .find("p")
    .map((_, el) => $(el).text().trim())
    .get()
    .filter(Boolean)
    .join("\n\n");

  /* articles */
  const articles: CategoryArticle[] = [];
  $(".articles__item").each((_, el) => {
    const $el = $(el);
    const title = $el.find(".article__post-title").text().trim();
    const href = $el.find(".article__post-title").attr("href") || "";
    const slug = href.split("/articles/general/").pop() || "";
    const category = $el
      .find(".article__post-category")
      .text()
      .replace(/Category:\s*/i, "")
      .trim();
    const excerpt = $el.find(".article__post-content .component__p").text().trim();
    const imageEl = $el.find(".article__image");
    const dataStyle =
      imageEl.attr("data-style-background-image-image-set") || "";
    const imageMatch = dataStyle.match(/url\(([^)]+)\)/);
    let image = imageMatch ? imageMatch[1].trim() : "";
    if (image.startsWith("//")) image = `https:${image}`;
    const imageAlt = imageEl.attr("aria-label") || title;
    if (title && slug) {
      articles.push({ slug, title, category, excerpt, image, imageAlt });
    }
  });

  /* sidebar categories */
  const sidebar: SidebarCategory[] = [];
  $(".articles__categories-list > .articles__categories-item").each((_, el) => {
    const $el = $(el);
    const link = $el.children(".articles__categories-link");
    const catName = link.text().trim();
    const catHref = link.attr("href") || "";
    const catId = catHref.match(/category\/(\d+)/)?.[1] || "";
    const active = ($el.attr("class") || "").includes("active");
    const children: SidebarCategory["children"] = [];
    $el
      .find(".category__list-child .articles__categories-item")
      .each((_, child) => {
        const childLink = $(child).children(".articles__categories-link");
        const childName = childLink.text().trim();
        const childHref = childLink.attr("href") || "";
        const childId = childHref.match(/category\/(\d+)/)?.[1] || "";
        const childActive = ($(child).attr("class") || "").includes("active");
        if (childName && childId) {
          children.push({ name: childName, id: childId, active: childActive });
        }
      });
    if (catName && catId) {
      sidebar.push({ name: catName, id: catId, active, children });
    }
  });

  /* pagination */
  const paginationText = $(".current-page").text().trim();
  const pageMatch = paginationText.match(/(\d+)\s*of\s*(\d+)/i);
  const totalPages = pageMatch ? parseInt(pageMatch[2]) : 1;

  return {
    name,
    pageTitle,
    metaDesc,
    description,
    articles,
    sidebar,
    totalPages,
  };
}

async function fetchAllCategoryData(categoryId: string) {
  const page1 = await fetchPage(categoryId, 1);
  if (!page1) return null;

  const allArticles = [...page1.articles];

  /* fetch remaining pages in parallel */
  if (page1.totalPages > 1) {
    const promises = [];
    for (let p = 2; p <= page1.totalPages; p++) {
      promises.push(fetchPage(categoryId, p));
    }
    const results = await Promise.all(promises);
    for (const r of results) {
      if (r) allArticles.push(...r.articles);
    }
  }

  return {
    name: page1.name,
    pageTitle: page1.pageTitle,
    metaDesc: page1.metaDesc,
    description: page1.description,
    articles: allArticles,
    sidebar: page1.sidebar,
  };
}

/* ── static params ── */
type Props = { params: Promise<{ categoryId: string }> };

export async function generateStaticParams() {
  return getAllCategoryIds().map((id) => ({ categoryId: id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryId } = await params;
  const data = await fetchAllCategoryData(categoryId);
  if (!data)
    return { title: "Category Not Found | Roselle Center For Healing" };
  return {
    title: data.pageTitle || `${data.name} | Roselle Center For Healing`,
    description: data.metaDesc,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { categoryId } = await params;
  const data = await fetchAllCategoryData(categoryId);
  if (!data) notFound();

  return (
    <CategoryClient
      categoryId={categoryId}
      name={data.name}
      description={data.description}
      articles={data.articles}
      sidebar={data.sidebar}
    />
  );
}
