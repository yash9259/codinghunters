import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Plane,
  Stethoscope,
  Wallet,
  Building2,
  Cog,
  ArrowRight,
} from "lucide-react";

const portfolioItems = [
  {
    icon: Plane,
    title: "Travel Agencies",
    description: "Booking systems, travel management, and customer portals.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Providers",
    description: "Hospital management, clinic systems, and patient portals.",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Wallet,
    title: "Finance Businesses",
    description: "Loan management, EMI tracking, and financial dashboards.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Building2,
    title: "ERP & Billing Systems",
    description: "Custom ERP solutions for inventory, billing, and operations.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: Cog,
    title: "Automation Tools",
    description: "Workflow automation and business process optimization.",
    color: "bg-teal-500/10 text-teal-600",
  },
];

const Portfolio = () => {
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
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We've built solutions across diverse industries. Here's a glimpse
              of our work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-background border border-border card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center p-8 rounded-2xl bg-muted"
          >
            <p className="text-lg text-foreground font-medium mb-4">
              📌 Live demos available on request
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;