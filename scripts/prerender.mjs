/**
 * Build-time prerender (runs after `vite build`).
 *
 * The site is a client-rendered React app, so crawlers and AI bots that do not
 * run JavaScript used to receive an empty <div id="root">. This script renders
 * every route to real HTML (headings, body copy, FAQs, internal links) plus its
 * own <title>, meta description, canonical, Open Graph tags and JSON-LD, and
 * writes one static file per route into dist/. It also generates sitemap.xml.
 *
 * No extra dependencies: it uses esbuild (already installed with Vite).
 */
import { build } from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const tmpDir = path.join(root, "node_modules", ".cache", "prerender");
const bundle = path.join(tmpDir, "entry-server.cjs");

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("prerender: dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}

// 1. Bundle the server entry (TypeScript + "@/" alias) with esbuild.
await build({
  entryPoints: [path.join(root, "src/entry-server.tsx")],
  outfile: bundle,
  bundle: true,
  platform: "node",
  format: "cjs",
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"' },
  alias: { "@": path.join(root, "src") },
  logLevel: "error",
});

const mod = await import(pathToFileURL(bundle).href);
const { render, buildHeadTags, serializeTags, getAllPageMeta, NOT_FOUND_META, SITE } = mod.default ?? mod;

// 2. Take the HTML shell Vite produced (it has the hashed JS/CSS tags).
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--SEO_HEAD-->") || !template.includes("<!--SSR_OUTLET-->")) {
  console.error("prerender: placeholders missing from dist/index.html (check index.html).");
  process.exit(1);
}

const fileFor = (route) =>
  route === "/" ? path.join(dist, "index.html") : path.join(dist, `${route.replace(/^\//, "")}.html`);

function writePage(route, meta, urlForRender) {
  const body = render(urlForRender);
  const head = serializeTags(buildHeadTags(meta));
  const html = template.replace("<!--SEO_HEAD-->", head).replace("<!--SSR_OUTLET-->", body);
  const out = fileFor(route);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  return out;
}

// 3. Render every indexable route.
const pages = getAllPageMeta();
for (const meta of pages) {
  writePage(meta.path, meta, meta.path);
}

// 4. 404 page (served with a real 404 status by Vercel; marked noindex).
{
  const out = path.join(dist, "404.html");
  const body = render("/this-page-does-not-exist");
  const head = serializeTags(buildHeadTags(NOT_FOUND_META));
  fs.writeFileSync(out, template.replace("<!--SEO_HEAD-->", head).replace("<!--SSR_OUTLET-->", body));
}

// 5. sitemap.xml
const urls = pages
  .filter((p) => !p.noindex)
  .map((p) => {
    const loc = p.path === "/" ? `${SITE.url}/` : `${SITE.url}${p.path}`;
    const lastmod = p.modified || SITE.lastmod;
    const priority = p.path === "/" ? "1.0" : p.path.startsWith("/software-development") ? "0.9" : p.path.startsWith("/blog/") ? "0.6" : "0.7";
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);

console.log(`prerender: wrote ${pages.length} pages + 404.html + sitemap.xml to dist/`);
