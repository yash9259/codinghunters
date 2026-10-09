import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NavigationLoader from "./components/NavigationLoader";
import RouteSeo from "./components/seo/RouteSeo";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Portfolio from "./pages/Portfolio";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Faq from "./pages/Faq";
import LocationPage from "./pages/LocationPage";
import { LOCATION_PAGES } from "./seo/siteData";

/** Shared by the browser (App.tsx) and the build-time prerenderer (entry-server.tsx). */
const AppRoutes = () => (
  <>
    <ScrollToTop />
    <NavigationLoader />
    <RouteSeo />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {LOCATION_PAGES.map((l) => (
        <Route key={l.slug} path={`/${l.slug}`} element={<LocationPage data={l} />} />
      ))}
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default AppRoutes;
