import { Lightbulb, DollarSign, Headphones, Target } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import SpotlightCard from "@/components/fx/SpotlightCard";

const highlights = [
  {
    icon: Lightbulb,
    title: "100% custom solutions",
    description: "Every project is built from scratch to match your exact business needs.",
  },
  {
    icon: DollarSign,
    title: "One-time cost model",
    description: "No recurring fees. Pay once and own your software forever.",
  },
  {
    icon: Headphones,
    title: "Post-launch support",
    description: "We stay with you after delivery with dedicated support.",
  },
  {
    icon: Target,
    title: "Industry-focused",
    description: "Specialized solutions for healthcare, finance, and more.",
  },
];

const AboutSnapshot = () => (
  <section className="section-padding relative overflow-hidden bg-card">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[hsl(var(--glow-teal)/0.12)] blur-3xl"
    />
    <div className="container-custom relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <Reveal className="lg:sticky lg:top-28 lg:self-start">
        <h2 className="font-display text-3xl font-semibold leading-[1.1] text-foreground md:text-5xl">
          We don't just build software. We solve business problems using technology.
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          CodingHunters is a professional software development agency providing
          end-to-end IT solutions for businesses, hospitals, clinics, finance
          companies, and startups.
        </p>
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2">
        {highlights.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90}>
            <SpotlightCard className="h-full p-7">
              <span className="bg-gradient-primary flex h-12 w-12 items-center justify-center rounded-xl text-white">
                <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSnapshot;
