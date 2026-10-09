import { motion } from "framer-motion";
import BrandLogo from "@/components/layout/BrandLogo";

/** Shown once per browser session for ~1.2 s (see App.tsx). */
const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="surface-ink fixed inset-0 z-[70] flex items-center justify-center"
    role="status"
    aria-label="Loading CodingHunters"
  >
    <div className="flex flex-col items-center gap-8">
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <BrandLogo className="w-44" />
      </motion.div>
      <div className="h-px w-32 overflow-hidden bg-[hsl(var(--ink-line))]">
        <div className="load-sweep h-full w-2/5 bg-[hsl(var(--glow-teal))]" />
      </div>
    </div>
  </motion.div>
);

export default LoadingScreen;
