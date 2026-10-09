import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/seo/siteData";
import Reveal from "@/components/fx/Reveal";

const CTASection = () => (
  <section className="surface-ink overflow-hidden section-padding">
    <div className="grain" aria-hidden="true" />
    {/* slow rotating halo behind the headline */}
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="pointer-events-none absolute -left-40 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 opacity-60"
      fill="none"
    >
      <circle className="spin-slow" cx="300" cy="300" r="250" stroke="hsl(190 78% 62% / 0.35)" strokeWidth="1" strokeDasharray="3 12" />
      <circle className="spin-slow-rev" cx="300" cy="300" r="190" stroke="hsl(252 60% 70% / 0.3)" strokeWidth="1" strokeDasharray="50 18" />
    </svg>

    <div className="container-custom relative grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
      <Reveal>
        <h2 className="font-display text-4xl font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl">
          Ready to transform your business with custom software?
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-lg leading-relaxed text-[hsl(var(--ink-muted))]">
          Let's discuss your project requirements. Get a free consultation and discover how we
          can help you build the perfect solution.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button variant="accent" size="xl" className="btn-glow" asChild>
            <Link to="/contact">
              Get free consultation
              <ArrowRight className="!size-5" />
            </Link>
          </Button>
          <Button variant="onDark" size="xl" asChild>
            <a href={`tel:${SITE.phoneTel}`}>
              <Phone className="!size-5" />
              Call us now
            </a>
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTASection;
