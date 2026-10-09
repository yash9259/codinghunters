import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { LOCATION_PAGES, SITE, HOME_FAQS, locationPath } from "@/seo/siteData";
import FaqList from "@/components/seo/FaqList";
import Reveal from "@/components/fx/Reveal";
import SpotlightCard from "@/components/fx/SpotlightCard";

/** Home-page block: crawlable internal links to every location page + quick facts + FAQ. */
const ServiceAreas = () => (
  <section className="section-padding bg-background">
    <div className="container-custom max-w-5xl">
      <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">
        Software company in Bhuj, serving Kutch, Gujarat and all of India
      </h2>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
        {SITE.name} is a custom software development company based in Bhuj, Kutch, Gujarat, founded by{" "}
        {SITE.founder}. We have delivered {SITE.stats.projects} projects for {SITE.stats.clients} clients, building websites,
        mobile apps, ERP and billing systems, healthcare software and finance software.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {LOCATION_PAGES.map((l, i) => (
          <Reveal key={l.slug} delay={(i % 3) * 80}>
            <SpotlightCard className="h-full !rounded-2xl">
              <Link to={locationPath(l)} className="group flex h-full items-start justify-between gap-4 p-5">
                <span>
                  <span className="block font-display text-xl font-semibold text-foreground">
                    {l.place}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-muted-foreground">{l.h1}</span>
                </span>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <h2 className="mb-6 mt-20 font-display text-2xl font-semibold text-foreground md:text-3xl">
        Quick answers
      </h2>
      <FaqList items={HOME_FAQS} />
    </div>
  </section>
);

export default ServiceAreas;
