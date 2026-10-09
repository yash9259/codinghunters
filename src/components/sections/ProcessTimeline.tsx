import { Compass, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";
import Reveal from "@/components/fx/Reveal";
import SpotlightCard from "@/components/fx/SpotlightCard";

// This is a real sequence, so the step numbers carry information.
const steps = [
  { icon: Compass, title: "Discover", text: "We learn your workflow, users and goals, then agree scope and cost up front." },
  { icon: PenTool, title: "Design", text: "Screens and flows you can review and approve before any code is written." },
  { icon: Code2, title: "Build", text: "Clean, tested code with regular demos so you see progress, not promises." },
  { icon: Rocket, title: "Launch", text: "Deployment on your domain and servers, with handover of the full source code." },
  { icon: LifeBuoy, title: "Support", text: "Bug fixes, upgrades and guidance after go-live, as your business grows." },
];

const ProcessTimeline = () => (
  <section className="surface-ink section-padding" aria-labelledby="process-heading">
    <div className="grain" aria-hidden="true" />
    <div className="container-custom">
      <Reveal className="mb-14 max-w-2xl">
        <h2 id="process-heading" className="font-display text-3xl font-semibold text-white md:text-5xl">
          From first call to live product in five steps
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[hsl(var(--ink-muted))]">
          A clear process means no surprises on scope, timeline or cost.
        </p>
      </Reveal>

      <div className="relative">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 110}>
              <SpotlightCard tone="ink" className="h-full p-6">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[hsl(var(--glow-teal)/0.5)] bg-[hsl(var(--ink))] text-[hsl(var(--glow-teal))] shadow-[0_0_24px_-4px_hsl(var(--glow-teal)/0.6)]">
                  <s.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                </span>
                <p className="text-sm font-medium text-[hsl(var(--glow-teal))]">Step {i + 1} of {steps.length}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-[hsl(var(--ink-muted))]">{s.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
