import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Building2,
  Stethoscope,
  Wallet,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance business websites built with Laravel, React, and modern technologies.",
    color: "bg-blue-500/10 text-blue-600",
    href: "/services#website",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Secure, fast, and scalable mobile apps for Android and hybrid platforms.",
    color: "bg-green-500/10 text-green-600",
    href: "/services#mobile",
  },
  {
    icon: Building2,
    title: "ERP & Automation",
    description:
      "Custom ERP solutions designed exactly for your workflow and business operations.",
    color: "bg-purple-500/10 text-purple-600",
    href: "/services#erp",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Software",
    description:
      "Secure and compliant healthcare software for hospitals, clinics, and labs.",
    color: "bg-red-500/10 text-red-600",
    href: "/services#healthcare",
  },
  {
    icon: Wallet,
    title: "Finance & FinTech",
    description:
      "Secure financial software solutions for NBFCs, lenders, and finance companies.",
    color: "bg-amber-500/10 text-amber-600",
    href: "/services#finance",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions tailored to your industry and
            business needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={service.href}
                className="block group p-6 rounded-2xl bg-card border border-border card-hover h-full"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
