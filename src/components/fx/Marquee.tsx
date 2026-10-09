import { type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Seconds for one full loop. */
  speed?: number;
  reverse?: boolean;
  className?: string;
}

/** Infinite horizontal ticker. Pauses on hover; the duplicate set is hidden from assistive tech. */
const Marquee = ({ children, speed = 40, reverse = false, className = "" }: MarqueeProps) => (
  <div className={`marquee ${className}`} style={{ ["--marquee-speed" as string]: `${speed}s` }}>
    <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
      <div className="marquee-group">{children}</div>
      <div className="marquee-group" aria-hidden="true">
        {children}
      </div>
    </div>
  </div>
);

export default Marquee;
