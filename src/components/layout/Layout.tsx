import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/seo/siteData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "@/components/fx/ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

/**
 * Gives every inner page the same scroll reveal without editing each page.
 * Targets top-level blocks inside sections (skipping the first section, which is
 * the page hero) that are below the fold and have no animation of their own.
 * Content is only hidden after hydration, so crawlers and no-JS users see it all.
 */
const useAutoReveal = (pathname: string) => {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The home page uses <Reveal> directly, so it opts out.
    if (pathname === "/") return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section")).slice(1);
    const targets: HTMLElement[] = [];
    sections.forEach((section) => {
      section.querySelectorAll<HTMLElement>(":scope > .container-custom > *, :scope > .container-custom > div > *").forEach((el) => {
        if (el.hasAttribute("style") || el.classList.contains("rv-hide") || el.closest(".rv-hide")) return;
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
        targets.push(el);
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("rv-show");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach((el, i) => {
      el.style.setProperty("--rv-delay", `${(i % 4) * 70}ms`);
      el.classList.add("rv-hide");
      io.observe(el);
    });
    return () => io.disconnect();
  }, [pathname]);
};

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();
  useAutoReveal(pathname);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-5 right-4 z-40 flex h-12 items-center gap-2 rounded-full bg-[#1fa855] pl-4 pr-4 text-sm font-medium text-white shadow-[0_10px_30px_-8px_rgba(8,60,30,0.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#188a45] sm:right-6"
        aria-label="Chat with CodingHunters on WhatsApp"
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#1fa855]/40 [animation-duration:2.6s]" aria-hidden="true" />
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default Layout;
