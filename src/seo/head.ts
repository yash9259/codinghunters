import { SITE, ORG_ID, WEBSITE_ID, SERVICES } from "./siteData";

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  noindex?: boolean;
  /** Extra JSON-LD nodes for this page (added to the global graph). */
  jsonLd?: Record<string, unknown>[];
  published?: string;
  modified?: string;
}

export interface HeadTag {
  tag: "title" | "meta" | "link" | "script";
  attrs?: Record<string, string>;
  text?: string;
}

export const absUrl = (path: string) =>
  `${SITE.url}${path === "/" ? "/" : path.replace(/\/$/, "")}`;

/** Organization + WebSite entities, emitted on every page. */
export const globalGraph = (): Record<string, unknown>[] => [
  {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: "Coding Hunters",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}${SITE.logo}` },
    image: `${SITE.url}${SITE.logo}`,
    description:
      "CodingHunters is a custom software development company in Bhuj, Kutch, Gujarat, India, building websites, mobile apps, ERP and business software, healthcare software and finance software.",
    email: SITE.email,
    telephone: SITE.phoneTel,
    slogan: "Custom software built around your business",
    founder: { "@type": "Person", name: SITE.founder, jobTitle: "Founder" },
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.locality,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: [
      { "@type": "City", name: "Bhuj" },
      { "@type": "AdministrativeArea", name: "Kutch district" },
      { "@type": "City", name: "Ahmedabad" },
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Custom software development",
      "Web development",
      "Mobile app development",
      "ERP software",
      "Healthcare software",
      "Fintech and loan management software",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SITE.phoneTel,
        email: SITE.email,
        areaServed: "IN",
        availableLanguage: ["English"],
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software development services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.short },
      })),
    },
    sameAs: SITE.sameAs,
  },
  {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  },
];

const clean = (v: unknown): unknown => JSON.parse(JSON.stringify(v)); // drops undefined

export function buildHeadTags(meta: PageMeta): HeadTag[] {
  const url = absUrl(meta.path);
  const image = `${SITE.url}${SITE.logo}`;
  const robots = meta.noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const type = meta.type || "website";

  const tags: HeadTag[] = [
    { tag: "title", text: meta.title },
    { tag: "meta", attrs: { name: "description", content: meta.description } },
    { tag: "meta", attrs: { name: "robots", content: robots } },
    { tag: "link", attrs: { rel: "canonical", href: url } },
    { tag: "meta", attrs: { property: "og:type", content: type } },
    { tag: "meta", attrs: { property: "og:site_name", content: SITE.name } },
    { tag: "meta", attrs: { property: "og:locale", content: "en_IN" } },
    { tag: "meta", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", attrs: { property: "og:description", content: meta.description } },
    { tag: "meta", attrs: { property: "og:url", content: url } },
    { tag: "meta", attrs: { property: "og:image", content: image } },
    { tag: "meta", attrs: { property: "og:image:alt", content: "CodingHunters logo" } },
    { tag: "meta", attrs: { name: "twitter:card", content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:site", content: "@CodingHunters" } },
    { tag: "meta", attrs: { name: "twitter:title", content: meta.title } },
    { tag: "meta", attrs: { name: "twitter:description", content: meta.description } },
    { tag: "meta", attrs: { name: "twitter:image", content: image } },
  ];

  if (type === "article") {
    if (meta.published) tags.push({ tag: "meta", attrs: { property: "article:published_time", content: meta.published } });
    if (meta.modified) tags.push({ tag: "meta", attrs: { property: "article:modified_time", content: meta.modified } });
    tags.push({ tag: "meta", attrs: { property: "article:author", content: SITE.founder } });
  }

  const graph = clean([...globalGraph(), ...(meta.jsonLd || [])]);
  tags.push({
    tag: "script",
    attrs: { type: "application/ld+json" },
    text: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
  });

  return tags;
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Server-side: serialise tags to HTML (each tagged data-rh so the client can replace them). */
export function serializeTags(tags: HeadTag[]): string {
  return tags
    .map((t) => {
      const attrs = Object.entries(t.attrs || {})
        .map(([k, v]) => ` ${k}="${esc(v)}"`)
        .join("");
      if (t.tag === "title") return `<title data-rh="1">${esc(t.text || "")}</title>`;
      if (t.tag === "script")
        return `<script data-rh="1"${attrs}>${(t.text || "").replace(/</g, "\\u003c")}</script>`;
      return `<${t.tag} data-rh="1"${attrs} />`;
    })
    .join("\n    ");
}

/** Client-side: replace all managed head tags (used on SPA navigation). */
export function applyHead(tags: HeadTag[]) {
  if (typeof document === "undefined") return;
  document.head.querySelectorAll("[data-rh]").forEach((el) => el.remove());
  for (const t of tags) {
    const el = document.createElement(t.tag);
    el.setAttribute("data-rh", "1");
    Object.entries(t.attrs || {}).forEach(([k, v]) => el.setAttribute(k, v));
    if (t.text) el.textContent = t.text;
    document.head.appendChild(el);
  }
}
