import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Building2,
  Stethoscope,
  Wallet,
  Palette,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "website",
    icon: Globe,
    title: "Website Development Services",
    subtitle:
      "SEO Keywords: Website Development Company, PHP Website Developer, Laravel Website Development",
    description:
      "We design and develop high-performance business websites that convert visitors into customers.",
    features: [
      "Business & corporate websites",
      "Portfolio websites",
      "Travel & booking websites",
      "Admin dashboards",
      "Laravel-based dynamic websites",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "PHP", "Laravel", "React"],
    color: "bg-blue-500/10 text-blue-600",
    borderColor: "border-blue-500/20",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle:
      "SEO Keywords: Android App Development Company, Mobile App Developers India",
    description:
      "We build secure, fast, and scalable mobile apps for Android and hybrid platforms.",
    features: [
      "Business apps",
      "Booking & service apps",
      "Customer & vendor apps",
      "Admin management apps",
    ],
    technologies: [
      "User authentication",
      "Payment integration",
      "Push notifications",
      "Admin panels",
    ],
    color: "bg-green-500/10 text-green-600",
    borderColor: "border-green-500/20",
  },
  {
    id: "erp",
    icon: Building2,
    title: "ERP & Custom Business Software",
    subtitle:
      "SEO Keywords: ERP Software Development, Custom Business Software India",
    description:
      "Automate your operations with custom ERP solutions designed exactly for your workflow.",
    features: [
      "Billing & invoicing",
      "Inventory management",
      "Customer & vendor management",
      "Reports & analytics",
      "Role-based access",
    ],
    technologies: ["Retail businesses", "Manufacturing", "Service providers"],
    color: "bg-purple-500/10 text-purple-600",
    borderColor: "border-purple-500/20",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    title: "Healthcare Software Solutions",
    subtitle:
      "SEO Keywords: Healthcare Software Development, Hospital Management System, Clinic Software India",
    description:
      "We develop secure and compliant healthcare software for hospitals, clinics, labs, and healthcare startups.",
    features: [
      "Hospital Management System (HMS)",
      "Clinic Management Software",
      "Patient Management System",
      "Appointment Booking System",
      "Electronic Medical Records (EMR)",
      "Billing & Insurance Management",
      "Pharmacy Management System",
    ],
    technologies: [
      "Patient registration & history",
      "Doctor scheduling",
      "Digital prescriptions",
      "Secure data storage",
      "Reports & analytics",
    ],
    badges: ["HIPAA-style data security", "Scalable & role-based access"],
    color: "bg-red-500/10 text-red-600",
    borderColor: "border-red-500/20",
  },
  {
    id: "finance",
    icon: Wallet,
    title: "Finance & FinTech Software Solutions",
    subtitle:
      "SEO Keywords: Finance Software Development, FinTech Software Company, Loan Management Software",
    description:
      "We provide secure and accurate financial software solutions for finance companies, NBFCs, lenders, and startups.",
    features: [
      "Loan Management System",
      "EMI & Repayment Tracking",
      "Customer Ledger Software",
      "Digital Billing Systems",
      "Accounting & Finance Dashboards",
      "Payment Gateway Integration",
      "FinTech Admin Panels",
    ],
    technologies: [
      "Finance companies",
      "NBFCs",
      "Loan agents",
      "Billing & accounting firms",
    ],
    badges: ["High security", "Data accuracy", "Role-based approvals"],
    color: "bg-amber-500/10 text-amber-600",
    borderColor: "border-amber-500/20",
  },
  {
    id: "uiux",
    icon: Palette,
    title: "UI/UX & Branding Services",
    subtitle: "SEO Keywords: UI UX Design Company India, Branding Agency",
    description: "Designs that are simple, modern, and conversion-focused.",
    features: [
      "Logo design",
      "Brand identity",
      "App & website UI",
      "Marketing creatives",
    ],
    technologies: [], // ✅ FIX
    color: "bg-pink-500/10 text-pink-600",
    borderColor: "border-pink-500/20",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Software Maintenance & Support",
    subtitle: "SEO Keywords: Software Maintenance Services",
    description: "We stay with you after delivery.",
    features: [
      "Bug fixes",
      "Performance optimization",
      "Feature upgrades",
      "Server & deployment support",
    ],
    technologies: [], // ✅ FIX
    color: "bg-teal-500/10 text-teal-600",
    borderColor: "border-teal-500/20",
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-muted-foreground">
            Comprehensive software solutions tailored to your business needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${service.borderColor}`}
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {Array.isArray(service.technologies) &&
                service.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-muted rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Services;

