import { Code2, Smartphone, Database, ShieldCheck, Check } from "lucide-react";
import BowMark from "./BowMark";

const chips = [
  { icon: Code2, label: "React & Laravel", pos: "left-[-2%] top-[10%]", float: "float-y" },
  { icon: Smartphone, label: "Android apps", pos: "right-[-2%] top-[22%]", float: "float-y-2" },
  { icon: Database, label: "ERP & billing", pos: "left-[2%] bottom-[24%]", float: "float-y-3" },
  { icon: ShieldCheck, label: "Secure by design", pos: "right-[0%] bottom-[34%]", float: "float-y" },
];

const steps = ["Design approved", "Build tested", "Live on your domain"];

/** Decorative hero graphic: orbit rings around the brand mark, floating stack chips, delivery checklist. */
const HeroArt = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden="true">
    {/* orbit rings */}
    <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" fill="none">
      <defs>
        <radialGradient id="orb-core" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="hsl(190 78% 62%)" stopOpacity="0.28" />
          <stop offset="1" stopColor="hsl(252 60% 70%)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="hsl(190 78% 62%)" stopOpacity="0.7" />
          <stop offset="1" stopColor="hsl(252 60% 70%)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="300" r="250" fill="url(#orb-core)" />
      <circle cx="300" cy="300" r="170" stroke="hsl(0 0% 100% / 0.08)" />
      <circle className="spin-slow" cx="300" cy="300" r="225" stroke="url(#ring-grad)" strokeWidth="1.2" strokeDasharray="2 10" strokeLinecap="round" />
      <circle className="spin-slow-rev" cx="300" cy="300" r="282" stroke="url(#ring-grad)" strokeWidth="1" strokeDasharray="60 22 4 22" />
      <g className="spin-slow">
        <circle cx="525" cy="300" r="5" fill="hsl(190 78% 62%)" />
        <circle cx="525" cy="300" r="12" fill="hsl(190 78% 62% / 0.2)" />
      </g>
    </svg>

    {/* brand mark */}
    <div className="absolute inset-0 flex items-center justify-center">
      <BowMark className="h-auto w-[62%] drop-shadow-[0_0_40px_hsl(190_78%_62%/0.35)]" />
    </div>

    {/* floating stack chips */}
    {chips.map((c) => (
      <div key={c.label} className={`absolute ${c.pos} ${c.float}`}>
        <div className="glass flex items-center gap-2.5 rounded-full py-2 pl-2.5 pr-4 text-sm font-medium text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--glow-teal)/0.18)] text-[hsl(var(--glow-teal))]">
            <c.icon className="h-4 w-4" />
          </span>
          {c.label}
        </div>
      </div>
    ))}

    {/* delivery checklist */}
    <div className="glass absolute -bottom-3 left-1/2 w-[17rem] -translate-x-1/2 rounded-2xl p-4 sm:left-auto sm:right-2 sm:translate-x-0">
      <div className="mb-3 flex items-center gap-2 text-xs text-[hsl(var(--ink-muted))]">
        <span className="pulse-dot h-2 w-2 rounded-full bg-[hsl(var(--glow-teal))]" />
        Project delivery
      </div>
      <ul className="space-y-2">
        {steps.map((s, i) => (
          <li key={s} className="check-in flex items-center gap-2.5 text-sm text-white" style={{ ["--d" as string]: `${1500 + i * 450}ms` }}>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--glow-teal))] text-[hsl(var(--ink))]">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default HeroArt;
