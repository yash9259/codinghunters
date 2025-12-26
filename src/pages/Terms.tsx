import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
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
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Please read these terms carefully before engaging our services.
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
            className="max-w-3xl mx-auto"
          >
            <div className="p-8 rounded-2xl bg-background border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Service Agreement
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Project Scope
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Project scope is mutually agreed upon before development
                    begins. Any changes to the scope may affect timeline and
                    cost, which will be communicated clearly.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Payment Terms
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Payments are milestone-based as agreed in the project
                    proposal. We follow a transparent pricing model with no
                    hidden charges.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Support Period
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Support period is defined per project and included in the
                    proposal. Extended support can be arranged as needed.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Source Code Ownership
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Source code ownership is transferred to the client as agreed
                    in the project contract. You own the code we build for you.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Confidentiality
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict confidentiality regarding all client
                    information, business logic, and proprietary data. NDAs are
                    available upon request.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    Contact
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For any questions regarding these terms, please contact us
                    at{" "}
                    <a
                      href="mailto:info@codinghunters.com"
                      className="text-primary hover:underline"
                    >
                      info@codinghunters.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;