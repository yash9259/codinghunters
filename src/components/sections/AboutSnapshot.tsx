import { motion } from "framer-motion";
import { Lightbulb, DollarSign, Headphones, Target } from "lucide-react";

const AboutSnapshot = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "100% Custom Solutions",
      description: "Every project is built from scratch to match your exact business needs.",
    },
    {
      icon: DollarSign,
      title: "One-time Cost Model",
      description: "No recurring fees. Pay once and own your software forever.",
    },
    {
      icon: Headphones,
      title: "Post-launch Support",
      description: "We stay with you after delivery with dedicated support.",
    },
    {
      icon: Target,
      title: "Industry-focused",
      description: "Specialized solutions for healthcare, finance, and more.",
    },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Don't Just Build Software
          </h2>
          <p className="text-xl text-gradient font-semibold mb-4">
            We Solve Business Problems Using Technology
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CodingHunters is a professional software development agency providing
            end-to-end IT solutions for businesses, hospitals, clinics, finance
            companies, and startups.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 rounded-2xl bg-background border border-border card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
