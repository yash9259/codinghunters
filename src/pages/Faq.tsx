import Layout from "@/components/layout/Layout";
import FaqList from "@/components/seo/FaqList";
import { FAQ_GROUPS } from "@/seo/siteData";

const Faq = () => (
  <Layout>
    <section className="pt-32 pb-16 bg-background">
      <div className="container-custom max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
          Software Development FAQ: Bhuj, Gujarat & India
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          Straight answers about hiring CodingHunters, a custom software development company based in Bhuj, Kutch,
          Gujarat, serving clients across India.
        </p>
        <div className="space-y-12">
          {FAQ_GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">{g.title}</h2>
              <FaqList items={g.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Faq;
