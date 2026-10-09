import Marquee from "@/components/fx/Marquee";

const row1 = ["React", "Laravel", "PHP", "Node.js", "JavaScript", "Android", "MySQL", "Firebase"];
const row2 = ["REST APIs", "Payment gateways", "Git", "Bootstrap", "HTML", "CSS", "Admin dashboards", "Role-based access"];

const Pill = ({ label }: { label: string }) => (
  <span className="whitespace-nowrap rounded-full border border-[hsl(var(--ink-line))] bg-[hsl(var(--ink-raised)/0.7)] px-6 py-3 font-display text-lg font-medium text-[hsl(var(--ink-text))] transition-colors hover:border-[hsl(var(--glow-teal)/0.5)] hover:text-[hsl(var(--glow-teal))]">
    {label}
  </span>
);

/** Technologies we build with. Text is real, crawlable content. */
const TechMarquee = () => (
  <section className="surface-ink overflow-hidden py-14 md:py-20" aria-labelledby="stack-heading">
    <div className="container-custom mb-10">
      <h2 id="stack-heading" className="max-w-2xl font-display text-2xl font-semibold text-white md:text-4xl">
        Built on tools we use every day
      </h2>
    </div>
    <div className="space-y-4">
      <Marquee speed={45}>
        {row1.map((t) => (
          <Pill key={t} label={t} />
        ))}
      </Marquee>
      <Marquee speed={55} reverse>
        {row2.map((t) => (
          <Pill key={t} label={t} />
        ))}
      </Marquee>
    </div>
  </section>
);

export default TechMarquee;
