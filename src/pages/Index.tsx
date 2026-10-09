import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TechMarquee from "@/components/sections/TechMarquee";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ServiceAreas from "@/components/sections/ServiceAreas";
import CTASection from "@/components/sections/CTASection";

// SEO tags and JSON-LD for this page live in src/seo (see pageMeta.ts).
const Index = () => (
  <Layout>
    <Hero />
    <TechMarquee />
    <AboutSnapshot />
    <ServicesPreview />
    <ProcessTimeline />
    <ServiceAreas />
    <CTASection />
  </Layout>
);

export default Index;
