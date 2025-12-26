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
              🔐 Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Effective Date: 30/1/2023
            </p>
            <p className="text-base text-muted-foreground mt-2">
              CodingHunters respects your privacy and is committed to protecting
              the personal and business information you share with us.
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
            <div className="p-8 rounded-2xl bg-background border border-border space-y-8">
              <h2 className="font-display text-2xl font-bold text-foreground">
                1. Information We Collect
              </h2>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Project requirements or inquiries</li>
                </ul>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  Technical Information
                </h3>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited on our website</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground mb-3">
                  We use collected information to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Respond to inquiries and consultation requests</li>
                  <li>Provide software development services</li>
                  <li>Improve website performance and user experience</li>
                  <li>Communicate project updates and support information</li>
                  <li>Maintain internal records</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  3. Data Protection & Security
                </h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  We implement reasonable technical and organizational measures
                  to protect your data against unauthorized access, alteration,
                  or disclosure.
                </p>
                <p className="text-muted-foreground mb-3">
                  Special care is taken when handling:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Healthcare-related data</li>
                  <li>Financial and business-sensitive information</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  However, no method of online transmission is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  4. Data Sharing & Disclosure
                </h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  CodingHunters does not sell, rent, or trade your personal
                  information.
                </p>
                <p className="text-muted-foreground mb-3">
                  Data may be shared only when:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Required by law or legal authorities</li>
                  <li>
                    Necessary to deliver services (with trusted partners under
                    confidentiality)
                  </li>
                  <li>Explicit permission is provided by you</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  5. Cookies & Tracking
                </h2>
                <p className="text-muted-foreground mb-3">
                  Our website may use cookies to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Enhance user experience</li>
                  <li>Analyze website traffic</li>
                  <li>Improve performance</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  You may disable cookies in your browser settings if preferred.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  6. Third-Party Links
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites.
                  CodingHunters is not responsible for the privacy practices or
                  content of external sites.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground mb-3">
                  We retain personal information only as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Fulfill business purposes</li>
                  <li>Meet legal or contractual obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  8. Your Rights
                </h2>
                <p className="text-muted-foreground mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-3 space-y-2">
                  <li>Request access to your data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Requests can be made via our contact details.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  CodingHunters reserves the right to update this Privacy Policy
                  at any time. Updates will be posted on this page.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  10. Contact Information
                </h2>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  For privacy-related concerns, contact us at:
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    📧 Email:{" "}
                    <a
                      href="mailto:huntersthecode@gmail.com"
                      className="text-primary hover:underline"
                    >
                      huntersthecode@gmail.com
                    </a>
                  </p>
                  <p>📞 Contact: 9106433706</p>
                  <p>📍 Location: India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;