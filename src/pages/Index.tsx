import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import AboutSnapshot from "@/components/sections/AboutSnapshot";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <h1 className="sr-only">Software Development Company in Bhuj, Kutch</h1>
      <section className="py-16 px-4 md:py-24 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Software Development Services in Bhuj, Kutch</h2>
          
          <p className="text-lg text-gray-600 mb-4">
            CodingHunters is a trusted software development company in Bhuj, Kutch,
            offering custom web development, mobile app development,
            ERP solutions, and business automation services.
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
        </div>
      </section>
      <AboutSnapshot />
      <ServicesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;