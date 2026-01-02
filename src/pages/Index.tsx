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
      <section className="py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leading Software Development Company in Bhuj</h2>
          
          <p className="text-lg text-gray-600 mb-4">
            CodingHunters is a trusted software development company in Bhuj, Kutch, Gujarat.
            We provide custom software development, web development, mobile app development,
            ERP systems, and business automation solutions for startups and enterprises.
          </p>
          
          <p className="text-lg text-gray-600 mb-4">
            We work with startups, local businesses, and enterprises in Bhuj and across Kutch,
            delivering scalable, secure, and cost-effective software solutions
            tailored to business needs.
          </p>
          
          <p className="text-lg text-gray-600">
            If you are looking for a reliable software company in Bhuj,
            CodingHunters provides end-to-end software development services
            with modern technologies and industry best practices.
          </p>
          
          <div className="mt-6">
            <a 
              href="/software-development-company-in-bhuj.html" 
              className="text-primary hover:text-primary/80 font-medium underline transition-colors"
            >
              Software Development Company in Bhuj
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: About CodingHunters */}
      <section className="py-16 px-4 md:py-24 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            CodingHunters is a trusted software development company based in Bhuj, Gujarat, helping businesses grow with modern, scalable, and secure digital solutions. We work closely with startups, SMEs, and enterprises to design software that simplifies operations, improves efficiency, and increases profitability.
          </p>
        </div>
      </section>

      {/* Section 2: Our Software Development Services */}
      <section className="py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Our Software Development Services</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Website Development</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We develop fast, responsive, and SEO-optimized websites using technologies like PHP, Laravel, React, and WordPress. Our websites are designed to generate leads, load quickly, and perform well on all devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Mobile App Development</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team builds Android and cross-platform mobile applications for businesses, startups, and service providers. From booking apps to business automation tools, we deliver scalable and user-friendly mobile solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">ERP & Custom Software Solutions</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We create custom ERP, CRM, billing, HR, loan management, and business management software tailored to your workflow. Our solutions reduce manual work and give you full control over your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose CodingHunters */}
      <section className="py-16 px-4 md:py-24 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Why Choose CodingHunters</h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">•</span>
              <span className="text-lg text-gray-600">Bhuj-based local software development company</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">•</span>
              <span className="text-lg text-gray-600">Affordable and transparent pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">•</span>
              <span className="text-lg text-gray-600">Custom solutions designed for your business</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">•</span>
              <span className="text-lg text-gray-600">Fast support and long-term maintenance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">•</span>
              <span className="text-lg text-gray-600">Experience across multiple industries</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Industries We Serve */}
      <section className="py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Industries We Serve</h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            CodingHunters provides software solutions for finance companies, travel agencies, real estate firms, healthcare providers, retail stores, recruitment agencies, and manufacturing businesses. Our industry-focused approach ensures better results and faster implementation.
          </p>
        </div>
      </section>

      {/* Section 5: Local SEO Power Section */}
      <section className="py-16 px-4 md:py-24 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Serving Businesses Across Bhuj & Kutch</h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            As a software development company in Bhuj, we proudly serve clients across Kutch, including Bhuj, Anjar, Mandvi, Gandhidham, and nearby regions. Our local presence allows us to understand regional business challenges and deliver practical, result-driven software solutions.
          </p>
        </div>
      </section>

      <AboutSnapshot />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;