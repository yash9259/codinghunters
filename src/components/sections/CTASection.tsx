import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-foreground relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6">
            Ready to Transform Your Business with{" "}
            <span className="text-accent">Custom Software?</span>
          </h2>
          <p className="text-background/70 text-lg mb-10">
            Let's discuss your project requirements. Get a free consultation and
            discover how we can help you build the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl" asChild>
              <Link to="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              className="bg-background/10 text-background border border-background/20 hover:bg-background/20"
              asChild
            >
              <a href="tel:+919106433706">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
