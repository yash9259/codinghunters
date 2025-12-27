import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Wallet,
  Plane,
  Store,
  Rocket,
  Code2,
  MessageSquare,
  Shield,
  TrendingUp,
  Heart,
  Users,
  Award,
  Clock,
  Zap,
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered", icon: Rocket },
    { value: "30+", label: "Happy Clients", icon: Users },
    { value: "5+", label: "Years Experience", icon: Award },
    { value: "24/7", label: "Support Available", icon: Clock },
  ];

  const expertise = [
    "Website & Web Application Development",
    "Mobile App Development (Android & Hybrid)",
    "ERP & Business Automation Systems",
    "Healthcare Software Solutions",
    "Finance & FinTech Software Development",
    "UI/UX Design & Branding",
    "Long-term Software Maintenance & Support",
  ];

  const challenges = [
    "Software that doesn't match their workflow",
    "Hidden monthly or yearly costs",
    "No support after project delivery",
    "Overly complex systems",
  ];

  const solutions = [
    "100% custom development",
    "One-time cost model (no forced subscriptions)",
    "Clear timelines & transparent pricing",
    "Post-launch support",
  ];

  const developmentProcess = [
    { step: "Discovery", desc: "Understanding your business & requirements" },
    { step: "Planning", desc: "System architecture & UI/UX design" },
    { step: "Development", desc: "Clean, maintainable code implementation" },
    { step: "Testing", desc: "Quality assurance & optimization" },
    { step: "Deployment", desc: "Launch & training" },
    { step: "Support", desc: "Ongoing maintenance & upgrades" },
  ];

  const industries = [
    { icon: Stethoscope, label: "Healthcare", sublabel: "Hospitals, Clinics, Labs", color: "bg-red-500" },
    { icon: Wallet, label: "Finance", sublabel: "NBFCs & FinTech", color: "bg-amber-500" },
    { icon: Plane, label: "Travel", sublabel: "Transport & Booking", color: "bg-blue-500" },
    { icon: Store, label: "Retail", sublabel: "Billing & Commerce", color: "bg-purple-500" },
    { icon: Rocket, label: "Startups", sublabel: "Agencies & SMEs", color: "bg-teal-500" },
  ];

  const differentiators = [
    { icon: Code2, title: "Custom-built Software", desc: "No templates, 100% tailored" },
    { icon: Wallet, title: "One-time Pricing", desc: "No recurring subscriptions" },
    { icon: Target, title: "Business-focused", desc: "Solutions that solve real problems" },
    { icon: Shield, title: "Secure Architecture", desc: "Enterprise-grade security" },
    { icon: MessageSquare, title: "Direct Communication", desc: "Talk directly with developers" },
    { icon: Zap, title: "Long-term Support", desc: "We're here after delivery" },
  ];

  const commitments = [
    { icon: Heart, label: "Quality over quantity" },
    { icon: MessageSquare, label: "Honest timelines" },
    { icon: Code2, label: "Clean and secure code" },
    { icon: TrendingUp, label: "Continuous improvement" },
  ];

  const leadershipHighlights = [
    {
      title: "100% custom software development",
      desc: "No templates — every build is designed around real business workflows.",
    },
    {
      title: "One-time cost solutions",
      desc: "No forced subscriptions or hidden fees; we design for clarity and ROI.",
    },
    {
      title: "Clean, maintainable, and scalable code",
      desc: "Secure foundations that stay reliable as your business grows.",
    },
    {
      title: "Long-term support and improvement",
      desc: "Transparent partnership with continuous enhancements after launch.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6"
            >
              About CodingHunters
            </motion.span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Custom Software Development{" "}
              <span className="text-accent">Company in Bhuj-Kutchh</span>
            </h1>
            <p className="text-background/70 text-lg md:text-xl max-w-2xl mx-auto">
              Building reliable, scalable, and cost-effective software solutions
              that transform businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border relative -mt-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-2xl bg-background border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                CodingHunters is a professional software development company in
                Bhuj-Kutchh delivering custom web applications, mobile apps, ERP
                systems, healthcare software, and finance software solutions for
                businesses of all sizes.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We help startups, SMEs, and enterprises digitize operations,
                automate workflows, and scale efficiently using reliable and
                secure technology.
              </p>
              <div className="p-5 rounded-xl bg-gradient-primary">
                <p className="text-primary-foreground font-medium text-lg">
                  Our focus is simple: Build software that actually solves
                  business problems.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Code2 className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">Maintainable & scalable</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Shield className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Secure</h4>
                    <p className="text-sm text-muted-foreground">Enterprise-grade security</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Zap className="w-8 h-8 text-amber-500 mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">On-time, every time</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <Users className="w-8 h-8 text-green-500 mb-3" />
                    <h4 className="font-semibold text-foreground mb-1">Dedicated Team</h4>
                    <p className="text-sm text-muted-foreground">Expert developers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              CodingHunters is based in Bhuj, Kutch and provides software development services
              to businesses across Gujarat and India.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Core Expertise
            </h2>
            <p className="text-muted-foreground">
              We design and develop tailor-made software solutions instead of
              generic, one-size-fits-all products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-gradient-primary text-primary-foreground relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Our Mission
                </h3>
                <p className="opacity-90 leading-relaxed mb-6">
                  To empower businesses with cost-effective, custom-built digital
                  solutions that improve productivity, accuracy, and customer
                  experience.
                </p>
                <div className="space-y-2">
                  <p className="font-medium">We eliminate:</p>
                  <ul className="space-y-1 opacity-90">
                    <li>• Manual processes</li>
                    <li>• Expensive subscription-based tools</li>
                    <li>• Poor-quality software support</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To become a trusted technology partner for businesses across
                  Bhuj-Kutchh and global markets by delivering excellence in every
                  project.
                </p>
                <div className="space-y-2">
                  <p className="font-medium text-foreground">We deliver:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• High-quality software</li>
                    <li>• Honest communication</li>
                    <li>• Long-term value</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why We Exist</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Solving Real Business Challenges
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20"
            >
              <h4 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">✗</span>
                Common Challenges
              </h4>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive text-sm flex-shrink-0 mt-0.5">!</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-accent/5 border border-accent/20"
            >
              <h4 className="font-display font-bold text-xl text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">✓</span>
                Our Solutions
              </h4>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Leadership Behind CodingHunters
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Founded and led by Yash Thakkar, CodingHunters was created to replace rigid, expensive,
              and inefficient systems with custom-built, scalable, and reliable software designed around real business needs.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                <Lightbulb className="w-4 h-4" />
                Business-first mindset
              </div>
              <p className="text-muted-foreground leading-relaxed">
                With hands-on experience across custom software development, web applications, ERP systems,
                healthcare platforms, and finance automation, Yash brings a practical approach focused on deep workflow
                understanding and translating it into secure, easy-to-use, and future-ready digital systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Under this leadership, we follow a quality-first and transparency-driven development process that keeps you
                close to decisions and outcomes.
              </p>
              <div className="p-5 rounded-xl bg-card border border-border">
                <p className="text-foreground font-semibold mb-1">Our vision is simple:</p>
                <p className="text-muted-foreground">
                  Build software that delivers real value, improves efficiency, and supports business growth at every stage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {leadershipHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A business-first development approach ensuring your software is
              easy to use, secure, and future-ready.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {developmentProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative p-6 rounded-2xl bg-card border border-border group hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <h4 className="font-display font-bold text-lg text-foreground mb-2">
                    {item.step}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Industries</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Sectors We Serve
            </h2>
            <p className="text-muted-foreground">
              Industry-specific solutions designed with domain understanding and compliance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-background border border-border text-center group hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`w-14 h-14 rounded-xl ${industry.color} flex items-center justify-center mx-auto mb-4`}>
                  <industry.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{industry.label}</h4>
                <p className="text-xs text-muted-foreground">{industry.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-border group hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-display font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center text-lg text-muted-foreground mt-10 max-w-xl mx-auto"
          >
            Good software should{" "}
            <span className="text-foreground font-semibold">
              simplify your business, not complicate it
            </span>.
          </motion.p>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Commitment
            </h2>
            <p className="text-muted-foreground mb-10">
              At CodingHunters, we are committed to delivering excellence in every project.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-5 rounded-xl bg-background border border-border"
                >
                  <item.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                  <p className="text-foreground font-medium text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 text-muted-foreground italic text-lg">
              "Your success is directly connected to ours — and we take that seriously."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/30 rounded-full blur-3xl" />
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
              Let's Build Something{" "}
              <span className="text-accent">Powerful</span>
            </h2>
            <p className="text-background/70 text-lg mb-10">
              Looking for a reliable software development partner that understands
              business needs and delivers real results? We're here to help.
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
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;