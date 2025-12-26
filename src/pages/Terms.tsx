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
              Effective Date: 30/1/2023
            </p>
            <p className="text-base text-muted-foreground mt-2">
              These Terms & Conditions govern the use of the CodingHunters
              website and services. By accessing our website or engaging our
              services, you agree to these terms.
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
            <div className="p-8 rounded-2xl bg-background border border-border space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  1. Services
                </h2>
                <p className="text-muted-foreground mb-3">CodingHunters provides:</p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Custom software development</li>
                  <li>Web & mobile application development</li>
                  <li>ERP, healthcare, and finance software solutions</li>
                  <li>UI/UX design and software maintenance</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Service scope, timeline, and pricing are defined in written
                  agreements or proposals.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. Project Engagement & Payments
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Payments are milestone-based or as agreed in writing</li>
                  <li>
                    Advance payment may be required before project initiation
                  </li>
                  <li>
                    Delays in payment may result in project pause or delivery
                    delay
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Intellectual Property
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Source code ownership is defined per project agreement</li>
                  <li>
                    Unless agreed otherwise, CodingHunters retains rights to
                    reusable components, libraries, and frameworks
                  </li>
                  <li>
                    Clients retain ownership of paid-for custom modules upon
                    full payment
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Client Responsibilities
                </h2>
                <p className="text-muted-foreground mb-3">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Providing accurate requirements and content</li>
                  <li>Timely feedback and approvals</li>
                  <li>Ensuring legality of provided data and materials</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Delays caused by the client may affect timelines.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Confidentiality
                </h2>
                <p className="text-muted-foreground mb-3">
                  Both parties agree to maintain confidentiality of:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Business information</li>
                  <li>Technical data</li>
                  <li>Project details</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Confidential information shall not be disclosed without
                  consent.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Support & Maintenance
                </h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Support duration is defined per agreement</li>
                  <li>Free support (if any) is limited to bug fixes</li>
                  <li>New features or changes are billed separately</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-3">
                  CodingHunters shall not be liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Business losses or indirect damages</li>
                  <li>Third-party service failures</li>
                  <li>Data loss caused by external factors beyond control</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Maximum liability is limited to the project amount paid.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Termination
                </h2>
                <p className="text-muted-foreground mb-3">
                  Either party may terminate the agreement with written notice
                  if:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Terms are breached</li>
                  <li>Payments are not made</li>
                  <li>Project scope is violated</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Completed work up to termination must be paid for.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of India. Any disputes
                  shall be subject to Indian jurisdiction.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  10. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  CodingHunters may update these Terms & Conditions at any time.
                  Continued use of services implies acceptance of updated terms.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;