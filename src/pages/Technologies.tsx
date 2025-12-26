import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Node.js"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Mobile",
    items: ["Android (Java/Kotlin)"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Database",
    items: ["MySQL", "Firebase"],
    color: "from-amber-500 to-orange-500",
  },
  {
    category: "Other",
    items: ["Git", "REST APIs", "Payment Gateways"],
    color: "from-slate-500 to-slate-700",
  },
];

const Technologies = () => {
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
              Our <span className="text-gradient">Technologies</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We use modern, battle-tested technologies to build robust and
              scalable software solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-background border border-border card-hover"
              >
                <div
                  className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${tech.color} text-primary-foreground text-sm font-medium mb-4`}
                >
                  {tech.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-lg bg-muted text-foreground text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Technologies;