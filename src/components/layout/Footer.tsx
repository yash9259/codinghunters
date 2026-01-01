import { Link } from "react-router-dom";
import { Code2, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Why Choose Us", href: "/why-us" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Website Development", href: "/services#website" },
      { label: "Mobile App Development", href: "/services#mobile" },
      { label: "ERP & Automation", href: "/services#erp" },
      { label: "Healthcare Software", href: "/services#healthcare" },
      { label: "Finance Software", href: "/services#finance" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="CodingHunters Logo" className="w-16 h-16 rounded-lg" />
              <span className="font-display font-bold text-xl">
                CodingHunters
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional software development agency providing end-to-end IT
              solutions for businesses across India.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:huntersthecode@gmail.com"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                huntersthecode@gmail.com
              </a>
              <a
                href="tel:+919106433706"
                className="flex items-center gap-2 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9106433706
              </a>
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                Bhuj, Kutch, India
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/codinghunters/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cod.inghunters?igsh=Nmt4eWE1dW10cnJ2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Local SEO Footer */}
        <div className="seo-footer border-t border-background/10 mt-12 pt-8">
          <p className="text-background/70 text-sm text-center leading-relaxed">
            CodingHunters – Software Development Company in Bhuj, Kutch, Gujarat.<br />
            Services: Custom Software Development, Web Development, Mobile App Development,
            ERP & Business Automation Solutions.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} CodingHunters. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Serving businesses across India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
