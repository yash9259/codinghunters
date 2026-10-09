import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import AppRoutes from "./AppRoutes";

const queryClient = new QueryClient();

// Show the intro loader only once per browser session. It used to block every
// full page load for 2.5s, which hurts Core Web Vitals (LCP) and rankings.
const shouldShowLoader = () => {
  try {
    return !sessionStorage.getItem("ch_intro_seen");
  } catch {
    return true;
  }
};

const App = () => {
  const [loading, setLoading] = useState(shouldShowLoader);

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("ch_intro_seen", "1");
      } catch {
        /* ignore */
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <BrowserRouter key="content">
              <AppRoutes />
            </BrowserRouter>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
