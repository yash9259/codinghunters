import { motion, useScroll, useSpring } from "framer-motion";

/** Thin teal-to-violet bar at the very top that fills as you scroll. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[hsl(var(--glow-teal))] to-[hsl(var(--glow-violet))]"
    />
  );
};

export default ScrollProgress;
