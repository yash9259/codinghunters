import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandLogo from "./BrandLogo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/technologies", label: "Technologies" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/why-us", label: "Why Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname === href || location.pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-white/10 bg-[hsl(var(--ink)/0.72)] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          : "border-white/[0.06] bg-[hsl(var(--ink))]"
      }`}
    >
      <nav aria-label="Main" className="container-custom">
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link to="/" className="shrink-0" aria-label="CodingHunters home">
            <BrandLogo className="w-[6.25rem]" />
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative flex h-[4.5rem] items-center px-3.5 text-[0.9rem] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-[hsl(var(--ink-muted))] hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span layoutId="nav-active" transition={{ type: "spring", stiffness: 380, damping: 32 }} className="absolute inset-x-3.5 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-[hsl(var(--glow-teal))] to-[hsl(var(--glow-violet))]" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="accent" size="default" asChild>
              <Link to="/contact">Get free consultation</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden -mr-2 p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="container-custom py-4">
              <div className="ruled-ink">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block py-3.5 font-display text-xl font-medium ${
                      isActive(link.href) ? "text-[hsl(var(--glow-teal))]" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-2">
                <Button variant="accent" size="lg" className="w-full" asChild>
                  <Link to="/contact">Get free consultation</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
