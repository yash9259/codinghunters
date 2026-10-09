/**
 * Single source of truth for every SEO / AEO / GEO fact about CodingHunters.
 * Used by: the on-page components, the client-side head manager, and the
 * build-time prerender script (scripts/prerender.mjs).
 *
 * KEEP THESE FACTS CONSISTENT EVERYWHERE (site, Google Business Profile,
 * LinkedIn, directories). Consistency is what search engines and AI answer
 * engines use to trust an entity.
 */

export const SITE = {
  name: "CodingHunters",
  url: "https://www.codinghunters.in",
  logo: "/logo.png",
  email: "huntersthecode@gmail.com",
  phoneDisplay: "+91 91064 33706",
  phoneTel: "+919106433706",
  whatsappDisplay: "+91 87800 15308",
  whatsapp: "https://wa.me/918780015308",
  founder: "Yash Thakkar",
  locality: "Bhuj",
  district: "Kutch",
  region: "Gujarat",
  country: "IN",
  sameAs: [
    "https://www.linkedin.com/company/codinghunters/",
    "https://www.instagram.com/cod.inghunters",
    "https://x.com/CodingHunters",
  ],
  stats: { projects: "50+", clients: "30+", years: "5+" },
  /** Update this date whenever you meaningfully change content. */
  lastmod: "2026-10-09",
};

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export interface ServiceItem {
  id: string;
  name: string;
  short: string;
}

export const SERVICES: ServiceItem[] = [
  { id: "website", name: "Website Development", short: "Business, corporate, portfolio and travel websites with admin dashboards, built in React, PHP and Laravel." },
  { id: "mobile", name: "Mobile App Development", short: "Android and hybrid apps for business, booking, customer and vendor use cases, with payments and push notifications." },
  { id: "erp", name: "ERP & Custom Business Software", short: "Billing, inventory, customer and vendor management, reports and role-based access built around your workflow." },
  { id: "healthcare", name: "Healthcare Software", short: "Hospital and clinic management, patient records, appointment booking, EMR, billing and pharmacy systems." },
  { id: "finance", name: "Finance & FinTech Software", short: "Loan management, EMI tracking, customer ledgers, digital billing and payment gateway integration for NBFCs and lenders." },
  { id: "uiux", name: "UI/UX & Branding", short: "Logo, brand identity, app and website UI design." },
  { id: "support", name: "Software Maintenance & Support", short: "Bug fixes, performance optimisation, feature upgrades, server and deployment support." },
];

export interface FaqItem {
  q: string;
  a: string;
}

export interface LocationPageData {
  slug: string; // path without leading slash
  place: string; // short place label
  navLabel: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  /** 40-60 word direct answer: written to be quoted by AI answer engines. */
  answer: string;
  intro: string[];
  localContextTitle: string;
  localContext: string[];
  workModel: string;
  serveAreas: string[];
  areaServedSchema: { type: string; name: string }[];
  faqs: FaqItem[];
}

export const LOCATION_PAGES: LocationPageData[] = [
  /* ------------------------------------------------------------------ BHUJ */
  {
    slug: "software-development-company-in-bhuj",
    place: "Bhuj",
    navLabel: "Bhuj",
    title: "Software Development Company in Bhuj | CodingHunters",
    description:
      "CodingHunters is a software development company in Bhuj, Kutch. Custom websites, Android apps, ERP, healthcare and finance software. Free consultation.",
    h1: "Software Development Company in Bhuj",
    eyebrow: "Based in Bhuj, Kutch, Gujarat",
    answer:
      "CodingHunters is a software development company based in Bhuj, Kutch, Gujarat, founded and led by Yash Thakkar. We build custom websites, Android and hybrid mobile apps, ERP and billing software, healthcare systems and finance software for businesses in Bhuj, across Kutch and throughout India.",
    intro: [
      "If you run a business in Bhuj and need software that fits the way you actually work, you can meet the team that builds it. CodingHunters is headquartered in Bhuj, so discovery workshops, requirement walkthroughs and demos can happen in person, not only over a call.",
      "We have delivered 50+ projects for 30+ clients. Every system is custom-built around your process (billing, dispatch, bookings, approvals, reporting) rather than squeezed into a generic template.",
    ],
    localContextTitle: "Software for the way Bhuj businesses operate",
    localContext: [
      "Travel and tourism operators handling Kutch circuits, Rann Utsav bookings and tour packages: booking systems, itinerary builders, agent portals and fast SEO-ready websites.",
      "Clinics, hospitals and diagnostic labs: patient registration, doctor scheduling, digital prescriptions, billing and reports.",
      "Finance companies, NBFCs and loan agents: loan management, EMI and repayment tracking, customer ledgers and approval workflows.",
      "Retail, wholesale, handicraft and trading businesses: GST billing, inventory, customer and vendor management.",
      "Schools, coaching institutes and local startups: admin dashboards, fee and attendance systems, MVPs for new ideas.",
    ],
    workModel:
      "Our office is in Bhuj. For Bhuj clients we are happy to meet at your location or ours, then continue day-to-day progress updates over WhatsApp and video calls.",
    serveAreas: ["Bhuj", "Madhapar", "Mirzapar", "Kukma", "Mundra", "Gandhidham", "Anjar", "Mandvi", "Nakhatrana"],
    areaServedSchema: [
      { type: "City", name: "Bhuj" },
      { type: "AdministrativeArea", name: "Kutch district" },
    ],
    faqs: [
      {
        q: "Which software development company is based in Bhuj?",
        a: "CodingHunters is a software development company based in Bhuj, Kutch, Gujarat. It was founded by Yash Thakkar and builds custom websites, mobile apps, ERP systems, healthcare software and finance software.",
      },
      {
        q: "What software services can I get in Bhuj from CodingHunters?",
        a: "Website development, Android and hybrid mobile app development, ERP and custom business software, hospital and clinic software, loan management and fintech software, UI/UX and branding, and ongoing maintenance and support.",
      },
      {
        q: "Can I meet the team in person in Bhuj?",
        a: "Yes. CodingHunters is based in Bhuj, so requirement discussions and demos can be done in person. Contact us on WhatsApp or by email to book a free consultation.",
      },
      {
        q: "How long does it take to build a website or app in Bhuj?",
        a: "It depends on scope. As a rough guide, a business website typically takes a few weeks, while a mobile app or custom ERP is planned in milestones over a few months. You get a written scope, timeline and quotation after the free consultation.",
      },
      {
        q: "Do you provide support after the software is delivered?",
        a: "Yes. We offer maintenance and support covering bug fixes, performance optimisation, feature upgrades, and server and deployment support.",
      },
    ],
  },
  /* ----------------------------------------------------------------- KUTCH */
  {
    slug: "software-development-company-in-kutch",
    place: "Kutch",
    navLabel: "Kutch",
    title: "Software Development Company in Kutch, Gujarat | CodingHunters",
    description:
      "Custom software, web and mobile app development for businesses across Kutch: Bhuj, Gandhidham, Mundra, Anjar, Mandvi. Based in Bhuj. Free consultation.",
    h1: "Software Development Company in Kutch, Gujarat",
    eyebrow: "Serving all of Kutch district from Bhuj",
    answer:
      "CodingHunters is a Bhuj-based software development company serving businesses across Kutch district, including Bhuj, Gandhidham, Anjar, Mandvi, Mundra and Nakhatrana. We build custom websites, mobile apps, ERP and billing software, healthcare and finance systems, with support after launch.",
    intro: [
      "Kutch is Gujarat's largest district and its businesses are spread out: tourism around the Rann, trade and logistics through the ports, industry in Gandhidham and Mundra, handicrafts and agriculture in the villages. Software here has to work for multi-branch teams, field staff and customers who book from their phones.",
      "CodingHunters is based in Bhuj, the district headquarters, which makes us the nearest dedicated software team for most Kutch businesses.",
    ],
    localContextTitle: "What Kutch businesses typically ask us to build",
    localContext: [
      "Tourism and hospitality: tour and resort booking websites, itinerary and package management, payment gateway integration, agent and driver apps.",
      "Logistics, transport and trading: multi-branch inventory, dispatch tracking, GST billing, customer and vendor ledgers.",
      "Industrial and service companies: ERP modules for purchase, stock, production and reports with role-based access.",
      "Healthcare providers across the district: clinic and hospital management, appointment booking, EMR.",
      "Finance and NBFC teams: loan management, EMI tracking, collections and approval workflows.",
    ],
    workModel:
      "We work with Kutch clients through in-person meetings where practical (we are in Bhuj), plus WhatsApp, phone and video calls. You see working builds at every milestone instead of waiting for a final handover.",
    serveAreas: ["Bhuj", "Gandhidham", "Anjar", "Mundra", "Mandvi", "Nakhatrana", "Bhachau", "Rapar", "Adipur", "Dhordo"],
    areaServedSchema: [
      { type: "AdministrativeArea", name: "Kutch district" },
      { type: "City", name: "Bhuj" },
      { type: "City", name: "Gandhidham" },
      { type: "City", name: "Anjar" },
      { type: "City", name: "Mandvi" },
      { type: "City", name: "Mundra" },
    ],
    faqs: [
      {
        q: "Is there a software development company in Kutch?",
        a: "Yes. CodingHunters is a software development company in Kutch, based in Bhuj, building custom websites, mobile apps, ERP, healthcare and finance software for clients across the district and India.",
      },
      {
        q: "Do you work with businesses in Gandhidham, Mundra and Anjar?",
        a: "Yes. We serve businesses across Kutch, including Gandhidham, Mundra, Anjar, Mandvi and Nakhatrana, with in-person meetings where practical and video calls otherwise.",
      },
      {
        q: "Can you build a tourism or travel booking website for a Kutch business?",
        a: "Yes. Travel and booking websites are one of our core website types, with package pages, enquiry and booking forms, payment gateway integration, an admin dashboard and search-friendly page structure.",
      },
      {
        q: "Do you build ERP and billing software for Kutch industries and traders?",
        a: "Yes. We build custom ERP covering billing and invoicing, inventory, customer and vendor management, reports and role-based access, designed around your existing process.",
      },
    ],
  },
  /* ------------------------------------------------------------- AHMEDABAD */
  {
    slug: "software-development-services-in-ahmedabad",
    place: "Ahmedabad",
    navLabel: "Ahmedabad",
    title: "Software Development Services in Ahmedabad | CodingHunters",
    description:
      "Custom web, mobile app and ERP development for Ahmedabad businesses, delivered by CodingHunters, a Gujarat software company with 50+ projects.",
    h1: "Software Development Services for Ahmedabad Businesses",
    eyebrow: "Delivered remotely from Gujarat",
    answer:
      "CodingHunters, a Gujarat software development company founded by Yash Thakkar, builds custom websites, Android and hybrid apps, ERP and billing software, healthcare and finance systems for Ahmedabad businesses. We work remotely from our Bhuj office using video calls, WhatsApp and milestone demos.",
    intro: [
      "Ahmedabad businesses have plenty of software vendors to choose from. What we offer is a small, founder-led team that is easy to reach, scopes work in plain language and stays on after launch. We are based in Bhuj, Kutch, and serve Ahmedabad clients remotely.",
      "Remote delivery is normal for most of our projects. After a discovery call we send a written scope and quotation, build in milestones you can review, and keep one channel (usually WhatsApp) for quick questions.",
    ],
    localContextTitle: "Where we fit for Ahmedabad companies",
    localContext: [
      "SMEs and traders who have outgrown spreadsheets: GST billing, inventory, ledgers, multi-user ERP.",
      "Startups building a first product: MVPs on React, Laravel or Node.js, or Android apps, with room to scale.",
      "Textile, pharma, chemical and distribution businesses: order, dispatch, stock and reporting workflows.",
      "Clinics, labs and diagnostic centres: patient management, appointments, digital prescriptions and billing.",
      "Finance and lending teams: loan management, EMI tracking and payment gateway integration.",
    ],
    workModel:
      "We are not an Ahmedabad-based office, and we say so plainly. Projects run remotely: discovery over video, scope and quotation in writing, milestone demos, and shared task tracking. If a larger project needs an in-person workshop, ask us and we will discuss it.",
    serveAreas: ["Ahmedabad", "Gandhinagar", "Sanand", "Naroda", "Vatva", "Bopal", "Satellite", "Maninagar"],
    areaServedSchema: [
      { type: "City", name: "Ahmedabad" },
      { type: "City", name: "Gandhinagar" },
      { type: "State", name: "Gujarat" },
    ],
    faqs: [
      {
        q: "Does CodingHunters have an office in Ahmedabad?",
        a: "No. CodingHunters is based in Bhuj, Kutch, Gujarat. We serve Ahmedabad clients remotely through video calls, WhatsApp and milestone demos.",
      },
      {
        q: "Can a Bhuj-based company deliver software for an Ahmedabad business?",
        a: "Yes. Most software work does not depend on the developer's location. We run discovery over video, share a written scope and quotation, and deliver in reviewable milestones. Bhuj and Ahmedabad are in the same state and time zone, so scheduling calls is easy.",
      },
      {
        q: "What can you build for an Ahmedabad startup or SME?",
        a: "Business websites, e-commerce and booking platforms, Android apps, custom ERP and billing, admin dashboards, and healthcare or finance software. We can start with an MVP and extend it in later phases.",
      },
      {
        q: "How do I get a quotation for a project in Ahmedabad?",
        a: "Message us on WhatsApp or use the contact form to book a free consultation. After understanding your requirements we send a written scope, timeline and quotation.",
      },
    ],
  },
  /* --------------------------------------------------------------- GUJARAT */
  {
    slug: "software-development-company-in-gujarat",
    place: "Gujarat",
    navLabel: "Gujarat",
    title: "Software Development Company in Gujarat | CodingHunters",
    description:
      "Gujarat software development company serving Ahmedabad, Surat, Rajkot, Vadodara and Kutch: custom web, mobile, ERP, healthcare and finance software.",
    h1: "Software Development Company in Gujarat",
    eyebrow: "Serving businesses across Gujarat",
    answer:
      "CodingHunters is a Gujarat-based software development company headquartered in Bhuj, Kutch. We build custom websites, Android apps, ERP and billing systems, healthcare and finance software for businesses across Gujarat, including Ahmedabad, Surat, Rajkot, Vadodara, Gandhinagar and Kutch.",
    intro: [
      "Gujarat's economy is unusually varied: diamonds and textiles in Surat, engineering in Rajkot, chemicals and engineering in Vadodara, ceramics in Morbi, ports and industry in Kutch, dairy and agri-business across the state. Software that fits these businesses has to be built around real workflows.",
      "CodingHunters builds that kind of software from Bhuj. We regularly build for workflows common in Gujarat, such as GST invoicing, multi-branch trading and agent networks, and we deliver across the state remotely, with in-person visits discussed project by project.",
    ],
    localContextTitle: "Software we build for Gujarat's business landscape",
    localContext: [
      "Manufacturing and trading: ERP for purchase, stock, production, billing and reports.",
      "Travel, tourism and hospitality: booking websites and apps for Gujarat circuits, with payment gateways and agent portals.",
      "Healthcare: hospital and clinic management, EMR, pharmacy and appointment systems.",
      "Finance, NBFC and co-operative style lending: loan management, EMI and ledger systems with approval workflows.",
      "Startups and service businesses: web platforms and Android apps from MVP to scale.",
    ],
    workModel:
      "Based in Bhuj, we serve the whole state remotely, with video discovery, written scope and quotation, milestone demos and WhatsApp-based coordination. Because we are in the same state and time zone, meetings are easy to schedule.",
    serveAreas: ["Ahmedabad", "Surat", "Rajkot", "Vadodara", "Gandhinagar", "Jamnagar", "Bhavnagar", "Morbi", "Mehsana", "Kutch"],
    areaServedSchema: [
      { type: "State", name: "Gujarat" },
      { type: "City", name: "Ahmedabad" },
      { type: "City", name: "Surat" },
      { type: "City", name: "Rajkot" },
      { type: "City", name: "Vadodara" },
      { type: "AdministrativeArea", name: "Kutch district" },
    ],
    faqs: [
      {
        q: "Which software development companies serve all of Gujarat?",
        a: "CodingHunters, headquartered in Bhuj, Kutch, serves businesses across Gujarat including Ahmedabad, Surat, Rajkot, Vadodara and Gandhinagar, building custom websites, apps, ERP and industry software.",
      },
      {
        q: "Do you build software for Gujarat's traders and manufacturers?",
        a: "Yes. We build ERP and billing systems covering GST invoicing, inventory, purchase, customer and vendor management, reports and role-based access.",
      },
      {
        q: "Where is CodingHunters located in Gujarat?",
        a: "CodingHunters is located in Bhuj, Kutch district, Gujarat, India.",
      },
      {
        q: "How do I start a software project with CodingHunters?",
        a: "Contact us on WhatsApp or through the contact form for a free consultation. We then prepare a written scope, milestones and quotation before any development starts.",
      },
    ],
  },
  /* ----------------------------------------------------------------- INDIA */
  {
    slug: "software-development-company-in-india",
    place: "India",
    navLabel: "India",
    title: "Custom Software Development Company in India | CodingHunters",
    description:
      "India-based custom software company: web, Android app, ERP, healthcare and fintech development for startups and businesses nationwide. Free consultation.",
    h1: "Custom Software Development Company in India",
    eyebrow: "Clients across India, delivered from Gujarat",
    answer:
      "CodingHunters is an India-based custom software development company headquartered in Bhuj, Gujarat. We build websites, Android and hybrid apps, ERP and billing software, healthcare and fintech platforms for startups and businesses across India, with 50+ projects delivered for 30+ clients.",
    intro: [
      "Most of our clients never need to visit us, and we rarely need to visit them. Requirements are gathered over video calls, the scope and quotation are written down, and work is delivered in milestones you can test as it is built.",
      "Software for Indian businesses has its own requirements: GST-compliant billing, UPI and payment gateway integration, Android-first users, and workflows shaped by agent and branch networks. These are things we build regularly.",
    ],
    localContextTitle: "What businesses across India hire us for",
    localContext: [
      "Android apps for customers, vendors and field staff, with login, payments and push notifications.",
      "Custom ERP: billing and invoicing, inventory, customers and vendors, reports and role-based access.",
      "Healthcare platforms: hospital and clinic management, patient records, appointments and pharmacy.",
      "Finance and fintech software: loan management, EMI tracking, ledgers and admin panels.",
      "Business, portfolio and travel websites with admin dashboards, built to be crawlable and fast.",
    ],
    workModel:
      "We work remotely with clients across India: video discovery, written scope and quotation, milestone demos, shared tracking and WhatsApp for quick decisions. After launch we provide maintenance and support.",
    serveAreas: ["Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Kolkata", "Jaipur", "Ahmedabad", "Bhuj"],
    areaServedSchema: [{ type: "Country", name: "India" }],
    faqs: [
      {
        q: "Can I hire CodingHunters from outside Gujarat?",
        a: "Yes. We work with clients across India remotely, using video calls, written scopes, milestone demos and WhatsApp for day-to-day coordination.",
      },
      {
        q: "What kinds of software does CodingHunters build for Indian businesses?",
        a: "Websites, Android and hybrid mobile apps, ERP and billing systems with GST support, healthcare software, loan and fintech software, plus UI/UX design and ongoing maintenance.",
      },
      {
        q: "Which technologies do you use?",
        a: "Frontend: HTML, CSS, Bootstrap, JavaScript and React. Backend: PHP, Laravel and Node.js. Mobile: Android (Java and Kotlin). Databases: MySQL and Firebase. Plus Git, REST APIs and payment gateways.",
      },
      {
        q: "How many projects has CodingHunters delivered?",
        a: "CodingHunters has delivered 50+ projects for 30+ clients, with 5+ years of experience.",
      },
      {
        q: "How do I get a free consultation?",
        a: "Call +91 91064 33706, message us on WhatsApp at +91 87800 15308, email huntersthecode@gmail.com, or use the contact form on this site.",
      },
    ],
  },
];

export const HOME_FAQS: FaqItem[] = [
  {
    q: "What is CodingHunters?",
    a: "CodingHunters is a custom software development company based in Bhuj, Kutch, Gujarat, India. Founded and led by Yash Thakkar, it builds websites, mobile apps, ERP and business software, healthcare software and finance software for clients across India.",
  },
  {
    q: "Where is CodingHunters located?",
    a: "CodingHunters is located in Bhuj, Kutch, Gujarat, India. It serves clients in Bhuj, across Kutch, in Ahmedabad and the rest of Gujarat, and across India.",
  },
  {
    q: "What services does CodingHunters offer?",
    a: "Website development, Android and hybrid mobile app development, ERP and custom business software, healthcare software, finance and fintech software, UI/UX and branding, and software maintenance and support.",
  },
  {
    q: "How can I contact CodingHunters?",
    a: "Call +91 91064 33706, message us on WhatsApp at +91 87800 15308, email huntersthecode@gmail.com, or use the contact form at https://www.codinghunters.in/contact for a free consultation.",
  },
];

export const FAQ_GROUPS: { title: string; items: FaqItem[] }[] = [
  { title: "About CodingHunters", items: HOME_FAQS },
  {
    title: "Working with us",
    items: [
      {
        q: "Do you work with clients outside Bhuj and Kutch?",
        a: "Yes. We serve clients in Ahmedabad, across Gujarat and across India. Projects run remotely with video discovery, a written scope and quotation, milestone demos and WhatsApp coordination.",
      },
      {
        q: "How does a project with CodingHunters work?",
        a: "1) Free consultation to understand your goals. 2) Written scope, timeline and quotation. 3) Design and wireframes. 4) Development in milestones with demos. 5) Launch, then maintenance and support.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes. Maintenance and support covers bug fixes, performance optimisation, feature upgrades, and server and deployment support.",
      },
      {
        q: "Do I own the software you build?",
        a: "Ownership and licensing terms are written into the agreement for each project. Ask us during the consultation and we will confirm them in your quotation.",
      },
    ],
  },
  {
    title: "Technology & services",
    items: [
      {
        q: "Which technologies does CodingHunters use?",
        a: "Frontend: HTML, CSS, Bootstrap, JavaScript, React. Backend: PHP, Laravel, Node.js. Mobile: Android (Java/Kotlin). Databases: MySQL, Firebase. Also Git, REST APIs and payment gateways.",
      },
      {
        q: "Can you build a custom ERP for my business?",
        a: "Yes. We build ERP covering billing and invoicing, inventory, customer and vendor management, reports and analytics, with role-based access, designed around your process.",
      },
      {
        q: "Do you build hospital, clinic and loan management software?",
        a: "Yes. Our healthcare work includes hospital and clinic management, patient records, appointments, EMR, billing and pharmacy. Our finance work includes loan management, EMI tracking, ledgers and payment integrations.",
      },
      {
        q: "How long does a website or app take?",
        a: "It depends on scope. A business website typically takes a few weeks; mobile apps and custom ERP are planned in milestones over a few months. You receive a timeline in your quotation.",
      },
    ],
  },
];

export const locationPath = (l: LocationPageData) => `/${l.slug}`;
