import { type HTMLAttributes, type MouseEvent, type ReactNode } from "react";

interface SpotlightCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** "ink" for dark sections, "paper" (default) for light ones. */
  tone?: "paper" | "ink";
}

/** Card with a soft glow that follows the cursor (CSS vars --mx / --my). */
const SpotlightCard = ({ children, className = "", tone = "paper", onMouseMove, ...rest }: SpotlightCardProps) => {
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    onMouseMove?.(e);
  };

  return (
    <div
      {...rest}
      onMouseMove={handleMove}
      className={`spotlight ${tone === "ink" ? "spotlight-ink" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
