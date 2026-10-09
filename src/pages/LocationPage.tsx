import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import FaqList from "@/components/seo/FaqList";
import {
  LocationPageData,
  LOCATION_PAGES,
  SERVICES,
  SITE,
  locationPath,
} from "@/seo/siteData";

const steps = [
  ["Free consultation", "We listen to your goals, users and current process."],
  ["Written scope & quotation", "Features, milestones, timeline and cost, in writing before work starts."],
  ["Design & wireframes", "You approve screens and flows before development."],
  ["Build in milestones", "Working demos at each milestone so there are no surprises."],
  ["Launch & support", "Deployment, training and ongoing maintenance."],
];

const LocationPage = ({ data }: { data: LocationPageData }) => {
  const others = LOCATION_PAGES.filter((l) => l.slug !== data.slug);

  return (
    <Layout>
      <section className="pt-32 pb-12 bg-gradient-hero">
        <div className="container-custom max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Home</Link> <span aria-hidden>/</span>{" "}
            <span>{data.h1}</span>
          </nav>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <MapPin className="w-4 h-4" /> {data.eyebrow}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-4 mb-6 leading-tight">
            {data.h1}
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            {data.answer}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp {SITE.whatsappDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-custom max-w-4xl space-y-4 text-muted-foreground text-lg leading-relaxed">
          {data.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
            Software development services in {data.place}
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                to={`/services#${s.id}`}
                className="block rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">{data.localContextTitle}</h2>
          <ul className="space-y-3">
            {data.localContext.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">How we work with {data.place} clients</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">{data.workModel}</p>
          <ol className="space-y-4">
            {steps.map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{t}</h3>
                  <p className="text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-4">CodingHunters at a glance</h2>
          <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground">
            <div><dt className="font-semibold text-foreground inline">Company: </dt><dd className="inline">{SITE.name}</dd></div>
            <div><dt className="font-semibold text-foreground inline">Founder: </dt><dd className="inline">{SITE.founder}</dd></div>
            <div><dt className="font-semibold text-foreground inline">Location: </dt><dd className="inline">Bhuj, Kutch, Gujarat, India</dd></div>
            <div><dt className="font-semibold text-foreground inline">Experience: </dt><dd className="inline">{SITE.stats.years} years</dd></div>
            <div><dt className="font-semibold text-foreground inline">Delivered: </dt><dd className="inline">{SITE.stats.projects} projects for {SITE.stats.clients} clients</dd></div>
            <div><dt className="font-semibold text-foreground inline">Contact: </dt><dd className="inline"><a className="text-primary underline" href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> · <a className="text-primary underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
          </dl>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Frequently asked questions about software development in {data.place}
          </h2>
          <FaqList items={data.faqs} />
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-3">Areas we serve</h2>
          <p className="text-muted-foreground mb-6">{data.serveAreas.join(" · ")}</p>
          <h3 className="font-semibold text-foreground mb-3">Also see</h3>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={locationPath(o)}
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
              >
                {o.navLabel} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
            <Link
              to="/faq"
              className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
            >
              All FAQs <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
