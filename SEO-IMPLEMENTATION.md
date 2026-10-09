# CodingHunters: SEO / AEO / GEO / AIO implementation

## What changed in the code

| Area | What was done |
|---|---|
| Crawlability | The site was client-rendered (empty HTML for bots). `npm run build` now runs `scripts/prerender.mjs`, which writes a real HTML file for every route (content + title + meta + canonical + JSON-LD). |
| Per-page meta | `src/seo/pageMeta.ts` holds a unique title/description/canonical/OG/Twitter set for each page. `RouteSeo` keeps them correct on in-app navigation. |
| Structured data | Organization + ProfessionalService + WebSite on every page. Plus WebPage, Service, FAQPage, BreadcrumbList, ItemList, BlogPosting, AboutPage, ContactPage where relevant. |
| Local / regional pages | 5 pages with distinct content: Bhuj, Kutch, Ahmedabad, Gujarat, India (see `src/seo/siteData.ts`). Linked from the home page and footer. |
| AEO (answer engines) | A 40-60 word quotable answer at the top of every location page, question-style headings, visible FAQ sections (native `<details>`, so answers are in the HTML), and a `/faq` hub page. |
| GEO / AIO (AI search) | `robots.txt` explicitly allows AI search and assistant crawlers; `llms.txt` summarises the business; entity facts (name, founder, location, phone, email, stats) are consistent across schema, copy and llms.txt. |
| Sitemap | Generated at build with every page and a `lastmod` (edit `SITE.lastmod` in `siteData.ts` when content changes). |
| Performance | 2 MB footer image reduced to 25 KB; intro loader now shows once per session at 1.2 s (was 2.5 s on every load). |
| Hygiene | Real 404 status via `404.html` (no more soft-404s), old thin `.html` duplicate removed, WhatsApp link fixed (needed country code), About H1 typo fixed, Home H1 now includes "Bhuj, Kutch". |

## Please confirm / fill in (these affect ranking, and I did not want to invent them)

1. **Phone number.** The site used two numbers: 91064 33706 (Contact page, CTA, Privacy Policy) and 87800 15308 (footer text, WhatsApp button). I used 91064 33706 as the phone and 87800 15308 as WhatsApp. Tell me if that is wrong.
2. **Full street address + pincode.** Add `streetAddress` / `postalCode` to the schema in `src/seo/head.ts` and show it in the footer. It must match the Google Business Profile exactly.
3. **www vs non-www.** Canonicals, sitemap and schema now use `https://www.codinghunters.in`. In Vercel > Domains make the other host redirect to it.
4. **Founding year.** The old static page said "Founded in 2012", but the About page says 5+ years. I removed the 2012 claim. Give me the right year and I will add `foundingDate`.
5. **Pricing.** The FAQ avoids prices. A "websites start from Rs X" line is a strong AEO answer if you are happy to publish one.

## Do these outside the code (biggest local-SEO wins)

- Google Business Profile for CodingHunters, Bhuj: category "Software company", same name/address/phone as the site, link to the home page, add photos, ask clients for reviews (add review markup only once real reviews exist).
- Submit `https://www.codinghunters.in/sitemap.xml` in Google Search Console and Bing Webmaster Tools; request indexing for the 5 location pages.
- Consistent listings (NAP): LinkedIn, Clutch, GoodFirms, Justdial, Sulekha, IndiaMART, Gujarat startup directories.
- Case studies: one page per real client project (problem, solution, result, screenshot). This is the main thing AI answer engines cite.
- Blog: publish regularly on questions people ask ("cost of a hospital management system in India", "ERP for Kutch traders"). Add posts in `src/data/blogPosts.ts`; they are prerendered and added to the sitemap automatically.

## Adding a new location or blog post

- Location: add an object to `LOCATION_PAGES` in `src/seo/siteData.ts`. Route, meta, schema, sitemap and footer link are automatic. Write genuinely different content for each place (not just a swapped city name).
- Build check: `npm run build` should print `prerender: wrote N pages`.
