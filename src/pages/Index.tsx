import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => {

  useEffect(() => {
    // Add LocalBusiness schema to head for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "CodingHunters",
      url: "https://www.codinghunters.in",
      logo: "https://www.codinghunters.in/logo.png",
      description:
        "CodingHunters is a software development company in Bhuj, Gujarat providing web development, mobile app development, ERP and custom software solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhuj",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Kutch, Gujarat",
      },
      sameAs: [
        "https://www.linkedin.com/company/codinghunters",
        "https://www.instagram.com/cod.inghunters",
        "https://x.com/CodingHunters",
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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