---
inclusion: auto
---

# SEO Autopilot — MCP Usage Guide

You have access to the `nextjs-seo` MCP server with 40+ SEO tools. Use them proactively without waiting for the user to tell you which tool to call. Follow these rules:

## Decision Framework

When the user asks anything SEO-related, follow this decision tree:

### "Audit my site / page / SEO"
1. First call `nextjs_full_audit` with the URL — this gives you DataForSEO's 60+ on-page checks
2. If the user provided a GSC site URL, also call `quality_audit` to check canonical conflicts, breadcrumbs, schema, and GSC index status
3. Read the project's Next.js code (layout.tsx, page.tsx, metadata exports) to understand current implementation
4. Generate specific code fixes based on the audit results — don't just list issues, write the actual code

### "Why isn't my site ranking?"
1. Call `ranking_diagnosis` with the domain, target keyword, and a competitor if known
2. This pulls domain authority, backlinks, anchor texts, backlink history, ranked keywords, competitors, and SERP data all at once
3. The AI analysis will explain exactly what's wrong — follow its priority fix plan

### "Research keywords for X"
1. Call `paa_keyword_research` first — this gets real Google PAA/PASF questions (Oopsio standard: use SERP-sourced keywords, not just volume tools)
2. Then call `dfs_keyword_research` for volume, difficulty, and suggestions
3. Combine both to recommend keywords that have both search intent AND volume

### "Analyze competitor X"
1. Call `dfs_site_intelligence` for the competitor's domain overview
2. Call `dfs_backlink_audit` to understand their link profile
3. Call `dfs_keyword_gap` comparing their domain vs the user's domain
4. Call `competitor_content_gap` for a specific keyword if provided

### "Check my backlinks"
1. Call `dfs_backlink_audit` — this pulls summary, top links, anchors, referring domains, competitors, history, and top pages all at once

### "Submit for indexing"
1. Call `bulk_submit_indexing` with the sitemap URL
2. Remind the user about the 200/day Google Indexing API limit

### "Check if pages are indexed"
1. Call `gsc_index_audit` with the URLs
2. If pages are 14+ days old and not indexed, follow the Oopsio GSC Cleanup Protocol: recommend deletion, not re-indexing

### "Generate content / meta tags / schema"
1. For meta tags: call `generate_meta_tags`
2. For schema: call `generate_schema` or `schema_audit` to check what's missing first
3. For content briefs: call `generate_pillar_content` for pillar articles
4. For programmatic pages: call `enrich_programmatic_page` with city/state/service

### "Scaffold a new Next.js project"
1. Call `scaffold_nextjs_project` with the site name and description

### "Run the Oopsio quality check"
1. Call `oopsio_quality_check` on each page before publishing
2. Pages must score 80%+ to publish
3. Always remind: human review is required before final publish

## Oopsio pSEO Standards (enforce these always)

- **Max 100-150 pages per pSEO batch.** Never recommend more.
- **>70% content uniqueness** across batch pages. If pages look templated, flag it.
- **Every page needs 1+ human authority signal:** named author, case study, expert quote, original data point, or unique opinion.
- **Keywords must come from Google SERPs** (PAA/PASF), not just volume tools. Always use `paa_keyword_research` alongside `dfs_keyword_research`.
- **Pages that Google rejects (Crawled — not indexed after 14 days) must be deleted.** Do NOT recommend re-indexing or tweaking rejected pages.
- **Never stop publishing.** If the user hasn't published in a while, flag it. Zero-publish months are a domain-level emergency.
- **During Google Core Updates:** do NOT recommend panic-editing, deleting pages, or changing site structure. Continue normal publishing cadence.

## When Reading the Codebase

When you see Next.js code, automatically check for these SEO issues without being asked:

### In `layout.tsx` or `page.tsx`:
- Is `metadata` or `generateMetadata` exported? If not, flag it.
- Does metadata include `title`, `description`, `openGraph`, `twitter`, `alternates.canonical`?
- Is there a `metadataBase` set in the root layout?
- Are there `robots` directives that might block indexing?

### In `sitemap.ts`:
- Does it exist? If not, recommend creating one.
- Does it include all dynamic routes?
- Are `lastModified`, `changeFrequency`, and `priority` set?

### In `robots.ts`:
- Does it exist?
- Does it allow crawling of important pages?
- Does it reference the sitemap URL?

### In dynamic route pages (`[slug]/page.tsx`, `[city]/page.tsx`):
- Is `generateStaticParams` implemented for SSG?
- Is `generateMetadata` implemented with unique title/description per page?
- Is there JSON-LD structured data (BreadcrumbList, Article, LocalBusiness, etc.)?
- Are there internal links to related pages?

### In `next.config.ts`:
- Is `compress: true` set?
- Are security headers configured?
- Are image optimization settings correct?

## Tool Chaining

When one tool's output suggests another action, chain them automatically:

- `nextjs_full_audit` finds missing schema → call `schema_audit` to generate the fix
- `ranking_diagnosis` finds weak backlinks → call `dfs_backlink_audit` for detailed analysis
- `paa_keyword_research` finds good keywords → call `dfs_keyword_research` for volume data
- `quality_audit` finds canonical conflicts → call `gsc_index_audit` to check all affected URLs
- `oopsio_quality_check` fails on internal links → call `suggest_internal_links` to fix it

## Response Style

- Always show the DataForSEO API cost: "💰 X API calls used"
- When recommending fixes, write actual Next.js App Router code, not just descriptions
- Prioritize fixes by ranking impact: Critical → High → Medium → Low
- Be specific with numbers from the data — no generic advice
- When comparing against competitors, use real data from the tools
