import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Building2,
  Stethoscope,
  Wallet,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import SpotlightCard from "@/components/fx/SpotlightCard";

type GraphicKey = "web" | "mobile" | "erp" | "health" | "finance";

const services: {
  icon: typeof Globe;
  title: string;
  description: string;
  href: string;
  graphic: GraphicKey;
  span: string;
}[] = [
  {
    icon: Globe,
    title: "Website development",
    description:
      "High-performance business websites built with Laravel, React, and modern technologies.",
    href: "/services#website",
    graphic: "web",
    span: "lg:col-span-4",
  },
  {
    icon: Smartphone,
    title: "Mobile app development",
    description: "Secure, fast, and scalable mobile apps for Android and hybrid platforms.",
    href: "/services#mobile",
    graphic: "mobile",
    span: "lg:col-span-2",
  },
  {
    icon: Building2,
    title: "ERP & automation",
    description:
      "Custom ERP solutions designed exactly for your workflow and business operations.",
    href: "/services#erp",
    graphic: "erp",
    span: "lg:col-span-2",
  },
  {
    icon: Stethoscope,
    title: "Healthcare software",
    description: "Secure and compliant healthcare software for hospitals, clinics, and labs.",
    href: "/services#healthcare",
    graphic: "health",
    span: "lg:col-span-2",
  },
  {
    icon: Wallet,
    title: "Finance & FinTech",
    description: "Secure financial software solutions for NBFCs, lenders, and finance companies.",
    href: "/services#finance",
    graphic: "finance",
    span: "lg:col-span-2",
  },
];

/** Small decorative illustrations, one per service. Pure SVG/CSS, hidden from assistive tech. */
const Graphic = ({ type }: { type: GraphicKey }) => {
  const stroke = "hsl(var(--primary))";
  switch (type) {
    case "web":
      return (
        <div className="relative h-32 w-full overflow-hidden rounded-xl border border-border bg-background p-3 shadow-sm">
          <div className="mb-3 flex gap-1.5">
            {["bg-red-400/70", "bg-amber-400/70", "bg-emerald-400/70"].map((c) => (
              <span key={c} className={`h-2 w-2 rounded-full ${c}`} />
            ))}
            <span className="ml-3 h-2 flex-1 rounded-full bg-muted" />
          </div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-3">
            <div className="space-y-2">
              <span className="block h-3 w-4/5 rounded bg-primary/80" />
              <span className="block h-2 w-full rounded bg-muted" />
              <span className="block h-2 w-3/5 rounded bg-muted" />
              <span className="mt-3 block h-5 w-16 rounded-full bg-[hsl(var(--glow-teal))]" />
            </div>
            <span className="gradient-shift block h-16 rounded-lg bg-gradient-to-br from-[hsl(var(--glow-teal))] via-[hsl(var(--glow-violet))] to-[hsl(var(--primary))]" />
          </div>
        </div>
      );
    case "mobile":
      return (
        <div className="flex h-32 items-end justify-center overflow-hidden">
          <div className="float-y relative h-36 w-20 rounded-[1.4rem] border-2 border-primary/70 bg-background p-2 pt-3">
            <span className="mx-auto mb-2 block h-1 w-6 rounded-full bg-primary/40" />
            <span className="mb-1.5 block h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--glow-teal))] to-[hsl(var(--glow-violet))]" />
            <span className="mb-1 block h-1.5 rounded bg-muted" />
            <span className="block h-1.5 w-2/3 rounded bg-muted" />
          </div>
        </div>
      );
    case "erp":
      return (
        <svg viewBox="0 0 160 80" className="h-24 w-full" fill="none" aria-hidden="true">
          {[22, 40, 30, 58, 46, 68].map((h, i) => (
            <rect key={i} x={10 + i * 25} y={76 - h} width="16" height={h} rx="3" fill={stroke} opacity={0.25 + i * 0.12} />
          ))}
        </svg>
      );
    case "health":
      return (
        <svg viewBox="0 0 160 80" className="h-24 w-full" fill="none" aria-hidden="true">
          <path
            className="draw-line"
            pathLength={1}
            d="M0 44 H44 L54 22 L68 64 L80 12 L92 52 L100 44 H160"
            stroke="hsl(var(--glow-teal))"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "finance":
      return (
        <svg viewBox="0 0 160 80" className="h-24 w-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="fin-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="hsl(252 60% 60%)" stopOpacity="0.35" />
              <stop offset="1" stopColor="hsl(252 60% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 66 L28 54 L52 58 L82 34 L110 40 L160 10 V80 H0 Z" fill="url(#fin-fill)" />
          <path className="draw-line" pathLength={1} d="M0 66 L28 54 L52 58 L82 34 L110 40 L160 10" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};

const ServicesPreview = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[hsl(var(--glow-violet)/0.12)] blur-3xl"
    />
    <div className="container-custom relative">
      <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-5xl">
            Our services
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Comprehensive software solutions tailored to your industry and business needs.
          </p>
        </div>
        <Button variant="heroOutline" size="lg" asChild className="self-start md:self-auto">
          <Link to="/services">
            View all services
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((service, i) => (
          <Reveal as="li" key={service.title} delay={i * 80} className={service.span}>
            <SpotlightCard className="h-full">
              <Link to={service.href} className="group flex h-full flex-col justify-between gap-8 p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-gradient-primary flex h-12 w-12 items-center justify-center rounded-xl text-white">
                    <service.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div aria-hidden="true">
                  <Graphic type={service.graphic} />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default ServicesPreview;
