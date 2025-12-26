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
    subtitle: "SEO Keywords: Website Development Company, PHP Website Developer, Laravel Website Development",
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
    subtitle: "SEO Keywords: Android App Development Company, Mobile App Developers India",
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
    subtitle: "SEO Keywords: ERP Software Development, Custom Business Software India",
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
    subtitle: "SEO Keywords: Healthcare Software Development, Hospital Management System, Clinic Software India",
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
    subtitle: "SEO Keywords: Finance Software Development, FinTech Software Company, Loan Management Software",
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
    description:
      "Designs that are simple, modern, and conversion-focused.",
    features: [
      "Logo design",
      "Brand identity",
      "App & website UI",
      "Marketing creatives",
    ],
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
    color: "bg-teal-500/10 text-teal-600",
    borderColor: "border-teal-500/20",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive software solutions tailored to your industry and
              business needs. From web development to enterprise systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative h-full rounded-2xl bg-card border ${service.borderColor} p-6 card-hover scroll-mt-24 overflow-hidden`}
              >
                {/* Background gradient accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl -z-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-muted-foreground mb-4 italic line-clamp-2">
                    {service.subtitle}
                  </p>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {service.badges && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.badges.map((badge, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium whitespace-nowrap"
                        >
                          ✔ {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features Preview */}
                  <div className="mb-5">
                    <h4 className="font-semibold text-sm text-foreground mb-3">
                      {service.id === "erp" ? "Perfect for:" : 
                       service.id === "healthcare" || service.id === "finance" ? "Key Features:" :
                       "What We Build:"}
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-xs text-muted-foreground italic">
                          + {service.features.length - 3} more
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Technologies/Tags */}
                  {service.technologies && (
                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">
                        {service.id === "mobile" ? "Features:" :
                         service.id === "erp" ? "Industries:" :
                         service.id === "healthcare" || service.id === "finance" ? "Ideal For:" :
                         "Technologies:"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs text-muted-foreground font-medium">
                            +{service.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Service <span className="text-gradient">Details</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click on any service card above to explore full details, or scroll below for in-depth information.
            </p>
          </motion.div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 rounded-2xl bg-card border ${service.borderColor}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      {service.id === "erp" ? "Perfect for:" : 
                       service.id === "healthcare" || service.id === "finance" ? "Key Features:" :
                       "What We Build:"}
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-4">
                      {service.id === "mobile" ? "Features:" :
                       service.id === "erp" ? "Industries:" :
                       service.id === "healthcare" || service.id === "finance" ? "Ideal For:" :
                       "Technologies:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {service.badges && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-foreground mb-3">Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.badges.map((badge, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
                            >
                              ✔ {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;