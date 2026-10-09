import { PageMeta, absUrl } from "./head";
import {
  SITE,
  ORG_ID,
  WEBSITE_ID,
  SERVICES,
  LOCATION_PAGES,
  HOME_FAQS,
  FAQ_GROUPS,
  FaqItem,
  locationPath,
} from "./siteData";
import { getBlogPosts } from "../data/blogPosts";

const crumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: absUrl(it.path),
  })),
});

const faqNode = (faqs: FaqItem[]) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

const webPage = (path: string, name: string, description: string, type = "WebPage") => ({
  "@type": type,
  "@id": `${absUrl(path)}#webpage`,
  url: absUrl(path),
  name,
  description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en-IN",
});

const HOME = { name: "Home", path: "/" };

function staticPages(): PageMeta[] {
  const homeTitle = "Software Development Company in Bhuj, Gujarat | CodingHunters";
  const homeDesc =
    "Custom software company in Bhuj, Kutch. Websites, Android apps, ERP, healthcare and finance software for clients across Gujarat and India. Free consultation.";

  const servicesTitle = "Software, Web & App Development Services | CodingHunters";
  const servicesDesc =
    "Website development, Android apps, custom ERP, healthcare and finance software, UI/UX and support from CodingHunters, a software company in Bhuj, Gujarat.";

  return [
    {
      path: "/",
      title: homeTitle,
      description: homeDesc,
      jsonLd: [webPage("/", homeTitle, homeDesc), faqNode(HOME_FAQS)],
    },
    {
      path: "/about",
      title: "About CodingHunters | Software Company in Bhuj, Kutch",
      description:
        "Founded and led by Yash Thakkar, CodingHunters builds custom software in Bhuj, Kutch: 50+ projects delivered for 30+ clients across Gujarat and India.",
      jsonLd: [
        webPage("/about", "About CodingHunters", "About CodingHunters, a software company in Bhuj, Kutch.", "AboutPage"),
        { "@type": "Person", "@id": `${SITE.url}/about#founder`, name: SITE.founder, jobTitle: "Founder", worksFor: { "@id": ORG_ID } },
        crumbs([HOME, { name: "About", path: "/about" }]),
      ],
    },
    {
      path: "/services",
      title: servicesTitle,
      description: servicesDesc,
      jsonLd: [
        webPage("/services", servicesTitle, servicesDesc, "CollectionPage"),
        {
          "@type": "ItemList",
          name: "CodingHunters services",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.name,
              description: s.short,
              url: `${absUrl("/services")}#${s.id}`,
              provider: { "@id": ORG_ID },
              areaServed: { "@type": "Country", name: "India" },
            },
          })),
        },
        crumbs([HOME, { name: "Services", path: "/services" }]),
      ],
    },
    {
      path: "/technologies",
      title: "Tech Stack: React, Laravel, Node.js, Android | CodingHunters",
      description:
        "CodingHunters builds with React, JavaScript, PHP, Laravel, Node.js, Android (Java/Kotlin), MySQL and Firebase, plus REST APIs and payment gateways.",
      jsonLd: [crumbs([HOME, { name: "Technologies", path: "/technologies" }])],
    },
    {
      path: "/portfolio",
      title: "Portfolio: Travel, Healthcare, Finance & ERP | CodingHunters",
      description:
        "Software CodingHunters builds for travel agencies, healthcare providers, finance companies, ERP and billing, and workflow automation.",
      jsonLd: [crumbs([HOME, { name: "Portfolio", path: "/portfolio" }])],
    },
    {
      path: "/why-us",
      title: "Why Choose CodingHunters | Custom Software Company in Bhuj",
      description:
        "Custom-built software, transparent process, post-launch support and direct founder access. See why businesses choose CodingHunters in Bhuj, Kutch.",
      jsonLd: [crumbs([HOME, { name: "Why Us", path: "/why-us" }])],
    },
    {
      path: "/contact",
      title: "Contact CodingHunters | Software Company in Bhuj, Kutch",
      description:
        "Book a free consultation with CodingHunters. Call +91 91064 33706 or email huntersthecode@gmail.com. Based in Bhuj, Kutch, Gujarat.",
      jsonLd: [
        webPage("/contact", "Contact CodingHunters", "Contact CodingHunters for a free software consultation.", "ContactPage"),
        crumbs([HOME, { name: "Contact", path: "/contact" }]),
      ],
    },
    {
      path: "/faq",
      title: "FAQ: Software Development in Bhuj & Gujarat | CodingHunters",
      description:
        "Answers about hiring a software development company in Bhuj, Kutch, Gujarat and India: services, process, technologies, timelines and support.",
      jsonLd: [
        webPage("/faq", "CodingHunters FAQ", "Frequently asked questions about CodingHunters.", "FAQPage"),
        faqNode(FAQ_GROUPS.flatMap((g) => g.items)),
        crumbs([HOME, { name: "FAQ", path: "/faq" }]),
      ],
    },
    {
      path: "/blog",
      title: "Blog: Software Insights for Bhuj & Kutch | CodingHunters",
      description:
        "Practical guides on choosing a software company in Bhuj, custom ERP for Kutch businesses and briefing a development team.",
      jsonLd: [
        webPage("/blog", "CodingHunters Blog", "Software development insights for Bhuj and Kutch.", "CollectionPage"),
        crumbs([HOME, { name: "Blog", path: "/blog" }]),
      ],
    },
    {
      path: "/privacy-policy",
      title: "Privacy Policy | CodingHunters",
      description: "How CodingHunters collects, uses and protects your information.",
      jsonLd: [],
    },
    {
      path: "/terms",
      title: "Terms & Conditions | CodingHunters",
      description: "Terms and conditions for using CodingHunters' website and services.",
      jsonLd: [],
    },
  ];
}

function locationPages(): PageMeta[] {
  return LOCATION_PAGES.map((l) => {
    const path = locationPath(l);
    return {
      path,
      title: l.title,
      description: l.description,
      jsonLd: [
        webPage(path, l.title, l.description),
        {
          "@type": "Service",
          "@id": `${absUrl(path)}#service`,
          name: `Custom software development in ${l.place}`,
          serviceType: "Custom software, web and mobile app development",
          provider: { "@id": ORG_ID },
          areaServed: l.areaServedSchema.map((a) => ({ "@type": a.type, name: a.name })),
          description: l.answer,
        },
        faqNode(l.faqs),
        crumbs([HOME, { name: l.h1, path }]),
      ],
    };
  });
}

function blogPages(): PageMeta[] {
  return getBlogPosts().map((p) => {
    const path = `/blog/${p.slug}`;
    return {
      path,
      title: p.title.length > 48 ? p.title : `${p.title} | CodingHunters`,
      description: p.excerpt,
      type: "article",
      published: p.date,
      modified: p.date,
      jsonLd: [
        {
          "@type": "BlogPosting",
          "@id": `${absUrl(path)}#article`,
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          dateModified: p.date,
          inLanguage: "en-IN",
          keywords: p.tags.join(", "),
          mainEntityOfPage: absUrl(path),
          author: { "@type": "Person", name: p.author },
          publisher: { "@id": ORG_ID },
          image: `${SITE.url}${SITE.logo}`,
        },
        crumbs([HOME, { name: "Blog", path: "/blog" }, { name: p.title, path }]),
      ],
    };
  });
}

export const NOT_FOUND_META: PageMeta = {
  path: "/404",
  title: "Page not found | CodingHunters",
  description: "This page could not be found.",
  noindex: true,
};

export const getAllPageMeta = (): PageMeta[] => [
  ...staticPages(),
  ...locationPages(),
  ...blogPages(),
];

export function getPageMeta(pathname: string): PageMeta {
  const p = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return getAllPageMeta().find((m) => m.path === p) || { ...NOT_FOUND_META, path: p };
}
