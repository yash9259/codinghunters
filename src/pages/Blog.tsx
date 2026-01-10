import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { getBlogPosts } from "@/data/blogPosts";
import { Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";

const Blog = () => {
  const posts = [...getBlogPosts()].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              Insights
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
              Bhuj-Focused Software Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Fresh content you can update anytime. Add a new post to the data file or register it programmatically and it appears instantly.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                  <span className="inline-flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-primary font-medium">
                  Read more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="p-6 rounded-xl border border-border bg-card text-muted-foreground">
              No posts yet. Use addBlogPost() to register new content and it will render here automatically.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
