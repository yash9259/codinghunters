import { createElement, useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms, handy for staggering siblings. */
  delay?: number;
  as?: "div" | "li" | "section" | "p" | "h2" | "h3" | "span";
}

/**
 * Scroll reveal that is safe for SEO and prerendering: the server renders the
 * content fully visible. Only after hydration, and only for blocks that are
 * still below the fold, do we hide them and fade them in when they scroll into
 * view (see .rv-hide / .rv-show in index.css). No JS = nothing is ever hidden.
 */
const Reveal = ({ children, className = "", delay = 0, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.style.setProperty("--rv-delay", `${delay}ms`);
    el.classList.add("rv-hide");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("rv-show");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return createElement(as, { ref, className }, children);
};

export default Reveal;
