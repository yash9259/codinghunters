/**
 * The logo's bracket-bow with the arrow line, drawn large.
 * Pure SVG + CSS keyframes (see .draw-arrow in index.css), so it renders the
 * same on the server and the client and respects prefers-reduced-motion.
 */
const BowMark = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 560 360"
    fill="none"
    role="img"
    aria-label="CodingHunters mark: curly brackets drawn as a bow with an arrow"
    className={className}
  >
    <defs>
      <linearGradient id="bow-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" style={{ stopColor: "hsl(var(--glow-teal))" }} />
        <stop offset="1" style={{ stopColor: "hsl(var(--glow-violet))" }} />
      </linearGradient>
      {/* userSpaceOnUse: a perfectly horizontal line has a zero-height bbox, which makes objectBoundingBox gradients render nothing */}
      <linearGradient id="arrow-grad" gradientUnits="userSpaceOnUse" x1="40" y1="180" x2="514" y2="180">
        <stop offset="0" style={{ stopColor: "hsl(var(--glow-teal))", stopOpacity: 0.25 }} />
        <stop offset="1" style={{ stopColor: "hsl(0 0% 100%)" }} />
      </linearGradient>
    </defs>

    <g
      stroke="url(#bow-grad)"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        className="bracket-in"
        style={{ ["--from-x" as string]: "-24px" }}
        d="M150 36 L120 36 L58 150 Q52 176 28 180 Q52 184 58 210 L120 324 L150 324"
      />
      <path
        className="bracket-in"
        style={{ ["--from-x" as string]: "24px" }}
        d="M410 36 L440 36 L502 150 Q508 176 532 180 Q508 184 502 210 L440 324 L410 324"
      />
    </g>

    {/* thin inner strokes, as in the logo */}
    <g stroke="url(#bow-grad)" strokeWidth="3" strokeLinecap="round" opacity="0.55">
      <path className="bracket-in" d="M122 72 L96 126" />
      <path className="bracket-in" d="M122 288 L96 234" />
      <path className="bracket-in" d="M438 72 L464 126" />
      <path className="bracket-in" d="M438 288 L464 234" />
    </g>

    {/* the arrow: line draws left to right, head lands last */}
    <path
      className="draw-arrow"
      pathLength={1}
      d="M40 180 H514"
      stroke="url(#arrow-grad)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      className="arrow-head"
      d="M498 164 L520 180 L498 196"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BowMark;
