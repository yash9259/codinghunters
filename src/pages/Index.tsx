import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSnapshot />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;