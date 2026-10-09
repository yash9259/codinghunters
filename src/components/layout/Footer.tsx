import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { LOCATION_PAGES, SITE, locationPath } from "@/seo/siteData";
import BrandLogo from "./BrandLogo";

const footerLinks = {
  company: [
    { label: "About us", href: "/about" },
    { label: "Why choose us", href: "/why-us" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Website development", href: "/services#website" },
    { label: "Mobile app development", href: "/services#mobile" },
    { label: "ERP & automation", href: "/services#erp" },
    { label: "Healthcare software", href: "/services#healthcare" },
    { label: "Finance software", href: "/services#finance" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms & conditions", href: "/terms" },
  ],
};

const linkClass =
  "text-[0.95rem] text-[hsl(var(--ink-muted))] transition-colors hover:text-white";

const LinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h4 className="mb-5 font-display text-base font-semibold text-white">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className={linkClass}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="surface-ink overflow-hidden">
      <div className="grain" aria-hidden="true" />
      <div className="container-custom pt-16 pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-16">
          <div>
            <Link to="/" aria-label="CodingHunters home" className="inline-block">
              <BrandLogo className="w-40" />
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-[hsl(var(--ink-muted))]">
              Professional software development agency providing end-to-end IT solutions for
              businesses across India.
            </p>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              <li>
                <a href={`mailto:${SITE.email}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-[hsl(var(--ink-muted))]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Bhuj, Kutch, Gujarat, India
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/codinghunters/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--ink-line))] text-[hsl(var(--ink-muted))] transition-colors hover:border-white/40 hover:text-white"
                aria-label="CodingHunters on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/cod.inghunters?igsh=Nmt4eWE1dW10cnJ2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--ink-line))] text-[hsl(var(--ink-muted))] transition-colors hover:border-white/40 hover:text-white"
                aria-label="CodingHunters on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <LinkColumn title="Company" links={footerLinks.company} />
          <LinkColumn title="Services" links={footerLinks.services} />
          <LinkColumn title="Legal" links={footerLinks.legal} />
        </div>

        {/* Local SEO footer: keep this text and the area links. */}
        <div className="seo-footer mt-14 border-t border-[hsl(var(--ink-line))] pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-[hsl(var(--ink-muted))]">
            CodingHunters – Software Development Company in Bhuj, Kutch, Gujarat.
            <br />
            Services: Custom Software Development, Web Development, Mobile App Development, ERP &
            Business Automation Solutions.
          </p>
          <nav aria-label="Areas we serve" className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {LOCATION_PAGES.map((l) => (
              <Link
                key={l.slug}
                to={locationPath(l)}
                className="text-[hsl(var(--ink-muted))] underline decoration-white/15 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
              >
                {l.h1}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-5 border-t border-[hsl(var(--ink-line))] pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-[hsl(var(--ink-muted))]">
            © {currentYear} CodingHunters. All rights reserved. Serving businesses across India.
          </p>
          <a
            href="https://www.refrens.com/free-online-invoicing-software"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 self-start rounded-md border border-[hsl(var(--ink-line))] px-3 py-2 transition-colors hover:border-white/30 sm:self-auto"
            aria-label="Invoicing powered by Refrens"
          >
            <img
              src="/Invoicing-powered-by-refrens.png"
              alt="Invoicing powered by Refrens"
              className="h-7 w-auto"
              width="90"
              height="28"
              loading="lazy"
              decoding="async"
            />
            <span className="text-xs text-[hsl(var(--ink-muted))]">Invoicing powered by Refrens</span>
          </a>
        </div>
      </div>

      {/* oversized brand watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-4 text-center font-display text-[17vw] font-semibold leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:1px_hsl(0_0%_100%/0.1)] sm:text-[13vw]"
        style={{ backgroundImage: "linear-gradient(180deg, hsl(190 78% 62% / 0.18), transparent 75%)", WebkitBackgroundClip: "text", backgroundClip: "text" }}
      >
        CodingHunters
      </div>
    </footer>
  );
};

export default Footer;
