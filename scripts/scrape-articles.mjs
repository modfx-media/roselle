import * as cheerio from "cheerio";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://www.rosellecare.com";
const TOTAL_PAGES = 38;
const CONCURRENCY = 5;

async function fetchPage(pageNum) {
  const url =
    pageNum === 1
      ? `${BASE}/articles/general`
      : `${BASE}/articles/general/page/${pageNum}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.text();
    } catch (err) {
      console.error(`  Retry ${attempt + 1} for page ${pageNum}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
  throw new Error(`Failed to fetch page ${pageNum} after 3 attempts`);
}

function parseArticles(html) {
  const $ = cheerio.load(html);
  const articles = [];

  $(".articles__item").each((_, el) => {
    const $el = $(el);

    const titleLink = $el.find(".article__post-title");
    const href = titleLink.attr("href") || "";
    const slug = href
      .replace(`${BASE}/articles/general/`, "")
      .replace("/articles/general/", "");
    const title = titleLink.text().trim();

    const category = $el
      .find(".article__post-category")
      .text()
      .replace("Category:", "")
      .trim();

    const excerpt = $el.find(".article__post-content .component__p").text().trim();

    // Image is a background-image in data attribute
    const imgDiv = $el.find(".article__image");
    const dataStyle = imgDiv.attr("data-style-background-image-image-set") || "";
    const imgMatch = dataStyle.match(/url\(\/\/([^)]+)\)/);
    const image = imgMatch ? `https://${imgMatch[1]}` : "";

    const imageAlt = imgDiv.attr("aria-label") || "";

    if (slug && title) {
      articles.push({ slug, title, category, excerpt, image, imageAlt });
    }
  });

  return articles;
}

function parseCategories(html) {
  const $ = cheerio.load(html);
  const cats = [];

  $(".articles__categories-list > .articles__categories-item").each((_, el) => {
    const $el = $(el);
    const link = $el.children(".articles__categories-link");
    const name = link.text().trim();
    const href = link.attr("href") || "";
    const id = href.match(/category\/(\d+)/)?.[1] || "";
    const children = [];
    $el.find(".category__list-child .articles__categories-item").each(
      (_, child) => {
        const cLink = $(child).children(".articles__categories-link");
        const cHref = cLink.attr("href") || "";
        children.push({
          name: cLink.text().trim(),
          id: cHref.match(/category\/(\d+)/)?.[1] || "",
        });
      }
    );
    cats.push({ name, id, children });
  });

  return cats;
}

async function scrapeAll() {
  const allArticles = [];
  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

  let categories = null;

  for (let i = 0; i < pages.length; i += CONCURRENCY) {
    const batch = pages.slice(i, i + CONCURRENCY);
    console.log(
      `Fetching pages ${batch[0]}-${batch[batch.length - 1]} of ${TOTAL_PAGES}...`
    );
    const results = await Promise.all(
      batch.map(async (pageNum) => {
        const html = await fetchPage(pageNum);
        if (pageNum === 1 && !categories) {
          categories = parseCategories(html);
        }
        return { pageNum, articles: parseArticles(html) };
      })
    );
    for (const { pageNum, articles } of results) {
      console.log(`  Page ${pageNum}: ${articles.length} articles`);
      allArticles.push(...articles);
    }
  }

  console.log(`\nTotal articles scraped: ${allArticles.length}`);

  const outDir = resolve(__dirname, "../app/articles/general");
  writeFileSync(
    resolve(outDir, "articlesData.json"),
    JSON.stringify(allArticles, null, 2)
  );
  writeFileSync(
    resolve(outDir, "categoriesData.json"),
    JSON.stringify(categories, null, 2)
  );
  console.log(`Written to ${outDir}/articlesData.json`);
  console.log(`Written to ${outDir}/categoriesData.json`);
}

scrapeAll().catch(console.error);
