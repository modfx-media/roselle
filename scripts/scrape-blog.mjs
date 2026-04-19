import * as cheerio from "cheerio";
import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = "https://www.rosellecare.com";
const TOTAL_PAGES = 39;
const CONCURRENCY = 5;

async function fetchPage(pageNum) {
  const url =
    pageNum === 1 ? `${BASE}/blog` : `${BASE}/blog/page/${pageNum}`;
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

function parsePosts(html) {
  const $ = cheerio.load(html);
  const posts = [];

  $(".blog-post").each((_, el) => {
    const $el = $(el);
    const titleLink = $el.find(".blog-post__title-detailed-link");
    const href = titleLink.attr("href") || "";
    const slug = href.replace(`${BASE}/blog/`, "").replace("/blog/", "");
    const title = $el.find(".blog-post__title").text().trim();
    const dateText = $el
      .find(".blog-post__date")
      .text()
      .replace("posted:", "")
      .trim();
    const excerpt = $el.find(".blog-post__content").text().trim();
    const img =
      $el.find(".blog-post__thumbnail img").attr("src") || "";

    if (slug && title) {
      posts.push({ slug, title, date: dateText, excerpt, image: img });
    }
  });

  return posts;
}

async function scrapeAll() {
  const allPosts = [];
  const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

  // Process in batches for controlled concurrency
  for (let i = 0; i < pages.length; i += CONCURRENCY) {
    const batch = pages.slice(i, i + CONCURRENCY);
    console.log(
      `Fetching pages ${batch[0]}-${batch[batch.length - 1]} of ${TOTAL_PAGES}...`
    );
    const results = await Promise.all(
      batch.map(async (pageNum) => {
        const html = await fetchPage(pageNum);
        return { pageNum, posts: parsePosts(html) };
      })
    );
    for (const { pageNum, posts } of results) {
      console.log(`  Page ${pageNum}: ${posts.length} posts`);
      allPosts.push(...posts);
    }
  }

  console.log(`\nTotal posts scraped: ${allPosts.length}`);

  const outPath = resolve(__dirname, "../app/blog/blogPosts.json");
  writeFileSync(outPath, JSON.stringify(allPosts, null, 2));
  console.log(`Written to ${outPath}`);
}

scrapeAll().catch(console.error);
