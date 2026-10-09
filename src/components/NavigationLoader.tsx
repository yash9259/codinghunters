import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Thin progress line at the top of the screen on route change.
 * Replaces the full-screen spinner that covered the page for 800 ms on every
 * click. It never blocks content or clicks.
 */
const NavigationLoader = () => {
  const { pathname } = useLocation();
  const [tick, setTick] = useState(0);
  const isFirst = useRef(true);

  useEffect(() => {
    // The first render is the page already being there, not a navigation.
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setTick((t) => t + 1);
  }, [pathname]);

  if (tick === 0) return null;

  return (
    <div
      key={tick}
      aria-hidden="true"
      className="route-progress pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-[hsl(var(--glow-teal))]"
    />
  );
};

export default NavigationLoader;
