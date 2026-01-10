import Layout from "@/components/layout/Layout";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug || "");

  if (!post) {
    return (
      <Layout>
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-2xl p-6 rounded-2xl border border-border bg-card">
              <h1 className="text-2xl font-semibold text-foreground mb-3">Post not found</h1>
              <p className="text-muted-foreground mb-6">The blog post you are looking for does not exist or was removed.</p>
              <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to blog
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-32 pb-16 bg-background">
        <div className="container-custom max-w-3xl">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
            <span className="inline-flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-10">
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

          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary font-medium">
              <ArrowLeft className="w-4 h-4" /> Back to blog
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
