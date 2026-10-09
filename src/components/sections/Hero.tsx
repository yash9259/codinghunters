import { type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/seo/siteData";
import CountUp from "@/components/fx/CountUp";
import HeroArt from "./HeroArt";

const facts = [
  { value: SITE.stats.projects, label: "projects delivered" },
  { value: SITE.stats.clients, label: "clients served" },
  { value: SITE.stats.years, label: "years in business" },
  { value: "One-time", label: "cost, you own the code" },
];

const headline = "Custom Software, Web & App Development Company in Bhuj, Kutch";

const Hero = () => {
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--hx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--hy", `${e.clientY - r.top}px`);
  };

  return (
    <section className="surface-ink overflow-hidden pt-[4.5rem]" onMouseMove={handleMove}>
      <div className="hero-light" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <div className="container-custom pt-12 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="order-2 lg:order-1">
            <h1 className="font-display text-[2.6rem] font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[3.75rem]">
              {headline.split(" ").map((word, i) => (
                <span key={`${word}-${i}`}>
                  <span className="word-in" style={{ ["--i" as string]: i }}>
                    {word}
                  </span>{" "}
                </span>
              ))}
            </h1>

            <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-[hsl(var(--ink-muted))]" style={{ ["--d" as string]: "900ms" }}>
              CodingHunters helps businesses grow with secure, scalable, and
              affordable software solutions including web development, mobile
              apps, ERP systems, healthcare software, and finance automation
              tools.
            </p>

            <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "1100ms" }}>
              <Button variant="accent" size="xl" className="btn-glow" asChild>
                <Link to="/contact">
                  Get free consultation
                  <ArrowRight className="!size-5" />
                </Link>
              </Button>
              <Button variant="onDark" size="xl" asChild>
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <HeroArt />
          </div>
        </div>
      </div>

      <div className="relative border-t border-[hsl(var(--ink-line))] bg-[hsl(var(--ink)/0.5)] backdrop-blur-sm">
        <dl className="container-custom grid grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col-reverse justify-end py-6 pr-4 lg:py-9 ${
                i % 2 === 1 ? "pl-5 border-l border-[hsl(var(--ink-line))]" : ""
              } ${i >= 2 ? "border-t border-[hsl(var(--ink-line))] lg:border-t-0" : ""} ${
                i > 0 ? "lg:pl-8 lg:border-l lg:border-[hsl(var(--ink-line))]" : ""
              }`}
            >
              <dt className="mt-1 text-sm text-[hsl(var(--ink-muted))]">{f.label}</dt>
              <dd className="font-display text-3xl font-semibold tracking-tight text-white lg:text-5xl">
                <CountUp value={f.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
