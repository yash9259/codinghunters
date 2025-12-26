import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DollarSign,
  Eye,
  ShieldCheck,
  Target,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: DollarSign,
    title: "One-time Cost Model",
    description:
      "No monthly subscriptions. Pay once and own your software forever.",
  },
  {
    icon: Eye,
    title: "No Hidden Charges",
    description:
      "Complete transparency in pricing. What you see is what you pay.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Secure Code",
    description:
      "Industry-standard coding practices with security as a priority.",
  },
  {
    icon: Target,
    title: "Business-focused Development",
    description:
      "We understand your business first, then build technology around it.",
  },
  {
    icon: HeartHandshake,
    title: "Reliable Support",
    description:
      "Post-delivery support and maintenance to keep your systems running.",
  },
];

const WhyUs = () => {
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
              Why Choose <span className="text-gradient">CodingHunters?</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're not just another software company. Here's what makes us
              different.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-background border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
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
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;