import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. This policy outlines how we
              handle your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto prose prose-slate"
          >
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Data Protection
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We ensure complete confidentiality of client data, healthcare
                records, and financial information. Your data is never shared
                with third parties.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Information We Collect
              </h3>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Contact information (name, email, phone)</li>
                <li>Project requirements and specifications</li>
                <li>Communication records</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                How We Use Your Information
              </h3>
              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>To provide and improve our services</li>
                <li>To communicate about your project</li>
                <li>To send relevant updates and information</li>
              </ul>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Security Measures
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We implement industry-standard security measures to protect your
                data. For healthcare and financial projects, we follow
                HIPAA-style data security approaches and ensure role-based
                access controls.
              </p>

              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Contact Us
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our privacy practices, please
                contact us at{" "}
                <a
                  href="mailto:info@codinghunters.com"
                  className="text-primary hover:underline"
                >
                  info@codinghunters.com
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;