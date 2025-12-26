import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const Hero = () => {
  const features = [
    "100% Custom Solutions",
    "One-time Cost Model",
    "Post-launch Support",
    "Industry-focused Development",
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Trusted by Startups & Businesses Across India
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Custom Software, Web &{" "}
              <span className="text-gradient">App Development</span> Company
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              CodingHunters helps businesses grow with secure, scalable, and
              affordable software solutions including web development, mobile
              apps, ERP systems, healthcare software, and finance automation
              tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">Request Demo</Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                    <div className="h-4 bg-primary/20 rounded w-5/6" />
                    <div className="h-4 bg-muted rounded w-2/3" />
                    <div className="h-4 bg-accent/20 rounded w-3/4" />
                  </div>
                  <div className="pt-4 flex gap-2">
                    <div className="h-10 bg-gradient-primary rounded-lg flex-1" />
                    <div className="h-10 bg-muted rounded-lg w-20" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-lg p-4 border border-border animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Secure Code
                    </p>
                    <p className="text-xs text-muted-foreground">
                      100% Clean
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-8 bg-card rounded-xl shadow-lg p-4 border border-border animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      50+ Projects
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
